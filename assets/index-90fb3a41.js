(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();document.addEventListener("popstate",n=>{console.log("updating route",n),r()},!1);const d=`<header><h1><i class="fa-solid fa-paw"></i> Randezoo - Pet Friends</h1></header>  
<main>
  <route><route>
</main>
<nav>
</nav>`,u=()=>`
<h1>Home Page</h1>
<h2>Did you lose your pet?</h2>
<p>We will help you find it</p>
<div>
  <i class="fa-solid fa-person-walking-with-cane"></i>
  <i class="fa-solid fa-comment-dots"></i>
  <i class="fa-solid fa-dog"></i>
</div>
`,f=()=>`<h1>Missing Pets Page</h1>
${[{name:"Doggy",photo:"",lastSeen:"Piraeus",missingSince:"10.01.2002"},{name:"Doggy",photo:"",lastSeen:"Piraeus",missingSince:"10.01.2002"},{name:"Doggy",photo:"",lastSeen:"Piraeus",missingSince:"10.01.2002"}].map(t=>`<article>
      <figure><img src="${t.photo}" alt="Photo of ${t.name}"></figure>
      <div>
        <p>${t.name}</p>
        <p>Last seen in ${t.lastSeen}</p>
        <p>Missing since ${t.missingSince}</p>
      </div>
    </article>`).join(`
`)}
`,s={"/":{template:u,title:"Randezoo",nav:'<a href="/missing-pets">Missing pets <i class="fa-solid fa-arrow-right"></i></a>'},"/missing-pets":{template:f,title:"Missing Pets",nav:'<a href="/">Back</a>'}};function r(){var n,o;document.querySelectorAll("a").forEach(t=>t.removeEventListener("click",l)),document.querySelector("route").innerHTML=((n=s[location.pathname])==null?void 0:n.template())||u(),document.querySelector("nav").innerHTML=((o=s[location.pathname])==null?void 0:o.nav)||s["/"].nav,document.querySelectorAll("a").forEach(t=>t.addEventListener("click",l))}document.body.innerHTML=d;r();function l(n){n.preventDefault(),n.stopPropagation();const o=n.target.pathname;history.pushState({page:s[o].title},"",o),r()}
