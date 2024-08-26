import{z as E,A as F,B as M,j as t,x as n,y as R,v as H,r as o,L as w,w as I}from"./index-DhDnWzmV.js";import{C as z}from"./CustomIcon-u3hs7QUZ.js";import{u as T}from"./userStore-CdAxiWkS.js";const B="_btn_lrckp_1",U={btn:B},L=E()(F(M(s=>({superCategoriesList:[{id:1,title:"Продукты питания"},{id:2,title:"Бытовая химия"},{id:3,title:"Одежда и Обувь"},{id:4,title:"Мебель"},{id:5,title:"Электроника"}],pickedProduct:"",setPickedProduct:a=>s({pickedProduct:a}),catalogNavListStatus:!1,setCatalogNavListStatus:a=>s({catalogNavListStatus:a}),superCategoriesStore:[],setSuperCategoriesStore:a=>s({superCategoriesStore:a}),categories:[],setCategories:a=>s({categories:a}),buttonsActive:0,setButtonsActive:a=>s({buttonsActive:a}),currentSubCategory:0,setCurrentSubCategory:a=>s({currentSubCategory:a}),selectedSuperCategory:0,setSelectedSuperCategory:a=>s({selectedSuperCategory:a}),selectedCategory:0,setSelectedCategory:a=>s({selectedCategory:a}),selectedSubCategory:0,setSelectedSubCategory:a=>s({selectedSubCategory:a}),pickedCategoryName:"",setPickedCategoryName:a=>s({pickedCategoryName:a})}),{name:"catalog-storage",partialize:s=>({...s,catalogNavListStatus:void 0})})));function G(){const{catalogNavListStatus:s,setCatalogNavListStatus:a}=L(),u=_=>{_.preventDefault(),a(!s)};return t.jsxs("button",{className:U.btn,onClick:_=>u(_),children:[t.jsx(z,{name:"QueueListIcon",color:"black",width:25}),t.jsx("span",{children:"Каталог"})]})}const O="_search_1axpt_1",W="_search_block_1axpt_7",D="_search_input_1axpt_15",Q="_search_btn_1axpt_22",q={search:O,search_block:W,search_input:D,search_btn:Q};function Y(){return t.jsxs("form",{action:"",className:q.search,children:[t.jsx(G,{}),t.jsxs("div",{className:q.search_block,children:[t.jsx("input",{type:"text",className:q.search_input,placeholder:"Искать товары и категории"}),t.jsx("button",{className:q.search_btn,children:t.jsx(z,{name:"MagnifyingGlassIcon",width:25})})]})]})}const J="_nav_1f8ae_1",K="_nav_container_1f8ae_12",V="_nav_list_1f8ae_17",X="_nav_link_1f8ae_21",Z="_nav_link_icon_1f8ae_47",tt="_nav_link_active_1f8ae_51",et="_nav_link_favoritesAmount_1f8ae_62",$={nav:J,nav_container:K,nav_list:V,nav_link:X,nav_link_icon:Z,nav_link_active:tt,nav_link_favoritesAmount:et},at=E()(F(M(s=>({catalogProducts:[],favoriteActive:[],productItem:"",setProductItem:a=>s({productItem:a}),setCatalogProducts:a=>s({catalogProducts:a}),setFavoriteActive:a=>s({favoriteActive:a})}),{name:"product-storage"}))),st=at,it=E()(F(M(s=>({socialPlatforms:[{id:n(),name:"telegram",icon:"/socialIcons/tg.svg",alt:"Telegram Icon",isActive:!1,url:""},{id:n(),name:"instagram",icon:"/socialIcons/instagram.svg",alt:"Instagram Icon",isActive:!1,url:""},{id:n(),name:"facebook",icon:"/socialIcons/fb.svg",alt:"Facebook Icon",isActive:!1,url:""},{id:n(),name:"tikTok",icon:"/socialIcons/tik-tok.svg",alt:"TikTok Icon",isActive:!1,url:""},{id:n(),name:"youTube",icon:"/socialIcons/you-tube.svg",alt:"YouTube Icon",isActive:!1,url:""}],setSocialPlatforms:a=>s({socialPlatforms:a}),contactsFormInputsArr:[{id:n(),title:"Адресс:",text:"",type:"isAddress"},{id:n(),title:"Телефон:",text:"",type:"isPhone"},{id:n(),title:"Телефон Доп:",text:"",type:"isPhone"},{id:n(),title:"Эдектронная почта:",text:"",type:"isEmail"},{id:n(),title:"Кратко о нас:",text:"",type:"isTextarea"},{id:n(),title:"Выберете адрес:",text:"",type:"isAddressMap"}],setContactsFormInputsArr:a=>s({contactsFormInputsArr:a}),imageUrlLogo:"",setImageUrlLogo:a=>s({imageUrlLogo:a}),contactsSchedule:[{id:n(),day:"Пн",workHours:{start:"",end:""},isActive:!1},{id:n(),day:"Вт",workHours:{start:"",end:""},isActive:!1},{id:n(),day:"Ср",workHours:{start:"",end:""},isActive:!1},{id:n(),day:"Чт",workHours:{start:"",end:""},isActive:!1},{id:n(),day:"Пн",workHours:{start:"",end:""},isActive:!1},{id:n(),day:"Сб",workHours:{start:"",end:""},isActive:!1},{id:n(),day:"Вс",workHours:{start:"",end:""},isActive:!1}],setContactsSchedule:a=>s({contactsSchedule:a})}),{name:"contacts-store",partialize:s=>({...s})})));function ot(){const a=R().pathname,{isAuth:u,user:_}=T(),{setCatalogNavListStatus:d}=L(),{favoriteActive:h}=st(),{modulesCartStatus:p,modulesCashRegisterStatus:l,navLinksState:j,setNavLinksState:v}=H(),{socialPlatforms:C,imageUrlLogo:k}=it(),[f,N]=o.useState(j),[A,g]=o.useState([]),b=()=>{d(!1)};o.useEffect(()=>{i();const e=j.filter(S=>S.isActive===!0);N(e)},[p,l,j]);function i(){j.forEach(e=>{e.label==="Cart"?e.isActive=p:e.label==="Cash Register"&&(e.isActive=l)}),v(j)}o.useEffect(()=>{g(C.filter(e=>e.isActive===!0))},[C]);const c=["/addingProducts","/cash-register"].some(e=>a.startsWith(e));return t.jsx(t.Fragment,{children:!c&&t.jsx("nav",{className:$.nav,children:t.jsxs("div",{className:`container ${$.nav_container}`,children:[t.jsx(w,{to:"/",onClick:b,children:k?t.jsx("img",{src:k,alt:"",style:{width:"60px",height:"60px",objectFit:"contain"}}):t.jsx("span",{children:"LOGO"})}),u&&t.jsx(Y,{}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:A.map(e=>t.jsx("a",{href:e.url,target:"_blank",children:t.jsx("img",{src:e.icon,alt:""})},e.id))}),u&&t.jsx("ul",{className:$.nav_list,children:f==null?void 0:f.map(e=>(e==null?void 0:e.isActive)===!0&&t.jsx("li",{children:t.jsxs(w,{onClick:b,className:`${$.nav_link} ${a.startsWith(e.href)?$.nav_link_active:""}`,to:e.href,children:[t.jsx(z,{name:e.icon,width:22,className:$.nav_link_icon}),t.jsxs("span",{children:[_&&e.label=="Profile"?_==null?void 0:_.username:e.label,_&&e.label=="Favorites"&&h.length>0&&t.jsx("span",{className:$.nav_link_favoritesAmount,style:{width:h.length>99?"30px":"",height:h.length>99?"30px":""},children:h.length})]})]})},e.id))})]})})})}const ct="_wrapper_hqujz_1",nt="_wrapper_active_hqujz_17",rt="_block_hqujz_22",lt="_list_hqujz_26",gt="_list_li_hqujz_53",ut="_active_hqujz_81",_t="_list_li_active_hqujz_88",dt="_link_hqujz_103",ht="_link_icon_hqujz_114",pt="_categories_hqujz_119",vt="_categories_title_hqujz_144",ft="_categories_title_icon_hqujz_153",mt="_categories_list_hqujz_157",xt="_categories_link_hqujz_167",jt="_subCategories_list_hqujz_179",Ct="_subCategories_link_hqujz_204",St="_catalogPage_hqujz_214",kt="_catalogPage_title_hqujz_217",yt="_catalogPage_title_icon_hqujz_225",r={wrapper:ct,wrapper_active:nt,block:rt,list:lt,list_li:gt,active:ut,list_li_active:_t,link:dt,link_icon:ht,categories:pt,categories_title:vt,categories_title_icon:ft,categories_list:mt,categories_link:xt,subCategories_list:jt,subCategories_link:Ct,catalogPage:St,catalogPage_title:kt,catalogPage_title_icon:yt};function Nt({categoryId:s}){const{currentCategory:a}=H(),[u,_]=o.useState(1),[d,h]=o.useState(10),[p,l]=o.useState(!0),{catalogNavListStatus:j,setCatalogNavListStatus:v}=L(),[C,k]=o.useState([]);o.useEffect(()=>{N(),f(u,d)},[s]);async function f(g,b){if(a==="Суперклассы")try{try{const i=await I.get(`https://api.mcrm.uz/api/categories?${s&&"parentId="+s+"&"}page=${g}&perPage=${b}`),y=await i.data.data,c=await i.data.pagination;y.length<c.total?k([...y]):y.length==c.total&&(k([...y]),l(!1))}catch(i){console.log("Ошибка произошла при получении Котегории",i)}}catch(i){console.log("Ошибка произошла при получении Суперклассов",i)}}function N(){_(1),h(10),k([]),l(!0)}const A=()=>{const g=d+10;h(g),f(u,g)};return t.jsx("div",{className:r.subCategories,children:t.jsxs("ul",{className:r.subCategories_list,children:[C==null?void 0:C.map(g=>t.jsx("li",{children:t.jsx(w,{to:`/category/${g.id}`,className:r.subCategories_link,onClick:()=>v(!1),children:g.name.ru})},g.id)),p&&t.jsx("li",{children:t.jsx(w,{className:r.subCategories_link,to:"#",onClick:A,children:"Ещё..."})})]})})}function bt(){const{catalogNavListStatus:s,setCatalogNavListStatus:a,buttonsActive:u,pickedCategoryName:_}=L(),{currentCategory:d}=H(),[h,p]=o.useState([]),[l,j]=o.useState(1),[v,C]=o.useState(10),[k,f]=o.useState(!0);o.useEffect(()=>{A(),N(l,v)},[d,s,u]);async function N(i,y){if(d==="Суперклассы")try{try{const c=await I.get(`https://api.mcrm.uz/api/categories?${u&&"parentId="+u+"&"}page=${i}&perPage=${y}`),e=await c.data.data,S=await c.data.pagination;e.length<S.total?p([...e]):e.length==S.total&&(p([...e]),f(!1))}catch(c){console.log("Ошибка произошла при получении Котегории",c)}}catch(c){console.log("Ошибка произошла при получении Суперклассов",c)}if(d==="Котегории")try{const c=await I.get(`https://api.mcrm.uz/api/categories?${u&&"parentId="+u+"&"}page=${i}&perPage=${y}`),e=await c.data.data,S=await c.data.pagination;e.length<S.total?p([...e]):e.length==S.total&&(p([...e]),f(!1))}catch(c){console.log("Ошибка произошла при получении Подкотегории",c)}d==="Подкотегории"&&(p([]),f(!0))}function A(){j(1),C(10),p([]),f(!0)}const g=()=>{const i=v+10;C(i),N(l,i)};function b(){d==="Котегории"&&a(!1)}return t.jsxs("div",{className:r.categories,children:[t.jsxs("h2",{className:r.categories_title,children:[t.jsx("span",{children:_}),t.jsx(z,{name:"ChevronRightIcon"})]}),t.jsx("ul",{className:r.categories_list,children:h==null?void 0:h.map(i=>t.jsxs("li",{children:[t.jsx(w,{to:d==="Котегории"?`/category/${i.id}`:"#",className:r.categories_link,onClick:b,children:i.name.ru}),d=="Суперклассы"&&t.jsx(Nt,{categoryId:i.id})]},i.id))}),h.length>0&&k&&t.jsx(w,{to:"#",className:r.categories_link,onClick:()=>g(),children:"Ещё..."})]})}function Pt(){const{catalogNavListStatus:s,setCatalogNavListStatus:a,buttonsActive:u,setButtonsActive:_,selectedSuperCategory:d,selectedCategory:h,setPickedCategoryName:p}=L(),{currentCategory:l}=H(),[j,v]=o.useState([]),[C,k]=o.useState(1),[f,N]=o.useState(10),[A,g]=o.useState(!0);o.useEffect(()=>{i(),b(C,f)},[l,d,h,s]);async function b(e,S){if(l==="Суперклассы")try{const m=await I.get(`https://api.mcrm.uz/api/categories?page=${e}&perPage=${S}`),x=await m.data.data,P=await m.data.pagination;x.length<P.total?v([...x]):x.length==P.total&&(v([...x]),g(!1))}catch(m){console.log("Ошибка произошла при получении Суперклассов",m)}if(l==="Котегории")try{const m=await I.get(`https://api.mcrm.uz/api/categories?${d&&"parentId="+d+"&"}page=${e}&perPage=${S}`),x=await m.data.data,P=await m.data.pagination;x.length<P.total?v([...x]):x.length==P.total&&(v([...x]),g(!1))}catch(m){console.log("Ошибка произошла при получении Котегории",m)}if(l==="Подкотегории")try{const m=await I.get(`https://api.mcrm.uz/api/categories?${h&&"parentId="+h+"&"}page=${e}&perPage=${S}`),x=await m.data.data,P=await m.data.pagination;x.length<P.total?v([...x]):x.length==P.total&&(v([...x]),g(!1))}catch(m){console.log("Ошибка произошла при получении Подкотегории",m)}}function i(){k(1),N(10),v([]),g(!0),p(""),_(0)}const y=()=>{const e=f+10;N(e),b(C,e)},c=e=>{p(e.name.ru),_(e.id),l==="Подкотегории"&&a(!1)};return t.jsxs("div",{className:r.block,children:[t.jsxs("ul",{className:r.list,children:[j==null?void 0:j.map(e=>t.jsxs("li",{className:`${r.list_li} ${u==e.id?r.list_li_active:""}`,onClick:()=>c(e),children:[t.jsx(w,{to:l==="Подкотегории"?`/category/${e.id}`:"#",className:r.link,onClick:()=>{l==="Подкотегории"&&a(!1)},children:e.name.ru}),t.jsx(z,{name:"ChevronRightIcon"})]},e.id)),A&&t.jsxs("li",{className:r.list_li,onClick:()=>y(),children:[t.jsx(w,{to:"#",className:r.link,children:"Ещё..."}),t.jsx(z,{name:"ChevronRightIcon"})]})]}),u!=0&&l!="Подкотегории"&&t.jsx(bt,{})]})}function wt(){const{catalogNavListStatus:s}=L();return t.jsx("div",{className:`${r.wrapper} ${s?r.wrapper_active:""}`,children:t.jsx("div",{className:"container",children:t.jsx(Pt,{})})})}const At=()=>t.jsxs("header",{className:"header",children:[t.jsx(ot,{}),t.jsx(wt,{})]}),Lt=At;export{Lt as H,L as a,it as c,st as p,r as s};
