import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),r="feedback-form-state";let t=JSON.parse(localStorage.getItem(r))??{};try{e.elements.email.value=t.email??"",e.elements.message.value=t.message??""}catch(a){console.error(a.message)}e.addEventListener("input",()=>{new FormData(e).forEach((o,s)=>t[s]=o.trim()),localStorage.setItem(r,JSON.stringify(t))});e.addEventListener("submit",a=>{a.preventDefault(),e.elements.email.value&&e.elements.message.value?(console.log(t),localStorage.removeItem(r),t={}):alert("Please, fill in the form!"),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
