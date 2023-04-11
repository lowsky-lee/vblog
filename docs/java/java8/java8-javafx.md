## Java 8 - JavaFx 2.0

> JavaFX主要致力于富客户端开发，以弥补swing的缺陷，主要提供图形库与media库，支持audio,video,graphics,animation,3D等，同时采用现代化的css方式支持界面设计。同时又采用XUI方式以XML方式设计UI界面，达到显示与逻辑的分离。与android这方面确实有点相似性。

+   [Java 8 - JavaFx 2.0](#java-8---javafx-20)
    +   [JavaFX历史](#javafx%e5%8e%86%e5%8f%b2)
    +   [JavaFx8的新特性](#javafx8%e7%9a%84%e6%96%b0%e7%89%b9%e6%80%a7)
        +   [全新现代主题: Modena](#%e5%85%a8%e6%96%b0%e7%8e%b0%e4%bb%a3%e4%b8%bb%e9%a2%98modena)
        +   [JavaFX 3D](#javafx-3d)
        +   [富文本](#%e5%af%8c%e6%96%87%e6%9c%ac)
        +   [TreeTableView](#treetableview)
        +   [日期控件DatePicker](#%e6%97%a5%e6%9c%9f%e6%8e%a7%e4%bb%b6datepicker)
        +   [用于 CSS 结构的公共 API](#%e7%94%a8%e4%ba%8e-css-%e7%bb%93%e6%9e%84%e7%9a%84%e5%85%ac%e5%85%b1-api)
        +   [WebView 增强功能](#webview-%e5%a2%9e%e5%bc%ba%e5%8a%9f%e8%83%bd)
        +   [JavaFX Scene Builder 2.0](#javafx-scene-builder-20)
    +   [JavaFX 8开发2048游戏](#javafx-8%e5%bc%80%e5%8f%912048%e6%b8%b8%e6%88%8f)
    +   [总结](#%e6%80%bb%e7%bb%93)
    +   [参考](#%e5%8f%82%e8%80%83)

## JavaFX历史

跟java在服务器端和web端成绩相比，桌面一直是java的软肋，于是Sun公司在2008年推出JavaFX，弥补桌面软件的缺陷，请看下图JavaFX一路走过来的改进

![](https://raw.githubusercontent.com/lowskylee/Pictures/main/images/java8-javafx-1.png)

从上图看出，一开始推出时候，开发者需使用一种名为JavaFX Script的静态的、声明式的编程语言来开发JavaFX应用程序。因为JavaFX Script将会被编译为Java bytecode，程序员可以使用Java代码代替。

JavaFX 2.0之后的版本摒弃了JavaFX Script语言，而作为一个Java API来使用。因此使用JavaFX平台实现的应用程序将直接通过标准Java代码来实现。

JavaFX 2.0 包含非常丰富的 UI 控件、图形和多媒体特性用于简化可视化应用的开发，WebView可直接在应用中嵌入网页；另外 2.0 版本允许使用 FXML 进行 UI 定义，这是一个脚本化基于 XML 的标识语言。

从JDK 7u6开始，JavaFx就与JDK捆绑在一起了，JavaFX团队称，下一个版本将是8.0，目前所有的工作都已经围绕8.0库进行。这是因为JavaFX将捆绑在Java 8中，因此该团队决定跳过几个版本号，迎头赶上Java 8。

## JavaFx8的新特性

#### 全新现代主题: Modena

新的Modena主题来替换原来的Caspian主题。不过在Application的start()方法中，可以通过setUserAgentStylesheet(STYLESHEET\_CASPIAN)来继续使用Caspian主题。

参考http://fxexperience.com/2013/03/modena-theme-update/

#### JavaFX 3D

在JavaFX8中提供了3D图像处理API，包括Shape3D (Box, Cylinder, MeshView, Sphere子类),SubScene, Material, PickResult, LightBase (AmbientLight 和PointLight子类),SceneAntialiasing等。Camera类也得到了更新。从JavaDoc中可以找到更多信息。

#### 富文本

强化了富文本的支持

#### TreeTableView

#### 日期控件DatePicker

增加日期控件

#### 用于 CSS 结构的公共 API

```auto
CSS 样式设置是 JavaFX 的一项主要特性
CSS 已专门在私有 API 中实现(com.sun.javafx.css 软件包)
多种工具(例如 Scene Builder)需要 CSS 公共 API
开发人员将能够定义自定义 CSS 样式
```

#### WebView 增强功能

+   Nashorn JavaScript 引擎 https://blogs.oracle.com/nashorn/entry/open\_for\_business
+   WebSocket http://javafx-jira.kenai.com/browse/RT-14947
+   Web Workers http://javafx-jira.kenai.com/browse/RT-9782

#### JavaFX Scene Builder 2.0

可视化工具，加速JavaFX图形界面的开发，下载地址

JavaFX Scene Builder如同NetBeans一般，通过拖拽的方式配置界面，待完成界面之後，保存为FXML格式文件，此文件以XML描述物件配置，再交由JavaFX程式处理，因此可減少直接以JavaFX编写界面的困難度。

JavaFX Scene Builder 2.0新增JavaFX Theme预览功能，菜单「Preview」→「JavaFX Theme」选择不同的主題，包括:

```auto
Modena (FX8).
Modena Touch (FX8).
Modena High Contrast – Black on White (FX8).
Modena High Contrast – White on Black (FX8).
Modena High Contrast – Yellow on Black (FX8).
Caspian (FX2).
Caspian Embedded (FX2).
Caspian Embedded QVGA (FX2).
```

## JavaFX 8开发2048游戏

2048虽然不像前段时间那么火了，但个人还是非常喜欢玩2048，空闲时间都忍不住来一发，感谢 Gabriele Cirulli 发明了这了不起 (并且会上瘾)的2048游戏，因为是用MIT协议开源出来，各种语言版本的2048游戏横空出世，下图是用JavaFX 8来开发的一款2048。

所用到的技术

```auto
Lambda expressions
Stream API
JavaFX 8
JavaFX CSS basics
JavaFX animationsfx2048相关类的说明
Game2048,游戏主类
GameManager,包含游戏界面布局(Board)以及Grid的操作(GridOperator)
Board,包含labels ，分数，grid ，Tile
Tile,游戏中的数字块
GridOperator,Grid操作类
Location,Direction 位置帮助类
RecordManager，SessionManager，纪录游戏分数，会话类
```

这里是源码地址，大家感兴趣的可以去学习下git.oschina.net/benhail/javase8-sample/tree/master/src/main/java/javase8sample/chapter13/javafx8/fx2048

## 总结

比起AWT和SWING，JavaFX的优势很明显，各大主流IDE已经支持JavaFX的开发了，最佳的工具莫过于NetBeans，且随着lambda带来的好处，JavaFX的事件处理简洁了不少，以前需要写匿名函数类。另外JavaFX开源以来，JavaFX的生态环境也越来越活跃了，包括各种教程，嵌入式尝试，还有一些开源项目，比如: ControlsFX，JRebirth，DataFX Flow，mvvmFX，TestFX 等等。还有JavaFX是可以运行在Android和ios上面，这个很赞！

好了，总结到这里也差不多了，在RIA平台上面，有HTML5、Flex和微软的Sliverlight，JavaFX能否表现优秀，在于大家的各位，只要我们多用JavaFX，那么JavaFX也会越来越优秀，任何语言都是这样, THE END .

## 参考

+   https://github.com/oimchat/oim-fx
    
+   https://github.com/goxr3plus/FX-BorderlessScene
    
+   https://github.com/topics/material-ui
    
+   https://github.com/in-sideFX/Undecorator
    
+   https://github.com/brunoborges/webfx
    
+   https://blog.csdn.net/loongshawn/article/details/52805751
    
+   https://docs.oracle.com/javafx/2/ui\_controls/overview.htm#BABJACHC
    
+   https://www.oracle.com/technetwork/cn/articles/java/layoutfx-1536156-zhs.html

+   转载 https://www.pdai.tech/md/java/java8/java8-javafx.html