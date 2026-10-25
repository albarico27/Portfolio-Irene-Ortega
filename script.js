/* ==========================================================================
   Irene Ortega — Portfolio "IreneOS"
   Para añadir/editar trabajos, toca solo el array PROJECTS.
   Los textos de la interfaz (ES/EN) están en UI y ABOUT.
   ========================================================================== */

const CONTACT = {
  email: 'ireneortegamartinez01@gmail.com',
  phone: '+34 619 339 305',
  linkedin: 'https://www.linkedin.com/in/ireneortegamartinez/',
  cv: 'assets/cv/CV-Irene-Ortega.pdf',
};

// Textos traducibles: { es: '…', en: '…' }. Los que no cambian van como texto normal.
// where: 'TAG' (Máster de Creatividad Publicitaria) | 'CLV' (agencia)
// videos: { vimeo: 'id' } | { youtube: 'id' }
const PROJECTS = [
  {
    slug: 'call-of-duty',
    brand: 'Call Of Duty',
    title: { es: 'Voces Inocentes', en: 'Innocent Voices' },
    where: 'TAG',
    insight: {
      es: 'Cuando pensamos en la guerra pensamos en soldados, no en niños.',
      en: 'When we think of war we think of soldiers, not children.',
    },
    idea: {
      es: 'Cambiar las voces de los jugadores por voces infantiles, para mostrar una realidad que también forma parte de la guerra.',
      en: 'Replace the players’ voices with children’s voices, to show a reality that is also part of war.',
    },
    videos: [{ vimeo: '1171738850' }],
  },
  {
    slug: 'gta-vi',
    brand: 'GTA VI',
    title: 'All Cops Are Beteable',
    where: 'TAG',
    insight: {
      es: 'Lo divertido del juego es trolear a la policía y conseguir huir de ella.',
      en: 'The fun of the game is trolling the police and getting away from them.',
    },
    idea: {
      es: 'Los Top Manta venderán el juego oficial de forma legal: de ser perseguidos a ser distribuidores oficiales.',
      en: 'Top Manta street vendors will sell the official game, legally: from being chased to becoming official distributors.',
    },
    videos: [{ vimeo: '1172552269' }],
  },
  {
    slug: 'revolut',
    brand: 'Revolut',
    title: { es: '2 en 1', en: '2 in 1' },
    where: 'TAG',
    insight: {
      es: 'Regalar dinero es cutre, pero que te regalen una tarjeta regalo de un sitio que no te gusta, es peor.',
      en: 'Giving money as a gift is tacky, but getting a gift card for a shop you don’t like is even worse.',
    },
    idea: {
      es: 'Una tarjeta regalo que puedas usar en el sitio que quieras. 2 en 1.',
      en: 'A gift card you can use wherever you want. 2 in 1.',
    },
    videos: [{ vimeo: '1172557903' }],
  },
  {
    slug: 'movistar-prosegur-alarmas',
    brand: 'Movistar Prosegur Alarmas',
    title: { es: 'Susto a la vista', en: 'Scare in Sight' },
    where: 'TAG',
    insight: {
      es: 'Cuando suena el pitido de una alarma, aunque no hayas hecho nada, te asustas.',
      en: 'When an alarm starts beeping, you get scared, even if you haven’t done anything.',
    },
    idea: {
      es: 'Utilizar situaciones cotidianas para demostrar cómo se sentirán los ladrones con nuestra alarma.',
      en: 'Use everyday situations to show how burglars will feel with our alarm.',
    },
    videos: [{ youtube: 'Vlp8pk7w-_E' }, { youtube: 'rcASCQVpyjQ' }, { youtube: '0wgiYEadWtw' }],
  },
  {
    slug: 'playstation',
    brand: 'PlayStation',
    title: 'It Happens on PS5',
    where: 'CLV',
    idea: {
      es: 'Para completar la campaña global ‘It Happens on PS5’ en España, estrellamos una nave espacial en pleno Sol y contamos con la ayuda de TheGrefg para descubrir qué había pasado, llevando la ficción al mundo real.',
      en: 'To round off the global ‘It Happens on PS5’ campaign in Spain, we crashed a spaceship in the middle of Madrid’s Puerta del Sol and teamed up with TheGrefg to find out what had happened, bringing fiction into the real world.',
    },
    videos: [{ vimeo: '1172530820' }],
    images: ['assets/img/ps5-1.webp', 'assets/img/ps5-2.webp'],
  },
  {
    slug: 'axa',
    brand: 'AXA',
    title: 'Future Token',
    where: 'TAG',
    insight: {
      es: 'Muchos jóvenes no entienden los planes de pensiones y ven su jubilación como algo imposible.',
      en: 'Many young people don’t understand pension plans and see retirement as something impossible.',
    },
    idea: {
      es: 'Si los jóvenes invierten en criptos, ¿por qué no crear una que les ayude en su jubilación?',
      en: 'If young people invest in crypto, why not create one that helps them retire?',
    },
    videos: [{ youtube: 'Gl8RhYhTnjY' }],
  },
  {
    slug: 'turismo-euskadi',
    brand: 'Turismo Euskadi',
    title: '@BASQ3R_',
    where: 'TAG',
    insight: {
      es: 'Intentas elegir un nombre de usuario pero, como siempre está cogido, acabas tecleando al azar.',
      en: 'You try to pick a username but, since it’s always taken, you end up typing at random.',
    },
    idea: {
      es: 'Si tu nombre de usuario siempre está cogido, prueba en euskera. Igual acabas descubriendo el País Vasco.',
      en: 'If your username is always taken, try it in Basque. You might end up discovering the Basque Country.',
    },
    videos: [{ youtube: 'whvxpHz0ixQ' }],
  },
  {
    slug: 'ghost-of-yotei',
    brand: 'Ghost Of Yotei',
    client: 'PlayStation', // si existe, se muestra arriba en lugar de brand
    title: 'Ghost of Yotei',
    where: 'CLV',
    lead: {
      es: 'Lanzamiento de Ghost of Yotei para la PS5.',
      en: 'Launch of Ghost of Yotei for PS5.',
    },
    idea: {
      es: 'Crear diferentes acciones que rompan con los formatos tradicionales e integrarlas como parte de la historia del juego.',
      en: 'Create different activations that break away from traditional formats and make them part of the game’s story.',
    },
    sections: [
      { title: { es: 'Mupis cortados', en: 'Sliced billboards' }, images: ['assets/img/yotei-1.webp', 'assets/img/yotei-2.webp'] },
      { title: { es: 'Estación Yotei', en: 'Yotei Station' }, images: ['assets/img/yotei-3.webp', 'assets/img/yotei-4.webp'] },
      { title: { es: 'El afilador', en: 'The knife sharpener' }, images: ['assets/img/yotei-5.webp', 'assets/img/yotei-6.webp', 'assets/img/yotei-7.webp', 'assets/img/yotei-8.webp'] },
    ],
  },
];

