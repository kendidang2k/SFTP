!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=373)}({11:function(e,t){e.exports=wp.components},13:function(e,t){e.exports=wp.element},2:function(e,t){e.exports=wp.i18n},357:function(e,t){e.exports=wp.htmlEntities},373:function(e,t,r){"use strict";r.r(t);var n=r(39),o=r(2),i=r(40),a=r(357),c=r(13);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=r(5),p=r.n(s);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){return Object(c.createElement)("path",e)},m=function(e){var t=e.className,r=e.isPressed,n=f(f({},u(e,["className","isPressed"])),{},{className:p()(t,{"is-pressed":r})||void 0,role:"img","aria-hidden":!0,focusable:!1});return Object(c.createElement)("svg",n)},d=Object(c.createElement)(m,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(O,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),y=Object(c.createElement)(m,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(O,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),j=r(85),h=r(6),v=r(11);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=Object(v.withSpokenMessages)((function(e){var t=e.isActive,r=e.activeAttributes,a=e.addingLink,l=e.value,u=e.onChange,s=e.speak,p=e.stopAddingLink,b=e.contentRef,f=P(Object(c.useState)(),2),O=f[0],m=f[1],d=Object(h.isUndefined)(r["data-schema-attribute"])?[]:r["data-schema-attribute"].split(" "),y=w({url:r.url,type:r.type,id:r.id,opensInNewTab:"_blank"===r.target,noFollow:!Object(h.isUndefined)(r.rel)&&-1!==r.rel.indexOf("nofollow"),sponsored:!Object(h.isUndefined)(r.rel)&&-1!==r.rel.indexOf("sponsored"),about:d.includes("about"),mentions:d.includes("mentions")},O),g=Object(c.useRef)(!!a&&"firstElement"),k=[{id:"opensInNewTab",title:Object(o.__)("Open in new tab.","rank-math-pro")},{id:"noFollow",title:Object(o.__)("Set to nofollow.","rank-math-pro")},{id:"sponsored",title:Object(o.__)("Set to sponsored.","rank-math-pro")},{id:"about",title:Object(o.__)("Set to about.","rank-math-pro")},{id:"mentions",title:Object(o.__)("Set to mentions.","rank-math-pro")}],S=Object(n.useAnchorRef)({ref:b,value:l,settings:I});return wp.element.createElement(v.Popover,{anchorRef:S,focusOnMount:g.current,onClose:p,position:"bottom center"},wp.element.createElement(j.__experimentalLinkControl,{value:y,onChange:function(e){e=w(w({},O),e);var r=y.url===e.url&&(y.opensInNewTab!==e.opensInNewTab||y.noFollow!==e.noFollow||y.sponsored!==e.sponsored||y.about!==e.about||y.mentions!==e.mentions),a=r&&Object(h.isUndefined)(e.url);if(m(a?e:void 0),!a){var c=Object(i.prependHTTP)(e.url),b=function(e){var t=e.url,r=e.opensInNewWindow,n=e.noFollow,i=e.sponsored,a=e.about,c=e.mentions,l=e.text,u=e.type,s=e.id,p={type:"core/link",attributes:{url:t}},b=[],f=[];if(r){if(p.attributes.target="_blank",!Object(h.isUndefined)(l)){var O=Object(o.sprintf)(Object(o.__)("%s (opens in a new tab)","rank-math-pro"),l);p.attributes["aria-label"]=O}b.push("noreferrer noopener")}return u&&(p.attributes.type=u),s&&(p.attributes.id=s),n&&b.push("nofollow"),i&&b.push("sponsored"),a&&f.push("about"),c&&f.push("mentions"),f.length>0&&(p.attributes["data-schema-attribute"]=f.join(" ")),b.length>0&&(p.attributes.rel=b.join(" ")),p}({url:c,type:e.type,id:Object(h.isUndefined)(e.id)||Object(h.isNull)(e.id)?void 0:String(e.id),opensInNewWindow:e.opensInNewTab,noFollow:e.noFollow,sponsored:e.sponsored,about:e.about,mentions:e.mentions});if(Object(n.isCollapsed)(l)&&!t){var f=e.title||c,d=Object(n.applyFormat)(Object(n.create)({text:f}),b,0,f.length);u(Object(n.insert)(l,d))}else{var j=Object(n.applyFormat)(l,b);j.start=j.end,j.activeFormats=[],u(j)}r||p(),!function(e){if(!e)return!1;var t=e.trim();if(!t)return!1;if(/^\S+:/.test(t)){var r=Object(i.getProtocol)(t);if(!Object(i.isValidProtocol)(r))return!1;if(Object(h.startsWith)(r,"http")&&!/^https?:\/\/[^\/\s]/i.test(t))return!1;var n=Object(i.getAuthority)(t);if(!Object(i.isValidAuthority)(n))return!1;var o=Object(i.getPath)(t);if(o&&!Object(i.isValidPath)(o))return!1;var a=Object(i.getQueryString)(t);if(a&&!Object(i.isValidQueryString)(a))return!1;var c=Object(i.getFragment)(t);if(c&&!Object(i.isValidFragment)(c))return!1}return!(Object(h.startsWith)(t,"#")&&!Object(i.isValidFragment)(t))}(c)?s(Object(o.__)("Warning: the link has been inserted but may have errors. Please test it.","rank-math-pro"),"assertive"):s(t?Object(o.__)("Link edited.","rank-math-pro"):Object(o.__)("Link inserted.","rank-math-pro"),"assertive")}},forceIsEditingLink:a,settings:k}))}));function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F="core/link";var C=function(e){var t=e.isActive,r=e.activeAttributes,a=e.value,l=e.onChange,u=e.onFocus,s=e.contentRef,p=A(Object(c.useState)(!1),2),b=p[0],f=p[1];function O(){var e=Object(n.getTextContent)(Object(n.slice)(a));e&&Object(i.isURL)(e)?l(Object(n.applyFormat)(a,{type:F,attributes:{url:e}})):e&&Object(i.isEmail)(e)?l(Object(n.applyFormat)(a,{type:F,attributes:{url:"mailto:".concat(e)}})):f(!0)}function m(){var e=a;e=Object(n.removeFormat)(e,"core/link"),l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}return wp.element.createElement(React.Fragment,null,wp.element.createElement(j.RichTextShortcut,{type:"primary",character:"k",onUse:O}),wp.element.createElement(j.RichTextShortcut,{type:"primaryShift",character:"k",onUse:m}),t&&wp.element.createElement(j.RichTextToolbarButton,{name:"link",className:"rank-math-link-control",icon:d,title:Object(o.__)("Unlink","rank-math"),onClick:m,isActive:t,shortcutType:"primaryShift",shortcutCharacter:"k"}),!t&&wp.element.createElement(j.RichTextToolbarButton,{name:"link",className:"rank-math-link-control",icon:y,title:Object(o.__)("Link","rank-math"),onClick:O,isActive:t,shortcutType:"primary",shortcutCharacter:"k"}),(b||t)&&wp.element.createElement(x,{addingLink:b,stopAddingLink:function(){f(!1),u()},isActive:t,activeAttributes:r,value:a,onChange:l,contentRef:s}))},I={name:"core/link",title:Object(o.__)("Link","rank-math-pro"),tagName:"a",className:null,attributes:{url:"href",type:"data-type",id:"data-id",target:"target",rel:"rel","data-schema-attribute":"data-schema-attribute"},__unstablePasteRule:function(e,t){var r=t.html,o=t.plainText;if(Object(n.isCollapsed)(e))return e;var c=(r||o).replace(/<[^>]+>/g,"").trim();return Object(i.isURL)(c)?(window.console.log("Created link:\n\n",c),Object(n.applyFormat)(e,{type:"core/link",attributes:{url:Object(a.decodeEntities)(c)}})):e},edit:C},N=["name"];function R(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}wp.domReady((function(){[I].forEach((function(e){var t=e.name,r=R(e,N);t&&(Object(n.unregisterFormatType)("core/link"),Object(n.registerFormatType)(t,r))}))}))},39:function(e,t){e.exports=wp.richText},40:function(e,t){e.exports=wp.url},5:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6:function(e,t){e.exports=lodash},85:function(e,t){e.exports=wp.blockEditor}});