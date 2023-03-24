// 数据库导航栏
module.exports = {
  text: 'Database', link: '/database/',
  items: [
    {
      text: 'SQL 数据库',
      items: [
        { text: 'MySQL', link: '/mysql/' },
        { text: 'PostgreSQL', link: '/postgresql/' },
      ]
    },
    {
      text: 'NoSQL 数据库',
      items: [
        { text: 'Redis', link: '/redis/' },
        { text: 'ElasticSearch', link: '/es/' },
        { text: 'MongoDB', link: '/mongodb/' },
      ]
    },
  ]
}