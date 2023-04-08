module.exports = {
    title: 'Lowsky\'s blog',
    description: '',
    base: '/vblog/', // 在node_modules/@vuepress/core/lib/client/app.js这个文件注释掉mode: 'history',
    // base: './', // 本地配置
    head: [
        ['link', { rel: 'icon', href: '/Eminem.svg' }]
    ],
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        logo: '/Eminem.svg',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '开发必备',
                items: [
                    { text: '在线ASCII码表', link: 'https://www.fly63.com/tool/ascii/' },
                    { text: '正则表达式调试工具', link: 'https://regexr.com/' }
                ]
            },
            {
                text: '技术文档',
                items: [
                    { text: 'Git中文教程', link: 'https://git-scm.com/book/zh/v2' },
                    { text: 'Nginx中文文档', link: 'https://www.nginx.cn/doc/index.html' },
                    { text: 'Kafka中文文档', link: 'https://kafka.apachecn.org/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/lowskylee' }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                // path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "Java 基础",
                // path: '/md/java/basic/java-basic-oop',
                collapsable: true, //不折叠
                children: [
                    { title: "Java 基础 - 面向对象", path: "/md/java/basic/java-basic-oop" },
                    { title: "Java 基础 - 知识点", path: "/md/java/basic/java-basic-lan-basic" }
                ],
            }
        ]
    }
}