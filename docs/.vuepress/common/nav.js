// nav
const frontEnd = require("../nav/frontEnd");
const databaseNav = require("../nav/databaseNav");
const toolNav = require("../nav/toolNav");
const indexNav = require("../nav/indexNav");
const moreNav = require("../nav/moreNav");

module.exports = [
  {
    text: '首页', link: '/'   // 对应着 docs\index.md
  },
  {
    text: '导航站', link: '/navigation/'   // 对应着 docs\01.导航站.md
  },
  frontEnd,  // 前端导航
  databaseNav,  // 数据库导航
  toolNav,  // 工具导航
  moreNav,   // 更多导航
  indexNav,   //索引导航
  {
    text: '留言区', link: '/message-area/'
  },
]
