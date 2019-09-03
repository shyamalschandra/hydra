(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{44:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",function(){return o}),r.d(n,"rightToc",function(){return l}),r.d(n,"default",function(){return p});r(0);var t=r(78);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o={id:"plugins",title:"Hydra plugins",sidebar_label:"Hydra plugins"},l=[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]},{value:"SearchPathPlugin",id:"searchpathplugin",children:[]}],c={rightToc:l},u="wrapper";function p(e){var n=e.components,r=i(e,["components"]);return Object(t.b)(u,a({},c,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Hydra has a plugin architecture.\nPlugin types includes:"),Object(t.b)("h2",{id:"sweeper"},"Sweeper"),Object(t.b)("p",null,"A sweeper is responsible for convert a command line into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{}),"hydra/launcher=fairtask optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),Object(t.b)("p",null,"And launches 4 jobs with the following parameters:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{}),"hydra/launcher=fairtask optimizer=nesterov learning_rate=0.01\nhydra/launcher=fairtask optimizer=nesterov learning_rate=0.1\nhydra/launcher=fairtask optimizer=adam learning_rate=0.01\nhydra/launcher=fairtask optimizer=adam learning_rate=0.1\n")),Object(t.b)("h2",{id:"launcher"},"Launcher"),Object(t.b)("p",null,"A launcher is taking a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose a it's configuration.\nThe basic launcher simply launches the job locally "),Object(t.b)("h2",{id:"searchpathplugin"},"SearchPathPlugin"),Object(t.b)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),Object(t.b)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."))}p.isMDXComponent=!0},78:function(e,n,r){"use strict";r.d(n,"a",function(){return l}),r.d(n,"b",function(){return s});var t=r(0),a=r.n(t),i=a.a.createContext({}),o=function(e){var n=a.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},l=function(e){var n=o(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=function(e){var n=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,l=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),c=o(n),p=r,s=c[i+"."+p]||c[p]||u[p]||t;return n?a.a.createElement(s,Object.assign({},l,{components:n})):a.a.createElement(s,l)};function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);