const WHERE = {
  TAG: { label: { es: 'TAG · Máster de Creatividad Publicitaria', en: 'TAG · Master’s in Advertising Creativity' }, color: '#34c759' },
  CLV: { label: { es: 'CLV · Agencia', en: 'CLV · Agency' }, color: '#ff6a2b' },
};

const ABOUT = {
  es: {
    hello: 'hola, soy Irene!',
    paragraphs: [
      'A pesar de todas las advertencias, estudie Publicidad y Marketing y después hice el Máster de Creatividad Publicitaria en TAG.',
      'Soy copy, pero tengo mucho arte aunque no sepa dar palmas. He trabajado para PlayStation, Santalucía Seguros, Acciona Inmobiliaria, Carrefour y Mondelez, entre otras.',
    ],
  },
  en: {
    hello: 'Hi, I’m Irene!',
    paragraphs: [
      'Despite all the warnings, I went on to study Advertising and Marketing, followed by a Master’s in Advertising Creativity at TAG.',
      'I’m a copywriter, but I’ve got plenty of artistic flair—even if I can’t clap in rhythm. I’ve worked with brands such as PlayStation, Santalucía Seguros, Acciona Inmobiliaria, Carrefour, and Mondelez, among others.',
    ],
  },
};

const UI = {
  es: {
    metaDescription: 'Soy Irene! Escribo cosas para que pasen cosas. Portfolio de Irene Ortega, Creative Copywriter.',
    language: 'Idioma',
    desktop: 'Escritorio',
    work: 'Trabajos',
    about: 'Sobre mí',
    contact: 'Contacto',
    callMe: 'Llámame',
    writeMe: 'Escríbeme',
    sendEmail: 'Enviar email',
    viewProfile: 'Ver perfil',
    resume: 'Currículum',
    downloadCv: 'Abrir CV',
    call: 'Llamar',
    copy: 'Copiar',
    copied: '¡Copiado!',
    copyFallback: 'Selecciónalo y copia',
    favourites: 'Favoritos',
    close: 'Cerrar',
    video: 'Vídeo',
    image: 'Imagen',
    faceSteps: ['Mira a la pantalla', 'Escaneando…', 'Buscando insights en tu cara…'],
    faceOk: '¡Te reconozco! Pasa, pasa.',
  },
  en: {
    metaDescription: 'I’m Irene! I write things to make things happen. Portfolio of Irene Ortega, Creative Copywriter.',
    language: 'Language',
    desktop: 'Desktop',
    work: 'Work',
    about: 'About me',
    contact: 'Contact',
    callMe: 'Call me',
    writeMe: 'Write to me',
    sendEmail: 'Send email',
    viewProfile: 'View profile',
    resume: 'Résumé',
    downloadCv: 'Open CV',
    call: 'Call',
    copy: 'Copy',
    copied: 'Copied!',
    copyFallback: 'Select it and copy',
    favourites: 'Favourites',
    close: 'Close',
    video: 'Video',
    image: 'Image',
    faceSteps: ['Look at the screen', 'Scanning…', 'Looking for insights in your face…'],
    faceOk: 'Got you! Come on in.',
  },
};

