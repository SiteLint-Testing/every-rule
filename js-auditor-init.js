(function(w,d,s,a,m,t) {
  a = d.createElement(s);m = d.getElementsByTagName(s)[0];a.defer = true;a.fetchpriority='high';a.id = 'auditor_app';a.dataset.cfasync = 'false';a.src = 'https://stage-auditor.sitelint.com/auditor.bundle.js?tokenId=758d9598b1132ec7074b8a1d5f4b69e06a45878cbe615cb0b8456fb881c6a33d';

  function onPageLoaded() {
    w.clearTimeout(t);
    w.removeEventListener('DOMContentLoaded', onPageLoaded);
    m.parentNode.insertBefore(a, m);
  }
  
  function onAuditorLoaded(){
    auditor.config({
      includeHidden: true,
      stripTextFromReport: false,
      watchDomChanges: false
    }).run();
  }

  a.addEventListener('load', onAuditorLoaded);

  if (d.readyState !== 'loading') {
    onPageLoaded();
    return;
  }

  w.addEventListener('DOMContentLoaded', onPageLoaded);
})(window, document, 'script');