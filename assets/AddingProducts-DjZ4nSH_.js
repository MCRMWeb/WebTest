import{y as B,r as m,j as t,L as N,w as R,o as C,q as F}from"./index-DsTKpWNF.js";import{a as y,M as q}from"./Modal-Dk_uj8_A.js";import{C as W}from"./CustomIcon-CS4MQdt7.js";import"./XMarkIcon-C_EdJW0_.js";const z="_container_1dpu4_1",H="_nav_1dpu4_5",O="_nav_linkBtn_1dpu4_8",X="_nav_settingsIcon_1dpu4_13",K="_nav_buttons_1dpu4_17",Q="_nav_buttons_link_1dpu4_22",G="_form_1dpu4_28",J="_form_input_1dpu4_39",V="_form_btn_1dpu4_44",Y="_form_list_1dpu4_75",Z="_form_check_1dpu4_80",tt="_form_check_text_1dpu4_86",et="_formWrapper_1dpu4_90",st="_formWrapper_buttons_1dpu4_95",ot="_formWrapper_btn_1dpu4_100",nt="_found_1dpu4_129",at="_table_1dpu4_153",ct="_table_head_1dpu4_158",rt="_table_head_row_1dpu4_161",dt="_table_head_col_1dpu4_167",lt="_table_body_row_1dpu4_170",_t="_table_body_col_1dpu4_174",ut="_table_body_img_1dpu4_183",it="_table_body_icon_1dpu4_186",pt="_table_body_name_1dpu4_190",bt="_table_body_amount_1dpu4_219",gt="_table_body_catalog_1dpu4_227",ft="_table_body_catalog_top_1dpu4_237",mt="_table_body_catalog_icon_1dpu4_256",ht="_table_body_catalog_iconActive_1dpu4_259",xt="_table_body_catalog_drop_1dpu4_262",jt="_table_body_catalog_dropActive_1dpu4_287",yt="_table_body_catalog_search_1dpu4_292",Pt="_table_body_catalog_item_1dpu4_306",kt="_table_body_catalog_text_1dpu4_314",Nt="_table_body_del_1dpu4_320",vt="_ikpuWrapper_1dpu4_340",St="_ikpuWrapper_ikpuModalBlock_1dpu4_349",It="_ikpuWrapper_content_1dpu4_359",wt="_ikpuWrapper_buttons_1dpu4_364",Wt="_ikpuWrapper_save_1dpu4_370",At="_ikpuWrapper_delete_1dpu4_380",Dt="_ikpuWrapper_cancel_1dpu4_390",Tt="_left_1dpu4_401",Mt="_left_content_1dpu4_404",$t="_left_content_item_1dpu4_409",Bt="_right_1dpu4_419",Et="_right_block_1dpu4_424",Lt="_right_bottom_1dpu4_430",Rt="_right_bottom_item_1dpu4_437",Ct="_right_bottom_item_img_1dpu4_447",Ft="_right_bottom_BaseItem_1dpu4_452",Ut="_right_bottom_BaseItem_img_1dpu4_463",qt="_foundProducts_1dpu4_468",zt="_foundProducts_modal_1dpu4_477",Ht="_foundProducts_top_1dpu4_501",Ot="_foundProducts_title_1dpu4_515",Xt="_foundProducts_close_1dpu4_518",Kt="_foundProducts_list_1dpu4_533",Qt="_foundProducts_item_1dpu4_537",Gt="_foundProducts_item_photo_1dpu4_544",Jt="_foundProducts_item_list_1dpu4_554",Vt="_foundProducts_item_title_1dpu4_566",Yt="_foundProducts_item_desc_1dpu4_569",Zt="_foundProducts_item_btn_1dpu4_573",te="_errorModal_1dpu4_585",ee="_errorModal_block_1dpu4_594",o={container:z,nav:H,nav_linkBtn:O,nav_settingsIcon:X,nav_buttons:K,nav_buttons_link:Q,form:G,form_input:J,form_btn:V,form_list:Y,form_check:Z,form_check_text:tt,formWrapper:et,formWrapper_buttons:st,formWrapper_btn:ot,found:nt,table:at,table_head:ct,table_head_row:rt,table_head_col:dt,table_body_row:lt,table_body_col:_t,table_body_img:ut,table_body_icon:it,table_body_name:pt,table_body_amount:bt,table_body_catalog:gt,table_body_catalog_top:ft,table_body_catalog_icon:mt,table_body_catalog_iconActive:ht,table_body_catalog_drop:xt,table_body_catalog_dropActive:jt,table_body_catalog_search:yt,table_body_catalog_item:Pt,table_body_catalog_text:kt,table_body_del:Nt,ikpuWrapper:vt,ikpuWrapper_ikpuModalBlock:St,ikpuWrapper_content:It,ikpuWrapper_buttons:wt,ikpuWrapper_save:Wt,ikpuWrapper_delete:At,ikpuWrapper_cancel:Dt,left:Tt,left_content:Mt,left_content_item:$t,right:Bt,right_block:Et,right_bottom:Lt,right_bottom_item:Rt,right_bottom_item_img:Ct,right_bottom_BaseItem:Ft,right_bottom_BaseItem_img:Ut,foundProducts:qt,foundProducts_modal:zt,foundProducts_top:Ht,foundProducts_title:Ot,foundProducts_close:Xt,foundProducts_list:Kt,foundProducts_item:Qt,foundProducts_item_photo:Gt,foundProducts_item_list:Jt,foundProducts_item_title:Vt,foundProducts_item_desc:Yt,foundProducts_item_btn:Zt,errorModal:te,errorModal_block:ee};function se(){const e=B(),{pickedSearch:a,searchParams:c,searchText:d,setSearchText:u,setPickedSearch:g,setSearchResponse:l,setCheckedProducts:h,setTemporaryData:f}=y();m.useEffect(()=>{(d.length==0||e!="/addingProducts")&&i()},[e]),m.useEffect(()=>{const n=document.querySelector(`input[name="search"][value="${a}"]`);n&&(n.checked=!0)},[a]);const p=n=>{g(n.currentTarget.value)},_=async n=>{n.preventDefault();try{if(a==="По тексту"){const r=await(await R.get(`https://tasnif.soliq.uz/api/cl-api/integration-mxik/search?lang=ru&search_text=${d}&page=0&size=10`)).data.data;l(r),console.log("NavAddProduct",r)}else if(a==="По штрих-коду"){const r=await(await R.get(`https://tasnif.soliq.uz/api/cl-api/integration-mxik/get/history/${d}`)).data.data;l([r]),console.log("NavAddProduct2",r)}u("")}catch(s){console.log(s)}},i=()=>{f([]),h([])};return t.jsx(t.Fragment,{children:t.jsxs("nav",{className:o.nav,children:[t.jsxs("ul",{className:o.nav_buttons,children:[t.jsx("li",{children:t.jsxs(N,{className:`${o.back} ${o.nav_buttons_link}`,to:"/admin",children:[t.jsx("span",{children:"admin"}),t.jsx(W,{name:"BuildingLibraryIcon"})]})}),t.jsx("li",{children:t.jsxs(N,{to:"/addingProducts/settingsAddProducts",className:`${o.nav_linkBtn} ${o.nav_buttons_link}`,children:[t.jsx("span",{children:"settings"}),t.jsx(W,{name:"Cog8ToothIcon"})]})})]}),t.jsxs("form",{action:"",className:o.form,onSubmit:n=>_(n),children:[t.jsxs("fieldset",{children:[t.jsx("input",{value:d,type:"text",className:o.form_input,placeholder:"Поиск",onChange:n=>u(n.currentTarget.value)}),t.jsx("button",{type:"submit",className:o.form_btn,children:"Поиск"})]}),t.jsx("ul",{className:o.form_list,children:c==null?void 0:c.map(n=>t.jsx("li",{children:t.jsxs("label",{className:o.form_check,children:[t.jsx("input",{type:"radio",name:"search",value:n.title,onClick:s=>p(s)}),t.jsx("span",{className:o.form_check_text,children:n.title})]})},n.id))})]})]})})}function oe(){const{searchResponse:e,checkedProducts:a,errorModal:c,TemporaryData:d,setTemporaryData:u,setErrorModal:g,setCheckedProducts:l,setSearchResponse:h}=y(),[f,p]=m.useState([]);m.useEffect(()=>{console.log("searchResponse",e),p([...e])},[e]),m.useEffect(()=>{const n=setTimeout(()=>{g({status:!1,message:""})},1e3);return()=>clearTimeout(n)},[c]);const _=async n=>{if(!await i(n)){g({status:!0,message:`"${(n==null?void 0:n.crmNameProduct)??n.subPositionName}" уже есть на складе`});return}if(a.some(r=>r.mxikCode==n.mxikCode))g({status:!0,message:`"${(n==null?void 0:n.crmNameProduct)??n.subPositionName}" уже выбрано`});else{l([...a,n]),h([]);const r={...n,crmNameProduct:n.subPositionName,crmAmount:1,crmArrivalPrice:0,crmSellingPrice:0};u([...d,r])}};async function i(n){const s=C.get("multi-store");try{const r=await F.post("nomenclatures/is-unique-barcode",{multiStoreId:Number(s),barcode:Number(n.mxikCode)});return console.log("checkProduct res",r),r.data}catch(r){return console.log("Ошибка произошла при проверки наличия продукта на складе",r),!1}}return t.jsx("section",{className:o.foundProducts,children:t.jsxs("div",{className:o.foundProducts_modal,children:[t.jsxs("div",{className:o.foundProducts_top,children:[t.jsxs("h2",{className:o.foundProducts_title,children:["Найдено совпадений - ",f.length??0]}),t.jsx("button",{className:o.foundProducts_close,onClick:()=>h([]),children:"close"})]}),t.jsx("ul",{className:o.foundProducts_list,children:f==null?void 0:f.map(n=>t.jsxs("li",{className:o.foundProducts_item,children:[t.jsx("span",{className:o.foundProducts_item_photo,children:t.jsx("img",{src:"/img.jpeg",width:50,height:50,alt:""})}),t.jsxs("ul",{className:o.foundProducts_item_list,children:[t.jsxs("li",{children:[t.jsx("span",{className:o.foundProducts_item_title,children:"Штрихкод:"}),t.jsx("span",{className:o.foundProducts_item_desc,children:n==null?void 0:n.mxikCode})]}),t.jsxs("li",{children:[t.jsx("span",{className:o.foundProducts_item_title,children:"ИКПУ:"}),t.jsx("span",{className:o.foundProducts_item_desc,children:n==null?void 0:n.internationalCode})]}),t.jsxs("li",{children:[t.jsx("span",{className:o.foundProducts_item_title,children:"Бренд:"}),t.jsx("span",{className:o.foundProducts_item_desc,children:n==null?void 0:n.brandName})]}),t.jsxs("li",{children:[t.jsx("span",{className:o.foundProducts_item_title,children:"Наименовани:"}),t.jsx("span",{className:o.foundProducts_item_desc,children:n==null?void 0:n.subPositionName})]}),t.jsxs("li",{children:[t.jsx("span",{className:o.foundProducts_item_title,children:"Единица измерения:"}),t.jsx("span",{className:o.foundProducts_item_desc,children:n==null?void 0:n.attributeName})]})]}),t.jsx("button",{onClick:()=>_(n),className:o.foundProducts_item_btn,children:"Выбрать"})]},n==null?void 0:n.mxikCode))})]})})}function ne({staticList:e}){return t.jsx("div",{className:o.left,children:t.jsx("div",{className:o.left_content,children:e.map(a=>t.jsxs("div",{className:o.left_content_item,children:[t.jsx("h3",{children:a.title}),t.jsx("p",{children:a.value})]},a.id))})})}function ae(){const{imagesSrc:e,setImagesSrc:a}=y(),[c,d]=m.useState(null),u=m.useRef([]),g=s=>{u.current.forEach(r=>{r&&r.getAttribute("id")==s&&r.click()})};function l(s,r){d(r)}function h(s){s.target.style.background="white"}function f(s){s.target.style.background="white"}function p(s){s.preventDefault(),s.target.style.background="lightgray"}function _(s,r){s.preventDefault(),s.target.style.background="white";const x=e.map(P=>P.id===r.id?{...P,order:(c==null?void 0:c.order)||P.order}:P.id===(c==null?void 0:c.id)?{...P,order:r.order}:P);a(x),d(null)}function i(s,r){return s.order>r.order?1:-1}const n=s=>{var x,P;const r=(P=(x=s==null?void 0:s.target)==null?void 0:x.files)==null?void 0:P[0];if(r&&(r==null?void 0:r.type)==="image/jpeg"||(r==null?void 0:r.type)==="image/png"||(r==null?void 0:r.type)==="image/webp"){const I=s.target.getAttribute("id"),S=[...e],w=S.find(k=>k.id==I),M=S.findIndex(k=>k.id==I);if(w){const k=new FileReader;k.onload=A=>{var b;(b=A.target)!=null&&b.result&&(w.src=A.target.result.toString(),S.splice(M,1,w),a([...S]))},k.readAsDataURL(r)}}};return t.jsx("div",{className:o.right,children:t.jsx("div",{className:o.right_block,children:t.jsx("div",{className:o.right_bottom,children:e.sort(i).map((s,r)=>t.jsxs("div",{draggable:!0,onDragStart:x=>l(x,s),onDragLeave:x=>h(x),onDragEnd:x=>f(x),onDragOver:x=>p(x),onDrop:x=>_(x,s),className:r==0?o.right_bottom_BaseItem:o.right_bottom_item,onDoubleClick:()=>g(s.id),children:[t.jsx("input",{id:s.id,type:"file",accept:"image/jpeg,image/png,image/webp",style:{display:"none"},onChange:n,ref:x=>{u.current[r]=x}}),t.jsx("img",{src:s.src,width:r==0?150:50,height:r==0?150:50,alt:"",className:`${r==0?o.right_bottom_baseImg:o.right_bottom_img}`})]},s.id))})})})}function ce({addingImgToProduct:e,handleCancel:a}){return t.jsxs("div",{className:o.ikpuWrapper_buttons,children:[t.jsx(N,{to:"#",className:o.ikpuWrapper_save,onClick:c=>e(c),children:"Coхранить"}),t.jsx(N,{to:"#",className:o.ikpuWrapper_delete,children:"Удалить товар"}),t.jsx(N,{to:"#",onClick:c=>a(c),className:o.ikpuWrapper_cancel,children:"Отмена"})]})}const $=[{id:1,title:"ИКПУ:",value:""},{id:2,title:"Штрих-код:",value:""},{id:3,title:"Группа:",value:""},{id:4,title:"Класс:",value:""},{id:5,title:"Позиция:",value:""},{id:6,title:"Субпозиция:",value:""},{id:7,title:"Наименование:",value:""},{id:8,title:"Бренд:",value:""},{id:9,title:"Описание:",value:""}];function re(){const{searchResponseItem:e,imagesSrc:a,setImagesSrc:c,setSearchResponseItem:d,setIkpuStatus:u}=y(),[g,l]=m.useState([]);m.useEffect(()=>{if(e){const p=$==null?void 0:$.map(_=>{let i;return _.title=="ИКПУ:"&&(i=e.internationalCode),_.title=="Штрих-код:"&&(i=e.mxikCode),_.title=="Группа::"&&(i=e.groupName),_.title=="Класс"&&(i=e.className),_.title=="Позиция:"&&(i=e.positionName),_.title=="Субпозиция:"&&(i=e.subPositionName),_.title=="Наименование:"&&(i=e.className),_.title=="Бренд:"&&(i=e.brandName),_.title=="Описание:"&&(i=e.attributeName),{id:_.id,title:_.title,value:i}});l([...p])}},[e]),m.useEffect(()=>{if(e.crmImages){console.log("imagesSrc",a);const p=a.map((_,i)=>{var n,s;return{id:_.id,order:_.order,src:(n=e==null?void 0:e.crmImages)!=null&&n[i]?(s=e.crmImages)==null?void 0:s[i].src:"/add.webp"}});console.log("arr",p),p&&c(p)}},[]);const h=p=>{p.preventDefault(),console.log("imagesSrc",a);const _=a==null?void 0:a.filter(n=>n.src!=="/add.webp");e.crmImages=_,d(e);const i=a.map(n=>({id:n.id,order:n.order,src:"/add.webp"}));c(i),u(!1)};function f(p){p.preventDefault();const _=a.map(i=>({id:i.id,order:i.order,src:"/add.webp"}));c(_),u(!1)}return t.jsx(t.Fragment,{children:t.jsx("div",{className:o.ikpuWrapper,children:t.jsxs("div",{className:o.ikpuWrapper_ikpuModalBlock,children:[t.jsxs("div",{className:o.ikpuWrapper_content,children:[t.jsx(ne,{staticList:g}),t.jsx(ae,{})]}),t.jsx(ce,{addingImgToProduct:h,handleCancel:f})]})})})}function de({item:e}){const[a,c]=m.useState(0),{TemporaryData:d,setTemporaryData:u}=y(),g=l=>{const h=l.target.valueAsNumber;c(h);const f=d.find(p=>p.id==e.id);if(f){const p=d.findIndex(i=>i.id==e.id),_=[...d];_.splice(p,1,f),u(_)}};return t.jsx("div",{children:t.jsx("input",{type:"number",value:a,className:o.table_body_amount,min:0,onChange:g})})}function le({item:e}){const[a,c]=m.useState(0),{TemporaryData:d,setTemporaryData:u}=y(),g=l=>{const h=l.target.valueAsNumber;c(h);const f=d.find(p=>p.id==e.id);if(f){const p=d.findIndex(i=>i.id==e.id),_=[...d];_.splice(p,1,f),u(_)}};return t.jsx("div",{children:t.jsx("input",{type:"number",value:a,className:o.table_body_amount,min:0,onChange:g})})}function _e({item:e}){const[a,c]=m.useState(0),{TemporaryData:d,setTemporaryData:u}=y(),g=l=>{const h=l.target.valueAsNumber;c(h);const f=d.find(p=>p.id==e.id);if(f){const p=d.findIndex(i=>i.id==e.id),_=[...d];_.splice(p,1,f),u(_)}};return t.jsx("div",{children:t.jsx("input",{type:"number",value:a,min:0,className:o.table_body_amount,onChange:g})})}function ue({item:e}){const{TemporaryData:a,setTemporaryData:c,nameProduct:d,setNameProduct:u}=y();m.useEffect(()=>{u("")},[]);const g=l=>{const h=l.target.value;u(h);const f=a.find(p=>p.id==e.id);if(f){const p=a.findIndex(i=>i.id==e.id),_=[...a];_.splice(p,1,f),c(_)}};return t.jsx("div",{children:t.jsx("textarea",{onChange:l=>g(l),value:`${d.length>=0?d:(e==null?void 0:e.subPositionName)||(e==null?void 0:e.subPositionNameRu)}`,className:o.table_body_name,placeholder:`${(e==null?void 0:e.subPositionName)||(e==null?void 0:e.subPositionNameRu)}`,children:d})})}function ie({item:e,column:a}){const{ikpuStatus:c,checkedProducts:d,setCheckedProducts:u,setSearchResponseItem:g,setIkpuStatus:l,setTemporaryData:h,setOpenModalCategory:f,setCurrentProduct:p}=y(),_=s=>{g(s),l(!c)},i=()=>{d&&(u(d.filter(s=>s.id!==e.id)),h(d.filter(s=>s.id!==e.id)))},n=s=>{s.preventDefault(),f(!0),p(e)};return t.jsxs("tr",{"data-id":e==null?void 0:e.id,className:o.table_head_row,style:{gridTemplateColumns:`repeat(${a.length}, 200px)`},children:[a==null?void 0:a.map(s=>{var r;return t.jsxs("td",{"data-id":e==null?void 0:e.id,className:o.table_body_col,children:[(s==null?void 0:s.title)=="Количество"&&t.jsx(_e,{item:e}),(s==null?void 0:s.title)=="Приходная цена"&&t.jsx(de,{item:e}),(s==null?void 0:s.title)=="Продажная цена"&&t.jsx(le,{item:e}),(s==null?void 0:s.title)=="Наименование"&&t.jsx(ue,{item:e}),(s==null?void 0:s.title)=="Фото"?t.jsx("img",{src:"/img.jpeg",width:40,height:40,alt:"",className:o.table_body_img}):"",(s==null?void 0:s.title)=="QR Код"&&(e==null?void 0:e.internationalCode),(s==null?void 0:s.title)=="ИКПУ"?t.jsx("span",{children:t.jsx(W,{name:"EyeIcon",className:o.table_body_icon})}):"",(s==null?void 0:s.title)=="Добавить Фото"?t.jsx("span",{onClick:()=>_(e),children:t.jsx(W,{name:"FolderOpenIcon",className:o.table_body_icon})}):"",(s==null?void 0:s.title)=="Подкатегория"&&t.jsx(N,{to:"#",onClick:x=>n(x),children:(r=e==null?void 0:e.crmCategory)!=null&&r.name.ru?e==null?void 0:e.crmCategory.name.ru:"Выбрать"}),(s==null?void 0:s.title)=="Штрих-код"&&(e==null?void 0:e.internationalCode)]},s==null?void 0:s.id)}),t.jsx("td",{className:o.table_body_del,onClick:i,children:t.jsx(W,{name:"TrashIcon",width:20,height:20})})]})}function pe({column:e}){const{TemporaryData:a}=y();return t.jsxs("table",{className:o.table,children:[t.jsx("thead",{className:o.table_head,children:t.jsx("tr",{className:o.table_head_row,style:{gridTemplateColumns:`repeat(${e.length}, 200px)`},children:e==null?void 0:e.map(c=>t.jsx("td",{className:o.table_head_col,children:c.title},c.id))})}),t.jsx("tbody",{className:o.table_body,children:a==null?void 0:a.map(c=>t.jsx(ie,{item:c,column:e},c==null?void 0:c.mxikCode))})]})}function be({clearTable:e,setData:a}){return t.jsxs("div",{className:o.formWrapper_buttons,children:[t.jsx("button",{name:"myForm",className:o.formWrapper_btn,onClick:c=>e(c),children:"Отмена"}),t.jsx("button",{name:"myForm",type:"submit",className:o.formWrapper_btn,onClick:a,children:"Сохранить"})]})}function ge(){const e=m.useRef(null),[a,c]=m.useState(!1),[d,u]=m.useState(0),[g,l]=m.useState(0),h=b=>{e.current&&(c(!0),u(b.pageX-e.current.offsetLeft),l(e.current.scrollLeft))},f=()=>{c(!1)},p=()=>{c(!1)},_=b=>{if(!a||!e.current)return;b.preventDefault();const D=(b.pageX-e.current.offsetLeft-d)*2;e.current.scrollLeft=g-D},{settingsParams:i,ikpuStatus:n,TemporaryData:s,openModalCategory:r,setTemporaryData:x,setCheckedProducts:P,nameProduct:I}=y(),[S,w]=m.useState([]);m.useEffect(()=>{const b=i.filter(v=>v.checked);w(()=>[...b])},[i]);const M=b=>{b.preventDefault(),s.forEach(v=>{k(v)})};async function k(b){var v,D,E;console.log("сработала функция setProducts");try{const T=C.get("multi-store"),L={multiStoreId:Number(T),categoryId:Number((v=b==null?void 0:b.crmCategory)==null?void 0:v.id),barcode:Number((b==null?void 0:b.internationalCode)??b.mxikCode),nameUz:"string",nameUzc:"string",nameRu:I||((D=b==null?void 0:b.crmNameProduct)==null?void 0:D.toString()),mxik:(E=b==null?void 0:b.mxikCode)==null?void 0:E.toString(),brand:null,oldPrice:0,price:Number(b==null?void 0:b.crmSellingPrice),oldPriceCourse:0,priceCourse:0,nds:0,discount:0};console.log("multiStore",T),console.log("setProducts item",b),console.log("product",L);const U=await F.post("nomenclatures",L);console.log("res",U),x([]),P([])}catch(T){console.log(`Ошибка произошла при попытке добавить ${b==null?void 0:b.crmNameProduct} на сервер`,T)}}const A=b=>{b.preventDefault(),x([]),P([])};return t.jsxs("div",{className:o.formWrapper,children:[r&&t.jsx(q,{}),t.jsxs("div",{className:o.found,ref:e,onMouseDown:h,onMouseLeave:f,onMouseUp:p,onMouseMove:_,children:[n&&t.jsx(re,{}),t.jsx(pe,{column:S})]}),t.jsx(be,{clearTable:A,setData:M})]})}function fe(){const{errorModal:e}=y();return t.jsx("div",{className:o.errorModal,children:t.jsx("div",{className:o.errorModal_block,children:t.jsx("p",{children:e==null?void 0:e.message})})})}const me="_layout_1pbgc_1",he="_layout_back_1pbgc_4",xe="_layout_title_1pbgc_14",je="_layout_list_1pbgc_19",ye="_layout_link_1pbgc_25",Pe="_layout_link_active_1pbgc_34",ke="_form_list_1pbgc_38",Ne="_form_check_1pbgc_43",ve="_navSetting_1pbgc_49",Se="_found_1pbgc_53",Ie="_table_1pbgc_74",we="_table_head_1pbgc_78",We="_table_head_row_1pbgc_81",Ae="_table_head_col_1pbgc_85",j={layout:me,layout_back:he,layout_title:xe,layout_list:je,layout_link:ye,layout_link_active:Pe,form_list:ke,form_check:Ne,navSetting:ve,found:Se,table:Ie,table_head:we,table_head_row:We,table_head_col:Ae};function De(){const e=m.useRef([]),{settingsParams:a,setSettingsParams:c}=y();m.useEffect(()=>{e.current.forEach((u,g)=>{u&&(u.checked=a[g].checked)})},[a]);const d=u=>{const g=a.map(l=>({id:l.id,title:l.title,checked:l.title==u.currentTarget.value?u.currentTarget.checked:l.checked}));c(g)};return t.jsx("nav",{className:j.navSetting,children:t.jsx("form",{action:"",className:j.form,children:t.jsx("ul",{className:j.form_list,children:a==null?void 0:a.map((u,g)=>t.jsx("li",{children:t.jsxs("label",{className:j.form_check,children:[t.jsx("input",{type:"checkbox",value:u.title,ref:l=>{e.current[g]=l},onChange:l=>d(l)}),t.jsx("span",{className:j.form_check_text,children:u.title})]})},u.id))})})})}function Te(){return t.jsx("div",{children:"AddSettingsColor"})}function Me(){return t.jsx("div",{children:"SettingsToolsComponent"})}function $e(){const a=B().pathname,{settingsParams:c}=y(),[d,u]=m.useState([]);m.useEffect(()=>{const l=c.filter(h=>h.checked);u(()=>[...l])},[c]);const g=[{id:1,title:"отображения колонок",href:"/addingProducts/settingsAddProducts"},{id:2,title:"настройки Цвета",href:"/addingProducts/settingsAddProducts/settingsCalor"},{id:3,title:"настройки инструментов",href:"/addingProducts/settingsAddProducts/settingsTools"}];return t.jsxs("div",{className:"container",children:[t.jsxs("nav",{className:j.layout,children:[t.jsx(N,{className:j.layout_back,to:"/addingProducts",children:"Закрыть"}),t.jsx("h2",{className:j.layout_title,children:"Настройки"}),t.jsx("ul",{className:j.layout_list,children:g.map(l=>t.jsx("li",{children:t.jsx(N,{to:l.href,className:`${j.layout_link} ${l.href==a?j.layout_link_active:""}`,children:l.title})},l.id))}),a=="/addingProducts/settingsAddProducts"&&t.jsx(De,{}),a=="/addingProducts/settingsAddProducts/settingsCalor"&&t.jsx(Te,{}),a=="/addingProducts/settingsAddProducts/settingsTools"&&t.jsx(Me,{})]}),t.jsx("section",{className:j.found,children:t.jsxs("table",{className:j.table,children:[t.jsx("thead",{className:j.table_head,children:t.jsx("tr",{className:j.table_head_row,style:{gridTemplateColumns:`repeat(${d.length}, 200px)`},children:d==null?void 0:d.map(l=>t.jsx("td",{className:j.table_head_col,children:l.title},l.id))})}),t.jsx("tbody",{className:j.table_body,children:t.jsx("tr",{className:j.table_body_row,children:t.jsx("td",{className:j.table_body_col})})})]})})]})}function Ce(){const a=B().pathname,{searchResponse:c,checkedProducts:d,errorModal:u}=y();return t.jsxs(t.Fragment,{children:[a=="/addingProducts"&&t.jsxs("div",{className:`container ${o.container}`,children:[t.jsx(se,{}),c.length>0&&t.jsx(oe,{}),d.length>0&&t.jsx(ge,{}),u.status&&t.jsx(fe,{})]}),a=="/addingProducts/settingsAddProducts"&&t.jsx($e,{})]})}export{Ce as default};
