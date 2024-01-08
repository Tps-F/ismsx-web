"use strict";(self.webpackChunkisshin=self.webpackChunkisshin||[]).push([[775],{5811:function(e,t,r){var a=r(7294),n=r(7896),l=r(4160);t.Z=e=>{let{colors:t=[]}=e;const r=(0,n.useLocation)().pathname.replace(/\//g,"");return a.createElement(a.Fragment,null,a.createElement("div",{className:"px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"},a.createElement("div",{className:`mb-4 tracking-widest ${t[0]||"text-works"} text-right text-xl`},a.createElement(l.rU,{to:""===r?"works":"/works",className:""+(r.includes("works")?"bg-textbg":"")},"works")),a.createElement("div",{className:`mb-4 tracking-widest ${t[1]||"text-about"} text-right text-xl`},a.createElement(l.rU,{to:""===r?"about":"/about",className:""+(r.includes("about")?"bg-textbg":"")},"about")),a.createElement("div",{className:`mb-4 tracking-widest ${t[2]||"text-primary"} text-right text-xl`},a.createElement("a",null,"contact"))))}},1411:function(e,t,r){r.r(t),r.d(t,{Head:function(){return i},default:function(){return c}});var a=r(7294),n=r(5865),l=r(5313);var o=()=>{const{0:e,1:t}=(0,a.useState)([]),{0:r,1:o}=(0,a.useState)(null),{0:s,1:c}=(0,a.useState)(12);(0,a.useEffect)((()=>{(async()=>{try{const{getWorks:e}=(0,n.F)(),r=await e();t(r.sort(l.d).sort(l.q)),console.log(r)}catch(e){console.error("Error fetching works:",e.message)}})()}),[]),(0,a.useEffect)((()=>{const e=()=>{window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&c((e=>e+12))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);return a.createElement("div",null,a.createElement("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 "+(r?"opacity-10 pointer-events-none":"")},e.slice(0,s).map((e=>a.createElement("div",{key:e.id,className:"relative"},a.createElement("div",{onClick:()=>(e=>{o(e)})(e),className:"group block w-full overflow-hidden bg-gray-100 relative aspect-video"},a.createElement("img",{src:`/ismsx-web/${e.image[0]}.avif`,alt:e.name,className:"h-full w-full object-cover object-center transition duration-200"}),a.createElement("span",{className:"hover:backdrop-brightness-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col text-white opacity-0 transition-opacity duration-200 hover:opacity-100 p-4"},a.createElement("span",{className:"text-secondary"},e.date.split("-").slice(0,2).join("-")),a.createElement("a",{href:e.url,className:"text-lg text-secondary transition duration-100 hover:text-gray-500 lg:text-xl"},e.name))))))),r&&a.createElement("div",{onClick:()=>{o(null)},className:"fixed top-8 left-0 w-full h-full bg-secondary py-2 lg:py-2 font-caviardreams"},a.createElement("div",{className:"mx-auto max-w-screen-lg px-4 md:px-8 "},a.createElement("br",null),a.createElement("div",{className:"relative mb-6 overflow-hidden rounded-lg bg-gray-100 md:mb-8"},a.createElement("img",{src:`/ismsx-web/${r.image[0]}.avif`,loading:"lazy",className:"h-full w-full object-cover object-center",alt:"about"})),a.createElement("div",{className:"md:py-8"},a.createElement("div",{className:"mb-2 md:mb-3"},a.createElement("span",{className:"mb-0.5 inline-block text-gray-500"},r.date),a.createElement("h2",{className:"text-xl font-bold text-gray-800 lg:text-2xl"},a.createElement("a",{href:r.url},r.name)))))))},s=r(5811);var c=()=>a.createElement("div",{className:"min-h-screen bg-secondary py-6 sm:py-8 font-caviardreams"},a.createElement("div",{className:"mx-auto max-w-screen-2xl px-4 md:px-8"},a.createElement("div",{className:"mb-4 text-5xl font-bold sm:text-6xl md:mb-6 text-works grid-cols-2 grid"},a.createElement("h1",{className:"mb-6 col-span-1 flex items-center"},"works"),a.createElement("div",{className:"mb-6 flex items-end justify-between gap-4 col-span-1"},a.createElement("br",null),a.createElement(s.Z,null))),a.createElement(o,null)));const i=()=>a.createElement("title",null,"isshin — Works")},5865:function(e,t,r){r.d(t,{F:function(){return n}});var a=r(5505);const n=()=>({addWork:async e=>{let{workName:t,date:r,url:n,description:l,images:o}=e;try{var s;const{data:e,error:c}=await a.O.from("works").select("id").order("id",{ascending:!1}).limit(1);if(c)throw new Error(`Error fetching max work id: ${c.message}`);const i=(((null==e||null===(s=e[0])||void 0===s?void 0:s.id)||0)+1).toString();console.log(e),console.log(i);const m=[],d=o.map((async(e,t)=>{const{data:r,error:n}=await a.O.storage.from("assets").upload(`works/${i}/${t}`,e);if(n)throw new Error(`Error uploading image: ${n.message}`);m.push(r)}));await Promise.all(d),console.log(m);const u=m.map((e=>e.fullPath));console.log(u);const{data:g,error:f}=await a.O.from("works").insert([{name:t,date:r,image:u,url:n,description:l}]).select();if(f)throw new Error(`Error uploading works: ${f.message}`);return console.log(g),g}catch(c){return console.error("An error occurred:",c.message),null}},getWorks:async()=>{try{const{data:e,error:t}=await a.O.from("works").select("*");if(t)throw new Error(`Error uploading image: ${t.message}`);return e}catch(e){console.error("An error occurred:",e.message)}}})},5313:function(e,t,r){r.d(t,{d:function(){return a},q:function(){return n}});const a=(e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime(),n=(e,t)=>e.pin===t.pin?0:e.pin?-1:1}}]);
//# sourceMappingURL=component---src-pages-works-tsx-8b8fe22cf91b30c6f251.js.map