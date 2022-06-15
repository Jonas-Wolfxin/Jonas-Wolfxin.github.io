// 索引导航
module.exports = {
  text: 'About', link: '/archives/',
  items: [
    { 
      text: 'This Blog',
      items: [
        { text: 'Categories', link: '/categories/' },
        { text: 'Tags', link: '/tags/' },
        { text: 'Archives', link: '/archives/' },
      ]
    },
    {
      text: 'About Me',
      items: [
        { text: 'Collection', link: '/whell/web/' },
        { text: 'Introduction', link: '/about/website/introduce/' },
      ]
    },
  ]
}