/* --------------------------------------------------------------------------
   Language (ES por defecto · ?lang=en · se recuerda la elección)
   -------------------------------------------------------------------------- */

const LANGS = ['es', 'en'];
let lang = (() => {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem('lang');
    if (LANGS.includes(saved)) return saved;
  } catch {}
  return 'es';
})();

const t = (key) => UI[lang][key];
const tr = (value) => (value && typeof value === 'object' && !Array.isArray(value) ? value[lang] : value);

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const isMobile = () => matchMedia('(max-width: 720px)').matches;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function folderSVG() {
  return `
    <svg viewBox="0 0 76 62" aria-hidden="true">
      <path d="M3 9a5 5 0 0 1 5-5h18.5a4 4 0 0 1 3 1.3L34 10h34a5 5 0 0 1 5 5v4H3z" fill="#4c5fd9"/>
      <rect x="2" y="15" width="72" height="45" rx="5" fill="#6e80f0"/>
      <rect x="2" y="15" width="72" height="4" rx="2" fill="#8d9bf7"/>
    </svg>`;
}

/* --------------------------------------------------------------------------
   Static texts + language switch
   -------------------------------------------------------------------------- */

function applyStaticTexts() {
  document.documentElement.lang = lang;
  $('meta[name="description"]').content = t('metaDescription');
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  $$('[data-lang]').forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
}

function setLang(next) {
  if (next === lang || !LANGS.includes(next)) return;
  lang = next;
  try { localStorage.setItem('lang', lang); } catch {}
  const url = new URL(location.href);
  if (lang === 'es') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);
  applyStaticTexts();
  rerenderWindows();
}

/* --------------------------------------------------------------------------
   Face ID (fake) → unlock
   -------------------------------------------------------------------------- */

