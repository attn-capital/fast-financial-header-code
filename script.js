// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TDMV879B');

// Revenue Roll
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://ss.zone.fast-financial.com/43tfockxneunp.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','5jrd90=aWQ9R1RNLVRUWlJDMjQ%3D&sort=desc');

// Load Sentry
var sentryScript = document.createElement('script');
sentryScript.src = "https://browser.sentry-cdn.com/7.53.0/bundle.tracing.min.js";
sentryScript.crossOrigin = "anonymous";
sentryScript.onload = function() {
  Sentry.init({
    dsn: 'https://b2aef5a4a147845e135df6f583e7c817@o4509053823156225.ingest.us.sentry.io/4509053826039808',
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 1.0
  });
};
document.head.appendChild(sentryScript);

// Meta Pixel Code Debt Pixel v1
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1609921539591505');
fbq('track', 'PageView');

// Meta Pixel Code Listicle Pixel v1
fbq('init', '535282259456965');
fbq('track', 'PageView');

// Meta Pixel Code debt Pixel v2
fbq('init', '406560522508302');
fbq('track', 'PageView');

// Meta Pixel Code Credit Secrets
fbq('init', '1179487193893015');
fbq('track', 'PageView');

// TikTok Pixel
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.instance=function(t){
    var e=ttq._i[t]||[],n=0;
    for(n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);
    return e
  };
  ttq.load=function(e,n){
    var r="https://analytics.tiktok.com/i18n/pixel/events.js",
    o=n&&n.partner;
    ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
    n=document.createElement("script");
    n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
    e=document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(n,e)
  };

  ttq.load('CTB010RC77U9L9BMQMV0');
  ttq.page();
}(window, document, 'ttq');

// Taboola Pixel
window._tfa = window._tfa || [];
window._tfa.push({notify: 'event', name: 'page_view', id: 1790277});
!function (t, f, a, x) {
  if (!document.getElementById(x)) {
    t.async = 1;t.src = a;t.id = x;f.parentNode.insertBefore(t, f);
  }
}(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/unip/1790277/tfa.js',
  'tb_tfa_script');

// Google tag (gtag.js)
(function(){
  var gtagScript1 = document.createElement('script');
  gtagScript1.src = "https://www.googletagmanager.com/gtag/js?id=G-7NM5GSL59L";
  gtagScript1.async = true;
  document.head.appendChild(gtagScript1);

  var gtagScript2 = document.createElement('script');
  gtagScript2.src = "https://www.googletagmanager.com/gtag/js?id=AW-16661394375";
  gtagScript2.async = true;
  document.head.appendChild(gtagScript2);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-7NM5GSL59L');
  gtag('config', 'AW-16661394375');
})();
