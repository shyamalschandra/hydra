(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{46:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",function(){return i}),r.d(n,"rightToc",function(){return c}),r.d(n,"default",function(){return u});r(0);var t=r(78);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i={id:"search_path",title:"Config search path",sidebar_label:"Config search path"},c=[],p={rightToc:c},l="wrapper";function u(e){var n=e.components,r=o(e,["components"]);return Object(t.b)(l,a({},p,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Hydra uses a search path approach to find configuration files as it composes your configuration object.\nThis is still work in progress, more details will be added here later."),Object(t.b)("p",null,"For now, you can inspect the search path and the configurations loaded by Hydra by turning on verbose logging for the ",Object(t.b)("inlineCode",{parentName:"p"},"hydra")," logger:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-text"}),"$ python demos/0_minimal/minimal.py  -v hydra\n")))}u.isMDXComponent=!0},78:function(e,n,r){"use strict";r.d(n,"a",function(){return c}),r.d(n,"b",function(){return s});var t=r(0),a=r.n(t),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},c=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=function(e){var n=e.components,r=e.mdxType,t=e.originalType,o=e.parentName,c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,s=p[o+"."+u]||p[u]||l[u]||t;return n?a.a.createElement(s,Object.assign({},c,{components:n})):a.a.createElement(s,c)};function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);