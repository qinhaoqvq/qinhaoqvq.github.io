(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{609:function(t,a,s){"use strict";s.r(a);var n=s(17),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("h3",{attrs:{id:"异常理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常理解"}},[t._v("#")]),t._v(" 异常理解")]),t._v(" "),s("p",[t._v("异常与语法错误是不同的概念，语法错误代码将会报红，编译不通过，而异常是可能会发生但不一定会发生的错误")]),t._v(" "),s("h3",{attrs:{id:"异常情形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常情形"}},[t._v("#")]),t._v(" 异常情形")]),t._v(" "),s("p",[t._v("它是指阻止当前方法或作用域继续执行的问题")]),t._v(" "),s("h4",{attrs:{id:"异常抛出流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常抛出流程"}},[t._v("#")]),t._v(" 异常抛出流程")]),t._v(" "),s("ol",[s("li",[t._v("使用new在堆上创建异常对象（即，分配存储空间和调用构造方法）")]),t._v(" "),s("li",[t._v("当前执行代码被终止")]),t._v(" "),s("li",[t._v("从当前环境中弹出异常对象的引用")]),t._v(" "),s("li",[t._v("异常处理程序处理该异常")])]),t._v(" "),s("h2",{attrs:{id:"java标准异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java标准异常"}},[t._v("#")]),t._v(" Java标准异常")]),t._v(" "),s("h3",{attrs:{id:"分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),s("h4",{attrs:{id:"基于继承关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于继承关系"}},[t._v("#")]),t._v(" 基于继承关系")]),t._v(" "),s("ul",[s("li",[t._v("Throwable：Java中所有异常类的父类。主要分为Error和Exception")]),t._v(" "),s("li",[t._v("Error：用来表示编译时和系统错误，与程序代码无关")]),t._v(" "),s("li",[t._v("Exception：可以被抛出的基本类型。主要包含RuntimeException和非RuntimeException")]),t._v(" "),s("li",[t._v("RuntimeException：一般由程序逻辑错误引起，程序应该从逻辑角度尽可能避免这类异常的发生")]),t._v(" "),s("li",[t._v("非RuntimeException：一般是指必须进行处理的异常，如果不处理，程序就不能编译通过")])]),t._v(" "),s("h4",{attrs:{id:"基于编译器是否检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于编译器是否检查"}},[t._v("#")]),t._v(" 基于编译器是否检查")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("被检查的异常（非RuntimeException类）")]),t._v(" "),s("p",[t._v("checked异常在编译时检查，这意味着如果一个方法抛出checked异常，那么它应该使用try-catch块或者使用throws关键字来处理这个异常，否则的话程序会报编译错误")])]),t._v(" "),s("li",[s("p",[t._v("不被检查的异常（RuntimeException类）")]),t._v(" "),s("p",[t._v("unchecked异常在编译时不会检查，这意味着即使你没有声明或者处理异常你的程序也会抛出一个unchecked异常，程序不会给出一个编译错误，大多数情况下这些异常的发生是由于用户在交互过程中提供的坏数据")])])]),t._v(" "),s("h2",{attrs:{id:"异常处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[t._v("#")]),t._v(" 异常处理")]),t._v(" "),s("h3",{attrs:{id:"能干嘛"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#能干嘛"}},[t._v("#")]),t._v(" 能干嘛")]),t._v(" "),s("p",[t._v("异常处理的一个重要目标就是把错误处理的代码和错误发生的地点分离开来，这样一来，主干代码就不会与错误处理代码混在一起，提高代码的可读性、可维护性")]),t._v(" "),s("h3",{attrs:{id:"捕获异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获异常"}},[t._v("#")]),t._v(" 捕获异常")]),t._v(" "),s("p",[t._v("使用try块来捕获异常")]),t._v(" "),s("h3",{attrs:{id:"异常处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常处理程序"}},[t._v("#")]),t._v(" 异常处理程序")]),t._v(" "),s("p",[t._v("抛出的异常必须在某处得到处理，这个地点就是catch块（异常处理程序）")]),t._v(" "),s("ol",[s("li",[t._v("异常处理机制会按照代码顺序找出"),s("code",[t._v("最近的")]),t._v("、"),s("code",[t._v("能匹配的（查找时并不要求抛出异常对象的类型与异常处理程序声明的异常类型完全匹配，是子类其也可以）")])]),t._v(" "),s("li",[t._v("找到匹配的异常处理程序之后，它就认为系统将得到处理，就不会再继续查找")])]),t._v(" "),s("h2",{attrs:{id:"finally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finally"}},[t._v("#")]),t._v(" finally")]),t._v(" "),s("p",[t._v("try关键字最后可以定义finally代码块。finally块中定义的代码，总是在try和任何catch块之后、方法完成之前运行。"),s("code",[t._v("在方法return之后finally字句也是执行的")])]),t._v(" "),s("h4",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),s("p",[t._v("因为不管是否发生异常finally都会执行，因此我们可以在finally代码块中执行关闭网络连接、关闭已打开的文件和释放线程的的操作")]),t._v(" "),s("h4",{attrs:{id:"使用经验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用经验"}},[t._v("#")]),t._v(" 使用经验")]),t._v(" "),s("p",[t._v("构造器中使用try-catch-finally语句时，最安全的使用方式是使用嵌套的try语句。或者使用try-with-resources语句")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConstructorUseTry")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConstructorUseTry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedReader")]),t._v(" reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filepath"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// business exception")]),t._v("\n                e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reader constructor exception")]),t._v("\n            e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConstructorUseTry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedReader")]),t._v(" reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferedReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filepath"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);