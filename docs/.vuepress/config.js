module.exports = {
    title: 'Lowsky\'s blog',
    description: '',
    // base: '/vblog/', // 本地要注释, 打包必须配置, 还有在node_modules/@vuepress/core/lib/client/app.js这个文件注释掉mode: 'history',
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
        lastUpdated: 'Last Updated', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/lowskylee/vblog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/lowskylee/vblog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: 'Edit this page',

        // 导航栏
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'Java',
                items: [
                    { text: 'Java 基础', link: '/java/basic/java-basic-oop' },
                    { text: 'Java 集合框架', link: '/java/collection/java-collection-all' }
                ]
            },
            { 
                text: '算法',
                items: [
                    { text: '算法基础和思想', link: '/algorithm/' },
                ]
            },
            { 
                text: '数据库',
                items: [
                    { text: '数据库基础和原理', link: '/sql/' },
                ]
            },
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
            }
        ],

        // 侧边栏
        sidebar: {
            '/java/': [
                {
                    title: "Java 基础",
                    // path: '/',
                    sidebarDepth: 2,
                    collapsable: false, //不折叠
                    children: [
                        { title: "Java 基础 - 面向对象", path: "/java/basic/java-basic-oop" },
                        { title: "Java 基础 - 知识点", path: "/java/basic/java-basic-lan-basic" },
                        { title: "Java 基础 - 图谱 & Q/A", path: "/java/basic/java-basic-lan-sum" },
                        { title: "JJava 基础 - 泛型机制详解", path: "/java/basic/java-basic-x-generic" },
                        { title: "Java 基础 - 注解机制详解", path: "/java/basic/java-basic-x-annotation" },
                        { title: "Java 基础 - 异常机制详解", path: "/java/basic/java-basic-x-exception" },
                        { title: "Java 基础 - 反射机制详解", path: "/java/basic/java-basic-x-reflection" },
                        { title: "Java常用机制 - SPI机制详解", path: "/java/basic/java-advanced-spi" }
                    ],
                },
                {
                    title: 'Java 集合框架',
                    // path: '/',
                    sidebarDepth: 2,
                    collapsable: false, // 不折叠
                    children: [
                        { title: "Collection 类关系图", path: "/java/collection/java-collection-all" }
                    ]
                }
            ],

            '/algorithm/': [
                {
                    title: '算法基础和思想',
                    path: '/',
                    sidebarDepth: 2,
                    collapsable: false, // 不折叠
                    children: [
                        { title: "算法结构基础", path: "/algorithm/" }
                    ]
                }
            ],

            '/sql/': [
                {
                    title: '数据库基础和原理',
                    path: '/',
                    sidebarDepth: 2,
                    collapsable: false, // 不折叠
                    children: [
                        { title: "数据库原理", path: "/sql/" }
                    ]
                }
            ],


            // fallback
            '/': [
                {
                    title: '欢迎学习',
                    // path: '/',
                    sidebarDepth: 2,
                    collapsable: false, // 不折叠
                    children: [
                        { title: "介绍", path: "/" },
                        { title: "关于", path: "/about" }
                    ]
                }
            ]
        }
    }
}