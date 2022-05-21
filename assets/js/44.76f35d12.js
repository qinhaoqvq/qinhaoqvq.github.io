(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{627:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[t._v("#")]),t._v(" 是什么？")]),t._v(" "),a("p",[t._v("axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。是前端流行的 ajax 请求框架，它是 React 和 Vue 推荐使用的")]),t._v(" "),a("h2",{attrs:{id:"能干嘛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#能干嘛"}},[t._v("#")]),t._v(" 能干嘛？")]),t._v(" "),a("ul",[a("li",[t._v("通过浏览器创建 XMLHttpRequest 对象，发送 ajax 请求")]),t._v(" "),a("li",[t._v("从 node.js 创建 http 请求")]),t._v(" "),a("li",[t._v("支持 Promise API")]),t._v(" "),a("li",[t._v("支持拦截请求和响应数据")]),t._v(" "),a("li",[t._v("支持取消请求")]),t._v(" "),a("li",[t._v("客户端支持防御 XSRF")])]),t._v(" "),a("h2",{attrs:{id:"怎么用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么用"}},[t._v("#")]),t._v(" 怎么用？")]),t._v(" "),a("h3",{attrs:{id:"发送请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送请求"}},[t._v("#")]),t._v(" 发送请求")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("调用函数："),a("code",[t._v("axios({config})")])])]),t._v(" "),a("li",[a("p",[t._v("对象方法："),a("code",[t._v("axios.request(config)")]),t._v("或"),a("code",[t._v("axios.get(url,config)")]),t._v("或"),a("code",[t._v("axios.post(url,data,config)")])])]),t._v(" "),a("li",[a("p",[t._v("通过创建 axios 对象，然后调用方法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseURL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://some-domain.com/api/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headers")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'X-Custom-Header'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foobar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"接收响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接收响应"}},[t._v("#")]),t._v(" 接收响应")]),t._v(" "),a("p",[t._v("响应数据包括以下 6 部分")]),t._v(" "),a("ol",[a("li",[t._v("data：请求服务器响应的数据")]),t._v(" "),a("li",[t._v("status：响应 HTTP 状态码")]),t._v(" "),a("li",[t._v("statusText：响应 HTTP 状态信息")]),t._v(" "),a("li",[t._v("headers：响应头信息")]),t._v(" "),a("li",[t._v("config：请求配置信息")]),t._v(" "),a("li",[t._v("request：（ajax）XMLHttpRequest 实例对象或（node.js）ClientRequest 实例对象")])]),t._v(" "),a("h3",{attrs:{id:"创建-axios-实例对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-axios-实例对象"}},[t._v("#")]),t._v(" 创建 axios 实例对象")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseURL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://some-domain.com/api/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headers")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'X-Custom-Header'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foobar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"请求配置对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求配置对象"}},[t._v("#")]),t._v(" 请求配置对象")]),t._v(" "),a("ol",[a("li",[t._v("url")]),t._v(" "),a("li",[t._v("method")]),t._v(" "),a("li",[t._v("baseURL")]),t._v(" "),a("li",[t._v("headers")]),t._v(" "),a("li",[t._v("params：是即将与请求一起发送的 URL 参数，必须是 plain 对象或 URLSearchParams 对象")]),t._v(" "),a("li",[t._v("data：是请求主体的数据对象")]),t._v(" "),a("li",[t._v("timeout：请求超时时间")]),t._v(" "),a("li",[t._v("withCredentials：表示跨域时是否需要使用凭证")]),t._v(" "),a("li",[t._v("responseType：服务器响应数据类型")]),t._v(" "),a("li",[t._v("responseEncoding：服务器响应数据编码格式")]),t._v(" "),a("li",[t._v("maxContentLength：指定最大的响应内容长度")]),t._v(" "),a("li",[t._v("cancelToken：指定用于取消请求的 cancle token")]),t._v(" "),a("li",[t._v("proxy：")])]),t._v(" "),a("p",[t._v("请求配置对象可以通过"),a("code",[t._v("全局的 axios.defaults 默认值属性")]),t._v("、"),a("code",[t._v("lib/defaults.js文件")]),t._v("和"),a("code",[t._v("请求时传入的config参数")]),t._v("三个地方进行配置，配置会以一个优先顺序进行"),a("strong",[t._v("合并")]),t._v("。优先级：config > defaults > defaults.js")]),t._v(" "),a("h3",{attrs:{id:"拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拦截器"}},[t._v("#")]),t._v(" 拦截器")]),t._v(" "),a("h4",{attrs:{id:"添加拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加拦截器"}},[t._v("#")]),t._v(" 添加拦截器")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("const i_req = axios.interceptors.request.use(function(config){},function(error){})")])]),t._v(" "),a("li",[a("code",[t._v("const i_res = axios.interceptors.response.use(function(response){},function(error){})")])])]),t._v(" "),a("h4",{attrs:{id:"取消拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消拦截器"}},[t._v("#")]),t._v(" 取消拦截器")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("axios.interceptors.request.eject(i_req)")])]),t._v(" "),a("li",[a("code",[t._v("axios.interceptors.response.eject(i_res)")])])]),t._v(" "),a("h3",{attrs:{id:"取消请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消请求"}},[t._v("#")]),t._v(" 取消请求")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CancelToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CancelToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\naxios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/query'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cancelToken")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancelToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// executor 函数接收一个 cancel 函数作为参数")]),t._v("\n    cancel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cancel the request")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);