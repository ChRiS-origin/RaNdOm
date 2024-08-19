import{r as ie,x as pe,s as J,n as P,c as be,i as oe,y as me,e as Ne,o as Se}from"../chunks/scheduler.BJmJcyhA.js";import{m as z,l as N,S as K,i as W,e as m,c as g,a as L,d as f,k as o,g as I,h as v,y as De,z as D,s as R,A as ae,f as H,B as re,C as ee,D as O,n as ge,q as ke,o as Te,E as ze,u as te,v as le,w as se,x as ne,F as Pe,t as Ve,b as Fe,j as Ye}from"../chunks/index.b4Fi85zp.js";import{w as he,a as Be,p as Qe}from"../chunks/entry.BwsCmR6m.js";import{p as Ge}from"../chunks/stores.elGB_Ael.js";function _e(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Je(t,e){z(t,1,1,()=>{e.delete(t.key)})}function Ke(t,e,s,l,n,i,a,c,u,p,h,b){let d=t.length,r=i.length,_=d;const q={};for(;_--;)q[t[_].key]=_;const x=[],C=new Map,$=new Map,k=[];for(_=r;_--;){const T=b(n,i,_),w=s(T);let j=a.get(w);j?k.push(()=>j.p(T,e)):(j=p(w,T),j.c()),C.set(w,x[_]=j),w in q&&$.set(w,Math.abs(_-q[w]))}const M=new Set,y=new Set;function A(T){N(T,1),T.m(c,h),a.set(T.key,T),h=T.first,r--}for(;d&&r;){const T=x[r-1],w=t[d-1],j=T.key,Z=w.key;T===w?(h=T.first,d--,r--):C.has(Z)?!a.has(j)||M.has(j)?A(T):y.has(Z)?d--:$.get(j)>$.get(Z)?(y.add(j),A(T)):(M.add(Z),d--):(u(w,a),d--)}for(;d--;){const T=t[d];C.has(T.key)||u(T,a)}for(;r;)A(x[r-1]);return ie(k),x}const G=he([]),We=t=>{G.update(e=>[...e,{text:t,selected:!0,id:Date.now()}])},ce=t=>{G.update(e=>e.filter(s=>s.id!==t))},Xe=()=>{G.update(t=>t.filter(e=>!e.selected))},Me=t=>{G.update(e=>{for(let s=0;s<e.length;s++)if(e[s].id===t){e[s].selected=!e[s].selected;break}return e})},et=()=>{G.update(t=>{for(let e=0;e<t.length;e++)t[e].selected=!0;return t})},tt=()=>{G.update(t=>{for(let e=0;e<t.length;e++)t[e].selected=!1;return t})},ye=(t,e)=>{G.update(s=>{for(let l=0;l<s.length;l++)if(s[l].id===t){s[l].text=e,s[l].selected=!0;break}return s})},we=he({text:"",selected:!0,id:0}),qe=he([]),de=()=>{let t=he(pe(G));t.update(s=>s.filter(l=>l.selected));let e=pe(t);e.length>0?we.update(()=>e[Math.floor(Math.random()*e.length)]):we.update(()=>e)};function lt(t){let e=t.length,s;for(;e!=0;)s=Math.floor(Math.random()*e),e--,[t[e],t[s]]=[t[s],t[e]];return t}const fe=()=>{let t=he(pe(G));t.update(s=>s.filter(l=>l.selected));let e=pe(t);qe.update(()=>lt([...e]))},Q=()=>{const t=document.getElementById("light-random-icon");Ie(t);const e=document.getElementById("dark-random-icon");Ie(e)},Ie=t=>{t.classList.add("rotate-360"),setTimeout(()=>{t.classList.add("notransition"),t.classList.remove("rotate-360"),t.offsetHeight,t.classList.remove("notransition")},301)};function Oe(t,e,s){const l=t.slice();return l[6]=e[s],l[7]=e,l[8]=s,l}function Ze(t){let e,s='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" class="svelte-1ik8mj9"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z" class="svelte-1ik8mj9"></path></svg> ';return{c(){e=m("li"),e.innerHTML=s,this.h()},l(l){e=g(l,"LI",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-l0oycp"&&(e.innerHTML=s),this.h()},h(){o(e,"class","nothingThere svelte-1ik8mj9")},m(l,n){I(l,e,n)},p:P,d(l){l&&f(e)}}}function Re(t){let e,s,l,n,i,a,c,u,p,h,b,d,r,_,q,x,C='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f5d5d" class="svelte-1ik8mj9"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" class="svelte-1ik8mj9"></path></svg>',$,k,M;function y(){return t[2](t[6])}function A(){t[4].call(r,t[7],t[8])}return{c(){e=m("li"),s=m("input"),i=R(),a=m("label"),c=ae("svg"),u=ae("path"),h=R(),b=m("label"),d=m("form"),r=m("input"),q=R(),x=m("button"),x.innerHTML=C,$=R(),this.h()},l(T){e=g(T,"LI",{class:!0});var w=L(e);s=g(w,"INPUT",{type:!0,id:!0,class:!0}),i=H(w),a=g(w,"LABEL",{class:!0,for:!0});var j=L(a);c=re(j,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0,class:!0});var Z=L(c);u=re(Z,"path",{d:!0,class:!0}),L(u).forEach(f),Z.forEach(f),j.forEach(f),h=H(w),b=g(w,"LABEL",{for:!0,class:!0});var Y=L(b);d=g(Y,"FORM",{class:!0});var F=L(d);r=g(F,"INPUT",{id:!0,type:!0,autocomplete:!0,class:!0}),F.forEach(f),Y.forEach(f),q=H(w),x=g(w,"BUTTON",{class:!0,"data-svelte-h":!0}),D(x)!=="svelte-gyzbg7"&&(x.innerHTML=C),$=H(w),w.forEach(f),this.h()},h(){o(s,"type","checkbox"),o(s,"id",l="option-"+t[6].id),s.checked=n=t[6].selected,o(s,"class","svelte-1ik8mj9"),o(u,"d","M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"),o(u,"class","svelte-1ik8mj9"),o(c,"xmlns","http://www.w3.org/2000/svg"),o(c,"height","24px"),o(c,"viewBox","0 -960 960 960"),o(c,"width","24px"),o(c,"fill","transparent"),o(c,"class","svelte-1ik8mj9"),o(a,"class","custom-checkbox svelte-1ik8mj9"),o(a,"for",p="option-"+t[6].id),o(r,"id","optionInput"),o(r,"type","text"),o(r,"autocomplete","off"),o(r,"class","svelte-1ik8mj9"),o(d,"class","overflow-auto svelte-1ik8mj9"),o(b,"for",_="option-"+t[6].id),o(b,"class","optionText svelte-1ik8mj9"),o(x,"class","deleteButton svelte-1ik8mj9"),o(e,"class","option svelte-1ik8mj9")},m(T,w){I(T,e,w),v(e,s),v(e,i),v(e,a),v(a,c),v(c,u),v(e,h),v(e,b),v(b,d),v(d,r),ee(r,t[6].text),v(e,q),v(e,x),v(e,$),k||(M=[O(s,"change",y),O(s,"click",t[3]),O(r,"input",A),O(r,"click",function(){oe(t[1](t[6].id,t[6].text))&&t[1](t[6].id,t[6].text).apply(this,arguments)}),O(x,"click",function(){oe(ce(t[6].id))&&ce(t[6].id).apply(this,arguments)}),O(x,"click",t[5])],k=!0)},p(T,w){t=T,w&1&&l!==(l="option-"+t[6].id)&&o(s,"id",l),w&1&&n!==(n=t[6].selected)&&(s.checked=n),w&1&&p!==(p="option-"+t[6].id)&&o(a,"for",p),w&1&&r.value!==t[6].text&&ee(r,t[6].text),w&1&&_!==(_="option-"+t[6].id)&&o(b,"for",_)},d(T){T&&f(e),k=!1,ie(M)}}}function st(t){let e,s,l=_e(t[0]),n=[];for(let a=0;a<l.length;a+=1)n[a]=Re(Oe(t,l,a));let i=null;return l.length||(i=Ze()),{c(){e=m("div"),s=m("ul");for(let a=0;a<n.length;a+=1)n[a].c();i&&i.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var c=L(e);s=g(c,"UL",{id:!0,class:!0});var u=L(s);for(let p=0;p<n.length;p+=1)n[p].l(u);i&&i.l(u),u.forEach(f),c.forEach(f),this.h()},h(){o(s,"id","optionList"),o(s,"class","optionList w-full svelte-1ik8mj9"),o(e,"class","overflow-auto svelte-1ik8mj9")},m(a,c){I(a,e,c),v(e,s);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(s,null);i&&i.m(s,null)},p(a,[c]){if(c&3){l=_e(a[0]);let u;for(u=0;u<l.length;u+=1){const p=Oe(a,l,u);n[u]?n[u].p(p,c):(n[u]=Re(p),n[u].c(),n[u].m(s,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=l.length,!l.length&&i?i.p(a,c):l.length?i&&(i.d(1),i=null):(i=Ze(),i.c(),i.m(s,null))}},i:P,o:P,d(a){a&&f(e),De(n,a),i&&i.d()}}}function nt(t,e,s){let l;be(t,qe,p=>s(0,l=p));const n=(p,h)=>{h!==""&&(ye(p,h),console.log("stored resultSelection:",h)),setTimeout(Q)},i=p=>Me(p.id),a=()=>{fe(),Q()};function c(p,h){p[h].text=this.value,qe.set(l)}return[l,n,i,a,c,()=>{fe(),Q()}]}class it extends K{constructor(e){super(),W(this,e,nt,st,J,{})}}function ot(t){let e,s='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" class="svelte-13pe803"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z" class="svelte-13pe803"></path></svg>';return{c(){e=m("li"),e.innerHTML=s,this.h()},l(l){e=g(l,"LI",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-z3578p"&&(e.innerHTML=s),this.h()},h(){o(e,"class","nothingThere svelte-13pe803")},m(l,n){I(l,e,n)},p:P,d(l){l&&f(e)}}}function at(t){let e,s,l,n,i,a,c,u,p,h,b,d,r,_,q,x='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f5d5d" class="svelte-13pe803"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" class="svelte-13pe803"></path></svg>',C,$;return{c(){e=m("input"),n=R(),i=m("label"),a=ae("svg"),c=ae("path"),p=R(),h=m("label"),b=m("form"),d=m("input"),_=R(),q=m("button"),q.innerHTML=x,this.h()},l(k){e=g(k,"INPUT",{type:!0,id:!0,class:!0}),n=H(k),i=g(k,"LABEL",{class:!0,for:!0});var M=L(i);a=re(M,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0,class:!0});var y=L(a);c=re(y,"path",{d:!0,class:!0}),L(c).forEach(f),y.forEach(f),M.forEach(f),p=H(k),h=g(k,"LABEL",{for:!0,class:!0});var A=L(h);b=g(A,"FORM",{class:!0});var T=L(b);d=g(T,"INPUT",{id:!0,type:!0,autocomplete:!0,class:!0}),T.forEach(f),A.forEach(f),_=H(k),q=g(k,"BUTTON",{class:!0,"data-svelte-h":!0}),D(q)!=="svelte-1amzb5l"&&(q.innerHTML=x),this.h()},h(){o(e,"type","checkbox"),o(e,"id",s="option-"+t[0].id),e.checked=l=t[0].selected,o(e,"class","svelte-13pe803"),o(c,"d","M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"),o(c,"class","svelte-13pe803"),o(a,"xmlns","http://www.w3.org/2000/svg"),o(a,"height","24px"),o(a,"viewBox","0 -960 960 960"),o(a,"width","24px"),o(a,"fill","transparent"),o(a,"class","svelte-13pe803"),o(i,"class","custom-checkbox svelte-13pe803"),o(i,"for",u="option-"+t[0].id),o(d,"id","optionInput"),o(d,"type","text"),o(d,"autocomplete","off"),o(d,"class","svelte-13pe803"),o(b,"class","overflow-auto svelte-13pe803"),o(h,"for",r="option-"+t[0].id),o(h,"class","optionText svelte-13pe803"),o(q,"class","deleteButton svelte-13pe803")},m(k,M){I(k,e,M),I(k,n,M),I(k,i,M),v(i,a),v(a,c),I(k,p,M),I(k,h,M),v(h,b),v(b,d),ee(d,t[0].text),I(k,_,M),I(k,q,M),C||($=[O(e,"change",t[2]),O(e,"click",t[3]),O(d,"input",t[4]),O(d,"click",function(){oe(t[1](t[0].id,t[0].text))&&t[1](t[0].id,t[0].text).apply(this,arguments)}),O(q,"click",function(){oe(ce(t[0].id))&&ce(t[0].id).apply(this,arguments)}),O(q,"click",t[5])],C=!0)},p(k,M){t=k,M&1&&s!==(s="option-"+t[0].id)&&o(e,"id",s),M&1&&l!==(l=t[0].selected)&&(e.checked=l),M&1&&u!==(u="option-"+t[0].id)&&o(i,"for",u),M&1&&d.value!==t[0].text&&ee(d,t[0].text),M&1&&r!==(r="option-"+t[0].id)&&o(h,"for",r)},d(k){k&&(f(e),f(n),f(i),f(p),f(h),f(_),f(q)),C=!1,ie($)}}}function rt(t){let e;function s(i,a){return i[0].selected?at:ot}let l=s(t),n=l(t);return{c(){e=m("li"),n.c(),this.h()},l(i){e=g(i,"LI",{class:!0});var a=L(e);n.l(a),a.forEach(f),this.h()},h(){o(e,"class","option svelte-13pe803")},m(i,a){I(i,e,a),n.m(e,null)},p(i,[a]){l===(l=s(i))&&n?n.p(i,a):(n.d(1),n=l(i),n&&(n.c(),n.m(e,null)))},i:P,o:P,d(i){i&&f(e),n.d()}}}function ct(t,e,s){let l;be(t,we,p=>s(0,l=p));const n=(p,h)=>{h!==""&&(ye(p,h),console.log("stored resultSelection:",h)),setTimeout(Q)},i=()=>Me(l.id),a=()=>{de(),Q()};function c(){l.text=this.value,we.set(l)}return[l,n,i,a,c,()=>{de(),Q()}]}class ut extends K{constructor(e){super(),W(this,e,ct,rt,J,{})}}function He(t){let e,s,l,n,i,a='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>',c,u,p="»Your result«",h,b,d,r='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M314-115q-104-48-169-145T80-479q0-26 2.5-51t8.5-49l-46 27-40-69 191-110 110 190-70 40-54-94q-11 27-16.5 56t-5.5 60q0 97 53 176.5T354-185l-40 70Zm306-485v-80h109q-46-57-111-88.5T480-800q-55 0-104 17t-90 48l-40-70q50-35 109-55t125-20q79 0 151 29.5T760-765v-55h80v220H620ZM594 0 403-110l110-190 69 40-57 98q118-17 196.5-107T800-480q0-11-.5-20.5T797-520h81q1 10 1.5 19.5t.5 20.5q0 135-80.5 241.5T590-95l44 26-40 69Z"></path></svg>',_,q,x,C,$,k,M,y,A;const T=[ht,ft,dt],w=[];function j(Z,Y){return Z[1]==="Random"?0:Z[1]==="Random-list"?1:2}return $=j(t),k=w[$]=T[$](t),{c(){e=m("div"),s=m("div"),l=m("ul"),n=m("li"),i=m("button"),i.innerHTML=a,c=R(),u=m("li"),u.textContent=p,h=R(),b=m("li"),d=m("button"),d.innerHTML=r,_=R(),q=m("div"),x=m("ul"),C=m("li"),k.c(),this.h()},l(Z){e=g(Z,"DIV",{class:!0});var Y=L(e);s=g(Y,"DIV",{class:!0});var F=L(s);l=g(F,"UL",{class:!0});var V=L(l);n=g(V,"LI",{class:!0});var ue=L(n);i=g(ue,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),D(i)!=="svelte-17kfowq"&&(i.innerHTML=a),ue.forEach(f),c=H(V),u=g(V,"LI",{class:!0,"data-svelte-h":!0}),D(u)!=="svelte-1ul8bu0"&&(u.textContent=p),h=H(V),b=g(V,"LI",{class:!0});var U=L(b);d=g(U,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),D(d)!=="svelte-137k863"&&(d.innerHTML=r),U.forEach(f),V.forEach(f),_=H(F),q=g(F,"DIV",{class:!0});var E=L(q);x=g(E,"UL",{class:!0});var B=L(x);C=g(B,"LI",{class:!0});var S=L(C);k.l(S),S.forEach(f),B.forEach(f),E.forEach(f),F.forEach(f),Y.forEach(f),this.h()},h(){o(i,"id","close"),o(i,"class","OverlayButton closeOverlay svelte-x5f8b"),o(n,"class","flex-item svelte-x5f8b"),o(u,"class","flex-item svelte-x5f8b"),o(d,"id","again"),o(d,"class","OverlayButton again svelte-x5f8b"),o(b,"class","flex-item svelte-x5f8b"),o(l,"class","flex-container svelte-x5f8b"),o(C,"class","flex-itemList svelte-x5f8b"),o(x,"class","flex-container svelte-x5f8b"),o(q,"class","space svelte-x5f8b"),o(s,"class","overlay svelte-x5f8b"),o(e,"class","backdrop svelte-x5f8b")},m(Z,Y){I(Z,e,Y),v(e,s),v(s,l),v(l,n),v(n,i),v(l,c),v(l,u),v(l,h),v(l,b),v(b,d),v(s,_),v(s,q),v(q,x),v(x,C),w[$].m(C,null),M=!0,y||(A=[O(i,"click",t[3]),O(d,"click",t[4]),O(e,"click",ze(t[2]))],y=!0)},p(Z,Y){let F=$;$=j(Z),$!==F&&(ke(),z(w[F],1,1,()=>{w[F]=null}),Te(),k=w[$],k||(k=w[$]=T[$](Z),k.c()),N(k,1),k.m(C,null))},i(Z){M||(N(k),M=!0)},o(Z){z(k),M=!1},d(Z){Z&&f(e),w[$].d(),y=!1,ie(A)}}}function dt(t){let e,s="Error: specified content not found";return{c(){e=m("span"),e.textContent=s},l(l){e=g(l,"SPAN",{"data-svelte-h":!0}),D(e)!=="svelte-7do2ac"&&(e.textContent=s)},m(l,n){I(l,e,n)},i:P,o:P,d(l){l&&f(e)}}}function ft(t){let e,s;return e=new it({}),{c(){te(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,n){se(e,l,n),s=!0},i(l){s||(N(e.$$.fragment,l),s=!0)},o(l){z(e.$$.fragment,l),s=!1},d(l){ne(e,l)}}}function ht(t){let e,s;return e=new ut({}),{c(){te(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,n){se(e,l,n),s=!0},i(l){s||(N(e.$$.fragment,l),s=!0)},o(l){z(e.$$.fragment,l),s=!1},d(l){ne(e,l)}}}function vt(t){let e,s,l=t[0]&&He(t);return{c(){l&&l.c(),e=ge()},l(n){l&&l.l(n),e=ge()},m(n,i){l&&l.m(n,i),I(n,e,i),s=!0},p(n,[i]){n[0]?l?(l.p(n,i),i&1&&N(l,1)):(l=He(n),l.c(),N(l,1),l.m(e.parentNode,e)):l&&(ke(),z(l,1,1,()=>{l=null}),Te())},i(n){s||(N(l),s=!0)},o(n){z(l),s=!1},d(n){n&&f(e),l&&l.d(n)}}}function pt(t,e,s){let{showOverlay:l=!1}=e,{RandMode:n}=e;function i(u){me.call(this,t,u)}function a(u){me.call(this,t,u)}const c=()=>{n==="Random"?de():fe(),Q()};return t.$$set=u=>{"showOverlay"in u&&s(0,l=u.showOverlay),"RandMode"in u&&s(1,n=u.RandMode)},[l,n,i,a,c]}class mt extends K{constructor(e){super(),W(this,e,pt,vt,J,{showOverlay:0,RandMode:1})}}function gt(t){let e,s,l,n,i,a,c,u,p,h,b,d,r,_,q,x,C='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f5d5d" class="svelte-gy2sh0"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" class="svelte-gy2sh0"></path></svg>',$,k;return{c(){e=m("li"),s=m("input"),i=R(),a=m("label"),c=ae("svg"),u=ae("path"),h=R(),b=m("label"),d=m("form"),r=m("input"),q=R(),x=m("button"),x.innerHTML=C,this.h()},l(M){e=g(M,"LI",{class:!0});var y=L(e);s=g(y,"INPUT",{type:!0,id:!0,class:!0}),i=H(y),a=g(y,"LABEL",{class:!0,for:!0});var A=L(a);c=re(A,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0,class:!0});var T=L(c);u=re(T,"path",{d:!0,class:!0}),L(u).forEach(f),T.forEach(f),A.forEach(f),h=H(y),b=g(y,"LABEL",{for:!0,class:!0});var w=L(b);d=g(w,"FORM",{class:!0});var j=L(d);r=g(j,"INPUT",{id:!0,type:!0,autocomplete:!0,class:!0}),j.forEach(f),w.forEach(f),q=H(y),x=g(y,"BUTTON",{class:!0,"data-svelte-h":!0}),D(x)!=="svelte-gfzp3s"&&(x.innerHTML=C),y.forEach(f),this.h()},h(){o(s,"type","checkbox"),o(s,"id",l="option-"+t[0].id),s.checked=n=t[0].selected,o(s,"class","svelte-gy2sh0"),o(u,"d","M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"),o(u,"class","svelte-gy2sh0"),o(c,"xmlns","http://www.w3.org/2000/svg"),o(c,"height","24px"),o(c,"viewBox","0 -960 960 960"),o(c,"width","24px"),o(c,"fill","transparent"),o(c,"class","svelte-gy2sh0"),o(a,"class","custom-checkbox svelte-gy2sh0"),o(a,"for",p="option-"+t[0].id),o(r,"id","optionInput"),o(r,"type","text"),o(r,"autocomplete","off"),o(r,"class","svelte-gy2sh0"),o(d,"class","overflow-auto svelte-gy2sh0"),o(b,"for",_="option-"+t[0].id),o(b,"class","optionText svelte-gy2sh0"),o(x,"class","deleteButton svelte-gy2sh0"),o(e,"class","option svelte-gy2sh0")},m(M,y){I(M,e,y),v(e,s),v(e,i),v(e,a),v(a,c),v(c,u),v(e,h),v(e,b),v(b,d),v(d,r),ee(r,t[0].text),v(e,q),v(e,x),$||(k=[O(s,"change",t[3]),O(r,"input",t[4]),O(r,"click",function(){oe(t[1](t[0].id,t[0].text))&&t[1](t[0].id,t[0].text).apply(this,arguments)}),O(x,"click",function(){oe(ce(t[0].id))&&ce(t[0].id).apply(this,arguments)})],$=!0)},p(M,[y]){t=M,y&1&&l!==(l="option-"+t[0].id)&&o(s,"id",l),y&1&&n!==(n=t[0].selected)&&(s.checked=n),y&1&&p!==(p="option-"+t[0].id)&&o(a,"for",p),y&1&&r.value!==t[0].text&&ee(r,t[0].text),y&1&&_!==(_="option-"+t[0].id)&&o(b,"for",_)},i:P,o:P,d(M){M&&f(e),$=!1,ie(k)}}}function _t(t,e,s){let{option:l}=e;const n=null,i=(u,p)=>{p!==""&&(ye(u,p),console.log("stored option:",p)),setTimeout(Q)},a=()=>Me(l.id);function c(){l.text=this.value,s(0,l)}return t.$$set=u=>{"option"in u&&s(0,l=u.option)},[l,i,n,a,c]}class wt extends K{constructor(e){super(),W(this,e,_t,gt,J,{option:0,optionIndex:2})}get optionIndex(){return this.$$.ctx[2]}}function Ce(t,e,s){const l=t.slice();return l[10]=e[s],l[12]=s,l}function je(t){let e,s='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"></path></svg> ';return{c(){e=m("li"),e.innerHTML=s,this.h()},l(l){e=g(l,"LI",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-6jbqjq"&&(e.innerHTML=s),this.h()},h(){o(e,"class","nothingThere svelte-14nb11k")},m(l,n){I(l,e,n)},p:P,d(l){l&&f(e)}}}function Ae(t,e){let s,l,n;return l=new wt({props:{option:e[10],optionIndex:e[12]}}),{key:t,first:null,c(){s=ge(),te(l.$$.fragment),this.h()},l(i){s=ge(),le(l.$$.fragment,i),this.h()},h(){this.first=s},m(i,a){I(i,s,a),se(l,i,a),n=!0},p(i,a){e=i;const c={};a&8&&(c.option=e[10]),a&8&&(c.optionIndex=e[12]),l.$set(c)},i(i){n||(N(l.$$.fragment,i),n=!0)},o(i){z(l.$$.fragment,i),n=!1},d(i){i&&f(s),ne(l,i)}}}function bt(t){let e,s,l,n,i,a,c="ADD",u,p,h,b,d,r,_='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent" class="svelte-14nb11k"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>',q,x,C="select all",$,k,M='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f5d5d" class="svelte-14nb11k"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"></path></svg>',y,A,T,w=[],j=new Map,Z,Y,F,V=_e(t[3]);const ue=E=>E[10].id;for(let E=0;E<V.length;E+=1){let B=Ce(t,V,E),S=ue(B);j.set(S,w[E]=Ae(S,B))}let U=null;return V.length||(U=je()),{c(){e=m("bodyOptions"),s=m("div"),l=m("form"),n=m("input"),i=R(),a=m("button"),a.textContent=c,u=R(),p=m("ul"),h=m("li"),b=m("input"),d=R(),r=m("label"),r.innerHTML=_,q=R(),x=m("label"),x.textContent=C,$=R(),k=m("button"),k.innerHTML=M,y=R(),A=m("div"),T=m("ul");for(let E=0;E<w.length;E+=1)w[E].c();U&&U.c(),this.h()},l(E){e=g(E,"BODYOPTIONS",{class:!0});var B=L(e);s=g(B,"DIV",{class:!0});var S=L(s);l=g(S,"FORM",{class:!0});var ve=L(l);n=g(ve,"INPUT",{id:!0,type:!0,placeholder:!0,autocomplete:!0,class:!0}),i=H(ve),a=g(ve,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),D(a)!=="svelte-22doa8"&&(a.textContent=c),ve.forEach(f),u=H(S),p=g(S,"UL",{id:!0});var $e=L(p);h=g($e,"LI",{class:!0});var X=L(h);b=g(X,"INPUT",{type:!0,id:!0,class:!0}),d=H(X),r=g(X,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),D(r)!=="svelte-d7c4sm"&&(r.innerHTML=_),q=H(X),x=g(X,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),D(x)!=="svelte-viz4dz"&&(x.textContent=C),$=H(X),k=g(X,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),D(k)!=="svelte-8v6b2u"&&(k.innerHTML=M),X.forEach(f),$e.forEach(f),y=H(S),A=g(S,"DIV",{class:!0});var Ee=L(A);T=g(Ee,"UL",{id:!0,class:!0});var xe=L(T);for(let Le=0;Le<w.length;Le+=1)w[Le].l(xe);U&&U.l(xe),xe.forEach(f),Ee.forEach(f),S.forEach(f),B.forEach(f),this.h()},h(){o(n,"id","optionInput"),o(n,"type","text"),o(n,"placeholder","type in your option…"),o(n,"autocomplete","off"),o(n,"class","svelte-14nb11k"),o(a,"id","addButton"),o(a,"class","svelte-14nb11k"),o(l,"class","svelte-14nb11k"),o(b,"type","checkbox"),o(b,"id","selectAll"),o(b,"class","svelte-14nb11k"),o(r,"class","custom-checkbox svelte-14nb11k"),o(r,"for","selectAll"),o(x,"for","selectAll"),o(x,"class","optionHeadText svelte-14nb11k"),o(k,"id","deleteAllButton"),o(k,"class","deleteButton svelte-14nb11k"),o(h,"class","optionHead svelte-14nb11k"),o(p,"id","optionListHead"),o(T,"id","optionList"),o(T,"class","overflow-auto w-full"),o(A,"class","overflow-auto"),o(s,"class","wrapper overflow-auto svelte-14nb11k"),o(e,"class","svelte-14nb11k")},m(E,B){I(E,e,B),v(e,s),v(s,l),v(l,n),ee(n,t[1]),t[6](n),v(l,i),v(l,a),v(s,u),v(s,p),v(p,h),v(h,b),b.checked=t[0],v(h,d),v(h,r),v(h,q),v(h,x),v(h,$),v(h,k),v(s,y),v(s,A),v(A,T);for(let S=0;S<w.length;S+=1)w[S]&&w[S].m(T,null);U&&U.m(T,null),Z=!0,Y||(F=[O(n,"input",t[5]),O(l,"submit",Pe(t[7])),O(b,"change",t[8]),O(b,"change",t[9]),O(k,"click",Xe)],Y=!0)},p(E,[B]){B&2&&n.value!==E[1]&&ee(n,E[1]),B&1&&(b.checked=E[0]),B&8&&(V=_e(E[3]),ke(),w=Ke(w,B,ue,1,E,V,j,T,Je,Ae,null,Ce),Te(),!V.length&&U?U.p(E,B):V.length?U&&(U.d(1),U=null):(U=je(),U.c(),U.m(T,null)))},i(E){if(!Z){for(let B=0;B<V.length;B+=1)N(w[B]);Z=!0}},o(E){for(let B=0;B<w.length;B+=1)z(w[B]);Z=!1},d(E){E&&f(e),t[6](null);for(let B=0;B<w.length;B+=1)w[B].d();U&&U.d(),Y=!1,ie(F)}}}function kt(t,e,s){let l;be(t,G,r=>s(3,l=r));let n=!0,i="",a;const c=r=>{r!==""&&(We(r),console.log("stored option:",r),r="",s(2,a.value="",a),a.focus()),setTimeout(Q)};G.subscribe(r=>{for(let _=0;_<r.length;_++)if(!r[_].selected)return s(0,n=!1),r;return r.length>0?s(0,n=!0):s(0,n=!1),r});function u(){i=this.value,s(1,i)}function p(r){Ne[r?"unshift":"push"](()=>{a=r,s(2,a)})}const h=()=>{Q(),c(i)};function b(){n=this.checked,s(0,n)}return[n,i,a,l,c,u,p,h,b,()=>{n?et():tt()}]}class Tt extends K{constructor(e){super(),W(this,e,kt,bt,J,{})}}function xt(t){let e,s,l,n='<svg class="moon svelte-lnzbed" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z"></path></svg> <svg class="sun svelte-lnzbed" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"></path></svg>',i,a;return{c(){e=m("input"),s=R(),l=m("label"),l.innerHTML=n,this.h()},l(c){e=g(c,"INPUT",{type:!0,id:!0,class:!0}),s=H(c),l=g(c,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),D(l)!=="svelte-1d41uc2"&&(l.innerHTML=n),this.h()},h(){o(e,"type","checkbox"),o(e,"id","darkmode-toggle"),o(e,"class","svelte-lnzbed"),o(l,"for","darkmode-toggle"),o(l,"class","svelte-lnzbed")},m(c,u){I(c,e,u),I(c,s,u),I(c,l,u),i||(a=O(e,"click",Lt),i=!0)},p:P,i:P,o:P,d(c){c&&(f(e),f(s),f(l)),i=!1,a()}}}function Lt(){var t,e;window.document.body.classList.toggle("dark-mode"),(t=window.document.getElementById("dark-random-icon"))==null||t.toggleAttribute("hidden"),(e=window.document.getElementById("light-random-icon"))==null||e.toggleAttribute("hidden")}class qt extends K{constructor(e){super(),W(this,e,null,xt,J,{})}}function Mt(t){let e,s,l,n;return{c(){e=m("button"),s=Ve(t[0]),this.h()},l(i){e=g(i,"BUTTON",{class:!0});var a=L(e);s=Fe(a,t[0]),a.forEach(f),this.h()},h(){o(e,"class","button svelte-1m1crkz")},m(i,a){I(i,e,a),v(e,s),l||(n=[O(e,"click",t[1]),O(e,"click",Q)],l=!0)},p(i,[a]){a&1&&Ye(s,i[0])},i:P,o:P,d(i){i&&f(e),l=!1,ie(n)}}}function yt(t,e,s){let{RandMode:l="Random"}=e;function n(i){me.call(this,t,i)}return t.$$set=i=>{"RandMode"in i&&s(0,l=i.RandMode)},[l,n]}class $t extends K{constructor(e){super(),W(this,e,yt,Mt,J,{RandMode:0})}}function Et(t){let e,s,l,n=`<img id="light-random-icon" class="transition ease-in-out duration-300 svelte-jok5iw" src="${Be}/silverbutton-rand.png" alt="Random"/> <img id="dark-random-icon" class="transition ease-in-out duration-300 svelte-jok5iw" src="${Be}/button-rand.png" alt="Random"/>`,i,a,c,u,p,h,b;return c=new $t({props:{RandMode:t[0]}}),c.$on("click",t[1]),h=new qt({}),{c(){e=m("nav"),s=m("ul"),l=m("li"),l.innerHTML=n,i=R(),a=m("li"),te(c.$$.fragment),u=R(),p=m("li"),te(h.$$.fragment),this.h()},l(d){e=g(d,"NAV",{class:!0});var r=L(e);s=g(r,"UL",{class:!0});var _=L(s);l=g(_,"LI",{class:!0,"data-svelte-h":!0}),D(l)!=="svelte-ripeih"&&(l.innerHTML=n),i=H(_),a=g(_,"LI",{class:!0});var q=L(a);le(c.$$.fragment,q),q.forEach(f),u=H(_),p=g(_,"LI",{class:!0});var x=L(p);le(h.$$.fragment,x),x.forEach(f),_.forEach(f),r.forEach(f),this.h()},h(){o(l,"class","flex-item svelte-jok5iw"),o(a,"class","flex-item button svelte-jok5iw"),o(p,"class","flex-item svelte-jok5iw"),o(s,"class","flex-container svelte-jok5iw"),o(e,"class","svelte-jok5iw")},m(d,r){I(d,e,r),v(e,s),v(s,l),v(s,i),v(s,a),se(c,a,null),v(s,u),v(s,p),se(h,p,null),b=!0},p(d,[r]){const _={};r&1&&(_.RandMode=d[0]),c.$set(_)},i(d){b||(N(c.$$.fragment,d),N(h.$$.fragment,d),b=!0)},o(d){z(c.$$.fragment,d),z(h.$$.fragment,d),b=!1},d(d){d&&f(e),ne(c),ne(h)}}}function Bt(t,e,s){Se(()=>{var i;(i=window.document.getElementById("dark-random-icon"))==null||i.toggleAttribute("hidden")});let{RandMode:l}=e;function n(i){me.call(this,t,i)}return t.$$set=i=>{"RandMode"in i&&s(0,l=i.RandMode)},[l,n]}class It extends K{constructor(e){super(),W(this,e,Bt,Et,J,{RandMode:0})}}function Ue(t){let e,s;return e=new mt({props:{showOverlay:t[0],RandMode:t[1]}}),e.$on("click",t[3]),{c(){te(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,n){se(e,l,n),s=!0},p(l,n){const i={};n&1&&(i.showOverlay=l[0]),n&2&&(i.RandMode=l[1]),e.$set(i)},i(l){s||(N(e.$$.fragment,l),s=!0)},o(l){z(e.$$.fragment,l),s=!1},d(l){ne(e,l)}}}function Ot(t){let e,s,l,n,i,a,c,u="R@ŊðØm",p,h,b;e=new It({props:{RandMode:t[1]}}),e.$on("click",t[5]);let d=t[2].state.showOverlay&&Ue(t);return n=new Tt({}),{c(){te(e.$$.fragment),s=R(),d&&d.c(),l=R(),te(n.$$.fragment),i=R(),a=m("div"),c=m("button"),c.textContent=u,this.h()},l(r){le(e.$$.fragment,r),s=H(r),d&&d.l(r),l=H(r),le(n.$$.fragment,r),i=H(r),a=g(r,"DIV",{class:!0});var _=L(a);c=g(_,"BUTTON",{class:!0,"data-svelte-h":!0}),D(c)!=="svelte-tmddjw"&&(c.textContent=u),_.forEach(f),this.h()},h(){o(c,"class","button svelte-18tysxq"),o(a,"class","svelte-18tysxq")},m(r,_){se(e,r,_),I(r,s,_),d&&d.m(r,_),I(r,l,_),se(n,r,_),I(r,i,_),I(r,a,_),v(a,c),p=!0,h||(b=O(c,"click",t[6]),h=!0)},p(r,[_]){const q={};_&2&&(q.RandMode=r[1]),e.$set(q),r[2].state.showOverlay?d?(d.p(r,_),_&4&&N(d,1)):(d=Ue(r),d.c(),N(d,1),d.m(l.parentNode,l)):d&&(ke(),z(d,1,1,()=>{d=null}),Te())},i(r){p||(N(e.$$.fragment,r),N(d),N(n.$$.fragment,r),p=!0)},o(r){z(e.$$.fragment,r),z(d),z(n.$$.fragment,r),p=!1},d(r){r&&(f(s),f(l),f(i),f(a)),ne(e,r),d&&d.d(r),ne(n,r),h=!1,b()}}}function Zt(t,e,s){let l;be(t,Ge,h=>s(2,l=h));let{showOverlay:n=!1}=e;const i=()=>{s(0,n=!n),Qe("",{showOverlay:{showOverlay:n}}),n||history.back()};let a="Random";const c=()=>{a==="Random"?s(1,a="Random-list"):s(1,a="Random")},u=()=>{a==="Random"?de():fe(),Q(),c()},p=()=>{a==="Random"?de():fe(),Q(),i()};return t.$$set=h=>{"showOverlay"in h&&s(0,n=h.showOverlay)},[n,a,l,i,c,u,p]}class At extends K{constructor(e){super(),W(this,e,Zt,Ot,J,{showOverlay:0})}}export{At as component};
