// nav 导航栏
const frontEnd = require("../nav/frontEnd");
const databaseNav = require("../nav/databaseNav");
const pythonNav = require("../nav/pythonNav");
const toolNav = require("../nav/toolNav");
const indexNav = require("../nav/indexNav");
const inGermany = require("../nav/inGermany");

module.exports = [
  {
    text: 'Home🏠', link: '/'   // 对应着 docs\index.md
  },
  {
    text: 'Navigation🧭', link: '/navigation/'   // 对应着 docs\01.导航站.md
  },
  frontEnd,  // 前端导航
  databaseNav,  // 数据库导航
  pythonNav,   // Python 学习
  toolNav,  // 工具导航
  indexNav,   //索引导航
  inGermany,
  {
    text: 'MessageBoard📋', link: '/message-board/'
  },
]
