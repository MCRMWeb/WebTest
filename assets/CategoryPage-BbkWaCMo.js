import{l as u,r as n,j as s}from"./index-7WS4nBfv.js";import{p as f,b as x,H as P,d}from"./Header-BTrGzZg-.js";import{C as j}from"./CustomIcon-By7wfQXi.js";import{P as h}from"./Products-Bzx93ZUA.js";import{s as C}from"./shop1Store-_i_uTScA.js";import"./XMarkIcon-BdOORnjM.js";function H(){const{productItem:l}=f(),i=u(),a=parseInt(i.id,10),{pickedProduct:m}=x(),{websiteProducts:o}=C(),[r,p]=n.useState(o==null?void 0:o.filter(e=>{var t;return((t=e.crmCategoryParentId)==null?void 0:t.id)==a}));n.useEffect(()=>{g(),console.log("products CatalogPage",r),console.log("websiteProducts",o),console.log("products",r)},[l,o]);const g=()=>{console.log("websiteProducts",o);const e=o==null?void 0:o.filter(t=>{var c;return((c=t.crmCategoryParentId)==null?void 0:c.id)==a});p(e)};return s.jsxs(s.Fragment,{children:[s.jsx(P,{}),s.jsx("div",{className:d.catalogPage,children:s.jsxs("div",{className:"container",children:[s.jsxs("h2",{className:d.catalogPage_title,children:[s.jsx("span",{children:m}),s.jsx(j,{name:"ChevronRightIcon"})]}),s.jsx(h,{products:r})]})})]})}export{H as default};