function runFaceId() {
  const lock = $('#lock');
  const face = $('#faceid');
  const msg = $('[data-msg]');
  const steps = t('faceSteps');
  const timers = [];
  let done = false;

  const say = (text) => {
    msg.classList.add('is-swapping');
    setTimeout(() => { msg.textContent = text; msg.classList.remove('is-swapping'); }, 180);
  };

  const unlock = () => {
    if (done) return;
    done = true;
    timers.forEach(clearTimeout);
    face.classList.remove('is-scanning');
    face.classList.add('is-success');
    say(t('faceOk'));
    setTimeout(() => {
      lock.classList.add('is-unlocked');
      const desktop = $('#desktop');
      desktop.classList.add('is-on');
      desktop.removeAttribute('aria-hidden');
      openFromHash();
    }, 650);
    setTimeout(() => lock.remove(), 1300);
  };

  msg.textContent = steps[0];
  const step = reducedMotion ? 250 : 550;
  timers.push(setTimeout(() => face.classList.add('is-scanning'), 200));
  steps.slice(1).forEach((text, i) => {
    timers.push(setTimeout(() => say(text), 200 + step * i));
  });
  timers.push(setTimeout(unlock, 200 + step * steps.length));

  lock.addEventListener('click', unlock);
  addEventListener('keydown', unlock, { once: true });
}

/* --------------------------------------------------------------------------
   Desktop
   -------------------------------------------------------------------------- */

function renderIcons() {
  const root = $('#icons');
  root.append(
    h(`<button class="icon" style="--i:0" data-open="work">
        <span class="icon__art">${folderSVG()}</span>
        <span class="icon__name" data-i18n="work"></span>
      </button>`),
    h(`<button class="icon" style="--i:1" data-open="about">
        <span class="icon__art">${folderSVG()}</span>
        <span class="icon__name" data-i18n="about"></span>
      </button>`),
    h(`<button class="icon" style="--i:2" data-open="contact">
        <span class="icon__art">${folderSVG()}</span>
        <span class="icon__name" data-i18n="contact"></span>
      </button>`),
  );
}

/* --------------------------------------------------------------------------
   Window manager
   -------------------------------------------------------------------------- */

const openWindows = new Map(); // id -> { el, title, render }
let zTop = 10;

function focusWindow(win) {
  $$('.win').forEach((w) => w.classList.remove('is-focused'));
  win.classList.add('is-focused');
  win.style.zIndex = ++zTop;
}


function setHash(id) {
  const slug = id && id.startsWith('p:') ? id.slice(2) : ['work', 'about', 'contact'].includes(id) ? id : '';
  history.replaceState(null, '', slug ? `#${slug}` : location.pathname + location.search);
}

// title and render are functions so the window can be redrawn when the language changes
function openWindow({ id, title, width, height, render, origin }) {
  if (openWindows.has(id)) {
    focusWindow(openWindows.get(id).el);
    setHash(id);
    return;
  }

  const win = h(`
    <section class="win" role="dialog">
      <div class="win__bar">
        <div class="win__dots">
          <button class="win__close"><svg viewBox="0 0 8 8"><path d="M1 1l6 6M7 1L1 7"/></svg></button>
          <span class="win__min"></span>
          <span class="win__max"></span>
        </div>
        <div class="win__title"></div>
      </div>
      <div class="win__body"></div>
    </section>`);

  // client sizes, not getBoundingClientRect: the desktop may still be mid zoom-in animation
  const area = { width: $('#windows').clientWidth, height: $('#windows').clientHeight, top: $('#windows').offsetTop };
  const n = openWindows.size;
  // on phones the window still floats, just with tighter margins
  const gapX = isMobile() ? 10 : 20;
  const gapY = isMobile() ? 40 : 14;
  const step = isMobile() ? 14 : 26;
  const w = Math.min(width || 980, area.width - gapX * 2);
  const hgt = Math.min(height || 640, area.height - gapY * 2 - (isMobile() ? 20 : 32));
  win.style.width = `${w}px`;
  win.style.height = `${hgt}px`;

  // centered on screen; each extra window shifts a bit so they don't stack exactly
  const left = Math.max(gapX, Math.min((area.width - w) / 2 + n * step, area.width - w - gapX));
  const top = Math.max(gapY, Math.min((area.height - hgt) / 2 + n * step, area.height - hgt - gapY));
  win.style.left = `${left}px`;
  win.style.top = `${top}px`;

  if (origin) {
    const r = origin.getBoundingClientRect();
    win.style.transformOrigin = `${r.left + r.width / 2 - left}px ${r.top + r.height / 2 - area.top - top}px`;
  }

  const entry = { el: win, title, render };
  fillWindow(entry);
  $('#windows').append(win);
  openWindows.set(id, entry);
  win.addEventListener('pointerdown', () => focusWindow(win));
  $('.win__close', win).addEventListener('click', (e) => { e.stopPropagation(); closeWindow(id); });
  makeDraggable(win);
  focusWindow(win);
  setHash(id);
  $('.win__close', win).focus({ preventScroll: true });
}

