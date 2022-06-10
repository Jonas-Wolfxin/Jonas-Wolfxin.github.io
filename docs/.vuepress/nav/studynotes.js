// 工具导航栏
module.exports = {
    text: 'Study Notes', link: '/tool/',
    items: [
        {
            text: '管理',
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