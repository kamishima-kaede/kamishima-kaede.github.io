import{_ as r}from"./app-DAP5m6vZ.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://blog-q5gt9jo8g-kamishima-kaede.vercel.app/"};const o=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-DAP5m6vZ.js").then(t=>t.X),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
