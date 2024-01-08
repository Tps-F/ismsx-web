"use strict";(self.webpackChunkisshin=self.webpackChunkisshin||[]).push([[748],{5811:function(e,t,r){var a=r(7294),n=r(7896),o=r(4160);t.Z=e=>{let{colors:t=[]}=e;const r=(0,n.useLocation)().pathname.replace(/\//g,"");return console.log(r),a.createElement(a.Fragment,null,a.createElement("div",{className:"px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"},a.createElement("div",{className:`mb-4 tracking-widest ${t[0]||"text-works"} text-right text-xl`},a.createElement(o.rU,{to:""===r?"works":"/works",className:""+("works"===r?"bg-textbg":"")},"works")),a.createElement("div",{className:`mb-4 tracking-widest ${t[1]||"text-about"} text-right text-xl`},a.createElement(o.rU,{to:""===r?"about":"/about",className:""+("about"===r?"bg-textbg":"")},"about")),a.createElement("div",{className:`mb-4 tracking-widest ${t[2]||"text-primary"} text-right text-xl`},a.createElement("a",null,"contact"))))}},9173:function(e,t,r){r.r(t),r.d(t,{Head:function(){return i},default:function(){return c}});var a=r(7294),n=r(5865),o=r(5313);var s=()=>{const{0:e,1:t}=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{try{const{getWorks:e}=(0,n.F)(),r=await e();t(r.sort(o.d))}catch(e){console.error("Error fetching works:",e.message)}})()}),[]),a.createElement("div",{className:"grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 "},e.map((e=>a.createElement("div",{key:e.id},a.createElement("a",{href:e.url,className:"group mb-2 block w-full overflow-hidden rounded-lg bg-gray-100"},a.createElement("img",{src:`https://qbivlbjmmfnzlobfktjm.supabase.co/storage/v1/object/public/${e.image[0]}`,alt:e.name,className:"h-full w-full object-cover object-center transition duration-200"})),a.createElement("div",{className:"flex flex-col"},a.createElement("span",{className:"text-gray-500"},e.date.split("-").slice(0,2).join("-")),a.createElement("a",{href:e.url,className:"text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"},e.name))))))},l=r(5811);var c=()=>a.createElement("div",{className:"min-h-screen bg-secondary py-6 sm:py-8 font-caviardreams"},a.createElement("div",{className:"mx-auto max-w-screen-2xl px-4 md:px-8"},a.createElement("div",{className:"mb-4 text-5xl font-bold sm:text-6xl md:mb-6 text-works grid-cols-2 grid"},a.createElement("h1",{className:"mb-6 col-span-1 flex items-center"},"Works"),a.createElement("div",{className:"mb-6 flex items-end justify-between gap-4 col-span-1"},a.createElement("br",null),a.createElement(l.Z,null))),a.createElement(s,null)));const i=()=>a.createElement("title",null,"isshin — Works")},5865:function(e,t,r){r.d(t,{F:function(){return n}});var a=r(5505);const n=()=>({addWork:async e=>{let{workName:t,date:r,url:n,description:o,images:s}=e;try{var l;const{data:e,error:c}=await a.O.from("works").select("id").order("id",{ascending:!1}).limit(1);if(c)throw new Error(`Error fetching max work id: ${c.message}`);const i=(((null==e||null===(l=e[0])||void 0===l?void 0:l.id)||0)+1).toString();console.log(e),console.log(i);const m=[],d=s.map((async(e,t)=>{const{data:r,error:n}=await a.O.storage.from("assets").upload(`works/${i}/${t}`,e);if(n)throw new Error(`Error uploading image: ${n.message}`);m.push(r)}));await Promise.all(d),console.log(m);const g=m.map((e=>e.fullPath));console.log(g);const{data:u,error:x}=await a.O.from("works").insert([{name:t,date:r,image:g,url:n,description:o}]).select();if(x)throw new Error(`Error uploading works: ${x.message}`);return console.log(u),u}catch(c){return console.error("An error occurred:",c.message),null}},getWorks:async()=>{try{const{data:e,error:t}=await a.O.from("works").select("*");if(t)throw new Error(`Error uploading image: ${t.message}`);return e}catch(e){console.error("An error occurred:",e.message)}}})},5313:function(e,t,r){r.d(t,{d:function(){return a},q:function(){return n}});const a=(e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime(),n=(e,t)=>e.pin===t.pin?0:e.pin?-1:1}}]);
//# sourceMappingURL=component---src-pages-works-2-tsx-de3588f960aaf8d8eaf2.js.map