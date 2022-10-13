"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[988],{9253:function(n,e,t){t.d(e,{r:function(){return a}});var r=t(1647),o=t(1508),i=t(184),a=function(n){var e=n.isOpen,t=void 0===e||e,a=n.handleClose,c=n.text,s=n.position,u=void 0===s?{vertical:"bottom",horizontal:"center"}:s,l=n.type;return(0,i.jsx)(r.Z,{open:t,onClose:a,autoHideDuration:3e3,anchorOrigin:u,children:(0,i.jsx)(o.Z,{onClose:a,severity:l,children:c})})}},988:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var r=t(2791),o=t(9434),i=t(885),a="NOT_FOUND";var c=function(n,e){return n===e};function s(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?c:r,i=t.maxSize,s=void 0===i?1:i,u=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),d=1===s?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:a},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return a}return{get:r,put:function(e,o){r(e)===a&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(s,l);function f(){var e=d.get(arguments);if(e===a){if(e=n.apply(null,arguments),u){var t=d.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}d.put(arguments,e)}return e}return f.clearCache=function(){return d.clear()},f}function u(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(c=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=c,d=l.memoizeOptions,f=void 0===d?t:d,m=Array.isArray(f)?f:[f],p=u(r),v=n.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(m)),h=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return i=v.apply(null,n)}));return Object.assign(h,{resultFunc:s,memoizedResultFunc:v,dependencies:p,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return o}var d=l(s),f=function(n){return n.contacts.items.contacts},m=function(n){return n.contacts.items.isLoading},p=function(n){return n.contacts.items.error},v=function(n){return n.contacts.filter},h=d([f,v],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),x=t(208),Z=t(9253),g=t(8130),j=t(803),y=t(3793),C=t(6015),b=t(3978),w=t(5953),S=t(8875),k=t(7205),P=t(184),M=function(){var n=(0,r.useState)(""),e=(0,i.Z)(n,2),t=e[0],a=e[1],c=(0,r.useState)(""),s=(0,i.Z)(c,2),u=s[0],l=s[1],d=(0,o.v9)(f),m=(0,o.I0)(),p=(0,r.useState)(!1),v=(0,i.Z)(p,2),h=v[0],M=v[1],N=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":l(r);break;default:throw new Error("Not supported type")}};return(0,P.jsxs)(P.Fragment,{children:[h&&(0,P.jsx)(Z.r,{isOpen:h,handleClose:function(){M(!1)},text:"Contact created",type:"success"}),(0,P.jsxs)(j.Z,{component:"section",maxWidth:"xs",children:[(0,P.jsx)(y.ZP,{}),(0,P.jsxs)(C.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,P.jsx)(b.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,P.jsx)(g.Z,{})}),(0,P.jsxs)(C.Z,{component:"form",noValidate:!0,onSubmit:function(n){if(n.preventDefault(),function(n){var e=n.toLowerCase();return d.find((function(n){return n.name.toLowerCase().includes(e)}))}(t))alert("".concat(t," is already in contacts."));else{var e={name:t,number:u};m((0,x.uK)(e)),M(!0),a(""),l("")}},sx:{mt:3},children:[(0,P.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,P.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,P.jsx)(S.Z,{value:t,onChange:N,autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name"})}),(0,P.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,P.jsx)(S.Z,{value:u,onChange:N,required:!0,fullWidth:!0,id:"number",label:"Phone number",name:"number",autoComplete:"tel"})})]}),(0,P.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Create contact"})]})]})]})]})},N=t(6895),R=function(){var n=(0,o.v9)(v),e=(0,o.I0)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(j.Z,{component:"section",maxWidth:"sm",sx:{marginTop:1,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,P.jsx)(S.Z,{value:n,onChange:function(n){e((0,N.k)(n.currentTarget.value))},name:"filter",fullWidth:!0,id:"filter",label:"Find by name",sx:{marginTop:2}})})})},z=t(7462),A=t(3366),F=t(8182),I=t(4419),L=t(277),D=t(5513),_=t(6650),E=t(1217),O=t(5878);function T(n){return(0,E.Z)("MuiCard",n)}(0,O.Z)("MuiCard",["root"]);var W=["className","raised"],H=(0,L.ZP)(_.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),q=r.forwardRef((function(n,e){var t=(0,D.Z)({props:n,name:"MuiCard"}),r=t.className,o=t.raised,i=void 0!==o&&o,a=(0,A.Z)(t,W),c=(0,z.Z)({},t,{raised:i}),s=function(n){var e=n.classes;return(0,I.Z)({root:["root"]},T,e)}(c);return(0,P.jsx)(H,(0,z.Z)({className:(0,F.Z)(s.root,r),elevation:i?8:void 0,ref:e,ownerState:c},a))}));function B(n){return(0,E.Z)("MuiCardContent",n)}(0,O.Z)("MuiCardContent",["root"]);var V=["className","component"],K=(0,L.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),G=r.forwardRef((function(n,e){var t=(0,D.Z)({props:n,name:"MuiCardContent"}),r=t.className,o=t.component,i=void 0===o?"div":o,a=(0,A.Z)(t,V),c=(0,z.Z)({},t,{component:i}),s=function(n){var e=n.classes;return(0,I.Z)({root:["root"]},B,e)}(c);return(0,P.jsx)(K,(0,z.Z)({as:i,className:(0,F.Z)(s.root,r),ownerState:c,ref:e},a))})),U=t(4565);function J(n){return(0,E.Z)("MuiCardActions",n)}(0,O.Z)("MuiCardActions",["root","spacing"]);var Q=["disableSpacing","className"],X=(0,L.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,!t.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,z.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Y=r.forwardRef((function(n,e){var t=(0,D.Z)({props:n,name:"MuiCardActions"}),r=t.disableSpacing,o=void 0!==r&&r,i=t.className,a=(0,A.Z)(t,Q),c=(0,z.Z)({},t,{disableSpacing:o}),s=function(n){var e=n.classes,t={root:["root",!n.disableSpacing&&"spacing"]};return(0,I.Z)(t,J,e)}(c);return(0,P.jsx)(X,(0,z.Z)({className:(0,F.Z)(s.root,i),ownerState:c,ref:e},a))})),$=t(5747);function nn(n){var e=n.id,t=n.name,r=n.number,i=(0,o.I0)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(w.ZP,{item:!0,children:(0,P.jsxs)(q,{sx:{minWidth:275},children:[(0,P.jsx)(G,{sx:{paddingBottom:0},children:(0,P.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,P.jsx)(w.ZP,{item:!0,children:(0,P.jsx)(b.Z,{alt:t,src:"#",sx:{m:1,bgcolor:"secondary.main"}})}),(0,P.jsxs)(w.ZP,{item:!0,children:[(0,P.jsx)(U.Z,{variant:"h5",children:t}),(0,P.jsx)(U.Z,{variant:"h6",color:"text.secondary",gutterBottom:!0,children:r})]})]})}),(0,P.jsx)(Y,{children:(0,P.jsx)(w.ZP,{container:!0,justifyContent:"center",children:(0,P.jsx)(w.ZP,{item:!0,sx:{pb:1},children:(0,P.jsx)(k.Z,{size:"small",variant:"contained",type:"button",onClick:function(){i((0,x.GK)(e))},startIcon:(0,P.jsx)($.Z,{}),children:"Delete"})})})})]})})})}var en=t(6580);function tn(){var n=(0,o.v9)(m),e=(0,o.v9)(p),t=(0,o.v9)(h);return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(j.Z,{component:"section",sx:{marginTop:2},children:(0,P.jsxs)(C.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[n&&!e&&(0,P.jsx)(en.Z,{sx:{mt:4}}),e&&(0,P.jsx)("p",{children:e}),t.length>0&&!e?(0,P.jsx)(w.ZP,{container:!0,spacing:2,sx:{marginTop:1},children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,P.jsx)(nn,{id:e,name:t,number:r},e)}))}):!n&&(0,P.jsx)(Z.r,{type:"error",text:"Not found any contact :("})]})})})}var rn=function(){var n=(0,o.I0)();return(0,r.useEffect)((function(){n((0,x.yF)())}),[n]),(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(C.Z,{sx:{pt:2,pb:4},children:[(0,P.jsx)(M,{}),(0,P.jsxs)(C.Z,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,P.jsx)(U.Z,{component:"h2",variant:"h4",children:"Contacts"}),(0,P.jsx)(R,{}),(0,P.jsx)(tn,{})]})]})})}},5747:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3.17-6.41a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 14l-1.42-1.41zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"}),"DeleteForeverRounded");e.Z=a},8130:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V8c0-.55-.45-1-1-1s-1 .45-1 1v2H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H6zm9 4c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"}),"PersonAddRounded");e.Z=a}}]);
//# sourceMappingURL=988.b0a3f4df.chunk.js.map