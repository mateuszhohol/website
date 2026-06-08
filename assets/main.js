/* Mateusz Hohol — small site behaviors: mobile nav + scroll reveal + publication year filter */
(function () {
  // Mobile nav toggle
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.textContent = open ? 'Close' : 'Menu';
      btn.setAttribute('aria-expanded', open);
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Publications year filter
  var chips = document.querySelectorAll('.year-chip');
  if (chips.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var y = chip.getAttribute('data-year');
        chips.forEach(function (c) { c.classList.toggle('active', c === chip); });
        document.querySelectorAll('.year-group').forEach(function (g) {
          g.style.display = (y === 'all' || g.getAttribute('data-year') === y) ? '' : 'none';
        });
      });
    });
  }
})();
