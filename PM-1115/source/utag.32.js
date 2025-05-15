//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Loader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Loader sections near the bottom of this file:
      - "Start Loader Function Call"
      - "End Loader Function Call"
      - "Start Loader Callback Function"
      - "End Loader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Loader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */
/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.202505141916, Copyright 2025 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={};
  u.extend=[function(a,b){ try{ if(1){
const _initPixelTag = (optStatus) => {
  if (!window.bactm) return; // exit immediately if bacmt is not present
  window.bactm.plugins.pixelTag = pixelTag();

  function pixelTag() {
    const version = '3.0.4'

    if (!window.digitalData) return; // exit immediately if no DDO 
    const codeBases = { 
      main: { tradeDesk: '156', pinterest: '157' },
      mcoe: { tradeDesk: '105', pinterest: '106' },
      ml: { tradeDesk: '55', pinterest: '56' }
    };
    const { tealium_profile, tealium_environment } = window.utag_data;
    const approvedPixels = { 
      tradeDesk: 'ttd|',
      pinterest: 'pinterest|',
      bofa: 'bankofamerica.com',
      legacyTradeDesk: 'adsrvr.org',
      legacyPinterest: 'pinterest.com'
    };
    const trackInits = { ttd: false, ttdEvent: false, pinterest: false, linkedIn: false, twitter: false }

    const _verifyProtocol = function(url = "") {
      if (url.substring(0, 2) == "//") return 1;
      return (url.substring(0, 5) != "https" && location.protocol == "https:") ? 0 : 1;
    }
  
    const _appendQueryString = function(url, key, val) {
      const delimeter = (url.indexOf('?') > -1) ? "&" : "?";
      const appendedUrl = url + delimeter + encodeURIComponent(key) + "=" + encodeURIComponent(val);
      return appendedUrl;
    }
  
    const _cacheBuster = function(url) {
      const addedDateUrl = _appendQueryString(url, "cb", Date.now())
      return addedDateUrl;
    }

    /**
     * extracts params in safe way and returns an object with keys for easy access
     * @param {*} url 
     * @returns 
     */
    const _paramExtraction = (url) => {
      const extractedParams = {};
      const params = url.split('|');

      params.forEach(param => {
        const [key, value] = param.split('=');
        extractedParams[key] = value;
      })

      return extractedParams;
    }

    /**
     * purely for backwards compatibility 
     * @param {*} url 
     * @param {*} id 
     */
    const _legacyPixelTag = (url, id) => {
      const tag = new bactm.PixelTag(url, id);
      tag.appendToBody();

      bactm._log('PixelTag fired: ' + url, 2);
    }

    const partnerMethods = {
      tradeDesk(url, trigger) {
        if(!trackInits.ttd) {
          // TradeDesk pixel loader
          const params = _paramExtraction(url);
          const tag = codeBases[tealium_profile].tradeDesk;
          const tradeDeskCodeBase = 'https://tags.tiqcdn.com/utag/bofa/' + tealium_profile + '/' + tealium_environment + '/utag.' + tag + ".js?utv=" + utag_data['ut.version'];
          const tradeDeskScript = document.createElement('script');
          tradeDeskScript.setAttribute('src',tradeDeskCodeBase);
          tradeDeskScript.onload = () => {            
            // TradeDesk pixel execution
            window.ttd_dom_ready?.( (function () {
              if (typeof TTDUniversalPixelApi === 'function') {
                var universalPixelApi = new TTDUniversalPixelApi();
                // params - advertiser ID, upixel ID, iframe url, optional object with up to 10 params
                universalPixelApi.init(params.adv, [params.upid], "https://insight.adsrvr.org/track/up");
              }
            }) );
          }
          document.head.appendChild(tradeDeskScript);
          trackInits.ttd = true;

          bactm._log('Tradedesk tag fired', 2);
        }
        if(trigger) {
          const params = _paramExtraction(url);
          window.ttdConversionEventsLayer = window.ttdConversionEventsLayer || [];
          function ttdConversionEvents() {
            window.ttdConversionEventsLayer.push(arguments);
          }
          if(!trackInits.ttdEvent) {
            ttdConversionEvents("init", { merchantId: params.merchantid });
            trackInits.ttdEvent = true;
          }
          ttdConversionEvents("event", { tracker_id: params.pixelid, event_name: "click" })

          bactm._log('Tradedesk click event fired', 2);
        }
      },
      pinterest(url, trigger) {
        if(!trackInits.pinterest) {
          const params = _paramExtraction(url);
          const pinterestTag = codeBases[tealium_profile].pinterest;
          const pinterestCodeBase = 'https://tags.tiqcdn.com/utag/bofa/' + tealium_profile + '/' + tealium_environment + '/utag.' + pinterestTag + ".js?utv=" + utag_data['ut.version'];
          // Pinterest pixel loader
          if(!window.pintrk) {
            function pinterestLoader(selfHostUrl) {
              window.pintrk = function () {
                window.pintrk.queue.push(Array.prototype.slice.call(arguments))
              };
              var n=window.pintrk;
              n.queue=[];
              n.version="3.0";
              var t = document.createElement("script");
              t.async = !0;
              t.src = selfHostUrl;
              var r = document.getElementsByTagName("script")[0];
              r.parentNode.insertBefore(t,r);
            }
            pinterestLoader(pinterestCodeBase);
          }
          // Pinterest pixel execution - em stands for enhanced match for now this feature will not be used
          window.pintrk('load', params.adv);
          window.pintrk('page');
          trackInits.pinterest = true;

          bactm._log('Pinterest tag fired', 2);
        }
        if(trigger) {
          const params = _paramExtraction(url);
          window.pintrk?.('track', params.event)
          bactm._log('Pinterest click event fired', 2);
        }
      }
    }

    const _firePixelTag = (url = "", opt = {}) => {
      const startDt = opt.startDt ? new Date(opt.startDt) : new Date('1-1-1970');
      const endDt = opt.endDt ? new Date(opt.endDt) : new Date('1-1-2999');
  
      if (!(Date.now() > startDt && Date.now() < endDt)) return 0;
  
      const urlArrays = (typeof url == "string") ? new Array(url) : url;
  
      urlArrays.forEach(function(url, i) {
        const processUrl = opt.cacheBuster ? _cacheBuster(url) : url;
        for (const [partner, pixelUrl] of Object.entries(approvedPixels)) {
          if( processUrl.toLowerCase().includes(pixelUrl) && optStatus.ccba ) {
            if (_verifyProtocol(url)) { // backwards compatibility for legacy pixel tagging
              _legacyPixelTag(processUrl, i);
            } else {
              partnerMethods[partner](url, opt.eventFired);
            }
          }
        }
      })
    }

    bactm._log('pixelTag plugin v' + version + ' initializing.', 2);
  
    /**
     * Functions to return publicly.
     */
    return {
      'firePixelTag': _firePixelTag
    };
    
  };
}

bactm.on('plugins:OneTrust:C0002:PixelTag', _initPixelTag);

} } catch(e){ utag.DB(e) }  }];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          /* "base_url" : "//insert.your.javascript.library.url.here.js" */
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        /* End Tag-Scoped Extensions Code */


        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */


        /* Start Tag Sending Code */

          // Insert your tag sending code here.

        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        //u.loader_cb = function () {
          //u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        //};

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */

          //if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_32' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_32' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("32", "bofa.mcoe");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

