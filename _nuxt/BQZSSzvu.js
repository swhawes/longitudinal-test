import{d as B,ag as I,B as k,aF as v,by as x,H as c,i as s,w as C,c as u,e as l,g as y,n,V as r,ak as z,aw as S,I as V,ae as b,t as h,W as N,X as U,af as j}from"./_lOazy7W.js";const L={slots:{root:"relative",wrapper:"",leading:"inline-flex items-center justify-center",leadingIcon:"size-5 shrink-0 text-(--ui-primary)",title:"text-base text-pretty font-semibold text-(--ui-text-highlighted)",description:"text-[15px] text-pretty text-(--ui-text-muted)"},variants:{orientation:{horizontal:{root:"flex items-start gap-2.5",leading:"p-0.5"},vertical:{leading:"mb-2.5"}},title:{true:{description:"mt-1"}}}},T=j;var w;const A=v({extend:v(L),...((w=T.uiPro)==null?void 0:w.pageFeature)||{}}),D=B({inheritAttrs:!1,__name:"PageFeature",props:{as:{},icon:{},title:{},description:{},orientation:{default:"horizontal"},to:{},target:{},onClick:{},class:{},ui:{}},setup(_){const t=_,a=I(),i=k(()=>A({orientation:t.orientation,title:!!t.title||!!a.title})),F=k(()=>(t.title||a.title&&x(a.title())||"Card link").trim());return(e,d)=>{var p;const P=z,$=S;return s(),c(N(U),{as:e.as,"data-orientation":e.orientation,class:n(i.value.root({class:[t.class,(p=t.ui)==null?void 0:p.root]})),onClick:e.onClick},{default:C(()=>{var g,m;return[e.icon||a.leading?(s(),u("div",{key:0,class:n(i.value.leading({class:(g=t.ui)==null?void 0:g.leading}))},[r(e.$slots,"leading",{},()=>{var o;return[e.icon?(s(),c(P,{key:0,name:e.icon,class:n(i.value.leadingIcon({class:(o=t.ui)==null?void 0:o.leadingIcon}))},null,8,["name","class"])):l("",!0)]})],2)):l("",!0),y("div",{class:n(i.value.wrapper({class:(m=t.ui)==null?void 0:m.wrapper}))},[e.to?(s(),c($,V({key:0,"aria-label":F.value},{to:e.to,target:e.target,...e.$attrs},{class:"focus:outline-none peer",tabindex:"-1",raw:""}),{default:C(()=>d[0]||(d[0]=[y("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):l("",!0),r(e.$slots,"default",{},()=>{var o,f;return[e.title||a.title?(s(),u("div",{key:0,class:n(i.value.title({class:(o=t.ui)==null?void 0:o.title}))},[r(e.$slots,"title",{},()=>[b(h(e.title),1)])],2)):l("",!0),e.description||a.description?(s(),u("div",{key:1,class:n(i.value.description({class:(f=t.ui)==null?void 0:f.description}))},[r(e.$slots,"description",{},()=>[b(h(e.description),1)])],2)):l("",!0)]})],2)]}),_:3},8,["as","data-orientation","class","onClick"])}}}),H=Object.assign(D,{__name:"UPageFeature"});export{H as default};
