(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{831:function(n,t,s){"use strict";s.r(t);var a=s(14),e=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[n._v("笔记")]),n._v(" "),s("p",[n._v("首页的下载站点是基于 Nginx 提供的，但是 Nginx 自带的下载站点不是特别好看，比较「拥挤」，所以本内容介绍我的下载站点如何优化。")]),n._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[n._v("2021-12-14 @Jonas Wolfxin")])])]),n._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#介绍"}},[n._v("介绍")])]),s("li",[s("a",{attrs:{href:"#第三方模块"}},[n._v("第三方模块")])])])]),s("p"),n._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[n._v("#")]),n._v(" 介绍")]),n._v(" "),s("p",[n._v("如果还不懂什么是下载站点，请看我的下载站点："),s("a",{attrs:{href:"https://www.youngkbt.cn/download/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.youngkbt.cn/download/"),s("OutboundLink")],1),n._v("。")]),n._v(" "),s("p",[n._v("看了我的下载站点，你会发现和 Nginx 自带的样式有些不一样，嗯？Nginx 自带的下载站点长啥样？请看 "),s("RouterLink",{attrs:{to:"/nginx/site-auth/"}},[n._v("Nginx - 站点与认证")]),n._v("。")],1),n._v(" "),s("p",[n._v("下载站点，就是能够下载东西的网页。其实设计并没有多难，利用第三方模块，就可以实现上方效果。")]),n._v(" "),s("p",[s("strong",[n._v("本下载站点基于 Nginx 搭建的，没有 Nginx 的支持，本下载站点将会无效。")])]),n._v(" "),s("h2",{attrs:{id:"第三方模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方模块"}},[n._v("#")]),n._v(" 第三方模块")]),n._v(" "),s("p",[n._v("首先需要实现 Nginx 自带的下载站点，了解这个后方能利用第三方模块进行美化，如果你不了解什么是模块，就认为这叫做插件。")]),n._v(" "),s("p",[n._v("我使用的是 "),s("code",[n._v("ngx-fancyindex")]),n._v(" 模块，这里提供下载地址：")]),n._v(" "),s("ul",[s("li",[s("p",[n._v("GitHub 地址："),s("a",{attrs:{href:"https://github.com/aperezdc/ngx-fancyindex",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/aperezdc/ngx-fancyindex"),s("OutboundLink")],1)])]),n._v(" "),s("li",[s("p",[n._v("版本选择地址："),s("a",{attrs:{href:"https://github.com/aperezdc/ngx-fancyindex/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/aperezdc/ngx-fancyindex/releases"),s("OutboundLink")],1)])]),n._v(" "),s("li",[s("p",[n._v("完整版下载地址："),s("a",{attrs:{href:"https://github.com/aperezdc/ngx-fancyindex/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/aperezdc/ngx-fancyindex/archive/master.zip"),s("OutboundLink")],1)])]),n._v(" "),s("li",[s("p",[n._v("我的下载站点下载地址："),s("a",{attrs:{href:"https://www.youngkbt.cn/download/dark/%E7%BD%91%E7%AB%99%E6%BA%90%E7%A0%81/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.youngkbt.cn/download/dark/网站源码/"),s("OutboundLink")],1),n._v("，找到 "),s("code",[n._v("ngx-fancyindex-0.5.2.tar.xz")]),n._v(" 进行下载")])])]),n._v(" "),s("p",[n._v("下载后，放到服务器的某个路径下，然后需要重新编译安装 Nginx，也就是说，你要备份好你之前的配置文件、静态页面目录、日志文件目录。")]),n._v(" "),s("p",[n._v("如果你试过 Nginx 的源码安装，那么一定不陌生 "),s("code",[n._v("./configure")]),n._v(" 来编译，如果不知道如何安装，请看 "),s("RouterLink",{attrs:{to:"/nginx/install/#源码复杂安装"}},[n._v("Nginx - 环境准备")]),n._v("。")],1),n._v(" "),s("p",[n._v("进入 Nginx 的源码目录，然后执行下方命令：")]),n._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[n._v("./configure "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(" --add-module"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v("/ngx-fancyindex/\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&&")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("其中 "),s("code",[n._v("......")]),n._v(" 是其他的模块（插件），"),s("code",[n._v("../")]),n._v(" 代表上一级目录，如果你放的路径没有与 Nginx 的源码处于一个目录，则根据你的路径进行修改。")]),n._v(" "),s("p",[n._v("进入 Nginx 配置文件配置如下内容：")]),n._v(" "),s("div",{staticClass:"language-nginx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("location")]),n._v(" /download")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("root")]),n._v(" /usr/local/openresty/nginx/html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 指定目录所在路径")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("fancyindex")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[n._v("on")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 使用fancyindex")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("fancyindex_exact_size")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[n._v("off")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 不显示精确大小")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("root 指定存放软件的目录，我的是在 "),s("code",[n._v("/usr/local/openresty/nginx/html")]),n._v(" 目录里，该目录就是访问我的下载站点看到的根目录")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/%E5%85%B3%E4%BA%8E%E9%A6%96%E9%A1%B5/Nginx/20211214221005.png",alt:"image-20211214221004354"}})]),n._v(" "),s("p",[n._v("此时访问 "),s("code",[n._v("/download")]),n._v("，就看看到如下效果")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/%E5%85%B3%E4%BA%8E%E9%A6%96%E9%A1%B5/Nginx/20211214221035.png",alt:"image-20211214221033543"}})]),n._v(" "),s("p",[n._v("此时已经实现了这个第三方模块带来的效果。")]),n._v(" "),s("p",[n._v("当然，你会发现这个页面仅仅是我下载站点的红系主题，因为我使用了主题 "),s("code",[n._v("Nginx-Fancyindex-Theme")]),n._v("，这个主题有两种模式，分别为亮系主题和暗系主题，加上红系主题就是三个主题。")]),n._v(" "),s("p",[n._v("下载地址："),s("a",{attrs:{href:"https://github.com/lanffy/Nginx-Fancyindex-Theme/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/lanffy/Nginx-Fancyindex-Theme/"),s("OutboundLink")],1)]),n._v(" "),s("p",[n._v("不知道如何下载？使用 "),s("code",[n._v("git clone")]),n._v(" 指令：")]),n._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" clone https://github.com/lanffy/Nginx-Fancyindex-Theme/\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("下载后，放在 Nginx 的静态页面 html 目录里")]),n._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[n._v("mv")]),n._v(" /opt/Nginx-Fancyindex-Theme /usr/local/nginx/html/\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("然后在原来的配置文件修改内容：")]),n._v(" "),s("div",{staticClass:"language-nginx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("location")]),n._v(" /download")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("root")]),n._v(" /usr/local/openresty/nginx/html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 指定目录所在路径")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("include")]),n._v(" /usr/local/nginx/html//Nginx-Fancyindex-Theme/fancyindex.conf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 主题的配置文件")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br")])]),s("p",[n._v("引用 "),s("code",[n._v("Nginx-Fancyindex-Theme")]),n._v(" 里的 "),s("code",[n._v("fancyindex.conf")]),n._v(" 配置文件即可实现亮系主题，如果你不喜欢放在 Nginx 的静态页面 html 目录里，那么上方内容也要修改成主题配置文件的路径。")]),n._v(" "),s("p",[n._v("如果想要暗系主题，则修改 "),s("code",[n._v("fancyindex.conf")]),n._v(" 的内容，注释掉亮系主题的引入（"),s("code",[n._v("fancyindex_header")]),n._v(" 和 "),s("code",[n._v("fancyindex_footer")]),n._v("），加入暗系主题的引用（"),s("code",[n._v("fancyindex_header")]),n._v(" 和 "),s("code",[n._v("fancyindex_footer")]),n._v("）。")]),n._v(" "),s("p",[n._v("此时主题已经完全实现，但是你会发现我的下载站点有些不一样，因为我稍微修改了一些内容：")]),n._v(" "),s("ul",[s("li",[s("p",[n._v("三个主题的可切换")])]),n._v(" "),s("li",[s("p",[n._v("修改 "),s("code",[n._v("File Name")]),n._v("、"),s("code",[n._v("File Size")]),n._v("、"),s("code",[n._v("Date")])])]),n._v(" "),s("li",[s("p",[n._v("修改 "),s("code",[n._v("Date")]),n._v(" 的月份英文为中文")])]),n._v(" "),s("li",[s("p",[n._v("颜色突出，字体修改")])])]),n._v(" "),s("p",[n._v("如果你喜欢我的下载站点，这里提供我的源码地址："),s("a",{attrs:{href:"https://www.youngkbt.cn/download/dark/%E7%BD%91%E7%AB%99%E6%BA%90%E7%A0%81/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.youngkbt.cn/download/dark/网站源码/"),s("OutboundLink")],1),n._v("，找到 "),s("code",[n._v("myNginx-Theme.tar.gz")]),n._v(" 进行下载。")]),n._v(" "),s("p",[n._v("下载后，解压到静态文件 html 目录下，然后在配置文件填入内容：")]),n._v(" "),s("div",{staticClass:"language-nginx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("location")]),n._v(" /download/light")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("alias")]),n._v("  /usr/local/openresty/nginx/html/download")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 以这些后缀的文件点击后为下载，注释掉则 txt 等文件是在网页打开并查看内容")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# if ($request_filename ~* ^.*?\\.(txt|doc|pdf|rar|gz|zip|docx|exe|xlsx|ppt|pptx|conf)$){")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#   add_header Content-Disposition 'attachment;';")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# }")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("include")]),n._v(" /usr/local/openresty/nginx/html/Nginx-Fancyindex-Theme/light.conf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("location")]),n._v(" /download/dark")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("alias")]),n._v("  /usr/local/openresty/nginx/html/download")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 以这些后缀的文件点击后为下载，注释掉则 txt 等文件是在网页打开并查看内容")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# if ($request_filename ~* ^.*?\\.(txt|doc|pdf|rar|gz|zip|docx|exe|xlsx|ppt|pptx|conf)$){")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#   add_header Content-Disposition 'attachment;';")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# }")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("include")]),n._v(" /usr/local/openresty/nginx/html/Nginx-Fancyindex-Theme/dark.conf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("location")]),n._v(" /download/red")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("alias")]),n._v("  /usr/local/openresty/nginx/html/download")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 以这些后缀的文件点击后为下载，注释掉则 txt 等文件是在网页打开并查看内容")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# if ($request_filename ~* ^.*?\\.(txt|doc|pdf|rar|gz|zip|docx|exe|xlsx|ppt|pptx|conf)$){")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#   add_header Content-Disposition 'attachment;';")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# }")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("include")]),n._v(" /usr/local/openresty/nginx/html/Nginx-Fancyindex-Theme/red.conf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br")])]),s("p",[n._v("如果你不喜欢放在 html 目录下，那么上方代码的 "),s("code",[n._v("include")]),n._v(" 也要改变成所在路径的配置文件。")])])}),[],!1,null,null,null);t.default=e.exports}}]);