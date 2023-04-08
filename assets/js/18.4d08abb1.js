(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{433:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"java-基础-面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-基础-面向对象"}},[t._v("#")]),t._v(" Java 基础 - 面向对象")]),t._v(" "),a("blockquote",[a("p",[t._v("本文主要介绍Java OOP 面向对象基础和相关类图。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#java-%E5%9F%BA%E7%A1%80---%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1"}},[t._v("Java 基础 - 面向对象")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7"}},[t._v("三大特性")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%B0%81%E8%A3%85"}},[t._v("封装")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%BB%A7%E6%89%BF"}},[t._v("继承")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A4%9A%E6%80%81"}},[t._v("多态")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%B1%BB%E5%9B%BE"}},[t._v("类图")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E6%B3%9B%E5%8C%96%E5%85%B3%E7%B3%BB-generalization"}},[t._v("泛化关系 (Generalization)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E5%85%B3%E7%B3%BB-realization"}},[t._v("实现关系 (Realization)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%81%9A%E5%90%88%E5%85%B3%E7%B3%BB-aggregation"}},[t._v("聚合关系 (Aggregation)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%BB%84%E5%90%88%E5%85%B3%E7%B3%BB-composition"}},[t._v("组合关系 (Composition)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%85%B3%E8%81%94%E5%85%B3%E7%B3%BB-association"}},[t._v("关联关系 (Association)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB-dependency"}},[t._v("依赖关系 (Dependency)")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])])])])]),t._v(" "),a("h2",{attrs:{id:"三大特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三大特性"}},[t._v("#")]),t._v(" 三大特性")]),t._v(" "),a("h3",{attrs:{id:"封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),a("p",[t._v("利用抽象数据类型将数据和基于数据的操作封装在一起，使其构成一个不可分割的独立实体。数据被保护在抽象数据类型的内部，尽可能地隐藏内部的细节，只保留一些对外接口使之与外部发生联系。用户无需知道对象内部的细节，但可以通过对象对外提供的接口来访问该对象。")]),t._v(" "),a("p",[t._v("优点:")]),t._v(" "),a("ul",[a("li",[t._v("减少耦合: 可以独立地开发、测试、优化、使用、理解和修改")]),t._v(" "),a("li",[t._v("减轻维护的负担: 可以更容易被程序员理解，并且在调试的时候可以不影响其他模块")]),t._v(" "),a("li",[t._v("有效地调节性能: 可以通过剖析确定哪些模块影响了系统的性能")]),t._v(" "),a("li",[t._v("提高软件的可重用性")]),t._v(" "),a("li",[t._v("降低了构建大型系统的风险: 即使整个系统不可用，但是这些独立的模块却有可能是可用的")])]),t._v(" "),a("p",[t._v("以下 Person 类封装 name、gender、age 等属性，外界只能通过 get() 方法获取一个 Person 对象的 name 属性和 gender 属性，而无法获取 age 属性，但是 age 属性可以供 work() 方法使用。")]),t._v(" "),a("p",[t._v("注意到 gender 属性使用 int 数据类型进行存储，封装使得用户注意不到这种实现细节。并且在需要修改 gender 属性使用的数据类型时，也可以在不影响客户端代码的情况下进行。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGender")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"man"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"woman"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("work")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" is working very hard!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" can\'t work any more!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("p",[t._v("继承实现了 "),a("strong",[t._v("IS-A")]),t._v(" 关系，例如 Cat 和 Animal 就是一种 IS-A 关系，因此 Cat 可以继承自 Animal，从而获得 Animal 非 private 的属性和方法。")]),t._v(" "),a("p",[t._v("继承应该遵循里氏替换原则，子类对象必须能够替换掉所有父类对象。")]),t._v(" "),a("p",[t._v("Cat 可以当做 Animal 来使用，也就是说可以使用 Animal 引用 Cat 对象。父类引用指向子类对象称为 "),a("strong",[t._v("向上转型")]),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" animal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"多态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[t._v("#")]),t._v(" 多态")]),t._v(" "),a("p",[t._v("多态分为编译时多态和运行时多态:")]),t._v(" "),a("ul",[a("li",[t._v("编译时多态主要指方法的重载")]),t._v(" "),a("li",[t._v("运行时多态指程序中定义的对象引用所指向的具体类型在运行期间才确定")])]),t._v(" "),a("p",[t._v("运行时多态有三个条件:")]),t._v(" "),a("ul",[a("li",[t._v("继承")]),t._v(" "),a("li",[t._v("覆盖(重写)")]),t._v(" "),a("li",[t._v("向上转型")])]),t._v(" "),a("p",[t._v("下面的代码中，乐器类(Instrument)有两个子类: Wind 和 Percussion，它们都覆盖了父类的 play() 方法，并且在 main() 方法中使用父类 Instrument 来引用 Wind 和 Percussion 对象。在 Instrument 引用调用 play() 方法时，会执行实际引用对象所在类的 play() 方法，而不是 Instrument 类的方法。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instrument")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Instrument is playing..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wind")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instrument")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wind is playing..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Percussion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instrument")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Percussion is playing..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Music")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instrument")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" instruments "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        instruments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        instruments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Percussion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instrument")]),t._v(" instrument "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" instruments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            instrument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"类图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类图"}},[t._v("#")]),t._v(" 类图")]),t._v(" "),a("p",[t._v("以下类图使用 "),a("a",{attrs:{href:"https://www.planttext.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlantUML在新窗口打开"),a("OutboundLink")],1),t._v(" 绘制，更多语法及使用请参考: http://plantuml.com/ 。")]),t._v(" "),a("h3",{attrs:{id:"泛化关系-generalization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛化关系-generalization"}},[t._v("#")]),t._v(" 泛化关系 (Generalization)")]),t._v(" "),a("p",[t._v("用来描述继承关系，在 Java 中使用 extends 关键字。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lowskylee/Pictures/main/images/SoWkIImgAStDuU8goIp9ILLmJyrBBKh.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("@startuml\n\ntitle Generalization\n\nclass Vehical\nclass Car\nclass Truck\n\nVehical "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- Car\nVehical "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- Truck\n\n@enduml\n")])])]),a("h3",{attrs:{id:"实现关系-realization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现关系-realization"}},[t._v("#")]),t._v(" 实现关系 (Realization)")]),t._v(" "),a("p",[t._v("用来实现一个接口，在 Java 中使用 implements 关键字。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lowskylee/Pictures/main/images/SoWkIImgAStDuU8goIp9ILK8IatCoQn.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("@startuml\n\ntitle Realization\n\ninterface MoveBehavior\nclass Fly\nclass Run\n\nMoveBehavior "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" Fly\nMoveBehavior "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" Run\n\n@enduml\n")])])]),a("h3",{attrs:{id:"聚合关系-aggregation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合关系-aggregation"}},[t._v("#")]),t._v(" 聚合关系 (Aggregation)")]),t._v(" "),a("p",[t._v("表示整体由部分组成，但是整体和部分不是强依赖的，整体不存在了部分还是会存在。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lowskylee/Pictures/main/images/SoWkIImgAStDuU8goIp9ILLmJ4ylIar.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("@startuml\n\ntitle Aggregation\n\nclass Computer\nclass Keyboard\nclass Mouse\nclass Screen\n\nComputer o-- Keyboard\nComputer o-- Mouse\nComputer o-- Screen\n\n@enduml\n")])])]),a("h3",{attrs:{id:"组合关系-composition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合关系-composition"}},[t._v("#")]),t._v(" 组合关系 (Composition)")]),t._v(" "),a("p",[t._v("和聚合不同，组合中整体和部分是强依赖的，整体不存在了部分也不存在了。比如公司和部门，公司没了部门就不存在了。但是公司和员工就属于聚合关系了，因为公司没了员工还在。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lowskylee/Pictures/main/images/SoWkIImgAStDuU8goIp9ILLmpiyjo2_.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("@startuml\n\ntitle Composition\n\nclass Company\nclass DepartmentA\nclass DepartmentB\n\nCompany *-- DepartmentA\nCompany *-- DepartmentB\n\n@enduml\n")])])]),a("h3",{attrs:{id:"关联关系-association"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联关系-association"}},[t._v("#")]),t._v(" 关联关系 (Association)")]),t._v(" "),a("p",[t._v("表示不同类对象之间有关联，这是一种静态关系，与运行过程的状态无关，在最开始就可以确定。因此也可以用 1 对 1、多对 1、多对多这种关联关系来表示。比如学生和学校就是一种关联关系，一个学校可以有很多学生，但是一个学生只属于一个学校，因此这是一种多对一的关系，在运行开始之前就可以确定。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lowskylee/Pictures/main/images/SoWkIImgAStDuU8goIp9ILLmB2xEJyv.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("@startuml\n\ntitle Association\n\nclass School\nclass Student\n\nSchool "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"n"')]),t._v(" Student\n\n@enduml\n")])])]),a("h3",{attrs:{id:"依赖关系-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系-dependency"}},[t._v("#")]),t._v(" 依赖关系 (Dependency)")]),t._v(" "),a("p",[t._v("和关联关系不同的是，依赖关系是在运行过程中起作用的。A 类和 B 类是依赖关系主要有三种形式:")]),t._v(" "),a("ul",[a("li",[t._v("A 类是 B 类中的(某中方法的)局部变量；")]),t._v(" "),a("li",[t._v("A 类是 B 类方法当中的一个参数；")]),t._v(" "),a("li",[t._v("A 类向 B 类发送消息，从而影响 B 类发生变化；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/lowskylee/Pictures/main/images/LOun2W9134NxVugmbJPp15d4LalxC4O.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("@startuml\n\ntitle Dependency\n\nclass Vehicle "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MoveBehavior"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ninterface MoveBehavior "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    move"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nnote "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MoveBehavior.move()"')]),t._v(" as N\n\nVehicle "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MoveBehavior\n\nVehicle "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" N\n\n@enduml\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Java 编程思想")])]),t._v(" "),a("li",[a("p",[t._v("敏捷软件开发: 原则、模式与实践")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/shanyou/archive/2009/09/21/1570716.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("面向对象设计的 SOLID 原则在新窗口打开"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html#generalization",target:"_blank",rel:"noopener noreferrer"}},[t._v("看懂 UML 类图和时序图在新窗口打开"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/wolf-sun/p/UML-Sequence-diagram.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UML 系列——时序图(顺序图)sequence diagram在新窗口打开"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://blog.csdn.net/jianyuerensheng/article/details/51602015",target:"_blank",rel:"noopener noreferrer"}},[t._v("面向对象编程三大特性 ------ 封装、继承、多态在新窗口打开"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("javaoop基础知识总结 https://blog.csdn.net/weixin_38173324/article/details/70037927")])]),t._v(" "),a("li",[a("p",[t._v("Java实现OOP(面向对象编程) https://www.cnblogs.com/AlanLee/p/6475334.html")])]),t._v(" "),a("li",[a("p",[t._v("Java 抽象类与oop三大特征 http://www.cnblogs.com/wujing-hubei/p/6012105.html")])]),t._v(" "),a("li",[a("p",[t._v("引用 https://www.pdai.tech/md/java/basic/java-basic-oop.html")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);