!function r(i,o,a){function s(t,e){if(!o[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=o[t]={exports:{}},i[t][0].call(n.exports,function(e){return s(i[t][1][e]||e)},n,n.exports,r,i,o,a)}return o[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,n){var r="undefined"!=typeof window?window.jQuery:e("jquery");t.exports.ThemeNav={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1,enable:function(t){var n=this;"undefined"==typeof withStickNav&&(t=!0),n.isRunning||(n.isRunning=!0,r(function(e){n.init(e),n.reset(),n.win.on("hashchange",n.reset),t&&n.win.on("scroll",function(){n.linkScroll||n.winScroll||(n.winScroll=!0,requestAnimationFrame(function(){n.onScroll()}))}),n.win.on("resize",function(){n.winResize||(n.winResize=!0,requestAnimationFrame(function(){n.onResize()}))}),n.onResize()}))},enableSticky:function(){this.enable(!0)},init:function(n){n(document);var r=this;this.navBar=n("div.wy-side-scroll:first"),this.win=n(window),n(document).on("click","[data-toggle='wy-nav-top']",function(){n("[data-toggle='wy-nav-shift']").toggleClass("shift"),n("[data-toggle='rst-versions']").toggleClass("shift")}).on("click",".wy-menu-vertical .current ul li a",function(){var e=n(this);n("[data-toggle='wy-nav-shift']").removeClass("shift"),n("[data-toggle='rst-versions']").toggleClass("shift"),r.toggleCurrent(e),r.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){n("[data-toggle='rst-versions']").toggleClass("shift-up")}),n("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>"),n("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>"),n("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>"),n(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var t=n(this);(expand=n('<span class="toctree-expand"></span>')).on("click",function(e){return r.toggleCurrent(t),e.stopPropagation(),!1}),t.prepend(expand)})},reset:function(){var e=encodeURI(window.location.hash)||"#";try{var t,n=$(".wy-menu-vertical"),r=n.find('[href="'+e+'"]');0===r.length&&(t=$('.document [id="'+e.substring(1)+'"]').closest("div.section"),0===(r=n.find('[href="#'+t.attr("id")+'"]')).length&&(r=n.find('[href="#"]'))),0<r.length&&($(".wy-menu-vertical .current").removeClass("current"),r.addClass("current"),r.closest("li.toctree-l1").addClass("current"),r.closest("li.toctree-l1").parent().addClass("current"),r.closest("li.toctree-l1").addClass("current"),r.closest("li.toctree-l2").addClass("current"),r.closest("li.toctree-l3").addClass("current"),r.closest("li.toctree-l4").addClass("current"))}catch(e){console.log("Error expanding nav for anchor",e)}},onScroll:function(){this.winScroll=!1;var e=this.win.scrollTop(),t=e+this.winHeight,n=this.navBar.scrollTop()+(e-this.winPosition);e<0||t>this.docHeight||(this.navBar.scrollTop(n),this.winPosition=e)},onResize:function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},hashChange:function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},toggleCurrent:function(e){e=e.closest("li");e.siblings("li.current").removeClass("current"),e.siblings().find("li.current").removeClass("current"),e.find("> ul li.current").removeClass("current"),e.toggleClass("current")}},"undefined"!=typeof window&&(window.SphinxRtdTheme={Navigation:t.exports.ThemeNav,StickyNav:t.exports.ThemeNav});for(var o=0,i=["ms","moz","webkit","o"],a=0;a<i.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[i[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[a]+"CancelAnimationFrame"]||window[i[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-o)),i=window.setTimeout(function(){e(n+r)},r);return o=n+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})},{jquery:"jquery"}],2:[function(e,t,n){var r=e("cssfilter").FilterCSS,i=e("cssfilter").getDefaultWhiteList,d=e("./util");function o(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var a=new r;function s(e){return e.replace(l,"&lt;").replace(c,"&gt;")}var l=/</g,c=/>/g,u=/"/g,h=/&quot;/g,p=/&#([a-zA-Z0-9]*);?/gim,g=/&colon;?/gim,f=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,v=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,b=/u\s*r\s*l\s*\(.*/gi;function w(e){return e.replace(u,"&quot;")}function y(e){return e.replace(h,'"')}function _(e){return e.replace(p,function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))})}function x(e){return e.replace(g,":").replace(f," ")}function k(e){for(var t="",n=0,r=e.length;n<r;n++)t+=e.charCodeAt(n)<32?" ":e.charAt(n);return d.trim(t)}function T(e){return e=k(e=x(e=_(e=y(e))))}function E(e){return e=s(e=w(e))}var A=/<!--[\s\S]*?-->/g;n.whiteList=o(),n.getDefaultWhiteList=o,n.onTag=function(e,t,n){},n.onIgnoreTag=function(e,t,n){},n.onTagAttr=function(e,t,n){},n.onIgnoreTagAttr=function(e,t,n){},n.safeAttrValue=function(e,t,n,r){if(n=T(n),"href"===t||"src"===t){if("#"===(n=d.trim(n)))return"#";if("http://"!==n.substr(0,7)&&"https://"!==n.substr(0,8)&&"mailto:"!==n.substr(0,7)&&"tel:"!==n.substr(0,4)&&"#"!==n[0]&&"/"!==n[0])return""}else if("background"===t){if(m.lastIndex=0,m.test(n))return""}else if("style"===t){if(v.lastIndex=0,v.test(n))return"";if(b.lastIndex=0,b.test(n)&&(m.lastIndex=0,m.test(n)))return"";!1!==r&&(n=(r=r||a).process(n))}return n=E(n)},n.escapeHtml=s,n.escapeQuote=w,n.unescapeQuote=y,n.escapeHtmlEntities=_,n.escapeDangerHtml5Entities=x,n.clearNonPrintableCharacter=k,n.friendlyAttrValue=T,n.escapeAttrValue=E,n.onIgnoreTagStripAll=function(){return""},n.StripTagBody=function(o,a){"function"!=typeof a&&(a=function(){});var s=!Array.isArray(o),l=[],c=!1;return{onIgnoreTag:function(e,t,n){var r,i;return i=e,s||-1!==d.indexOf(o,i)?n.isClosing?(r=n.position+(i="[/removed]").length,l.push([!1!==c?c:n.position,r]),c=!1,i):(c=c||n.position,"[removed]"):a(e,t,n)},remove:function(t){var n="",r=0;return d.forEach(l,function(e){n+=t.slice(r,e[0]),r=e[1]}),n+=t.slice(r)}}},n.stripCommentTag=function(e){return e.replace(A,"")},n.stripBlankChar=function(e){return e.split("").filter(function(e){e=e.charCodeAt(0);return 127!==e&&(!(e<=31)||(10===e||13===e))}).join("")},n.cssFilter=a,n.getDefaultCSSWhiteList=i},{"./util":5,cssfilter:9}],3:[function(e,t,n){var r,i=e("./default"),o=e("./parser"),a=e("./xss");for(r in(n=t.exports=function(e,t){return new a(t).process(e)}).FilterXSS=a,i)n[r]=i[r];for(r in o)n[r]=o[r];"undefined"!=typeof window&&(window.filterXSS=t.exports)},{"./default":2,"./parser":4,"./xss":6}],4:[function(e,t,n){var g=e("./util");var d=/[^a-zA-Z0-9_:\.\-]/gim;function u(e){return'"'===(t=e)[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]?e.substr(1,e.length-2):e;var t}n.parseTag=function(e,t,n){for(var r,i,o,a="",s=0,l=!1,c=!1,d=0,u=e.length,h="",d=0;d<u;d++){var p=e.charAt(d);!1===l?"<"===p&&(l=d):!1===c?"<"===p?(a+=n(e.slice(s,d)),s=l=d):">"===p?(a+=n(e.slice(s,l)),r=e.slice(l,d+1),i=r,o=void 0,o=g.spaceIndex(i),i=-1===o?i.slice(1,-1):i.slice(1,o+1),h=i="/"===(i="/"===(i=g.trim(i).toLowerCase()).slice(0,1)?i.slice(1):i).slice(-1)?i.slice(0,-1):i,a+=t(l,a.length,h,r,"</"===r.slice(0,2)),s=d+1,l=!1):'"'!==p&&"'"!==p||"="!==e.charAt(d-1)||(c=p):p===c&&(c=!1)}return s<e.length&&(a+=n(e.substr(s))),a},n.parseAttr=function(e,n){var t=0,r=[],i=!1,o=e.length;function a(e,t){(e=(e=g.trim(e)).replace(d,"").toLowerCase()).length<1||(e=n(e,t||""))&&r.push(e)}for(var s=0;s<o;s++){var l,c=e.charAt(s);if(!1===i&&"="===c)i=e.slice(t,s),t=s+1;else if(!1===i||s!==t||'"'!==c&&"'"!==c||"="!==e.charAt(s-1))/\s|\n|\t/.test(c)&&(e=e.replace(/\s|\n|\t/g," "),!1===i?-1!==(l=function(e,t){for(;t<e.length;t++){var n=e[t];if(" "!==n)return"="===n?t:-1}}(e,s))?s=l-1:(a(g.trim(e.slice(t,s))),i=!1,t=s+1):-1===(l=function(e,t){for(;0<t;t--){var n=e[t];if(" "!==n)return"="===n?t:-1}}(e,s-1))&&(a(i,u(g.trim(e.slice(t,s)))),i=!1,t=s+1));else{if(-1===(l=e.indexOf(c,s+1)))break;a(i,g.trim(e.slice(t+1,l))),i=!1,t=(s=l)+1}}return t<e.length&&(!1===i?a(e.slice(t)):a(i,u(g.trim(e.slice(t))))),g.trim(r.join(" "))}},{"./util":5}],5:[function(e,t,n){t.exports={indexOf:function(e,t){var n,r;if(Array.prototype.indexOf)return e.indexOf(t);for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},forEach:function(e,t,n){var r,i;if(Array.prototype.forEach)return e.forEach(t,n);for(r=0,i=e.length;r<i;r++)t.call(n,e[r],r,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){e=/\s|\n|\t/.exec(e);return e?e.index:-1}}},{}],6:[function(e,t,n){var r=e("cssfilter").FilterCSS,i=e("./default"),o=e("./parser"),a=o.parseTag,f=o.parseAttr,m=e("./util");function v(e){return null==e}function s(e){(e=function(e){var t,n={};for(t in e)n[t]=e[t];return n}(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=i.onIgnoreTagStripAll),e.whiteList=e.whiteList||i.whiteList,e.onTag=e.onTag||i.onTag,e.onTagAttr=e.onTagAttr||i.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||i.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||i.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||i.safeAttrValue,e.escapeHtml=e.escapeHtml||i.escapeHtml,!1===(this.options=e).css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new r(e.css))}s.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,s=t.whiteList,l=t.onTag,c=t.onIgnoreTag,d=t.onTagAttr,u=t.onIgnoreTagAttr,h=t.safeAttrValue,p=t.escapeHtml,g=this.cssFilter,n=(t.stripBlankChar&&(e=i.stripBlankChar(e)),t.allowCommentTag||(e=i.stripCommentTag(e)),!1),t=(t.stripIgnoreTagBody&&(c=(n=i.StripTagBody(t.stripIgnoreTagBody,c)).onIgnoreTag),a(e,function(e,t,i,n,r){e={sourcePosition:e,position:t,isClosing:r,isWhite:i in s},t=l(i,n,e);if(!v(t))return t;if(e.isWhite){if(e.isClosing)return"</"+i+">";r=n;var r=-1===(a=m.spaceIndex(r))?{html:"",closing:"/"===r[r.length-2]}:{html:r=(a="/"===(r=m.trim(r.slice(a+1,-1)))[r.length-1])?m.trim(r.slice(0,-1)):r,closing:a},o=s[i],a=f(r.html,function(e,t){var n=-1!==m.indexOf(o,e),r=d(i,e,t,n);return v(r)?n?(t=h(i,e,t,g))?e+'="'+t+'"':e:v(r=u(i,e,t,n))?void 0:r:r}),n="<"+i;return a&&(n+=" "+a),r.closing&&(n+=" /"),n+=">"}return v(t=c(i,n,e))?p(n):t},p));return t=n?n.remove(t):t},t.exports=s},{"./default":2,"./parser":4,"./util":5,cssfilter:9}],7:[function(e,t,n){var r=e("./default"),i=e("./parser");e("./util");function u(e){return null==e}function o(e){(e=e||{}).whiteList=e.whiteList||r.whiteList,e.onAttr=e.onAttr||r.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||r.onIgnoreAttr,this.options=e}o.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t=this.options,l=t.whiteList,c=t.onAttr,d=t.onIgnoreAttr;return i(e,function(e,t,n,r,i){var o,a=l[n],s=!1,a=(!0===a?s=a:"function"==typeof a?s=a(r):a instanceof RegExp&&(s=a.test(r)),{position:t,sourcePosition:e,source:i,isWhite:s=!0!==s?!1:s});return s?u(o=c(n,r,a))?n+":"+r:o:u(o=d(n,r,a))?void 0:o})},t.exports=o},{"./default":8,"./parser":10,"./util":11}],8:[function(e,t,n){function r(){var e={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return e}n.whiteList=r(),n.getDefaultWhiteList=r,n.onAttr=function(e,t,n){},n.onIgnoreAttr=function(e,t,n){}},{}],9:[function(e,t,n){var r,i=e("./default"),o=e("./css");for(r in(n=t.exports=function(e,t){return new o(t).process(e)}).FilterCSS=o,i)n[r]=i[r];"undefined"!=typeof window&&(window.filterCSS=t.exports)},{"./css":7,"./default":8}],10:[function(e,t,n){var d=e("./util");t.exports=function(r,i){";"!==(r=d.trimRight(r))[r.length-1]&&(r+=";");var e=r.length,o=!1,a=0,s=0,l="";function t(){var e,t,n;o||-1!==(t=(e=d.trim(r.slice(a,s))).indexOf(":"))&&(n=d.trim(e.slice(0,t)),t=d.trim(e.slice(t+1)),n&&(n=i(a,l.length,n,t,e))&&(l+=n+"; ")),a=s+1}for(;s<e;s++){var n=r[s];if("/"===n&&"*"===r[s+1]){var c=r.indexOf("*/",s+2);if(-1===c)break;a=(s=c+1)+1,o=!1}else"("===n?o=!0:")"===n?o=!1:";"===n?o||t():"\n"===n&&t()}return d.trim(l)}},{"./util":11}],11:[function(e,t,n){t.exports={indexOf:function(e,t){var n,r;if(Array.prototype.indexOf)return e.indexOf(t);for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},forEach:function(e,t,n){var r,i;if(Array.prototype.forEach)return e.forEach(t,n);for(r=0,i=e.length;r<i;r++)t.call(n,e[r],r,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}}},{}],12:[function(e,t,n){(n={THEME_RTD:"sphinx_rtd_theme",THEME_ALABASTER:"alabaster",THEME_MKDOCS_RTD:"readthedocs",THEME_CELERY:"sphinx_celery",THEME_BABEL:"babel",THEME_CLICK:"click",THEME_FLASK_SQLALCHEMY:"flask-sqlalchemy",THEME_FLASK:"flask",THEME_JINJA:"jinja",THEME_PLATTER:"platter",THEME_POCOO:"pocoo",THEME_WERKZEUG:"werkzeug",DEFAULT_PROMO_PRIORITY:5,MINIMUM_PROMO_PRIORITY:10,MAXIMUM_PROMO_PRIORITY:1,LOW_PROMO_PRIORITY:10}).ALABASTER_LIKE_THEMES=[n.THEME_ALABASTER,n.THEME_CELERY,n.THEME_BABEL,n.THEME_CLICK,n.THEME_FLASK_SQLALCHEMY,n.THEME_FLASK,n.THEME_JINJA,n.THEME_PLATTER,n.THEME_POCOO,n.THEME_WERKZEUG],n.PROMO_TYPES={LEFTNAV:"doc",FOOTER:"site-footer",FIXED_FOOTER:"fixed-footer"},t.exports=n},{}],13:[function(e,t,n){var r=e("./rtd-data"),i=e("./version-compare");t.exports={init:function(){var e=r.get(),t={project:e.project,version:e.version,page:e.page,theme:e.get_theme_name(),format:"jsonp"};"docroot"in e&&(t.docroot=e.docroot),"source_suffix"in e&&(t.source_suffix=e.source_suffix),0===window.location.pathname.indexOf("/projects/")&&(t.subproject=!0),$.ajax({url:e.proxied_api_host+"/api/v2/footer_html/",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"jsonp",data:t,cache:!0,jsonpCallback:"callback",success:function(e){var t;e.show_version_warning&&i.init(e.version_compare),e=e,(t=r.get()).is_sphinx_builder()&&t.is_rtd_like_theme()?$("div.rst-other-versions").html(e.html):$("body").append(e.html),e.version_active?e.version_supported:$(".rst-current-version").addClass("rst-out-of-date"),$.ajaxSetup({beforeSend:function(e,t){/^(GET|HEAD|OPTIONS|TRACE)$/.test(t.type)||e.setRequestHeader("X-CSRFToken",$("a.bookmark[token]").attr("token"))}})},error:function(){console.error("Error loading Read the Docs footer")}}),$.ajax({url:e.proxied_api_host+"/api/v2/analytics/",data:{project:e.project,version:e.version,absolute_uri:window.location.href},cache:!1,error:function(){console.error("Error registering page view")}})}}},{"./rtd-data":14,"./version-compare":18}],14:[function(e,t,n){var r=e("./constants"),i={is_rtd_like_theme:function(){return 1===$("div.rst-other-versions").length||(this.theme===r.THEME_RTD||this.theme===r.THEME_MKDOCS_RTD)},is_alabaster_like_theme:function(){return-1<r.ALABASTER_LIKE_THEMES.indexOf(this.get_theme_name())},is_sphinx_builder:function(){return!("builder"in this)||"mkdocs"!==this.builder},is_mkdocs_builder:function(){return"builder"in this&&"mkdocs"===this.builder},get_theme_name:function(){return this.theme},show_promo:function(){return("https://readthedocs.org"===this.api_host||"http://community.dev.readthedocs.io"===this.api_host||"http://127.0.0.1:8000"===this.api_host)&&!0!==this.ad_free}};t.exports={get:function(){var e=Object.create(i);return $.extend(e,{api_host:"https://readthedocs.org",ad_free:!1},window.READTHEDOCS_DATA),"proxied_api_host"in e||(e.proxied_api_host="/_"),e}}},{"./constants":12}],15:[function(e,t,n){var r=e("./rtd-data"),A=e("./../../../../../../bower_components/xss/lib/index"),S=3,C=100;function i(t){function e(k){function T(e,t){e.jquery?e.text(t):e.innerText=t}var r=$.Deferred(),e=document.createElement("a");e.href=t.proxied_api_host+"/api/v2/search/",e.search="?q="+encodeURIComponent(k)+"&project="+E+"&version="+i+"&language="+o,r.then(function(e){var t,n,r,i=e.results||[];if(i.length){for(var o=0;o<i.length;o+=1){var a=i[o],s=a.blocks,l=$("<li>"),c=a.title,d=(a.highlights.title.length&&(c=A(a.highlights.title[0])),a.path+"?highlight="+encodeURIComponent(k)),u=$("<a>",{href:d});u.html(c),u.find("span").addClass("highlighted"),l.append(u),a.project!==E&&(c=" (from project "+a.project_alias+")",u=$("<span>",{text:c}),l.append(u));for(var h=0;h<s.length;h+=1){var p,g=s[h],f=$('<div class="context">');if("section"===g.type){var m=g,v=m.title,b=d+"#"+m.id,w=[m.content.substr(0,C)+" ..."];if(m.highlights.title.length&&(v=A(m.highlights.title[0])),m.highlights.content.length)for(var y=m.highlights.content,w=[],x=0;x<y.length&&x<S;x+=1)w.push("... "+A(y[x])+" ...");f.append(function(e,t,n){var r=document.createElement("div"),i=document.createElement("a");i.href=t,i.innerHTML=e,r.appendChild(i),html=r.outerHTML;for(var o=0;o<n.length;o+=1){var a=document.createElement("div");a.innerHTML=n[o],html+=a.outerHTML}return html}(v,b,w))}"domain"===g.type&&(v=(m=g).role,b=d+"#"+m.id,g=m.name,(p="")!==m.content&&(p=m.content.substr(0,C)+" ..."),m.highlights.content.length&&(p="... "+A(m.highlights.content[0])+" ..."),g="["+v+"]: "+(g=m.highlights.name.length?A(m.highlights.name[0]):g),f.append((g=g,t=b,p=p,r=n=void 0,n=document.createElement("div"),(r=document.createElement("a")).href=t,r.innerHTML=g,n.appendChild(r),(t=document.createElement("div")).innerHTML=p,n.outerHTML+t.outerHTML))),f.find("span").addClass("highlighted"),l.append(f),h<s.length-1&&l.append($("<div class='rtd_search_hits_spacing'></div>"))}Search.output.jquery?Search.output.append(l):Search.output.appendChild(l.get(0))}T(Search.status,_("Search finished, found %s page(s) matching the search query.").replace("%s",i.length))}else console.log("Read the Docs search failed. Falling back to Sphinx search."),Search.query_fallback(k)}).fail(function(e){console.debug("Read the Docs search failed. Falling back to Sphinx search."),Search.query_fallback(k)}).always(function(){$("#search-progress").empty(),Search.stopPulse(),T(Search.title,_("Search Results"))}),$.ajax({url:e.href,crossDomain:!0,xhrFields:{withCredentials:!0},complete:function(e,t){return"success"!==t||void 0===e.responseJSON||0===e.responseJSON.count?r.reject():r.resolve(e.responseJSON)}}).fail(function(e,t,n){return r.reject()})}var n,E=t.project,i=t.version,o=t.language||"en";"undefined"!=typeof Search&&E&&i&&(t.features&&t.features.docsearch_disabled?console.log("Server side search is disabled."):(n=Search.query,Search.query_fallback=n,Search.query=e)),$(document).ready(function(){"undefined"!=typeof Search&&Search.init()})}function o(n){function b(){void 0!==window.doSearchFallback?window.doSearchFallback():console.log("Unable to fallback to original MkDocs search.")}function r(){var e=document.getElementById("mkdocs-search-query").value,r=$.Deferred(),t=document.createElement("a");t.href=n.proxied_api_host+"/api/v2/search/",t.search="?q="+encodeURIComponent(e)+"&project="+w+"&version="+i+"&language="+o,r.then(function(e){var t=e.results||[];if(t.length){var n=$("#mkdocs-search-results");n.empty();for(var r=0;r<t.length;r+=1){var i=t[r],o=i.blocks,a=i.path,s=$("<article>");s.append($("<h3>").append($("<a>",{href:a,text:i.title}))),i.project!==w&&(i="(from project "+i.project_alias+")",s.append($("<span>",{text:i})));for(var l=0;l<o.length;l+=1){var c=o[l];if("section"===c.type){var d=a+"#"+c.id,u=c.title,h=c.content,p=[h=h.length>C?h.substr(0,C)+" ...":h];if(c.highlights.title.length&&(u=c.highlights.title[0]),c.highlights.content.length)for(var g=c.highlights.content,p=[],f=0;f<g.length&&f<S;f+=1)p.push("... "+g[f]+" ...");u=A(u).replace(/<span>/g,"<mark>").replace(/<\/span>/g,"</mark>"),s.append($("<h4>").append($("<a>",{href:d}).html(u)));for(var m=0;m<p.length;m+=1){var v=(v=A(p[m])).replace(/<span>/g,"<mark>").replace(/<\/span>/g,"</mark>");s.append($("<p>").html(v))}n.append(s)}}}}else console.log("Read the Docs search returned 0 result. Falling back to MkDocs search."),b()}).fail(function(e){console.log("Read the Docs search failed. Falling back to MkDocs search."),b()}),$.ajax({url:t.href,crossDomain:!0,xhrFields:{withCredentials:!0},complete:function(e,t){return"success"!==t||void 0===e.responseJSON||0===e.responseJSON.count?r.reject():r.resolve(e.responseJSON)}}).fail(function(e,t,n){return r.reject()})}function e(){var e=document.getElementById("mkdocs-search-query"),t=(e&&e.addEventListener("keyup",r),window.getSearchTermFromLocation());t&&(e.value=t,r())}var w=n.project,i=n.version,o=n.language||"en";$(document).ready(function(){window.doSearchFallback=window.doSearch,window.doSearch=r,(window.initSearch=e)()})}t.exports={init:function(){var e=r.get();e.is_sphinx_builder()?i(e):e.features&&!e.features.docsearch_disabled?o(e):console.log("Server side search is disabled.")}}},{"./../../../../../../bower_components/xss/lib/index":3,"./rtd-data":14}],16:[function(r,e,t){var i=r("./rtd-data");e.exports={init:function(){var e,t,n=i.get();$(document).on("click","[data-toggle='rst-current-version']",function(){var e=$("[data-toggle='rst-versions']").hasClass("shift-up")?"was_open":"was_closed";"undefined"!=typeof READTHEDOCS_DATA&&READTHEDOCS_DATA.global_analytics_code&&("undefined"!=typeof gtag?gtag("event","Click",{event_category:"Flyout",event_label:e,send_to:"rtfd"}):"undefined"!=typeof ga?ga("rtfd.send","event","Flyout","Click",e):"undefined"!=typeof _gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Flyout","Click",e]))}),void 0===window.SphinxRtdTheme&&(e=r("./../../../../../../bower_components/sphinx-rtd-theme/js/theme.js").ThemeNav,$(document).ready(function(){setTimeout(function(){e.navBar||e.enable()},1e3)}),n.is_rtd_like_theme()&&!$("div.wy-side-scroll:first").length&&(console.log("Applying theme sidebar fix..."),n=$("nav.wy-nav-side:first"),t=$("<div />").addClass("wy-side-scroll"),n.children().detach().appendTo(t),t.prependTo(n),e.navBar=t))}}},{"./../../../../../../bower_components/sphinx-rtd-theme/js/theme.js":1,"./rtd-data":14}],17:[function(e,t,n){e("./constants");var s,l=e("./rtd-data"),c="[data-ea-publisher]",d="#ethical-ad-placement";function u(){var e=!1;return $("<div />").attr("id","rtd-detection").attr("class","ethical-rtd").html("&nbsp;").appendTo("body"),0===$("#rtd-detection").height()&&(e=!0),$("#rtd-detection").remove(),e}function h(){console.log("---------------------------------------------------------------------------------------"),console.log("Read the Docs hosts documentation for tens of thousands of open source projects."),console.log("We fund our development (we are open source) and operations through advertising."),console.log("We promise to:"),console.log(" - never let advertisers run 3rd party JavaScript"),console.log(" - never sell user data to advertisers or other 3rd parties"),console.log(" - only show advertisements of interest to developers"),console.log("Read more about our approach to advertising here: https://docs.readthedocs.io/en/latest/advertising/ethical-advertising.html"),console.log("%cPlease allow our Ethical Ads or go ad-free:","font-size: 2em"),console.log("https://docs.readthedocs.io/en/latest/advertising/ad-blocking.html"),console.log("--------------------------------------------------------------------------------------")}function p(e){e&&(e=e.attr("class","keep-us-sustainable"),$("<p />").text("Support Read the Docs!").appendTo(e),$("<p />").html('Please help keep us sustainable by <a href="https://docs.readthedocs.io/en/latest/advertising/ad-blocking.html#allowing-ethical-ads">allowing our Ethical Ads in your ad blocker</a> or <a href="https://readthedocs.org/sustainability/">go ad-free</a> by subscribing.').appendTo(e),$("<p />").text("Thank you! ❤️").appendTo(e))}t.exports={init:function(){var t,e,n,r,i,o,a;(s=l.get()).show_promo()&&(i=null,o="readthedocs-sidebar",t=0<$(c).length?($(c).attr("data-ea-publisher","readthedocs"),$(c).attr("data-ea-manual","true"),"image"!==$(c).attr("data-ea-type")&&"text"!==$(c).attr("data-ea-type")&&$(c).attr("data-ea-type","readthedocs-sidebar"),$(c)):(0<$(d).length?(i=d,e=s.is_rtd_like_theme()?"ethical-rtd ethical-dark-theme":"ethical-alabaster"):s.is_mkdocs_builder()&&s.is_rtd_like_theme()?(i="nav.wy-nav-side",e="ethical-rtd ethical-dark-theme"):s.is_rtd_like_theme()?(i="nav.wy-nav-side > div.wy-side-scroll",Math.random()<=.1?(n="stickybox",o="image"):e="ethical-rtd ethical-dark-theme"):s.is_alabaster_like_theme()&&(i="div.sphinxsidebar > div.sphinxsidebarwrapper",e="ethical-alabaster"),i?((!(a=(r=$("<div />").appendTo(i)).offset())||a.top-$(window).scrollTop()+200>$(window).height())&&(s.is_rtd_like_theme()?(i=$("<div />").insertAfter("footer hr"),e="ethical-rtd"):s.is_alabaster_like_theme()&&(i="div.bodywrapper .body",e="ethical-alabaster")),r.remove(),$("<div />").attr("id","rtd-sidebar").attr("data-ea-publisher","readthedocs").attr("data-ea-type",o).attr("data-ea-manual","true").attr("data-ea-style",n).addClass(e).appendTo(i)):null),(a=document.createElement("script")).src="https://media.ethicalads.io/media/client/beta/ethicalads.min.js",a.type="text/javascript",a.async=!0,a.id="ethicaladsjs",document.getElementsByTagName("head")[0].appendChild(a),$.ajax({url:s.api_host+"/api/v2/sustainability/data/",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"jsonp",data:{format:"jsonp",project:s.project},success:function(e){t&&!e.ad_free&&(e.keywords&&t.attr("data-ea-keywords",e.keywords.join("|")),e.campaign_types&&t.attr("data-ea-campaign-types",e.campaign_types.join("|")),e.publisher&&t.attr("data-ea-publisher",e.publisher),"undefined"!=typeof ethicalads?ethicalads.load():!s.ad_free&&u()?(h(),p(t)):$("#ethicaladsjs").on("load",function(){"undefined"!=typeof ethicalads&&ethicalads.load()}))},error:function(){console.error("Error loading Read the Docs user and project information"),!s.ad_free&&u()&&(h(),p(t))}}))}}},{"./constants":12,"./rtd-data":14}],18:[function(e,t,n){var a=e("./rtd-data");t.exports={init:function(e){var t=a.get();if(!e.is_highest)for(var t=window.location.pathname.replace(t.version,e.slug),n=$('<div class="admonition warning"> <p class="first admonition-title">Note</p> <p class="last"> You are not reading the most recent version of this documentation. <a href="#"></a> is the latest version available.</p></div>'),r=(n.find("a").attr("href",t).text(e.slug),["[role=main]","main","div.body","div.document"]),i=0;i<r.length;i+=1){var o=$(r[i]);if(o.length){o.prepend(n);break}}}}},{"./rtd-data":14}],19:[function(e,t,n){var r=e("./doc-embed/sponsorship"),i=e("./doc-embed/footer.js"),o=(e("./doc-embed/rtd-data"),e("./doc-embed/sphinx")),a=e("./doc-embed/search");function s(){i.init(),o.init(),a.init(),r.init()}e=function(){var e;window.jQuery?s():(console.log("JQuery not found. Injecting."),(e=document.createElement("script")).type="text/javascript",e.src="https://code.jquery.com/jquery-3.6.0.min.js",e.integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==",e.crossOrigin="anonymous",e.onload=s,document.head.appendChild(e))},"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e)},{"./doc-embed/footer.js":13,"./doc-embed/rtd-data":14,"./doc-embed/search":15,"./doc-embed/sphinx":16,"./doc-embed/sponsorship":17}]},{},[19]);