function fillWindow({ el, title, render }) {
  el.setAttribute('aria-label', title());
  $('.win__title', el).textContent = title();
  $('.win__close', el).setAttribute('aria-label', t('close'));
  $('.win__body', el).replaceChildren(render());
}

function rerenderWindows() {
  openWindows.forEach(fillWindow);
}

function closeWindow(id) {
  const entry = openWindows.get(id);
  if (!entry) return;
  const win = entry.el;
  openWindows.delete(id);
  $$('iframe', win).forEach((f) => f.removeAttribute('src'));
  win.classList.add('is-closing');
  win.addEventListener('animationend', () => win.remove(), { once: true });
  const next = [...openWindows.entries()].sort((a, b) => b[1].el.style.zIndex - a[1].el.style.zIndex)[0];
  if (next) { focusWindow(next[1].el); setHash(next[0]); } else setHash('');
}

function makeDraggable(win) {
  const bar = $('.win__bar', win);
  bar.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    const startX = e.clientX;
    const startY = e.clientY;
    const left = win.offsetLeft;
    const top = win.offsetTop;
    const area = $('#windows').getBoundingClientRect();
    bar.setPointerCapture(e.pointerId);

    const move = (ev) => {
      const x = Math.min(Math.max(left + ev.clientX - startX, 80 - win.offsetWidth), area.width - 80);
      const y = Math.min(Math.max(top + ev.clientY - startY, 0), area.height - 50);
      win.style.left = `${x}px`;
      win.style.top = `${y}px`;
    };
    const up = () => {
      bar.removeEventListener('pointermove', move);
      bar.removeEventListener('pointerup', up);
    };
    bar.addEventListener('pointermove', move);
    bar.addEventListener('pointerup', up);
  });
}

/* --------------------------------------------------------------------------
   Window contents
   -------------------------------------------------------------------------- */

function videoEmbed(v) {
  const src = v.vimeo
    ? `https://player.vimeo.com/video/${v.vimeo}?title=0&byline=0&portrait=0&dnt=1`
    : `https://www.youtube-nocookie.com/embed/${v.youtube}?rel=0&modestbranding=1&hl=${lang}`;
  return `<div class="video"><iframe src="${src}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${t('video')}"></iframe></div>`;
}

function gallery(images, alt) {
  return `<div class="gallery">${images.map((src) => `<img src="${src}" alt="${alt}" loading="lazy">`).join('')}</div>`;
}

function projectBody(p) {
  const title = tr(p.title);
  const brief = [
    p.insight && `<div><h3 class="brief__label"><span class="slash">/</span>Insight</h3><p class="brief__text">${tr(p.insight)}</p></div>`,
    p.idea && `<div><h3 class="brief__label"><span class="slash">/</span>Idea</h3><p class="brief__text">${tr(p.idea)}</p></div>`,
  ].filter(Boolean).join('');

  const media = [
    ...(p.videos || []).map(videoEmbed),
    p.images && gallery(p.images, `${p.brand} — ${title}`),
    ...(p.sections || []).map((s) => `<h4 class="media-title"><span class="slash">/</span>${tr(s.title)}</h4>${gallery(s.images, `${title} — ${tr(s.title)}`)}`),
  ].filter(Boolean).join('');

  const body = h(`
    <article class="project">
      <header class="project__head">
        <p class="project__brand"><span class="slash">/</span>${p.client || p.brand}</p>
        <span class="project__tag" style="--tag-color:${WHERE[p.where].color}">${tr(WHERE[p.where].label)}</span>
        <h2 class="project__title">${title}</h2>
      </header>
      ${p.lead ? `<p class="project__lead">${tr(p.lead)}</p>` : ''}
      <section class="brief">${brief}</section>
      <div class="project__media">${media}</div>
    </article>`);

  $$('.gallery img', body).forEach((img) => img.addEventListener('click', () => lightbox(img)));
  return body;
}

