// 40.网络运维导航栏
module.exports =  {
  text: '网络运维', link: '/tool/',
  items: [
    {
      text: 'CCNA',
      items: [
        { text: 'CCNA知识', link: '/pages/91ab17/' },
        { text: 'CCNA题库', link: '/pages/55766c/' },
        { text: 'Cisco NetAca', link: '/pages/f61749/' },
      ]
    },
    {text: 'Ansible', link: '/pages/4f0673/'},
    {
      text: '版本管理',
      items: [
        { text: 'Maven', link: '/maven/' },
        { text: 'Git', link: '/git/' }
      ]
    },
    {
      text: '部署',
      items: [
        { text: 'Linux', link: '/linux/' },
        { text: 'Docker', link: '/docker/' },
      ]
    },
  ]
}