import{r as N,d as H,M as ce,O as fe,P as pe,Q as le,B as A,S as ve,U as he,H as O,i as w,w as $,f as R,W as a,X as ue,$ as z,a0 as M,V as de,bi as ge,bj as me,R as ye,bk as U,N as be,I as xe,a5 as ne,ag as ke,A as Ce,aI as Te,aF as ae,G as Ie,bd as Ee,c as P,g as j,n as _,be as Ke,F as se,K as Se,af as _e,e as ie,ak as we,t as Ae}from"./_lOazy7W.js";import Be from"./CWfl2iNR.js";import{f as G}from"./BJU9FsEA.js";import{_ as Re}from"./BhgubOU6.js";function Q(p){return p.reduce((o,t)=>(o.push(t),t.children&&o.push(...Q(t.children)),o),[])}function Ve(p,o){const t=N(),h=(n,v)=>{if(o.multiple&&Array.isArray(p.value))if(o.selectionBehavior==="replace")p.value=[n],t.value=n;else{const k=p.value.findIndex(u=>v(u));k!==-1?p.value.splice(k,1):p.value.push(n)}else o.selectionBehavior==="replace"?p.value={...n}:!Array.isArray(p.value)&&v(p.value)?p.value=void 0:p.value={...n};return p.value};function B(n,v,k,u){var K;if(!(t!=null&&t.value)||!o.multiple||!Array.isArray(p.value))return;const E=(K=k().filter(S=>S.ref.dataset.disabled!=="").find(S=>S.ref===v))==null?void 0:K.value;if(!E)return;let C=null;switch(n){case"prev":case"next":{C=G(u,t.value,E);break}case"first":{C=G(u,t.value,u==null?void 0:u[0]);break}case"last":{C=G(u,t.value,u==null?void 0:u[u.length-1]);break}}p.value=C}return{firstValue:t,onSelectItem:h,handleMultipleReplace:B}}const[$e,Le]=ve("TreeRoot"),De=H({__name:"TreeRoot",props:{modelValue:{},defaultValue:{},items:{},expanded:{},defaultExpanded:{},getKey:{},getChildren:{type:Function,default:p=>p.children},selectionBehavior:{default:"toggle"},multiple:{type:Boolean},dir:{},disabled:{type:Boolean},propagateSelect:{type:Boolean},asChild:{type:Boolean},as:{default:"ul"}},emits:["update:modelValue","update:expanded"],setup(p,{emit:o}){const t=p,h=o,{items:B,multiple:n,disabled:v,propagateSelect:k,dir:u}=ce(t),{handleTypeaheadSearch:T}=fe(),E=pe(u),C=N(),K=N(!1),S=he(),g=le(t,"modelValue",h,{defaultValue:t.defaultValue??(n.value?[]:void 0),passive:t.modelValue===void 0,deep:!0}),s=le(t,"expanded",h,{defaultValue:t.defaultExpanded??[],passive:t.expanded===void 0,deep:!0}),{onSelectItem:c,handleMultipleReplace:e}=Ve(g,t),i=A(()=>n.value&&Array.isArray(g.value)?g.value.map(l=>t.getKey(l)):[t.getKey(g.value??{})]);function r(l,d=1,b){return l.reduce((x,I,V)=>{const L=t.getKey(I),D=t.getChildren(I),F=s.value.includes(L),W={_id:L,value:I,index:V,level:d,parentItem:b,hasChildren:!!D,bind:{value:I,level:d,"aria-setsize":l.length,"aria-posinset":V+1}};return x.push(W),D&&F&&x.push(...r(D,d+1,I)),x},[])}const f=A(()=>{const l=t.items;return s.value.map(d=>d),r(l??[])});function m(l){var d;if(K.value)S.trigger(l);else{const b=((d=C.value)==null?void 0:d.getItems())??[];T(l.key,b)}}function y(l){if(K.value)return;const d=me[l.key];ye(()=>{var b;e(d,U(),(b=C.value)==null?void 0:b.getItems,f.value.map(x=>x.value))})}return Le({modelValue:g,selectedKeys:i,onSelect:l=>{var x;const d=I=>t.getKey(I??{})===t.getKey(l),b=t.multiple&&Array.isArray(g.value)?((x=g.value)==null?void 0:x.findIndex(d))!==-1:void 0;if(c(l,d),t.propagateSelect&&t.multiple&&Array.isArray(g.value)){const I=Q(t.getChildren(l)??[]);b?g.value=[...g.value].filter(V=>!I.some(L=>t.getKey(V??{})===t.getKey(L))):g.value=[...g.value,...I]}},expanded:s,onToggle(l){if(!(l?t.getChildren(l):void 0))return;const b=t.getKey(l)??l;s.value.includes(b)?s.value=s.value.filter(x=>x!==b):s.value.push(b)},getKey:t.getKey,getChildren:t.getChildren,items:B,expandedItems:f,disabled:v,multiple:n,dir:E,propagateSelect:k,isVirtual:K,virtualKeydownHook:S,handleMultipleReplace:e}),(l,d)=>(w(),O(a(ge),{ref_key:"rovingFocusGroupRef",ref:C,"as-child":"",orientation:"vertical",dir:a(E)},{default:$(()=>[R(a(ue),{role:"tree",as:l.as,"as-child":l.asChild,"aria-multiselectable":a(n)?!0:void 0,onKeydown:[m,z(M(y,["shift"]),["up","down"])]},{default:$(()=>[de(l.$slots,"default",{flattenItems:f.value,modelValue:a(g),expanded:a(s)})]),_:3},8,["as","as-child","aria-multiselectable","onKeydown"])]),_:3},8,["dir"]))}}),Ne="tree.select",Pe="tree.toggle",Me=H({inheritAttrs:!1,__name:"TreeItem",props:{value:{},level:{},asChild:{type:Boolean},as:{default:"li"}},emits:["select","toggle"],setup(p,{expose:o,emit:t}){const h=p,B=t,n=$e(),{getItems:v}=be(),k=A(()=>!!n.getChildren(h.value)),u=A(()=>{const e=n.getKey(h.value);return n.expanded.value.includes(e)}),T=A(()=>{const e=n.getKey(h.value);return n.selectedKeys.value.includes(e)}),E=A(()=>{if(n.propagateSelect.value&&T.value&&k.value&&Array.isArray(n.modelValue.value))return!Q(n.getChildren(h.value)||[]).every(i=>n.modelValue.value.find(r=>n.getKey(r)===n.getKey(i)))});function C(e){if(k.value)if(u.value){const i=v().map(l=>l.ref),r=U(),f=i.indexOf(r),y=[...i].slice(f).find(l=>Number(l.getAttribute("data-indent"))===h.level+1);y&&y.focus()}else c(e)}function K(e){if(u.value)c(e);else{const i=v().map(l=>l.ref),r=U(),f=i.indexOf(r),y=[...i].slice(0,f).reverse().find(l=>Number(l.getAttribute("data-indent"))===h.level-1);y&&y.focus()}}async function S(e){B("select",e),!(e!=null&&e.defaultPrevented)&&n.onSelect(h.value)}async function g(e){B("toggle",e),!(e!=null&&e.defaultPrevented)&&n.onToggle(h.value)}async function s(e){if(!e)return;const i={originalEvent:e,value:h.value,isExpanded:u.value,isSelected:T.value};ne(Ne,S,i)}async function c(e){if(!e)return;const i={originalEvent:e,value:h.value,isExpanded:u.value,isSelected:T.value};ne(Pe,g,i)}return o({isExpanded:u,isSelected:T,isIndeterminate:E,handleToggle:()=>n.onToggle(h.value),handleSelect:()=>n.onSelect(h.value)}),(e,i)=>(w(),O(a(Re),{"as-child":"",value:e.value,"allow-shift-key":""},{default:$(()=>[R(a(ue),xe(e.$attrs,{role:"treeitem",as:e.as,"as-child":e.asChild,"aria-selected":T.value,"aria-expanded":k.value?u.value:void 0,"aria-level":e.level,"data-indent":e.level,"data-selected":T.value?"":void 0,"data-expanded":u.value?"":void 0,onKeydown:[z(M(s,["self","prevent"]),["enter","space"]),i[0]||(i[0]=z(M(r=>a(n).dir.value==="ltr"?C(r):K(r),["prevent"]),["right"])),i[1]||(i[1]=z(M(r=>a(n).dir.value==="ltr"?K(r):C(r),["prevent"]),["left"]))],onClick:i[2]||(i[2]=M(r=>{s(r),c(r)},["stop"]))}),{default:$(()=>[de(e.$slots,"default",{isExpanded:u.value,isSelected:T.value,isIndeterminate:E.value,handleSelect:()=>a(n).onSelect(e.value),handleToggle:()=>a(n).onToggle(e.value)})]),_:3},16,["as","as-child","aria-selected","aria-expanded","aria-level","data-indent","data-selected","data-expanded","onKeydown"])]),_:3},8,["value"]))}}),Oe={slots:{root:"relative lg:h-[450px] my-5 grid lg:grid-cols-3 border border-(--ui-border-muted) rounded-[calc(var(--ui-radius)*1.5)]",list:"isolate relative p-2 border-b lg:border-b-0 lg:border-e border-(--ui-border-muted) overflow-y-auto",item:"",listWithChildren:"ms-4.5 border-s border-(--ui-border)",itemWithChildren:"ps-1.5 -ms-px",link:"relative group peer w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)] focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",linkLeadingIcon:"size-4 shrink-0",linkLabel:"truncate",linkTrailing:"ms-auto inline-flex gap-1.5 items-center",linkTrailingIcon:"size-5 transform transition-transform duration-200 shrink-0 group-data-expanded:rotate-180",content:"overflow-hidden lg:col-span-2 flex flex-col [&>div]:my-0 [&>div]:flex-1 [&>div]:flex [&>div]:flex-col [&>div>div]:border-0 [&>div>pre]:border-b-0 [&>div>pre]:border-s-0 [&>div>pre]:border-e-0 [&>div>pre]:rounded-l-none [&>div>pre]:flex-1 [&>div]:overflow-y-auto"},variants:{active:{true:{link:"text-(--ui-text-highlighted) before:bg-(--ui-bg-elevated)"},false:{link:["hover:text-(--ui-text-highlighted) hover:before:bg-(--ui-bg-elevated)/50","transition-colors before:transition-colors"]}}}},Fe=_e;var re,oe;const We=ae({extend:ae(Oe),...((oe=(re=Fe.uiPro)==null?void 0:re.prose)==null?void 0:oe.codeTree)||{}}),je=H({__name:"CodeTree",props:{defaultValue:{},class:{},ui:{}},setup(p){const o=p,t=ke(),h=Ce(),[B,n]=Te(),v=We(),k=N(o.defaultValue?{path:o.defaultValue}:void 0),u=N(),T=N(1),E=A(()=>{var s,c;return T.value,((c=(s=t.default)==null?void 0:s.call(t))==null?void 0:c.flatMap(S).filter(Boolean))||[]}),C=A(()=>K(E.value));function K(s){const c=new Map,e=[];s.forEach(r=>{const f=r.label.split("/");let m="";f.forEach((y,l)=>{var d,b;if(m=m?`${m}/${y}`:y,!c.has(m)){const x={label:y,path:m,...l<f.length-1&&{children:[]}};c.set(m,x),l===0?e.push(x):(b=(d=c.get(f.slice(0,l).join("/")))==null?void 0:d.children)==null||b.push(x)}})});const i=r=>r.sort((f,m)=>!!f.children==!!m.children?f.label.localeCompare(m.label):m.children?1:-1).map(f=>({...f,children:f.children&&i(f.children)}));return i(e)}function S(s,c){var e,i,r,f;return typeof s.type=="symbol"?(e=s.children)==null?void 0:e.map(S):{label:((i=s.props)==null?void 0:i.filename)||((r=s.props)==null?void 0:r.label)||`${c}`,icon:(f=s.props)==null?void 0:f.icon,component:s}}const g=A(()=>{var e;const s=(e=k.value)==null?void 0:e.path;if(!s)return[];const c=s.split("/");return c.map((i,r)=>c.slice(0,r+1).join("/"))});return Ie(k,s=>{const c=E.value.find(e=>(s==null?void 0:s.path)===e.label);c!=null&&c.component&&(u.value=c)},{immediate:!0}),Ee(()=>T.value++),(s,c)=>{var i,r,f,m;const e=we;return w(),P(se,null,[R(a(B),null,{default:$(({items:y,level:l})=>[(w(!0),P(se,null,Se(y,(d,b)=>{var x,I;return w(),P("li",{key:`${l}-${b}`,class:_(l>0?a(v).itemWithChildren({class:(x=o.ui)==null?void 0:x.itemWithChildren}):a(v).item({class:(I=o.ui)==null?void 0:I.item}))},[R(a(Me),{"as-child":"",level:l,value:d},{default:$(({isExpanded:V,isSelected:L})=>{var D,F,W,X,Y,q,J,Z,ee,te;return[j("button",{class:_(a(v).link({class:(D=o.ui)==null?void 0:D.link,active:L}))},[(F=d.children)!=null&&F.length?(w(),O(e,{key:0,name:V?a(h).ui.icons.folderOpen:a(h).ui.icons.folder,class:_(a(v).linkLeadingIcon({class:(W=o.ui)==null?void 0:W.linkLeadingIcon}))},null,8,["name","class"])):(w(),O(Be,{key:1,filename:d.label,class:_(a(v).linkLeadingIcon({class:(X=o.ui)==null?void 0:X.linkLeadingIcon}))},null,8,["filename","class"])),j("span",{class:_(a(v).linkLabel({class:(Y=o.ui)==null?void 0:Y.linkLabel}))},Ae(d.label),3),(q=d.children)!=null&&q.length?(w(),P("span",{key:2,class:_(a(v).linkTrailing({class:(J=o.ui)==null?void 0:J.linkTrailing}))},[R(e,{name:a(h).ui.icons.chevronDown,class:_(a(v).linkTrailingIcon({class:(Z=o.ui)==null?void 0:Z.linkTrailingIcon}))},null,8,["name","class"])],2)):ie("",!0)],2),(ee=d.children)!=null&&ee.length&&V?(w(),P("ul",{key:0,class:_(a(v).listWithChildren({class:(te=o.ui)==null?void 0:te.listWithChildren}))},[R(a(n),{items:d.children,level:l+1},null,8,["items","level"])],2)):ie("",!0)]}),_:2},1032,["level","value"])],2)}),128))]),_:1}),j("div",{class:_(a(v).root({class:[o.class,(i=o.ui)==null?void 0:i.root]}))},[R(a(De),{modelValue:k.value,"onUpdate:modelValue":c[0]||(c[0]=y=>k.value=y),class:_(a(v).list({class:(r=o.ui)==null?void 0:r.list})),items:C.value,"get-key":y=>y.path,"default-expanded":g.value},{default:$(()=>[R(a(n),{items:C.value,level:0},null,8,["items"])]),_:1},8,["modelValue","class","items","get-key","default-expanded"]),j("div",{class:_(a(v).content({class:(f=o.ui)==null?void 0:f.content}))},[(w(),O(Ke((m=u.value)==null?void 0:m.component)))],2)],2)],64)}}}),Qe=Object.assign(je,{__name:"ProseCodeTree"});export{Qe as default};
