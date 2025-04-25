// HEADER CODE - fast-financial-header-code/script.js

(function loadTaboolaPixel() {
  if (typeof window._tfa === 'undefined') {
    window._tfa = [];
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = '//cdn.taboola.com/libtrc/unip/1790277/tfa.js';
  script.id = 'tb_tfa_script';
  document.head.appendChild(script);

  script.onload = function() {
    window._tfa.push({ notify: 'event', name: 'page_view', id: 1790277 });
    console.log('Taboola pixel loaded and page_view event fired.');
  };
})();

(function loadMetaPixels() {
  const fbPixels = [
    '1609921539591505', // Debt Pixel v1
    '535282259456965',  // Listicle Pixel v1
    '406560522508302',  // Debt Pixel v2
    '1179487193893015'  // Credit Secrets
  ];

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
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  fbPixels.forEach(id => {
    fbq('init', id);
    fbq('track', 'PageView');

    const img = document.createElement('img');
    img.src = `https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`;
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    document.body.appendChild(img);
  });

  console.log('Meta (Facebook) pixels initialized.');
})();

(function loadTikTokPixel() {
  (function(w, d, t) {
    w.TiktokAnalyticsObject = t;
    const ttq = (w[t] = w[t] || []);
    ttq.methods = [
      'page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent'
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
    ttq._i = ttq._i || {};

    const script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=CTB010RC77U9L9BMQMV0&lib=' + t;
    script.onload = function() {
      ttq.load('CTB010RC77U9L9BMQMV0');
      ttq.page(); // <-- MOVE INSIDE onload
    };
    const firstScript = d.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  })(window, document, 'ttq');
})();

(function loadGoogleTags() {
  const ids = ['G-7NM5GSL59L', 'AW-16661394375'];

  ids.forEach(id => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', id);
    };
    document.head.appendChild(script);
  });
})();

