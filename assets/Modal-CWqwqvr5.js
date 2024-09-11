import{j as t,z as W,A as q,B as F,y as n,r as b,L as P,w as J}from"./index-BvLd0ioI.js";import{C as O}from"./CustomIcon-BASPemvT.js";function Ce({width:e=78,color:o="white",backgroundOn:_="rgba(137, 250, 135, 1)",backgroundOff:m="rgba(193, 193, 193, 1)",speed:i=500,scale:C=1.1,status:p=!1}){const h={width:`${e}px`,height:`${e/2-e/20}px`,background:p?_:m,borderRadius:`${e/2}px`,display:"flex",alignItems:"center",transition:`${i}ms`,cursor:"pointer"},a={background:`${o}`,height:`${e/2-e/20}px`,width:`${e/2-e/20}px`,border:`${e/25}px solid ${p?_:m}`,borderRadius:"50%",transition:`${i}ms`,transform:`scale(${C}) translateX(${p?"110%":"0"})`};return t.jsx("div",{style:h,children:t.jsx("div",{style:a})})}const K="_versions_1vl2a_1",U="_versions_block_1vl2a_6",Y="_versions_block_top_1vl2a_11",Z="_versions_block_top_title_1vl2a_21",oo="_versions_block_top_arrow_1vl2a_25",eo="_versions_block_top_arrow_active_1vl2a_35",to="_versions_block_dropdown_1vl2a_38",so="_versions_block_dropdown_item_1vl2a_50",no="_versions_block_dropdown_open_1vl2a_61",ro="_versions_block_onOff_1vl2a_67",_o="_versions_block_delivery_1vl2a_67",ao="_versions2_1vl2a_73",co="_versions2_block_1vl2a_78",lo="_versions2_block_top_1vl2a_83",io="_versions2_block_top_title_1vl2a_93",vo="_versions2_block_top_arrow_1vl2a_97",ko="_versions2_block_top_arrow_active_1vl2a_106",po="_versions2_block_dropdown_1vl2a_109",go="_versions2_block_dropdown_item_1vl2a_120",bo="_versions2_block_dropdown_open_1vl2a_131",mo="_versions2_block_onOff_1vl2a_137",ho="_versions2_block_delivery_1vl2a_137",uo="_version3_1vl2a_143",Co="_version3_title_1vl2a_148",xo="_version3_block_1vl2a_154",yo="_version3_block_top_1vl2a_159",fo="_version3_block_top_title_1vl2a_170",So="_version3_block_top_arrow_1vl2a_174",Po="_version3_block_top_arrow_active_1vl2a_184",wo="_version3_block_dropdown_1vl2a_187",jo="_version3_block_dropdown_item_1vl2a_198",Oo="_version3_block_dropdown_open_1vl2a_214",Eo="_version3_block_onOff_1vl2a_238",Io="_version3_block_delivery_1vl2a_238",$o="_versionExtraOptions_1vl2a_244",Mo="_versionExtraOptions_title_1vl2a_249",No="_versionExtraOptions_block_1vl2a_255",zo="_versionExtraOptions_block_top_1vl2a_260",Ro="_versionExtraOptions_block_top_title_1vl2a_271",To="_versionExtraOptions_block_top_arrow_1vl2a_276",Do="_versionExtraOptions_block_top_arrow_active_1vl2a_286",Ao="_versionExtraOptions_block_dropdown_1vl2a_289",Lo="_versionExtraOptions_block_dropdown_item_1vl2a_300",Bo="_versionExtraOptions_block_dropdown_open_1vl2a_317",Go="_versionExtraOptions_block_onOff_1vl2a_341",Ho="_versionExtraOptions_block_delivery_1vl2a_341",x={versions:K,versions_block:U,versions_block_top:Y,versions_block_top_title:Z,versions_block_top_arrow:oo,versions_block_top_arrow_active:eo,versions_block_dropdown:to,versions_block_dropdown_item:so,versions_block_dropdown_open:no,versions_block_onOff:ro,versions_block_delivery:_o,versions2:ao,versions2_block:co,versions2_block_top:lo,versions2_block_top_title:io,versions2_block_top_arrow:vo,versions2_block_top_arrow_active:ko,versions2_block_dropdown:po,versions2_block_dropdown_item:go,versions2_block_dropdown_open:bo,versions2_block_onOff:mo,versions2_block_delivery:ho,version3:uo,version3_title:Co,version3_block:xo,version3_block_top:yo,version3_block_top_title:fo,version3_block_top_arrow:So,version3_block_top_arrow_active:Po,version3_block_dropdown:wo,version3_block_dropdown_item:jo,version3_block_dropdown_open:Oo,version3_block_onOff:Eo,version3_block_delivery:Io,versionExtraOptions:$o,versionExtraOptions_title:Mo,versionExtraOptions_block:No,versionExtraOptions_block_top:zo,versionExtraOptions_block_top_title:Ro,versionExtraOptions_block_top_arrow:To,versionExtraOptions_block_top_arrow_active:Do,versionExtraOptions_block_dropdown:Ao,versionExtraOptions_block_dropdown_item:Lo,versionExtraOptions_block_dropdown_open:Bo,versionExtraOptions_block_onOff:Go,versionExtraOptions_block_delivery:Ho};function xe({width:e="45%",color:o="black",title:_="",className:m,openBlock:i,setOpenBlock:C,currentVersion:p,setCurrentVersion:h,versionList:a=[{id:"1",title:"версия 1",isActive:!0,navIcon:""},{id:"2",title:"версия 2",isActive:!1,navIcon:""},{id:"3",title:"версия 3",isActive:!1,navIcon:""}],setVersionList:r}){const d=u=>{h(u.title);const y=a.map(g=>({id:g.id,title:g.title,isActive:!1})),c=y.find(g=>g.id==u.id),l=y.findIndex(g=>g.id==u.id);c&&(c.isActive=!0,y.splice(l,1,c),r(y))};return t.jsxs("div",{className:m??x.versions,children:[t.jsx("span",{children:_}),t.jsxs("div",{className:x.versions_block,style:{width:e},children:[t.jsxs("div",{className:x.versions_block_top,children:[t.jsx("h2",{className:x.versions_block_top_title,style:{color:o},children:p}),t.jsx("button",{className:x.versions_block_top_btn,onClick:()=>C(!i),children:t.jsx("div",{className:`${x.versions_block_top_arrow} ${i?x.versions_block_top_arrow_active:""}`,children:t.jsx(O,{name:"ChevronDownIcon",width:15})})})]}),t.jsx("div",{className:`${x.versions_block_dropdown} ${i?x.versions_block_dropdown_open:""}`,children:a.map(u=>t.jsx("span",{className:x.versions_block_dropdown_item,onClick:()=>d(u),children:u.title},u.id))})]})]})}const Xo=W()(q(F(e=>({errorModal:{},setErrorModal:o=>e({errorModal:o}),globalModal:!1,setGlobalModal:o=>e({globalModal:o}),programRemember:!1,setProgramRemember:o=>e({programRemember:o}),globalRemember:!1,setGlobalRemember:o=>e({globalRemember:o}),necessarilySettings:["Наименование","Ед.измерения","Ещё"],settingsParams:[{id:n(),title:"Фото",checked:!1},{id:n(),title:"Штрих-код",checked:!0},{id:n(),title:"Наименование",checked:!0},{id:n(),title:"Подкатегория",checked:!0},{id:n(),title:"Количество",checked:!1},{id:n(),title:"Приходная цена",checked:!1},{id:n(),title:"Продажная цена",checked:!1},{id:n(),title:"QR Код",checked:!1},{id:n(),title:"Ед.измерения",checked:!1},{id:n(),title:"Реализация",checked:!1},{id:n(),title:"Цена без НДС",checked:!1},{id:n(),title:"НДС включатель",checked:!1},{id:n(),title:"ИКПУ",checked:!1},{id:n(),title:"Ещё",checked:!0}],stockSearchParams:[{id:n(),title:"По тексту",checked:!0},{id:n(),title:"По штрих-коду",checked:!1},{id:n(),title:"По ИКПУ",checked:!1}],searchParams:[{id:n(),title:"По тексту",checked:!1},{id:n(),title:"По штрих-коду",checked:!1},{id:n(),title:"Расширинный по тексту",checked:!1},{id:n(),title:"По ИКПУ",checked:!1},{id:n(),title:"По бренду",checked:!1},{id:n(),title:"По ТН ВЭД",checked:!1},{id:n(),title:"По номеру рег. удостовирения",checked:!1},{id:n(),title:"По MHH",checked:!1}],setSearchParams:o=>e({searchParams:o}),imagesSrc:[{id:"1",order:1,src:"/noPhoto.jpg"},{id:"2",order:2,src:"/noPhoto.jpg"},{id:"3",order:3,src:"/noPhoto.jpg"},{id:"4",order:4,src:"/noPhoto.jpg"}],setImagesSrc:o=>e({imagesSrc:o}),stockImagesSrc:[{id:"1",order:1,src:"/noPhoto.jpg"},{id:"2",order:2,src:"/noPhoto.jpg"},{id:"3",order:3,src:"/noPhoto.jpg"},{id:"4",order:4,src:"/noPhoto.jpg"}],setStockImagesSrc:o=>e({stockImagesSrc:o}),pickedSearch:"По тексту",setPickedSearch:o=>e({pickedSearch:o}),searchText:"",setSearchText:o=>e({searchText:o}),stockSearchText:"",setStockSearchText:o=>e({stockSearchText:o}),checkedProducts:[],setCheckedProducts:o=>e({checkedProducts:o}),checkedProductsByCode:[],setCheckedProductsByCode:o=>e({checkedProductsByCode:o}),stockCheckedProducts:[],setStockCheckedProducts:o=>e({stockCheckedProducts:o}),ikpuStatus:{status:!1,type:""},setIkpuStatus:o=>e({ikpuStatus:o}),stockIkpuStatus:!1,setStockIkpuStatus:o=>e({stockIkpuStatus:o}),TemporaryData:[],setTemporaryData:o=>e({TemporaryData:o}),stockTemporaryData:[],setStockTemporaryData:o=>e({stockTemporaryData:o}),stockSearchResponse:[],setStockSearchResponse:o=>e({stockSearchResponse:o}),openBlockCategoriesId:"",currentSuperCategory:[],setCurrentSuperCategory:o=>e({currentSuperCategory:o}),currentCategory:[],setCurrentCategory:o=>e({currentCategory:o}),currentSubCategory:[],setCurrentSubCategory:o=>e({currentSubCategory:o}),pickedCategory:{},setPickedCategory:o=>e({pickedCategory:o}),openModalCategory:!1,setOpenModalCategory:o=>e({openModalCategory:o}),currentProduct:{},setCurrentProduct:o=>e({currentProduct:o}),articleModal:!1,setArticleModal:o=>e({articleModal:o}),webCurrentProduct:{},setWebCurrentProduct:o=>e({webCurrentProduct:o}),stockPickedSearch:"По тексту",setStockPickedSearch:o=>e({stockPickedSearch:o}),setOpenBlockCategoriesId:o=>e({openBlockCategoriesId:o}),setSettingsParams:o=>e({settingsParams:o}),amountOfSearch:10,setAmountOfSearch:o=>e({amountOfSearch:o}),searchResponseItem:{},setSearchResponseItem:o=>e({searchResponseItem:o}),searchResponse:[],setSearchResponse:o=>e({searchResponse:o}),totalElementsStore:0,setTotalElementsStore:o=>e({totalElementsStore:o}),totalPagesStore:0,setTotalPagesStore:o=>e({totalPagesStore:o}),page:0,setPage:o=>e({page:o}),stockPage:1,setStockPage:o=>e({stockPage:o}),perPage:5,setPerPage:o=>e({perPage:o}),lang:"ru",setLang:o=>e({lang:o}),confirmModal:!1,setConfirmModal:o=>e({confirmModal:o}),confirmModalChecked:!1,setConfirmModalChecked:o=>e({confirmModalChecked:o}),errorMessage:"",setErrorMessage:o=>e({errorMessage:o})}),{name:"addProducts-storage",partialize:e=>({...e,globalModal:void 0,ikpuStatus:void 0,stockIkpuStatus:void 0,pickedCategory:void 0,articleModal:void 0,stockSearchText:void 0,stockCheckedProducts:void 0,stockTemporaryData:void 0,stockSearchResponse:void 0,TemporaryData:void 0})}))),D=Xo,Qo="_modalCategory_xzv82_1",Vo="_modalCategory_block_xzv82_10",Wo="_modalCategory_nav_xzv82_16",qo="_modalCategory_nav_title_xzv82_23",Fo="_modalCategory_content_xzv82_29",Jo="_modalCategory_content_message_xzv82_36",Ko="_modalCategory_content_link_xzv82_44",Uo="_modalCategory_content_link_active_xzv82_72",Yo="_modalCategory_content_item_xzv82_82",Zo="_modalCategory_content_block_xzv82_104",oe="_modalCategory_content_block_title_xzv82_108",ee="_settings_xzv82_115",te="_settings_title_xzv82_118",se="_settings_content_xzv82_123",ne="_settings_content_top_xzv82_126",re="_settings_content_buttons_xzv82_129",_e="_settings_content_btn_xzv82_139",ae="_settings_content_btn_cancel_xzv82_151",ce="_settings_content_btn_save_xzv82_154",le="_settings_tools_xzv82_157",ie="_settings_tools_link_xzv82_162",de="_settings_tools_link_active_xzv82_177",s={modalCategory:Qo,modalCategory_block:Vo,modalCategory_nav:Wo,modalCategory_nav_title:qo,modalCategory_content:Fo,modalCategory_content_message:Jo,modalCategory_content_link:Ko,modalCategory_content_link_active:Uo,modalCategory_content_item:Yo,modalCategory_content_block:Zo,modalCategory_content_block_title:oe,settings:ee,settings_title:te,settings_content:se,settings_content_top:ne,settings_content_buttons:re,settings_content_btn:_e,settings_content_btn_cancel:ae,settings_content_btn_save:ce,settings_tools:le,settings_tools_link:ie,settings_tools_link_active:de};function ve({setCancel:e}){return t.jsxs("div",{className:s.modalCategory_nav,children:[t.jsx("h2",{className:s.modalCategory_nav_title,children:"Котегория"}),t.jsx("button",{className:s.modalCategory_nav_close,onClick:e,children:t.jsx(O,{width:24,height:24,name:"XMarkIcon"})})]})}function ke({superCategory:e,category:o,superId:_,setLocalPicked:m,setSuperId:i,setMessageStatus:C,setSubCategories:p,fetchCategories:h}){const{setCurrentCategory:a}=D(),[r,d]=b.useState(10),u=(c,l)=>{c.preventDefault(),h("category",1,10,l.id),p([]);const g=o.filter($=>$.parentId==l.id);a(g),m(l),i(l.id),C(!1)},y=c=>{c.preventDefault();const l=r+10;d(l),h("super",1,l),console.log("addPage",l)};return t.jsxs("div",{className:s.modalCategory_content_block,children:[t.jsx("h2",{className:s.modalCategory_content_block_title,children:"Суперкотегория"}),t.jsxs("div",{className:s.modalCategory_content_item,children:[e.map(c=>t.jsxs(P,{to:"#",className:`${s.modalCategory_content_link} ${c.id==_?s.modalCategory_content_link_active:""} `,onClick:l=>u(l,c),children:[c.name.ru,t.jsx(O,{name:"ChevronRightIcon",width:17,height:17,color:"rgba(113, 113, 113, 1)"})]},c.id)),t.jsx(P,{to:"#",className:s.modalCategory_content_link,onClick:c=>y(c),children:"Ещё..."})]})]})}function pe({superId:e,categoryId:o,category:_,setSubCategory:m,fetchCategories:i}){const[C,p]=b.useState(10),h=r=>{r.preventDefault();const d=C+10;p(d),i("category",1,d,e),console.log("addPage",d,e)},a=(r,d)=>{m(r,d)};return _.length>0&&t.jsxs("div",{className:s.modalCategory_content_block,children:[t.jsx("h2",{className:s.modalCategory_content_block_title,children:"Котегория"}),t.jsxs("div",{className:s.modalCategory_content_item,children:[_==null?void 0:_.map(r=>t.jsxs(P,{to:"#",className:`${s.modalCategory_content_link} ${r.id==o?s.modalCategory_content_link_active:""} `,onClick:d=>a(d,r),children:[r.name.ru,t.jsx(O,{name:"ChevronRightIcon",width:17,height:17,color:"rgba(113, 113, 113, 1)"})]},r.id)),t.jsx(P,{to:"#",className:s.modalCategory_content_link,onClick:r=>h(r),children:"Ещё..."})]})]})}function ge({subId:e,categoryId:o,subCategories:_,setSubProductsList:m,fetchCategories:i}){const[C,p]=b.useState(10),h=a=>{a.preventDefault();const r=C+10;p(r),i("subCategory",1,r,o),console.log("addPage",r)};return _.length>0&&t.jsxs("div",{className:s.modalCategory_content_block,children:[t.jsx("h2",{className:s.modalCategory_content_block_title,children:"Подкотегория"}),t.jsxs("div",{className:s.modalCategory_content_item,children:[_==null?void 0:_.map(a=>t.jsxs(P,{to:"#",className:`${s.modalCategory_content_link} ${a.id==e?s.modalCategory_content_link_active:""} `,onClick:r=>m(r,a),children:[a.name.ru,t.jsx(O,{name:"ChevronRightIcon",width:17,height:17,color:"rgba(113, 113, 113, 1)"})]},a.id)),t.jsx(P,{to:"#",className:s.modalCategory_content_link,onClick:a=>h(a),children:"Ещё..."})]})]})}function be({setSettings:e,setCancel:o}){return t.jsxs("div",{className:s.settings_content_buttons,children:[t.jsx(P,{to:"#",className:`${s.settings_content_btn} ${s.settings_content_btn_save}`,onClick:_=>e(_),children:"Сохранить"}),t.jsx("button",{className:`${s.settings_content_btn} ${s.settings_content_btn_cancel}`,onClick:o,children:"Отмена"})]})}function ye(){const{TemporaryData:e,currentProduct:o,setCurrentCategory:_,setPickedCategory:m,setCurrentSubCategory:i,setTemporaryData:C,setOpenModalCategory:p,setCurrentProduct:h}=D(),[a,r]=b.useState(0),[d,u]=b.useState(0),[y,c]=b.useState(0),[l,g]=b.useState({}),[$,f]=b.useState(!1),[A,E]=b.useState("Выберите категорию"),[L,B]=b.useState([]),[M,G]=b.useState([]),[N,T]=b.useState([]);b.useEffect(()=>{j("super",1,10)},[]);const H=(v,k)=>{v.preventDefault(),j("subCategory",1,10,k.id);const w=N.filter(S=>S.parentId==k.id);i(w),g(k),u(k.id),f(!1)},X=(v,k)=>{v.preventDefault(),g(k),c(k.id),f(!1)},Q=v=>{if(v.preventDefault(),Object.keys(l).length===0){f(!0),E("Выберите Суперкотегорию");return}if(M.length>0&&d===0){f(!0),E("Выберите Категорию");return}if(N.length>0&&y===0){f(!0),E("Выберите Подкотегорию");return}if(e.length>0&&o){const k=e.find(S=>S.mxikCode==(o==null?void 0:o.mxikCode)),w=e.findIndex(S=>S.mxikCode==(o==null?void 0:o.mxikCode));k&&(k.crmCategory=l,e.splice(w,1,k),C([...e]))}z()},z=()=>{m(l),p(!1),r(0),u(0),h({}),c(0),g({}),_([]),i([]),f(!1),E("Выберите категорию")},j=async(v,k,w,S)=>{try{const R=v=="super"?`https://api.mcrm.uz/api/categories?&page=${k}&perPage=${w}`:`https://api.mcrm.uz/api/categories?parentId=${S}&page=${k}&perPage=${w}`,I=(await J.get(R)).data.data.map(V=>({...V,label:v==="super"?"Супер категория":v==="category"?"Категория":"Субкатегория"}));v==="super"&&B([...I]),v==="category"&&G([...I]),v==="subCategory"&&T([...I]),console.log("fetchCategories data",v,I)}catch(R){console.error(`Ошибка произошла при получении ${v} категорий`,R)}};return t.jsx("div",{className:s.modalCategory,children:t.jsxs("div",{className:s.modalCategory_block,children:[t.jsx(ve,{setCancel:z}),t.jsx("p",{className:s.modalCategory_content_message,children:$?A:""}),t.jsxs("div",{className:s.modalCategory_content,children:[t.jsx(ke,{superId:a,superCategory:L,category:M,setLocalPicked:g,setSuperId:r,setMessageStatus:f,fetchCategories:j,setSubCategories:T}),t.jsx(pe,{superId:a,categoryId:d,category:M,setSubCategory:H,fetchCategories:j}),t.jsx(ge,{subId:y,categoryId:d,subCategories:N,setSubProductsList:X,fetchCategories:j}),t.jsx(be,{setSettings:Q,setCancel:z})]})]})})}export{Ce as C,xe as D,ye as M,D as a,x as b,s};
