/* ============================================================
   PAW U — VERSUS
   Экран выбора бойца + листы персонажей, групп, треков, мест.
   Два языка (EN по умолчанию), гейт 18+, ссылки на карточки.
   ============================================================ */
(() => {
"use strict";
const { $, $$, esc, time, group, track, npc, loc, groupTracks,
        locResidents, audio, lyrics, router } = PAW;

/* ---------- язык ---------- */
const load = (k, d) => { try { return localStorage.getItem(k) || d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
let LANG = load("pawu-lang", "en"); if (!SITE.ui[LANG]) LANG = "en";
const T = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[LANG] ?? v.en ?? v.ru ?? "") : (v ?? "");
const U = () => SITE.ui[LANG];

/* неподтверждённое каноном — пунктиром */
const Mx = s => esc(T(s)).replace(/\[\[([\s\S]*?)\]\]/g, (_, x) => `<i class="tbd" title="${esc(U().tbd)}">${x}</i>`);
const clean = s => String(T(s)).replace(/\[\[|\]\]/g, "");

/* цвет команды */
const TEAM = { hickeys:"var(--hk)", hbs:"var(--hb)", tj:"var(--tj)" };
const INK  = { red:"var(--hk)", violet:"var(--hb)", orange:"var(--tj)", blue:"var(--bl)", green:"var(--gr)" };
const colorOf = o => TEAM[o?.id] || TEAM[o?.group] || INK[o?.ink] || "var(--hk)";

/* ============================================================
   КАРТИНКА С ЗАГЛУШКОЙ — IMG/<папка>/<id>.(webp|jpg|png|jpeg)
   size:"sm"|"md" — сначала уменьшенная копия IMG/<папка>/sm|md/<id>.webp
   (кружки, вкладки, карточки, плеер); нет копии — берём полный размер
   ============================================================ */
const EXT = ["webp", "jpg", "png", "jpeg"];
const imgSrcs = (b, s) => [...(s ? [b.replace(/[^/]+$/, `${s}/$&`) + ".webp"] : []), ...EXT.map(x => `${b}.${x}`)];
function im(kind, id, opt = {}) {
  const base = `../IMG/${kind}/${id}`, s = opt.size || "";
  const init = (opt.initial || id[0]).toUpperCase();
  return `<figure class="im ${opt.cls || ""}">
    <div class="ph"><span>${esc(init)}</span><small>IMG/${esc(kind)}/${esc(id)}.jpg</small></div>
    <img alt="" data-b="${esc(base)}" data-s="${s}" data-i="0" src="${esc(imgSrcs(base, s)[0])}" decoding="async"
         onerror="PAWimg(this)" onload="this.parentNode.classList.add('ok')">
  </figure>`;
}
window.PAWimg = el => {
  const list = imgSrcs(el.dataset.b, el.dataset.s), i = +el.dataset.i + 1;
  if (i < list.length) { el.dataset.i = i; el.src = list[i]; return; }
  el.parentNode?.classList.add("none");
  el.remove();
};
const face = (n, opt = {}) => im("people", n.id, { initial: n.short[0], ...opt });
const SM = { size:"sm" }, MD = { size:"md" };

/* ---------- кто выбран слева и справа ---------- */
const ST = { L: load("pawu-L", "troy"), R: load("pawu-R", "selene") };
if (!group("hickeys").members.includes(ST.L)) ST.L = "troy";
if (!group("hbs").members.includes(ST.R))     ST.R = "selene";

/* ---------- кирпичики ---------- */
const chip = (k, v, raw) => `<span class="chip">${esc(k)}<b>${raw ? v : Mx(v || "—")}</b></span>`;
const BOLT = `<svg class="bolt" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>`;   /* метка топ-трека */
const back = (h = "#/", t) => `<a class="back" href="${h}">← ${esc(t || U().back)}</a>`;

function tracks(list) {
  const scope = list.map(t => t.id);
  return `<div class="trs">${list.flatMap(t => t.versions.map((v, vi) => `
    <div class="tr" data-t="${t.id}" data-v="${vi}">
      <button onclick='PAW.audio.one("${t.id}",${vi},${JSON.stringify(scope)})' aria-label="play">▶</button>
      <a class="tt" href="#/t/${t.id}">
        <div class="t">${Mx(v.label)}${t.top ? `<span class="hit" title="${esc(U().top)}">${BOLT}</span>` : ""}</div>
        <div class="s">${esc(group(t.group)?.short || "")} · ${esc(v.lang)} · ${esc(T(t.style))}</div>
      </a>
      <a class="dl" href="${esc(v.audio || "#")}" download>mp3</a>
    </div>`)).join("")}</div>`;
}

/* ============================================================
   ЭКРАНЫ
   ============================================================ */
const metaLine = n => `${Mx(n.species)}${n.age ? " · " + n.age : ""} · ${Mx(n.role)}`;

function side(s, g, sel) {
  const n = npc(sel);
  return `<section class="side ${s}" data-side="${s}" data-team="${g.id}" style="--c:${TEAM[g.id]}">
    <div class="roster">${g.members.map(id => {
      const m = npc(id);
      return `<button class="tab ${id === sel ? "on" : ""}" data-side="${s}" data-id="${id}" title="${esc(m.short)}">${face(m, SM)}</button>`;
    }).join("")}</div>
    <a class="art" href="#/p/${n.id}" aria-label="${esc(n.name)}">${face(n, { cls:"art-im" })}</a>
    <div class="nb">
      <div class="team">${esc(g.short)}</div>
      <h1 class="nm">${esc(n.name)}</h1>
      <div class="meta">${metaLine(n)}</div>
    </div>
  </section>`;
}

/* смена бойца по клику — меняем только арт и подпись, без перерисовки панели */
function swapSide(s, id) {
  const sec = $(`.side.${s}`); if (!sec) return;
  const n = npc(id);
  const art = $(".art", sec);
  art.href = `#/p/${n.id}`; art.setAttribute("aria-label", n.name);
  art.innerHTML = face(n, { cls:"art-im" });
  $(".nm", sec).textContent = n.name;
  $(".meta", sec).innerHTML = metaLine(n);
  $$(".tab", sec).forEach(b => b.classList.toggle("on", b.dataset.id === id));
}

function home() {
  const hk = group("hickeys"), hb = group("hbs"), ev = SITE.meta.event, tj = npc("tj");
  return `<div class="stage">
    ${side("L", hk, ST.L)}
    <div class="mid">
      <div class="vs">VS</div>
      <div class="when">${esc(T(ev.when))}<br>${esc(T(ev.where))}</div>
      <a class="guest" href="#/p/tj">${face(tj, SM)}<span>${esc(U().guest)}<b>TJ</b></span></a>
    </div>
    ${side("R", hb, ST.R)}
  </div>`;
}

function cardLinks(n) {
  if (!n.main) return "";
  const btn = (url, label) => url
    ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}<i>↗</i></a>`
    : `<a href="#" data-empty="1" title="${esc(U().noLink)}" onclick="return false">${esc(label)}<i>—</i></a>`;
  return `<div class="cards">${btn(n.cards?.st, U().stCard)}${btn(n.cards?.janitor, U().janitor)}</div>`;
}

function sheet(id) {
  const n = npc(id); if (!n) return e404();
  const g = n.group ? group(n.group) : null, l = n.loc ? loc(n.loc) : null, u = U();
  const all = SITE.npcs.map(x => x.id), i = all.indexOf(id);
  const prev = all[(i - 1 + all.length) % all.length], next = all[(i + 1) % all.length];
  const rel = SITE.links.filter(x => x.a === id || x.b === id);
  const ts = g?.id === "tj" ? groupTracks("tj") : [];
  const likes = T(n.likes), dislikes = T(n.dislikes), quotes = T(n.quotes) || [];
  return `<div class="sheet" style="--c:${colorOf(n)}">
    <div class="sheet-art">${face(n, { cls:"big-im" })}
      <div class="sheet-nav"><a href="#/p/${prev}" title="${esc(npc(prev).short)}">←</a><a href="#/p/${next}" title="${esc(npc(next).short)}">→</a></div>
    </div>
    <div class="sheet-body">
      ${back()}
      <div class="team">${g ? `<a href="#/g/${g.id}">${esc(g.short)}</a> · ` : ""}${Mx(n.role)}</div>
      <h1 class="nm-xl">${esc(n.name)}</h1>
      <div class="chips">
        ${chip(u.species, n.species)}${n.age ? chip(u.age, String(n.age)) : ""}
        ${chip(u.major, n.major)}${chip(u.year, n.year)}
        ${l ? chip(u.where, `<a href="#/l/${l.id}">${esc(l.name)}</a>`, true) : ""}
      </div>
      ${cardLinks(n)}
      <p class="lead">${Mx(n.oneLiner)}</p>
      <div class="prose">${(T(n.bio) || []).map(p => `<p>${Mx(p)}</p>`).join("")}</div>
      ${likes ? `<div class="ld"><b>${esc(u.likes)}</b>${Mx(likes)}</div>` : ""}
      ${dislikes ? `<div class="ld"><b>${esc(u.dislikes)}</b>${Mx(dislikes)}</div>` : ""}
      ${quotes.length ? `<blockquote class="quote">«${Mx(quotes[0])}»</blockquote>` : ""}
      ${rel.length ? `<h3 class="h"><a href="#/links" onclick="PAWlk('${id}')">${esc(u.rel)} →</a></h3><div class="rel">${rel.map(r => {
        const oid = r.a === id ? r.b : r.a, o = npc(oid); if (!o) return "";
        return `<a href="#/p/${oid}">${face(o, SM)}<span><b>${esc(o.short)}</b><small>${Mx(r.label)}</small></span></a>`;
      }).join("")}</div>` : ""}
      ${g?.solo ? `<h3 class="h">${esc(u.tracks)}</h3>${ts.length ? tracks(ts) : `<p class="soon">${esc(u.nothing)}</p>`}` : ""}
    </div>
  </div>`;
}

function gsheet(id) {
  const g = group(id); if (!g) return e404();
  const ts = groupTracks(g.id), u = U();
  return `<div class="sheet" style="--c:${TEAM[g.id]}">
    <div class="sheet-art grid-art">${g.members.map(m => {
      const n = npc(m); return `<a class="ga" href="#/p/${m}">${face(n, MD)}<span>${esc(n.short)}</span></a>`;
    }).join("")}</div>
    <div class="sheet-body">
      ${back()}
      <div class="team">${esc(g.alt)} · ${esc(T(g.kind))}</div>
      <h1 class="nm-xl">${esc(g.name)}</h1>
      <div class="chips">${chip(u.turf, g.turf)}${chip(u.members, g.members.map(m => npc(m).short).join(", "))}</div>
      <p class="lead">${Mx(g.oneLiner)}</p>
      <div class="prose">${(T(g.bio) || []).map(p => `<p>${Mx(p)}</p>`).join("")}</div>
      <h3 class="h">${esc(u.tracks)}</h3>
      ${ts.length ? tracks(ts) + `<button class="seal" onclick='PAW.audio.one("${ts[0].id}",0,${JSON.stringify(ts.map(t => t.id))})'>${esc(u.listenAll)}</button>`
                  : `<p class="soon">${esc(u.nothing)}</p>`}
    </div>
  </div>`;
}

function tsheet(id) {
  const t = track(id); if (!t) return e404();
  const g = group(t.group), u = U(), credits = T(t.credits) || [];
  return `<div class="sheet" style="--c:${TEAM[g?.id] || "var(--hk)"}">
    <div class="sheet-art"><div class="cover-wrap">${im("covers", t.id, { initial: clean(t.title)[0] })}</div></div>
    <div class="sheet-body">
      ${back(g ? `#/g/${g.id}` : "#/", g ? g.short : undefined)}
      <div class="team">${esc(g?.short || "")} · ${esc(T(t.style))}</div>
      <h1 class="nm-xl">${Mx(t.title)}</h1>
      <div class="chips">${t.top ? `<span class="chip top-chip">${BOLT}<b>${esc(u.top)}</b></span>` : ""}${t.bpm && t.bpm !== "—" ? chip(u.tempo, String(t.bpm)) : ""}${chip(u.versions, String(t.versions.length))}
        ${t.promptFile ? `<a class="chip" href="${esc(t.promptFile)}" target="_blank">${esc(u.style)}<b>txt</b></a>` : ""}</div>
      <p class="lead">${Mx(t.about)}</p>
      ${credits.length ? `<div class="ld"><b>${esc(u.made)}</b>${credits.map(esc).join("<br>")}</div>` : ""}
      <h3 class="h">${esc(u.listen)}</h3>
      ${tracks([t])}
      <h3 class="h">${esc(u.lyrics)}</h3>
      <div class="lyrtabs" id="lt">${t.versions.map((v, i) => `<button data-i="${i}" class="${i ? "" : "on"}">${esc(v.lang)}</button>`).join("")}</div>
      <div class="lyr" id="ly">…</div>
    </div>
  </div>`;
}

function place(id) {
  const l = loc(id); if (!l) return e404();
  const res = locResidents(l.id), u = U();
  return `<div class="sheet wide" style="--c:${colorOf(l)}">
    <div class="sheet-art" data-loc="${l.id}">${im("places", l.id, { initial: l.name[0] })}</div>
    <div class="sheet-body">
      <p class="imgnote">${esc(u.imgNote)}</p>
      ${back("#/places", u.places)}
      <div class="team">${esc(T(l.kind))}</div>
      <h1 class="nm-xl">${esc(l.name)}</h1>
      <p class="lead">${Mx(l.oneLiner)}</p>
      <div class="prose">${(T(l.bio) || []).map(p => `<p>${Mx(p)}</p>`).join("")}</div>
      ${res.length ? `<h3 class="h">${esc(u.here)}</h3><div class="rel">${res.map(n =>
        `<a href="#/p/${n.id}">${face(n, SM)}<span><b>${esc(n.short)}</b><small>${Mx(n.role)}</small></span></a>`).join("")}</div>` : ""}
    </div>
  </div>`;
}

const places = () => `<div class="ls">
  ${back()}
  <h1 class="nm-xl">${esc(U().places)}</h1>
  <p class="imgnote">${esc(U().imgNote)}</p>
  <div class="rows">${SITE.locations.map(l => `
    <a class="row" href="#/l/${l.id}" data-loc="${l.id}" style="--c:${colorOf(l)}">
      <span class="row-th"></span>
      <span class="row-k">${esc(T(l.kind))}</span><span class="row-n">${esc(l.name)}</span>
      <span class="row-x">${Mx(l.oneLiner)}</span>
    </a>`).join("")}</div>
</div>`;

/* карточка персонажа для страницы лора */
const charCard = n => `<a class="cc" href="#/p/${n.id}" style="--c:${colorOf(n)}">
  ${face(n, MD)}
  <div class="cc-b">
    <div class="cc-n">${esc(n.name)}</div>
    <div class="cc-r">${Mx(n.role)}</div>
    <div class="cc-s">${Mx(n.species)}${n.age ? " · " + n.age : ""}</div>
  </div>
</a>`;

const lore = () => {
  const u = U();
  const bands = SITE.groups.filter(g => !g.solo).map(g => ({ g, list: g.members.map(npc).filter(n => n && n.main) }));
  const solo  = SITE.groups.filter(g =>  g.solo).flatMap(g => g.members.map(npc)).filter(n => n && n.main);
  const npcs  = SITE.npcs.filter(n => !n.main);
  return `<div class="ls">
  ${back()}
  <h1 class="nm-xl">${esc(u.lore)}</h1>
  <figure class="lore-vid"><video src="../IMG/video/pawu.mp4" poster="../IMG/video/pawu.webp" controls playsinline preload="metadata"></video></figure>
  <div class="lore-grid">${SITE.lore.map(b => `<div class="lore-card"><h3>${esc(T(b.title))}</h3>${(T(b.body) || []).map(p => `<p>${Mx(p)}</p>`).join("")}</div>`).join("")}</div>

  <h2 class="h2">${esc(u.chars)}</h2>
  ${bands.map(({ g, list }) => `
    <div class="cg" style="--c:${TEAM[g.id]}">
      <a class="cg-h" href="#/g/${g.id}"><span class="team">${esc(g.short)}</span><b>${esc(g.name)}</b><i>${esc(T(g.kind))}</i></a>
      <div class="cgrid">${list.map(charCard).join("")}</div>
    </div>`).join("")}
  ${solo.length ? `
    <div class="cg" style="--c:var(--tj)">
      <div class="cg-h"><span class="team">${esc(u.solo)}</span></div>
      <div class="cgrid">${solo.map(charCard).join("")}</div>
    </div>` : ""}

  <h2 class="h2">${esc(u.npcs)}</h2>
  <div class="cgrid">${npcs.map(charCard).join("")}</div>
</div>`;
};

/* ============================================================
   СОЛЬНЫЕ АРТИСТЫ
   ============================================================ */
function soloPage() {
  const u = U();
  const solos = SITE.groups.filter(g => g.solo).flatMap(g => g.members.map(npc)).filter(Boolean);
  return `<div class="ls">
    ${back()}
    <h1 class="nm-xl">${esc(u.solo)}</h1>
    <div class="cgrid" style="margin-top:26px">${solos.map(charCard).join("")}</div>
  </div>`;
}

/* ============================================================
   СВЯЗИ — круг персонажей, нити между ними
   ============================================================ */
let LK = null;   /* кто выбран на странице связей */
window.PAWlk = id => { LK = id; };
const linkOrder = () => {
  const by = id => SITE.npcs.find(n => n.id === id);
  const seq = [...group("hickeys").members, "bea", "denny", "tadhg", ...group("tj").members,
               ...group("hbs").members, "shelly", "socks", "taylor", "nico", "agi"];
  const rest = SITE.npcs.map(n => n.id).filter(id => !seq.includes(id));
  return [...seq, ...rest].map(by).filter(n => n && !n.side);
};
function linksPage() {
  const u = U(), nodes = linkOrder(), N = nodes.length, R = 400, C = 500;
  const pos = {}; nodes.forEach((n, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / N; pos[n.id] = { x: C + R * Math.cos(a), y: C + R * Math.sin(a), a }; });
  const edges = SITE.links.filter(l => pos[l.a] && pos[l.b]);
  const svg = `<svg class="web" viewBox="-120 -40 1240 1080" role="img">
    <defs>${nodes.map(n => `<clipPath id="cp-${n.id}"><circle cx="${pos[n.id].x}" cy="${pos[n.id].y}" r="36"/></clipPath>`).join("")}</defs>
    <g class="edges">${edges.map(l => `<line class="edge" data-a="${l.a}" data-b="${l.b}"
        x1="${pos[l.a].x}" y1="${pos[l.a].y}" x2="${pos[l.b].x}" y2="${pos[l.b].y}" style="stroke:${colorOf(npc(l.a))}"/>`).join("")}</g>
    <g class="nodes">${nodes.map(n => {
      const p = pos[n.id], lx = C + (R + 62) * Math.cos(p.a), ly = C + (R + 62) * Math.sin(p.a);
      const anchor = Math.cos(p.a) > .3 ? "start" : Math.cos(p.a) < -.3 ? "end" : "middle";
      return `<g class="node" data-id="${n.id}" style="--c:${colorOf(n)}">
        <circle class="ring" cx="${p.x}" cy="${p.y}" r="40"/>
        <image href="../IMG/people/sm/${n.id}.webp" data-b="../IMG/people/${n.id}" data-s="sm" data-i="0" x="${p.x - 36}" y="${p.y - 36}" width="72" height="72"
               preserveAspectRatio="xMidYMin slice" clip-path="url(#cp-${n.id})" onerror="PAWsvg(this)"/>
        <text x="${lx}" y="${ly}" text-anchor="${anchor}" dominant-baseline="middle">${esc(n.short)}</text>
      </g>`; }).join("")}</g>
  </svg>`;
  return `<div class="ls links-ls">
    ${back()}
    <h1 class="nm-xl">${esc(u.links)}</h1>
    <p class="mute links-hint">${esc(u.linksHint)}</p>
    <div class="links-wrap">
      ${svg}
      <aside class="lk-panel" id="lk-panel">${lkPanel()}</aside>
    </div>
  </div>`;
}
window.PAWsvg = el => {   /* перебор копий и расширений для <image> в SVG */
  const list = imgSrcs(el.dataset.b, el.dataset.s), i = +el.dataset.i + 1;
  if (i < list.length) { el.dataset.i = i; el.setAttribute("href", list[i]); return; }
  el.remove();
};
function lkPanel() {
  const u = U();
  if (!LK) return `<div class="lk-empty">${esc(u.pickOne)}</div>`;
  const n = npc(LK); if (!n) return "";
  const rel = SITE.links.filter(x => x.a === LK || x.b === LK);
  return `<div class="lk-head" style="--c:${colorOf(n)}">
      ${face(n, SM)}
      <div><div class="team">${Mx(n.role)}</div><b>${esc(n.name)}</b>
        <a class="lk-open" href="#/p/${n.id}">${esc(u.openSheet)} ↗</a></div>
    </div>
    <div class="lk-rows">${rel.map(r => {
      const oid = r.a === LK ? r.b : r.a, o = npc(oid); if (!o || o.side) return "";
      return `<button class="lk-row" data-id="${oid}" style="--c:${colorOf(o)}">${face(o, SM)}<span><b>${esc(o.short)}</b><small>${Mx(r.label)}</small></span></button>`;
    }).join("")}</div>`;
}
function lkSelect(id) {
  LK = id;
  $$("#view .node").forEach(g => g.classList.toggle("sel", g.dataset.id === id));
  $$("#view .edge").forEach(e => {
    const on = e.dataset.a === id || e.dataset.b === id;
    e.classList.toggle("hi", on); e.classList.toggle("dim", !on);
  });
  $$("#view .node").forEach(g => g.classList.toggle("near", !!id && g.dataset.id !== id &&
    SITE.links.some(l => (l.a === id && l.b === g.dataset.id) || (l.b === id && l.a === g.dataset.id))));
  const p = $("#lk-panel"); if (p) p.innerHTML = lkPanel();
}
$("#view").addEventListener("click", e => {
  const node = e.target.closest(".node");
  if (node) { const id = node.dataset.id; if (LK === id) location.hash = `#/p/${id}`; else lkSelect(id); return; }
  const row = e.target.closest(".lk-row");
  if (row) lkSelect(row.dataset.id);
});

/* ============================================================
   ГАЛЕРЕИ МЕСТ — папки IMG/places/<Название места>/*.jpg
   1) Список кадров из gallery.js (его пишет build_gallery.py при
      каждом START.bat) — работает и без сервера, по двойному клику.
   2) Если сайт открыт через сервер, папки дочитываются вживую —
      новые кадры видны сразу, без перезапуска.
   Папка находится по названию локации, регистр и «the» не важны.
   ============================================================ */
const GAL = { done: null, by: {} };
const PLACES_BASE = "../IMG/places/";
async function listDir(url) {
  try {
    const r = await fetch(url); if (!r.ok) return [];
    const doc = new DOMParser().parseFromString(await r.text(), "text/html");
    return [...doc.querySelectorAll("a[href]")].map(a => a.getAttribute("href"))
      .filter(h => h && !h.startsWith("?") && !h.startsWith("/") && !h.startsWith("..") && !h.startsWith("http"));
  } catch { return []; }
}
const normName = x => String(x).toLowerCase().replace(/^the\s+/, "").replace(/[^a-zа-яё0-9]+/g, "");
const locOfFolder = d => SITE.locations.find(x => normName(x.id) === normName(d) || normName(x.name) === normName(d));
const galURL = (d, f) => PLACES_BASE + encodeURIComponent(d) + "/" + encodeURIComponent(f);
const thumbOf = u => u.replace(/\/([^/]+)\.\w+$/, "/sm/$1.webp");   /* копия кадра: <папка>/sm/<кадр>.webp */
window.PAWfull = el => { el.onerror = null; el.removeAttribute("srcset"); el.src = el.dataset.full; };   /* копии нет — полный кадр */
function loadGalleries() {
  if (GAL.done) return GAL.done;
  GAL.done = (async () => {
    /* 1) из gallery.js */
    for (const [d, files] of Object.entries(window.PAW_GALLERY || {})) {
      const l = locOfFolder(d);
      if (l && files.length) GAL.by[l.id] = files.map(f => galURL(d, f));
    }
    /* 2) вживую, только через сервер */
    if (/^https?:$/.test(location.protocol)) {
      const dirs = (await listDir(PLACES_BASE)).filter(h => h.endsWith("/")).map(h => decodeURIComponent(h.slice(0, -1)));
      await Promise.all(dirs.map(async d => {
        const l = locOfFolder(d); if (!l) return;
        const files = (await listDir(PLACES_BASE + encodeURIComponent(d) + "/"))
          .map(h => decodeURIComponent(h)).filter(h => /\.(jpe?g|png|webp)$/i.test(h)).sort();
        if (files.length) GAL.by[l.id] = files.map(f => galURL(d, f));
      }));
    }
    return GAL.by;
  })();
  return GAL.done;
}

/* лайтбокс */
let LB = { list: [], i: 0 };
function lbOpen(list, i) {
  LB = { list, i };
  let box = $("#lb");
  if (!box) {
    box = document.createElement("div"); box.id = "lb"; box.className = "lb";
    box.innerHTML = `<button class="lb-x" aria-label="close">✕</button><button class="lb-p" aria-label="prev">←</button><img alt=""><button class="lb-n" aria-label="next">→</button><div class="lb-c"></div>`;
    document.body.appendChild(box);
    box.addEventListener("click", e => {
      if (e.target.closest(".lb-p")) return lbGo(-1);
      if (e.target.closest(".lb-n")) return lbGo(1);
      if (e.target.closest(".lb-x") || e.target === box) box.remove();
    });
  }
  lbGo(0);
}
function lbGo(d) {
  const box = $("#lb"); if (!box) return;
  LB.i = (LB.i + d + LB.list.length) % LB.list.length;
  $("img", box).src = LB.list[LB.i];
  $(".lb-c", box).textContent = `${LB.i + 1} / ${LB.list.length}`;
}
document.addEventListener("keydown", e => {
  const box = $("#lb"); if (!box) return;
  if (e.key === "Escape") box.remove();
  if (e.key === "ArrowLeft") { e.stopImmediatePropagation(); lbGo(-1); }
  if (e.key === "ArrowRight") { e.stopImmediatePropagation(); lbGo(1); }
}, true);

/* подставить галерею на страницу места */
async function mountPlaceGallery(l) {
  const by = await loadGalleries();
  const list = by[l.id]; if (!list || !list.length) return;
  const art = $("#view .sheet-art"); if (!art || art.dataset.loc !== l.id) return;
  art.innerHTML = `<figure class="im ok hero-im"><img src="${list[0]}" alt=""></figure>` + (list.length > 1 ?
    `<div class="gal">${list.map((u, i) => `<button class="${i ? "" : "on"}" data-i="${i}"><img src="${thumbOf(u)}" data-full="${u}" onerror="PAWfull(this)" alt="" loading="lazy"></button>`).join("")}</div>` : "");
  art.classList.add("has-gal");
  art.addEventListener("click", e => {
    const b = e.target.closest(".gal button");
    if (b) { const i = +b.dataset.i; $(".hero-im img", art).src = list[i]; $$(".gal button", art).forEach(x => x.classList.toggle("on", x === b)); return; }
    if (e.target.closest(".hero-im")) lbOpen(list, +($(".gal button.on", art)?.dataset.i || 0));
  });
}
/* превью в списке мест: на компе копия, на телефоне превью во всю ширину — полный кадр */
async function mountPlaceThumbs() {
  const by = await loadGalleries();
  $$("#view .row[data-loc]").forEach(r => {
    const list = by[r.dataset.loc]; const th = $(".row-th", r);
    if (list && th) th.innerHTML = `<img src="${thumbOf(list[0])}" srcset="${thumbOf(list[0])} 640w, ${list[0]} 1376w"
      sizes="(max-width:860px) 100vw, 190px" data-full="${list[0]}" onerror="PAWfull(this)" alt="" loading="lazy">`;
  });
}

const e404 = () => `<div class="e404"><h1>404</h1><p class="mute">${esc(U().e404)}</p><div>${back()}</div></div>`;

/* ============================================================
   ТЕКСТЫ ТРЕКОВ
   ============================================================ */
async function mountLyrics(t) {
  const tabs = $("#lt"), box = $("#ly"); if (!tabs || !box) return;
  const show = async i => {
    $$("button", tabs).forEach(b => b.classList.toggle("on", +b.dataset.i === i));
    const v = t.versions[i]; box.textContent = "…";
    const r = await lyrics(v.lyricsFile), u = U();
    if (r.ok) box.innerHTML = esc(r.text)
      .replace(/^\[(.+)\]$/gm, '<span class="lb">[$1]</span>')
      .replace(/\((.{1,26}?)\)/g, '<span class="ad">($1)</span>');
    else if (r.why === "no-file") box.innerHTML = `<span class="mute">${esc(u.nolyr)}</span>`;
    else box.innerHTML = `<span class="mute">${esc(u.nofetch)}<br><b>py -m http.server 8080</b> → <b>http://localhost:8080/site/</b></span>`;
  };
  $$("button", tabs).forEach(b => b.onclick = () => show(+b.dataset.i));
  show(0);
}

/* ============================================================
   СЦЕНА: выбор бойца — только по клику
   ============================================================ */
$("#view").addEventListener("click", e => {
  const tab = e.target.closest(".tab"); if (!tab) return;
  e.preventDefault();
  const s = tab.dataset.side, id = tab.dataset.id;
  if (ST[s] === id) return;
  ST[s] = id; save(`pawu-${s}`, id);
  swapSide(s, id);
});

/* стрелки на листе персонажа */
document.addEventListener("keydown", e => {
  if (/INPUT|TEXTAREA/.test(e.target.tagName)) return;
  if ($("#np")?.classList.contains("open")) return;   /* открыт большой плеер — листы не листаем */
  const nav = $("#view .sheet-nav"); if (!nav) return;
  if (e.key === "ArrowLeft")  location.hash = nav.children[0].getAttribute("href");
  if (e.key === "ArrowRight") location.hash = nav.children[1].getAttribute("href");
});

/* ============================================================
   ПЛЕЕР: мини-плеер внизу, всплывающая обложка (наведение),
   большой плеер (клик по обложке)
   ============================================================ */
const E = { box:$("#pl"), cover:$("#pl-cover"), nm:$("#pl-nm"), sb:$("#pl-sb"), note:$("#pl-note"),
            play:$("#p-play"), cur:$("#p-cur"), dur:$("#p-dur"), fill:$("#p-fill"), dl:$("#p-dl") };
const NP = { box:$("#np"), bg:$("#np-bg"), cover:$("#np-cover"), grp:$("#np-grp"), t:$("#np-t"), s:$("#np-s"),
             play:$("#np-play"), cur:$("#np-cur"), dur:$("#np-dur"), fill:$("#np-fill"),
             q:$("#np-q"), qbox:$("#np-qbox"), ql:$("#np-ql") };
const PEEK = $("#peek");
const coverFig = (t, size) => im("covers", t.id, { initial: clean(t.title)[0], size });

function npText(m) {
  NP.grp.textContent = m.g?.name || ""; NP.grp.href = m.g ? `#/g/${m.g.id}` : "#/";
  NP.t.innerHTML = esc(clean(m.v.label)) + (m.t.top ? BOLT : ""); NP.t.href = `#/t/${m.t.id}`;
  NP.s.textContent = `${clean(T(m.t.style))} · ${m.v.lang}`;
}
function npQueue() {
  const q = audio.queue, i = audio.i, rows = [], seen = new Set([i]);
  for (let k = 1; k < q.length && rows.length < 4; k++) {
    const j = (i + k) % q.length; if (seen.has(j)) continue; seen.add(j);
    const t = track(q[j].t), v = t.versions[q[j].v];
    rows.push(`<button class="np-row" data-qi="${j}">${coverFig(t, "sm")}<span><b>${esc(clean(v.label))}</b><small>${esc(group(t.group)?.short || "")} · ${esc(v.lang)}</small></span></button>`);
  }
  NP.q.innerHTML = rows.join(""); NP.qbox.hidden = !rows.length;
}
function npFill(m) {
  NP.box.style.setProperty("--c", TEAM[m.g?.id] || "var(--hk)");
  NP.cover.innerHTML = coverFig(m.t);
  NP.bg.style.backgroundImage = "none";
  const img = $("img", NP.cover);   /* фон — та же обложка, размытая; ждём, пока сайт подберёт расширение */
  if (img) img.addEventListener("load", () => { NP.bg.style.backgroundImage = `url("${img.src}")`; }, { once: true });
  PEEK.innerHTML = coverFig(m.t, "md");
  npText(m); npQueue();
}
function playerIdleText() {
  const u = U();
  NP.ql.textContent = u.upNext;
  $("#np-x").setAttribute("aria-label", u.collapse);
  $("#pl-open").setAttribute("aria-label", u.openPlayer);
  const m = audio.meta();
  if (m) { npText(m); return; }
  E.nm.textContent = u.silence; E.sb.textContent = u.pick;
}
audio.on(ev => {
  const m = audio.meta();
  if (ev === "load" && m) {
    E.nm.innerHTML = esc(clean(m.v.label)) + (m.t.top ? BOLT : ""); E.nm.href = `#/t/${m.t.id}`;
    E.sb.textContent = `${clean(m.g?.short || "")} · ${m.v.lang}`;
    E.dl.href = m.v.audio || "#";
    E.cover.innerHTML = coverFig(m.t, "sm");
    E.box.style.setProperty("--c", TEAM[m.g?.id] || "var(--hk)");
    E.box.dataset.note = "0";
    npFill(m);
  }
  if (ev === "state" || ev === "load") { E.play.textContent = NP.play.textContent = m && m.playing ? "❚❚" : "▶"; paint(); }
  if (ev === "time") {
    const a = audio.el, d = a.duration || 0, w = (d ? (a.currentTime / d) * 100 : 0) + "%";
    E.fill.style.width = NP.fill.style.width = w;
    E.cur.textContent = NP.cur.textContent = time(a.currentTime);
    E.dur.textContent = NP.dur.textContent = time(d);
  }
  if (ev === "note") {
    E.note.textContent = audio.note ? `${U().nofile} ${audio.note.replace(/^.*?:\s*/, "")}` : "";
    E.box.dataset.note = audio.note ? "1" : "0";
  }
});
function paint() {
  const m = audio.meta();
  $$(".tr").forEach(r => {
    const on = m && r.dataset.t === m.t.id && +r.dataset.v === m.vi;
    r.classList.toggle("on", !!on);
    const b = r.querySelector("button"); if (b) b.textContent = on && m.playing ? "❚❚" : "▶";
  });
}
$("#p-play").onclick = NP.play.onclick = () => audio.toggle();
$("#p-prev").onclick = $("#np-prev").onclick = () => audio.step(-1);
$("#p-next").onclick = $("#np-next").onclick = () => audio.step(1);
const seekBar = e => { const r = e.currentTarget.getBoundingClientRect(); audio.seekTo((e.clientX - r.left) / r.width); };
$("#p-bar").onclick = $("#np-bar").onclick = seekBar;
NP.q.addEventListener("click", e => { const r = e.target.closest(".np-row"); if (r) audio.play(audio.queue, +r.dataset.qi); });

/* громкость: по умолчанию 50%; запоминаем только то, что человек выставил сам */
const VOLS = [$("#p-vol"), $("#np-vol")], MUTES = [$("#p-mute"), $("#np-mute")];
let lastVol = 0.5;
function paintVol() {
  const a = audio.el, v = a.muted ? 0 : a.volume;
  VOLS.forEach(i => { i.value = v; i.style.setProperty("--vol", Math.round(v * 100) + "%"); });
  MUTES.forEach(b => b.classList.toggle("muted", v === 0));
}
{ const v = parseFloat(load("pawu-vol", "0.5")); audio.el.volume = isNaN(v) ? 0.5 : Math.min(1, Math.max(0, v)); }
VOLS.forEach(i => i.addEventListener("input", () => { audio.el.muted = false; audio.el.volume = +i.value; save("pawu-vol", i.value); }));
MUTES.forEach(b => b.onclick = () => {
  const a = audio.el;
  if (a.muted || a.volume === 0) { a.muted = false; if (a.volume === 0) { a.volume = lastVol; save("pawu-vol", String(lastVol)); } }
  else a.muted = true;
});
audio.el.addEventListener("volumechange", () => { if (audio.el.volume > 0) lastVol = audio.el.volume; paintVol(); });
paintVol();

/* всплывающая обложка и большой плеер */
const npIsOpen = () => NP.box.classList.contains("open");
function npOpen() {
  if (!audio.meta()) return;
  PEEK.classList.remove("on");
  NP.box.classList.add("open"); NP.box.setAttribute("aria-hidden", "false");
}
function npClose() { NP.box.classList.remove("open"); NP.box.setAttribute("aria-hidden", "true"); }
$("#pl-open").onclick = npOpen;
$("#np-x").onclick = npClose;
$("#np-in").addEventListener("click", e => { if (e.target === e.currentTarget) npClose(); });
$("#pl-open").addEventListener("mouseenter", () => { if (audio.meta() && !npIsOpen()) PEEK.classList.add("on"); });
$("#pl-open").addEventListener("mouseleave", () => PEEK.classList.remove("on"));
addEventListener("hashchange", npClose);   /* клик по названию/группе в большом плеере уводит на страницу */

/* видео на «Лоре» и плеер не звучат одновременно; видео стартует на громкости плеера */
document.addEventListener("play", e => {
  const v = e.target; if (!v.closest?.(".lore-vid")) return;
  if (!v.dataset.vol) { v.volume = audio.el.muted ? 0.5 : audio.el.volume; v.dataset.vol = "1"; }
  if (!audio.el.paused) audio.el.pause();
}, true);
audio.el.addEventListener("play", () => $$(".lore-vid video").forEach(v => v.pause()));
document.addEventListener("keydown", e => {
  if (!npIsOpen()) return;
  if (e.key === "Escape" || e.key === "ArrowDown") { e.preventDefault(); npClose(); }
});

/* ============================================================
   ГЕЙТ 18+ — раз за сессию браузера
   ============================================================ */
const langSwitch = () => `<span class="lang">${["en","ru"].map(l =>
  `<button data-l="${l}" class="${l === LANG ? "on" : ""}">${l.toUpperCase()}</button>`).join("")}</span>`;

function gateHTML() {
  const u = U();
  return `<div class="gate-box">
    <a class="logo">PAW<b>U</b></a>
    <h2>${esc(u.gateTitle)}</h2>
    <p><b>18+</b> — ${esc(u.gateAge)}</p>
    <p>${esc(u.gateFic)}</p>
    <div class="gate-act">
      <button class="gate-in" id="gate-in">${esc(u.gateIn)}</button>
      <button class="gate-out" id="gate-out">${esc(u.gateOut)}</button>
      ${langSwitch()}
    </div>
  </div>`;
}
function showGate() {
  const g = document.createElement("div"); g.className = "gate"; g.id = "gate";
  /* фоном — ролик-превью сеттинга: без звука, по кругу (облегчённая копия без аудио) */
  const v = document.createElement("video");
  v.className = "gate-bg"; v.muted = true; v.loop = true; v.playsInline = true; v.preload = "auto";
  v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.setAttribute("aria-hidden", "true");
  v.poster = "../IMG/video/pawu.webp"; v.src = "../IMG/video/pawu-bg.mp4";
  const wrap = document.createElement("div"); wrap.className = "gate-wrap"; wrap.innerHTML = gateHTML();
  g.append(v, wrap); document.body.appendChild(g);
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) v.play().catch(() => {});
  g.addEventListener("click", e => {
    if (e.target.closest("#gate-in"))  { try { sessionStorage.setItem("pawu-gate", "1"); } catch {} g.remove(); }
    if (e.target.closest("#gate-out")) { history.length > 1 ? history.back() : (location.href = "about:blank"); }
  });
}
let gated = false; try { gated = !!sessionStorage.getItem("pawu-gate"); } catch {}
if (!gated) showGate();

