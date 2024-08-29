import{r as a,j as e,L as N,v as _}from"./index-CJ5aoQpT.js";import{s as t}from"./Home.module-Bqtx0O_z.js";import{u}from"./userStore-BgTMZPH0.js";import{b}from"./auth-DPOHGOEz.js";import{c as h,H as I}from"./Header-YhUUJ_NO.js";import{b as S}from"./bannerStore-d6RSEf0u.js";import{S as p,N as g,a as v,C as m}from"./CustomIconSolid-DreBn07J.js";import{C as x}from"./CustomIcon-DrVbLm7Q.js";import"./XMarkIcon-Dsnfe7eh.js";const w=()=>{const{bannersArr:o,setPickedBannerHome:n}=S(),[l,r]=a.useState([]);a.useEffect(()=>{const c=o.filter(i=>i.toggleSwitcher===!0&&i.isBannerActive===!0);r(c)},[]);const d=c=>{n(c)};return e.jsxs(p,{className:t.home_banner,modules:[g],spaceBetween:50,slidesPerView:1,navigation:{nextEl:`.${t.home_banner_navigationPrev}`,prevEl:`.${t.home_banner_navigationNext}`},children:[l.map(c=>{let i="";return c.isProductBanner?i=`../subCategory/${c.id}`:c.isCategoryBanner?i=`../${c.categoryLabel}/${c.id}`:c.isLinkBanner&&(i=c.brandName??""),c.bannerUrl?e.jsx(v,{className:t.home_banner_wrap,children:e.jsx(N,{to:i,onClick:()=>d(c),children:e.jsx("img",{className:t.home_banner_wrap_img,src:c.bannerUrl,alt:"Banner"})})},c.id):null}),e.jsx("div",{className:t.home_banner_navigationPrev,children:e.jsx(x,{name:"ChevronRightIcon",color:"black"})}),e.jsx("div",{className:t.home_banner_navigationNext,style:{transform:"rotate(180deg)"},children:e.jsx(x,{name:"ChevronRightIcon",color:"black"})})]})},A=w,P="_footer_content_1dx9v_1",y="_footer_content_container_1dx9v_6",B="_footer_content_title_1dx9v_11",F="_footer_content_text_1dx9v_17",k="_footer_content_left_1dx9v_23",L="_footer_content_center_1dx9v_30",E="_footer_content_right_1dx9v_33",$="_footer_content_timeList_1dx9v_37",C="_footer_content_timeList_listItem_1dx9v_42",H="_footer_content_map_1dx9v_48",U="_footer_bottom_1dx9v_57",R="_footer_bottom_right_1dx9v_63",T="_footer_bottom_left_1dx9v_66",M="_footer_bottom_text_1dx9v_71",O="_footer_bottom_title_1dx9v_76",s={footer_content:P,footer_content_container:y,footer_content_title:B,footer_content_text:F,footer_content_left:k,footer_content_center:L,footer_content_right:E,footer_content_timeList:$,footer_content_timeList_listItem:C,footer_content_map:H,footer_bottom:U,footer_bottom_right:R,footer_bottom_left:T,footer_bottom_text:M,footer_bottom_title:O},V=()=>{const{contactsFormInputsArr:o}=h(),[n,l]=a.useState([]);return a.useEffect(()=>{l(o.filter(r=>r.type==="isAddress"))},[o]),e.jsxs("div",{children:[e.jsx("h4",{className:s.footer_content_title,children:"Адресс:"}),n.map(r=>e.jsx("p",{className:s.footer_content_text,children:r.text},r.id))]})},G=()=>{const{contactsFormInputsArr:o}=h(),[n,l]=a.useState([]);return a.useEffect(()=>{l(o.filter(r=>r.type==="isPhone"))},[o]),e.jsxs("div",{children:[e.jsx("h4",{className:s.footer_content_title,children:"Телефоны:"}),n.map((r,d)=>e.jsx("a",{style:{marginBottom:d===0?"10px":"0"},className:s.footer_content_text,href:`tel:${r.text}`,children:r.text?"+"+r.text:""},r.id))]})},W=()=>{const{contactsFormInputsArr:o}=h(),[n,l]=a.useState([]);return a.useEffect(()=>{l(o.filter(r=>r.type==="isEmail"))},[o]),e.jsxs("div",{children:[e.jsx("h4",{className:s.footer_content_title,children:"Электронная почта:"}),n.map(r=>e.jsx("a",{className:s.footer_content_text,href:r.text,target:"_blank",children:r.text},r.id))]})},q=()=>e.jsx("div",{children:e.jsx("div",{className:s.footer_content_map,children:e.jsx("span",{children:"map"})})}),z=()=>{const{contactsSchedule:o}=h();return e.jsxs("div",{children:[e.jsx("h4",{className:s.footer_content_title,children:"Время работы"}),e.jsx("ul",{className:s.footer_content_timeList,children:o.map(n=>e.jsxs("li",{className:s.footer_content_timeList_listItem,children:[e.jsx("span",{className:s.footer_content_text,children:n.day}),e.jsx("div",{style:{width:"100px",textAlign:"left"},children:e.jsx("span",{className:s.footer_content_text,children:n.isActive?`${n.workHours.start} - ${n.workHours.end}`:"Выходной"})})]},n.id))})]})},D=()=>{const{socialPlatforms:o,imageUrlLogo:n,contactsFormInputsArr:l,activeSocials:r}=h(),[d,c]=a.useState([]);return a.useEffect(()=>{c(l.filter(i=>i.type==="isTextarea"))},[l]),e.jsxs("div",{className:s.footer_bottom,children:[e.jsxs("div",{className:s.footer_bottom_right,children:[e.jsx("a",{href:"#",children:n?e.jsx("img",{src:n,alt:"Logo",style:{width:"60px",height:"60px",objectFit:"contain"}}):e.jsx("span",{children:"LOGO"})}),d.map(i=>e.jsx("p",{className:s.footer_bottom_text,children:i.text},i.id))]}),e.jsxs("div",{className:s.footer_bottom_left,children:[e.jsx("h4",{className:s.footer_bottom_title,children:"Мы в соцсетях"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:r.map(i=>e.jsx("a",{href:i.url,target:"_blank",children:e.jsx("img",{src:i.icon,alt:"Social Image"})},i.id))})]})]})},J=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.footer_content,children:e.jsxs("div",{className:`${s.footer_content_container} container`,children:[e.jsxs("div",{className:s.footer_content_left,children:[e.jsx(V,{}),e.jsx(G,{}),e.jsx(W,{})]}),e.jsx("div",{className:s.footer_content_center,children:e.jsx(z,{})}),e.jsx("div",{className:s.footer_content_right,children:e.jsx(q,{})})]})}),e.jsx("div",{className:"container",children:e.jsx(D,{})})]}),K=J;function Q({item:o}){return e.jsxs("div",{className:t.cardsItem,children:[e.jsxs("div",{className:t.cardsItem_imgBlock,children:[e.jsx("img",{src:o.img,alt:""}),e.jsxs("div",{className:t.cardsItem_imgBlock_promotions,children:[e.jsx("span",{className:t.cardsItem_imgBlock_promotion,children:"Акция"}),e.jsx("span",{className:t.cardsItem_imgBlock_discount,children:"Скидка"})]})]}),e.jsx("h3",{className:t.cardsItem_title,children:o.title}),e.jsxs("div",{className:t.cardsItem_ratings,children:[e.jsxs("div",{className:t.cardsItem_ratings_stars,children:[e.jsx(m,{name:"StarIcon",width:16,height:16}),e.jsx(m,{name:"StarIcon",width:16,height:16}),e.jsx(m,{name:"StarIcon",width:16,height:16}),e.jsx(m,{name:"StarIcon",width:16,height:16}),e.jsx(m,{name:"StarIcon",width:16,height:16})]}),e.jsx("span",{children:"4.5/2548"})]}),e.jsxs("div",{className:t.cardsItem_prices,children:[e.jsxs("div",{className:t.cardsItem_price,children:[o.price," сум"]}),e.jsx("div",{className:t.cardsItem_oldPrice,children:o.oldPrice})]}),e.jsxs("div",{className:t.cardsItem_buttons,children:[e.jsxs("button",{className:t.cardsItem_cart,children:[e.jsx("span",{children:"В корзину"}),e.jsx(x,{name:"ShoppingCartIcon",height:50})]}),e.jsx("button",{className:t.cardsItem_cart,children:e.jsx(x,{name:"HeartIcon",height:50})})]})]})}const f=[{id:_(),img:"./молоко.jpg",title:"Молоко ЭкоНива, 1,5%, ультрапастерилизованное, 1000 мл",price:15e3,oldPrice:18e3},{id:_(),img:"./молоко.jpg",title:"Молоко ЭкоНива, 1,5%, ультрапастерилизованное, 1000 мл",price:15e3,oldPrice:18e3},{id:_(),img:"./молоко.jpg",title:"Молоко ЭкоНива, 1,5%, ультрапастерилизованное, 1000 мл",price:15e3,oldPrice:18e3},{id:_(),img:"./молоко.jpg",title:"Молоко ЭкоНива, 1,5%, ультрапастерилизованное, 1000 мл",price:15e3,oldPrice:18e3},{id:_(),img:"./молоко.jpg",title:"Молоко ЭкоНива, 1,5%, ультрапастерилизованное, 1000 мл",price:15e3,oldPrice:18e3},{id:_(),img:"./молоко.jpg",title:"Молоко ЭкоНива, 1,5%, ультрапастерилизованное, 1000 мл",price:15e3,oldPrice:18e3},{id:_(),img:"./молоко.jpg",title:"Молоко ЭкоНива, 1,5%, ультрапастерилизованное, 1000 мл",price:15e3,oldPrice:18e3},{id:_(),img:"./молоко.jpg",title:"Молоко ЭкоНива, 1,5%, ультрапастерилизованное, 1000 мл",price:15e3,oldPrice:18e3}];function j(){return e.jsxs("div",{className:t.cards,children:[e.jsxs("h2",{className:t.cards_title,children:[e.jsx("span",{children:"Продукты питания"}),e.jsx(x,{name:"ChevronRightIcon"})]}),e.jsx("div",{className:t.cards_content,children:e.jsx(p,{className:t.mySwiper,modules:[g],spaceBetween:50,slidesPerView:5.3,navigation:{nextEl:`.${t.mySwiper_next}`,prevEl:`.${t.mySwiper_prev}`},children:f&&(f==null?void 0:f.map(o=>e.jsx(v,{className:t.mySwiper_slide,children:e.jsx(Q,{item:o})},o.id)))})})]})}function ce(){const{data:o}=b(),{setUser:n}=u();return a.useEffect(()=>{n(o)},[o]),e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs("main",{className:t.wrapper,children:[e.jsx(A,{}),e.jsx("section",{className:t.content,children:e.jsx(j,{})}),e.jsx("section",{className:t.content,children:e.jsx(j,{})})]}),e.jsx("footer",{children:e.jsx(K,{})})]})}export{ce as default};
