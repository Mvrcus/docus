import o from"./TabsHeader.90d75161.js";import{a as v,W as c,x as u}from"./entry.04b3ce16.js";const _=(t,d)=>t.type&&t.type.tag&&t.type.tag===d,b=v({data(){return{activeTabIndex:0,counter:0}},render(){var r,p;const t=((p=(r=this.$slots)==null?void 0:r.default)==null?void 0:p.call(r))||[],d=t.map((e,i)=>{var a,n,s;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((n=e==null?void 0:e.props)==null?void 0:n.label)||`${i}`,active:((s=e==null?void 0:e.props)==null?void 0:s.active)||!1,component:e}});return c("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[c(o,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:d,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),c("div",{class:"code-group-content",text:this.activeTabIndex},t.map((e,i)=>{var a,n;return c("div",{style:{display:i===this.activeTabIndex?"block":"none"},class:{"":!_(e,"code")}},[_(e,"code")?e:c("div",{class:{"preview-canvas":!0}},[((n=(a=e.children)==null?void 0:a.default)==null?void 0:n.call(a))||e.children])])}))])}});const m=u(b,[["__scopeId","data-v-5e734696"]]);export{m as default};
