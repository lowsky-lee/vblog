(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{496:function(a,t,v){"use strict";v.r(t);var e=v(1),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"调试排错-java-问题排查之jvm可视化工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试排错-java-问题排查之jvm可视化工具"}},[a._v("#")]),a._v(" 调试排错 - Java 问题排查之JVM可视化工具")]),a._v(" "),t("blockquote",[t("p",[a._v("本文主要梳理常见的JVM可视化的分析工具，主要包括JConsole, Visual VM, Vusial GC, JProfile 和 MAT等。@pdai")])]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E8%B0%83%E8%AF%95%E6%8E%92%E9%94%99---java-%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5%E4%B9%8Bjvm%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7"}},[a._v("调试排错 - Java 问题排查之JVM可视化工具")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#jconsole"}},[a._v("JConsole")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#visual-vm"}},[a._v("Visual VM")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#visual-gc"}},[a._v("Visual GC")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#jprofile"}},[a._v("JProfile")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6"}},[a._v("核心组件")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95"}},[a._v("运行测试")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#eclipse-memory-analyzer-mat"}},[a._v("Eclipse Memory Analyzer (MAT)")])])])])]),a._v(" "),t("h2",{attrs:{id:"jconsole"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jconsole"}},[a._v("#")]),a._v(" JConsole")]),a._v(" "),t("blockquote",[t("p",[a._v("Jconsole （Java Monitoring and Management Console），JDK自带的基于JMX的可视化监视、管理工具。 官方文档可以参考"),t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里在新窗口打开"),t("OutboundLink")],1)])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("找到jconsole工具")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pdai@MacBook-Pro bin % "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\njaotc\t\tjcmd\t\tjinfo\t\tjshell\t\trmid\njar\t\tjconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("这里"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\tjjs\t\tjstack\t\trmiregistry\njarsigner\tjdb\t\tjlink\t\tjstat\t\tserialver\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v("\t\tjdeprscan\tjmap\t\tjstatd\t\tunpack200\njavac\t\tjdeps\t\tjmod\t\tkeytool\njavadoc\t\tjhsdb\t\tjps\t\tpack200\njavap\t\tjimage\t\tjrunscript\trmic\n")])])]),t("ul",[t("li",[t("strong",[a._v("打开jconsole")])])]),a._v(" "),t("p",[a._v("选择")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-0.png",alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-2.png",alt:""}})]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("查看概述、内存、线程、类、VM概要、MBean")])])]),a._v(" "),t("p",[a._v("概述")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-1.png",alt:""}})]),a._v(" "),t("p",[a._v("内存")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-3.png",alt:""}})]),a._v(" "),t("p",[a._v("线程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-4.png",alt:""}})]),a._v(" "),t("p",[a._v("类")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-5.png",alt:""}})]),a._v(" "),t("p",[a._v("VM概要")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-6.png",alt:""}})]),a._v(" "),t("p",[a._v("MBean")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-6.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"visual-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visual-vm"}},[a._v("#")]),a._v(" Visual VM")]),a._v(" "),t("blockquote",[t("p",[a._v("VisualVM 是一款免费的，集成了多个 JDK 命令行工具的可视化工具，它能为您提供强大的分析能力，对 Java 应用程序做性能分析和调优。这些功能包括生成和分析海量数据、跟踪内存泄漏、监控垃圾回收器、执行内存和 CPU 分析，同时它还支持在 MBeans 上进行浏览和操作。")])]),a._v(" "),t("p",[a._v("Overview")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-visualvm-2.png",alt:""}})]),a._v(" "),t("p",[a._v("Monitor")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-visualvm-1.png",alt:""}})]),a._v(" "),t("p",[a._v("线程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-visualvm-3.png",alt:""}})]),a._v(" "),t("p",[a._v("Sampler")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-visualvm-4.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"visual-gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visual-gc"}},[a._v("#")]),a._v(" Visual GC")]),a._v(" "),t("blockquote",[t("p",[a._v("visual gc 是 visualvm 中的图形化查看 gc 状况的插件。官方文档可以参考"),t("a",{attrs:{href:"https://www.oracle.com/java/technologies/visual-garbage-collection-monitoring-tool.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里在新窗口打开"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("比如我在IDEA中使用visual GC 插件来看GC状况。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-tool-10.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"jprofile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jprofile"}},[a._v("#")]),a._v(" JProfile")]),a._v(" "),t("blockquote",[t("p",[a._v("Profiler 是一个商业的主要用于检查和跟踪系统（限于Java开发的）的性能的工具。JProfiler可以通过时时的监控系统的内存使用情况，随时监视垃圾回收，线程运行状况等手段，从而很好的监视JVM运行情况及其性能。")])]),a._v(" "),t("p",[a._v("JProfiler 是一个全功能的Java剖析工具（profiler），专用于分析J2SE和J2EE应用程序。它把CPU、执行绪和内存的剖析组合在一个强大的应用中。 JProfiler可提供许多IDE整合和应用服务器整合用途。JProfiler直觉式的GUI让你可以找到效能瓶颈、抓出内存漏失(memory leaks)、并解决执行绪的问题。它让你得以对heap walker作资源回收器的root analysis，可以轻易找出内存漏失；heap快照（snapshot）模式让未被参照（reference）的对象、稍微被参照的对象、或在终结（finalization）队列的对象都会被移除；整合精灵以便剖析浏览器的Java外挂功能。")]),a._v(" "),t("h3",{attrs:{id:"核心组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心组件"}},[a._v("#")]),a._v(" 核心组件")]),a._v(" "),t("p",[a._v("JProfiler 包含用于采集目标 JVM 分析数据的 JProfiler agent、用于可视化分析数据的 JProfiler UI、提供各种功能的命令行工具，它们之间的关系如下图所示。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-18.png",alt:""}})]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("JProfiler agent")])])]),a._v(" "),t("p",[a._v("JProfiler agent 是一个本地库，它可以在 JVM 启动时通过参数"),t("code",[a._v("-agentpath:<path to native library>")]),a._v("进行加载或者在程序运行时通过"),t("a",{attrs:{href:"http://lovestblog.cn/blog/2014/06/18/jvm-attach/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM Attach 机制在新窗口打开"),t("OutboundLink")],1),a._v("进行加载。Agent 被成功加载后，会设置 JVMTI 环境，监听虚拟机产生的事件，如类加载、线程创建等。例如，当它监听到类加载事件后，会给这些类注入用于执行度量操作的字节码。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("JProfiler UI")])])]),a._v(" "),t("p",[a._v("JProfiler UI 是一个可独立部署的组件，它通过 socket 和 agent 建立连接。这意味着不论目标 JVM 运行在本地还是远端，JProfiler UI 和 agent 间的通信机制都是一样的。")]),a._v(" "),t("p",[a._v("JProfiler UI 的主要功能是展示通过 agent 采集上来的分析数据，此外还可以通过它控制 agent 的采集行为，将快照保存至磁盘，展示保存的快照。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("命令行工具")])])]),a._v(" "),t("p",[a._v("JProfiler 提供了一系列命令行工具以实现不同的功能。")]),a._v(" "),t("ol",[t("li",[a._v("jpcontroller - 用于控制 agent 的采集行为。它通过 agent 注册的 JProfiler MBean 向 agent 传递命令。")]),a._v(" "),t("li",[a._v("jpenable - 用于将 agent 加载到一个正在运行的 JVM 上。")]),a._v(" "),t("li",[a._v("jpdump - 用于获取正在运行的 JVM 的堆快照。")]),a._v(" "),t("li",[a._v("jpexport & jpcompare - 用于从保存的快照中提取数据并创建 HTML 报告。")])]),a._v(" "),t("h3",{attrs:{id:"运行测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行测试"}},[a._v("#")]),a._v(" 运行测试")]),a._v(" "),t("p",[t("strong",[a._v("我们运行一个SpringBoot测试工程，选择attach到JVM")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-1.png",alt:""}})]),a._v(" "),t("p",[a._v("选择指定的进程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-2.png",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("设置数据采集模式")])]),a._v(" "),t("p",[a._v("JProfier 提供两种数据采集模式 Sampling 和 Instrumentation。")]),a._v(" "),t("ul",[t("li",[a._v("Sampling - 适合于不要求数据完全精确的场景。优点是对系统性能的影响较小，缺点是某些特性不支持（如方法级别的统计信息）。")]),a._v(" "),t("li",[a._v("Instrumentation - 完整功能模式，统计信息也是精确的。缺点是如果需要分析的类比较多，对应用性能影响较大。为了降低影响，往往需要和 Filter 一起使用。")])]),a._v(" "),t("p",[a._v("由于我们需要获取方法级别的统计信息，这里选择了 Instrumentation 模式。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-3.png",alt:""}})]),a._v(" "),t("p",[a._v("概览")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-4.png",alt:""}})]),a._v(" "),t("p",[a._v("内存")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-5.png",alt:""}})]),a._v(" "),t("p",[a._v("实时内存分布（类对象）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-6.png",alt:""}})]),a._v(" "),t("p",[a._v("dump 堆内存")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-7.png",alt:""}})]),a._v(" "),t("p",[a._v("dump完会直接打开显示")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-8.png",alt:""}})]),a._v(" "),t("p",[a._v("线程存储")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-9.png",alt:""}})]),a._v(" "),t("p",[a._v("导出HTML报告")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-10.png",alt:""}})]),a._v(" "),t("p",[a._v("CPU 调用树")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-14.png",alt:""}})]),a._v(" "),t("p",[a._v("线程历史")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-15.png",alt:""}})]),a._v(" "),t("p",[a._v("JEE & 探针")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-16.png",alt:""}})]),a._v(" "),t("p",[a._v("MBeans")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-jprofile-17.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"eclipse-memory-analyzer-mat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-memory-analyzer-mat"}},[a._v("#")]),a._v(" Eclipse Memory Analyzer (MAT)")]),a._v(" "),t("blockquote",[t("p",[a._v("MAT 是一种快速且功能丰富的 Java 堆分析器，可帮助你发现内存泄漏并减少内存消耗。 MAT在的堆内存分析问题使用极为广泛，需要重点掌握。")])]),a._v(" "),t("p",[a._v("可以在"),t("a",{attrs:{href:"https://www.eclipse.org/mat/",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里在新窗口打开"),t("OutboundLink")],1),a._v("下载， 官方文档可以看"),t("a",{attrs:{href:"http://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/welcome.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里在新窗口打开"),t("OutboundLink")],1)]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("Overview")])])]),a._v(" "),t("p",[a._v("包含内存分布，以及潜在的问题推测")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-mat-2.png",alt:""}})]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("Histogram")])])]),a._v(" "),t("p",[a._v("可以列出内存中的对象，对象的个数以及大小。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-mat-3.png",alt:""}})]),a._v(" "),t("p",[a._v("具体需要重点理解如下两个概念，可参考"),t("a",{attrs:{href:"http://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.mat.ui.help/welcome.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网文档在新窗口打开"),t("OutboundLink")],1),a._v("的解释")]),a._v(" "),t("ol",[t("li",[a._v("Shallow Heap ：一个对象内存的消耗大小，不包含对其他对象的引用")]),a._v(" "),t("li",[a._v("Retained Heap ：是shallow Heap的总和，也就是该对象被GC之后所能回收到内存的总和")])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("Dominator Tree")])])]),a._v(" "),t("p",[a._v("可以列出那个线程，以及线程下面的那些对象占用的空间。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-mat-4.png",alt:""}})]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("Top consumers")])])]),a._v(" "),t("p",[a._v("通过图形列出最大的object。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-mat-5.png",alt:""}})]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("Leak Suspects")])])]),a._v(" "),t("p",[a._v("自动分析潜在可能的泄漏。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/jvm/java-jvm-mat-6.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);