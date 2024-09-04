import{r as _,j as t,L as j,a as p}from"./index-jbLHaAhC.js";import{s as a}from"./Home.module-Cd1ADYP3.js";import{u as v}from"./userStore-BvO8ue9w.js";import{b as u}from"./auth-Buq_obm3.js";import{c as d,H as g}from"./Header-Bwoltv8W.js";import{b}from"./bannerStore-CMNPf2MY.js";import{S as x,N as f,a as h}from"./scrollbar-Dc8pvTnf.js";import{C as m}from"./CustomIcon-Dk3_npyW.js";import{C as N}from"./ProductItem-CE0i-6Qo.js";import"./XMarkIcon-DIHbEiNZ.js";import"./CustomIconSolid-DB_CS0L4.js";const S=()=>{const{bannersArr:n,setPickedBannerHome:o}=b(),[i,e]=_.useState([]);_.useEffect(()=>{const s=n.filter(c=>c.toggleSwitcher===!0&&c.isBannerActive===!0);e(s)},[]);const l=s=>{o(s)};return t.jsxs(x,{className:a.home_banner,modules:[f],spaceBetween:50,slidesPerView:1,navigation:{nextEl:`.${a.home_banner_navigationPrev}`,prevEl:`.${a.home_banner_navigationNext}`},children:[i.map(s=>{let c="";return s.isProductBanner?c=`../subCategory/${s.id}`:s.isCategoryBanner?c=`../${s.categoryLabel}/${s.id}`:s.isLinkBanner&&(c=s.brandName??""),s.bannerUrl?t.jsx(h,{className:a.home_banner_wrap,children:t.jsx(j,{to:c,onClick:()=>l(s),children:t.jsx("img",{className:a.home_banner_wrap_img,src:s.bannerUrl,alt:"Banner"})})},s.id):null}),t.jsx("div",{className:a.home_banner_navigationPrev,children:t.jsx(m,{name:"ChevronRightIcon",color:"black"})}),t.jsx("div",{className:a.home_banner_navigationNext,style:{transform:"rotate(180deg)"},children:t.jsx(m,{name:"ChevronRightIcon",color:"black"})})]})},A=S,w="_footer_content_1dx9v_1",y="_footer_content_container_1dx9v_6",F="_footer_content_title_1dx9v_11",I="_footer_content_text_1dx9v_17",L="_footer_content_left_1dx9v_23",B="_footer_content_center_1dx9v_30",E="_footer_content_right_1dx9v_33",$="_footer_content_timeList_1dx9v_37",k="_footer_content_timeList_listItem_1dx9v_42",C="_footer_content_map_1dx9v_48",P="_footer_bottom_1dx9v_57",H="_footer_bottom_right_1dx9v_63",U="_footer_bottom_left_1dx9v_66",R="_footer_bottom_text_1dx9v_71",T="_footer_bottom_title_1dx9v_76",r={footer_content:w,footer_content_container:y,footer_content_title:F,footer_content_text:I,footer_content_left:L,footer_content_center:B,footer_content_right:E,footer_content_timeList:$,footer_content_timeList_listItem:k,footer_content_map:C,footer_bottom:P,footer_bottom_right:H,footer_bottom_left:U,footer_bottom_text:R,footer_bottom_title:T},M=()=>{const{contactsFormInputsArr:n}=d(),[o,i]=_.useState([]);return _.useEffect(()=>{i(n.filter(e=>e.type==="isAddress"))},[n]),t.jsxs("div",{children:[t.jsx("h4",{className:r.footer_content_title,children:"Адресс:"}),o.map(e=>t.jsx("p",{className:r.footer_content_text,children:e.text},e.id))]})},O=()=>{const{contactsFormInputsArr:n}=d(),[o,i]=_.useState([]);return _.useEffect(()=>{i(n.filter(e=>e.type==="isPhone"))},[n]),t.jsxs("div",{children:[t.jsx("h4",{className:r.footer_content_title,children:"Телефоны:"}),o.map((e,l)=>t.jsx("a",{style:{marginBottom:l===0?"10px":"0"},className:r.footer_content_text,href:`tel:${e.text}`,children:e.text?"+"+e.text:""},e.id))]})},V=()=>{const{contactsFormInputsArr:n}=d(),[o,i]=_.useState([]);return _.useEffect(()=>{i(n.filter(e=>e.type==="isEmail"))},[n]),t.jsxs("div",{children:[t.jsx("h4",{className:r.footer_content_title,children:"Электронная почта:"}),o.map(e=>t.jsx("a",{className:r.footer_content_text,href:e.text,target:"_blank",children:e.text},e.id))]})},G=()=>t.jsx("div",{children:t.jsx("div",{className:r.footer_content_map,children:t.jsx("span",{children:"map"})})}),W=()=>{const{contactsSchedule:n}=d();return t.jsxs("div",{children:[t.jsx("h4",{className:r.footer_content_title,children:"Время работы"}),t.jsx("ul",{className:r.footer_content_timeList,children:n.map(o=>t.jsxs("li",{className:r.footer_content_timeList_listItem,children:[t.jsx("span",{className:r.footer_content_text,children:o.day}),t.jsx("div",{style:{width:"100px",textAlign:"left"},children:t.jsx("span",{className:r.footer_content_text,children:o.isActive?`${o.workHours.start} - ${o.workHours.end}`:"Выходной"})})]},o.id))})]})},q=()=>{const{socialPlatforms:n,imageUrlLogo:o,contactsFormInputsArr:i,activeSocials:e}=d(),[l,s]=_.useState([]);return _.useEffect(()=>{s(i.filter(c=>c.type==="isTextarea"))},[i]),t.jsxs("div",{className:r.footer_bottom,children:[t.jsxs("div",{className:r.footer_bottom_right,children:[t.jsx("a",{href:"#",children:o?t.jsx("img",{src:o,alt:"Logo",style:{width:"60px",height:"60px",objectFit:"contain"}}):t.jsx("span",{children:"LOGO"})}),l.map(c=>t.jsx("p",{className:r.footer_bottom_text,children:c.text},c.id))]}),t.jsxs("div",{className:r.footer_bottom_left,children:[t.jsx("h4",{className:r.footer_bottom_title,children:"Мы в соцсетях"}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:e.map(c=>t.jsx("a",{href:c.url,target:"_blank",children:t.jsx("img",{src:c.icon,alt:"Social Image"})},c.id))})]})]})},z=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:r.footer_content,children:t.jsxs("div",{className:`${r.footer_content_container} container`,children:[t.jsxs("div",{className:r.footer_content_left,children:[t.jsx(M,{}),t.jsx(O,{}),t.jsx(V,{})]}),t.jsx("div",{className:r.footer_content_center,children:t.jsx(W,{})}),t.jsx("div",{className:r.footer_content_right,children:t.jsx(G,{})})]})}),t.jsx("div",{className:"container",children:t.jsx(q,{})})]}),D=z;function J({item:n}){return t.jsxs("div",{className:a.cards,children:[t.jsxs("h2",{className:a.cards_title,children:[t.jsx("span",{children:n.title}),t.jsx(m,{name:"ChevronRightIcon"})]}),t.jsx("div",{className:a.cards_content,children:t.jsx(x,{className:a.mySwiper,modules:[f],spaceBetween:50,slidesPerView:5.3,navigation:{nextEl:`.${a.mySwiper_next}`,prevEl:`.${a.mySwiper_prev}`},children:n.products&&(n==null?void 0:n.products.map(o=>t.jsx(h,{className:a.mySwiper_slide,children:t.jsx(N,{product:o})},o.id)))})})]})}function ct(){const{homePageBlock:n}=p(),{data:o}=u(),{setUser:i}=v();return _.useEffect(()=>{i(o)},[o]),t.jsxs(t.Fragment,{children:[t.jsx(g,{}),t.jsxs("main",{className:a.wrapper,children:[t.jsx(A,{}),n.map(e=>t.jsx("section",{className:a.content,children:t.jsx(J,{item:e})},e.id))]}),t.jsx("footer",{children:t.jsx(D,{})})]})}export{ct as default};
