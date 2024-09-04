import{r as c,x as v,j as i,C as w,N as f,q as S}from"./index-jbLHaAhC.js";import{p as I,H as N}from"./Header-Bwoltv8W.js";import{C as m}from"./CustomIcon-Dk3_npyW.js";import{C as y}from"./CustomIconSolid-DB_CS0L4.js";import{S as b,N as j,a as u}from"./scrollbar-Dc8pvTnf.js";import"./userStore-BvO8ue9w.js";import"./XMarkIcon-DIHbEiNZ.js";const k="_wrapper_9mgbx_1",M="_wrapper_title_9mgbx_5",$="_wrapper_content_9mgbx_13",C="_wrapper_switcher_list_9mgbx_18",B="_wrapper_switcher_link_9mgbx_23",E="_active_9mgbx_41",P="_left_9mgbx_45",A="_right_9mgbx_49",L="_right_top_ratingsBlock_9mgbx_54",z="_right_top_ratings_9mgbx_54",F="_right_top_wish_9mgbx_65",R="_right_top_like_9mgbx_74",H="_right_top_like_active_9mgbx_77",V="_right_top_name_9mgbx_80",q="_rightInfo_9mgbx_87",D="_rightInfo_options_9mgbx_94",G="_rightInfo_options_box_9mgbx_101",J="_rightInfo_options_box_col_9mgbx_106",K="_rightInfo_options_counter_9mgbx_111",O="_rightInfo_options_images_9mgbx_120",Q="_rightInfo_options_images_item_9mgbx_126",T="_rightInfo_options_images_item_active_9mgbx_129",U="_rightInfo_options_images_block_9mgbx_134",W="_rightInfo_options_img_9mgbx_139",X="_rightInfo_buttons_9mgbx_144",Y="_rightInfo_button_9mgbx_144",Z="_mySwiper_9mgbx_167",ii="_mySwiper_slide_img_9mgbx_172",si="_myMiniSwiper_9mgbx_178",ti="_myMiniSwiper_slide_img_9mgbx_183",ni="_myMiniSwiper_btn_9mgbx_188",ei="_myMiniSwiper_prev_9mgbx_194",oi="_myMiniSwiper_next_9mgbx_206",_i="_myMiniSwiper_next_disabled_9mgbx_213",ri="_myMiniSwiper_prev_disabled_9mgbx_213",s={wrapper:k,wrapper_title:M,wrapper_content:$,wrapper_switcher_list:C,wrapper_switcher_link:B,active:E,left:P,right:A,right_top_ratingsBlock:L,right_top_ratings:z,right_top_wish:F,right_top_like:R,right_top_like_active:H,right_top_name:V,rightInfo:q,rightInfo_options:D,rightInfo_options_box:G,rightInfo_options_box_col:J,rightInfo_options_counter:K,rightInfo_options_images:O,rightInfo_options_images_item:Q,rightInfo_options_images_item_active:T,rightInfo_options_images_block:U,rightInfo_options_img:W,rightInfo_buttons:X,rightInfo_button:Y,mySwiper:Z,mySwiper_slide_img:ii,myMiniSwiper:si,myMiniSwiper_slide_img:ti,myMiniSwiper_btn:ni,myMiniSwiper_prev:ei,myMiniSwiper_next:oi,myMiniSwiper_next_disabled:_i,myMiniSwiper_prev_disabled:ri};function ai({currentItem:n}){const[t,e]=c.useState([]),[_,o]=c.useState(null),[r,p]=c.useState(!0),[l,h]=c.useState(!1);c.useEffect(()=>{if(n.images){let a=1;const d=n.images.map(x=>({id:v(),src:x,order:a++}));e([...d])}},[n]);const g=a=>{const d=t.filter(x=>x.id!=a.id);d.unshift(a),e(d)};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:s.rightInfo_options_box,children:[i.jsx("span",{children:"Цвет:"}),i.jsx("span",{})]}),i.jsxs("div",{className:s.rightInfo_options_images,children:[i.jsx("div",{className:s.rightInfo_options_images_item_active,children:i.jsx("img",{src:t[0]&&`https://api.mcrm.uz/${t[0].src}`,alt:"",className:s.rightInfo_options_img})}),i.jsxs("div",{className:s.rightInfo_options_images_block,children:[i.jsx("button",{className:`${s.myMiniSwiper_prev} ${r?s.myMiniSwiper_prev_disabled:""}`,disabled:r,children:i.jsx(m,{name:"ChevronLeftIcon",color:"rgb(191, 187, 187)"})}),i.jsx("button",{className:`${s.myMiniSwiper_next} ${l?s.myMiniSwiper_next_disabled:""}`,disabled:l,children:i.jsx(m,{name:"ChevronRightIcon",color:"rgb(191, 187, 187)"})}),i.jsx(b,{spaceBetween:10,modules:[j],slidesPerView:2.6,slidesPerGroup:1,className:s.myMiniSwiper,navigation:{nextEl:`.${s.myMiniSwiper_next}`,prevEl:`.${s.myMiniSwiper_prev}`},onSwiper:a=>o(a),onSlideChange:()=>{p(_.isBeginning),h(_.isEnd)},children:t==null?void 0:t.map(a=>i.jsx(u,{className:s.rightInfo_options_images_item,onClick:()=>g(a),children:i.jsx("img",{src:`https://api.mcrm.uz/${a.src}`,alt:"",className:s.rightInfo_options_img})},a.id))})]})]})]})}function ci(){return i.jsxs("div",{className:`${s.rightInfo_options_box} ${s.rightInfo_options_box_col}`,children:[i.jsx("span",{children:"Размер:"}),i.jsx("span",{})]})}function pi({setCount:n,currentCount:t}){return i.jsxs("div",{className:`${s.rightInfo_options_box} ${s.rightInfo_options_box_col}`,children:[i.jsx("span",{children:"Количество:"}),i.jsxs("span",{className:s.rightInfo_options_counter,children:[i.jsx("button",{className:s.rightInfo_options_counter_btn,onClick:()=>n("-"),children:i.jsx(m,{name:"MinusIcon",width:25,height:25,color:t==1?"#c6c0c0":"black"})}),t,i.jsx("button",{className:s.rightInfo_options_counter_btn,onClick:()=>n("+"),children:i.jsx(m,{name:"PlusIcon",width:25,height:25,color:"black"})})]})]})}function li({currentItem:n,currentCost:t}){var e;return i.jsxs("div",{className:s.rightInfo_options_box,children:[i.jsx("span",{children:"Цена:"}),i.jsxs("span",{children:[t==0?(e=n.nomenclature)==null?void 0:e.price:t," Сум"]})]})}function gi(){return i.jsxs("div",{className:s.rightInfo_buttons,children:[i.jsx("button",{className:s.rightInfo_button,children:"Добавить в корзину"}),i.jsx("button",{className:s.rightInfo_button,children:"Купить в 1 клик"})]})}function mi({currentItem:n}){const[t,e]=c.useState(1),[_,o]=c.useState(0);c.useEffect(()=>{var l;const p=(l=n.nomenclature)==null?void 0:l.price;o(p)},[n]);const r=p=>{var l,h;if(p=="+"){const g=(l=n.nomenclature)==null?void 0:l.price;e(t+1),o(_+g)}if(p=="-"&&t!=1){const g=(h=n.nomenclature)==null?void 0:h.price;e(t-1),o(_-g)}};return i.jsxs("div",{className:s.rightInfo,children:[i.jsx(ai,{currentItem:n}),i.jsxs("div",{className:s.rightInfo_options,children:[i.jsx(ci,{}),i.jsx(pi,{setCount:r,currentCount:t}),i.jsx(li,{currentItem:n,currentCost:_})]}),i.jsx(gi,{})]})}function hi({currentItem:n}){const{favoriteActive:t,setFavoriteActive:e}=I(),_=o=>{if(o.stopPropagation(),Array.isArray(t)&&t.some(r=>r.mxikCode==n.mxikCode)){const r=t.filter(p=>p.mxikCode!=n.mxikCode);e(r)}else e([...t,n])};return i.jsxs("div",{className:s.right,children:[i.jsxs("div",{className:s.right_top,children:[i.jsxs("div",{className:s.right_top_ratingsBlock,children:[i.jsxs("div",{className:s.right_top_ratings,children:[i.jsxs("div",{children:[i.jsx(y,{name:"StarIcon",width:15,height:15,color:"orange",className:s.right_top_ratings_icon}),i.jsx("span",{children:"4.4"})]}),i.jsx("span",{children:"(14 оценок)"}),i.jsx("span",{children:"Более 90 заказов"})]}),i.jsxs("div",{className:s.right_top_wish,onClick:o=>_(o),children:[i.jsx(m,{name:"HeartIcon",width:18,height:18,className:`${s.right_top_like} ${t[t.findIndex(o=>o.mxikCode==n.mxikCode)]?s.right_top_like_active:""}`}),i.jsx("span",{children:"В Избранные"})]})]}),i.jsx("div",{className:s.right_top_name,children:n.positionName})]}),i.jsx(mi,{currentItem:n})]})}function di({currentItem:n}){var t;return i.jsx("div",{className:s.left,children:i.jsx(b,{className:s.mySwiper,modules:[j],spaceBetween:50,slidesPerView:1,navigation:!0,children:(n==null?void 0:n.images)&&((t=n==null?void 0:n.images)==null?void 0:t.map((e,_)=>i.jsx(u,{className:s.mySwiper_slide,children:i.jsx("img",{src:`https://api.mcrm.uz/${e}`,alt:"",className:s.mySwiper_slide_img})},_)))})})}function xi({currentItem:n}){const{id:t}=w();return i.jsx("div",{className:s.wrapper_switcher,children:i.jsx("div",{className:"container",children:i.jsxs("ul",{className:s.wrapper_switcher_list,children:[i.jsx("li",{children:i.jsx(f,{to:`/productInfo/${t}/desc`,className:({isActive:e})=>e?`${s.wrapper_switcher_link} ${s.active}`:`${s.wrapper_switcher_link}`,children:"Описание товара"})}),n.crmCommentsStatus&&i.jsx("li",{children:i.jsx(f,{to:`/productInfo/${t}/reviews`,className:({isActive:e})=>e?`${s.wrapper_switcher_link} ${s.active}`:`${s.wrapper_switcher_link}`,children:"Отзывы"})})]})})})}function Ii(){const{id:n}=w(),[t,e]=c.useState({});c.useEffect(()=>{_()},[n]);const _=async()=>{try{const r=(await S.get(`web-nomenclatures/${n}`)).data;e(r)}catch(o){console.log("Ошибка произошла при получении продукта на странице информацции о продукте",o)}};return i.jsxs(i.Fragment,{children:[i.jsx(N,{}),i.jsxs("div",{className:`${s.wrapper} container`,children:[i.jsx("h2",{className:s.wrapper_title,children:t.title}),i.jsxs("div",{className:s.wrapper_content,children:[i.jsx(di,{currentItem:t}),i.jsx(hi,{currentItem:t})]}),i.jsx(xi,{currentItem:t})]})]})}export{Ii as default};
