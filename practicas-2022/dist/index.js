(() => {
  // node_modules/reveal.js/dist/reveal.esm.js
  var e = (e3, t3) => {
    for (let i3 in t3)
      e3[i3] = t3[i3];
    return e3;
  };
  var t = (e3, t3) => Array.from(e3.querySelectorAll(t3));
  var i = (e3, t3, i3) => {
    i3 ? e3.classList.add(t3) : e3.classList.remove(t3);
  };
  var s = (e3) => {
    if ("string" == typeof e3) {
      if ("null" === e3)
        return null;
      if ("true" === e3)
        return true;
      if ("false" === e3)
        return false;
      if (e3.match(/^-?[\d\.]+$/))
        return parseFloat(e3);
    }
    return e3;
  };
  var a = (e3, t3) => {
    e3.style.transform = t3;
  };
  var n = (e3, t3) => {
    let i3 = e3.matches || e3.matchesSelector || e3.msMatchesSelector;
    return !(!i3 || !i3.call(e3, t3));
  };
  var r = (e3, t3) => {
    if ("function" == typeof e3.closest)
      return e3.closest(t3);
    for (; e3; ) {
      if (n(e3, t3))
        return e3;
      e3 = e3.parentNode;
    }
    return null;
  };
  var o = (e3, t3, i3, s3 = "") => {
    let a3 = e3.querySelectorAll("." + i3);
    for (let t4 = 0; t4 < a3.length; t4++) {
      let i4 = a3[t4];
      if (i4.parentNode === e3)
        return i4;
    }
    let n3 = document.createElement(t3);
    return n3.className = i3, n3.innerHTML = s3, e3.appendChild(n3), n3;
  };
  var l = (e3) => {
    let t3 = document.createElement("style");
    return t3.type = "text/css", e3 && e3.length > 0 && (t3.styleSheet ? t3.styleSheet.cssText = e3 : t3.appendChild(document.createTextNode(e3))), document.head.appendChild(t3), t3;
  };
  var d = () => {
    let e3 = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t3) => {
      e3[t3.split("=").shift()] = t3.split("=").pop();
    });
    for (let t3 in e3) {
      let i3 = e3[t3];
      e3[t3] = s(unescape(i3));
    }
    return void 0 !== e3.dependencies && delete e3.dependencies, e3;
  };
  var c = (e3, t3 = 0) => {
    if (e3) {
      let i3, s3 = e3.style.height;
      return e3.style.height = "0px", e3.parentNode.style.height = "auto", i3 = t3 - e3.parentNode.offsetHeight, e3.style.height = s3 + "px", e3.parentNode.style.removeProperty("height"), i3;
    }
    return t3;
  };
  var h = { mp4: "video/mp4", m4a: "video/mp4", ogv: "video/ogg", mpeg: "video/mpeg", webm: "video/webm" };
  var u = navigator.userAgent;
  var g = document.createElement("div");
  var v = /(iphone|ipod|ipad|android)/gi.test(u) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
  var p = /chrome/i.test(u) && !/edge/i.test(u);
  var m = /android/gi.test(u);
  var f = "zoom" in g.style && !v && (p || /Version\/[\d\.]+.*Safari/.test(u));
  var b = {};
  Object.defineProperty(b, "__esModule", { value: true });
  var y = Object.assign || function(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var i3 = arguments[t3];
      for (var s3 in i3)
        Object.prototype.hasOwnProperty.call(i3, s3) && (e3[s3] = i3[s3]);
    }
    return e3;
  };
  var w = b.default = function(e3) {
    if (e3) {
      var t3 = function(e4) {
        return [].slice.call(e4);
      }, i3 = 0, s3 = 1, a3 = 2, n3 = 3, r3 = [], o3 = null, l3 = "requestAnimationFrame" in e3 ? function() {
        e3.cancelAnimationFrame(o3), o3 = e3.requestAnimationFrame(function() {
          return c3(r3.filter(function(e4) {
            return e4.dirty && e4.active;
          }));
        });
      } : function() {
      }, d3 = function(e4) {
        return function() {
          r3.forEach(function(t4) {
            return t4.dirty = e4;
          }), l3();
        };
      }, c3 = function(e4) {
        e4.filter(function(e5) {
          return !e5.styleComputed;
        }).forEach(function(e5) {
          e5.styleComputed = v3(e5);
        }), e4.filter(p3).forEach(m3);
        var t4 = e4.filter(g3);
        t4.forEach(u3), t4.forEach(function(e5) {
          m3(e5), h3(e5);
        }), t4.forEach(f3);
      }, h3 = function(e4) {
        return e4.dirty = i3;
      }, u3 = function(e4) {
        e4.availableWidth = e4.element.parentNode.clientWidth, e4.currentWidth = e4.element.scrollWidth, e4.previousFontSize = e4.currentFontSize, e4.currentFontSize = Math.min(Math.max(e4.minSize, e4.availableWidth / e4.currentWidth * e4.previousFontSize), e4.maxSize), e4.whiteSpace = e4.multiLine && e4.currentFontSize === e4.minSize ? "normal" : "nowrap";
      }, g3 = function(e4) {
        return e4.dirty !== a3 || e4.dirty === a3 && e4.element.parentNode.clientWidth !== e4.availableWidth;
      }, v3 = function(t4) {
        var i4 = e3.getComputedStyle(t4.element, null);
        t4.currentFontSize = parseFloat(i4.getPropertyValue("font-size")), t4.display = i4.getPropertyValue("display"), t4.whiteSpace = i4.getPropertyValue("white-space");
      }, p3 = function(e4) {
        var t4 = false;
        return !e4.preStyleTestCompleted && (/inline-/.test(e4.display) || (t4 = true, e4.display = "inline-block"), "nowrap" !== e4.whiteSpace && (t4 = true, e4.whiteSpace = "nowrap"), e4.preStyleTestCompleted = true, t4);
      }, m3 = function(e4) {
        e4.element.style.whiteSpace = e4.whiteSpace, e4.element.style.display = e4.display, e4.element.style.fontSize = e4.currentFontSize + "px";
      }, f3 = function(e4) {
        e4.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: e4.previousFontSize, newValue: e4.currentFontSize, scaleFactor: e4.currentFontSize / e4.previousFontSize } }));
      }, b3 = function(e4, t4) {
        return function() {
          e4.dirty = t4, e4.active && l3();
        };
      }, w3 = function(e4) {
        return function() {
          r3 = r3.filter(function(t4) {
            return t4.element !== e4.element;
          }), e4.observeMutations && e4.observer.disconnect(), e4.element.style.whiteSpace = e4.originalStyle.whiteSpace, e4.element.style.display = e4.originalStyle.display, e4.element.style.fontSize = e4.originalStyle.fontSize;
        };
      }, E3 = function(e4) {
        return function() {
          e4.active || (e4.active = true, l3());
        };
      }, R3 = function(e4) {
        return function() {
          return e4.active = false;
        };
      }, S3 = function(e4) {
        e4.observeMutations && (e4.observer = new MutationObserver(b3(e4, s3)), e4.observer.observe(e4.element, e4.observeMutations));
      }, A3 = { minSize: 16, maxSize: 512, multiLine: true, observeMutations: "MutationObserver" in e3 && { subtree: true, childList: true, characterData: true } }, k3 = null, L3 = function() {
        e3.clearTimeout(k3), k3 = e3.setTimeout(d3(a3), P3.observeWindowDelay);
      }, C3 = ["resize", "orientationchange"];
      return Object.defineProperty(P3, "observeWindow", { set: function(t4) {
        var i4 = (t4 ? "add" : "remove") + "EventListener";
        C3.forEach(function(t5) {
          e3[i4](t5, L3);
        });
      } }), P3.observeWindow = true, P3.observeWindowDelay = 100, P3.fitAll = d3(n3), P3;
    }
    function x3(e4, t4) {
      var i4 = y({}, A3, t4), s4 = e4.map(function(e5) {
        var t5 = y({}, i4, { element: e5, active: true });
        return function(e6) {
          e6.originalStyle = { whiteSpace: e6.element.style.whiteSpace, display: e6.element.style.display, fontSize: e6.element.style.fontSize }, S3(e6), e6.newbie = true, e6.dirty = true, r3.push(e6);
        }(t5), { element: e5, fit: b3(t5, n3), unfreeze: E3(t5), freeze: R3(t5), unsubscribe: w3(t5) };
      });
      return l3(), s4;
    }
    function P3(e4) {
      var i4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return "string" == typeof e4 ? x3(t3(document.querySelectorAll(e4)), i4) : x3([e4], i4)[0];
    }
  }("undefined" == typeof window ? null : window);
  var E = class {
    constructor(e3) {
      this.Reveal = e3, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
    }
    shouldPreload(e3) {
      let t3 = this.Reveal.getConfig().preloadIframes;
      return "boolean" != typeof t3 && (t3 = e3.hasAttribute("data-preload")), t3;
    }
    load(e3, i3 = {}) {
      e3.style.display = this.Reveal.getConfig().display, t(e3, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e4) => {
        ("IFRAME" !== e4.tagName || this.shouldPreload(e4)) && (e4.setAttribute("src", e4.getAttribute("data-src")), e4.setAttribute("data-lazy-loaded", ""), e4.removeAttribute("data-src"));
      }), t(e3, "video, audio").forEach((e4) => {
        let i4 = 0;
        t(e4, "source[data-src]").forEach((e5) => {
          e5.setAttribute("src", e5.getAttribute("data-src")), e5.removeAttribute("data-src"), e5.setAttribute("data-lazy-loaded", ""), i4 += 1;
        }), v && "VIDEO" === e4.tagName && e4.setAttribute("playsinline", ""), i4 > 0 && e4.load();
      });
      let s3 = e3.slideBackgroundElement;
      if (s3) {
        s3.style.display = "block";
        let t3 = e3.slideBackgroundContentElement, a3 = e3.getAttribute("data-background-iframe");
        if (false === s3.hasAttribute("data-loaded")) {
          s3.setAttribute("data-loaded", "true");
          let n4 = e3.getAttribute("data-background-image"), r3 = e3.getAttribute("data-background-video"), o3 = e3.hasAttribute("data-background-video-loop"), l3 = e3.hasAttribute("data-background-video-muted");
          if (n4)
            /^data:/.test(n4.trim()) ? t3.style.backgroundImage = `url(${n4.trim()})` : t3.style.backgroundImage = n4.split(",").map((e4) => `url(${encodeURI(e4.trim())})`).join(",");
          else if (r3 && !this.Reveal.isSpeakerNotes()) {
            let e4 = document.createElement("video");
            o3 && e4.setAttribute("loop", ""), l3 && (e4.muted = true), v && (e4.muted = true, e4.setAttribute("playsinline", "")), r3.split(",").forEach((t4) => {
              let i4 = ((e5 = "") => h[e5.split(".").pop()])(t4);
              e4.innerHTML += i4 ? `<source src="${t4}" type="${i4}">` : `<source src="${t4}">`;
            }), t3.appendChild(e4);
          } else if (a3 && true !== i3.excludeIframes) {
            let e4 = document.createElement("iframe");
            e4.setAttribute("allowfullscreen", ""), e4.setAttribute("mozallowfullscreen", ""), e4.setAttribute("webkitallowfullscreen", ""), e4.setAttribute("allow", "autoplay"), e4.setAttribute("data-src", a3), e4.style.width = "100%", e4.style.height = "100%", e4.style.maxHeight = "100%", e4.style.maxWidth = "100%", t3.appendChild(e4);
          }
        }
        let n3 = t3.querySelector("iframe[data-src]");
        n3 && this.shouldPreload(s3) && !/autoplay=(1|true|yes)/gi.test(a3) && n3.getAttribute("src") !== a3 && n3.setAttribute("src", a3);
      }
      this.layout(e3);
    }
    layout(e3) {
      Array.from(e3.querySelectorAll(".r-fit-text")).forEach((e4) => {
        w(e4, { minSize: 24, maxSize: 0.8 * this.Reveal.getConfig().height, observeMutations: false, observeWindow: false });
      });
    }
    unload(e3) {
      e3.style.display = "none";
      let i3 = this.Reveal.getSlideBackground(e3);
      i3 && (i3.style.display = "none", t(i3, "iframe[src]").forEach((e4) => {
        e4.removeAttribute("src");
      })), t(e3, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e4) => {
        e4.setAttribute("data-src", e4.getAttribute("src")), e4.removeAttribute("src");
      }), t(e3, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e4) => {
        e4.setAttribute("data-src", e4.getAttribute("src")), e4.removeAttribute("src");
      });
    }
    formatEmbeddedContent() {
      let e3 = (e4, i3, s3) => {
        t(this.Reveal.getSlidesElement(), "iframe[" + e4 + '*="' + i3 + '"]').forEach((t3) => {
          let i4 = t3.getAttribute(e4);
          i4 && -1 === i4.indexOf(s3) && t3.setAttribute(e4, i4 + (/\?/.test(i4) ? "&" : "?") + s3);
        });
      };
      e3("src", "youtube.com/embed/", "enablejsapi=1"), e3("data-src", "youtube.com/embed/", "enablejsapi=1"), e3("src", "player.vimeo.com/", "api=1"), e3("data-src", "player.vimeo.com/", "api=1");
    }
    startEmbeddedContent(e3) {
      e3 && !this.Reveal.isSpeakerNotes() && (t(e3, 'img[src$=".gif"]').forEach((e4) => {
        e4.setAttribute("src", e4.getAttribute("src"));
      }), t(e3, "video, audio").forEach((e4) => {
        if (r(e4, ".fragment") && !r(e4, ".fragment.visible"))
          return;
        let t3 = this.Reveal.getConfig().autoPlayMedia;
        if ("boolean" != typeof t3 && (t3 = e4.hasAttribute("data-autoplay") || !!r(e4, ".slide-background")), t3 && "function" == typeof e4.play)
          if (e4.readyState > 1)
            this.startEmbeddedMedia({ target: e4 });
          else if (v) {
            let t4 = e4.play();
            t4 && "function" == typeof t4.catch && false === e4.controls && t4.catch(() => {
              e4.controls = true, e4.addEventListener("play", () => {
                e4.controls = false;
              });
            });
          } else
            e4.removeEventListener("loadeddata", this.startEmbeddedMedia), e4.addEventListener("loadeddata", this.startEmbeddedMedia);
      }), t(e3, "iframe[src]").forEach((e4) => {
        r(e4, ".fragment") && !r(e4, ".fragment.visible") || this.startEmbeddedIframe({ target: e4 });
      }), t(e3, "iframe[data-src]").forEach((e4) => {
        r(e4, ".fragment") && !r(e4, ".fragment.visible") || e4.getAttribute("src") !== e4.getAttribute("data-src") && (e4.removeEventListener("load", this.startEmbeddedIframe), e4.addEventListener("load", this.startEmbeddedIframe), e4.setAttribute("src", e4.getAttribute("data-src")));
      }));
    }
    startEmbeddedMedia(e3) {
      let t3 = !!r(e3.target, "html"), i3 = !!r(e3.target, ".present");
      t3 && i3 && (e3.target.currentTime = 0, e3.target.play()), e3.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
    }
    startEmbeddedIframe(e3) {
      let t3 = e3.target;
      if (t3 && t3.contentWindow) {
        let i3 = !!r(e3.target, "html"), s3 = !!r(e3.target, ".present");
        if (i3 && s3) {
          let e4 = this.Reveal.getConfig().autoPlayMedia;
          "boolean" != typeof e4 && (e4 = t3.hasAttribute("data-autoplay") || !!r(t3, ".slide-background")), /youtube\.com\/embed\//.test(t3.getAttribute("src")) && e4 ? t3.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t3.getAttribute("src")) && e4 ? t3.contentWindow.postMessage('{"method":"play"}', "*") : t3.contentWindow.postMessage("slide:start", "*");
        }
      }
    }
    stopEmbeddedContent(i3, s3 = {}) {
      s3 = e({ unloadIframes: true }, s3), i3 && i3.parentNode && (t(i3, "video, audio").forEach((e3) => {
        e3.hasAttribute("data-ignore") || "function" != typeof e3.pause || (e3.setAttribute("data-paused-by-reveal", ""), e3.pause());
      }), t(i3, "iframe").forEach((e3) => {
        e3.contentWindow && e3.contentWindow.postMessage("slide:stop", "*"), e3.removeEventListener("load", this.startEmbeddedIframe);
      }), t(i3, 'iframe[src*="youtube.com/embed/"]').forEach((e3) => {
        !e3.hasAttribute("data-ignore") && e3.contentWindow && "function" == typeof e3.contentWindow.postMessage && e3.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      }), t(i3, 'iframe[src*="player.vimeo.com/"]').forEach((e3) => {
        !e3.hasAttribute("data-ignore") && e3.contentWindow && "function" == typeof e3.contentWindow.postMessage && e3.contentWindow.postMessage('{"method":"pause"}', "*");
      }), true === s3.unloadIframes && t(i3, "iframe[data-src]").forEach((e3) => {
        e3.setAttribute("src", "about:blank"), e3.removeAttribute("src");
      }));
    }
  };
  var R = class {
    constructor(e3) {
      this.Reveal = e3;
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
    }
    configure(e3, t3) {
      let i3 = "none";
      e3.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e3.showSlideNumber || "speaker" === e3.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i3 = "block"), this.element.style.display = i3;
    }
    update() {
      this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
    }
    getSlideNumber(e3 = this.Reveal.getCurrentSlide()) {
      let t3, i3 = this.Reveal.getConfig(), s3 = "h.v";
      if ("function" == typeof i3.slideNumber)
        t3 = i3.slideNumber(e3);
      else {
        "string" == typeof i3.slideNumber && (s3 = i3.slideNumber), /c/.test(s3) || 1 !== this.Reveal.getHorizontalSlides().length || (s3 = "c");
        let a4 = e3 && "uncounted" === e3.dataset.visibility ? 0 : 1;
        switch (t3 = [], s3) {
          case "c":
            t3.push(this.Reveal.getSlidePastCount(e3) + a4);
            break;
          case "c/t":
            t3.push(this.Reveal.getSlidePastCount(e3) + a4, "/", this.Reveal.getTotalSlides());
            break;
          default:
            let i4 = this.Reveal.getIndices(e3);
            t3.push(i4.h + a4);
            let n3 = "h/v" === s3 ? "/" : ".";
            this.Reveal.isVerticalSlide(e3) && t3.push(n3, i4.v + 1);
        }
      }
      let a3 = "#" + this.Reveal.location.getHash(e3);
      return this.formatNumber(t3[0], t3[1], t3[2], a3);
    }
    formatNumber(e3, t3, i3, s3 = "#" + this.Reveal.location.getHash()) {
      return "number" != typeof i3 || isNaN(i3) ? `<a href="${s3}">
					<span class="slide-number-a">${e3}</span>
					</a>` : `<a href="${s3}">
					<span class="slide-number-a">${e3}</span>
					<span class="slide-number-delimiter">${t3}</span>
					<span class="slide-number-b">${i3}</span>
					</a>`;
    }
    destroy() {
      this.element.remove();
    }
  };
  var S = (e3) => {
    let t3 = e3.match(/^#([0-9a-f]{3})$/i);
    if (t3 && t3[1])
      return t3 = t3[1], { r: 17 * parseInt(t3.charAt(0), 16), g: 17 * parseInt(t3.charAt(1), 16), b: 17 * parseInt(t3.charAt(2), 16) };
    let i3 = e3.match(/^#([0-9a-f]{6})$/i);
    if (i3 && i3[1])
      return i3 = i3[1], { r: parseInt(i3.slice(0, 2), 16), g: parseInt(i3.slice(2, 4), 16), b: parseInt(i3.slice(4, 6), 16) };
    let s3 = e3.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (s3)
      return { r: parseInt(s3[1], 10), g: parseInt(s3[2], 10), b: parseInt(s3[3], 10) };
    let a3 = e3.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
    return a3 ? { r: parseInt(a3[1], 10), g: parseInt(a3[2], 10), b: parseInt(a3[3], 10), a: parseFloat(a3[4]) } : null;
  };
  var A = class {
    constructor(e3) {
      this.Reveal = e3;
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
    }
    create() {
      this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((e3) => {
        let i3 = this.createBackground(e3, this.element);
        t(e3, "section").forEach((e4) => {
          this.createBackground(e4, i3), i3.classList.add("stack");
        });
      }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
        this.Reveal.getRevealElement().classList.add("has-parallax-background");
      }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
    }
    createBackground(e3, t3) {
      let i3 = document.createElement("div");
      i3.className = "slide-background " + e3.className.replace(/present|past|future/, "");
      let s3 = document.createElement("div");
      return s3.className = "slide-background-content", i3.appendChild(s3), t3.appendChild(i3), e3.slideBackgroundElement = i3, e3.slideBackgroundContentElement = s3, this.sync(e3), i3;
    }
    sync(e3) {
      const t3 = e3.slideBackgroundElement, i3 = e3.slideBackgroundContentElement, s3 = { background: e3.getAttribute("data-background"), backgroundSize: e3.getAttribute("data-background-size"), backgroundImage: e3.getAttribute("data-background-image"), backgroundVideo: e3.getAttribute("data-background-video"), backgroundIframe: e3.getAttribute("data-background-iframe"), backgroundColor: e3.getAttribute("data-background-color"), backgroundRepeat: e3.getAttribute("data-background-repeat"), backgroundPosition: e3.getAttribute("data-background-position"), backgroundTransition: e3.getAttribute("data-background-transition"), backgroundOpacity: e3.getAttribute("data-background-opacity") }, a3 = e3.hasAttribute("data-preload");
      e3.classList.remove("has-dark-background"), e3.classList.remove("has-light-background"), t3.removeAttribute("data-loaded"), t3.removeAttribute("data-background-hash"), t3.removeAttribute("data-background-size"), t3.removeAttribute("data-background-transition"), t3.style.backgroundColor = "", i3.style.backgroundSize = "", i3.style.backgroundRepeat = "", i3.style.backgroundPosition = "", i3.style.backgroundImage = "", i3.style.opacity = "", i3.innerHTML = "", s3.background && (/^(http|file|\/\/)/gi.test(s3.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(s3.background) ? e3.setAttribute("data-background-image", s3.background) : t3.style.background = s3.background), (s3.background || s3.backgroundColor || s3.backgroundImage || s3.backgroundVideo || s3.backgroundIframe) && t3.setAttribute("data-background-hash", s3.background + s3.backgroundSize + s3.backgroundImage + s3.backgroundVideo + s3.backgroundIframe + s3.backgroundColor + s3.backgroundRepeat + s3.backgroundPosition + s3.backgroundTransition + s3.backgroundOpacity), s3.backgroundSize && t3.setAttribute("data-background-size", s3.backgroundSize), s3.backgroundColor && (t3.style.backgroundColor = s3.backgroundColor), s3.backgroundTransition && t3.setAttribute("data-background-transition", s3.backgroundTransition), a3 && t3.setAttribute("data-preload", ""), s3.backgroundSize && (i3.style.backgroundSize = s3.backgroundSize), s3.backgroundRepeat && (i3.style.backgroundRepeat = s3.backgroundRepeat), s3.backgroundPosition && (i3.style.backgroundPosition = s3.backgroundPosition), s3.backgroundOpacity && (i3.style.opacity = s3.backgroundOpacity);
      let n3 = s3.backgroundColor;
      if (!n3 || !S(n3)) {
        let e4 = window.getComputedStyle(t3);
        e4 && e4.backgroundColor && (n3 = e4.backgroundColor);
      }
      if (n3) {
        const t4 = S(n3);
        t4 && 0 !== t4.a && ("string" == typeof (r3 = n3) && (r3 = S(r3)), (r3 ? (299 * r3.r + 587 * r3.g + 114 * r3.b) / 1e3 : null) < 128 ? e3.classList.add("has-dark-background") : e3.classList.add("has-light-background"));
      }
      var r3;
    }
    update(e3 = false) {
      let i3 = this.Reveal.getCurrentSlide(), s3 = this.Reveal.getIndices(), a3 = null, n3 = this.Reveal.getConfig().rtl ? "future" : "past", r3 = this.Reveal.getConfig().rtl ? "past" : "future";
      if (Array.from(this.element.childNodes).forEach((i4, o3) => {
        i4.classList.remove("past", "present", "future"), o3 < s3.h ? i4.classList.add(n3) : o3 > s3.h ? i4.classList.add(r3) : (i4.classList.add("present"), a3 = i4), (e3 || o3 === s3.h) && t(i4, ".slide-background").forEach((e4, t3) => {
          e4.classList.remove("past", "present", "future"), t3 < s3.v ? e4.classList.add("past") : t3 > s3.v ? e4.classList.add("future") : (e4.classList.add("present"), o3 === s3.h && (a3 = e4));
        });
      }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, { unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground) }), a3) {
        this.Reveal.slideContent.startEmbeddedContent(a3);
        let e4 = a3.querySelector(".slide-background-content");
        if (e4) {
          let t4 = e4.style.backgroundImage || "";
          /\.gif/i.test(t4) && (e4.style.backgroundImage = "", window.getComputedStyle(e4).opacity, e4.style.backgroundImage = t4);
        }
        let t3 = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null, i4 = a3.getAttribute("data-background-hash");
        i4 && i4 === t3 && a3 !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = a3;
      }
      i3 && ["has-light-background", "has-dark-background"].forEach((e4) => {
        i3.classList.contains(e4) ? this.Reveal.getRevealElement().classList.add(e4) : this.Reveal.getRevealElement().classList.remove(e4);
      }, this), setTimeout(() => {
        this.element.classList.remove("no-transition");
      }, 1);
    }
    updateParallax() {
      let e3 = this.Reveal.getIndices();
      if (this.Reveal.getConfig().parallaxBackgroundImage) {
        let t3, i3, s3 = this.Reveal.getHorizontalSlides(), a3 = this.Reveal.getVerticalSlides(), n3 = this.element.style.backgroundSize.split(" ");
        1 === n3.length ? t3 = i3 = parseInt(n3[0], 10) : (t3 = parseInt(n3[0], 10), i3 = parseInt(n3[1], 10));
        let r3, o3, l3 = this.element.offsetWidth, d3 = s3.length;
        r3 = "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : d3 > 1 ? (t3 - l3) / (d3 - 1) : 0, o3 = r3 * e3.h * -1;
        let c3, h3, u3 = this.element.offsetHeight, g3 = a3.length;
        c3 = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (i3 - u3) / (g3 - 1), h3 = g3 > 0 ? c3 * e3.v : 0, this.element.style.backgroundPosition = o3 + "px " + -h3 + "px";
      }
    }
    destroy() {
      this.element.remove();
    }
  };
  var k = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/;
  var L = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
  var C = 0;
  var x = class {
    constructor(e3) {
      this.Reveal = e3;
    }
    run(e3, t3) {
      this.reset();
      let i3 = this.Reveal.getSlides(), s3 = i3.indexOf(t3), a3 = i3.indexOf(e3);
      if (e3.hasAttribute("data-auto-animate") && t3.hasAttribute("data-auto-animate") && e3.getAttribute("data-auto-animate-id") === t3.getAttribute("data-auto-animate-id") && !(s3 > a3 ? t3 : e3).hasAttribute("data-auto-animate-restart")) {
        this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
        let i4 = this.getAutoAnimateOptions(t3);
        e3.dataset.autoAnimate = "pending", t3.dataset.autoAnimate = "pending", i4.slideDirection = s3 > a3 ? "forward" : "backward";
        let n3 = this.getAutoAnimatableElements(e3, t3).map((e4) => this.autoAnimateElements(e4.from, e4.to, e4.options || {}, i4, C++));
        if ("false" !== t3.dataset.autoAnimateUnmatched && true === this.Reveal.getConfig().autoAnimateUnmatched) {
          let e4 = 0.8 * i4.duration, s4 = 0.2 * i4.duration;
          this.getUnmatchedAutoAnimateElements(t3).forEach((e5) => {
            let t4 = this.getAutoAnimateOptions(e5, i4), s5 = "unmatched";
            t4.duration === i4.duration && t4.delay === i4.delay || (s5 = "unmatched-" + C++, n3.push(`[data-auto-animate="running"] [data-auto-animate-target="${s5}"] { transition: opacity ${t4.duration}s ease ${t4.delay}s; }`)), e5.dataset.autoAnimateTarget = s5;
          }, this), n3.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e4}s ease ${s4}s; }`);
        }
        this.autoAnimateStyleSheet.innerHTML = n3.join(""), requestAnimationFrame(() => {
          this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t3.dataset.autoAnimate = "running");
        }), this.Reveal.dispatchEvent({ type: "autoanimate", data: { fromSlide: e3, toSlide: t3, sheet: this.autoAnimateStyleSheet } });
      }
    }
    reset() {
      t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach((e3) => {
        e3.dataset.autoAnimate = "";
      }), t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e3) => {
        delete e3.dataset.autoAnimateTarget;
      }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
    }
    autoAnimateElements(e3, t3, i3, s3, a3) {
      e3.dataset.autoAnimateTarget = "", t3.dataset.autoAnimateTarget = a3;
      let n3 = this.getAutoAnimateOptions(t3, s3);
      void 0 !== i3.delay && (n3.delay = i3.delay), void 0 !== i3.duration && (n3.duration = i3.duration), void 0 !== i3.easing && (n3.easing = i3.easing);
      let r3 = this.getAutoAnimatableProperties("from", e3, i3), o3 = this.getAutoAnimatableProperties("to", t3, i3);
      if (t3.classList.contains("fragment") && (delete o3.styles.opacity, e3.classList.contains("fragment"))) {
        (e3.className.match(L) || [""])[0] === (t3.className.match(L) || [""])[0] && "forward" === s3.slideDirection && t3.classList.add("visible", "disabled");
      }
      if (false !== i3.translate || false !== i3.scale) {
        let e4 = this.Reveal.getScale(), t4 = { x: (r3.x - o3.x) / e4, y: (r3.y - o3.y) / e4, scaleX: r3.width / o3.width, scaleY: r3.height / o3.height };
        t4.x = Math.round(1e3 * t4.x) / 1e3, t4.y = Math.round(1e3 * t4.y) / 1e3, t4.scaleX = Math.round(1e3 * t4.scaleX) / 1e3, t4.scaleX = Math.round(1e3 * t4.scaleX) / 1e3;
        let s4 = false !== i3.translate && (0 !== t4.x || 0 !== t4.y), a4 = false !== i3.scale && (0 !== t4.scaleX || 0 !== t4.scaleY);
        if (s4 || a4) {
          let e5 = [];
          s4 && e5.push(`translate(${t4.x}px, ${t4.y}px)`), a4 && e5.push(`scale(${t4.scaleX}, ${t4.scaleY})`), r3.styles.transform = e5.join(" "), r3.styles["transform-origin"] = "top left", o3.styles.transform = "none";
        }
      }
      for (let e4 in o3.styles) {
        const t4 = o3.styles[e4], i4 = r3.styles[e4];
        t4 === i4 ? delete o3.styles[e4] : (true === t4.explicitValue && (o3.styles[e4] = t4.value), true === i4.explicitValue && (r3.styles[e4] = i4.value));
      }
      let l3 = "", d3 = Object.keys(o3.styles);
      if (d3.length > 0) {
        r3.styles.transition = "none", o3.styles.transition = `all ${n3.duration}s ${n3.easing} ${n3.delay}s`, o3.styles["transition-property"] = d3.join(", "), o3.styles["will-change"] = d3.join(", "), l3 = '[data-auto-animate-target="' + a3 + '"] {' + Object.keys(r3.styles).map((e4) => e4 + ": " + r3.styles[e4] + " !important;").join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + a3 + '"] {' + Object.keys(o3.styles).map((e4) => e4 + ": " + o3.styles[e4] + " !important;").join("") + "}";
      }
      return l3;
    }
    getAutoAnimateOptions(t3, i3) {
      let s3 = { easing: this.Reveal.getConfig().autoAnimateEasing, duration: this.Reveal.getConfig().autoAnimateDuration, delay: 0 };
      if (s3 = e(s3, i3), t3.parentNode) {
        let e3 = r(t3.parentNode, "[data-auto-animate-target]");
        e3 && (s3 = this.getAutoAnimateOptions(e3, s3));
      }
      return t3.dataset.autoAnimateEasing && (s3.easing = t3.dataset.autoAnimateEasing), t3.dataset.autoAnimateDuration && (s3.duration = parseFloat(t3.dataset.autoAnimateDuration)), t3.dataset.autoAnimateDelay && (s3.delay = parseFloat(t3.dataset.autoAnimateDelay)), s3;
    }
    getAutoAnimatableProperties(e3, t3, i3) {
      let s3 = this.Reveal.getConfig(), a3 = { styles: [] };
      if (false !== i3.translate || false !== i3.scale) {
        let e4;
        if ("function" == typeof i3.measure)
          e4 = i3.measure(t3);
        else if (s3.center)
          e4 = t3.getBoundingClientRect();
        else {
          let i4 = this.Reveal.getScale();
          e4 = { x: t3.offsetLeft * i4, y: t3.offsetTop * i4, width: t3.offsetWidth * i4, height: t3.offsetHeight * i4 };
        }
        a3.x = e4.x, a3.y = e4.y, a3.width = e4.width, a3.height = e4.height;
      }
      const n3 = getComputedStyle(t3);
      return (i3.styles || s3.autoAnimateStyles).forEach((t4) => {
        let i4;
        "string" == typeof t4 && (t4 = { property: t4 }), i4 = void 0 !== t4.from && "from" === e3 ? { value: t4.from, explicitValue: true } : void 0 !== t4.to && "to" === e3 ? { value: t4.to, explicitValue: true } : n3[t4.property], "" !== i4 && (a3.styles[t4.property] = i4);
      }), a3;
    }
    getAutoAnimatableElements(e3, t3) {
      let i3 = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e3, t3), s3 = [];
      return i3.filter((e4, t4) => {
        if (-1 === s3.indexOf(e4.to))
          return s3.push(e4.to), true;
      });
    }
    getAutoAnimatePairs(e3, t3) {
      let i3 = [];
      const s3 = "h1, h2, h3, h4, h5, h6, p, li";
      return this.findAutoAnimateMatches(i3, e3, t3, "[data-id]", (e4) => e4.nodeName + ":::" + e4.getAttribute("data-id")), this.findAutoAnimateMatches(i3, e3, t3, s3, (e4) => e4.nodeName + ":::" + e4.innerText), this.findAutoAnimateMatches(i3, e3, t3, "img, video, iframe", (e4) => e4.nodeName + ":::" + (e4.getAttribute("src") || e4.getAttribute("data-src"))), this.findAutoAnimateMatches(i3, e3, t3, "pre", (e4) => e4.nodeName + ":::" + e4.innerText), i3.forEach((e4) => {
        n(e4.from, s3) ? e4.options = { scale: false } : n(e4.from, "pre") && (e4.options = { scale: false, styles: ["width", "height"] }, this.findAutoAnimateMatches(i3, e4.from, e4.to, ".hljs .hljs-ln-code", (e5) => e5.textContent, { scale: false, styles: [], measure: this.getLocalBoundingBox.bind(this) }), this.findAutoAnimateMatches(i3, e4.from, e4.to, ".hljs .hljs-ln-line[data-line-number]", (e5) => e5.getAttribute("data-line-number"), { scale: false, styles: ["width"], measure: this.getLocalBoundingBox.bind(this) }));
      }, this), i3;
    }
    getLocalBoundingBox(e3) {
      const t3 = this.Reveal.getScale();
      return { x: Math.round(e3.offsetLeft * t3 * 100) / 100, y: Math.round(e3.offsetTop * t3 * 100) / 100, width: Math.round(e3.offsetWidth * t3 * 100) / 100, height: Math.round(e3.offsetHeight * t3 * 100) / 100 };
    }
    findAutoAnimateMatches(e3, t3, i3, s3, a3, n3) {
      let r3 = {}, o3 = {};
      [].slice.call(t3.querySelectorAll(s3)).forEach((e4, t4) => {
        const i4 = a3(e4);
        "string" == typeof i4 && i4.length && (r3[i4] = r3[i4] || [], r3[i4].push(e4));
      }), [].slice.call(i3.querySelectorAll(s3)).forEach((t4, i4) => {
        const s4 = a3(t4);
        let l3;
        if (o3[s4] = o3[s4] || [], o3[s4].push(t4), r3[s4]) {
          const e4 = o3[s4].length - 1, t5 = r3[s4].length - 1;
          r3[s4][e4] ? (l3 = r3[s4][e4], r3[s4][e4] = null) : r3[s4][t5] && (l3 = r3[s4][t5], r3[s4][t5] = null);
        }
        l3 && e3.push({ from: l3, to: t4, options: n3 });
      });
    }
    getUnmatchedAutoAnimateElements(e3) {
      return [].slice.call(e3.children).reduce((e4, t3) => {
        const i3 = t3.querySelector("[data-auto-animate-target]");
        return t3.hasAttribute("data-auto-animate-target") || i3 || e4.push(t3), t3.querySelector("[data-auto-animate-target]") && (e4 = e4.concat(this.getUnmatchedAutoAnimateElements(t3))), e4;
      }, []);
    }
  };
  var P = class {
    constructor(e3) {
      this.Reveal = e3;
    }
    configure(e3, t3) {
      false === e3.fragments ? this.disable() : false === t3.fragments && this.enable();
    }
    disable() {
      t(this.Reveal.getSlidesElement(), ".fragment").forEach((e3) => {
        e3.classList.add("visible"), e3.classList.remove("current-fragment");
      });
    }
    enable() {
      t(this.Reveal.getSlidesElement(), ".fragment").forEach((e3) => {
        e3.classList.remove("visible"), e3.classList.remove("current-fragment");
      });
    }
    availableRoutes() {
      let e3 = this.Reveal.getCurrentSlide();
      if (e3 && this.Reveal.getConfig().fragments) {
        let t3 = e3.querySelectorAll(".fragment:not(.disabled)"), i3 = e3.querySelectorAll(".fragment:not(.disabled):not(.visible)");
        return { prev: t3.length - i3.length > 0, next: !!i3.length };
      }
      return { prev: false, next: false };
    }
    sort(e3, t3 = false) {
      e3 = Array.from(e3);
      let i3 = [], s3 = [], a3 = [];
      e3.forEach((e4) => {
        if (e4.hasAttribute("data-fragment-index")) {
          let t4 = parseInt(e4.getAttribute("data-fragment-index"), 10);
          i3[t4] || (i3[t4] = []), i3[t4].push(e4);
        } else
          s3.push([e4]);
      }), i3 = i3.concat(s3);
      let n3 = 0;
      return i3.forEach((e4) => {
        e4.forEach((e5) => {
          a3.push(e5), e5.setAttribute("data-fragment-index", n3);
        }), n3++;
      }), true === t3 ? i3 : a3;
    }
    sortAll() {
      this.Reveal.getHorizontalSlides().forEach((e3) => {
        let i3 = t(e3, "section");
        i3.forEach((e4, t3) => {
          this.sort(e4.querySelectorAll(".fragment"));
        }, this), 0 === i3.length && this.sort(e3.querySelectorAll(".fragment"));
      });
    }
    update(e3, t3) {
      let i3 = { shown: [], hidden: [] }, s3 = this.Reveal.getCurrentSlide();
      if (s3 && this.Reveal.getConfig().fragments && (t3 = t3 || this.sort(s3.querySelectorAll(".fragment"))).length) {
        let a3 = 0;
        if ("number" != typeof e3) {
          let t4 = this.sort(s3.querySelectorAll(".fragment.visible")).pop();
          t4 && (e3 = parseInt(t4.getAttribute("data-fragment-index") || 0, 10));
        }
        Array.from(t3).forEach((t4, s4) => {
          if (t4.hasAttribute("data-fragment-index") && (s4 = parseInt(t4.getAttribute("data-fragment-index"), 10)), a3 = Math.max(a3, s4), s4 <= e3) {
            let a4 = t4.classList.contains("visible");
            t4.classList.add("visible"), t4.classList.remove("current-fragment"), s4 === e3 && (this.Reveal.announceStatus(this.Reveal.getStatusText(t4)), t4.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t4)), a4 || (i3.shown.push(t4), this.Reveal.dispatchEvent({ target: t4, type: "visible", bubbles: false }));
          } else {
            let e4 = t4.classList.contains("visible");
            t4.classList.remove("visible"), t4.classList.remove("current-fragment"), e4 && (this.Reveal.slideContent.stopEmbeddedContent(t4), i3.hidden.push(t4), this.Reveal.dispatchEvent({ target: t4, type: "hidden", bubbles: false }));
          }
        }), e3 = "number" == typeof e3 ? e3 : -1, e3 = Math.max(Math.min(e3, a3), -1), s3.setAttribute("data-fragment", e3);
      }
      return i3;
    }
    sync(e3 = this.Reveal.getCurrentSlide()) {
      return this.sort(e3.querySelectorAll(".fragment"));
    }
    goto(e3, t3 = 0) {
      let i3 = this.Reveal.getCurrentSlide();
      if (i3 && this.Reveal.getConfig().fragments) {
        let s3 = this.sort(i3.querySelectorAll(".fragment:not(.disabled)"));
        if (s3.length) {
          if ("number" != typeof e3) {
            let t4 = this.sort(i3.querySelectorAll(".fragment:not(.disabled).visible")).pop();
            e3 = t4 ? parseInt(t4.getAttribute("data-fragment-index") || 0, 10) : -1;
          }
          e3 += t3;
          let a3 = this.update(e3, s3);
          return a3.hidden.length && this.Reveal.dispatchEvent({ type: "fragmenthidden", data: { fragment: a3.hidden[0], fragments: a3.hidden } }), a3.shown.length && this.Reveal.dispatchEvent({ type: "fragmentshown", data: { fragment: a3.shown[0], fragments: a3.shown } }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!a3.shown.length && !a3.hidden.length);
        }
      }
      return false;
    }
    next() {
      return this.goto(null, 1);
    }
    prev() {
      return this.goto(null, -1);
    }
  };
  var N = class {
    constructor(e3) {
      this.Reveal = e3, this.active = false, this.onSlideClicked = this.onSlideClicked.bind(this);
    }
    activate() {
      if (this.Reveal.getConfig().overview && !this.isActive()) {
        this.active = true, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), ".slides section").forEach((e4) => {
          e4.classList.contains("stack") || e4.addEventListener("click", this.onSlideClicked, true);
        });
        const e3 = 70, i3 = this.Reveal.getComputedSlideSize();
        this.overviewSlideWidth = i3.width + e3, this.overviewSlideHeight = i3.height + e3, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
        const s3 = this.Reveal.getIndices();
        this.Reveal.dispatchEvent({ type: "overviewshown", data: { indexh: s3.h, indexv: s3.v, currentSlide: this.Reveal.getCurrentSlide() } });
      }
    }
    layout() {
      this.Reveal.getHorizontalSlides().forEach((e3, i3) => {
        e3.setAttribute("data-index-h", i3), a(e3, "translate3d(" + i3 * this.overviewSlideWidth + "px, 0, 0)"), e3.classList.contains("stack") && t(e3, "section").forEach((e4, t3) => {
          e4.setAttribute("data-index-h", i3), e4.setAttribute("data-index-v", t3), a(e4, "translate3d(0, " + t3 * this.overviewSlideHeight + "px, 0)");
        });
      }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e3, i3) => {
        a(e3, "translate3d(" + i3 * this.overviewSlideWidth + "px, 0, 0)"), t(e3, ".slide-background").forEach((e4, t3) => {
          a(e4, "translate3d(0, " + t3 * this.overviewSlideHeight + "px, 0)");
        });
      });
    }
    update() {
      const e3 = Math.min(window.innerWidth, window.innerHeight), t3 = Math.max(e3 / 5, 150) / e3, i3 = this.Reveal.getIndices();
      this.Reveal.transformSlides({ overview: ["scale(" + t3 + ")", "translateX(" + -i3.h * this.overviewSlideWidth + "px)", "translateY(" + -i3.v * this.overviewSlideHeight + "px)"].join(" ") });
    }
    deactivate() {
      if (this.Reveal.getConfig().overview) {
        this.active = false, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
          this.Reveal.getRevealElement().classList.remove("overview-deactivating");
        }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), ".slides section").forEach((e4) => {
          a(e4, ""), e4.removeEventListener("click", this.onSlideClicked, true);
        }), t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e4) => {
          a(e4, "");
        }), this.Reveal.transformSlides({ overview: "" });
        const e3 = this.Reveal.getIndices();
        this.Reveal.slide(e3.h, e3.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({ type: "overviewhidden", data: { indexh: e3.h, indexv: e3.v, currentSlide: this.Reveal.getCurrentSlide() } });
      }
    }
    toggle(e3) {
      "boolean" == typeof e3 ? e3 ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
    }
    isActive() {
      return this.active;
    }
    onSlideClicked(e3) {
      if (this.isActive()) {
        e3.preventDefault();
        let t3 = e3.target;
        for (; t3 && !t3.nodeName.match(/section/gi); )
          t3 = t3.parentNode;
        if (t3 && !t3.classList.contains("disabled") && (this.deactivate(), t3.nodeName.match(/section/gi))) {
          let e4 = parseInt(t3.getAttribute("data-index-h"), 10), i3 = parseInt(t3.getAttribute("data-index-v"), 10);
          this.Reveal.slide(e4, i3);
        }
      }
    }
  };
  var M = class {
    constructor(e3) {
      this.Reveal = e3, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this);
    }
    configure(e3, t3) {
      "linear" === e3.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview";
    }
    bind() {
      document.addEventListener("keydown", this.onDocumentKeyDown, false), document.addEventListener("keypress", this.onDocumentKeyPress, false);
    }
    unbind() {
      document.removeEventListener("keydown", this.onDocumentKeyDown, false), document.removeEventListener("keypress", this.onDocumentKeyPress, false);
    }
    addKeyBinding(e3, t3) {
      "object" == typeof e3 && e3.keyCode ? this.bindings[e3.keyCode] = { callback: t3, key: e3.key, description: e3.description } : this.bindings[e3] = { callback: t3, key: null, description: null };
    }
    removeKeyBinding(e3) {
      delete this.bindings[e3];
    }
    triggerKey(e3) {
      this.onDocumentKeyDown({ keyCode: e3 });
    }
    registerKeyboardShortcut(e3, t3) {
      this.shortcuts[e3] = t3;
    }
    getShortcuts() {
      return this.shortcuts;
    }
    getBindings() {
      return this.bindings;
    }
    onDocumentKeyPress(e3) {
      e3.shiftKey && 63 === e3.charCode && this.Reveal.toggleHelp();
    }
    onDocumentKeyDown(e3) {
      let t3 = this.Reveal.getConfig();
      if ("function" == typeof t3.keyboardCondition && false === t3.keyboardCondition(e3))
        return true;
      if ("focused" === t3.keyboardCondition && !this.Reveal.isFocused())
        return true;
      let i3 = e3.keyCode, s3 = !this.Reveal.isAutoSliding();
      this.Reveal.onUserInput(e3);
      let a3 = document.activeElement && true === document.activeElement.isContentEditable, n3 = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName), r3 = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className), o3 = !(-1 !== [32, 37, 38, 39, 40, 78, 80].indexOf(e3.keyCode) && e3.shiftKey || e3.altKey) && (e3.shiftKey || e3.altKey || e3.ctrlKey || e3.metaKey);
      if (a3 || n3 || r3 || o3)
        return;
      let l3, d3 = [66, 86, 190, 191];
      if ("object" == typeof t3.keyboard)
        for (l3 in t3.keyboard)
          "togglePause" === t3.keyboard[l3] && d3.push(parseInt(l3, 10));
      if (this.Reveal.isPaused() && -1 === d3.indexOf(i3))
        return false;
      let c3 = "linear" === t3.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), h3 = false;
      if ("object" == typeof t3.keyboard) {
        for (l3 in t3.keyboard)
          if (parseInt(l3, 10) === i3) {
            let i4 = t3.keyboard[l3];
            "function" == typeof i4 ? i4.apply(null, [e3]) : "string" == typeof i4 && "function" == typeof this.Reveal[i4] && this.Reveal[i4].call(), h3 = true;
          }
      }
      if (false === h3) {
        for (l3 in this.bindings)
          if (parseInt(l3, 10) === i3) {
            let t4 = this.bindings[l3].callback;
            "function" == typeof t4 ? t4.apply(null, [e3]) : "string" == typeof t4 && "function" == typeof this.Reveal[t4] && this.Reveal[t4].call(), h3 = true;
          }
      }
      false === h3 && (h3 = true, 80 === i3 || 33 === i3 ? this.Reveal.prev({ skipFragments: e3.altKey }) : 78 === i3 || 34 === i3 ? this.Reveal.next({ skipFragments: e3.altKey }) : 72 === i3 || 37 === i3 ? e3.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && c3 ? this.Reveal.prev({ skipFragments: e3.altKey }) : this.Reveal.left({ skipFragments: e3.altKey }) : 76 === i3 || 39 === i3 ? e3.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && c3 ? this.Reveal.next({ skipFragments: e3.altKey }) : this.Reveal.right({ skipFragments: e3.altKey }) : 75 === i3 || 38 === i3 ? e3.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && c3 ? this.Reveal.prev({ skipFragments: e3.altKey }) : this.Reveal.up({ skipFragments: e3.altKey }) : 74 === i3 || 40 === i3 ? e3.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && c3 ? this.Reveal.next({ skipFragments: e3.altKey }) : this.Reveal.down({ skipFragments: e3.altKey }) : 36 === i3 ? this.Reveal.slide(0) : 35 === i3 ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : 32 === i3 ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e3.shiftKey ? this.Reveal.prev({ skipFragments: e3.altKey }) : this.Reveal.next({ skipFragments: e3.altKey })) : 58 === i3 || 59 === i3 || 66 === i3 || 86 === i3 || 190 === i3 || 191 === i3 ? this.Reveal.togglePause() : 70 === i3 ? ((e4) => {
        let t4 = (e4 = e4 || document.documentElement).requestFullscreen || e4.webkitRequestFullscreen || e4.webkitRequestFullScreen || e4.mozRequestFullScreen || e4.msRequestFullscreen;
        t4 && t4.apply(e4);
      })(t3.embedded ? this.Reveal.getViewportElement() : document.documentElement) : 65 === i3 ? t3.autoSlideStoppable && this.Reveal.toggleAutoSlide(s3) : h3 = false), h3 ? e3.preventDefault && e3.preventDefault() : 27 !== i3 && 79 !== i3 || (false === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e3.preventDefault && e3.preventDefault()), this.Reveal.cueAutoSlide();
    }
  };
  var D = class {
    constructor(e3) {
      var t3, i3, s3;
      s3 = 1e3, (i3 = "MAX_REPLACE_STATE_FREQUENCY") in (t3 = this) ? Object.defineProperty(t3, i3, { value: s3, enumerable: true, configurable: true, writable: true }) : t3[i3] = s3, this.Reveal = e3, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
    }
    bind() {
      window.addEventListener("hashchange", this.onWindowHashChange, false);
    }
    unbind() {
      window.removeEventListener("hashchange", this.onWindowHashChange, false);
    }
    getIndicesFromHash(e3 = window.location.hash) {
      let t3 = e3.replace(/^#\/?/, ""), i3 = t3.split("/");
      if (/^[0-9]*$/.test(i3[0]) || !t3.length) {
        const e4 = this.Reveal.getConfig();
        let t4, s3 = e4.hashOneBasedIndex ? 1 : 0, a3 = parseInt(i3[0], 10) - s3 || 0, n3 = parseInt(i3[1], 10) - s3 || 0;
        return e4.fragmentInURL && (t4 = parseInt(i3[2], 10), isNaN(t4) && (t4 = void 0)), { h: a3, v: n3, f: t4 };
      }
      {
        let e4, i4;
        /\/[-\d]+$/g.test(t3) && (i4 = parseInt(t3.split("/").pop(), 10), i4 = isNaN(i4) ? void 0 : i4, t3 = t3.split("/").shift());
        try {
          e4 = document.getElementById(decodeURIComponent(t3));
        } catch (e5) {
        }
        if (e4)
          return { ...this.Reveal.getIndices(e4), f: i4 };
      }
      return null;
    }
    readURL() {
      const e3 = this.Reveal.getIndices(), t3 = this.getIndicesFromHash();
      t3 ? t3.h === e3.h && t3.v === e3.v && void 0 === t3.f || this.Reveal.slide(t3.h, t3.v, t3.f) : this.Reveal.slide(e3.h || 0, e3.v || 0);
    }
    writeURL(e3) {
      let t3 = this.Reveal.getConfig(), i3 = this.Reveal.getCurrentSlide();
      if (clearTimeout(this.writeURLTimeout), "number" == typeof e3)
        this.writeURLTimeout = setTimeout(this.writeURL, e3);
      else if (i3) {
        let e4 = this.getHash();
        t3.history ? window.location.hash = e4 : t3.hash && ("/" === e4 ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + e4));
      }
    }
    replaceState(e3) {
      window.history.replaceState(null, null, e3), this.replaceStateTimestamp = Date.now();
    }
    debouncedReplaceState(e3) {
      clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e3) : this.replaceStateTimeout = setTimeout(() => this.replaceState(e3), this.MAX_REPLACE_STATE_FREQUENCY);
    }
    getHash(e3) {
      let t3 = "/", i3 = e3 || this.Reveal.getCurrentSlide(), s3 = i3 ? i3.getAttribute("id") : null;
      s3 && (s3 = encodeURIComponent(s3));
      let a3 = this.Reveal.getIndices(e3);
      if (this.Reveal.getConfig().fragmentInURL || (a3.f = void 0), "string" == typeof s3 && s3.length)
        t3 = "/" + s3, a3.f >= 0 && (t3 += "/" + a3.f);
      else {
        let e4 = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
        (a3.h > 0 || a3.v > 0 || a3.f >= 0) && (t3 += a3.h + e4), (a3.v > 0 || a3.f >= 0) && (t3 += "/" + (a3.v + e4)), a3.f >= 0 && (t3 += "/" + a3.f);
      }
      return t3;
    }
    onWindowHashChange(e3) {
      this.readURL();
    }
  };
  var I = class {
    constructor(e3) {
      this.Reveal = e3, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this);
    }
    render() {
      const e3 = this.Reveal.getConfig().rtl, i3 = this.Reveal.getRevealElement();
      this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e3 ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e3 ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = t(i3, ".navigate-left"), this.controlsRight = t(i3, ".navigate-right"), this.controlsUp = t(i3, ".navigate-up"), this.controlsDown = t(i3, ".navigate-down"), this.controlsPrev = t(i3, ".navigate-prev"), this.controlsNext = t(i3, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
    }
    configure(e3, t3) {
      this.element.style.display = e3.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e3.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e3.controlsBackArrows);
    }
    bind() {
      let e3 = ["touchstart", "click"];
      m && (e3 = ["touchstart"]), e3.forEach((e4) => {
        this.controlsLeft.forEach((t3) => t3.addEventListener(e4, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t3) => t3.addEventListener(e4, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t3) => t3.addEventListener(e4, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t3) => t3.addEventListener(e4, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t3) => t3.addEventListener(e4, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t3) => t3.addEventListener(e4, this.onNavigateNextClicked, false));
      });
    }
    unbind() {
      ["touchstart", "click"].forEach((e3) => {
        this.controlsLeft.forEach((t3) => t3.removeEventListener(e3, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t3) => t3.removeEventListener(e3, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t3) => t3.removeEventListener(e3, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t3) => t3.removeEventListener(e3, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t3) => t3.removeEventListener(e3, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t3) => t3.removeEventListener(e3, this.onNavigateNextClicked, false));
      });
    }
    update() {
      let e3 = this.Reveal.availableRoutes();
      [...this.controlsLeft, ...this.controlsRight, ...this.controlsUp, ...this.controlsDown, ...this.controlsPrev, ...this.controlsNext].forEach((e4) => {
        e4.classList.remove("enabled", "fragmented"), e4.setAttribute("disabled", "disabled");
      }), e3.left && this.controlsLeft.forEach((e4) => {
        e4.classList.add("enabled"), e4.removeAttribute("disabled");
      }), e3.right && this.controlsRight.forEach((e4) => {
        e4.classList.add("enabled"), e4.removeAttribute("disabled");
      }), e3.up && this.controlsUp.forEach((e4) => {
        e4.classList.add("enabled"), e4.removeAttribute("disabled");
      }), e3.down && this.controlsDown.forEach((e4) => {
        e4.classList.add("enabled"), e4.removeAttribute("disabled");
      }), (e3.left || e3.up) && this.controlsPrev.forEach((e4) => {
        e4.classList.add("enabled"), e4.removeAttribute("disabled");
      }), (e3.right || e3.down) && this.controlsNext.forEach((e4) => {
        e4.classList.add("enabled"), e4.removeAttribute("disabled");
      });
      let t3 = this.Reveal.getCurrentSlide();
      if (t3) {
        let e4 = this.Reveal.fragments.availableRoutes();
        e4.prev && this.controlsPrev.forEach((e5) => {
          e5.classList.add("fragmented", "enabled"), e5.removeAttribute("disabled");
        }), e4.next && this.controlsNext.forEach((e5) => {
          e5.classList.add("fragmented", "enabled"), e5.removeAttribute("disabled");
        }), this.Reveal.isVerticalSlide(t3) ? (e4.prev && this.controlsUp.forEach((e5) => {
          e5.classList.add("fragmented", "enabled"), e5.removeAttribute("disabled");
        }), e4.next && this.controlsDown.forEach((e5) => {
          e5.classList.add("fragmented", "enabled"), e5.removeAttribute("disabled");
        })) : (e4.prev && this.controlsLeft.forEach((e5) => {
          e5.classList.add("fragmented", "enabled"), e5.removeAttribute("disabled");
        }), e4.next && this.controlsRight.forEach((e5) => {
          e5.classList.add("fragmented", "enabled"), e5.removeAttribute("disabled");
        }));
      }
      if (this.Reveal.getConfig().controlsTutorial) {
        let t4 = this.Reveal.getIndices();
        !this.Reveal.hasNavigatedVertically() && e3.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e3.left && 0 === t4.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e3.right && 0 === t4.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
      }
    }
    destroy() {
      this.unbind(), this.element.remove();
    }
    onNavigateLeftClicked(e3) {
      e3.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
    }
    onNavigateRightClicked(e3) {
      e3.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right();
    }
    onNavigateUpClicked(e3) {
      e3.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
    }
    onNavigateDownClicked(e3) {
      e3.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
    }
    onNavigatePrevClicked(e3) {
      e3.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
    }
    onNavigateNextClicked(e3) {
      e3.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
    }
  };
  var T = class {
    constructor(e3) {
      this.Reveal = e3, this.onProgressClicked = this.onProgressClicked.bind(this);
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
    }
    configure(e3, t3) {
      this.element.style.display = e3.progress ? "block" : "none";
    }
    bind() {
      this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, false);
    }
    unbind() {
      this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, false);
    }
    update() {
      if (this.Reveal.getConfig().progress && this.bar) {
        let e3 = this.Reveal.getProgress();
        this.Reveal.getTotalSlides() < 2 && (e3 = 0), this.bar.style.transform = "scaleX(" + e3 + ")";
      }
    }
    getMaxWidth() {
      return this.Reveal.getRevealElement().offsetWidth;
    }
    onProgressClicked(e3) {
      this.Reveal.onUserInput(e3), e3.preventDefault();
      let t3 = this.Reveal.getSlides(), i3 = t3.length, s3 = Math.floor(e3.clientX / this.getMaxWidth() * i3);
      this.Reveal.getConfig().rtl && (s3 = i3 - s3);
      let a3 = this.Reveal.getIndices(t3[s3]);
      this.Reveal.slide(a3.h, a3.v);
    }
    destroy() {
      this.element.remove();
    }
  };
  var F = class {
    constructor(e3) {
      this.Reveal = e3, this.lastMouseWheelStep = 0, this.cursorHidden = false, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
    }
    configure(e3, t3) {
      e3.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.addEventListener("mousewheel", this.onDocumentMouseScroll, false)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, false)), e3.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, false), document.addEventListener("mousedown", this.onDocumentCursorActive, false)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false));
    }
    showCursor() {
      this.cursorHidden && (this.cursorHidden = false, this.Reveal.getRevealElement().style.cursor = "");
    }
    hideCursor() {
      false === this.cursorHidden && (this.cursorHidden = true, this.Reveal.getRevealElement().style.cursor = "none");
    }
    destroy() {
      this.showCursor(), document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, false), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false);
    }
    onDocumentCursorActive(e3) {
      this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
    }
    onDocumentMouseScroll(e3) {
      if (Date.now() - this.lastMouseWheelStep > 1e3) {
        this.lastMouseWheelStep = Date.now();
        let t3 = e3.detail || -e3.wheelDelta;
        t3 > 0 ? this.Reveal.next() : t3 < 0 && this.Reveal.prev();
      }
    }
  };
  var z = (e3, t3) => {
    const i3 = document.createElement("script");
    i3.type = "text/javascript", i3.async = false, i3.defer = false, i3.src = e3, "function" == typeof t3 && (i3.onload = i3.onreadystatechange = (e4) => {
      ("load" === e4.type || /loaded|complete/.test(i3.readyState)) && (i3.onload = i3.onreadystatechange = i3.onerror = null, t3());
    }, i3.onerror = (e4) => {
      i3.onload = i3.onreadystatechange = i3.onerror = null, t3(new Error("Failed loading script: " + i3.src + "\n" + e4));
    });
    const s3 = document.querySelector("head");
    s3.insertBefore(i3, s3.lastChild);
  };
  var H = class {
    constructor(e3) {
      this.Reveal = e3, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
    }
    load(e3, t3) {
      return this.state = "loading", e3.forEach(this.registerPlugin.bind(this)), new Promise((e4) => {
        let i3 = [], s3 = 0;
        if (t3.forEach((e5) => {
          e5.condition && !e5.condition() || (e5.async ? this.asyncDependencies.push(e5) : i3.push(e5));
        }), i3.length) {
          s3 = i3.length;
          const t4 = (t5) => {
            t5 && "function" == typeof t5.callback && t5.callback(), 0 == --s3 && this.initPlugins().then(e4);
          };
          i3.forEach((e5) => {
            "string" == typeof e5.id ? (this.registerPlugin(e5), t4(e5)) : "string" == typeof e5.src ? z(e5.src, () => t4(e5)) : (console.warn("Unrecognized plugin format", e5), t4());
          });
        } else
          this.initPlugins().then(e4);
      });
    }
    initPlugins() {
      return new Promise((e3) => {
        let t3 = Object.values(this.registeredPlugins), i3 = t3.length;
        if (0 === i3)
          this.loadAsync().then(e3);
        else {
          let s3, a3 = () => {
            0 == --i3 ? this.loadAsync().then(e3) : s3();
          }, n3 = 0;
          s3 = () => {
            let e4 = t3[n3++];
            if ("function" == typeof e4.init) {
              let t4 = e4.init(this.Reveal);
              t4 && "function" == typeof t4.then ? t4.then(a3) : a3();
            } else
              a3();
          }, s3();
        }
      });
    }
    loadAsync() {
      return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((e3) => {
        z(e3.src, e3.callback);
      }), Promise.resolve();
    }
    registerPlugin(e3) {
      2 === arguments.length && "string" == typeof arguments[0] ? (e3 = arguments[1]).id = arguments[0] : "function" == typeof e3 && (e3 = e3());
      let t3 = e3.id;
      "string" != typeof t3 ? console.warn("Unrecognized plugin format; can't find plugin.id", e3) : void 0 === this.registeredPlugins[t3] ? (this.registeredPlugins[t3] = e3, "loaded" === this.state && "function" == typeof e3.init && e3.init(this.Reveal)) : console.warn('reveal.js: "' + t3 + '" plugin has already been registered');
    }
    hasPlugin(e3) {
      return !!this.registeredPlugins[e3];
    }
    getPlugin(e3) {
      return this.registeredPlugins[e3];
    }
    getRegisteredPlugins() {
      return this.registeredPlugins;
    }
    destroy() {
      Object.values(this.registeredPlugins).forEach((e3) => {
        "function" == typeof e3.destroy && e3.destroy();
      }), this.registeredPlugins = {}, this.asyncDependencies = [];
    }
  };
  var q = class {
    constructor(e3) {
      this.Reveal = e3;
    }
    async setupPDF() {
      const e3 = this.Reveal.getConfig(), i3 = t(this.Reveal.getRevealElement(), ".slides section"), s3 = e3.slideNumber && /all|print/i.test(e3.showSlideNumber), a3 = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), n3 = Math.floor(a3.width * (1 + e3.margin)), r3 = Math.floor(a3.height * (1 + e3.margin)), o3 = a3.width, d3 = a3.height;
      await new Promise(requestAnimationFrame), l("@page{size:" + n3 + "px " + r3 + "px; margin: 0px;}"), l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + o3 + "px; max-height:" + d3 + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = n3 + "px", document.body.style.height = r3 + "px";
      const c3 = document.querySelector(".reveal-viewport");
      let h3;
      if (c3) {
        const e4 = window.getComputedStyle(c3);
        e4 && e4.background && (h3 = e4.background);
      }
      await new Promise(requestAnimationFrame), this.Reveal.layoutSlideContents(o3, d3), await new Promise(requestAnimationFrame);
      const u3 = i3.map((e4) => e4.scrollHeight), g3 = [], v3 = i3[0].parentNode;
      i3.forEach(function(i4, a4) {
        if (false === i4.classList.contains("stack")) {
          let l3 = (n3 - o3) / 2, c4 = (r3 - d3) / 2;
          const v4 = u3[a4];
          let p3 = Math.max(Math.ceil(v4 / r3), 1);
          p3 = Math.min(p3, e3.pdfMaxPagesPerSlide), (1 === p3 && e3.center || i4.classList.contains("center")) && (c4 = Math.max((r3 - v4) / 2, 0));
          const m3 = document.createElement("div");
          if (g3.push(m3), m3.className = "pdf-page", m3.style.height = (r3 + e3.pdfPageHeightOffset) * p3 + "px", h3 && (m3.style.background = h3), m3.appendChild(i4), i4.style.left = l3 + "px", i4.style.top = c4 + "px", i4.style.width = o3 + "px", this.Reveal.slideContent.layout(i4), i4.slideBackgroundElement && m3.insertBefore(i4.slideBackgroundElement, i4), e3.showNotes) {
            const t3 = this.Reveal.getSlideNotes(i4);
            if (t3) {
              const i5 = 8, s4 = "string" == typeof e3.showNotes ? e3.showNotes : "inline", a5 = document.createElement("div");
              a5.classList.add("speaker-notes"), a5.classList.add("speaker-notes-pdf"), a5.setAttribute("data-layout", s4), a5.innerHTML = t3, "separate-page" === s4 ? g3.push(a5) : (a5.style.left = i5 + "px", a5.style.bottom = i5 + "px", a5.style.width = n3 - 2 * i5 + "px", m3.appendChild(a5));
            }
          }
          if (s3) {
            const e4 = a4 + 1, t3 = document.createElement("div");
            t3.classList.add("slide-number"), t3.classList.add("slide-number-pdf"), t3.innerHTML = e4, m3.appendChild(t3);
          }
          if (e3.pdfSeparateFragments) {
            const e4 = this.Reveal.fragments.sort(m3.querySelectorAll(".fragment"), true);
            let t3;
            e4.forEach(function(e5) {
              t3 && t3.forEach(function(e6) {
                e6.classList.remove("current-fragment");
              }), e5.forEach(function(e6) {
                e6.classList.add("visible", "current-fragment");
              }, this);
              const i5 = m3.cloneNode(true);
              g3.push(i5), t3 = e5;
            }, this), e4.forEach(function(e5) {
              e5.forEach(function(e6) {
                e6.classList.remove("visible", "current-fragment");
              });
            });
          } else
            t(m3, ".fragment:not(.fade-out)").forEach(function(e4) {
              e4.classList.add("visible");
            });
        }
      }, this), await new Promise(requestAnimationFrame), g3.forEach((e4) => v3.appendChild(e4)), this.Reveal.dispatchEvent({ type: "pdf-ready" });
    }
    isPrintingPDF() {
      return /print-pdf/gi.test(window.location.search);
    }
  };
  var B = class {
    constructor(e3) {
      this.Reveal = e3, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = false, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
    }
    bind() {
      let e3 = this.Reveal.getRevealElement();
      "onpointerdown" in window ? (e3.addEventListener("pointerdown", this.onPointerDown, false), e3.addEventListener("pointermove", this.onPointerMove, false), e3.addEventListener("pointerup", this.onPointerUp, false)) : window.navigator.msPointerEnabled ? (e3.addEventListener("MSPointerDown", this.onPointerDown, false), e3.addEventListener("MSPointerMove", this.onPointerMove, false), e3.addEventListener("MSPointerUp", this.onPointerUp, false)) : (e3.addEventListener("touchstart", this.onTouchStart, false), e3.addEventListener("touchmove", this.onTouchMove, false), e3.addEventListener("touchend", this.onTouchEnd, false));
    }
    unbind() {
      let e3 = this.Reveal.getRevealElement();
      e3.removeEventListener("pointerdown", this.onPointerDown, false), e3.removeEventListener("pointermove", this.onPointerMove, false), e3.removeEventListener("pointerup", this.onPointerUp, false), e3.removeEventListener("MSPointerDown", this.onPointerDown, false), e3.removeEventListener("MSPointerMove", this.onPointerMove, false), e3.removeEventListener("MSPointerUp", this.onPointerUp, false), e3.removeEventListener("touchstart", this.onTouchStart, false), e3.removeEventListener("touchmove", this.onTouchMove, false), e3.removeEventListener("touchend", this.onTouchEnd, false);
    }
    isSwipePrevented(e3) {
      if (n(e3, "video, audio"))
        return true;
      for (; e3 && "function" == typeof e3.hasAttribute; ) {
        if (e3.hasAttribute("data-prevent-swipe"))
          return true;
        e3 = e3.parentNode;
      }
      return false;
    }
    onTouchStart(e3) {
      if (this.isSwipePrevented(e3.target))
        return true;
      this.touchStartX = e3.touches[0].clientX, this.touchStartY = e3.touches[0].clientY, this.touchStartCount = e3.touches.length;
    }
    onTouchMove(e3) {
      if (this.isSwipePrevented(e3.target))
        return true;
      let t3 = this.Reveal.getConfig();
      if (this.touchCaptured)
        m && e3.preventDefault();
      else {
        this.Reveal.onUserInput(e3);
        let i3 = e3.touches[0].clientX, s3 = e3.touches[0].clientY;
        if (1 === e3.touches.length && 2 !== this.touchStartCount) {
          let a3 = this.Reveal.availableRoutes({ includeFragments: true }), n3 = i3 - this.touchStartX, r3 = s3 - this.touchStartY;
          n3 > 40 && Math.abs(n3) > Math.abs(r3) ? (this.touchCaptured = true, "linear" === t3.navigationMode ? t3.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : n3 < -40 && Math.abs(n3) > Math.abs(r3) ? (this.touchCaptured = true, "linear" === t3.navigationMode ? t3.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : r3 > 40 && a3.up ? (this.touchCaptured = true, "linear" === t3.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : r3 < -40 && a3.down && (this.touchCaptured = true, "linear" === t3.navigationMode ? this.Reveal.next() : this.Reveal.down()), t3.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e3.preventDefault() : e3.preventDefault();
        }
      }
    }
    onTouchEnd(e3) {
      this.touchCaptured = false;
    }
    onPointerDown(e3) {
      e3.pointerType !== e3.MSPOINTER_TYPE_TOUCH && "touch" !== e3.pointerType || (e3.touches = [{ clientX: e3.clientX, clientY: e3.clientY }], this.onTouchStart(e3));
    }
    onPointerMove(e3) {
      e3.pointerType !== e3.MSPOINTER_TYPE_TOUCH && "touch" !== e3.pointerType || (e3.touches = [{ clientX: e3.clientX, clientY: e3.clientY }], this.onTouchMove(e3));
    }
    onPointerUp(e3) {
      e3.pointerType !== e3.MSPOINTER_TYPE_TOUCH && "touch" !== e3.pointerType || (e3.touches = [{ clientX: e3.clientX, clientY: e3.clientY }], this.onTouchEnd(e3));
    }
  };
  var O = class {
    constructor(e3) {
      this.Reveal = e3, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
    }
    configure(e3, t3) {
      e3.embedded ? this.blur() : (this.focus(), this.unbind());
    }
    bind() {
      this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, false);
    }
    unbind() {
      this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, false), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false);
    }
    focus() {
      "focus" !== this.state && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = "focus";
    }
    blur() {
      "blur" !== this.state && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = "blur";
    }
    isFocused() {
      return "focus" === this.state;
    }
    destroy() {
      this.Reveal.getRevealElement().classList.remove("focused");
    }
    onRevealPointerDown(e3) {
      this.focus();
    }
    onDocumentPointerDown(e3) {
      let t3 = r(e3.target, ".reveal");
      t3 && t3 === this.Reveal.getRevealElement() || this.blur();
    }
  };
  var U = class {
    constructor(e3) {
      this.Reveal = e3;
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
    }
    configure(e3, t3) {
      e3.showNotes && this.element.setAttribute("data-layout", "string" == typeof e3.showNotes ? e3.showNotes : "inline");
    }
    update() {
      this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
    }
    updateVisibility() {
      this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
    }
    hasNotes() {
      return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
    }
    isSpeakerNotesWindow() {
      return !!window.location.search.match(/receiver/gi);
    }
    getSlideNotes(e3 = this.Reveal.getCurrentSlide()) {
      if (e3.hasAttribute("data-notes"))
        return e3.getAttribute("data-notes");
      let t3 = e3.querySelector("aside.notes");
      return t3 ? t3.innerHTML : null;
    }
    destroy() {
      this.element.remove();
    }
  };
  var W = class {
    constructor(e3, t3) {
      this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = false, this.progress = 0, this.progressOffset = 1, this.container = e3, this.progressCheck = t3, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
    }
    setPlaying(e3) {
      const t3 = this.playing;
      this.playing = e3, !t3 && this.playing ? this.animate() : this.render();
    }
    animate() {
      const e3 = this.progress;
      this.progress = this.progressCheck(), e3 > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
    }
    render() {
      let e3 = this.playing ? this.progress : 0, t3 = this.diameter2 - this.thickness, i3 = this.diameter2, s3 = this.diameter2, a3 = 28;
      this.progressOffset += 0.1 * (1 - this.progressOffset);
      const n3 = -Math.PI / 2 + e3 * (2 * Math.PI), r3 = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
      this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i3, s3, t3 + 4, 0, 2 * Math.PI, false), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i3, s3, t3, 0, 2 * Math.PI, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i3, s3, t3, r3, n3, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i3 - 14, s3 - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, a3), this.context.fillRect(18, 0, 10, a3)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, a3), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
    }
    on(e3, t3) {
      this.canvas.addEventListener(e3, t3, false);
    }
    off(e3, t3) {
      this.canvas.removeEventListener(e3, t3, false);
    }
    destroy() {
      this.playing = false, this.canvas.parentNode && this.container.removeChild(this.canvas);
    }
  };
  var K = { width: 960, height: 700, margin: 0.04, minScale: 0.2, maxScale: 2, controls: true, controlsTutorial: true, controlsLayout: "bottom-right", controlsBackArrows: "faded", progress: true, slideNumber: false, showSlideNumber: "all", hashOneBasedIndex: false, hash: false, respondToHashChanges: true, history: false, keyboard: true, keyboardCondition: null, disableLayout: false, overview: true, center: true, touch: true, loop: false, rtl: false, navigationMode: "default", shuffle: false, fragments: true, fragmentInURL: true, embedded: false, help: true, pause: true, showNotes: false, showHiddenSlides: false, autoPlayMedia: null, preloadIframes: null, autoAnimate: true, autoAnimateMatcher: null, autoAnimateEasing: "ease", autoAnimateDuration: 1, autoAnimateUnmatched: true, autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"], autoSlide: 0, autoSlideStoppable: true, autoSlideMethod: null, defaultTiming: null, mouseWheel: false, previewLinks: false, postMessage: true, postMessageEvents: false, focusBodyOnPageVisibilityChange: true, transition: "slide", transitionSpeed: "default", backgroundTransition: "fade", parallaxBackgroundImage: "", parallaxBackgroundSize: "", parallaxBackgroundRepeat: "", parallaxBackgroundPosition: "", parallaxBackgroundHorizontal: null, parallaxBackgroundVertical: null, pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY, pdfSeparateFragments: true, pdfPageHeightOffset: -1, viewDistance: 3, mobileViewDistance: 2, display: "block", hideInactiveCursor: true, hideCursorTime: 5e3, dependencies: [], plugins: [] };
  function V(n3, l3) {
    arguments.length < 2 && (l3 = arguments[0], n3 = document.querySelector(".reveal"));
    const h3 = {};
    let u3, g3, p3, m3, b3, y3 = {}, w3 = false, S3 = { hasNavigatedHorizontally: false, hasNavigatedVertically: false }, L3 = [], C3 = 1, z3 = { layout: "", overview: "" }, V3 = {}, $3 = "idle", j3 = 0, X2 = 0, Y2 = -1, _2 = false, J2 = new E(h3), Q2 = new R(h3), Z2 = new x(h3), G2 = new A(h3), ee2 = new P(h3), te2 = new N(h3), ie2 = new M(h3), se2 = new D(h3), ae2 = new I(h3), ne2 = new T(h3), re2 = new F(h3), oe2 = new H(h3), le2 = new q(h3), de2 = new O(h3), ce2 = new B(h3), he2 = new U(h3);
    function ue2(e3) {
      if (!n3)
        throw 'Unable to find presentation root (<div class="reveal">).';
      if (V3.wrapper = n3, V3.slides = n3.querySelector(".slides"), !V3.slides)
        throw 'Unable to find slides container (<div class="slides">).';
      return y3 = { ...K, ...y3, ...l3, ...e3, ...d() }, ge2(), window.addEventListener("load", qe, false), oe2.load(y3.plugins, y3.dependencies).then(ve2), new Promise((e4) => h3.on("ready", e4));
    }
    function ge2() {
      true === y3.embedded ? V3.viewport = r(n3, ".reveal-viewport") || n3 : (V3.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), V3.viewport.classList.add("reveal-viewport");
    }
    function ve2() {
      w3 = true, pe2(), me2(), Re2(), we2(), Ee2(), it2(), Se2(), se2.readURL(), G2.update(true), setTimeout(() => {
        V3.slides.classList.remove("no-transition"), V3.wrapper.classList.add("ready"), Ne2({ type: "ready", data: { indexh: u3, indexv: g3, currentSlide: m3 } });
      }, 1), le2.isPrintingPDF() && (ke2(), "complete" === document.readyState ? le2.setupPDF() : window.addEventListener("load", () => {
        le2.setupPDF();
      }));
    }
    function pe2() {
      y3.showHiddenSlides || t(V3.wrapper, 'section[data-visibility="hidden"]').forEach((e3) => {
        e3.parentNode.removeChild(e3);
      });
    }
    function me2() {
      V3.slides.classList.add("no-transition"), v ? V3.wrapper.classList.add("no-hover") : V3.wrapper.classList.remove("no-hover"), G2.render(), Q2.render(), ae2.render(), ne2.render(), he2.render(), V3.pauseOverlay = o(V3.wrapper, "div", "pause-overlay", y3.controls ? '<button class="resume-button">Resume presentation</button>' : null), V3.statusElement = fe2(), V3.wrapper.setAttribute("role", "application");
    }
    function fe2() {
      let e3 = V3.wrapper.querySelector(".aria-status");
      return e3 || (e3 = document.createElement("div"), e3.style.position = "absolute", e3.style.height = "1px", e3.style.width = "1px", e3.style.overflow = "hidden", e3.style.clip = "rect( 1px, 1px, 1px, 1px )", e3.classList.add("aria-status"), e3.setAttribute("aria-live", "polite"), e3.setAttribute("aria-atomic", "true"), V3.wrapper.appendChild(e3)), e3;
    }
    function be2(e3) {
      V3.statusElement.textContent = e3;
    }
    function ye2(e3) {
      let t3 = "";
      if (3 === e3.nodeType)
        t3 += e3.textContent;
      else if (1 === e3.nodeType) {
        let i3 = e3.getAttribute("aria-hidden"), s3 = "none" === window.getComputedStyle(e3).display;
        "true" === i3 || s3 || Array.from(e3.childNodes).forEach((e4) => {
          t3 += ye2(e4);
        });
      }
      return t3 = t3.trim(), "" === t3 ? "" : t3 + " ";
    }
    function we2() {
      setInterval(() => {
        0 === V3.wrapper.scrollTop && 0 === V3.wrapper.scrollLeft || (V3.wrapper.scrollTop = 0, V3.wrapper.scrollLeft = 0);
      }, 1e3);
    }
    function Ee2() {
      document.addEventListener("fullscreenchange", qt2), document.addEventListener("webkitfullscreenchange", qt2);
    }
    function Re2() {
      y3.postMessage && window.addEventListener("message", It2, false);
    }
    function Se2(t3) {
      const s3 = { ...y3 };
      if ("object" == typeof t3 && e(y3, t3), false === h3.isReady())
        return;
      const a3 = V3.wrapper.querySelectorAll(".slides section").length;
      V3.wrapper.classList.remove(s3.transition), V3.wrapper.classList.add(y3.transition), V3.wrapper.setAttribute("data-transition-speed", y3.transitionSpeed), V3.wrapper.setAttribute("data-background-transition", y3.backgroundTransition), V3.viewport.style.setProperty("--slide-width", y3.width + "px"), V3.viewport.style.setProperty("--slide-height", y3.height + "px"), y3.shuffle && st2(), i(V3.wrapper, "embedded", y3.embedded), i(V3.wrapper, "rtl", y3.rtl), i(V3.wrapper, "center", y3.center), false === y3.pause && Ye2(), y3.previewLinks ? (De2(), Ie2("[data-preview-link=false]")) : (Ie2(), De2("[data-preview-link]:not([data-preview-link=false])")), Z2.reset(), b3 && (b3.destroy(), b3 = null), a3 > 1 && y3.autoSlide && y3.autoSlideStoppable && (b3 = new W(V3.wrapper, () => Math.min(Math.max((Date.now() - Y2) / j3, 0), 1)), b3.on("click", Ot2), _2 = false), "default" !== y3.navigationMode ? V3.wrapper.setAttribute("data-navigation-mode", y3.navigationMode) : V3.wrapper.removeAttribute("data-navigation-mode"), he2.configure(y3, s3), de2.configure(y3, s3), re2.configure(y3, s3), ae2.configure(y3, s3), ne2.configure(y3, s3), ie2.configure(y3, s3), ee2.configure(y3, s3), Q2.configure(y3, s3), et2();
    }
    function Ae2() {
      window.addEventListener("resize", zt2, false), y3.touch && ce2.bind(), y3.keyboard && ie2.bind(), y3.progress && ne2.bind(), y3.respondToHashChanges && se2.bind(), ae2.bind(), de2.bind(), V3.slides.addEventListener("click", Ft2, false), V3.slides.addEventListener("transitionend", Tt2, false), V3.pauseOverlay.addEventListener("click", Ye2, false), y3.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", Ht2, false);
    }
    function ke2() {
      ce2.unbind(), de2.unbind(), ie2.unbind(), ae2.unbind(), ne2.unbind(), se2.unbind(), window.removeEventListener("resize", zt2, false), V3.slides.removeEventListener("click", Ft2, false), V3.slides.removeEventListener("transitionend", Tt2, false), V3.pauseOverlay.removeEventListener("click", Ye2, false);
    }
    function Le2() {
      ke2(), St2(), Ie2(), he2.destroy(), de2.destroy(), oe2.destroy(), re2.destroy(), ae2.destroy(), ne2.destroy(), G2.destroy(), Q2.destroy(), document.removeEventListener("fullscreenchange", qt2), document.removeEventListener("webkitfullscreenchange", qt2), document.removeEventListener("visibilitychange", Ht2, false), window.removeEventListener("message", It2, false), window.removeEventListener("load", qe, false), V3.pauseOverlay && V3.pauseOverlay.remove(), V3.statusElement && V3.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), V3.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), V3.wrapper.removeAttribute("data-transition-speed"), V3.wrapper.removeAttribute("data-background-transition"), V3.viewport.classList.remove("reveal-viewport"), V3.viewport.style.removeProperty("--slide-width"), V3.viewport.style.removeProperty("--slide-height"), V3.slides.style.removeProperty("width"), V3.slides.style.removeProperty("height"), V3.slides.style.removeProperty("zoom"), V3.slides.style.removeProperty("left"), V3.slides.style.removeProperty("top"), V3.slides.style.removeProperty("bottom"), V3.slides.style.removeProperty("right"), V3.slides.style.removeProperty("transform"), Array.from(V3.wrapper.querySelectorAll(".slides section")).forEach((e3) => {
        e3.style.removeProperty("display"), e3.style.removeProperty("top"), e3.removeAttribute("hidden"), e3.removeAttribute("aria-hidden");
      });
    }
    function Ce2(e3, t3, i3) {
      n3.addEventListener(e3, t3, i3);
    }
    function xe2(e3, t3, i3) {
      n3.removeEventListener(e3, t3, i3);
    }
    function Pe2(e3) {
      "string" == typeof e3.layout && (z3.layout = e3.layout), "string" == typeof e3.overview && (z3.overview = e3.overview), z3.layout ? a(V3.slides, z3.layout + " " + z3.overview) : a(V3.slides, z3.overview);
    }
    function Ne2({ target: t3 = V3.wrapper, type: i3, data: s3, bubbles: a3 = true }) {
      let n4 = document.createEvent("HTMLEvents", 1, 2);
      return n4.initEvent(i3, a3, true), e(n4, s3), t3.dispatchEvent(n4), t3 === V3.wrapper && Me2(i3), n4;
    }
    function Me2(t3, i3) {
      if (y3.postMessageEvents && window.parent !== window.self) {
        let s3 = { namespace: "reveal", eventName: t3, state: wt2() };
        e(s3, i3), window.parent.postMessage(JSON.stringify(s3), "*");
      }
    }
    function De2(e3 = "a") {
      Array.from(V3.wrapper.querySelectorAll(e3)).forEach((e4) => {
        /^(http|www)/gi.test(e4.getAttribute("href")) && e4.addEventListener("click", Bt2, false);
      });
    }
    function Ie2(e3 = "a") {
      Array.from(V3.wrapper.querySelectorAll(e3)).forEach((e4) => {
        /^(http|www)/gi.test(e4.getAttribute("href")) && e4.removeEventListener("click", Bt2, false);
      });
    }
    function Te2(e3) {
      He(), V3.overlay = document.createElement("div"), V3.overlay.classList.add("overlay"), V3.overlay.classList.add("overlay-preview"), V3.wrapper.appendChild(V3.overlay), V3.overlay.innerHTML = `<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${e3}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${e3}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`, V3.overlay.querySelector("iframe").addEventListener("load", (e4) => {
        V3.overlay.classList.add("loaded");
      }, false), V3.overlay.querySelector(".close").addEventListener("click", (e4) => {
        He(), e4.preventDefault();
      }, false), V3.overlay.querySelector(".external").addEventListener("click", (e4) => {
        He();
      }, false);
    }
    function Fe2(e3) {
      "boolean" == typeof e3 ? e3 ? ze2() : He() : V3.overlay ? He() : ze2();
    }
    function ze2() {
      if (y3.help) {
        He(), V3.overlay = document.createElement("div"), V3.overlay.classList.add("overlay"), V3.overlay.classList.add("overlay-help"), V3.wrapper.appendChild(V3.overlay);
        let e3 = '<p class="title">Keyboard Shortcuts</p><br/>', t3 = ie2.getShortcuts(), i3 = ie2.getBindings();
        e3 += "<table><th>KEY</th><th>ACTION</th>";
        for (let i4 in t3)
          e3 += `<tr><td>${i4}</td><td>${t3[i4]}</td></tr>`;
        for (let t4 in i3)
          i3[t4].key && i3[t4].description && (e3 += `<tr><td>${i3[t4].key}</td><td>${i3[t4].description}</td></tr>`);
        e3 += "</table>", V3.overlay.innerHTML = `
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${e3}</div>
				</div>
			`, V3.overlay.querySelector(".close").addEventListener("click", (e4) => {
          He(), e4.preventDefault();
        }, false);
      }
    }
    function He() {
      return !!V3.overlay && (V3.overlay.parentNode.removeChild(V3.overlay), V3.overlay = null, true);
    }
    function qe() {
      if (V3.wrapper && !le2.isPrintingPDF()) {
        if (!y3.disableLayout) {
          v && !y3.embedded && document.documentElement.style.setProperty("--vh", 0.01 * window.innerHeight + "px");
          const e3 = Oe2(), t3 = C3;
          Be2(y3.width, y3.height), V3.slides.style.width = e3.width + "px", V3.slides.style.height = e3.height + "px", C3 = Math.min(e3.presentationWidth / e3.width, e3.presentationHeight / e3.height), C3 = Math.max(C3, y3.minScale), C3 = Math.min(C3, y3.maxScale), 1 === C3 ? (V3.slides.style.zoom = "", V3.slides.style.left = "", V3.slides.style.top = "", V3.slides.style.bottom = "", V3.slides.style.right = "", Pe2({ layout: "" })) : C3 > 1 && f && window.devicePixelRatio < 2 ? (V3.slides.style.zoom = C3, V3.slides.style.left = "", V3.slides.style.top = "", V3.slides.style.bottom = "", V3.slides.style.right = "", Pe2({ layout: "" })) : (V3.slides.style.zoom = "", V3.slides.style.left = "50%", V3.slides.style.top = "50%", V3.slides.style.bottom = "auto", V3.slides.style.right = "auto", Pe2({ layout: "translate(-50%, -50%) scale(" + C3 + ")" }));
          const i3 = Array.from(V3.wrapper.querySelectorAll(".slides section"));
          for (let t4 = 0, s3 = i3.length; t4 < s3; t4++) {
            const s4 = i3[t4];
            "none" !== s4.style.display && (y3.center || s4.classList.contains("center") ? s4.classList.contains("stack") ? s4.style.top = 0 : s4.style.top = Math.max((e3.height - s4.scrollHeight) / 2, 0) + "px" : s4.style.top = "");
          }
          t3 !== C3 && Ne2({ type: "resize", data: { oldScale: t3, scale: C3, size: e3 } });
        }
        ne2.update(), G2.updateParallax(), te2.isActive() && te2.update();
      }
    }
    function Be2(e3, i3) {
      t(V3.slides, "section > .stretch, section > .r-stretch").forEach((t3) => {
        let s3 = c(t3, i3);
        if (/(img|video)/gi.test(t3.nodeName)) {
          const i4 = t3.naturalWidth || t3.videoWidth, a3 = t3.naturalHeight || t3.videoHeight, n4 = Math.min(e3 / i4, s3 / a3);
          t3.style.width = i4 * n4 + "px", t3.style.height = a3 * n4 + "px";
        } else
          t3.style.width = e3 + "px", t3.style.height = s3 + "px";
      });
    }
    function Oe2(e3, t3) {
      const i3 = { width: y3.width, height: y3.height, presentationWidth: e3 || V3.wrapper.offsetWidth, presentationHeight: t3 || V3.wrapper.offsetHeight };
      return i3.presentationWidth -= i3.presentationWidth * y3.margin, i3.presentationHeight -= i3.presentationHeight * y3.margin, "string" == typeof i3.width && /%$/.test(i3.width) && (i3.width = parseInt(i3.width, 10) / 100 * i3.presentationWidth), "string" == typeof i3.height && /%$/.test(i3.height) && (i3.height = parseInt(i3.height, 10) / 100 * i3.presentationHeight), i3;
    }
    function Ue(e3, t3) {
      "object" == typeof e3 && "function" == typeof e3.setAttribute && e3.setAttribute("data-previous-indexv", t3 || 0);
    }
    function We2(e3) {
      if ("object" == typeof e3 && "function" == typeof e3.setAttribute && e3.classList.contains("stack")) {
        const t3 = e3.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
        return parseInt(e3.getAttribute(t3) || 0, 10);
      }
      return 0;
    }
    function Ke2(e3 = m3) {
      return e3 && e3.parentNode && !!e3.parentNode.nodeName.match(/section/i);
    }
    function Ve2() {
      return !(!m3 || !Ke2(m3)) && !m3.nextElementSibling;
    }
    function $e2() {
      return 0 === u3 && 0 === g3;
    }
    function je2() {
      return !!m3 && (!m3.nextElementSibling && (!Ke2(m3) || !m3.parentNode.nextElementSibling));
    }
    function Xe2() {
      if (y3.pause) {
        const e3 = V3.wrapper.classList.contains("paused");
        St2(), V3.wrapper.classList.add("paused"), false === e3 && Ne2({ type: "paused" });
      }
    }
    function Ye2() {
      const e3 = V3.wrapper.classList.contains("paused");
      V3.wrapper.classList.remove("paused"), Rt2(), e3 && Ne2({ type: "resumed" });
    }
    function _e2(e3) {
      "boolean" == typeof e3 ? e3 ? Xe2() : Ye2() : Je2() ? Ye2() : Xe2();
    }
    function Je2() {
      return V3.wrapper.classList.contains("paused");
    }
    function Qe2(e3) {
      "boolean" == typeof e3 ? e3 ? kt2() : At2() : _2 ? kt2() : At2();
    }
    function Ze() {
      return !(!j3 || _2);
    }
    function Ge(e3, t3, i3, s3) {
      if (Ne2({ type: "beforeslidechange", data: { indexh: void 0 === e3 ? u3 : e3, indexv: void 0 === t3 ? g3 : t3, origin: s3 } }).defaultPrevented)
        return;
      p3 = m3;
      const a3 = V3.wrapper.querySelectorAll(".slides>section");
      if (0 === a3.length)
        return;
      void 0 !== t3 || te2.isActive() || (t3 = We2(a3[e3])), p3 && p3.parentNode && p3.parentNode.classList.contains("stack") && Ue(p3.parentNode, g3);
      const n4 = L3.concat();
      L3.length = 0;
      let r3 = u3 || 0, o3 = g3 || 0;
      u3 = at2(".slides>section", void 0 === e3 ? u3 : e3), g3 = at2(".slides>section.present>section", void 0 === t3 ? g3 : t3);
      let l4 = u3 !== r3 || g3 !== o3;
      l4 || (p3 = null);
      let d3 = a3[u3], c3 = d3.querySelectorAll("section");
      m3 = c3[g3] || d3;
      let h4 = false;
      l4 && p3 && m3 && !te2.isActive() && (p3.hasAttribute("data-auto-animate") && m3.hasAttribute("data-auto-animate") && p3.getAttribute("data-auto-animate-id") === m3.getAttribute("data-auto-animate-id") && !(u3 > r3 || g3 > o3 ? m3 : p3).hasAttribute("data-auto-animate-restart") && (h4 = true, V3.slides.classList.add("disable-slide-transitions")), $3 = "running"), nt2(), qe(), te2.isActive() && te2.update(), void 0 !== i3 && ee2.goto(i3), p3 && p3 !== m3 && (p3.classList.remove("present"), p3.setAttribute("aria-hidden", "true"), $e2() && setTimeout(() => {
        gt2().forEach((e4) => {
          Ue(e4, 0);
        });
      }, 0));
      e:
        for (let e4 = 0, t4 = L3.length; e4 < t4; e4++) {
          for (let t5 = 0; t5 < n4.length; t5++)
            if (n4[t5] === L3[e4]) {
              n4.splice(t5, 1);
              continue e;
            }
          V3.viewport.classList.add(L3[e4]), Ne2({ type: L3[e4] });
        }
      for (; n4.length; )
        V3.viewport.classList.remove(n4.pop());
      l4 && Ne2({ type: "slidechanged", data: { indexh: u3, indexv: g3, previousSlide: p3, currentSlide: m3, origin: s3 } }), !l4 && p3 || (J2.stopEmbeddedContent(p3), J2.startEmbeddedContent(m3)), requestAnimationFrame(() => {
        be2(ye2(m3));
      }), ne2.update(), ae2.update(), he2.update(), G2.update(), G2.updateParallax(), Q2.update(), ee2.update(), se2.writeURL(), Rt2(), h4 && (setTimeout(() => {
        V3.slides.classList.remove("disable-slide-transitions");
      }, 0), y3.autoAnimate && Z2.run(p3, m3));
    }
    function et2() {
      ke2(), Ae2(), qe(), j3 = y3.autoSlide, Rt2(), G2.create(), se2.writeURL(), ee2.sortAll(), ae2.update(), ne2.update(), nt2(), he2.update(), he2.updateVisibility(), G2.update(true), Q2.update(), J2.formatEmbeddedContent(), false === y3.autoPlayMedia ? J2.stopEmbeddedContent(m3, { unloadIframes: false }) : J2.startEmbeddedContent(m3), te2.isActive() && te2.layout();
    }
    function tt2(e3 = m3) {
      G2.sync(e3), ee2.sync(e3), J2.load(e3), G2.update(), he2.update();
    }
    function it2() {
      ht2().forEach((e3) => {
        t(e3, "section").forEach((e4, t3) => {
          t3 > 0 && (e4.classList.remove("present"), e4.classList.remove("past"), e4.classList.add("future"), e4.setAttribute("aria-hidden", "true"));
        });
      });
    }
    function st2(e3 = ht2()) {
      e3.forEach((t3, i3) => {
        let s3 = e3[Math.floor(Math.random() * e3.length)];
        s3.parentNode === t3.parentNode && t3.parentNode.insertBefore(t3, s3);
        let a3 = t3.querySelectorAll("section");
        a3.length && st2(a3);
      });
    }
    function at2(e3, i3) {
      let s3 = t(V3.wrapper, e3), a3 = s3.length, n4 = le2.isPrintingPDF();
      if (a3) {
        y3.loop && (i3 %= a3) < 0 && (i3 = a3 + i3), i3 = Math.max(Math.min(i3, a3 - 1), 0);
        for (let e5 = 0; e5 < a3; e5++) {
          let a4 = s3[e5], r4 = y3.rtl && !Ke2(a4);
          a4.classList.remove("past"), a4.classList.remove("present"), a4.classList.remove("future"), a4.setAttribute("hidden", ""), a4.setAttribute("aria-hidden", "true"), a4.querySelector("section") && a4.classList.add("stack"), n4 ? a4.classList.add("present") : e5 < i3 ? (a4.classList.add(r4 ? "future" : "past"), y3.fragments && t(a4, ".fragment").forEach((e6) => {
            e6.classList.add("visible"), e6.classList.remove("current-fragment");
          })) : e5 > i3 && (a4.classList.add(r4 ? "past" : "future"), y3.fragments && t(a4, ".fragment.visible").forEach((e6) => {
            e6.classList.remove("visible", "current-fragment");
          }));
        }
        let e4 = s3[i3], r3 = e4.classList.contains("present");
        e4.classList.add("present"), e4.removeAttribute("hidden"), e4.removeAttribute("aria-hidden"), r3 || Ne2({ target: e4, type: "visible", bubbles: false });
        let o3 = e4.getAttribute("data-state");
        o3 && (L3 = L3.concat(o3.split(" ")));
      } else
        i3 = 0;
      return i3;
    }
    function nt2() {
      let e3, i3, s3 = ht2(), a3 = s3.length;
      if (a3 && void 0 !== u3) {
        let n4 = te2.isActive() ? 10 : y3.viewDistance;
        v && (n4 = te2.isActive() ? 6 : y3.mobileViewDistance), le2.isPrintingPDF() && (n4 = Number.MAX_VALUE);
        for (let r3 = 0; r3 < a3; r3++) {
          let o3 = s3[r3], l4 = t(o3, "section"), d3 = l4.length;
          if (e3 = Math.abs((u3 || 0) - r3) || 0, y3.loop && (e3 = Math.abs(((u3 || 0) - r3) % (a3 - n4)) || 0), e3 < n4 ? J2.load(o3) : J2.unload(o3), d3) {
            let t3 = We2(o3);
            for (let s4 = 0; s4 < d3; s4++) {
              let a4 = l4[s4];
              i3 = r3 === (u3 || 0) ? Math.abs((g3 || 0) - s4) : Math.abs(s4 - t3), e3 + i3 < n4 ? J2.load(a4) : J2.unload(a4);
            }
          }
        }
        pt2() ? V3.wrapper.classList.add("has-vertical-slides") : V3.wrapper.classList.remove("has-vertical-slides"), vt2() ? V3.wrapper.classList.add("has-horizontal-slides") : V3.wrapper.classList.remove("has-horizontal-slides");
      }
    }
    function rt2({ includeFragments: e3 = false } = {}) {
      let t3 = V3.wrapper.querySelectorAll(".slides>section"), i3 = V3.wrapper.querySelectorAll(".slides>section.present>section"), s3 = { left: u3 > 0, right: u3 < t3.length - 1, up: g3 > 0, down: g3 < i3.length - 1 };
      if (y3.loop && (t3.length > 1 && (s3.left = true, s3.right = true), i3.length > 1 && (s3.up = true, s3.down = true)), t3.length > 1 && "linear" === y3.navigationMode && (s3.right = s3.right || s3.down, s3.left = s3.left || s3.up), true === e3) {
        let e4 = ee2.availableRoutes();
        s3.left = s3.left || e4.prev, s3.up = s3.up || e4.prev, s3.down = s3.down || e4.next, s3.right = s3.right || e4.next;
      }
      if (y3.rtl) {
        let e4 = s3.left;
        s3.left = s3.right, s3.right = e4;
      }
      return s3;
    }
    function ot2(e3 = m3) {
      let t3 = ht2(), i3 = 0;
      e:
        for (let s3 = 0; s3 < t3.length; s3++) {
          let a3 = t3[s3], n4 = a3.querySelectorAll("section");
          for (let t4 = 0; t4 < n4.length; t4++) {
            if (n4[t4] === e3)
              break e;
            "uncounted" !== n4[t4].dataset.visibility && i3++;
          }
          if (a3 === e3)
            break;
          false === a3.classList.contains("stack") && "uncounted" !== a3.dataset.visibility && i3++;
        }
      return i3;
    }
    function lt2() {
      let e3 = ft2(), t3 = ot2();
      if (m3) {
        let e4 = m3.querySelectorAll(".fragment");
        if (e4.length > 0) {
          let i3 = 0.9;
          t3 += m3.querySelectorAll(".fragment.visible").length / e4.length * i3;
        }
      }
      return Math.min(t3 / (e3 - 1), 1);
    }
    function dt2(e3) {
      let i3, s3 = u3, a3 = g3;
      if (e3) {
        let i4 = Ke2(e3), n4 = i4 ? e3.parentNode : e3, r3 = ht2();
        s3 = Math.max(r3.indexOf(n4), 0), a3 = void 0, i4 && (a3 = Math.max(t(e3.parentNode, "section").indexOf(e3), 0));
      }
      if (!e3 && m3) {
        if (m3.querySelectorAll(".fragment").length > 0) {
          let e4 = m3.querySelector(".current-fragment");
          i3 = e4 && e4.hasAttribute("data-fragment-index") ? parseInt(e4.getAttribute("data-fragment-index"), 10) : m3.querySelectorAll(".fragment.visible").length - 1;
        }
      }
      return { h: s3, v: a3, f: i3 };
    }
    function ct2() {
      return t(V3.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])');
    }
    function ht2() {
      return t(V3.wrapper, ".slides>section");
    }
    function ut2() {
      return t(V3.wrapper, ".slides>section>section");
    }
    function gt2() {
      return t(V3.wrapper, ".slides>section.stack");
    }
    function vt2() {
      return ht2().length > 1;
    }
    function pt2() {
      return ut2().length > 1;
    }
    function mt2() {
      return ct2().map((e3) => {
        let t3 = {};
        for (let i3 = 0; i3 < e3.attributes.length; i3++) {
          let s3 = e3.attributes[i3];
          t3[s3.name] = s3.value;
        }
        return t3;
      });
    }
    function ft2() {
      return ct2().length;
    }
    function bt2(e3, t3) {
      let i3 = ht2()[e3], s3 = i3 && i3.querySelectorAll("section");
      return s3 && s3.length && "number" == typeof t3 ? s3 ? s3[t3] : void 0 : i3;
    }
    function yt2(e3, t3) {
      let i3 = "number" == typeof e3 ? bt2(e3, t3) : e3;
      if (i3)
        return i3.slideBackgroundElement;
    }
    function wt2() {
      let e3 = dt2();
      return { indexh: e3.h, indexv: e3.v, indexf: e3.f, paused: Je2(), overview: te2.isActive() };
    }
    function Et2(e3) {
      if ("object" == typeof e3) {
        Ge(s(e3.indexh), s(e3.indexv), s(e3.indexf));
        let t3 = s(e3.paused), i3 = s(e3.overview);
        "boolean" == typeof t3 && t3 !== Je2() && _e2(t3), "boolean" == typeof i3 && i3 !== te2.isActive() && te2.toggle(i3);
      }
    }
    function Rt2() {
      if (St2(), m3 && false !== y3.autoSlide) {
        let e3 = m3.querySelector(".current-fragment");
        e3 || (e3 = m3.querySelector(".fragment"));
        let i3 = e3 ? e3.getAttribute("data-autoslide") : null, s3 = m3.parentNode ? m3.parentNode.getAttribute("data-autoslide") : null, a3 = m3.getAttribute("data-autoslide");
        i3 ? j3 = parseInt(i3, 10) : a3 ? j3 = parseInt(a3, 10) : s3 ? j3 = parseInt(s3, 10) : (j3 = y3.autoSlide, 0 === m3.querySelectorAll(".fragment").length && t(m3, "video, audio").forEach((e4) => {
          e4.hasAttribute("data-autoplay") && j3 && 1e3 * e4.duration / e4.playbackRate > j3 && (j3 = 1e3 * e4.duration / e4.playbackRate + 1e3);
        })), !j3 || _2 || Je2() || te2.isActive() || je2() && !ee2.availableRoutes().next && true !== y3.loop || (X2 = setTimeout(() => {
          "function" == typeof y3.autoSlideMethod ? y3.autoSlideMethod() : Mt2(), Rt2();
        }, j3), Y2 = Date.now()), b3 && b3.setPlaying(-1 !== X2);
      }
    }
    function St2() {
      clearTimeout(X2), X2 = -1;
    }
    function At2() {
      j3 && !_2 && (_2 = true, Ne2({ type: "autoslidepaused" }), clearTimeout(X2), b3 && b3.setPlaying(false));
    }
    function kt2() {
      j3 && _2 && (_2 = false, Ne2({ type: "autoslideresumed" }), Rt2());
    }
    function Lt2({ skipFragments: e3 = false } = {}) {
      S3.hasNavigatedHorizontally = true, y3.rtl ? (te2.isActive() || e3 || false === ee2.next()) && rt2().left && Ge(u3 + 1, "grid" === y3.navigationMode ? g3 : void 0) : (te2.isActive() || e3 || false === ee2.prev()) && rt2().left && Ge(u3 - 1, "grid" === y3.navigationMode ? g3 : void 0);
    }
    function Ct2({ skipFragments: e3 = false } = {}) {
      S3.hasNavigatedHorizontally = true, y3.rtl ? (te2.isActive() || e3 || false === ee2.prev()) && rt2().right && Ge(u3 - 1, "grid" === y3.navigationMode ? g3 : void 0) : (te2.isActive() || e3 || false === ee2.next()) && rt2().right && Ge(u3 + 1, "grid" === y3.navigationMode ? g3 : void 0);
    }
    function xt2({ skipFragments: e3 = false } = {}) {
      (te2.isActive() || e3 || false === ee2.prev()) && rt2().up && Ge(u3, g3 - 1);
    }
    function Pt2({ skipFragments: e3 = false } = {}) {
      S3.hasNavigatedVertically = true, (te2.isActive() || e3 || false === ee2.next()) && rt2().down && Ge(u3, g3 + 1);
    }
    function Nt2({ skipFragments: e3 = false } = {}) {
      if (e3 || false === ee2.prev())
        if (rt2().up)
          xt2({ skipFragments: e3 });
        else {
          let i3;
          if (i3 = y3.rtl ? t(V3.wrapper, ".slides>section.future").pop() : t(V3.wrapper, ".slides>section.past").pop(), i3 && i3.classList.contains("stack")) {
            let e4 = i3.querySelectorAll("section").length - 1 || void 0;
            Ge(u3 - 1, e4);
          } else
            Lt2({ skipFragments: e3 });
        }
    }
    function Mt2({ skipFragments: e3 = false } = {}) {
      if (S3.hasNavigatedHorizontally = true, S3.hasNavigatedVertically = true, e3 || false === ee2.next()) {
        let t3 = rt2();
        t3.down && t3.right && y3.loop && Ve2() && (t3.down = false), t3.down ? Pt2({ skipFragments: e3 }) : y3.rtl ? Lt2({ skipFragments: e3 }) : Ct2({ skipFragments: e3 });
      }
    }
    function Dt2(e3) {
      y3.autoSlideStoppable && At2();
    }
    function It2(e3) {
      let t3 = e3.data;
      if ("string" == typeof t3 && "{" === t3.charAt(0) && "}" === t3.charAt(t3.length - 1) && (t3 = JSON.parse(t3), t3.method && "function" == typeof h3[t3.method]))
        if (false === k.test(t3.method)) {
          const e4 = h3[t3.method].apply(h3, t3.args);
          Me2("callback", { method: t3.method, result: e4 });
        } else
          console.warn('reveal.js: "' + t3.method + '" is is blacklisted from the postMessage API');
    }
    function Tt2(e3) {
      "running" === $3 && /section/gi.test(e3.target.nodeName) && ($3 = "idle", Ne2({ type: "slidetransitionend", data: { indexh: u3, indexv: g3, previousSlide: p3, currentSlide: m3 } }));
    }
    function Ft2(e3) {
      const t3 = r(e3.target, 'a[href^="#"]');
      if (t3) {
        const i3 = t3.getAttribute("href"), s3 = se2.getIndicesFromHash(i3);
        s3 && (h3.slide(s3.h, s3.v, s3.f), e3.preventDefault());
      }
    }
    function zt2(e3) {
      qe();
    }
    function Ht2(e3) {
      false === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
    }
    function qt2(e3) {
      (document.fullscreenElement || document.webkitFullscreenElement) === V3.wrapper && (e3.stopImmediatePropagation(), setTimeout(() => {
        h3.layout(), h3.focus.focus();
      }, 1));
    }
    function Bt2(e3) {
      if (e3.currentTarget && e3.currentTarget.hasAttribute("href")) {
        let t3 = e3.currentTarget.getAttribute("href");
        t3 && (Te2(t3), e3.preventDefault());
      }
    }
    function Ot2(e3) {
      je2() && false === y3.loop ? (Ge(0, 0), kt2()) : _2 ? kt2() : At2();
    }
    const Ut2 = { VERSION: "4.3.1", initialize: ue2, configure: Se2, destroy: Le2, sync: et2, syncSlide: tt2, syncFragments: ee2.sync.bind(ee2), slide: Ge, left: Lt2, right: Ct2, up: xt2, down: Pt2, prev: Nt2, next: Mt2, navigateLeft: Lt2, navigateRight: Ct2, navigateUp: xt2, navigateDown: Pt2, navigatePrev: Nt2, navigateNext: Mt2, navigateFragment: ee2.goto.bind(ee2), prevFragment: ee2.prev.bind(ee2), nextFragment: ee2.next.bind(ee2), on: Ce2, off: xe2, addEventListener: Ce2, removeEventListener: xe2, layout: qe, shuffle: st2, availableRoutes: rt2, availableFragments: ee2.availableRoutes.bind(ee2), toggleHelp: Fe2, toggleOverview: te2.toggle.bind(te2), togglePause: _e2, toggleAutoSlide: Qe2, isFirstSlide: $e2, isLastSlide: je2, isLastVerticalSlide: Ve2, isVerticalSlide: Ke2, isPaused: Je2, isAutoSliding: Ze, isSpeakerNotes: he2.isSpeakerNotesWindow.bind(he2), isOverview: te2.isActive.bind(te2), isFocused: de2.isFocused.bind(de2), isPrintingPDF: le2.isPrintingPDF.bind(le2), isReady: () => w3, loadSlide: J2.load.bind(J2), unloadSlide: J2.unload.bind(J2), showPreview: Te2, hidePreview: He, addEventListeners: Ae2, removeEventListeners: ke2, dispatchEvent: Ne2, getState: wt2, setState: Et2, getProgress: lt2, getIndices: dt2, getSlidesAttributes: mt2, getSlidePastCount: ot2, getTotalSlides: ft2, getSlide: bt2, getPreviousSlide: () => p3, getCurrentSlide: () => m3, getSlideBackground: yt2, getSlideNotes: he2.getSlideNotes.bind(he2), getSlides: ct2, getHorizontalSlides: ht2, getVerticalSlides: ut2, hasHorizontalSlides: vt2, hasVerticalSlides: pt2, hasNavigatedHorizontally: () => S3.hasNavigatedHorizontally, hasNavigatedVertically: () => S3.hasNavigatedVertically, addKeyBinding: ie2.addKeyBinding.bind(ie2), removeKeyBinding: ie2.removeKeyBinding.bind(ie2), triggerKey: ie2.triggerKey.bind(ie2), registerKeyboardShortcut: ie2.registerKeyboardShortcut.bind(ie2), getComputedSlideSize: Oe2, getScale: () => C3, getConfig: () => y3, getQueryHash: d, getSlidePath: se2.getHash.bind(se2), getRevealElement: () => n3, getSlidesElement: () => V3.slides, getViewportElement: () => V3.viewport, getBackgroundsElement: () => G2.element, registerPlugin: oe2.registerPlugin.bind(oe2), hasPlugin: oe2.hasPlugin.bind(oe2), getPlugin: oe2.getPlugin.bind(oe2), getPlugins: oe2.getRegisteredPlugins.bind(oe2) };
    return e(h3, { ...Ut2, announceStatus: be2, getStatusText: ye2, print: le2, focus: de2, progress: ne2, controls: ae2, location: se2, overview: te2, fragments: ee2, slideContent: J2, slideNumber: Q2, onUserInput: Dt2, closeOverlay: He, updateSlidesVisibility: nt2, layoutSlideContents: Be2, transformSlides: Pe2, cueAutoSlide: Rt2, cancelAutoSlide: St2 }), Ut2;
  }
  var $ = V;
  var j = [];
  $.initialize = (e3) => (Object.assign($, new V(document.querySelector(".reveal"), e3)), j.map((e4) => e4($)), $.initialize()), ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach((e3) => {
    $[e3] = (...t3) => {
      j.push((i3) => i3[e3].call(null, ...t3));
    };
  }), $.isReady = () => false, $.VERSION = "4.3.1";
  var reveal_esm_default = $;

  // node_modules/reveal.js/plugin/markdown/markdown.esm.js
  function e2(e3, t3) {
    var n3 = Object.keys(e3);
    if (Object.getOwnPropertySymbols) {
      var r3 = Object.getOwnPropertySymbols(e3);
      t3 && (r3 = r3.filter(function(t4) {
        return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
      })), n3.push.apply(n3, r3);
    }
    return n3;
  }
  function t2(e3, t3) {
    if (!(e3 instanceof t3))
      throw new TypeError("Cannot call a class as a function");
  }
  function n2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function r2(e3, t3, r3) {
    return t3 && n2(e3.prototype, t3), r3 && n2(e3, r3), e3;
  }
  function u2(e3, t3, n3) {
    return t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
  }
  function i2(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, u3 = function(e4, t4) {
      if (null == e4)
        return {};
      var n4, r4, u4 = {}, i4 = Object.keys(e4);
      for (r4 = 0; r4 < i4.length; r4++)
        n4 = i4[r4], t4.indexOf(n4) >= 0 || (u4[n4] = e4[n4]);
      return u4;
    }(e3, t3);
    if (Object.getOwnPropertySymbols) {
      var i3 = Object.getOwnPropertySymbols(e3);
      for (r3 = 0; r3 < i3.length; r3++)
        n3 = i3[r3], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n3) && (u3[n3] = e3[n3]);
    }
    return u3;
  }
  function o2(e3, t3) {
    return function(e4) {
      if (Array.isArray(e4))
        return e4;
    }(e3) || function(e4, t4) {
      var n3 = e4 && ("undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"]);
      if (null == n3)
        return;
      var r3, u3, i3 = [], o3 = true, a3 = false;
      try {
        for (n3 = n3.call(e4); !(o3 = (r3 = n3.next()).done) && (i3.push(r3.value), !t4 || i3.length !== t4); o3 = true)
          ;
      } catch (e5) {
        a3 = true, u3 = e5;
      } finally {
        try {
          o3 || null == n3.return || n3.return();
        } finally {
          if (a3)
            throw u3;
        }
      }
      return i3;
    }(e3, t3) || a2(e3, t3) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function a2(e3, t3) {
    if (e3) {
      if ("string" == typeof e3)
        return s2(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? s2(e3, t3) : void 0;
    }
  }
  function s2(e3, t3) {
    (null == t3 || t3 > e3.length) && (t3 = e3.length);
    for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
      r3[n3] = e3[n3];
    return r3;
  }
  function l2(e3, t3) {
    var n3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (!n3) {
      if (Array.isArray(e3) || (n3 = a2(e3)) || t3 && e3 && "number" == typeof e3.length) {
        n3 && (e3 = n3);
        var r3 = 0, u3 = function() {
        };
        return { s: u3, n: function() {
          return r3 >= e3.length ? { done: true } : { done: false, value: e3[r3++] };
        }, e: function(e4) {
          throw e4;
        }, f: u3 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var i3, o3 = true, s3 = false;
    return { s: function() {
      n3 = n3.call(e3);
    }, n: function() {
      var e4 = n3.next();
      return o3 = e4.done, e4;
    }, e: function(e4) {
      s3 = true, i3 = e4;
    }, f: function() {
      try {
        o3 || null == n3.return || n3.return();
      } finally {
        if (s3)
          throw i3;
      }
    } };
  }
  var c2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  var f2 = function(e3) {
    return e3 && e3.Math == Math && e3;
  };
  var p2 = f2("object" == typeof globalThis && globalThis) || f2("object" == typeof window && window) || f2("object" == typeof self && self) || f2("object" == typeof c2 && c2) || function() {
    return this;
  }() || Function("return this")();
  var h2 = {};
  var D2 = function(e3) {
    try {
      return !!e3();
    } catch (e4) {
      return true;
    }
  };
  var g2 = !D2(function() {
    return 7 != Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1];
  });
  var d2 = {};
  var v2 = {}.propertyIsEnumerable;
  var y2 = Object.getOwnPropertyDescriptor;
  var A2 = y2 && !v2.call({ 1: 2 }, 1);
  d2.f = A2 ? function(e3) {
    var t3 = y2(this, e3);
    return !!t3 && t3.enumerable;
  } : v2;
  var m2 = function(e3, t3) {
    return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t3 };
  };
  var k2 = {}.toString;
  var E2 = function(e3) {
    return k2.call(e3).slice(8, -1);
  };
  var x2 = E2;
  var F2 = "".split;
  var b2 = D2(function() {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function(e3) {
    return "String" == x2(e3) ? F2.call(e3, "") : Object(e3);
  } : Object;
  var C2 = function(e3) {
    if (null == e3)
      throw TypeError("Can't call method on " + e3);
    return e3;
  };
  var w2 = b2;
  var B2 = C2;
  var S2 = function(e3) {
    return w2(B2(e3));
  };
  var _ = function(e3) {
    return "object" == typeof e3 ? null !== e3 : "function" == typeof e3;
  };
  var T2 = _;
  var O2 = function(e3, t3) {
    if (!T2(e3))
      return e3;
    var n3, r3;
    if (t3 && "function" == typeof (n3 = e3.toString) && !T2(r3 = n3.call(e3)))
      return r3;
    if ("function" == typeof (n3 = e3.valueOf) && !T2(r3 = n3.call(e3)))
      return r3;
    if (!t3 && "function" == typeof (n3 = e3.toString) && !T2(r3 = n3.call(e3)))
      return r3;
    throw TypeError("Can't convert object to primitive value");
  };
  var R2 = C2;
  var I2 = function(e3) {
    return Object(R2(e3));
  };
  var j2 = I2;
  var z2 = {}.hasOwnProperty;
  var $2 = function(e3, t3) {
    return z2.call(j2(e3), t3);
  };
  var P2 = _;
  var L2 = p2.document;
  var M2 = P2(L2) && P2(L2.createElement);
  var N2 = function(e3) {
    return M2 ? L2.createElement(e3) : {};
  };
  var U2 = N2;
  var q2 = !g2 && !D2(function() {
    return 7 != Object.defineProperty(U2("div"), "a", { get: function() {
      return 7;
    } }).a;
  });
  var Z = g2;
  var G = d2;
  var H2 = m2;
  var Q = S2;
  var V2 = O2;
  var Y = $2;
  var K2 = q2;
  var X = Object.getOwnPropertyDescriptor;
  h2.f = Z ? X : function(e3, t3) {
    if (e3 = Q(e3), t3 = V2(t3, true), K2)
      try {
        return X(e3, t3);
      } catch (e4) {
      }
    if (Y(e3, t3))
      return H2(!G.f.call(e3, t3), e3[t3]);
  };
  var W2 = {};
  var J = _;
  var ee = function(e3) {
    if (!J(e3))
      throw TypeError(String(e3) + " is not an object");
    return e3;
  };
  var te = g2;
  var ne = q2;
  var re = ee;
  var ue = O2;
  var ie = Object.defineProperty;
  W2.f = te ? ie : function(e3, t3, n3) {
    if (re(e3), t3 = ue(t3, true), re(n3), ne)
      try {
        return ie(e3, t3, n3);
      } catch (e4) {
      }
    if ("get" in n3 || "set" in n3)
      throw TypeError("Accessors not supported");
    return "value" in n3 && (e3[t3] = n3.value), e3;
  };
  var oe = W2;
  var ae = m2;
  var se = g2 ? function(e3, t3, n3) {
    return oe.f(e3, t3, ae(1, n3));
  } : function(e3, t3, n3) {
    return e3[t3] = n3, e3;
  };
  var le = { exports: {} };
  var ce = p2;
  var fe = se;
  var pe = function(e3, t3) {
    try {
      fe(ce, e3, t3);
    } catch (n3) {
      ce[e3] = t3;
    }
    return t3;
  };
  var he = pe;
  var De = p2["__core-js_shared__"] || he("__core-js_shared__", {});
  var ge = De;
  var de = Function.toString;
  "function" != typeof ge.inspectSource && (ge.inspectSource = function(e3) {
    return de.call(e3);
  });
  var ve = ge.inspectSource;
  var ye = ve;
  var Ae = p2.WeakMap;
  var me = "function" == typeof Ae && /native code/.test(ye(Ae));
  var ke = { exports: {} };
  var Ee = De;
  (ke.exports = function(e3, t3) {
    return Ee[e3] || (Ee[e3] = void 0 !== t3 ? t3 : {});
  })("versions", []).push({ version: "3.12.1", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
  var xe;
  var Fe;
  var be;
  var Ce = 0;
  var we = Math.random();
  var Be = function(e3) {
    return "Symbol(" + String(void 0 === e3 ? "" : e3) + ")_" + (++Ce + we).toString(36);
  };
  var Se = ke.exports;
  var _e = Be;
  var Te = Se("keys");
  var Oe = function(e3) {
    return Te[e3] || (Te[e3] = _e(e3));
  };
  var Re = {};
  var Ie = me;
  var je = _;
  var ze = se;
  var $e = $2;
  var Pe = De;
  var Le = Oe;
  var Me = Re;
  var Ne = p2.WeakMap;
  if (Ie || Pe.state) {
    Ue = Pe.state || (Pe.state = new Ne()), qe = Ue.get, Ze = Ue.has, Ge = Ue.set;
    xe = function(e3, t3) {
      if (Ze.call(Ue, e3))
        throw new TypeError("Object already initialized");
      return t3.facade = e3, Ge.call(Ue, e3, t3), t3;
    }, Fe = function(e3) {
      return qe.call(Ue, e3) || {};
    }, be = function(e3) {
      return Ze.call(Ue, e3);
    };
  } else {
    He = Le("state");
    Me[He] = true, xe = function(e3, t3) {
      if ($e(e3, He))
        throw new TypeError("Object already initialized");
      return t3.facade = e3, ze(e3, He, t3), t3;
    }, Fe = function(e3) {
      return $e(e3, He) ? e3[He] : {};
    }, be = function(e3) {
      return $e(e3, He);
    };
  }
  var Ue;
  var qe;
  var Ze;
  var Ge;
  var He;
  var Qe = { set: xe, get: Fe, has: be, enforce: function(e3) {
    return be(e3) ? Fe(e3) : xe(e3, {});
  }, getterFor: function(e3) {
    return function(t3) {
      var n3;
      if (!je(t3) || (n3 = Fe(t3)).type !== e3)
        throw TypeError("Incompatible receiver, " + e3 + " required");
      return n3;
    };
  } };
  var Ve = p2;
  var Ye = se;
  var Ke = $2;
  var Xe = pe;
  var We = ve;
  var Je = Qe.get;
  var et = Qe.enforce;
  var tt = String(String).split("String");
  (le.exports = function(e3, t3, n3, r3) {
    var u3, i3 = !!r3 && !!r3.unsafe, o3 = !!r3 && !!r3.enumerable, a3 = !!r3 && !!r3.noTargetGet;
    "function" == typeof n3 && ("string" != typeof t3 || Ke(n3, "name") || Ye(n3, "name", t3), (u3 = et(n3)).source || (u3.source = tt.join("string" == typeof t3 ? t3 : ""))), e3 !== Ve ? (i3 ? !a3 && e3[t3] && (o3 = true) : delete e3[t3], o3 ? e3[t3] = n3 : Ye(e3, t3, n3)) : o3 ? e3[t3] = n3 : Xe(t3, n3);
  })(Function.prototype, "toString", function() {
    return "function" == typeof this && Je(this).source || We(this);
  });
  var nt = p2;
  var rt = p2;
  var ut = function(e3) {
    return "function" == typeof e3 ? e3 : void 0;
  };
  var it = function(e3, t3) {
    return arguments.length < 2 ? ut(nt[e3]) || ut(rt[e3]) : nt[e3] && nt[e3][t3] || rt[e3] && rt[e3][t3];
  };
  var ot = {};
  var at = Math.ceil;
  var st = Math.floor;
  var lt = function(e3) {
    return isNaN(e3 = +e3) ? 0 : (e3 > 0 ? st : at)(e3);
  };
  var ct = lt;
  var ft = Math.min;
  var pt = function(e3) {
    return e3 > 0 ? ft(ct(e3), 9007199254740991) : 0;
  };
  var ht = lt;
  var Dt = Math.max;
  var gt = Math.min;
  var dt = function(e3, t3) {
    var n3 = ht(e3);
    return n3 < 0 ? Dt(n3 + t3, 0) : gt(n3, t3);
  };
  var vt = S2;
  var yt = pt;
  var At = dt;
  var mt = function(e3) {
    return function(t3, n3, r3) {
      var u3, i3 = vt(t3), o3 = yt(i3.length), a3 = At(r3, o3);
      if (e3 && n3 != n3) {
        for (; o3 > a3; )
          if ((u3 = i3[a3++]) != u3)
            return true;
      } else
        for (; o3 > a3; a3++)
          if ((e3 || a3 in i3) && i3[a3] === n3)
            return e3 || a3 || 0;
      return !e3 && -1;
    };
  };
  var kt = { includes: mt(true), indexOf: mt(false) };
  var Et = $2;
  var xt = S2;
  var Ft = kt.indexOf;
  var bt = Re;
  var Ct = function(e3, t3) {
    var n3, r3 = xt(e3), u3 = 0, i3 = [];
    for (n3 in r3)
      !Et(bt, n3) && Et(r3, n3) && i3.push(n3);
    for (; t3.length > u3; )
      Et(r3, n3 = t3[u3++]) && (~Ft(i3, n3) || i3.push(n3));
    return i3;
  };
  var wt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  var Bt = Ct;
  var St = wt.concat("length", "prototype");
  ot.f = Object.getOwnPropertyNames || function(e3) {
    return Bt(e3, St);
  };
  var _t = {};
  _t.f = Object.getOwnPropertySymbols;
  var Tt = ot;
  var Ot = _t;
  var Rt = ee;
  var It = it("Reflect", "ownKeys") || function(e3) {
    var t3 = Tt.f(Rt(e3)), n3 = Ot.f;
    return n3 ? t3.concat(n3(e3)) : t3;
  };
  var jt = $2;
  var zt = It;
  var $t = h2;
  var Pt = W2;
  var Lt = D2;
  var Mt = /#|\.prototype\./;
  var Nt = function(e3, t3) {
    var n3 = qt[Ut(e3)];
    return n3 == Gt || n3 != Zt && ("function" == typeof t3 ? Lt(t3) : !!t3);
  };
  var Ut = Nt.normalize = function(e3) {
    return String(e3).replace(Mt, ".").toLowerCase();
  };
  var qt = Nt.data = {};
  var Zt = Nt.NATIVE = "N";
  var Gt = Nt.POLYFILL = "P";
  var Ht = Nt;
  var Qt = p2;
  var Vt = h2.f;
  var Yt = se;
  var Kt = le.exports;
  var Xt = pe;
  var Wt = function(e3, t3) {
    for (var n3 = zt(t3), r3 = Pt.f, u3 = $t.f, i3 = 0; i3 < n3.length; i3++) {
      var o3 = n3[i3];
      jt(e3, o3) || r3(e3, o3, u3(t3, o3));
    }
  };
  var Jt = Ht;
  var en = function(e3, t3) {
    var n3, r3, u3, i3, o3, a3 = e3.target, s3 = e3.global, l3 = e3.stat;
    if (n3 = s3 ? Qt : l3 ? Qt[a3] || Xt(a3, {}) : (Qt[a3] || {}).prototype)
      for (r3 in t3) {
        if (i3 = t3[r3], u3 = e3.noTargetGet ? (o3 = Vt(n3, r3)) && o3.value : n3[r3], !Jt(s3 ? r3 : a3 + (l3 ? "." : "#") + r3, e3.forced) && void 0 !== u3) {
          if (typeof i3 == typeof u3)
            continue;
          Wt(i3, u3);
        }
        (e3.sham || u3 && u3.sham) && Yt(i3, "sham", true), Kt(n3, r3, i3, e3);
      }
  };
  var tn = ee;
  var nn = function() {
    var e3 = tn(this), t3 = "";
    return e3.global && (t3 += "g"), e3.ignoreCase && (t3 += "i"), e3.multiline && (t3 += "m"), e3.dotAll && (t3 += "s"), e3.unicode && (t3 += "u"), e3.sticky && (t3 += "y"), t3;
  };
  var rn = {};
  var un = D2;
  function on(e3, t3) {
    return RegExp(e3, t3);
  }
  rn.UNSUPPORTED_Y = un(function() {
    var e3 = on("a", "y");
    return e3.lastIndex = 2, null != e3.exec("abcd");
  }), rn.BROKEN_CARET = un(function() {
    var e3 = on("^r", "gy");
    return e3.lastIndex = 2, null != e3.exec("str");
  });
  var an = nn;
  var sn = rn;
  var ln = ke.exports;
  var cn = RegExp.prototype.exec;
  var fn = ln("native-string-replace", String.prototype.replace);
  var pn = cn;
  var hn = function() {
    var e3 = /a/, t3 = /b*/g;
    return cn.call(e3, "a"), cn.call(t3, "a"), 0 !== e3.lastIndex || 0 !== t3.lastIndex;
  }();
  var Dn = sn.UNSUPPORTED_Y || sn.BROKEN_CARET;
  var gn = void 0 !== /()??/.exec("")[1];
  (hn || gn || Dn) && (pn = function(e3) {
    var t3, n3, r3, u3, i3 = this, o3 = Dn && i3.sticky, a3 = an.call(i3), s3 = i3.source, l3 = 0, c3 = e3;
    return o3 && (-1 === (a3 = a3.replace("y", "")).indexOf("g") && (a3 += "g"), c3 = String(e3).slice(i3.lastIndex), i3.lastIndex > 0 && (!i3.multiline || i3.multiline && "\n" !== e3[i3.lastIndex - 1]) && (s3 = "(?: " + s3 + ")", c3 = " " + c3, l3++), n3 = new RegExp("^(?:" + s3 + ")", a3)), gn && (n3 = new RegExp("^" + s3 + "$(?!\\s)", a3)), hn && (t3 = i3.lastIndex), r3 = cn.call(o3 ? n3 : i3, c3), o3 ? r3 ? (r3.input = r3.input.slice(l3), r3[0] = r3[0].slice(l3), r3.index = i3.lastIndex, i3.lastIndex += r3[0].length) : i3.lastIndex = 0 : hn && r3 && (i3.lastIndex = i3.global ? r3.index + r3[0].length : t3), gn && r3 && r3.length > 1 && fn.call(r3[0], n3, function() {
      for (u3 = 1; u3 < arguments.length - 2; u3++)
        void 0 === arguments[u3] && (r3[u3] = void 0);
    }), r3;
  });
  var dn = pn;
  en({ target: "RegExp", proto: true, forced: /./.exec !== dn }, { exec: dn });
  var vn;
  var yn;
  var An = it("navigator", "userAgent") || "";
  var mn = An;
  var kn = p2.process;
  var En = kn && kn.versions;
  var xn = En && En.v8;
  xn ? yn = (vn = xn.split("."))[0] < 4 ? 1 : vn[0] + vn[1] : mn && (!(vn = mn.match(/Edge\/(\d+)/)) || vn[1] >= 74) && (vn = mn.match(/Chrome\/(\d+)/)) && (yn = vn[1]);
  var Fn = yn && +yn;
  var bn = Fn;
  var Cn = D2;
  var wn = !!Object.getOwnPropertySymbols && !Cn(function() {
    return !String(Symbol()) || !Symbol.sham && bn && bn < 41;
  });
  var Bn = wn && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  var Sn = p2;
  var _n = ke.exports;
  var Tn = $2;
  var On = Be;
  var Rn = wn;
  var In = Bn;
  var jn = _n("wks");
  var zn = Sn.Symbol;
  var $n = In ? zn : zn && zn.withoutSetter || On;
  var Pn = function(e3) {
    return Tn(jn, e3) && (Rn || "string" == typeof jn[e3]) || (Rn && Tn(zn, e3) ? jn[e3] = zn[e3] : jn[e3] = $n("Symbol." + e3)), jn[e3];
  };
  var Ln = le.exports;
  var Mn = dn;
  var Nn = D2;
  var Un = Pn;
  var qn = se;
  var Zn = Un("species");
  var Gn = RegExp.prototype;
  var Hn = !Nn(function() {
    var e3 = /./;
    return e3.exec = function() {
      var e4 = [];
      return e4.groups = { a: "7" }, e4;
    }, "7" !== "".replace(e3, "$<a>");
  });
  var Qn = "$0" === "a".replace(/./, "$0");
  var Vn = Un("replace");
  var Yn = !!/./[Vn] && "" === /./[Vn]("a", "$0");
  var Kn = !Nn(function() {
    var e3 = /(?:)/, t3 = e3.exec;
    e3.exec = function() {
      return t3.apply(this, arguments);
    };
    var n3 = "ab".split(e3);
    return 2 !== n3.length || "a" !== n3[0] || "b" !== n3[1];
  });
  var Xn = function(e3, t3, n3, r3) {
    var u3 = Un(e3), i3 = !Nn(function() {
      var t4 = {};
      return t4[u3] = function() {
        return 7;
      }, 7 != ""[e3](t4);
    }), o3 = i3 && !Nn(function() {
      var t4 = false, n4 = /a/;
      return "split" === e3 && ((n4 = {}).constructor = {}, n4.constructor[Zn] = function() {
        return n4;
      }, n4.flags = "", n4[u3] = /./[u3]), n4.exec = function() {
        return t4 = true, null;
      }, n4[u3](""), !t4;
    });
    if (!i3 || !o3 || "replace" === e3 && (!Hn || !Qn || Yn) || "split" === e3 && !Kn) {
      var a3 = /./[u3], s3 = n3(u3, ""[e3], function(e4, t4, n4, r4, u4) {
        var o4 = t4.exec;
        return o4 === Mn || o4 === Gn.exec ? i3 && !u4 ? { done: true, value: a3.call(t4, n4, r4) } : { done: true, value: e4.call(n4, t4, r4) } : { done: false };
      }, { REPLACE_KEEPS_$0: Qn, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Yn }), l3 = s3[0], c3 = s3[1];
      Ln(String.prototype, e3, l3), Ln(Gn, u3, 2 == t3 ? function(e4, t4) {
        return c3.call(e4, this, t4);
      } : function(e4) {
        return c3.call(e4, this);
      });
    }
    r3 && qn(Gn[u3], "sham", true);
  };
  var Wn = lt;
  var Jn = C2;
  var er = function(e3) {
    return function(t3, n3) {
      var r3, u3, i3 = String(Jn(t3)), o3 = Wn(n3), a3 = i3.length;
      return o3 < 0 || o3 >= a3 ? e3 ? "" : void 0 : (r3 = i3.charCodeAt(o3)) < 55296 || r3 > 56319 || o3 + 1 === a3 || (u3 = i3.charCodeAt(o3 + 1)) < 56320 || u3 > 57343 ? e3 ? i3.charAt(o3) : r3 : e3 ? i3.slice(o3, o3 + 2) : u3 - 56320 + (r3 - 55296 << 10) + 65536;
    };
  };
  var tr = { codeAt: er(false), charAt: er(true) };
  var nr = tr.charAt;
  var rr = function(e3, t3, n3) {
    return t3 + (n3 ? nr(e3, t3).length : 1);
  };
  var ur = I2;
  var ir = Math.floor;
  var or = "".replace;
  var ar = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var sr = /\$([$&'`]|\d{1,2})/g;
  var lr = E2;
  var cr = dn;
  var fr = function(e3, t3) {
    var n3 = e3.exec;
    if ("function" == typeof n3) {
      var r3 = n3.call(e3, t3);
      if ("object" != typeof r3)
        throw TypeError("RegExp exec method returned something other than an Object or null");
      return r3;
    }
    if ("RegExp" !== lr(e3))
      throw TypeError("RegExp#exec called on incompatible receiver");
    return cr.call(e3, t3);
  };
  var pr = Xn;
  var hr = ee;
  var Dr = pt;
  var gr = lt;
  var dr = C2;
  var vr = rr;
  var yr = function(e3, t3, n3, r3, u3, i3) {
    var o3 = n3 + e3.length, a3 = r3.length, s3 = sr;
    return void 0 !== u3 && (u3 = ur(u3), s3 = ar), or.call(i3, s3, function(i4, s4) {
      var l3;
      switch (s4.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return e3;
        case "`":
          return t3.slice(0, n3);
        case "'":
          return t3.slice(o3);
        case "<":
          l3 = u3[s4.slice(1, -1)];
          break;
        default:
          var c3 = +s4;
          if (0 === c3)
            return i4;
          if (c3 > a3) {
            var f3 = ir(c3 / 10);
            return 0 === f3 ? i4 : f3 <= a3 ? void 0 === r3[f3 - 1] ? s4.charAt(1) : r3[f3 - 1] + s4.charAt(1) : i4;
          }
          l3 = r3[c3 - 1];
      }
      return void 0 === l3 ? "" : l3;
    });
  };
  var Ar = fr;
  var mr = Math.max;
  var kr = Math.min;
  pr("replace", 2, function(e3, t3, n3, r3) {
    var u3 = r3.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, i3 = r3.REPLACE_KEEPS_$0, o3 = u3 ? "$" : "$0";
    return [function(n4, r4) {
      var u4 = dr(this), i4 = null == n4 ? void 0 : n4[e3];
      return void 0 !== i4 ? i4.call(n4, u4, r4) : t3.call(String(u4), n4, r4);
    }, function(e4, r4) {
      if (!u3 && i3 || "string" == typeof r4 && -1 === r4.indexOf(o3)) {
        var a3 = n3(t3, e4, this, r4);
        if (a3.done)
          return a3.value;
      }
      var s3 = hr(e4), l3 = String(this), c3 = "function" == typeof r4;
      c3 || (r4 = String(r4));
      var f3 = s3.global;
      if (f3) {
        var p3 = s3.unicode;
        s3.lastIndex = 0;
      }
      for (var h3 = []; ; ) {
        var D3 = Ar(s3, l3);
        if (null === D3)
          break;
        if (h3.push(D3), !f3)
          break;
        "" === String(D3[0]) && (s3.lastIndex = vr(l3, Dr(s3.lastIndex), p3));
      }
      for (var g3, d3 = "", v3 = 0, y3 = 0; y3 < h3.length; y3++) {
        D3 = h3[y3];
        for (var A3 = String(D3[0]), m3 = mr(kr(gr(D3.index), l3.length), 0), k3 = [], E3 = 1; E3 < D3.length; E3++)
          k3.push(void 0 === (g3 = D3[E3]) ? g3 : String(g3));
        var x3 = D3.groups;
        if (c3) {
          var F3 = [A3].concat(k3, m3, l3);
          void 0 !== x3 && F3.push(x3);
          var b3 = String(r4.apply(void 0, F3));
        } else
          b3 = yr(A3, l3, m3, k3, x3, r4);
        m3 >= v3 && (d3 += l3.slice(v3, m3) + b3, v3 = m3 + A3.length);
      }
      return d3 + l3.slice(v3);
    }];
  });
  var Er = _;
  var xr = ee;
  var Fr = function(e3) {
    if (!Er(e3) && null !== e3)
      throw TypeError("Can't set " + String(e3) + " as a prototype");
    return e3;
  };
  var br = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var e3, t3 = false, n3 = {};
    try {
      (e3 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n3, []), t3 = n3 instanceof Array;
    } catch (e4) {
    }
    return function(n4, r3) {
      return xr(n4), Fr(r3), t3 ? e3.call(n4, r3) : n4.__proto__ = r3, n4;
    };
  }() : void 0);
  var Cr = _;
  var wr = br;
  var Br = _;
  var Sr = E2;
  var _r = Pn("match");
  var Tr = function(e3) {
    var t3;
    return Br(e3) && (void 0 !== (t3 = e3[_r]) ? !!t3 : "RegExp" == Sr(e3));
  };
  var Or = it;
  var Rr = W2;
  var Ir = g2;
  var jr = Pn("species");
  var zr = function(e3) {
    var t3 = Or(e3), n3 = Rr.f;
    Ir && t3 && !t3[jr] && n3(t3, jr, { configurable: true, get: function() {
      return this;
    } });
  };
  var $r = g2;
  var Pr = p2;
  var Lr = Ht;
  var Mr = function(e3, t3, n3) {
    var r3, u3;
    return wr && "function" == typeof (r3 = t3.constructor) && r3 !== n3 && Cr(u3 = r3.prototype) && u3 !== n3.prototype && wr(e3, u3), e3;
  };
  var Nr = W2.f;
  var Ur = ot.f;
  var qr = Tr;
  var Zr = nn;
  var Gr = rn;
  var Hr = le.exports;
  var Qr = D2;
  var Vr = Qe.enforce;
  var Yr = zr;
  var Kr = Pn("match");
  var Xr = Pr.RegExp;
  var Wr = Xr.prototype;
  var Jr = /a/g;
  var eu = /a/g;
  var tu = new Xr(Jr) !== Jr;
  var nu = Gr.UNSUPPORTED_Y;
  if ($r && Lr("RegExp", !tu || nu || Qr(function() {
    return eu[Kr] = false, Xr(Jr) != Jr || Xr(eu) == eu || "/a/i" != Xr(Jr, "i");
  }))) {
    for (ru = function(e3, t3) {
      var n3, r3 = this instanceof ru, u3 = qr(e3), i3 = void 0 === t3;
      if (!r3 && u3 && e3.constructor === ru && i3)
        return e3;
      tu ? u3 && !i3 && (e3 = e3.source) : e3 instanceof ru && (i3 && (t3 = Zr.call(e3)), e3 = e3.source), nu && (n3 = !!t3 && t3.indexOf("y") > -1) && (t3 = t3.replace(/y/g, ""));
      var o3 = Mr(tu ? new Xr(e3, t3) : Xr(e3, t3), r3 ? this : Wr, ru);
      nu && n3 && (Vr(o3).sticky = true);
      return o3;
    }, uu = function(e3) {
      e3 in ru || Nr(ru, e3, { configurable: true, get: function() {
        return Xr[e3];
      }, set: function(t3) {
        Xr[e3] = t3;
      } });
    }, iu = Ur(Xr), ou = 0; iu.length > ou; )
      uu(iu[ou++]);
    Wr.constructor = ru, ru.prototype = Wr, Hr(Pr, "RegExp", ru);
  }
  var ru;
  var uu;
  var iu;
  var ou;
  Yr("RegExp");
  var au = le.exports;
  var su = ee;
  var lu = D2;
  var cu = nn;
  var fu = RegExp.prototype;
  var pu = fu.toString;
  var hu = lu(function() {
    return "/a/b" != pu.call({ source: "a", flags: "b" });
  });
  var Du = "toString" != pu.name;
  (hu || Du) && au(RegExp.prototype, "toString", function() {
    var e3 = su(this), t3 = String(e3.source), n3 = e3.flags;
    return "/" + t3 + "/" + String(void 0 === n3 && e3 instanceof RegExp && !("flags" in fu) ? cu.call(e3) : n3);
  }, { unsafe: true });
  var gu = ee;
  var du = pt;
  var vu = C2;
  var yu = rr;
  var Au = fr;
  Xn("match", 1, function(e3, t3, n3) {
    return [function(t4) {
      var n4 = vu(this), r3 = null == t4 ? void 0 : t4[e3];
      return void 0 !== r3 ? r3.call(t4, n4) : new RegExp(t4)[e3](String(n4));
    }, function(e4) {
      var r3 = n3(t3, e4, this);
      if (r3.done)
        return r3.value;
      var u3 = gu(e4), i3 = String(this);
      if (!u3.global)
        return Au(u3, i3);
      var o3 = u3.unicode;
      u3.lastIndex = 0;
      for (var a3, s3 = [], l3 = 0; null !== (a3 = Au(u3, i3)); ) {
        var c3 = String(a3[0]);
        s3[l3] = c3, "" === c3 && (u3.lastIndex = yu(i3, du(u3.lastIndex), o3)), l3++;
      }
      return 0 === l3 ? null : s3;
    }];
  });
  var mu = g2;
  var ku = W2.f;
  var Eu = Function.prototype;
  var xu = Eu.toString;
  var Fu = /^\s*function ([^ (]*)/;
  mu && !("name" in Eu) && ku(Eu, "name", { configurable: true, get: function() {
    try {
      return xu.call(this).match(Fu)[1];
    } catch (e3) {
      return "";
    }
  } });
  var bu = D2;
  var Cu = function(e3, t3) {
    var n3 = [][e3];
    return !!n3 && bu(function() {
      n3.call(null, t3 || function() {
        throw 1;
      }, 1);
    });
  };
  var wu = en;
  var Bu = S2;
  var Su = [].join;
  var _u = b2 != Object;
  var Tu = Cu("join", ",");
  wu({ target: "Array", proto: true, forced: _u || !Tu }, { join: function(e3) {
    return Su.call(Bu(this), void 0 === e3 ? "," : e3);
  } });
  var Ou = function(e3) {
    if ("function" != typeof e3)
      throw TypeError(String(e3) + " is not a function");
    return e3;
  };
  var Ru = ee;
  var Iu = Ou;
  var ju = Pn("species");
  var zu = function(e3, t3) {
    var n3, r3 = Ru(e3).constructor;
    return void 0 === r3 || null == (n3 = Ru(r3)[ju]) ? t3 : Iu(n3);
  };
  var $u = Xn;
  var Pu = Tr;
  var Lu = ee;
  var Mu = C2;
  var Nu = zu;
  var Uu = rr;
  var qu = pt;
  var Zu = fr;
  var Gu = dn;
  var Hu = rn.UNSUPPORTED_Y;
  var Qu = [].push;
  var Vu = Math.min;
  $u("split", 2, function(e3, t3, n3) {
    var r3;
    return r3 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e4, n4) {
      var r4 = String(Mu(this)), u3 = void 0 === n4 ? 4294967295 : n4 >>> 0;
      if (0 === u3)
        return [];
      if (void 0 === e4)
        return [r4];
      if (!Pu(e4))
        return t3.call(r4, e4, u3);
      for (var i3, o3, a3, s3 = [], l3 = (e4.ignoreCase ? "i" : "") + (e4.multiline ? "m" : "") + (e4.unicode ? "u" : "") + (e4.sticky ? "y" : ""), c3 = 0, f3 = new RegExp(e4.source, l3 + "g"); (i3 = Gu.call(f3, r4)) && !((o3 = f3.lastIndex) > c3 && (s3.push(r4.slice(c3, i3.index)), i3.length > 1 && i3.index < r4.length && Qu.apply(s3, i3.slice(1)), a3 = i3[0].length, c3 = o3, s3.length >= u3)); )
        f3.lastIndex === i3.index && f3.lastIndex++;
      return c3 === r4.length ? !a3 && f3.test("") || s3.push("") : s3.push(r4.slice(c3)), s3.length > u3 ? s3.slice(0, u3) : s3;
    } : "0".split(void 0, 0).length ? function(e4, n4) {
      return void 0 === e4 && 0 === n4 ? [] : t3.call(this, e4, n4);
    } : t3, [function(t4, n4) {
      var u3 = Mu(this), i3 = null == t4 ? void 0 : t4[e3];
      return void 0 !== i3 ? i3.call(t4, u3, n4) : r3.call(String(u3), t4, n4);
    }, function(e4, u3) {
      var i3 = n3(r3, e4, this, u3, r3 !== t3);
      if (i3.done)
        return i3.value;
      var o3 = Lu(e4), a3 = String(this), s3 = Nu(o3, RegExp), l3 = o3.unicode, c3 = (o3.ignoreCase ? "i" : "") + (o3.multiline ? "m" : "") + (o3.unicode ? "u" : "") + (Hu ? "g" : "y"), f3 = new s3(Hu ? "^(?:" + o3.source + ")" : o3, c3), p3 = void 0 === u3 ? 4294967295 : u3 >>> 0;
      if (0 === p3)
        return [];
      if (0 === a3.length)
        return null === Zu(f3, a3) ? [a3] : [];
      for (var h3 = 0, D3 = 0, g3 = []; D3 < a3.length; ) {
        f3.lastIndex = Hu ? 0 : D3;
        var d3, v3 = Zu(f3, Hu ? a3.slice(D3) : a3);
        if (null === v3 || (d3 = Vu(qu(f3.lastIndex + (Hu ? D3 : 0)), a3.length)) === h3)
          D3 = Uu(a3, D3, l3);
        else {
          if (g3.push(a3.slice(h3, D3)), g3.length === p3)
            return g3;
          for (var y3 = 1; y3 <= v3.length - 1; y3++)
            if (g3.push(v3[y3]), g3.length === p3)
              return g3;
          D3 = h3 = d3;
        }
      }
      return g3.push(a3.slice(h3)), g3;
    }];
  }, Hu);
  var Yu = C2;
  var Ku = "[	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]";
  var Xu = RegExp("^" + Ku + Ku + "*");
  var Wu = RegExp(Ku + Ku + "*$");
  var Ju = function(e3) {
    return function(t3) {
      var n3 = String(Yu(t3));
      return 1 & e3 && (n3 = n3.replace(Xu, "")), 2 & e3 && (n3 = n3.replace(Wu, "")), n3;
    };
  };
  var ei = { start: Ju(1), end: Ju(2), trim: Ju(3) };
  var ti = D2;
  var ni = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var ri = function(e3) {
    return ti(function() {
      return !!ni[e3]() || "\u200B\x85\u180E" != "\u200B\x85\u180E"[e3]() || ni[e3].name !== e3;
    });
  };
  var ui = ei.trim;
  en({ target: "String", proto: true, forced: ri("trim") }, { trim: function() {
    return ui(this);
  } });
  var ii = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
  var oi = Ou;
  var ai = function(e3, t3, n3) {
    if (oi(e3), void 0 === t3)
      return e3;
    switch (n3) {
      case 0:
        return function() {
          return e3.call(t3);
        };
      case 1:
        return function(n4) {
          return e3.call(t3, n4);
        };
      case 2:
        return function(n4, r3) {
          return e3.call(t3, n4, r3);
        };
      case 3:
        return function(n4, r3, u3) {
          return e3.call(t3, n4, r3, u3);
        };
    }
    return function() {
      return e3.apply(t3, arguments);
    };
  };
  var si = E2;
  var li = Array.isArray || function(e3) {
    return "Array" == si(e3);
  };
  var ci = _;
  var fi = li;
  var pi = Pn("species");
  var hi = function(e3, t3) {
    var n3;
    return fi(e3) && ("function" != typeof (n3 = e3.constructor) || n3 !== Array && !fi(n3.prototype) ? ci(n3) && null === (n3 = n3[pi]) && (n3 = void 0) : n3 = void 0), new (void 0 === n3 ? Array : n3)(0 === t3 ? 0 : t3);
  };
  var Di = ai;
  var gi = b2;
  var di = I2;
  var vi = pt;
  var yi = hi;
  var Ai = [].push;
  var mi = function(e3) {
    var t3 = 1 == e3, n3 = 2 == e3, r3 = 3 == e3, u3 = 4 == e3, i3 = 6 == e3, o3 = 7 == e3, a3 = 5 == e3 || i3;
    return function(s3, l3, c3, f3) {
      for (var p3, h3, D3 = di(s3), g3 = gi(D3), d3 = Di(l3, c3, 3), v3 = vi(g3.length), y3 = 0, A3 = f3 || yi, m3 = t3 ? A3(s3, v3) : n3 || o3 ? A3(s3, 0) : void 0; v3 > y3; y3++)
        if ((a3 || y3 in g3) && (h3 = d3(p3 = g3[y3], y3, D3), e3))
          if (t3)
            m3[y3] = h3;
          else if (h3)
            switch (e3) {
              case 3:
                return true;
              case 5:
                return p3;
              case 6:
                return y3;
              case 2:
                Ai.call(m3, p3);
            }
          else
            switch (e3) {
              case 4:
                return false;
              case 7:
                Ai.call(m3, p3);
            }
      return i3 ? -1 : r3 || u3 ? u3 : m3;
    };
  };
  var ki = { forEach: mi(0), map: mi(1), filter: mi(2), some: mi(3), every: mi(4), find: mi(5), findIndex: mi(6), filterOut: mi(7) };
  var Ei = ki.forEach;
  var xi = p2;
  var Fi = ii;
  var bi = Cu("forEach") ? [].forEach : function(e3) {
    return Ei(this, e3, arguments.length > 1 ? arguments[1] : void 0);
  };
  var Ci = se;
  for (wi in Fi) {
    Bi = xi[wi], Si = Bi && Bi.prototype;
    if (Si && Si.forEach !== bi)
      try {
        Ci(Si, "forEach", bi);
      } catch (e3) {
        Si.forEach = bi;
      }
  }
  var Bi;
  var Si;
  var wi;
  var _i = {};
  _i[Pn("toStringTag")] = "z";
  var Ti = "[object z]" === String(_i);
  var Oi = Ti;
  var Ri = E2;
  var Ii = Pn("toStringTag");
  var ji = "Arguments" == Ri(function() {
    return arguments;
  }());
  var zi = Oi ? Ri : function(e3) {
    var t3, n3, r3;
    return void 0 === e3 ? "Undefined" : null === e3 ? "Null" : "string" == typeof (n3 = function(e4, t4) {
      try {
        return e4[t4];
      } catch (e5) {
      }
    }(t3 = Object(e3), Ii)) ? n3 : ji ? Ri(t3) : "Object" == (r3 = Ri(t3)) && "function" == typeof t3.callee ? "Arguments" : r3;
  };
  var $i = zi;
  var Pi = Ti ? {}.toString : function() {
    return "[object " + $i(this) + "]";
  };
  var Li = Ti;
  var Mi = le.exports;
  var Ni = Pi;
  Li || Mi(Object.prototype, "toString", Ni, { unsafe: true });
  var Ui = p2.Promise;
  var qi = le.exports;
  var Zi = W2.f;
  var Gi = $2;
  var Hi = Pn("toStringTag");
  var Qi = function(e3, t3, n3) {
    e3 && !Gi(e3 = n3 ? e3 : e3.prototype, Hi) && Zi(e3, Hi, { configurable: true, value: t3 });
  };
  var Vi = {};
  var Yi = Vi;
  var Ki = Pn("iterator");
  var Xi = Array.prototype;
  var Wi = zi;
  var Ji = Vi;
  var eo = Pn("iterator");
  var to = ee;
  var no = ee;
  var ro = function(e3) {
    return void 0 !== e3 && (Yi.Array === e3 || Xi[Ki] === e3);
  };
  var uo = pt;
  var io = ai;
  var oo = function(e3) {
    if (null != e3)
      return e3[eo] || e3["@@iterator"] || Ji[Wi(e3)];
  };
  var ao = function(e3) {
    var t3 = e3.return;
    if (void 0 !== t3)
      return to(t3.call(e3)).value;
  };
  var so = function(e3, t3) {
    this.stopped = e3, this.result = t3;
  };
  var lo = Pn("iterator");
  var co = false;
  try {
    fo = 0, po = { next: function() {
      return { done: !!fo++ };
    }, return: function() {
      co = true;
    } };
    po[lo] = function() {
      return this;
    }, Array.from(po, function() {
      throw 2;
    });
  } catch (e3) {
  }
  var fo;
  var po;
  var ho;
  var Do;
  var go;
  var vo = it("document", "documentElement");
  var yo = /(?:iphone|ipod|ipad).*applewebkit/i.test(An);
  var Ao = "process" == E2(p2.process);
  var mo = p2;
  var ko = D2;
  var Eo = ai;
  var xo = vo;
  var Fo = N2;
  var bo = yo;
  var Co = Ao;
  var wo = mo.location;
  var Bo = mo.setImmediate;
  var So = mo.clearImmediate;
  var _o = mo.process;
  var To = mo.MessageChannel;
  var Oo = mo.Dispatch;
  var Ro = 0;
  var Io = {};
  var jo = function(e3) {
    if (Io.hasOwnProperty(e3)) {
      var t3 = Io[e3];
      delete Io[e3], t3();
    }
  };
  var zo = function(e3) {
    return function() {
      jo(e3);
    };
  };
  var $o = function(e3) {
    jo(e3.data);
  };
  var Po = function(e3) {
    mo.postMessage(e3 + "", wo.protocol + "//" + wo.host);
  };
  Bo && So || (Bo = function(e3) {
    for (var t3 = [], n3 = 1; arguments.length > n3; )
      t3.push(arguments[n3++]);
    return Io[++Ro] = function() {
      ("function" == typeof e3 ? e3 : Function(e3)).apply(void 0, t3);
    }, ho(Ro), Ro;
  }, So = function(e3) {
    delete Io[e3];
  }, Co ? ho = function(e3) {
    _o.nextTick(zo(e3));
  } : Oo && Oo.now ? ho = function(e3) {
    Oo.now(zo(e3));
  } : To && !bo ? (go = (Do = new To()).port2, Do.port1.onmessage = $o, ho = Eo(go.postMessage, go, 1)) : mo.addEventListener && "function" == typeof postMessage && !mo.importScripts && wo && "file:" !== wo.protocol && !ko(Po) ? (ho = Po, mo.addEventListener("message", $o, false)) : ho = "onreadystatechange" in Fo("script") ? function(e3) {
    xo.appendChild(Fo("script")).onreadystatechange = function() {
      xo.removeChild(this), jo(e3);
    };
  } : function(e3) {
    setTimeout(zo(e3), 0);
  });
  var Lo;
  var Mo;
  var No;
  var Uo;
  var qo;
  var Zo;
  var Go;
  var Ho;
  var Qo = { set: Bo, clear: So };
  var Vo = /web0s(?!.*chrome)/i.test(An);
  var Yo = p2;
  var Ko = h2.f;
  var Xo = Qo.set;
  var Wo = yo;
  var Jo = Vo;
  var ea = Ao;
  var ta = Yo.MutationObserver || Yo.WebKitMutationObserver;
  var na = Yo.document;
  var ra = Yo.process;
  var ua = Yo.Promise;
  var ia = Ko(Yo, "queueMicrotask");
  var oa = ia && ia.value;
  oa || (Lo = function() {
    var e3, t3;
    for (ea && (e3 = ra.domain) && e3.exit(); Mo; ) {
      t3 = Mo.fn, Mo = Mo.next;
      try {
        t3();
      } catch (e4) {
        throw Mo ? Uo() : No = void 0, e4;
      }
    }
    No = void 0, e3 && e3.enter();
  }, Wo || ea || Jo || !ta || !na ? ua && ua.resolve ? ((Go = ua.resolve(void 0)).constructor = ua, Ho = Go.then, Uo = function() {
    Ho.call(Go, Lo);
  }) : Uo = ea ? function() {
    ra.nextTick(Lo);
  } : function() {
    Xo.call(Yo, Lo);
  } : (qo = true, Zo = na.createTextNode(""), new ta(Lo).observe(Zo, { characterData: true }), Uo = function() {
    Zo.data = qo = !qo;
  }));
  var aa = oa || function(e3) {
    var t3 = { fn: e3, next: void 0 };
    No && (No.next = t3), Mo || (Mo = t3, Uo()), No = t3;
  };
  var sa = {};
  var la = Ou;
  var ca = function(e3) {
    var t3, n3;
    this.promise = new e3(function(e4, r3) {
      if (void 0 !== t3 || void 0 !== n3)
        throw TypeError("Bad Promise constructor");
      t3 = e4, n3 = r3;
    }), this.resolve = la(t3), this.reject = la(n3);
  };
  sa.f = function(e3) {
    return new ca(e3);
  };
  var fa;
  var pa;
  var ha;
  var Da;
  var ga = ee;
  var da = _;
  var va = sa;
  var ya = p2;
  var Aa = "object" == typeof window;
  var ma = en;
  var ka = p2;
  var Ea = it;
  var xa = Ui;
  var Fa = le.exports;
  var ba = function(e3, t3, n3) {
    for (var r3 in t3)
      qi(e3, r3, t3[r3], n3);
    return e3;
  };
  var Ca = br;
  var wa = Qi;
  var Ba = zr;
  var Sa = _;
  var _a = Ou;
  var Ta = function(e3, t3, n3) {
    if (!(e3 instanceof t3))
      throw TypeError("Incorrect " + (n3 ? n3 + " " : "") + "invocation");
    return e3;
  };
  var Oa = ve;
  var Ra = function(e3, t3, n3) {
    var r3, u3, i3, o3, a3, s3, l3, c3 = n3 && n3.that, f3 = !(!n3 || !n3.AS_ENTRIES), p3 = !(!n3 || !n3.IS_ITERATOR), h3 = !(!n3 || !n3.INTERRUPTED), D3 = io(t3, c3, 1 + f3 + h3), g3 = function(e4) {
      return r3 && ao(r3), new so(true, e4);
    }, d3 = function(e4) {
      return f3 ? (no(e4), h3 ? D3(e4[0], e4[1], g3) : D3(e4[0], e4[1])) : h3 ? D3(e4, g3) : D3(e4);
    };
    if (p3)
      r3 = e3;
    else {
      if ("function" != typeof (u3 = oo(e3)))
        throw TypeError("Target is not iterable");
      if (ro(u3)) {
        for (i3 = 0, o3 = uo(e3.length); o3 > i3; i3++)
          if ((a3 = d3(e3[i3])) && a3 instanceof so)
            return a3;
        return new so(false);
      }
      r3 = u3.call(e3);
    }
    for (s3 = r3.next; !(l3 = s3.call(r3)).done; ) {
      try {
        a3 = d3(l3.value);
      } catch (e4) {
        throw ao(r3), e4;
      }
      if ("object" == typeof a3 && a3 && a3 instanceof so)
        return a3;
    }
    return new so(false);
  };
  var Ia = function(e3, t3) {
    if (!t3 && !co)
      return false;
    var n3 = false;
    try {
      var r3 = {};
      r3[lo] = function() {
        return { next: function() {
          return { done: n3 = true };
        } };
      }, e3(r3);
    } catch (e4) {
    }
    return n3;
  };
  var ja = zu;
  var za = Qo.set;
  var $a = aa;
  var Pa = function(e3, t3) {
    if (ga(e3), da(t3) && t3.constructor === e3)
      return t3;
    var n3 = va.f(e3);
    return (0, n3.resolve)(t3), n3.promise;
  };
  var La = function(e3, t3) {
    var n3 = ya.console;
    n3 && n3.error && (1 === arguments.length ? n3.error(e3) : n3.error(e3, t3));
  };
  var Ma = sa;
  var Na = function(e3) {
    try {
      return { error: false, value: e3() };
    } catch (e4) {
      return { error: true, value: e4 };
    }
  };
  var Ua = Qe;
  var qa = Ht;
  var Za = Aa;
  var Ga = Ao;
  var Ha = Fn;
  var Qa = Pn("species");
  var Va = "Promise";
  var Ya = Ua.get;
  var Ka = Ua.set;
  var Xa = Ua.getterFor(Va);
  var Wa = xa && xa.prototype;
  var Ja = xa;
  var es = Wa;
  var ts = ka.TypeError;
  var ns = ka.document;
  var rs = ka.process;
  var us = Ma.f;
  var is = us;
  var os = !!(ns && ns.createEvent && ka.dispatchEvent);
  var as = "function" == typeof PromiseRejectionEvent;
  var ss = false;
  var ls = qa(Va, function() {
    var e3 = Oa(Ja) !== String(Ja);
    if (!e3 && 66 === Ha)
      return true;
    if (Ha >= 51 && /native code/.test(Ja))
      return false;
    var t3 = new Ja(function(e4) {
      e4(1);
    }), n3 = function(e4) {
      e4(function() {
      }, function() {
      });
    };
    return (t3.constructor = {})[Qa] = n3, !(ss = t3.then(function() {
    }) instanceof n3) || !e3 && Za && !as;
  });
  var cs = ls || !Ia(function(e3) {
    Ja.all(e3).catch(function() {
    });
  });
  var fs = function(e3) {
    var t3;
    return !(!Sa(e3) || "function" != typeof (t3 = e3.then)) && t3;
  };
  var ps = function(e3, t3) {
    if (!e3.notified) {
      e3.notified = true;
      var n3 = e3.reactions;
      $a(function() {
        for (var r3 = e3.value, u3 = 1 == e3.state, i3 = 0; n3.length > i3; ) {
          var o3, a3, s3, l3 = n3[i3++], c3 = u3 ? l3.ok : l3.fail, f3 = l3.resolve, p3 = l3.reject, h3 = l3.domain;
          try {
            c3 ? (u3 || (2 === e3.rejection && ds(e3), e3.rejection = 1), true === c3 ? o3 = r3 : (h3 && h3.enter(), o3 = c3(r3), h3 && (h3.exit(), s3 = true)), o3 === l3.promise ? p3(ts("Promise-chain cycle")) : (a3 = fs(o3)) ? a3.call(o3, f3, p3) : f3(o3)) : p3(r3);
          } catch (e4) {
            h3 && !s3 && h3.exit(), p3(e4);
          }
        }
        e3.reactions = [], e3.notified = false, t3 && !e3.rejection && Ds(e3);
      });
    }
  };
  var hs = function(e3, t3, n3) {
    var r3, u3;
    os ? ((r3 = ns.createEvent("Event")).promise = t3, r3.reason = n3, r3.initEvent(e3, false, true), ka.dispatchEvent(r3)) : r3 = { promise: t3, reason: n3 }, !as && (u3 = ka["on" + e3]) ? u3(r3) : "unhandledrejection" === e3 && La("Unhandled promise rejection", n3);
  };
  var Ds = function(e3) {
    za.call(ka, function() {
      var t3, n3 = e3.facade, r3 = e3.value;
      if (gs(e3) && (t3 = Na(function() {
        Ga ? rs.emit("unhandledRejection", r3, n3) : hs("unhandledrejection", n3, r3);
      }), e3.rejection = Ga || gs(e3) ? 2 : 1, t3.error))
        throw t3.value;
    });
  };
  var gs = function(e3) {
    return 1 !== e3.rejection && !e3.parent;
  };
  var ds = function(e3) {
    za.call(ka, function() {
      var t3 = e3.facade;
      Ga ? rs.emit("rejectionHandled", t3) : hs("rejectionhandled", t3, e3.value);
    });
  };
  var vs = function(e3, t3, n3) {
    return function(r3) {
      e3(t3, r3, n3);
    };
  };
  var ys = function(e3, t3, n3) {
    e3.done || (e3.done = true, n3 && (e3 = n3), e3.value = t3, e3.state = 2, ps(e3, true));
  };
  var As = function(e3, t3, n3) {
    if (!e3.done) {
      e3.done = true, n3 && (e3 = n3);
      try {
        if (e3.facade === t3)
          throw ts("Promise can't be resolved itself");
        var r3 = fs(t3);
        r3 ? $a(function() {
          var n4 = { done: false };
          try {
            r3.call(t3, vs(As, n4, e3), vs(ys, n4, e3));
          } catch (t4) {
            ys(n4, t4, e3);
          }
        }) : (e3.value = t3, e3.state = 1, ps(e3, false));
      } catch (t4) {
        ys({ done: false }, t4, e3);
      }
    }
  };
  if (ls && (es = (Ja = function(e3) {
    Ta(this, Ja, Va), _a(e3), fa.call(this);
    var t3 = Ya(this);
    try {
      e3(vs(As, t3), vs(ys, t3));
    } catch (e4) {
      ys(t3, e4);
    }
  }).prototype, (fa = function(e3) {
    Ka(this, { type: Va, done: false, notified: false, parent: false, reactions: [], rejection: false, state: 0, value: void 0 });
  }).prototype = ba(es, { then: function(e3, t3) {
    var n3 = Xa(this), r3 = us(ja(this, Ja));
    return r3.ok = "function" != typeof e3 || e3, r3.fail = "function" == typeof t3 && t3, r3.domain = Ga ? rs.domain : void 0, n3.parent = true, n3.reactions.push(r3), 0 != n3.state && ps(n3, false), r3.promise;
  }, catch: function(e3) {
    return this.then(void 0, e3);
  } }), pa = function() {
    var e3 = new fa(), t3 = Ya(e3);
    this.promise = e3, this.resolve = vs(As, t3), this.reject = vs(ys, t3);
  }, Ma.f = us = function(e3) {
    return e3 === Ja || e3 === ha ? new pa(e3) : is(e3);
  }, "function" == typeof xa && Wa !== Object.prototype)) {
    Da = Wa.then, ss || (Fa(Wa, "then", function(e3, t3) {
      var n3 = this;
      return new Ja(function(e4, t4) {
        Da.call(n3, e4, t4);
      }).then(e3, t3);
    }, { unsafe: true }), Fa(Wa, "catch", es.catch, { unsafe: true }));
    try {
      delete Wa.constructor;
    } catch (e3) {
    }
    Ca && Ca(Wa, es);
  }
  ma({ global: true, wrap: true, forced: ls }, { Promise: Ja }), wa(Ja, Va, false), Ba(Va), ha = Ea(Va), ma({ target: Va, stat: true, forced: ls }, { reject: function(e3) {
    var t3 = us(this);
    return t3.reject.call(void 0, e3), t3.promise;
  } }), ma({ target: Va, stat: true, forced: ls }, { resolve: function(e3) {
    return Pa(this, e3);
  } }), ma({ target: Va, stat: true, forced: cs }, { all: function(e3) {
    var t3 = this, n3 = us(t3), r3 = n3.resolve, u3 = n3.reject, i3 = Na(function() {
      var n4 = _a(t3.resolve), i4 = [], o3 = 0, a3 = 1;
      Ra(e3, function(e4) {
        var s3 = o3++, l3 = false;
        i4.push(void 0), a3++, n4.call(t3, e4).then(function(e5) {
          l3 || (l3 = true, i4[s3] = e5, --a3 || r3(i4));
        }, u3);
      }), --a3 || r3(i4);
    });
    return i3.error && u3(i3.value), n3.promise;
  }, race: function(e3) {
    var t3 = this, n3 = us(t3), r3 = n3.reject, u3 = Na(function() {
      var u4 = _a(t3.resolve);
      Ra(e3, function(e4) {
        u4.call(t3, e4).then(n3.resolve, r3);
      });
    });
    return u3.error && r3(u3.value), n3.promise;
  } });
  var ms = O2;
  var ks = W2;
  var Es = m2;
  var xs = function(e3, t3, n3) {
    var r3 = ms(t3);
    r3 in e3 ? ks.f(e3, r3, Es(0, n3)) : e3[r3] = n3;
  };
  var Fs = D2;
  var bs = Fn;
  var Cs = Pn("species");
  var ws = function(e3) {
    return bs >= 51 || !Fs(function() {
      var t3 = [];
      return (t3.constructor = {})[Cs] = function() {
        return { foo: 1 };
      }, 1 !== t3[e3](Boolean).foo;
    });
  };
  var Bs = en;
  var Ss = _;
  var _s = li;
  var Ts = dt;
  var Os = pt;
  var Rs = S2;
  var Is = xs;
  var js = Pn;
  var zs = ws("slice");
  var $s = js("species");
  var Ps = [].slice;
  var Ls = Math.max;
  Bs({ target: "Array", proto: true, forced: !zs }, { slice: function(e3, t3) {
    var n3, r3, u3, i3 = Rs(this), o3 = Os(i3.length), a3 = Ts(e3, o3), s3 = Ts(void 0 === t3 ? o3 : t3, o3);
    if (_s(i3) && ("function" != typeof (n3 = i3.constructor) || n3 !== Array && !_s(n3.prototype) ? Ss(n3) && null === (n3 = n3[$s]) && (n3 = void 0) : n3 = void 0, n3 === Array || void 0 === n3))
      return Ps.call(i3, a3, s3);
    for (r3 = new (void 0 === n3 ? Array : n3)(Ls(s3 - a3, 0)), u3 = 0; a3 < s3; a3++, u3++)
      a3 in i3 && Is(r3, u3, i3[a3]);
    return r3.length = u3, r3;
  } });
  var Ms;
  var Ns = Ct;
  var Us = wt;
  var qs = Object.keys || function(e3) {
    return Ns(e3, Us);
  };
  var Zs = W2;
  var Gs = ee;
  var Hs = qs;
  var Qs = g2 ? Object.defineProperties : function(e3, t3) {
    Gs(e3);
    for (var n3, r3 = Hs(t3), u3 = r3.length, i3 = 0; u3 > i3; )
      Zs.f(e3, n3 = r3[i3++], t3[n3]);
    return e3;
  };
  var Vs = ee;
  var Ys = Qs;
  var Ks = wt;
  var Xs = Re;
  var Ws = vo;
  var Js = N2;
  var el = Oe("IE_PROTO");
  var tl = function() {
  };
  var nl = function(e3) {
    return "<script>" + e3 + "<\/script>";
  };
  var rl = function() {
    try {
      Ms = document.domain && new ActiveXObject("htmlfile");
    } catch (e4) {
    }
    var e3, t3;
    rl = Ms ? function(e4) {
      e4.write(nl("")), e4.close();
      var t4 = e4.parentWindow.Object;
      return e4 = null, t4;
    }(Ms) : ((t3 = Js("iframe")).style.display = "none", Ws.appendChild(t3), t3.src = String("javascript:"), (e3 = t3.contentWindow.document).open(), e3.write(nl("document.F=Object")), e3.close(), e3.F);
    for (var n3 = Ks.length; n3--; )
      delete rl.prototype[Ks[n3]];
    return rl();
  };
  Xs[el] = true;
  var ul = Object.create || function(e3, t3) {
    var n3;
    return null !== e3 ? (tl.prototype = Vs(e3), n3 = new tl(), tl.prototype = null, n3[el] = e3) : n3 = rl(), void 0 === t3 ? n3 : Ys(n3, t3);
  };
  var il = ul;
  var ol = W2;
  var al = Pn("unscopables");
  var sl = Array.prototype;
  null == sl[al] && ol.f(sl, al, { configurable: true, value: il(null) });
  var ll;
  var cl;
  var fl;
  var pl = function(e3) {
    sl[al][e3] = true;
  };
  var hl = !D2(function() {
    function e3() {
    }
    return e3.prototype.constructor = null, Object.getPrototypeOf(new e3()) !== e3.prototype;
  });
  var Dl = $2;
  var gl = I2;
  var dl = hl;
  var vl = Oe("IE_PROTO");
  var yl = Object.prototype;
  var Al = dl ? Object.getPrototypeOf : function(e3) {
    return e3 = gl(e3), Dl(e3, vl) ? e3[vl] : "function" == typeof e3.constructor && e3 instanceof e3.constructor ? e3.constructor.prototype : e3 instanceof Object ? yl : null;
  };
  var ml = D2;
  var kl = Al;
  var El = se;
  var xl = $2;
  var Fl = Pn("iterator");
  var bl = false;
  [].keys && ("next" in (fl = [].keys()) ? (cl = kl(kl(fl))) !== Object.prototype && (ll = cl) : bl = true), (null == ll || ml(function() {
    var e3 = {};
    return ll[Fl].call(e3) !== e3;
  })) && (ll = {}), xl(ll, Fl) || El(ll, Fl, function() {
    return this;
  });
  var Cl = { IteratorPrototype: ll, BUGGY_SAFARI_ITERATORS: bl };
  var wl = Cl.IteratorPrototype;
  var Bl = ul;
  var Sl = m2;
  var _l = Qi;
  var Tl = Vi;
  var Ol = function() {
    return this;
  };
  var Rl = en;
  var Il = function(e3, t3, n3) {
    var r3 = t3 + " Iterator";
    return e3.prototype = Bl(wl, { next: Sl(1, n3) }), _l(e3, r3, false), Tl[r3] = Ol, e3;
  };
  var jl = Al;
  var zl = br;
  var $l = Qi;
  var Pl = se;
  var Ll = le.exports;
  var Ml = Vi;
  var Nl = Cl.IteratorPrototype;
  var Ul = Cl.BUGGY_SAFARI_ITERATORS;
  var ql = Pn("iterator");
  var Zl = function() {
    return this;
  };
  var Gl = function(e3, t3, n3, r3, u3, i3, o3) {
    Il(n3, t3, r3);
    var a3, s3, l3, c3 = function(e4) {
      if (e4 === u3 && g3)
        return g3;
      if (!Ul && e4 in h3)
        return h3[e4];
      switch (e4) {
        case "keys":
        case "values":
        case "entries":
          return function() {
            return new n3(this, e4);
          };
      }
      return function() {
        return new n3(this);
      };
    }, f3 = t3 + " Iterator", p3 = false, h3 = e3.prototype, D3 = h3[ql] || h3["@@iterator"] || u3 && h3[u3], g3 = !Ul && D3 || c3(u3), d3 = "Array" == t3 && h3.entries || D3;
    if (d3 && (a3 = jl(d3.call(new e3())), Nl !== Object.prototype && a3.next && (jl(a3) !== Nl && (zl ? zl(a3, Nl) : "function" != typeof a3[ql] && Pl(a3, ql, Zl)), $l(a3, f3, true))), "values" == u3 && D3 && "values" !== D3.name && (p3 = true, g3 = function() {
      return D3.call(this);
    }), h3[ql] !== g3 && Pl(h3, ql, g3), Ml[t3] = g3, u3)
      if (s3 = { values: c3("values"), keys: i3 ? g3 : c3("keys"), entries: c3("entries") }, o3)
        for (l3 in s3)
          (Ul || p3 || !(l3 in h3)) && Ll(h3, l3, s3[l3]);
      else
        Rl({ target: t3, proto: true, forced: Ul || p3 }, s3);
    return s3;
  };
  var Hl = S2;
  var Ql = pl;
  var Vl = Vi;
  var Yl = Qe;
  var Kl = Gl;
  var Xl = Yl.set;
  var Wl = Yl.getterFor("Array Iterator");
  var Jl = Kl(Array, "Array", function(e3, t3) {
    Xl(this, { type: "Array Iterator", target: Hl(e3), index: 0, kind: t3 });
  }, function() {
    var e3 = Wl(this), t3 = e3.target, n3 = e3.kind, r3 = e3.index++;
    return !t3 || r3 >= t3.length ? (e3.target = void 0, { value: void 0, done: true }) : "keys" == n3 ? { value: r3, done: false } : "values" == n3 ? { value: t3[r3], done: false } : { value: [r3, t3[r3]], done: false };
  }, "values");
  Vl.Arguments = Vl.Array, Ql("keys"), Ql("values"), Ql("entries");
  var ec = tr.charAt;
  var tc = Qe;
  var nc = Gl;
  var rc = tc.set;
  var uc = tc.getterFor("String Iterator");
  nc(String, "String", function(e3) {
    rc(this, { type: "String Iterator", string: String(e3), index: 0 });
  }, function() {
    var e3, t3 = uc(this), n3 = t3.string, r3 = t3.index;
    return r3 >= n3.length ? { value: void 0, done: true } : (e3 = ec(n3, r3), t3.index += e3.length, { value: e3, done: false });
  });
  var ic = p2;
  var oc = ii;
  var ac = Jl;
  var sc = se;
  var lc = Pn;
  var cc = lc("iterator");
  var fc = lc("toStringTag");
  var pc = ac.values;
  for (hc in oc) {
    Dc = ic[hc], gc = Dc && Dc.prototype;
    if (gc) {
      if (gc[cc] !== pc)
        try {
          sc(gc, cc, pc);
        } catch (e3) {
          gc[cc] = pc;
        }
      if (gc[fc] || sc(gc, fc, hc), oc[hc]) {
        for (dc in ac)
          if (gc[dc] !== ac[dc])
            try {
              sc(gc, dc, ac[dc]);
            } catch (e3) {
              gc[dc] = ac[dc];
            }
      }
    }
  }
  var Dc;
  var gc;
  var dc;
  var hc;
  var vc = en;
  var yc = D2;
  var Ac = li;
  var mc = _;
  var kc = I2;
  var Ec = pt;
  var xc = xs;
  var Fc = hi;
  var bc = ws;
  var Cc = Fn;
  var wc = Pn("isConcatSpreadable");
  var Bc = Cc >= 51 || !yc(function() {
    var e3 = [];
    return e3[wc] = false, e3.concat()[0] !== e3;
  });
  var Sc = bc("concat");
  var _c = function(e3) {
    if (!mc(e3))
      return false;
    var t3 = e3[wc];
    return void 0 !== t3 ? !!t3 : Ac(e3);
  };
  vc({ target: "Array", proto: true, forced: !Bc || !Sc }, { concat: function(e3) {
    var t3, n3, r3, u3, i3, o3 = kc(this), a3 = Fc(o3, 0), s3 = 0;
    for (t3 = -1, r3 = arguments.length; t3 < r3; t3++)
      if (_c(i3 = -1 === t3 ? o3 : arguments[t3])) {
        if (s3 + (u3 = Ec(i3.length)) > 9007199254740991)
          throw TypeError("Maximum allowed index exceeded");
        for (n3 = 0; n3 < u3; n3++, s3++)
          n3 in i3 && xc(a3, s3, i3[n3]);
      } else {
        if (s3 >= 9007199254740991)
          throw TypeError("Maximum allowed index exceeded");
        xc(a3, s3++, i3);
      }
    return a3.length = s3, a3;
  } });
  var Tc = en;
  var Oc = dt;
  var Rc = lt;
  var Ic = pt;
  var jc = I2;
  var zc = hi;
  var $c = xs;
  var Pc = ws("splice");
  var Lc = Math.max;
  var Mc = Math.min;
  Tc({ target: "Array", proto: true, forced: !Pc }, { splice: function(e3, t3) {
    var n3, r3, u3, i3, o3, a3, s3 = jc(this), l3 = Ic(s3.length), c3 = Oc(e3, l3), f3 = arguments.length;
    if (0 === f3 ? n3 = r3 = 0 : 1 === f3 ? (n3 = 0, r3 = l3 - c3) : (n3 = f3 - 2, r3 = Mc(Lc(Rc(t3), 0), l3 - c3)), l3 + n3 - r3 > 9007199254740991)
      throw TypeError("Maximum allowed length exceeded");
    for (u3 = zc(s3, r3), i3 = 0; i3 < r3; i3++)
      (o3 = c3 + i3) in s3 && $c(u3, i3, s3[o3]);
    if (u3.length = r3, n3 < r3) {
      for (i3 = c3; i3 < l3 - r3; i3++)
        a3 = i3 + n3, (o3 = i3 + r3) in s3 ? s3[a3] = s3[o3] : delete s3[a3];
      for (i3 = l3; i3 > l3 - r3 + n3; i3--)
        delete s3[i3 - 1];
    } else if (n3 > r3)
      for (i3 = l3 - r3; i3 > c3; i3--)
        a3 = i3 + n3 - 1, (o3 = i3 + r3 - 1) in s3 ? s3[a3] = s3[o3] : delete s3[a3];
    for (i3 = 0; i3 < n3; i3++)
      s3[i3 + c3] = arguments[i3 + 2];
    return s3.length = l3 - r3 + n3, u3;
  } });
  var Nc = ki.map;
  en({ target: "Array", proto: true, forced: !ws("map") }, { map: function(e3) {
    return Nc(this, e3, arguments.length > 1 ? arguments[1] : void 0);
  } });
  var Uc = en;
  var qc = ei.start;
  var Zc = ri("trimStart");
  var Gc = Zc ? function() {
    return qc(this);
  } : "".trimStart;
  Uc({ target: "String", proto: true, forced: Zc }, { trimStart: Gc, trimLeft: Gc });
  var Hc = Object.is || function(e3, t3) {
    return e3 === t3 ? 0 !== e3 || 1 / e3 == 1 / t3 : e3 != e3 && t3 != t3;
  };
  var Qc = ee;
  var Vc = C2;
  var Yc = Hc;
  var Kc = fr;
  Xn("search", 1, function(e3, t3, n3) {
    return [function(t4) {
      var n4 = Vc(this), r3 = null == t4 ? void 0 : t4[e3];
      return void 0 !== r3 ? r3.call(t4, n4) : new RegExp(t4)[e3](String(n4));
    }, function(e4) {
      var r3 = n3(t3, e4, this);
      if (r3.done)
        return r3.value;
      var u3 = Qc(e4), i3 = String(this), o3 = u3.lastIndex;
      Yc(o3, 0) || (u3.lastIndex = 0);
      var a3 = Kc(u3, i3);
      return Yc(u3.lastIndex, o3) || (u3.lastIndex = o3), null === a3 ? -1 : a3.index;
    }];
  });
  var Xc = en;
  var Wc = ei.end;
  var Jc = ri("trimEnd");
  var ef = Jc ? function() {
    return Wc(this);
  } : "".trimEnd;
  Xc({ target: "String", proto: true, forced: Jc }, { trimEnd: ef, trimRight: ef });
  var tf = ki.filter;
  en({ target: "Array", proto: true, forced: !ws("filter") }, { filter: function(e3) {
    return tf(this, e3, arguments.length > 1 ? arguments[1] : void 0);
  } });
  var nf = C2;
  var rf = /"/g;
  var uf = D2;
  var of = function(e3, t3, n3, r3) {
    var u3 = String(nf(e3)), i3 = "<" + t3;
    return "" !== n3 && (i3 += " " + n3 + '="' + String(r3).replace(rf, "&quot;") + '"'), i3 + ">" + u3 + "</" + t3 + ">";
  };
  en({ target: "String", proto: true, forced: function(e3) {
    return uf(function() {
      var t3 = ""[e3]('"');
      return t3 !== t3.toLowerCase() || t3.split('"').length > 3;
    });
  }("link") }, { link: function(e3) {
    return of(this, "a", "href", e3);
  } });
  var af = I2;
  var sf = qs;
  en({ target: "Object", stat: true, forced: D2(function() {
    sf(1);
  }) }, { keys: function(e3) {
    return sf(af(e3));
  } });
  var lf = kt.includes;
  var cf = pl;
  en({ target: "Array", proto: true }, { includes: function(e3) {
    return lf(this, e3, arguments.length > 1 ? arguments[1] : void 0);
  } }), cf("includes");
  var ff = Tr;
  var pf = Pn("match");
  var hf = function(e3) {
    if (ff(e3))
      throw TypeError("The method doesn't accept regular expressions");
    return e3;
  };
  var Df = C2;
  function gf() {
    return { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
  }
  en({ target: "String", proto: true, forced: !function(e3) {
    var t3 = /./;
    try {
      "/./"[e3](t3);
    } catch (n3) {
      try {
        return t3[pf] = false, "/./"[e3](t3);
      } catch (e4) {
      }
    }
    return false;
  }("includes") }, { includes: function(e3) {
    return !!~String(Df(this)).indexOf(hf(e3), arguments.length > 1 ? arguments[1] : void 0);
  } });
  var df = { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
  var vf = /[&<>"']/;
  var yf = /[&<>"']/g;
  var Af = /[<>"']|&(?!#?\w+;)/;
  var mf = /[<>"']|&(?!#?\w+;)/g;
  var kf = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var Ef = function(e3) {
    return kf[e3];
  };
  function xf(e3, t3) {
    if (t3) {
      if (vf.test(e3))
        return e3.replace(yf, Ef);
    } else if (Af.test(e3))
      return e3.replace(mf, Ef);
    return e3;
  }
  var Ff = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function bf(e3) {
    return e3.replace(Ff, function(e4, t3) {
      return "colon" === (t3 = t3.toLowerCase()) ? ":" : "#" === t3.charAt(0) ? "x" === t3.charAt(1) ? String.fromCharCode(parseInt(t3.substring(2), 16)) : String.fromCharCode(+t3.substring(1)) : "";
    });
  }
  var Cf = /(^|[^\[])\^/g;
  function wf(e3, t3) {
    e3 = e3.source || e3, t3 = t3 || "";
    var n3 = { replace: function(t4, r3) {
      return r3 = (r3 = r3.source || r3).replace(Cf, "$1"), e3 = e3.replace(t4, r3), n3;
    }, getRegex: function() {
      return new RegExp(e3, t3);
    } };
    return n3;
  }
  var Bf = /[^\w:]/g;
  var Sf = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function _f(e3, t3, n3) {
    if (e3) {
      var r3;
      try {
        r3 = decodeURIComponent(bf(n3)).replace(Bf, "").toLowerCase();
      } catch (e4) {
        return null;
      }
      if (0 === r3.indexOf("javascript:") || 0 === r3.indexOf("vbscript:") || 0 === r3.indexOf("data:"))
        return null;
    }
    t3 && !Sf.test(n3) && (n3 = function(e4, t4) {
      Tf[" " + e4] || (Of.test(e4) ? Tf[" " + e4] = e4 + "/" : Tf[" " + e4] = Pf(e4, "/", true));
      var n4 = -1 === (e4 = Tf[" " + e4]).indexOf(":");
      return "//" === t4.substring(0, 2) ? n4 ? t4 : e4.replace(Rf, "$1") + t4 : "/" === t4.charAt(0) ? n4 ? t4 : e4.replace(If, "$1") + t4 : e4 + t4;
    }(t3, n3));
    try {
      n3 = encodeURI(n3).replace(/%25/g, "%");
    } catch (e4) {
      return null;
    }
    return n3;
  }
  var Tf = {};
  var Of = /^[^:]+:\/*[^/]*$/;
  var Rf = /^([^:]+:)[\s\S]*$/;
  var If = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  var jf = { exec: function() {
  } };
  function zf(e3) {
    for (var t3, n3, r3 = 1; r3 < arguments.length; r3++)
      for (n3 in t3 = arguments[r3])
        Object.prototype.hasOwnProperty.call(t3, n3) && (e3[n3] = t3[n3]);
    return e3;
  }
  function $f(e3, t3) {
    var n3 = e3.replace(/\|/g, function(e4, t4, n4) {
      for (var r4 = false, u3 = t4; --u3 >= 0 && "\\" === n4[u3]; )
        r4 = !r4;
      return r4 ? "|" : " |";
    }).split(/ \|/), r3 = 0;
    if (n3[0].trim() || n3.shift(), n3.length > 0 && !n3[n3.length - 1].trim() && n3.pop(), n3.length > t3)
      n3.splice(t3);
    else
      for (; n3.length < t3; )
        n3.push("");
    for (; r3 < n3.length; r3++)
      n3[r3] = n3[r3].trim().replace(/\\\|/g, "|");
    return n3;
  }
  function Pf(e3, t3, n3) {
    var r3 = e3.length;
    if (0 === r3)
      return "";
    for (var u3 = 0; u3 < r3; ) {
      var i3 = e3.charAt(r3 - u3 - 1);
      if (i3 !== t3 || n3) {
        if (i3 === t3 || !n3)
          break;
        u3++;
      } else
        u3++;
    }
    return e3.substr(0, r3 - u3);
  }
  function Lf(e3) {
    e3 && e3.sanitize && !e3.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
  function Mf(e3, t3) {
    if (t3 < 1)
      return "";
    for (var n3 = ""; t3 > 1; )
      1 & t3 && (n3 += e3), t3 >>= 1, e3 += e3;
    return n3 + e3;
  }
  function Nf(e3, t3, n3, r3) {
    var u3 = t3.href, i3 = t3.title ? xf(t3.title) : null, o3 = e3[1].replace(/\\([\[\]])/g, "$1");
    if ("!" !== e3[0].charAt(0)) {
      r3.state.inLink = true;
      var a3 = { type: "link", raw: n3, href: u3, title: i3, text: o3, tokens: r3.inlineTokens(o3, []) };
      return r3.state.inLink = false, a3;
    }
    return { type: "image", raw: n3, href: u3, title: i3, text: xf(o3) };
  }
  var Uf = function() {
    function e3(n3) {
      t2(this, e3), this.options = n3 || df;
    }
    return r2(e3, [{ key: "space", value: function(e4) {
      var t3 = this.rules.block.newline.exec(e4);
      if (t3 && t3[0].length > 0)
        return { type: "space", raw: t3[0] };
    } }, { key: "code", value: function(e4) {
      var t3 = this.rules.block.code.exec(e4);
      if (t3) {
        var n3 = t3[0].replace(/^ {1,4}/gm, "");
        return { type: "code", raw: t3[0], codeBlockStyle: "indented", text: this.options.pedantic ? n3 : Pf(n3, "\n") };
      }
    } }, { key: "fences", value: function(e4) {
      var t3 = this.rules.block.fences.exec(e4);
      if (t3) {
        var n3 = t3[0], r3 = function(e5, t4) {
          var n4 = e5.match(/^(\s+)(?:```)/);
          if (null === n4)
            return t4;
          var r4 = n4[1];
          return t4.split("\n").map(function(e6) {
            var t5 = e6.match(/^\s+/);
            return null === t5 ? e6 : o2(t5, 1)[0].length >= r4.length ? e6.slice(r4.length) : e6;
          }).join("\n");
        }(n3, t3[3] || "");
        return { type: "code", raw: n3, lang: t3[2] ? t3[2].trim() : t3[2], text: r3 };
      }
    } }, { key: "heading", value: function(e4) {
      var t3 = this.rules.block.heading.exec(e4);
      if (t3) {
        var n3 = t3[2].trim();
        if (/#$/.test(n3)) {
          var r3 = Pf(n3, "#");
          this.options.pedantic ? n3 = r3.trim() : r3 && !/ $/.test(r3) || (n3 = r3.trim());
        }
        var u3 = { type: "heading", raw: t3[0], depth: t3[1].length, text: n3, tokens: [] };
        return this.lexer.inline(u3.text, u3.tokens), u3;
      }
    } }, { key: "hr", value: function(e4) {
      var t3 = this.rules.block.hr.exec(e4);
      if (t3)
        return { type: "hr", raw: t3[0] };
    } }, { key: "blockquote", value: function(e4) {
      var t3 = this.rules.block.blockquote.exec(e4);
      if (t3) {
        var n3 = t3[0].replace(/^ *> ?/gm, "");
        return { type: "blockquote", raw: t3[0], tokens: this.lexer.blockTokens(n3, []), text: n3 };
      }
    } }, { key: "list", value: function(e4) {
      var t3 = this.rules.block.list.exec(e4);
      if (t3) {
        var n3, r3, u3, i3, o3, a3, s3, c3, f3, p3, h3, D3, g3 = t3[1].trim(), d3 = g3.length > 1, v3 = { type: "list", raw: "", ordered: d3, start: d3 ? +g3.slice(0, -1) : "", loose: false, items: [] };
        g3 = d3 ? "\\d{1,9}\\".concat(g3.slice(-1)) : "\\".concat(g3), this.options.pedantic && (g3 = d3 ? g3 : "[*+-]");
        for (var y3 = new RegExp("^( {0,3}".concat(g3, ")((?: [^\\n]*)?(?:\\n|$))")); e4 && (D3 = false, t3 = y3.exec(e4)) && !this.rules.block.hr.test(e4); ) {
          if (n3 = t3[0], e4 = e4.substring(n3.length), c3 = t3[2].split("\n", 1)[0], f3 = e4.split("\n", 1)[0], this.options.pedantic ? (i3 = 2, h3 = c3.trimLeft()) : (i3 = (i3 = t3[2].search(/[^ ]/)) > 4 ? 1 : i3, h3 = c3.slice(i3), i3 += t3[1].length), a3 = false, !c3 && /^ *$/.test(f3) && (n3 += f3 + "\n", e4 = e4.substring(f3.length + 1), D3 = true), !D3)
            for (var A3 = new RegExp("^ {0,".concat(Math.min(3, i3 - 1), "}(?:[*+-]|\\d{1,9}[.)])")); e4 && (c3 = p3 = e4.split("\n", 1)[0], this.options.pedantic && (c3 = c3.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !A3.test(c3)); ) {
              if (c3.search(/[^ ]/) >= i3 || !c3.trim())
                h3 += "\n" + c3.slice(i3);
              else {
                if (a3)
                  break;
                h3 += "\n" + c3;
              }
              a3 || c3.trim() || (a3 = true), n3 += p3 + "\n", e4 = e4.substring(p3.length + 1);
            }
          v3.loose || (s3 ? v3.loose = true : /\n *\n *$/.test(n3) && (s3 = true)), this.options.gfm && (r3 = /^\[[ xX]\] /.exec(h3)) && (u3 = "[ ] " !== r3[0], h3 = h3.replace(/^\[[ xX]\] +/, "")), v3.items.push({ type: "list_item", raw: n3, task: !!r3, checked: u3, loose: false, text: h3 }), v3.raw += n3;
        }
        v3.items[v3.items.length - 1].raw = n3.trimRight(), v3.items[v3.items.length - 1].text = h3.trimRight(), v3.raw = v3.raw.trimRight();
        var m3 = v3.items.length;
        for (o3 = 0; o3 < m3; o3++) {
          this.lexer.state.top = false, v3.items[o3].tokens = this.lexer.blockTokens(v3.items[o3].text, []);
          var k3 = v3.items[o3].tokens.filter(function(e5) {
            return "space" === e5.type;
          }), E3 = k3.every(function(e5) {
            var t4, n4 = 0, r4 = l2(e5.raw.split(""));
            try {
              for (r4.s(); !(t4 = r4.n()).done; ) {
                if ("\n" === t4.value && (n4 += 1), n4 > 1)
                  return true;
              }
            } catch (e6) {
              r4.e(e6);
            } finally {
              r4.f();
            }
            return false;
          });
          !v3.loose && k3.length && E3 && (v3.loose = true, v3.items[o3].loose = true);
        }
        return v3;
      }
    } }, { key: "html", value: function(e4) {
      var t3 = this.rules.block.html.exec(e4);
      if (t3) {
        var n3 = { type: "html", raw: t3[0], pre: !this.options.sanitizer && ("pre" === t3[1] || "script" === t3[1] || "style" === t3[1]), text: t3[0] };
        return this.options.sanitize && (n3.type = "paragraph", n3.text = this.options.sanitizer ? this.options.sanitizer(t3[0]) : xf(t3[0]), n3.tokens = [], this.lexer.inline(n3.text, n3.tokens)), n3;
      }
    } }, { key: "def", value: function(e4) {
      var t3 = this.rules.block.def.exec(e4);
      if (t3)
        return t3[3] && (t3[3] = t3[3].substring(1, t3[3].length - 1)), { type: "def", tag: t3[1].toLowerCase().replace(/\s+/g, " "), raw: t3[0], href: t3[2], title: t3[3] };
    } }, { key: "table", value: function(e4) {
      var t3 = this.rules.block.table.exec(e4);
      if (t3) {
        var n3 = { type: "table", header: $f(t3[1]).map(function(e5) {
          return { text: e5 };
        }), align: t3[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: t3[3] && t3[3].trim() ? t3[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
        if (n3.header.length === n3.align.length) {
          n3.raw = t3[0];
          var r3, u3, i3, o3, a3 = n3.align.length;
          for (r3 = 0; r3 < a3; r3++)
            /^ *-+: *$/.test(n3.align[r3]) ? n3.align[r3] = "right" : /^ *:-+: *$/.test(n3.align[r3]) ? n3.align[r3] = "center" : /^ *:-+ *$/.test(n3.align[r3]) ? n3.align[r3] = "left" : n3.align[r3] = null;
          for (a3 = n3.rows.length, r3 = 0; r3 < a3; r3++)
            n3.rows[r3] = $f(n3.rows[r3], n3.header.length).map(function(e5) {
              return { text: e5 };
            });
          for (a3 = n3.header.length, u3 = 0; u3 < a3; u3++)
            n3.header[u3].tokens = [], this.lexer.inlineTokens(n3.header[u3].text, n3.header[u3].tokens);
          for (a3 = n3.rows.length, u3 = 0; u3 < a3; u3++)
            for (o3 = n3.rows[u3], i3 = 0; i3 < o3.length; i3++)
              o3[i3].tokens = [], this.lexer.inlineTokens(o3[i3].text, o3[i3].tokens);
          return n3;
        }
      }
    } }, { key: "lheading", value: function(e4) {
      var t3 = this.rules.block.lheading.exec(e4);
      if (t3) {
        var n3 = { type: "heading", raw: t3[0], depth: "=" === t3[2].charAt(0) ? 1 : 2, text: t3[1], tokens: [] };
        return this.lexer.inline(n3.text, n3.tokens), n3;
      }
    } }, { key: "paragraph", value: function(e4) {
      var t3 = this.rules.block.paragraph.exec(e4);
      if (t3) {
        var n3 = { type: "paragraph", raw: t3[0], text: "\n" === t3[1].charAt(t3[1].length - 1) ? t3[1].slice(0, -1) : t3[1], tokens: [] };
        return this.lexer.inline(n3.text, n3.tokens), n3;
      }
    } }, { key: "text", value: function(e4) {
      var t3 = this.rules.block.text.exec(e4);
      if (t3) {
        var n3 = { type: "text", raw: t3[0], text: t3[0], tokens: [] };
        return this.lexer.inline(n3.text, n3.tokens), n3;
      }
    } }, { key: "escape", value: function(e4) {
      var t3 = this.rules.inline.escape.exec(e4);
      if (t3)
        return { type: "escape", raw: t3[0], text: xf(t3[1]) };
    } }, { key: "tag", value: function(e4) {
      var t3 = this.rules.inline.tag.exec(e4);
      if (t3)
        return !this.lexer.state.inLink && /^<a /i.test(t3[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t3[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t3[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t3[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: t3[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t3[0]) : xf(t3[0]) : t3[0] };
    } }, { key: "link", value: function(e4) {
      var t3 = this.rules.inline.link.exec(e4);
      if (t3) {
        var n3 = t3[2].trim();
        if (!this.options.pedantic && /^</.test(n3)) {
          if (!/>$/.test(n3))
            return;
          var r3 = Pf(n3.slice(0, -1), "\\");
          if ((n3.length - r3.length) % 2 == 0)
            return;
        } else {
          var u3 = function(e5, t4) {
            if (-1 === e5.indexOf(t4[1]))
              return -1;
            for (var n4 = e5.length, r4 = 0, u4 = 0; u4 < n4; u4++)
              if ("\\" === e5[u4])
                u4++;
              else if (e5[u4] === t4[0])
                r4++;
              else if (e5[u4] === t4[1] && --r4 < 0)
                return u4;
            return -1;
          }(t3[2], "()");
          if (u3 > -1) {
            var i3 = (0 === t3[0].indexOf("!") ? 5 : 4) + t3[1].length + u3;
            t3[2] = t3[2].substring(0, u3), t3[0] = t3[0].substring(0, i3).trim(), t3[3] = "";
          }
        }
        var o3 = t3[2], a3 = "";
        if (this.options.pedantic) {
          var s3 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o3);
          s3 && (o3 = s3[1], a3 = s3[3]);
        } else
          a3 = t3[3] ? t3[3].slice(1, -1) : "";
        return o3 = o3.trim(), /^</.test(o3) && (o3 = this.options.pedantic && !/>$/.test(n3) ? o3.slice(1) : o3.slice(1, -1)), Nf(t3, { href: o3 ? o3.replace(this.rules.inline._escapes, "$1") : o3, title: a3 ? a3.replace(this.rules.inline._escapes, "$1") : a3 }, t3[0], this.lexer);
      }
    } }, { key: "reflink", value: function(e4, t3) {
      var n3;
      if ((n3 = this.rules.inline.reflink.exec(e4)) || (n3 = this.rules.inline.nolink.exec(e4))) {
        var r3 = (n3[2] || n3[1]).replace(/\s+/g, " ");
        if (!(r3 = t3[r3.toLowerCase()]) || !r3.href) {
          var u3 = n3[0].charAt(0);
          return { type: "text", raw: u3, text: u3 };
        }
        return Nf(n3, r3, n3[0], this.lexer);
      }
    } }, { key: "emStrong", value: function(e4, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", r3 = this.rules.inline.emStrong.lDelim.exec(e4);
      if (r3 && (!r3[3] || !n3.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
        var u3 = r3[1] || r3[2] || "";
        if (!u3 || u3 && ("" === n3 || this.rules.inline.punctuation.exec(n3))) {
          var i3, o3, a3 = r3[0].length - 1, s3 = a3, l3 = 0, c3 = "*" === r3[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
          for (c3.lastIndex = 0, t3 = t3.slice(-1 * e4.length + a3); null != (r3 = c3.exec(t3)); )
            if (i3 = r3[1] || r3[2] || r3[3] || r3[4] || r3[5] || r3[6])
              if (o3 = i3.length, r3[3] || r3[4])
                s3 += o3;
              else if (!((r3[5] || r3[6]) && a3 % 3) || (a3 + o3) % 3) {
                if (!((s3 -= o3) > 0)) {
                  if (o3 = Math.min(o3, o3 + s3 + l3), Math.min(a3, o3) % 2) {
                    var f3 = e4.slice(1, a3 + r3.index + o3);
                    return { type: "em", raw: e4.slice(0, a3 + r3.index + o3 + 1), text: f3, tokens: this.lexer.inlineTokens(f3, []) };
                  }
                  var p3 = e4.slice(2, a3 + r3.index + o3 - 1);
                  return { type: "strong", raw: e4.slice(0, a3 + r3.index + o3 + 1), text: p3, tokens: this.lexer.inlineTokens(p3, []) };
                }
              } else
                l3 += o3;
        }
      }
    } }, { key: "codespan", value: function(e4) {
      var t3 = this.rules.inline.code.exec(e4);
      if (t3) {
        var n3 = t3[2].replace(/\n/g, " "), r3 = /[^ ]/.test(n3), u3 = /^ /.test(n3) && / $/.test(n3);
        return r3 && u3 && (n3 = n3.substring(1, n3.length - 1)), n3 = xf(n3, true), { type: "codespan", raw: t3[0], text: n3 };
      }
    } }, { key: "br", value: function(e4) {
      var t3 = this.rules.inline.br.exec(e4);
      if (t3)
        return { type: "br", raw: t3[0] };
    } }, { key: "del", value: function(e4) {
      var t3 = this.rules.inline.del.exec(e4);
      if (t3)
        return { type: "del", raw: t3[0], text: t3[2], tokens: this.lexer.inlineTokens(t3[2], []) };
    } }, { key: "autolink", value: function(e4, t3) {
      var n3, r3, u3 = this.rules.inline.autolink.exec(e4);
      if (u3)
        return r3 = "@" === u3[2] ? "mailto:" + (n3 = xf(this.options.mangle ? t3(u3[1]) : u3[1])) : n3 = xf(u3[1]), { type: "link", raw: u3[0], text: n3, href: r3, tokens: [{ type: "text", raw: n3, text: n3 }] };
    } }, { key: "url", value: function(e4, t3) {
      var n3;
      if (n3 = this.rules.inline.url.exec(e4)) {
        var r3, u3;
        if ("@" === n3[2])
          u3 = "mailto:" + (r3 = xf(this.options.mangle ? t3(n3[0]) : n3[0]));
        else {
          var i3;
          do {
            i3 = n3[0], n3[0] = this.rules.inline._backpedal.exec(n3[0])[0];
          } while (i3 !== n3[0]);
          r3 = xf(n3[0]), u3 = "www." === n3[1] ? "http://" + r3 : r3;
        }
        return { type: "link", raw: n3[0], text: r3, href: u3, tokens: [{ type: "text", raw: r3, text: r3 }] };
      }
    } }, { key: "inlineText", value: function(e4, t3) {
      var n3, r3 = this.rules.inline.text.exec(e4);
      if (r3)
        return n3 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r3[0]) : xf(r3[0]) : r3[0] : xf(this.options.smartypants ? t3(r3[0]) : r3[0]), { type: "text", raw: r3[0], text: n3 };
    } }]), e3;
  }();
  var qf = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: jf, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
  qf.def = wf(qf.def).replace("label", qf._label).replace("title", qf._title).getRegex(), qf.bullet = /(?:[*+-]|\d{1,9}[.)])/, qf.listItemStart = wf(/^( *)(bull) */).replace("bull", qf.bullet).getRegex(), qf.list = wf(qf.list).replace(/bull/g, qf.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + qf.def.source + ")").getRegex(), qf._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", qf._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, qf.html = wf(qf.html, "i").replace("comment", qf._comment).replace("tag", qf._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), qf.paragraph = wf(qf._paragraph).replace("hr", qf.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qf._tag).getRegex(), qf.blockquote = wf(qf.blockquote).replace("paragraph", qf.paragraph).getRegex(), qf.normal = zf({}, qf), qf.gfm = zf({}, qf.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), qf.gfm.table = wf(qf.gfm.table).replace("hr", qf.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qf._tag).getRegex(), qf.gfm.paragraph = wf(qf._paragraph).replace("hr", qf.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", qf.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qf._tag).getRegex(), qf.pedantic = zf({}, qf.normal, { html: wf(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", qf._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: jf, paragraph: wf(qf.normal._paragraph).replace("hr", qf.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", qf.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
  var Zf = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: jf, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: jf, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
  function Gf(e3) {
    return e3.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
  }
  function Hf(e3) {
    var t3, n3, r3 = "", u3 = e3.length;
    for (t3 = 0; t3 < u3; t3++)
      n3 = e3.charCodeAt(t3), Math.random() > 0.5 && (n3 = "x" + n3.toString(16)), r3 += "&#" + n3 + ";";
    return r3;
  }
  Zf._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", Zf.punctuation = wf(Zf.punctuation).replace(/punctuation/g, Zf._punctuation).getRegex(), Zf.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, Zf.escapedEmSt = /\\\*|\\_/g, Zf._comment = wf(qf._comment).replace("(?:-->|$)", "-->").getRegex(), Zf.emStrong.lDelim = wf(Zf.emStrong.lDelim).replace(/punct/g, Zf._punctuation).getRegex(), Zf.emStrong.rDelimAst = wf(Zf.emStrong.rDelimAst, "g").replace(/punct/g, Zf._punctuation).getRegex(), Zf.emStrong.rDelimUnd = wf(Zf.emStrong.rDelimUnd, "g").replace(/punct/g, Zf._punctuation).getRegex(), Zf._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, Zf._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, Zf._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, Zf.autolink = wf(Zf.autolink).replace("scheme", Zf._scheme).replace("email", Zf._email).getRegex(), Zf._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, Zf.tag = wf(Zf.tag).replace("comment", Zf._comment).replace("attribute", Zf._attribute).getRegex(), Zf._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Zf._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, Zf._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, Zf.link = wf(Zf.link).replace("label", Zf._label).replace("href", Zf._href).replace("title", Zf._title).getRegex(), Zf.reflink = wf(Zf.reflink).replace("label", Zf._label).replace("ref", qf._label).getRegex(), Zf.nolink = wf(Zf.nolink).replace("ref", qf._label).getRegex(), Zf.reflinkSearch = wf(Zf.reflinkSearch, "g").replace("reflink", Zf.reflink).replace("nolink", Zf.nolink).getRegex(), Zf.normal = zf({}, Zf), Zf.pedantic = zf({}, Zf.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: wf(/^!?\[(label)\]\((.*?)\)/).replace("label", Zf._label).getRegex(), reflink: wf(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Zf._label).getRegex() }), Zf.gfm = zf({}, Zf.normal, { escape: wf(Zf.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), Zf.gfm.url = wf(Zf.gfm.url, "i").replace("email", Zf.gfm._extended_email).getRegex(), Zf.breaks = zf({}, Zf.gfm, { br: wf(Zf.br).replace("{2,}", "*").getRegex(), text: wf(Zf.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
  var Qf = function() {
    function e3(n3) {
      t2(this, e3), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = n3 || df, this.options.tokenizer = this.options.tokenizer || new Uf(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
      var r3 = { block: qf.normal, inline: Zf.normal };
      this.options.pedantic ? (r3.block = qf.pedantic, r3.inline = Zf.pedantic) : this.options.gfm && (r3.block = qf.gfm, this.options.breaks ? r3.inline = Zf.breaks : r3.inline = Zf.gfm), this.tokenizer.rules = r3;
    }
    return r2(e3, [{ key: "lex", value: function(e4) {
      var t3;
      for (e4 = e4.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e4, this.tokens); t3 = this.inlineQueue.shift(); )
        this.inlineTokens(t3.src, t3.tokens);
      return this.tokens;
    } }, { key: "blockTokens", value: function(e4) {
      var t3, n3, r3, u3, i3 = this, o3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      for (this.options.pedantic && (e4 = e4.replace(/^ +$/gm, "")); e4; )
        if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(n4) {
          return !!(t3 = n4.call({ lexer: i3 }, e4, o3)) && (e4 = e4.substring(t3.raw.length), o3.push(t3), true);
        }))) {
          if (t3 = this.tokenizer.space(e4))
            e4 = e4.substring(t3.raw.length), 1 === t3.raw.length && o3.length > 0 ? o3[o3.length - 1].raw += "\n" : o3.push(t3);
          else if (t3 = this.tokenizer.code(e4))
            e4 = e4.substring(t3.raw.length), !(n3 = o3[o3.length - 1]) || "paragraph" !== n3.type && "text" !== n3.type ? o3.push(t3) : (n3.raw += "\n" + t3.raw, n3.text += "\n" + t3.text, this.inlineQueue[this.inlineQueue.length - 1].src = n3.text);
          else if (t3 = this.tokenizer.fences(e4))
            e4 = e4.substring(t3.raw.length), o3.push(t3);
          else if (t3 = this.tokenizer.heading(e4))
            e4 = e4.substring(t3.raw.length), o3.push(t3);
          else if (t3 = this.tokenizer.hr(e4))
            e4 = e4.substring(t3.raw.length), o3.push(t3);
          else if (t3 = this.tokenizer.blockquote(e4))
            e4 = e4.substring(t3.raw.length), o3.push(t3);
          else if (t3 = this.tokenizer.list(e4))
            e4 = e4.substring(t3.raw.length), o3.push(t3);
          else if (t3 = this.tokenizer.html(e4))
            e4 = e4.substring(t3.raw.length), o3.push(t3);
          else if (t3 = this.tokenizer.def(e4))
            e4 = e4.substring(t3.raw.length), !(n3 = o3[o3.length - 1]) || "paragraph" !== n3.type && "text" !== n3.type ? this.tokens.links[t3.tag] || (this.tokens.links[t3.tag] = { href: t3.href, title: t3.title }) : (n3.raw += "\n" + t3.raw, n3.text += "\n" + t3.raw, this.inlineQueue[this.inlineQueue.length - 1].src = n3.text);
          else if (t3 = this.tokenizer.table(e4))
            e4 = e4.substring(t3.raw.length), o3.push(t3);
          else if (t3 = this.tokenizer.lheading(e4))
            e4 = e4.substring(t3.raw.length), o3.push(t3);
          else if (r3 = e4, this.options.extensions && this.options.extensions.startBlock && function() {
            var t4 = 1 / 0, n4 = e4.slice(1), u4 = void 0;
            i3.options.extensions.startBlock.forEach(function(e5) {
              "number" == typeof (u4 = e5.call({ lexer: this }, n4)) && u4 >= 0 && (t4 = Math.min(t4, u4));
            }), t4 < 1 / 0 && t4 >= 0 && (r3 = e4.substring(0, t4 + 1));
          }(), this.state.top && (t3 = this.tokenizer.paragraph(r3)))
            n3 = o3[o3.length - 1], u3 && "paragraph" === n3.type ? (n3.raw += "\n" + t3.raw, n3.text += "\n" + t3.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n3.text) : o3.push(t3), u3 = r3.length !== e4.length, e4 = e4.substring(t3.raw.length);
          else if (t3 = this.tokenizer.text(e4))
            e4 = e4.substring(t3.raw.length), (n3 = o3[o3.length - 1]) && "text" === n3.type ? (n3.raw += "\n" + t3.raw, n3.text += "\n" + t3.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n3.text) : o3.push(t3);
          else if (e4) {
            var a3 = "Infinite loop on byte: " + e4.charCodeAt(0);
            if (this.options.silent) {
              console.error(a3);
              break;
            }
            throw new Error(a3);
          }
        }
      return this.state.top = true, o3;
    } }, { key: "inline", value: function(e4, t3) {
      this.inlineQueue.push({ src: e4, tokens: t3 });
    } }, { key: "inlineTokens", value: function(e4) {
      var t3, n3, r3, u3, i3, o3, a3 = this, s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], l3 = e4;
      if (this.tokens.links) {
        var c3 = Object.keys(this.tokens.links);
        if (c3.length > 0)
          for (; null != (u3 = this.tokenizer.rules.inline.reflinkSearch.exec(l3)); )
            c3.includes(u3[0].slice(u3[0].lastIndexOf("[") + 1, -1)) && (l3 = l3.slice(0, u3.index) + "[" + Mf("a", u3[0].length - 2) + "]" + l3.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; null != (u3 = this.tokenizer.rules.inline.blockSkip.exec(l3)); )
        l3 = l3.slice(0, u3.index) + "[" + Mf("a", u3[0].length - 2) + "]" + l3.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      for (; null != (u3 = this.tokenizer.rules.inline.escapedEmSt.exec(l3)); )
        l3 = l3.slice(0, u3.index) + "++" + l3.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      for (; e4; )
        if (i3 || (o3 = ""), i3 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(n4) {
          return !!(t3 = n4.call({ lexer: a3 }, e4, s3)) && (e4 = e4.substring(t3.raw.length), s3.push(t3), true);
        })))
          if (t3 = this.tokenizer.escape(e4))
            e4 = e4.substring(t3.raw.length), s3.push(t3);
          else if (t3 = this.tokenizer.tag(e4))
            e4 = e4.substring(t3.raw.length), (n3 = s3[s3.length - 1]) && "text" === t3.type && "text" === n3.type ? (n3.raw += t3.raw, n3.text += t3.text) : s3.push(t3);
          else if (t3 = this.tokenizer.link(e4))
            e4 = e4.substring(t3.raw.length), s3.push(t3);
          else if (t3 = this.tokenizer.reflink(e4, this.tokens.links))
            e4 = e4.substring(t3.raw.length), (n3 = s3[s3.length - 1]) && "text" === t3.type && "text" === n3.type ? (n3.raw += t3.raw, n3.text += t3.text) : s3.push(t3);
          else if (t3 = this.tokenizer.emStrong(e4, l3, o3))
            e4 = e4.substring(t3.raw.length), s3.push(t3);
          else if (t3 = this.tokenizer.codespan(e4))
            e4 = e4.substring(t3.raw.length), s3.push(t3);
          else if (t3 = this.tokenizer.br(e4))
            e4 = e4.substring(t3.raw.length), s3.push(t3);
          else if (t3 = this.tokenizer.del(e4))
            e4 = e4.substring(t3.raw.length), s3.push(t3);
          else if (t3 = this.tokenizer.autolink(e4, Hf))
            e4 = e4.substring(t3.raw.length), s3.push(t3);
          else if (this.state.inLink || !(t3 = this.tokenizer.url(e4, Hf))) {
            if (r3 = e4, this.options.extensions && this.options.extensions.startInline && function() {
              var t4 = 1 / 0, n4 = e4.slice(1), u4 = void 0;
              a3.options.extensions.startInline.forEach(function(e5) {
                "number" == typeof (u4 = e5.call({ lexer: this }, n4)) && u4 >= 0 && (t4 = Math.min(t4, u4));
              }), t4 < 1 / 0 && t4 >= 0 && (r3 = e4.substring(0, t4 + 1));
            }(), t3 = this.tokenizer.inlineText(r3, Gf))
              e4 = e4.substring(t3.raw.length), "_" !== t3.raw.slice(-1) && (o3 = t3.raw.slice(-1)), i3 = true, (n3 = s3[s3.length - 1]) && "text" === n3.type ? (n3.raw += t3.raw, n3.text += t3.text) : s3.push(t3);
            else if (e4) {
              var f3 = "Infinite loop on byte: " + e4.charCodeAt(0);
              if (this.options.silent) {
                console.error(f3);
                break;
              }
              throw new Error(f3);
            }
          } else
            e4 = e4.substring(t3.raw.length), s3.push(t3);
      return s3;
    } }], [{ key: "rules", get: function() {
      return { block: qf, inline: Zf };
    } }, { key: "lex", value: function(t3, n3) {
      return new e3(n3).lex(t3);
    } }, { key: "lexInline", value: function(t3, n3) {
      return new e3(n3).inlineTokens(t3);
    } }]), e3;
  }();
  var Vf = function() {
    function e3(n3) {
      t2(this, e3), this.options = n3 || df;
    }
    return r2(e3, [{ key: "code", value: function(e4, t3, n3) {
      var r3 = (t3 || "").match(/\S*/)[0];
      if (this.options.highlight) {
        var u3 = this.options.highlight(e4, r3);
        null != u3 && u3 !== e4 && (n3 = true, e4 = u3);
      }
      return e4 = e4.replace(/\n$/, "") + "\n", r3 ? '<pre><code class="' + this.options.langPrefix + xf(r3, true) + '">' + (n3 ? e4 : xf(e4, true)) + "</code></pre>\n" : "<pre><code>" + (n3 ? e4 : xf(e4, true)) + "</code></pre>\n";
    } }, { key: "blockquote", value: function(e4) {
      return "<blockquote>\n" + e4 + "</blockquote>\n";
    } }, { key: "html", value: function(e4) {
      return e4;
    } }, { key: "heading", value: function(e4, t3, n3, r3) {
      return this.options.headerIds ? "<h" + t3 + ' id="' + this.options.headerPrefix + r3.slug(n3) + '">' + e4 + "</h" + t3 + ">\n" : "<h" + t3 + ">" + e4 + "</h" + t3 + ">\n";
    } }, { key: "hr", value: function() {
      return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
    } }, { key: "list", value: function(e4, t3, n3) {
      var r3 = t3 ? "ol" : "ul";
      return "<" + r3 + (t3 && 1 !== n3 ? ' start="' + n3 + '"' : "") + ">\n" + e4 + "</" + r3 + ">\n";
    } }, { key: "listitem", value: function(e4) {
      return "<li>" + e4 + "</li>\n";
    } }, { key: "checkbox", value: function(e4) {
      return "<input " + (e4 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
    } }, { key: "paragraph", value: function(e4) {
      return "<p>" + e4 + "</p>\n";
    } }, { key: "table", value: function(e4, t3) {
      return t3 && (t3 = "<tbody>" + t3 + "</tbody>"), "<table>\n<thead>\n" + e4 + "</thead>\n" + t3 + "</table>\n";
    } }, { key: "tablerow", value: function(e4) {
      return "<tr>\n" + e4 + "</tr>\n";
    } }, { key: "tablecell", value: function(e4, t3) {
      var n3 = t3.header ? "th" : "td";
      return (t3.align ? "<" + n3 + ' align="' + t3.align + '">' : "<" + n3 + ">") + e4 + "</" + n3 + ">\n";
    } }, { key: "strong", value: function(e4) {
      return "<strong>" + e4 + "</strong>";
    } }, { key: "em", value: function(e4) {
      return "<em>" + e4 + "</em>";
    } }, { key: "codespan", value: function(e4) {
      return "<code>" + e4 + "</code>";
    } }, { key: "br", value: function() {
      return this.options.xhtml ? "<br/>" : "<br>";
    } }, { key: "del", value: function(e4) {
      return "<del>" + e4 + "</del>";
    } }, { key: "link", value: function(e4, t3, n3) {
      if (null === (e4 = _f(this.options.sanitize, this.options.baseUrl, e4)))
        return n3;
      var r3 = '<a href="' + xf(e4) + '"';
      return t3 && (r3 += ' title="' + t3 + '"'), r3 += ">" + n3 + "</a>";
    } }, { key: "image", value: function(e4, t3, n3) {
      if (null === (e4 = _f(this.options.sanitize, this.options.baseUrl, e4)))
        return n3;
      var r3 = '<img src="' + e4 + '" alt="' + n3 + '"';
      return t3 && (r3 += ' title="' + t3 + '"'), r3 += this.options.xhtml ? "/>" : ">";
    } }, { key: "text", value: function(e4) {
      return e4;
    } }]), e3;
  }();
  var Yf = function() {
    function e3() {
      t2(this, e3);
    }
    return r2(e3, [{ key: "strong", value: function(e4) {
      return e4;
    } }, { key: "em", value: function(e4) {
      return e4;
    } }, { key: "codespan", value: function(e4) {
      return e4;
    } }, { key: "del", value: function(e4) {
      return e4;
    } }, { key: "html", value: function(e4) {
      return e4;
    } }, { key: "text", value: function(e4) {
      return e4;
    } }, { key: "link", value: function(e4, t3, n3) {
      return "" + n3;
    } }, { key: "image", value: function(e4, t3, n3) {
      return "" + n3;
    } }, { key: "br", value: function() {
      return "";
    } }]), e3;
  }();
  var Kf = function() {
    function e3() {
      t2(this, e3), this.seen = {};
    }
    return r2(e3, [{ key: "serialize", value: function(e4) {
      return e4.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
    } }, { key: "getNextSafeSlug", value: function(e4, t3) {
      var n3 = e4, r3 = 0;
      if (this.seen.hasOwnProperty(n3)) {
        r3 = this.seen[e4];
        do {
          n3 = e4 + "-" + ++r3;
        } while (this.seen.hasOwnProperty(n3));
      }
      return t3 || (this.seen[e4] = r3, this.seen[n3] = 0), n3;
    } }, { key: "slug", value: function(e4) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = this.serialize(e4);
      return this.getNextSafeSlug(n3, t3.dryrun);
    } }]), e3;
  }();
  var Xf = function() {
    function e3(n3) {
      t2(this, e3), this.options = n3 || df, this.options.renderer = this.options.renderer || new Vf(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Yf(), this.slugger = new Kf();
    }
    return r2(e3, [{ key: "parse", value: function(e4) {
      var t3, n3, r3, u3, i3, o3, a3, s3, l3, c3, f3, p3, h3, D3, g3, d3, v3, y3, A3, m3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], k3 = "", E3 = e4.length;
      for (t3 = 0; t3 < E3; t3++)
        if (c3 = e4[t3], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c3.type]) || false === (A3 = this.options.extensions.renderers[c3.type].call({ parser: this }, c3)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c3.type))
          switch (c3.type) {
            case "space":
              continue;
            case "hr":
              k3 += this.renderer.hr();
              continue;
            case "heading":
              k3 += this.renderer.heading(this.parseInline(c3.tokens), c3.depth, bf(this.parseInline(c3.tokens, this.textRenderer)), this.slugger);
              continue;
            case "code":
              k3 += this.renderer.code(c3.text, c3.lang, c3.escaped);
              continue;
            case "table":
              for (s3 = "", a3 = "", u3 = c3.header.length, n3 = 0; n3 < u3; n3++)
                a3 += this.renderer.tablecell(this.parseInline(c3.header[n3].tokens), { header: true, align: c3.align[n3] });
              for (s3 += this.renderer.tablerow(a3), l3 = "", u3 = c3.rows.length, n3 = 0; n3 < u3; n3++) {
                for (a3 = "", i3 = (o3 = c3.rows[n3]).length, r3 = 0; r3 < i3; r3++)
                  a3 += this.renderer.tablecell(this.parseInline(o3[r3].tokens), { header: false, align: c3.align[r3] });
                l3 += this.renderer.tablerow(a3);
              }
              k3 += this.renderer.table(s3, l3);
              continue;
            case "blockquote":
              l3 = this.parse(c3.tokens), k3 += this.renderer.blockquote(l3);
              continue;
            case "list":
              for (f3 = c3.ordered, p3 = c3.start, h3 = c3.loose, u3 = c3.items.length, l3 = "", n3 = 0; n3 < u3; n3++)
                d3 = (g3 = c3.items[n3]).checked, v3 = g3.task, D3 = "", g3.task && (y3 = this.renderer.checkbox(d3), h3 ? g3.tokens.length > 0 && "paragraph" === g3.tokens[0].type ? (g3.tokens[0].text = y3 + " " + g3.tokens[0].text, g3.tokens[0].tokens && g3.tokens[0].tokens.length > 0 && "text" === g3.tokens[0].tokens[0].type && (g3.tokens[0].tokens[0].text = y3 + " " + g3.tokens[0].tokens[0].text)) : g3.tokens.unshift({ type: "text", text: y3 }) : D3 += y3), D3 += this.parse(g3.tokens, h3), l3 += this.renderer.listitem(D3, v3, d3);
              k3 += this.renderer.list(l3, f3, p3);
              continue;
            case "html":
              k3 += this.renderer.html(c3.text);
              continue;
            case "paragraph":
              k3 += this.renderer.paragraph(this.parseInline(c3.tokens));
              continue;
            case "text":
              for (l3 = c3.tokens ? this.parseInline(c3.tokens) : c3.text; t3 + 1 < E3 && "text" === e4[t3 + 1].type; )
                l3 += "\n" + ((c3 = e4[++t3]).tokens ? this.parseInline(c3.tokens) : c3.text);
              k3 += m3 ? this.renderer.paragraph(l3) : l3;
              continue;
            default:
              var x3 = 'Token with "' + c3.type + '" type was not found.';
              if (this.options.silent)
                return void console.error(x3);
              throw new Error(x3);
          }
        else
          k3 += A3 || "";
      return k3;
    } }, { key: "parseInline", value: function(e4, t3) {
      t3 = t3 || this.renderer;
      var n3, r3, u3, i3 = "", o3 = e4.length;
      for (n3 = 0; n3 < o3; n3++)
        if (r3 = e4[n3], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r3.type]) || false === (u3 = this.options.extensions.renderers[r3.type].call({ parser: this }, r3)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r3.type))
          switch (r3.type) {
            case "escape":
              i3 += t3.text(r3.text);
              break;
            case "html":
              i3 += t3.html(r3.text);
              break;
            case "link":
              i3 += t3.link(r3.href, r3.title, this.parseInline(r3.tokens, t3));
              break;
            case "image":
              i3 += t3.image(r3.href, r3.title, r3.text);
              break;
            case "strong":
              i3 += t3.strong(this.parseInline(r3.tokens, t3));
              break;
            case "em":
              i3 += t3.em(this.parseInline(r3.tokens, t3));
              break;
            case "codespan":
              i3 += t3.codespan(r3.text);
              break;
            case "br":
              i3 += t3.br();
              break;
            case "del":
              i3 += t3.del(this.parseInline(r3.tokens, t3));
              break;
            case "text":
              i3 += t3.text(r3.text);
              break;
            default:
              var a3 = 'Token with "' + r3.type + '" type was not found.';
              if (this.options.silent)
                return void console.error(a3);
              throw new Error(a3);
          }
        else
          i3 += u3 || "";
      return i3;
    } }], [{ key: "parse", value: function(t3, n3) {
      return new e3(n3).parse(t3);
    } }, { key: "parseInline", value: function(t3, n3) {
      return new e3(n3).parseInline(t3);
    } }]), e3;
  }();
  function Wf(e3, t3, n3) {
    if (null == e3)
      throw new Error("marked(): input parameter is undefined or null");
    if ("string" != typeof e3)
      throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e3) + ", string expected");
    if ("function" == typeof t3 && (n3 = t3, t3 = null), Lf(t3 = zf({}, Wf.defaults, t3 || {})), n3) {
      var r3, u3 = t3.highlight;
      try {
        r3 = Qf.lex(e3, t3);
      } catch (e4) {
        return n3(e4);
      }
      var i3 = function(e4) {
        var i4;
        if (!e4)
          try {
            t3.walkTokens && Wf.walkTokens(r3, t3.walkTokens), i4 = Xf.parse(r3, t3);
          } catch (t4) {
            e4 = t4;
          }
        return t3.highlight = u3, e4 ? n3(e4) : n3(null, i4);
      };
      if (!u3 || u3.length < 3)
        return i3();
      if (delete t3.highlight, !r3.length)
        return i3();
      var o3 = 0;
      return Wf.walkTokens(r3, function(e4) {
        "code" === e4.type && (o3++, setTimeout(function() {
          u3(e4.text, e4.lang, function(t4, n4) {
            if (t4)
              return i3(t4);
            null != n4 && n4 !== e4.text && (e4.text = n4, e4.escaped = true), 0 === --o3 && i3();
          });
        }, 0));
      }), void (0 === o3 && i3());
    }
    try {
      var a3 = Qf.lex(e3, t3);
      return t3.walkTokens && Wf.walkTokens(a3, t3.walkTokens), Xf.parse(a3, t3);
    } catch (e4) {
      if (e4.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
        return "<p>An error occurred:</p><pre>" + xf(e4.message + "", true) + "</pre>";
      throw e4;
    }
  }
  Wf.options = Wf.setOptions = function(e3) {
    var t3;
    return zf(Wf.defaults, e3), t3 = Wf.defaults, df = t3, Wf;
  }, Wf.getDefaults = gf, Wf.defaults = df, Wf.use = function() {
    for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
      t3[n3] = arguments[n3];
    var r3, u3 = zf.apply(void 0, [{}].concat(t3)), i3 = Wf.defaults.extensions || { renderers: {}, childTokens: {} };
    t3.forEach(function(e4) {
      if (e4.extensions && (r3 = true, e4.extensions.forEach(function(e5) {
        if (!e5.name)
          throw new Error("extension name required");
        if (e5.renderer) {
          var t5 = i3.renderers ? i3.renderers[e5.name] : null;
          i3.renderers[e5.name] = t5 ? function() {
            for (var n4 = arguments.length, r4 = new Array(n4), u4 = 0; u4 < n4; u4++)
              r4[u4] = arguments[u4];
            var i4 = e5.renderer.apply(this, r4);
            return false === i4 && (i4 = t5.apply(this, r4)), i4;
          } : e5.renderer;
        }
        if (e5.tokenizer) {
          if (!e5.level || "block" !== e5.level && "inline" !== e5.level)
            throw new Error("extension level must be 'block' or 'inline'");
          i3[e5.level] ? i3[e5.level].unshift(e5.tokenizer) : i3[e5.level] = [e5.tokenizer], e5.start && ("block" === e5.level ? i3.startBlock ? i3.startBlock.push(e5.start) : i3.startBlock = [e5.start] : "inline" === e5.level && (i3.startInline ? i3.startInline.push(e5.start) : i3.startInline = [e5.start]));
        }
        e5.childTokens && (i3.childTokens[e5.name] = e5.childTokens);
      })), e4.renderer && function() {
        var t5 = Wf.defaults.renderer || new Vf(), n4 = function(n5) {
          var r5 = t5[n5];
          t5[n5] = function() {
            for (var u4 = arguments.length, i4 = new Array(u4), o3 = 0; o3 < u4; o3++)
              i4[o3] = arguments[o3];
            var a3 = e4.renderer[n5].apply(t5, i4);
            return false === a3 && (a3 = r5.apply(t5, i4)), a3;
          };
        };
        for (var r4 in e4.renderer)
          n4(r4);
        u3.renderer = t5;
      }(), e4.tokenizer && function() {
        var t5 = Wf.defaults.tokenizer || new Uf(), n4 = function(n5) {
          var r5 = t5[n5];
          t5[n5] = function() {
            for (var u4 = arguments.length, i4 = new Array(u4), o3 = 0; o3 < u4; o3++)
              i4[o3] = arguments[o3];
            var a3 = e4.tokenizer[n5].apply(t5, i4);
            return false === a3 && (a3 = r5.apply(t5, i4)), a3;
          };
        };
        for (var r4 in e4.tokenizer)
          n4(r4);
        u3.tokenizer = t5;
      }(), e4.walkTokens) {
        var t4 = Wf.defaults.walkTokens;
        u3.walkTokens = function(n4) {
          e4.walkTokens.call(this, n4), t4 && t4.call(this, n4);
        };
      }
      r3 && (u3.extensions = i3), Wf.setOptions(u3);
    });
  }, Wf.walkTokens = function(e3, t3) {
    var n3, r3 = l2(e3);
    try {
      var u3 = function() {
        var e4 = n3.value;
        switch (t3.call(Wf, e4), e4.type) {
          case "table":
            var r4, u4 = l2(e4.header);
            try {
              for (u4.s(); !(r4 = u4.n()).done; ) {
                var i3 = r4.value;
                Wf.walkTokens(i3.tokens, t3);
              }
            } catch (e5) {
              u4.e(e5);
            } finally {
              u4.f();
            }
            var o3, a3 = l2(e4.rows);
            try {
              for (a3.s(); !(o3 = a3.n()).done; ) {
                var s3, c3 = l2(o3.value);
                try {
                  for (c3.s(); !(s3 = c3.n()).done; ) {
                    var f3 = s3.value;
                    Wf.walkTokens(f3.tokens, t3);
                  }
                } catch (e5) {
                  c3.e(e5);
                } finally {
                  c3.f();
                }
              }
            } catch (e5) {
              a3.e(e5);
            } finally {
              a3.f();
            }
            break;
          case "list":
            Wf.walkTokens(e4.items, t3);
            break;
          default:
            Wf.defaults.extensions && Wf.defaults.extensions.childTokens && Wf.defaults.extensions.childTokens[e4.type] ? Wf.defaults.extensions.childTokens[e4.type].forEach(function(n4) {
              Wf.walkTokens(e4[n4], t3);
            }) : e4.tokens && Wf.walkTokens(e4.tokens, t3);
        }
      };
      for (r3.s(); !(n3 = r3.n()).done; )
        u3();
    } catch (e4) {
      r3.e(e4);
    } finally {
      r3.f();
    }
  }, Wf.parseInline = function(e3, t3) {
    if (null == e3)
      throw new Error("marked.parseInline(): input parameter is undefined or null");
    if ("string" != typeof e3)
      throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e3) + ", string expected");
    Lf(t3 = zf({}, Wf.defaults, t3 || {}));
    try {
      var n3 = Qf.lexInline(e3, t3);
      return t3.walkTokens && Wf.walkTokens(n3, t3.walkTokens), Xf.parseInline(n3, t3);
    } catch (e4) {
      if (e4.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
        return "<p>An error occurred:</p><pre>" + xf(e4.message + "", true) + "</pre>";
      throw e4;
    }
  }, Wf.Parser = Xf, Wf.parser = Xf.parse, Wf.Renderer = Vf, Wf.TextRenderer = Yf, Wf.Lexer = Qf, Wf.lexer = Qf.lex, Wf.Tokenizer = Uf, Wf.Slugger = Kf, Wf.parse = Wf;
  var Jf = /\[([\s\d,|-]*)\]/;
  var ep = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function markdown_esm_default() {
    var t3;
    function n3(e3) {
      var t4 = (e3.querySelector("[data-template]") || e3.querySelector("script") || e3).textContent, n4 = (t4 = t4.replace(new RegExp("__SCRIPT_END__", "g"), "<\/script>")).match(/^\n?(\s*)/)[1].length, r4 = t4.match(/^\n?(\t*)/)[1].length;
      return r4 > 0 ? t4 = t4.replace(new RegExp("\\n?\\t{" + r4 + "}", "g"), "\n") : n4 > 1 && (t4 = t4.replace(new RegExp("\\n? {" + n4 + "}", "g"), "\n")), t4;
    }
    function r3(e3) {
      for (var t4 = e3.attributes, n4 = [], r4 = 0, u3 = t4.length; r4 < u3; r4++) {
        var i3 = t4[r4].name, o4 = t4[r4].value;
        /data\-(markdown|separator|vertical|notes)/gi.test(i3) || (o4 ? n4.push(i3 + '="' + o4 + '"') : n4.push(i3));
      }
      return n4.join(" ");
    }
    function o3(e3) {
      return (e3 = e3 || {}).separator = e3.separator || "\r?\n---\r?\n", e3.notesSeparator = e3.notesSeparator || "notes?:", e3.attributes = e3.attributes || "", e3;
    }
    function a3(e3, t4) {
      t4 = o3(t4);
      var n4 = e3.split(new RegExp(t4.notesSeparator, "mgi"));
      return 2 === n4.length && (e3 = n4[0] + '<aside class="notes">' + Wf(n4[1].trim()) + "</aside>"), '<script type="text/template">' + (e3 = e3.replace(/<\/script>/g, "__SCRIPT_END__")) + "<\/script>";
    }
    function s3(e3, t4) {
      t4 = o3(t4);
      for (var n4, r4, u3, i3 = new RegExp(t4.separator + (t4.verticalSeparator ? "|" + t4.verticalSeparator : ""), "mg"), s4 = new RegExp(t4.separator), l4 = 0, c4 = true, f4 = []; n4 = i3.exec(e3); )
        !(r4 = s4.test(n4[0])) && c4 && f4.push([]), u3 = e3.substring(l4, n4.index), r4 && c4 ? f4.push(u3) : f4[f4.length - 1].push(u3), l4 = i3.lastIndex, c4 = r4;
      (c4 ? f4 : f4[f4.length - 1]).push(e3.substring(l4));
      for (var p4 = "", h3 = 0, D3 = f4.length; h3 < D3; h3++)
        f4[h3] instanceof Array ? (p4 += "<section " + t4.attributes + ">", f4[h3].forEach(function(e4) {
          p4 += "<section data-markdown>" + a3(e4, t4) + "</section>";
        }), p4 += "</section>") : p4 += "<section " + t4.attributes + " data-markdown>" + a3(f4[h3], t4) + "</section>";
      return p4;
    }
    function l3(e3) {
      return new Promise(function(t4) {
        var u3 = [];
        [].slice.call(e3.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(e4, t5) {
          e4.getAttribute("data-markdown").length ? u3.push(function(e5) {
            return new Promise(function(t6, n4) {
              var r4 = new XMLHttpRequest(), u4 = e5.getAttribute("data-markdown"), i3 = e5.getAttribute("data-charset");
              null != i3 && "" != i3 && r4.overrideMimeType("text/html; charset=" + i3), r4.onreadystatechange = function(e6, r5) {
                4 === r5.readyState && (r5.status >= 200 && r5.status < 300 || 0 === r5.status ? t6(r5, u4) : n4(r5, u4));
              }.bind(this, e5, r4), r4.open("GET", u4, true);
              try {
                r4.send();
              } catch (e6) {
                console.warn("Failed to get the Markdown file " + u4 + ". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. " + e6), t6(r4, u4);
              }
            });
          }(e4).then(function(t6, n4) {
            e4.outerHTML = s3(t6.responseText, { separator: e4.getAttribute("data-separator"), verticalSeparator: e4.getAttribute("data-separator-vertical"), notesSeparator: e4.getAttribute("data-separator-notes"), attributes: r3(e4) });
          }, function(t6, n4) {
            e4.outerHTML = '<section data-state="alert">ERROR: The attempt to fetch ' + n4 + " failed with HTTP status " + t6.status + ".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>";
          })) : e4.outerHTML = s3(n3(e4), { separator: e4.getAttribute("data-separator"), verticalSeparator: e4.getAttribute("data-separator-vertical"), notesSeparator: e4.getAttribute("data-separator-notes"), attributes: r3(e4) });
        }), Promise.all(u3).then(t4);
      });
    }
    function c3(e3, t4, n4) {
      var r4, u3, i3 = new RegExp(n4, "mg"), o4 = new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])', "mg"), a4 = e3.nodeValue;
      if (r4 = i3.exec(a4)) {
        var s4 = r4[1];
        for (a4 = a4.substring(0, r4.index) + a4.substring(i3.lastIndex), e3.nodeValue = a4; u3 = o4.exec(s4); )
          u3[2] ? t4.setAttribute(u3[1], u3[2]) : t4.setAttribute(u3[3], "");
        return true;
      }
      return false;
    }
    function f3(e3, t4, n4, r4, u3) {
      if (null != t4 && null != t4.childNodes && t4.childNodes.length > 0)
        for (var i3 = t4, o4 = 0; o4 < t4.childNodes.length; o4++) {
          var a4 = t4.childNodes[o4];
          if (o4 > 0)
            for (var s4 = o4 - 1; s4 >= 0; ) {
              var l4 = t4.childNodes[s4];
              if ("function" == typeof l4.setAttribute && "BR" != l4.tagName) {
                i3 = l4;
                break;
              }
              s4 -= 1;
            }
          var p4 = e3;
          "section" == a4.nodeName && (p4 = a4, i3 = a4), "function" != typeof a4.setAttribute && a4.nodeType != Node.COMMENT_NODE || f3(p4, a4, i3, r4, u3);
        }
      t4.nodeType == Node.COMMENT_NODE && 0 == c3(t4, n4, r4) && c3(t4, e3, u3);
    }
    function p3() {
      var e3 = t3.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");
      return [].slice.call(e3).forEach(function(e4) {
        e4.setAttribute("data-markdown-parsed", true);
        var t4 = e4.querySelector("aside.notes"), r4 = n3(e4);
        e4.innerHTML = Wf(r4), f3(e4, e4, null, e4.getAttribute("data-element-attributes") || e4.parentNode.getAttribute("data-element-attributes") || "\\.element\\s*?(.+?)$", e4.getAttribute("data-attributes") || e4.parentNode.getAttribute("data-attributes") || "\\.slide:\\s*?(\\S.+?)$"), t4 && e4.appendChild(t4);
      }), Promise.resolve();
    }
    return { id: "markdown", init: function(n4) {
      var r4 = (t3 = n4).getConfig().markdown || {}, o4 = r4.renderer, a4 = r4.animateLists, s4 = i2(r4, ["renderer", "animateLists"]);
      return o4 || ((o4 = new Wf.Renderer()).code = function(e3, t4) {
        var n5 = "";
        return Jf.test(t4) && (n5 = t4.match(Jf)[1].trim(), n5 = 'data-line-numbers="'.concat(n5, '"'), t4 = t4.replace(Jf, "").trim()), e3 = e3.replace(/([&<>'"])/g, function(e4) {
          return ep[e4];
        }), "<pre><code ".concat(n5, ' class="').concat(t4, '">').concat(e3, "</code></pre>");
      }), true === a4 && (o4.listitem = function(e3) {
        return '<li class="fragment">'.concat(e3, "</li>");
      }), Wf.setOptions(function(t4) {
        for (var n5 = 1; n5 < arguments.length; n5++) {
          var r5 = null != arguments[n5] ? arguments[n5] : {};
          n5 % 2 ? e2(Object(r5), true).forEach(function(e3) {
            u2(t4, e3, r5[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t4, Object.getOwnPropertyDescriptors(r5)) : e2(Object(r5)).forEach(function(e3) {
            Object.defineProperty(t4, e3, Object.getOwnPropertyDescriptor(r5, e3));
          });
        }
        return t4;
      }({ renderer: o4 }, s4)), l3(t3.getRevealElement()).then(p3);
    }, processSlides: l3, convertSlides: p3, slidify: s3, marked: Wf };
  }

  // practicas-2022/index.js
  var deck = new reveal_esm_default({
    plugins: [markdown_esm_default]
  });
  deck.initialize();
})();
/*!
* reveal.js 4.3.1
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
*/
