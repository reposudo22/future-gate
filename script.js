const CONFIG = {
  whatsapp: '201033220511',
  mapUrl: 'https://www.bing.com/maps?cp=30.013651~31.208138&lvl=19&sp=point.30.013651_31.208138_Future%20Gate',
  instagram: 'https://www.instagram.com/futuregate.misr',
  tiktok: 'https://www.tiktok.com/@future.gate.official',
  youtube: 'https://www.youtube.com/results?search_query=FutureGate-misr',
  facebook: 'https://www.facebook.com/search/top?q=' + encodeURIComponent('Future Gate - الدراسة في اسبانيا')
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

document.documentElement.classList.add('js');

$$('[data-msg]').forEach(a => {
  a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(a.dataset.msg)}`;
  a.target = '_blank';
  a.rel = 'noopener';
});

$$('[data-link]').forEach(a => {
  a.href = CONFIG[a.dataset.link];
  a.target = '_blank';
  a.rel = 'noopener';
});

const nav = $('.nav');
const menu = $('#menu');
const burger = $('.burger');

const syncNav = () => nav.classList.toggle('s', scrollY > 20 || menu.classList.contains('o'));

const setMenu = open => {
  menu.classList.toggle('o', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
  syncNav();
};

burger.addEventListener('click', () => setMenu(!menu.classList.contains('o')));
$$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));
addEventListener('scroll', syncNav, { passive: true });
syncNav();

$$('.it').forEach(item => {
  const btn = $('.q', item);
  btn.addEventListener('click', () => {
    const opening = !item.classList.contains('o');
    $$('.it.o').forEach(x => {
      x.classList.remove('o');
      $('.q', x).setAttribute('aria-expanded', 'false');
    });
    if (opening) {
      item.classList.add('o');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('v');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

$$('.rv').forEach(el => io.observe(el));
