var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(m,p,c,v){var w=c("html"),s=c(m),t=c(p),a=c.fancybox=function(){a.open.apply(this,arguments)},x=navigator.userAgent.match(/msie/i),y=null,n=p.createTouch!==v,A=function(a){return a&&a.hasOwnProperty&&a instanceof c},u=function(a){return a&&"string"===c.type(a)},E=function(a){return u(a)&&0<a.indexOf("%")},r=function(b,e){var f=parseInt(b,10)||0;e&&E(b)&&(f*=a.getViewport()[e]/100);return Math.ceil(f)},z=function(a,e){return r(a,e)+"px"};c.extend(a,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!n,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(x?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:c.noop,beforeLoad:c.noop,afterLoad:c.noop,beforeShow:c.noop,afterShow:c.noop,beforeChange:c.noop,beforeClose:c.noop,afterClose:c.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,e){if(b&&(c.isPlainObject(e)||(e={}),!1!==a.close(!0)))return c.isArray(b)||(b=A(b)?c(b).get():[b]),c.each(b,function(f,d){var k={},g,h,l,q,r;"object"===c.type(d)&&(d.nodeType&&(d=c(d)),A(d)?(k={href:d.data("fancybox-href")||d.attr("href"),title:d.data("fancybox-title")||d.attr("title"),isDom:!0,element:d},c.metadata&&c.extend(!0,k,
d.metadata())):k=d);g=e.href||k.href||(u(d)?d:null);h=e.title!==v?e.title:k.title||"";q=(l=e.content||k.content)?"html":e.type||k.type;!q&&k.isDom&&(q=d.data("fancybox-type"),q||(q=(q=d.prop("class").match(/fancybox\.(\w+)/))?q[1]:null));u(g)&&(q||(a.isImage(g)?q="image":a.isSWF(g)?q="swf":"#"===g.charAt(0)?q="inline":u(d)&&(q="html",l=d)),"ajax"===q&&(r=g.split(/\s+/,2),g=r.shift(),r=r.shift()));l||("inline"===q?g?l=c(u(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(l=d):"html"===q?l=g:q||g||!k.isDom||
(q="inline",l=d));c.extend(k,{href:g,type:q,content:l,title:h,selector:r});b[f]=k}),a.opts=c.extend(!0,{},a.defaults,e),e.keys!==v&&(a.opts.keys=e.keys?c.extend({},a.defaults.keys,e.keys):!1),a.group=b,a._start(a.opts.index)},cancel:function(){var b=a.coming;!1!==a.trigger("onCancel")&&(a.hideLoading(),b&&(a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onerror=null),b.wrap&&b.wrap.stop(!0,!0).trigger("onReset").remove(),a.coming=null,a.current||a._afterZoomOut(b)))},
close:function(b){a.cancel();!1!==a.trigger("beforeClose")&&(a.unbindEvents(),a.isActive&&(a.isOpen&&!0!==b?(a.isOpen=a.isOpened=!1,a.isClosing=!0,c(".fancybox-item, .fancybox-nav").remove(),a.wrap.stop(!0,!0).removeClass("fancybox-opened"),a.transitions[a.current.closeMethod]()):(c(".fancybox-wrap").stop(!0).trigger("onReset").remove(),a._afterZoomOut())))},play:function(b){var e=function(){clearTimeout(a.player.timer)},f=function(){e();a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,
a.current.playSpeed))},d=function(){e();t.unbind(".player");a.player.isActive=!1;a.trigger("onPlayEnd")};!0===b||!a.player.isActive&&!1!==b?a.current&&(a.current.loop||a.current.index<a.group.length-1)&&(a.player.isActive=!0,t.bind({"onCancel.player beforeClose.player":d,"onUpdate.player":f,"beforeLoad.player":e}),f(),a.trigger("onPlayStart")):d()},next:function(b){var e=a.current;e&&(u(b)||(b=e.direction.next),a.jumpto(e.index+1,b,"next"))},prev:function(b){var e=a.current;e&&(u(b)||(b=e.direction.prev),
a.jumpto(e.index-1,b,"prev"))},jumpto:function(b,e,f){var d=a.current;d&&(b=r(b),a.direction=e||d.direction[b>=d.index?"next":"prev"],a.router=f||"jumpto",d.loop&&(0>b&&(b=d.group.length+b%d.group.length),b%=d.group.length),d.group[b]!==v&&(a.cancel(),a._start(b)))},reposition:function(b,e){var f=a.current,d=f?f.wrap:null,k;d&&(k=a._getPosition(e),b&&"scroll"===b.type?(delete k.position,d.stop(!0,!0).animate(k,200)):(d.css(k),f.pos=c.extend({},f.dim,k)))},update:function(b){var e=b&&b.originalEvent&&
b.originalEvent.type,f=!e||"orientationchange"===e;f&&(clearTimeout(y),y=null);a.isOpen&&!y&&(y=setTimeout(function(){var d=a.current;d&&!a.isClosing&&(a.wrap.removeClass("fancybox-tmp"),(f||"load"===e||"resize"===e&&d.autoResize)&&a._setDimension(),"scroll"===e&&d.canShrink||a.reposition(b),a.trigger("onUpdate"),y=null)},f&&!n?0:300))},toggle:function(b){a.isOpen&&(a.current.fitToView="boolean"===c.type(b)?b:!a.current.fitToView,n&&(a.wrap.removeAttr("style").addClass("fancybox-tmp"),a.trigger("onUpdate")),
a.update())},hideLoading:function(){t.unbind(".loading");c("#fancybox-loading").remove()},showLoading:function(){var b,e;a.hideLoading();b=c('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body");t.bind("keydown.loading",function(b){27===(b.which||b.keyCode)&&(b.preventDefault(),a.cancel())});a.defaults.fixed||(e=a.getViewport(),b.css({position:"absolute",top:0.5*e.h+e.y,left:0.5*e.w+e.x}));a.trigger("onLoading")},getViewport:function(){var b=a.current&&a.current.locked||
!1,e={x:s.scrollLeft(),y:s.scrollTop()};b&&b.length?(e.w=b[0].clientWidth,e.h=b[0].clientHeight):(e.w=n&&m.innerWidth?m.innerWidth:s.width(),e.h=n&&m.innerHeight?m.innerHeight:s.height());return e},unbindEvents:function(){a.wrap&&A(a.wrap)&&a.wrap.unbind(".fb");t.unbind(".fb");s.unbind(".fb")},bindEvents:function(){var b=a.current,e;b&&(s.bind("orientationchange.fb"+(n?"":" resize.fb")+(b.autoCenter&&!b.locked?" scroll.fb":""),a.update),(e=b.keys)&&t.bind("keydown.fb",function(f){var d=f.which||f.keyCode,
k=f.target||f.srcElement;if(27===d&&a.coming)return!1;f.ctrlKey||f.altKey||f.shiftKey||f.metaKey||k&&(k.type||c(k).is("[contenteditable]"))||c.each(e,function(e,k){if(1<b.group.length&&k[d]!==v)return a[e](k[d]),f.preventDefault(),!1;if(-1<c.inArray(d,k))return a[e](),f.preventDefault(),!1})}),c.fn.mousewheel&&b.mouseWheel&&a.wrap.bind("mousewheel.fb",function(e,d,k,g){for(var h=c(e.target||null),l=!1;h.length&&!(l||h.is(".fancybox-skin")||h.is(".fancybox-wrap"));)l=h[0]&&!(h[0].style.overflow&&"hidden"===
h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=c(h).parent();0!==d&&!l&&1<a.group.length&&!b.canShrink&&(0<g||0<k?a.prev(0<g?"down":"left"):(0>g||0>k)&&a.next(0>g?"up":"right"),e.preventDefault())}))},trigger:function(b,e){var f,d=e||a.coming||a.current;if(d){c.isFunction(d[b])&&(f=d[b].apply(d,Array.prototype.slice.call(arguments,1)));if(!1===f)return!1;d.helpers&&c.each(d.helpers,function(e,f){if(f&&a.helpers[e]&&
c.isFunction(a.helpers[e][b]))a.helpers[e][b](c.extend(!0,{},a.helpers[e].defaults,f),d)})}t.trigger(b)},isImage:function(a){return u(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return u(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(b){var e={},f,d;b=r(b);f=a.group[b]||null;if(!f)return!1;e=c.extend(!0,{},a.opts,f);f=e.margin;d=e.padding;"number"===c.type(f)&&(e.margin=[f,f,f,f]);"number"===c.type(d)&&(e.padding=[d,d,d,d]);e.modal&&
c.extend(!0,e,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});e.autoSize&&(e.autoWidth=e.autoHeight=!0);"auto"===e.width&&(e.autoWidth=!0);"auto"===e.height&&(e.autoHeight=!0);e.group=a.group;e.index=b;a.coming=e;if(!1===a.trigger("beforeLoad"))a.coming=null;else{d=e.type;f=e.href;if(!d)return a.coming=null,a.current&&a.router&&"jumpto"!==a.router?(a.current.index=b,a[a.router](a.direction)):!1;a.isActive=!0;if("image"===d||"swf"===d)e.autoHeight=
e.autoWidth=!1,e.scrolling="visible";"image"===d&&(e.aspectRatio=!0);"iframe"===d&&n&&(e.scrolling="scroll");e.wrap=c(e.tpl.wrap).addClass("fancybox-"+(n?"mobile":"desktop")+" fancybox-type-"+d+" fancybox-tmp "+e.wrapCSS).appendTo(e.parent||"body");c.extend(e,{skin:c(".fancybox-skin",e.wrap),outer:c(".fancybox-outer",e.wrap),inner:c(".fancybox-inner",e.wrap)});c.each(["Top","Right","Bottom","Left"],function(a,b){e.skin.css("padding"+b,z(e.padding[a]))});a.trigger("onReady");if("inline"===d||"html"===
d){if(!e.content||!e.content.length)return a._error("content")}else if(!f)return a._error("href");"image"===d?a._loadImage():"ajax"===d?a._loadAjax():"iframe"===d?a._loadIframe():a._afterLoad()}},_error:function(b){c.extend(a.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:b,content:a.coming.tpl.error});a._afterLoad()},_loadImage:function(){var b=a.imgPreload=new Image;b.onload=function(){this.onload=this.onerror=null;a.coming.width=this.width/a.opts.pixelRatio;
a.coming.height=this.height/a.opts.pixelRatio;a._afterLoad()};b.onerror=function(){this.onload=this.onerror=null;a._error("image")};b.src=a.coming.href;!0!==b.complete&&a.showLoading()},_loadAjax:function(){var b=a.coming;a.showLoading();a.ajaxLoad=c.ajax(c.extend({},b.ajax,{url:b.href,error:function(b,f){a.coming&&"abort"!==f?a._error("ajax",b):a.hideLoading()},success:function(e,f){"success"===f&&(b.content=e,a._afterLoad())}}))},_loadIframe:function(){var b=a.coming,e=c(b.tpl.iframe.replace(/\{rnd\}/g,
(new Date).getTime())).attr("scrolling",n?"auto":b.iframe.scrolling).attr("src",b.href);c(b.wrap).bind("onReset",function(){try{c(this).find("iframe").hide().attr("src","//web.archive.org/web/20131006005802/http://about:blank").end().empty()}catch(a){}});b.iframe.preload&&(a.showLoading(),e.one("load",function(){c(this).data("ready",1);n||c(this).bind("load.fb",a.update);c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();a._afterLoad()}));b.content=e.appendTo(b.inner);b.iframe.preload||a._afterLoad()},_preloadImages:function(){var b=
a.group,e=a.current,f=b.length,d=e.preload?Math.min(e.preload,f-1):0,c,g;for(g=1;g<=d;g+=1)c=b[(e.index+g)%f],"image"===c.type&&c.href&&((new Image).src=c.href)},_afterLoad:function(){var b=a.coming,e=a.current,f,d,k,g,h;a.hideLoading();if(b&&!1!==a.isActive)if(!1===a.trigger("afterLoad",b,e))b.wrap.stop(!0).trigger("onReset").remove(),a.coming=null;else{e&&(a.trigger("beforeChange",e),e.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());a.unbindEvents();
f=b.content;d=b.type;k=b.scrolling;c.extend(a,{wrap:b.wrap,skin:b.skin,outer:b.outer,inner:b.inner,current:b,previous:e});g=b.href;switch(d){case "inline":case "ajax":case "html":b.selector?f=c("<div>").html(f).find(b.selector):A(f)&&(f.data("fancybox-placeholder")||f.data("fancybox-placeholder",c('<div class="fancybox-placeholder"></div>').insertAfter(f).hide()),f=f.show().detach(),b.wrap.bind("onReset",function(){c(this).find(f).length&&f.hide().replaceAll(f.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":f=b.tpl.image.replace(/\{href\}/g,g);break;case "swf":f='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",c.each(b.swf,function(a,b){f+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),f+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}A(f)&&f.parent().is(b.inner)||b.inner.append(f);a.trigger("beforeShow");
b.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);a._setDimension();a.reposition();a.isOpen=!1;a.coming=null;a.bindEvents();if(!a.isOpened)c(".fancybox-wrap").not(b.wrap).stop(!0).trigger("onReset").remove();else if(e.prevMethod)a.transitions[e.prevMethod]();a.transitions[a.isOpened?b.nextMethod:b.openMethod]();a._preloadImages()}},_setDimension:function(){var b=a.getViewport(),e=0,f=!1,d=!1,f=a.wrap,k=a.skin,g=a.inner,h=a.current,d=h.width,l=h.height,q=h.minWidth,n=h.minHeight,m=h.maxWidth,
u=h.maxHeight,v=h.scrolling,t=h.scrollOutside?h.scrollbarWidth:0,x=h.margin,p=r(x[1]+x[3]),s=r(x[0]+x[2]),A,w,y,C,B,F,H,D,G;f.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=r(k.outerWidth(!0)-k.width());A=r(k.outerHeight(!0)-k.height());w=p+x;y=s+A;C=E(d)?(b.w-w)*r(d)/100:d;B=E(l)?(b.h-y)*r(l)/100:l;if("iframe"===h.type){if(G=h.content,h.autoHeight&&1===G.data("ready"))try{G[0].contentWindow.document.location&&(g.width(C).height(9999),F=G.contents().find("body"),t&&F.css("overflow-x",
"hidden"),B=F.outerHeight(!0))}catch(I){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(B),h.autoWidth&&(C=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");d=r(C);l=r(B);D=C/B;q=r(E(q)?r(q,"w")-w:q);m=r(E(m)?r(m,"w")-w:m);n=r(E(n)?r(n,"h")-y:n);u=r(E(u)?r(u,"h")-y:u);F=m;H=u;h.fitToView&&(m=Math.min(b.w-w,m),u=Math.min(b.h-y,u));w=b.w-p;s=b.h-s;h.aspectRatio?(d>m&&(d=m,l=r(d/D)),l>u&&(l=u,d=r(l*D)),d<q&&(d=q,l=r(d/
D)),l<n&&(l=n,d=r(l*D))):(d=Math.max(q,Math.min(d,m)),h.autoHeight&&"iframe"!==h.type&&(g.width(d),l=g.height()),l=Math.max(n,Math.min(l,u)));if(h.fitToView)if(g.width(d).height(l),f.width(d+x),b=f.width(),p=f.height(),h.aspectRatio)for(;(b>w||p>s)&&d>q&&l>n&&!(19<e++);)l=Math.max(n,Math.min(u,l-10)),d=r(l*D),d<q&&(d=q,l=r(d/D)),d>m&&(d=m,l=r(d/D)),g.width(d).height(l),f.width(d+x),b=f.width(),p=f.height();else d=Math.max(q,Math.min(d,d-(b-w))),l=Math.max(n,Math.min(l,l-(p-s)));t&&"auto"===v&&l<B&&
d+x+t<w&&(d+=t);g.width(d).height(l);f.width(d+x);b=f.width();p=f.height();f=(b>w||p>s)&&d>q&&l>n;d=h.aspectRatio?d<F&&l<H&&d<C&&l<B:(d<F||l<H)&&(d<C||l<B);c.extend(h,{dim:{width:z(b),height:z(p)},origWidth:C,origHeight:B,canShrink:f,canExpand:d,wPadding:x,hPadding:A,wrapSpace:p-k.outerHeight(!0),skinSpace:k.height()-l});!G&&h.autoHeight&&l>n&&l<u&&!d&&g.height("auto")},_getPosition:function(b){var e=a.current,f=a.getViewport(),d=e.margin,c=a.wrap.width()+d[1]+d[3],g=a.wrap.height()+d[0]+d[2],d={position:"absolute",
top:d[0],left:d[3]};e.autoCenter&&e.fixed&&!b&&g<=f.h&&c<=f.w?d.position="fixed":e.locked||(d.top+=f.y,d.left+=f.x);d.top=z(Math.max(d.top,d.top+(f.h-g)*e.topRatio));d.left=z(Math.max(d.left,d.left+(f.w-c)*e.leftRatio));return d},_afterZoomIn:function(){var b=a.current;b&&((a.isOpen=a.isOpened=!0,a.wrap.css("overflow","visible").addClass("fancybox-opened"),a.update(),(b.closeClick||b.nextClick&&1<a.group.length)&&a.inner.css("cursor","pointer").bind("click.fb",function(e){c(e.target).is("a")||c(e.target).parent().is("a")||
(e.preventDefault(),a[b.closeClick?"close":"next"]())}),b.closeBtn&&c(b.tpl.closeBtn).appendTo(a.skin).bind("click.fb",function(b){b.preventDefault();a.close()}),b.arrows&&1<a.group.length&&((b.loop||0<b.index)&&c(b.tpl.prev).appendTo(a.outer).bind("click.fb",a.prev),(b.loop||b.index<a.group.length-1)&&c(b.tpl.next).appendTo(a.outer).bind("click.fb",a.next)),a.trigger("afterShow"),b.loop||b.index!==b.group.length-1)?a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play()):a.play(!1))},_afterZoomOut:function(b){b=
b||a.current;c(".fancybox-wrap").trigger("onReset").remove();c.extend(a,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});a.trigger("afterClose",b)}});a.transitions={getOrigPosition:function(){var b=a.current,e=b.element,f=b.orig,d={},c=50,g=50,h=b.hPadding,l=b.wPadding,q=a.getViewport();!f&&b.isDom&&e.is(":visible")&&(f=e.find("img:first"),f.length||(f=e));A(f)?(d=f.offset(),f.is("img")&&(c=f.outerWidth(),g=f.outerHeight())):
(d.top=q.y+(q.h-g)*b.topRatio,d.left=q.x+(q.w-c)*b.leftRatio);if("fixed"===a.wrap.css("position")||b.locked)d.top-=q.y,d.left-=q.x;return d={top:z(d.top-h*b.topRatio),left:z(d.left-l*b.leftRatio),width:z(c+l),height:z(g+h)}},step:function(b,e){var f,d,c=e.prop;d=a.current;var g=d.wrapSpace,h=d.skinSpace;if("width"===c||"height"===c)f=e.end===e.start?1:(b-e.start)/(e.end-e.start),a.isClosing&&(f=1-f),d="width"===c?d.wPadding:d.hPadding,d=b-d,a.skin[c](r("width"===c?d:d-g*f)),a.inner[c](r("width"===
c?d:d-g*f-h*f))},zoomIn:function(){var b=a.current,e=b.pos,f=b.openEffect,d="elastic"===f,k=c.extend({opacity:1},e);delete k.position;d?(e=this.getOrigPosition(),b.openOpacity&&(e.opacity=0.1)):"fade"===f&&(e.opacity=0.1);a.wrap.css(e).animate(k,{duration:"none"===f?0:b.openSpeed,easing:b.openEasing,step:d?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var b=a.current,e=b.closeEffect,c="elastic"===e,d={opacity:0.1};c&&(d=this.getOrigPosition(),b.closeOpacity&&(d.opacity=0.1));a.wrap.animate(d,
{duration:"none"===e?0:b.closeSpeed,easing:b.closeEasing,step:c?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var b=a.current,e=b.nextEffect,c=b.pos,d={opacity:1},k=a.direction,g;c.opacity=0.1;"elastic"===e&&(g="down"===k||"up"===k?"top":"left","down"===k||"right"===k?(c[g]=z(r(c[g])-200),d[g]="+=200px"):(c[g]=z(r(c[g])+200),d[g]="-=200px"));"none"===e?a._afterZoomIn():a.wrap.css(c).animate(d,{duration:b.nextSpeed,easing:b.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var b=
a.previous,e=b.prevEffect,f={opacity:0.1},d=a.direction;"elastic"===e&&(f["down"===d||"up"===d?"top":"left"]=("up"===d||"left"===d?"-":"+")+"=200px");b.wrap.animate(f,{duration:"none"===e?0:b.prevSpeed,easing:b.prevEasing,complete:function(){c(this).trigger("onReset").remove()}})}};a.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!n,fixed:!0},overlay:null,fixed:!1,el:c("html"),create:function(b){var e;b=c.extend({},this.defaults,b);this.overlay&&this.close();e=a.coming?
a.coming.parent:b.parent;this.overlay=c('<div class="fancybox-overlay"></div>').appendTo(e&&e.lenth?e:"body");this.fixed=!1;b.fixed&&a.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(b){var e=this;b=c.extend({},this.defaults,b);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(b);this.fixed||(s.bind("resize.overlay",c.proxy(this.update,this)),this.update());b.closeClick&&this.overlay.bind("click.overlay",function(b){if(c(b.target).hasClass("fancybox-overlay"))return a.isActive?
a.close():e.close(),!1});this.overlay.css(b.css).show()},close:function(){s.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(c(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),s.scrollTop(this.scrollV).scrollLeft(this.scrollH));c(".fancybox-overlay").remove().hide();c.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",e;this.overlay.width(a).height("100%");x?(e=Math.max(p.documentElement.offsetWidth,p.body.offsetWidth),t.width()>
e&&(a=t.width())):t.width()>s.width()&&(a=t.width());this.overlay.width(a).height(t.height())},onReady:function(a,e){var f=this.overlay;c(".fancybox-overlay").stop(!0,!0);f||this.create(a);a.locked&&this.fixed&&e.fixed&&(e.locked=this.overlay.append(e.wrap),e.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,e){e.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&c("*").filter(function(){return"fixed"===c(this).css("position")&&!c(this).hasClass("fancybox-overlay")&&
!c(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=s.scrollTop(),this.scrollH=s.scrollLeft(),this.el.addClass("fancybox-lock"),s.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(b){this.overlay&&!a.coming&&this.overlay.fadeOut(b.speedOut,c.proxy(this.close,this))}};a.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(b){var e=a.current,
f=e.title,d=b.type;c.isFunction(f)&&(f=f.call(e.element,e));if(u(f)&&""!==c.trim(f)){e=c('<div class="fancybox-title fancybox-title-'+d+'-wrap">'+f+"</div>");switch(d){case "inside":d=a.skin;break;case "outside":d=a.wrap;break;case "over":d=a.inner;break;default:d=a.skin,e.appendTo("body"),x&&e.width(e.width()),e.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(r(e.css("margin-bottom")))}e["top"===b.position?"prependTo":"appendTo"](d)}}};c.fn.fancybox=function(b){var e,f=c(this),
d=this.selector||"",k=function(g){var h=c(this).blur(),l=e,k,n;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||h.is(".fancybox-wrap")||(k=b.groupAttr||"data-fancybox-group",n=h.attr(k),n||(k="rel",n=h.get(0)[k]),n&&""!==n&&"nofollow"!==n&&(h=d.length?c(d):f,h=h.filter("["+k+'="'+n+'"]'),l=h.index(this)),b.index=l,!1!==a.open(h,b)&&g.preventDefault())};b=b||{};e=b.index||0;d&&!1!==b.live?t.undelegate(d,"click.fb-start").delegate(d+":not('.fancybox-item, .fancybox-nav')","click.fb-start",k):f.unbind("click.fb-start").bind("click.fb-start",
k);this.filter("[data-fancybox-start=1]").trigger("click");return this};t.ready(function(){var b,e;c.scrollbarWidth===v&&(c.scrollbarWidth=function(){var a=c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});c.support.fixedPosition===v&&(c.support.fixedPosition=function(){var a=c('<div style="position:fixed;top:20px;"></div>').appendTo("body"),b=20===a[0].offsetTop||15===a[0].offsetTop;
a.remove();return b}());c.extend(a.defaults,{scrollbarWidth:c.scrollbarWidth(),fixed:c.support.fixedPosition,parent:c("body")});b=c(m).width();w.addClass("fancybox-lock-test");e=c(m).width();w.removeClass("fancybox-lock-test");c("<style type='text/css'>.fancybox-margin{margin-right:"+(e-b)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
(function(){var m=$(".mini-toggler"),p=function(c){c.preventDefault();var m=this;c=$(this.hash);var p=$(this).data("toggler-group");p&&(p=$("a[data-toggler-group="+p+"]"),p.removeClass("toggler-active"),p.each(function(){m!=this&&($(this).removeClass("active"),$(this.hash).removeClass("active"))}));if(p=$(this).data("toggle-text"))$(this).data("toggle-text",this.innerHTML),$(this).html(p);c.hasClass("active")?(c.slideUp(),c.removeClass("active"),$(this).removeClass("toggler-active")):(c.slideDown(),
c.addClass("active"),$(this).addClass("toggler-active"))};"ontouchstart"in window?m.bind("touchstart",p):m.bind("click",p)})();
var Loader=function(){var m;this.add=function(p){$(".loader",p).remove();m=$('<div class="loader">Loading...</div>').appendTo(p)};this.hide=function(){$(m).hide()}},GigsModule=function(){function m(){function a(){v(function(a){var c=a[0];a=$('<div class="gigs-single post"><div class="social-bar">       <a href="#">Facebook</a>       <a href="#">Twitter</a>     </div>     <div id="post-map" class="post-map"></div>     <div class="post-main">       <time class="date">'+c.datetime.substr(0,10)+'</time>       <h3 class="location">'+
c.formatted_location+'</h3>       <h1 class="title">'+c.venue.name+'</h1>       <p class="desc">'+(c.description||"No description")+'</p>       <a href="'+c.ticket_url+'" target="_blank">Buy tickets</a>     </div></div>');0<$(".gigs-single").length?$(".gigs-single").replaceWith(a):$(".page > header").after(a);a=c.venue.latitude;var c=c.venue.longitude,n={scrollwheel:!1,zoom:8,center:new google.maps.LatLng(a,c),mapTypeId:google.maps.MapTypeId.HYBRID},n=new google.maps.Map(document.getElementById("post-map"),
n),m=wp_theme_url||"/wp-content/themes/avicii";new google.maps.Marker({position:new google.maps.LatLng(a,c),map:n,icon:m+"/img/maps-marker-black.png"})},"http://web.archive.org/web/20131006005802/http://api.bandsintown.com/artists/Avicii/events/search.json?api_version=2.0&app_id=avicii-site&location="+m+"&date="+n+"&radius=0.5")}var c=window.location.hash.replace("#",""),m=c.split("--")[0],n=c.split("--")[1];m&&n&&(s.add($(".gigs-single")),a())}function p(){var a=$(".gigs");0!=a.length&&(a.html(""),v(function(c){var m=0,n;for(n in c){if(50<=
m)break;var p=$('<li class="content-box gigs quarter">           <a class="inner" href="#'+(c[n].venue.latitude+","+c[n].venue.longitude)+"--"+c[n].datetime.substr(0,10)+'">           <time class="date">'+c[n].datetime.substr(0,10)+'</time>           <h2 class="name">'+c[n].venue.name+'</h2>           <h3 class="location">'+c[n].formatted_location+"</h3>           </a></li>");$("a",p).bind("click",function(a){$("html, body").animate({scrollTop:0},t.scroll_to_top_speed)});a.append(p);m++}}))}function c(){var a=
$(".upcoming-gigs-list");0!=a.length&&(a.html(""),s.add($("#upcoming-gigs .content")),v(function(c){s.hide();var m=0,n;for(n in c){if(10<=m)break;var p=$('<li><span class="date">'+c[n].datetime.substr(0,10)+"</span> "+c[n].title+"</li>");a.append(p);m++}}))}function v(a,c){$.get(c||"http://web.archive.org/web/20131006005802/https://api.bandsintown.com/artists/Avicii/events.json?api_version=2.0&app_id=avicii-site",function(c){a&&a(c)},"jsonp")}function w(){$(window).on("hashchange",function(){m();$("html, body").animate({scrollTop:0},t.scroll_to_top_speed)})}
var s=new Loader,t={scroll_to_top_speed:100};return{init:function(){w();c();p();m()},update_single_gig_from_url:m}}(),PostModule=function(){function m(c,m){$(".post > .container").load(c+" .post.single",function(){m()})}function p(){$("#news a[rel=prev], #news a[rel=next]").bind("click",function(v){v.preventDefault();c.add($("#news"));m(this.href,function(){c.hide();$("#news > .nav-bar").replaceWith($("#news .container .nav-bar"));p()})})}var c=new Loader;return{init:function(){p()}}}(),Splash=function(){function m(){var c=
$("#splash .sticky").height();$("#splash .content").height(c)}function p(){$(window).bind("resize",function(){m()})}return{init:function(){p();m()}}}(),VideosModule=function(){function m(c,m){$.get(c,function(c){c=c.feed.entry;for(var s=$(m),t=0;t<p;t++)$('<li><a href=""><iframe src="'+c[t].content.src+'"></li>').appendTo(s)},"jsonp")}var p=4;return{init:function(c,p){0<$(c).length&&m(p,c)}}}();GigsModule.init();PostModule.init();Splash.init();VideosModule.init($("#youtube"),"http://web.archive.org/web/20131006005802/http://gdata.youtube.com/feeds/api/videos?author=aviciideo&v=2&alt=json&orderby=published");
VideosModule.init($("#vevo"),"http://web.archive.org/web/20131006005802/http://gdata.youtube.com/feeds/api/videos?author=AviciiOfficialVEVO&v=2&alt=json&orderby=published");$(".photos > li > a").fancybox();


}
/*
     FILE ARCHIVED ON 00:58:02 Oct 06, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:29:14 Jan 12, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 3.426
  exclusion.robots.policy: 0.186
  LoadShardBlock: 71.675 (3)
  exclusion.robots: 0.199
  PetaboxLoader3.datanode: 80.838 (4)
  load_resource: 51.832
  esindex: 0.017
  CDXLines.iter: 22.946 (3)
  PetaboxLoader3.resolve: 38.365
  captures_list: 102.501
*/