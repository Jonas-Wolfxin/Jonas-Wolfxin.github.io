// nav
const frontEnd = require("../nav/frontEnd");
const databaseNav = require("../nav/databaseNav");
const pythonNav = require("../nav/pythonNav");
const toolNav = require("../nav/toolNav");
const indexNav = require("../nav/indexNav");

module.exports = [
  {
    text: '首页', link: '/'   // 对应着 docs\index.md
  },
  {
    text: '导航站', link: '/navigation/'   // 对应着 docs\01.导航站.md
  },
  frontEnd,  // 前端导航
  databaseNav,  // 数据库导航
  pythonNav,   // Python 学习
  toolNav,  // 工具导航
  indexNav,   //索引导航
  {
    text: '留言区', link: '/message-area/'
  },
]
