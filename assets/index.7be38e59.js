var p=Object.defineProperty,m=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(t,r,n)=>r in t?p(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,h=(t,r)=>{for(var n in r||(r={}))b.call(r,n)&&d(t,n,r[n]);if(a)for(var n of a(r))v.call(r,n)&&d(t,n,r[n]);return t},f=(t,r)=>m(t,x(r));import{j as u,R as g,a as w}from"./vendor.cb44c745.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};y();const e=u.exports.jsx,l=u.exports.jsxs,N=t=>l("svg",f(h({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},t),{children:[e("title",{children:"Mail"}),e("rect",{x:48,y:96,width:416,height:320,rx:40,ry:40,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32}),e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"m112 160 144 112 144-112"})]}));function M(){return l("nav",{className:"nav-bar",children:[e("div",{children:e("p",{className:"logo",children:"METALCORD BELEN"})}),l("div",{className:"email-box",children:[e(N,{width:40}),e("p",{className:"email-label",children:"metalcord@gmail.com"})]}),e("div",{children:"Datos personales"})]})}function j(){return e("div",{className:"options-container",children:l("ul",{children:[e("li",{children:e("a",{href:"",children:"Inicio"})}),e("li",{children:e("a",{href:"",children:"Nosotros"})}),e("li",{children:e("a",{href:"",children:"Proyectos"})}),e("li",{children:e("a",{href:"",children:"Contacto"})})]})})}function B(){return l("div",{className:"one-container",children:[l("ul",{children:[e("li",{children:e("img",{src:"https://images.unsplash.com/photo-1513710239666-c29e2c09dc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",alt:""})}),e("li",{children:e("img",{src:"https://images.unsplash.com/photo-1585201731775-0597e1be4bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",alt:""})}),e("li",{children:e("img",{src:"https://images.unsplash.com/photo-1551457812-ce1f54d16ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:""})}),e("li",{children:e("img",{src:"https://images.unsplash.com/photo-1619109611242-4a953eb2a215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",alt:""})})]}),l("div",{className:"one-content",children:[l("div",{className:"one-content-labels",children:[e("p",{children:"Especialistas:"}),e("p",{children:"Naves Industriales"}),e("p",{children:"Techos Metalicos"}),e("p",{children:"Estructuras metalicas"}),e("p",{children:"Servicios generales"})]}),e("div",{className:"one-content-form",children:l("form",{children:[e("h2",{children:"SOLICITA TU COTIZACI\xD3N"}),e("input",{type:"text",placeholder:"Nombre"}),e("input",{type:"text",placeholder:"Tel\xE9fonos"}),e("input",{type:"text",placeholder:"Correo"}),e("div",{className:"one-content-button",children:"Solicitar cotizaci\xF3n"})]})})]})]})}function D(){return l("div",{children:[e(M,{}),e(j,{}),e(B,{})]})}g.render(e(w.StrictMode,{children:e(D,{})}),document.getElementById("root"));
