import{r as t,h as s,g as i}from"./p-af0f8efd.js";import{m as h,q as a}from"./p-1eda916e.js";import{A as e}from"./p-8c5e5fb1.js";const r=class{constructor(s){t(this,s),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=h(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){if(!a(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push(((t,s)=>"/"==t.charAt(0)&&"/"==s.charAt(s.length-1)?s.slice(0,s.length-1)+t:s+t)(this.url,this.root))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),s(this.custom,Object.assign({},t),s("slot",null))}get el(){return i(this)}static get watchers(){return{location:["computeMatch"]}}};e.injectProps(r,["history","location","root"]);export{r as stencil_route_link};