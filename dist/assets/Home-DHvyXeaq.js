import{c as P}from"./utils-BM_CldAA.js";import{c as m,d as b,t as te,o as y,a as _,w as h,r as w,u as i,b as ve,n as ae,g as ne,e as me,f as A,h as he,i as oe,j as ye,k,l as S,m as be,p as E,q as ge,s as _e,v as Y,x as j,y as ee,C as xe,z as we,A as $e,B as I,D as le,F as J,E as Ce,G as D,H,I as re,J as C,R as Ae,K as G,L as Ie,M as Ne}from"./index-BOANfgfY.js";import{_ as Ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";function F(t,e){const a=typeof t=="string"&&!e?`${t}Context`:e,n=Symbol(a);return[o=>{const s=ge(n,o);if(s||s===null)return s;throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t)?`one of the following components: ${t.join(", ")}`:`\`${t}\``}`)},o=>(_e(n,o),o)]}function q(t){return t==null}function Be(t){let e=!1,a;const n=me(!0);return(...o)=>(e||(a=n.run(()=>t(...o)),e=!0),a)}function ke(t){return typeof t=="function"?t():i(t)}const Se=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ee=t=>typeof t<"u";function se(t){var e;const a=ke(t);return(e=a==null?void 0:a.$el)!=null?e:a}function Oe(t){return JSON.parse(JSON.stringify(t))}function W(t,e,a,n={}){var o,s,l;const{clone:r=!1,passive:d=!1,eventName:p,deep:v=!1,defaultValue:u,shouldEmit:c}=n,f=j(),x=a||(f==null?void 0:f.emit)||((o=f==null?void 0:f.$emit)==null?void 0:o.bind(f))||((l=(s=f==null?void 0:f.proxy)==null?void 0:s.$emit)==null?void 0:l.bind(f==null?void 0:f.proxy));let $=p;e||(e="modelValue"),$=$||`update:${e.toString()}`;const B=g=>r?typeof r=="function"?r(g):Oe(g):g,N=()=>Ee(t[e])?B(t[e]):u,M=g=>{c?c(g)&&x($,g):x($,g)};if(d){const g=N(),V=A(g);let R=!1;return S(()=>t[e],z=>{R||(R=!0,V.value=B(z),Y(()=>R=!1))}),S(V,z=>{!R&&(z!==t[e]||v)&&M(z)},{deep:v}),V}else return m({get(){return N()},set(g){M(g)}})}function X(t){return t?t.flatMap(e=>e.type===J?X(e.children):[e]):[]}const Me=["INPUT","TEXTAREA"];function De(t,e,a,n={}){if(!e||n.enableIgnoredElement&&Me.includes(e.nodeName))return null;const{arrowKeyOptions:o="both",attributeName:s="[data-radix-vue-collection-item]",itemsArray:l=[],loop:r=!0,dir:d="ltr",preventScroll:p=!0,focus:v=!1}=n,[u,c,f,x,$,B]=[t.key==="ArrowRight",t.key==="ArrowLeft",t.key==="ArrowUp",t.key==="ArrowDown",t.key==="Home",t.key==="End"],N=f||x,M=u||c;if(!$&&!B&&(!N&&!M||o==="vertical"&&M||o==="horizontal"&&N))return null;const g=a?Array.from(a.querySelectorAll(s)):l;if(!g.length)return null;p&&t.preventDefault();let V=null;return M||N?V=ie(g,e,{goForward:N?x:d==="ltr"?u:c,loop:r}):$?V=g.at(0)||null:B&&(V=g.at(-1)||null),v&&(V==null||V.focus()),V}function ie(t,e,a,n=t.length){if(--n===0)return null;const o=t.indexOf(e),s=a.goForward?o+1:o-1;if(!a.loop&&(s<0||s>=t.length))return null;const l=(s+t.length)%t.length,r=t[l];return r?r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false"?ie(t,r,a,n):r:null}const[de,kt]=F("ConfigProvider");function Te(t){const e=de({dir:A("ltr")});return m(()=>{var a;return(t==null?void 0:t.value)||((a=e.dir)==null?void 0:a.value)||"ltr"})}function Pe(t){const e=j(),a=e==null?void 0:e.type.emits,n={};return a!=null&&a.length||console.warn(`No emitted event found. Please check component: ${e==null?void 0:e.type.__name}`),a==null||a.forEach(o=>{n[he(oe(o))]=(...s)=>t(o,...s)}),n}function ue(t){const e=j(),a=Object.keys((e==null?void 0:e.type.props)??{}).reduce((o,s)=>{const l=(e==null?void 0:e.type.props[s]).default;return l!==void 0&&(o[s]=l),o},{}),n=ye(t);return m(()=>{const o={},s=(e==null?void 0:e.vnode.props)??{};return Object.keys(s).forEach(l=>{o[oe(l)]=s[l]}),Object.keys({...a,...o}).reduce((l,r)=>(n.value[r]!==void 0&&(l[r]=n.value[r]),l),{})})}function je(t,e){const a=ue(t),n=e?Pe(e):{};return m(()=>({...a.value,...n}))}function O(){const t=j(),e=A(),a=m(()=>{var l,r;return["#text","#comment"].includes((l=e.value)==null?void 0:l.$el.nodeName)?(r=e.value)==null?void 0:r.$el.nextElementSibling:se(e)}),n=Object.assign({},t.exposed),o={};for(const l in t.props)Object.defineProperty(o,l,{enumerable:!0,configurable:!0,get:()=>t.props[l]});if(Object.keys(n).length>0)for(const l in n)Object.defineProperty(o,l,{enumerable:!0,configurable:!0,get:()=>n[l]});Object.defineProperty(o,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=o;function s(l){e.value=l,!(l instanceof Element||!l)&&(Object.defineProperty(o,"$el",{enumerable:!0,configurable:!0,get:()=>l.$el}),t.exposed=o)}return{forwardRef:s,currentRef:e,currentElement:a}}let Re=0;function ce(t,e="radix"){const a=de({useId:void 0});return ee?`${e}-${ee()}`:a.useId?`${e}-${a.useId()}`:`${e}-${++Re}`}function ze(t,e){const a=A(t);function n(o){return e[a.value][o]??a.value}return{state:a,dispatch:o=>{a.value=n(o)}}}const Ue=b({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:a}){return()=>{var n,o;if(!a.default)return null;const s=X(a.default()),l=s.findIndex(v=>v.type!==xe);if(l===-1)return s;const r=s[l];(n=r.props)==null||delete n.ref;const d=r.props?E(e,r.props):e;e.class&&(o=r.props)!=null&&o.class&&delete r.props.class;const p=we(r,d);for(const v in d)v.startsWith("on")&&(p.props||(p.props={}),p.props[v]=d[v]);return s.length===1?p:(s[l]=p,s)}}}),T=b({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:a}){const n=t.asChild?"template":t.as;return typeof n=="string"&&["area","img","input"].includes(n)?()=>k(n,e):n!=="template"?()=>k(t.as,e,{default:a.default}):()=>k(Ue,e,{default:a.default})}}),[pe,Le]=F("CollapsibleRoot"),Fe=b({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:open"],setup(t,{expose:e,emit:a}){const n=t,o=W(n,"open",a,{defaultValue:n.defaultOpen,passive:n.open===void 0}),s=W(n,"disabled");return Le({contentId:"",disabled:s,open:o,onOpenToggle:()=>{o.value=!o.value}}),e({open:o}),O(),(l,r)=>(y(),_(i(T),{as:l.as,"as-child":n.asChild,"data-state":i(o)?"open":"closed","data-disabled":i(s)?"":void 0},{default:h(()=>[w(l.$slots,"default",{open:i(o)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),Ke=b({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;O();const a=pe();return(n,o)=>{var s,l;return y(),_(i(T),{type:n.as==="button"?"button":void 0,as:n.as,"as-child":e.asChild,"aria-controls":i(a).contentId,"aria-expanded":i(a).open.value,"data-state":i(a).open.value?"open":"closed","data-disabled":(s=i(a).disabled)!=null&&s.value?"":void 0,disabled:(l=i(a).disabled)==null?void 0:l.value,onClick:i(a).onOpenToggle},{default:h(()=>[w(n.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}});function qe(t,e){const a=A({}),n=A("none"),o=t.value?"mounted":"unmounted",{state:s,dispatch:l}=ze(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),r=c=>{var f;if(Se){const x=new CustomEvent(c,{bubbles:!1,cancelable:!1});(f=e.value)==null||f.dispatchEvent(x)}};S(t,async(c,f)=>{var x;const $=f!==c;if(await Y(),$){const B=n.value,N=U(e.value);c?(l("MOUNT"),r("enter"),N==="none"&&r("after-enter")):N==="none"||((x=a.value)==null?void 0:x.display)==="none"?(l("UNMOUNT"),r("leave"),r("after-leave")):f&&B!==N?(l("ANIMATION_OUT"),r("leave")):(l("UNMOUNT"),r("after-leave"))}},{immediate:!0});const d=c=>{const f=U(e.value),x=f.includes(c.animationName),$=s.value==="mounted"?"enter":"leave";c.target===e.value&&x&&(r(`after-${$}`),l("ANIMATION_END")),c.target===e.value&&f==="none"&&l("ANIMATION_END")},p=c=>{c.target===e.value&&(n.value=U(e.value))},v=S(e,(c,f)=>{c?(a.value=getComputedStyle(c),c.addEventListener("animationstart",p),c.addEventListener("animationcancel",d),c.addEventListener("animationend",d)):(l("ANIMATION_END"),f==null||f.removeEventListener("animationstart",p),f==null||f.removeEventListener("animationcancel",d),f==null||f.removeEventListener("animationend",d))},{immediate:!0}),u=S(s,()=>{const c=U(e.value);n.value=s.value==="mounted"?c:"none"});return Ce(()=>{v(),u()}),{isPresent:m(()=>["mounted","unmountSuspended"].includes(s.value))}}function U(t){return t&&getComputedStyle(t).animationName||"none"}const He=b({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(t,{slots:e,expose:a}){var n;const{present:o,forceMount:s}=te(t),l=A(),{isPresent:r}=qe(o,l);a({present:r});let d=e.default({present:r});d=X(d||[]);const p=j();if(d&&(d==null?void 0:d.length)>1){const v=(n=p==null?void 0:p.parent)!=null&&n.type.name?`<${p.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${v}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(u=>`  - ${u}`).join(`
`)].join(`
`))}return()=>s.value||o.value||r.value?k(e.default({present:r})[0],{ref:v=>{const u=se(v);return typeof(u==null?void 0:u.hasAttribute)>"u"||(u!=null&&u.hasAttribute("data-radix-popper-content-wrapper")?l.value=u.firstElementChild:l.value=u),u}}):null}}),Ge=b({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t,a=pe();a.contentId||(a.contentId=ce(void 0,"radix-vue-collapsible-content"));const n=A(),{forwardRef:o,currentElement:s}=O(),l=A(0),r=A(0),d=m(()=>a.open.value),p=A(d.value),v=A();return S(()=>{var u;return[d.value,(u=n.value)==null?void 0:u.present]},async()=>{await Y();const u=s.value;if(!u)return;v.value=v.value||{transitionDuration:u.style.transitionDuration,animationName:u.style.animationName},u.style.transitionDuration="0s",u.style.animationName="none";const c=u.getBoundingClientRect();r.value=c.height,l.value=c.width,p.value||(u.style.transitionDuration=v.value.transitionDuration,u.style.animationName=v.value.animationName)},{immediate:!0}),$e(()=>{requestAnimationFrame(()=>{p.value=!1})}),(u,c)=>(y(),_(i(He),{ref_key:"presentRef",ref:n,present:u.forceMount||i(a).open.value,"force-mount":!0},{default:h(()=>{var f,x;return[I(i(T),E(u.$attrs,{id:i(a).contentId,ref:i(o),"as-child":e.asChild,as:u.as,"data-state":i(a).open.value?"open":"closed","data-disabled":(f=i(a).disabled)!=null&&f.value?"":void 0,hidden:!((x=n.value)!=null&&x.present),style:{"--radix-collapsible-content-height":`${r.value}px`,"--radix-collapsible-content-width":`${l.value}px`}}),{default:h(()=>{var $;return[($=n.value)!=null&&$.present?w(u.$slots,"default",{key:0}):le("",!0)]}),_:3},16,["id","as-child","as","data-state","data-disabled","hidden","style"])]}),_:3},8,["present"]))}});function fe({type:t,defaultValue:e,modelValue:a}){const n=a||e;if(q(t)&&q(a)&&q(e))throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");if(a!==void 0&&e!==void 0&&typeof a!=typeof e)throw new Error(`Invalid prop \`value\` of value \`${a}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${e}\`. The \`value\` prop must be:
  ${t==="single"?"- a string":t==="multiple"?"- an array of strings":`- a string
- an array of strings`}
  - \`undefined\``);const o=a!==void 0||e!==void 0;if(t&&o){const s=Array.isArray(a)||Array.isArray(e),l=a!==void 0?"modelValue":"defaultValue",r=l==="modelValue"?typeof a:typeof e;if(t==="single"&&s)return console.error(`Invalid prop \`${l}\` of type ${r} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`),"multiple";if(t==="multiple"&&!s)return console.error(`Invalid prop \`${l}\` of type ${r} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`),"single"}return o?Array.isArray(n)?"multiple":"single":t}function We({type:t,defaultValue:e,modelValue:a}){return t||fe({type:t,defaultValue:e,modelValue:a})}function Ye({type:t,defaultValue:e}){return e!==void 0?e:t==="single"?void 0:[]}function Je(t,e){const a=A(We(t)),n=W(t,"modelValue",e,{defaultValue:Ye(t),passive:t.modelValue===void 0,deep:!0});S(()=>[t.type,t.modelValue,t.defaultValue],()=>{const l=fe(t);a.value!==l&&(a.value=l)},{immediate:!0});function o(l){if(a.value==="single")n.value=l===n.value?void 0:l;else{const r=[...n.value||[]];if(r.includes(l)){const d=r.findIndex(p=>p===l);r.splice(d,1)}else r.push(l);n.value=r}}const s=m(()=>a.value==="single");return{modelValue:n,type:a,changeModelValue:o,isSingle:s}}const[K,Xe]=F("AccordionRoot"),Ze=b({__name:"AccordionRoot",props:{collapsible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dir:{},orientation:{default:"vertical"},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(t,{emit:e}){const a=t,n=e,{dir:o,disabled:s}=te(a),l=Te(o),{modelValue:r,changeModelValue:d,isSingle:p}=Je(a,n),{forwardRef:v,currentElement:u}=O();return Xe({disabled:s,direction:l,orientation:a.orientation,parentElement:u,isSingle:p,collapsible:a.collapsible,modelValue:r,changeModelValue:d}),(c,f)=>(y(),_(i(T),{ref:i(v),"as-child":c.asChild,as:c.as},{default:h(()=>[w(c.$slots,"default",{modelValue:i(r)})]),_:3},8,["as-child","as"]))}}),[Z,Qe]=F("AccordionItem"),et=b({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},asChild:{type:Boolean},as:{}},setup(t,{expose:e}){const a=t,n=K(),o=m(()=>n.isSingle.value?a.value===n.modelValue.value:Array.isArray(n.modelValue.value)&&n.modelValue.value.includes(a.value)),s=m(()=>n.disabled.value||a.disabled||n.isSingle.value&&o.value&&!n.collapsible),l=m(()=>s.value?"":void 0),r=m(()=>o.value?"open":"closed");e({open:o,dataDisabled:l});const{currentRef:d,currentElement:p}=O();Qe({open:o,dataState:r,disabled:s,dataDisabled:l,triggerId:"",currentRef:d,currentElement:p,value:m(()=>a.value)});function v(u){De(u,p.value,n.parentElement.value,{arrowKeyOptions:n.orientation,dir:n.direction.value,focus:!0})}return(u,c)=>(y(),_(i(Fe),{"data-orientation":i(n).orientation,"data-disabled":l.value,"data-state":r.value,disabled:s.value,open:o.value,as:a.as,"as-child":a.asChild,onKeydown:be(v,["up","down","left","right","home","end"])},{default:h(()=>[w(u.$slots,"default",{open:o.value})]),_:3},8,["data-orientation","data-disabled","data-state","disabled","open","as","as-child"]))}}),tt=b({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t,a=K(),n=Z();return O(),(o,s)=>(y(),_(i(Ge),{role:"region",hidden:!i(n).open.value,"as-child":e.asChild,"force-mount":e.forceMount,"aria-labelledby":i(n).triggerId,"data-state":i(n).dataState.value,"data-disabled":i(n).dataDisabled.value,"data-orientation":i(a).orientation,style:{"--radix-accordion-content-width":"var(--radix-collapsible-content-width)","--radix-accordion-content-height":"var(--radix-collapsible-content-height)"}},{default:h(()=>[w(o.$slots,"default")]),_:3},8,["hidden","as-child","force-mount","aria-labelledby","data-state","data-disabled","data-orientation"]))}}),at=b({__name:"AccordionHeader",props:{asChild:{type:Boolean},as:{default:"h3"}},setup(t){const e=t,a=K(),n=Z();return O(),(o,s)=>(y(),_(i(T),{as:e.as,"as-child":e.asChild,"data-orientation":i(a).orientation,"data-state":i(n).dataState.value,"data-disabled":i(n).dataDisabled.value},{default:h(()=>[w(o.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),nt=b({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t,a=K(),n=Z();n.triggerId||(n.triggerId=ce(void 0,"radix-vue-accordion-trigger"));function o(){n.disabled.value||a.changeModelValue(n.value.value)}return(s,l)=>(y(),_(i(Ke),{id:i(n).triggerId,ref:i(n).currentRef,"data-radix-vue-collection-item":"",as:e.as,"as-child":e.asChild,"aria-disabled":i(n).disabled.value||void 0,"aria-expanded":i(n).open.value||!1,"data-disabled":i(n).dataDisabled.value,"data-orientation":i(a).orientation,"data-state":i(n).dataState.value,disabled:i(n).disabled.value,onClick:o},{default:h(()=>[w(s.$slots,"default")]),_:3},8,["id","as","as-child","aria-disabled","aria-expanded","data-disabled","data-orientation","data-state","disabled"]))}});ve({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});Be(()=>A([]));const ot=b({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t,a=["horizontal","vertical"];function n(r){return a.includes(r)}const o=m(()=>n(e.orientation)?e.orientation:"horizontal"),s=m(()=>o.value==="vertical"?e.orientation:void 0),l=m(()=>e.decorative?{role:"none"}:{"aria-orientation":s.value,role:"separator"});return(r,d)=>(y(),_(i(T),E({as:r.as,"as-child":r.asChild,"data-orientation":o.value},l.value),{default:h(()=>[w(r.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),lt=b({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t;return(a,n)=>(y(),_(ot,ae(ne(e)),{default:h(()=>[w(a.$slots,"default")]),_:3},16))}});function rt(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}rt();const Q=b({__name:"Separator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{},label:{}},setup(t){const e=t,a=m(()=>{const{class:n,...o}=e;return o});return(n,o)=>(y(),_(i(lt),E(a.value,{class:i(P)("shrink-0 bg-slate-200 relative dark:bg-slate-800",e.orientation==="vertical"?"w-px h-full":"h-px w-full",e.class)}),{default:h(()=>[e.label?(y(),D("span",{key:0,class:re(i(P)("text-xs text-slate-500 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center dark:text-slate-400 dark:bg-slate-950",e.orientation==="vertical"?"w-[1px] px-1 py-2":"h-[1px] py-1 px-2"))},H(e.label),3)):le("",!0)]),_:1},16,["class"]))}}),st={id:"hero",class:"min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden"},it={class:"w-full px-4 sm:w-2/5 relative z-10"},dt={class:"mt-6 flex flex-col items-center space-y-4 relative z-10"},ut=b({__name:"Hero",setup(t){const e=a=>{const n=document.getElementById(a);n&&n.scrollIntoView({behavior:"smooth"})};return(a,n)=>(y(),D("section",st,[n[3]||(n[3]=C("h1",{class:"text-5xl font-bold mb-4 relative z-10"},"Marten Brugge",-1)),C("div",it,[I(i(Q))]),n[4]||(n[4]=C("div",{class:"flex flex-col pt-2 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 relative z-10"},[C("p",{class:"text-xl"},"Student Fullstack Developer")],-1)),C("div",dt,[C("button",{onClick:n[0]||(n[0]=o=>e("about")),class:"w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue"}," About me "),C("button",{onClick:n[1]||(n[1]=o=>e("contact")),class:"w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue"}," Contact "),I(i(Ae),{to:"/projects",class:"w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue"},{default:h(()=>n[2]||(n[2]=[G(" View Projects ")])),_:1})])]))}}),ct=Ve(ut,[["__scopeId","data-v-e012a31e"]]),pt=b({__name:"Accordion",props:{collapsible:{type:Boolean},disabled:{type:Boolean},dir:{},orientation:{},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(t,{emit:e}){const o=je(t,e);return(s,l)=>(y(),_(i(Ze),ae(ne(i(o))),{default:h(()=>[w(s.$slots,"default")]),_:3},16))}}),ft=b({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,a=m(()=>{const{class:n,...o}=e;return o});return(n,o)=>(y(),_(i(tt),E(a.value,{class:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:h(()=>[C("div",{class:re(i(P)("pb-4 pt-0",e.class))},[w(n.$slots,"default")],2)]),_:3},16))}}),vt=b({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,a=m(()=>{const{class:o,...s}=e;return s}),n=ue(a);return(o,s)=>(y(),_(i(et),E(i(n),{class:i(P)("border-b",e.class)}),{default:h(()=>[w(o.$slots,"default")]),_:3},16,["class"]))}});/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=({size:t,strokeWidth:e=2,absoluteStrokeWidth:a,color:n,iconNode:o,name:s,class:l,...r},{slots:d})=>k("svg",{...L,width:t||L.width,height:t||L.height,stroke:n||L.stroke,"stroke-width":a?Number(e)*24/Number(t):e,class:["lucide",`lucide-${mt(s??"icon")}`],...r},[...o.map(p=>k(...p)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=(t,e)=>(a,{slots:n})=>k(ht,{...a,iconNode:e,name:t},n);/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=yt("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),gt=b({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,a=m(()=>{const{class:n,...o}=e;return o});return(n,o)=>(y(),_(i(at),{class:"flex"},{default:h(()=>[I(i(nt),E(a.value,{class:i(P)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e.class)}),{default:h(()=>[w(n.$slots,"default"),w(n.$slots,"icon",{},()=>[I(i(bt),{class:"h-4 w-4 shrink-0 transition-transform duration-200"})])]),_:3},16,["class"])]),_:3}))}}),_t={id:"about",class:"min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-customBlue"},xt={class:"w-full px-4 sm:w-2/5 relative z-10"},wt="item-1",$t=b({__name:"About",setup(t){const e=m(()=>[{value:"item-1",title:"Who am I?",content:`I am a ${s.value} year old software developer student from the Netherlands. I am currently studying Software Developer at Alfa-College in Groningen.`},{value:"item-2",title:"What can I work with?",content:"I have varying degrees of experience in a variety of languages and frameworks such as: Vue, Svelte, Laravel, TS, JS, and Go."},{value:"item-3",title:"What have I done?",content:"I have earned my MAVO-tl diploma. I have finished Cambridge at C2 level. I am currently working to earn my degree for Software Developer."}]),a=new Date(2003,10,15),n=new Date,o=(l,r)=>{let d=r.getFullYear()-l.getFullYear();const p=r.getMonth()-l.getMonth(),v=r.getDate()-l.getDate();return(p<0||p===0&&v<0)&&d--,d},s=m(()=>o(a,n));return(l,r)=>(y(),D("section",_t,[r[0]||(r[0]=C("h1",{class:"text-5xl font-bold mb-4 relative z-10"},"About me",-1)),C("div",xt,[I(Q)]),I(i(pt),{type:"single",class:"w-full px-4 sm:w-2/5 relative z-10 text-start",collapsible:"","default-value":wt},{default:h(()=>[(y(!0),D(J,null,Ie(e.value,d=>(y(),_(i(vt),{key:d.value,value:d.value},{default:h(()=>[I(i(gt),null,{default:h(()=>[G(H(d.title),1)]),_:2},1024),I(i(ft),null,{default:h(()=>[G(H(d.content),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]))}}),Ct={id:"contact",class:"min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden"},At={class:"w-full px-4 sm:w-2/5 relative z-10"},It=b({__name:"Contact",setup(t){return(e,a)=>(y(),D("section",Ct,[a[0]||(a[0]=C("h1",{class:"text-5xl font-bold mb-4 relative z-10"},"Contact",-1)),C("div",At,[I(Q)]),a[1]||(a[1]=Ne('<div class="flex flex-col pt-2 space-y-2 relative z-10 sm:flex-row sm:space-y-0 sm:space-x-4"><p class="text-xl">Feel free to contact me if you are interested!</p></div><div class="mt-6 flex flex-col items-center space-y-4 relative z-10"><a href="https://www.linkedin.com/in/marten-brugge" target="_blank" class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue">LinkedIn</a><a href="mailto:martenbrugge@gmail.com" class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue">Email Me</a></div>',2))]))}}),St=b({__name:"Home",setup(t){return(e,a)=>(y(),D(J,null,[I(ct),I($t),I(It),a[0]||(a[0]=C("footer",{class:"w-full py-4 text-center"},[C("p",null,"© 2024 Marten Brugge. All rights reserved.")],-1))],64))}});export{St as default};
