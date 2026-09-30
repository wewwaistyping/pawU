/* ============================================================
   PAW U — core.js
   Общий движок для всех трёх концепций.
   Даёт: выборки по данным, аудио, хеш-роутер, разметку [[...]].
   Внешность и страницы — в файле конкретной концепции.
   ============================================================ */
window.PAW = (() => {
"use strict";

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
  ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const time = s => (!isFinite(s) || s < 0) ? "0:00"
  : `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;

/* ---------- выборки ---------- */
const group = id => SITE.groups.find(x => x.id === id);
const track = id => SITE.tracks.find(x => x.id === id);
const npc   = id => SITE.npcs.find(x => x.id === id);
const loc   = id => SITE.locations.find(x => x.id === id);
const any   = id => group(id) || npc(id) || loc(id) || track(id);
const groupTracks = gid => SITE.tracks.filter(t => t.group === gid);
const locResidents = lid => SITE.npcs.filter(n => n.loc === lid);
const linksOf = id => SITE.links.filter(l => l.a === id || l.b === id);

/* ---------- [[ненаписанное]] ----------
   mode: "redact"  — чёрная плашка, раскрывается по наведению
         "pending" — «сведения уточняются»
         "smudge"  — размытая записка
         "plain"   — просто текст без скобок                     */
function mark(str, mode = "redact") {
  const s = esc(str ?? "");
  return s.replace(/\[\[([\s\S]*?)\]\]/g, (_, inner) => {
    if (mode === "plain")   return inner;
    if (mode === "pending") return `<em class="pending" title="${inner}">сведения уточняются</em>`;
    if (mode === "smudge")  return `<span class="smudge">${inner}</span>`;
    return `<span class="redact" tabindex="0">${inner}</span>`;
  });
}
const hasDraft = str => /\[\[/.test(String(str ?? ""));

/* ---------- процедурная графика ----------
   Картинок нет. Каждой сущности рисуется свой знак из id+hue. */
function face(seed, hue, opt = {}) {
  const h = hue ?? [...String(seed)].reduce((a,c) => (a*31 + c.charCodeAt(0)) % 360, 7);
  const s = opt.sat ?? 55, l = opt.lit ?? 48;
  const c1 = `hsl(${h} ${s}% ${l}%)`, c2 = `hsl(${(h+38)%360} ${s-8}% ${l-16}%)`,
        c3 = `hsl(${(h+180)%360} ${s+12}% ${l+20}%)`, bg = opt.bg ?? `hsl(${h} 22% 13%)`;
  const dark = `hsl(${h} 30% 12%)`;
  return `<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
    <rect width="200" height="200" fill="${bg}"/>
    <!-- висячие уши, за головой -->
    <ellipse cx="49" cy="118" rx="19" ry="45" fill="${c2}" transform="rotate(9 49 118)"/>
    <ellipse cx="151" cy="118" rx="19" ry="45" fill="${c2}" transform="rotate(-9 151 118)"/>
    <!-- голова -->
    <ellipse cx="100" cy="96" rx="50" ry="53" fill="${c1}"/>
    <path d="M62 62 q38 -20 76 0 q-38 -8 -76 0z" fill="${c2}" opacity=".7"/>
    <!-- морда -->
    <ellipse cx="100" cy="128" rx="31" ry="25" fill="${c2}"/>
    <ellipse cx="100" cy="113" rx="12" ry="8.5" fill="${dark}"/>
    <path d="M100 121 v9 q0 7 -9 7 M100 130 q0 7 9 7" stroke="${dark}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- глаза -->
    <circle cx="79" cy="86" r="7" fill="${dark}"/><circle cx="121" cy="86" r="7" fill="${dark}"/>
    <circle cx="81" cy="84" r="2.4" fill="${c3}"/><circle cx="123" cy="84" r="2.4" fill="${c3}"/>
    <!-- ошейник -->
    <path d="M52 152 q48 22 96 0" stroke="${c3}" stroke-width="9" fill="none" opacity=".85"/>
    <circle cx="100" cy="166" r="7" fill="${c3}"/>
  </svg>`;
}
function wave(seed, hue, opt = {}) {
  const h = hue ?? 40;
  const c1 = `hsl(${h} 58% 52%)`, c3 = `hsl(${(h+180)%360} 62% 60%)`, bg = opt.bg ?? `hsl(${h} 20% 11%)`;
  const n = opt.n ?? 46, w = 320 / n;
  const bars = Array.from({ length: n }, (_, i) => {
    const v = 10 + Math.abs(Math.sin(i * ((h % 9) + 2) * .37)) * 58;
    return `<rect x="${(i*w+1).toFixed(1)}" y="${(90-v/2).toFixed(1)}" width="${(w-2).toFixed(1)}" height="${v.toFixed(1)}" fill="${i%4?c1:c3}"/>`;
  }).join("");
  return `<svg viewBox="0 0 320 180" preserveAspectRatio="none" role="img" aria-hidden="true">
    <rect width="320" height="180" fill="${bg}"/>${bars}</svg>`;
}
function place(seed, hue, opt = {}) {
  const h = hue ?? 200;
  const c1 = `hsl(${h} 48% 44%)`, c2 = `hsl(${(h+30)%360} 42% 28%)`,
        c3 = `hsl(${(h+180)%360} 60% 62%)`, bg = opt.bg ?? `hsl(${h} 24% 12%)`;
  return `<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
    <rect width="320" height="180" fill="${bg}"/>
    <path d="M0 142 L62 96 L114 142 Z" fill="${c2}"/><path d="M92 142 L152 76 L212 142 Z" fill="${c1}"/>
    <path d="M188 142 L248 104 L310 142 Z" fill="${c2}"/>
    <circle cx="250" cy="50" r="20" fill="${c3}" opacity=".85"/>
    <rect y="142" width="320" height="38" fill="${c1}" opacity=".25"/></svg>`;
}

/* ============================================================
   АУДИО — headless. UI рисует каждая концепция сама,
   подписываясь на PAW.audio.on(...)
   ============================================================ */
const el = document.createElement("audio");
el.preload = "metadata"; el.volume = .85;
document.addEventListener("DOMContentLoaded", () => document.body.appendChild(el));

const subs = [];
const emit = (ev, d) => subs.forEach(f => f(ev, d));

const audio = {
  el, queue: [], i: -1, note: "",

  on(fn) { subs.push(fn); return fn; },

  /* q = [{t:trackId, v:versionIndex}] */
  play(q, index = 0) {
    this.queue = q; this.i = index; this.note = "";
    const it = q[index]; if (!it) return;
    const v = track(it.t).versions[it.v];
    el.src = v.audio || "";
    emit("load", it);
    if (v.audio) el.play().catch(() => {});
  },

  /* самый частый вызов: один трек, очередь — все версии всех треков */
  one(tid, vi = 0, scopeIds) {
    const cur = this.current();
    if (cur && cur.t === tid && cur.v === vi) return this.toggle();
    const ids = scopeIds || SITE.tracks.map(t => t.id);
    const q = ids.flatMap(id => track(id).versions.map((_, k) => ({ t: id, v: k })));
    const at = q.findIndex(x => x.t === tid && x.v === vi);
    this.play(q, at < 0 ? 0 : at);
  },

  toggle() {
    if (!el.src) { this.note = "Сначала выбери трек"; emit("note"); return; }
    el.paused ? el.play().catch(() => {}) : el.pause();
  },
  step(d) {
    if (!this.queue.length) return;
    this.play(this.queue, (this.i + d + this.queue.length) % this.queue.length);
  },
  seekTo(ratio) { if (el.duration) el.currentTime = ratio * el.duration; },
  current() { return this.queue[this.i] || null; },
  meta() {
    const it = this.current(); if (!it) return null;
    const t = track(it.t);
    return { t, v: t.versions[it.v], g: group(t.group), vi: it.v, playing: !el.paused && !!el.src };
  }
};

el.addEventListener("play",    () => emit("state"));
el.addEventListener("pause",   () => emit("state"));
el.addEventListener("ended",   () => audio.step(1));
el.addEventListener("timeupdate", () => emit("time"));
el.addEventListener("loadedmetadata", () => emit("time"));
el.addEventListener("error", () => {
  const m = audio.meta(); if (!m) return;
  audio.note = `Файла нет: ${m.v.audio || "путь не задан"}`;
  emit("note"); emit("state");
});

document.addEventListener("keydown", e => {
  if (e.code === "Space" && !/INPUT|TEXTAREA/.test(e.target.tagName) && !e.target.isContentEditable) {
    e.preventDefault(); audio.toggle();
  }
});

/* ---------- тексты треков ---------- */
const lyricsCache = {};
async function lyrics(path) {
  if (!path) return { ok: false, why: "no-file" };
  if (lyricsCache[path]) return lyricsCache[path];
  try {
    const r = await fetch(path);
    if (!r.ok) throw 0;
    return (lyricsCache[path] = { ok: true, text: await r.text() });
  } catch {
    return { ok: false, why: "fetch" };
  }
}

/* ---------- хеш-роутер ---------- */
function router(render) {
  const go = () => {
    const [, a = "", b = ""] = (location.hash || "#/").slice(1).split("/");
    render(a, decodeURIComponent(b));
  };
  addEventListener("hashchange", go);
  document.readyState === "loading" ? addEventListener("DOMContentLoaded", go) : go();
}

return { $, $$, esc, time, mark, hasDraft, group, track, npc, loc, any,
         groupTracks, locResidents, linksOf, face, wave, place,
         audio, lyrics, router };
})();
