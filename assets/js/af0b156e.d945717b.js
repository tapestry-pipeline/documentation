"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={id:"prerequisites",title:"Prerequisites",slug:"/prequisites",hide_table_of_contents:!0},c=void 0,s={unversionedId:"prerequisites",id:"prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"- Node.js (v12+)",source:"@site/docs/prerequisites.md",sourceDirName:".",slug:"/prequisites",permalink:"/documentation/prequisites",version:"current",frontMatter:{id:"prerequisites",title:"Prerequisites",slug:"/prequisites",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/documentation/"},next:{title:"Installation",permalink:"/documentation/installation"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node.js (v12+)"),(0,i.kt)("li",{parentName:"ul"},"NPM"),(0,i.kt)("li",{parentName:"ul"},"AWS Account"),(0,i.kt)("li",{parentName:"ul"},"AWS CLI configured locally"),(0,i.kt)("li",{parentName:"ul"},"Docker")),(0,i.kt)("p",null,"You'll need to have the above accounts and tools before running any Tapestry commands. Being that Tapestry is an Node package, both Node.js and NPM must be installed on your machine. Tapestry also requires you to have an AWS account and the AWS CLI configured locally since it relies your local environment to spin up AWS resources. Finally, Tapestry uses Docker images and containers to run both the ingestion and syncing phases of your pipeline, and so you must have Docker installed and running on your machine."))}f.isMDXComponent=!0}}]);