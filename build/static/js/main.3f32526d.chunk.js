(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(e){e.exports={particles:{number:{value:5,density:{enable:!0,value_area:100}},color:{value:"#000000"},shape:{type:"square",stroke:{width:0,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:.05,opacity_min:.01,sync:!1}},size:{value:10,random:!0,anim:{enable:!0,speed:1,size_min:5,sync:!1}},line_linked:{enable:!1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!1,rotateX:561.194221302933,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},240:function(e,t,a){e.exports=a(632)},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){},462:function(e,t,a){},463:function(e,t,a){},467:function(e,t,a){},618:function(e,t,a){},619:function(e,t,a){},620:function(e,t,a){},621:function(e,t,a){},622:function(e,t,a){},623:function(e,t,a){},624:function(e,t,a){},625:function(e,t,a){},626:function(e,t,a){},627:function(e,t,a){},628:function(e,t,a){},630:function(e,t,a){},631:function(e,t,a){},632:function(e,t,a){"use strict";a.r(t);a(241),a(255),a(454);for(var n=a(0),r=a.n(n),i=a(233),o=a.n(i),s=(a(459),a(11)),c=a(12),l=a(14),u=a(13),m=a(15),h=(a(460),a(461),a(20)),d=(a(462),a(4)),p=(a(463),a(72)),f={},v=RegExp(/https:\/\/[^"]+\.(jpg|jpeg|png)/g),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("".concat(p.api,"/").concat(e).concat(t),{redirect:"follow"}).then(function(e){return e.ok?e.text():e.json().then(function(e){return Promise.reject(e)})}).then(function(e){var t=JSON.parse(e),a=[];return e.match(v).forEach(function(e){f[e]||(f[e]=new Image,a.push(new Promise(function(t){f[e].onload=function(){return t(e)},f[e].onerror=function(){return t(e)}})),f[e].src=e)}),Promise.all(a).then(function(){return Promise.resolve(t)})})},g=function(e){return b("v1/static","/content/".concat(e,"/version/").concat(p.version.replace(/\./g,"0")))},_=a(633),y=function(e){return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16)}},E=0,k={},O={},j={},w=new _.a,N=new _.a,C={primary:"#363636",secondary:"#262626"},I=new _.a,S=new _.a,M={threshold:[]},x=0;x<1;)M.threshold.push(x=Math.min(x+.025,1));var R={id:-1,ratio:0},D=new IntersectionObserver(function(e){var t={id:-1,ratio:0},a=!1;e.forEach(function(e){var n=Math.round(10*e.intersectionRatio)/10,r=parseInt(e.target.dataset.themeid);r===R.id&&n<R.ratio&&(a=!0),n>=t.ratio&&(t.ratio=n,t.id=r),j[r]=n}),S.next(function(){var e={r:0,g:0,b:0},t={r:0,g:0,b:0},a=Object.keys(e),n=0,r=function(){var r=j[i];n+=r;var o=O[i],s=y(o.primary),c=y(o.secondary);a.forEach(function(a){e[a]+=s[a]*r,t[a]+=c[a]*r})};for(var i in j)r();return n>0?(a.forEach(function(a){e[a]=Math.floor(e[a]/n),t[a]=Math.floor(t[a]/n)}),{primary:"rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,")"),secondary:"rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,")")}):C}()),(-1===R.id||a&&t.id!==R.id)&&(R=t,I.next({up:R.id-1,down:R.id<Object.keys(j).length-1?R.id+1:-1}))},M),L={startHover:function(e,t){w.next({id:e,theme:t})},endHover:function(e){w.next({id:e,theme:{}})},resetActive:function(e){(function(e){return!!O[e]&&(O[e]=Object(d.a)({},C),!0)})(e)&&N.next({id:e,theme:C})},setActive:function(e,t){(function(e,t){return!!O[e]&&(t.primary&&(O[e].primary=t.primary),t.secondary&&(O[e].secondary=t.secondary),!0)})(e,t)&&N.next({id:e,theme:t})},hoverObservable:function(){return w},clickObservable:function(){return N},get:function(e){return O[e]?O[e]:C},isDefault:function(e){return e.primary===C.primary&&e.secondary===C.secondary},isNone:function(e){return!e.primary&&!e.secondary},isEqual:function(e,t){return e.primary===t.primary&&e.secondary===t.secondary},register:function(e){var t=E++;return k[t]=e,O[t]=Object(d.a)({},C),j[t]=0,D.observe(e.current),t},unregister:function(e){k[e]&&(D.unobserve(k[e].current),delete O[e],delete j[e],delete k[e])},intersectObservable:function(){return S},navObservable:function(){return I}},T=a(234),A=a.n(T),H=function(e){return function(t){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={data:e.data,themeID:-1},t.refPanel=r.a.createRef(),t}return Object(m.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState(Object(d.a)({},this.state,{themeID:L.register(this.refPanel)}))}},{key:"componentWillUnmount",value:function(){this.setState(Object(d.a)({},this.state,{themeID:L.unregister(this.state.themeID)}))}},{key:"render",value:function(){return r.a.createElement("table",{className:"panel"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(A.a,{animateIn:"animate__fade-in-down"},r.a.createElement("div",{id:"panel-".concat(this.state.themeID),"data-themeid":this.state.themeID,ref:this.refPanel,className:"panel__wrapped"},r.a.createElement(e,{themeID:this.state.themeID,data:this.state.data})))))))}}]),a}(r.a.Component)},W=(a(467),a(22)),P=a(235),z=a.n(P),F=a(236),U=a.n(F),Y=a(19),B=a.n(Y),q=a(237),G=a(147),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._intersectObserver=null,a._navObserver=null,a._clickOberserver=null,a._hoverOberserver=null,a._hovered=null,a._animatingForward=!1,a.state={animating:!1,nav:{down:-1,up:-1},transforms:{background:null,foreground:null},theme:{current:L.get(0),animating:{},hover:{},clicked:{}}},a.updateUI=a.updateUI.bind(Object(h.a)(a)),a.triggerClick=a.triggerClick.bind(Object(h.a)(a)),a.triggerHover=a.triggerHover.bind(Object(h.a)(a)),a.refParallax=r.a.createRef(),a.updateCurrent=a.updateCurrent.bind(Object(h.a)(a)),a.updateNav=a.updateNav.bind(Object(h.a)(a)),a._isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._intersectObserver=L.intersectObservable().subscribe({next:this.updateCurrent}),this._navObserver=L.navObservable().subscribe({next:this.updateNav}),this.parallax=new z.a(this.refParallax.current),window.addEventListener("resize",this.updateUI),this.updateUI(),this._clickOberserver=L.clickObservable().subscribe({next:this.triggerClick}),this._hoverOberserver=L.hoverObservable().subscribe({next:this.triggerHover})}},{key:"componentWillUnmount",value:function(){this._intersectObserver&&this._intersectObserver.unsubscribe(),this.parallax.disable(),window.removeEventListener("resize",this.updateUI),this._clickOberserver&&this._clickOberserver.unsubscribe(),this._hoverOberserver&&this._hoverOberserver.unsubscribe()}},{key:"updateCurrent",value:function(e){this.setState(Object(d.a)({},this.state,{theme:Object(d.a)({},this.state.theme,{current:Object(d.a)({},e)})}))}},{key:"updateNav",value:function(e){e.up===this.state.nav.up&&e.down===this.state.nav.down||this.setState(Object(d.a)({},this.state,{nav:e}))}},{key:"triggerClick",value:function(e){var t=this,a=(e.id,e.theme);(this._timeout||this._animatingForward)&&this.setState(Object(d.a)({},this.state,{theme:Object(d.a)({},this.state.theme,{clicked:Object(d.a)({},a)})})),this._animatingForward?this._timeout=setTimeout(function(){t.setState(Object(d.a)({},t.state,{animating:!1,theme:Object(d.a)({},t.state.theme,{current:Object(d.a)({},a),clicked:{},animating:{},hover:{}})}),function(){return t._animatingForward=!1}),t._timeout=null},400-Math.min(Date.now()-this._animationStart,400)):(this.setState(Object(d.a)({},this.state,{animating:!0,theme:Object(d.a)({},this.state.theme,{animating:Object(d.a)({},a),clicked:Object(d.a)({},a)})}),function(){return t._animatingForward=!0}),this._timeout=setTimeout(function(){t.setState(Object(d.a)({},t.state,{animating:!1,theme:Object(d.a)({},t.state.theme,{current:Object(d.a)({},a),clicked:{},animating:{},hover:{}})}),function(){return t._animatingForward=!1}),t._timeout=null},400))}},{key:"triggerHover",value:function(e){var t=this,a=e.id,n=e.theme;if(!this._animatingForward&&!this._timeout){if(L.isNone(n)||L.isEqual(n,this.state.theme.current))return;return this._animatingForward=!0,this._animationStart=Date.now(),void this.setState(Object(d.a)({},this.state,{animating:!0,theme:Object(d.a)({},this.state.theme,{animating:Object(d.a)({},n),hover:Object(d.a)({},n)})}))}this.setState(Object(d.a)({},this.state,{theme:Object(d.a)({},this.state.theme,{hover:Object(d.a)({},n)})})),this._hovered={id:a,theme:n},this._timeout||(this._timeout=setTimeout(function(){if(!L.isNone(t.state.theme.clicked))return t._hovered=null,t._timeout=null,void t.triggerClick({theme:t.state.theme.clicked});t.setState(Object(d.a)({},t.state,{animating:!1}),function(){return t._animatingForward=!1}),t._timeout=setTimeout(function(){var e=t._hovered;t._hovered=null,t._timeout=null,L.isNone(t.state.theme.clicked)?e&&t.triggerHover(e):t.triggerClick({theme:t.state.theme.clicked})},400)},400-Math.min(Date.now()-this._animationStart,400)))}},{key:"updateUI",value:function(){this.updateBackground()}},{key:"updateBackground",value:function(){if(this._prevWidth!==window.innerWidth||!this._isMobile){var e=window.innerHeight/2,t=-Math.atan(window.innerHeight/window.innerWidth)*(180/Math.PI);this.setState({transforms:{background:"translateY(".concat(e,"px) skewY(").concat(t,"deg)"),foreground:"translateY(".concat(-e,"px) skewY(").concat(-t,"deg)")}}),this._prevWidth=window.innerWidth}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"theme__bg-primary",style:{backgroundColor:this.state.theme.current.primary}},r.a.createElement("style",{dangerouslySetInnerHTML:{__html:".toggles__toggle--sm.toggles__toggle--active svg { background-color: ".concat(this.state.theme.clicked.primary||this.state.theme.current.primary,"; } .toggles__toggle--hover.toggles__toggle--lg .ribbon > div, .toggles__toggle--hover.toggles__toggle--lg .ribbon .ribbon__left, .toggles__toggle--hover.toggles__toggle--lg .ribbon__right, .toggles__toggle--hover.toggles__toggle--sm svg { background-color: ").concat(this.state.theme.hover.secondary,"; } .toggles__toggle--hover.toggles__toggle--lg:not(.toggles__toggle--animating) svg { color: ").concat(this.state.theme.hover.secondary,"; } .themify--active-color, .themify--active-color-hover, .themify--inactive-color-invert-hover:hover {color: ").concat(this.state.theme.clicked.primary||this.state.theme.current.primary,";} .themify--active-color-hover:hover {color: ").concat(this.state.theme.clicked.secondary||this.state.theme.current.secondary,";} .themify--active-background {background-color: ").concat(this.state.theme.clicked.primary||this.state.theme.current.primary,";} .themify--active-background-hover:hover, .themify--inactive-background-hover:hover {background-color: ").concat(this.state.theme.clicked.secondary||this.state.theme.current.secondary,";}")}}),r.a.createElement("div",{className:B()("theme__bg-secondary",this.state.animating&&"animating"),style:{backgroundColor:this.state.theme.current.secondary,transform:this.state.transforms.background}},r.a.createElement("div",{className:"theme__bg-secondary-top",style:{backgroundColor:this.state.theme.animating.primary}}),r.a.createElement("div",{className:"theme__bg-secondary-bottom",style:{backgroundColor:this.state.theme.animating.secondary}}),r.a.createElement("div",{style:{transform:this.state.transforms.foreground}},r.a.createElement("div",{ref:this.refParallax},r.a.createElement("div",{"data-depth":"0.3"},r.a.createElement(U.a,{"data-invert-y":"true","data-invert-x":"true",params:q}))),r.a.createElement("span",{onClick:function(){return e.state.nav.up>=0&&Object(G.a)("#panel-".concat(e.state.nav.up),{duration:0})},className:B()("theme__nav","theme__nav--up",this.state.nav.up<0&&"theme__nav--hidden")},r.a.createElement(W.a,{icon:["fas","chevron-up"]})),r.a.createElement("span",{onClick:function(){return e.state.nav.down>=0&&Object(G.a)("#panel-".concat(e.state.nav.down),{duration:0})},className:B()("theme__nav","theme__nav--down",this.state.nav.down<0&&"theme__nav--hidden")},r.a.createElement(W.a,{icon:["fas","chevron-down"]})),r.a.createElement("span",{className:"theme__credits"},r.a.createElement("h6",null,"Designed by ",r.a.createElement("a",{className:"themify--inactive-color-invert-hover",href:"https://github.com/alipianu",rel:"noopener noreferrer",target:"_blank"},"@alipianu"))))))}}]),t}(r.a.Component),X=(a(618),-1),$="sm",K="lg",Q=r.a.forwardRef(function(e,t){return e.onClick?r.a.createElement("span",{ref:t,className:B()("toggles__toggle","toggles__toggle--"+e.type,e.isActive&&"toggles__toggle--active",e.isHovered&&"toggles__toggle--hover"),onClick:function(){return e.onClick(e.id,e.type)},onMouseEnter:function(){return e.onMouseEnter(e.id,e.type)},onMouseLeave:function(){return e.onMouseLeave(e.id,e.type)}},r.a.createElement("div",{className:"toggles__toggle__icon",style:e.transform&&{transform:e.transform}},r.a.createElement(W.a,{icon:[e.icon.style||"fas",e.icon.name||"question-circle"]})),e.type===K&&e.name&&r.a.createElement(te,null,r.a.createElement("h2",null,e.name))):r.a.createElement("a",{ref:t,className:B()("toggles__toggle","toggles__toggle--"+e.type,e.isActive&&"toggles__toggle--active",e.isHovered&&"toggles__toggle--hover"),"aria-label":e.ariaLabel||e.name||"".concat(e.icon||"question-circle"," button"),href:e.url||e.href||"#",rel:"noopener noreferrer",target:"_blank",onMouseEnter:function(){return e.onMouseEnter(e.id,e.type)},onMouseLeave:function(){return e.onMouseLeave(e.id,e.type)}},r.a.createElement("div",{style:e.transform&&{transform:e.transform}},r.a.createElement(W.a,{style:e.transform&&{transform:e.transform},icon:[e.icon.style||"fas",e.icon.name||"question-circle"]})),e.type===K&&e.name&&r.a.createElement(te,null,r.a.createElement("h2",null,e.name)))}),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={transforms:{sm:null,lg:null},activeId:X,hover:{id:X,type:X}},a.mouseEnterToggle=a.mouseEnterToggle.bind(Object(h.a)(a)),a.mouseLeaveToggle=a.mouseLeaveToggle.bind(Object(h.a)(a)),a.clickToggle=a.clickToggle.bind(Object(h.a)(a)),a.refsLG=[],a.refsSM=[],e.data.forEach(function(e){a.refsSM.push(r.a.createRef()),a.refsLG.push(r.a.createRef())}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"mouseEnterToggle",value:function(e,t){var a=this;this.setState(Object(d.a)({},this.state,{hover:{id:e,type:t}}),function(){return L.startHover(a.props.themeID,a.props.data[a.state.hover.id].theme)})}},{key:"mouseLeaveToggle",value:function(){var e=this;this.setState(Object(d.a)({},this.state,{hover:{id:X,type:X}}),function(){return L.endHover(e.props.themeID)})}},{key:"clickToggle",value:function(e,t){this.state.activeId===e?(this.setState(Object(d.a)({},this.state,{activeId:X})),L.resetActive(this.props.themeID),this.props.onClick(e,t)):(this.setState(Object(d.a)({},this.state,{activeId:e})),L.setActive(this.props.themeID,this.props.data[e].theme),this.props.onClick(e,t))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,(this.props.type===K||this.props.type!==$&&this.props.type!==K&&this.state.activeId===X)&&r.a.createElement("div",{ref:this.props.type===K&&this.props.innerRef,className:"toggles toggles--lg"},this.props.data.map(function(t,a){return r.a.createElement(Q,Object.assign({},t,{ref:e.refsLG[a],transform:e.state.transforms.lg&&e.state.transforms.lg[a],id:a,key:a,type:K,onClick:e.props.onClick&&e.clickToggle,isActive:e.state.activeId===a,isHovered:e.state.hover.id===a&&e.state.hover.type===K,onMouseEnter:e.mouseEnterToggle,onMouseLeave:e.mouseLeaveToggle}))})),(this.props.type===$||this.props.type!==$&&this.props.type!==K&&this.state.activeId!==X)&&r.a.createElement("div",{ref:this.props.innerRef,className:B()("toggles","toggles--sm",this.props.isMobile&&"toggles--mobile")},this.props.data.map(function(t,a){return r.a.createElement(Q,Object.assign({},t,{ref:e.refsSM[a],transform:e.state.transforms.sm&&e.state.transforms.sm[a],id:a,key:a,type:$,onClick:e.props.onClick&&e.clickToggle,isActive:e.state.activeId===a,isHovered:e.state.hover.id===a&&e.state.hover.type===$,onMouseEnter:e.mouseEnterToggle,onMouseLeave:e.mouseLeaveToggle}))})))}}]),t}(r.a.Component),Z=r.a.forwardRef(function(e,t){return r.a.createElement(V,Object.assign({innerRef:t},e))}),ee=(a(619),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).refParent=r.a.createRef(),a.updateRibbonCSS=a.updateRibbonCSS.bind(Object(h.a)(a)),a.state={borderWidth:{left:null,right:null}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateRibbonCSS),this.updateRibbonCSS()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateRibbonCSS)}},{key:"updateRibbonCSS",value:function(){var e=this.refParent.current.clientHeight;0!==e&&this.setState(Object(d.a)({},this.state,{borderWidth:{left:"".concat(e/2,"px 0 ").concat(e/2,"px ").concat(e/3,"px"),right:"".concat(e/2,"px ").concat(e/3,"px ").concat(e/2,"px 0")}}))}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.props.innerRef,className:B()("ribbon","ribbon--"+(this.props.type||"double"),"ribbon--"+(this.props.title?"titled":"untitled"))},r.a.createElement("div",{ref:this.refParent,className:B()(this.props.className)},this.props.title&&r.a.createElement("span",{className:"ribbon__title"},this.props.title),r.a.createElement("span",{className:"ribbon__text"},this.props.children),r.a.createElement("div",{style:{borderWidth:this.state.borderWidth.left},className:"ribbon__left"}),r.a.createElement("div",{style:{borderWidth:this.state.borderWidth.right},className:"ribbon__right"})))}}]),t}(r.a.Component)),te=r.a.forwardRef(function(e,t){return r.a.createElement(ee,Object.assign({innerRef:t},e))}),ae=a(55),ne=(a(620),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={elapsed:0,maxDots:4,loaded:!1,error:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){return e.setState({elapsed:(e.state.elapsed+1)%e.state.maxDots})},2e3);this.props.loader?this.props.loader().then(function(a){e.props.onSuccess&&e.props.onSuccess(a),e.setState({loaded:!0},function(){return clearInterval(t)})},function(a){e.props.onError&&e.props.onSuccess(a),e.setState({error:a},function(){return clearInterval(t)})}):this.setState({loaded:!0},function(){return clearInterval(t)})}},{key:"loadingText",value:function(){for(var e=[],t=!1,a=this.state.elapsed,n=this.state.maxDots;n>0;--n)t||a%n||0===a||(t=!0),e=[r.a.createElement("span",{key:n,className:B()("loader-text",t?"":"hidden")},".")].concat(Object(ae.a)(e));return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"loader-text"},"LOADING"),e)}},{key:"render",value:function(){return!this.state.error&&this.state.loaded?this.props.children:r.a.createElement("div",{className:B()("loader",this.state.error?"error":"",this.state.loaded?"loaded":"loading")},this.props.animation&&r.a.createElement(this.props.animation,{title:this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"loader-text"},"ERROR:"),r.a.createElement("p",{className:"loader-text"},this.props.errorMessage?this.props.errorMessage:"An unexpected error has occured")):r.a.createElement("h2",null,this.loadingText())}))}}]),t}(r.a.Component)),re=(a(621),a(622),0),ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).id=re++,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:B()("shape",this.props.type,this.props.animated===this.id&&"animated")},r.a.Children.map(this.props.children||[],function(t){return r.a.cloneElement(t,{parentId:e.id,animationChange:e.props.animationChange})}))}}]),t}(r.a.Component),oe=(a(623),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={color:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.subscription=this.props.animationChange.subscribe({next:function(t){return e.props.parentId===t&&e.updateColor()}})}},{key:"componentWillUnmount",value:function(){this.subscription.unsubscribe()}},{key:"updateColor",value:function(){var e=function(){var e=function(){return Math.floor(256*Math.random())};return"rgba(".concat(e(),", ").concat(e(),", ").concat(e(),", 0.7)")},t="rect"===this.props.type?{backgroundColor:e()}:{borderColor:"transparent transparent ".concat(e()," transparent")};this.setState({color:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:B()("shape-face",this.props.type),style:this.state.color})}}]),t}(r.a.Component)),se=function(e,t){return Math.floor(Math.random()*(t-e))+e},ce=function(){var e="rotateY(0deg) rotateX(0deg) scale(0)",t="rotateY(".concat(se(-400,400),"deg) rotateX(").concat(se(-400,400),"deg) scale(1)");return"\n    @-webkit-keyframes spin-shapes {\n      from {\n        -webkit-transform: ".concat(e,";\n      }\n      to {\n        -webkit-transform: ").concat(t,";\n      }\n    }\n    @-moz-keyframes spin-shapes {\n      from {\n        -webkit-transform: ").concat(e,";\n      }\n      to {\n        -webkit-transform: ").concat(t,";\n      }\n    }\n    @keyframes spin-shapes {\n      from {\n        -webkit-transform: ").concat(e,";\n            -ms-transform: ").concat(e,";\n                transform: ").concat(e,";\n      }\n      to {\n        -webkit-transform: ").concat(t,";\n            -ms-transform: ").concat(t,";\n                transform: ").concat(t,";\n      }\n    }\n  ")},le=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={animated:null,animationChange:new _.a,keyframe:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=se(0,re);this.setState({animated:t,keyframe:ce()},function(){return e.state.animationChange.next(t)}),this.animationInterval=setInterval(function(){do{var t=se(0,re)}while(t===e.state.animated);e.setState({animated:t,keyframe:ce()},function(){return e.state.animationChange.next(t)})},11e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.animationInterval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"scene"},r.a.createElement("div",{className:"shapes"},r.a.createElement(ie,{type:"tetrahedron",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null)),r.a.createElement(ie,{type:"triang-prism",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,{type:"rect"})),r.a.createElement(ie,{type:"cube",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(oe,{type:"rect"}),r.a.createElement(oe,{type:"rect"}),r.a.createElement(oe,{type:"rect"}),r.a.createElement(oe,{type:"rect"}),r.a.createElement(oe,{type:"rect"}),r.a.createElement(oe,{type:"rect"})),r.a.createElement(ie,{type:"octahedron",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null),r.a.createElement(oe,null))),this.props.title,r.a.createElement("style",{dangerouslySetInnerHTML:{__html:this.state.keyframe}}))}}]),t}(r.a.Component),ue=(a(624),function(e){return e.children&&r.a.createElement("div",{className:"overflow-scroll"},r.a.createElement("div",{className:"overflow-scroll__child"},e.children))}),me=(a(625),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._firstScrollY=null,a.state={accepted:document.cookie.includes("_ga=")},a.acceptCookies=a.acceptCookies.bind(Object(h.a)(a)),a.acceptCookiesScroll=a.acceptCookiesScroll.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"acceptCookies",value:function(){this.setState({accepted:!0}),window.removeEventListener("scroll",this.acceptCookiesScroll),window.loadGoogleAnalytics()}},{key:"acceptCookiesScroll",value:function(){null===this._firstScrollY?this._firstScrollY=window.scrollY:Math.abs(window.scrollY-this._firstScrollY)>=100&&this.acceptCookies()}},{key:"componentDidMount",value:function(){this.state.accepted||window.addEventListener("scroll",this.acceptCookiesScroll)}},{key:"render",value:function(){return r.a.createElement("span",{className:B()("cookies","cookies--".concat(this.state.accepted?"accepted":"unaccepted"))},r.a.createElement("div",{className:"cookies__popup"},r.a.createElement(W.a,{className:"cookies__close",icon:["fas","times"],onClick:this.acceptCookies}),r.a.createElement("h4",{className:"cookies__title"},"Cookies Notice"),r.a.createElement("h5",{className:"cookies__description"},"Continuing to browse this site automatically accepts the use of cookies.")))}}]),t}(r.a.Component)),he=-1,de=H(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={selectedId:he,mobile:!1},a.detectMobile=a.detectMobile.bind(Object(h.a)(a)),a.toggleOption=a.toggleOption.bind(Object(h.a)(a)),a.refToggles=r.a.createRef(),a.refContainer=r.a.createRef(),a.refTitle=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggleOption",value:function(e){var t=this;this.state.selectedId===e?this.setState({selectedId:he},function(){return window.removeEventListener("resize",t.detectMobile)}):(window.addEventListener("resize",this.detectMobile),this.setState({selectedId:e},this.detectMobile))}},{key:"componentWillUnmount",value:function(){this.state.selectedId!==he&&window.removeEventListener("resize",this.detectMobile)}},{key:"detectMobile",value:function(){var e=(this.refContainer.current.getBoundingClientRect().width-this.refTitle.current.getBoundingClientRect().width)/2-14<=this.refToggles.current.getBoundingClientRect().width;e!==this.state.mobile&&this.setState({mobile:e})}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.refContainer,className:"container-options"},r.a.createElement("h1",{ref:this.refTitle},this.state.selectedId>=0&&this.props.data.options[this.state.selectedId].toggle.name||this.props.data.title),this.state.selectedId>=0&&r.a.createElement(ye[this.props.data.options[this.state.selectedId].container.name],{key:this.state.selectedId,data:this.props.data.options[this.state.selectedId].container.data}),r.a.createElement(Z,{ref:this.refToggles,isMobile:this.state.mobile,onClick:this.toggleOption,themeID:this.props.themeID,data:this.props.data.options.map(function(e){return e.toggle})}))}}]),t}(r.a.Component)),pe=(a(626),H(function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={mobile:!1},a.detectMobile=a.detectMobile.bind(Object(h.a)(a)),a.refHeadshot=r.a.createRef(),a.refRibbon=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.detectMobile),this.detectMobile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.detectMobile)}},{key:"detectMobile",value:function(){var e=this.refHeadshot.current.getBoundingClientRect().bottom<=this.refRibbon.current.getBoundingClientRect().bottom;e!==this.state.mobile&&this.setState({mobile:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-landing"},r.a.createElement("img",{ref:this.refHeadshot,className:"container-landing__headshot",alt:"headshot",src:this.props.data.headshot}),r.a.createElement("div",{className:"container-landing__info"},r.a.createElement("h1",{className:"container-landing__name"},this.props.data.name),r.a.createElement("h2",{className:"container-landing__title"},this.props.data.title),r.a.createElement(te,{ref:this.refRibbon,type:!this.state.mobile&&"right",className:"container-landing__status"},this.props.data.status.map(function(e,t){return r.a.createElement("span",{key:t,className:"format__textblock"},e)})),r.a.createElement("p",{className:"container-landing__education"},this.props.data.education),r.a.createElement("p",{className:"container-landing__past"},this.props.data.past.map(function(e,t){return r.a.createElement("span",{key:t,className:"format__textblock format__textblock--bar"},e)})),r.a.createElement(Z,{isMobile:this.state.mobile,themeID:this.props.themeID,type:"sm",data:this.props.data.social})))}}]),t}(r.a.Component))),fe=(a(627),function(e){var t=Math.floor(e.data.interests.length/2);return r.a.createElement(ue,null,r.a.createElement("div",{className:"container-interests animate__fade-in-down"},r.a.createElement("div",{className:"container-interests__column"},Object(ae.a)(Array(t).keys()).map(function(t){return r.a.createElement("p",{key:t},r.a.createElement(W.a,{className:"container-interests__icon",icon:[e.data.interests[t].icon.style||"fas",e.data.interests[t].icon.name]}),e.data.interests[t].text)})),r.a.createElement("div",{className:"container-interests__column"},Object(ae.a)(Array(e.data.interests.length-t).keys()).map(function(a){return r.a.createElement("p",{key:a},r.a.createElement(W.a,{className:"container-interests__icon",icon:[e.data.interests[t+a].icon.style||"fas",e.data.interests[t+a].icon.name]}),e.data.interests[t+a].text)}))))}),ve=(a(628),a(238)),be=a.n(ve),ge=function(e){return r.a.createElement(ue,null,r.a.createElement("div",{className:"container-activity animate__fade-in-down"},e.data.projects.map(function(e,t){return r.a.createElement("div",{key:t,className:"container-activity__row"},r.a.createElement(te,{type:"right",title:e.name},r.a.createElement(be.a,{fromNow:!0},e.lastActivity),e.private?r.a.createElement("span",{className:"themify--disabled"},r.a.createElement(W.a,{icon:["fas","lock"]})):r.a.createElement("a",{className:"themify--active-color-hover",href:e.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(W.a,{icon:["fab",e.platform]}))),r.a.createElement("p",{className:"container-activity__description"},e.description))})))},_e=(a(630),function(e){var t=Math.ceil(e.data.courses.length/2);return r.a.createElement(ue,null,r.a.createElement("div",{className:"container-courses animate__fade-in-down"},r.a.createElement("div",{className:"container-courses__column"},Object(ae.a)(Array(t).keys()).map(function(t){return r.a.createElement(te,{key:t,type:"right",title:e.data.courses[t].subject+" "+e.data.courses[t].code},e.data.courses[t].title.split(" ").map(function(a,n,i){return r.a.createElement("span",{key:n,className:"format__textblock"},a,n===i.length-1&&r.a.createElement("a",{className:"themify--active-color-hover",href:e.data.courses[t].url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(W.a,{icon:["fas","info-circle"]})))}))})),r.a.createElement("div",{className:"container-courses__column"},Object(ae.a)(Array(e.data.courses.length-t).keys()).map(function(a){return r.a.createElement(te,{key:a,type:"right",title:e.data.courses[t+a].subject+" "+e.data.courses[t+a].code},e.data.courses[t+a].title.split(" ").map(function(n,i,o){return r.a.createElement("span",{key:i,className:"format__textblock"},n,i===o.length-1&&r.a.createElement("a",{className:"themify--active-color-hover",href:e.data.courses[t+a].url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(W.a,{icon:["fas","info-circle"]})))}))}))))}),ye=(a(631),{OptionsContainer:de,LandingContainer:pe,InterestsContainer:fe,ActivityContainer:ge,CoursesContainer:_e,PortfolioContainer:function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={activeId:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"selectItem",value:function(e){e!==this.state.activeId&&this.setState({activeId:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-portfolio animate__fade-in-down"},r.a.createElement("div",{className:"carousel"},r.a.createElement(te,{key:this.state.activeId,className:"carousel__title--mobile"},r.a.createElement("h3",null,this.props.data.projects[this.state.activeId].title,this.props.data.projects[this.state.activeId].links.map(function(e,t){return r.a.createElement("a",{key:t,className:"carousel__link",href:e.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(W.a,{className:"themify--active-color-hover",icon:[e.icon.style,e.icon.name]}))}))),r.a.createElement(ue,null,r.a.createElement("table",{className:"carousel__display"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{className:"carousel__img",alt:this.props.data.projects[this.state.activeId].title,src:this.props.data.projects[this.state.activeId].thumbnail})),r.a.createElement("td",null,r.a.createElement("div",{className:"carousel__details"},r.a.createElement("div",{className:"carousel__title--desktop"},r.a.createElement("h3",null,this.props.data.projects[this.state.activeId].title),r.a.createElement("div",{className:"carousel__links"},this.props.data.projects[this.state.activeId].links.map(function(e,t){return r.a.createElement("a",{key:t,className:"carousel__link",href:e.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(W.a,{icon:[e.icon.style,e.icon.name]}))}))),r.a.createElement("div",{className:"carousel__description"},r.a.createElement("div",{className:"carousel__text"},this.props.data.projects[this.state.activeId].description),r.a.createElement("div",{className:"carousel__tools"},this.props.data.projects[this.state.activeId].tools.map(function(e,t){return r.a.createElement("div",{key:t,className:"carousel__tool themify--active-background"},e)}))))))))),r.a.createElement("div",{className:"carousel__controls"},this.props.data.projects.map(function(t,a){return r.a.createElement("div",{style:{width:"calc(".concat(100/e.props.data.projects.length,"% - 0.2em)")},key:a,className:B()("carousel__item",e.state.activeId===a?"themify--active-background":"themify--inactive-background-hover"),onClick:function(){return e.selectItem(a)}})}))))}}]),t}(r.a.Component)}),Ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._contentID=0,a.state={data:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{animation:le,loader:function(){return g(e._contentID)},onSuccess:function(t){var a=t.data;return e.setState({data:a})}},this.state.data&&r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),this.state.data.containers.map(function(e,t){var a=e.name,n=e.data;return r.a.createElement(ye[a],{key:t,data:n})}))),r.a.createElement(me,null))}}]),t}(r.a.Component),ke=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee,null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=a(88),je=a(23),we=a(64);Oe.b.add(je.h,je.i,je.a,je.q,je.p,je.l,je.c,je.r,je.j,je.d,je.g,je.b,je.m,je.e,je.f,je.o,je.n,je.k,je.s,we.d,we.f,we.a,we.b,we.e,we.c),o.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e){e.exports={version:"2.0.0",api:"https://api.alexlipianu.com"}}},[[240,1,2]]]);
//# sourceMappingURL=main.3f32526d.chunk.js.map