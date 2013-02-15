/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(e,t,n){function i(e){return e}function s(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g,o=e.cookie=function(r,u,a){if(u!==n){a=e.extend({},o.defaults,a),u===null&&(a.expires=-1);if(typeof a.expires=="number"){var f=a.expires,l=a.expires=new Date;l.setDate(l.getDate()+f)}return u=o.json?JSON.stringify(u):String(u),t.cookie=[encodeURIComponent(r),"=",o.raw?u:encodeURIComponent(u),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=o.raw?i:s,h=t.cookie.split("; ");for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");if(c(v.shift())===r){var m=c(v.join("="));return o.json?JSON.parse(m):m}}return null};o.defaults={},e.removeCookie=function(t,n){return e.cookie(t)!==null?(e.cookie(t,null,n),!0):!1}})(jQuery,document),function(e,t,n,r){var i=n(e),s=n(t),o=n.fancybox=function(){o.open.apply(this,arguments)},u=null,a=t.createTouch!==r,f=function(e){return e&&e.hasOwnProperty&&e instanceof n},l=function(e){return e&&"string"===n.type(e)},c=function(e){return l(e)&&0<e.indexOf("%")},h=function(e,t){var n=parseInt(e,10)||0;return t&&c(e)&&(n*=o.getViewport()[t]/100),Math.ceil(n)},p=function(e,t){return h(e,t)+"px"};n.extend(o,{version:"2.1.3",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!a,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(n.browser.msie?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(n.isPlainObject(t)||(t={}),!1!==o.close(!0)))return n.isArray(e)||(e=f(e)?n(e).get():[e]),n.each(e,function(i,s){var u={},a,c,h,p,v;"object"===n.type(s)&&(s.nodeType&&(s=n(s)),f(s)?(u={href:s.data("fancybox-href")||s.attr("href"),title:s.data("fancybox-title")||s.attr("title"),isDom:!0,element:s},n.metadata&&n.extend(!0,u,s.metadata())):u=s),a=t.href||u.href||(l(s)?s:null),c=t.title!==r?t.title:u.title||"",p=(h=t.content||u.content)?"html":t.type||u.type,!p&&u.isDom&&(p=s.data("fancybox-type"),p||(p=(p=s.prop("class").match(/fancybox\.(\w+)/))?p[1]:null)),l(a)&&(p||(o.isImage(a)?p="image":o.isSWF(a)?p="swf":"#"===a.charAt(0)?p="inline":l(s)&&(p="html",h=s)),"ajax"===p&&(v=a.split(/\s+/,2),a=v.shift(),v=v.shift())),h||("inline"===p?a?h=n(l(a)?a.replace(/.*(?=#[^\s]+$)/,""):a):u.isDom&&(h=s):"html"===p?h=a:!p&&!a&&u.isDom&&(p="inline",h=s)),n.extend(u,{href:a,type:p,content:h,title:c,selector:v}),e[i]=u}),o.opts=n.extend(!0,{},o.defaults,t),t.keys!==r&&(o.opts.keys=t.keys?n.extend({},o.defaults.keys,t.keys):!1),o.group=e,o._start(o.opts.index)},cancel:function(){var e=o.coming;e&&!1!==o.trigger("onCancel")&&(o.hideLoading(),o.ajaxLoad&&o.ajaxLoad.abort(),o.ajaxLoad=null,o.imgPreload&&(o.imgPreload.onload=o.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),o.coming=null,o.current||o._afterZoomOut(e))},close:function(e){o.cancel(),!1!==o.trigger("beforeClose")&&(o.unbindEvents(),o.isActive&&(!o.isOpen||!0===e?(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),o._afterZoomOut()):(o.isOpen=o.isOpened=!1,o.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),o.wrap.stop(!0,!0).removeClass("fancybox-opened"),o.transitions[o.current.closeMethod]())))},play:function(e){var t=function(){clearTimeout(o.player.timer)},r=function(){t(),o.current&&o.player.isActive&&(o.player.timer=setTimeout(o.next,o.current.playSpeed))},i=function(){t(),n("body").unbind(".player"),o.player.isActive=!1,o.trigger("onPlayEnd")};!0===e||!o.player.isActive&&!1!==e?o.current&&(o.current.loop||o.current.index<o.group.length-1)&&(o.player.isActive=!0,n("body").bind({"afterShow.player onUpdate.player":r,"onCancel.player beforeClose.player":i,"beforeLoad.player":t}),r(),o.trigger("onPlayStart")):i()},next:function(e){var t=o.current;t&&(l(e)||(e=t.direction.next),o.jumpto(t.index+1,e,"next"))},prev:function(e){var t=o.current;t&&(l(e)||(e=t.direction.prev),o.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var i=o.current;i&&(e=h(e),o.direction=t||i.direction[e>=i.index?"next":"prev"],o.router=n||"jumpto",i.loop&&(0>e&&(e=i.group.length+e%i.group.length),e%=i.group.length),i.group[e]!==r&&(o.cancel(),o._start(e)))},reposition:function(e,t){var r=o.current,i=r?r.wrap:null,s;i&&(s=o._getPosition(t),e&&"scroll"===e.type?(delete s.position,i.stop(!0,!0).animate(s,200)):(i.css(s),r.pos=n.extend({},r.dim,s)))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(u),u=null),o.isOpen&&!u&&(u=setTimeout(function(){var r=o.current;r&&!o.isClosing&&(o.wrap.removeClass("fancybox-tmp"),(n||"load"===t||"resize"===t&&r.autoResize)&&o._setDimension(),"scroll"===t&&r.canShrink||o.reposition(e),o.trigger("onUpdate"),u=null)},n&&!a?0:300))},toggle:function(e){o.isOpen&&(o.current.fitToView="boolean"===n.type(e)?e:!o.current.fitToView,a&&(o.wrap.removeAttr("style").addClass("fancybox-tmp"),o.trigger("onUpdate")),o.update())},hideLoading:function(){s.unbind(".loading"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;o.hideLoading(),e=n('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"),s.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),o.cancel())}),o.defaults.fixed||(t=o.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=o.current&&o.current.locked||!1,n={x:i.scrollLeft(),y:i.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=a&&e.innerWidth?e.innerWidth:i.width(),n.h=a&&e.innerHeight?e.innerHeight:i.height()),n},unbindEvents:function(){o.wrap&&f(o.wrap)&&o.wrap.unbind(".fb"),s.unbind(".fb"),i.unbind(".fb")},bindEvents:function(){var e=o.current,t;e&&(i.bind("orientationchange.fb"+(a?"":" resize.fb")+(e.autoCenter&&!e.locked?" scroll.fb":""),o.update),(t=e.keys)&&s.bind("keydown.fb",function(i){var s=i.which||i.keyCode,u=i.target||i.srcElement;if(27===s&&o.coming)return!1;!i.ctrlKey&&!i.altKey&&!i.shiftKey&&!i.metaKey&&(!u||!u.type&&!n(u).is("[contenteditable]"))&&n.each(t,function(t,u){if(1<e.group.length&&u[s]!==r)return o[t](u[s]),i.preventDefault(),!1;if(-1<n.inArray(s,u))return o[t](),i.preventDefault(),!1})}),n.fn.mousewheel&&e.mouseWheel&&o.wrap.bind("mousewheel.fb",function(t,r,i,s){for(var u=n(t.target||null),a=!1;u.length&&!a&&!u.is(".fancybox-skin")&&!u.is(".fancybox-wrap");)a=u[0]&&(!u[0].style.overflow||"hidden"!==u[0].style.overflow)&&(u[0].clientWidth&&u[0].scrollWidth>u[0].clientWidth||u[0].clientHeight&&u[0].scrollHeight>u[0].clientHeight),u=n(u).parent();0!==r&&!a&&1<o.group.length&&!e.canShrink&&(0<s||0<i?o.prev(0<s?"down":"left"):(0>s||0>i)&&o.next(0>s?"up":"right"),t.preventDefault())}))},trigger:function(e,t){var r,i=t||o.coming||o.current;if(i){n.isFunction(i[e])&&(r=i[e].apply(i,Array.prototype.slice.call(arguments,1)));if(!1===r)return!1;i.helpers&&n.each(i.helpers,function(t,r){r&&o.helpers[t]&&n.isFunction(o.helpers[t][e])&&(r=n.extend(!0,{},o.helpers[t].defaults,r),o.helpers[t][e](r,i))}),n.event.trigger(e+".fb")}},isImage:function(e){return l(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(e){return l(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t={},r,i,e=h(e);r=o.group[e]||null;if(!r)return!1;t=n.extend(!0,{},o.opts,r),r=t.margin,i=t.padding,"number"===n.type(r)&&(t.margin=[r,r,r,r]),"number"===n.type(i)&&(t.padding=[i,i,i,i]),t.modal&&n.extend(!0,t,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),t.autoSize&&(t.autoWidth=t.autoHeight=!0),"auto"===t.width&&(t.autoWidth=!0),"auto"===t.height&&(t.autoHeight=!0),t.group=o.group,t.index=e,o.coming=t;if(!1===o.trigger("beforeLoad"))o.coming=null;else{i=t.type,r=t.href;if(!i)return o.coming=null,o.current&&o.router&&"jumpto"!==o.router?(o.current.index=e,o[o.router](o.direction)):!1;o.isActive=!0;if("image"===i||"swf"===i)t.autoHeight=t.autoWidth=!1,t.scrolling="visible";"image"===i&&(t.aspectRatio=!0),"iframe"===i&&a&&(t.scrolling="scroll"),t.wrap=n(t.tpl.wrap).addClass("fancybox-"+(a?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+t.wrapCSS).appendTo(t.parent||"body"),n.extend(t,{skin:n(".fancybox-skin",t.wrap),outer:n(".fancybox-outer",t.wrap),inner:n(".fancybox-inner",t.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,n){t.skin.css("padding"+n,p(t.padding[e]))}),o.trigger("onReady");if("inline"===i||"html"===i){if(!t.content||!t.content.length)return o._error("content")}else if(!r)return o._error("href");"image"===i?o._loadImage():"ajax"===i?o._loadAjax():"iframe"===i?o._loadIframe():o._afterLoad()}},_error:function(e){n.extend(o.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:o.coming.tpl.error}),o._afterLoad()},_loadImage:function(){var e=o.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,o.coming.width=this.width,o.coming.height=this.height,o._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,o._error("image")},e.src=o.coming.href,!0!==e.complete&&o.showLoading()},_loadAjax:function(){var e=o.coming;o.showLoading(),o.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){o.coming&&"abort"!==t?o._error("ajax",e):o.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,o._afterLoad())}}))},_loadIframe:function(){var e=o.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",a?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(o.showLoading(),t.one("load",function(){n(this).data("ready",1),a||n(this).bind("load.fb",o.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),o._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||o._afterLoad()},_preloadImages:function(){var e=o.group,t=o.current,n=e.length,r=t.preload?Math.min(t.preload,n-1):0,i,s;for(s=1;s<=r;s+=1)i=e[(t.index+s)%n],"image"===i.type&&i.href&&((new Image).src=i.href)},_afterLoad:function(){var e=o.coming,t=o.current,r,i,s,u,a;o.hideLoading();if(e&&!1!==o.isActive)if(!1===o.trigger("afterLoad",e,t))e.wrap.stop(!0).trigger("onReset").remove(),o.coming=null;else{t&&(o.trigger("beforeChange",t),t.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),o.unbindEvents(),r=e.content,i=e.type,s=e.scrolling,n.extend(o,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:t}),u=e.href;switch(i){case"inline":case"ajax":case"html":e.selector?r=n("<div>").html(r).find(e.selector):f(r)&&(r.data("fancybox-placeholder")||r.data("fancybox-placeholder",n('<div class="fancybox-placeholder"></div>').insertAfter(r).hide()),r=r.show().detach(),e.wrap.bind("onReset",function(){n(this).find(r).length&&r.hide().replaceAll(r.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":r=e.tpl.image.replace("{href}",u);break;case"swf":r='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+u+'"></param>',a="",n.each(e.swf,function(e,t){r+='<param name="'+e+'" value="'+t+'"></param>',a+=" "+e+'="'+t+'"'}),r+='<embed src="'+u+'" type="application/x-shockwave-flash" width="100%" height="100%"'+a+"></embed></object>"}(!f(r)||!r.parent().is(e.inner))&&e.inner.append(r),o.trigger("beforeShow"),e.inner.css("overflow","yes"===s?"scroll":"no"===s?"hidden":s),o._setDimension(),o.reposition(),o.isOpen=!1,o.coming=null,o.bindEvents(),o.isOpened?t.prevMethod&&o.transitions[t.prevMethod]():n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),o.transitions[o.isOpened?e.nextMethod:e.openMethod](),o._preloadImages()}},_setDimension:function(){var e=o.getViewport(),t=0,r=!1,i=!1,r=o.wrap,s=o.skin,u=o.inner,a=o.current,i=a.width,f=a.height,l=a.minWidth,d=a.minHeight,m=a.maxWidth,g=a.maxHeight,y=a.scrolling,w=a.scrollOutside?a.scrollbarWidth:0,S=a.margin,x=h(S[1]+S[3]),T=h(S[0]+S[2]),N,C,L,A,O,M,_,D,P;r.add(s).add(u).width("auto").height("auto").removeClass("fancybox-tmp"),S=h(s.outerWidth(!0)-s.width()),N=h(s.outerHeight(!0)-s.height()),C=x+S,L=T+N,A=c(i)?(e.w-C)*h(i)/100:i,O=c(f)?(e.h-L)*h(f)/100:f;if("iframe"===a.type){if(P=a.content,a.autoHeight&&1===P.data("ready"))try{P[0].contentWindow.document.location&&(u.width(A).height(9999),M=P.contents().find("body"),w&&M.css("overflow-x","hidden"),O=M.height())}catch(H){}}else if(a.autoWidth||a.autoHeight)u.addClass("fancybox-tmp"),a.autoWidth||u.width(A),a.autoHeight||u.height(O),a.autoWidth&&(A=u.width()),a.autoHeight&&(O=u.height()),u.removeClass("fancybox-tmp");i=h(A),f=h(O),D=A/O,l=h(c(l)?h(l,"w")-C:l),m=h(c(m)?h(m,"w")-C:m),d=h(c(d)?h(d,"h")-L:d),g=h(c(g)?h(g,"h")-L:g),M=m,_=g,a.fitToView&&(m=Math.min(e.w-C,m),g=Math.min(e.h-L,g)),C=e.w-x,T=e.h-T,a.aspectRatio?(i>m&&(i=m,f=h(i/D)),f>g&&(f=g,i=h(f*D)),i<l&&(i=l,f=h(i/D)),f<d&&(f=d,i=h(f*D))):(i=Math.max(l,Math.min(i,m)),a.autoHeight&&"iframe"!==a.type&&(u.width(i),f=u.height()),f=Math.max(d,Math.min(f,g)));if(a.fitToView)if(u.width(i).height(f),r.width(i+S),e=r.width(),x=r.height(),a.aspectRatio)for(;(e>C||x>T)&&i>l&&f>d&&!(19<t++);)f=Math.max(d,Math.min(g,f-10)),i=h(f*D),i<l&&(i=l,f=h(i/D)),i>m&&(i=m,f=h(i/D)),u.width(i).height(f),r.width(i+S),e=r.width(),x=r.height();else i=Math.max(l,Math.min(i,i-(e-C))),f=Math.max(d,Math.min(f,f-(x-T)));w&&"auto"===y&&f<O&&i+S+w<C&&(i+=w),u.width(i).height(f),r.width(i+S),e=r.width(),x=r.height(),r=(e>C||x>T)&&i>l&&f>d,i=a.aspectRatio?i<M&&f<_&&i<A&&f<O:(i<M||f<_)&&(i<A||f<O),n.extend(a,{dim:{width:p(e),height:p(x)},origWidth:A,origHeight:O,canShrink:r,canExpand:i,wPadding:S,hPadding:N,wrapSpace:x-s.outerHeight(!0),skinSpace:s.height()-f}),!P&&a.autoHeight&&f>d&&f<g&&!i&&u.height("auto")},_getPosition:function(e){var t=o.current,n=o.getViewport(),r=t.margin,i=o.wrap.width()+r[1]+r[3],s=o.wrap.height()+r[0]+r[2],r={position:"absolute",top:r[0],left:r[3]};return t.autoCenter&&t.fixed&&!e&&s<=n.h&&i<=n.w?r.position="fixed":t.locked||(r.top+=n.y,r.left+=n.x),r.top=p(Math.max(r.top,r.top+(n.h-s)*t.topRatio)),r.left=p(Math.max(r.left,r.left+(n.w-i)*t.leftRatio)),r},_afterZoomIn:function(){var e=o.current;e&&(o.isOpen=o.isOpened=!0,o.wrap.css("overflow","visible").addClass("fancybox-opened"),o.update(),(e.closeClick||e.nextClick&&1<o.group.length)&&o.inner.css("cursor","pointer").bind("click.fb",function(t){!n(t.target).is("a")&&!n(t.target).parent().is("a")&&(t.preventDefault(),o[e.closeClick?"close":"next"]())}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(o.skin).bind(a?"touchstart.fb":"click.fb",function(e){e.preventDefault(),o.close()}),e.arrows&&1<o.group.length&&((e.loop||0<e.index)&&n(e.tpl.prev).appendTo(o.outer).bind("click.fb",o.prev),(e.loop||e.index<o.group.length-1)&&n(e.tpl.next).appendTo(o.outer).bind("click.fb",o.next)),o.trigger("afterShow"),!e.loop&&e.index===e.group.length-1?o.play(!1):o.opts.autoPlay&&!o.player.isActive&&(o.opts.autoPlay=!1,o.play()))},_afterZoomOut:function(e){e=e||o.current,n(".fancybox-wrap").trigger("onReset").remove(),n.extend(o,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),o.trigger("afterClose",e)}}),o.transitions={getOrigPosition:function(){var e=o.current,t=e.element,n=e.orig,r={},i=50,s=50,u=e.hPadding,a=e.wPadding,l=o.getViewport();!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),f(n)?(r=n.offset(),n.is("img")&&(i=n.outerWidth(),s=n.outerHeight())):(r.top=l.y+(l.h-s)*e.topRatio,r.left=l.x+(l.w-i)*e.leftRatio);if("fixed"===o.wrap.css("position")||e.locked)r.top-=l.y,r.left-=l.x;return r={top:p(r.top-u*e.topRatio),left:p(r.left-a*e.leftRatio),width:p(i+a),height:p(s+u)}},step:function(e,t){var n,r,i=t.prop;r=o.current;var s=r.wrapSpace,u=r.skinSpace;if("width"===i||"height"===i)n=t.end===t.start?1:(e-t.start)/(t.end-t.start),o.isClosing&&(n=1-n),r="width"===i?r.wPadding:r.hPadding,r=e-r,o.skin[i](h("width"===i?r:r-s*n)),o.inner[i](h("width"===i?r:r-s*n-u*n))},zoomIn:function(){var e=o.current,t=e.pos,r=e.openEffect,i="elastic"===r,s=n.extend({opacity:1},t);delete s.position,i?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===r&&(t.opacity=.1),o.wrap.css(t).animate(s,{duration:"none"===r?0:e.openSpeed,easing:e.openEasing,step:i?this.step:null,complete:o._afterZoomIn})},zoomOut:function(){var e=o.current,t=e.closeEffect,n="elastic"===t,r={opacity:.1};n&&(r=this.getOrigPosition(),e.closeOpacity&&(r.opacity=.1)),o.wrap.animate(r,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:o._afterZoomOut})},changeIn:function(){var e=o.current,t=e.nextEffect,n=e.pos,r={opacity:1},i=o.direction,s;n.opacity=.1,"elastic"===t&&(s="down"===i||"up"===i?"top":"left","down"===i||"right"===i?(n[s]=p(h(n[s])-200),r[s]="+=200px"):(n[s]=p(h(n[s])+200),r[s]="-=200px")),"none"===t?o._afterZoomIn():o.wrap.css(n).animate(r,{duration:e.nextSpeed,easing:e.nextEasing,complete:function(){setTimeout(o._afterZoomIn,20)}})},changeOut:function(){var e=o.previous,t=e.prevEffect,r={opacity:.1},i=o.direction;"elastic"===t&&(r["down"===i||"up"===i?"top":"left"]=("up"===i||"left"===i?"-":"+")+"=200px"),e.wrap.animate(r,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},o.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!a,fixed:!0},overlay:null,fixed:!1,create:function(e){e=n.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=n('<div class="fancybox-overlay"></div>').appendTo("body"),this.fixed=!1,e.fixed&&o.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this,e=n.extend({},this.defaults,e);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(i.bind("resize.overlay",n.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){n(e.target).hasClass("fancybox-overlay")&&(o.isActive?o.close():t.close())}),this.overlay.css(e.css).show()},close:function(){n(".fancybox-overlay").remove(),i.unbind("resize.overlay"),this.overlay=null,!1!==this.margin&&(n("body").css("margin-right",this.margin),this.margin=!1),this.el&&this.el.removeClass("fancybox-lock")},update:function(){var e="100%",r;this.overlay.width(e).height("100%"),n.browser.msie?(r=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),s.width()>r&&(e=s.width())):s.width()>i.width()&&(e=s.width()),this.overlay.width(e).height(s.height())},onReady:function(e,r){n(".fancybox-overlay").stop(!0,!0),this.overlay||(this.margin=s.height()>i.height()||"scroll"===n("body").css("overflow-y")?n("body").css("margin-right"):!1,this.el=t.all&&!t.querySelector?n("html"):n("body"),this.create(e)),e.locked&&this.fixed&&(r.locked=this.overlay.append(r.wrap),r.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&n("body").css("margin-right",h(this.margin)+t.scrollbarWidth)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!o.isActive&&this.overlay.fadeOut(e.speedOut,n.proxy(this.close,this))}},o.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=o.current,r=t.title,i=e.type;n.isFunction(r)&&(r=r.call(t.element,t));if(l(r)&&""!==n.trim(r)){t=n('<div class="fancybox-title fancybox-title-'+i+'-wrap">'+r+"</div>");switch(i){case"inside":i=o.skin;break;case"outside":i=o.wrap;break;case"over":i=o.inner;break;default:i=o.skin,t.appendTo("body"),n.browser.msie&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),o.current.margin[2]+=Math.abs(h(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](i)}}},n.fn.fancybox=function(e){var t,r=n(this),i=this.selector||"",u=function(s){var u=n(this).blur(),a=t,f,l;!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey&&!u.is(".fancybox-wrap")&&(f=e.groupAttr||"data-fancybox-group",l=u.attr(f),l||(f="rel",l=u.get(0)[f]),l&&""!==l&&"nofollow"!==l&&(u=i.length?n(i):r,u=u.filter("["+f+'="'+l+'"]'),a=u.index(this)),e.index=a,!1!==o.open(u,e)&&s.preventDefault())},e=e||{};return t=e.index||0,!i||!1===e.live?r.unbind("click.fb-start").bind("click.fb-start",u):s.undelegate(i,"click.fb-start").delegate(i+":not('.fancybox-item, .fancybox-nav')","click.fb-start",u),this.filter("[data-fancybox-start=1]").trigger("click"),this},s.ready(function(){n.scrollbarWidth===r&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth();return e.remove(),t});if(n.support.fixedPosition===r){var e=n.support,t=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),i=20===t[0].offsetTop||15===t[0].offsetTop;t.remove(),e.fixedPosition=i}n.extend(o.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")})})}(window,document,jQuery),function(e){var t="carousel",n="."+t,r="data-transition",i=t+"-transitioning",s=t+"-item",o=t+"-active",u=t+"-in",a=t+"-out",f=t+"-nav",l=function(){var e="webkit Moz O Ms".split(" "),t=!1,n;while(e.length){n=e.shift()+"Transition";if(n in document.documentElement.style!==undefined&&n in document.documentElement.style!=0){t=!0;break}}return t}(),c={_create:function(){e(this).trigger("beforecreate."+t)[t]("_init")[t]("_addNextPrev").trigger("create."+t)},_init:function(){var n=e(this).attr(r);return n||(l=!1),e(this).addClass(t+" "+(n?t+"-"+n:"")+" ").children().addClass(s).first().addClass(o)},next:function(){e(this)[t]("goTo","+1")},prev:function(){e(this)[t]("goTo","-1")},goTo:function(n){var i=e(this),f=i.attr(r),c=" "+t+"-"+f+"-reverse";e(this).find("."+s).removeClass([a,u,c].join(" "));var h=e(this).find("."+o),p=h.index(),d=(p<0?0:p)+1,v=typeof n=="number"?n:d+parseFloat(n),m=e(this).find(".carousel-item").eq(v-1),g=typeof n=="string"&&!parseFloat(n)||v>d?"":c;m.length||(m=e(this).find("."+s)[g.length?"last":"first"]()),l?i[t]("_transitionStart",h,m,g):(m.addClass(o),i[t]("_transitionEnd",h,m,g)),i.trigger("goto."+t,m)},update:function(){return e(this).children().not("."+f).addClass(s),e(this).trigger("update."+t)},_transitionStart:function(n,r,i){var s=e(this);r.one(navigator.userAgent.indexOf("AppleWebKit")>-1?"webkitTransitionEnd":"transitionend otransitionend",function(){s[t]("_transitionEnd",n,r,i)}),e(this).addClass(i),n.addClass(a),r.addClass(u)},_transitionEnd:function(t,n,r){e(this).removeClass(r),t.removeClass(a+" "+o),n.removeClass(u).addClass(o)},_bindEventListeners:function(){var n=e(this).bind("click",function(r){var i=e(r.target).closest("a[href='#next'],a[href='#prev']");i.length&&(n[t](i.is("[href='#next']")?"next":"prev"),r.preventDefault())});return this},_addNextPrev:function(){return e(this).append("<nav class='"+f+"'><a href='#prev' class='prev' aria-hidden='true' title='Previous'>Prev</a><a href='#next' class='next' aria-hidden='true' title='Next'>Next</a></nav>")[t]("_bindEventListeners")},destroy:function(){}};e.fn[t]=function(n,r,i,s){return this.each(function(){if(n&&typeof n=="string")return e.fn[t].prototype[n].call(this,r,i,s);if(e(this).data(t+"data"))return e(this);e(this).data(t+"active",!0),e.fn[t].prototype._create.call(this)})},e.extend(e.fn[t].prototype,c),e(function(){e(n)[t]()})}(jQuery),function(e){var t="carousel",n="."+t,r=t+"-no-transition",i=/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,s={_dragBehavior:function(){var t=e(this),s,o={},u,a,f=function(t){var r=t.touches||t.originalEvent.touches,i=e(t.target).closest(n);t.type==="touchstart"&&(s={x:r[0].pageX,y:r[0].pageY}),r[0]&&r[0].pageX&&(o.touches=r,o.deltaX=r[0].pageX-s.x,o.deltaY=r[0].pageY-s.y,o.w=i.width(),o.h=i.height(),o.xPercent=o.deltaX/o.w,o.yPercent=o.deltaY/o.h,o.srcEvent=t)},l=function(t){f(t),e(t.target).closest(n).trigger("drag"+t.type.split("touch")[1],o)};e(this).bind("touchstart",function(t){e(this).addClass(r),l(t)}).bind("touchmove",function(e){f(e),l(e),i||(e.preventDefault(),window.scrollBy(0,-o.deltaY))}).bind("touchend",function(t){e(this).removeClass(r),l(t)})}};e.extend(e.fn[t].prototype,s),e(n).live("create."+t,function(){e(this)[t]("_dragBehavior")})}(jQuery),function(e){var t="carousel",n="."+t,r=t+"-active",i=t+"-item",s=function(e){return Math.abs(e)>4},o=function(e,n){var r=e.find("."+t+"-active"),s=r.prevAll().length+1,o=n<0,u=s+(o?1:-1),a=e.find("."+i).eq(u-1);return a.length||(a=e.find("."+i)[o?"first":"last"]()),[r,a]};e(n).live("dragmove",function(t,n){if(!s(n.deltaX))return;var r=o(e(this),n.deltaX);r[0].css("left",n.deltaX+"px"),r[1].css("left",n.deltaX<0?n.w+n.deltaX+"px":-n.w+n.deltaX+"px")}).live("dragend",function(t,n){if(!s(n.deltaX))return;var i=o(e(this),n.deltaX),u=Math.abs(n.deltaX)>45;e(this).one(navigator.userAgent.indexOf("AppleWebKit")?"webkitTransitionEnd":"transitionEnd",function(){i[0].add(i[1]).css("left","")}),u?(i[0].removeClass(r).css("left",n.deltaX>0?n.w+"px":-n.w+"px"),i[1].addClass(r).css("left",0)):(i[0].css("left",0),i[1].css("left",n.deltaX>0?-n.w+"px":n.w+"px"))})}(jQuery),function(e,t){var n="carousel",r="."+n+"[data-paginate]",i=n+"-pagination",s=n+"-active-page",o={_createPagination:function(){var t=e(this).find("."+n+"-nav"),r=e(this).find("."+n+"-item"),s=e("<ol class='"+i+"'></ol>"),o;t.find("."+i).remove();for(var u=0,a=r.length;u<a;u++)o=u+1,s.append("<li><a href='#"+o+"' title='Go to slide "+o+"'>"+o+"</a>");t.addClass(n+"-nav-paginated").find("a").first().after(s)},_bindPaginationEvents:function(){e(this).bind("click",function(t){var r=e(t.target).closest("a"),s=r.attr("href");r.closest("."+i).length&&s&&(e(this)[n]("goTo",parseFloat(s.split("#")[1])),t.preventDefault())}).bind("goto."+n,function(t,n){var r=n?e(n).index():0;e(this).find("ol."+i+" li").removeClass(s).eq(r).addClass(s)}).trigger("goto."+n)}};e.extend(e.fn[n].prototype,o),e(r).live("create."+n,function(){e(this)[n]("_createPagination")[n]("_bindPaginationEvents")}).live("update."+n,function(){e(this)[n]("_createPagination")})}(jQuery),function(e,t){var n="carousel",r="."+n,i=4e3,s={play:function(){var t=e(this),r=t.attr("data-interval"),s=parseFloat(r)||i;return t.data("timer",setInterval(function(){t[n]("next")},s))},stop:function(){clearTimeout(e(this).data("timer"))},_bindStopListener:function(){return e(this).bind("mousedown",function(){e(this)[n]("stop")})},_initAutoPlay:function(){var r=e(this).attr("data-autoplay");r!==t&&r!==!1&&e(this)[n]("_bindStopListener")[n]("play")}};e.extend(e.fn[n].prototype,s),e(r).live("create."+n,function(){e(this)[n]("_initAutoPlay")})}(jQuery),function(e){var t="carousel",n="."+t,r=t+"-active",i=t+"-item",s=function(e){return Math.abs(e)>4},o=function(e,n){var r=e.find("."+t+"-active"),s=r.prevAll().length+1,o=n<0,u=s+(o?1:-1),a=e.find("."+i).eq(u-1);return a.length||(a=e.find("."+i)[o?"first":"last"]()),[r,a]};e(n).live("dragmove",function(t,n){if(!s(n.deltaX))return;var r=o(e(this),n.deltaX);r[0].css("left",n.deltaX+"px"),r[1].css("left",n.deltaX<0?n.w+n.deltaX+"px":-n.w+n.deltaX+"px")}).live("dragend",function(t,n){if(!s(n.deltaX))return;var i=o(e(this),n.deltaX),u=Math.abs(n.deltaX)>45;e(this).one(navigator.userAgent.indexOf("AppleWebKit")?"webkitTransitionEnd":"transitionEnd",function(){i[0].add(i[1]).css("left","")}),u?(i[0].removeClass(r).css("left",n.deltaX>0?n.w+"px":-n.w+"px"),i[1].addClass(r).css("left",0)):(i[0].css("left",0),i[1].css("left",n.deltaX>0?-n.w+"px":n.w+"px"))})}(jQuery),function(e){var t="carousel",n="."+t,r=t+"-no-transition",i=/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,s={_dragBehavior:function(){var t=e(this),s,o={},u,a,f=function(t){var r=t.touches||t.originalEvent.touches,i=e(t.target).closest(n);t.type==="touchstart"&&(s={x:r[0].pageX,y:r[0].pageY}),r[0]&&r[0].pageX&&(o.touches=r,o.deltaX=r[0].pageX-s.x,o.deltaY=r[0].pageY-s.y,o.w=i.width(),o.h=i.height(),o.xPercent=o.deltaX/o.w,o.yPercent=o.deltaY/o.h,o.srcEvent=t)},l=function(t){f(t),e(t.target).closest(n).trigger("drag"+t.type.split("touch")[1],o)};e(this).bind("touchstart",function(t){e(this).addClass(r),l(t)}).bind("touchmove",function(e){f(e),l(e),i||(e.preventDefault(),window.scrollBy(0,-o.deltaY))}).bind("touchend",function(t){e(this).removeClass(r),l(t)})}};e.extend(e.fn[t].prototype,s),e(n).live("create."+t,function(){e(this)[t]("_dragBehavior")})}(jQuery),function(e){var t="carousel",n="."+t,r=t+"-active",i=t+"-top",s=t+"-item",o=function(e){return e>-1&&e<0||e<1&&e>0},u=function(e,n){var r=e.find("."+t+"-active"),i=r.prevAll().length+1,o=n<0,u=i+(o?1:-1),a=e.find("."+s).eq(u-1);return a.length||(a=e.find("."+s)[o?"first":"last"]()),[r,a]};e(n).live("dragstart",function(t,n){e(this).find("."+i).removeClass(i)}).live("dragmove",function(t,n){if(!o(n.xPercent))return;var r=u(e(this),n.deltaX),s=n.xPercent*180,a=Math.abs(n.xPercent)>.5;r[0].css("-webkit-transform","rotateY("+s+"deg)"),r[1].css("-webkit-transform","rotateY("+((s>0?-180:180)+s)+"deg)"),r[a?1:0].addClass(i),r[a?0:1].removeClass(i)}).live("dragend",function(t,n){if(!o(n.xPercent))return;var s=u(e(this),n.deltaX),a=Math.abs(n.xPercent)>.5;a?(s[0].removeClass(r),s[1].addClass(r)):(s[0].addClass(r),s[1].removeClass(r)),s[0].add(s[1]).removeClass(i).css("-webkit-transform","")})}(jQuery),(!window.console||!console.log)&&function(){var e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],n=t.length,r=window.console={};while(n--)r[t[n]]=e}(),function(){var e;e=this,$(function(){var e;if($.browser.msie!=null&&parseInt($.browser.version,10)<9)return e=$("#old-browser").html(),$("body :not(#old-browser,#old-browser-inner)").remove(),$.fancybox.open(e)}),$(function(){return $(":not(.nofade) > a").hover(function(){return $(this).animate({opacity:.6},200)},function(){return $(this).animate({opacity:1},200)})}),$(function(){var e;return(e=$("body.home #nav-banner a")).on("click",function(t){var n,r;return t.preventDefault(),n=
$(this),r=$(this).attr("href").slice(1),$("#features .container > ul:visible").fadeOut(function(){return $("#"+r).fadeIn()}),e.parent().removeClass("active"),n.parent().addClass("active"),$(document.body).animate({scrollTop:$("#nav-banner").offset().top},1e3)})}),$(function(){return $("#content-body h1 button").click(function(){return $("aside").is(":visible")?$("aside").hide():$("aside").show()})}),$(function(){return $(".fancybox").fancybox({helpers:{title:{type:"inside"}},beforeLoad:function(){return this.title=$(this.element).find("img").attr("title")}})}),$(function(){return $("body.home header > .carousel").carousel()}),$(function(){var e;return(e=$("body.blog section.posts article img")).length>0&&e.wrap(function(){return"<a href='"+$(this).attr("src")+"' class='fancybox' />"}),(e=$("body.blog section.posts article img[align='left']")).length>0&&e.css("margin","20px 25px 15px 0"),$("body.blog section.posts article pre > code").addClass("lang-javascript")})}.call(this);