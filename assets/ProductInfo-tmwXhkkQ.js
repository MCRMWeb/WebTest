import{r,v,j as i,C as w,N as f,o as S}from"./index-DcJDFFI3.js";import{p as I,H as N}from"./Header-DNnABwyh.js";import{C as m}from"./CustomIcon-9acaQbfX.js";import{S as b,N as j,a as u,C as y}from"./CustomIconSolid-B9TTVB4m.js";import"./userStore-Bd0BwVRS.js";import"./XMarkIcon-f25OYKhE.js";const k="_wrapper_9mgbx_1",M="_wrapper_title_9mgbx_5",$="_wrapper_content_9mgbx_13",C="_wrapper_switcher_list_9mgbx_18",B="_wrapper_switcher_link_9mgbx_23",E="_active_9mgbx_41",P="_left_9mgbx_45",A="_right_9mgbx_49",L="_right_top_ratingsBlock_9mgbx_54",z="_right_top_ratings_9mgbx_54",F="_right_top_wish_9mgbx_65",R="_right_top_like_9mgbx_74",H="_right_top_like_active_9mgbx_77",V="_right_top_name_9mgbx_80",D="_rightInfo_9mgbx_87",G="_rightInfo_options_9mgbx_94",q="_rightInfo_options_box_9mgbx_101",J="_rightInfo_options_box_col_9mgbx_106",K="_rightInfo_options_counter_9mgbx_111",O="_rightInfo_options_images_9mgbx_120",Q="_rightInfo_options_images_item_9mgbx_126",T="_rightInfo_options_images_item_active_9mgbx_129",U="_rightInfo_options_images_block_9mgbx_134",W="_rightInfo_options_img_9mgbx_139",X="_rightInfo_buttons_9mgbx_144",Y="_rightInfo_button_9mgbx_144",Z="_mySwiper_9mgbx_167",ii="_mySwiper_slide_img_9mgbx_172",si="_myMiniSwiper_9mgbx_178",ti="_myMiniSwiper_slide_img_9mgbx_183",ni="_myMiniSwiper_btn_9mgbx_188",ei="_myMiniSwiper_prev_9mgbx_194",oi="_myMiniSwiper_next_9mgbx_206",_i="_myMiniSwiper_next_disabled_9mgbx_213",ri="_myMiniSwiper_prev_disabled_9mgbx_213",s={wrapper:k,wrapper_title:M,wrapper_content:$,wrapper_switcher_list:C,wrapper_switcher_link:B,active:E,left:P,right:A,right_top_ratingsBlock:L,right_top_ratings:z,right_top_wish:F,right_top_like:R,right_top_like_active:H,right_top_name:V,rightInfo:D,rightInfo_options:G,rightInfo_options_box:q,rightInfo_options_box_col:J,rightInfo_options_counter:K,rightInfo_options_images:O,rightInfo_options_images_item:Q,rightInfo_options_images_item_active:T,rightInfo_options_images_block:U,rightInfo_options_img:W,rightInfo_buttons:X,rightInfo_button:Y,mySwiper:Z,mySwiper_slide_img:ii,myMiniSwiper:si,myMiniSwiper_slide_img:ti,myMiniSwiper_btn:ni,myMiniSwiper_prev:ei,myMiniSwiper_next:oi,myMiniSwiper_next_disabled:_i,myMiniSwiper_prev_disabled:ri};function ai({currentItem:t}){const[n,e]=r.useState([]),[_,o]=r.useState(null),[a,p]=r.useState(!0),[l,h]=r.useState(!1);r.useEffect(()=>{console.log("swiper",_)},[_]),r.useEffect(()=>{if(t.images){let c=1;const d=t.images.map(x=>({id:v(),src:x,order:c++}));e([...d])}},[t]);const g=c=>{const d=n.filter(x=>x.id!=c.id);d.unshift(c),e(d)};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:s.rightInfo_options_box,children:[i.jsx("span",{children:"Цвет:"}),i.jsx("span",{})]}),i.jsxs("div",{className:s.rightInfo_options_images,children:[i.jsx("div",{className:s.rightInfo_options_images_item_active,children:i.jsx("img",{src:n[0]&&`https://api.mcrm.uz/${n[0].src}`,alt:"",className:s.rightInfo_options_img})}),i.jsxs("div",{className:s.rightInfo_options_images_block,children:[i.jsx("button",{className:`${s.myMiniSwiper_prev} ${a?s.myMiniSwiper_prev_disabled:""}`,disabled:a,children:i.jsx(m,{name:"ChevronLeftIcon",color:"rgb(191, 187, 187)"})}),i.jsx("button",{className:`${s.myMiniSwiper_next} ${l?s.myMiniSwiper_next_disabled:""}`,disabled:l,children:i.jsx(m,{name:"ChevronRightIcon",color:"rgb(191, 187, 187)"})}),i.jsx(b,{spaceBetween:10,modules:[j],slidesPerView:2.6,slidesPerGroup:1,className:s.myMiniSwiper,navigation:{nextEl:`.${s.myMiniSwiper_next}`,prevEl:`.${s.myMiniSwiper_prev}`},onSwiper:c=>o(c),onSlideChange:()=>{p(_.isBeginning),h(_.isEnd)},children:n==null?void 0:n.map(c=>i.jsx(u,{className:s.rightInfo_options_images_item,onClick:()=>g(c),children:i.jsx("img",{src:`https://api.mcrm.uz/${c.src}`,alt:"",className:s.rightInfo_options_img})},c.id))})]})]})]})}function ci(){return i.jsxs("div",{className:`${s.rightInfo_options_box} ${s.rightInfo_options_box_col}`,children:[i.jsx("span",{children:"Размер:"}),i.jsx("span",{})]})}function pi({setCount:t,currentCount:n}){return i.jsxs("div",{className:`${s.rightInfo_options_box} ${s.rightInfo_options_box_col}`,children:[i.jsx("span",{children:"Количество:"}),i.jsxs("span",{className:s.rightInfo_options_counter,children:[i.jsx("button",{className:s.rightInfo_options_counter_btn,onClick:()=>t("-"),children:i.jsx(m,{name:"MinusIcon",width:25,height:25,color:n==1?"#c6c0c0":"black"})}),n,i.jsx("button",{className:s.rightInfo_options_counter_btn,onClick:()=>t("+"),children:i.jsx(m,{name:"PlusIcon",width:25,height:25,color:"black"})})]})]})}function li({currentItem:t,currentCost:n}){var e;return i.jsxs("div",{className:s.rightInfo_options_box,children:[i.jsx("span",{children:"Цена:"}),i.jsxs("span",{children:[n==0?(e=t.nomenclature)==null?void 0:e.price:n," Сум"]})]})}function gi(){return i.jsxs("div",{className:s.rightInfo_buttons,children:[i.jsx("button",{className:s.rightInfo_button,children:"Добавить в корзину"}),i.jsx("button",{className:s.rightInfo_button,children:"Купить в 1 клик"})]})}function mi({currentItem:t}){const[n,e]=r.useState(1),[_,o]=r.useState(0);r.useEffect(()=>{var l;const p=(l=t.nomenclature)==null?void 0:l.price;o(p),console.log("currentItem",t)},[t]);const a=p=>{var l,h;if(p=="+"){const g=(l=t.nomenclature)==null?void 0:l.price;e(n+1),o(_+g)}if(p=="-"&&n!=1){const g=(h=t.nomenclature)==null?void 0:h.price;e(n-1),o(_-g)}};return i.jsxs("div",{className:s.rightInfo,children:[i.jsx(ai,{currentItem:t}),i.jsxs("div",{className:s.rightInfo_options,children:[i.jsx(ci,{}),i.jsx(pi,{setCount:a,currentCount:n}),i.jsx(li,{currentItem:t,currentCost:_})]}),i.jsx(gi,{})]})}function hi({currentItem:t}){const{favoriteActive:n,setFavoriteActive:e}=I(),_=o=>{if(o.stopPropagation(),Array.isArray(n)&&n.some(a=>a.mxikCode==t.mxikCode)){const a=n.filter(p=>p.mxikCode!=t.mxikCode);e(a)}else e([...n,t])};return i.jsxs("div",{className:s.right,children:[i.jsxs("div",{className:s.right_top,children:[i.jsxs("div",{className:s.right_top_ratingsBlock,children:[i.jsxs("div",{className:s.right_top_ratings,children:[i.jsxs("div",{children:[i.jsx(y,{name:"StarIcon",width:15,height:15,color:"orange",className:s.right_top_ratings_icon}),i.jsx("span",{children:"4.4"})]}),i.jsx("span",{children:"(14 оценок)"}),i.jsx("span",{children:"Более 90 заказов"})]}),i.jsxs("div",{className:s.right_top_wish,onClick:o=>_(o),children:[i.jsx(m,{name:"HeartIcon",width:18,height:18,className:`${s.right_top_like} ${n[n.findIndex(o=>o.mxikCode==t.mxikCode)]?s.right_top_like_active:""}`}),i.jsx("span",{children:"В Избранные"})]})]}),i.jsx("div",{className:s.right_top_name,children:t.positionName})]}),i.jsx(mi,{currentItem:t})]})}function di({currentItem:t}){var n;return i.jsx("div",{className:s.left,children:i.jsx(b,{className:s.mySwiper,modules:[j],spaceBetween:50,slidesPerView:1,navigation:!0,children:(t==null?void 0:t.images)&&((n=t==null?void 0:t.images)==null?void 0:n.map((e,_)=>i.jsx(u,{className:s.mySwiper_slide,children:i.jsx("img",{src:`https://api.mcrm.uz/${e}`,alt:"",className:s.mySwiper_slide_img})},_)))})})}function xi({currentItem:t}){const{id:n}=w();return i.jsx("div",{className:s.wrapper_switcher,children:i.jsx("div",{className:"container",children:i.jsxs("ul",{className:s.wrapper_switcher_list,children:[i.jsx("li",{children:i.jsx(f,{to:`/productInfo/${n}/desc`,className:({isActive:e})=>e?`${s.wrapper_switcher_link} ${s.active}`:`${s.wrapper_switcher_link}`,children:"Описание товара"})}),t.crmCommentsStatus&&i.jsx("li",{children:i.jsx(f,{to:`/productInfo/${n}/reviews`,className:({isActive:e})=>e?`${s.wrapper_switcher_link} ${s.active}`:`${s.wrapper_switcher_link}`,children:"Отзывы"})})]})})})}function Si(){const{id:t}=w(),[n,e]=r.useState({});r.useEffect(()=>{_()},[t]);const _=async()=>{try{const o=await S.get(`web-nomenclatures/${t}`);console.log("res",o);const a=o.data;e(a)}catch(o){console.log("Ошибка произошла при получении продукта на странице информацции о продукте",o)}};return i.jsxs(i.Fragment,{children:[i.jsx(N,{}),i.jsxs("div",{className:`${s.wrapper} container`,children:[i.jsx("h2",{className:s.wrapper_title,children:n.title}),i.jsxs("div",{className:s.wrapper_content,children:[i.jsx(di,{currentItem:n}),i.jsx(hi,{currentItem:n})]}),i.jsx(xi,{currentItem:n})]})]})}export{Si as default};
