webpackJsonp([16],{116:function(s,t,a){var n=a(20)(null,a(140),null,null);s.exports=n.exports},140:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("命名规范")]),s._v(" "),a("h3",[s._v("概要")]),s._v(" "),a("blockquote",[a("p",[s._v("在开发过程中，良好的代码命名规范可以大大提高并行开发的效率，以下针对开发中可能遇到的需要命名的地方做出统一的命名规范")])]),s._v(" "),a("br"),s._v(" "),a("h3",[s._v("1.引用组件的命名规则")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),a("br"),s._v(" "),a("h3",[s._v("2.组件中UI的class命名规范")]),s._v(" "),a("p",[s._v("  在开发的过程中，div的class属性需要根据功能来命名，例如：")]),s._v(" "),s._m(2)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("  在vue开发过程中，很多情况下需要引用组件，这里的组件命名规则为："),a("code",[s._v("组件应用模块简写-组件名称")]),s._v("，其中组件应用模块简写应根据组件在模块中的划分命名，例如组件属于我的文档模块，则命名为'doc',具体可参考以下代码示例")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"pug"')]),s._v(">")]),s._v("\n    .page\n        vue-header //头部组件\n        doc-list //属于我的文档模块的菜单组件\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text/babel"')]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("//组件的引入")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" header "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'../components/common/header.vue'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" menu "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'../components/document/menu.vue'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" list "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'../components/document/list.vue'")]),s._v("\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n\t"),a("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'examplePage'")]),s._v(",\n\t"),a("span",{staticClass:"hljs-comment"},[s._v("//组件在vue中注册后才可使用，这里要定义组件在当前vue实例中的名称")]),s._v("\n\tcomponents: {\n\t\t"),a("span",{staticClass:"hljs-string"},[s._v("'vue-header'")]),s._v(": header,\n\t\t"),a("span",{staticClass:"hljs-string"},[s._v("'doc-menu'")]),s._v(": menu,\n\t\t"),a("span",{staticClass:"hljs-string"},[s._v("'doc-list'")]),s._v(": list\n\t}\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"jade"')]),s._v(">")]),s._v("\n    .doc-page\n        .header\n        .container\n        .footer\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n")])])}]}},69:function(s,t,a){s.exports=a(116)}});