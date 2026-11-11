import{a as e,r as t}from"./index-Dm6arhro.js";import{c as n,d as r,l as i,m as a,p as o,r as s,s as c,t as l,u}from"./day-crew-DXLPwnad.js";import{T as d,_ as f,b as p,w as m}from"./local-DRLLtKIw.js";import{i as h,n as ee,r as g}from"./Planner-DtQpVAr7.js";var _=`#fbfaf7`,v=300/25.4,y=300/25.4,b=210,x=12,S=186,C=108,w=[13.5,18],T=`<svg class="star" viewBox="0 0 10 10" aria-hidden="true"><path d="M5 .5l1.4 3 3.2.4-2.4 2.2.7 3.2L5 7.7 2.1 9.3l.7-3.2L.4 3.9l3.2-.4z"/></svg>`,te={vi:{status:{draft:`Nháp`,ready:`Sẵn sàng`},statusNote:`Trạng thái kế hoạch nội bộ`,looks:e=>`${e} look`,kind:{library:`Library`,custom:`Custom`},model:`Model`,mua:`MUA`,unassigned:`Chưa phân công`,na:`Không áp dụng`,untitled:`Chưa đặt tên look`,brief:`Brief makeup`,noBrief:`Chưa có brief`,kit:`Kit sản phẩm`,items:e=>`${e} sản phẩm`,noKit:`Chưa thêm sản phẩm`,noShade:`Chưa chọn màu`,noPackshot:`Chưa có ảnh`,lostPackshot:`Không tải được ảnh`,gone:`Không còn trong catalog`,notes:`Ghi chú production`,productionBrief:`Brief production`,noNotes:`Không có ghi chú`,dayNotes:`Ghi chú ngày`,noRef:`Chưa có ảnh tham chiếu`,lostRef:`Không tải được ảnh tham chiếu`,customRef:`Ảnh upload của team`,ref:`Ảnh tham chiếu`,exported:`Xuất`,rev:`Bản lưu`,overview:`Lịch chụp tháng`,month:(e,t)=>`Tháng ${t} / ${e}`,weekdaysShort:[`T2`,`T3`,`T4`,`T5`,`T6`,`T7`,`CN`],calendarNote:`Ngày có lịch chụp được đánh dấu · Chi tiết look theo thứ tự ngày ở các trang sau.`,dayOverview:`Tổng hợp ngày chụp`,days:e=>`${e} ngày`,readyCount:(e,t)=>`${e} sẵn sàng · ${t} nháp`,weekdays:[`Chủ Nhật`,`Thứ Hai`,`Thứ Ba`,`Thứ Tư`,`Thứ Năm`,`Thứ Sáu`,`Thứ Bảy`],date:(e,t,n)=>`${D(n)}/${D(t)}/${e}`,stamp:e=>`${e.day}/${e.month}/${e.year} ${e.hour}:${e.minute}`,poses:`Tham chiếu pose & mood`,packImages:`ảnh tham chiếu`,noUsp:`Chưa có USP đã xác nhận trong TSV.`,inferred:`Có nội dung suy luận trong nguồn.`,stylingRef:`Tham khảo`,lightingNote:`Setup gợi ý · LED liên tục`,outfitNote:`Có chi tiết phối thêm gợi ý`,stylingWait:`Chờ asset`,stylingPending:`Asset của look này đang chờ bổ sung.`},en:{status:{draft:`Draft`,ready:`Ready`},statusNote:`Internal plan status`,looks:e=>`${e} ${e===1?`look`:`looks`}`,kind:{library:`Library`,custom:`Custom`},model:`Model`,mua:`MUA`,unassigned:`Not assigned`,na:`Not applicable`,untitled:`Untitled look`,brief:`Makeup brief`,noBrief:`No brief yet`,kit:`Product kit`,items:e=>`${e} ${e===1?`product`:`products`}`,noKit:`No products yet`,noShade:`No shade chosen`,noPackshot:`No image`,lostPackshot:`Image unavailable`,gone:`No longer in catalog`,notes:`Production notes`,productionBrief:`Production brief`,noNotes:`No notes`,dayNotes:`Day notes`,noRef:`No reference image yet`,lostRef:`Reference image unavailable`,customRef:`Team upload`,ref:`Reference`,exported:`Exported`,rev:`Revision`,overview:`Monthly shooting calendar`,month:(e,t)=>`${E[t-1]} ${e}`,weekdaysShort:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],calendarNote:`Shooting days are marked · Look details follow in date order.`,dayOverview:`Shooting day overview`,days:e=>`${e} ${e===1?`day`:`days`}`,readyCount:(e,t)=>`${e} ready · ${t} draft`,weekdays:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],date:(e,t,n)=>`${n} ${E[t-1]} ${e}`,stamp:e=>`${+e.day} ${E[e.month-1].slice(0,3)} ${e.year}, ${e.hour}:${e.minute}`,poses:`Posing & mood references`,packImages:`reference images`,noUsp:`USP not confirmed in the source TSV.`,inferred:`Contains inferred source content.`,stylingRef:`Reference`,lightingNote:`Suggested setup · Continuous LED`,outfitNote:`Includes suggested styling additions`,stylingWait:`Pending`,stylingPending:`Assets for this look are pending.`}},E=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];function D(e){return String(e).padStart(2,`0`)}var O=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),k=e=>String(e).split(/[?#]/)[0],A=e=>e.split(`-`).map(Number),ne=(e,t)=>{let[n,r,i]=A(t);return`${e.weekdays[new Date(Date.UTC(n,r-1,i)).getUTCDay()]}, ${e.date(n,r,i)}`},j=(e,t)=>e.date(...A(t)),re=(e,t)=>{let n=new Intl.DateTimeFormat(`en-GB`,{timeZone:`Asia/Ho_Chi_Minh`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`}).formatToParts(new Date(t));return`${e.stamp(Object.fromEntries(n.map(e=>[e.type,e.value])))} (GMT+7)`},M=e=>`${e.toFixed(2)}mm`,N=new Set([`sản phẩm chủ đạo khi tái hiện look dự kiến`,`sản phẩm hỗ trợ tái hiện look dự kiến`,`key product for the planned recreation`,`supporting product for the planned recreation`]);function ie(e){let t=e?.trim()??``,n=t.normalize(`NFC`).replace(/\s+/g,` `).replace(/\.$/,``).toLowerCase();return N.has(n)?``:t}var P=(e,t,n,r=`current`)=>`BCPP-Brand-Day_${e}${t===e?``:`_${t}`}_${n.toUpperCase()}${r===`landscape`?`_Landscape`:``}`;function F(e){return[...e?.days??[]].map(e=>({...e,looks:[...e.looks??[]].sort((e,t)=>e.slot-t.slot)})).map(e=>[`model`,`mua`,`exceptions`].some(t=>t in e)?e:{...e,...s(e,e.looks)}).filter(e=>e.looks.length).sort((e,t)=>e.date.localeCompare(t.date))}function I(e,t=`current`){let o=e.libraryRef??e.customRef,s=t===`landscape`?C:S;if(!o?.width||!o?.height)return{ref:o,w:s,h:56,img:null};let c=o.width/o.height,l=i(o.width,o.height),u=s/l;if(e.refStatus===`missing`)return{ref:o,w:s,h:56,img:null};let d=n(c,l,r(e,a(o),o));return{ref:o,w:s,h:u,ia:c,fa:l,img:{wMm:s*d.w,hMm:u*d.h}}}var L={hero:e=>`hero:${e.id}`,packshot:(e,t)=>`ps:${e.id}:${t}`,pose:(e,t)=>`pose:${e.id}:${t}`,logo:e=>`logo:${e}`,crew:(e,t)=>`crew:${e.date}:${t}`,styling:(e,t)=>`styling:${e.id}:${t}`};function R(t,i=[],s=[],l,u=`current`){let d=new Map,f=e=>d.has(e.key)||d.set(e.key,e);for(let d of t){for(let e of[`model`,`mua`]){let t=String(d[e]??``).normalize(`NFC`).trim().toLocaleLowerCase(),n=t&&s.find(n=>n.role===e&&n.name.normalize(`NFC`).trim().toLocaleLowerCase()===t)?.avatar;n?.url&&f({key:L.crew(d,e),role:`crew`,images:[n],wMm:7,hMm:7/c,ppmm:v})}for(let t of d.looks){let s=I(t,u);if(s.img){let e=t.libraryRef?.variants,n=t.customRef?.projectAssetId,r={key:L.hero(t),role:`hero`,wMm:s.img.wMm,hMm:s.img.hMm,ppmm:y};f(e?{...r,images:z([e.stage,e.zoom],s.img.wMm*y)}:{...r,asset:{id:n,variants:[`print`,`display`]}})}for(let i of e(t)){if(!i.variants||!i.width||!i.height)continue;let e=n(i.width/i.height,c,r(t,a(i),i)),[o,s]=[46*e.w,46/c*e.h];f({key:L.pose(t,i.assetId),role:`pose`,wMm:o,hMm:s,ppmm:v,images:z([i.variants.thumb,i.variants.stage,i.variants.zoom],o*v)})}for(let e of g(t,l))for(let n of Object.values(e.assets))f({key:L.styling(t,n.assetId),role:`styling`,wMm:46,hMm:46/c,ppmm:v,images:[n]});(t.products??[]).forEach((e,i)=>{let a=e.packshot;if(!a?.url||!a.width||!a.height)return;let s=n(a.width/a.height,c,r(t,o(e),a,!1)),[l,u]=[w[0]*s.w,w[1]*s.h],d={key:L.packshot(t,i),role:`packshot`,wMm:l,hMm:u,ppmm:v,images:[a]};f(a.width>=l*v?d:{...d,upgrade:{productId:e.productId,url:a.url}})});let d=t.kind===`library`&&i.find(e=>e.name===t.libraryRef?.brand);d?.logo&&f({key:L.logo(d.name),role:`logo`,images:[d.logo]})}}return[...d.values()]}function z(e,t){let n=e.filter(e=>e?.url&&e.width).sort((e,t)=>e.width-t.width),r=n.findIndex(e=>e.width>=t);return r<0&&(r=n.length-1),[...n.slice(r),...n.slice(0,r).reverse()]}function B(e,t){let n=(t??[]).find(t=>Object.values(t.variants??{}).some(t=>k(t.url)===k(e.upgrade.url)));return n?z(Object.values(n.variants),e.wMm*e.ppmm):e.images}function V(e,t,n){if(e.role===`logo`)return[t,n];let r=Math.min(1,e.wMm*e.ppmm/t,e.hMm*e.ppmm/n);return[Math.max(1,Math.round(t*r)),Math.max(1,Math.round(n*r))]}function H(e,t){let n=[];for(let r of e)for(let[,e,i]of r.matchAll(/\/\* ([\w-]+) \*\/\s*@font-face\s*\{([^}]*)\}/g)){if(!/-(latin|latin-ext|vietnamese)-/.test(e))continue;let r=e.match(/^newsreader-(.+)-opsz-(normal|italic)$/),a=r?`url(${t(`newsreader-${r[1]}-${r[2]}.ttf`)}) format('truetype')`:`url(${t(i.match(/url\(\.\/files\/([^)]+\.woff2)\)/)[1])}) format('woff2')`,o=i.replace(/src:[^;]+;/,`src:${a};`);r&&(o=o.replace(/font-weight:[^;]+;/,`font-weight:400;`)),n.push(`@font-face{${o.replace(/\s+/g,` `)}}`)}return n.join(`
`)}var U=(e,t,n=``,r=``)=>`<div class="kv${n}"><div class="k">${O(e)}</div><div class="v">${r}<span>${O(t)}</span></div></div>`,W=(e,t=``)=>`<div class="h"><span>${O(e)}</span>${t?`<span class="hx">${O(t)}</span>`:``}</div>`,G=e=>String(e??``).split(/\n+/).map(e=>e.trim()).filter(Boolean),K=(e,t)=>{let n=G(e);return n.length?n.map(e=>`<p class="p">${O(e)}</p>`).join(``):`<p class="p none">${O(t)}</p>`},q=(e,t,n)=>t?.trim()?[t.trim(),``]:n?.trim()?[`${e.na}: ${n.trim()}`,` na`]:[e.unassigned,` miss`];function J(e){return[!e.name?.trim()&&`name`,!(e.libraryRef??e.customRef)&&`reference`,!e.products?.length&&!e.exceptions?.kit?.trim()&&`kit`].filter(Boolean)}var Y=(e,t)=>[q(e,t.model,t.exceptions?.model),q(e,t.mua,t.exceptions?.mua)];function X(e){let t=[];for(let n of e){n.status!==`ready`&&t.push({code:`draft_day`,date:n.date});let e=l({exceptions:{},...n});e.length&&t.push({code:`incomplete_day`,date:n.date,detail:e.join(`,`)});for(let e of n.looks){let r=J(e);r.length&&t.push({code:`incomplete_look`,date:n.date,lookId:e.id,detail:r.join(`,`)}),e.refStatus===`missing`&&(e.libraryRef??e.customRef)&&t.push({code:`missing_reference`,date:n.date,lookId:e.id,detail:e.libraryRef?.assetId??e.customRef?.projectAssetId})}}return t}function Z({days:n,lang:i,meta:s,brands:l=[],images:_,styling:v,fontCss:y=``,bcppLogo:b,projectName:x=`BCPP Brand Day`,title:S,layout:C=`current`}){let E=te[i===`en`?`en`:`vi`];if(!n.length)throw Error(`empty_range`);let k=`${x||`BCPP Brand Day`} · Shooting Plan`,N=X(n),P=e=>N.push(e),F=e=>_.get(e)??null,R=(e,t)=>{let n=F(L.crew(e,t));return n?`<img class="crew-avatar" src="${O(n)}" alt="${O(e[t])}">`:``},z=e=>l.find(t=>t.name===e),B=re(E,s?.createdAt??new Date().toISOString()),V=s?.createdBy?.name?` · ${s.createdBy.name}`:``,H=e=>e.status===`ready`?`ready`:`draft`,q=({title:e,sub:t,right:n})=>`<header class="ph">
  <div class="prog"><img class="bcpp" src="${O(b)}" alt="BCPP"><span>${O(k)}</span></div>
  <div class="pr">${n}</div>
  <h1 class="date">${O(e)}</h1>
  <div class="dtitle">${O(t??``)}</div>
</header>`,J=({kind:e,head:t,body:n,meta:r,date:i})=>`<section class="page ${e}"${i?` data-date="${O(i)}"`:``}>
${t}
<div class="body">${n}</div>
<footer class="pf"><span class="fm">${O(r)}</span><span class="pno"></span></footer>
</section>`,Z=(e,t)=>{let n=u(e.width/e.height,c,t);return`left:${n.left}%;top:${n.top}%;width:${n.width}%;height:${n.height}%`},Q=(e,t=!1)=>{let n=e.libraryRef??e.customRef,i=n?.width&&n?.height&&e.refStatus!==`missing`&&F(L.hero(e)),o=n?E.lostRef:E.noRef;return`<div class="frame look-preview${t?` cal-avatar`:``}" data-look-id="${O(e.id)}">${i?`<img src="${O(i)}" alt="${O(e.name?.trim()||E.untitled)}" style="${Z(n,r(e,a(n),n))}">`:`<span aria-label="${O(o)}">${O(t?D(e.slot):o)}</span>`}</div>`};function oe(e,t,n,i){let a=n.id,s=e.packshot,c=`style="width:${M(w[0])};height:${M(w[1])}"`;if(!s?.url||!s.width||!s.height)return`<div class="ps none" ${c}><span>${O(E.noPackshot)}</span></div>`;let l=Z(s,r(n,o(e),s,!1)),u=F(t);return u?`<div class="ps frame" ${c}><img src="${O(u)}" alt="${O(e.productName)}" style="${l}"></div>`:(P({code:`missing_packshot`,date:i,lookId:a,detail:e.productId}),`<div class="ps none lost" ${c}><span>${O(E.lostPackshot)}</span></div>`)}function se(e,t,n,r){let i=e.variant,a=i?.name?`<div class="shade">${O(i.name)}</div>${i.collection?`<div class="coll">${O(i.collection)}</div>`:``}`:`<div class="shade none">${O(E.noShade)}</div>`,o=ie(e.note);return`<div class="item">${oe(e,t,n,r)}<div class="it">
  <div class="pn">${e.isKey?`<span class="key-label">${T}KEY</span> `:``}${O(e.productName)}</div>${a}${o?`<div class="nt">${O(o)}</div>`:``}${e.refStatus===`missing`?`<div class="gone">${O(E.gone)}</div>`:``}
</div></div>`}function ce(e,t){let n=I(e,C),{ref:i}=n,o=null;i&&e.refStatus!==`missing`&&(o=F(L.hero(e)),o||P({code:`missing_image`,date:t.date,lookId:e.id,detail:e.libraryRef?.filename??e.customRef?.filename}));let s=e.libraryRef?`${e.libraryRef.brand} · ${e.libraryRef.productName}`:e.customRef?E.customRef:``,c=`width:${M(n.w)};height:${M(o?n.h:56)}`;if(!o)return`<figure class="hero"><div class="ph-img${i?` lost`:``}" style="${c}"><span class="pl">${O(i?E.lostRef:E.noRef)}</span><span class="pf2">${O(i?e.libraryRef?.filename??e.customRef?.filename??``:E.kind.custom)}</span></div></figure>`;let l=u(n.ia,n.fa,r(e,a(i),i)),d=`left:${l.left.toFixed(3)}%;top:${l.top.toFixed(3)}%;width:${l.width.toFixed(3)}%;height:${l.height.toFixed(3)}%`;return`<figure class="hero"><div class="frame" style="${c}"><img src="${O(o)}" alt="${O(e.name)}" style="${d}"></div>${s?`<figcaption>${O(E.ref)} · ${O(s)}</figcaption>`:``}</figure>`}function le(t,n){let i=e(t);return i.length?`<section class="pack-poses-print"><h3 class="h">${O(E.poses)}</h3><div class="pose-grid" style="--pose-columns:${Math.min(6,i.length)}">${i.map((e,i)=>{let o=F(L.pose(t,e.assetId));return o||P({code:`missing_image`,date:n.date,lookId:t.id,detail:e.assetId}),`<figure class="pose" data-asset-id="${O(e.assetId)}"><div class="frame">${o?`<img src="${O(o)}" alt="Pose ${i+1}" style="${Z(e,r(t,a(e),e))}">`:`<span>${O(E.lostRef)}</span>`}</div><figcaption>Pose ${D(i+1)}</figcaption></figure>`}).join(``)}</div></section>`:``}function ue(e,t){if(!e.pack)return``;let n=g(e,v);return`<section class="sec styling-print">${W(`Styling & studio`,E.stylingRef)}${n.length?n.map(r=>`${n.length>1?`<p class="coll">${O(r.label)}</p>`:``}<div class="styling-grid">${ee.map(n=>{let i=r.assets[n],a=i&&F(L.styling(e,i.assetId));i&&!a&&P({code:`missing_image`,date:t.date,lookId:e.id,detail:i.assetId});let o=i?.proposal?n===`lighting`?E.lightingNote:E.outfitNote:``;return`<figure><div class="styling-board">${a?`<img src="${O(a)}" alt="${O(h[n])}">`:`<span>${O(i?E.lostPackshot:E.stylingWait)}</span>`}</div><figcaption><strong>${O(h[n])}</strong>${i?`<p>${O(i.description)}</p>${o?`<small>${O(o)}</small>`:``}`:``}</figcaption></figure>`}).join(``)}</div>`).join(``):`<p class="coll">${O(E.stylingPending)}</p>`}</section>`}let de=e=>`<span class="lab"><i class="dot${e.kind===`custom`?` custom`:``}" style="--c:${O(z(e.libraryRef?.brand)?.accent??`#191918`)}"></i>Look ${D(e.slot)} · ${O(E.kind[e.kind]??e.kind)}</span>`,fe=(e,t)=>{let n=e.kind===`library`&&e.libraryRef&&z(e.libraryRef.brand),r=n?.logo&&F(L.logo(n.name));return r?`<img class="blogo" src="${O(r)}" alt="${O(n.name)}" style="height:${M(t)};width:${M(t*n.logo.width/n.logo.height)}">`:``},pe=(e,t)=>`<div class="st ${H(e)}"><i></i>${O(E.status[H(e)])}</div><div class="stn">${O(t)}</div>`;function me(e){if(!e.shootList)return``;let t=m(e,e.shootList,i),n=i===`vi`,r=[n?`STT`:`No.`,n?`Sản phẩm / shade`:`Product / shade`,n?`Cảnh cần quay`:`Shot to film`,`Requirement ID`],a=d(e,t).map(({phase:e,takes:t})=>{let r=t.map(({row:e,number:t,label:r,shade:i,span:a})=>{let o=a?`<td class="shot-product" rowspan="${a}"><b>${O(r||`—`)}</b>${i?`<small>`+O(i)+`</small>`:``}</td>`:``,s=e.uses.map(e=>`<span>${O(e.requestId)}<small>${n?`Cảnh kịch bản`:`Script scene`} · ${O(e.sceneId)}</small></span>`).join(``);return`<tr class="shot-take"><td class="shot-no">${D(t)}</td>${o}<td>${O(e.title)}</td><td class="shot-use">${s}</td></tr>`});return`<tbody><tr class="shot-phase"><th scope="rowgroup" colspan="4">${O(p(e,i))}</th></tr>${r.join(``)}</tbody>`}),o=`<table class="shot-table"><colgroup><col class="shot-index-col"><col class="shot-product-col"><col><col class="shot-extra-col"></colgroup><thead><tr>${r.map(e=>`<th scope="col">`+O(e)+`</th>`).join(``)}</tr></thead>${a.join(``)}</table>`;return`<section class="sec shoot-print">${W(`Shoot List`)}${o}${f(e,e.shootList,i).map(e=>`<p class="coll">${O(e)}</p>`).join(``)}</section>`}function he(e,n,r){let i=e.exceptions??{},a=e.name?.trim(),o=(e.products??[]).map((t,r)=>se(t,L.packshot(e,r),e,n.date)),s=o.length?`<div class="kit">${o.join(``)}</div>`:`<p class="p ${i.kit?.trim()?`na`:`miss`}">${O(i.kit?.trim()?`${E.na}: ${i.kit.trim()}`:E.noKit)}</p>`,c=(e.products??[]).filter(e=>e.isKey).map(e=>`<section class="key-usp"><h3>${T}${O(e.productName)}${e.variant?` · ${O(e.variant.name)}`:``}</h3>${K(e.usp?.text,E.noUsp)}${e.usp?.containsInference?`<small>${O(E.inferred)}</small>`:``}</section>`).join(``),l=`<div class="look-visual">${ce(e,n)}${le(e,n)}</div>
<div class="look-copy"><div class="lh"><div class="lt">${de(e)}${fe(e,4.2)}</div><h2 class="ln${a?``:` miss`}">${O(a||E.untitled)}</h2>${e.pack?`<p class="coll">Pack · ${O(e.pack.name)} · ${t(e.pack).length}/${e.pack.assetIds.length} ${O(E.packImages)}</p>`:``}</div>
<div class="people">${Y(E,n).map(([e,t],r)=>U(r?E.mua:E.model,e,t,R(n,r?`mua`:`model`))).join(``)}</div>
<section class="sec">${W(E.brief)}${K(e.brief,E.noBrief)}</section>
<section class="sec">${W(E.kit,o.length?E.items(new Set(e.products.map(e=>e.productId)).size):``)}${s}</section>
${c}
<section class="sec">${W(e.kind===`custom`?E.productionBrief:E.notes)}${K(e.notes,E.noNotes)}</section>
${ue(e,n)}${me(e)}</div>`;return J({kind:`look`,date:n.date,head:q({title:ne(E,n.date),sub:n.title?.trim(),right:pe(n,`Look ${D(r+1)} / ${D(n.looks.length)}`)}),body:l,meta:`${E.exported} ${B} · ${E.rev} ${n.revision??0}${V}`})}let $=[];if(n.length>1||s?.from&&s?.to&&s.from<s.to){let e=s?.from??n[0].date,t=s?.to??n.at(-1).date,r=n.map(e=>e.revision??0),[i,a]=[Math.min(...r),Math.max(...r)],o=String(s?.revisionLabel??``).replace(/(?:\d{4}-)?\d{2}-\d{2} r\d+(?: · (?:\d{4}-)?\d{2}-\d{2} r\d+)*|\brev \d+/,`${E.rev} ${i}${a>i?`–${a}`:``}`),c=`${E.exported} ${B}${o?` · ${o}`:``}${V}`;for(let r of new Set(n.map(e=>e.date.slice(0,7)))){let i=n.filter(e=>e.date.startsWith(r)),a=new Map(i.map(e=>[e.date,e])),[o,s]=A(r),l=(new Date(Date.UTC(o,s-1,1)).getUTCDay()+6)%7,u=new Date(Date.UTC(o,s,0)).getUTCDate(),d=Array.from({length:Math.ceil((l+u)/7)*7},(e,t)=>{let n=t-l+1;if(n<1||n>u)return`<td class="cal-out"></td>`;let i=`${r}-${D(n)}`,o=a.get(i);return`<td data-date="${i}" class="${o?`cal-planned ${H(o)}`:``}"><div class="cal-cell"><div class="cal-num">${D(n)}${o?`<span>${O(E.looks(o.looks.length))}</span>`:``}</div>${o?`<div class="cal-avatars">${o.looks.map(e=>Q(e,!0)).join(``)}</div><p class="cal-title">${O(o.title?.trim()||[...new Set(o.looks.map(e=>e.libraryRef?.brand).filter(Boolean))].join(` · `)||E.kind.custom)}</p><div class="cal-state">${O(E.status[H(o)])}</div>`:``}</div></td>`}),f=[];for(let e=0;e<d.length;e+=7)f.push(`<tr>${d.slice(e,e+7).join(``)}</tr>`);let p=i.reduce((e,t)=>e+t.looks.length,0),m=i.filter(e=>e.status===`ready`).length,h=`<div class="st plain">${O(E.days(i.length))} · ${O(E.looks(p))}</div><div class="stn">${O(E.readyCount(m,i.length-m))}</div>`;$.push(J({kind:`calendar`,head:q({title:E.month(o,s),sub:E.overview,right:h}),body:`<table class="month-grid"><thead><tr>${E.weekdaysShort.map(e=>`<th scope="col">${e}</th>`).join(``)}</tr></thead><tbody>${f.join(``)}</tbody></table><p class="calendar-note">${O(E.calendarNote)}</p><p class="calendar-range">${O(j(E,e))} – ${O(j(E,t))}</p>`,meta:c}))}}for(let[e,t]of n.entries())$.push(J({kind:`divider`,date:t.date,head:q({title:ne(E,t.date),sub:t.title?.trim(),right:pe(t,`${D(e+1)} / ${D(n.length)} · ${E.looks(t.looks.length)}`)}),body:`<p class="divider-label">${O(E.dayOverview)}</p><div class="divider-content"><aside class="divider-info"><div class="people">${Y(E,t).map(([e,n],r)=>U(r?E.mua:E.model,e,n,R(t,r?`mua`:`model`))).join(``)}</div>${G(t.notes).length?`<section class="sec">${W(E.dayNotes)}${K(t.notes,``)}</section>`:``}</aside><div class="divider-looks">${t.looks.map(e=>`<figure class="divider-look">${Q(e)}<figcaption>${de(e)}<h2>${O(e.name?.trim()||E.untitled)}</h2>${(e.products??[]).filter(e=>e.isKey).map(e=>`<p class="divider-focus">${O(e.productName)}${e.variant?.name?` · ${O(e.variant.name)}`:``}</p>`).join(``)}</figcaption></figure>`).join(``)}</div></div>`,meta:`${E.exported} ${B} · ${E.rev} ${t.revision??0}${V}`})),t.looks.forEach((e,n)=>$.push(he(e,t,n)));let ge=S??`${k} · ${n[0].date}${n.length>1?` – ${n.at(-1).date}`:``}`;return{html:`<!doctype html><html lang="${i===`en`?`en`:`vi`}"><head><meta charset="utf-8"><title>${O(ge)}</title>
<style>${y}\n${ae}</style></head><body class="${C===`landscape`?`landscape`:``}"><main id="doc">${$.join(`
`)}</main></body></html>`,warnings:N}}var ae=`
@page { size: ${b}mm 297mm; margin: 0; }
:root { --paper: ${_}; --ink: #191918; --muted: #77746e; --soft: #4a4844; --rule: #d9d5ce; --hair: #e7e3dc; --wash: #f1eee9; --warn: #a3543a; --ok: #4d7a5a;
  --serif: 'Newsreader Variable', Georgia, serif; --sans: 'Be Vietnam Pro', sans-serif; --mono: 'JetBrains Mono', monospace; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { background: var(--paper); color: var(--ink); font: 400 10pt/1.42 var(--sans); font-kerning: normal; text-rendering: geometricPrecision; }
.page { width: ${b}mm; min-height: 297mm; padding: ${x}mm; display: flex; flex-direction: column; overflow: hidden; background: var(--paper); break-after: page; position: relative; }
.page:last-child { break-after: auto; }
.landscape .page { width:297mm; min-height:210mm; }
.landscape .look .body { display:grid;grid-template-columns:110mm minmax(0,1fr);gap:9mm;align-items:start; }
.landscape .look-visual { min-width:0; }
.landscape .look-copy { grid-column:2;grid-row:1; }
.landscape .pose-grid { grid-template-columns:repeat(min(3,var(--pose-columns)),minmax(0,1fr)); }
.pack-poses-print { margin:0 0 5mm; }
.pose-grid { display:grid;grid-template-columns:repeat(var(--pose-columns),minmax(0,1fr));gap:3mm 4mm;max-width:calc(var(--pose-columns) * 46mm + (var(--pose-columns) - 1) * 4mm); }
.pose { break-inside:avoid; }
.pose>div { width:100%;aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;background:var(--wash); }
.shoot-print { color:var(--ink);overflow-wrap:anywhere; }
.shot-table {width:100%;table-layout:fixed;border-collapse:collapse;margin-top:2mm;font:400 8.5pt/1.35 var(--sans);color:var(--ink);}
.shot-table .shot-index-col {width:9%;}
.shot-table .shot-product-col {width:33%;}
.shot-table .shot-extra-col {width:24%;}
.shot-table td,.shot-table th {text-align:left;padding:1.35mm 2mm;vertical-align:middle;overflow-wrap:anywhere;}
.shot-table thead th {background:#393832;color:var(--paper);font:500 8pt/1.4 var(--sans);}
.shot-table .shot-phase th {background:var(--wash);font:500 9.5pt/1.3 var(--serif);border-block:.22mm solid var(--rule);}
.shot-take td {border-bottom:.15mm solid var(--hair);}
.shot-take td+td,.shot-product {border-left:.15mm solid var(--hair);}
.shot-table .shot-no {font:400 7.5pt var(--mono);color:var(--muted);}
.shot-product b {display:block;font-weight:500;}
.shot-product small {display:block;margin-top:.45mm;color:var(--soft);font-size:7.5pt;}
.shot-use small {display:block;font:400 7pt/1.4 var(--sans);color:var(--soft);}
.shot-use span+span {margin-top:1.1mm;}
.shot-use span {display:block;font:400 7.5pt/1.4 var(--mono);color:#674d34;}
.styling-grid { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4mm;margin-top:2mm;break-inside:avoid; }
.styling-board { width:100%;max-width:46mm;aspect-ratio:3/4;display:grid;place-items:center;margin:auto; }
.styling-board img { width:100%;height:100%;object-fit:contain;display:block; }
.styling-board span { font-size:8pt;color:var(--muted); }
.styling-grid figcaption { font-size:8pt;line-height:1.4;margin-top:1.5mm; }
.styling-grid strong { font-weight:500; }
.styling-grid p,.styling-grid small { display:block;color:var(--muted);margin-top:1mm; }
.pose img { display:block;max-width:none;max-height:none; }
.pose span { font:400 8pt var(--sans);color:var(--muted);text-align:center;padding:2mm; }
.pose figcaption { font:400 7.5pt/1.4 var(--mono);color:var(--muted);margin-top:1mm; }
.landscape .kit { grid-template-columns:repeat(2,minmax(0,1fr)); }
.key-label { font:500 8pt var(--sans);color:#806e45; }
.star { display:inline-block;width:.85em;height:.85em;margin-right:.3em;vertical-align:-.08em;fill:currentColor; }
.key-usp { margin-top:4mm;padding:3mm;background:var(--wash);overflow-wrap:anywhere; }
.key-usp h3 { font:500 10pt var(--sans);margin-bottom:2mm; }
.key-usp small { color:var(--muted); }
.ph { flex: none; display: grid; grid-template-columns: minmax(0, 1fr) auto; row-gap: 3mm; column-gap: 6mm; border-bottom: 0.2mm solid var(--rule); padding-bottom: 3.2mm; }
.prog { display: flex; align-items: center; gap: 3mm; font: 400 8.5pt/1 var(--mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
.bcpp { height: 5.6mm; width: auto; display: block; }
.pr { grid-row: 1 / 3; grid-column: 2; align-self: end; text-align: right; }
.date { grid-column: 1; font: 400 20pt/1.08 var(--serif); letter-spacing: -0.01em; }
.dtitle { grid-column: 1; margin-top: -1.6mm; font: italic 400 12pt/1.25 var(--serif); color: var(--soft); overflow-wrap: anywhere; }
.dtitle:empty { display: none; }
.st { display: inline-flex; align-items: center; gap: 2mm; font: 500 10pt/1.2 var(--sans); }
.st i { width: 2.4mm; height: 2.4mm; border-radius: 50%; border: 0.3mm solid var(--ink); display: inline-block; }
.st.ready i { background: var(--ok); border-color: var(--ok); }
.stn { margin-top: 1.2mm; font: 400 8.5pt/1.2 var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); white-space: nowrap; }
.body { flex: 1; margin: 5mm 0 4mm; }
.pf { flex: none; padding-top: 2.4mm; border-top: 0.2mm solid var(--rule); display: flex; align-items: flex-end; justify-content: space-between; gap: 8mm; font: 400 8.5pt/1.3 var(--sans); color: var(--muted); }
.fm { min-width: 0; overflow-wrap: anywhere; }
.pno { font: 400 8.5pt/1.3 var(--mono); color: var(--ink); white-space: nowrap; flex: none; }
.lab { display: inline-flex; align-items: center; gap: 1.8mm; font: 400 8.5pt/1.2 var(--mono); letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
.dot { width: 1.9mm; height: 1.9mm; border-radius: 50%; background: var(--c); display: inline-block; flex: none; }
.dot.custom { background: transparent; border: 0.3mm solid var(--ink); }
.hero { margin-bottom: 5mm; }
.frame { position: relative; overflow: hidden; background: var(--wash); }
.frame img { position: absolute; display: block; max-width: none; }
.hero figcaption { margin-top: 1.8mm; font: 400 8.5pt/1.3 var(--sans); color: var(--muted); overflow-wrap: anywhere; }
.ph-img { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2mm; padding: 4mm; text-align: center; background: var(--wash); border: 0.2mm solid var(--hair); }
.ph-img .pl { font: italic 400 13pt/1.25 var(--serif); color: var(--soft); }
.ph-img .pf2 { font: 400 8.5pt/1.3 var(--mono); letter-spacing: 0.06em; color: var(--muted); overflow-wrap: anywhere; }
.ph-img.lost { border: 0.3mm dashed var(--warn); }
.ph-img.lost .pl { color: var(--warn); }
.lh { padding-bottom: 3mm; border-bottom: 0.2mm solid var(--rule); }
.lt { display: flex; align-items: center; justify-content: space-between; gap: 3mm; min-height: 4.4mm; }
.blogo { display: block; flex: none; }
.ln { margin-top: 1.6mm; font: 400 26pt/1.08 var(--serif); letter-spacing: -0.01em; overflow-wrap: anywhere; }
.ln.miss { color: var(--warn); font-style: italic; }
.people { display: grid; grid-template-columns: 1fr 1fr; column-gap: 8mm; padding: 3mm 0 1mm; }
.kv { padding-bottom: 2mm; overflow-wrap: anywhere; }
.k, .h { font: 400 8.5pt/1.2 var(--mono); letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
.kv .v { margin-top: 0.8mm; font: 500 10.5pt/1.3 var(--sans); display:flex; align-items:center; gap:2mm; }
.crew-avatar { width:7mm; height:${7/.75}mm; object-fit:cover; border-radius:1mm; flex:none; }
.miss .v, .p.miss { color: var(--warn); }
.na .v, .p.na { color: var(--soft); font-weight: 400; }
.sec { margin-top: 2mm; }
.h { display: flex; justify-content: space-between; gap: 3mm; padding: 2.4mm 0 1.6mm; border-top: 0.2mm solid var(--hair); }
.p { margin-bottom: 1.4mm; overflow-wrap: anywhere; }
.p.none { color: var(--muted); }
.kit { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 5mm; }
.item { display: grid; grid-template-columns: auto minmax(0, 1fr); column-gap: 2.6mm; align-items: center; padding: 1.4mm 0; break-inside: avoid; }
.ps { display: flex; align-items: center; justify-content: center; }
.ps.frame { background:transparent; }
.ps img { display: block; }
.ps.none { border: 0.2mm dashed var(--rule); padding: 1mm; text-align: center; font: 400 8pt/1.15 var(--sans); color: var(--muted); }
.ps.none.lost { border-color: var(--warn); color: var(--warn); }
.pn { font: 500 9.5pt/1.25 var(--sans); overflow-wrap: anywhere; }
.shade { margin-top: 0.4mm; font: 400 9pt/1.28 var(--sans); overflow-wrap: anywhere; }
.coll { font: 400 8.5pt/1.28 var(--sans); color: var(--muted); overflow-wrap: anywhere; }
.shade.none { color: var(--warn); }
.nt { margin-top: 0.5mm; font: 400 8.5pt/1.3 var(--sans); color: var(--soft); overflow-wrap: anywhere; }
.gone { margin-top: 0.5mm; font: 400 8.5pt/1.2 var(--mono); color: var(--warn); }
.month-grid { width:100%;table-layout:fixed;border-collapse:collapse; }
.month-grid th { text-align:left;font:400 8pt/1.2 var(--mono);letter-spacing:.08em;color:var(--muted);padding:2mm; }
.month-grid td { vertical-align:top;border:.2mm solid var(--rule); }
.cal-cell { min-height:30mm;padding:2mm; }
.cal-out { background:var(--wash); }
.cal-planned { background:#f0ece4; }
.cal-num { display:flex;align-items:baseline;justify-content:space-between;gap:1mm;font:400 14pt/1.1 var(--serif); }
.cal-num span { font:400 6.5pt/1.2 var(--mono);white-space:nowrap;color:var(--muted); }
.look-preview { width:100%;aspect-ratio:3/4; }
.look-preview span { position:absolute;inset:0;display:grid;place-items:center;padding:2mm;font:400 8pt/1.4 var(--sans);color:var(--muted);text-align:center;border:.2mm dashed var(--rule); }
.cal-avatars { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8mm;margin-top:2mm; }
.cal-avatar span { padding:0;font:400 6pt/1 var(--mono); }
.cal-title { margin-top:2mm;font:500 8pt/1.4 var(--sans);overflow-wrap:anywhere; }
.cal-state { margin-top:2mm;font:400 6.5pt/1.2 var(--mono);color:var(--muted); }
.cal-planned.ready .cal-state { color:var(--ok); }
.calendar-note { margin-top:4mm;font:400 8pt/1.5 var(--sans);color:var(--muted); }
.calendar-range { margin-top:1.5mm;font:400 7.5pt/1.4 var(--mono);color:var(--muted); }
.landscape .cal-cell { min-height:21mm; }
.page.divider { background:#eee9e2; }
.divider .pr { grid-row:1;align-self:center; }
.divider .date { grid-column:1 / -1;font-size:30pt;margin-top:2mm; }
.divider .dtitle { grid-column:1 / -1;font-style:normal;font-size:15pt;margin-top:0; }
.divider-label { margin-bottom:5mm;font:400 8.5pt/1.4 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--muted); }
.divider-content { display:grid;grid-template-columns:58mm minmax(0,1fr);gap:8mm;align-items:start; }
.divider-info { min-width:0;padding-right:6mm;border-right:.2mm solid var(--rule); }
.divider .people { grid-template-columns:minmax(0,1fr);gap:4mm;padding:0; }
.divider .kv { padding-bottom:0; }
.divider-info .sec { margin-top:5mm; }
.divider-info .p { font-size:9pt;line-height:1.65; }
.divider-looks { display:flex;flex-direction:column;gap:5mm; }
.divider-look { display:grid;grid-template-columns:40mm minmax(0,1fr);gap:5mm;align-items:center;min-width:0;padding-bottom:5mm;border-bottom:.2mm solid var(--rule); }
.divider-look:last-child { padding-bottom:0;border-bottom:0; }
.divider-look .look-preview { width:40mm; }
.divider-look figcaption { min-width:0; }
.divider-look .lab { font-size:7.5pt;letter-spacing:.08em; }
.divider-look h2 { margin-top:2mm;font:400 17pt/1.2 var(--serif);overflow-wrap:anywhere; }
.divider-focus { margin-top:2mm;font:400 8.5pt/1.5 var(--sans);color:var(--soft);overflow-wrap:anywhere; }
.landscape .divider-content { grid-template-columns:70mm minmax(0,1fr);gap:10mm; }
.landscape .divider-look { grid-template-columns:30mm minmax(0,1fr);gap:6mm; }
.landscape .divider-look .look-preview { width:30mm; }
.landscape .divider .date { font-size:28pt; }
`;async function Q(e){e.body.getBoundingClientRect(),await e.fonts.ready,await Promise.all([...e.images].map(e=>e.decode()));let t=[...e.fonts].filter(e=>e.status===`error`);if(t.length)throw Error(`font failed: ${t[0].family}`);let n=[...e.getElementById(`doc`).children],r=96/25.4,i=5e3,a=[];n.forEach((t,o)=>{if(t.querySelector(`.pno`).textContent=`${o+1} / ${n.length}`,e.body.classList.contains(`landscape`))for(let e=0;e<3;e++){let e=t.getBoundingClientRect();if(e.width>=e.height*1.414)break;let n=Math.ceil(e.height/r*1.414);if(n<=323){t.style.width=`${n}mm`;continue}let i=t.style.width;t.style.width=`323mm`,t.getBoundingClientRect().height>e.height-r&&(t.style.width=i);break}let s=Math.round(t.getBoundingClientRect().width/r),c=Math.ceil(t.getBoundingClientRect().height/r-.05);if(c>i||s>i)throw Error(`pdf_overflow: page ${o+1}`);a.push(`@page p${o+1} { size: ${s}mm ${c}mm; margin: 0; }`),t.style.height=`${c}mm`,t.style.page=`p${o+1}`});let o=e.createElement(`style`);return o.textContent=a.join(`
`),e.head.append(o),n.length}export{_ as PAPER,P as exportBaseName,H as fontFaceCss,R as imageNeeds,Q as paginate,F as planDays,X as planWarnings,Z as renderPlanHtml,V as targetSize,B as upgradeOrder,z as variantOrder};