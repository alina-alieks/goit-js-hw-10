import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import"./assets/vendor-77e16229.js";const s=document.querySelector(".form");function r(o){o.preventDefault(),console.log(o.target.state.value);const t=o.target.delay.value;console.log(t),new Promise((e,l)=>{setTimeout(()=>{o.target.state.value==="fulfilled"?e(`Fulfilled promise in ${t}ms`):l(`Rejected promise in ${t}ms`)},t)}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}s.addEventListener("submit",r);
//# sourceMappingURL=commonHelpers2.js.map
