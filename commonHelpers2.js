import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");function a(t){t.preventDefault(),console.log(t.target.state.value);const o=t.target.delay.value;console.log(o),new Promise((e,r)=>{setTimeout(()=>{t.target.state.value==="fulfilled"?e(`Fulfilled promise in ${o}ms`):r(`Rejected promise in ${o}ms`)},o)}).then(e=>{i.success({title:"OK",message:e,position:"topRight",backgroundColor:"#59a10d",theme:"dark",transitionIn:"fadeInRight"})}).catch(e=>{i.error({title:"Error",message:e,position:"topRight",backgroundColor:"#ef4040",theme:"dark",transitionIn:"fadeInRight"})})}s.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map
