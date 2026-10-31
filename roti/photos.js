/* Shows the photos from photos-list.js (made automatically from the images folder). */
/* You don't need to change anything below this line. */
(function () {
  if (typeof PHOTOS === "undefined" || !PHOTOS.length) return;
  var sc = document.querySelector('.slider,.show,.jobs');
  if (sc) {
    var first = sc.querySelector('.slide,.sl,.j');
    var cls = first.className.split(' ')[0];
    var dots = sc.querySelector('.dots');
    sc.querySelectorAll('.' + cls).forEach(function (n) { n.remove(); });
    PHOTOS.forEach(function (p, i) {
      var d = document.createElement('div');
      d.className = cls + (i ? '' : ' on');
      var im = new Image(); im.src = p.src; im.alt = p.alt || '';
      d.appendChild(im);
      sc.insertBefore(d, dots || null);
    });
    if (dots) {
      dots.innerHTML = '';
      PHOTOS.forEach(function (p, i) {
        var e = document.createElement('i'); if (!i) e.className = 'on'; dots.appendChild(e);
      });
    }
  }
  var g = document.querySelector('.gal,.strip');
  if (g) {
    var tcls = g.firstElementChild.className.split(' ')[0];
    g.innerHTML = '';
    PHOTOS.forEach(function (p) {
      var d = document.createElement('div');
      if (tcls) d.className = tcls;
      d.style.overflow = 'hidden';
      var im = new Image(); im.src = p.src; im.alt = p.alt || '';
      d.appendChild(im); g.appendChild(d);
    });
  }
})();
