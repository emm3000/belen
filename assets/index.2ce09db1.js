var p=Object.defineProperty,x=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(n,i,o)=>i in n?p(n,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[i]=o,f=(n,i)=>{for(var o in i||(i={}))v.call(i,o)&&h(n,o,i[o]);if(d)for(var o of d(i))b.call(i,o)&&h(n,o,i[o]);return n},u=(n,i)=>x(n,w(i));import{j as m,R as N,a as g}from"./vendor.cb44c745.js";const y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}};y();const e=m.exports.jsx,r=m.exports.jsxs,M=n=>r("svg",u(f({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},n),{children:[e("title",{children:"Mail"}),e("rect",{x:48,y:96,width:416,height:320,rx:40,ry:40,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32}),e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"m112 160 144 112 144-112"})]}));function j(){return r("nav",{className:"nav-bar",children:[e("div",{children:e("p",{className:"logo",children:"METALCORD BELEN"})}),r("div",{className:"email-box",children:[e(M,{width:40}),e("p",{className:"email-label",children:"metalcord@gmail.com"})]}),e("div",{children:"Datos personales"})]})}function H(){return e("div",{className:"options-container",children:r("ul",{children:[e("li",{children:e("a",{href:"",children:"Inicio"})}),e("li",{children:e("a",{href:"",children:"Nosotros"})}),e("li",{children:e("a",{href:"",children:"Proyectos"})}),e("li",{children:e("a",{href:"",children:"Contacto"})})]})})}function B(){return r("div",{className:"one-container",children:[r("ul",{children:[e("li",{children:e("img",{src:"https://images.unsplash.com/photo-1513710239666-c29e2c09dc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",alt:""})}),e("li",{children:e("img",{src:"https://images.unsplash.com/photo-1585201731775-0597e1be4bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",alt:""})}),e("li",{children:e("img",{src:"https://images.unsplash.com/photo-1551457812-ce1f54d16ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:""})}),e("li",{children:e("img",{src:"https://images.unsplash.com/photo-1619109611242-4a953eb2a215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",alt:""})})]}),r("div",{className:"one-content",children:[r("div",{className:"one-content-labels",children:[e("p",{children:"Especialistas:"}),e("p",{children:"Naves Industriales"}),e("p",{children:"Techos Metalicos"}),e("p",{children:"Estructuras metalicas"}),e("p",{children:"Servicios generales"})]}),e("div",{className:"one-content-form",children:r("form",{children:[e("h2",{children:"SOLICITA TU COTIZACI\xD3N"}),e("input",{type:"text",placeholder:"Nombre"}),e("input",{type:"text",placeholder:"Tel\xE9fonos"}),e("input",{type:"text",placeholder:"Correo"}),e("div",{className:"one-content-button",children:"Solicitar cotizaci\xF3n"})]})})]})]})}const D="https://images.unsplash.com/photo-1513710239666-c29e2c09dc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";function l(){return r("div",{className:"two-flex-item",children:[e("div",{className:"two-overlay"}),e("img",{src:D,alt:""}),e("div",{className:"two-img-title",children:"Nave Industrial"})]})}function I(){return r("div",{className:"",children:[e("p",{className:"two-title",children:"NUESTROS SERVICIOS"}),e("p",{className:"two-subtitle",children:"Suministro, Fabricaci\xF3n y Montaje de Estructuras Met\xE1licas"}),r("div",{className:"two-container",children:[e(l,{}),e(l,{}),e(l,{}),e(l,{}),e(l,{}),e(l,{})]})]})}function E(){return r("div",{children:[e(j,{}),e(H,{}),e(B,{}),e(I,{})]})}N.render(e(g.StrictMode,{children:e(E,{})}),document.getElementById("root"));
