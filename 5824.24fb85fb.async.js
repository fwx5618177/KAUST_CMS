(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5824],{62804:function(de,_,s){"use strict";var K=s(59301),Z=(0,K.createContext)({});_.Z=Z},18766:function(de,_,s){"use strict";var K=s(15629),Z=s(55778),y=s(59301),A=s(92691),w=s.n(A),V=s(52535),R=s(98229),z=s.n(R),W=s(62804),o=["children","className","extra","style","renderContent"];function T(){return T=Object.assign||function(i){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(i[g]=d[g])}return i},T.apply(this,arguments)}function j(i,c){var d=Object.keys(i);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(i);c&&(g=g.filter(function(N){return Object.getOwnPropertyDescriptor(i,N).enumerable})),d.push.apply(d,g)}return d}function F(i){for(var c=1;c<arguments.length;c++){var d=arguments[c]!=null?arguments[c]:{};c%2?j(Object(d),!0).forEach(function(g){$(i,g,d[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(d)):j(Object(d)).forEach(function(g){Object.defineProperty(i,g,Object.getOwnPropertyDescriptor(d,g))})}return i}function $(i,c,d){return c in i?Object.defineProperty(i,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):i[c]=d,i}function M(i,c){if(i==null)return{};var d=J(i,c),g,N;if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(i);for(N=0;N<B.length;N++)g=B[N],!(c.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,g)||(d[g]=i[g]))}return d}function J(i,c){if(i==null)return{};var d={},g=Object.keys(i),N,B;for(B=0;B<g.length;B++)N=g[B],!(c.indexOf(N)>=0)&&(d[N]=i[N]);return d}var f=function(c){var d=c.children,g=c.className,N=c.extra,B=c.style,G=c.renderContent,H=M(c,o),ge=(0,y.useContext)(Z.ZP.ConfigContext),te=ge.getPrefixCls,se=c.prefixCls||te("pro"),Q="".concat(se,"-footer-bar"),O=(0,y.useContext)(W.Z),I=(0,y.useMemo)(function(){var X=O.hasSiderMenu,he=O.isMobile,ce=O.siderWidth;if(!!X)return ce?he?"100%":"calc(100% - ".concat(ce,"px)"):"100%"},[O.collapsed,O.hasSiderMenu,O.isMobile,O.siderWidth]),k=y.createElement(y.Fragment,null,y.createElement("div",{className:"".concat(Q,"-left")},N),y.createElement("div",{className:"".concat(Q,"-right")},d));return(0,y.useEffect)(function(){return!O||!(O==null?void 0:O.setHasFooterToolbar)?function(){}:(O==null||O.setHasFooterToolbar(!0),function(){var X;O==null||(X=O.setHasFooterToolbar)===null||X===void 0||X.call(O,!1)})},[]),y.createElement("div",T({className:w()(g,"".concat(Q)),style:F({width:I},B)},(0,V.Z)(H,["prefixCls"])),G?G(F(F(F({},c),O),{},{leftWidth:I}),k):k)};_.Z=f},342:function(de,_,s){"use strict";var K=s(15629),Z=s(55778),y=s(96497),A=s.n(y),w=s(59301),V=s(92691),R=s.n(V),z=s(62804),W=function(T){var j=(0,w.useContext)(z.Z),F=T.children,$=T.contentWidth,M=T.className,J=T.style,f=(0,w.useContext)(Z.ZP.ConfigContext),i=f.getPrefixCls,c=T.prefixCls||i("pro"),d=$||j.contentWidth,g="".concat(c,"-grid-content");return w.createElement("div",{className:R()(g,M,{wide:d==="Fixed"}),style:J},w.createElement("div",{className:"".concat(c,"-grid-content-children")},F))};_.Z=W},45824:function(de,_,s){"use strict";s.d(_,{H_:function(){return Ot},yy:function(){return qe},ZP:function(){return xt}});var K=s(78446),Z=s(43783),y=s(87062),A=s(19297),w=s(51548),V=s(46893),R=s(37150),z=s(403),W=s(53383),o=s(59301),T=s(92691),j=s.n(T),F=s(42349),$=s(49721),M=s(3181),J=s(10971),f=s(69498);function i(n){var e,r=function(l){return function(){e=null,n.apply(void 0,(0,J.Z)(l))}},t=function(){if(e==null){for(var l=arguments.length,v=new Array(l),u=0;u<l;u++)v[u]=arguments[u];e=(0,f.Z)(r(v))}};return t.cancel=function(){return f.Z.cancel(e)},t}function c(){return function(e,r,t){var a=t.value,l=!1;return{configurable:!0,get:function(){if(l||this===e.prototype||this.hasOwnProperty(r))return a;var u=i(a.bind(this));return l=!0,Object.defineProperty(this,r,{value:u,configurable:!0,writable:!0}),l=!1,u}}}}var d=s(95554);function g(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function N(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function B(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var G=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],H=[];function ge(){return H}function te(n,e){if(!!n){var r=H.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},H.push(r),G.forEach(function(t){r.eventHandlers[t]=(0,d.Z)(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function se(n){var e=H.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(H=H.filter(function(r){return r!==e}),G.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var Q=function(n,e,r,t){var a=arguments.length,l=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,v;if((typeof Reflect=="undefined"?"undefined":(0,W.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,r,t);else for(var u=n.length-1;u>=0;u--)(v=n[u])&&(l=(a<3?v(l):a>3?v(e,r,l):v(e,r))||l);return a>3&&l&&Object.defineProperty(e,r,l),l};function O(){return typeof window!="undefined"?window:null}var I;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(I||(I={}));var k=function(n){(0,R.Z)(r,n);var e=(0,z.Z)(r);function r(){var t;return(0,w.Z)(this,r),t=e.apply(this,arguments),t.state={status:I.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props.offsetBottom,l=t.props.offsetTop;return a===void 0&&l===void 0&&(l=0),l},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,l=a.status,v=a.lastAffix,u=t.props.onChange,m=t.getTargetFunc();if(!(l!==I.Prepare||!t.fixedNode||!t.placeholderNode||!m)){var b=t.getOffsetTop(),P=t.getOffsetBottom(),E=m();if(!!E){var h={status:I.None},p=g(E),C=g(t.placeholderNode),S=N(C,p,b),x=B(C,p,P);S!==void 0?(h.affixStyle={position:"fixed",top:S,width:C.width,height:C.height},h.placeholderStyle={width:C.width,height:C.height}):x!==void 0&&(h.affixStyle={position:"fixed",bottom:x,width:C.width,height:C.height},h.placeholderStyle={width:C.width,height:C.height}),h.lastAffix=!!h.affixStyle,u&&v!==h.lastAffix&&u(h.lastAffix),t.setState(h)}}},t.prepareMeasure=function(){if(t.setState({status:I.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t.render=function(){var a=t.context.getPrefixCls,l=t.state,v=l.affixStyle,u=l.placeholderStyle,m=t.props,b=m.prefixCls,P=m.children,E=j()((0,A.Z)({},a("affix",b),!!v)),h=(0,F.Z)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return o.createElement($.Z,{onResize:function(){t.updatePosition()}},o.createElement("div",(0,y.Z)({},h,{ref:t.savePlaceholderNode}),v&&o.createElement("div",{style:u,"aria-hidden":"true"}),o.createElement("div",{className:E,ref:t.saveFixedNode,style:v},o.createElement($.Z,{onResize:function(){t.updatePosition()}},P))))},t}return(0,V.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,l=this.props.target;return l!==void 0?l:a||O}},{key:"componentDidMount",value:function(){var a=this,l=this.getTargetFunc();l&&(this.timeout=setTimeout(function(){te(l(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var l=this.state.prevTarget,v=this.getTargetFunc(),u=null;v&&(u=v()||null),l!==u&&(se(this),u&&(te(u,this),this.updatePosition()),this.setState({prevTarget:u})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),se(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),l=this.state.affixStyle;if(a&&l){var v=this.getOffsetTop(),u=this.getOffsetBottom(),m=a();if(m&&this.placeholderNode){var b=g(m),P=g(this.placeholderNode),E=N(P,b,v),h=B(P,b,u);if(E!==void 0&&l.top===E||h!==void 0&&l.bottom===h)return}}this.prepareMeasure()}}]),r}(o.Component);k.contextType=M.E_,Q([c()],k.prototype,"updatePosition",null),Q([c()],k.prototype,"lazyUpdatePosition",null);var X=k,he=s(15629),ce=s(55778),Pe=s(65192),Ee=s(12807),Ie=s(29903),Le=s(81952),_e=s(64700),Oe=s(83405),fe=s(906),Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},xe=Ce,ye=s(23986),pe=function(e,r){return o.createElement(ye.Z,(0,fe.Z)((0,fe.Z)({},e),{},{ref:r,icon:xe}))};pe.displayName="ArrowLeftOutlined";var Re=o.forwardRef(pe),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ne=Te,De=function(e,r){return o.createElement(ye.Z,(0,fe.Z)((0,fe.Z)({},e),{},{ref:r,icon:Ne}))};De.displayName="ArrowRightOutlined";var We=o.forwardRef(De),Ue=s(24066),Me=s(49685),Ke=s(38362),Fe=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},Be=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,l=e.children,v=e.overlay,u=e.dropdownProps,m=Fe(e,["prefixCls","separator","children","overlay","dropdownProps"]),b=o.useContext(M.E_),P=b.getPrefixCls,E=P("breadcrumb",r),h=function(S){return v?o.createElement(Ke.Z,(0,y.Z)({overlay:v,placement:"bottomCenter"},u),o.createElement("span",{className:"".concat(E,"-overlay-link")},S,o.createElement(Me.Z,null))):S},p;return"href"in m?p=o.createElement("a",(0,y.Z)({className:"".concat(E,"-link")},m),l):p=o.createElement("span",(0,y.Z)({className:"".concat(E,"-link")},m),l),p=h(p),l?o.createElement("span",null,p,a&&o.createElement("span",{className:"".concat(E,"-separator")},a)):null};Be.__ANT_BREADCRUMB_ITEM=!0;var be=Be,Se=function(e){var r=e.children,t=o.useContext(M.E_),a=t.getPrefixCls,l=a("breadcrumb");return o.createElement("span",{className:"".concat(l,"-separator")},r||"/")};Se.__ANT_BREADCRUMB_SEPARATOR=!0;var Ae=Se,oe=s(92375),q=s(27576),re=s(27219),He=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function ze(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,l){return e[l]||a});return t}function $e(n,e,r,t){var a=r.indexOf(n)===r.length-1,l=ze(n,e);return a?o.createElement("span",null,l):o.createElement("a",{href:"#/".concat(t.join("/"))},l)}var we=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Ge=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=(0,J.Z)(e),l=we(r,t);return l&&a.push(l),a},ve=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,l=e.style,v=e.className,u=e.routes,m=e.children,b=e.itemRender,P=b===void 0?$e:b,E=e.params,h=E===void 0?{}:E,p=He(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=o.useContext(M.E_),S=C.getPrefixCls,x=C.direction,L,le=S("breadcrumb",r);if(u&&u.length>0){var ee=[];L=u.map(function(D){var Y=we(D.path,h);Y&&ee.push(Y);var ae;return D.children&&D.children.length&&(ae=o.createElement(oe.Z,null,D.children.map(function(me){return o.createElement(oe.Z.Item,{key:me.path||me.breadcrumbName},P(me,h,u,Ge(ee,me.path,h)))}))),o.createElement(be,{overlay:ae,separator:a,key:Y||D.breadcrumbName},P(D,h,u,ee))})}else m&&(L=(0,Ue.Z)(m).map(function(D,Y){return D&&((0,q.Z)(D.type&&(D.type.__ANT_BREADCRUMB_ITEM===!0||D.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,re.Tm)(D,{separator:a,key:Y}))}));var U=j()(le,(0,A.Z)({},"".concat(le,"-rtl"),x==="rtl"),v);return o.createElement("div",(0,y.Z)({className:U,style:l},p),L)};ve.Item=be,ve.Separator=Ae;var ue=ve,Ze=ue,tt=s(61025),rt=s(8461),nt=s(34059),at=function(e,r,t){return!r||!t?null:o.createElement(nt.Z,{componentName:"PageHeader"},function(a){var l=a.back;return o.createElement("div",{className:"".concat(e,"-back")},o.createElement(rt.Z,{onClick:function(u){t==null||t(u)},className:"".concat(e,"-back-button"),"aria-label":l},r))})},ot=function(e){return o.createElement(Ze,e)},it=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?o.createElement(We,null):o.createElement(Re,null)},lt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,l=r.avatar,v=r.subTitle,u=r.tags,m=r.extra,b=r.onBack,P="".concat(e,"-heading"),E=a||v||u||m;if(!E)return null;var h=it(r,t),p=at(e,h,b),C=p||l||E;return o.createElement("div",{className:P},C&&o.createElement("div",{className:"".concat(P,"-left")},p,l&&o.createElement(tt.C,l),a&&o.createElement("span",{className:"".concat(P,"-title"),title:typeof a=="string"?a:void 0},a),v&&o.createElement("span",{className:"".concat(P,"-sub-title"),title:typeof v=="string"?v:void 0},v),u&&o.createElement("span",{className:"".concat(P,"-tags")},u)),m&&o.createElement("span",{className:"".concat(P,"-extra")},m))},st=function(e,r){return r?o.createElement("div",{className:"".concat(e,"-footer")},r):null},ct=function(e,r){return o.createElement("div",{className:"".concat(e,"-content")},r)},ft=function(e){var r=o.useState(!1),t=(0,Oe.Z)(r,2),a=t[0],l=t[1],v=function(m){var b=m.width;l(b<768)};return o.createElement(M.C,null,function(u){var m,b=u.getPrefixCls,P=u.pageHeader,E=u.direction,h=e.prefixCls,p=e.style,C=e.footer,S=e.children,x=e.breadcrumb,L=e.breadcrumbRender,le=e.className,ee=!0;"ghost"in e?ee=e.ghost:P&&"ghost"in P&&(ee=P.ghost);var U=b("page-header",h),D=function(){var Ve;return((Ve=x)===null||Ve===void 0?void 0:Ve.routes)?ot(x):null},Y=D(),ae=x&&"props"in x,me=(L==null?void 0:L(e,Y))||Y,et=ae?x:me,Rt=j()(U,le,(m={"has-breadcrumb":!!et,"has-footer":!!C},(0,A.Z)(m,"".concat(U,"-ghost"),ee),(0,A.Z)(m,"".concat(U,"-rtl"),E==="rtl"),(0,A.Z)(m,"".concat(U,"-compact"),a),m));return o.createElement($.Z,{onResize:v},o.createElement("div",{className:Rt,style:p},et,lt(U,e,E),S&&ct(U,S),st(U,C)))})},ut=ft,Tt=s(12337),Je=s(98041),Xe=s(62804),dt=s(342),vt=s(18766),Nt=s(42389),mt=s(21183),gt=s(83214),ht=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],yt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Qe(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function ne(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Qe(Object(r),!0).forEach(function(t){Ye(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Qe(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Ye(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function ke(n,e){if(n==null)return{};var r=pt(n,e),t,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],!(e.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(r[t]=n[t]))}return r}function pt(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,l;for(l=0;l<t.length;l++)a=t[l],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function ie(){return ie=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},ie.apply(this,arguments)}function je(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?je=function(r){return typeof r}:je=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},je(n)}function bt(n){return je(n)==="object"?n:{spinning:n}}var Pt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,l=e.tabBarExtraContent,v=e.tabProps,u=e.prefixedClassName;return r&&r.length?o.createElement(Je.Z,ie({className:"".concat(u,"-tabs"),activeKey:t,onChange:function(b){a&&a(b)},tabBarExtraContent:l},v),r.map(function(m,b){return o.createElement(Je.Z.TabPane,ie({},m,{tab:m.tab,key:m.key||b}))})):null},Et=function(e,r,t){return!e&&!r?null:o.createElement("div",{className:"".concat(t,"-detail")},o.createElement("div",{className:"".concat(t,"-main")},o.createElement("div",{className:"".concat(t,"-row")},e&&o.createElement("div",{className:"".concat(t,"-content")},e),r&&o.createElement("div",{className:"".concat(t,"-extraContent")},r))))},Ot=function(e){var r=(0,o.useContext)(Xe.Z);return o.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},o.createElement(Ze,ie({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},qe=function(e){var r,t=(0,o.useContext)(Xe.Z),a=e.title,l=e.content,v=e.pageHeaderRender,u=e.header,m=e.prefixedClassName,b=e.extraContent,P=e.style,E=e.prefixCls,h=e.breadcrumbRender,p=ke(e,ht);if(v===!1)return null;if(v)return o.createElement(o.Fragment,null," ",v(ne(ne({},e),t)));var C=a;!a&&a!==!1&&(C=t.title);var S=ne(ne(ne({},t),{},{title:C},p),{},{footer:Pt(ne(ne({},p),{},{breadcrumbRender:h,prefixedClassName:m}))},u),x=S.breadcrumb,L=!x||h===!1||!(x==null?void 0:x.itemRender)&&!(x==null||(r=x.routes)===null||r===void 0?void 0:r.length);return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(le){return!S[le]})&&L&&!l&&!b?null:o.createElement("div",{className:"".concat(m,"-warp")},o.createElement(ut,ie({},S,{breadcrumb:h===!1?void 0:ne(ne({},S.breadcrumb),t.breadcrumbProps),prefixCls:E}),(u==null?void 0:u.children)||Et(l,b,m)))},Ct=function(e){var r,t=e.children,a=e.loading,l=a===void 0?!1:a,v=e.className,u=e.style,m=e.footer,b=e.affixProps,P=e.ghost,E=e.fixedHeader,h=ke(e,yt),p=(0,o.useContext)(Xe.Z),C=(0,o.useContext)(ce.ZP.ConfigContext),S=C.getPrefixCls,x=e.prefixCls||S("pro"),L="".concat(x,"-page-container"),le=j()(L,v,(r={},Ye(r,"".concat(x,"-page-container-ghost"),P),Ye(r,"".concat(x,"-page-container-with-footer"),m),r)),ee=(0,o.useMemo)(function(){return t?o.createElement(o.Fragment,null,o.createElement("div",{className:"".concat(L,"-children-content")},t),p.hasFooterToolbar&&o.createElement("div",{style:{height:48,marginTop:24}})):null},[t,L,p.hasFooterToolbar]),U=o.createElement(qe,ie({},h,{ghost:P,prefixCls:void 0,prefixedClassName:L})),D=(0,o.useMemo)(function(){if(o.isValidElement(l))return l;if(typeof l=="boolean"&&!l)return null;var ae=bt(l);return o.createElement(mt.Z,ae)},[l]),Y=(0,o.useMemo)(function(){var ae=D||ee;return e.waterMarkProps||p.waterMarkProps?o.createElement(gt.Z,e.waterMarkProps||p.waterMarkProps,ae):ae},[e.waterMarkProps,p.waterMarkProps,D,ee]);return o.createElement("div",{style:u,className:le},E&&U?o.createElement(X,ie({offsetTop:p.hasHeader&&p.fixedHeader?p.headerHeight:0},b),U):U,Y&&o.createElement(dt.Z,null,Y),m&&o.createElement(vt.Z,{prefixCls:x},m))},xt=Ct},83214:function(de,_,s){"use strict";var K=s(15629),Z=s(55778),y=s(59301),A=s(92691),w=s.n(A);function V(f,i){var c=Object.keys(f);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(f);i&&(d=d.filter(function(g){return Object.getOwnPropertyDescriptor(f,g).enumerable})),c.push.apply(c,d)}return c}function R(f){for(var i=1;i<arguments.length;i++){var c=arguments[i]!=null?arguments[i]:{};i%2?V(Object(c),!0).forEach(function(d){z(f,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(c)):V(Object(c)).forEach(function(d){Object.defineProperty(f,d,Object.getOwnPropertyDescriptor(c,d))})}return f}function z(f,i,c){return i in f?Object.defineProperty(f,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):f[i]=c,f}function W(f,i){return $(f)||F(f,i)||T(f,i)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(f,i){if(!!f){if(typeof f=="string")return j(f,i);var c=Object.prototype.toString.call(f).slice(8,-1);if(c==="Object"&&f.constructor&&(c=f.constructor.name),c==="Map"||c==="Set")return Array.from(f);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return j(f,i)}}function j(f,i){(i==null||i>f.length)&&(i=f.length);for(var c=0,d=new Array(i);c<i;c++)d[c]=f[c];return d}function F(f,i){var c=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(c!=null){var d=[],g=!0,N=!1,B,G;try{for(c=c.call(f);!(g=(B=c.next()).done)&&(d.push(B.value),!(i&&d.length===i));g=!0);}catch(H){N=!0,G=H}finally{try{!g&&c.return!=null&&c.return()}finally{if(N)throw G}}return d}}function $(f){if(Array.isArray(f))return f}var M=function(i){if(!i)return 1;var c=i.backingStorePixelRatio||i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/c},J=function(i){var c=i.children,d=i.style,g=i.className,N=i.markStyle,B=i.markClassName,G=i.zIndex,H=G===void 0?9:G,ge=i.gapX,te=ge===void 0?212:ge,se=i.gapY,Q=se===void 0?222:se,O=i.width,I=O===void 0?120:O,k=i.height,X=k===void 0?64:k,he=i.rotate,ce=he===void 0?-22:he,Pe=i.image,Ee=i.content,Ie=i.offsetLeft,Le=i.offsetTop,_e=i.fontStyle,Oe=_e===void 0?"normal":_e,fe=i.fontWeight,Ce=fe===void 0?"normal":fe,xe=i.fontColor,ye=xe===void 0?"rgba(0,0,0,.15)":xe,pe=i.fontSize,Re=pe===void 0?16:pe,Te=i.fontFamily,Ne=Te===void 0?"sans-serif":Te,De=i.prefixCls,We=(0,y.useContext)(Z.ZP.ConfigContext),Ue=We.getPrefixCls,Me=Ue("pro-layout-watermark",De),Ke=w()("".concat(Me,"-wrapper"),g),Fe=w()(Me,B),Be=(0,y.useState)(""),be=W(Be,2),Se=be[0],Ae=be[1];return(0,y.useEffect)(function(){var oe=document.createElement("canvas"),q=oe.getContext("2d"),re=M(q),He="".concat((te+I)*re,"px"),ze="".concat((Q+X)*re,"px"),$e=Ie||te/2,we=Le||Q/2;if(oe.setAttribute("width",He),oe.setAttribute("height",ze),q){q.translate($e*re,we*re),q.rotate(Math.PI/180*Number(ce));var Ge=I*re,ve=X*re;if(Pe){var ue=new Image;ue.crossOrigin="anonymous",ue.referrerPolicy="no-referrer",ue.src=Pe,ue.onload=function(){q.drawImage(ue,0,0,Ge,ve),Ae(oe.toDataURL())}}else if(Ee){var Ze=Number(Re)*re;q.font="".concat(Oe," normal ").concat(Ce," ").concat(Ze,"px/").concat(ve,"px ").concat(Ne),q.fillStyle=ye,q.fillText(Ee,0,0),Ae(oe.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[te,Q,Ie,Le,ce,Oe,Ce,I,X,Ne,ye,Pe,Ee,Re]),y.createElement("div",{style:R({position:"relative"},d),className:Ke},c,y.createElement("div",{className:Fe,style:R({zIndex:H,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(te+I,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Se,"')")},N)}))};_.Z=J},98229:function(){},96497:function(){},42389:function(){},43783:function(){},12807:function(){},65192:function(){},8461:function(de,_,s){"use strict";var K=s(87062),Z=s(59301),y=s(70697),A=function(R,z){var W={};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&z.indexOf(o)<0&&(W[o]=R[o]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,o=Object.getOwnPropertySymbols(R);T<o.length;T++)z.indexOf(o[T])<0&&Object.prototype.propertyIsEnumerable.call(R,o[T])&&(W[o[T]]=R[o[T]]);return W},w={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},V=Z.forwardRef(function(R,z){var W=function(f){var i=f.keyCode;i===y.Z.ENTER&&f.preventDefault()},o=function(f){var i=f.keyCode,c=R.onClick;i===y.Z.ENTER&&c&&c()},T=R.style,j=R.noStyle,F=R.disabled,$=A(R,["style","noStyle","disabled"]),M={};return j||(M=(0,K.Z)({},w)),F&&(M.pointerEvents="none"),M=(0,K.Z)((0,K.Z)({},M),T),Z.createElement("div",(0,K.Z)({role:"button",tabIndex:0,ref:z},$,{onKeyDown:W,onKeyUp:o,style:M}))});_.Z=V},52535:function(de,_){"use strict";function s(K,Z){for(var y=Object.assign({},K),A=0;A<Z.length;A+=1){var w=Z[A];delete y[w]}return y}_.Z=s}}]);
