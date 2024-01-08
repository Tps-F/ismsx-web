"use strict";(self.webpackChunkisshin=self.webpackChunkisshin||[]).push([[49],{3204:function(e){const t=/[\p{Lu}]/u,l=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,i=new RegExp("^"+r.source),c=new RegExp(r.source+a.source,"gu"),s=new RegExp("\\d+"+a.source,"gu"),o=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),o=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?o(e):r(e);return e!==r(e)&&(e=((e,n,a)=>{let r=!1,i=!1,c=!1;for(let s=0;s<e.length;s++){const o=e[s];r&&t.test(o)?(e=e.slice(0,s)+"-"+e.slice(s),r=!1,c=i,i=!0,s++):i&&c&&l.test(o)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),c=i,i=!1,r=!0):(r=n(o)===o&&a(o)!==o,c=i,i=a(o)===o&&n(o)!==o)}return e})(e,r,o)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,r):r(e),a.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,s.lastIndex=0,e.replace(c,((e,l)=>t(l))).replace(s,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,l){l.d(t,{L:function(){return g},M:function(){return v},P:function(){return x},S:function(){return j},_:function(){return c},a:function(){return i},b:function(){return u},g:function(){return m},h:function(){return s}});var n=l(7294),a=(l(3204),l(5697)),r=l.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(l=r[n])>=0||(a[l]=e[l]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,l){const n={};let a="gatsby-image-wrapper";return"fixed"===l?(n.width=e,n.height=t):"constrained"===l&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,l,n,a){return void 0===a&&(a={}),i({},l,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function m(e,t,l,n,a,r,c,s){const o={};r&&(o.backgroundColor=r,"fixed"===l?(o.width=n,o.height=a,o.backgroundColor=r,o.position="relative"):("constrained"===l||"fullWidth"===l)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),c&&(o.objectFit=c),s&&(o.objectPosition=s);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return u}const E=["children"],d=function(e){let{layout:t,width:l,height:a}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/l*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:l,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${l}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,l=c(e,E);return n.createElement(n.Fragment,null,n.createElement(d,i({},l)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:l,loading:a,alt:r="",shouldLoad:s}=e,o=c(e,p);return n.createElement("img",i({},o,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?l:void 0,"data-srcset":s?void 0:l,alt:r}))},f=function(e){let{fallback:t,sources:l=[],shouldLoad:a=!0}=e,r=c(e,b);const s=r.sizes||(null==t?void 0:t.sizes),o=n.createElement(h,i({},r,t,{sizes:s,shouldLoad:a}));return l.length?n.createElement("picture",null,l.map((e=>{let{media:t,srcSet:l,type:r}=e;return n.createElement("source",{key:`${t}-${r}-${l}`,type:r,media:t,srcSet:a?l:void 0,"data-srcset":a?void 0:l,sizes:s})})),o):o};var y;h.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},f.displayName="Picture",f.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,l=c(e,w);return t?n.createElement(f,i({},l,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},l))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(y=f.propTypes)?void 0:y.sources,alt:function(e,t,l){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${l}\`. Validation failed.`):null}};const v=function(e){return n.createElement(n.Fragment,null,n.createElement(f,i({},e)),n.createElement("noscript",null,n.createElement(f,i({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=f.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],O=["style","className"],P=e=>e.replace(/\n/g,""),T=function(e,t,l){for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?r().string.apply(r(),[e,t,l].concat(a)):new Error(`The "alt" prop is required in ${l}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},S={image:r().object.isRequired,alt:T},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],k=new Set;let A,R;const I=function(e){let{as:t="div",image:a,style:r,backgroundColor:u,className:m,class:E,onStartLoad:d,onLoad:g,onError:p}=e,b=c(e,C);const{width:h,height:f,layout:y}=a,w=o(h,f,y),{style:x,className:v}=w,N=c(w,L),O=(0,n.useRef)(),P=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);E&&(m=E);const T=function(e,t,l){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${l/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${l}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(y,h,f);return(0,n.useEffect)((()=>{A||(A=l.e(731).then(l.bind(l,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:l}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:l}})));const e=O.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==d||d({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==d||d({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(P);if(R&&k.has(P))return;let t,n;return A.then((e=>{let{renderImageToString:l,swapPlaceholderImage:c}=e;O.current&&(O.current.innerHTML=l(i({isLoading:!0,isLoaded:k.has(P),image:a},b)),k.has(P)||(t=requestAnimationFrame((()=>{O.current&&(n=c(O.current,P,k,r,d,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{k.has(P)&&R&&(O.current.innerHTML=R(i({isLoading:k.has(P),isLoaded:k.has(P),image:a},b)),null==d||d({wasCached:!0}),null==g||g({wasCached:!0}))}),[a]),(0,n.createElement)(t,i({},N,{style:i({},x,r,{backgroundColor:u}),className:`${v}${m?` ${m}`:""}`,ref:O,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},M=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));M.propTypes=S,M.displayName="GatsbyImage";const U=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function V(e){return function(t){let{src:l,__imageData:a,__error:r}=t,s=c(t,U);return r&&console.warn(r),a?n.createElement(e,i({image:a},s)):(console.warn("Image not loaded",l),null)}}const H=V((function(e){let{as:t="div",className:l,class:a,style:r,image:s,loading:E="lazy",imgClassName:d,imgStyle:p,backgroundColor:b,objectFit:h,objectPosition:f}=e,y=c(e,N);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(l=a),p=i({objectFit:h,objectPosition:f,backgroundColor:b},p);const{width:w,height:T,layout:S,images:C,placeholder:L,backgroundColor:k}=s,A=o(w,T,S),{style:R,className:I}=A,M=c(A,O),U={fallback:void 0,sources:[]};return C.fallback&&(U.fallback=i({},C.fallback,{srcSet:C.fallback.srcSet?P(C.fallback.srcSet):void 0})),C.sources&&(U.sources=C.sources.map((e=>i({},e,{srcSet:P(e.srcSet)})))),n.createElement(t,i({},M,{style:i({},R,r,{backgroundColor:b}),className:`${I}${l?` ${l}`:""}`}),n.createElement(g,{layout:S,width:w,height:T},n.createElement(x,i({},m(L,!1,S,w,T,k,h,f))),n.createElement(v,i({"data-gatsby-image-ssr":"",className:d},y,u("eager"===E,!1,U,E,p)))))})),$=function(e,t){for(var l=arguments.length,n=new Array(l>2?l-2:0),a=2;a<l;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},_=new Set(["fixed","fullWidth","constrained"]),D={src:r().string.isRequired,alt:T,width:$,height:$,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};H.displayName="StaticImage",H.propTypes=D;const j=V(M);j.displayName="StaticImage",j.propTypes=D},5811:function(e,t,l){var n=l(7294),a=l(7896),r=l(4160);t.Z=e=>{let{colors:t=[]}=e;const l=(0,a.useLocation)().pathname.replace(/\//g,"");return n.createElement(n.Fragment,null,n.createElement("div",{className:"px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"},n.createElement("div",{className:`mb-4 tracking-widest ${t[0]||"text-works"} text-right text-xl`},n.createElement(r.rU,{to:""===l?"works":"/works",className:""+("works"===l?"bg-textbg":"")},"works")),n.createElement("div",{className:`mb-4 tracking-widest ${t[1]||"text-about"} text-right text-xl`},n.createElement(r.rU,{to:""===l?"about":"/about",className:""+("about"===l?"bg-textbg":"")},"about")),n.createElement("div",{className:`mb-4 tracking-widest ${t[2]||"text-primary"} text-right text-xl`},n.createElement("a",null,"contact"))))}},2766:function(e,t,l){l.r(t),l.d(t,{Head:function(){return i}});var n=l(7294),a=l(8032),r=l(5811);t.default=()=>n.createElement(n.Fragment,null,n.createElement("div",{className:"min-h-screen bg-secondary py-2 lg:py-2 font-caviardreams"},n.createElement("div",{className:"mx-auto max-w-screen-md px-4 md:px-8 "},n.createElement("br",null),n.createElement("div",{className:"grid-cols-2 grid"},n.createElement("h1",{className:"mb-4 text-5xl font-bold text-about sm:text-6xl md:mb-6 col-span-1 flex items-center"},"about"),n.createElement("div",{className:"mb-6 flex items-end justify-between col-span-1"},n.createElement("br",null),n.createElement(r.Z,{colors:[]}))),n.createElement("div",{className:"relative mb-6 overflow-hidden rounded-lg bg-gray-100 md:mb-8"},n.createElement(a.S,{src:"../images/about/about_4k.png",loading:"lazy",className:"h-full w-full object-cover object-center",alt:"about",__imageData:l(2267)})),n.createElement("p",{className:"mb-6 text-gray-500 sm:text-lg md:mb-8"},n.createElement("span",{className:"text-primary font-HeiseiKakuGothic"},"いっしん / 田中一臣 (Isshin Tanaka)",n.createElement("br",null),"Motion Graphics Designer"),n.createElement("br",null),n.createElement("br",null),"小学生の頃から映像制作を始め、2018年より個人事業主。",n.createElement("br",null),"抽象図形を交えたモーショングラフィックス作品を主に制作。",n.createElement("br",null),"自主制作を軸に活動しながら、CM演出なども手がける。",n.createElement("br",null),"主な制作実績では、NHKスペシャル・日テレ番組などのオープニング、",n.createElement("br",null),"Twitter・GooglePlay・NewsPickなどのプロモーション映像。",n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),"映像作家100人 2021・2022・2023 選出。",n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),"愛工大名電高校"," ",n.createElement("a",{href:"https://meidenid.com/",target:"_blank",className:"text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700",rel:"noreferrer"},"情報デザイン部(AMIDC)"),"卒業 ",n.createElement("br",null),"名古屋学芸大学 映像メディア学科 卒業",n.createElement("br",null),n.createElement("br",null),"お仕事のご相談は"," ",n.createElement("a",{href:"mailto:ismsx.jp@gmail.com",className:"text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"},"ismsx.jp@gmail.com"),"、",n.createElement("br",null),"またはContactまでお願いいたします。"),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("h2",{className:"mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 text-center"},"WORKS"),n.createElement("br",null),n.createElement("ul",{className:"mb-6 list-inside text-gray-500 sm:text-lg md:mb-8"},n.createElement("li",null,"2023/12　富士フィルム「クリスマスプレゼントにチェキ！」TVCM モーション"),n.createElement("li",null,"2023/10　「en Live Art Performance」一部演出"),n.createElement("li",null,"2023/10　Adobe「MAX Challenge 2023」参考作品"),n.createElement("li",null,"2023/09　富士フィルム 「ワクワクがリンクする。INSTAX Pal」TVCM モーション"),n.createElement("li",null,"2023/09　株式会社ベストセキュリティ ロゴモーション"),n.createElement("li",null,"2023/08 「学び×楽しい 岩崎学園」PV"),n.createElement("li",null,"2023/06 「ap bank fes ’23 」ロゴモーション"),n.createElement("li",null,"2023/06　新R25チャンネル「気持ち良い仕事睡眠大全」OP"),n.createElement("li",null,'2023/05　DNP「BLUEPRINT STUDIO」"ONE KEY FOR EVERYTHING"'),n.createElement("li",null,"2023/04　株式会社うるる「ULU-Fes 2023」OP"),n.createElement("li",null,"2023/01　日本テレビ「夜明け前のPLAYERS」OP"),n.createElement("li",null,"2022/12　スペースシャワーTVプラス OP等"),n.createElement("li",null,"2022/11　スマ留 「サクッと留学しよ。」PV"),n.createElement("li",null,"2022/07　地域航空会社 「feel air」PV"),n.createElement("li",null,"2022/05　MECRE 「60秒でわかるMECRE」PV"),n.createElement("li",null,"2022/04　株式会社うるる「ULU-Fes 2022」OP"),n.createElement("li",null,"2022/03　「SQUARE ENIX MUSIC Channel」 OP等"),n.createElement("li",null,"2021/10　Twitter 「ブランドセーフティ」PV"),n.createElement("li",null,"2021/10　株式会社うるる「ULURU Synapse Award 2021」OP"),n.createElement("li",null,"2021/08　Microsoft 「Surface 4者面談」 OP他モーション"),n.createElement("li",null,"2021/07　「ﾐｭｰｼﾞｯｸﾚｲﾝｵｰﾃﾞｨｼｮﾝﾌﾟﾛｼﾞｪｸﾄ」 SPOT"),n.createElement("li",null,"2021/06　日立建機日本 ZX350LCK-6機能説明動画 一部演出"),n.createElement("li",null,"2021/06　GooglePlay 「Play On Challenge」 一部演出"),n.createElement("li",null,"2021/04　株式会社うるる「ULU-Fes 2021」OP"),n.createElement("li",null,"2021/03　KONAMI eFootballチャンネル OP・ED等"),n.createElement("li",null,"2021/02　株式会社SUPER STUDIO 「ecforce」ロゴモーション"),n.createElement("li",null,"2021/01　鳥取ガス「enetopia」TVCM 2カット"),n.createElement("li",null,"2021/01　株式会社リチカ サイトトップ映像　"),n.createElement("li",null,"2020/12　MUSIC ON! TV「legato 〜旅する音楽スタジオ〜」OP"),n.createElement("li",null,"2020/12　NHK みんなのうた「100年時代」アニメOP"),n.createElement("li",null,"2020/11　NewsPicksLIVE 「Westship」 PV / OP"),n.createElement("li",null,"2020/11　J:COMショップ吉祥寺店 サイネージ広告"),n.createElement("li",null,"2020/09　ヤマトグループ 「Yamato DX Night #1」 OP"),n.createElement("li",null,"2020/09　千葉ジェッツ 「10周年記念プロジェクト」 PV"),n.createElement("li",null,"2020/07　ポルカドットスティングレイ「FREE」 一部演出"),n.createElement("li",null,"2020/04　株式会社LABOT 「SHAKYO.io」 PV"),n.createElement("li",null,"2020/02　NHKスペシャル 「令和未来会議」OP"),n.createElement("li",null,"2020/01　justInCase株式会社 「わりかん保険」　PV"),n.createElement("li",null,"2019/11　YouTubeチャンネル 「STARDY」 　ロゴデザイン・PV"),n.createElement("li",null,"2019/09　ソニーミュージック「 One in a Billion」 　SPOT"),n.createElement("li",null,"2019/09　「THE BINARY」 　ライブ演出映像(一部)"),n.createElement("li",null,"2019/07　ASMR動画アプリ 「toremoro」 PV"),n.createElement("li",null,"2019/05　カクテルメイク株式会社 「RICHKA」 PV"),n.createElement("li",null,"2018/12　YouTubeチャンネル 「常春」 OP"),n.createElement("li",null,"2018/11　YouTubeチャンネル 「もやモヤちゃんねる」 OP"),n.createElement("li",null,"2018/10　「HoneyComeBear」　 ロゴモーション"),n.createElement("li",null,"2018/09　クリエイター交流イベント 「I/O」　 PV"),n.createElement("li",null,"2018/09　「ESPOIR表参道」　ロゴモーション"),n.createElement("li",null,"LECTURES "),n.createElement("li",null,"2021〜　bisen 北海道芸術デザイン専門学校にて特別講義"),n.createElement("li",null,"2021/06　放送芸術学院専門学校にて特別講義"),n.createElement("li",null,"SELF PRODUCED "),n.createElement("li",null,"2024/01　？？？？？"),n.createElement("li",null,'2023/10　"モーフィグレーション"'),n.createElement("li",null,'2023/05　"Dition"'),n.createElement("li",null,'2023/04　"Isshin REEL 2023"'),n.createElement("li",null,'2023/02　"nostalmic"'),n.createElement("li",null,'2022/11　"Voscot"'),n.createElement("li",null,'2022/06　"ミーレスラクト"'),n.createElement("li",null,'2022/04　"Sencotu"'),n.createElement("li",null,'2022/02　"知覚的融合"'),n.createElement("li",null,'2022/01　"Isshin REEL 2022" '),n.createElement("li",null,'2021/12　"Motete!“'),n.createElement("li",null,'2021/11　"Quiet or Upset”'),n.createElement("li",null,'2021/07　"Lipeatilca"'),n.createElement("li",null,'2021/07　"Estemovcion"'),n.createElement("li",null,'2021/05　"周回事象"'),n.createElement("li",null,'2021/04　"空間響図学"'),n.createElement("li",null,'2021/02　"Mars of sense"'),n.createElement("li",null,'2021/01　"Isshin REEL 2021" '),n.createElement("li",null,'2020/12　"20" '),n.createElement("li",null,'2020/10　"PASTREE"'),n.createElement("li",null,'2020/10　"Ceslot"'),n.createElement("li",null,'2020/09　"SECHAOS"'),n.createElement("li",null,"2020/08　“LA.PONZ”"),n.createElement("li",null,'2020/08　"monyu"'),n.createElement("li",null,'2020/07　"MOOOW"'),n.createElement("li",null,'2020/06　"jouet"'),n.createElement("li",null,'2020/06　"Resonat"'),n.createElement("li",null,'2020/05　"miscela"　'),n.createElement("li",null,'2020/04　"Fillanva"　'),n.createElement("li",null,'2020/04　"Hipnosis"　'),n.createElement("li",null,'2020/03　"Haptico"　'),n.createElement("li",null,'2020/02　"Anote"　'),n.createElement("li",null,'2020/02　"shift”　'),n.createElement("li",null,'2020/01　"アンノジョウオソイアケオメ”　'),n.createElement("li",null,'2020/01　"Isshin REEL 2020"　'),n.createElement("li",null,'2019/12　"Carei 19"'),n.createElement("li",null,'2019/12　"Platrap"'),n.createElement("li",null,'2019/10　"NAZO-01"'),n.createElement("li",null,'2019/08　"Planet"'),n.createElement("li",null,'2019/06　"BonNU"'),n.createElement("li",null,'2019/05　"ERA Update"'),n.createElement("li",null,'2019/04　"Reverse year"'),n.createElement("li",null,'2019/02　"NANKORE"'),n.createElement("li",null,'2019/02　"NyuNyun"'),n.createElement("li",null,'2019/01　"Funky Time"'),n.createElement("li",null,'2019/01　"メッチャオソイアケオメ"'),n.createElement("li",null,'2019/01　"Isshin REEL 2019"'),n.createElement("li",null,'2018/10　"Nine progression"'),n.createElement("li",null,"2018/09　文化祭企画映像"),n.createElement("li",null,'2018/08　"OTTF"'),n.createElement("li",null,'2018/07　"暑さで脳が死んだのよ"'),n.createElement("li",null,'2018/06　"期末試験マヂ無理"'),n.createElement("li",null,'2018/06　"ねこ様へ愛の言葉を。"'),n.createElement("li",null,'2018/06　"UZUDEZU"'),n.createElement("li",null,'2018/05　"INOUT"'),n.createElement("li",null,'2018/04　"PYON?“'),n.createElement("li",null,'2018/03　"connext!“'),n.createElement("li",null,'2018/02　"テスト死亡”'),n.createElement("li",null,'2018/02　"ROTATION" (EOMゲスト枠制作)'),n.createElement("li",null,'2018/01　"ISMSX REEL 2018"'),n.createElement("li",null,'2018/01　"2K+18"'),n.createElement("li",null,'2017/12　"LIMOV"'),n.createElement("li",null,'2017/10　"START ONE"'),n.createElement("li",null,'2017/10　"Arrest"'),n.createElement("li",null,'2017/10　"テスト詰んだ"'),n.createElement("li",null,'2017/08　"UNACCEPTABLE SPEED"'),n.createElement("li",null,'2017/08　"新たなモバイルOS" '),n.createElement("li",null,"2017/07　“QUOTE”"),n.createElement("li",null,'2017/06　"Hate MATH"'),n.createElement("li",null,'2017/05　"WHAT CAN I.“'),n.createElement("li",null,'2017/05　"AIRPORT GRAPHICS”'),n.createElement("li",null,'2017/04　"DATA Graphics"'),n.createElement("li",null,'2017/04　"EAST [ANOTHER City]“'),n.createElement("li",null,'2017/02　"WHI:GHT"'),n.createElement("li",null,'2016/12　"MO.6"'),n.createElement("li",null,"2016/09　文化祭課題制作"),n.createElement("li",null,'2016/07　"むーCATMOVIE ONE"'),n.createElement("li",null,'2016/07　"雷ーCATムービーWonder19"'),n.createElement("li",null,'2016/07　"Nature(Aichi)“'),n.createElement("li",null,'2016/05　"Hope will come true”'),n.createElement("li",null,'2016/05　"雷ーCAT ムービー ALONE18"'),n.createElement("li",null,'2016/04　"Let’s start.“'),n.createElement("li",null,'2016/02　"The 3-D’s last day.”　卒業ムービー制作　'),n.createElement("li",null,'2015/07　"Love the warz Real intention？”'),n.createElement("li",null,"2015/05　ゆず 「表裏一体」PV"),n.createElement("li",null,'2015/04　"Graphic Ri2"'),n.createElement("li",null,'2015/04　"Graphic Ri"'),n.createElement("li",null,"2015/03　じん 「夜咄ディセイブ」PV"),n.createElement("li",null,'2015/03　"2-D LASTs"'),n.createElement("li",null,'2015/03　"Graphic XC.o"'),n.createElement("li",null,'2015/03　"ISMA OS 9"'),n.createElement("li",null,'2015/03　"Graphic XA”'),n.createElement("li",null,'2015/02　"Dragon Night Graphic"'),n.createElement("li",null,'2015/02　"Memories of 2-D"'),n.createElement("li",null,"2014/11　クラス企画制作"),n.createElement("li",null,'2014/10　"MOON"')))));const i=()=>n.createElement("title",null,"isshin — About")},2267:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/ismsx-web/static/c9f94e37580fd51e070f84c56b09b261/34fe8/about_4k.png","srcSet":"/ismsx-web/static/c9f94e37580fd51e070f84c56b09b261/9bec7/about_4k.png 960w,\\n/ismsx-web/static/c9f94e37580fd51e070f84c56b09b261/afa5c/about_4k.png 1920w,\\n/ismsx-web/static/c9f94e37580fd51e070f84c56b09b261/34fe8/about_4k.png 3840w","sizes":"(min-width: 3840px) 3840px, 100vw"},"sources":[{"srcSet":"/ismsx-web/static/c9f94e37580fd51e070f84c56b09b261/bde8a/about_4k.webp 960w,\\n/ismsx-web/static/c9f94e37580fd51e070f84c56b09b261/c512e/about_4k.webp 1920w,\\n/ismsx-web/static/c9f94e37580fd51e070f84c56b09b261/bab97/about_4k.webp 3840w","type":"image/webp","sizes":"(min-width: 3840px) 3840px, 100vw"}]},"width":3840,"height":2160}')}}]);
//# sourceMappingURL=component---src-pages-about-tsx-a80d4e0ce96050350611.js.map