(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{595:function(t,a,s){"use strict";s.r(a);var v=s(17),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"jvm结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm结构"}},[t._v("#")]),t._v(" JVM结构")]),t._v(" "),s("h2",{attrs:{id:"类加载子系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类加载子系统"}},[t._v("#")]),t._v(" 类加载子系统")]),t._v(" "),s("h3",{attrs:{id:"加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载"}},[t._v("#")]),t._v(" 加载")]),t._v(" "),s("ol",[s("li",[t._v("将class字节码文件加载到"),s("code",[t._v("方法区")])]),t._v(" "),s("li",[t._v("在"),s("code",[t._v("堆内存")]),t._v("生成一个代表该类的"),s("code",[t._v("Class对象")]),t._v("，作为方法区这个类各种数据的访问入口")])]),t._v(" "),s("h3",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("h4",{attrs:{id:"验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),s("p",[t._v("保证被加载类的正确性")]),t._v(" "),s("h4",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("p",[t._v("为类变量分配内存空间并将值初始化为默认值")]),t._v(" "),s("h5",{attrs:{id:"变量存储位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量存储位置"}},[t._v("#")]),t._v(" 变量存储位置")]),t._v(" "),s("ol",[s("li",[t._v("静态变量。"),s("code",[t._v("存储在方法区")]),t._v("。在类加载的准备阶段会为其分配内存空间，并将值初始化为默认值，即"),s("code",[t._v("零值（0,null,\\u0000,false）")])]),t._v(" "),s("li",[t._v("静态常量。"),s("code",[t._v("存储在静态常量池")]),t._v("。在编译时会分配内存空间，在类加载的准备阶段显式赋值给该字段")]),t._v(" "),s("li",[t._v("局部变量。"),s("code",[t._v("存储在栈内存")]),t._v("。")]),t._v(" "),s("li",[t._v("成员变量。"),s("code",[t._v("对象的引用存储在栈内存，对象存储在堆内存")]),t._v("。成员变量是和所在对象的初始化一起分配到堆内存的")])]),t._v(" "),s("h5",{attrs:{id:"constantvale属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constantvale属性"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/qq_29951485/article/details/89789174",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConstantVale属性"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("ConstantValue属性的作用是通知虚拟机自动为静态变量赋值，只有被static修饰的变量才可以使用这项属性。非static类型的变量的赋值是在实例构造器方法中进行的。")]),t._v(" "),s("p",[t._v("static类型变量赋值分两种，在类构造器中赋值，或使用ConstantValue属性赋值。")]),t._v(" "),s("p",[t._v("在实际的程序中，只有同时被final和static修饰的字段才有ConstantValue属性，且限于"),s("code",[t._v("基本类型")]),t._v("和"),s("code",[t._v("String")]),t._v("。编译时Javac将会为该常量生成ConstantValue属性，在类加载的准备阶段虚拟机便会根据ConstantValue为常量设置相应的值，如果该变量没有被final修饰，或者并非基本类型及字符串，则选择在类构造器中进行初始化。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("为什么ConstantValue的属性值只限定于基本类型和String？")]),t._v(" "),s("p",[t._v("因为从常量池中只能引用到基本类型和String类型的字面量")])]),t._v(" "),s("li",[s("p",[t._v("final、static、static final修的字段赋值的区别？")])])])]),t._v(" "),s("ul",[s("li",[t._v("final修饰的字段在运行时被初始化，可以直接赋值，也可以在实例构造器中赋值，赋值后不可修改。\n"),s("blockquote",[s("p",[t._v("final关键字对于变量的存储区域是没有任何影响的。jvm规范中，类的静态变量存储在方法区，实例变量存储在堆区。也就是说"),s("code",[t._v("static关键字才对变量的存储区域造成影响")]),t._v("。\nfinal关键字来修饰变量表明了该变量一旦赋值就无法更改。同时编译器必须保证该变量在使用前被初始化赋值。\n例如你的static final int c1这个变量，是一个静态变量，静态变量的初始化可以在静态块中进行。而非static变量，可以初始化块中和构造方法中进行。\n如果你在这几个地方没有对final变量进行赋值，编译器便会报错。")])])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("static修饰的字段"),s("code",[t._v("在加载过程中准备阶段被初始化")]),t._v('，但是这个阶段只会赋值一个默认的零值（0或者null而并非定义变量设置的值）初始化阶段在类构造器中才会赋值为变量定义的值。（关于static的初始化请看"init"与"clinit"的区别）')])])]),t._v(" "),s("ul",[s("li",[t._v("static final修饰的字段在javac编译时生成comstantValue属性，在类加载的准备阶段直接把constantValue的值赋给该字段。可以理解为在编译期即把结果放入了常量池中。")])]),t._v(" "),s("blockquote",[s("p",[t._v('在一个类中定义字段时，可以声明为成员变量（如final），也可以声明为类变量（静态变量），静态变量在装载类时被初始化，而成员变量每次创建实例时都会被初始化一次。一个字段被声明为static final，表示这个字段在初始化完成后就不可再改变了，final，类的初始化完成后，在类的实例化进行赋值，每次实例化的值不一定相同。加上了static 的 final，在类只装载一次的情况下，可以是真正意义的"常量"')])]),t._v(" "),s("h4",{attrs:{id:"解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),s("p",[t._v("将常量池内的符号引用转换为直接引用")]),t._v(" "),s("h3",{attrs:{id:"初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),s("h3",{attrs:{id:"类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[t._v("#")]),t._v(" 类加载器")]),t._v(" "),s("h2",{attrs:{id:"运行时数据区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行时数据区"}},[t._v("#")]),t._v(" 运行时数据区")]),t._v(" "),s("h2",{attrs:{id:"本地方法接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地方法接口"}},[t._v("#")]),t._v(" 本地方法接口")]),t._v(" "),s("h2",{attrs:{id:"执行引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行引擎"}},[t._v("#")]),t._v(" 执行引擎")]),t._v(" "),s("h3",{attrs:{id:"解释器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释器"}},[t._v("#")]),t._v(" 解释器")]),t._v(" "),s("h3",{attrs:{id:"即时编译器jit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#即时编译器jit"}},[t._v("#")]),t._v(" 即时编译器JIT")]),t._v(" "),s("h3",{attrs:{id:"垃圾回收器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器"}},[t._v("#")]),t._v(" 垃圾回收器")])])}),[],!1,null,null,null);a.default=_.exports}}]);