function openProject(p, origin) {
  $$('.icon').forEach((i) => i.classList.toggle('is-selected', i === origin));
  openWindow({
    id: `p:${p.slug}`,
    title: () => (p.brand.toLowerCase() === tr(p.title).toLowerCase() ? tr(p.title) : `${p.brand} — ${tr(p.title)}`),
    height: 900, // tall: header, brief and media stacked vertically
    render: () => projectBody(p),
    origin,
  });
}

function workBody() {
  const body = h(`
    <div class="finder">
      <aside class="finder__side">
        <h4>${t('favourites')}</h4>
        <button class="is-active">${folderSVG()} ${t('work')}</button>
        <button data-open="about">${folderSVG()} ${t('about')}</button>
        <button data-open="contact">${folderSVG()} ${t('contact')}</button>
      </aside>
      <div class="finder__grid"></div>
    </div>`);

  const grid = $('.finder__grid', body);
  PROJECTS.forEach((p, i) => {
    const icon = h(`
      <button class="icon" style="--i:${i}" data-project="${p.slug}">
        <span class="icon__art">${folderSVG()}</span>
        <span class="icon__name">${p.brand}</span>
        <span class="icon__tag" style="--tag-color:${WHERE[p.where].color}">${p.where}</span>
      </button>`);
    icon.addEventListener('click', () => openProject(p, icon));
    grid.append(icon);
  });
  return body;
}

function openWork(origin) {
  openWindow({ id: 'work', title: () => t('work'), width: 780, height: 470, render: workBody, origin });
}

function aboutBody() {
  const { hello, paragraphs } = ABOUT[lang];
  // the spacer + floated photo put Irene in the bottom-right corner, with the text wrapping around her silhouette
  return h(`
    <div class="about">
      <span class="about__spacer" aria-hidden="true"></span>
      <img class="about__photo" src="assets/img/irene-doodle.webp?v=2" alt="Irene Ortega">
      <img class="about__bla" src="assets/img/blabla.webp" alt="" aria-hidden="true">
      <h2><span class="slash">/</span>${hello}</h2>
      ${paragraphs.map((text) => `<p>${text}</p>`).join('')}
    </div>`);
}

function openAbout(origin) {
  openWindow({ id: 'about', title: () => t('about'), width: 920, height: 620, render: aboutBody, origin });
}

function contactItem({ icon, label, value, href, action, copyable = true, linkAttrs = '' }) {
  const item = h(`
    <div class="contact__item">
      <span class="contact__icon">${icon}</span>
      <p class="contact__label">${label}</p>
      <p class="contact__value">${value}</p>
      <div class="contact__actions">
        ${copyable ? `<button data-copy>${t('copy')}</button>` : ''}
        <a class="is-primary" ${href ? `href="${href}" ${linkAttrs}` : 'aria-disabled="true"'}>${action}</a>
      </div>
    </div>`);
  const copy = $('[data-copy]', item);
  copy?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(value);
      copy.textContent = t('copied');
    } catch {
      copy.textContent = t('copyFallback');
    }
    setTimeout(() => { copy.textContent = t('copy'); }, 1600);
  });
  return item;
}

