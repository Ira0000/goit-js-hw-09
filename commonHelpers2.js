import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let t={email:"",message:""};const l="feedback_form_state",o=document.querySelector(".feedback-form"),r=document.querySelector('input[name="email"]'),m=document.querySelector('textarea[name="message"]');o.addEventListener("input",s);function s(e){if(e.target.type==="email"){const a=e.target.value;t.email=a}else{const a=e.target.value;t.message=a}localStorage.setItem(l,JSON.stringify(t))}i();function i(){const e=JSON.parse(localStorage.getItem(l));e&&(r.value=e.email,m.value=e.message)}o.addEventListener("click",n);function n(e){e.preventDefault(),e.target.nodeName==="BUTTON"&&(r.value===""||m.value===""?alert("Fill please all fields"):(console.log(t),o.reset(),localStorage.removeItem(l)))}
//# sourceMappingURL=commonHelpers2.js.map