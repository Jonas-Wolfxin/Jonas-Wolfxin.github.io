// import LastReadingPopup from './components/LastReadingPopup.vue'
// let busuanzi;

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  /**
   * 百度 pv 统计，不使用的可以去掉或注释掉
   */
  // router.beforeEach((to, from, next) => {
  //   // 路由切换，触发百度的 pv 统计
  //   if (typeof _hmt != "undefined") {
  //     if (to.path) {
  //       _hmt.push(["_trackPageview", to.path]);
  //     }
  //   }
  //   next();
  // })
  /**
   * 私密文章验证
   */
  if (!isServer) {
    // 如果开启了私密文章验证
    if (
      siteData.themeConfig.privatePage &&
      siteData.themeConfig.privatePage.openPrivate
    ) {
      router.beforeEach((to, from, next) => {
        try {
          let {
            username,
            password,
            loginPath,
            loginKey,
            loginSession,
            loginInfo,
            firstLogin,
            firstLoginKey,
          } = siteData.themeConfig.privatePage;
          !loginKey && (loginKey = "vdoing_manager"); // 默认为 vdoing_manager
          !firstLoginKey && (firstLoginKey = "vdoing_first_login"); // 默认为 vdoing_first_login
          // 网站关闭或者刷新后，清除登录状态
          if (loginSession) {
            window.addEventListener("unload", function () {
              localStorage.removeItem(loginKey);
              localStorage.removeItem(firstLoginKey);
            });
          }
          // 如果是登录页面，不需要验证
          if (loginPath == to.path || !loginPath) {
            throw new Error("无需验证");
          }
          // 尝试获取管理员曾经登录的用户信息
          let globalInfo = JSON.parse(localStorage.getItem(loginKey));
          // 管理员用户名密码验证
          if (
            globalInfo &&
            globalInfo.username == username &&
            globalInfo.password == password
          ) {
            // 存在曾经登录信息，如果登录状态过期
            if (new Date() - globalInfo.time > globalInfo.expire) {
              localStorage.removeItem(loginKey);
            } else {
              throw new Error("管理员验证成功！");
            }
          }
          // 整个网站进入前需要验证
          let isAgainLogin = true;
          if (parseInt(firstLogin) == 1 || parseInt(firstLogin) == 2) {
            parseInt(firstLogin) == 2 && (isAgainLogin = false);
            // 尝试获取第一次访问网站曾经登录的用户信息
            let firstLoginInfo = JSON.parse(
              localStorage.getItem(firstLoginKey)
            );
            !firstLoginInfo && jumpToLogin(loginPath, to.path, "first");
            if (firstLoginInfo) {
              // 先判断 loginInfo 是否存在，然后判断 loginInfo 是否对象，最后判断 loginInfo 是否有 firstLoginKey
              if (loginInfo && loginInfo.hasOwnProperty(firstLoginKey)) {
                // 进行 loginInfo 验证
                checkLoginInfo(loginInfo[firstLoginKey], firstLoginInfo) &&
                  jumpToLogin(loginPath, to.path, "first");
              } else {
                jumpToLogin(loginPath, to.path, "first");
              }
            }
          }
          if (to.path == "/") {
            throw new Error("首页不需要验证！");
          }
          // 如果 firstLogin 不等于 2
          if (isAgainLogin) {
            siteData.pages.forEach((item) => {
              // 找出带有 private 的文章
              if (item.path == to.path) {
                if (
                  item.frontmatter.private &&
                  item.frontmatter.private == true
                ) {
                  // 网站关闭或者刷新后，清除登录状态
                  if (loginSession) {
                    window.addEventListener("unload", function () {
                      localStorage.removeItem(item.frontmatter.permalink);
                    });
                  }
                  // 尝试获取该私密文章曾经登录的用户信息
                  let singleInfo = JSON.parse(
                    localStorage.getItem(item.frontmatter.permalink)
                  );
                  // 都不存在登录信息
                  !singleInfo &&
                    jumpToLogin(
                      loginPath,
                      to.path,
                      item.frontmatter.loginInfo ||
                        item.frontmatter.username ||
                        item.frontmatter.password ||
                        item.frontmatter.expire
                        ? "single"
                        : "all"
                    );

                  // 单个文章私密验证
                  if (
                    (item.frontmatter.username && item.frontmatter.password) ||
                    item.frontmatter.loginInfo
                  ) {
                    // 不存在登录信息，则跳转到登录页面
                    !singleInfo && jumpToLogin(loginPath, to.path, "single");
                    // 存在曾经登录信息，如果登录状态过期
                    if (new Date() - singleInfo.time > singleInfo.expire) {
                      localStorage.removeItem(item.frontmatter.permalink);
                      jumpToLogin(loginPath, to.path, "single");
                    }
                    // 是否需要登录
                    let isLogin = true;
                    // 对 loginInfo 进行验证
                    if (Array.isArray(item.frontmatter.loginInfo)) {
                      isLogin = checkLoginInfo(
                        item.frontmatter.loginInfo,
                        singleInfo
                      );
                    }
                    // 如果 loginInfo 不存在，则进行单文章的用户名密码验证
                    if (
                      isLogin &&
                      singleInfo.username !== item.frontmatter.username &&
                      singleInfo.password !== item.frontmatter.password
                    ) {
                      jumpToLogin(loginPath, to.path, "single");
                    }
                  } else {
                    // 全局私密验证
                    let isLogin = true;
                    // 先判断 loginInfo 是否存在，然后判断 loginInfo 是否对象，最后判断 loginInfo 是否有该文章的 permalink
                    if (loginInfo && loginInfo.hasOwnProperty(to.path)) {
                      isLogin = checkLoginInfo(loginInfo[to.path], singleInfo);
                    }
                    // 如果 loginInfo 验证失败
                    isLogin && jumpToLogin(loginPath, to.path, "all");
                  }
                }
              }
            });
          }
        } catch (e) {}
        next();
      });
    }
  }
  /**
   * 检查 loginInfo 里的用户名和密码，userInfo 为曾经登录的信息
   * 匹配成功返回 false，失败返回 true
   */
  function checkLoginInfo(loginInfo, userInfo) {
    try {
      loginInfo.forEach((info) => {
        if (
          userInfo.username == info.username &&
          userInfo.password == info.password
        ) {
          // 利用异常机制跳出 forEach 循环，break、return、continue 不会起作用
          throw new Error();
        }
      });
    } catch (error) {
      return false;
    }
    return true;
  }
  /**
   * 跳转到登录页面
   * loginPath：登录页面的 permalink
   * toPath：当前页面的 permalink，verifyMode：验证方式
   */
  function jumpToLogin(loginPath, toPath, verifyMode) {
    router.push({
      path: loginPath,
      query: {
        toPath: toPath,
        verifyMode: verifyMode, // 单个文章验证（single）或全局验证（all）或网站验证（first）
      },
    });
    throw new Error("请先登录！");
  }

  /**
   * 记录最后一次阅读位置模块，方便下次直接跳转
   * 目前不使用该插件
   */
  // 判断是否绑定时间是否绑定成功
  // let isMounted = false;
  // // 最后一次阅读位置跳转
  // Vue.component(LastReadingPopup.name, LastReadingPopup);
  // Vue.mixin({
  //   // 有多少个 Vue 组件（md 文档），就执行多少次 mounted()，所以利用 if 判断只允许执行一次
  //   mounted() {
  //     if (!isMounted) {
  //       window.addEventListener('unload', this.saveLastReading);  // 卸载窗口前，将数据存储，方便下次可以直接跳转位置
  //       isMounted = true;
  //     }
  //   },
  //   methods: {
  //     saveLastReading() {
  //       localStorage.setItem('lastReading', JSON.stringify({
  //         path: this.$route.path,
  //         scrollTop: document.documentElement.scrollTop,
  //         timestamp: new Date().getTime(),
  //       }))
  //     }
  //   }
  // });

  // /**
  //  * 站点和文章页信息模块
  //  * 下面的代码重构迁移到 components/PageInfo 下，所以不再使用
  //  */
  //   if (!isServer) {
  //     router.beforeEach((to, from, next) => {
  //       next();
  //       if (to.path !== '/' && to.path !== from.path && siteData.themeConfig.blogInfo) {  // 如果页面是非首页，# 号也会触发路由变化，这里已经排除掉
  //         // 刷新页面或进入新的页面后，如果原来位置的内容还存在，则删除掉，最后重新插入渲染
  //         removeElement('.page-view-js');
  //         removeElement('.page-view');
  //         removeElement('.book-words');
  //         removeElement('.reading-time');
  //         siteData.pages.forEach((itemPage) => {
  //           if (itemPage.path == to.path) {
  //             if (itemPage.frontmatter.article == undefined || itemPage.frontmatter.article) {  // 排除掉 article 为 false 的文章
  //               const { eachFileWords, pageView, pageIteration, readingTime } = siteData.themeConfig.blogInfo;
  //               // 下面两个 if 可以调换位置，从而让文章的浏览量和字数内容交换
  //               if (eachFileWords) {
  //                 eachFileWords.forEach((itemFile) => {
  //                   if (itemFile.permalink == itemPage.frontmatter.permalink) {
  //                     addPageWordsCount(itemFile.wordsCount);
  //                     if (readingTime || readingTime == undefined) {
  //                       addReadTimeCount(itemFile.readingTime);
  //                     }
  //                   }
  //                 });
  //               }
  //               if (pageView || pageView == undefined) {
  //                 addPageView();
  //                 // 挂载成功需要一点时间
  //                 setTimeout(() => {
  //                   getPageViewCouter(pageIteration);
  //                 }, 1500);
  //               }

  //               return;
  //             }
  //           }
  //         })
  //       }
  //     })
  //     // 目前用不到
  //     router.afterEach((to, from) => {
  //       if (from.path === '/' && from.matched && from.matched.length === 0) {    // 如果页面是刷新或者第一次进入
  //       }
  //     })
  //   }
  // }
  // /**
  //  * 如果元素存在，则删除
  //  */
  // function removeElement(selector) {
  //   var element = document.querySelector(selector);
  //   if (element) {
  //     element.parentNode.removeChild(element);
  //   }
  // }

  // /**
  //  * 文章页的访问量
  //  */
  // function getPageViewCouter(iterationTime = 3000) {
  //   if (busuanzi) {
  //     busuanzi.fetch();
  //   } else {
  //     busuanzi = require("busuanzi.pure.js");
  //   }
  //   var i = 0;
  //   var defaultCouter = '9999';
  //   // 如果 require 没有获取成功，则手动获取
  //   // 但是容易产生访问量叠加，如果只需要第一次获取数据（可能获取失败），可注释掉，此内容是第一次获取失败后，重新获取访问量，可能导致访问量再次 + 1
  //   // 取决于访问人的网络，以及 setTimeout 的时间（需求调节）
  //   setTimeout(() => {
  //     let interval = setInterval(() => {
  //       const pageView = document.querySelector('.view-data');
  //       if (pageView) {
  //         i += iterationTime;
  //         if (i > iterationTime * 10) {
  //           pageView.innerText = defaultCouter;
  //           clearInterval(interval);  // 10 秒后无法获取，则取消获取
  //         }
  //         if (pageView.innerText == "") {
  //           // 手动获取访问量
  //           busuanzi.fetch();
  //         } else {
  //           clearInterval(interval);
  //         }
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, iterationTime);
  //   }, iterationTime);
  // }
  // /**
  //  * 添加浏览量元素
  //  */
  // function addPageView() {
  //   // 创建访问量的元素
  //   let template = document.createElement('div');
  //   template.title = '浏览量';
  //   template.className = 'page-view iconfont icon-view';
  //   template.style.float = 'left';
  //   template.style.marginLeft = '20px';
  //   template.style.fontSize = '0.8rem';
  //   // template.innerHTML = '<span id="busuanzi_container_page_pv" style="display: none; margin-left: 3px"><a style="color: #888" href="javascript:;" id="busuanzi_value_page_pv" class="view-data"></a></span>';
  //   template.innerHTML = '<a style="color: #888; margin-left: 3px" href="javascript:;" id="busuanzi_value_page_pv" class="view-data"><i title="正在获取..." class="loading iconfont icon-loading"></i></a>';
  //   mountedView(template);
  //   // 添加 loading 效果
  //   let style = document.createElement("style");
  //   style.innerHTML = `@keyframes turn {
  //     0% {
  //       transform: rotate(0deg);
  //     }
  //     100% {
  //       transform: rotate(360deg);
  //     }
  //   }
  //   .loading {
  //     display: inline-block;
  //     animation: turn 1s linear infinite;
  //     -webkit-animation: turn 1s linear infinite;
  //   }`;
  //   document.head.appendChild(style);
  // }
  // /**
  //  * 添加当前文章页的字数元素
  //  */
  // function addPageWordsCount(wordsCount) {
  //   if (wordsCount) {
  //     let template = document.createElement('div');
  //     template.title = '文章字数';
  //     template.className = 'book-words iconfont icon-book';
  //     template.style.float = 'left';
  //     template.style.marginLeft = '20px';
  //     template.style.fontSize = '0.8rem';

  //     template.innerHTML = `<a href="javascript:;" style="margin-left: 3px; color: #888">${wordsCount}</a>`;
  //     mountedView(template);
  //   }
  // }

  // /**
  //  * 添加预计的阅读时间
  //  */
  // function addReadTimeCount(readTimeCount) {
  //   let template = document.createElement('div');
  //   template.title = '预阅读时长';
  //   template.className = 'reading-time iconfont icon-shijian';
  //   template.style.float = 'left';
  //   template.style.marginLeft = '20px';
  //   template.style.fontSize = '0.8rem';
  //   template.innerHTML = `<a href="javascript:;" style="margin-left: 3px; color: #888">${readTimeCount}</a>`;
  //   mountedView(template);
  // }

  // /**
  //  * 挂载目标到页面上
  //  */
  // function mountedView(template, moutedParentEvent = '.articleInfo-wrap > .articleInfo > .info') {
  //   var i = 0;
  //   let interval = setInterval(() => {
  //     i++;
  //     const parentElement = document.querySelector(moutedParentEvent);
  //     if (parentElement) {
  //       if (!isMountedView(template, parentElement)) {
  //         parentElement.appendChild(template);
  //         clearInterval(interval);
  //       }
  //     } else if (i > 1 * 10) {  // 10 秒后清除
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }
  // /**
  //  * 目标是否已经挂载在页面上
  //  */
  // function isMountedView(element, parentElement) {
  //   if (element.parentNode == parentElement) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};
