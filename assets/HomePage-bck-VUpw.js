import{r as s,j as r,L as f}from"./index-BKWzXJuX.js";import{s as n}from"./Home.module-DWYzZ8Yy.js";import{u}from"./userStore-BQ_slQsy.js";import{b as h}from"./auth-B2QAljBL.js";import{b as g}from"./bannerStore-_ripCtOc.js";import{H as x}from"./Header-CQHh410Q.js";import{C as t}from"./CustomIcon-CoemkrYJ.js";import{S as b,N as v,a as _}from"./scrollbar-CEgV5YFH.js";import"./XMarkIcon-Bbx2RA7i.js";function E(){const{data:o}=h(),{setUser:i}=u(),{bannersArr:c,setPickedBannerHome:l}=g(),[m,d]=s.useState([]);s.useEffect(()=>{i(o)},[o]),s.useEffect(()=>{const e=c.filter(a=>a.toggleSwitcher===!0&&a.isBannerActive===!0);d(e),console.log("filteredArrHome",e)},[]);const p=e=>{l(e)};return r.jsxs(r.Fragment,{children:[r.jsx(x,{}),r.jsx("div",{className:n.wrapper,children:r.jsxs(b,{className:n.home_banner,modules:[v],spaceBetween:50,slidesPerView:1,navigation:{nextEl:`.${n.home_banner_navigationPrev}`,prevEl:`.${n.home_banner_navigationNext}`},children:[m.map(e=>{let a="";return e.isProductBanner?a=`../subCategory/${e.productId}`:e.isCategoryBanner?a=`../${e.categoryLabel}/${e.productId}`:e.isLinkBanner&&(a=e.brandName??""),e.bannerUrl?r.jsx(_,{className:n.home_banner_wrap,children:r.jsx(f,{to:a,onClick:()=>p(e),children:r.jsx("img",{className:n.home_banner_wrap_img,src:e.bannerUrl,alt:"Banner"})})},e.productId):null}),r.jsx("div",{className:n.home_banner_navigationPrev,children:r.jsx(t,{name:"ChevronRightIcon",color:"black"})}),r.jsx("div",{className:n.home_banner_navigationNext,style:{transform:"rotate(180deg)"},children:r.jsx(t,{name:"ChevronRightIcon",color:"black"})})]})})]})}export{E as default};
