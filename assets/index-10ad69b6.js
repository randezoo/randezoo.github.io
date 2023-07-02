(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();document.addEventListener("popstate",t=>{console.log("updating route",t),r()},!1);const d=`<header><h1><i class="fa-solid fa-paw"></i> Randezoo - Pet Friends</h1></header>  
<main>
  <route><route>
</main>
<nav>
  <a href="/">Home</a>
  <a href="/missing-pets">Missing pets <i class="fa-solid fa-arrow-right"></i></a>
</nav>`,a=`
<h1>Home Page</h1>
<h2>Did you lose your pet?</h2>
<p>We will help you find it</p>
<div>
  <i class="fa-solid fa-person-walking-with-cane"></i>
  <i class="fa-solid fa-comment-dots"></i>
  <i class="fa-solid fa-dog"></i>
</div>
`,u=`
<h1>Missing Pets Page</h1>
`,c={"/":{template:a,title:"Randezoo"},"/missing-pets":{template:u,title:"Missing Pets"}};function r(){var t;document.querySelector("route").innerHTML=((t=c[location.pathname])==null?void 0:t.template)||a}document.body.innerHTML=d;r();function f(t){t.preventDefault(),t.stopPropagation();const i=t.target.pathname;history.pushState({page:c[i].title},"",i),r()}document.querySelectorAll("a").forEach(t=>t.addEventListener("click",f));