const MAIL_ICON = `<svg viewBox="0 0 64 64"><defs><linearGradient id="g-mail" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa9ff"/><stop offset="1" stop-color="#1d6bf0"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#g-mail)"/><rect x="11" y="18" width="42" height="28" rx="3" fill="#fff"/><path d="M12 20l20 15 20-15" stroke="#1d6bf0" stroke-width="2.5" fill="none"/></svg>`;
const LINKEDIN_ICON = `<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0a66c2"/><circle cx="20" cy="19" r="5" fill="#fff"/><rect x="15.5" y="27" width="9" height="23" rx="1.5" fill="#fff"/><path d="M30 27h8.5v3.4c1.6-2.5 4.4-4 8-4 6 0 8.5 3.7 8.5 10.2V50h-9V38.5c0-3-1-4.8-3.6-4.8-2.7 0-4.4 1.9-4.4 5V50h-9z" fill="#fff"/></svg>`;
const CV_ICON = `<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#fff"/><path d="M21 9h17l10 10v35a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2z" fill="#f3f4f8" stroke="#c9ccd8" stroke-width="1.5"/><path d="M38 9v10h10" fill="#dfe2ea" stroke="#c9ccd8" stroke-width="1.5"/><rect x="12" y="33" width="31" height="14" rx="3" fill="#e5322d"/><text x="27.5" y="43.5" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="10" fill="#fff">PDF</text></svg>`;
const PHONE_ICON = `<svg viewBox="0 0 64 64"><defs><linearGradient id="g-tel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ee07a"/><stop offset="1" stop-color="#22b33a"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#g-tel)"/><path d="M22 15c2-1 4 0 5 2l3 7c1 2 0 4-1 5l-3 2c2 5 6 9 11 11l2-3c1-1 3-2 5-1l7 3c2 1 3 3 2 5l-2 4c-1 2-3 3-5 3-16-1-29-14-30-30 0-2 1-4 3-5z" fill="#fff"/></svg>`;

function openContact(origin) {
  const render = () => {
    const body = h('<div class="contact"></div>');
    body.append(
      contactItem({ icon: MAIL_ICON, label: t('writeMe'), value: CONTACT.email, href: `mailto:${CONTACT.email}`, action: t('sendEmail') }),
      contactItem({ icon: PHONE_ICON, label: t('callMe'), value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}`, action: t('call') }),
      contactItem({ icon: LINKEDIN_ICON, label: 'LinkedIn', value: 'Irene Ortega Martínez', href: CONTACT.linkedin, action: t('viewProfile'), copyable: false, linkAttrs: 'target="_blank" rel="noopener"' }),
      contactItem({ icon: CV_ICON, label: t('resume'), value: 'CV · PDF', href: CONTACT.cv, action: t('downloadCv'), copyable: false, linkAttrs: 'download target="_blank"' }),
    );
    return body;
  };
  openWindow({ id: 'contact', title: () => t('contact'), width: 720, height: 600, render, origin });
}

function lightbox(img) {
  const box = h(`<div class="lightbox" role="dialog" aria-label="${t('image')}"><img src="${img.src}" alt="${img.alt}"></div>`);
  box.addEventListener('click', () => box.remove());
  document.body.append(box);
}

const OPENERS = { work: openWork, about: openAbout, contact: openContact };

function openFromHash() {
  const slug = decodeURIComponent(location.hash.slice(1));
  if (!slug) return;
  if (OPENERS[slug]) return OPENERS[slug]();
  const p = PROJECTS.find((x) => x.slug === slug);
  if (p) openProject(p, $(`[data-project="${slug}"]`));
}

/* --------------------------------------------------------------------------
   Boot
   -------------------------------------------------------------------------- */

renderIcons();
applyStaticTexts();

document.addEventListener('click', (e) => {
  const switcher = e.target.closest('[data-lang]');
  if (switcher) return setLang(switcher.dataset.lang);
  const opener = e.target.closest('[data-open]');
  if (opener && OPENERS[opener.dataset.open]) OPENERS[opener.dataset.open](opener);
});

addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const box = $('.lightbox');
  if (box) return box.remove();
  const focused = [...openWindows.entries()].find(([, w]) => w.el.classList.contains('is-focused'));
  if (focused) closeWindow(focused[0]);
});

runFaceId();