/* ============================================================
   ЯЗЫК — переключатель в шапке и в гейте
   ============================================================ */
function setLang(l) {
  if (!SITE.ui[l] || l === LANG) return;
  LANG = l; save("pawu-lang", l); document.documentElement.lang = l;
  drawNav(); render(); playerIdleText();
  const gw = $("#gate .gate-wrap"); if (gw) gw.innerHTML = gateHTML();   /* видео на фоне не перезапускаем */
}
document.addEventListener("click", e => {
  const b = e.target.closest(".lang button"); if (!b) return;
  setLang(b.dataset.l);
});

/* ============================================================
   НАВИГАЦИЯ И РОУТЕР
   ============================================================ */
function drawNav() {
  const u = U();
  const NAV = [["#/g/hickeys","Hickeys"],["#/g/hbs","HBS"],["#/solo",u.solo],["#/places",u.nav.places],["#/lore",u.nav.lore],["#/links",u.links]];
  $("#nav").innerHTML = NAV.map(([h, t]) => `<a href="${h}">${esc(t)}</a>`).join("") + langSwitch();
  $$("#nav a").forEach(x => x.classList.toggle("on", location.hash.startsWith(x.getAttribute("href"))));
}

function render() {
  const [, a = "", b = ""] = (location.hash || "#/").slice(1).split("/");
  const id = decodeURIComponent(b);
  let html;
  switch (a) {
    case "":       html = home(); break;
    case "p":      html = sheet(id); break;
    case "g":      html = gsheet(id); break;
    case "t":      html = tsheet(id); break;
    case "l":      html = place(id); break;
    case "places": html = places(); break;
    case "lore":   html = lore(); break;
    case "solo":   html = soloPage(); break;
    case "links":  html = linksPage(); break;
    default:       html = e404();
  }
  const v = $("#view"); v.innerHTML = html; v.scrollTop = 0;
  $$("#nav a").forEach(x => x.classList.toggle("on", location.hash.startsWith(x.getAttribute("href"))));
  const ev = SITE.meta.event;
  $("#top-mid").textContent = a === "" ? `${ev.title} · ${T(ev.when)} · ${T(ev.where)}` : "";
  const h = $("#view h1"); document.title = h && a !== "" ? `${h.textContent.trim()} — PAW U` : "PAW U — VERSUS";
  if (a === "t" && track(id)) mountLyrics(track(id));
  if (a === "links" && LK) lkSelect(LK);
  if (a === "l" && loc(id)) mountPlaceGallery(loc(id));
  if (a === "places") mountPlaceThumbs();
  paint();
}

document.documentElement.lang = LANG;
drawNav(); playerIdleText();
router(render);
})();
