// HEADER CODE - fast-financial-header-code/script.js

(function loadTaboolaPixel() {
  // Fallback to prevent early reference errors
  if (typeof window._tfa === 'undefined') {
    window._tfa = [];
  }

  window._tfa.push({ notify: 'event', name: 'page_view', id: 1790277 });

  (function(t, f, a, x) {
    if (!document.getElementById(x)) {
      t.async = 1;
      t.src = a;
      t.id = x;
      f.parentNode.insertBefore(t, f);
    }
  })(document.createElement('script'),
     document.getElementsByTagName('script')[0],
     '//cdn.taboola.com/libtrc/unip/1790277/tfa.js',
     'tb_tfa_script');
})();

(function loadMetaPixels() {
  const fbPixels = [
    '1609921539591505', // Debt Pixel v1
    '535282259456965',  // Listicle Pixel v1
    '406560522508302',  // Debt Pixel v2
    '1179487193893015'  // Credit Secrets
  ];

  fbPixels.forEach(id => {
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', id);
    fbq('track', 'PageView');

    const img = document.createElement('img');
    img.src = `https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`;
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    document.body.appendChild(img);
  });
})();

(function loadTikTokPixel() {
  (function(w, d, t) {
    w.TiktokAnalyticsObject = t;
    const ttq = (w[t] = w[t] || []);
    ttq.methods = [
      'page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie','holdConsent','revokeConsent','grantConsent'
    ];
    ttq.setAndDefer = function(obj, method) {
      obj[method] = function() {
        obj.push([method].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (let i = 0; i < ttq.methods.length; i++) {
      ttq.setAndDefer(ttq, ttq.methods[i]);
    }
    ttq.instance = function(t) {
      const inst = ttq._i[t] || [];
      ttq.methods.forEach(m => ttq.setAndDefer(inst, m));
      return inst;
    };
    ttq.load = function(e, n) {
      const r = 'https://analytics.tiktok.com/i18n/pixel/events.js';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = !0;
      script.src = `${r}?sdkid=${e}&lib=${t}`;
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
      ttq._i = ttq._i || {};
      ttq._i[e] = [];
      ttq._i[e]._u = r;
      ttq._t = ttq._t || {};
      ttq._t[e] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[e] = n || {};
    };

    ttq.load('CTB010RC77U9L9BMQMV0');
    ttq.page();
  })(window, document, 'ttq');
})();

(function loadGoogleTags() {
  const ids = ['G-7NM5GSL59L', 'AW-16661394375'];
  ids.forEach(id => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
  });

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  ids.forEach(id => gtag('config', id));
})();
