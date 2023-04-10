module.exports = {
    title: 'Lowsky\'s blog',
    description: '',
    base: '/vblog/', // 本地要注释, 打包必须配置, 还有在node_modules/@vuepress/core/lib/client/app.js这个文件注释掉mode: 'history',
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
        searchMaxSuggestions: 15,
        smoothScroll: true,
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
                    { text: 'Java 集合框架', link: '/java/collection/java-collection-all' },
                    { text: 'Java 多线程与并发', link: '/java/thread/java-thread-x-overview' }
                ]
            },
            { 
                text: '算法',
                items: [
                    { text: '算法基础思想', link: '/algorithm/basic/alg-basic-overview' },
                ]
            },
            { 
                text: '数据库',
                items: [
                    { text: '数据库基础和原理', link: '/sql/basic/sql-db' },
                ]
            },
            { 
                text: 'Spring',
                items: [
                    { text: 'Spring Framework 5基础', link: '/spring/basic/spring' },
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
                    // sidebarDepth: 2,
                    // collapsable: false, //不折叠
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
                    children: [
                        { title: "Collection 类关系图", path: "/java/collection/java-collection-all" },
                        { title: "Collection - ArrayList 源码解析", path: "/java/collection/java-collection-ArrayList" },
                        { title: "Collection - LinkedList源码解析", path: "/java/collection/java-collection-LinkedList" },
                        { title: "Collection - Stack & Queue 源码解析", path: "/java/collection/java-collection-Queue&Stack" },
                        { title: "Collection - PriorityQueue源码解析", path: "/java/collection/java-collection-PriorityQueue" },
                        { title: "Map - HashSet & HashMap 源码解析", path: "/java/collection/java-map-HashMap&HashSet" },
                        { title: "Map - LinkedHashSet&Map源码解析", path: "/java/collection/java-map-LinkedHashMap&LinkedHashSet" },
                        { title: "Map - TreeSet & TreeMap 源码解析", path: "/java/collection/java-map-TreeMap&TreeSet" },
                        { title: "Map - WeakHashMap源码解析", path: "/java/collection/java-map-WeakHashMap" },
                    ]
                },
                {
                    title: 'Java 多线程与并发',
                    children: [
                        { title: "Java并发知识体系详解", path: "/java/thread/java-thread-x-overview" },
                        { title: "Java 并发 - 理论基础", path: "/java/thread/java-thread-x-theorty" },
                        { title: "Java 并发 - 线程基础", path: "/java/thread/java-thread-x-thread-basic" },
                        { title: "Java并发 - Java中所有的锁", path: "/java/thread/java-thread-x-lock-all" },
                        { title: "关键字: synchronized详解", path: "/java/thread/java-thread-x-key-synchronized" },
                        { title: "关键字: volatile详解", path: "/java/thread/java-thread-x-key-volatile" },
                        { title: "关键字: final详解", path: "/java/thread/java-thread-x-key-final" },
                        { title: "JUC - 类汇总和学习指南", path: "/java/thread/java-thread-x-juc-overview" },
                        { title: "JUC原子类: CAS, Unsafe和原子类详解", path: "/java/thread/java-thread-x-juc-AtomicInteger" },
                        { title: "JUC锁: LockSupport详解", path: "/java/thread/java-thread-x-lock-LockSupport" },
                        { title: "JUC锁: 锁核心类AQS详解", path: "/java/thread/java-thread-x-lock-AbstractQueuedSynchronizer" },
                        { title: "JUC锁: ReentrantLock详解", path: "/java/thread/java-thread-x-lock-ReentrantLock" },
                        { title: "JUC锁: ReentrantReadWriteLock详解", path: "/java/thread/java-thread-x-lock-ReentrantReadWriteLock" },
                        { title: "JUC集合: ConcurrentHashMap详解", path: "/java/thread/java-thread-x-juc-collection-ConcurrentHashMap" },
                        { title: "JUC集合: CopyOnWriteArrayList详解", path: "/java/thread/java-thread-x-juc-collection-CopyOnWriteArrayList" },
                        { title: "JUC集合: ConcurrentLinkedQueue详解", path: "/java/thread/java-thread-x-juc-collection-ConcurrentLinkedQueue" },
                        { title: "JUC集合: BlockingQueue详解", path: "/java/thread/java-thread-x-juc-collection-BlockingQueue" },
                        { title: "JUC线程池: FutureTask详解", path: "/java/thread/java-thread-x-juc-executor-FutureTask" },
                        { title: "JUC线程池: ThreadPoolExecutor详解", path: "/java/thread/java-thread-x-juc-executor-ThreadPoolExecutor" },
                        { title: "JUC线程池: ScheduledThreadPoolExecutor详解", path: "/java/thread/java-thread-x-juc-executor-ScheduledThreadPoolExecutor" },
                        { title: "JUC线程池: Fork/Join框架详解", path: "/java/thread/java-thread-x-juc-executor-ForkJoinPool" },
                        { title: "JUC工具类: CountDownLatch详解", path: "/java/thread/java-thread-x-juc-tool-countdownlatch" },
                        { title: "JUC工具类: CyclicBarrier详解", path: "/java/thread/java-thread-x-juc-tool-cyclicbarrier" },
                        { title: "JUC工具类: Semaphore详解", path: "/java/thread/java-thread-x-juc-tool-semaphore" },
                        { title: "JUC工具类: Phaser详解", path: "/java/thread/java-thread-x-juc-tool-phaser" },
                        { title: "JUC工具类: Exchanger详解", path: "/java/thread/java-thread-x-juc-tool-exchanger" },
                        { title: "Java 并发 - ThreadLocal详解", path: "/java/thread/java-thread-x-threadlocal" },
                    ]
                }
            ],

            '/algorithm/': [
                {
                    title: '算法基础和思想',
                    children: [
                        { title: "数据结构基础知识体系详解", path: "/algorithm/basic/alg-basic-overview" }
                    ]
                }
            ],

            '/sql/': [
                {
                    title: '数据库基础和原理',
                    children: [
                        { title: "数据库基础和SQL知识体系详解", path: "/sql/basic/sql-db" }
                    ]
                }
            ],

            '/spring/': [
                {
                    title: 'Spring Framework 5基础',
                    children: [
                        { title: "Spring框架知识体系详解", path: "/spring/basic/spring" }
                    ]
                }
            ],


            // fallback
            '/': [
                {
                    title: '欢迎学习',
                    collapsable: false, // 不折叠
                    children: [
                        { title: "介绍", path: "/" },
                        { title: "关于", path: "/about" }
                    ]
                }
            ]
        }
    },

    plugins: [
        // 看板娘
        [
            '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
                theme: [
                    'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'
                ],
                clean: true,
                messages: {
                    welcome: '欢迎来到我的博客',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '你不喜欢我了吗？痴痴地望着你。'
                },
                messageStyle: { right: '68px', bottom: '290px' },
                width: 250,
                height: 320
            }
        ],
        // 评论
        [
            '@vuepress-reco/comments', {
                solution: 'vssue',
                options: {
                    title: 'vblog',
                    platform: 'github',
                    owner: 'lowskylee',
                    repo: 'vblog',
                    clientId: '37da52dd478c000f6e16',
                    clientSecret: '44055d7a85a0964de4a16cbdd133a81144b74c4d',
                }
            }
        ],
        //
        '@vuepress-reco/vuepress-plugin-loading-page',
        // vuepress-plugin-fulltext-search
        'fulltext-search',
    ],
}