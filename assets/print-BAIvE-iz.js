import{PAPER as e,exportBaseName as t,fontFaceCss as n,imageNeeds as r,paginate as i,planDays as a,renderPlanHtml as o,targetSize as s,upgradeOrder as c}from"./pdf-template-ByJ-ISNR.js";var l=`/bcpp-brand-day/assets/be-vietnam-pro-latin-400-normal-PpnXBOrz.woff2`,u=`/bcpp-brand-day/assets/be-vietnam-pro-latin-500-normal-B6LVzGNe.woff2`,d=`/bcpp-brand-day/assets/be-vietnam-pro-latin-ext-400-normal-CiZNW1ec.woff2`,f=`/bcpp-brand-day/assets/be-vietnam-pro-latin-ext-500-normal-h0Fp6aX0.woff2`,p=`/bcpp-brand-day/assets/be-vietnam-pro-vietnamese-400-normal-CRcqvyg1.woff2`,m=`/bcpp-brand-day/assets/be-vietnam-pro-vietnamese-500-normal-DREgrEoJ.woff2`,h=`/bcpp-brand-day/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2`,g=`/bcpp-brand-day/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2`,_=`data:font/woff2;base64,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`,v=`/bcpp-brand-day/assets/newsreader-latin-ext-italic-CbFQGDAw.ttf`,y=`/bcpp-brand-day/assets/newsreader-latin-ext-normal-CGcNHmds.ttf`,b=`/bcpp-brand-day/assets/newsreader-latin-italic-CoK8N5k9.ttf`,x=`/bcpp-brand-day/assets/newsreader-latin-normal-Bvjuf1q4.ttf`,S=`/bcpp-brand-day/assets/newsreader-vietnamese-italic-SRD9rBOz.ttf`,C=`/bcpp-brand-day/assets/newsreader-vietnamese-normal-DJd3GKrF.ttf`,w=`/* be-vietnam-pro-vietnamese-400-normal */
@font-face {
  font-family: 'Be Vietnam Pro';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/be-vietnam-pro-vietnamese-400-normal.woff2) format('woff2'), url(./files/be-vietnam-pro-vietnamese-400-normal.woff) format('woff');
  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
}

/* be-vietnam-pro-latin-ext-400-normal */
@font-face {
  font-family: 'Be Vietnam Pro';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/be-vietnam-pro-latin-ext-400-normal.woff2) format('woff2'), url(./files/be-vietnam-pro-latin-ext-400-normal.woff) format('woff');
  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;
}

/* be-vietnam-pro-latin-400-normal */
@font-face {
  font-family: 'Be Vietnam Pro';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/be-vietnam-pro-latin-400-normal.woff2) format('woff2'), url(./files/be-vietnam-pro-latin-400-normal.woff) format('woff');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}`,T=`/* be-vietnam-pro-vietnamese-500-normal */
@font-face {
  font-family: 'Be Vietnam Pro';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url(./files/be-vietnam-pro-vietnamese-500-normal.woff2) format('woff2'), url(./files/be-vietnam-pro-vietnamese-500-normal.woff) format('woff');
  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
}

/* be-vietnam-pro-latin-ext-500-normal */
@font-face {
  font-family: 'Be Vietnam Pro';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url(./files/be-vietnam-pro-latin-ext-500-normal.woff2) format('woff2'), url(./files/be-vietnam-pro-latin-ext-500-normal.woff) format('woff');
  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;
}

/* be-vietnam-pro-latin-500-normal */
@font-face {
  font-family: 'Be Vietnam Pro';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url(./files/be-vietnam-pro-latin-500-normal.woff2) format('woff2'), url(./files/be-vietnam-pro-latin-500-normal.woff) format('woff');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}`,E=`/* newsreader-vietnamese-opsz-normal */
@font-face {
  font-family: 'Newsreader Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 200 800;
  src: url(./files/newsreader-vietnamese-opsz-normal.woff2) format('woff2-variations');
  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
}

/* newsreader-latin-ext-opsz-normal */
@font-face {
  font-family: 'Newsreader Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 200 800;
  src: url(./files/newsreader-latin-ext-opsz-normal.woff2) format('woff2-variations');
  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;
}

/* newsreader-latin-opsz-normal */
@font-face {
  font-family: 'Newsreader Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 200 800;
  src: url(./files/newsreader-latin-opsz-normal.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}`,D=`/* newsreader-vietnamese-opsz-italic */
@font-face {
  font-family: 'Newsreader Variable';
  font-style: italic;
  font-display: swap;
  font-weight: 200 800;
  src: url(./files/newsreader-vietnamese-opsz-italic.woff2) format('woff2-variations');
  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
}

/* newsreader-latin-ext-opsz-italic */
@font-face {
  font-family: 'Newsreader Variable';
  font-style: italic;
  font-display: swap;
  font-weight: 200 800;
  src: url(./files/newsreader-latin-ext-opsz-italic.woff2) format('woff2-variations');
  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;
}

/* newsreader-latin-opsz-italic */
@font-face {
  font-family: 'Newsreader Variable';
  font-style: italic;
  font-display: swap;
  font-weight: 200 800;
  src: url(./files/newsreader-latin-opsz-italic.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}`,O=`/* jetbrains-mono-cyrillic-ext-400-normal */
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/jetbrains-mono-cyrillic-ext-400-normal.woff2) format('woff2'), url(./files/jetbrains-mono-cyrillic-ext-400-normal.woff) format('woff');
  unicode-range: U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;
}

/* jetbrains-mono-cyrillic-400-normal */
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/jetbrains-mono-cyrillic-400-normal.woff2) format('woff2'), url(./files/jetbrains-mono-cyrillic-400-normal.woff) format('woff');
  unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
}

/* jetbrains-mono-greek-400-normal */
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/jetbrains-mono-greek-400-normal.woff2) format('woff2'), url(./files/jetbrains-mono-greek-400-normal.woff) format('woff');
  unicode-range: U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF;
}

/* jetbrains-mono-vietnamese-400-normal */
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/jetbrains-mono-vietnamese-400-normal.woff2) format('woff2'), url(./files/jetbrains-mono-vietnamese-400-normal.woff) format('woff');
  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
}

/* jetbrains-mono-latin-ext-400-normal */
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/jetbrains-mono-latin-ext-400-normal.woff2) format('woff2'), url(./files/jetbrains-mono-latin-ext-400-normal.woff) format('woff');
  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;
}

/* jetbrains-mono-latin-400-normal */
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(./files/jetbrains-mono-latin-400-normal.woff2) format('woff2'), url(./files/jetbrains-mono-latin-400-normal.woff) format('woff');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}`,k={...Object.assign({"/node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-latin-400-normal.woff2":l,"/node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-latin-500-normal.woff2":u,"/node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-latin-ext-400-normal.woff2":d,"/node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-latin-ext-500-normal.woff2":f,"/node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-vietnamese-400-normal.woff2":p,"/node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-vietnamese-500-normal.woff2":m}),...Object.assign({"/node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2":h,"/node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-ext-400-normal.woff2":g,"/node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-vietnamese-400-normal.woff2":_}),...Object.assign({"/shared/pdf-fonts/newsreader-latin-ext-italic.ttf":v,"/shared/pdf-fonts/newsreader-latin-ext-normal.ttf":y,"/shared/pdf-fonts/newsreader-latin-italic.ttf":b,"/shared/pdf-fonts/newsreader-latin-normal.ttf":x,"/shared/pdf-fonts/newsreader-vietnamese-italic.ttf":S,"/shared/pdf-fonts/newsreader-vietnamese-normal.ttf":C})},A=new Map(Object.entries(k).map(([e,t])=>[e.split(`/`).pop(),t])),j=()=>/\b(Electron|Claude|Codex|ChatGPT|Cursor)\//.test(navigator.userAgent),M=.86,N=4,P=null,F=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),I=`@media screen { html { background:#e7e3dc; } body { background:transparent; padding:16px 0; } .page { margin:0 auto 16px; box-shadow:0 1px 4px #34281c33; } }`;async function L(e){P?.();let s=a({days:e.days});if(!s.length)throw Error(`empty_range`);let c=[],l=null,u=null,d=!1,f=!1,p=e.host,m=document.title,h=()=>{d||(d=!0,P===h&&(P=null),u?.disconnect(),l?.remove(),c.forEach(e=>URL.revokeObjectURL(e)),f&&(document.title=m))},g=e=>{let t=URL.createObjectURL(e);return c.push(t),d&&URL.revokeObjectURL(t),t},_=()=>{if(d)throw Error(`print_superseded`)};P=h;try{let[a,c,v,y]=await Promise.all([B(`data/catalog.json`).then(e=>e?.brands??[]),z(`branding/bcpp.svg`),B(`data/crew.json`).then(e=>e?.people??[]),B(`data/styling-assets.json`)]);if(_(),!c)throw Error(`BCPP logo unavailable`);if(!y&&s.some(e=>e.looks.some(e=>e.pack)))throw Error(`Styling assets unavailable; please retry export.`);let b=r(s,a,v,y??void 0,e.layout),x=new Map,S=new Map;await U(b,N,async t=>{let n=JSON.stringify([t.role,t.images?.map(e=>e.url),t.asset,t.upgrade,t.wMm,t.hMm,t.ppmm]);S.has(n)||S.set(n,V(t,e.customImage).then(e=>e&&g(e),()=>null)),x.set(t.key,await S.get(n))}),_();let C=t(e.from,e.to,e.lang,e.layout),k=n([w,T,E,D,O],e=>{let t=A.get(e);if(!t)throw Error(`PDF font missing: ${e}`);return new URL(t,document.baseURI).href}),{html:M,warnings:L}=o({days:s,lang:e.lang,layout:e.layout,meta:{from:e.from,to:e.to,createdAt:new Date().toISOString(),createdBy:{name:e.createdBy},revisionLabel:e.revisionLabel},brands:a,styling:y??void 0,images:x,fontCss:k,bcppLogo:g(c),projectName:e.projectName,title:C});l=document.createElement(`iframe`),p?l.title=C:(l.setAttribute(`aria-hidden`,`true`),l.tabIndex=-1),l.style.cssText=p?`display:block;width:794px;height:1123px;border:0;transform-origin:0 0;opacity:0`:`position:fixed;left:-12000px;top:0;width:794px;height:1123px;border:0;opacity:0;pointer-events:none`;let R=new Promise(e=>l.addEventListener(`load`,e,{once:!0}));l.srcdoc=M,(p??document.body).append(l),await R,_();let H=l.contentWindow,W=l.contentDocument,G=await i(W);_();let K=`<!doctype html>${W.documentElement.outerHTML}`;if(p){let e=W.createElement(`style`);e.textContent=I,W.head.append(e);let t=()=>{let e=Math.max(794,...[...W.querySelectorAll(`.page`)].map(e=>e.getBoundingClientRect().width))+32,t=Math.min(1,p.clientWidth/e);Object.assign(l.style,{width:`${e}px`,height:`${p.clientHeight/t}px`,transform:`scale(${t})`,opacity:`1`})};t(),u=new ResizeObserver(t),u.observe(p)}return{pages:G,warnings:L,embedded:j(),print(){d||P!==h||f&&!p||(f=!0,document.title=C,H.addEventListener(`afterprint`,p?()=>void(document.title=m):h,{once:!0}),H.focus(),H.print())},printInPage(e,t){if(d||P!==h)return;d=!0,P=null,u?.disconnect(),l?.remove();let n=`<div class="bcpp-page-bar" role="toolbar" aria-label="${F(e.print)}"><button type="button" data-act="back">${F(e.back)}</button><span>${F(e.hint)}</span><button type="button" data-act="print">${F(e.print)}</button></div>`,r=`<style>${I} @media screen { body { padding-top:72px; } .bcpp-page-bar { position:fixed; inset:0 0 auto; z-index:9; display:flex; align-items:center; gap:16px; padding:10px 16px; background:#fffefc; border-bottom:1px solid #e3e0da; font:400 13px/1.4 system-ui,sans-serif; color:#191918; } .bcpp-page-bar span { flex:1; min-width:0; color:#68665f; } .bcpp-page-bar button { flex:none; min-height:36px; padding:0 14px; border:1px solid #8a8479; border-radius:10px; background:#fffefc; color:#191918; font:500 13px/1 system-ui,sans-serif; cursor:pointer; } .bcpp-page-bar [data-act=print] { background:#191918; border-color:#191918; color:#fffefc; } .bcpp-page-bar button:focus-visible { outline:2px solid #191918; outline-offset:2px; } } @media print { .bcpp-page-bar { display:none !important; } }</style>`;document.open(),document.write(K.replace(`</head>`,`${r}</head>`).replace(/<\/body>/i,`${n}</body>`)),document.close(),document.title=C;let i=()=>{window.focus(),window.print()};document.querySelector(`.bcpp-page-bar [data-act=back]`).addEventListener(`click`,()=>location.replace(t)),document.querySelector(`.bcpp-page-bar [data-act=print]`).addEventListener(`click`,i),Promise.all([document.fonts.ready,...[...document.images].map(e=>e.decode().catch(()=>{}))]).then(i)},discard(){(!f||p)&&h()}}}catch(e){throw h(),e}}function R(e){let t=`/bcpp-brand-day/`;if(e.startsWith(`/api/`))return new URL(e,location.origin).href;let n=new URL(e.startsWith(t)?e:e.replace(/^\//,``),new URL(t,document.baseURI));return n.origin===location.origin?n.href:null}async function z(e){let t=R(e);if(!t)return null;try{let e=await fetch(t);return e.ok?await e.blob():null}catch{return null}}async function B(e){let t=await z(e);try{return t?JSON.parse(await t.text()):null}catch{return null}}async function V(e,t){let n=null;if(e.asset){for(let r of e.asset.variants)if(n=await t(e.asset.id,r))break}else{let t=e.images??[];if(e.upgrade&&/^[a-z0-9-]+$/.test(e.upgrade.productId)){let n=await B(`data/products/${e.upgrade.productId}.json`);t=c(e,n?.assets??null)}for(let e of t)if(n=await z(e.url))break}return n&&H(n,e)}async function H(t,n){let r=await createImageBitmap(t),[i,a]=s(n,r.width,r.height),o=i===r.width&&a===r.height?r:await createImageBitmap(r,{resizeWidth:i,resizeHeight:a,resizeQuality:`high`}),c=document.createElement(`canvas`);c.width=i,c.height=a;let l=c.getContext(`2d`);l.fillStyle=e,l.fillRect(0,0,i,a),l.drawImage(o,0,0,i,a),r.close(),o.close();let u=n.role===`logo`,d=await new Promise(e=>c.toBlob(e,u?`image/png`:`image/jpeg`,u?void 0:M));return c.width=c.height=0,d}async function U(e,t,n){let r=0;await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;r<e.length;)await n(e[r++])}))}export{L as preparePrint};