/*! For license information please see main.a825c562.js.LICENSE.txt */
!(function () {
  var e = {
      524: function (e) {
        e.exports = (function (e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var a = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var a in e)
                  n.d(
                    r,
                    a,
                    function (t) {
                      return e[t];
                    }.bind(null, a)
                  );
              return r;
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 90))
          );
        })({
          17: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r = n(18),
              a = (function () {
                function e() {}
                return (
                  (e.getFirstMatch = function (e, t) {
                    var n = t.match(e);
                    return (n && n.length > 0 && n[1]) || "";
                  }),
                  (e.getSecondMatch = function (e, t) {
                    var n = t.match(e);
                    return (n && n.length > 1 && n[2]) || "";
                  }),
                  (e.matchAndReturnConst = function (e, t, n) {
                    if (e.test(t)) return n;
                  }),
                  (e.getWindowsVersionName = function (e) {
                    switch (e) {
                      case "NT":
                        return "NT";
                      case "XP":
                      case "NT 5.1":
                        return "XP";
                      case "NT 5.0":
                        return "2000";
                      case "NT 5.2":
                        return "2003";
                      case "NT 6.0":
                        return "Vista";
                      case "NT 6.1":
                        return "7";
                      case "NT 6.2":
                        return "8";
                      case "NT 6.3":
                        return "8.1";
                      case "NT 10.0":
                        return "10";
                      default:
                        return;
                    }
                  }),
                  (e.getMacOSVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), 10 === t[0]))
                      switch (t[1]) {
                        case 5:
                          return "Leopard";
                        case 6:
                          return "Snow Leopard";
                        case 7:
                          return "Lion";
                        case 8:
                          return "Mountain Lion";
                        case 9:
                          return "Mavericks";
                        case 10:
                          return "Yosemite";
                        case 11:
                          return "El Capitan";
                        case 12:
                          return "Sierra";
                        case 13:
                          return "High Sierra";
                        case 14:
                          return "Mojave";
                        case 15:
                          return "Catalina";
                        default:
                          return;
                      }
                  }),
                  (e.getAndroidVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                      return 1 === t[0] && t[1] < 6
                        ? "Cupcake"
                        : 1 === t[0] && t[1] >= 6
                        ? "Donut"
                        : 2 === t[0] && t[1] < 2
                        ? "Eclair"
                        : 2 === t[0] && 2 === t[1]
                        ? "Froyo"
                        : 2 === t[0] && t[1] > 2
                        ? "Gingerbread"
                        : 3 === t[0]
                        ? "Honeycomb"
                        : 4 === t[0] && t[1] < 1
                        ? "Ice Cream Sandwich"
                        : 4 === t[0] && t[1] < 4
                        ? "Jelly Bean"
                        : 4 === t[0] && t[1] >= 4
                        ? "KitKat"
                        : 5 === t[0]
                        ? "Lollipop"
                        : 6 === t[0]
                        ? "Marshmallow"
                        : 7 === t[0]
                        ? "Nougat"
                        : 8 === t[0]
                        ? "Oreo"
                        : 9 === t[0]
                        ? "Pie"
                        : void 0;
                  }),
                  (e.getVersionPrecision = function (e) {
                    return e.split(".").length;
                  }),
                  (e.compareVersions = function (t, n, r) {
                    void 0 === r && (r = !1);
                    var a = e.getVersionPrecision(t),
                      i = e.getVersionPrecision(n),
                      s = Math.max(a, i),
                      o = 0,
                      l = e.map([t, n], function (t) {
                        var n = s - e.getVersionPrecision(t),
                          r = t + new Array(n + 1).join(".0");
                        return e
                          .map(r.split("."), function (e) {
                            return new Array(20 - e.length).join("0") + e;
                          })
                          .reverse();
                      });
                    for (r && (o = s - Math.min(a, i)), s -= 1; s >= o; ) {
                      if (l[0][s] > l[1][s]) return 1;
                      if (l[0][s] === l[1][s]) {
                        if (s === o) return 0;
                        s -= 1;
                      } else if (l[0][s] < l[1][s]) return -1;
                    }
                  }),
                  (e.map = function (e, t) {
                    var n,
                      r = [];
                    if (Array.prototype.map)
                      return Array.prototype.map.call(e, t);
                    for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
                    return r;
                  }),
                  (e.find = function (e, t) {
                    var n, r;
                    if (Array.prototype.find)
                      return Array.prototype.find.call(e, t);
                    for (n = 0, r = e.length; n < r; n += 1) {
                      var a = e[n];
                      if (t(a, n)) return a;
                    }
                  }),
                  (e.assign = function (e) {
                    for (
                      var t,
                        n,
                        r = e,
                        a = arguments.length,
                        i = new Array(a > 1 ? a - 1 : 0),
                        s = 1;
                      s < a;
                      s++
                    )
                      i[s - 1] = arguments[s];
                    if (Object.assign)
                      return Object.assign.apply(Object, [e].concat(i));
                    var o = function () {
                      var e = i[t];
                      "object" == typeof e &&
                        null !== e &&
                        Object.keys(e).forEach(function (t) {
                          r[t] = e[t];
                        });
                    };
                    for (t = 0, n = i.length; t < n; t += 1) o();
                    return e;
                  }),
                  (e.getBrowserAlias = function (e) {
                    return r.BROWSER_ALIASES_MAP[e];
                  }),
                  (e.getBrowserTypeByAlias = function (e) {
                    return r.BROWSER_MAP[e] || "";
                  }),
                  e
                );
              })();
            (t.default = a), (e.exports = t.default);
          },
          18: function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
              (t.ENGINE_MAP =
                t.OS_MAP =
                t.PLATFORMS_MAP =
                t.BROWSER_MAP =
                t.BROWSER_ALIASES_MAP =
                  void 0),
              (t.BROWSER_ALIASES_MAP = {
                "Amazon Silk": "amazon_silk",
                "Android Browser": "android",
                Bada: "bada",
                BlackBerry: "blackberry",
                Chrome: "chrome",
                Chromium: "chromium",
                Electron: "electron",
                Epiphany: "epiphany",
                Firefox: "firefox",
                Focus: "focus",
                Generic: "generic",
                "Google Search": "google_search",
                Googlebot: "googlebot",
                "Internet Explorer": "ie",
                "K-Meleon": "k_meleon",
                Maxthon: "maxthon",
                "Microsoft Edge": "edge",
                "MZ Browser": "mz",
                "NAVER Whale Browser": "naver",
                Opera: "opera",
                "Opera Coast": "opera_coast",
                PhantomJS: "phantomjs",
                Puffin: "puffin",
                QupZilla: "qupzilla",
                QQ: "qq",
                QQLite: "qqlite",
                Safari: "safari",
                Sailfish: "sailfish",
                "Samsung Internet for Android": "samsung_internet",
                SeaMonkey: "seamonkey",
                Sleipnir: "sleipnir",
                Swing: "swing",
                Tizen: "tizen",
                "UC Browser": "uc",
                Vivaldi: "vivaldi",
                "WebOS Browser": "webos",
                WeChat: "wechat",
                "Yandex Browser": "yandex",
                Roku: "roku",
              }),
              (t.BROWSER_MAP = {
                amazon_silk: "Amazon Silk",
                android: "Android Browser",
                bada: "Bada",
                blackberry: "BlackBerry",
                chrome: "Chrome",
                chromium: "Chromium",
                electron: "Electron",
                epiphany: "Epiphany",
                firefox: "Firefox",
                focus: "Focus",
                generic: "Generic",
                googlebot: "Googlebot",
                google_search: "Google Search",
                ie: "Internet Explorer",
                k_meleon: "K-Meleon",
                maxthon: "Maxthon",
                edge: "Microsoft Edge",
                mz: "MZ Browser",
                naver: "NAVER Whale Browser",
                opera: "Opera",
                opera_coast: "Opera Coast",
                phantomjs: "PhantomJS",
                puffin: "Puffin",
                qupzilla: "QupZilla",
                qq: "QQ Browser",
                qqlite: "QQ Browser Lite",
                safari: "Safari",
                sailfish: "Sailfish",
                samsung_internet: "Samsung Internet for Android",
                seamonkey: "SeaMonkey",
                sleipnir: "Sleipnir",
                swing: "Swing",
                tizen: "Tizen",
                uc: "UC Browser",
                vivaldi: "Vivaldi",
                webos: "WebOS Browser",
                wechat: "WeChat",
                yandex: "Yandex Browser",
              }),
              (t.PLATFORMS_MAP = {
                tablet: "tablet",
                mobile: "mobile",
                desktop: "desktop",
                tv: "tv",
              }),
              (t.OS_MAP = {
                WindowsPhone: "Windows Phone",
                Windows: "Windows",
                MacOS: "macOS",
                iOS: "iOS",
                Android: "Android",
                WebOS: "WebOS",
                BlackBerry: "BlackBerry",
                Bada: "Bada",
                Tizen: "Tizen",
                Linux: "Linux",
                ChromeOS: "Chrome OS",
                PlayStation4: "PlayStation 4",
                Roku: "Roku",
              }),
              (t.ENGINE_MAP = {
                EdgeHTML: "EdgeHTML",
                Blink: "Blink",
                Trident: "Trident",
                Presto: "Presto",
                Gecko: "Gecko",
                WebKit: "WebKit",
              });
          },
          90: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              a = (r = n(91)) && r.__esModule ? r : { default: r },
              i = n(18);
            function s(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            var o = (function () {
              function e() {}
              var t, n, r;
              return (
                (e.getParser = function (e, t) {
                  if ((void 0 === t && (t = !1), "string" != typeof e))
                    throw new Error("UserAgent should be a string");
                  return new a.default(e, t);
                }),
                (e.parse = function (e) {
                  return new a.default(e).getResult();
                }),
                (t = e),
                (r = [
                  {
                    key: "BROWSER_MAP",
                    get: function () {
                      return i.BROWSER_MAP;
                    },
                  },
                  {
                    key: "ENGINE_MAP",
                    get: function () {
                      return i.ENGINE_MAP;
                    },
                  },
                  {
                    key: "OS_MAP",
                    get: function () {
                      return i.OS_MAP;
                    },
                  },
                  {
                    key: "PLATFORMS_MAP",
                    get: function () {
                      return i.PLATFORMS_MAP;
                    },
                  },
                ]),
                (n = null) && s(t.prototype, n),
                r && s(t, r),
                e
              );
            })();
            (t.default = o), (e.exports = t.default);
          },
          91: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r = l(n(92)),
              a = l(n(93)),
              i = l(n(94)),
              s = l(n(95)),
              o = l(n(17));
            function l(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var c = (function () {
              function e(e, t) {
                if ((void 0 === t && (t = !1), null == e || "" === e))
                  throw new Error("UserAgent parameter can't be empty");
                (this._ua = e),
                  (this.parsedResult = {}),
                  !0 !== t && this.parse();
              }
              var t = e.prototype;
              return (
                (t.getUA = function () {
                  return this._ua;
                }),
                (t.test = function (e) {
                  return e.test(this._ua);
                }),
                (t.parseBrowser = function () {
                  var e = this;
                  this.parsedResult.browser = {};
                  var t = o.default.find(r.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.browser = t.describe(this.getUA())),
                    this.parsedResult.browser
                  );
                }),
                (t.getBrowser = function () {
                  return this.parsedResult.browser
                    ? this.parsedResult.browser
                    : this.parseBrowser();
                }),
                (t.getBrowserName = function (e) {
                  return e
                    ? String(this.getBrowser().name).toLowerCase() || ""
                    : this.getBrowser().name || "";
                }),
                (t.getBrowserVersion = function () {
                  return this.getBrowser().version;
                }),
                (t.getOS = function () {
                  return this.parsedResult.os
                    ? this.parsedResult.os
                    : this.parseOS();
                }),
                (t.parseOS = function () {
                  var e = this;
                  this.parsedResult.os = {};
                  var t = o.default.find(a.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.os = t.describe(this.getUA())),
                    this.parsedResult.os
                  );
                }),
                (t.getOSName = function (e) {
                  var t = this.getOS().name;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.getOSVersion = function () {
                  return this.getOS().version;
                }),
                (t.getPlatform = function () {
                  return this.parsedResult.platform
                    ? this.parsedResult.platform
                    : this.parsePlatform();
                }),
                (t.getPlatformType = function (e) {
                  void 0 === e && (e = !1);
                  var t = this.getPlatform().type;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.parsePlatform = function () {
                  var e = this;
                  this.parsedResult.platform = {};
                  var t = o.default.find(i.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t &&
                      (this.parsedResult.platform = t.describe(this.getUA())),
                    this.parsedResult.platform
                  );
                }),
                (t.getEngine = function () {
                  return this.parsedResult.engine
                    ? this.parsedResult.engine
                    : this.parseEngine();
                }),
                (t.getEngineName = function (e) {
                  return e
                    ? String(this.getEngine().name).toLowerCase() || ""
                    : this.getEngine().name || "";
                }),
                (t.parseEngine = function () {
                  var e = this;
                  this.parsedResult.engine = {};
                  var t = o.default.find(s.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.engine = t.describe(this.getUA())),
                    this.parsedResult.engine
                  );
                }),
                (t.parse = function () {
                  return (
                    this.parseBrowser(),
                    this.parseOS(),
                    this.parsePlatform(),
                    this.parseEngine(),
                    this
                  );
                }),
                (t.getResult = function () {
                  return o.default.assign({}, this.parsedResult);
                }),
                (t.satisfies = function (e) {
                  var t = this,
                    n = {},
                    r = 0,
                    a = {},
                    i = 0;
                  if (
                    (Object.keys(e).forEach(function (t) {
                      var s = e[t];
                      "string" == typeof s
                        ? ((a[t] = s), (i += 1))
                        : "object" == typeof s && ((n[t] = s), (r += 1));
                    }),
                    r > 0)
                  ) {
                    var s = Object.keys(n),
                      l = o.default.find(s, function (e) {
                        return t.isOS(e);
                      });
                    if (l) {
                      var c = this.satisfies(n[l]);
                      if (void 0 !== c) return c;
                    }
                    var u = o.default.find(s, function (e) {
                      return t.isPlatform(e);
                    });
                    if (u) {
                      var d = this.satisfies(n[u]);
                      if (void 0 !== d) return d;
                    }
                  }
                  if (i > 0) {
                    var p = Object.keys(a),
                      f = o.default.find(p, function (e) {
                        return t.isBrowser(e, !0);
                      });
                    if (void 0 !== f) return this.compareVersion(a[f]);
                  }
                }),
                (t.isBrowser = function (e, t) {
                  void 0 === t && (t = !1);
                  var n = this.getBrowserName().toLowerCase(),
                    r = e.toLowerCase(),
                    a = o.default.getBrowserTypeByAlias(r);
                  return t && a && (r = a.toLowerCase()), r === n;
                }),
                (t.compareVersion = function (e) {
                  var t = [0],
                    n = e,
                    r = !1,
                    a = this.getBrowserVersion();
                  if ("string" == typeof a)
                    return (
                      ">" === e[0] || "<" === e[0]
                        ? ((n = e.substr(1)),
                          "=" === e[1]
                            ? ((r = !0), (n = e.substr(2)))
                            : (t = []),
                          ">" === e[0] ? t.push(1) : t.push(-1))
                        : "=" === e[0]
                        ? (n = e.substr(1))
                        : "~" === e[0] && ((r = !0), (n = e.substr(1))),
                      t.indexOf(o.default.compareVersions(a, n, r)) > -1
                    );
                }),
                (t.isOS = function (e) {
                  return this.getOSName(!0) === String(e).toLowerCase();
                }),
                (t.isPlatform = function (e) {
                  return this.getPlatformType(!0) === String(e).toLowerCase();
                }),
                (t.isEngine = function (e) {
                  return this.getEngineName(!0) === String(e).toLowerCase();
                }),
                (t.is = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                  );
                }),
                (t.some = function (e) {
                  var t = this;
                  return (
                    void 0 === e && (e = []),
                    e.some(function (e) {
                      return t.is(e);
                    })
                  );
                }),
                e
              );
            })();
            (t.default = c), (e.exports = t.default);
          },
          92: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              a = (r = n(17)) && r.__esModule ? r : { default: r },
              i = /version\/(\d+(\.?_?\d+)+)/i,
              s = [
                {
                  test: [/googlebot/i],
                  describe: function (e) {
                    var t = { name: "Googlebot" },
                      n =
                        a.default.getFirstMatch(
                          /googlebot\/(\d+(\.\d+))/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/opera/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/opr\/|opios/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      n =
                        a.default.getFirstMatch(
                          /(?:opr|opios)[\s/](\S+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/SamsungBrowser/i],
                  describe: function (e) {
                    var t = { name: "Samsung Internet for Android" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/Whale/i],
                  describe: function (e) {
                    var t = { name: "NAVER Whale Browser" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/MZBrowser/i],
                  describe: function (e) {
                    var t = { name: "MZ Browser" },
                      n =
                        a.default.getFirstMatch(
                          /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/focus/i],
                  describe: function (e) {
                    var t = { name: "Focus" },
                      n =
                        a.default.getFirstMatch(
                          /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/swing/i],
                  describe: function (e) {
                    var t = { name: "Swing" },
                      n =
                        a.default.getFirstMatch(
                          /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/coast/i],
                  describe: function (e) {
                    var t = { name: "Opera Coast" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/opt\/\d+(?:.?_?\d+)+/i],
                  describe: function (e) {
                    var t = { name: "Opera Touch" },
                      n =
                        a.default.getFirstMatch(
                          /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/yabrowser/i],
                  describe: function (e) {
                    var t = { name: "Yandex Browser" },
                      n =
                        a.default.getFirstMatch(
                          /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/ucbrowser/i],
                  describe: function (e) {
                    var t = { name: "UC Browser" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/Maxthon|mxios/i],
                  describe: function (e) {
                    var t = { name: "Maxthon" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/epiphany/i],
                  describe: function (e) {
                    var t = { name: "Epiphany" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/puffin/i],
                  describe: function (e) {
                    var t = { name: "Puffin" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/sleipnir/i],
                  describe: function (e) {
                    var t = { name: "Sleipnir" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/k-meleon/i],
                  describe: function (e) {
                    var t = { name: "K-Meleon" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/micromessenger/i],
                  describe: function (e) {
                    var t = { name: "WeChat" },
                      n =
                        a.default.getFirstMatch(
                          /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/qqbrowser/i],
                  describe: function (e) {
                    var t = {
                        name: /qqbrowserlite/i.test(e)
                          ? "QQ Browser Lite"
                          : "QQ Browser",
                      },
                      n =
                        a.default.getFirstMatch(
                          /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/msie|trident/i],
                  describe: function (e) {
                    var t = { name: "Internet Explorer" },
                      n = a.default.getFirstMatch(
                        /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/\sedg\//i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      n = a.default.getFirstMatch(
                        /\sedg\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/edg([ea]|ios)/i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      n = a.default.getSecondMatch(
                        /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/vivaldi/i],
                  describe: function (e) {
                    var t = { name: "Vivaldi" },
                      n = a.default.getFirstMatch(
                        /vivaldi\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/seamonkey/i],
                  describe: function (e) {
                    var t = { name: "SeaMonkey" },
                      n = a.default.getFirstMatch(
                        /seamonkey\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/sailfish/i],
                  describe: function (e) {
                    var t = { name: "Sailfish" },
                      n = a.default.getFirstMatch(
                        /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/silk/i],
                  describe: function (e) {
                    var t = { name: "Amazon Silk" },
                      n = a.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/phantom/i],
                  describe: function (e) {
                    var t = { name: "PhantomJS" },
                      n = a.default.getFirstMatch(
                        /phantomjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/slimerjs/i],
                  describe: function (e) {
                    var t = { name: "SlimerJS" },
                      n = a.default.getFirstMatch(
                        /slimerjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t = { name: "BlackBerry" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = { name: "WebOS Browser" },
                      n =
                        a.default.getFirstMatch(i, e) ||
                        a.default.getFirstMatch(
                          /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = { name: "Bada" },
                      n = a.default.getFirstMatch(
                        /dolfin\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = { name: "Tizen" },
                      n =
                        a.default.getFirstMatch(
                          /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/qupzilla/i],
                  describe: function (e) {
                    var t = { name: "QupZilla" },
                      n =
                        a.default.getFirstMatch(
                          /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/firefox|iceweasel|fxios/i],
                  describe: function (e) {
                    var t = { name: "Firefox" },
                      n = a.default.getFirstMatch(
                        /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/electron/i],
                  describe: function (e) {
                    var t = { name: "Electron" },
                      n = a.default.getFirstMatch(
                        /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/MiuiBrowser/i],
                  describe: function (e) {
                    var t = { name: "Miui" },
                      n = a.default.getFirstMatch(
                        /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/chromium/i],
                  describe: function (e) {
                    var t = { name: "Chromium" },
                      n =
                        a.default.getFirstMatch(
                          /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/chrome|crios|crmo/i],
                  describe: function (e) {
                    var t = { name: "Chrome" },
                      n = a.default.getFirstMatch(
                        /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/GSA/i],
                  describe: function (e) {
                    var t = { name: "Google Search" },
                      n = a.default.getFirstMatch(
                        /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      n = e.test(/android/i);
                    return t && n;
                  },
                  describe: function (e) {
                    var t = { name: "Android Browser" },
                      n = a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/playstation 4/i],
                  describe: function (e) {
                    var t = { name: "PlayStation 4" },
                      n = a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/safari|applewebkit/i],
                  describe: function (e) {
                    var t = { name: "Safari" },
                      n = a.default.getFirstMatch(i, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/.*/i],
                  describe: function (e) {
                    var t =
                      -1 !== e.search("\\(")
                        ? /^(.*)\/(.*)[ \t]\((.*)/
                        : /^(.*)\/(.*) /;
                    return {
                      name: a.default.getFirstMatch(t, e),
                      version: a.default.getSecondMatch(t, e),
                    };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          93: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              a = (r = n(17)) && r.__esModule ? r : { default: r },
              i = n(18),
              s = [
                {
                  test: [/Roku\/DVP/],
                  describe: function (e) {
                    var t = a.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                    return { name: i.OS_MAP.Roku, version: t };
                  },
                },
                {
                  test: [/windows phone/i],
                  describe: function (e) {
                    var t = a.default.getFirstMatch(
                      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: i.OS_MAP.WindowsPhone, version: t };
                  },
                },
                {
                  test: [/windows /i],
                  describe: function (e) {
                    var t = a.default.getFirstMatch(
                        /Windows ((NT|XP)( \d\d?.\d)?)/i,
                        e
                      ),
                      n = a.default.getWindowsVersionName(t);
                    return {
                      name: i.OS_MAP.Windows,
                      version: t,
                      versionName: n,
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function (e) {
                    var t = { name: i.OS_MAP.iOS },
                      n = a.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/macintosh/i],
                  describe: function (e) {
                    var t = a.default
                        .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                        .replace(/[_\s]/g, "."),
                      n = a.default.getMacOSVersionName(t),
                      r = { name: i.OS_MAP.MacOS, version: t };
                    return n && (r.versionName = n), r;
                  },
                },
                {
                  test: [/(ipod|iphone|ipad)/i],
                  describe: function (e) {
                    var t = a.default
                      .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                      .replace(/[_\s]/g, ".");
                    return { name: i.OS_MAP.iOS, version: t };
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      n = e.test(/android/i);
                    return t && n;
                  },
                  describe: function (e) {
                    var t = a.default.getFirstMatch(
                        /android[\s/-](\d+(\.\d+)*)/i,
                        e
                      ),
                      n = a.default.getAndroidVersionName(t),
                      r = { name: i.OS_MAP.Android, version: t };
                    return n && (r.versionName = n), r;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = a.default.getFirstMatch(
                        /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                        e
                      ),
                      n = { name: i.OS_MAP.WebOS };
                    return t && t.length && (n.version = t), n;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t =
                      a.default.getFirstMatch(
                        /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                        e
                      ) ||
                      a.default.getFirstMatch(
                        /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                        e
                      ) ||
                      a.default.getFirstMatch(/\bbb(\d+)/i, e);
                    return { name: i.OS_MAP.BlackBerry, version: t };
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = a.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                    return { name: i.OS_MAP.Bada, version: t };
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = a.default.getFirstMatch(
                      /tizen[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: i.OS_MAP.Tizen, version: t };
                  },
                },
                {
                  test: [/linux/i],
                  describe: function () {
                    return { name: i.OS_MAP.Linux };
                  },
                },
                {
                  test: [/CrOS/],
                  describe: function () {
                    return { name: i.OS_MAP.ChromeOS };
                  },
                },
                {
                  test: [/PlayStation 4/],
                  describe: function (e) {
                    var t = a.default.getFirstMatch(
                      /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: i.OS_MAP.PlayStation4, version: t };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          94: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              a = (r = n(17)) && r.__esModule ? r : { default: r },
              i = n(18),
              s = [
                {
                  test: [/googlebot/i],
                  describe: function () {
                    return { type: "bot", vendor: "Google" };
                  },
                },
                {
                  test: [/huawei/i],
                  describe: function (e) {
                    var t = a.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                      n = { type: i.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                    return t && (n.model = t), n;
                  },
                },
                {
                  test: [/nexus\s*(?:7|8|9|10).*/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                  },
                },
                {
                  test: [/ipad/i],
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/kftt build/i],
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.tablet,
                      vendor: "Amazon",
                      model: "Kindle Fire HD 7",
                    };
                  },
                },
                {
                  test: [/silk/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                  },
                },
                {
                  test: [/tablet(?! pc)/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/ipod|iphone/i),
                      n = e.test(/like (ipod|iphone)/i);
                    return t && !n;
                  },
                  describe: function (e) {
                    var t = a.default.getFirstMatch(/(ipod|iphone)/i, e);
                    return {
                      type: i.PLATFORMS_MAP.mobile,
                      vendor: "Apple",
                      model: t,
                    };
                  },
                },
                {
                  test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                  },
                },
                {
                  test: [/[^-]mobi/i],
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "blackberry" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.mobile,
                      vendor: "BlackBerry",
                    };
                  },
                },
                {
                  test: function (e) {
                    return "bada" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "windows phone" === e.getBrowserName();
                  },
                  describe: function () {
                    return {
                      type: i.PLATFORMS_MAP.mobile,
                      vendor: "Microsoft",
                    };
                  },
                },
                {
                  test: function (e) {
                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                    return "android" === e.getOSName(!0) && t >= 3;
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    return "android" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "macos" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.desktop, vendor: "Apple" };
                  },
                },
                {
                  test: function (e) {
                    return "windows" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "linux" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "playstation 4" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tv };
                  },
                },
                {
                  test: function (e) {
                    return "roku" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: i.PLATFORMS_MAP.tv };
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
          95: function (e, t, n) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var r,
              a = (r = n(17)) && r.__esModule ? r : { default: r },
              i = n(18),
              s = [
                {
                  test: function (e) {
                    return "microsoft edge" === e.getBrowserName(!0);
                  },
                  describe: function (e) {
                    if (/\sedg\//i.test(e)) return { name: i.ENGINE_MAP.Blink };
                    var t = a.default.getFirstMatch(
                      /edge\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                    return { name: i.ENGINE_MAP.EdgeHTML, version: t };
                  },
                },
                {
                  test: [/trident/i],
                  describe: function (e) {
                    var t = { name: i.ENGINE_MAP.Trident },
                      n = a.default.getFirstMatch(
                        /trident\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: function (e) {
                    return e.test(/presto/i);
                  },
                  describe: function (e) {
                    var t = { name: i.ENGINE_MAP.Presto },
                      n = a.default.getFirstMatch(
                        /presto\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/gecko/i),
                      n = e.test(/like gecko/i);
                    return t && !n;
                  },
                  describe: function (e) {
                    var t = { name: i.ENGINE_MAP.Gecko },
                      n = a.default.getFirstMatch(
                        /gecko\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
                {
                  test: [/(apple)?webkit\/537\.36/i],
                  describe: function () {
                    return { name: i.ENGINE_MAP.Blink };
                  },
                },
                {
                  test: [/(apple)?webkit/i],
                  describe: function (e) {
                    var t = { name: i.ENGINE_MAP.WebKit },
                      n = a.default.getFirstMatch(
                        /webkit\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return n && (t.version = n), t;
                  },
                },
              ];
            (t.default = s), (e.exports = t.default);
          },
        });
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var s = new Set(),
          o = {};
        function l(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          p =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          m = {};
        function h(e, t, n, r, a, i, s) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = s);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var _ = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function v(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(f, e) &&
                      (p.test(e) ? (m[e] = !0) : ((f[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(_, y);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(_, y);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(_, y);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          j = Symbol.for("react.provider"),
          A = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          M = Symbol.for("react.suspense_list"),
          E = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function F(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var O,
          R = Object.assign;
        function B(e) {
          if (void 0 === O)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              O = (t && t[1]) || "";
            }
          return "\n" + O + e;
        }
        var I = !1;
        function q(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  i = r.stack.split("\n"),
                  s = a.length - 1,
                  o = i.length - 1;
                1 <= s && 0 <= o && a[s] !== i[o];

              )
                o--;
              for (; 1 <= s && 0 <= o; s--, o--)
                if (a[s] !== i[o]) {
                  if (1 !== s || 1 !== o)
                    do {
                      if ((s--, 0 > --o || a[s] !== i[o])) {
                        var l = "\n" + a[s].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= s && 0 <= o);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? B(e) : "";
        }
        function D(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B("Lazy");
            case 13:
              return B("Suspense");
            case 19:
              return B("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = q(e.type, !1));
            case 11:
              return (e = q(e.type.render, !1));
            case 1:
              return (e = q(e.type, !0));
            default:
              return "";
          }
        }
        function Q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case x:
              return "Portal";
            case C:
              return "Profiler";
            case S:
              return "StrictMode";
            case N:
              return "Suspense";
            case M:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case A:
                return (e.displayName || "Context") + ".Consumer";
              case j:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case E:
                return null !== (t = e.displayName || null)
                  ? t
                  : Q(e.type) || "Memo";
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return Q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return Q(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function V(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function $(e, t) {
          null != (t = t.checked) && v(e, "checked", t, !1);
        }
        function J(e, t) {
          $(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function pe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var fe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (fe.hasOwnProperty(e) && fe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(fe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (fe[t] = fe[e]);
          });
        });
        var _e = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              _e[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function ve(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var be = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          ke = null,
          Se = null;
        function Ce(e) {
          if ((e = va(e))) {
            if ("function" !== typeof xe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = wa(t)), xe(e.stateNode, e.type, t));
          }
        }
        function je(e) {
          ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e);
        }
        function Ae() {
          if (ke) {
            var e = ke,
              t = Se;
            if (((Se = ke = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Ne() {}
        var Me = !1;
        function Ee(e, t, n) {
          if (Me) return e(t, n);
          Me = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Me = !1), (null !== ke || null !== Se) && (Ne(), Ae());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var ze = !1;
        if (u)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ue) {
            ze = !1;
          }
        function Fe(e, t, n, r, a, i, s, o, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Oe = !1,
          Re = null,
          Be = !1,
          Ie = null,
          qe = {
            onError: function (e) {
              (Oe = !0), (Re = e);
            },
          };
        function De(e, t, n, r, a, i, s, o, l) {
          (Oe = !1), (Re = null), Fe.apply(qe, arguments);
        }
        function Qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Qe(e) !== e) throw Error(i(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var s = a.alternate;
                if (null === s) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === s.child) {
                  for (s = a.child; s; ) {
                    if (s === n) return He(a), e;
                    if (s === r) return He(a), t;
                    s = s.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = s);
                else {
                  for (var o = !1, l = a.child; l; ) {
                    if (l === n) {
                      (o = !0), (n = a), (r = s);
                      break;
                    }
                    if (l === r) {
                      (o = !0), (r = a), (n = s);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!o) {
                    for (l = s.child; l; ) {
                      if (l === n) {
                        (o = !0), (n = s), (r = a);
                        break;
                      }
                      if (l === r) {
                        (o = !0), (r = s), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!o) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ve(e)
            : null;
        }
        function Ve(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ve(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          $e = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var st = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / lt) | 0)) | 0;
              },
          ot = Math.log,
          lt = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            s = 268435455 & n;
          if (0 !== s) {
            var o = s & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (i &= s) && (r = dt(i));
          } else 0 !== (s = n & ~a) ? (r = dt(s)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - st(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ft(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function _t(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - st(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - st(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var vt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          xt,
          kt,
          St,
          Ct,
          jt = !1,
          At = [],
          Pt = null,
          Nt = null,
          Mt = null,
          Et = new Map(),
          Tt = new Map(),
          zt = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ft(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Mt = null;
              break;
            case "pointerover":
            case "pointerout":
              Et.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function Ot(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = va(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Rt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = va(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (be = r), n.target.dispatchEvent(r), (be = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Bt(e) && n.delete(t);
        }
        function qt() {
          (jt = !1),
            null !== Pt && Bt(Pt) && (Pt = null),
            null !== Nt && Bt(Nt) && (Nt = null),
            null !== Mt && Bt(Mt) && (Mt = null),
            Et.forEach(It),
            Tt.forEach(It);
        }
        function Dt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            jt ||
              ((jt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, qt)));
        }
        function Qt(e) {
          function t(t) {
            return Dt(t, e);
          }
          if (0 < At.length) {
            Dt(At[0], e);
            for (var n = 1; n < At.length; n++) {
              var r = At[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Dt(Pt, e),
              null !== Nt && Dt(Nt, e),
              null !== Mt && Dt(Mt, e),
              Et.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            Rt(n), null === n.blockedOn && zt.shift();
        }
        var Ut = b.ReactCurrentBatchConfig,
          Ht = !0;
        function Wt(e, t, n, r) {
          var a = vt,
            i = Ut.transition;
          Ut.transition = null;
          try {
            (vt = 1), Kt(e, t, n, r);
          } finally {
            (vt = a), (Ut.transition = i);
          }
        }
        function Vt(e, t, n, r) {
          var a = vt,
            i = Ut.transition;
          Ut.transition = null;
          try {
            (vt = 4), Kt(e, t, n, r);
          } finally {
            (vt = a), (Ut.transition = i);
          }
        }
        function Kt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, Yt, n), Ft(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Ot(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = Ot(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Mt = Ot(Mt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Et.set(i, Ot(Et.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Tt.set(i, Ot(Tt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ft(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var i = va(a);
                if (
                  (null !== i && wt(i),
                  null === (i = Gt(e, t, n, r)) && Hr(e, t, r, Yt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Gt(e, t, n, r) {
          if (((Yt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = Qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var $t = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in $t ? $t.value : $t.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var s = r - e;
          for (t = 1; t <= s && n[r - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var s in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(a) : a[s]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var sn,
          on,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = R({}, cn, { view: 0, detail: 0 }),
          pn = an(dn),
          fn = R({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((sn = e.screenX - ln.screenX),
                        (on = e.screenY - ln.screenY))
                      : (on = sn = 0),
                    (ln = e)),
                  sn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          mn = an(fn),
          hn = an(R({}, fn, { dataTransfer: 0 })),
          gn = an(R({}, dn, { relatedTarget: 0 })),
          _n = an(
            R({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = R({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          vn = an(yn),
          bn = an(R({}, cn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Cn() {
          return Sn;
        }
        var jn = R({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          An = an(jn),
          Pn = an(
            R({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = an(
            R({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Mn = an(
            R({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          En = R({}, fn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = an(En),
          zn = [9, 13, 27, 32],
          Ln = u && "CompositionEvent" in window,
          Fn = null;
        u && "documentMode" in document && (Fn = document.documentMode);
        var On = u && "TextEvent" in window && !Fn,
          Rn = u && (!Ln || (Fn && 8 < Fn && 11 >= Fn)),
          Bn = String.fromCharCode(32),
          In = !1;
        function qn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Dn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Qn = !1;
        var Un = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          je(r),
            0 < (t = Vr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Vn = null,
          Kn = null;
        function Yn(e) {
          Br(e, 0);
        }
        function Gn(e) {
          if (K(ba(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var $n = !1;
        if (u) {
          var Jn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          $n = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Vn && (Vn.detachEvent("onpropertychange", nr), (Kn = Vn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Kn)) {
            var t = [];
            Wn(t, Kn, e, we(e)), Ee(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), (Vn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Kn);
        }
        function ir(e, t) {
          if ("click" === e) return Gn(t);
        }
        function sr(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function pr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = pr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && fr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = ur(n, i));
                var s = ur(n, r);
                a &&
                  s &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== s.node ||
                    e.focusOffset !== s.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(s.node, s.offset))
                    : (t.setEnd(s.node, s.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = u && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          _r = null,
          yr = null,
          vr = !1;
        function br(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          vr ||
            null == gr ||
            gr !== Y(r) ||
            ("selectionStart" in (r = gr) && fr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = Vr(_r, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Sr = {};
        function Cr(e) {
          if (kr[e]) return kr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t]);
          return e;
        }
        u &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var jr = Cr("animationend"),
          Ar = Cr("animationiteration"),
          Pr = Cr("animationstart"),
          Nr = Cr("transitionend"),
          Mr = new Map(),
          Er =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Tr(e, t) {
          Mr.set(e, t), l(t, [e]);
        }
        for (var zr = 0; zr < Er.length; zr++) {
          var Lr = Er[zr];
          Tr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Tr(jr, "onAnimationEnd"),
          Tr(Ar, "onAnimationIteration"),
          Tr(Pr, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(Nr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Fr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Or = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Fr)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, s, o, l, c) {
              if ((De.apply(this, arguments), Oe)) {
                if (!Oe) throw Error(i(198));
                var u = Re;
                (Oe = !1), (Re = null), Be || ((Be = !0), (Ie = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Br(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                  var o = r[s],
                    l = o.instance,
                    c = o.currentTarget;
                  if (((o = o.listener), l !== i && a.isPropagationStopped()))
                    break e;
                  Rr(a, o, c), (i = l);
                }
              else
                for (s = 0; s < r.length; s++) {
                  if (
                    ((l = (o = r[s]).instance),
                    (c = o.currentTarget),
                    (o = o.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  Rr(a, o, c), (i = l);
                }
            }
          }
          if (Be) throw ((e = Ie), (Be = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function qr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Dr = "_reactListening" + Math.random().toString(36).slice(2);
        function Qr(e) {
          if (!e[Dr]) {
            (e[Dr] = !0),
              s.forEach(function (t) {
                "selectionchange" !== t &&
                  (Or.has(t) || qr(t, !1, e), qr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Dr] || ((t[Dr] = !0), qr("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Vt;
              break;
            default:
              a = Kt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var s = r.tag;
              if (3 === s || 4 === s) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === s)
                  for (s = r.return; null !== s; ) {
                    var l = s.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = s.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    s = s.return;
                  }
                for (; null !== o; ) {
                  if (null === (s = ya(o))) return;
                  if (5 === (l = s.tag) || 6 === l) {
                    r = i = s;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Ee(function () {
            var r = i,
              a = we(n),
              s = [];
            e: {
              var o = Mr.get(e);
              if (void 0 !== o) {
                var l = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = An;
                    break;
                  case "focusin":
                    (c = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Nn;
                    break;
                  case jr:
                  case Ar:
                  case Pr:
                    l = _n;
                    break;
                  case Nr:
                    l = Mn;
                    break;
                  case "scroll":
                    l = pn;
                    break;
                  case "wheel":
                    l = Tn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = vn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Pn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  p = u ? (null !== o ? o + "Capture" : null) : o;
                u = [];
                for (var f, m = r; null !== m; ) {
                  var h = (f = m).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== h &&
                      ((f = h),
                      null !== p &&
                        null != (h = Te(m, p)) &&
                        u.push(Wr(m, h, f))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < u.length &&
                  ((o = new l(o, c, null, n, a)),
                  s.push({ event: o, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === be ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[ma])) &&
                  (l || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (d = Qe(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = r)),
                  l !== c))
              ) {
                if (
                  ((u = mn),
                  (h = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Pn),
                    (h = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == l ? o : ba(l)),
                  (f = null == c ? o : ba(c)),
                  ((o = new u(h, m + "leave", l, n, a)).target = d),
                  (o.relatedTarget = f),
                  (h = null),
                  ya(a) === r &&
                    (((u = new u(p, m + "enter", c, n, a)).target = f),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  l && c)
                )
                  e: {
                    for (p = c, m = 0, f = u = l; f; f = Kr(f)) m++;
                    for (f = 0, h = p; h; h = Kr(h)) f++;
                    for (; 0 < m - f; ) (u = Kr(u)), m--;
                    for (; 0 < f - m; ) (p = Kr(p)), f--;
                    for (; m--; ) {
                      if (u === p || (null !== p && u === p.alternate)) break e;
                      (u = Kr(u)), (p = Kr(p));
                    }
                    u = null;
                  }
                else u = null;
                null !== l && Yr(s, o, l, u, !1),
                  null !== c && null !== d && Yr(s, d, c, u, !0);
              }
              if (
                "select" ===
                  (l =
                    (o = r ? ba(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === l && "file" === o.type)
              )
                var g = Xn;
              else if (Hn(o))
                if ($n) g = sr;
                else {
                  g = ar;
                  var _ = rr;
                }
              else
                (l = o.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = ir);
              switch (
                (g && (g = g(e, r))
                  ? Wn(s, g, n, a)
                  : (_ && _(e, o, r),
                    "focusout" === e &&
                      (_ = o._wrapperState) &&
                      _.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (_ = r ? ba(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(_) || "true" === _.contentEditable) &&
                    ((gr = _), (_r = r), (yr = null));
                  break;
                case "focusout":
                  yr = _r = gr = null;
                  break;
                case "mousedown":
                  vr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (vr = !1), br(s, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  br(s, n, a);
              }
              var y;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var v = "onCompositionStart";
                      break e;
                    case "compositionend":
                      v = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      v = "onCompositionUpdate";
                      break e;
                  }
                  v = void 0;
                }
              else
                Qn
                  ? qn(e, n) && (v = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (v = "onCompositionStart");
              v &&
                (Rn &&
                  "ko" !== n.locale &&
                  (Qn || "onCompositionStart" !== v
                    ? "onCompositionEnd" === v && Qn && (y = en())
                    : ((Jt = "value" in ($t = a) ? $t.value : $t.textContent),
                      (Qn = !0))),
                0 < (_ = Vr(r, v)).length &&
                  ((v = new bn(v, e, null, n, a)),
                  s.push({ event: v, listeners: _ }),
                  y ? (v.data = y) : null !== (y = Dn(n)) && (v.data = y))),
                (y = On
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Dn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Qn)
                        return "compositionend" === e || (!Ln && qn(e, t))
                          ? ((e = en()), (Zt = Jt = $t = null), (Qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Vr(r, "onBeforeInput")).length &&
                  ((a = new bn("onBeforeInput", "beforeinput", null, n, a)),
                  s.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Br(s, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Te(e, n)) && r.unshift(Wr(e, i, a)),
              null != (i = Te(e, t)) && r.push(Wr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var i = t._reactName, s = []; null !== n && n !== r; ) {
            var o = n,
              l = o.alternate,
              c = o.stateNode;
            if (null !== l && l === r) break;
            5 === o.tag &&
              null !== c &&
              ((o = c),
              a
                ? null != (l = Te(n, i)) && s.unshift(Wr(n, l, o))
                : a || (null != (l = Te(n, i)) && s.push(Wr(n, l, o)))),
              (n = n.return);
          }
          0 !== s.length && e.push({ event: t, listeners: s });
        }
        var Gr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function $r(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Xr, "");
        }
        function Jr(e, t, n) {
          if (((t = $r(t)), $r(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          sa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Qt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          pa = "__reactFiber$" + da,
          fa = "__reactProps$" + da,
          ma = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          _a = "__reactHandles$" + da;
        function ya(e) {
          var t = e[pa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[pa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[pa])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function va(e) {
          return !(e = e[pa] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ba(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function wa(e) {
          return e[fa] || null;
        }
        var xa = [],
          ka = -1;
        function Sa(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > ka || ((e.current = xa[ka]), (xa[ka] = null), ka--);
        }
        function ja(e, t) {
          ka++, (xa[ka] = e.current), (e.current = t);
        }
        var Aa = {},
          Pa = Sa(Aa),
          Na = Sa(!1),
          Ma = Aa;
        function Ea(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Aa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          Ca(Na), Ca(Pa);
        }
        function La(e, t, n) {
          if (Pa.current !== Aa) throw Error(i(168));
          ja(Pa, t), ja(Na, n);
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, U(e) || "Unknown", a));
          return R({}, n, r);
        }
        function Oa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Aa),
            (Ma = Pa.current),
            ja(Pa, e),
            ja(Na, Na.current),
            !0
          );
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Fa(e, t, Ma)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Na),
              Ca(Pa),
              ja(Pa, e))
            : Ca(Na),
            ja(Na, n);
        }
        var Ba = null,
          Ia = !1,
          qa = !1;
        function Da(e) {
          null === Ba ? (Ba = [e]) : Ba.push(e);
        }
        function Qa() {
          if (!qa && null !== Ba) {
            qa = !0;
            var e = 0,
              t = vt;
            try {
              var n = Ba;
              for (vt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ba = null), (Ia = !1);
            } catch (a) {
              throw (null !== Ba && (Ba = Ba.slice(e + 1)), Ke(Ze, Qa), a);
            } finally {
              (vt = t), (qa = !1);
            }
          }
          return null;
        }
        var Ua = [],
          Ha = 0,
          Wa = null,
          Va = 0,
          Ka = [],
          Ya = 0,
          Ga = null,
          Xa = 1,
          $a = "";
        function Ja(e, t) {
          (Ua[Ha++] = Va), (Ua[Ha++] = Wa), (Wa = e), (Va = t);
        }
        function Za(e, t, n) {
          (Ka[Ya++] = Xa), (Ka[Ya++] = $a), (Ka[Ya++] = Ga), (Ga = e);
          var r = Xa;
          e = $a;
          var a = 32 - st(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - st(t) + a;
          if (30 < i) {
            var s = a - (a % 5);
            (i = (r & ((1 << s) - 1)).toString(32)),
              (r >>= s),
              (a -= s),
              (Xa = (1 << (32 - st(t) + a)) | (n << a) | r),
              ($a = i + e);
          } else (Xa = (1 << i) | (n << a) | r), ($a = e);
        }
        function ei(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function ti(e) {
          for (; e === Wa; )
            (Wa = Ua[--Ha]), (Ua[Ha] = null), (Va = Ua[--Ha]), (Ua[Ha] = null);
          for (; e === Ga; )
            (Ga = Ka[--Ya]),
              (Ka[Ya] = null),
              ($a = Ka[--Ya]),
              (Ka[Ya] = null),
              (Xa = Ka[--Ya]),
              (Ka[Ya] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function si(e, t) {
          var n = Tc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function oi(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Xa, overflow: $a } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Tc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function li(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ci(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!oi(e, t)) {
                if (li(e)) throw Error(i(418));
                t = ca(n.nextSibling);
                var r = ni;
                t && oi(e, t)
                  ? si(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (li(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ui(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ui(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (li(e)) throw (pi(), Error(i(418)));
            for (; t; ) si(e, t), (t = ca(t.nextSibling));
          }
          if ((ui(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pi() {
          for (var e = ri; e; ) e = ca(e.nextSibling);
        }
        function fi() {
          (ri = ni = null), (ai = !1);
        }
        function mi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var hi = b.ReactCurrentBatchConfig;
        function gi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var _i = Sa(null),
          yi = null,
          vi = null,
          bi = null;
        function wi() {
          bi = vi = yi = null;
        }
        function xi(e) {
          var t = _i.current;
          Ca(_i), (e._currentValue = t);
        }
        function ki(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Si(e, t) {
          (yi = e),
            (bi = vi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bo = !0), (e.firstContext = null));
        }
        function Ci(e) {
          var t = e._currentValue;
          if (bi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === vi)
            ) {
              if (null === yi) throw Error(i(308));
              (vi = e), (yi.dependencies = { lanes: 0, firstContext: e });
            } else vi = vi.next = e;
          return t;
        }
        var ji = null;
        function Ai(e) {
          null === ji ? (ji = [e]) : ji.push(e);
        }
        function Pi(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ai(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ni(e, r)
          );
        }
        function Ni(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Mi = !1;
        function Ei(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ti(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zi(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Li(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nl))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ni(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ai(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ni(e, n)
          );
        }
        function Fi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Oi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var s = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = s) : (i = i.next = s), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ri(e, t, n, r) {
          var a = e.updateQueue;
          Mi = !1;
          var i = a.firstBaseUpdate,
            s = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var l = o,
              c = l.next;
            (l.next = null), null === s ? (i = c) : (s.next = c), (s = l);
            var u = e.alternate;
            null !== u &&
              (o = (u = u.updateQueue).lastBaseUpdate) !== s &&
              (null === o ? (u.firstBaseUpdate = c) : (o.next = c),
              (u.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = a.baseState;
            for (s = 0, u = c = l = null, o = i; ; ) {
              var p = o.lane,
                f = o.eventTime;
              if ((r & p) === p) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = o;
                  switch (((p = t), (f = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        d = m.call(f, d, p);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (p =
                            "function" === typeof (m = h.payload)
                              ? m.call(f, d, p)
                              : m) ||
                        void 0 === p
                      )
                        break e;
                      d = R({}, d, p);
                      break e;
                    case 2:
                      Mi = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (p = a.effects) ? (a.effects = [o]) : p.push(o));
              } else
                (f = {
                  eventTime: f,
                  lane: p,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === u ? ((c = u = f), (l = d)) : (u = u.next = f),
                  (s |= p);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (p = o).next),
                  (p.next = null),
                  (a.lastBaseUpdate = p),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (l = d),
              (a.baseState = l),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (s |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Rl |= s), (e.lanes = s), (e.memoizedState = d);
          }
        }
        function Bi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Ii = new r.Component().refs;
        function qi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Di = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              i = zi(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Li(e, i, a)) && (rc(t, e, a, r), Fi(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              i = zi(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Li(e, i, a)) && (rc(t, e, a, r), Fi(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              a = zi(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Li(e, a, r)) && (rc(t, e, r, n), Fi(t, e, r));
          },
        };
        function Qi(e, t, n, r, a, i, s) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, s)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, i);
        }
        function Ui(e, t, n) {
          var r = !1,
            a = Aa,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ci(i))
              : ((a = Ta(t) ? Ma : Pa.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ea(e, a)
                  : Aa)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Di),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Hi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Di.enqueueReplaceState(t, t.state, null);
        }
        function Wi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Ii), Ei(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ci(i))
            : ((i = Ta(t) ? Ma : Pa.current), (a.context = Ea(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (qi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Di.enqueueReplaceState(a, a.state, null),
              Ri(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Vi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                s = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === s
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Ii && (t = a.refs = {}),
                      null === e ? delete t[s] : (t[s] = e);
                  }),
                  (t._stringRef = s),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Ki(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yi(e) {
          return (0, e._init)(e._payload);
        }
        function Gi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lc(e, t)).index = 0), (e.sibling = null), e;
          }
          function s(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Bc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var i = n.type;
            return i === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === T &&
                    Yi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Vi(e, t, n)), (r.return = e), r)
              : (((r = Fc(n.type, n.key, n.props, null, e.mode, r)).ref = Vi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ic(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Oc(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function p(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Bc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Fc(t.type, t.key, t.props, null, e.mode, n)).ref = Vi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Ic(t, e.mode, n)).return = e), t;
                case T:
                  return p(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || F(t))
                return ((t = Oc(t, e.mode, n, null)).return = e), t;
              Ki(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case x:
                  return n.key === a ? u(e, t, n, r) : null;
                case T:
                  return f(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || F(n)) return null !== a ? null : d(e, t, n, r, null);
              Ki(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case T:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || F(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              Ki(t, r);
            }
            return null;
          }
          function h(a, i, o, l) {
            for (
              var c = null, u = null, d = i, h = (i = 0), g = null;
              null !== d && h < o.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var _ = f(a, d, o[h], l);
              if (null === _) {
                null === d && (d = g);
                break;
              }
              e && d && null === _.alternate && t(a, d),
                (i = s(_, i, h)),
                null === u ? (c = _) : (u.sibling = _),
                (u = _),
                (d = g);
            }
            if (h === o.length) return n(a, d), ai && Ja(a, h), c;
            if (null === d) {
              for (; h < o.length; h++)
                null !== (d = p(a, o[h], l)) &&
                  ((i = s(d, i, h)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return ai && Ja(a, h), c;
            }
            for (d = r(a, d); h < o.length; h++)
              null !== (g = m(d, a, h, o[h], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (i = s(g, i, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, h),
              c
            );
          }
          function g(a, o, l, c) {
            var u = F(l);
            if ("function" !== typeof u) throw Error(i(150));
            if (null == (l = u.call(l))) throw Error(i(151));
            for (
              var d = (u = null), h = o, g = (o = 0), _ = null, y = l.next();
              null !== h && !y.done;
              g++, y = l.next()
            ) {
              h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
              var v = f(a, h, y.value, c);
              if (null === v) {
                null === h && (h = _);
                break;
              }
              e && h && null === v.alternate && t(a, h),
                (o = s(v, o, g)),
                null === d ? (u = v) : (d.sibling = v),
                (d = v),
                (h = _);
            }
            if (y.done) return n(a, h), ai && Ja(a, g), u;
            if (null === h) {
              for (; !y.done; g++, y = l.next())
                null !== (y = p(a, y.value, c)) &&
                  ((o = s(y, o, g)),
                  null === d ? (u = y) : (d.sibling = y),
                  (d = y));
              return ai && Ja(a, g), u;
            }
            for (h = r(a, h); !y.done; g++, y = l.next())
              null !== (y = m(h, a, g, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? g : y.key),
                (o = s(y, o, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, g),
              u
            );
          }
          return function e(r, i, s, l) {
            if (
              ("object" === typeof s &&
                null !== s &&
                s.type === k &&
                null === s.key &&
                (s = s.props.children),
              "object" === typeof s && null !== s)
            ) {
              switch (s.$$typeof) {
                case w:
                  e: {
                    for (var c = s.key, u = i; null !== u; ) {
                      if (u.key === c) {
                        if ((c = s.type) === k) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((i = a(u, s.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === T &&
                            Yi(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((i = a(u, s.props)).ref = Vi(r, u, s)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    s.type === k
                      ? (((i = Oc(s.props.children, r.mode, l, s.key)).return =
                          r),
                        (r = i))
                      : (((l = Fc(
                          s.type,
                          s.key,
                          s.props,
                          null,
                          r.mode,
                          l
                        )).ref = Vi(r, i, s)),
                        (l.return = r),
                        (r = l));
                  }
                  return o(r);
                case x:
                  e: {
                    for (u = s.key; null !== i; ) {
                      if (i.key === u) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === s.containerInfo &&
                          i.stateNode.implementation === s.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, s.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Ic(s, r.mode, l)).return = r), (r = i);
                  }
                  return o(r);
                case T:
                  return e(r, i, (u = s._init)(s._payload), l);
              }
              if (te(s)) return h(r, i, s, l);
              if (F(s)) return g(r, i, s, l);
              Ki(r, s);
            }
            return ("string" === typeof s && "" !== s) || "number" === typeof s
              ? ((s = "" + s),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, s)).return = r), (r = i))
                  : (n(r, i), ((i = Bc(s, r.mode, l)).return = r), (r = i)),
                o(r))
              : n(r, i);
          };
        }
        var Xi = Gi(!0),
          $i = Gi(!1),
          Ji = {},
          Zi = Sa(Ji),
          es = Sa(Ji),
          ts = Sa(Ji);
        function ns(e) {
          if (e === Ji) throw Error(i(174));
          return e;
        }
        function rs(e, t) {
          switch ((ja(ts, t), ja(es, e), ja(Zi, Ji), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Zi), ja(Zi, t);
        }
        function as() {
          Ca(Zi), Ca(es), Ca(ts);
        }
        function is(e) {
          ns(ts.current);
          var t = ns(Zi.current),
            n = le(t, e.type);
          t !== n && (ja(es, e), ja(Zi, n));
        }
        function ss(e) {
          es.current === e && (Ca(Zi), Ca(es));
        }
        var os = Sa(0);
        function ls(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var cs = [];
        function us() {
          for (var e = 0; e < cs.length; e++)
            cs[e]._workInProgressVersionPrimary = null;
          cs.length = 0;
        }
        var ds = b.ReactCurrentDispatcher,
          ps = b.ReactCurrentBatchConfig,
          fs = 0,
          ms = null,
          hs = null,
          gs = null,
          _s = !1,
          ys = !1,
          vs = 0,
          bs = 0;
        function ws() {
          throw Error(i(321));
        }
        function xs(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function ks(e, t, n, r, a, s) {
          if (
            ((fs = s),
            (ms = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ds.current = null === e || null === e.memoizedState ? so : oo),
            (e = n(r, a)),
            ys)
          ) {
            s = 0;
            do {
              if (((ys = !1), (vs = 0), 25 <= s)) throw Error(i(301));
              (s += 1),
                (gs = hs = null),
                (t.updateQueue = null),
                (ds.current = lo),
                (e = n(r, a));
            } while (ys);
          }
          if (
            ((ds.current = io),
            (t = null !== hs && null !== hs.next),
            (fs = 0),
            (gs = hs = ms = null),
            (_s = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Ss() {
          var e = 0 !== vs;
          return (vs = 0), e;
        }
        function Cs() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gs ? (ms.memoizedState = gs = e) : (gs = gs.next = e), gs
          );
        }
        function js() {
          if (null === hs) {
            var e = ms.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hs.next;
          var t = null === gs ? ms.memoizedState : gs.next;
          if (null !== t) (gs = t), (hs = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (hs = e).memoizedState,
              baseState: hs.baseState,
              baseQueue: hs.baseQueue,
              queue: hs.queue,
              next: null,
            }),
              null === gs ? (ms.memoizedState = gs = e) : (gs = gs.next = e);
          }
          return gs;
        }
        function As(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ps(e) {
          var t = js(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = hs,
            a = r.baseQueue,
            s = n.pending;
          if (null !== s) {
            if (null !== a) {
              var o = a.next;
              (a.next = s.next), (s.next = o);
            }
            (r.baseQueue = a = s), (n.pending = null);
          }
          if (null !== a) {
            (s = a.next), (r = r.baseState);
            var l = (o = null),
              c = null,
              u = s;
            do {
              var d = u.lane;
              if ((fs & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var p = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = p), (o = r)) : (c = c.next = p),
                  (ms.lanes |= d),
                  (Rl |= d);
              }
              u = u.next;
            } while (null !== u && u !== s);
            null === c ? (o = r) : (c.next = l),
              or(r, t.memoizedState) || (bo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (s = a.lane), (ms.lanes |= s), (Rl |= s), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ns(e) {
          var t = js(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            s = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (s = e(s, o.action)), (o = o.next);
            } while (o !== a);
            or(s, t.memoizedState) || (bo = !0),
              (t.memoizedState = s),
              null === t.baseQueue && (t.baseState = s),
              (n.lastRenderedState = s);
          }
          return [s, r];
        }
        function Ms() {}
        function Es(e, t) {
          var n = ms,
            r = js(),
            a = t(),
            s = !or(r.memoizedState, a);
          if (
            (s && ((r.memoizedState = a), (bo = !0)),
            (r = r.queue),
            Us(Ls.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              s ||
              (null !== gs && 1 & gs.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Bs(9, zs.bind(null, n, r, a, t), void 0, null),
              null === Ml)
            )
              throw Error(i(349));
            0 !== (30 & fs) || Ts(n, t, a);
          }
          return a;
        }
        function Ts(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ms.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ms.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function zs(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fs(t) && Os(e);
        }
        function Ls(e, t, n) {
          return n(function () {
            Fs(t) && Os(e);
          });
        }
        function Fs(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Os(e) {
          var t = Ni(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function Rs(e) {
          var t = Cs();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: As,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, ms, e)),
            [t.memoizedState, e]
          );
        }
        function Bs(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ms.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ms.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Is() {
          return js().memoizedState;
        }
        function qs(e, t, n, r) {
          var a = Cs();
          (ms.flags |= e),
            (a.memoizedState = Bs(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ds(e, t, n, r) {
          var a = js();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== hs) {
            var s = hs.memoizedState;
            if (((i = s.destroy), null !== r && xs(r, s.deps)))
              return void (a.memoizedState = Bs(t, n, i, r));
          }
          (ms.flags |= e), (a.memoizedState = Bs(1 | t, n, i, r));
        }
        function Qs(e, t) {
          return qs(8390656, 8, e, t);
        }
        function Us(e, t) {
          return Ds(2048, 8, e, t);
        }
        function Hs(e, t) {
          return Ds(4, 2, e, t);
        }
        function Ws(e, t) {
          return Ds(4, 4, e, t);
        }
        function Vs(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ks(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ds(4, 4, Vs.bind(null, t, e), n)
          );
        }
        function Ys() {}
        function Gs(e, t) {
          var n = js();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xs(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xs(e, t) {
          var n = js();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xs(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function $s(e, t, n) {
          return 0 === (21 & fs)
            ? (e.baseState && ((e.baseState = !1), (bo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = ht()), (ms.lanes |= n), (Rl |= n), (e.baseState = !0)),
              t);
        }
        function Js(e, t) {
          var n = vt;
          (vt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ps.transition;
          ps.transition = {};
          try {
            e(!1), t();
          } finally {
            (vt = n), (ps.transition = r);
          }
        }
        function Zs() {
          return js().memoizedState;
        }
        function eo(e, t, n) {
          var r = nc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n);
          else if (null !== (n = Pi(e, t, n, r))) {
            rc(n, e, r, tc()), ao(n, t, r);
          }
        }
        function to(e, t, n) {
          var r = nc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ro(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var s = t.lastRenderedState,
                  o = i(s, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, s))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Ai(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Pi(e, t, a, r)) &&
              (rc(n, e, r, (a = tc())), ao(n, t, r));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === ms || (null !== t && t === ms);
        }
        function ro(e, t) {
          ys = _s = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ao(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var io = {
            readContext: Ci,
            useCallback: ws,
            useContext: ws,
            useEffect: ws,
            useImperativeHandle: ws,
            useInsertionEffect: ws,
            useLayoutEffect: ws,
            useMemo: ws,
            useReducer: ws,
            useRef: ws,
            useState: ws,
            useDebugValue: ws,
            useDeferredValue: ws,
            useTransition: ws,
            useMutableSource: ws,
            useSyncExternalStore: ws,
            useId: ws,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: Ci,
            useCallback: function (e, t) {
              return (Cs().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ci,
            useEffect: Qs,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                qs(4194308, 4, Vs.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return qs(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return qs(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Cs();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Cs();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, ms, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Cs().memoizedState = e);
            },
            useState: Rs,
            useDebugValue: Ys,
            useDeferredValue: function (e) {
              return (Cs().memoizedState = e);
            },
            useTransition: function () {
              var e = Rs(!1),
                t = e[0];
              return (
                (e = Js.bind(null, e[1])), (Cs().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ms,
                a = Cs();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Ml)) throw Error(i(349));
                0 !== (30 & fs) || Ts(r, t, n);
              }
              a.memoizedState = n;
              var s = { value: n, getSnapshot: t };
              return (
                (a.queue = s),
                Qs(Ls.bind(null, r, s, e), [e]),
                (r.flags |= 2048),
                Bs(9, zs.bind(null, r, s, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Cs(),
                t = Ml.identifierPrefix;
              if (ai) {
                var n = $a;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - st(Xa) - 1))).toString(32) + n)),
                  0 < (n = vs++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = bs++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Ci,
            useCallback: Gs,
            useContext: Ci,
            useEffect: Us,
            useImperativeHandle: Ks,
            useInsertionEffect: Hs,
            useLayoutEffect: Ws,
            useMemo: Xs,
            useReducer: Ps,
            useRef: Is,
            useState: function () {
              return Ps(As);
            },
            useDebugValue: Ys,
            useDeferredValue: function (e) {
              return $s(js(), hs.memoizedState, e);
            },
            useTransition: function () {
              return [Ps(As)[0], js().memoizedState];
            },
            useMutableSource: Ms,
            useSyncExternalStore: Es,
            useId: Zs,
            unstable_isNewReconciler: !1,
          },
          lo = {
            readContext: Ci,
            useCallback: Gs,
            useContext: Ci,
            useEffect: Us,
            useImperativeHandle: Ks,
            useInsertionEffect: Hs,
            useLayoutEffect: Ws,
            useMemo: Xs,
            useReducer: Ns,
            useRef: Is,
            useState: function () {
              return Ns(As);
            },
            useDebugValue: Ys,
            useDeferredValue: function (e) {
              var t = js();
              return null === hs
                ? (t.memoizedState = e)
                : $s(t, hs.memoizedState, e);
            },
            useTransition: function () {
              return [Ns(As)[0], js().memoizedState];
            },
            useMutableSource: Ms,
            useSyncExternalStore: Es,
            useId: Zs,
            unstable_isNewReconciler: !1,
          };
        function co(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += D(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function uo(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function po(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fo = "function" === typeof WeakMap ? WeakMap : Map;
        function mo(e, t, n) {
          ((n = zi(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wl || ((Wl = !0), (Vl = r)), po(0, t);
            }),
            n
          );
        }
        function ho(e, t, n) {
          (n = zi(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                po(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                po(0, t),
                  "function" !== typeof r &&
                    (null === Kl ? (Kl = new Set([this])) : Kl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function go(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fo();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = jc.bind(null, e, t, n)), t.then(e, e));
        }
        function _o(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zi(-1, 1)).tag = 2), Li(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var vo = b.ReactCurrentOwner,
          bo = !1;
        function wo(e, t, n, r) {
          t.child = null === e ? $i(t, null, n, r) : Xi(t, e.child, n, r);
        }
        function xo(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Si(t, a),
            (r = ks(e, t, n, r, i, a)),
            (n = Ss()),
            null === e || bo
              ? (ai && n && ei(t), (t.flags |= 1), wo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function ko(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              zc(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), So(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var s = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(s, r) &&
              e.ref === t.ref
            )
              return Wo(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lc(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function So(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((bo = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wo(e, t, a);
              0 !== (131072 & e.flags) && (bo = !0);
            }
          }
          return Ao(e, t, n, r, a);
        }
        function Co(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                ja(Ll, zl),
                (zl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  ja(Ll, zl),
                  (zl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                ja(Ll, zl),
                (zl |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ja(Ll, zl),
              (zl |= r);
          return wo(e, t, a, n), t.child;
        }
        function jo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ao(e, t, n, r, a) {
          var i = Ta(n) ? Ma : Pa.current;
          return (
            (i = Ea(t, i)),
            Si(t, a),
            (n = ks(e, t, n, r, i, a)),
            (r = Ss()),
            null === e || bo
              ? (ai && r && ei(t), (t.flags |= 1), wo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function Po(e, t, n, r, a) {
          if (Ta(n)) {
            var i = !0;
            Oa(t);
          } else i = !1;
          if ((Si(t, a), null === t.stateNode))
            Ho(e, t), Ui(t, n, r), Wi(t, n, r, a), (r = !0);
          else if (null === e) {
            var s = t.stateNode,
              o = t.memoizedProps;
            s.props = o;
            var l = s.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Ci(c))
              : (c = Ea(t, (c = Ta(n) ? Ma : Pa.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof s.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof s.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof s.componentWillReceiveProps) ||
              ((o !== r || l !== c) && Hi(t, s, r, c)),
              (Mi = !1);
            var p = t.memoizedState;
            (s.state = p),
              Ri(t, r, s, a),
              (l = t.memoizedState),
              o !== r || p !== l || Na.current || Mi
                ? ("function" === typeof u &&
                    (qi(t, n, u, r), (l = t.memoizedState)),
                  (o = Mi || Qi(t, n, o, r, p, l, c))
                    ? (d ||
                        ("function" !== typeof s.UNSAFE_componentWillMount &&
                          "function" !== typeof s.componentWillMount) ||
                        ("function" === typeof s.componentWillMount &&
                          s.componentWillMount(),
                        "function" === typeof s.UNSAFE_componentWillMount &&
                          s.UNSAFE_componentWillMount()),
                      "function" === typeof s.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof s.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = c),
                  (r = o))
                : ("function" === typeof s.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (s = t.stateNode),
              Ti(e, t),
              (o = t.memoizedProps),
              (c = t.type === t.elementType ? o : gi(t.type, o)),
              (s.props = c),
              (d = t.pendingProps),
              (p = s.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ci(l))
                : (l = Ea(t, (l = Ta(n) ? Ma : Pa.current)));
            var f = n.getDerivedStateFromProps;
            (u =
              "function" === typeof f ||
              "function" === typeof s.getSnapshotBeforeUpdate) ||
              ("function" !== typeof s.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof s.componentWillReceiveProps) ||
              ((o !== d || p !== l) && Hi(t, s, r, l)),
              (Mi = !1),
              (p = t.memoizedState),
              (s.state = p),
              Ri(t, r, s, a);
            var m = t.memoizedState;
            o !== d || p !== m || Na.current || Mi
              ? ("function" === typeof f &&
                  (qi(t, n, f, r), (m = t.memoizedState)),
                (c = Mi || Qi(t, n, c, r, p, m, l) || !1)
                  ? (u ||
                      ("function" !== typeof s.UNSAFE_componentWillUpdate &&
                        "function" !== typeof s.componentWillUpdate) ||
                      ("function" === typeof s.componentWillUpdate &&
                        s.componentWillUpdate(r, m, l),
                      "function" === typeof s.UNSAFE_componentWillUpdate &&
                        s.UNSAFE_componentWillUpdate(r, m, l)),
                    "function" === typeof s.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof s.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof s.componentDidUpdate ||
                      (o === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof s.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (s.props = r),
                (s.state = m),
                (s.context = l),
                (r = c))
              : ("function" !== typeof s.componentDidUpdate ||
                  (o === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof s.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return No(e, t, n, r, i, a);
        }
        function No(e, t, n, r, a, i) {
          jo(e, t);
          var s = 0 !== (128 & t.flags);
          if (!r && !s) return a && Ra(t, n, !1), Wo(e, t, i);
          (r = t.stateNode), (vo.current = t);
          var o =
            s && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && s
              ? ((t.child = Xi(t, e.child, null, i)),
                (t.child = Xi(t, null, o, i)))
              : wo(e, t, o, i),
            (t.memoizedState = r.state),
            a && Ra(t, n, !0),
            t.child
          );
        }
        function Mo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            rs(e, t.containerInfo);
        }
        function Eo(e, t, n, r, a) {
          return fi(), mi(a), (t.flags |= 256), wo(e, t, n, r), t.child;
        }
        var To,
          zo,
          Lo,
          Fo,
          Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ro(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Bo(e, t, n) {
          var r,
            a = t.pendingProps,
            s = os.current,
            o = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & s)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (s |= 1),
            ja(os, 1 & s),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = l))
                        : (o = Rc(l, a, 0, null)),
                      (e = Oc(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Ro(n)),
                      (t.memoizedState = Oo),
                      e)
                    : Io(t, l))
            );
          if (null !== (s = e.memoizedState) && null !== (r = s.dehydrated))
            return (function (e, t, n, r, a, s, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), qo(e, t, o, (r = uo(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = r.fallback),
                    (a = t.mode),
                    (r = Rc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((s = Oc(s, a, o, null)).flags |= 2),
                    (r.return = t),
                    (s.return = t),
                    (r.sibling = s),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xi(t, e.child, null, o),
                    (t.child.memoizedState = Ro(o)),
                    (t.memoizedState = Oo),
                    s);
              if (0 === (1 & t.mode)) return qo(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), qo(e, t, o, (r = uo((s = Error(i(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (o & e.childLanes)), bo || l)) {
                if (null !== (r = Ml)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== s.retryLane &&
                    ((s.retryLane = a), Ni(e, a), rc(r, e, a, -1));
                }
                return gc(), qo(e, t, o, (r = uo(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = s.treeContext),
                  (ri = ca(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Ka[Ya++] = Xa),
                    (Ka[Ya++] = $a),
                    (Ka[Ya++] = Ga),
                    (Xa = e.id),
                    ($a = e.overflow),
                    (Ga = t)),
                  (t = Io(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, s, n);
          if (o) {
            (o = a.fallback), (l = t.mode), (r = (s = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== s
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Lc(s, c)).subtreeFlags = 14680064 & s.subtreeFlags),
              null !== r
                ? (o = Lc(r, o))
                : ((o = Oc(o, l, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Ro(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (o.memoizedState = l),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Oo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Lc(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Io(e, t) {
          return (
            ((t = Rc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function qo(e, t, n, r) {
          return (
            null !== r && mi(r),
            Xi(t, e.child, null, n),
            ((e = Io(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Do(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ki(e.return, t, n);
        }
        function Qo(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Uo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((wo(e, t, r.children, n), 0 !== (2 & (r = os.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Do(e, n, t);
                else if (19 === e.tag) Do(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ja(os, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ls(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Qo(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ls(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Qo(t, !0, n, null, i);
                break;
              case "together":
                Qo(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ho(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Rl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Lc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vo(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ko(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yo(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ko(t), null;
            case 1:
            case 17:
              return Ta(t.type) && za(), Ko(t), null;
            case 3:
              return (
                (r = t.stateNode),
                as(),
                Ca(Na),
                Ca(Pa),
                us(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (oc(ii), (ii = null)))),
                zo(e, t),
                Ko(t),
                null
              );
            case 5:
              ss(t);
              var a = ns(ts.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Lo(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Ko(t), null;
                }
                if (((e = ns(Zi.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var s = t.memoizedProps;
                  switch (
                    ((r[pa] = t), (r[fa] = s), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Fr.length; a++) Ir(Fr[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      X(r, s), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!s.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ae(r, s), Ir("invalid", r);
                  }
                  for (var l in (ye(n, s), (a = null), s))
                    if (s.hasOwnProperty(l)) {
                      var c = s[l];
                      "children" === l
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== s.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== s.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : o.hasOwnProperty(l) &&
                          null != c &&
                          "onScroll" === l &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      V(r), Z(r, s, !0);
                      break;
                    case "textarea":
                      V(r), se(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof s.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[pa] = t),
                    (e[fa] = r),
                    To(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = ve(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Fr.length; a++) Ir(Fr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ir("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (a = r);
                        break;
                      case "details":
                        Ir("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = G(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = R({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ir("invalid", e);
                    }
                    for (s in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(s)) {
                        var u = c[s];
                        "style" === s
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === s
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === s
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && pe(e, u)
                            : "number" === typeof u && pe(e, "" + u)
                          : "suppressContentEditableWarning" !== s &&
                            "suppressHydrationWarning" !== s &&
                            "autoFocus" !== s &&
                            (o.hasOwnProperty(s)
                              ? null != u && "onScroll" === s && Ir("scroll", e)
                              : null != u && v(e, s, u, l));
                      }
                    switch (n) {
                      case "input":
                        V(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        V(e), se(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (s = r.value)
                            ? ne(e, !!r.multiple, s, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ko(t), null;
            case 6:
              if (e && null != t.stateNode) Fo(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = ns(ts.current)), ns(Zi.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[pa] = t),
                    (s = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  s && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[pa] = t),
                    (t.stateNode = r);
              }
              return Ko(t), null;
            case 13:
              if (
                (Ca(os),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pi(), fi(), (t.flags |= 98560), (s = !1);
                else if (((s = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!s) throw Error(i(318));
                    if (
                      !(s =
                        null !== (s = t.memoizedState) ? s.dehydrated : null)
                    )
                      throw Error(i(317));
                    s[pa] = t;
                  } else
                    fi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ko(t), (s = !1);
                } else null !== ii && (oc(ii), (ii = null)), (s = !0);
                if (!s) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & os.current)
                        ? 0 === Fl && (Fl = 3)
                        : gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ko(t),
                  null);
            case 4:
              return (
                as(),
                zo(e, t),
                null === e && Qr(t.stateNode.containerInfo),
                Ko(t),
                null
              );
            case 10:
              return xi(t.type._context), Ko(t), null;
            case 19:
              if ((Ca(os), null === (s = t.memoizedState))) return Ko(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = s.rendering)))
                if (r) Vo(s, !1);
                else {
                  if (0 !== Fl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ls(e))) {
                        for (
                          t.flags |= 128,
                            Vo(s, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((s = n).flags &= 14680066),
                            null === (l = s.alternate)
                              ? ((s.childLanes = 0),
                                (s.lanes = e),
                                (s.child = null),
                                (s.subtreeFlags = 0),
                                (s.memoizedProps = null),
                                (s.memoizedState = null),
                                (s.updateQueue = null),
                                (s.dependencies = null),
                                (s.stateNode = null))
                              : ((s.childLanes = l.childLanes),
                                (s.lanes = l.lanes),
                                (s.child = l.child),
                                (s.subtreeFlags = 0),
                                (s.deletions = null),
                                (s.memoizedProps = l.memoizedProps),
                                (s.memoizedState = l.memoizedState),
                                (s.updateQueue = l.updateQueue),
                                (s.type = l.type),
                                (e = l.dependencies),
                                (s.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return ja(os, (1 & os.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== s.tail &&
                    $e() > Ul &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vo(s, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ls(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vo(s, !0),
                      null === s.tail &&
                        "hidden" === s.tailMode &&
                        !l.alternate &&
                        !ai)
                    )
                      return Ko(t), null;
                  } else
                    2 * $e() - s.renderingStartTime > Ul &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vo(s, !1),
                      (t.lanes = 4194304));
                s.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = s.last) ? (n.sibling = l) : (t.child = l),
                    (s.last = l));
              }
              return null !== s.tail
                ? ((t = s.tail),
                  (s.rendering = t),
                  (s.tail = t.sibling),
                  (s.renderingStartTime = $e()),
                  (t.sibling = null),
                  (n = os.current),
                  ja(os, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ko(t), null);
            case 22:
            case 23:
              return (
                pc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & zl) &&
                    (Ko(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ko(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Go(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                as(),
                Ca(Na),
                Ca(Pa),
                us(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ss(t), null;
            case 13:
              if (
                (Ca(os),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                fi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(os), null;
            case 4:
              return as(), null;
            case 10:
              return xi(t.type._context), null;
            case 22:
            case 23:
              return pc(), null;
            default:
              return null;
          }
        }
        (To = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (zo = function () {}),
          (Lo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ns(Zi.current);
              var i,
                s = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (s = []);
                  break;
                case "select":
                  (a = R({}, a, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (s = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (s = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var l = a[u];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (o.hasOwnProperty(u)
                        ? s || (s = [])
                        : (s = s || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((l = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== l && (null != c || null != l))
                )
                  if ("style" === u)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          l[i] !== c[i] &&
                          (n || (n = {}), (n[i] = c[i]));
                    } else n || (s || (s = []), s.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != c && l !== c && (s = s || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (s = s || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (o.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Ir("scroll", e),
                            s || l === c || (s = []))
                          : (s = s || []).push(u, c));
              }
              n && (s = s || []).push("style", n);
              var u = s;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Fo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xo = !1,
          $o = !1,
          Jo = "function" === typeof WeakSet ? WeakSet : Set,
          Zo = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cc(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            Cc(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && tl(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function al(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function il(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function sl(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), sl(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[pa],
              delete t[fa],
              delete t[ha],
              delete t[ga],
              delete t[_a]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ol(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ol(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var dl = null,
          pl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) ml(e, t, n), (n = n.sibling);
        }
        function ml(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              $o || el(n, t);
            case 6:
              var r = dl,
                a = pl;
              (dl = null),
                fl(e, t, n),
                (pl = a),
                null !== (dl = r) &&
                  (pl
                    ? ((e = dl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : dl.removeChild(n.stateNode));
              break;
            case 18:
              null !== dl &&
                (pl
                  ? ((e = dl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    Qt(e))
                  : la(dl, n.stateNode));
              break;
            case 4:
              (r = dl),
                (a = pl),
                (dl = n.stateNode.containerInfo),
                (pl = !0),
                fl(e, t, n),
                (dl = r),
                (pl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !$o &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    s = i.destroy;
                  (i = i.tag),
                    void 0 !== s &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      tl(n, t, s),
                    (a = a.next);
                } while (a !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !$o &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Cc(n, t, o);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? (($o = (r = $o) || null !== n.memoizedState),
                  fl(e, t, n),
                  ($o = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function hl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jo()),
              t.forEach(function (t) {
                var r = Nc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var s = e,
                  o = t,
                  l = o;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (dl = l.stateNode), (pl = !1);
                      break e;
                    case 3:
                    case 4:
                      (dl = l.stateNode.containerInfo), (pl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === dl) throw Error(i(160));
                ml(s, o, a), (dl = null), (pl = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Cc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) _l(t, e), (t = t.sibling);
        }
        function _l(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gl(t, e), yl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), al(3, e);
                } catch (g) {
                  Cc(e, e.return, g);
                }
                try {
                  rl(5, e, e.return);
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              break;
            case 1:
              gl(t, e), yl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (gl(t, e),
                yl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  pe(a, "");
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var s = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : s,
                  l = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === l &&
                      "radio" === s.type &&
                      null != s.name &&
                      $(a, s),
                      ve(l, o);
                    var u = ve(l, s);
                    for (o = 0; o < c.length; o += 2) {
                      var d = c[o],
                        p = c[o + 1];
                      "style" === d
                        ? ge(a, p)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, p)
                        : "children" === d
                        ? pe(a, p)
                        : v(a, d, p, u);
                    }
                    switch (l) {
                      case "input":
                        J(a, s);
                        break;
                      case "textarea":
                        ie(a, s);
                        break;
                      case "select":
                        var f = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!s.multiple;
                        var m = s.value;
                        null != m
                          ? ne(a, !!s.multiple, m, !1)
                          : f !== !!s.multiple &&
                            (null != s.defaultValue
                              ? ne(a, !!s.multiple, s.defaultValue, !0)
                              : ne(a, !!s.multiple, s.multiple ? [] : "", !1));
                    }
                    a[fa] = s;
                  } catch (g) {
                    Cc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gl(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (s = e.memoizedProps);
                try {
                  a.nodeValue = s;
                } catch (g) {
                  Cc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gl(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Qt(t.containerInfo);
                } catch (g) {
                  Cc(e, e.return, g);
                }
              break;
            case 4:
            default:
              gl(t, e), yl(e);
              break;
            case 13:
              gl(t, e),
                yl(e),
                8192 & (a = e.child).flags &&
                  ((s = null !== a.memoizedState),
                  (a.stateNode.isHidden = s),
                  !s ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Ql = $e())),
                4 & r && hl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? (($o = (u = $o) || d), gl(t, e), ($o = u))
                  : gl(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Zo = e, d = e.child; null !== d; ) {
                    for (p = Zo = d; null !== Zo; ) {
                      switch (((m = (f = Zo).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, f, f.return);
                          break;
                        case 1:
                          el(f, f.return);
                          var h = f.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = f), (n = f.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              Cc(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          el(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            xl(p);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = f), (Zo = m)) : xl(p);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, p = e; ; ) {
                  if (5 === p.tag) {
                    if (null === d) {
                      d = p;
                      try {
                        (a = p.stateNode),
                          u
                            ? "function" === typeof (s = a.style).setProperty
                              ? s.setProperty("display", "none", "important")
                              : (s.display = "none")
                            : ((l = p.stateNode),
                              (o =
                                void 0 !== (c = p.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (l.style.display = he("display", o)));
                      } catch (g) {
                        Cc(e, e.return, g);
                      }
                    }
                  } else if (6 === p.tag) {
                    if (null === d)
                      try {
                        p.stateNode.nodeValue = u ? "" : p.memoizedProps;
                      } catch (g) {
                        Cc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== p.tag && 23 !== p.tag) ||
                      null === p.memoizedState ||
                      p === e) &&
                    null !== p.child
                  ) {
                    (p.child.return = p), (p = p.child);
                    continue;
                  }
                  if (p === e) break e;
                  for (; null === p.sibling; ) {
                    if (null === p.return || p.return === e) break e;
                    d === p && (d = null), (p = p.return);
                  }
                  d === p && (d = null),
                    (p.sibling.return = p.return),
                    (p = p.sibling);
                }
              }
              break;
            case 19:
              gl(t, e), yl(e), 4 & r && hl(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ol(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (pe(a, ""), (r.flags &= -33)),
                    ul(e, ll(e), a);
                  break;
                case 3:
                case 4:
                  var s = r.stateNode.containerInfo;
                  cl(e, ll(e), s);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (o) {
              Cc(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vl(e, t, n) {
          (Zo = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zo; ) {
            var a = Zo,
              i = a.child;
            if (22 === a.tag && r) {
              var s = null !== a.memoizedState || Xo;
              if (!s) {
                var o = a.alternate,
                  l = (null !== o && null !== o.memoizedState) || $o;
                o = Xo;
                var c = $o;
                if (((Xo = s), ($o = l) && !c))
                  for (Zo = a; null !== Zo; )
                    (l = (s = Zo).child),
                      22 === s.tag && null !== s.memoizedState
                        ? kl(a)
                        : null !== l
                        ? ((l.return = s), (Zo = l))
                        : kl(a);
                for (; null !== i; ) (Zo = i), bl(i, t, n), (i = i.sibling);
                (Zo = a), (Xo = o), ($o = c);
              }
              wl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Zo = i))
                : wl(e);
          }
        }
        function wl(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $o || al(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !$o)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var s = t.updateQueue;
                      null !== s && Bi(t, s, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Bi(t, o, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var p = d.dehydrated;
                            null !== p && Qt(p);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                $o || (512 & t.flags && il(t));
              } catch (f) {
                Cc(t, t.return, f);
              }
            }
            if (t === e) {
              Zo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function xl(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (t === e) {
              Zo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function kl(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    al(4, t);
                  } catch (l) {
                    Cc(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Cc(t, a, l);
                    }
                  }
                  var i = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Cc(t, i, l);
                  }
                  break;
                case 5:
                  var s = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Cc(t, s, l);
                  }
              }
            } catch (l) {
              Cc(t, t.return, l);
            }
            if (t === e) {
              Zo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Zo = o);
              break;
            }
            Zo = t.return;
          }
        }
        var Sl,
          Cl = Math.ceil,
          jl = b.ReactCurrentDispatcher,
          Al = b.ReactCurrentOwner,
          Pl = b.ReactCurrentBatchConfig,
          Nl = 0,
          Ml = null,
          El = null,
          Tl = 0,
          zl = 0,
          Ll = Sa(0),
          Fl = 0,
          Ol = null,
          Rl = 0,
          Bl = 0,
          Il = 0,
          ql = null,
          Dl = null,
          Ql = 0,
          Ul = 1 / 0,
          Hl = null,
          Wl = !1,
          Vl = null,
          Kl = null,
          Yl = !1,
          Gl = null,
          Xl = 0,
          $l = 0,
          Jl = null,
          Zl = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & Nl) ? $e() : -1 !== Zl ? Zl : (Zl = $e());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nl) && 0 !== Tl
            ? Tl & -Tl
            : null !== hi.transition
            ? (0 === ec && (ec = ht()), ec)
            : 0 !== (e = vt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < $l) throw (($l = 0), (Jl = null), Error(i(185)));
          _t(e, n, r),
            (0 !== (2 & Nl) && e === Ml) ||
              (e === Ml && (0 === (2 & Nl) && (Bl |= n), 4 === Fl && lc(e, Tl)),
              ac(e, r),
              1 === n &&
                0 === Nl &&
                0 === (1 & t.mode) &&
                ((Ul = $e() + 500), Ia && Qa()));
        }
        function ac(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var s = 31 - st(i),
                o = 1 << s,
                l = a[s];
              -1 === l
                ? (0 !== (o & n) && 0 === (o & r)) || (a[s] = ft(o, t))
                : l <= t && (e.expiredLanes |= o),
                (i &= ~o);
            }
          })(e, t);
          var r = pt(e, e === Ml ? Tl : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ia = !0), Da(e);
                  })(cc.bind(null, e))
                : Da(cc.bind(null, e)),
                sa(function () {
                  0 === (6 & Nl) && Qa();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Mc(n, ic.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ic(e, t) {
          if (((Zl = -1), (ec = 0), 0 !== (6 & Nl))) throw Error(i(327));
          var n = e.callbackNode;
          if (kc() && e.callbackNode !== n) return null;
          var r = pt(e, e === Ml ? Tl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = _c(e, r);
          else {
            t = r;
            var a = Nl;
            Nl |= 2;
            var s = hc();
            for (
              (Ml === e && Tl === t) ||
              ((Hl = null), (Ul = $e() + 500), fc(e, t));
              ;

            )
              try {
                vc();
                break;
              } catch (l) {
                mc(e, l);
              }
            wi(),
              (jl.current = s),
              (Nl = a),
              null !== El ? (t = 0) : ((Ml = null), (Tl = 0), (t = Fl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = sc(e, a))),
              1 === t)
            )
              throw ((n = Ol), fc(e, 0), lc(e, r), ac(e, $e()), n);
            if (6 === t) lc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(i(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = _c(e, r)) &&
                    0 !== (s = mt(e)) &&
                    ((r = s), (t = sc(e, s))),
                  1 === t))
              )
                throw ((n = Ol), fc(e, 0), lc(e, r), ac(e, $e()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  xc(e, Dl, Hl);
                  break;
                case 3:
                  if (
                    (lc(e, r),
                    (130023424 & r) === r && 10 < (t = Ql + 500 - $e()))
                  ) {
                    if (0 !== pt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xc.bind(null, e, Dl, Hl), t);
                    break;
                  }
                  xc(e, Dl, Hl);
                  break;
                case 4:
                  if ((lc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - st(r);
                    (s = 1 << o), (o = t[o]) > a && (a = o), (r &= ~s);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = $e() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xc.bind(null, e, Dl, Hl), r);
                    break;
                  }
                  xc(e, Dl, Hl);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ac(e, $e()), e.callbackNode === n ? ic.bind(null, e) : null;
        }
        function sc(e, t) {
          var n = ql;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = _c(e, t)) && ((t = Dl), (Dl = n), null !== t && oc(t)),
            e
          );
        }
        function oc(e) {
          null === Dl ? (Dl = e) : Dl.push.apply(Dl, e);
        }
        function lc(e, t) {
          for (
            t &= ~Il,
              t &= ~Bl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - st(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 !== (6 & Nl)) throw Error(i(327));
          kc();
          var t = pt(e, 0);
          if (0 === (1 & t)) return ac(e, $e()), null;
          var n = _c(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = sc(e, r)));
          }
          if (1 === n) throw ((n = Ol), fc(e, 0), lc(e, t), ac(e, $e()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xc(e, Dl, Hl),
            ac(e, $e()),
            null
          );
        }
        function uc(e, t) {
          var n = Nl;
          Nl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && ((Ul = $e() + 500), Ia && Qa());
          }
        }
        function dc(e) {
          null !== Gl && 0 === Gl.tag && 0 === (6 & Nl) && kc();
          var t = Nl;
          Nl |= 1;
          var n = Pl.transition,
            r = vt;
          try {
            if (((Pl.transition = null), (vt = 1), e)) return e();
          } finally {
            (vt = r), (Pl.transition = n), 0 === (6 & (Nl = t)) && Qa();
          }
        }
        function pc() {
          (zl = Ll.current), Ca(Ll);
        }
        function fc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== El))
            for (n = El.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  as(), Ca(Na), Ca(Pa), us();
                  break;
                case 5:
                  ss(r);
                  break;
                case 4:
                  as();
                  break;
                case 13:
                case 19:
                  Ca(os);
                  break;
                case 10:
                  xi(r.type._context);
                  break;
                case 22:
                case 23:
                  pc();
              }
              n = n.return;
            }
          if (
            ((Ml = e),
            (El = e = Lc(e.current, null)),
            (Tl = zl = t),
            (Fl = 0),
            (Ol = null),
            (Il = Bl = Rl = 0),
            (Dl = ql = null),
            null !== ji)
          ) {
            for (t = 0; t < ji.length; t++)
              if (null !== (r = (n = ji[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var s = i.next;
                  (i.next = a), (r.next = s);
                }
                n.pending = r;
              }
            ji = null;
          }
          return e;
        }
        function mc(e, t) {
          for (;;) {
            var n = El;
            try {
              if ((wi(), (ds.current = io), _s)) {
                for (var r = ms.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                _s = !1;
              }
              if (
                ((fs = 0),
                (gs = hs = ms = null),
                (ys = !1),
                (vs = 0),
                (Al.current = null),
                null === n || null === n.return)
              ) {
                (Fl = 1), (Ol = t), (El = null);
                break;
              }
              e: {
                var s = e,
                  o = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Tl),
                  (l.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = l,
                    p = d.tag;
                  if (0 === (1 & d.mode) && (0 === p || 11 === p || 15 === p)) {
                    var f = d.alternate;
                    f
                      ? ((d.updateQueue = f.updateQueue),
                        (d.memoizedState = f.memoizedState),
                        (d.lanes = f.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = _o(o);
                  if (null !== m) {
                    (m.flags &= -257),
                      yo(m, o, l, 0, t),
                      1 & m.mode && go(s, u, t),
                      (c = u);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    go(s, u, t), gc();
                    break e;
                  }
                  c = Error(i(426));
                } else if (ai && 1 & l.mode) {
                  var _ = _o(o);
                  if (null !== _) {
                    0 === (65536 & _.flags) && (_.flags |= 256),
                      yo(_, o, l, 0, t),
                      mi(co(c, l));
                    break e;
                  }
                }
                (s = c = co(c, l)),
                  4 !== Fl && (Fl = 2),
                  null === ql ? (ql = [s]) : ql.push(s),
                  (s = o);
                do {
                  switch (s.tag) {
                    case 3:
                      (s.flags |= 65536),
                        (t &= -t),
                        (s.lanes |= t),
                        Oi(s, mo(0, c, t));
                      break e;
                    case 1:
                      l = c;
                      var y = s.type,
                        v = s.stateNode;
                      if (
                        0 === (128 & s.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== v &&
                            "function" === typeof v.componentDidCatch &&
                            (null === Kl || !Kl.has(v))))
                      ) {
                        (s.flags |= 65536),
                          (t &= -t),
                          (s.lanes |= t),
                          Oi(s, ho(s, l, t));
                        break e;
                      }
                  }
                  s = s.return;
                } while (null !== s);
              }
              wc(n);
            } catch (b) {
              (t = b), El === n && null !== n && (El = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = jl.current;
          return (jl.current = io), null === e ? io : e;
        }
        function gc() {
          (0 !== Fl && 3 !== Fl && 2 !== Fl) || (Fl = 4),
            null === Ml ||
              (0 === (268435455 & Rl) && 0 === (268435455 & Bl)) ||
              lc(Ml, Tl);
        }
        function _c(e, t) {
          var n = Nl;
          Nl |= 2;
          var r = hc();
          for ((Ml === e && Tl === t) || ((Hl = null), fc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              mc(e, a);
            }
          if ((wi(), (Nl = n), (jl.current = r), null !== El))
            throw Error(i(261));
          return (Ml = null), (Tl = 0), Fl;
        }
        function yc() {
          for (; null !== El; ) bc(El);
        }
        function vc() {
          for (; null !== El && !Ge(); ) bc(El);
        }
        function bc(e) {
          var t = Sl(e.alternate, e, zl);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (El = t),
            (Al.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yo(n, t, zl))) return void (El = n);
            } else {
              if (null !== (n = Go(n, t)))
                return (n.flags &= 32767), void (El = n);
              if (null === e) return (Fl = 6), void (El = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (El = t);
            El = t = e;
          } while (null !== t);
          0 === Fl && (Fl = 5);
        }
        function xc(e, t, n) {
          var r = vt,
            a = Pl.transition;
          try {
            (Pl.transition = null),
              (vt = 1),
              (function (e, t, n, r) {
                do {
                  kc();
                } while (null !== Gl);
                if (0 !== (6 & Nl)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var s = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - st(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, s),
                  e === Ml && ((El = Ml = null), (Tl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Yl ||
                    ((Yl = !0),
                    Mc(tt, function () {
                      return kc(), null;
                    })),
                  (s = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || s)
                ) {
                  (s = Pl.transition), (Pl.transition = null);
                  var o = vt;
                  vt = 1;
                  var l = Nl;
                  (Nl |= 4),
                    (Al.current = null),
                    (function (e, t) {
                      if (((ea = Ht), fr((e = pr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                s = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, s.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                p = e,
                                f = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  p !== n ||
                                    (0 !== a && 3 !== p.nodeType) ||
                                    (l = o + a),
                                    p !== s ||
                                      (0 !== r && 3 !== p.nodeType) ||
                                      (c = o + r),
                                    3 === p.nodeType &&
                                      (o += p.nodeValue.length),
                                    null !== (m = p.firstChild);

                                )
                                  (f = p), (p = m);
                                for (;;) {
                                  if (p === e) break t;
                                  if (
                                    (f === n && ++u === a && (l = o),
                                    f === s && ++d === r && (c = o),
                                    null !== (m = p.nextSibling))
                                  )
                                    break;
                                  f = (p = f).parentNode;
                                }
                                p = m;
                              }
                              n =
                                -1 === l || -1 === c
                                  ? null
                                  : { start: l, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zo = t;
                        null !== Zo;

                      )
                        if (
                          ((e = (t = Zo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zo = e);
                        else
                          for (; null !== Zo; ) {
                            t = Zo;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        _ = h.memoizedState,
                                        y = t.stateNode,
                                        v = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gi(t.type, g),
                                          _
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = v;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = "")
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (w) {
                              Cc(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zo = e);
                              break;
                            }
                            Zo = t.return;
                          }
                      (h = nl), (nl = !1);
                    })(e, n),
                    _l(n, e),
                    mr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    vl(n, e, a),
                    Xe(),
                    (Nl = l),
                    (vt = o),
                    (Pl.transition = s);
                } else e.current = n;
                if (
                  (Yl && ((Yl = !1), (Gl = e), (Xl = a)),
                  (s = e.pendingLanes),
                  0 === s && (Kl = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ac(e, $e()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wl) throw ((Wl = !1), (e = Vl), (Vl = null), e);
                0 !== (1 & Xl) && 0 !== e.tag && kc(),
                  (s = e.pendingLanes),
                  0 !== (1 & s)
                    ? e === Jl
                      ? $l++
                      : (($l = 0), (Jl = e))
                    : ($l = 0),
                  Qa();
              })(e, t, n, r);
          } finally {
            (Pl.transition = a), (vt = r);
          }
          return null;
        }
        function kc() {
          if (null !== Gl) {
            var e = bt(Xl),
              t = Pl.transition,
              n = vt;
            try {
              if (((Pl.transition = null), (vt = 16 > e ? 16 : e), null === Gl))
                var r = !1;
              else {
                if (((e = Gl), (Gl = null), (Xl = 0), 0 !== (6 & Nl)))
                  throw Error(i(331));
                var a = Nl;
                for (Nl |= 4, Zo = e.current; null !== Zo; ) {
                  var s = Zo,
                    o = s.child;
                  if (0 !== (16 & Zo.flags)) {
                    var l = s.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Zo = u; null !== Zo; ) {
                          var d = Zo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, d, s);
                          }
                          var p = d.child;
                          if (null !== p) (p.return = d), (Zo = p);
                          else
                            for (; null !== Zo; ) {
                              var f = (d = Zo).sibling,
                                m = d.return;
                              if ((sl(d), d === u)) {
                                Zo = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = m), (Zo = f);
                                break;
                              }
                              Zo = m;
                            }
                        }
                      }
                      var h = s.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var _ = g.sibling;
                            (g.sibling = null), (g = _);
                          } while (null !== g);
                        }
                      }
                      Zo = s;
                    }
                  }
                  if (0 !== (2064 & s.subtreeFlags) && null !== o)
                    (o.return = s), (Zo = o);
                  else
                    e: for (; null !== Zo; ) {
                      if (0 !== (2048 & (s = Zo).flags))
                        switch (s.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, s, s.return);
                        }
                      var y = s.sibling;
                      if (null !== y) {
                        (y.return = s.return), (Zo = y);
                        break e;
                      }
                      Zo = s.return;
                    }
                }
                var v = e.current;
                for (Zo = v; null !== Zo; ) {
                  var b = (o = Zo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== b)
                    (b.return = o), (Zo = b);
                  else
                    e: for (o = v; null !== Zo; ) {
                      if (0 !== (2048 & (l = Zo).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              al(9, l);
                          }
                        } catch (x) {
                          Cc(l, l.return, x);
                        }
                      if (l === o) {
                        Zo = null;
                        break e;
                      }
                      var w = l.sibling;
                      if (null !== w) {
                        (w.return = l.return), (Zo = w);
                        break e;
                      }
                      Zo = l.return;
                    }
                }
                if (
                  ((Nl = a),
                  Qa(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (vt = n), (Pl.transition = t);
            }
          }
          return !1;
        }
        function Sc(e, t, n) {
          (e = Li(e, (t = mo(0, (t = co(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (_t(e, 1, t), ac(e, t));
        }
        function Cc(e, t, n) {
          if (3 === e.tag) Sc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Sc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Kl || !Kl.has(r)))
                ) {
                  (t = Li(t, (e = ho(t, (e = co(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (_t(t, 1, e), ac(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function jc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ml === e &&
              (Tl & n) === n &&
              (4 === Fl ||
              (3 === Fl && (130023424 & Tl) === Tl && 500 > $e() - Ql)
                ? fc(e, 0)
                : (Il |= n)),
            ac(e, t);
        }
        function Ac(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = tc();
          null !== (e = Ni(e, t)) && (_t(e, t, n), ac(e, n));
        }
        function Pc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ac(e, n);
        }
        function Nc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Ac(e, n);
        }
        function Mc(e, t) {
          return Ke(e, t);
        }
        function Ec(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Tc(e, t, n, r) {
          return new Ec(e, t, n, r);
        }
        function zc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Tc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Fc(e, t, n, r, a, s) {
          var o = 2;
          if (((r = e), "function" === typeof e)) zc(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case k:
                return Oc(n.children, a, s, t);
              case S:
                (o = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Tc(12, n, t, 2 | a)).elementType = C), (e.lanes = s), e
                );
              case N:
                return (
                  ((e = Tc(13, n, t, a)).elementType = N), (e.lanes = s), e
                );
              case M:
                return (
                  ((e = Tc(19, n, t, a)).elementType = M), (e.lanes = s), e
                );
              case z:
                return Rc(n, a, s, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case j:
                      o = 10;
                      break e;
                    case A:
                      o = 9;
                      break e;
                    case P:
                      o = 11;
                      break e;
                    case E:
                      o = 14;
                      break e;
                    case T:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Tc(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = s),
            t
          );
        }
        function Oc(e, t, n, r) {
          return ((e = Tc(7, e, r, t)).lanes = n), e;
        }
        function Rc(e, t, n, r) {
          return (
            ((e = Tc(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Bc(e, t, n) {
          return ((e = Tc(6, e, null, t)).lanes = n), e;
        }
        function Ic(e, t, n) {
          return (
            ((t = Tc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function qc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Dc(e, t, n, r, a, i, s, o, l) {
          return (
            (e = new qc(e, t, n, o, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Tc(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ei(i),
            e
          );
        }
        function Qc(e) {
          if (!e) return Aa;
          e: {
            if (Qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ta(n)) return Fa(e, n, t);
          }
          return t;
        }
        function Uc(e, t, n, r, a, i, s, o, l) {
          return (
            ((e = Dc(n, r, !0, e, 0, i, 0, o, l)).context = Qc(null)),
            (n = e.current),
            ((i = zi((r = tc()), (a = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Li(n, i, a),
            (e.current.lanes = a),
            _t(e, a, r),
            ac(e, r),
            e
          );
        }
        function Hc(e, t, n, r) {
          var a = t.current,
            i = tc(),
            s = nc(a);
          return (
            (n = Qc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zi(i, s)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Li(a, t, s)) && (rc(e, a, s, i), Fi(e, a, s)),
            s
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Kc(e, t) {
          Vc(e, t), (e = e.alternate) && Vc(e, t);
        }
        Sl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) bo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Mo(t), fi();
                        break;
                      case 5:
                        is(t);
                        break;
                      case 1:
                        Ta(t.type) && Oa(t);
                        break;
                      case 4:
                        rs(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        ja(_i, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (ja(os, 1 & os.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Bo(e, t, n)
                            : (ja(os, 1 & os.current),
                              null !== (e = Wo(e, t, n)) ? e.sibling : null);
                        ja(os, 1 & os.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Uo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          ja(os, os.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Co(e, t, n);
                    }
                    return Wo(e, t, n);
                  })(e, t, n)
                );
              bo = 0 !== (131072 & e.flags);
            }
          else (bo = !1), ai && 0 !== (1048576 & t.flags) && Za(t, Va, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ho(e, t), (e = t.pendingProps);
              var a = Ea(t, Pa.current);
              Si(t, n), (a = ks(null, t, r, e, a, n));
              var s = Ss();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((s = !0), Oa(t)) : (s = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ei(t),
                    (a.updater = Di),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wi(t, r, e, n),
                    (t = No(null, t, r, !0, s, n)))
                  : ((t.tag = 0),
                    ai && s && ei(t),
                    wo(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ho(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === E) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gi(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ao(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Po(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xo(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ko(null, t, r, gi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ao(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Po(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 3:
              e: {
                if ((Mo(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (s = t.memoizedState).element),
                  Ti(e, t),
                  Ri(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), s.isDehydrated)) {
                  if (
                    ((s = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = s),
                    (t.memoizedState = s),
                    256 & t.flags)
                  ) {
                    t = Eo(e, t, r, n, (a = co(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Eo(e, t, r, n, (a = co(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ca(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = $i(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((fi(), r === a)) {
                    t = Wo(e, t, n);
                    break e;
                  }
                  wo(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                is(t),
                null === e && ci(t),
                (r = t.type),
                (a = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== s && na(r, s) && (t.flags |= 32),
                jo(e, t),
                wo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return Bo(e, t, n);
            case 4:
              return (
                rs(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xi(t, null, r, n)) : wo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xo(e, t, r, (a = t.elementType === r ? a : gi(r, a)), n)
              );
            case 7:
              return wo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (s = t.memoizedProps),
                  (o = a.value),
                  ja(_i, r._currentValue),
                  (r._currentValue = o),
                  null !== s)
                )
                  if (or(s.value, o)) {
                    if (s.children === a.children && !Na.current) {
                      t = Wo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var l = s.dependencies;
                      if (null !== l) {
                        o = s.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === s.tag) {
                              (c = zi(-1, n & -n)).tag = 2;
                              var u = s.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (s.lanes |= n),
                              null !== (c = s.alternate) && (c.lanes |= n),
                              ki(s.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === s.tag)
                        o = s.type === t.type ? null : s.child;
                      else if (18 === s.tag) {
                        if (null === (o = s.return)) throw Error(i(341));
                        (o.lanes |= n),
                          null !== (l = o.alternate) && (l.lanes |= n),
                          ki(o, n, t),
                          (o = s.sibling);
                      } else o = s.child;
                      if (null !== o) o.return = s;
                      else
                        for (o = s; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (s = o.sibling)) {
                            (s.return = o.return), (o = s);
                            break;
                          }
                          o = o.return;
                        }
                      s = o;
                    }
                wo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Si(t, n),
                (r = r((a = Ci(a)))),
                (t.flags |= 1),
                wo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gi((r = t.type), t.pendingProps)),
                ko(e, t, r, (a = gi(r.type, a)), n)
              );
            case 15:
              return So(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gi(r, a)),
                Ho(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), Oa(t)) : (e = !1),
                Si(t, n),
                Ui(t, r, a),
                Wi(t, r, a, n),
                No(null, t, r, !0, e, n)
              );
            case 19:
              return Uo(e, t, n);
            case 22:
              return Co(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Yc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          this._internalRoot = e;
        }
        function $c(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zc() {}
        function eu(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var s = i;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Wc(s);
                o.call(e);
              };
            }
            Hc(t, s, e, a);
          } else
            s = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Wc(s);
                    i.call(e);
                  };
                }
                var s = Uc(t, r, e, 0, null, !1, 0, "", Zc);
                return (
                  (e._reactRootContainer = s),
                  (e[ma] = s.current),
                  Qr(8 === e.nodeType ? e.parentNode : e),
                  dc(),
                  s
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = Wc(l);
                  o.call(e);
                };
              }
              var l = Dc(e, 0, !1, null, 0, !1, 0, "", Zc);
              return (
                (e._reactRootContainer = l),
                (e[ma] = l.current),
                Qr(8 === e.nodeType ? e.parentNode : e),
                dc(function () {
                  Hc(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return Wc(s);
        }
        (Xc.prototype.render = Gc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Hc(e, t, null, null);
          }),
          (Xc.prototype.unmount = Gc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                dc(function () {
                  Hc(null, e, null, null);
                }),
                  (t[ma] = null);
              }
            }),
          (Xc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ac(t, $e()),
                    0 === (6 & Nl) && ((Ul = $e() + 500), Qa()));
                }
                break;
              case 13:
                dc(function () {
                  var t = Ni(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  Kc(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Ni(e, 134217728);
              if (null !== t) rc(t, e, 134217728, tc());
              Kc(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = Ni(e, t);
              if (null !== n) rc(n, e, t, tc());
              Kc(e, t);
            }
          }),
          (St = function () {
            return vt;
          }),
          (Ct = function (e, t) {
            var n = vt;
            try {
              return (vt = e), t();
            } finally {
              vt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(i(90));
                      K(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = uc),
          (Ne = dc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [va, ba, wa, je, Ae, uc],
          },
          nu = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          ru = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!au.isDisabled && au.supportsFiber)
            try {
              (at = au.inject(ru)), (it = au);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!$c(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!$c(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Yc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Dc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Qr(8 === e.nodeType ? e.parentNode : e),
              new Gc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return dc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Jc(t)) throw Error(i(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!$c(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              s = "",
              o = Yc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (s = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Uc(t, null, e, 1, null != n ? n : null, a, 0, s, o)),
              (e[ma] = t.current),
              Qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Jc(t)) throw Error(i(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Jc(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (dc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Jc(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return eu(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          s = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            i = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            s.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: i,
            _owner: o.current,
          };
        }
        (t.Fragment = i), (t.jsx = c), (t.jsxs = c);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          s = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function _(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function y() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (_.prototype.isReactComponent = {}),
          (_.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (_.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = _.prototype);
        var b = (v.prototype = new y());
        (b.constructor = v), h(b, _.prototype), (b.isPureReactComponent = !0);
        var w = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            i = {},
            s = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (s = "" + t.key),
            t))
              x.call(t, a) && !S.hasOwnProperty(a) && (i[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            i.children = c;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === i[a] && (i[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: s,
            ref: o,
            props: i,
            _owner: k.current,
          };
        }
        function j(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var A = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, i, s) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (o) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (s = s((l = e))),
              (e = "" === i ? "." + P(l, 0) : i),
              w(s)
                ? ((a = ""),
                  null != e && (a = e.replace(A, "$&/") + "/"),
                  N(s, t, a, "", function (e) {
                    return e;
                  }))
                : null != s &&
                  (j(s) &&
                    (s = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      s,
                      a +
                        (!s.key || (l && l.key === s.key)
                          ? ""
                          : ("" + s.key).replace(A, "$&/") + "/") +
                        e
                    )),
                  t.push(s)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), w(e)))
            for (var c = 0; c < e.length; c++) {
              var u = i + P((o = e[c]), c);
              l += N(o, t, a, u, s);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(o = e.next()).done; )
              l += N((o = o.value), t, a, (u = i + P(o, c++)), s);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function E(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          z = { transition: null },
          L = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: M,
          forEach: function (e, t, n) {
            M(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              M(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              M(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!j(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = _),
          (t.Fragment = a),
          (t.Profiler = s),
          (t.PureComponent = v),
          (t.StrictMode = i),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              i = e.key,
              s = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((s = t.ref), (o = k.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in t)
                x.call(t, c) &&
                  !S.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: s,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = j),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: E,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, s = a >>> 1; r < s; ) {
              var o = 2 * (r + 1) - 1,
                l = e[o],
                c = o + 1,
                u = e[c];
              if (0 > i(l, n))
                c < a && 0 > i(u, l)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = l), (e[o] = n), (r = o));
              else {
                if (!(c < a && 0 > i(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var s = performance;
          t.unstable_now = function () {
            return s.now();
          };
        } else {
          var o = Date,
            l = o.now();
          t.unstable_now = function () {
            return o.now() - l;
          };
        }
        var c = [],
          u = [],
          d = 1,
          p = null,
          f = 3,
          m = !1,
          h = !1,
          g = !1,
          _ = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          v = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function w(e) {
          if (((g = !1), b(e), !h))
            if (null !== r(c)) (h = !0), z(x);
            else {
              var t = r(u);
              null !== t && L(w, t.startTime - e);
            }
        }
        function x(e, n) {
          (h = !1), g && ((g = !1), y(j), (j = -1)), (m = !0);
          var i = f;
          try {
            for (
              b(n), p = r(c);
              null !== p && (!(p.expirationTime > n) || (e && !N()));

            ) {
              var s = p.callback;
              if ("function" === typeof s) {
                (p.callback = null), (f = p.priorityLevel);
                var o = s(p.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (p.callback = o)
                    : p === r(c) && a(c),
                  b(n);
              } else a(c);
              p = r(c);
            }
            if (null !== p) var l = !0;
            else {
              var d = r(u);
              null !== d && L(w, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (p = null), (f = i), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          C = null,
          j = -1,
          A = 5,
          P = -1;
        function N() {
          return !(t.unstable_now() - P < A);
        }
        function M() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? k() : ((S = !1), (C = null));
            }
          } else S = !1;
        }
        if ("function" === typeof v)
          k = function () {
            v(M);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var E = new MessageChannel(),
            T = E.port2;
          (E.port1.onmessage = M),
            (k = function () {
              T.postMessage(null);
            });
        } else
          k = function () {
            _(M, 0);
          };
        function z(e) {
          (C = e), S || ((S = !0), k());
        }
        function L(e, n) {
          j = _(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), z(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (A = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var s = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? s + i : s)
                : (i = s),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (o = i + o),
                sortIndex: -1,
              }),
              i > s
                ? ((e.sortIndex = i),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (g ? (y(j), (j = -1)) : (g = !0), L(w, i - s)))
                : ((e.sortIndex = o), n(c, e), h || m || ((h = !0), z(x))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      16: function (e) {
        e.exports = (function () {
          "use strict";
          var e = function () {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, a) &&
                        (e[a] = t[a]);
                  return e;
                }),
              e.apply(this, arguments)
            );
          };
          function t() {
            var e = document.createElement("div");
            return (
              (e.style.cssText =
                "position: fixed; top: 0; height: 100vh; pointer-events: none;"),
              document.documentElement.insertBefore(
                e,
                document.documentElement.firstChild
              ),
              e
            );
          }
          function n(e) {
            document.documentElement.removeChild(e);
          }
          function r() {
            var e = t(),
              r = window.innerHeight,
              a = e.offsetHeight,
              i = a - r;
            return (
              n(e),
              { vh: a, windowHeight: r, offset: i, isNeeded: 0 !== i, value: 0 }
            );
          }
          function a() {}
          function i() {
            var e = r();
            return (e.value = e.offset), e;
          }
          function s() {
            var e = r();
            return (e.value = 0.01 * e.windowHeight), e;
          }
          var o = Object.freeze({
            noop: a,
            computeDifference: i,
            redefineVhUnit: s,
          });
          function l(e) {
            return "string" === typeof e && e.length > 0;
          }
          function c(e) {
            return "function" === typeof e;
          }
          var u = Object.freeze({
            cssVarName: "vh-offset",
            redefineVh: !1,
            method: i,
            force: !1,
            bind: !0,
            updateOnTouch: !1,
            onUpdate: a,
          });
          function d(t) {
            if (l(t)) return e({}, u, { cssVarName: t });
            if ("object" !== typeof t) return u;
            var n = {
                force: !0 === t.force,
                bind: !1 !== t.bind,
                updateOnTouch: !0 === t.updateOnTouch,
                onUpdate: c(t.onUpdate) ? t.onUpdate : a,
              },
              r = !0 === t.redefineVh;
            return (
              (n.method = o[r ? "redefineVhUnit" : "computeDifference"]),
              (n.cssVarName = l(t.cssVarName)
                ? t.cssVarName
                : r
                ? "vh"
                : u.cssVarName),
              n
            );
          }
          var p = !1,
            f = [];
          try {
            var m = Object.defineProperty({}, "passive", {
              get: function () {
                p = !0;
              },
            });
            window.addEventListener("test", m, m),
              window.removeEventListener("test", m, m);
          } catch (b) {
            p = !1;
          }
          function h(e, t) {
            f.push({ eventName: e, callback: t }),
              window.addEventListener(e, t, !!p && { passive: !0 });
          }
          function g() {
            f.forEach(function (e) {
              window.removeEventListener(e.eventName, e.callback);
            }),
              (f = []);
          }
          function _(e, t) {
            document.documentElement.style.setProperty(
              "--" + e,
              t.value + "px"
            );
          }
          function y(t, n) {
            return e({}, t, { unbind: g, recompute: n.method });
          }
          function v(e) {
            var t = Object.freeze(d(e)),
              n = y(t.method(), t);
            if (!n.isNeeded && !t.force) return n;
            if ((_(t.cssVarName, n), t.onUpdate(n), !t.bind)) return n;
            function r() {
              window.requestAnimationFrame(function () {
                var e = t.method();
                _(t.cssVarName, e), t.onUpdate(y(e, t));
              });
            }
            return (
              n.unbind(),
              h("orientationchange", r),
              t.updateOnTouch && h("touchmove", r),
              n
            );
          }
          return v;
        })();
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/lite/"),
    (function () {
      "use strict";
      var e = n(791),
        t = n(164),
        r = n(16),
        a = n.n(r);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t) {
        if (e) {
          if ("string" === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i,
                s,
                o = [],
                l = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (o.push(r.value), o.length !== t);
                    l = !0
                  );
              } catch (u) {
                (c = !0), (a = u);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((s = n.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          s(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e) {
        return (
          (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          l(e)
        );
      }
      function c(e) {
        var t = (function (e, t) {
          if ("object" !== l(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== l(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === l(t) ? t : String(t);
      }
      function u(e, t, n) {
        return (
          (t = c(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function f() {
        f = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          o = a.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (M) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var i = t && t.prototype instanceof m ? t : m,
            s = Object.create(i.prototype),
            o = new A(a || []);
          return r(s, "_invoke", { value: k(e, n, o) }), s;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (M) {
            return { type: "throw", arg: M };
          }
        }
        e.wrap = u;
        var p = {};
        function m() {}
        function h() {}
        function g() {}
        var _ = {};
        c(_, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          v = y && y(y(P([])));
        v && v !== t && n.call(v, i) && (_ = v);
        var b = (g.prototype = m.prototype = Object.create(_));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function a(r, i, s, o) {
            var c = d(e[r], e, i);
            if ("throw" !== c.type) {
              var u = c.arg,
                p = u.value;
              return p && "object" == l(p) && n.call(p, "__await")
                ? t.resolve(p.__await).then(
                    function (e) {
                      a("next", e, s, o);
                    },
                    function (e) {
                      a("throw", e, s, o);
                    }
                  )
                : t.resolve(p).then(
                    function (e) {
                      (u.value = e), s(u);
                    },
                    function (e) {
                      return a("throw", e, s, o);
                    }
                  );
            }
            o(c.arg);
          }
          var i;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return N();
            }
            for (n.method = a, n.arg = i; ; ) {
              var s = n.delegate;
              if (s) {
                var o = S(s, n);
                if (o) {
                  if (o === p) continue;
                  return o;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = d(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === p)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function S(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                S(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var a = d(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), p
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(C, this),
            this.reset(!0);
        }
        function P(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = g),
          r(b, "constructor", { value: g, configurable: !0 }),
          r(g, "constructor", { value: h, configurable: !0 }),
          (h.displayName = c(g, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), c(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(x.prototype),
          c(x.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var s = new x(u(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          w(b),
          c(b, o, "Generator"),
          c(b, i, function () {
            return this;
          }),
          c(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = P),
          (A.prototype = {
            constructor: A,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var o = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (o && l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (o) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var s = i ? i.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), j(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    j(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: P(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function m(e, t, n, r, a, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (c) {
          return void n(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function h(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function s(e) {
              m(i, r, a, s, o, "next", e);
            }
            function o(e) {
              m(i, r, a, s, o, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function g(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function _(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, c(r.key), r);
        }
      }
      function y(e, t, n) {
        return (
          t && _(e.prototype, t),
          n && _(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function v(e, t) {
        return (
          (v = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          v(e, t)
        );
      }
      function b(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && v(e, t);
      }
      function w(e) {
        return (
          (w = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          w(e)
        );
      }
      function x(e, t) {
        if (t && ("object" === l(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function k(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = w(e);
          if (t) {
            var a = w(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return x(this, n);
        };
      }
      function S(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          s(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var C = "FactCharacter_faded__KCMOk",
        j = "FactCharacter_hidden__J3UzA",
        A = "FactCharacter_bounce__6RqJ-",
        P = n(184),
        N = (function (e) {
          b(n, e);
          var t = k(n);
          function n(e) {
            var r;
            g(this, n),
              ((r = t.call(this, e)).style = {}),
              (r.componentDidMount = function () {
                r.props.faded && r.setState({ faded: !0 });
              }),
              (r._renderAssets = function () {
                return r.props.character.assets.map(function (e) {
                  var t = r.props.character,
                    n = {
                      position: "absolute",
                      top: "".concat(
                        ((e.y - t.crop_y) / t.crop_height) * 100,
                        "%"
                      ),
                      left: "".concat(
                        ((e.x - t.crop_x) / t.crop_width) * 100,
                        "%"
                      ),
                      height: "".concat((e.height / t.crop_height) * 100, "%"),
                      width: "".concat((e.width / t.crop_width) * 100, "%"),
                      transform: [],
                    },
                    a = p(
                      p({}, r.style),
                      {},
                      {
                        zIndex: r.props.selected ? 301 + e.z : e.z,
                        pointerEvents: "none",
                      }
                    );
                  return (
                    t.mirrored_y && n.transform.push({ rotateY: "180deg" }),
                    t.mirrored_x && n.transform.push({ rotateX: "180deg" }),
                    (0, P.jsx)(
                      "div",
                      {
                        style: a,
                        className: ""
                          .concat(
                            r.props.faded && r.state.faded
                              ? C
                              : r.props.faded
                              ? j
                              : "",
                            " "
                          )
                          .concat(r.props.bounce ? A : ""),
                        children: (0, P.jsx)("img", {
                          alt: (e.name + "").substr(
                            0,
                            (e.name + "").length - 4
                          ),
                          style: n,
                          src: e.image_url.replace(
                            "picmonic_assets",
                            "picmonic_assets_threequarter"
                          ),
                        }),
                      },
                      e.character_asset_id
                    )
                  );
                });
              });
            var a = r.props.character;
            return (
              (r.state = { faded: !1 }),
              (r.style = {
                height: "".concat((a.crop_height / 1700) * 100, "%"),
                width: "".concat((a.crop_width / 2200) * 100, "%"),
                top: "".concat(((a.character_y + a.crop_y) / 1700) * 100, "%"),
                left: "".concat(((a.character_x + a.crop_x) / 2200) * 100, "%"),
                position: "absolute",
                overflow: "hidden",
              }),
              r
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return this._renderAssets();
                },
              },
            ]),
            n
          );
        })(e.PureComponent);
      function M(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var E = {
          assignment_turned_in: (0, P.jsx)("path", {
            d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
          }),
          cancel: (0, P.jsx)("path", {
            d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
          }),
          check_box: (0, P.jsx)("path", {
            d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
          }),
          check_circle: (0, P.jsx)("path", {
            d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z",
          }),
          check_circle_outline: (0, P.jsx)("path", {
            d: "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
          }),
          chevron_left: (0, P.jsx)("path", {
            d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
          }),
          chevron_right: (0, P.jsx)("path", {
            d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
          }),
          close: (0, P.jsx)("path", {
            d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          }),
          closed_caption: (0, P.jsx)("path", {
            d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z",
          }),
          done: (0, P.jsx)("path", {
            d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
          }),
          feedback: (0, P.jsx)("path", {
            d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z",
          }),
          flare: (0, P.jsx)("path", {
            d: "M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z",
          }),
          info: (0, P.jsx)("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
          }),
          keyboard_arrow_down: (0, P.jsx)("path", {
            d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
          }),
          keyboard_arrow_up: (0, P.jsx)("path", {
            d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
          }),
          lightbulb_outline: (0, P.jsx)("path", {
            d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z",
          }),
          music_note: (0, P.jsx)("path", {
            d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
          }),
          pause: (0, P.jsx)("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }),
          person: (0, P.jsx)("path", {
            d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
          }),
          phone: (0, P.jsx)("path", {
            d: "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z",
          }),
          play_arrow: (0, P.jsx)("path", { d: "M8 5v14l11-7z" }),
          play_circle_filled: (0, P.jsx)("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
          }),
          play_circle_outline: (0, P.jsx)("path", {
            d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
          }),
          play_folder: (0, P.jsx)("path", {
            d: "M32.2212 1.39825C32.0251 0.62825 31.0723 0 30.1021 0H4.89969C3.92767 0 2.97492 0.62825 2.78052 1.39825L2.42849 3.5H32.5715L32.2212 1.39825ZM33.9849 5.25H1.01512C0.873663 5.25009 0.73378 5.27971 0.604437 5.33695C0.475093 5.3942 0.359142 5.4778 0.264009 5.58241C0.168876 5.68703 0.0966589 5.81034 0.0519845 5.94446C0.00731016 6.07857 -0.00883692 6.22054 0.00457761 6.36125L1.6211 26.782C1.65331 27.1153 1.80853 27.4246 2.05654 27.6498C2.30455 27.875 2.62757 27.9998 2.96266 28H32.0373C32.3724 27.9998 32.6954 27.875 32.9435 27.6498C33.1915 27.4246 33.3467 27.1153 33.3789 26.782L34.9954 6.36125C35.0088 6.22054 34.9927 6.07857 34.948 5.94446C34.9033 5.81034 34.8311 5.68703 34.736 5.58241C34.6409 5.4778 34.5249 5.3942 34.3956 5.33695C34.2662 5.27971 34.1263 5.25009 33.9849 5.25ZM13.9981 21V12.25L21.6744 16.625L13.9981 21Z",
          }),
          playlist_play: (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)("g", {
                children: (0, P.jsx)("rect", {
                  fill: "none",
                  height: "24",
                  width: "24",
                }),
              }),
              (0, P.jsx)("g", {
                children: (0, P.jsxs)("g", {
                  children: [
                    (0, P.jsx)("rect", {
                      height: "2",
                      width: "11",
                      x: "3",
                      y: "10",
                    }),
                    (0, P.jsx)("rect", {
                      height: "2",
                      width: "11",
                      x: "3",
                      y: "6",
                    }),
                    (0, P.jsx)("rect", {
                      height: "2",
                      width: "7",
                      x: "3",
                      y: "14",
                    }),
                    (0, P.jsx)("polygon", { points: "16,13 16,21 22,17" }),
                  ],
                }),
              }),
            ],
          }),
          query_builder: (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
              (0, P.jsx)("path", {
                d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
              }),
              (0, P.jsx)("path", {
                d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z",
              }),
            ],
          }),
          radio_button_checked: (0, P.jsx)("path", {
            d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
          }),
          radio_button_unchecked: (0, P.jsx)("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
          }),
          replay: (0, P.jsx)("path", {
            d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
          }),
          share: (0, P.jsx)("path", {
            d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
          }),
          schedule: (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)("path", {
                d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
              }),
              (0, P.jsx)("path", {
                d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z",
              }),
            ],
          }),
          skip_next: (0, P.jsx)("path", {
            d: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z",
          }),
          skip_previous: (0, P.jsx)("path", {
            d: "M6 6h2v12H6zm3.5 6l8.5 6V6z",
          }),
          subscriptions: (0, P.jsx)(P.Fragment, {
            children: (0, P.jsx)("path", {
              d: "M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z",
            }),
          }),
          star: (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)("path", {
                d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
              }),
              (0, P.jsx)("path", { fill: "none", d: "M0 0h24v24H0z" }),
            ],
          }),
          timer: (0, P.jsx)("path", {
            d: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
          }),
          volume_off: (0, P.jsx)("path", {
            d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z",
          }),
          volume_up: (0, P.jsx)("path", {
            d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z",
          }),
        },
        T = ["color", "size", "icon", "className", "style"],
        z = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            return g(this, n), t.apply(this, arguments);
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = (e.color, e.size, e.icon, e.className),
                    n = e.style,
                    r = M(e, T),
                    a = p(
                      {
                        color: this.props.color,
                        fontSize: this.props.size + "px",
                      },
                      n
                    );
                  return (0, P.jsx)(
                    "svg",
                    p(
                      p(
                        {
                          viewBox: "0 0 24 24",
                          className: "material-icon " + (t || ""),
                          style: a,
                        },
                        r
                      ),
                      {},
                      { children: E[this.props.icon] }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        L = z,
        F = "Player_playerWrapper__loPnd",
        O = "Player_playerContainer__yfOX9",
        R = "Player_assetContainer__q8waG",
        B = "Player_assetWrapper__iBKgu",
        I = "Player_subtitles__LFB5r",
        q = "Player_subtitleScroller__XbOF+",
        D = "Player_overlay__mGyAr",
        Q = "Player_factCoverContainer__86FtR",
        U = "Player_factCover__9xwRi",
        H = "Player_sidebarWrapper__9xAuj",
        W = "Player_factSidebarContainer__4Lyvh",
        V =
          "Player_factSidebarContainerCollapsed__kE82d Player_factSidebarContainer__4Lyvh",
        K =
          "Player_factSidebarContainerHidden__uK5z8 Player_factSidebarContainer__4Lyvh",
        Y = "Player_factTitle__agokq",
        G = "Player_factSummary__GUQHk",
        X = "Player_factContainer__ylILb",
        $ = "Player_factScroller__-vPer",
        J = "Player_sidebarToggle__UqUpW",
        Z = "Player_header__Uz1rs",
        ee = "Player_factContainerSelected__8v-or Player_factContainer__ylILb",
        te = "Player_factNumber__-wy+r",
        ne = "Player_factHeader__g+WEs",
        re = "Player_backgroundImg__EJpCd",
        ae = "Player_learnHotspot__V9LDb",
        ie = "Player_loadingContainer__cBb6I",
        se = "Player_modalBackdrop__C+TUG",
        oe = "Player_trialBlock__kD2yl",
        le = "Player_playBtnWrapper__FyFW2",
        ce = "Player_playBtn__Kt9lP",
        ue = "Player_playBanner__iy04-",
        de = "Player_factsNav__7uny3",
        pe = "Player_factsNavItem__2YWs5",
        fe = "Player_factsNavItemActive__WNwd4",
        me = "Player_tabContentHidden__rmqgI",
        he = "Player_transcripts__k5QFa",
        ge = "Player_pulsing__xymTW",
        _e = (function (e) {
          b(n, e);
          var t = k(n);
          function n(e) {
            var r;
            g(this, n),
              ((r = t.call(this, e))._onPress = function () {
                r.props.onPressItem(r.props.fact);
              }),
              (r._renderLabel = function () {
                return r.props.index
                  ? 1 === r.props.fact.entity_type_id
                    ? (0, P.jsx)(L, {
                        icon: "person",
                        size: "14",
                        color: "#fff",
                      })
                    : r.props.index
                  : (0, P.jsx)(L, { icon: "flare", size: "14", color: "#fff" });
              }),
              (r._getFactColor = function () {
                return null === r.props.quizzed
                  ? r.props.learned
                    ? "#CCC"
                    : "#FF9319"
                  : r.props.quizzed
                  ? "#67C25E"
                  : "#F21818";
              });
            var a = r.props.fact;
            return (
              (r.style = {
                top: "calc(".concat((a.hotspot_y / 1700) * 100, "% - 10px)"),
                left: "calc(".concat((a.hotspot_x / 2200) * 100, "% - 10px)"),
              }),
              r
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("div", {
                    onClick: this._onPress,
                    className: ae,
                    style: p(
                      p({}, this.style),
                      {},
                      { borderColor: this._getFactColor() }
                    ),
                    children: this._renderLabel(),
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        ye = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a)))._onPress = function () {
                e.props.onSelectFact(e.props.fact);
              }),
              (e._getFactColor = function () {
                return null === e.props.fact.last_answer
                  ? e.props.fact.learned_flag
                    ? "#CCC"
                    : "#FF9319"
                  : e.props.fact.last_answer
                  ? "#67C25E"
                  : "#F21818";
              }),
              (e._onKeyPress = function (t) {
                (" " !== t.key && "Enter" !== t.key) || e._onPress();
              }),
              e
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.fact;
                  return (0, P.jsxs)("div", {
                    tabIndex: "0",
                    "aria-label": e.name,
                    role: "listitem",
                    onKeyPress: this._onKeyPress,
                    className: this.props.isSelected ? ee : X,
                    onClick: this._onPress,
                    ref: this.props.setRef,
                    children: [
                      (0, P.jsxs)("div", {
                        className: ne,
                        children: [
                          (0, P.jsx)("div", {
                            className: te,
                            style: { borderColor: this._getFactColor() },
                            children: e.display_order
                              ? e.display_order
                              : (0, P.jsx)(L, {
                                  icon: "flare",
                                  size: "24",
                                  color: "#CCC",
                                }),
                          }),
                          (0, P.jsxs)("div", {
                            className: Y,
                            style: { paddingLeft: 12 * e.indent + "px" },
                            children: [
                              (0, P.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                  __html: e.display_name,
                                },
                              }),
                              (0, P.jsx)("br", {}),
                              (0, P.jsx)("em", {
                                dangerouslySetInnerHTML: { __html: e.picmonic },
                              }),
                            ],
                          }),
                        ],
                      }),
                      this.props.isSelected &&
                        (0, P.jsx)("div", {
                          className: G,
                          dangerouslySetInnerHTML: { __html: e.definition },
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        ve = { FACTS: "facts", TRANSCRIPTS: "transcripts" },
        be = (function (t) {
          b(r, t);
          var n = k(r);
          function r(t) {
            var a;
            return (
              g(this, r),
              ((a = n.call(this, t))._renderFacts = function () {
                return a.props.facts.map(function (e) {
                  return e.header
                    ? a.props.factsCollapased
                      ? null
                      : (0, P.jsx)(
                          "div",
                          {
                            className: Z,
                            dangerouslySetInnerHTML: {
                              __html: e.display_name.toUpperCase(),
                            },
                          },
                          e.fact_id
                        )
                    : (0, P.jsx)(
                        ye,
                        {
                          fact: e,
                          isSelected:
                            a.props.selectedFact &&
                            a.props.selectedFact.fact_id === e.fact_id,
                          onSelectFact: a.props.onSelectFact,
                          setRef:
                            a.props.selectedFact &&
                            a.props.selectedFact.fact_id === e.fact_id
                              ? a._setSelectedFactRef
                              : null,
                        },
                        e.fact_id
                      );
                });
              }),
              (a._scrollToSelectedFact = function () {}),
              (a._scroll = function () {}),
              (a.componentDidMount = function () {}),
              (a.componentDidUpdate = function (e) {
                e.selectedFact !== a.props.selectedFact &&
                  setTimeout(function () {
                    a.selectedFactRef &&
                      a.scroller.current &&
                      (a.scroller.current.scroll
                        ? a.scroller.current.scroll({
                            top: a.selectedFactRef.offsetTop,
                            behavior: "smooth",
                          })
                        : a.selectedFactRef.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          }));
                  }, 50);
              }),
              (a._setSelectedFactRef = function (e) {
                a.selectedFactRef = e;
              }),
              (a._selectTab = function (e) {
                a.setState({ selectedTab: e });
              }),
              (a._renderTabs = function () {
                return Object.values(ve).map(function (e) {
                  return (0, P.jsx)(
                    "li",
                    {
                      className: ""
                        .concat(pe, " ")
                        .concat(a.state.selectedTab === e ? fe : ""),
                      onClick: function () {
                        return a._selectTab(e);
                      },
                      onKeyDown: function (t) {
                        return "Enter" === t.key && a._selectTab(e);
                      },
                      tabIndex: "0",
                      "aria-label": e,
                      children:
                        a.props.show && a.props.factsCollapased
                          ? e[0].toUpperCase()
                          : e.toUpperCase(),
                    },
                    e
                  );
                });
              }),
              (a.scroller = e.createRef()),
              (a.state = { selectedTab: ve.FACTS }),
              a
            );
          }
          return (
            y(r, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("div", {
                    className: H,
                    children: [
                      this.props.show &&
                        (0, P.jsx)("ul", {
                          className: de,
                          children: this._renderTabs(),
                        }),
                      (0, P.jsxs)("div", {
                        className: this.props.show
                          ? this.props.factsCollapased
                            ? V
                            : W
                          : K,
                        children: [
                          (0, P.jsx)("div", {
                            className: ""
                              .concat($, " ")
                              .concat(
                                this.state.selectedTab !== ve.FACTS ? me : ""
                              ),
                            ref: this.scroller,
                            role: "list",
                            children: this._renderFacts(),
                          }),
                          (0, P.jsx)("div", {
                            className: ""
                              .concat(he, " ")
                              .concat(
                                this.state.selectedTab !== ve.TRANSCRIPTS
                                  ? me
                                  : ""
                              ),
                            children: (0, P.jsx)("p", {
                              dangerouslySetInnerHTML: {
                                __html:
                                  this.props.show && this.props.factsCollapased
                                    ? ""
                                    : this.props.transcripts,
                              },
                            }),
                          }),
                          this.props.show &&
                            (0, P.jsx)("button", {
                              className: J,
                              onClick: this.props.onClickToggle,
                              "aria-label": "Toggle Fact Sidebar",
                              children: (0, P.jsx)(L, {
                                icon: this.props.factsCollapased
                                  ? "chevron_right"
                                  : "chevron_left",
                                size: "14",
                              }),
                            }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(e.Component),
        we = "Tooltip_container__j40+r",
        xe = "Tooltip_factHeader__HcKbe",
        ke = "Tooltip_factTitle__m5LQo",
        Se = "Tooltip_factName__lJDL2",
        Ce = "Tooltip_factPicmonic__2dIKP",
        je = "Tooltip_factNumber__Q1jY5",
        Ae = "Tooltip_definition__xpocg",
        Pe = "Tooltip_summary__r22ze",
        Ne = (function (t) {
          b(r, t);
          var n = k(r);
          function r(t) {
            var a;
            return (
              g(this, r),
              ((a = n.call(this, t)).componentDidMount = function () {
                a._determineTooltipPosition();
              }),
              (a.componentDidUpdate = function (e) {
                e.fact.fact_id !== a.props.fact.fact_id &&
                  a._determineTooltipPosition();
              }),
              (a._determineTooltipPosition = function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  s,
                  o,
                  l = a.props.fact,
                  c = a.element.current.offsetHeight + 150,
                  u = {
                    height: a.props.container.offsetHeight,
                    width: a.props.container.offsetWidth,
                  },
                  d = {};
                if (l.characters.length > 0) {
                  for (var p in l.characters) {
                    var f = l.characters[p];
                    (e =
                      "undefined" != typeof e
                        ? f.character_x + f.crop_x < e
                          ? f.character_x + f.crop_x
                          : e
                        : f.character_x + f.crop_x),
                      (t =
                        "undefined" != typeof t
                          ? f.character_y + f.crop_y < t
                            ? f.character_y + f.crop_y
                            : t
                          : f.character_y + f.crop_y),
                      (n =
                        "undefined" != typeof n
                          ? f.character_x + f.crop_x + f.crop_width > n
                            ? f.character_x + f.crop_x + f.crop_width
                            : n
                          : f.character_x + f.crop_x + f.crop_width),
                      (r =
                        "undefined" != typeof r
                          ? f.character_y + f.crop_y + f.crop_height > r
                            ? f.character_y + f.crop_y + f.crop_height
                            : r
                          : f.character_y + f.crop_y + f.crop_height);
                  }
                  e ||
                    t ||
                    ((e = l.hotspot_x),
                    (n = l.hotspot_x + 260),
                    (t = l.hotspot_y)),
                    (s = e / 2200 + (n - e) / 2200),
                    (o = t / 1700);
                } else
                  (s = 0.42),
                    (o = 0.55),
                    (e = l.hotspot_x),
                    (n = l.hotspot_x + 260),
                    (t = l.hotspot_y);
                if (null !== l.tooltip_placement)
                  switch (l.tooltip_placement) {
                    case 0:
                      (d.top = 16), (d.left = 16);
                      break;
                    case 1:
                      (d.top = 16), (d.right = 16);
                      break;
                    case 2:
                      (d.top = Math.min(u.height / 2 - 42, u.height - c)),
                        (d.left = u.width / 2 - 130);
                      break;
                    case 3:
                      (d.bottom = 16), (d.left = 16);
                      break;
                    case 4:
                      (d.bottom = 16), (d.right = 16);
                  }
                else
                  s * u.width + a.element.current.offsetWidth < u.width
                    ? ((d.left = 100 * s + "%"), m())
                    : (e / 2200) * u.width >= a.element.current.offsetWidth
                    ? ((d.left = "calc(" + (e / 2200) * 100 + "% - 260px)"),
                      m())
                    : (o + (r - t) / 1700) * u.height + c < u.height
                    ? ((d.left = (e / 2200) * 100 + "%"),
                      (d.top = 100 * o + ((r - t) / 1700) * 100 + "%"))
                    : o * u.height >= c
                    ? ((d.left = (e / 2200) * 100 + "%"),
                      (d.bottom = 100 - 100 * o + "%"))
                    : m();
                function m() {
                  (i =
                    o * u.height + c > u.height
                      ? Math.abs((u.height - (o * u.height + c)) / u.height)
                      : 0),
                    (d.top = (100 * (o - i) > 0 ? 100 * (o - i) : 0) + "%");
                }
                a.setState({ styles: d });
              }),
              (a._onKeyPress = function (e) {
                (" " !== e.key && "Enter" !== e.key) ||
                  a.props.onClickDefinition();
              }),
              (a._getFactColor = function () {
                return null === a.props.fact.last_answer
                  ? a.props.fact.learned_flag
                    ? "#CCC"
                    : "#FF9319"
                  : a.props.fact.last_answer
                  ? "#67C25E"
                  : "#F21818";
              }),
              (a.element = e.createRef()),
              (a.state = { styles: {} }),
              a
            );
          }
          return (
            y(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.fact;
                  return (0, P.jsxs)("div", {
                    ref: this.element,
                    style: this.state.styles,
                    className: we,
                    children: [
                      (0, P.jsxs)("div", {
                        className: xe,
                        children: [
                          (0, P.jsx)("div", {
                            className: je,
                            style: { borderColor: this._getFactColor() },
                            children: e.display_order
                              ? e.display_order
                              : (0, P.jsx)(L, {
                                  icon: "star",
                                  size: "24",
                                  color: "#CCC",
                                }),
                          }),
                          (0, P.jsxs)("div", {
                            className: ke,
                            children: [
                              (0, P.jsx)("span", {
                                className: Se,
                                dangerouslySetInnerHTML: {
                                  __html: e.display_name,
                                },
                              }),
                              (0, P.jsx)("br", {}),
                              (0, P.jsx)("em", {
                                className: Ce,
                                dangerouslySetInnerHTML: { __html: e.picmonic },
                              }),
                            ],
                          }),
                        ],
                      }),
                      this.props.showDefinition &&
                        (0, P.jsxs)(P.Fragment, {
                          children: [
                            (0, P.jsxs)("div", {
                              className: Ae,
                              onClick: this.props.onClickDefinition,
                              onKeyPress: this._onKeyPress,
                              tabIndex: "0",
                              children: [
                                "Definition",
                                (0, P.jsxs)("span", {
                                  children: [
                                    " ",
                                    (0, P.jsx)(L, {
                                      icon: this.props.definitionOpen
                                        ? "keyboard_arrow_up"
                                        : "keyboard_arrow_down",
                                      size: "14",
                                      color: "#00B6FF",
                                    }),
                                    " ",
                                    this.props.definitionOpen ? "HIDE" : "SHOW",
                                  ],
                                }),
                              ],
                            }),
                            this.props.definitionOpen &&
                              (0, P.jsx)("div", {
                                className: Pe,
                                dangerouslySetInnerHTML: {
                                  __html: e.definition,
                                },
                              }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(e.PureComponent),
        Me = "AudioSpeedSelector_container__o+IJb",
        Ee = "AudioSpeedSelector_button__VORHa",
        Te = "AudioSpeedSelector_menu__GPjRQ",
        ze = "AudioSpeedSelector_listItem__WMY47",
        Le = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a)))._onClickSpeed =
                function () {
                  e.props.onClickSpeed(e.props.speed);
                }),
              e
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("li", {
                    role: "option",
                    "aria-selected": "false",
                    className: ze,
                    children: (0, P.jsxs)("button", {
                      className: Ee,
                      tabIndex: "0",
                      onClick: this._onClickSpeed,
                      children: [this.props.speed, "x"],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Fe = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                menuOpen: !1,
              }),
              (e._openMenu = function (t) {
                e.state.menuOpen ||
                  (t.stopPropagation(),
                  e.setState(
                    function (e) {
                      return { menuOpen: !0 };
                    },
                    function () {
                      document.addEventListener("click", e._closeMenu);
                    }
                  ));
              }),
              (e._closeMenu = function () {
                e.setState(
                  function (e) {
                    return { menuOpen: !1 };
                  },
                  function () {
                    document.removeEventListener("click", e._closeMenu);
                  }
                );
              }),
              e
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("div", {
                    className: Me + " " + this.props.className,
                    children: [
                      (0, P.jsxs)("button", {
                        className: Ee,
                        onClick: this._openMenu,
                        "aria-haspopup": "listbox",
                        "aria-label": "audio speed",
                        children: [this.props.audioSpeed, "x"],
                      }),
                      this.state.menuOpen &&
                        (0, P.jsxs)("ul", {
                          className: Te,
                          role: "listbox",
                          children: [
                            (0, P.jsx)(Le, {
                              speed: "2.0",
                              onClickSpeed: this.props.onClickSpeed,
                            }),
                            (0, P.jsx)(Le, {
                              speed: "1.75",
                              onClickSpeed: this.props.onClickSpeed,
                            }),
                            (0, P.jsx)(Le, {
                              speed: "1.5",
                              onClickSpeed: this.props.onClickSpeed,
                            }),
                            (0, P.jsx)(Le, {
                              speed: "1.25",
                              onClickSpeed: this.props.onClickSpeed,
                            }),
                            (0, P.jsx)(Le, {
                              speed: "1.0",
                              onClickSpeed: this.props.onClickSpeed,
                            }),
                            (0, P.jsx)(Le, {
                              speed: "0.75",
                              onClickSpeed: this.props.onClickSpeed,
                            }),
                            (0, P.jsx)(Le, {
                              speed: "0.6",
                              onClickSpeed: this.props.onClickSpeed,
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Oe = Fe,
        Re = "AudioSelector_container__Gdobn",
        Be = "AudioSelector_menu__dO-DX",
        Ie = "AudioSelector_audioType__M3APn",
        qe = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a)))._onClickAudio =
                function (t) {
                  e.props.onClickAudio(t, e.props.value);
                }),
              e
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("li", {
                    tabIndex: "0",
                    role: "option",
                    "aria-selected": "false",
                    onClick: this._onClickAudio,
                    children: this.props.label,
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        De = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                menuOpen: !1,
              }),
              (e._openMenu = function (t) {
                e.state.menuOpen ||
                  (t.stopPropagation(),
                  e.setState(
                    function (e) {
                      return { menuOpen: !0 };
                    },
                    function () {
                      document.addEventListener("click", e._closeMenu);
                    }
                  ));
              }),
              (e._closeMenu = function () {
                e.setState(
                  function (e) {
                    return { menuOpen: !1 };
                  },
                  function () {
                    document.removeEventListener("click", e._closeMenu);
                  }
                );
              }),
              e
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("div", {
                    className: Re + " " + this.props.className,
                    children: [
                      (0, P.jsxs)("button", {
                        onClick: this._openMenu,
                        "aria-haspopup": "listbox",
                        "aria-label": "audio",
                        children: [
                          (0, P.jsx)(L, { icon: "music_note", color: "#fff" }),
                          (0, P.jsx)("div", {
                            className: Ie,
                            children:
                              "educational" === this.props.audio ? "E" : "S",
                          }),
                        ],
                      }),
                      this.state.menuOpen &&
                        (0, P.jsxs)("ul", {
                          className: Be,
                          role: "listbox",
                          children: [
                            (0, P.jsx)(qe, {
                              label: "Educational Audio",
                              value: "educational",
                              onClickAudio: this.props.onClickAudio,
                            }),
                            (0, P.jsx)(qe, {
                              label: "Story Audio",
                              value: "story",
                              onClickAudio: this.props.onClickAudio,
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Qe = De,
        Ue = "Slider_timeBar__FUt+R",
        He = "Slider_fillBar__e2P15",
        We = "Slider_scrubber__MgFz4",
        Ve = (function (t) {
          b(r, t);
          var n = k(r);
          function r(t) {
            var a;
            return (
              g(this, r),
              ((a = n.call(this, t))._onClickBar = function (e) {
                a.props.onPercentageChange(
                  (e.clientX - e.currentTarget.getBoundingClientRect().left) /
                    a.seekBar.current.offsetWidth
                );
              }),
              (a._onDragStart = function (e) {
                document.addEventListener("mousemove", a._onDrag),
                  document.addEventListener("mouseup", a._onDragStop);
              }),
              (a._onDrag = function (e) {
                a.fillBar.current.style.width =
                  Math.max(
                    0,
                    Math.min(
                      100,
                      ((e.clientX -
                        a.seekBar.current.getBoundingClientRect().left) /
                        a.seekBar.current.offsetWidth) *
                        100
                    )
                  ) + "%";
              }),
              (a._onDragStop = function (e) {
                document.removeEventListener("mousemove", a._onDrag),
                  document.removeEventListener("mouseup", a._onDragStop),
                  a.props.onPercentageChange(
                    Math.max(
                      0,
                      Math.min(
                        1,
                        (e.clientX -
                          a.seekBar.current.getBoundingClientRect().left) /
                          a.seekBar.current.offsetWidth
                      )
                    )
                  );
              }),
              (a._getTimeBarStyles = function () {
                return {
                  paddingTop:
                    ((a.props.handleSize || 16) - (a.props.size || 4)) / 2 +
                    "px",
                  paddingBottom:
                    ((a.props.handleSize || 16) - (a.props.size || 4)) / 2 +
                    "px",
                };
              }),
              (a.fillBar = e.createRef()),
              (a.seekBar = e.createRef()),
              a
            );
          }
          return (
            y(r, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("div", {
                    onClick: this._onClickBar,
                    style: this._getTimeBarStyles(),
                    children: (0, P.jsxs)("div", {
                      className: Ue,
                      ref: this.seekBar,
                      style: { height: (this.props.size || 4) + "px" },
                      children: [
                        (0, P.jsx)("div", {
                          className: He,
                          ref: this.fillBar,
                          style: {
                            width: 100 * this.props.percentage + "%",
                            backgroundColor: this.props.color,
                          },
                          children: (0, P.jsx)("div", {
                            className: We,
                            onMouseDown: this._onDragStart,
                            style: {
                              backgroundColor: this.props.color,
                              width: (this.props.handleSize || 16) + "px",
                              height: (this.props.handleSize || 16) + "px",
                            },
                          }),
                        }),
                        this.props.children,
                      ],
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(e.PureComponent),
        Ke = "PlayerControls_flex__e3L4u",
        Ye = "PlayerControls_flexGrow__k5StN",
        Ge = "PlayerControls_pointer__vobSy",
        Xe = "PlayerControls_mt1__bYp-E",
        $e = "PlayerControls_button__xvMvN",
        Je = "PlayerControls_play__io8+o PlayerControls_button__xvMvN",
        Ze = "PlayerControls_pause__Qoht8 PlayerControls_button__xvMvN",
        et = "PlayerControls_container__tRKGS",
        tt =
          "PlayerControls_containerHidden__IQTXN PlayerControls_container__tRKGS",
        nt = "PlayerControls_marker__21R7v",
        rt = "PlayerControls_controls__Q-Sxa",
        at = "PlayerControls_flexGrowAndroid__XmYrx",
        it = "PlayerControls_ml2__QCstC",
        st = "PlayerControls_ml1__f8H8p",
        ot = "PlayerControls_audioSelector__ZfFdE",
        lt =
          "PlayerControls_audioSelectorActive__d3uRt PlayerControls_audioSelector__ZfFdE",
        ct = (function (e) {
          b(n, e);
          var t = k(n);
          function n(e) {
            var r;
            g(this, n),
              ((r = t.call(this, e))._onKeyUp = function (e) {
                if (r.props.inQuiz || r.props.preventPlaying) return !1;
                switch (e.key) {
                  case "ArrowDown":
                    r._onPressNextFact(), e.preventDefault();
                    break;
                  case "ArrowUp":
                    r._onPressPrevFact(), e.preventDefault();
                    break;
                  case " ":
                    r.props.onTogglePlaying(), e.preventDefault();
                }
              }),
              (r._updateCurrentFact = function (e) {
                for (var t = r.props.picmonic.facts, n = 0; n < t.length; n++)
                  if (
                    !r.props.inQuiz &&
                    t[n].audio[r.props.audioMode] &&
                    e >= t[n].audio[r.props.audioMode].start - 1e-4 &&
                    e + 1e-4 < t[n].audio[r.props.audioMode].end
                  )
                    return void r.props.onCurrentFactChange(t[n]);
                r.props.onCurrentFactChange();
              }),
              (r._getRemainingTime = function () {
                if (r.audioElement) {
                  var e =
                    r.audioElements[r.props.audioMode].duration -
                    r.audioElements[r.props.audioMode].currentTime;
                  return (
                    Math.floor(e / 60) +
                    ":" +
                    ("0" + Math.round(e % 60)).substr(-2)
                  );
                }
              }),
              (r._renderAudioMarkers = function () {
                return (
                  r.audioElement &&
                  r.props.picmonic.facts
                    .filter(function (e) {
                      return !e.header && e.audio[r.props.audioMode];
                    })
                    .map(function (e) {
                      return (0,
                      P.jsx)("div", { className: nt, style: { left: (e.audio[r.props.audioMode].start / r.audioElements[r.props.audioMode].duration) * 100 + "%" } }, e.fact_id);
                    })
                );
              }),
              (r._play = function () {
                r.audioElements[r.props.audioMode].play(),
                  r.setState({ playing: !0 });
              }),
              (r._pause = function () {
                r.audioElements[r.props.audioMode].pause(),
                  r.setState({ playing: !1 });
              }),
              (r.seekToFact = function (e) {
                if (
                  !e ||
                  (e.audio && e.audio[r.props.audioMode] && r.audioElement)
                )
                  if (e) {
                    var t = e.audio[r.props.audioMode].start;
                    r.audioElements[r.props.audioMode].currentTime = t;
                  } else r.audioElements[r.props.audioMode].currentTime = 0;
              }),
              (r._onPressSeekBar = function (e) {
                if (
                  r.state.numAudios &&
                  !r.props.preventPlaying &&
                  r.audioElement
                ) {
                  var t = r.audioElements[r.props.audioMode].duration * e;
                  (r.audioElements[r.props.audioMode].currentTime = t),
                    r.setState({ currentTime: t }),
                    r.props.playing || r._updateCurrentFact(t);
                }
              }),
              (r._onPressNextFact = function () {
                var e = r.props.picmonic.facts.filter(function (e) {
                    return !e.header;
                  }),
                  t = -1;
                if (
                  (r.props.selectedFact &&
                    (t = e.findIndex(function (e) {
                      return e.fact_id === r.props.selectedFact.fact_id;
                    })),
                  0 !== (t = -1 === t ? 0 : (t + 1) % e.length))
                ) {
                  var n = e[t];
                  r.state.numAudios && r.seekToFact(n),
                    r.props.playing || r.props.onCurrentFactChange(n);
                }
              }),
              (r._onPressPrevFact = function () {
                var e = r.props.picmonic.facts.filter(function (e) {
                    return !e.header;
                  }),
                  t = -1;
                if (
                  (r.props.selectedFact &&
                    (t = e.findIndex(function (e) {
                      return e.fact_id === r.props.selectedFact.fact_id;
                    })),
                  (t =
                    -1 === t ? e.length - 1 : (t + e.length - 1) % e.length) !==
                    e.length - 1)
                ) {
                  var n = e[t];
                  r.state.numAudios && r.seekToFact(n),
                    r.props.playing || r.props.onCurrentFactChange(n);
                }
              }),
              (r._changeAudioSpeed = function (e) {
                r.props.onChangeAudioSpeed(parseFloat(e));
              }),
              (r._changeVolume = function (e) {
                var t = Math.min(Math.max(e, 0), 1);
                for (var n in r.audioElements)
                  r.audioElements.hasOwnProperty(n) &&
                    (r.audioElements[n].volume = t);
                r.setState({ volume: t });
              }),
              (r._toggleAudio = function (e, t) {
                r.props.onToggleAudio(t);
              }),
              (r._toggleMute = function () {
                r.audioElements[r.props.audioMode] &&
                  ((r.audioElements[r.props.audioMode].muted =
                    !r.audioElements[r.props.audioMode].muted),
                  r.forceUpdate());
              }),
              (r.componentDidUpdate = function (e, t) {
                if (
                  (e.audioMode !== r.props.audioMode &&
                    (r.audioElements[e.audioMode].pause(),
                    (r.audioElements[e.audioMode].currentTime = 0)),
                  e.playing !== r.props.playing ||
                    e.audioMode !== r.props.audioMode)
                )
                  if (r.props.playing) {
                    var n = r.audioElements[r.props.audioMode].play();
                    n &&
                      n.catch(function () {
                        r.props.onAutoPlayFailure(), r.props.onTogglePlaying();
                      });
                  } else r.audioElements[r.props.audioMode].pause();
                if (
                  r.props.playing &&
                  t.audioLoading &&
                  !r.state.audioLoading
                ) {
                  var a = r.audioElements[r.props.audioMode].play();
                  a &&
                    a.catch(function () {
                      r.props.onAutoPlayFailure(), r.props.onTogglePlaying();
                    });
                }
                if (e.audioSpeed !== r.props.audioSpeed)
                  for (var i in r.audioElements)
                    r.audioElements.hasOwnProperty(i) &&
                      (r.audioElements[i].playbackRate = parseFloat(
                        r.props.audioSpeed
                      ));
              }),
              (r.componentWillUnmount = function () {
                document.removeEventListener("keydown", r._onKeyUp),
                  r.props.audioMode &&
                    r.audioElements[r.props.audioMode] &&
                    r.audioElements[r.props.audioMode].pause();
              }),
              (r.state = {
                playing: !1,
                currentTime: 0,
                duration: 0,
                audioMode: "educational",
                numAudios: 2,
                audioLoading: !0,
                volume: 1,
              }),
              (r.audioElements = {});
            var a = function (e) {
              if (!r.props.picmonic.audio[e]) return "continue";
              
              let audio = document.createElement("audio");
              audio.src = r.props.picmonic.audio[e];
              document.body.append(audio);

              r.audioElements[e] = audio;
              
                (r.audioElements[e].playbackRate = parseFloat(
                  r.props.audioSpeed
                )),
                r.audioElements[e].addEventListener("timeupdate", function () {
                  var t = r.audioElements[e].currentTime;
                  window.preview && t > 30 && r.props.onPreviewEnded(),
                    t !== r.state.currentTime &&
                      r.props.playing &&
                      ((!r.props.selectedFact ||
                        (r.props.selectedFact.audio[e] &&
                          (r.props.selectedFact.audio[e].start > t - 1e-4 ||
                            t - 1e-4 > r.props.selectedFact.audio[e].end))) &&
                        r._updateCurrentFact(t),
                      r.setState({
                        currentTime: r.audioElements[e].currentTime,
                      }),
                      r.props.closedCaption.current &&
                        (r.props.closedCaption.current.style.transform =
                          "translateY(-" +
                          (t / r.audioElements[r.props.audioMode].duration) *
                            100 +
                          "%)"));
                }),
                r.audioElements[e].addEventListener("ended", r.props.onEnd);
            };
            for (var i in r.props.picmonic.audio) a(i);
            return (
              r.audioElements[r.props.audioMode] &&
                ((r.audioElement = r.audioElements[r.props.audioMode]),
                r.audioElements[r.props.audioMode].addEventListener(
                  "loadedmetadata",
                  function () {
                    return r.setState({ audioLoading: !1 });
                  }
                )),
              document.addEventListener("keydown", r._onKeyUp),
              r
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    a,
                    i = this;
                  return (
                    this.props.playing
                      ? ((e = Ze),
                        (t = "Pause"),
                        (n = "pause"),
                        (r = 42),
                        (a = "#fff"))
                      : this.audioElement &&
                        this.audioElements[this.props.audioMode].ended
                      ? ((e = Je),
                        (t = "Replay"),
                        (n = "replay"),
                        (r = 30),
                        (a = "#000"))
                      : ((e = Je),
                        (t = "Replay"),
                        (n = "play_arrow"),
                        (r = 30),
                        (a = "#000")),
                    (0, P.jsxs)("div", {
                      className: this.props.inQuiz ? tt : et,
                      children: [
                        (0, P.jsx)("div", {
                          className: Xe,
                          children: (0, P.jsx)("button", {
                            className: e,
                            onClick: this.props.onTogglePlaying,
                            "aria-label": t,
                            children: (0, P.jsx)(L, {
                              icon: n,
                              size: r,
                              color: a,
                            }),
                          }),
                        }),
                        (0, P.jsxs)("div", {
                          className: Ye,
                          children: [
                            (0, P.jsxs)("div", {
                              className: Ke,
                              children: [
                                (0, P.jsx)("div", {
                                  className: Ye + " " + Ge,
                                  children: (0, P.jsx)(Ve, {
                                    percentage: this.audioElement
                                      ? this.audioElements[this.props.audioMode]
                                          .currentTime /
                                        this.audioElements[this.props.audioMode]
                                          .duration
                                      : 0,
                                    onPercentageChange: this._onPressSeekBar,
                                    children: this._renderAudioMarkers(),
                                  }),
                                }),
                                (0, P.jsx)("div", {
                                  className: it,
                                  children: this._getRemainingTime(),
                                }),
                              ],
                            }),
                            (0, P.jsxs)("div", {
                              className: rt,
                              children: [
                                (0, P.jsx)("button", {
                                  className: it + " " + $e,
                                  "aria-label": "Previous Fact",
                                  onClick: this._onPressPrevFact,
                                  children: (0, P.jsx)(L, {
                                    icon: "skip_previous",
                                    color:
                                      this.props.selectedFact &&
                                      0 ===
                                        this.props.picmonic.facts.findIndex(
                                          function (e) {
                                            return (
                                              e.fact_id ===
                                              i.props.selectedFact.fact_id
                                            );
                                          }
                                        )
                                        ? "#616B80"
                                        : "#fff",
                                  }),
                                }),
                                (0, P.jsx)("button", {
                                  className: it + " " + $e,
                                  "aria-label": "Next Fact",
                                  onClick: this._onPressNextFact,
                                  children: (0, P.jsx)(L, {
                                    icon: "skip_next",
                                    color:
                                      this.props.selectedFact &&
                                      this.props.picmonic.facts.findIndex(
                                        function (e) {
                                          return (
                                            e.fact_id ===
                                            i.props.selectedFact.fact_id
                                          );
                                        }
                                      ) ===
                                        this.props.picmonic.facts.length - 1
                                        ? "#616B80"
                                        : "#fff",
                                  }),
                                }),
                                (0, P.jsx)(Oe, {
                                  audioSpeed: this.props.audioSpeed,
                                  onClickSpeed: this._changeAudioSpeed,
                                  className: it,
                                }),
                                (0, P.jsx)("button", {
                                  className: it + " " + $e,
                                  onClick: this._toggleMute,
                                  "aria-label": this.audioElements[
                                    this.props.audioMode
                                  ].muted
                                    ? "unmute"
                                    : "mute",
                                  children: (0, P.jsx)(L, {
                                    icon:
                                      this.audioElement &&
                                      this.audioElements[
                                        this.props.audioMode
                                      ] &&
                                      this.audioElements[this.props.audioMode]
                                        .muted
                                        ? "volume_off"
                                        : "volume_up",
                                    color: "#fff",
                                  }),
                                }),
                                !this.props.mobile &&
                                  (0, P.jsx)("div", {
                                    style: { width: "48px" },
                                    children: (0, P.jsx)(Ve, {
                                      percentage: this.state.volume,
                                      onPercentageChange: this._changeVolume,
                                      size: 2,
                                      handleSize: 12,
                                      color: "#fff",
                                    }),
                                  }),
                                !!this.props.picmonic.audio.story &&
                                  (0, P.jsxs)(P.Fragment, {
                                    children: [
                                      (0, P.jsx)("div", {
                                        className: it,
                                        children: this.props.mobile
                                          ? (0, P.jsx)(Qe, {
                                              audio: this.props.audioMode,
                                              onClickAudio: this._toggleAudio,
                                            })
                                          : (0, P.jsx)(L, {
                                              icon: "music_note",
                                              color: "#fff",
                                            }),
                                      }),
                                      !this.props.mobile &&
                                        (0, P.jsxs)(P.Fragment, {
                                          children: [
                                            (0, P.jsx)("button", {
                                              onClick: this._toggleAudio,
                                              className:
                                                st +
                                                " " +
                                                ("educational" ===
                                                this.props.audioMode
                                                  ? lt
                                                  : ot),
                                              "aria-label":
                                                "play educational audio",
                                              children: "Educational",
                                            }),
                                            (0, P.jsx)("button", {
                                              onClick: this._toggleAudio,
                                              className:
                                                "educational" !==
                                                this.props.audioMode
                                                  ? lt
                                                  : ot,
                                              "aria-label": "play story audio",
                                              children: "Story",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                (0, P.jsx)("div", { className: at }),
                                (0, P.jsx)("button", {
                                  className: it + " " + $e,
                                  "aria-label": "toggle closed caption",
                                  onClick: this.props.toggleCaptions,
                                  children: (0, P.jsx)(L, {
                                    icon: "closed_caption",
                                    color: "#fff",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        ut = "PostLearnBar_container__HuIZk",
        dt = "PostLearnBar_containerOpen__X8XCW PostLearnBar_container__HuIZk",
        pt = "PostLearnBar_playButton__EQL+F PostLearnBar_button__jzj4R",
        ft = "PostLearnBar_quizButton__WWtjT PostLearnBar_button__jzj4R",
        mt = "PostLearnBar_closeButton__ZlFRp",
        ht = "PostLearnBar_visuallyHidden__IcK6N",
        gt = "PostLearnBar_displayNone__xQSTd",
        _t = "PostLearnBar_verbose__moBY-",
        yt = "PostLearnBar_secondaryCTA__H9M1N",
        vt = (function (t) {
          b(r, t);
          var n = k(r);
          function r(t) {
            var a;
            return (
              g(this, r),
              ((a = n.call(this, t)).state = {
                timeRemaining: 8,
                isTimerStopped: !1,
              }),
              (a.componentDidUpdate = function (e) {
                a.containerRef.current && a.containerRef.current.focus(),
                  e.show !== a.props.show &&
                    (a.props.show
                      ? setTimeout(a._countdown, 1e3)
                      : (a.setState({ timeRemaining: 8, isTimerStopped: !1 }),
                        a._clearTimeout()));
              }),
              (a._countdown = function () {
                1 === a.state.timeRemaining
                  ? "educational" === a.props.audioMode && a.props.hasStory
                    ? a._onClickPlay()
                    : a._onClickQuiz()
                  : (a.setState({ timeRemaining: a.state.timeRemaining - 1 }),
                    (a.timeout = setTimeout(a._countdown, 1e3)));
              }),
              (a._clearTimeout = function () {
                a.timeout && clearTimeout(a.timeout);
              }),
              (a._stopTimer = function () {
                a._clearTimeout(),
                  a.setState({ timeRemaining: 8, isTimerStopped: !0 });
              }),
              (a._onClickPlay = function () {
                return a.props.onClose("play");
              }),
              (a._onClickQuiz = function () {
                return a.props.onClose("quiz");
              }),
              (a._onClickClose = function () {
                return a.props.onClose("close");
              }),
              (a.componentWillUnmount = function () {
                a._clearTimeout();
              }),
              (a.containerRef = e.createRef()),
              a
            );
          }
          return (
            y(r, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (!this.props.show)
                    return (0, P.jsx)("div", {
                      className: this.props.show ? dt : ut,
                    });
                  var t =
                    "educational" === this.props.audioMode &&
                    this.props.hasStory;
                  return (0, P.jsxs)("div", {
                    className: this.props.show ? dt : ut,
                    "aria-hidden": this.props.show ? "false" : "true",
                    ref: this.containerRef,
                    onKeyDown: function (t) {
                      return "Escape" === t.key && e._stopTimer();
                    },
                    tabIndex: -1,
                    children: [
                      t &&
                        (0, P.jsxs)("button", {
                          className: pt,
                          onClick: this._onClickPlay,
                          children: [
                            (0, P.jsx)(L, {
                              icon: "play_circle_filled",
                              size: "16",
                              color: "#fff",
                            }),
                            " ",
                            "Play",
                            " ",
                            "educational" === this.props.audioMode
                              ? "Story"
                              : "Educational",
                          ],
                        }),
                      !this.props.playOnly &&
                        (0, P.jsxs)("button", {
                          className: ft + (t ? " " + yt : ""),
                          onClick: this._onClickQuiz,
                          children: [
                            (0, P.jsx)(L, {
                              icon: "assignment_turned_in",
                              size: "16",
                              color: "#18f291",
                            }),
                            " ",
                            "Start Quiz",
                          ],
                        }),
                      (0, P.jsxs)("div", {
                        className: this.state.isTimerStopped ? gt : "",
                        children: [
                          (0, P.jsxs)("span", {
                            className: _t,
                            children: [
                              "educational" === this.props.audioMode
                                ? "Story"
                                : "Quiz",
                              " will start",
                              " ",
                            ],
                          }),
                          "in ",
                          (0, P.jsxs)("strong", {
                            children: [this.state.timeRemaining, " seconds"],
                          }),
                          "...",
                        ],
                      }),
                      (0, P.jsx)("button", {
                        className: mt,
                        onClick: this._onClickClose,
                        children: (0, P.jsx)(L, {
                          icon: "close",
                          color: "#AAACB3",
                        }),
                      }),
                      (0, P.jsx)("div", {
                        className: ht,
                        role: "alert",
                        children: (0, P.jsx)("p", {
                          children: this.state.isTimerStopped
                            ? "Auto-play timer stopped"
                            : "Press 'Escape' to stop auto-play timer",
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(e.PureComponent),
        bt = { pls_config: { fact_counts: {}, picmonic_counts: {} } },
        wt = {
          markets: [
            {
              id: 100,
              parent_id: 11,
              name: "Medicine",
              public_name: "Medical (MD/DO)",
              public_name2: "Medicine (MD/DO)",
              segmented_control_name: "MD / DO - Physicians",
              school_name: "medical",
              slug: "medicine",
              hidden: 0,
              show_school_modal: 1,
              selected_lead: 100,
              use_program_market_id: !1,
              tokens: 3,
              picmonics: bt.pls_config.picmonic_counts[100],
              facts: bt.pls_config.fact_counts[100],
              pricing_url: "/pricing/medicine",
              tabs: ["courses", "body systems", "books", "boards"],
              is_beta: !1,
              show_resources: 1,
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                  icon: "extension",
                },
                {
                  name: "Body Systems",
                  pathway_type: "courses",
                  curriculum: "body-systems",
                  icon: "accessibility",
                },
                {
                  name: "Books",
                  pathway_type: "books",
                  icon: "import_contacts",
                },
                {
                  name: "USMLE Step 1",
                  pathway_type: "boards",
                  curriculum: "usmle-step-1",
                  icon: "assignment",
                },
                {
                  name: "USMLE Step 2",
                  pathway_type: "boards",
                  curriculum: "usmle-step-2",
                  icon: "assignment",
                },
              ],
              testimonial:
                '"[Picmonics] correlate directly with what is in First Aid so you know it is essential information that will show up on the exam. The number of questions I got right in biochemistry and microbiology were mainly due to this resource." James, Texas Tech University Health Sciences Center School of Medicine, 274 on Step 1',
              exam_name:
                "the USMLE Step 1, USMLE Step 2 CK, COMLEX Level 1, or COMLEX Level 2",
              order: 0,
            },
            {
              id: 101,
              parent_id: 20,
              name: "Nursing RN",
              public_name: "Nursing (RN)",
              public_name2: "Nursing (RN)",
              segmented_control_name: "rn - registered nurses",
              school_name: "nursing",
              slug: "nursing",
              hidden: 0,
              show_school_modal: 1,
              selected_lead: 101,
              use_program_market_id: !0,
              tokens: 1,
              picmonics: bt.pls_config.picmonic_counts[101],
              facts: bt.pls_config.fact_counts[101],
              show_advocate_recruitment_modal: 1,
              pricing_url: "/pricing/nursing",
              tabs: ["courses", "body systems", "books", "nclex"],
              is_beta: !1,
              show_resources: 1,
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                  icon: "extension",
                },
                {
                  name: "Body Systems",
                  pathway_type: "courses",
                  curriculum: "body-systems",
                  icon: "accessibility",
                },
                {
                  name: "Books",
                  pathway_type: "books",
                  icon: "import_contacts",
                },
                {
                  name: "NCLEX<sup>\xae</sup>",
                  pathway_type: "boards",
                  curriculum: "nclex",
                  icon: "assignment",
                },
              ],
              testimonial:
                '"Bravo Team Picmonic on creating a truly revolutionary approach to learning, and for helping me to pass the NCLEX\xae. Couldn\u2019t have done it without you!" \u2014 Steph B., University of Detroit Mercy, class of 2015',
              exam_name:
                "your NCLEX\xae-RN, Hesi, ATI, TEAS test, Kaplan exams",
              order: 4,
            },
            {
              id: 202,
              parent_id: 20,
              name: "Nursing LPN",
              public_name: "Nursing (LPN)",
              public_name2: "Nursing (LPN)",
              segmented_control_name: "lpn - practical nurses",
              school_name: "nursing",
              slug: "nursing-lpn",
              selected_lead: 101,
              use_program_market_id: !1,
              tokens: 1,
              picmonics: bt.pls_config.picmonic_counts[202],
              facts: bt.pls_config.fact_counts[202],
              hidden: 0,
              show_school_modal: 1,
              pricing_url: "/pricing/nursing-lpn",
              tabs: ["courses", "body systems", "books", "nclex-pn"],
              is_beta: !1,
              show_resources: 1,
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                  icon: "extension",
                },
                {
                  name: "Body Systems",
                  pathway_type: "courses",
                  curriculum: "body-systems",
                  icon: "accessibility",
                },
                {
                  name: "Books",
                  pathway_type: "books",
                  icon: "import_contacts",
                },
                {
                  name: "NCLEX<sup>\xae</sup>",
                  pathway_type: "boards",
                  curriculum: "nclex",
                  icon: "assignment",
                },
              ],
              testimonial:
                '"Bravo Team Picmonic on creating a truly revolutionary approach to learning, and for helping me to pass the NCLEX\xae. Couldn\u2019t have done it without you!" \u2014 Steph B., University of Detroit Mercy, class of 2015',
              exam_name: "your NCLEX\xae-LPN, Hesi, ATI, or Kaplan exams",
              order: 5,
            },
            {
              id: 203,
              parent_id: 20,
              name: "Nurse Practitioner",
              segmented_control_name: "np - nurse practitioners",
              school_name: "nursing",
              slug: "nursing-np",
              show_school_modal: 1,
              hidden: 0,
              use_program_market_id: !1,
              tokens: 3,
              is_beta: !1,
              show_miniplayer: !1,
              picmonics: bt.pls_config.picmonic_counts[203],
              facts: bt.pls_config.fact_counts[203],
              show_advocate_recruitment_modal: 1,
              pricing_url: "/pricing/nursing-np",
              tabs: ["courses", "body systems", "books"],
              show_resources: 1,
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                  icon: "extension",
                },
                {
                  name: "Body Systems",
                  pathway_type: "courses",
                  curriculum: "body-systems",
                  icon: "accessibility",
                },
                {
                  name: "Books",
                  pathway_type: "books",
                  icon: "import_contacts",
                },
              ],
              exam_name: "your licensing exams",
              order: 1,
            },
            {
              id: 204,
              parent_id: 11,
              name: "Nursing CNA",
              school_name: "nursing",
              slug: "nursing-cna",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !0,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 6,
            },
            {
              id: 105,
              parent_id: 11,
              name: "Physician Assistant",
              segmented_control_name: "pa - physician assistants",
              school_name: "PA",
              slug: "physician-assistant",
              is_beta: !1,
              show_school_modal: 1,
              hidden: 0,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !1,
              picmonics: bt.pls_config.picmonic_counts[105],
              facts: bt.pls_config.fact_counts[105],
              show_advocate_recruitment_modal: 1,
              pricing_url: "/pricing/physician-assistant",
              tabs: ["courses", "body systems", "books"],
              show_resources: 1,
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                  icon: "extension",
                },
                {
                  name: "Body Systems",
                  pathway_type: "courses",
                  curriculum: "body-systems",
                  icon: "accessibility",
                },
                {
                  name: "Books",
                  pathway_type: "books",
                  icon: "import_contacts",
                },
                {
                  name: "PANCE",
                  pathway_type: "boards",
                  curriculum: "pance",
                  icon: "assignment",
                },
              ],
              exam_name: "the PANCE",
              order: 2,
            },
            {
              id: 109,
              parent_id: 11,
              name: "Pharmacy",
              public_name: "Pharmacy (PharmD)",
              public_name2: "Pharmacy (PharmD)",
              exam_name: "the PCAT\xae and NAPLEX\xae exams",
              segmented_control_name: "pharm.d - pharmacists",
              school_name: "pharmacy",
              slug: "pharmacy",
              is_beta: !1,
              hidden: 0,
              show_school_modal: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !1,
              picmonics: bt.pls_config.picmonic_counts[109],
              facts: bt.pls_config.fact_counts[109],
              pricing_url: "/pricing/pharmacy",
              tabs: ["courses", "body systems"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                  icon: "extension",
                },
                {
                  name: "Body Systems",
                  pathway_type: "courses",
                  curriculum: "body-systems",
                  icon: "accessibility",
                },
              ],
              show_resources: 1,
              order: 3,
            },
            {
              id: 115,
              parent_id: 18,
              name: "Physical Therapy",
              public_name: "Physical Therapy (PT)",
              public_name2: "Physical Therapy (PT)",
              exam_name: "the NPTE",
              segmented_control_name: "pt - physical therapists",
              school_name: "",
              slug: "physical-therapy",
              is_beta: !1,
              picmonic_partner: !1,
              is_pseudo: 0,
              hidden: 0,
              show_school_modal: 1,
              use_program_market_id: !1,
              tokens: 1,
              show_miniplayer: !1,
              pricing_url: "/pricing/physical-therapy",
              picmonics: bt.pls_config.picmonic_counts[115],
              facts: bt.pls_config.fact_counts[115],
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 9,
            },
            {
              id: 116,
              parent_id: 18,
              name: "Occupational Therapy",
              public_name: "Occupational Therapy (OT)",
              public_name2: "Occupational Therapy (OT)",
              exam_name: "the NBCOT",
              segmented_control_name: "ot - occupational therapists",
              school_name: "",
              slug: "occupational-therapy",
              is_beta: !1,
              picmonic_partner: !1,
              is_pseudo: 0,
              hidden: 0,
              show_school_modal: 1,
              use_program_market_id: !1,
              tokens: 1,
              show_miniplayer: !1,
              pricing_url: "/pricing/occupational-therapy",
              picmonics: bt.pls_config.picmonic_counts[116],
              facts: bt.pls_config.fact_counts[116],
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 10,
            },
            {
              id: 113,
              parent_id: 11,
              name: "Paramedic",
              segmented_control_name: "paramedic",
              school_name: "",
              slug: "paramedic",
              is_beta: !1,
              hidden: 0,
              show_school_modal: 1,
              picmonics: bt.pls_config.picmonic_counts[113],
              facts: bt.pls_config.fact_counts[113],
              show_advocate_recruitment_modal: 1,
              selected_lead: 113,
              use_program_market_id: !1,
              tokens: 3,
              pricing_url: "/pricing/paramedic",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 7,
            },
            {
              id: 103,
              parent_id: 18,
              name: "Pre-Health",
              segmented_control_name: "pre-health",
              exam_name: "the MCAT",
              school_name: "medical",
              slug: "prehealth",
              is_beta: !1,
              selected_lead: 103,
              use_program_market_id: !1,
              tokens: 3,
              picmonics: 100,
              facts: bt.pls_config.fact_counts[103],
              pricing_url: "/pricing/prehealth",
              hidden: 0,
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 1,
              order: 8,
            },
            {
              id: 112,
              parent_id: 18,
              name: "College",
              segmented_control_name: "college",
              school_name: "",
              slug: "college",
              is_beta: !0,
              hidden: 0,
              selected_lead: 112,
              use_program_market_id: !1,
              tokens: 3,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 12,
            },
            {
              id: 114,
              parent_id: 18,
              name: "CoursePics Biology",
              school_name: "",
              slug: "biology",
              is_beta: !1,
              picmonic_partner: !0,
              is_pseudo: 1,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !1,
              pricing_url: "/pricing/biology",
              picmonics: bt.pls_config.picmonic_counts[114],
              facts: 300,
              non_school: !0,
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 10,
            },
            {
              id: 107,
              parent_id: 15,
              name: "K12",
              segmented_control_name: "k-12",
              school_name: "",
              slug: "k12",
              hidden: 0,
              selected_lead: 107,
              use_program_market_id: !1,
              tokens: 3,
              is_beta: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 13,
            },
            {
              id: 191,
              parent_id: 19,
              name: "German Medicine",
              school_name: "medical",
              slug: "german-medicine",
              is_beta: !0,
              hidden: 1,
              selected_lead: 191,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 14,
            },
            {
              id: 302,
              parent_id: 30,
              name: "Aunt Chilada's",
              school_name: "",
              slug: "auntchiladas",
              hidden: 1,
              selected_lead: 103,
              use_program_market_id: !1,
              tokens: 3,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 15,
            },
            {
              id: 310,
              parent_id: 31,
              name: "University of Phoenix",
              school_name: "",
              slug: "universityofphoenix",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 16,
            },
            {
              id: 210,
              parent_id: 21,
              name: "EMT",
              school_name: "EMT",
              slug: "emt",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 17,
            },
            {
              id: 106,
              parent_id: 11,
              name: "UK Medicine",
              school_name: "medical",
              slug: "uk-medicine",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 18,
            },
            {
              id: 108,
              parent_id: 11,
              name: "Medical Terminology",
              school_name: "healthcare",
              slug: "medical-terminology",
              is_beta: !1,
              is_pseudo: 1,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !1,
              pricing_url: "/pricing/medical-terminology",
              picmonics: bt.pls_config.picmonic_counts[108],
              facts: 300,
              non_school: !0,
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 8,
            },
            {
              id: 501,
              parent_id: 50,
              name: "Polyposis Syndromes",
              school_name: "healthcare",
              slug: "polyposis-syndromes",
              procreator: "Carlos Velez",
              is_beta: !1,
              is_pseudo: 1,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !1,
              pricing_url: "/pricing/polyposis-syndromes",
              picmonics: 4,
              facts: 50,
              non_school: !0,
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 11,
            },
            {
              id: 181,
              parent_id: 18,
              name: "Anatomy and Physiology",
              school_name: "",
              slug: "anatomy-and-physiology",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 19,
            },
            {
              id: 104,
              parent_id: 22,
              name: "MCAT",
              school_name: "",
              slug: "mcat",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 20,
            },
            {
              id: 110,
              parent_id: 11,
              name: "Dental",
              school_name: "dental",
              slug: "dental",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 21,
            },
            {
              id: 111,
              parent_id: 11,
              name: "Chiropractic",
              school_name: "chiropractic",
              slug: "chiropractic",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 22,
            },
            {
              id: 130,
              parent_id: 13,
              name: "Law",
              school_name: "law",
              slug: "law",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 23,
            },
            {
              id: 140,
              parent_id: 14,
              name: "SAT",
              school_name: "",
              slug: "sat",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 24,
            },
            {
              id: 160,
              parent_id: 16,
              name: "Accounting",
              school_name: "accounting",
              slug: "accounting",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 25,
            },
            {
              id: 161,
              parent_id: 16,
              name: "Finance",
              school_name: "finance",
              slug: "finance",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 26,
            },
            {
              id: 220,
              parent_id: 10,
              name: "GRE",
              school_name: "",
              slug: "gre",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 27,
            },
            {
              id: 301,
              parent_id: 30,
              name: "Olive Garden",
              school_name: "",
              slug: "olive-garden",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 28,
            },
            {
              id: 333,
              parent_id: 30,
              name: "Picmonic",
              school_name: "",
              slug: "picmonic",
              hidden: 1,
              tokens: 100,
              show_resources: 0,
              order: 29,
            },
            {
              id: 320,
              parent_id: 15,
              name: "Eduglyphics",
              school_name: "",
              slug: "eduglyphics",
              is_beta: !1,
              picmonic_partner: !0,
              is_pseudo: 1,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !1,
              pricing_url: "/pricing/Eduglyphics",
              picmonics: bt.pls_config.picmonic_counts[320],
              facts: 300,
              non_school: !0,
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 52,
            },
            {
              id: 117,
              parent_id: 11,
              name: "Medical Assistant",
              school_name: "medical",
              slug: "medical-assistant",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 29,
            },
            {
              id: 118,
              parent_id: 11,
              name: "Patient Care Technician",
              school_name: "medical",
              slug: "patient-care-technician",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 29,
            },
            {
              id: 119,
              parent_id: 11,
              name: "Home Health Aid",
              school_name: "medical",
              slug: "home-health-aid",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 29,
            },
            {
              id: 120,
              parent_id: 11,
              name: "Medical Lab Technician",
              school_name: "medical",
              slug: "medical-lab-technician",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 29,
            },
            {
              id: 121,
              parent_id: 11,
              name: "Allied Health",
              school_name: "medical",
              slug: "allied-health",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 29,
            },
            {
              id: 122,
              parent_id: 11,
              name: "Pharmacy Technician",
              school_name: "medical",
              slug: "pharmacy-technician",
              is_beta: !0,
              hidden: 1,
              use_program_market_id: !1,
              tokens: 3,
              show_miniplayer: !0,
              pricing_url: "/pricing",
              tabs: ["courses"],
              sections: [
                {
                  name: "Courses",
                  pathway_type: "courses",
                  curriculum: "standard",
                },
              ],
              show_resources: 0,
              order: 29,
            },
          ],
          programs: [
            {
              market_id: 204,
              parent_id: 20,
              name: "CNA",
              value: "cna",
              slug: "nursing-cna",
              visible_pricing: 0,
            },
            {
              market_id: 202,
              parent_id: 20,
              name: "LPN",
              value: "lpn",
              slug: "nursing-lpn",
              visible_pricing: 1,
            },
            {
              market_id: 101,
              parent_id: 20,
              name: "RN",
              value: "rn",
              slug: "nursing",
              visible_pricing: 1,
            },
          ],
          filters: {
            courses: {
              name: "Courses",
              value: "courses",
              markets: [
                {
                  name: "Medicine",
                  market_id: 100,
                  curriculum: [
                    { name: "Standard", value: "standard" },
                    { name: "Body Systems", value: "body-systems" },
                  ],
                },
                {
                  name: "Nursing",
                  market_id: 101,
                  curriculum: [
                    { name: "Standard", value: "standard" },
                    { name: "Body Systems", value: "body-systems" },
                  ],
                },
                {
                  name: "Nursing LPN",
                  market_id: 202,
                  curriculum: [
                    { name: "Standard", value: "standard" },
                    { name: "Body Systems", value: "body-systems" },
                  ],
                },
                {
                  name: "Nursing CNA",
                  market_id: 204,
                  curriculum: [
                    { name: "Standard", value: "standard" },
                    { name: "Body Systems", value: "body-systems" },
                  ],
                },
                {
                  name: "Pre-Health Biology",
                  market_id: 103,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "College",
                  market_id: 112,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Paramedic",
                  market_id: 113,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "K12",
                  market_id: 107,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "German Medicine",
                  market_id: 191,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Law",
                  market_id: 130,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Accounting",
                  market_id: 160,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Finance",
                  market_id: 161,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Olive Garden",
                  market_id: 301,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Aunt Chiladas",
                  market_id: 302,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "University of Phoenix",
                  market_id: 310,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Physician Assistant",
                  market_id: 105,
                  curriculum: [
                    { name: "Standard", value: "standard" },
                    { name: "Body Systems", value: "body-systems" },
                  ],
                },
                {
                  name: "EMT",
                  market_id: 210,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "UK Medicine",
                  market_id: 106,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Medical Terminology",
                  market_id: 108,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Pharmacy",
                  market_id: 109,
                  curriculum: [
                    { name: "Standard", value: "standard" },
                    { name: "Body Systems", value: "body-systems" },
                  ],
                },
                {
                  name: "Anatomy and Physiology",
                  market_id: 181,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "MCAT",
                  market_id: 104,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Nurse Practitioner",
                  market_id: 203,
                  curriculum: [
                    { name: "Standard", value: "standard" },
                    { name: "Body Systems", value: "body-systems" },
                  ],
                },
                {
                  name: "GRE",
                  market_id: 220,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
                {
                  name: "Picmonic",
                  market_id: 333,
                  curriculum: [{ name: "Standard", value: "standard" }],
                },
              ],
            },
            boards: {
              name: "Boards",
              value: "boards",
              markets: [
                {
                  name: "Medicine",
                  market_id: 100,
                  curriculum: [
                    { name: "USMLE Step 1", value: "usmle-step-1" },
                    { name: "USMLE Step 2", value: "usmle-step-2" },
                  ],
                },
                {
                  name: "Nursing",
                  market_id: 101,
                  curriculum: [{ name: "NCLEX-RN", value: "nclex" }],
                },
                {
                  name: "Nursing LPN",
                  market_id: 202,
                  curriculum: [{ name: "NCLEX-PN", value: "nclex-pn" }],
                },
                {
                  name: "Nursing CNA",
                  market_id: 204,
                  curriculum: [{ name: "CNA", value: "cna" }],
                },
                {
                  name: "Physician Assistant",
                  market_id: 105,
                  curriculum: [{ name: "PANCE", value: "pance" }],
                },
                {
                  name: "Nurse Practitioner",
                  market_id: 203,
                  curriculum: [{ name: "FNP", value: "fnp" }],
                },
              ],
            },
            books: {
              name: "Books",
              value: "books",
              markets: [
                { name: "Medicine", market_id: 100 },
                { name: "Nursing", market_id: 101 },
                { name: "Nursing LPN", market_id: 202 },
                { name: "Nursing CNA", market_id: 204 },
                { name: "Pre-Health Biology", market_id: 103 },
                { name: "College", market_id: 112 },
                { name: "Paramedic", market_id: 113 },
                { name: "K12", market_id: 107 },
                { name: "German Medicine", market_id: 191 },
                { name: "Physician Assistant", market_id: 105 },
                { name: "EMT", market_id: 210 },
                { name: "UK Medicine", market_id: 106 },
                { name: "Pharmacy", market_id: 109 },
                { name: "Nurse Practitioner", market_id: 203 },
              ],
            },
          },
          getMarketById: function (e) {
            return this.markets.filter(function (t) {
              return t.id === e;
            })[0];
          },
          getMarketBySlug: function (e) {
            return this.markets.filter(function (t) {
              return t.slug === e;
            })[0];
          },
          getMarketByName: function (e) {
            return this.markets.filter(function (t) {
              return t.name === e;
            })[0];
          },
        },
        xt = {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + window.user.mobile_api_key,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
        kt = {
          loading: !1,
          values: {},
          timeLeft: 0,
          init: function () {
            return this.update();
          },
          redeem: function (e) {
            var t = this;
            return fetch(
              "data:application/json;base64,eyJ0b2tlbnMiOjMsInF1aXpfcXVlc3Rpb25zIjoyMCwic3BhY2VkcmVwX3JvdW5kcyI6MSwicmVzZXQiOjQ5MTI2fQ==",
              p(
                p({}, xt),
                {},
                { method: "POST", body: JSON.stringify({ card_id: e }) }
              )
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return t.update();
              });
          },
          update: function () {
            var e = this;
            return (
              (e.loading = !0),
              fetch("data:application/json;base64,eyJ0b2tlbnMiOjMsInF1aXpfcXVlc3Rpb25zIjoyMCwic3BhY2VkcmVwX3JvdW5kcyI6MSwicmVzZXQiOjQ5MTI2fQ==", xt)
                .then(function (e) {
                  return e.json();
                })
                .then(function (t) {
                  e.values = p({}, t);
                  var n = new Date();
                  (e.values.timeToReset = n.setSeconds(
                    n.getSeconds() + e.values.reset
                  )),
                    (e.loading = !1),
                    (e.values.all_limits_reached =
                      !t.tokens && !t.quiz_questions && !t.spacedrep_rounds),
                    (e.values.any_limits_reached =
                      !t.tokens || !t.quiz_questions || !t.spacedrep_rounds);
                })
            );
          },
          startCountDown: function () {
            var e = this;
            e.interval ||
              (e.interval = setInterval(function () {
                return e.decreamentCountdown();
              }, 1e3));
          },
          stopCountDown: function () {
            var e = this;
            e.interval && (clearInterval(e.interval), (e.interval = void 0));
          },
          timeLeftToReset: function () {
            var e = new Date(),
              t = new Date(this.values.timeToReset);
            return Math.max(0, t.getTime() - e.getTime());
          },
          countdownFormat: function (e) {
            var t = parseInt((e / 1e3) % 60),
              n = parseInt((e / 6e4) % 60),
              r = parseInt((e / 36e5) % 24),
              a = r < 10 ? "0" + r : r;
            return (
              (a += "h:" + (n < 10 ? "0" + n : n)),
              (a += "m:" + (t < 10 ? "0" + t : t) + "s")
            );
          },
          decreamentCountdown: function () {
            var e = this.timeLeftToReset();
            (this.countdown = this.countdownFormat(e)),
              (e -= 1e3) < 1 &&
                1e3 !== this.values.quiz_questions &&
                this.update();
          },
        },
        St = "TrialStatusBlock_statRow__GXnLO",
        Ct = (function (e) {
          b(n, e);
          var t = k(n);
          function n(e) {
            var r;
            g(this, n),
              ((r = t.call(this, e)).componentDidMount = function () {
                kt.init().then(function () {
                  return r.forceUpdate();
                }),
                  kt.startCountDown(),
                  (r.interval = setInterval(function () {
                    return r.forceUpdate();
                  }, 1e3));
              }),
              (r.componentWillUnmount = function () {
                kt.stopCountDown(), clearInterval(r.interval);
              }),
              (r.getUpgradeLink = function () {
                var e = wt.getMarketById(
                  r.state.inPseudoMarket
                    ? r.state.pseudoMarket.id
                    : r.props.user.lead
                );
                return "/pricing/"
                  .concat(e.slug, "?api_key=")
                  .concat(r.props.user.mobile_api_key);
              }),
              (r.render = function () {
                return r.props.user.user_id && r.state.visible
                  ? r.props.user.approved_educator
                    ? (0, P.jsx)("div", {
                        className:
                          "trial-status trial-status--quiz m-b-2" +
                          (r.props.fullWidth ? "full-width" : ""),
                        children: (0, P.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, P.jsxs)("h4", {
                              className:
                                "pls-font-raleway pls-font-20 m-t-1 pls-font-weight-700",
                              children: [
                                (0, P.jsx)("a", {
                                  className: "info-icon material-icons",
                                  href: "https://help.picmonic.com/en/articles/4211509-why-do-educators-get-free-premium-trial-access",
                                  target: "_blank",
                                  style: { verticalAlign: "bottom" },
                                  children: (0, P.jsx)(L, {
                                    icon: "info",
                                    color: "#FF9319",
                                    style: { verticalAlign: "middle" },
                                  }),
                                }),
                                "Remaining Educator Trial Access",
                              ],
                            }),
                            (0, P.jsxs)("div", {
                              className: St,
                              children: [
                                (0, P.jsx)(L, {
                                  icon: "play_circle_filled",
                                  color: "#FF9319",
                                  className: "m-r-1",
                                }),
                                " ",
                                kt.values.tokens,
                                " Picmonic Video-Quiz Lessson",
                                1 == kt.values.tokens ? "" : "s",
                              ],
                            }),
                            (0, P.jsxs)("div", {
                              className: "m-t-2 columns",
                              children: [
                                (0, P.jsx)("div", {
                                  className: "column",
                                  children:
                                    !(r.state.inMarket && r.props.markets) &&
                                    (0, P.jsx)("a", {
                                      href: r.getUpgradeLink(),
                                      className:
                                        "pls-btn pls-btn--block pls-btn--orange pulsing-orange btn-upgrade",
                                      "ada-label": "Upgrade",
                                      target: "_blank",
                                      rel: "noopener",
                                      children: r.props.user
                                        .premium_trial_eligible
                                        ? "TRY PREMIUM FREE"
                                        : r.props.user.is_referred &&
                                          r.props.user.is_trial
                                        ? "UPGRADE now for 20% off"
                                        : "Upgrade",
                                    }),
                                }),
                                r.children,
                              ],
                            }),
                            r.state.inPseudoMarket &&
                              r.state.pseudoMarket.procreator &&
                              (0, P.jsxs)("div", {
                                className: "m-t-1 verified-creator-endorsement",
                                children: [
                                  (0, P.jsx)("strong", {
                                    children:
                                      "These Picmonics are made by an independent Verified Creator.",
                                  }),
                                  (0, P.jsx)("br", {}),
                                  "They have been reviewed and endorsed by Picmonic.",
                                ],
                              }),
                          ],
                        }),
                      })
                    : (0, P.jsx)("div", {
                        className:
                          "trial-status trial-status--quiz m-b-2" +
                          (r.props.fullWidth ? "full-width" : ""),
                        children: (0, P.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, P.jsxs)("h4", {
                              className:
                                "pls-font-raleway pls-font-20 m-t-1 pls-font-weight-700",
                              children: [
                                (0, P.jsx)("a", {
                                  className: "info-icon material-icons",
                                  href: "https://www.picmonic.com/pages/picmonic-free-trial/",
                                  target: "_blank",
                                  style: { verticalAlign: "bottom" },
                                  children: (0, P.jsx)(L, {
                                    icon: "info",
                                    color: "#FF9319",
                                    style: { verticalAlign: "middle" },
                                  }),
                                }),
                                kt.values.all_limits_reached
                                  ? " Today's FREE Limit Reached"
                                  : " Today's Remaining Free Access",
                              ],
                            }),
                            (0, P.jsx)("div", {
                              className:
                                "timer m-t-1 pls-font-16 pls-font-opensans",
                              children:
                                !(
                                  !0 === r.props.inActiveMarket ||
                                  !1 === r.props.inMarket
                                ) &&
                                (0, P.jsxs)("span", {
                                  className: "timer-external-text",
                                  children: [
                                    "Upgrade to gain unlimited access to",
                                    wt.getMarketById(
                                      r.state.inPseudoMarket
                                        ? r.state.pseudoMarket.id
                                        : r.props.user.lead
                                    ).procreator ||
                                    wt.getMarketById(
                                      r.state.inPseudoMarket
                                        ? r.state.pseudoMarket.id
                                        : r.props.user.lead
                                    ).picmonic_partner
                                      ? ""
                                      : " Picmonic for ",
                                    wt.getMarketById(
                                      r.state.inPseudoMarket
                                        ? r.state.pseudoMarket.id
                                        : r.props.user.lead
                                    ).name,
                                    !r.state.inPseudoMarket ||
                                    r.state.pseudoMarket.procreator ||
                                    r.state.pseudoMarket.picmonic_partner
                                      ? ""
                                      : ", an available Add-On ",
                                    r.state.inPseudoMarket &&
                                    r.state.pseudoMarket.procreator
                                      ? " By Picmonic Verified Creator: " +
                                        r.state.pseudoMarket.procreator
                                      : "",
                                    r.state.inPseudoMarket &&
                                    r.state.pseudoMarket.picmonic_partner
                                      ? ", an available Add-On"
                                      : "",
                                  ],
                                }),
                            }),
                            kt.values.any_limits_reached &&
                              (0, P.jsxs)("div", {
                                className:
                                  "timer m-t-1 pls-font-16 pls-font-opensans",
                                children: [
                                  kt.values.all_limits_reached &&
                                    (0, P.jsxs)("span", {
                                      className: "timer-text pls-white",
                                      children: [(0, P.jsx)("br", {}), "Wait"],
                                    }),
                                  (0, P.jsx)("span", {
                                    className:
                                      "timer-text pls-font-18 pls-white" +
                                      (kt.values.all_limits_reached
                                        ? ""
                                        : " display-block m-t-1 italic"),
                                    children: kt.countdown,
                                  }),
                                  kt.values.all_limits_reached &&
                                    (0, P.jsxs)("span", {
                                      className:
                                        "timer-external-text pls-white italic",
                                      children: [
                                        (0, P.jsx)("br", {}),
                                        "for more, or upgrade now!",
                                      ],
                                    }),
                                  !kt.values.all_limits_reached &&
                                    (0, P.jsx)("span", {
                                      className: "timer-text",
                                      children:
                                        " until more free content is unlocked",
                                    }),
                                ],
                              }),
                            !kt.values.all_limits_reached &&
                              (0, P.jsx)("table", {
                                className: "m-t-2",
                                children: (0, P.jsxs)("tbody", {
                                  children: [
                                    (0, P.jsxs)("tr", {
                                      className:
                                        0 === kt.values.tokens ? "empty" : "",
                                      children: [
                                        (0, P.jsx)("th", {
                                          children: "Picmonic Video Plays:",
                                        }),
                                        (0, P.jsx)("td", {
                                          children: kt.values.tokens,
                                        }),
                                      ],
                                    }),
                                    r.props.user.is_trial &&
                                      (0, P.jsxs)(P.Fragment, {
                                        children: [
                                          (0, P.jsxs)("tr", {
                                            className:
                                              0 === kt.values.quiz_questions
                                                ? "empty"
                                                : "",
                                            children: [
                                              (0, P.jsx)("th", {
                                                children:
                                                  "Multiple Choice Quiz Questions:",
                                              }),
                                              (0, P.jsx)("td", {
                                                children:
                                                  kt.values.quiz_questions,
                                              }),
                                            ],
                                          }),
                                          (0, P.jsxs)("tr", {
                                            className:
                                              0 === kt.values.spacedrep_rounds
                                                ? "empty"
                                                : "",
                                            children: [
                                              (0, P.jsx)("th", {
                                                children:
                                                  "Daily Quiz with Spaced Repetition Rounds:",
                                              }),
                                              (0, P.jsx)("td", {
                                                children:
                                                  kt.values.spacedrep_rounds,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                            (0, P.jsxs)("div", {
                              className: "m-t-2 columns",
                              children: [
                                (0, P.jsx)("div", {
                                  className: "column",
                                  children:
                                    !(r.state.inMarket && r.props.markets) &&
                                    (0, P.jsx)("a", {
                                      href: r.getUpgradeLink(),
                                      className:
                                        "pls-btn pls-btn--block pls-btn--orange pulsing-orange btn-upgrade",
                                      "ada-label": "Upgrade",
                                      target: "_blank",
                                      rel: "noopener",
                                      children: r.props.user
                                        .premium_trial_eligible
                                        ? "TRY PREMIUM FREE"
                                        : r.props.user.is_referred &&
                                          r.props.user.is_trial
                                        ? "UPGRADE now for 20% off"
                                        : "Upgrade",
                                    }),
                                }),
                                r.children,
                              ],
                            }),
                            r.state.inPseudoMarket &&
                              r.state.pseudoMarket.procreator &&
                              (0, P.jsxs)("div", {
                                className: "m-t-1 verified-creator-endorsement",
                                children: [
                                  (0, P.jsx)("strong", {
                                    children:
                                      "These Picmonics are made by an independent Verified Creator.",
                                  }),
                                  (0, P.jsx)("br", {}),
                                  "They have been reviewed and endorsed by Picmonic.",
                                ],
                              }),
                          ],
                        }),
                      })
                  : "";
              });
            var a = !1,
              i = !1,
              s = !1,
              o = !1;
            return (
              r.props.markets &&
                r.props.user.user_id &&
                ((s = !!r.props.markets.filter(function (e) {
                  return e.market_id === r.props.user.lead;
                }).length),
                r.props.markets.forEach(function (e) {
                  r.props.user.active_markets.filter(function (t) {
                    return t.market_id === e.market_id;
                  }).length && (a = !0),
                    (wt.getMarketById(e.market_id).is_pseudo ||
                      r.props.user.market.addons.filter(function (t) {
                        return t.market_id === e.market_id;
                      }).length) &&
                      ((s = !0), (i = !0), (o = wt.getMarketById(e.market_id)));
                })),
              (r.state = {
                inActiveMarket: a,
                inPseudoMarket: i,
                pseudoMarket: o,
                inMarket: s,
                visible: r.props.user.is_trial || !a,
              }),
              r
            );
          }
          return y(n);
        })(e.PureComponent),
        jt = "PreLearnModal_prelearn-overlay__bkudK",
        At = "PreLearnModal_modal-body__wvfsY",
        Pt = "PreLearnModal_prelearn-overlay-backdrop__bMRp4",
        Nt = "PreLearnModal_prelearn-modal-content__fPc0F",
        Mt = "PreLearnModal_close__zuNcf",
        Et = "PreLearnModal_btnWrapper__-xKYp",
        Tt = "PreLearnModal_ctas-wrapper__wGAb1",
        zt = (function (e) {
          b(n, e);
          var t = k(n);
          function n(e) {
            var r;
            return (
              g(this, n),
              ((r = t.call(this, e)).componentDidMount = function () {
                kt.init().then(function () {
                  var e =
                      !!r.props.card.primary_tracks.filter(function (e) {
                        return e.market_id === r.props.user.lead;
                      }).length ||
                      r.props.card.primary_tracks.filter(function (e) {
                        return 1 === e.market_is_pseudo;
                      }).length,
                    t = !1,
                    n = !1;
                  r.props.card.primary_tracks.forEach(function (a) {
                    r.props.user.active_markets.filter(function (e) {
                      return e.market_id === a.market_id;
                    }).length && (t = !0),
                      r.props.user.market.addons.filter(function (e) {
                        return e.market_id === a.market_id;
                      }).length && ((e = !0), (n = a.market_id));
                  }),
                    r.setState({
                      loading: !1,
                      canPlay: !(!r.props.card.is_owned && !kt.values.tokens),
                      canQuiz: !(
                        r.props.user.is_trial &&
                        !kt.values.quiz_questions &&
                        !r.props.card.is_free
                      ),
                      canSpacedRep: !1,
                      playTitle:
                        r.props.user.is_trial &&
                        r.props.card.is_owned &&
                        r.props.card.lastviewed > 0
                          ? "REPLAY PICMONIC"
                          : "PLAY PICMONIC",
                      inMarket: e,
                      inActiveMarket: t,
                      addonMarket: n,
                    });
                });
              }),
              (r.getUpgradeLink = function () {
                var e = wt.getMarketById(r.props.card.primary_market_id)
                  .is_pseudo
                  ? r.props.card.primary_market_id
                  : r.state.addonMarket
                  ? r.state.addonMarket
                  : r.props.user.lead;
                return "/pricing/"
                  .concat(wt.getMarketById(e).slug, "?api_key=")
                  .concat(r.props.user.mobile_api_key);
              }),
              (r.clickPlay = function () {
                r.props.play(), r.props.dismiss();
              }),
              (r.clickQuiz = function () {
                r.props.quiz(), r.props.dismiss();
              }),
              (r.render = function () {
                return (0, P.jsxs)("div", {
                  className: jt,
                  role: "dialog",
                  children: [
                    (0, P.jsx)("div", { className: Pt }),
                    (0, P.jsxs)("div", {
                      className: At,
                      children: [
                        !1,
                        (0, P.jsxs)("div", {
                          className: Nt + " prelearn-content text-center",
                          "ng-show":
                            "LearnService.assetsLoaded && TokenService.values.$resolved",
                          children: [
                            !r.state.loading &&
                              !!r.state.canPlay &&
                              (0, P.jsx)(L, {
                                icon: "close",
                                color: "#AAACB3",
                                className: Mt,
                                onClick: r.props.dismiss,
                              }),
                            (0, P.jsxs)("div", {
                              "ng-show":
                                "LearnService.assetsLoaded && TokenService.values.$resolved",
                              children: [
                                (0, P.jsx)("h3", {
                                  className:
                                    "pls-white pls-font-20 add-margin-bottom",
                                  children: r.props.card.name,
                                }),
                                !r.state.inMarket &&
                                  (0, P.jsx)("div", {
                                    className:
                                      "pls-grey pls-font-16 text-center m-t-2 m-r-2 m-l-2",
                                    children: (0, P.jsxs)("em", {
                                      children: [
                                        "Even though you might be studying ",
                                        (0, P.jsx)("span", {
                                          className: "pls-white",
                                          dangerouslySetInnerHTML: {
                                            __html: r.props.card.name,
                                          },
                                        }),
                                        ", this particular Picmonic isn\u2019t entirely applicable to ",
                                        (0, P.jsxs)("span", {
                                          className: "pls-white",
                                          children: [
                                            "Picmonic for ",
                                            r.state.market.name,
                                          ],
                                        }),
                                        " users and is not included in the ",
                                        (0, P.jsxs)("span", {
                                          className: "pls-white",
                                          children: [
                                            "Picmonic for ",
                                            r.state.market.name,
                                          ],
                                        }),
                                        " subscription.",
                                      ],
                                    }),
                                  }),
                                (0, P.jsx)(Ct, {
                                  markets: r.props.card.primary_tracks,
                                  user: r.props.user,
                                }),
                                r.state.inActiveMarket &&
                                  (0, P.jsxs)(P.Fragment, {
                                    children: [
                                      (0, P.jsxs)("h3", {
                                        className:
                                          "pls-white pls-font-16 lighter add-bottom",
                                        children: [
                                          !(
                                            !r.props.card.is_owned &&
                                            !kt.values.tokens
                                          ) &&
                                            (0, P.jsx)("strong", {
                                              "ng-show": "",
                                              className: "pls-blue",
                                              children: "PLAY",
                                            }),
                                          !kt.values.tokens &&
                                            !r.props.card.is_owned &&
                                            (0, P.jsx)("strong", {
                                              className:
                                                "pls-orange pls-uppercase",
                                              children: "Upgrade to PLAY ",
                                            }),
                                          "the Picmonic first or ",
                                          (0, P.jsx)("strong", {
                                            className: "pls-meekus",
                                            children: "QUIZ",
                                          }),
                                          " yourself to assess your knowledge.",
                                        ],
                                      }),
                                      (0, P.jsx)("div", { className: "m-b-2" }),
                                    ],
                                  }),
                                (0, P.jsxs)("div", {
                                  className: Tt,
                                  children: [
                                    (0, P.jsxs)("div", {
                                      className: Et,
                                      children: [
                                        r.state.canPlay &&
                                          r.state.canQuiz &&
                                          (0, P.jsxs)("button", {
                                            "ng-click": "play()",
                                            className:
                                              "pls-btn btn-flat-blue pls-magnum btn-block pls-uppercase",
                                            tabIndex: "0",
                                            id: "prelearn-play-button",
                                            "ada-label": "Play Picmonic",
                                            "ng-disabled": "this.state.loading",
                                            children: [
                                              (0, P.jsx)(L, {
                                                icon: "play_circle_outline",
                                                size: "16",
                                                className: "m-r-1",
                                                "ng-hide": "this.state.loading",
                                              }),
                                              r.state.loading
                                                ? ""
                                                : r.state.playTitle,
                                              (0, P.jsx)("pls-loading-icon", {
                                                size: "x-small",
                                                "ng-show": "this.state.loading",
                                              }),
                                            ],
                                          }),
                                        !(
                                          (r.state.canPlay &&
                                            r.state.canQuiz) ||
                                          (!r.state.canPlay &&
                                            !r.state.canQuiz &&
                                            !r.state.canSpacedRep)
                                        ) &&
                                          (0, P.jsx)("div", {
                                            children:
                                              r.state.inMarket &&
                                              (0, P.jsx)("a", {
                                                href: r.getUpgradeLink(),
                                                rel: "noopener noreferrer",
                                                target: "_blank",
                                                className:
                                                  "pls-btn btn-block btn-upgrade pulsing-orange",
                                                role: "button",
                                                tabIndex: "0",
                                                children: r.props.user
                                                  .premium_trial_eligible
                                                  ? "TRY PREMIUM FREE"
                                                  : "UPGRADE",
                                              }),
                                          }),
                                      ],
                                    }),
                                    (0, P.jsxs)("div", {
                                      className: Et,
                                      children: [
                                        r.state.canQuiz &&
                                          (0, P.jsxs)("button", {
                                            onClick: r.clickQuiz,
                                            className:
                                              "pls-btn btn-flat-meekus pls-magnum btn-block",
                                            tabIndex: "0",
                                            children: [
                                              (0, P.jsx)(L, {
                                                icon: "check_box",
                                                size: "16",
                                                className:
                                                  "material-icons m-r-1",
                                              }),
                                              "START QUIZ",
                                            ],
                                          }),
                                        r.state.canPlay &&
                                          !r.state.canQuiz &&
                                          (0, P.jsxs)("button", {
                                            onClick: r.clickPlay,
                                            className:
                                              "pls-btn btn-flat-blue pls-magnum btn-block pls-uppercase",
                                            tabIndex: "0",
                                            id: "prelearn-play-button",
                                            "ada-label": "Play Picmonic",
                                            "ng-disabled": "this.state.loading",
                                            children: [
                                              r.state.loading
                                                ? ""
                                                : r.state.playTitle,
                                              (0, P.jsx)("pls-loading-icon", {
                                                size: "x-small",
                                                "ng-show": "this.state.loading",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    !r.props.user.is_trial &&
                                      r.state.inMarket &&
                                      !r.state.inActiveMarket &&
                                      r.state.canPlay &&
                                      r.state.canQuiz &&
                                      (0, P.jsx)("div", {
                                        className:
                                          "col-xs-offset-1 col-xs-10 p-t-1",
                                        style: { flex: 1 },
                                        children: (0, P.jsx)("a", {
                                          href: r.getUpgradeLink(),
                                          target: "_blank",
                                          className:
                                            "pls-btn pls-btn--block pls-btn--orange pls-white pulsing-orange",
                                          role: "button",
                                          tabIndex: "0",
                                          children: r.props.user
                                            .premium_trial_eligible
                                            ? "TRY PREMIUM FREE"
                                            : "UPGRADE",
                                        }),
                                      }),
                                    r.props.user.is_trial &&
                                      r.state.inMarket &&
                                      ((r.state.canPlay && r.state.canQuiz) ||
                                        (!r.state.canPlay &&
                                          !r.state.canQuiz)) &&
                                      (0, P.jsxs)("div", {
                                        className:
                                          "col-xs-offset-1 col-xs-10 p-t-1",
                                        style: { flex: 1 },
                                        children: [
                                          (0, P.jsx)("a", {
                                            href: r.getUpgradeLink(),
                                            target: "_blank",
                                            className:
                                              "pls-btn btn-block btn-upgrade pulsing-orange",
                                            role: "button",
                                            tabIndex: "0",
                                            children: r.props.user
                                              .premium_trial_eligible
                                              ? "TRY PREMIUM FREE"
                                              : "UPGRADE",
                                          }),
                                          !r.state.inMarket &&
                                            (0, P.jsx)("button", {
                                              "ng-click":
                                                "BrowseService.toggleOpen()",
                                              className:
                                                "pls-btn btn-block btn-upgrade",
                                              tabIndex: "0",
                                              children:
                                                "EXPLORE OTHER PICMONICS",
                                            }),
                                        ],
                                      }),
                                    2 === r.props.card.entity_type_id &&
                                      1 !== r.props.card.entity_id &&
                                      (0, P.jsx)("div", {
                                        className: "clearfix",
                                      }),
                                    2 === r.props.card.entity_type_id &&
                                      1 !== r.props.card.entity_id &&
                                      !!r.props.card.is_owned &&
                                      r.props.card.card_id < 5e4 &&
                                      (0, P.jsxs)("div", {
                                        className: "m-t-3 text-center",
                                        children: [
                                          (0, P.jsxs)("strong", {
                                            children: [
                                              "This content was made by ",
                                              379405 === r.props.card.entity_id
                                                ? "a Picmonic Partner"
                                                : "an independent Verified Creator",
                                              ".",
                                            ],
                                          }),
                                          (0, P.jsx)("br", {}),
                                          "It has been reviewed and endorsed by Picmonic.",
                                        ],
                                      }),
                                    2 === r.props.card.entity_type_id &&
                                      1 !== r.props.card.entity_id &&
                                      !!r.props.card.is_owned &&
                                      r.props.card.card_id >= 5e4 &&
                                      (0, P.jsxs)("div", {
                                        className: "m-t-3 text-center",
                                        children: [
                                          (0, P.jsx)("img", {
                                            "pls-src":
                                              "/assets/img/logos/verified-creator.svg",
                                            width: "22",
                                            alt: "verified creator",
                                          }),
                                          " ",
                                          (0, P.jsx)("strong", {
                                            children:
                                              "Verified Community Picmonics:",
                                          }),
                                          (0, P.jsx)("br", {}),
                                          "Created by independent community members. Reviewed and endorsed by Picmonic.",
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsx)("div", {
                          className: "prelearn-bottom m-b-4",
                          "ng-if": "inActiveMarket",
                          children: (0, P.jsx)("div", {
                            className: "row hidden-xs m-l-3 m-r-3",
                            children: (0, P.jsx)("div", {
                              className: "col-xs-12",
                              children: (0, P.jsx)("div", {
                                className: "m-t-4 m-b-4 hidden-xs",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              }),
              (r.state = {
                market: wt.getMarketById(r.props.user.lead),
                loading: !0,
              }),
              r
            );
          }
          return y(n);
        })(e.PureComponent),
        Lt = "LoadingIcon_icon__fAWnd",
        Ft = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            return g(this, n), t.apply(this, arguments);
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("svg", {
                    className: Lt,
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: this.props.size || 128,
                    height: this.props.size || 128,
                    viewBox: "0 0 128 128",
                    children: [
                      (0, P.jsxs)("defs", {
                        children: [
                          (0, P.jsx)("circle", {
                            id: "a",
                            cx: "64",
                            cy: "64",
                            r: "64",
                          }),
                          (0, P.jsxs)("linearGradient", {
                            id: "b",
                            x1: "50%",
                            x2: "50%",
                            y1: "0%",
                            y2: "100%",
                            children: [
                              (0, P.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#FFF",
                              }),
                              (0, P.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#FFF",
                                stopOpacity: "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, P.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [
                          (0, P.jsx)("use", {
                            fill: "#000",
                            filter: "url(#a)",
                            xlinkHref: "#a",
                          }),
                          (0, P.jsx)("use", {
                            fill: "#272B33",
                            fillOpacity: ".8",
                            xlinkHref: "#a",
                          }),
                          (0, P.jsx)("path", {
                            stroke: "url(#b)",
                            strokeLinecap: "round",
                            strokeWidth: "16",
                            d: "M64 112c26.51 0 48-21.49 48-48S90.51 16 64 16 16 37.49 16 64",
                            transform: "matrix(-1 0 0 1 128 0)",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Ot = Ft,
        Rt = n(524),
        Bt = n.n(Rt),
        It = function () {
          return Bt().getParser(window.navigator.userAgent).getPlatform().type;
        },
        qt = !1,
        Dt = (function (t) {
          b(r, t);
          var n = k(r);
          function r(t) {
            var a;
            return (
              g(this, r),
              ((a = n.call(this, t))._onResize = function () {
                window.innerWidth <= 480 && !a.state.mobile
                  ? a.setState({ mobile: !0 })
                  : window.innerWidth >= 480 &&
                    a.state.mobile &&
                    a.setState({ mobile: !1 });
              }),
              (a._onKeyPress = function (e) {
                if (!a.props.enablePlay) return !1;
                switch (e.key) {
                  case "f":
                    a._toggleSideBar();
                    break;
                  case "e":
                    a.props.picmonic.audio.educational &&
                      a.setState(function (e) {
                        return {
                          audioMode: "educational",
                          playing: !0,
                          sideBarCollapsed: !0,
                        };
                      });
                    break;
                  case "s":
                    a.props.picmonic.audio.story &&
                      a.setState(function (e) {
                        return {
                          audioMode: "story",
                          playing: !0,
                          sideBarCollapsed: !0,
                        };
                      });
                }
              }),
              (a._loadAssets = function (e) {
                (a.totalAssets = e.length),
                  (a.assetsLoaded = 0),
                  e.map(function (e) {
                    var t = new Image();
                    return (
                      t.addEventListener("load", a._assetLoaded),
                      t.addEventListener("error", a._assetLoaded),
                      (t.src = e),
                      t
                    );
                  });
              }),
              (a._assetLoaded = function () {
                a.assetsLoaded++,
                  a.assetsLoaded === a.totalAssets &&
                    a.setState({ assetsLoading: !1 });
              }),
              (a._resetCardAttempt = function () {
                a.cardAttempt = {
                  card_confidence: 0,
                  card_id: a.props.picmonic.card_id,
                  card_reset_flag: 0,
                  education_completed_flag: 0,
                  end_time: null,
                  fact_count: a.props.picmonic.facts.filter(function (e) {
                    return !e.header;
                  }).length,
                  facts_attempted: 0,
                  facts_correct: 0,
                  learn_complete: !1,
                  learn_time_spent: null,
                  master_complete: 0,
                  mini_player_flag: 0,
                  mobile_flag: 0,
                  offline: 0,
                  playlist_id: null,
                  quiz_attempts: 0,
                  quiz_fact_stats: [],
                  quiz_round_id: null,
                  quiz_time_spent: 0,
                  review_complete: 0,
                  review_time_spent: 0,
                  source_device: It(),
                  start_time: Math.round(Date.now() / 1e3),
                  started_from_push: 0,
                  story_completed_flag: 0,
                  summary_viewed_flag: 0,
                  track_id: null,
                  lti_session_id: window.lti_session_id,
                };
              }),
              (a._renderFactCharacters = function () {
                return a.props.picmonic.facts.map(function (e) {
                  return (
                    !(
                      !e.is_primary &&
                      a.props.quizMode &&
                      "question" === a.props.quizState &&
                      (!a.props.showHint ||
                        (a.props.showHint &&
                          a.props.quizFact &&
                          a.props.quizFact.fact_id !== e.fact_id))
                    ) &&
                    !!(e.is_primary || a.props.quizMode || e.learned_flag) &&
                    e.characters.map(function (t) {
                      return (0,
                      P.jsx)(N, { selected: a.state.selectedFact && e.fact_id === a.state.selectedFact.fact_id, character: t, faded: !(!a.props.quizFact || e.fact_id === a.props.quizFact.fact_id || e.is_primary || a.props.enablePlay), bounce: a.props.quizFact && e.fact_id === a.props.quizFact.fact_id }, t.card_fact_character_id);
                    })
                  );
                });
              }),
              (a._renderCardCharacters = function () {
                return a.props.picmonic.characters.map(function (e) {
                  return (0,
                  P.jsx)(N, { character: e, faded: !(!a.props.quizMode || a.props.enablePlay) }, e.card_fact_character_id);
                });
              }),
              (a._selectFact = function (e) {
                (a.viewedFacts[e.fact_id] = 1),
                  (e.learned_flag = 1),
                  a.setState({ selectedFact: e }, function () {
                    a.playerControls.current &&
                      a.playerControls.current.seekToFact(e);
                  });
              }),
              (a._saveAttempt = function (e) {
                (a.cardAttempt.end_time = Math.round(Date.now() / 1e3)),
                  (a.cardAttempt.learn_time_spent =
                    a.cardAttempt.end_time - a.cardAttempt.start_time);
                var t = [];
                Object.entries(a.viewedFacts).forEach(function (e) {
                  var n = o(e, 2),
                    r = n[0],
                    a = n[1];
                  t.push({ fact_id: parseInt(r, 10), viewed: a });
                }),
                  (a.cardAttempt.quiz_fact_stats = t),
                  console.log("send", e),
                  e
                    ? navigator.sendBeacon(
                        "/api/v2/picmonics/"
                          .concat(
                            a.props.picmonic.card_id,
                            "/attempts?api_key="
                          )
                          .concat(window.user.mobile_api_key),
                        JSON.stringify(a.cardAttempt)
                      )
                    : fetch(
                        "data:application/json;base64,ewogICAgInNwYWNlZF9yZXBfZmFjdG9yIjogMSwKICAgICJ0b3RhbF9xdWl6X3RpbWVfc3BlbnQiOiA4NTcsCiAgICAibGVhcm5lZF9mbGFnIjogMCwKICAgICJsZWFybmVkX2NvdW50IjogMCwKICAgICJsYXN0X2Fuc3dlcl9oaW50IjogMCwKICAgICJudW1faGludHMiOiAwLAogICAgImZhY3RfaWQiOiAiNDI0NzEiLAogICAgInVzZXJfaWQiOiAxNzQ5MTgyLAogICAgIm51bV9jb3JyZWN0IjogMCwKICAgICJsYXN0X2Fuc3dlciI6IDAsCiAgICAibGFzdF9xdWl6emVkX2F0IjogMTY4NTk4NjUzMiwKICAgICJudW1fYXR0ZW1wdHMiOiAxLAogICAgInNwYWNlZF9yZXBfYnVja2V0IjogMSwKICAgICJzcGFjZWRfcmVwX25leHRfdGltZSI6IDE2ODU5ODI5MzIsCiAgICAidXNlcl9mYWN0X3N0YXRfaWQiOiAzNjMwNjU0MjIsCiAgICAidXNlcl9mYWN0X2F0dGVtcHRfaWQiOiAxOTg2ODI4NjAKfQ==",
                        p(
                          p({}, xt),
                          {},
                          {
                            method: "POST",
                            body: JSON.stringify(a.cardAttempt),
                          }
                        )
                      ),
                  a._resetCardAttempt();
              }),
              (a._updateSelectedFact = function (e) {
                e && ((e.learned_flag = 1), (a.viewedFacts[e.fact_id] = 1)),
                  a.setState({ selectedFact: e });
              }),
              (a._renderHotSpots = function () {
                return a.props.picmonic.facts
                  .filter(function (e) {
                    return !e.header;
                  })
                  .sort(function (e, t) {
                    return e.order - t.order;
                  })
                  .map(function (e, t) {
                    return (0,
                    P.jsx)(_e, { onPressItem: a._selectFact, learned: e.learned_flag, quizzed: e.last_answer, fact: e, index: t }, e.fact_id);
                  });
              }),
              (a._renderFactCover = function () {
                return (0, P.jsx)("div", {
                  className: Q,
                  children:
                    a.props.quizFact &&
                    a.props.picmonic.facts
                      .find(function (e) {
                        return e.fact_id === a.props.quizFact.fact_id;
                      })
                      .characters.map(function (e) {
                        return (0,
                        P.jsx)("div", { className: U, style: { width: (e.crop_width / 2200) * 100 + "%", height: (e.crop_height / 1700) * 100 + "%", top: ((e.crop_y + e.character_y) / 1700) * 100 + "%", left: ((e.crop_x + e.character_x) / 2200) * 100 + "%" } }, e.card_fact_character_id);
                      }),
                });
              }),
              (a._unselectFact = function () {
                a.state.playing ||
                  (a.setState({ selectedFact: null }),
                  a.playerControls.current.seekToFact());
              }),
              (a._toggleSideBar = function () {
                a.props.onChangeFactBarPreference(a.state.sideBarCollapsed),
                  a.setState(function (e) {
                    return { sideBarCollapsed: !e.sideBarCollapsed };
                  });
              }),
              (a._toggleClosedCaption = function () {
                a.setState(
                  function (e) {
                    return { closedCaption: !e.closedCaption };
                  },
                  function () {
                    a.props.user.user_id &&
                      fetch(
                        "/api/v2/user",
                        p(
                          p({}, xt),
                          {},
                          {
                            method: "PUT",
                            body: JSON.stringify({
                              subtitles_enabled: a.state.closedCaption ? 1 : 0,
                            }),
                          }
                        )
                      );
                  }
                );
              }),
              (a._closePostLearn = function (e) {
                switch ((a.setState({ showPostLearn: !1 }), e)) {
                  case "quiz":
                    a.props.onClickQuiz();
                    break;
                  case "play":
                    a._toggleAudioMode();
                }
              }),
              (a._onAudioEnd = function () {
                !window.preview &&
                  (-1 ===
                    [8225, 8259, 2034].indexOf(a.props.picmonic.card_id) ||
                    (a.props.user.lti && a.props.user.lti.lti_id)) &&
                  a.setState({
                    showPostLearn:
                      (!a.props.playOnly || "story" !== a.state.audioMode) &&
                      !a.props.quizMode,
                    selectedFact: null,
                    playing: !1,
                  }),
                  (a.cardAttempt[
                    "educational" === a.state.audioMode
                      ? "education_completed_flag"
                      : "story_completed_flag"
                  ] = 1);
              }),
              (a._toggleAudioMode = function (e) {
                a.setState(function (t) {
                  return {
                    audioMode:
                      e ||
                      ("educational" === t.audioMode ? "story" : "educational"),
                    playing: !0,
                    sideBarCollapsed: !0,
                    showPostLearn: !1,
                  };
                });
              }),
              (a._togglePlaying = function () {
                a.setState(function (e) {
                  return {
                    playing: !e.playing,
                    sideBarCollapsed: !e.playing || !a.props.factBarPreference,
                  };
                });
              }),
              (a._checkTokens = function () {
                kt.init().then(function () {
                  kt.values.tokens &&
                    (a.setState({ showPreLearn: !1 }),
                    kt.redeem(a.props.picmonic.card_id),
                    a.props.autoPlay && a._togglePlaying());
                });
              }),
              (a._beforeUnload = function () {
                return !a.props.quizMode && a._saveAttempt(!0);
              }),
              (a.componentDidMount = function () {
                a.props.quizMode ||
                a.props.picmonic.is_owned ||
                -1 !== [8225, 8259, 2034].indexOf(a.props.picmonic.card_id) ||
                window.preview
                  ? a.props.autoPlay && a._togglePlaying()
                  : a._checkTokens(),
                  window.addEventListener("beforeunload", a._beforeUnload);
              }),
              (a.componentDidUpdate = function (e) {
                ((!e.quizMode && a.props.quizMode) ||
                  ("answer" === e.quizState &&
                    "question" === a.props.quizState)) &&
                  a.setState(
                    {
                      selectedFact: null,
                      playing: !1,
                      audioMode: "educational",
                      sideBarCollapsed: !0,
                      showQuizOutOfTokens: !1,
                      showPostLearn: !1,
                    },
                    function () {
                      return a.playerControls.current.seekToFact();
                    }
                  ),
                  !e.quizMode && a.props.quizMode && a._saveAttempt(),
                  !e.autoPlay && a.props.autoPlay && a._togglePlaying();
              }),
              (a._dismissPreLearn = function () {
                a.setState({ showPreLearn: !1 });
              }),
              (a._toggleDefinition = function () {
                a.setState(function (e) {
                  return { definitionOpen: !e.definitionOpen };
                });
              }),
              (a._onPreviewEnded = function () {
                a._togglePlaying(), a.props.onPreviewEnded();
              }),
              (a.componentWillUnmount = function () {
                a.props.quizMode || a._saveAttempt(),
                  document.removeEventListener("keyup", a._onKeyPress),
                  window.removeEventListener("resize", a._onResize),
                  window.removeEventListener("beforeunload", a._beforeUnload);
              }),
              (a._renderPicmonic = function () {
                return a.props.picmonic.is_mature && a.props.user.safety_mode
                  ? (0, P.jsx)("img", {
                      src: "//cdn.picmonic.com/cloud_data/production/assets/img/mature-content.png",
                      alt: "mature content",
                      className: re,
                    })
                  : (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsx)("img", {
                          src: a.props.picmonic.background_image_url.replace(
                            "picmonic_assets",
                            "picmonic_assets_threequarter"
                          ),
                          alt: "background",
                          className: re,
                        }),
                        a._renderCardCharacters(),
                        a._renderFactCharacters(),
                        (!a.props.quizMode || a.props.enablePlay) &&
                          a._renderHotSpots(),
                      ],
                    });
              }),
              (a._renderLoading = function () {
                return (0, P.jsx)("div", {
                  className: ie,
                  children: (0, P.jsx)(Ot, {}),
                });
              }),
              (a.playerControls = e.createRef()),
              (a.assetContainer = e.createRef()),
              (a.closedCaption = e.createRef()),
              (a.state = {
                selectedFact: null,
                sideBarCollapsed: !1,
                showPostLearn: !1,
                audioMode: "educational",
                playing: !1,
                postLearnAction: "play",
                assetsLoading: !0,
                definitionOpen: !1,
                mobile: window.innerWidth <= 480,
                showPreLearn:
                  !t.quizMode &&
                  !t.picmonic.is_owned &&
                  -1 === [8225, 8259, 2034].indexOf(t.picmonic.card_id) &&
                  !window.preview,
                closedCaption: !!t.user.subtitles_enabled,
                showQuizOutOfTokens: !1,
              }),
              (a.viewedFacts = {}),
              a._resetCardAttempt(),
              a._loadAssets(
                [
                  a.props.picmonic.background_image_url.replace(
                    "picmonic_assets",
                    "picmonic_assets_threequarter"
                  ),
                ].concat(
                  S(
                    a.props.picmonic.characters.reduce(function (e, t) {
                      return [].concat(
                        S(
                          t.assets.map(function (e) {
                            return e.image_url.replace(
                              "picmonic_assets",
                              "picmonic_assets_threequarter"
                            );
                          })
                        ),
                        S(e)
                      );
                    }, [])
                  ),
                  S(
                    a.props.picmonic.facts.reduce(function (e, t) {
                      return [].concat(
                        S(
                          t.characters.reduce(function (e, t) {
                            return [].concat(
                              S(
                                t.assets.map(function (e) {
                                  return e.image_url.replace(
                                    "picmonic_assets",
                                    "picmonic_assets_threequarter"
                                  );
                                })
                              ),
                              S(e)
                            );
                          }, [])
                        ),
                        S(e)
                      );
                    }, [])
                  )
                )
              ),
              document.addEventListener("keyup", a._onKeyPress),
              window.addEventListener("resize", a._onResize),
              a
            );
          }
          return (
            y(r, [
              {
                key: "render",
                value: function () {
                  var e =
                    this.props.quizMode &&
                    "answer" === this.props.quizState &&
                    !this.props.enablePlay &&
                    !this.props.videoPlayed &&
                    !this.props.picmonic.learned_flag &&
                    "picmonic" !== this.props.quizType &&
                    this.props.incorrect >= 2 &&
                    !qt;
                  qt = e || qt;
                  var t =
                    (!this.props.quizMode || !this.state.mobile) &&
                    (0, P.jsx)(be, {
                      show:
                        !this.props.quizMode ||
                        ("answer" === this.props.quizState &&
                          this.props.enablePlay),
                      facts: this.props.picmonic.facts,
                      factsCollapased:
                        this.state.sideBarCollapsed && !this.state.mobile,
                      onSelectFact: this._selectFact,
                      selectedFact: this.state.selectedFact,
                      onClickToggle: this._toggleSideBar,
                      transcripts:
                        this.props.picmonic.transcripts[this.state.audioMode],
                    });
                  return (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsxs)("div", {
                        className: F,
                        onClick: this.props.onClickPlayer,
                        children: [
                          this.state.showPreLearn &&
                            (0, P.jsx)(zt, {
                              card: this.props.picmonic,
                              user: this.props.user,
                              quiz: this.props.onClickQuiz,
                              play: this._togglePlaying,
                              dismiss: this._dismissPreLearn,
                            }),
                          this.props.showQuizOutOfTokens &&
                            (0, P.jsx)("div", {
                              className: se,
                              children: (0, P.jsx)("div", {
                                className: oe,
                                children: (0, P.jsx)(Ct, {
                                  user: this.props.user,
                                }),
                              }),
                            }),
                          (0, P.jsxs)("div", {
                            className: O,
                            children: [
                              !this.state.mobile && t,
                              (0, P.jsxs)("div", {
                                className: R,
                                children: [
                                  (0, P.jsxs)("div", {
                                    className: B,
                                    ref: this.assetContainer,
                                    children: [
                                      (0, P.jsx)(vt, {
                                        audioMode: this.state.audioMode,
                                        show: this.state.showPostLearn,
                                        onClose: this._closePostLearn,
                                        hasStory:
                                          !!this.props.picmonic.audio.story,
                                        playOnly: this.props.playOnly,
                                      }),
                                      this.state.assetsLoading
                                        ? this._renderLoading()
                                        : this._renderPicmonic(),
                                      !!this.state.selectedFact &&
                                        (0, P.jsx)("div", {
                                          className: D,
                                          onClick: this._unselectFact,
                                        }),
                                      this.state.sideBarCollapsed &&
                                        !!this.state.selectedFact &&
                                        !this.state.mobile &&
                                        (0, P.jsx)(Ne, {
                                          fact: this.state.selectedFact,
                                          container:
                                            this.assetContainer.current,
                                          showDefinition: !this.state.playing,
                                          definitionOpen:
                                            this.state.definitionOpen,
                                          onClickDefinition:
                                            this._toggleDefinition,
                                        }),
                                      this.props.quizMode &&
                                        "question" === this.props.quizState &&
                                        !this.props.showHint &&
                                        !this.state.assetsLoading &&
                                        this._renderFactCover(),
                                    ],
                                  }),
                                  this.state.closedCaption &&
                                    this.props.enablePlay &&
                                    (0, P.jsx)("div", {
                                      className: I,
                                      children: (0, P.jsx)("div", {
                                        ref: this.closedCaption,
                                        dangerouslySetInnerHTML: {
                                          __html:
                                            this.props.picmonic.transcripts[
                                              this.state.audioMode
                                            ],
                                        },
                                        className: q,
                                      }),
                                    }),
                                ],
                              }),
                              this.props.quizMode &&
                                "answer" === this.props.quizState &&
                                !this.props.enablePlay &&
                                (0, P.jsx)(P.Fragment, {
                                  children: (0, P.jsxs)("button", {
                                    className: le,
                                    children: [
                                      (0, P.jsx)(L, {
                                        icon: "play_arrow",
                                        size: 30,
                                        color: "#000",
                                        className: ""
                                          .concat(ce, " ")
                                          .concat(e ? ge : ""),
                                      }),
                                      e &&
                                        (0, P.jsx)("div", {
                                          className: ue,
                                          children:
                                            "Play this video before answering more questions!",
                                        }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                          (0, P.jsx)(
                            ct,
                            {
                              ref: this.playerControls,
                              picmonic: this.props.picmonic,
                              inQuiz:
                                this.props.quizMode && !this.props.enablePlay,
                              selectedFact: this.state.selectedFact,
                              onCurrentFactChange: this._updateSelectedFact,
                              onEnd: this._onAudioEnd,
                              audioMode: this.state.audioMode,
                              onToggleAudio: this._toggleAudioMode,
                              playing:
                                this.state.playing && this.props.enablePlay,
                              onTogglePlaying: this._togglePlaying,
                              mobile:
                                this.state.mobile ||
                                (this.props.quizMode &&
                                  window.innerWidth < 810),
                              audioSpeed: this.props.audioSpeed,
                              onChangeAudioSpeed: this.props.onChangeAudioSpeed,
                              onAutoPlayFailure: this.props.onAutoPlayFailure,
                              preventPlaying:
                                !this.props.enablePlay ||
                                this.state.showPreLearn,
                              closedCaption: this.closedCaption,
                              toggleCaptions: this._toggleClosedCaption,
                              onPreviewEnded: this._onPreviewEnded,
                            },
                            this.props.picmonic.card_id
                          ),
                        ],
                      }),
                      this.state.mobile && t,
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(e.PureComponent),
        Qt = "ProgressBar_bar__8kjUs",
        Ut = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            return g(this, n), t.apply(this, arguments);
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("div", {
                    className: ""
                      .concat(Qt, " ")
                      .concat(this.props.className || ""),
                    children: [
                      (0, P.jsx)("div", {
                        className: this.props.fillClassName,
                        style: { width: 100 * this.props.progress + "%" },
                      }),
                      !!this.props.progress2 &&
                        (0, P.jsx)("div", {
                          className: this.props.fill2ClassName,
                          style: {
                            width: "".concat(100 * this.props.progress2, "%"),
                          },
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Ht = Ut,
        Wt = "QuizAnswers_progressBar__5A1Ba",
        Vt = "QuizAnswers_fill1__Kpq65",
        Kt = "QuizAnswers_fill2__SaWvr",
        Yt = "QuizAnswers_count__5D-WL",
        Gt = "QuizAnswers_question__y4gM5",
        Xt = "QuizAnswers_showHint__Q-ram",
        $t = "QuizAnswers_answer__tx--Z",
        Jt = "QuizAnswers_answerIncorrect__-Le56 QuizAnswers_answer__tx--Z",
        Zt = "QuizAnswers_answerCorrect__OITJ2 QuizAnswers_answer__tx--Z",
        en = "QuizAnswers_defintion__h+dXm",
        tn = "QuizAnswers_pad__nxlEt",
        nn = function (t) {
          var n = t.numCorrect,
            r = t.totalQuestions,
            a = t.questionNumber,
            i = t.question,
            s = t.answered,
            o = t.correct,
            l = (0, e.useRef)();
          return (
            (0, e.useEffect)(
              function () {
                var e;
                null === (e = l.current) || void 0 === e || e.focus();
              },
              [i]
            ),
            (0, P.jsxs)("div", {
              children: [
                (0, P.jsx)(Ht, {
                  progress: n / r,
                  progress2: (a - n - 1 + (s ? 1 : 0)) / r,
                  className: Wt,
                  fillClassName: Vt,
                  fill2ClassName: Kt,
                }),
                (0, P.jsxs)("div", {
                  className: Yt,
                  ref: l,
                  children: [
                    "Question ",
                    (0, P.jsx)("span", {
                      style: s ? { color: o ? "#18f291" : "#F21818" } : {},
                      children: a,
                    }),
                    " / ",
                    r,
                  ],
                }),
                (0, P.jsx)("div", {
                  className: Gt,
                  dangerouslySetInnerHTML: { __html: i },
                }),
              ],
            })
          );
        },
        rn = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a)))._onClick = function () {
                e.props.onSelectAnswer(e.props.fact);
              }),
              e
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("button", {
                    id: this.props.isCorrect ? "correct-answer" : null,
                    tabIndex: this.props.showResults ? "-1" : "0",
                    onClick: this._onClick,
                    className:
                      this.props.showResults &&
                      (this.props.answerSelected || this.props.isCorrect)
                        ? this.props.isCorrect
                          ? Zt
                          : Jt
                        : $t,
                    children: (0, P.jsxs)("div", {
                      children: [
                        (0, P.jsx)("strong", {
                          dangerouslySetInnerHTML: {
                            __html: this.props.fact.display_name,
                          },
                        }),
                        this.props.isCorrect &&
                          this.props.showResults &&
                          (0, P.jsxs)("div", {
                            className: en,
                            children: [
                              (0, P.jsxs)("i", {
                                children: [
                                  this.props.fact.picmonic,
                                  (0, P.jsx)("br", {}),
                                ],
                              }),
                              (0, P.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: this.props.fact.definition,
                                },
                              }),
                            ],
                          }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        an = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {}),
              (e._onKeyPress = function (t) {
                (" " !== t.key && "Enter" !== t.key) ||
                  e.props.onClickShowHint();
              }),
              e
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (0, P.jsxs)("div", {
                    className: this.props.selectedAnswer ? tn : "",
                    children: [
                      !this.props.selectedAnswer &&
                        !this.props.showHint &&
                        !!window.user.lti.allow_quiz_hints &&
                        (0, P.jsxs)("div", {
                          tabIndex: "0",
                          onClick: this.props.onClickShowHint,
                          onKeyPress: this._onKeyPress,
                          className: Xt,
                          children: [
                            (0, P.jsx)(L, {
                              icon: "lightbulb_outline",
                              color: "#00B6FF",
                              size: "16",
                            }),
                            " SHOW CHARACTER HINT",
                          ],
                        }),
                      this.props.answers.map(function (t) {
                        return (0,
                        P.jsx)(rn, { fact: t, onSelectAnswer: e.props.onSelectAnswer, isCorrect: e.props.answer.fact_id === t.fact_id, answerSelected: !!e.props.selectedAnswer && e.props.selectedAnswer.fact_id === t.fact_id, showResults: !!e.props.selectedAnswer }, t.fact_id);
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        sn = an,
        on = "AnswerKey_container__czOL6",
        ln = "AnswerKey_title__2Ctiu",
        cn = "AnswerKey_newTitle__VW-74 AnswerKey_title__2Ctiu",
        un = "AnswerKey_answer__wPK6G",
        dn = "AnswerKey_ql__ocTrt",
        pn = "AnswerKey_qv__Cib-d",
        fn = "AnswerKey_qp__QsgBt",
        mn = "AnswerKey_el__aKpFw",
        hn = "AnswerKey_ev__O-Goj",
        gn = "AnswerKey_summary__qpaMT",
        _n = "AnswerKey_summaryItem__YY8uq",
        yn = "AnswerKey_rv__qhCaz",
        vn = "AnswerKey_rl__lylQr",
        bn = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            return g(this, n), t.apply(this, arguments);
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.question;
                  return (0, P.jsxs)("div", {
                    className: un,
                    children: [
                      (0, P.jsx)("div", {
                        className: dn,
                        children: (0, P.jsxs)("strong", {
                          children: ["Question ", this.props.index],
                        }),
                      }),
                      (0, P.jsx)("div", {
                        className: pn,
                        dangerouslySetInnerHTML: { __html: e.question },
                      }),
                      (0, P.jsx)("a", {
                        className: fn,
                        href: "/learn/"
                          .concat(e.picmonic.slug, "?api_key=")
                          .concat(window.user.mobile_api_key),
                        target: "_blank",
                        children: (0, P.jsx)("img", {
                          width: "82",
                          src: "/cloud_data/images_panel_thumb/".concat(
                            e.picmonic.main_image
                          ),
                          alt: e.picmonic.name,
                        }),
                      }),
                      !!e.selectedAnswer &&
                        (0, P.jsxs)(P.Fragment, {
                          children: [
                            (0, P.jsx)("div", {
                              className: vn,
                              children: "Your Response:",
                            }),
                            (0, P.jsx)("div", {
                              className: yn,
                              style: {
                                color: e.correct ? "#67C25E" : "#F21818",
                              },
                              dangerouslySetInnerHTML: {
                                __html: e.selectedAnswer.display_name,
                              },
                            }),
                            !e.correct &&
                              (0, P.jsxs)(P.Fragment, {
                                children: [
                                  (0, P.jsx)("div", {
                                    className: vn,
                                    children: "Correct Response:",
                                  }),
                                  (0, P.jsx)("div", {
                                    className: yn,
                                    style: { color: "#67C25E" },
                                    dangerouslySetInnerHTML: {
                                      __html: e.answer.display_name,
                                    },
                                  }),
                                ],
                              }),
                          ],
                        }),
                      !e.selectedAnswer &&
                        (0, P.jsxs)(P.Fragment, {
                          children: [
                            (0, P.jsx)("div", {
                              className: vn,
                              children: "Correct Response:",
                            }),
                            (0, P.jsx)("div", {
                              className: yn,
                              style: {
                                color: e.correct ? "#67C25E" : "#F21818",
                              },
                              dangerouslySetInnerHTML: {
                                __html: e.selectedAnswer.display_name,
                              },
                            }),
                          ],
                        }),
                      !!e.answer.definition &&
                        (0, P.jsxs)(P.Fragment, {
                          children: [
                            (0, P.jsx)("div", {
                              className: mn,
                              children: "Explanation",
                            }),
                            (0, P.jsx)("div", {
                              className: hn,
                              dangerouslySetInnerHTML: {
                                __html: e.answer.definition,
                              },
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        wn = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                show: !e.props.hideInfoBar,
              }),
              (e._toggleShow = function () {
                return e.setState(function (e) {
                  return { show: !e.show };
                });
              }),
              (e._getTime = function () {
                var t = e.props.questions.reduce(function (e, t) {
                  return e + (t.endTime - t.startTime);
                }, 0);
                return (
                  (t > 59 ? Math.floor(t / 60) + " minutes " : "") +
                  (t % 60) +
                  " seconds"
                );
              }),
              (e._renderAnswers = function () {
                return e.props.questions.map(function (e, t) {
                  return (0, P.jsx)(bn, { question: e, index: t + 1 }, t);
                });
              }),
              (e._onKeyPress = function (t) {
                (" " !== t.key && "Enter" !== t.key) || e._toggleShow();
              }),
              e
            );
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("div", {
                    className: on,
                    children: [
                      (0, P.jsxs)("div", {
                        tabIndex: "0",
                        className: this.props.hideInfoBar ? cn : ln,
                        onClick: this._toggleShow,
                        onKeyPress: this._onKeyPress,
                        children: [
                          (0, P.jsx)("div", { children: "ANSWER KEY" }),
                          (0, P.jsx)(L, {
                            icon: this.state.show
                              ? "keyboard_arrow_up"
                              : "keyboard_arrow_down",
                            color: this.props.hideInfoBar ? "#fff" : "#272B33",
                          }),
                        ],
                      }),
                      this.state.show &&
                        (0, P.jsxs)(P.Fragment, {
                          children: [
                            !this.props.hideInfoBar &&
                              (0, P.jsxs)("div", {
                                className: gn,
                                children: [
                                  (0, P.jsxs)("span", {
                                    className: _n,
                                    children: [
                                      (0, P.jsx)(L, {
                                        icon: "check_circle_outline",
                                        color: "#fff",
                                      }),
                                      " Score: ",
                                      Math.round(
                                        (this.props.numCorrect /
                                          this.props.totalQuestions) *
                                          100
                                      ),
                                      "% (",
                                      this.props.numCorrect,
                                      "/",
                                      this.props.totalQuestions,
                                      ")",
                                    ],
                                  }),
                                  (0, P.jsxs)("span", {
                                    className: _n,
                                    children: [
                                      (0, P.jsx)(L, {
                                        icon: "lightbulb_outline",
                                        color: "#fff",
                                      }),
                                      " Hints Used: ",
                                      this.props.hintsUsed,
                                    ],
                                  }),
                                  (0, P.jsxs)("span", {
                                    className: _n,
                                    children: [
                                      (0, P.jsx)(L, {
                                        icon: "timer",
                                        color: "#fff",
                                      }),
                                      " Time:\xa0",
                                      this._getTime(),
                                    ],
                                  }),
                                ],
                              }),
                            (0, P.jsx)("div", {
                              children: this._renderAnswers(),
                            }),
                          ],
                        }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        xn = wn;
      function kn(e) {
        throw new TypeError('"' + e + '" is read-only');
      }
      var Sn;
      function Cn() {
        var e = this;
        (this.tweens = []),
          (this.tweens.default = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
          ]),
          (this.tweens.blast = [12, 12, 11, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),
          (this.tweens.fade = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]),
          (this.queue = []),
          (this.queue.IDs = []),
          (this.active = !1),
          (this.timer = null),
          (this.createTween = function (t, n, r) {
            r = r || "default";
            for (
              var a = [t], i = t, s = n - t, o = e.tweens[r].length, l = 0;
              l < o;
              l++
            )
              (i += s * e.tweens[r][l] * 0.01),
                (a[l] = {}),
                (a[l].data = i),
                (a[l].event = null);
            return a;
          }),
          (this.enqueue = function (t, n, r) {
            var a;
            "undefined" == typeof e.queue.IDs[t.oID]
              ? ((a = e.queue.length),
                (e.queue.IDs[t.oID] = a),
                (e.queue[a] = t))
              : ((a = e.queue.IDs[t.oID]),
                (e.queue[a].active = !0),
                (e.queue[a].frame = 0)),
              (t.active = !0),
              (e.queue[a]._method = n),
              (e.queue[a]._oncomplete = r || null);
          }),
          (this.animate = function () {
            for (var t = 0, n = e.queue.length; n--; )
              e.queue[n].active && (e.queue[n]._method(), t++);
            0 === t && e.timer && e.stop();
          }),
          (this.start = function () {
            if (e.timer || e.active) return !1;
            (e.active = !0),
              (e.timer = setInterval(e.animate, Sn.intervalRate));
          }),
          (this.stop = function () {
            clearInterval(e.timer),
              (e.timer = null),
              (e.active = !1),
              (e.queue = []),
              (e.queue.IDs = []);
          });
      }
      function jn(e, t, n, r, a, i, s, o, l, c, u) {
        var d = this;
        this.oID = "fp" + Sn.gOID++;
        for (var p = 0; p < arguments.length - 1; p++) arguments[p] + ",";
        (this.oC = e),
          (this.o = Sn.oFW.cloneNode(!Sn.isIE)),
          (this.particles = []),
          (this.vX = -1),
          (this.vY = -4),
          (this.x = t),
          (this.y = n),
          (this.allowRandom = c),
          (this.obeyBoundaries = u),
          (this.frame = 0),
          (this.tween = []),
          (this.active = !1),
          (this.moveTo = function (e, t) {
            (d.o.style.left = e + "px"),
              (d.o.style.top = t + "px"),
              (d.x = e),
              (d.y = t);
          }),
          (this.slideTo = function (e, t) {
            (d.tween = [
              Sn.animator.createTween(d.x, e, "blast"),
              Sn.animator.createTween(d.y, t, "blast"),
            ]),
              Sn.animator.enqueue(d, d.animate, d.aniExplode);
          }),
          (this.aniExplode = function () {
            (d.o.style.background = "none"), (d.o.style.border = "none");
            for (var e = d.particles.length; --e; )
              (d.particles[e].o.style.display = "block"),
                Sn.animator.enqueue(d.particles[e], d.particles[e].animate);
            (d.particles[e].o.style.display = "block"),
              Sn.animator.enqueue(
                d.particles[e],
                d.particles[e].animate,
                d.beginFade
              );
            var t = "boom" + parseInt(8 * Math.random(), 10);
            Sn.playSound(t);
          }),
          (this.beginFade = function () {
            (d.tween = Sn.animator.createTween(1, 0, "fade")),
              Sn.animator.enqueue(d, d.aniFade, d.destructor);
          }),
          (this.aniFade = function () {
            for (var e = d.particles.length; e--; )
              d.particles[e].moveRel(),
                d.particles[e].nextState(),
                d.particles[e].setOpacity(Sn.tweenFade[d.frame]);
            return (
              !(d.frame++ >= d.tween.length) ||
              ((d.active = !1),
              (d.frame = 0),
              d._oncomplete && d._oncomplete(),
              (d._oncomplete = null),
              !1)
            );
          }),
          (this.destructor = function () {
            for (var e = d.particles.length; e--; )
              d.particles[e].destructor(), (d.particles[e] = null);
            (d.particles = null),
              d.oC.removeChild(d.o),
              (d.o = null),
              (d.oC = null);
          }),
          (this.animate = function () {
            return (
              d.moveTo(
                d.tween[0][d.frame].data,
                d.tween[1][d.frame].data,
                "burst"
              ),
              !(d.frame++ >= d.tween[0].length - 1) ||
                ((d.active = !1),
                (d.frame = 0),
                d._oncomplete && d._oncomplete(),
                (d._oncomplete = null),
                !1)
            );
          }),
          (this.createBurst = function (e, t, n, i) {
            var s = 0,
              o = 0,
              l = 0,
              c = n / e,
              u = c,
              p = 0,
              f = 0,
              m = d.allowRandom ? 0.33 + Math.random() : 1,
              h = [],
              g =
                (Math.random(),
                [
                  i,
                  e > 1 ? parseInt(Math.random() * Sn.particleTypes, 10) : i,
                ]),
              _ = null;
            for (s = 0; s < e; s++) {
              for (
                h[s] = parseInt((((t * (s + 1)) / e) * 1) / e, 10) || 1,
                  p = f,
                  f = 360 / h[s],
                  _ = g[s % 2],
                  o = 0;
                o < h[s];
                o++
              )
                (d.particles[l] = new An(
                  d.o,
                  d.allowRandom,
                  _,
                  r,
                  a,
                  d.obeyBoundaries
                )),
                  d.particles[l].slideTo(
                    u * Math.cos((p * Math.PI) / 180),
                    u * m * Math.sin((p * Math.PI) / 180)
                  ),
                  (p += f),
                  l++;
              u += c;
            }
          }),
          d.oC.appendChild(d.o),
          d.moveTo(d.x, d.y),
          d.createBurst(l, o, s, i),
          d.slideTo(r, a);
        var f = "fire" + parseInt(2 * Math.random(), 10);
        Sn.animator.start(), Sn.playSound(f);
      }
      function An(e, t, n, r, a, i) {
        var s = this;
        (this.oC = e),
          (this.oID = "fp" + Sn.gOID++),
          (this.o = Sn.oFP.cloneNode(!0)),
          (this.obeyBoundaries = i),
          (this.type = null),
          (this.oImg = this.o.getElementsByTagName("img")[0]),
          (this.oImg._src = this.oImg.src),
          (this.o.style.display = "none"),
          (this.baseX = r),
          (this.baseY = a),
          (this.x = 0),
          (this.y = 0),
          (this.vx = 0),
          (this.vy = 0),
          (this.frame = 0),
          (this.tween = []),
          (this.active = null),
          (this.tweenType = "blast"),
          (this.states = []),
          (this.state = parseInt(3 * Math.random(), 10)),
          (this.isRandom = t),
          (this._mt = 5),
          (this.moveTo = function (e, t) {
            (s.o.style.left = e + "px"),
              (s.o.style.top = t + "px"),
              (s.vx = e - s.x),
              (s.vy = t - s.y),
              (s.x = e),
              (s.y = t);
          }),
          (this.moveRel = function () {
            var e = s.x + s.vx,
              t = s.y + s.vy;
            if (s.obeyBoundaries) {
              var n = Sn.canvasX - s.baseX - Sn.particleXY,
                r = Sn.canvasY - s.baseY - Sn.particleXY,
                a = Sn.scrollY;
              s.vx >= 0
                ? e >= n && (s.vx *= -1)
                : s.vx < 0 && e + s.baseX <= 0 && (s.vx *= -1),
                s.vy >= 0
                  ? t >= r && (s.vy *= -1)
                  : s.vy < 0 && t + s.baseY - a <= 0 && (s.vy *= -1);
            }
            s.moveTo(s.x + s.vx, s.y + s.vy);
          }),
          (this.setOpacity = function (e) {
            s.oImg.style.marginLeft = (e * Sn.particleXY) / 10 - 100 + "px";
          }),
          (this.nextState = function () {
            var e = s.o.style.visibility;
            2 == s.state && "hidden" != e
              ? (s.o.style.visibility = "hidden")
              : 2 != s.state &&
                "hidden" == e &&
                (s.o.style.visibility = "visible"),
              (s.state = parseInt(3 * Math.random(), 10));
          }),
          (this.slideTo = function (e, t) {
            s.isRandom &&
              ((e += 0.2 * e * (Math.random() > 0.5 ? 1 : -1)),
              (t += 0.2 * t * (Math.random() > 0.5 ? 1 : -1))),
              (s.tween = [
                Sn.animator.createTween(s.x, e, s.tweenType),
                Sn.animator.createTween(s.y, t, s.tweenType),
              ]);
            var n = Sn.canvasX - Sn.particleXY,
              r = Sn.canvasY - Sn.particleXY,
              a = (Sn.particleXY, s.baseX, Sn.scrollY),
              i = null,
              o = null;
            if (s.obeyBoundaries)
              for (var l = s.tween[0].length; l--; )
                (i = s.tween[0][l].data + s.baseX),
                  (o = s.tween[1][l].data + s.baseY),
                  i >= n
                    ? (s.tween[0][l].data -= 2 * (i - n))
                    : i < 0 && (s.tween[0][l].data -= 2 * i),
                  o >= r
                    ? (s.tween[1][l].data -= 2 * (o - r))
                    : o - a <= 0 && (s.tween[1][l].data -= 2 * (o - a));
          }),
          (this.animate = function () {
            var e = s.tween[0][s.frame].data,
              t = s.tween[1][s.frame].data;
            return (
              s.moveTo(e, t),
              s.frame++ >= s.tween[0].length - 1
                ? (s._oncomplete && s._oncomplete(),
                  (s._oncomplete = null),
                  (s.active = !1),
                  (s.frame = 0),
                  !1)
                : (s.frame > 10 && s.nextState(), !0)
            );
          }),
          (this.destructor = function () {
            (s.oImg = null), s.oC.removeChild(s.o), (s.oC = null), (s.o = null);
          }),
          (this.setType = function (e) {
            (s.type = e), (s.oImg.style.marginTop = -Sn.particleXY * e + "px");
          }),
          s.setType(n),
          s.oC.appendChild(s.o);
      }
      function Pn(e, t) {
        return new Promise(function (n) {
          setTimeout(function () {
            !(function (e, t, n, r, a, i, s, o, l, c) {
              for (var u in arguments) arguments.hasOwnProperty(u);
              (a = Sn.isEmpty(a)
                ? parseInt(Math.random() * Sn.canvasX, 10)
                : parseInt((Sn.canvasX * a) / 100, 10)),
                (i = Sn.isEmpty(i)
                  ? Sn.canvasY - Sn.particleXY
                  : Sn.canvasY -
                    Sn.screenY +
                    parseInt((Sn.screenY * i) / 100, 10)),
                (s = Sn.isEmpty(s)
                  ? parseInt(
                      0.1 * Sn.canvasX + Math.random() * Sn.canvasX * 0.8,
                      10
                    )
                  : parseInt((Sn.canvasX * s) / 100, 10)),
                (o = Sn.isEmpty(o)
                  ? Sn.canvasY - parseInt(Math.random() * Sn.screenY, 10)
                  : Sn.canvasY - parseInt((Sn.screenY * (100 - o)) / 100, 10)),
                Sn.isEmpty(r) &&
                  (r = parseInt(Math.random() * Sn.particleTypes, 10)),
                (e = Sn.isEmpty(e)
                  ? 64 + parseInt(Math.random() * Sn.screenY * 0.75, 10)
                  : e.toString().indexOf("%") >= 0
                  ? parseInt((parseInt(e, 10) / 100) * Sn.screenY, 10)
                  : e.toString().indexOf(".") >= 0
                  ? parseInt(e * Sn.screenY, 10)
                  : parseInt((e * Sn.screenY) / 100, 10)),
                Sn.isEmpty(t) && (t = 4 + parseInt(64 * Math.random(), 10)),
                Sn.isEmpty(n) && (n = Math.random() > 0.5 ? 2 : 1),
                Sn.isEmpty(l) && (l = Math.random() > 0.5),
                Sn.isEmpty(c) && (c = Math.random() > 0.5),
                Sn.getWindowCoords(),
                (Sn.fireworks[Sn.fireworks.length] = new jn(
                  document.getElementById("fireContainer"),
                  a,
                  i,
                  s,
                  o,
                  r,
                  e,
                  t,
                  n,
                  l,
                  c
                ));
            })(
              e,
              60,
              3,
              3,
              20,
              58,
              Math.floor(90 * Math.random()) + 5,
              Math.floor(5 * Math.random()) + 20,
              !1,
              !1
            ),
              n();
          }, t);
        });
      }
      function Nn(e) {
        return e >= 100
          ? Math.floor(125 * Math.random())
          : Math.floor(500 * Math.random()) + 250;
      }
      function Mn() {
        return (Mn = h(
          f().mark(function e(t) {
            var n, r, a;
            return f().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    Sn.init(),
                      (n = Math.min(5 * Math.floor(t / 5), 20)),
                      (r = Math.min(Math.floor(t / 5), 16) + 2),
                      t >= 100 && (kn("blastRadius"), kn("total")),
                      (a = 0);
                  case 5:
                    if (!(a < r)) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 8), Pn(n, Nn());
                  case 8:
                    a++, (e.next = 5);
                    break;
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function En() {
        return (0, P.jsxs)("div", {
          children: [
            (0, P.jsxs)("div", {
              id: "fireworks-template",
              children: [
                (0, P.jsx)("div", { id: "fw", className: "firework" }),
                (0, P.jsx)("div", {
                  id: "fp",
                  className: "fireworkParticle",
                  children: (0, P.jsx)("img", {
                    src: "data:image/gif;base64,R0lGODlhZABGAPe0AADM////AP4BAfgA/fcA/vkA/N3d3RMC/tvb2/4CAhn9CP0CAhED/unp6dzc3Nra2ufn5+Xl5RAD/Whd/nnk/0k+/tTU1P+amvtq/v//anz+bf8BAf5dXR3+BoR6/v4+Por+e2/+YP5OTmD+UvuJ//t5/mrh/5rr/9nZ2ePj43Zr/lD+QtfX1xID/lpP/iH+BP56ehv+BxAE/SL/A/pN/onn////XNbW1h/+BOvr6xz+Bvtc/tLS0pOJ//ua////mk3b//o8/f5ra///PJn/iqn/mv+JiTzY////Tebm5h7+Bf//iRr+BxUB/hQC/tDQ0Fze/6Sa/+Tk5BYB////ef8+Pu7u7v//PvX19Tf+JD00/aWe/x7S//hE////Hv//LPt0/v//OCbU//4nJ+rq6tHM/7Tw//45OfyI/lZE//+0tDHW////S0Ta////dP+IiHH+Zb7/tezs7P5MTPyd/zwu/v20//5iYkX+MPky/kvb/0T9OF//Rfkm/Z3r////YUv+NdP/zPox/f//zCzV/5GJ/3Tj/4P+eP//Jlj/QPk4/i4h/mHf/4jn/1ZO/mxj/pb/ivks/X52/jjX//th/UI0/jLW//ke/f//MlL+Ov//Mf3M//0zM13+Uf4zMz7Y/08///9ERP//RP//tEg5/jYo/vg+//51df4tLT/+K///nfHx8ftL/an/n///iP/MzP+dnbq0/8z1//4gIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAALQALAAAAABkAEYAAAj/AGkJHEiwoMGDCBMqXMiwocOHECNKnNjwwZMnDwwi4MEDgUEHFiw4MGjgxg0DB1mwQIgCBcWXBR88yJFDJkEECBo0wEnQAQIIEBCMHGjAQZIkDlASNBAhgtKlUqQ8JZoixVSYCZ/kwIIlxxOCPBqsWtWAB0ELEKxYgWCB4I0kcuQkuUGQRQQyZCKsHIhCik4pLgmmAJriYFOsA7Vy9QpWLFmzA9GqZesWrly6A+3i1Uuw79/AAwdDKGzwMGJaMmnaHIhTJ8+BPoEKXWoU6VWmTklGvUrLQFXep2NezFhwY8ePIYcuNQlcJUvQwaNLn069uvXr2LNr385deoINGxIY/0wgQID4ggvKLzCYXsB6g+URxu8+PtSFC6HOC0xQxYiRKvrRssAZMMBwxnsCLeCJEEJ4gqBAqHDAASoGjSGCCGMYNMsHH8yS3QYXvPLKBRsQJIARaqhhhAAmwgALLDCwOJAAQrzxhhAyCiQAB6ecwkGOtAggwh13iAAkLR/MMccHB3HCSXAgikiiiSiqCKQALsJ4ZY03Xsmjj1cOWeSRSS7Z5JOnJWAffgHy5x+ABA1Y4IFxLtjgg7REOGGFF2ZY0IYdavddeOOVF2CC6rGXKHxHztgofZBGKumklFZq6aWUBqBpAAZtymlBnna66UGaIlRqpqL88IMonwoUwBVLLP9xRau0BBAGFVSEQWsAmGSQASa00vKFDTZ8YRAiSCCBiEFeDDGEF9kF8MMgg/yw6xKjjLLErlSoogoVu2bgiisZ7GqDG27YsCsSf/yBRLBDsMHGEAdpoklw0lJrLUEBYKstt96Cy6+45JqLrrr8susuvPLSa5C9+Ka66q6wyrrrrbnu2uuvwQ5b7LHJLltQs89qFyqoo6J8Kr8po2xqsJjGLPPMNNds880wxTDDDDEYxMQLLzBhkAI44KDA0EoocbRBHXSAkA46VBoDH0UUwUfPAzGRCBFEJCL0QApkAgIImSwtkAKAaKABIGYLhEcIIeBhUCojjJCKQVmssEIW2c3/UEQggRQxA0EvEBFHHES8QBAOILTSCgg4EKSEBpBAooESBHUQwiGHhOD0QDqMAAccI0RN0AqddLLCQXvsEZzfgAtOuOGIKz4Q445DLjnllmM+kOace05Q6KOXXhDqqrPu+mlTV301QVpz7TVBYY9dNvVpr902LW/HPXfddxeU997a6cyzz0B/TX3R29OiQNLt09L006bjbP/9+Oev//6nMTDFFAwwCAOa0IQAFkQCTnCCBAwigwMcQAYHcSBCWtCCSjEgDVGIQhoMKBAGgKIHPQAFB2khAVJ4wAOkWOBAZFAJFaigEhAkSB0mMIE6GKQULnBBKQyyiApUYBHZmUIU/8pQhihMgSBN6EEsYtGDJhDECR7YwhY84ASCHEAFhSiECg5gxQlIQhIT4OJAWuCCRzzCBRUkSAUc4YgKHEQLWgiOEIloRCQqkYlOHAgUpUhFK2JRi2IUyAG8CMZA0oKMZkRjQdbYxjfGsX8Y1OAIPQhCERKkhCdMIUFY6EIYFmSGNbxhDndYkB7+UDv+A6AACThCgSBQgQx0YAwLIsGDUJB/uMylLnfJy0sB4JcAMAgwg1mQYQoTmAf5JUKUSSkAtOEEJ2gDMQUCgE/UoAafmCYtADAJClBgEtoEgCVMYAJLaJMWhIACFAhhEDEAAQhiMAgXjnAELmQHACeQhSxOEP/OGpjBDDUIJwX84AcKhNMEjWiECcIJBUMYAgrhBAIjGAGEcx5BD3o4wkHWsIbg4FOf/CQIAPwJUIES1KAiRahCGepQiIpUohS1KEY1ahCOevSZ0QynNbEZzm5+M5zjLOc507nOdr4zngWZZz21Y8xiItOpzBTpU526zHP28qpYzapWt3qQARCAAAMwSAG+WgCxklWsAxhAWQ2SVoS0lVID6IIPfNCFsA6kAKYgAQlMsVaBFEARJSiBIvpKiwLkAQMYyANhaRGJHewgEgbpAw1o0AeDXCIIQbhEdgjgg01swgcEIAgBSGAHO5AgtAMhQAnoQIcSoFYgA8AAGtCAAbuCwnYHYADDDmxLiwHQgBKUoAFvaREEVrAiCAcRhCCCw1nPgla0pDXta2mhWta6liCxnW1tsYtb3fLWt8AVbkGKe9zkLvc0cZ1rXQmCV73ylb2AFSxhDYtYxRaksY+N7GQrW5DLZlY7XgWrWQmw2MKetSAFSGuBezvcgbyVqxCO8EICAgA7",
                    alt: "",
                  }),
                }),
              ],
            }),
            (0, P.jsx)("div", { id: "fireContainer" }),
          ],
        });
      }
      (Sn = new (function () {
        var e = this;
        (this.intervalRate = 20),
          (this.DEBUG = !0),
          (this.oFW = null),
          (this.isIE = !!navigator.userAgent.match(/msie/i)),
          (this.isOpera = !!navigator.userAgent.match(/opera/i)),
          this.isOpera && (this.isIE = !1),
          (this.fireworks = []),
          (this.animator = null),
          (this.gOID = 0),
          (this.particleTypes = 6),
          (this.particleXY = 10),
          (this.tweenFade = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]),
          (this.isSafari = !!navigator.appVersion.match(/webkit/i)),
          (this.canvasX = null),
          (this.canvasY = null),
          (this.screenY = null),
          (e.scrollY = null),
          (this.soundsLoaded = 0),
          (this.soundsTotal = 10),
          (this.sounds = {}),
          (e.playSound = function (e) {}),
          (e.getWindowCoords = function () {
            (e.canvasX =
              document.documentElement.clientWidth ||
              document.body.clientWidth ||
              document.body.scrollWidth),
              (e.canvasY =
                document.documentElement.clientHeight ||
                document.body.clientHeight ||
                document.body.scrollHeight),
              (e.screenY = e.canvasY),
              (e.scrollY = parseInt(
                window.scrollY ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop,
                10
              )),
              (e.canvasY += e.scrollY);
          }),
          (this.getWindowCoordsAlt = function () {
            (e.canvasX = window.innerWidth - 16),
              (e.canvasY = window.innerHeight),
              (e.screenY = e.canvasY),
              (e.scrollY = parseInt(
                window.scrollY ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop,
                10
              )),
              (e.canvasY += e.scrollY);
          }),
          (this.getPanX = function (t) {
            var n = (t = parseInt(t, 10)) / e.canvasX;
            return (
              n < 0.4 ? (n *= -1) : n >= 0.4 && n <= 0.6 && (n = 0.5),
              (n = parseInt(100 * n, 10))
            );
          }),
          (this.isEmpty = function (e) {
            return (
              "undefined" == typeof e ||
              (null === e && 0 !== e) ||
              ("" === e && 0 !== e) ||
              "null" == e
            );
          }),
          (this.init = function () {
            (e.oFW = document.getElementById("fw")),
              (e.oFP = document.getElementById("fp")),
              e.getWindowCoords(),
              (e.animator = new Cn());
          }),
          (this.destructor = function () {
            for (var t = e.fireworks.length; t--; ) e.fireworks[t] = null;
            e.fireworks = null;
          }),
          (this.isSafari || this.isOpera) &&
            (this.getWindowCoords = this.getWindowCoordsAlt);
      })()),
        "undefined" == typeof writeDebug &&
          (window.writeDebug = function () {
            return !1;
          });
      var Tn = function (e) {
        return Mn.apply(this, arguments);
      };
      function zn(e, t, n, r, a, i) {
        var s = window.location.href,
          o = window.document.referrer;
        fetch(
          "/api/v2/analytics",
          p(
            p({}, xt),
            {},
            {
              method: "POST",
              body: JSON.stringify({
                action: e,
                source: "script",
                url: s,
                referrer: o,
                description: t,
                flow: n,
                step: r,
                timelimit: a,
                onlynewvisitors: i,
              }),
            }
          )
        ),
          console.info(
            "Action: " +
              e +
              " | URL: " +
              window.location.href +
              " | Description: " +
              t
          );
      }
      var Ln = zn,
        Fn = "MarketingMessage_wrapper__tD3Tz",
        On = "MarketingMessage_header__IwFBI",
        Rn = "MarketingMessage_title__CVMWK",
        Bn = "MarketingMessage_body__TsjiN",
        In = "MarketingMessage_small__w11gL",
        qn = "MarketingMessage_white__fIpZX",
        Dn = "MarketingMessage_iconWrapper__gOfVE",
        Qn = "MarketingMessage_pathIcon__GFZl8",
        Un = "MarketingMessage_recommendedWrapper__gpTj+",
        Hn = "MarketingMessage_recommendedContainer__YSjRG",
        Wn = "MarketingMessage_nextPrev__F4oyv",
        Vn = "MarketingMessage_surveyWrapper__mgfz8",
        Kn = "MarketingMessage_feedbackBtn__TrPYn",
        Yn = "MarketingMessage_cardWrapper__EUtVI",
        Gn = "MarketingMessage_playIcon__WKjAh",
        Xn = "MarketingMessage_cardTitle__kN+25",
        $n = "MarketingMessage_cardFacts__GuuuW",
        Jn = "MarketingMessage_audioTime__qQ1+q",
        Zn = "MarketingMessage_cardImg__yl9X2",
        er = "MarketingMessage_learnBtn__2qorN",
        tr = "MarketingMessage_blackFriday__OoqMZ",
        nr = n.p + "static/media/nclexworkbook-heart.fee58ab02ecc193b04d0.png";
      var rr =
          n.p +
          "static/media/blackfriday_2021.e3d41033d45de405a74fdceda9476040.svg",
        ar = {
          wk: "Nursing",
          101: "Nursing",
          202: "Nursing",
          203: "NP",
          105: "PA",
          100: "Medicine",
        },
        ir = { wk: "900", 101: "1,200", 202: "1,200" },
        sr = { wk: "10,000", 101: "13,00", 202: "13,00" },
        or = {
          100: [
            {
              name: "Anatomy & Embryology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Anatomy_small.png",
            },
            {
              name: "Behavioral & Psychiatry",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/psychiatric_small.png",
            },
            {
              name: "Biochemistry",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Biochemistry_small.png",
            },
            {
              name: "Dermatology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/integumentary.png",
            },
            {
              name: "Epidemiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/epidemiology.png",
            },
            {
              name: "Immunology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/immune-oncology.png",
            },
            {
              name: "Internal Medicine",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/internal-medicine.png",
            },
            {
              name: "Microbiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Microbiology_small.png",
            },
            {
              name: "Obstetrics & Gynecology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/obstetrics_small.png",
            },
            {
              name: "Pathology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pathology.png",
            },
            {
              name: "Pediatrics",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pediatrics_small.png",
            },
            {
              name: "Pharmacology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/PharmacologyMed_small.png",
            },
            {
              name: "Physiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/physiology.png",
            },
            {
              name: "Surgery",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/medsurg_small2.png",
            },
          ],
          101: [
            {
              name: "Anatomy",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Anatomy_small.png",
            },
            {
              name: "Critical Care Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/critical_care_v2-c.png",
            },
            {
              name: "Exam Prep",
              icon: "https://www.picmonic.com/pages/icons_exam-prep/",
            },
            {
              name: "Fundamentals of Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Fundamentals_small1.2.png",
            },
            {
              name: "Medical Surgical Nursing & Pathophysiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/medsurg_small2.png",
            },
            {
              name: "Microbiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Microbiology_small.png",
            },
            {
              name: "Nursing Math: Dosage and Calculations",
              icon: "https://cdn.picmonic.com/pages/wp-content/uploads/dosage_calculations-150x150-1.png",
            },
            {
              name: "Obstetrics",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/obstetrics_small.png",
            },
            {
              name: "Pediatric Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pediatrics_small.png",
            },
            {
              name: "Pharmacological Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pharmacology_small.png",
            },
            {
              name: "Physiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/physiology.png",
            },
            {
              name: "Professional Standards of Nursing",
              icon: "https://cdn.picmonic.com/pages/wp-content/uploads/2020/02/professional-standards-of-nursing.png",
            },
            {
              name: "Psychiatric Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/psychiatric_small.png",
            },
          ],
          202: [
            {
              name: "Anatomy",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Anatomy_small.png",
            },
            {
              name: "Fundamentals of Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Fundamentals_small1.2.png",
            },
            {
              name: "Medical Surgical Nursing & Pathophysiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/medsurg_small2.png",
            },
            {
              name: "Microbiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Microbiology_small.png",
            },
            {
              name: "Obstetrics",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/obstetrics_small.png",
            },
            {
              name: "Pediatric Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pediatrics_small.png",
            },
            {
              name: "Pharmacological Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pharmacology_small.png",
            },
            {
              name: "Physiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/physiology.png",
            },
            {
              name: "Professional Standards of Nursing",
              icon: "https://cdn.picmonic.com/pages/wp-content/uploads/2020/02/professional-standards-of-nursing.png",
            },
            {
              name: "Psychiatric Nursing",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/psychiatric_small.png",
            },
          ],
          203: [
            {
              name: "Anatomy",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Anatomy_small.png",
            },
            {
              name: "Behavioral & Psychiatry",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/psychiatric_small.png",
            },
            {
              name: "Biochemistry",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Biochemistry_small.png",
            },
            {
              name: "Epidemiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/epidemiology.png",
            },
            {
              name: "Fundamentals and Health Assessment",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Fundamentals_small1.2.png",
            },
            {
              name: "Microbiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Microbiology_small.png",
            },
            {
              name: "Obstetrics",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/obstetrics_small.png",
            },
            {
              name: "Pathology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/medsurg_small2.png",
            },
            {
              name: "Pediatrics",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pediatrics_small.png",
            },
            {
              name: "Pharmacology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pharmacology_small.png",
            },
            {
              name: "Physiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/physiology.png",
            },
          ],
          105: [
            {
              name: "Anatomy",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Anatomy_small.png",
            },
            {
              name: "Behavioral & Psychology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/psychiatric_small.png",
            },
            {
              name: "Biochemistry",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Biochemistry_small.png",
            },
            {
              name: "Epidemiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/epidemiology.png",
            },
            {
              name: "Infectious Disease",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/infectious-disease.png",
            },
            {
              name: "Microbiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/Microbiology_small.png",
            },
            {
              name: "Obstetrics & Gynecology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/obstetrics_small.png",
            },
            {
              name: "Pathology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pathology.png",
            },
            {
              name: "Pediatrics",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/pediatrics_small.png",
            },
            {
              name: "Pharmacology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/PharmacologyMed_small.png",
            },
            {
              name: "Physiology",
              icon: "https://d1abqebhfcygq8.cloudfront.net/cloud_data/production/assets/img/pathways/physiology.png",
            },
          ],
        };
      or.wk = or[101];
      var lr = function (e) {
          var t = e.card,
            n = e.apiKey,
            r = Math.round(t.audio_length / 60);
          return (0, P.jsxs)("a", {
            className: Yn,
            href: "/learn/"
              .concat(t.slug, "?api_key=")
              .concat(n, "&lti_session_id=")
              .concat(window.lti_session_id),
            onClick: function () {
              return zn("click", "lti-quiz-market-message recommended");
            },
            target: "_blank",
            children: [
              (0, P.jsx)("img", {
                className: Zn,
                src: "//cdn.picmonic.com/cloud_data/images_panel_thumb/".concat(
                  t.background
                ),
                alt: t.display_name,
              }),
              (0, P.jsx)(L, { icon: "play_arrow", className: Gn }),
              (0, P.jsx)("div", {
                className: Xn,
                dangerouslySetInnerHTML: { __html: t.display_name },
              }),
              (0, P.jsxs)("div", {
                className: $n,
                children: [t.num_facts, " Facts"],
              }),
              (0, P.jsx)("div", { className: er, children: "LEARN" }),
              (0, P.jsxs)("div", {
                className: Jn,
                children: [
                  (0, P.jsx)(L, { icon: "schedule", style: { fontSize: 10 } }),
                  r > 0
                    ? ""
                        .concat(Math.round(t.audio_length / 60), " min")
                        .concat("")
                    : "".concat(t.audio_length, " secs"),
                ],
              }),
            ],
          });
        },
        cr = (function (t) {
          b(r, t);
          var n = k(r);
          function r() {
            var t;
            g(this, r);
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
              i[s] = arguments[s];
            return (
              ((t = n.call.apply(n, [this].concat(i))).state = {
                index: 0,
                recommended: [],
              }),
              (t.ref = e.createRef()),
              (t.numAccross = 4),
              (t.componentDidMount = function () {
                fetch(
                  "/api/v3/user/recommended?card_id=".concat(
                    t.props.cardID,
                    "&type=",
                    "learn"
                  ),
                  xt
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    t.setState({ recommended: e.cards }),
                      e.cards.length &&
                        zn("seen", "lti-quiz-market-message recommended");
                  }),
                  (t.numAccross =
                    (t.ref.current &&
                      Math.floor((t.ref.current.clientWidth - 72) / 188)) ||
                    3);
              }),
              (t._next = function () {
                t.state.index < t.state.recommended.length - t.numAccross &&
                  t.setState(function (e) {
                    return { index: e.index + 1 };
                  });
              }),
              (t._prev = function () {
                t.state.index > 0 &&
                  t.setState(function (e) {
                    return { index: e.index - 1 };
                  });
              }),
              (t.render = function () {
                var e;
                return null !== (e = t.state.recommended) &&
                  void 0 !== e &&
                  e.length
                  ? (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsxs)("div", {
                          className: Fn,
                          children: [
                            (0, P.jsx)("div", {
                              className: On,
                              children: t.props.isTrial
                                ? "Unlock Additional Picmonics for Free"
                                : "Recommended Topics",
                            }),
                            (0, P.jsx)("div", {
                              className: Bn,
                              children: (0, P.jsxs)("div", {
                                className: Un,
                                children: [
                                  t.state.recommended.length > t.numAccross &&
                                    (0, P.jsx)(L, {
                                      icon: "chevron_left",
                                      color:
                                        t.state.index > 0 ? "#fff" : "#aaa",
                                      className: Wn,
                                      onClick: t._prev,
                                    }),
                                  (0, P.jsx)("div", {
                                    className: Hn,
                                    ref: t.ref,
                                    children: (0, P.jsx)("div", {
                                      style: {
                                        display: "flex",
                                        transform: "translateX(-".concat(
                                          188 * t.state.index,
                                          "px)"
                                        ),
                                        transition: "transform .3s",
                                      },
                                      children:
                                        !!t.state.recommended &&
                                        t.state.recommended.map(function (e) {
                                          return (0,
                                          P.jsx)(lr, { card: e, apiKey: t.props.api_key }, e.card_id);
                                        }),
                                    }),
                                  }),
                                  t.state.recommended.length > t.numAccross &&
                                    (0, P.jsx)(L, {
                                      icon: "chevron_right",
                                      color:
                                        t.state.index <
                                        t.state.recommended.length -
                                          t.numAccross
                                          ? "#fff"
                                          : "#aaa",
                                      className: Wn,
                                      onClick: t._next,
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        t.props.isWK &&
                          (0, P.jsxs)("div", {
                            className: Vn,
                            children: [
                              "Have suggestions? Let us know. ",
                              (0, P.jsxs)("a", {
                                className: Kn,
                                href: "/typeform/raj7xfoq?api_key=".concat(
                                  t.props.api_key
                                ),
                                target: "_blank",
                                children: [
                                  (0, P.jsx)(L, {
                                    icon: "feedback",
                                    className: "m-r-1",
                                  }),
                                  " Give Feedback!",
                                ],
                              }),
                            ],
                          }),
                      ],
                    })
                  : null;
              }),
              t
            );
          }
          return y(r);
        })(e.PureComponent);
      function ur(e) {
        var t = e.api_key,
          n = e.isWK,
          r = e.cardID,
          a = e.cardsViewed,
          i = e.user,
          s = e.marketId;
        if (Date.now() / 1e3 > 1637233200 && Date.now() / 1e3 < 1637233200)
          return (
            zn("seen", "lti-quiz-market-message black-friday-2021"),
            (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)("a", {
                  href: "https://www.picmonic.com/pricing?api_key="
                    .concat(t, "&lti_session_id=")
                    .concat(window.lti_session_id),
                  target: "_blank",
                  onClick: function () {
                    return zn(
                      "click",
                      "lti-quiz-market-message black-friday-2021"
                    );
                  },
                  children: (0, P.jsx)("img", { src: rr, className: tr }),
                }),
                ";",
                (0, P.jsx)(cr, {
                  cardID: r,
                  isWK: n,
                  api_key: t,
                  isTrial: !!i.is_trial,
                }),
              ],
            })
          );
        if (a % 2 == 1)
          return (0, P.jsx)(cr, {
            cardID: r,
            isWK: n,
            api_key: t,
            isTrial: !!i.is_trial,
          });
        var o = Math.floor((a / 2) % (101 === s ? 11 : 10)),
          l = (function (e, t, n) {
            var r = ir[t] || "1,400",
              a = ar[t],
              i = sr[t] || "16,000",
              s = [
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has ",
                        (0, P.jsxs)("strong", {
                          children: [r, "+ MORE mnemonic videos"],
                        }),
                        " for you",
                      ],
                    }),
                    body: "Comprehensive. Effective. Dominate ".concat(
                      a,
                      " School."
                    ),
                    linkText: "VIEW CONTENT LIBRARY",
                    link: '/home?browse=home&browseParams=%7B"pathway_type":"courses","curriculum":"standard"%7D&browseOptions=%7B"open":true%7D',
                  },
                  wk: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has ",
                        (0, P.jsx)("strong", {
                          children: "900+ MORE mnemonic videos",
                        }),
                        " that aren\u2019t in CoursePoint",
                      ],
                    }),
                  },
                },
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has a ",
                        (0, P.jsx)("strong", { children: "mobile app" }),
                        " so you can study on the go!",
                      ],
                    }),
                    body: "Download and increase test scores 50%.",
                    cta: (0, P.jsxs)("div", {
                      className: "clearfix m-t-2",
                      children: [
                        (0, P.jsx)("a", {
                          target: "itunes_store",
                          href: "https://apps.apple.com/us/app/picmonic-nursing-medical-np/id1102493706",
                          onClick: function () {
                            return zn("click", "lti-quiz-market-message 1 ios");
                          },
                          children: (0, P.jsx)("img", {
                            className: "m-r-1 pull-left",
                            src: "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2.png",
                            alt: "Picmonic iOS Application",
                            srcset:
                              "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2.png 1x,//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2_2x.png 2x",
                          }),
                        }),
                        (0, P.jsx)("a", {
                          target: "_blank",
                          rel: "noopener noreferrer",
                          href: "https://play.google.com/store/apps/details?id=com.picmonic.androidapp",
                          onClick: function () {
                            return zn(
                              "click",
                              "lti-quiz-market-message 1 android"
                            );
                          },
                          children: (0, P.jsx)("img", {
                            className: "pull-left",
                            src: "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2.png",
                            alt: "Picmonic Android Application",
                            srcset:
                              "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2.png 1x,//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2_2x.png 2x",
                          }),
                        }),
                      ],
                    }),
                  },
                  100: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has a ",
                        (0, P.jsx)("strong", { children: "mobile app" }),
                        " so you can study on the go!",
                      ],
                    }),
                    body: "Download and increase test scores 50%.",
                    cta: (0, P.jsxs)("div", {
                      className: "clearfix m-t-2",
                      children: [
                        (0, P.jsx)("a", {
                          target: "itunes_store",
                          href: "https://apps.apple.com/us/app/picmonic-medical-pa-usmle-rx/id1468103617",
                          onClick: function () {
                            return zn("click", "lti-quiz-market-message 1 ios");
                          },
                          children: (0, P.jsx)("img", {
                            className: "m-r-1 pull-left",
                            src: "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2.png",
                            alt: "Picmonic iOS Application",
                            srcset:
                              "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2.png 1x,//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2_2x.png 2x",
                          }),
                        }),
                        (0, P.jsx)("a", {
                          target: "_blank",
                          rel: "noopener noreferrer",
                          href: "https://play.google.com/store/apps/details?id=com.picmonic.androidapp.medicine",
                          onClick: function () {
                            return zn(
                              "click",
                              "lti-quiz-market-message 1 android"
                            );
                          },
                          children: (0, P.jsx)("img", {
                            className: "pull-left",
                            src: "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2.png",
                            alt: "Picmonic Android Application",
                            srcset:
                              "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2.png 1x,//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2_2x.png 2x",
                          }),
                        }),
                      ],
                    }),
                  },
                  105: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has a ",
                        (0, P.jsx)("strong", { children: "mobile app" }),
                        " so you can study on the go!",
                      ],
                    }),
                    body: "Download and increase test scores 50%.",
                    cta: (0, P.jsxs)("div", {
                      className: "clearfix m-t-2",
                      children: [
                        (0, P.jsx)("a", {
                          target: "itunes_store",
                          href: "https://apps.apple.com/us/app/picmonic-medical-pa-usmle-rx/id1468103617",
                          onClick: function () {
                            return zn("click", "lti-quiz-market-message 1 ios");
                          },
                          children: (0, P.jsx)("img", {
                            className: "m-r-1 pull-left",
                            src: "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2.png",
                            alt: "Picmonic iOS Application",
                            srcset:
                              "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2.png 1x,//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-ios-v2_2x.png 2x",
                          }),
                        }),
                        (0, P.jsx)("a", {
                          target: "_blank",
                          rel: "noopener noreferrer",
                          href: "https://play.google.com/store/apps/details?id=com.picmonic.androidapp.medicine",
                          onClick: function () {
                            return zn(
                              "click",
                              "lti-quiz-market-message 1 android"
                            );
                          },
                          children: (0, P.jsx)("img", {
                            className: "pull-left",
                            src: "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2.png",
                            alt: "Picmonic Android Application",
                            srcset:
                              "//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2.png 1x,//cdn.picmonic.com/cloud_data/pr/assets/img/www/home/app-store-android-v2_2x.png 2x",
                          }),
                        }),
                      ],
                    }),
                  },
                },
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has you covered from ",
                        (0, P.jsx)("strong", {
                          children:
                            "day one of nursing school through the NCLEX\xae",
                        }),
                        " and beyond.",
                      ],
                    }),
                    body: "Research proven to increase test scores 50%",
                    linkText: "LEARN MORE NOW",
                    link: '/home?browse=home&browseParams=%7B"pathway_type":"courses","curriculum":"standard"%7D&browseOptions=%7B"open":true%7D',
                    cta: (0, P.jsx)("a", {
                      href: '/home?browse=home&browseParams=%7B"pathway_type":"courses","curriculum":"standard"%7D&browseOptions=%7B"open":true%7D'.concat(
                        n
                      ),
                      target: "_blank",
                      className: Dn,
                      children: or[t].map(function (e) {
                        return (0,
                        P.jsxs)("div", { children: [(0, P.jsx)("img", { className: Qn, src: e.icon, alt: "" }), e.name] }, e.name);
                      }),
                    }),
                  },
                  100: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has you covered from ",
                        (0, P.jsx)("strong", {
                          children: "day one of medical school through boards",
                        }),
                        " and beyond.",
                      ],
                    }),
                  },
                  203: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has you covered from ",
                        (0, P.jsx)("strong", {
                          children: "day one of NP school through boards",
                        }),
                        " and beyond.",
                      ],
                    }),
                  },
                  105: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has you covered from ",
                        (0, P.jsx)("strong", {
                          children: "day one of PA school through PANCE",
                        }),
                        " and beyond.",
                      ],
                    }),
                  },
                },
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic covers ",
                        (0, P.jsxs)("strong", {
                          children: ["every subject in ", a, " School!"],
                        }),
                      ],
                    }),
                    body: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Unlock access to ",
                        (0, P.jsxs)("strong", { children: [r, "+"] }),
                        " videos and ",
                        (0, P.jsx)("strong", { children: "boost your grades" }),
                        ".",
                      ],
                    }),
                    linkText: "VIEW CONTENT LIBRARY",
                    link: '/home?browse=home&browseParams=%7B"pathway_type":"courses","curriculum":"standard"%7D&browseOptions=%7B"open":true%7D',
                  },
                  wk: {
                    body: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Unlock access to ",
                        (0, P.jsxs)("strong", { children: [r, "+ videos"] }),
                        "  you ",
                        (0, P.jsx)("u", { children: "don\u2019t" }),
                        " have access to in CoursePoint and boost your grades.",
                      ],
                    }),
                  },
                },
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has a ",
                        (0, P.jsx)("strong", {
                          children: "Daily Review Quiz with Spaced Repetition",
                        }),
                        " (an auto-generated daily queue of study topics)",
                      ],
                    }),
                    body: "Enjoy less stress and more success.",
                    linkText: "Start My Daily Quiz!",
                    link: "/home?",
                  },
                },
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has over",
                        (0, P.jsx)("br", {}),
                        " ",
                        (0, P.jsxs)("strong", {
                          children: [i, "+ multiple choice questions"],
                        }),
                        "!",
                      ],
                    }),
                    body: "The most efficient way to study",
                    linkText: "ACCESS MORE QUESTIONS",
                    link: "/home?",
                  },
                  wk: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has over",
                        (0, P.jsx)("br", {}),
                        " ",
                        (0, P.jsxs)("strong", {
                          children: [i, "+ multiple choice questions"],
                        }),
                        " you ",
                        (0, P.jsx)("u", { children: "don\u2019t" }),
                        " have access to in CoursePoint!",
                      ],
                    }),
                  },
                },
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "You can ",
                        (0, P.jsx)("strong", {
                          children: "create and share personalized Playlists",
                        }),
                        " on Picmonic?",
                      ],
                    }),
                    body: "Match the topic list in your syllabus or exam review guide.",
                    linkText: "GET STARTED NOW",
                    link: "/home?browse=app.playlists",
                  },
                },
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "You can ",
                        (0, P.jsx)("strong", {
                          children: "customize and create",
                        }),
                        " your own Picmonics?",
                      ],
                    }),
                    body: "Turn Picmonic into the perfect study resource for you.",
                    linkText: "GET STARTED",
                    link: "/my-picmonics?",
                  },
                },
                {
                  default: {
                    title: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Picmonic has helped over ",
                        (0, P.jsx)("strong", {
                          children: "1 million students",
                        }),
                        "!",
                      ],
                    }),
                    body: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Hear what they have to say... ",
                        (0, P.jsx)("br", {}),
                        (0, P.jsx)("iframe", {
                          width: "560",
                          height: "315",
                          src: "https://www.youtube.com/embed/bzDIsFqgU-k",
                          frameBorder: "0",
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: !0,
                        }),
                        (0, P.jsx)("br", {}),
                        "Stress less, remember more.",
                      ],
                    }),
                    linkText: "See More Reviews",
                    link: "/student-reviews?",
                  },
                  100: {
                    body: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Hear what they have to say... ",
                        (0, P.jsx)("br", {}),
                        (0, P.jsx)("iframe", {
                          width: "560",
                          height: "315",
                          src: "https://www.youtube.com/embed/xxgdSe3uEbA",
                          frameBorder: "0",
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: !0,
                        }),
                        (0, P.jsx)("br", {}),
                        "Stress less, remember more.",
                      ],
                    }),
                  },
                  203: {
                    body: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Hear what they have to say... ",
                        (0, P.jsx)("br", {}),
                        (0, P.jsx)("iframe", {
                          width: "560",
                          height: "315",
                          src: "https://www.youtube.com/embed/zqrPQwDZ2EM",
                          frameBorder: "0",
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: !0,
                        }),
                        (0, P.jsx)("br", {}),
                        "Stress less, remember more.",
                      ],
                    }),
                  },
                  105: {
                    body: (0, P.jsxs)(P.Fragment, {
                      children: [
                        "Hear what they have to say... ",
                        (0, P.jsx)("br", {}),
                        (0, P.jsx)("iframe", {
                          width: "560",
                          height: "315",
                          src: "https://www.youtube.com/embed/zqrPQwDZ2EM",
                          frameBorder: "0",
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: !0,
                        }),
                        (0, P.jsx)("br", {}),
                        "Stress less, remember more.",
                      ],
                    }),
                  },
                },
                {
                  default: {
                    title:
                      "Picmonic is the The Perfect Companion to Your Textbook",
                    body: "Our playlists are aligned to popular textbooks so you can easily follow along page by page.",
                    linkText: "View Book List",
                    link: '/home?browse=home&browseParams=%7B"pathway_type":"books","curriculum":"null"%7D&browseOptions=%7B"open":true%7D',
                  },
                },
                {
                  default: {
                    title:
                      "Picmonic has a 4 Weeks to NCLEX\xae Workbook & Study Planner",
                    body: (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsx)("img", { src: nr, alt: "" }),
                        (0, P.jsx)("br", {}),
                        "The ultimate study companion to Picmonic for Nursing!",
                      ],
                    }),
                    linkText: "Check it Out!",
                    link: "https://amzn.to/3l0pnzR",
                  },
                },
              ][e];
            return p(p({}, s.default), s[t]);
          })(
            o,
            n ? "wk" : s,
            "&api_key="
              .concat(t, "&lti_session_id=")
              .concat(window.lti_session_id)
          ),
          c = l.title,
          u = l.body,
          d = l.cta,
          f = l.link,
          m = l.linkText;
        zn("seen", "lti-quiz-market-message ".concat(o));
        var h =
          f && 0 === f.indexOf("http")
            ? f
            : ""
                .concat(f, "&api_key=")
                .concat(t, "&lti_session_id=")
                .concat(window.lti_session_id);
        return (0, P.jsxs)(P.Fragment, {
          children: [
            (0, P.jsx)(cr, {
              cardID: r,
              isWK: n,
              api_key: t,
              isTrial: !!i.is_trial,
            }),
            (0, P.jsxs)("div", {
              className: Fn,
              children: [
                (0, P.jsx)("div", {
                  className: On,
                  children: "Did you know?!",
                }),
                (0, P.jsxs)("div", {
                  className: Bn,
                  children: [
                    (0, P.jsx)("div", { className: Rn, children: c }),
                    (0, P.jsx)("div", { className: In, children: u }),
                    d,
                    !!f &&
                      (0, P.jsx)("a", {
                        href: h,
                        target: "_blank",
                        className: "pls-btn ".concat(qn),
                        onClick: function () {
                          return zn(
                            "click",
                            "lti-quiz-market-message ".concat(o)
                          );
                        },
                        children: m,
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var dr = e.memo(ur),
        pr = "SocialWidget_wrapper__I1L9E",
        fr = "SocialWidget_icon__RVKQQ";
      var mr =
        n.p + "static/media/follow-us.cc81972cc7df7360fea6e26261a67f9c.svg";
      var hr =
        n.p + "static/media/instagram.846f4c12c2e71b22d56e55d3ade100c1.svg";
      var gr =
        n.p + "static/media/facebook.becf90d350d30d8e81b356c470295267.svg";
      var _r =
        n.p + "static/media/twitter.a9629418fec95800f7b6836de790777d.svg";
      var yr =
          n.p + "static/media/youtube.3e9dd63784c7ea3cedb367234e7d09e6.svg",
        vr = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            return g(this, n), t.apply(this, arguments);
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("div", {
                    className: pr,
                    children: [
                      (0, P.jsx)("img", {
                        src: mr,
                        className: fr,
                        style: { width: 50 },
                      }),
                      (0, P.jsx)("a", {
                        href: "https://www.instagram.com/picmonic/",
                        target: "_blank",
                        children: (0, P.jsx)("img", { src: hr, className: fr }),
                      }),
                      (0, P.jsx)("a", {
                        href: "https://www.facebook.com/picmonicfornursing",
                        target: "_blank",
                        children: (0, P.jsx)("img", { src: gr, className: fr }),
                      }),
                      (0, P.jsx)("a", {
                        href: "https://twitter.com/Picmonic",
                        target: "_blank",
                        children: (0, P.jsx)("img", { src: _r, className: fr }),
                      }),
                      (0, P.jsx)("a", {
                        href: "https://www.youtube.com/user/PicmonicVideo/featured",
                        target: "_blank",
                        children: (0, P.jsx)("img", { src: yr, className: fr }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        br = vr,
        wr = "QuizResults_wrapper__Dfh9n",
        xr = "QuizResults_container__S1+Uj",
        kr = "QuizResults_resultsContainer__dKG8K",
        Sr = "QuizResults_resultContainer__hZKUl",
        Cr = "QuizResults_title__XT5Ep",
        jr = "QuizResults_stats__FAvRg",
        Ar = "QuizResults_number__8XiQJ",
        Pr = "QuizResults_subStat__XkHLB",
        Nr = "QuizResults_trialBlockWrapper__R8aF4",
        Mr = "QuizResults_user__cB2Q7",
        Er = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            var e;
            g(this, n);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            return ((e = t.call.apply(t, [this].concat(a))).state = {}), e;
          }
          return (
            y(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.numCorrect === this.props.totalQuestions &&
                    this.props.numCorrect >= 5 &&
                    Tn(this.props.numCorrect);
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("div", {
                    className: wr,
                    children: [
                      (0, P.jsxs)("div", {
                        className: xr,
                        children: [
                          (0, P.jsx)("h1", { children: "Results:" }),
                          (0, P.jsx)("h2", { children: this.props.name }),
                          !!window.user.lti.no_gradebook &&
                            (0, P.jsxs)("p", {
                              className: Mr,
                              children: [
                                "User: ",
                                this.props.user.first_name,
                                " ",
                                this.props.user.last_name,
                                " (",
                                this.props.user.email,
                                ")",
                              ],
                            }),
                          (0, P.jsxs)("div", {
                            children: [
                              (0, P.jsxs)("div", {
                                className: kr,
                                children: [
                                  (0, P.jsxs)("div", {
                                    className: Sr,
                                    children: [
                                      (0, P.jsx)("p", {
                                        className: Cr,
                                        children: "This round",
                                      }),
                                      (0, P.jsx)(L, {
                                        icon: "done",
                                        size: "60",
                                        color: "#AAACB3",
                                      }),
                                      (0, P.jsxs)("div", {
                                        className: jr,
                                        children: [
                                          (0, P.jsxs)("div", {
                                            className: Ar,
                                            children: [
                                              this.props.numCorrect,
                                              "/",
                                              this.props.totalQuestions,
                                            ],
                                          }),
                                          (0, P.jsx)("div", {
                                            children: "Facts Correct",
                                          }),
                                        ],
                                      }),
                                      (0, P.jsxs)("p", {
                                        className: Pr,
                                        children: [
                                          Math.round(
                                            (this.props.numCorrect /
                                              this.props.totalQuestions) *
                                              100
                                          ),
                                          "% Accuracy",
                                        ],
                                      }),
                                      (0, P.jsx)(Ht, {
                                        progress:
                                          this.props.numCorrect /
                                          this.props.totalQuestions,
                                      }),
                                    ],
                                  }),
                                  (0, P.jsxs)("div", {
                                    className: Sr,
                                    children: [
                                      (0, P.jsx)("p", {
                                        className: Cr,
                                        children: this.props.name,
                                      }),
                                      "picmonic" === this.props.type
                                        ? (0, P.jsx)("img", {
                                            src: "/cloud_data/images_panel_thumb/".concat(
                                              this.props.image
                                            ),
                                            alt: this.props.name,
                                          })
                                        : (0, P.jsx)(L, {
                                            icon: "playlist_play",
                                            size: "60",
                                            color: "#AAACB3",
                                          }),
                                      (0, P.jsxs)("div", {
                                        className: jr,
                                        children: [
                                          (0, P.jsx)("div", {
                                            className: Ar,
                                            children: this.props.learnedFacts,
                                          }),
                                          (0, P.jsx)("div", {
                                            children: "Facts Learned",
                                          }),
                                        ],
                                      }),
                                      (0, P.jsxs)("p", {
                                        className: Pr,
                                        children: [
                                          this.props.totalFacts -
                                            this.props.learnedFacts,
                                          " Facts Remaining",
                                        ],
                                      }),
                                      (0, P.jsx)(Ht, {
                                        progress:
                                          this.props.numCorrect /
                                          this.props.totalQuestions,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              !!this.props.user &&
                                [100, 101, 202, 203, 105].indexOf(
                                  this.props.user.lead
                                ) > -1 &&
                                (0, P.jsx)(dr, {
                                  user: this.props.user,
                                  api_key: this.props.user.web_api_key,
                                  cardsViewed: this.props.user.cards_viewed,
                                  marketId: this.props.user.lead,
                                  isWK:
                                    window.user.lti &&
                                    4 === window.user.lti.lti_id,
                                  cardID: this.props.id,
                                }),
                              !!this.props.user.is_trial &&
                                !this.props.isFree &&
                                (0, P.jsx)("div", {
                                  className: Nr,
                                  children: (0, P.jsx)(Ct, {
                                    user: this.props.user,
                                  }),
                                }),
                              (0, P.jsx)(xn, {
                                questions: this.props.questions,
                                quizTime: this.props.quizTime,
                                numCorrect: this.props.numCorrect,
                                totalQuestions: this.props.totalQuestions,
                                hintsUsed: this.props.hintsUsed,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, P.jsx)(En, {}),
                      (0, P.jsx)(br, {}),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Tr = Er,
        zr = {
          overlay: "Register_overlay__7wHob",
          modal: "Register_modal__mjEG8",
          header: "Register_header__p-NgX",
          body: "Register_body__veC0I",
          btnFacebook: "Register_btnFacebook__6YV5O",
          btnGoogle: "Register_btnGoogle__w+OSS Register_btnFacebook__6YV5O",
          "pls-input": "Register_pls-input__pdRk3",
          plsInputLight:
            "Register_plsInputLight__rBO73 Register_pls-input__pdRk3",
          divider: "Register_divider__Ms3ni",
          dividerWrapper: "Register_dividerWrapper__DDoDH",
          dividerText: "Register_dividerText__Bubw0",
          textLeft: "Register_textLeft__8QG4p",
          primaryCta: "Register_primaryCta__sDko+",
          link: "Register_link__xsCmU",
          pointer: "Register_pointer__vye+Y",
        },
        Lr = (function (e) {
          b(n, e);
          var t = k(n);
          function n(e) {
            var r;
            return (
              g(this, n),
              ((r = t.call(this, e)).inputChanged = function (e) {
                r.setState(
                  u(
                    {},
                    e.target.name,
                    p(
                      p({}, r.state[e.target.name]),
                      {},
                      { value: e.target.value, error: !e.target.value.length }
                    )
                  )
                );
              }),
              (r.inputTouched = function (e) {
                r.setState(
                  u(
                    {},
                    e.target.name,
                    p(p({}, r.state[e.target.name]), {}, { touched: !0 })
                  )
                );
              }),
              (r.login = function (e) {
                fetch(
                  "/api/v2/user/authenticate",
                  p(
                    p({}, xt),
                    {},
                    {
                      method: "POST",
                      body: JSON.stringify(
                        p(
                          p({}, e),
                          {},
                          { lti: 1, lti_session_id: window.lti_session_id }
                        )
                      ),
                    }
                  )
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    e.message
                      ? r.setState({ error: e.message })
                      : r.props.onLogin(e);
                  });
              }),
              (r.submitLogin = function (e) {
                e.preventDefault(),
                  r.login({
                    email: r.state.email.value,
                    password: r.state.password.value,
                  });
              }),
              (r.submitGoogleLogin = function () {
                window.gapi.auth2.authorize(
                  {
                    client_id:
                      "675092682139-p0u42avqdlf3e73atg30fh4k9ddpgels.apps.googleusercontent.com",
                    scope: "email profile openid",
                    response_type: "id_token permission",
                  },
                  function (e) {
                    e.error
                      ? console.log(e)
                      : r.login({ google_id_token: e.id_token });
                  }
                );
              }),
              (r.submitFacebookLogin = function () {
                window.FB.login(
                  function (e) {
                    "connected" === e.status
                      ? r.login({ accessToken: e.authResponse.accessToken })
                      : e.status;
                  },
                  { scope: "public_profile,email" }
                );
              }),
              (r.state = {
                email: { value: "", touched: !1, error: !0 },
                password: { value: "", touched: !1, error: !0 },
              }),
              r
            );
          }
          return (
            y(n, [
              {
                key: "componentDidMount",
                value: function () {
                  window.init = function () {
                    window.gapi.load("auth2");
                  };
                  var e = document.createElement("script");
                  (e.src =
                    "https://apis.google.com/js/platform.js?onload=init"),
                    (e.async = !0),
                    (e.defer = !0),
                    document.body.appendChild(e),
                    (window.fbAsyncInit = function () {
                      window.FB.init({
                        appId: "491312997564602",
                        status: !0,
                        cookie: !0,
                        xfbml: !0,
                        version: "v2.9",
                      });
                    }),
                    (function (e, t, n) {
                      var r,
                        a = e.getElementsByTagName(t)[0];
                      e.getElementById(n) ||
                        (((r = e.createElement(t)).id = n),
                        (r.src = "https://connect.facebook.net/en_US/sdk.js"),
                        a.parentNode.insertBefore(r, a));
                    })(document, "script", "facebook-jssdk");
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("div", {
                    className: zr.overlay,
                    children: (0, P.jsxs)("div", {
                      className: zr.modal,
                      children: [
                        (0, P.jsxs)("div", {
                          className: zr.header,
                          children: [
                            (0, P.jsx)(L, {
                              icon: "close",
                              onClick: this.props.onClose,
                            }),
                            (0, P.jsx)("div", {
                              className: "modal-title light",
                              children: "Log in to Picmonic",
                            }),
                          ],
                        }),
                        (0, P.jsxs)("div", {
                          className: zr.body,
                          children: [
                            (0, P.jsx)("div", {
                              className: "text-center m-b-2",
                              children: (0, P.jsx)("img", {
                                width: "137",
                                src: "https://cdn.picmonic.com/cloud_data/production/assets/img/logos/logo-dark.svg",
                                alt: "Picmonic",
                              }),
                            }),
                            this.state.error &&
                              (0, P.jsx)("div", {
                                children: (0, P.jsx)("div", {
                                  className: "error text-center m-b-2 pls-red",
                                  dangerouslySetInnerHTML: {
                                    __html: this.state.error,
                                  },
                                }),
                              }),
                            (0, P.jsx)("div", {
                              className: "row",
                              children: (0, P.jsx)("div", {
                                className: "col-xs-12",
                                children: (0, P.jsxs)("button", {
                                  onClick: this.submitFacebookLogin,
                                  className: zr.btnFacebook,
                                  children: [
                                    (0, P.jsxs)("div", {
                                      "ng-hide":
                                        "loading && loadingMode == 'registration-social'",
                                      className: "light",
                                      children: [
                                        (0, P.jsx)("img", {
                                          width: "24",
                                          alt: "facebook logo",
                                          className:
                                            "social-svg-login-btn pull-left",
                                          src: "https://cdn.picmonic.com/cloud_data/production/assets/img/icons/facebook-white.svg",
                                        }),
                                        " Log in with Facebook",
                                      ],
                                    }),
                                    (0, P.jsx)("pls-loading-icon", {
                                      size: "x-small",
                                      "ng-show":
                                        "loading && loadingMode == 'registration-social'",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, P.jsx)("div", {
                              className: "row",
                              children: (0, P.jsx)("div", {
                                className: "col-xs-12",
                                children: (0, P.jsxs)("button", {
                                  onClick: this.submitGoogleLogin,
                                  className: zr.btnGoogle,
                                  children: [
                                    (0, P.jsxs)("div", {
                                      "ng-hide":
                                        "loading && loadingMode == 'login-google'",
                                      className: "light",
                                      children: [
                                        (0, P.jsx)("img", {
                                          width: "40",
                                          alt: "google logo",
                                          className:
                                            "social-svg-login-btn pull-left",
                                          src: "https://cdn.picmonic.com/cloud_data/production/assets/img/icons/google.svg",
                                        }),
                                        " Log in with Google",
                                      ],
                                    }),
                                    (0, P.jsx)("pls-loading-icon", {
                                      size: "x-small",
                                      "ng-show":
                                        "loading && loadingMode == 'login-google'",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, P.jsxs)("div", {
                              className: zr.dividerWrapper,
                              children: [
                                (0, P.jsx)("div", { className: zr.divider }),
                                (0, P.jsx)("div", {
                                  className: zr.dividerText,
                                  children: "or with email",
                                }),
                                (0, P.jsx)("div", { className: zr.divider }),
                              ],
                            }),
                            (0, P.jsx)("div", {
                              className: zr.textLeft,
                              children: (0, P.jsx)("div", {
                                className: "col-xs-12",
                                children: (0, P.jsxs)("form", {
                                  noValidate: !0,
                                  name: "login",
                                  autoComplete: "on",
                                  onSubmit: this.submitLogin,
                                  children: [
                                    (0, P.jsx)("span", {
                                      className:
                                        "pls-wet-cement m-b-0 pls-font-opensans pls-font-12",
                                      children: "Email",
                                    }),
                                    (0, P.jsx)("input", {
                                      name: "email",
                                      type: "email",
                                      value: this.state.email.value,
                                      onChange: this.inputChanged,
                                      onBlur: this.inputTouched,
                                      className: zr.plsInputLight,
                                      placeholder: "Enter your Email",
                                      autoFocus: !0,
                                      required: !0,
                                    }),
                                    (this.state.email.touched ||
                                      this.state.submitted) &&
                                      this.state.email.error &&
                                      (0, P.jsx)("div", {
                                        className: "text-right register-red",
                                        children: "Email is required",
                                      }),
                                    (0, P.jsx)("span", {
                                      className:
                                        "pls-wet-cement m-b-0 pls-font-opensans pls-font-12",
                                      children: "Password",
                                    }),
                                    (0, P.jsx)("input", {
                                      name: "password",
                                      type: "password",
                                      value: this.state.password.value,
                                      onChange: this.inputChanged,
                                      onBlur: this.inputTouched,
                                      "ng-model": "credentials.password",
                                      className: zr.plsInputLight,
                                      "ng-class": "{'pls-loading': loading}",
                                      placeholder: "Enter your Password",
                                      required: !0,
                                    }),
                                    (this.state.password.touched ||
                                      this.state.submitted) &&
                                      this.state.password.error &&
                                      (0, P.jsx)("div", {
                                        className: "text-right register-red",
                                        children: "Password is required",
                                      }),
                                    (0, P.jsx)("a", {
                                      className: zr.link,
                                      target: "_blank",
                                      href: "/login/reset-password",
                                      children: (0, P.jsx)("u", {
                                        children: "Forgot password?",
                                      }),
                                    }),
                                    (0, P.jsxs)("button", {
                                      className:
                                        zr.primaryCta +
                                        " pls-btn col-xs-12 light m-t-2 m-b-0 pls-btn--primary-cta",
                                      "ng-disabled":
                                        "(login.$dirty && login.$invalid) || (loading && loadingMode == 'login-picmonic')",
                                      children: [
                                        !this.state.loading &&
                                          (0, P.jsx)("span", {
                                            children: "LOG IN",
                                          }),
                                        this.state.loading &&
                                          (0, P.jsx)("span", {
                                            children: "Loading...",
                                          }),
                                        (0, P.jsx)("pls-loading-icon", {
                                          size: "x-small",
                                          "ng-show":
                                            "loading && loadingMode == 'login-picmonic'",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Fr = "TOS_overlay__PIo-Q",
        Or = "TOS_modal__DF8dA",
        Rr = "TOS_body__vnfTV",
        Br = "TOS_link__i6vHm",
        Ir = "TOS_greeting__TgGZ+",
        qr = "TOS_email__S7TDD",
        Dr = "TOS_label__HXxkp",
        Qr = "TOS_button__Xc31D",
        Ur = "TOS_playButton__gXSY4",
        Hr = "TOS_previewMessagewraper__tO5ey",
        Wr = "TOS_title__xwhna",
        Vr = "TOS_msg__ufEaT",
        Kr = "TOS_regBtn__CEYnm",
        Yr = "TOS_login__WUFLX",
        Gr = "TOS_agreeText__mBa6M",
        Xr = "TOS_headsUp__7pmRi",
        $r = "TOS_trialBlock__wferX",
        Jr = "TOS_plsInputLight__nuaVl TOS_pls-input__liYUL",
        Zr = "TOS_textCenter__Gbr8k",
        ea = ["lti"],
        ta = (function (t) {
          b(r, t);
          var n = k(r);
          function r(t) {
            var a;
            return (
              g(this, r),
              ((a = n.call(this, t)).componentDidMount = function () {
                a.buttonRef.current.focus(),
                  a.buttonRef.current.addEventListener("keyup", function (e) {
                    return e.stopPropagation();
                  });
              }),
              (a.onClickLogin = function () {
                a.setState({ showLogin: !0 });
              }),
              (a.closeLogin = function () {
                a.setState({ showLogin: !1 });
              }),
              (a.inputChanged = function (e) {
                a.setState(
                  u(
                    {},
                    e.target.name,
                    p(
                      p({}, a.state[e.target.name]),
                      {},
                      {
                        value: e.target.value,
                        error: e.target.value.length < 6,
                      }
                    )
                  )
                );
              }),
              (a.inputTouched = function (e) {
                a.setState(
                  u(
                    {},
                    e.target.name,
                    p(p({}, a.state[e.target.name]), {}, { touched: !0 })
                  )
                );
              }),
              (a._onClickAgree = function (e) {
                if (
                  (e.preventDefault(),
                  !a.props.lti.no_password && a.state.password.error)
                )
                  return !1;
                fetch(
                  "/api/v3/user/set_password",
                  p(
                    p({}, xt),
                    {},
                    {
                      method: "PUT",
                      body: JSON.stringify({
                        password: a.props.lti.no_password
                          ? "picmonic" + Date.now()
                          : a.state.password.value,
                      }),
                    }
                  )
                ).then(function (e) {
                  if (a.state.email.value && a.state.full_name.value) {
                    var t = a.state.full_name.value.split(" "),
                      n = t.shift(),
                      r = t.join(" ");
                    fetch(
                      "/api/v2/checkuniqueness/email",
                      p(
                        p({}, xt),
                        {},
                        {
                          method: "POST",
                          body: JSON.stringify({
                            fieldValue: a.state.email.value,
                          }),
                        }
                      )
                    )
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        e.isUnique
                          ? fetch(
                              "/api/v2/user",
                              p(
                                p({}, xt),
                                {},
                                {
                                  method: "PUT",
                                  body: JSON.stringify({
                                    first_name: n,
                                    last_name: r,
                                    email: a.state.email.value,
                                  }),
                                }
                              )
                            )
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                e.lti;
                                var t = M(e, ea);
                                a.props.onClickAgree(t);
                              })
                          : a.setState({ error: e.message });
                      });
                  } else a.props.onClickAgree();
                });
              }),
              (a.buttonRef = e.createRef()),
              (a.state = {
                full_name: { value: "", touched: !1, error: !0 },
                email: { value: "", touched: !1, error: !0 },
                password: { value: "", touched: !1, error: !0 },
                showLogin: !1,
              }),
              a
            );
          }
          return (
            y(r, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsxs)("div", {
                    className: Fr,
                    children: [
                      this.state.showLogin &&
                        (0, P.jsx)(Lr, {
                          onClose: this.closeLogin,
                          onLogin: this.props.onClickAgree,
                        }),
                      (0, P.jsx)("form", {
                        className: Or,
                        noValidate: !0,
                        onSubmit: this._onClickAgree,
                        children: (0, P.jsxs)("div", {
                          className: Rr,
                          children: [
                            (0, P.jsxs)("div", {
                              className: "".concat(Zr, " m-b-2"),
                              children: [
                                "Have a Picmonic account? ",
                                (0, P.jsx)("a", {
                                  className: Br,
                                  onClick: this.onClickLogin,
                                  children: (0, P.jsx)("u", {
                                    children: "Login",
                                  }),
                                }),
                              ],
                            }),
                            (0, P.jsxs)("div", {
                              children: [
                                (0, P.jsxs)("div", {
                                  className: Zr,
                                  children: [
                                    !!this.props.user.first_name &&
                                      !this.props.user.settings.set_email &&
                                      (0, P.jsxs)("div", {
                                        className: Ir,
                                        children: [
                                          "Keep going, ",
                                          "Unnamed" ===
                                          this.props.user.first_name
                                            ? "friend"
                                            : ""
                                                .concat(
                                                  this.props.user.first_name[0].toUpperCase()
                                                )
                                                .concat(
                                                  this.props.user.first_name.slice(
                                                    1
                                                  )
                                                ),
                                          "!",
                                        ],
                                      }),
                                    (!this.props.user.first_name ||
                                      !!this.props.user.settings.set_email) &&
                                      (0, P.jsx)("div", {
                                        className: Ir,
                                        children: "Remember more in less time",
                                      }),
                                    (0, P.jsx)("div", {
                                      className: "m-b-2",
                                      children:
                                        "Picmonic turns facts into unforgettable images and stories scientifically proven to increase memory retention.",
                                    }),
                                    !this.props.user.settings.set_email &&
                                      (0, P.jsx)("div", {
                                        className: qr,
                                        children: (0, P.jsx)("strong", {
                                          children: this.props.user.email,
                                        }),
                                      }),
                                  ],
                                }),
                                !!this.props.user.settings.set_email &&
                                  (0, P.jsxs)("div", {
                                    children: [
                                      (0, P.jsx)("label", {
                                        htmlFor: "full_name",
                                        className: Dr,
                                        children: "Name",
                                      }),
                                      (0, P.jsx)("input", {
                                        className: Jr,
                                        id: "full_name",
                                        type: "text",
                                        name: "full_name",
                                        placeholder: "Enter your Full Name",
                                        required: !0,
                                        value: this.state.full_name.value,
                                        onChange: this.inputChanged,
                                        onBlur: this.inputTouched,
                                      }),
                                      (this.state.full_name.touched ||
                                        this.state.submitted) &&
                                        this.state.full_name.error &&
                                        (0, P.jsx)("div", {
                                          className:
                                            "text-right register-text register-red",
                                          children:
                                            "Please enter your full name.",
                                        }),
                                      (0, P.jsx)("label", {
                                        htmlFor: "email",
                                        className: Dr,
                                        children: "Email",
                                      }),
                                      (0, P.jsx)("input", {
                                        className: Jr,
                                        id: "email",
                                        type: "email",
                                        name: "email",
                                        placeholder: "Enter your Email",
                                        required: !0,
                                        value: this.state.email.value,
                                        onChange: this.inputChanged,
                                        onBlur: this.inputTouched,
                                        "ng-model": "user.email",
                                        "ensure-unique": "email",
                                        "ng-model-options":
                                          "{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 } }",
                                      }),
                                      (this.state.email.touched ||
                                        this.state.submitted) &&
                                        this.state.email.error &&
                                        (0, P.jsx)("div", {
                                          className:
                                            "text-right register-text register-red",
                                          children:
                                            "Your email address was not entered correctly. Please check the information and try again.",
                                        }),
                                      this.state.error &&
                                        (0, P.jsx)("div", {
                                          className:
                                            "text-right register-text register-red",
                                          "ng-show": "pass.email.$error.unique",
                                          children:
                                            "Email address already exists.",
                                        }),
                                    ],
                                  }),
                                !this.props.lti.no_password &&
                                  (0, P.jsxs)(P.Fragment, {
                                    children: [
                                      (0, P.jsx)("label", {
                                        htmlFor: "password",
                                        className: Dr,
                                        children:
                                          "Create a password (minimum 6 characters):",
                                      }),
                                      (0, P.jsx)("input", {
                                        id: "password",
                                        name: "password",
                                        type: "password",
                                        value: this.state.password.value,
                                        onChange: this.inputChanged,
                                        onBlur: this.inputTouched,
                                        className: Jr,
                                        placeholder: "Create a Password",
                                        required: !0,
                                        style: { margin: 0 },
                                      }),
                                      (0, P.jsx)("br", {}),
                                      this.state.password.error &&
                                        (this.state.submitted ||
                                          this.state.password.touched) &&
                                        (0, P.jsx)("div", {
                                          class:
                                            "text-right register-text pls-red",
                                          "ng-class":
                                            "{'register-red': pass.password.$invalid && (pass.password.$touched || pass.$submitted)}",
                                          children:
                                            "Please enter a password with at least 6 characters.",
                                        }),
                                      !this.state.password.error &&
                                        (0, P.jsx)("div", {
                                          className:
                                            "text-right input-message input-message--success",
                                          children: "Password approved!",
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, P.jsx)("button", {
                              type: "submit",
                              className: Qr,
                              ref: this.buttonRef,
                              tabIndex: "0",
                              children: "AGREE & CONTINUE",
                            }),
                            (0, P.jsxs)("div", {
                              className: Gr,
                              children: [
                                "By continuing you are agreeing to Picmonic's ",
                                (0, P.jsx)("a", {
                                  className: Br,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: "/pages/terms-of-use/",
                                  children: "Terms of Use",
                                }),
                                ",",
                                (0, P.jsx)("br", {}),
                                " ",
                                (0, P.jsx)("a", {
                                  className: Br,
                                  target: "_blank",
                                  href: "/pages/privacy-policy/",
                                  children: "Privacy Policy",
                                }),
                                ", and ",
                                (0, P.jsx)("a", {
                                  className: Br,
                                  target: "_blank",
                                  href: "/pages/services-agreement/",
                                  children: "Services Agreement",
                                }),
                                ".",
                              ],
                            }),
                            0 !== this.props.lti.tos_show_notice &&
                              (0, P.jsx)("div", {
                                className: Xr,
                                children:
                                  "School assignments must be completed through this portal.",
                              }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(e.PureComponent),
        na = (e.PureComponent, "TOSWKReg_overlay__BhsxQ"),
        ra = "TOSWKReg_link__s30MK",
        aa = "TOSWKRegB_modal__9ATv3",
        ia = "TOSWKRegB_left__YiW36",
        sa = "TOSWKRegB_header__NYrkU",
        oa = "TOSWKRegB_copy__ch6Oe",
        la = "TOSWKRegB_copy2__2VfoA",
        ca = "TOSWKRegB_features__FfaI4",
        ua = "TOSWKRegB_feature__2XsyE",
        da = "TOSWKRegB_icon__XTl+b",
        pa = "TOSWKRegB_featureMarkers__TZNZ6",
        fa = "TOSWKRegB_marker__eLtYw",
        ma = "TOSWKRegB_marerActive__szbMq TOSWKRegB_marker__eLtYw",
        ha = "TOSWKRegB_right__psrRk",
        ga = "TOSWKRegB_btn__OMCmN",
        _a = "TOSWKRegB_btnInverted__zJZh5 TOSWKRegB_btn__OMCmN",
        ya = "TOSWKRegB_btnFullWidth__hJmUz TOSWKRegB_btn__OMCmN",
        va = "TOSWKRegB_continue__nykd6",
        ba = "TOSWKRegB_agreeText__yoPSl",
        wa = "TOSWKRegB_body2__HpUP7",
        xa = "TOSWKRegB_regTitle__00HYp",
        ka = "TOSWKRegB_subTitle__dlCP-",
        Sa = "TOSWKRegB_socialBtnWrapper__0P0v+",
        Ca = "TOSWKRegB_socialBtn__POc2w",
        ja = "TOSWKRegB_socialBtnActive__mQPw2 TOSWKRegB_socialBtn__POc2w",
        Aa = "TOSWKRegB_inputError__742tU",
        Pa = "TOSWKRegB_divider__r6Vd1",
        Na = "TOSWKRegB_dividerWrapper__tWYWc",
        Ma = "TOSWKRegB_dividerText__BFvN3",
        Ea =
          "TOSWKRegB_dividerWrapperLogin__Fw0LG TOSWKRegB_dividerWrapper__tWYWc",
        Ta = "TOSWKRegB_forgot__bzjTU";
      function za(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      (function e(t, n) {
        function r(e, r, a) {
          if ("undefined" !== typeof document) {
            "number" === typeof (a = za({}, n, a)).expires &&
              (a.expires = new Date(Date.now() + 864e5 * a.expires)),
              a.expires && (a.expires = a.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var i = "";
            for (var s in a)
              a[s] &&
                ((i += "; " + s),
                !0 !== a[s] && (i += "=" + a[s].split(";")[0]));
            return (document.cookie = e + "=" + t.write(r, e) + i);
          }
        }
        return Object.create(
          {
            set: r,
            get: function (e) {
              if ("undefined" !== typeof document && (!arguments.length || e)) {
                for (
                  var n = document.cookie ? document.cookie.split("; ") : [],
                    r = {},
                    a = 0;
                  a < n.length;
                  a++
                ) {
                  var i = n[a].split("="),
                    s = i.slice(1).join("=");
                  try {
                    var o = decodeURIComponent(i[0]);
                    if (((r[o] = t.read(s, o)), e === o)) break;
                  } catch (l) {}
                }
                return e ? r[e] : r;
              }
            },
            remove: function (e, t) {
              r(e, "", za({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, za({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(za({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(n) },
            converter: { value: Object.freeze(t) },
          }
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
      var La =
          n.p +
          "static/media/logo-white-blue-eye.16af9d88dc4cab6cace7e6d9a972bd11.svg",
        Fa = [
          {
            icon: "play_circle_filled",
            text: (0, P.jsxs)("div", {
              children: ["1,000+ more", (0, P.jsx)("br", {}), " Videos"],
            }),
          },
          {
            icon: "check_box",
            text: (0, P.jsxs)("div", {
              children: [
                "12,000+ more",
                (0, P.jsx)("br", {}),
                " Quiz Questions",
              ],
            }),
          },
          {
            icon: "phone",
            text: (0, P.jsxs)("div", {
              children: ["iOS & Android", (0, P.jsx)("br", {}), " Mobile Apps"],
            }),
          },
          {
            icon: "replay",
            text: (0, P.jsxs)("div", {
              children: ["Smart Daily", (0, P.jsx)("br", {}), " Review Quiz"],
            }),
          },
          {
            icon: "subscriptions",
            text: (0, P.jsxs)("div", {
              children: [
                "Webinars, Study",
                (0, P.jsx)("br", {}),
                " Guides, Infographics",
              ],
            }),
          },
        ],
        Oa = function (t) {
          var n = t.toggleTab,
            r = t.onLogin,
            a = t.initialEmail,
            i = o((0, e.useState)(!1), 2),
            s = i[0],
            l = (i[1], o((0, e.useState)(!1), 2)),
            c = l[0],
            u = l[1],
            d = o((0, e.useState)(!1), 2),
            f = d[0],
            m = (d[1], o((0, e.useState)(!1), 2)),
            h = m[0],
            g =
              (m[1],
              o(
                (0, e.useState)({ value: a || "", touched: !1, error: !!a }),
                2
              )),
            _ = g[0],
            y = g[1],
            v = o((0, e.useState)({ value: "", touched: !1, error: !0 }), 2),
            b = v[0],
            w = { email: y, password: v[1] },
            x = function (e) {
              var t = e.target,
                n = t.name,
                r = t.value;
              w[n](function (e) {
                return p(p({}, e), {}, { value: r, error: !r.length });
              });
            },
            k = function (e) {
              w[e.target.name](function (e) {
                return p(p({}, e), {}, { touched: !0 });
              });
            },
            S = function (e) {
              fetch(
                "/api/v2/user/authenticate",
                p(
                  p({}, xt),
                  {},
                  {
                    method: "POST",
                    body: JSON.stringify(
                      p(
                        p({}, e),
                        {},
                        { lti: 1, lti_session_id: window.lti_session_id }
                      )
                    ),
                  }
                )
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  e.message
                    ? u("Incorrect email/password combination")
                    : (r(e), zn("click", "wk_onboarding - final - login"));
                });
            };
          return (0, P.jsxs)("div", {
            className: wa,
            children: [
              (0, P.jsx)("h1", {
                className: xa,
                style: { marginBottom: 24 },
                children: "Log in to Picmonic",
              }),
              s &&
                (0, P.jsx)("div", {
                  className: "error text-center m-b-2 pls-red",
                  dangerouslySetInnerHTML: { __html: s },
                }),
              (0, P.jsxs)("div", {
                className: Sa,
                children: [
                  (0, P.jsxs)("button", {
                    className: Ca,
                    onClick: function () {
                      window.FB.login(
                        function (e) {
                          "connected" === e.status
                            ? S({ accessToken: e.authResponse.accessToken })
                            : e.status;
                        },
                        { scope: "public_profile,email" }
                      );
                    },
                    style: { height: 48 },
                    children: [
                      (0, P.jsx)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, P.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M1.91525 0H17.2373C18.2951 0 19.1525 0.89543 19.1525 2V18C19.1525 19.1046 18.2951 20 17.2373 20H1.91525C0.857488 20 0 19.1046 0 18V2C0 0.89543 0.857488 0 1.91525 0ZM1.91525 2V18H17.2373V2H1.91525ZM8.74606 10.0044H10.5339V16H12.4492V10.0044H14.3476V8.00439H12.4492V7C12.4492 6.44772 12.8779 6 13.4068 6H14.3644V4H13.4068C11.8201 4 10.5339 5.34315 10.5339 7V8.00439H8.74606V10.0044Z",
                          fill: "#323A4D",
                        }),
                      }),
                      "Facebook",
                    ],
                  }),
                  (0, P.jsxs)("button", {
                    className: Ca,
                    onClick: function () {
                      window.gapi.auth2.authorize(
                        {
                          client_id:
                            "675092682139-p0u42avqdlf3e73atg30fh4k9ddpgels.apps.googleusercontent.com",
                          scope: "email profile openid",
                          response_type: "id_token permission",
                        },
                        function (e) {
                          e.error
                            ? console.error(e)
                            : S({ google_id_token: e.id_token });
                        }
                      );
                    },
                    style: { height: 48 },
                    children: [
                      (0, P.jsx)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, P.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M10.5339 11V9H19.1525V10C19.1525 15.5228 14.8651 20 9.57627 20C4.28744 20 0 15.5228 0 10C0 4.47715 4.28744 0 9.57627 0C12.5257 0 15.2562 1.4025 17.0618 3.76259L15.5654 5.01093C14.1195 3.12095 11.9371 2 9.57627 2C5.34521 2 1.91525 5.58172 1.91525 10C1.91525 14.4183 5.34521 18 9.57627 18C13.483 18 16.7068 14.9463 17.178 11H10.5339Z",
                          fill: "#323A4D",
                        }),
                      }),
                      "Google",
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)("div", {
                className: Ea,
                children: [
                  (0, P.jsx)("div", { className: Pa }),
                  (0, P.jsx)("div", { className: Ma, children: "OR" }),
                  (0, P.jsx)("div", { className: Pa }),
                ],
              }),
              (0, P.jsxs)("form", {
                noValidate: !0,
                name: "login",
                autoComplete: "on",
                onSubmit: function (e) {
                  e.preventDefault(), S({ email: _.value, password: b.value });
                },
                children: [
                  c &&
                    (0, P.jsx)("div", {
                      className: "error text-center m-b-2 pls-red",
                      dangerouslySetInnerHTML: { __html: c },
                    }),
                  (0, P.jsxs)("label", {
                    className:
                      "pls-wet-cement m-b-0 pls-font-opensans pls-font-12",
                    children: [
                      "Email",
                      (0, P.jsx)("input", {
                        name: "email",
                        type: "email",
                        value: _.value,
                        onChange: x,
                        onBlur: k,
                        className: zr.plsInputLight,
                        placeholder: "Enter your Email",
                        autoFocus: !0,
                        required: !0,
                        style: { height: 48 },
                      }),
                    ],
                  }),
                  (0, P.jsxs)("div", {
                    className: Aa,
                    children: [
                      "\xa0",
                      (_.touched || f) && _.error && "Email is required",
                    ],
                  }),
                  (0, P.jsxs)("label", {
                    className:
                      "pls-wet-cement m-b-0 pls-font-opensans pls-font-12",
                    children: [
                      "Password",
                      (0, P.jsx)("input", {
                        name: "password",
                        type: "password",
                        value: b.value,
                        onChange: x,
                        onBlur: k,
                        className: zr.plsInputLight,
                        placeholder: "Enter your Password",
                        required: !0,
                        style: { height: 48 },
                      }),
                    ],
                  }),
                  (0, P.jsxs)("div", {
                    className: Aa,
                    children: [
                      "\xa0",
                      (b.touched || f) && b.error && "Password is required",
                    ],
                  }),
                  (0, P.jsx)("a", {
                    className: "".concat(zr.link, " ").concat(Ta),
                    target: "_blank",
                    href: "/login/reset-password",
                    children: (0, P.jsx)("small", {
                      children: (0, P.jsx)("u", {
                        children: "Forgot password?",
                      }),
                    }),
                  }),
                  (0, P.jsxs)("button", {
                    className: ya,
                    style: { height: 48 },
                    "ng-disabled":
                      "(login.$dirty && login.$invalid) || (loading && loadingMode == 'login-picmonic')",
                    children: [
                      !h && (0, P.jsx)("span", { children: "LOG IN" }),
                      h && (0, P.jsx)("span", { children: "Loading..." }),
                    ],
                  }),
                  (0, P.jsxs)("small", {
                    children: [
                      "Don't have an account? ",
                      (0, P.jsx)("strong", {
                        onClick: function () {
                          return n(_.value);
                        },
                        className: zr.pointer,
                        children: (0, P.jsx)("u", { children: "Sign Up" }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ra = function (t) {
          var n = t.toggleTab,
            r = t.onLogin,
            a = t.initialEmail,
            i = o((0, e.useState)(!1), 2),
            s = i[0],
            l = (i[1], o((0, e.useState)(!1), 2)),
            c = (l[0], l[1]),
            u = o((0, e.useState)(!1), 2),
            d = u[0],
            f = (u[1], o((0, e.useState)(!1), 2)),
            m = f[0],
            h = (f[1], o((0, e.useState)("Student"), 2)),
            g = h[0],
            _ = h[1],
            y = o((0, e.useState)(1), 2),
            v = y[0],
            b = y[1],
            w = o(
              (0, e.useState)({ value: a || "", touched: !1, error: !!a }),
              2
            ),
            x = w[0],
            k = w[1],
            S = o((0, e.useState)({ value: "", touched: !1, error: !0 }), 2),
            C = S[0],
            j = S[1],
            A = o((0, e.useState)({ value: "", touched: !1, error: !0 }), 2),
            N = A[0],
            M = A[1],
            E = { email: k, password: M, name: j },
            T = function (e) {
              var t = e.target,
                n = t.name,
                r = t.value;
              E[n](function (e) {
                return p(p({}, e), {}, { value: r, error: !r.length });
              });
            },
            z = function (e) {
              E[e.target.name](function (e) {
                return p(p({}, e), {}, { touched: !0 });
              });
            },
            L = function (e) {
              var t = e.email;
              e.name;
              fetch(
                "/api/v2/user",
                p(
                  p({}, xt),
                  {},
                  { method: "PUT", body: JSON.stringify({ email: t }) }
                )
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  e.message
                    ? c(e.message)
                    : (b(2), zn("click", "wk_onboarding - final - register"));
                });
            };
          return (0, P.jsxs)("div", {
            className: wa,
            children: [
              (0, P.jsx)("h1", {
                className: xa,
                children:
                  1 === v ? "Create your Account" : "Complete your profile",
              }),
              1 === v &&
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)("p", {
                      className: ka,
                      children:
                        "Sign up with your social media account or email address.",
                    }),
                    s &&
                      (0, P.jsx)("div", {
                        className: "error text-center m-b-2 pls-red",
                        dangerouslySetInnerHTML: { __html: s },
                      }),
                    (0, P.jsxs)("div", {
                      className: Sa,
                      children: [
                        (0, P.jsxs)("button", {
                          className: Ca,
                          onClick: function () {
                            window.FB.login(
                              function (e) {
                                "connected" === e.status
                                  ? window.FB.api(
                                      "/me?fields=name,email",
                                      function (e) {
                                        L({ email: e.email, name: e.name });
                                      }
                                    )
                                  : e.status;
                              },
                              { scope: "public_profile,email" }
                            );
                          },
                          children: [
                            (0, P.jsx)("svg", {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 20 20",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, P.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M1.91525 0H17.2373C18.2951 0 19.1525 0.89543 19.1525 2V18C19.1525 19.1046 18.2951 20 17.2373 20H1.91525C0.857488 20 0 19.1046 0 18V2C0 0.89543 0.857488 0 1.91525 0ZM1.91525 2V18H17.2373V2H1.91525ZM8.74606 10.0044H10.5339V16H12.4492V10.0044H14.3476V8.00439H12.4492V7C12.4492 6.44772 12.8779 6 13.4068 6H14.3644V4H13.4068C11.8201 4 10.5339 5.34315 10.5339 7V8.00439H8.74606V10.0044Z",
                                fill: "#323A4D",
                              }),
                            }),
                            "Facebook",
                          ],
                        }),
                        (0, P.jsxs)("button", {
                          className: Ca,
                          onClick: function () {
                            window.gapi.auth2.authorize(
                              {
                                client_id:
                                  "675092682139-p0u42avqdlf3e73atg30fh4k9ddpgels.apps.googleusercontent.com",
                                scope: "email profile openid",
                                response_type: "id_token permission",
                              },
                              function (e) {
                                if (e.error) console.error(e);
                                else {
                                  var t = JSON.parse(
                                      atob(e.id_token.split(".")[1])
                                    ),
                                    n = t.email,
                                    r = t.name;
                                  L({ email: n, name: r });
                                }
                              }
                            );
                          },
                          children: [
                            (0, P.jsx)("svg", {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 20 20",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, P.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M10.5339 11V9H19.1525V10C19.1525 15.5228 14.8651 20 9.57627 20C4.28744 20 0 15.5228 0 10C0 4.47715 4.28744 0 9.57627 0C12.5257 0 15.2562 1.4025 17.0618 3.76259L15.5654 5.01093C14.1195 3.12095 11.9371 2 9.57627 2C5.34521 2 1.91525 5.58172 1.91525 10C1.91525 14.4183 5.34521 18 9.57627 18C13.483 18 16.7068 14.9463 17.178 11H10.5339Z",
                                fill: "#323A4D",
                              }),
                            }),
                            "Google",
                          ],
                        }),
                      ],
                    }),
                    (0, P.jsxs)("div", {
                      className: Na,
                      children: [
                        (0, P.jsx)("div", { className: Pa }),
                        (0, P.jsx)("div", { className: Ma, children: "OR" }),
                        (0, P.jsx)("div", { className: Pa }),
                      ],
                    }),
                    (0, P.jsxs)("form", {
                      noValidate: !0,
                      name: "login",
                      autoComplete: "on",
                      onSubmit: function (e) {
                        e.preventDefault(),
                          x.value &&
                            (-1 !== x.value.indexOf("@")
                              ? L({ email: x.value })
                              : k(function (e) {
                                  return p(p({}, e), {}, { error: !0 });
                                }));
                      },
                      children: [
                        (0, P.jsxs)("label", {
                          className:
                            "pls-wet-cement m-b-0 pls-font-opensans pls-font-12",
                          children: [
                            "Email",
                            (0, P.jsx)("input", {
                              name: "email",
                              type: "email",
                              value: x.value,
                              onChange: T,
                              onBlur: z,
                              className: zr.plsInputLight,
                              placeholder: "Enter your Email",
                              autoFocus: !0,
                              required: !0,
                            }),
                          ],
                        }),
                        (0, P.jsxs)("div", {
                          className: Aa,
                          children: [
                            "\xa0",
                            (x.touched || d) && x.error && "Email is required",
                          ],
                        }),
                        (0, P.jsxs)("button", {
                          type: "submit",
                          className: ya,
                          "ng-disabled":
                            "(login.$dirty && login.$invalid) || (loading && loadingMode == 'login-picmonic')",
                          children: [
                            !m &&
                              (0, P.jsx)("span", {
                                children: "agree and sign up",
                              }),
                            m && (0, P.jsx)("span", { children: "Saving..." }),
                          ],
                        }),
                        (0, P.jsxs)("div", {
                          className: ba,
                          children: [
                            'By clicking "Agree and Sign Up" you are agreeing to Picmonic\'s',
                            (0, P.jsx)("br", {}),
                            " ",
                            (0, P.jsx)("a", {
                              className: zr.link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              href: "/pages/terms-of-use/",
                              children: "Terms of Use",
                            }),
                            ", ",
                            (0, P.jsx)("a", {
                              className: ra,
                              target: "_blank",
                              href: "/pages/privacy-policy/",
                              children: "Privacy Policy",
                            }),
                            ", and ",
                            (0, P.jsx)("a", {
                              className: ra,
                              target: "_blank",
                              href: "/pages/services-agreement/",
                              children: "Services Agreement",
                            }),
                            ".",
                          ],
                        }),
                        (0, P.jsxs)("small", {
                          children: [
                            "Alread have an account? ",
                            (0, P.jsx)("strong", {
                              onClick: function () {
                                return n(x.value);
                              },
                              className: zr.pointer,
                              children: (0, P.jsx)("u", { children: "Log in" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              2 === v &&
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)("p", { className: ka, children: " " }),
                    (0, P.jsxs)("form", {
                      noValidate: !0,
                      name: "login",
                      autoComplete: "on",
                      onSubmit: function (e) {
                        e.preventDefault();
                        var t = fetch(
                            "/api/v3/user/set_password",
                            p(
                              p({}, xt),
                              {},
                              {
                                method: "PUT",
                                body: JSON.stringify({ password: N.value }),
                              }
                            )
                          ).then(function (e) {
                            return e.json();
                          }),
                          n = o(C.value.split(" "), 2),
                          a = n[0],
                          i = n[1],
                          s = fetch(
                            "/api/v2/user",
                            p(
                              p({}, xt),
                              {},
                              {
                                method: "PUT",
                                body: JSON.stringify({
                                  first_name: a,
                                  last_name: i || "",
                                  is_wk: 1,
                                }),
                              }
                            )
                          ).then(function (e) {
                            return e.json();
                          });
                        Promise.all([t, s]).then(function (e) {
                          var t = o(e, 2),
                            n = (t[0], t[1]);
                          r(n);
                        });
                      },
                      children: [
                        (0, P.jsxs)("label", {
                          className:
                            "pls-wet-cement m-b-0 pls-font-opensans pls-font-12",
                          children: [
                            "Name",
                            (0, P.jsx)("input", {
                              name: "name",
                              type: "text",
                              value: C.value,
                              onChange: T,
                              onBlur: z,
                              className: zr.plsInputLight,
                              placeholder: "Enter your Full Name",
                              autoFocus: !0,
                              required: !0,
                            }),
                          ],
                        }),
                        (0, P.jsxs)("div", {
                          className: Aa,
                          children: [
                            "\xa0",
                            (C.touched || d) && C.error && "Name is required",
                          ],
                        }),
                        (0, P.jsxs)("label", {
                          className:
                            "pls-wet-cement m-b-0 pls-font-opensans pls-font-12",
                          children: [
                            "Password (Minimum of 6 characters)",
                            (0, P.jsx)("input", {
                              name: "password",
                              type: "password",
                              value: N.value,
                              onChange: T,
                              onBlur: z,
                              className: zr.plsInputLight,
                              placeholder: "Enter your Password",
                              required: !0,
                            }),
                          ],
                        }),
                        (0, P.jsxs)("div", {
                          className: Aa,
                          children: [
                            "\xa0",
                            (N.touched || d) &&
                              N.error &&
                              "Password is required",
                          ],
                        }),
                        (0, P.jsxs)("label", {
                          className:
                            "pls-wet-cement m-b-0 pls-font-opensans pls-font-12",
                          children: [
                            "I am a",
                            (0, P.jsxs)("div", {
                              className: Sa,
                              style: { marginTop: 8, marginBottom: 32 },
                              children: [
                                (0, P.jsx)("button", {
                                  type: "button",
                                  className: ""
                                    .concat(Ca, " ")
                                    .concat("Student" === g && ja),
                                  onClick: function () {
                                    return _("Student");
                                  },
                                  children: "Student",
                                }),
                                (0, P.jsx)("button", {
                                  type: "button",
                                  className: ""
                                    .concat(Ca, " ")
                                    .concat("Student" !== g && ja),
                                  onClick: function () {
                                    return _("Professor");
                                  },
                                  children: "Educator",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)("button", {
                          type: "submit",
                          className: ya,
                          "ng-disabled":
                            "(login.$dirty && login.$invalid) || (loading && loadingMode == 'login-picmonic')",
                          children: [
                            !m && (0, P.jsx)("span", { children: "complete" }),
                            m && (0, P.jsx)("span", { children: "Saving..." }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        Ba = function (t) {
          var n = t.onClickAgree,
            r = o((0, e.useState)(0), 2),
            a = r[0],
            i = r[1],
            s = o((0, e.useState)(""), 2),
            l = s[0],
            c = s[1],
            u = o((0, e.useState)("initial"), 2),
            d = u[0],
            f = u[1],
            m = (0, e.useRef)(),
            h = Fa[a];
          (0, e.useEffect)(function () {
            var e, t;
            null === (e = m.current) || void 0 === e || e.focus(),
              null === (t = m.current) ||
                void 0 === t ||
                t.addEventListener("keyup", function (e) {
                  return e.stopPropagation();
                });
          }, []),
            (0, e.useEffect)(function () {
              var e = setInterval(function () {
                return i(function (e) {
                  return ++e % Fa.length;
                });
              }, 1750);
              return function () {
                return clearInterval(e);
              };
            }, []),
            (0, e.useEffect)(function () {
              window.init = function () {
                window.gapi.load("auth2");
              };
              var e = document.createElement("script");
              (e.src = "https://apis.google.com/js/platform.js?onload=init"),
                (e.async = !0),
                (e.defer = !0),
                document.body.appendChild(e),
                (window.fbAsyncInit = function () {
                  window.FB.init({
                    appId: "491312997564602",
                    status: !0,
                    cookie: !0,
                    xfbml: !0,
                    version: "v2.9",
                  });
                }),
                (function (e, t, n) {
                  var r,
                    a = e.getElementsByTagName(t)[0];
                  e.getElementById(n) ||
                    (((r = e.createElement(t)).id = n),
                    (r.src = "https://connect.facebook.net/en_US/sdk.js"),
                    a.parentNode.insertBefore(r, a));
                })(document, "script", "facebook-jssdk");
            }, []);
          var g = function (e) {
            f(function (e) {
              return "reg" === e ? "login" : "reg";
            }),
              c(e),
              zn(
                "click",
                "wk_onboarding - toggleTab - ".concat(
                  "reg" === d ? "login" : "reg"
                )
              );
          };
          return (0, P.jsx)("div", {
            className: na,
            children: (0, P.jsxs)("div", {
              className: aa,
              children: [
                (0, P.jsxs)("div", {
                  className: ia,
                  children: [
                    (0, P.jsx)("img", { src: La, width: "120" }),
                    (0, P.jsx)("p", {
                      className: oa,
                      children:
                        "Video-Quiz Lessons proven to increase exam scores",
                    }),
                    (0, P.jsxs)("p", {
                      className: la,
                      children: [
                        "Up to *200 included free in CoursePoint.",
                        (0, P.jsx)("br", {}),
                        "This Picmonic is included for free in CoursePoint.",
                      ],
                    }),
                    (0, P.jsx)("div", {
                      className: ca,
                      children: (0, P.jsxs)("div", {
                        className: ua,
                        children: [
                          (0, P.jsx)(L, {
                            icon: h.icon,
                            size: 35,
                            color: "#FFAC70",
                            className: da,
                          }),
                          h.text,
                        ],
                      }),
                    }),
                    (0, P.jsx)("div", {
                      className: pa,
                      children: Fa.map(function (e, t) {
                        return (0, P.jsx)(
                          "div",
                          {
                            className: t === a ? ma : fa,
                            onClick: function () {
                              return i(t);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
                (0, P.jsxs)("div", {
                  className: ha,
                  children: [
                    "initial" === d &&
                      (0, P.jsxs)(P.Fragment, {
                        children: [
                          (0, P.jsx)("h1", {
                            className: sa,
                            children: "Join Picmonic for Free!",
                          }),
                          (0, P.jsx)("p", {
                            className: la,
                            children:
                              "Unlock daily content. No credit card required.",
                          }),
                          (0, P.jsx)("button", {
                            className: ga,
                            ref: m,
                            onClick: function () {
                              f("reg"),
                                zn("click", "wk_onboarding - step2 - register");
                            },
                            children: "GET STARTED",
                          }),
                          (0, P.jsx)("button", {
                            className: _a,
                            ref: m,
                            onClick: function () {
                              f("login"),
                                zn("click", "wk_onboarding - step1 - login");
                            },
                            children: "LOG IN",
                          }),
                          (0, P.jsx)("button", {
                            className: va,
                            onClick: function (e) {
                              e.preventDefault(),
                                fetch(
                                  "/api/v3/user/set_password",
                                  p(
                                    p({}, xt),
                                    {},
                                    {
                                      method: "PUT",
                                      body: JSON.stringify({
                                        password: "picmonic" + Date.now(),
                                      }),
                                    }
                                  )
                                ).then(function () {
                                  return n();
                                }),
                                zn("click", "wk_onboarding - step2 - guest"),
                                zn("click", "wk_onboarding - final - guest");
                            },
                            children: "Continue as Guest",
                          }),
                          (0, P.jsxs)("div", {
                            className: ba,
                            children: [
                              "By clicking Continue as Guest you are agreeing to Picmonic's",
                              (0, P.jsx)("br", {}),
                              " ",
                              (0, P.jsx)("a", {
                                className: ra,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "/pages/terms-of-use/",
                                children: "Terms of Use",
                              }),
                              ", ",
                              (0, P.jsx)("a", {
                                className: ra,
                                target: "_blank",
                                href: "/pages/privacy-policy/",
                                children: "Privacy Policy",
                              }),
                              ", and ",
                              (0, P.jsx)("a", {
                                className: ra,
                                target: "_blank",
                                href: "/pages/services-agreement/",
                                children: "Services Agreement",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                    "login" === d &&
                      (0, P.jsx)(Oa, {
                        onLogin: n,
                        toggleTab: g,
                        initialEmail: l,
                      }),
                    "reg" === d &&
                      (0, P.jsx)(Ra, {
                        onLogin: n,
                        toggleTab: g,
                        initialEmail: l,
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        Ia = n.p + "static/media/preso-eye.a87c68de581ad9e52f9f.png",
        qa = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            return g(this, n), t.apply(this, arguments);
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("div", {
                    className: Fr,
                    children: (0, P.jsxs)("div", {
                      className: Hr,
                      children: [
                        (0, P.jsx)("img", { src: Ia, width: "100" }),
                        (0, P.jsxs)("p", {
                          className: Wr,
                          children: [
                            "We're glad you're enjoying",
                            (0, P.jsx)("br", {}),
                            " Picmonic videos!",
                          ],
                        }),
                        (0, P.jsxs)("p", {
                          className: Vr,
                          children: [
                            "Create your ",
                            (0, P.jsx)("strong", {
                              children: "free Picmonic account",
                            }),
                            " to continue watching this video and access tons of other high-yield content and features.",
                          ],
                        }),
                        (0, P.jsx)("button", {
                          onClick: window.openReg,
                          className: Kr,
                          children: "Create Free Account",
                        }),
                        (0, P.jsxs)("small", {
                          children: [
                            "Already have an account? ",
                            (0, P.jsx)("strong", {
                              onClick: window.openLogin,
                              className: Yr,
                              children: (0, P.jsx)("u", { children: "Login" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Da = qa,
        Qa = (function (e) {
          b(n, e);
          var t = k(n);
          function n() {
            return g(this, n), t.apply(this, arguments);
          }
          return (
            y(n, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("div", {
                    className: Fr,
                    children: (0, P.jsx)("div", {
                      className: $r,
                      children: (0, P.jsx)(Ct, { user: this.props.user }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(e.PureComponent),
        Ua = Qa,
        Ha = (function (t) {
          b(r, t);
          var n = k(r);
          function r(t) {
            var a;
            return (
              g(this, r),
              ((a = n.call(this, t)).componentDidMount = function () {
                a.buttonRef.current.focus();
              }),
              (a.buttonRef = e.createRef()),
              a
            );
          }
          return (
            y(r, [
              {
                key: "render",
                value: function () {
                  return (0, P.jsx)("div", {
                    className: Fr,
                    onClick: this.props.onClick,
                    style: { cursor: "pointer" },
                    children: (0, P.jsx)("button", {
                      className: Ur,
                      ref: this.buttonRef,
                      onClick: this.props.onClick,
                      "aria-label": "Play",
                      children: (0, P.jsx)(L, {
                        icon: "play_circle_filled",
                        size: 100,
                        color: "#000",
                      }),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(e.PureComponent),
        Wa = Ha,
        Va = {
          header: "Header_header__Yj1GC",
          logo: "Header_logo__4uuc4",
          save: "Header_save__Wna7T",
          lessonDD: "Header_lessonDD__a5cpf",
          progress: "Header_progress__yQfLV",
          menu: "Header_menu__eyLGg",
          time: "Header_time__izl3-",
          scroller: "Header_scroller__AjxMH",
          table: "Header_table__Vlosn",
          item: "Header_item__cA8Dq",
          check: "Header_check__J3nQ-",
          number: "Header_number__hJPuz",
          picName: "Header_picName__h90V1",
          completed: "Header_completed__YCp0W",
          current: "Header_current__sK4HX",
        };
      var Ka =
        n.p +
        "static/media/logo-default-white.a90717c9d071f040587fc21bff2cce9d.svg";
      function Ya(t) {
        var n = t.lesson,
          r = t.setResource,
          a = t.currentId,
          i = t.showSave,
          s = o((0, e.useState)(!1), 2),
          l = s[0],
          c = s[1],
          u = n.cards.filter(function (e) {
            return e.completed;
          }).length,
          d = n.cards.length,
          p = Math.round(
            (n.cards.reduce(function (e, t) {
              return e - 15 * t.num_correct + (t.started ? 0 : t.audio_length);
            }, 0) +
              15 * (n.total_facts - n.retryAttempts.correct)) /
              60
          );
        return (
          (0, e.useEffect)(function () {
            function e() {
              c(!1);
            }
            return (
              window.document.body.addEventListener("click", e),
              function () {
                return window.document.body.removeEventListener("click", e);
              }
            );
          }, []),
          (0, P.jsxs)("div", {
            className: Va.header,
            children: [
              (0, P.jsx)("img", {
                className: Va.logo,
                src: Ka,
                alt: "Picmonic",
              }),
              i &&
                (0, P.jsx)("button", {
                  onClick: function () {
                    return r(!1);
                  },
                  className: Va.save,
                  children: "SAVE & EXIT",
                }),
              (0, P.jsxs)("div", {
                className: Va.lessonDD,
                onClick: function (e) {
                  return (
                    e.stopPropagation() ||
                    c(function (e) {
                      return !e;
                    })
                  );
                },
                onKeyDown: function (e) {
                  return (
                    ("Enter" === e.key || " " === e.key) &&
                    c(function (e) {
                      return !e;
                    })
                  );
                },
                tabIndex: "0",
                role: "button",
                id: "dropdown-button",
                "aria-controls": l ? "dropdown-menu" : void 0,
                "aria-haspopup": "true",
                "aria-expanded": l ? "true" : void 0,
                children: [
                  "Lessons\xa0",
                  (0, P.jsx)(L, {
                    icon: l ? "keyboard_arrow_up" : "keyboard_arrow_down",
                  }),
                  (0, P.jsx)("div", {
                    className: Va.progress,
                    style: { width: "".concat((u / d) * 100, "%") },
                  }),
                  l &&
                    (0, P.jsxs)("div", {
                      className: Va.menu,
                      id: "dropdown-menu",
                      "aria-labelledby": "dropdown-button",
                      children: [
                        (0, P.jsxs)("div", {
                          children: [
                            "Lessons completed: ",
                            (0, P.jsx)("strong", { children: u }),
                            " of",
                            " ",
                            (0, P.jsx)("strong", { children: d }),
                          ],
                        }),
                        (0, P.jsxs)("div", {
                          className: Va.time,
                          children: [
                            (0, P.jsx)(L, {
                              icon: "query_builder",
                              size: 16,
                              style: { verticalAlign: "middle" },
                            }),
                            " ",
                            (0, P.jsxs)("strong", { children: [p, " min"] }),
                            " left",
                          ],
                        }),
                        (0, P.jsx)("div", {
                          className: Va.scroller,
                          children: (0, P.jsx)("table", {
                            className: Va.table,
                            children: (0, P.jsx)("tbody", {
                              children: n.cards.map(function (e, t) {
                                return (0, P.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      Va.item +
                                      " " +
                                      Va[
                                        e.completed
                                          ? "completed"
                                          : e.card_id === a
                                          ? "current"
                                          : "incomplete"
                                      ],
                                    onClick: e.completed
                                      ? void 0
                                      : function () {
                                          return r({
                                            type: "picmonic",
                                            id: e.card_id,
                                          });
                                        },
                                    onKeyDown: function (t) {
                                      return (
                                        ("Enter" === t.key || " " === t.key) &&
                                        !e.completed &&
                                        r({ type: "picmonic", id: e.card_id })
                                      );
                                    },
                                    tabIndex: "0",
                                    children: [
                                      (0, P.jsx)("td", {
                                        children: (0, P.jsx)(L, {
                                          icon: e.completed ? "done" : "",
                                          size: 12,
                                          color: "#33C5FF",
                                          className: Va.check,
                                        }),
                                      }),
                                      (0, P.jsxs)("td", {
                                        className: Va.number,
                                        children: [t + 1, ". "],
                                      }),
                                      (0, P.jsx)("td", {
                                        dangerouslySetInnerHTML: {
                                          __html: e.display_name,
                                        },
                                        className: Va.picName,
                                      }),
                                    ],
                                  },
                                  e.card_id
                                );
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      }
      var Ga = {
          header: "PlayerQuiz_header__5AU3K",
          player: "PlayerQuiz_player__ATzXp",
          flex: "PlayerQuiz_flex__CjtKZ",
          quizSideBar: "PlayerQuiz_quizSideBar__HgOEg",
          quizSideBarClosed:
            "PlayerQuiz_quizSideBarClosed__fWTDG PlayerQuiz_quizSideBar__HgOEg",
          quizSideBarAnswer:
            "PlayerQuiz_quizSideBarAnswer__-Vt-B PlayerQuiz_quizSideBar__HgOEg",
          quizSideBarWrapper: "PlayerQuiz_quizSideBarWrapper__E+PrD",
          next: "PlayerQuiz_next__jKvxK",
        },
        Xa = (function (t) {
          b(r, t);
          var n = k(r);
          function r() {
            var t;
            g(this, r);
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
              i[s] = arguments[s];
            return (
              ((t = n.call.apply(n, [this].concat(i))).state = {
                state: "learn",
                playEnabled: !0,
                questionNumber: 0,
                numCorrect: 0,
                loading: !0,
                showHint: !1,
                showTOS: !1,
                autoPlay: !1,
                user: window.user,
                quizComplete: !1,
                videoPlayed: !1,
              }),
              (t.picmonics = {}),
              (t.completedQuestions = []),
              (t.sidebar = e.createRef()),
              (t.player = e.createRef()),
              (t.componentDidMount = function () {
                if (
                  !window.user.user_id &&
                  !window.preview &&
                  -1 === [8225, 8259, 2034].indexOf(t.props.card_id)
                )
                  return (
                    window.rg4js &&
                      window.rg4js("send", {
                        error: new Error("redirecting"),
                        customData: [{ user: window.user, props: t.props }],
                      }),
                    void (window.location = "/learn/".concat(t.props.card_id))
                  );
                if (
                  (window.preview &&
                    ((window.user.lti = { no_auto_play: !0 }),
                    (window.top.playLite = t._onClickPlay)),
                  t.props.card_id || "picmonic" === t.props.resource_type)
                ) {
                  var e = t.props.card_id || t.props.resource_id;
                  (t.picmonics[e] = fetch(slide_data)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      return (
                        (e.facts = e.facts.sort(function (e, t) {
                          return t.entity_id === e.entity_id
                            ? e.order - t.order
                            : e.entity_id - t.entity_id;
                        })),
                        e.facts
                          .filter(function (e) {
                            return !e.header;
                          })
                          .map(function (t, n) {
                            return (t.display_order = n), (t.card = e), t;
                          }),
                        e.lastviewed &&
                          (e.facts.filter(function (e) {
                            return e.is_primary;
                          })[0].learned_flag = 1),
                        (t.allQuizFacts = e.facts
                          .filter(function (e) {
                            return !e.is_primary && !e.header;
                          })
                          .sort(function () {
                            return 0.5 - Math.random();
                          })),
                        (t.currentQuizFacts = t.allQuizFacts.slice()),
                        t.setState(
                          {
                            card: e,
                            totalQuestions: t.allQuizFacts.length,
                            questionNumber: 0,
                            loading: !1,
                          },
                          function () {
                            t.props.lessonCard && t.props.lessonCard.started
                              ? t._startQuiz()
                              : window.user.user_id && t._cacheNextQuestion();
                          }
                        ),
                        e
                      );
                    })),
                    zn(
                      "click",
                      "Land On Picmonic",
                      "user_flow_7_2017",
                      "required"
                    );
                }
                if (
                  (t.state.user.user_id && !t.state.user.tos_accepted
                    ? (zn("seen", "lti_tos_modal"), t.setState({ showTOS: !0 }))
                    : t.props.card_id || "picmonic" === t.props.resource_type
                    ? (t.setState(
                        window.user.lti && window.user.lti.no_auto_play
                          ? { autoPlay: !1, showPlayButton: !0 }
                          : { autoPlay: !0 }
                      ),
                      document.body.focus())
                    : t._startQuiz(),
                  window.gtag &&
                    t.state.user.user_id &&
                    window.gtag("set", { user_id: t.state.user.user_id }),
                  window.smartlook &&
                    t.state.user.user_id &&
                    window.smartlook(
                      "identify",
                      t.state.user.user_id,
                      t.state.user
                    ),
                  t.state.user.user_id && !t.state.user.is_trial)
                )
                  try {
                    window.ga &&
                      window.fbq &&
                      !localStorage.getItem("premium_user_event") &&
                      (window.ga("send", "event", "premium_user", null, "1"),
                      window.fbq("track", "Subscribe"),
                      localStorage.setItem("premium_user_event", "1"));
                  } catch (n) {
                    window.ga &&
                      window.fbq &&
                      (window.ga("send", "event", "premium_user", null, "1"),
                      window.fbq("track", "Subscribe"));
                  }
              }),
              (t._cacheNextQuestion = function () {
                if (t.currentQuizFacts.length) {
                  var e = t.currentQuizFacts.pop();
                  t.nextQuestion = t
                    ._fetchDistractorsForFact(e.fact_id)
                    .then(function (n) {
                      return (
                        n.push(e),
                        e.card ||
                          t.picmonics[e.card_id] ||
                          ((t.picmonics[e.card_id] = fetch(
                            "/api/v2/picmonics?setViewed=false&slug="
                              .concat(e.card_id)
                              .concat(
                                window.author_user_id
                                  ? "&author_id=" + window.author_user_id
                                  : ""
                              ),
                            xt
                          ).then(function (e) {
                            return e.json();
                          })),
                          t.picmonics[e.card_id].then(function (e) {
                            (e.facts = e.facts.sort(function (e, t) {
                              return t.entity_id === e.entity_id
                                ? e.order - t.order
                                : e.entity_id - t.entity_id;
                            })),
                              e.facts
                                .filter(function (e) {
                                  return !e.header;
                                })
                                .map(function (t, n) {
                                  return (t.display_order = n), (t.card = e), t;
                                });
                          }),
                          t.setState({ loading: !0 })),
                        t.picmonics[e.card_id].then(function (r) {
                          return (
                            t.setState({ loading: !1 }),
                            (e.card = r),
                            {
                              answer: e,
                              answers: n.sort(function () {
                                return 0.5 - Math.random();
                              }),
                              question: t._getFactQuestion(
                                e,
                                "multiple-choice"
                              ),
                            }
                          );
                        })
                      );
                    });
                } else t.nextQuestion = !1;
              }),
              (t._getFactQuestion = function (e, t) {
                if (!e.card) throw new Error("error");
                var n = "Which key fact is part of %TOPIC%?";
                return (
                  e.question_text ? (n = e.question_text) : e.classification_id,
                  n.replace(
                    "%TOPIC%",
                    "<strong>" + e.card.display_name + "</strong>"
                  )
                );
              }),
              (t._fetchDistractorsForFact = (function () {
                var e = h(
                  f().mark(function e(t) {
                    return f().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                fetch(
                                  distractors[t],
                                  xt
                                ).then(function (e) {
                                  return e.json();
                                })
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 6:
                              throw (
                                ((e.prev = 6),
                                (e.t0 = e.catch(0)),
                                "Error when fecthing distractors",
                                "Error when fecthing distractors")
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (t._startQuiz = h(
                f().mark(function e() {
                  var n;
                  return f().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), kt.init();
                        case 2:
                          if (
                            !window.user.is_trial ||
                            kt.values.quiz_questions ||
                            (t.state.card &&
                              (!t.state.card || t.state.card.is_free))
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (
                            t.setState({ showTrialBlock: !0 }),
                            e.abrupt("return")
                          );
                        case 5:
                          if (
                            ((t.quizStart = Math.round(Date.now() / 1e3)),
                            t.props.card_id ||
                              "picmonic" === t.props.resource_type)
                          ) {
                            e.next = 11;
                            break;
                          }
                          fetch(
                            "/api/v3/"
                              .concat(t.props.resource_type, "s/")
                              .concat(
                                t.props.resource_id,
                                "/questions?facts_only=1&questions="
                              )
                              .concat(t.props.questions)
                              .concat(
                                window.author_user_id
                                  ? "&author_id=" + window.author_user_id
                                  : ""
                              )
                              .concat(
                                t.props.lesson
                                  ? "&lti_lesson_id=" +
                                      t.props.lesson.lti_lesson_id
                                  : ""
                              ),
                            xt
                          )
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (e) {
                              (t.allQuizFacts = e.facts.sort(function () {
                                return 0.5 - Math.random();
                              })),
                                (t.currentQuizFacts = t.allQuizFacts.slice()),
                                (t.resource_name = e.resource.name),
                                t._cacheNextQuestion(),
                                t._nextQuestion();
                            }),
                            (t.quizRound = fetch(
                              "/api/v3/user/quizround",
                              p(
                                p({}, xt),
                                {},
                                {
                                  method: "POST",
                                  body: JSON.stringify({
                                    quiz_resource_id: t.props.resource_id,
                                    quiz_resource_type: t.props.resource_type,
                                    initial_time: 0,
                                    source_device: It(),
                                    playlist_id: null,
                                    track_id: null,
                                    filter_id: null,
                                    filter_type: null,
                                  }),
                                }
                              )
                            ).then(function (e) {
                              return e.json();
                            })),
                            (e.next = 22);
                          break;
                        case 11:
                          if (
                            !t.props.lessonCard ||
                            !t.props.lessonCard.started
                          ) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (e.next = 14),
                            fetch(
                              "/api/v3/lti_lessons/"
                                .concat(
                                  t.props.lesson.lti_lesson_id,
                                  "/picmonics/"
                                )
                                .concat(
                                  t.props.resource_id,
                                  "/questions_answered"
                                ),
                              xt
                            ).then(function (e) {
                              return e.json();
                            })
                          );
                        case 14:
                          (n = e.sent),
                            (t.allQuizFacts = t.allQuizFacts.filter(function (
                              e
                            ) {
                              return !n.includes(e.fact_id);
                            })),
                            (t.currentQuizFacts = t.allQuizFacts.slice()),
                            t._cacheNextQuestion();
                        case 18:
                          return (e.next = 20), t._nextQuestion();
                        case 20:
                          t.setState({
                            state: "quiz",
                            playEnabled: !1,
                            quizState: "question",
                          }),
                            (t.quizRound = fetch(
                              "data:application/json;base64,ewogICAgIm1vYmlsZV9mbGFnIjogMCwKICAgICJzdGFydGVkX2Zyb21fcHVzaF9ub3RpZmljYXRpb24iOiAwLAogICAgImhpbnRzX3VzZWQiOiAwLAogICAgInVzZXJfaWQiOiAxNzQ5MTgyLAogICAgInJlc291cmNlX2lkIjogIjE2NzIiLAogICAgInJlc291cmNlX3R5cGUiOiAicGljbW9uaWMiLAogICAgInN0YXJ0X3RpbWUiOiAxNjg1OTg1Njc0LAogICAgImluaXRpYWxfdGltZSI6IDAsCiAgICAic291cmNlX2RldmljZSI6ICJkZXNrdG9wIiwKICAgICJ0cmFja19pZCI6IG51bGwsCiAgICAicGxheWxpc3RfaWQiOiBudWxsLAogICAgImZpbHRlcl9pZCI6IG51bGwsCiAgICAiZmlsdGVyX3R5cGUiOiBudWxsLAogICAgInVwZGF0ZWRfYXQiOiAiMTY4NTk4NTY3NCIsCiAgICAiY3JlYXRlZF9hdCI6ICIxNjg1OTg1Njc0IiwKICAgICJ1c2VyX3F1aXpfcm91bmRfaWQiOiAyNjI5ODY2OQp9",
                              p(
                                p({}, xt),
                                {},
                                {
                                  method: "POST",
                                  body: JSON.stringify({
                                    quiz_resource_id: t.props.lesson
                                      ? t.props.lesson.lti_lesson_id
                                      : t.props.card_id || t.props.resource_id,
                                    quiz_resource_type: t.props.lesson
                                      ? "lti_lesson"
                                      : "picmonic",
                                    initial_time: 0,
                                    source_device: It(),
                                    playlist_id: null,
                                    track_id: null,
                                    filter_id: t.props.lesson
                                      ? t.props.resource_id
                                      : null,
                                    filter_type: t.props.lesson ? "card" : null,
                                  }),
                                }
                              )
                            ).then(function (e) {
                              return e.json();
                            }));
                        case 22:
                          document.addEventListener("keypress", t._onKeyPress),
                            zn("click", "Quiz Start", "user_flow_7_2017"),
                            zn("click", "Quiz Start", "new_user");
                        case 25:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (t._onKeyPress = function (e) {
                switch (e.key) {
                  case "Enter":
                    "answer" === t.state.quizState && t._onClickNextQuestion();
                    break;
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                  case "5":
                  case "6":
                    "question" === t.state.quizState &&
                      t.state.currentQuestion &&
                      t._onSelectAnswer(
                        t.state.currentQuestion.answers[parseInt(e.key, 10) - 1]
                      );
                }
              }),
              (t._nextQuestion = h(
                f().mark(function e() {
                  return f().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t.nextQuestion) {
                            e.next = 2;
                            break;
                          }
                          throw new Error("error");
                        case 2:
                          return (e.next = 4), t.nextQuestion;
                        case 4:
                          (t.question = e.sent),
                            (t.question.startTime = Math.round(
                              Date.now() / 1e3
                            )),
                            (t.question.picmonic = t.question.answer.card),
                            t.setState(
                              function (e) {
                                return {
                                  questionNumber: e.questionNumber + 1,
                                  currentQuestion: t.question,
                                  selectedAnswer: void 0,
                                  quizState: "question",
                                  playEnabled: !1,
                                  showHint: !1,
                                  card: t.question.picmonic,
                                  totalQuestions: t.allQuizFacts.length,
                                  state: "quiz",
                                  showQuizOutOfTokens: !1,
                                };
                              },
                              function () {
                                (t.loadingNextQuestion = !1),
                                  t._cacheNextQuestion();
                              }
                            );
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (t._onSelectAnswer = function (e) {
                if ("answer" === t.state.quizState || !t.state.currentQuestion)
                  return !1;
                var n =
                  e.fact_id === t.state.currentQuestion.answer.fact_id ? 1 : 0;
                (t.question.selectedAnswer = e),
                  (t.question.hintUsed = t.state.showHint),
                  (t.question.answerTime = Math.round(Date.now() / 1e3)),
                  (t.question.correct = n),
                  (t.question.answer.last_answer = n),
                  t.setState(
                    function (t) {
                      return {
                        numCorrect: t.numCorrect + n,
                        selectedAnswer: e,
                        quizState: "answer",
                      };
                    },
                    function () {
                      return (document.getElementById(
                        "correct-answer"
                      ).parentNode.parentNode.parentNode.scrollTop =
                        document.getElementById("correct-answer").offsetTop -
                        45);
                    }
                  );
              }),
              (t._onClickNextQuestion = h(
                f().mark(function e() {
                  var n;
                  return f().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (window.scrollTo(0, 0),
                            t.sidebar.current &&
                              (t.sidebar.current.scrollTop = 0),
                            !t.loadingNextQuestion)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return");
                        case 4:
                          if (
                            ((t.loadingNextQuestion = !0),
                            !t.state.currentQuestion)
                          ) {
                            e.next = 8;
                            break;
                          }
                          return (e.next = 8), t._saveFactAttempt();
                        case 8:
                          !1 === t.nextQuestion
                            ? t.props.lesson
                              ? ("picmonic" === t.props.resource_type
                                  ? (((n = t.props.lesson.cards.find(function (
                                      e
                                    ) {
                                      return e.card_id === t.props.resource_id;
                                    })).completed = 1),
                                    (n.started = 1),
                                    (n.num_attempts +=
                                      t.completedQuestions.length),
                                    (n.num_correct +=
                                      t.completedQuestions.filter(function (e) {
                                        return e.correct;
                                      }).length))
                                  : ((t.props.lesson.retryAttempts.attempts +=
                                      t.completedQuestions.length),
                                    (t.props.lesson.retryAttempts.correct +=
                                      t.completedQuestions.filter(function (e) {
                                        return e.correct;
                                      }).length)),
                                t._endQuiz(),
                                t.props.onNextCardInLesson())
                              : t._endQuiz()
                            : t._nextQuestion();
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (t._saveFactAttempt = function () {
                t.completedQuestions.push(t.question);
                var e = {
                  answer_time: t.question.answerTime,
                  end_time: Math.round(Date.now() / 1e3),
                  last_answer: t.question.correct ? 1 : 0,
                  last_answer_hint: t.question.hintUsed ? 1 : 0,
                  selected_fact_id: t.question.selectedAnswer.fact_id,
                  spaced_rep_factor: 1,
                  start_time: t.question.startTime,
                };
                return (
                  (t.question.endTime = e.end_time),
                  t.quizRound.then(function (n) {
                    return (
                      (e.quiz_round_id = n.user_quiz_round_id),
                      fetch(
                        "data:application/json;base64,ewogICAgInNwYWNlZF9yZXBfZmFjdG9yIjogMSwKICAgICJ0b3RhbF9xdWl6X3RpbWVfc3BlbnQiOiA4NTcsCiAgICAibGVhcm5lZF9mbGFnIjogMCwKICAgICJsZWFybmVkX2NvdW50IjogMCwKICAgICJsYXN0X2Fuc3dlcl9oaW50IjogMCwKICAgICJudW1faGludHMiOiAwLAogICAgImZhY3RfaWQiOiAiNDI0NzEiLAogICAgInVzZXJfaWQiOiAxNzQ5MTgyLAogICAgIm51bV9jb3JyZWN0IjogMCwKICAgICJsYXN0X2Fuc3dlciI6IDAsCiAgICAibGFzdF9xdWl6emVkX2F0IjogMTY4NTk4NjUzMiwKICAgICJudW1fYXR0ZW1wdHMiOiAxLAogICAgInNwYWNlZF9yZXBfYnVja2V0IjogMSwKICAgICJzcGFjZWRfcmVwX25leHRfdGltZSI6IDE2ODU5ODI5MzIsCiAgICAidXNlcl9mYWN0X3N0YXRfaWQiOiAzNjMwNjU0MjIsCiAgICAidXNlcl9mYWN0X2F0dGVtcHRfaWQiOiAxOTg2ODI4NjAKfQ==",
                        p(
                          p({}, xt),
                          {},
                          { method: "POST", body: JSON.stringify(e) }
                        )
                      )
                    );
                  })
                );
              }),
              (t._endQuiz = function () {
                var e, n, r;
                document.removeEventListener("keypress", t._onKeyPress),
                  (t.quizEnd = Math.round(Date.now() / 1e3)),
                  (t.hintsUsed = t.completedQuestions.filter(function (e) {
                    return e.hintUsed;
                  }).length),
                  t.setState({ quizState: "completed" }),
                  t.quizRound.then(function (e) {
                    (e.num_attempts = t.completedQuestions.length),
                      (e.num_correct = t.completedQuestions.filter(function (
                        e
                      ) {
                        return e.correct;
                      }).length),
                      (e.card_ids = Object.keys(t.picmonics)),
                      (e.hints_used = t.completedQuestions.filter(function (e) {
                        return e.hintUsed;
                      }).length),
                      fetch(
                        "/api/v3/user/quizround/".concat(e.user_quiz_round_id),
                        p(
                          p({}, xt),
                          {},
                          {
                            method: "PUT",
                            body: JSON.stringify(
                              p(
                                p({}, e),
                                {},
                                { lti_session_id: window.lti_session_id }
                              )
                            ),
                          }
                        )
                      );
                  }),
                  zn(
                    "quiz results overlay",
                    "overlay shown",
                    "user_flow_7_2017"
                  ),
                  zn(
                    "quiz results overlay",
                    "overlay shown",
                    "new_user",
                    "end"
                  ),
                  (e = "Quiz Results Overlay"),
                  (n = "Overlay Shown"),
                  (r = "Overlay Shown"),
                  window.ga &&
                    ((r = "undefined" !== typeof r ? r : n),
                    window.ga("send", n, {
                      hitType: "event",
                      event_value: n,
                      event_category: e,
                      event_label: r,
                    })),
                  console.log("GA send:event:" + e + ":" + n + ":" + r);
              }),
              (t._onclickPlayer = function (e) {
                if ("learn" === t.state) return !1;
                if (t.state.selectedAnswer || t.state.showHint) {
                  if (t.state.selectedAnswer && !t.state.playEnabled)
                    if (t.state.card.is_owned)
                      t.setState({ playEnabled: !0, videoPlayed: !0 });
                    else {
                      var n = e.target;
                      kt.init().then(function () {
                        kt.values.tokens
                          ? (t.setState({ playEnabled: !0 }, function () {
                              "material-icon " === n.className &&
                                t.player.current._togglePlaying();
                            }),
                            kt.redeem(t.state.card.card_id))
                          : t.setState({ showQuizOutOfTokens: !0 });
                      });
                    }
                } else t._showHint();
              }),
              (t._showHint = function () {
                window.user.lti.allow_quiz_hints &&
                  t.setState({ showHint: !0 });
              }),
              (t._getTotalLearned = function () {
                return t.allQuizFacts.reduce(function (e, t) {
                  return t.is_primary || t.header || !t.last_answer ? e : e + 1;
                }, 0);
              }),
              (t._onClickAgree = function (e) {
                zn("completed", "lti_tos_modal"),
                  e &&
                    ((xt.headers.Authorization = "Bearer " + e.web_api_key),
                    window.gtag && window.gtag("set", { user_id: e.user_id }),
                    window.smartlook &&
                      window.smartlook("identify", e.user_id, e)),
                  t.props.card_id || "picmonic" === t.props.resource_type
                    ? t.setState({
                        showTOS: !1,
                        autoPlay: !1,
                        user: e || t.state.user,
                      })
                    : (t.setState({ showTOS: !1, user: e || t.state.user }),
                      t._startQuiz()),
                  363 !== window.user.lti.lti_id &&
                    window.open(
                      4 === window.user.lti.lti_id
                        ? "https://www.picmonic.com/compare-coursepoint-and-picmonic?api_key=".concat(
                            (e || t.state.user).web_api_key
                          )
                        : "https://www.picmonic.com/lms-onboarding?api_key=".concat(
                            (e || t.state.user).web_api_key
                          )
                    );
              }),
              (t._onClickPlay = function () {
                t.setState({ showPlayButton: !1, autoPlay: !0 });
              }),
              (t._onChangeAudioSpeed = function (e) {
                t.setState({
                  user: p(p({}, t.state.user), {}, { audio_speed: e }),
                }),
                  t.state.user.user_id &&
                    fetch(
                      "/api/v2/user",
                      p(
                        p({}, xt),
                        {},
                        {
                          method: "PUT",
                          body: JSON.stringify({ audio_speed: e }),
                        }
                      )
                    );
              }),
              (t._onChangeFactBarPreference = function (e) {
                t.state.user.user_id &&
                  (t.setState({
                    user: p(p({}, t.state.user), {}, { facts_open: e }),
                  }),
                  fetch(
                    "/api/v2/user",
                    p(
                      p({}, xt),
                      {},
                      { method: "PUT", body: JSON.stringify({ facts_open: e }) }
                    )
                  ));
              }),
              (t._onAutoPlayFailure = function () {
                t.setState({ showPlayButton: !0, autoPlay: !1 }),
                  console.log("autoplay failed");
              }),
              (t._share = function () {
                window.navigator.clipboard
                  .writeText(
                    "https://www.picmonic.com/share/picmonic/".concat(
                      t.state.card.slug
                    )
                  )
                  .then(
                    function () {
                      alert("Url has been copied to clipboard");
                    },
                    function (e) {
                      console.error(e);
                    }
                  );
              }),
              (t._onPreviewEnded = function () {
                t.setState({ playEnabled: !1, showPreviewEnded: !0 });
              }),
              (t.componentWillUnmount = function () {
                document.removeEventListener("keypress", t._onKeyPress);
              }),
              t
            );
          }
          return (
            y(r, [
              {
                key: "render",
                value: function () {
                  var e;
                  return (0, P.jsxs)(P.Fragment, {
                    children: [
                      this.state.showTOS &&
                        (4 === window.user.lti.lti_id
                          ? (0, P.jsx)(Ba, { onClickAgree: this._onClickAgree })
                          : (0, P.jsx)(ta, {
                              onClickAgree: this._onClickAgree,
                              lti: window.user.lti,
                              user: this.state.user,
                            })),
                      this.state.showPlayButton &&
                        !(
                          null === (e = this.state.card) ||
                          void 0 === e ||
                          !e.is_owned
                        ) &&
                        (0, P.jsx)(Wa, { onClick: this._onClickPlay }),
                      this.state.showTrialBlock &&
                        (0, P.jsx)(Ua, { user: this.state.user }),
                      this.state.showPreviewEnded && (0, P.jsx)(Da, {}),
                      (0, P.jsxs)("div", {
                        className: [
                          Ga.player,
                          this.state.state,
                          this.state.quizState,
                        ].join(" "),
                        inert: this.state.showPlayButton ? "" : null,
                        children: [
                          this.props.lesson
                            ? (0, P.jsx)(Ya, {
                                showSave: !0,
                                lesson: this.props.lesson,
                                currentId: this.props.resource_id,
                                setResource: this.props.setResource,
                              })
                            : (0, P.jsxs)("div", {
                                className: Ga.header,
                                children: [
                                  (0, P.jsx)("a", {
                                    href: "https://www.picmonic.com".concat(
                                      101 === this.state.user.lead
                                        ? "/nursing/why-picmonic"
                                        : ""
                                    ),
                                    target: "_blank",
                                    children: (0, P.jsx)("img", {
                                      src: "https://cdn.picmonic.com/cloud_data/production/assets/img/picmonic-logo-dark.svg",
                                      alt: "Picmonic",
                                    }),
                                  }),
                                  !1,
                                  !this.state.loading &&
                                    "learn" === this.state.state &&
                                    -1 ===
                                      [8225, 8259, 2034].indexOf(
                                        this.props.card_id
                                      ) &&
                                    !this.props.playOnly &&
                                    (0, P.jsx)("button", {
                                      onClick: this._startQuiz,
                                      children: "Start Quiz",
                                    }),
                                ],
                              }),
                          (0, P.jsxs)("div", {
                            className: Ga.flex,
                            children: [
                              "completed" === this.state.quizState &&
                                (0, P.jsx)(Tr, {
                                  name:
                                    this.resource_name ||
                                    this.state.card.display_name,
                                  type: this.props.resource_type || "picmonic",
                                  id: this.state.card.card_id,
                                  numCorrect: this.state.numCorrect,
                                  totalQuestions: this.state.totalQuestions,
                                  learnedFacts: this._getTotalLearned(),
                                  totalFacts: this.state.totalQuestions,
                                  image: this.state.card.main_image,
                                  questions: this.completedQuestions,
                                  quizTime: this.quizEnd - this.quizStart,
                                  hintsUsed: this.hintsUsed,
                                  user: this.state.user,
                                  isFree:
                                    this.state.card && this.state.card.is_free,
                                }),
                              (0, P.jsx)("div", {
                                ref: this.sidebar,
                                className:
                                  "quiz" === this.state.state &&
                                  "completed" !== this.state.quizState
                                    ? "question" === this.state.quizState
                                      ? Ga.quizSideBar
                                      : Ga.quizSideBarAnswer
                                    : Ga.quizSideBarClosed,
                                children:
                                  this.state.card &&
                                  "quiz" === this.state.state &&
                                  this.state.currentQuestion &&
                                  "completed" !== this.state.quizState &&
                                  (0, P.jsxs)("div", {
                                    className: Ga.quizSideBarWrapper,
                                    children: [
                                      (0, P.jsx)(nn, {
                                        questionNumber:
                                          this.state.questionNumber,
                                        totalQuestions:
                                          this.state.totalQuestions,
                                        numCorrect: this.state.numCorrect,
                                        question:
                                          this.state.currentQuestion.question,
                                        correct:
                                          this.state.currentQuestion.answer ===
                                          this.state.selectedAnswer,
                                        answered: !!this.state.selectedAnswer,
                                      }),
                                      (0, P.jsx)(sn, {
                                        answer:
                                          this.state.currentQuestion.answer,
                                        answers:
                                          this.state.currentQuestion.answers,
                                        selectedAnswer:
                                          this.state.selectedAnswer,
                                        onSelectAnswer: this._onSelectAnswer,
                                        onNextQuestion:
                                          this._onClickNextQuestion,
                                        lastQuestion:
                                          this.state.questionNumber ===
                                          this.state.totalQuestions,
                                        onClickShowHint: this._showHint,
                                        showHint: this.state.showHint,
                                      }),
                                    ],
                                  }),
                              }),
                              !!this.state.selectedAnswer &&
                                "completed" !== this.state.quizState &&
                                (0, P.jsx)("div", {
                                  className: Ga.next,
                                  children: (0, P.jsx)("button", {
                                    onClick: this._onClickNextQuestion,
                                    children:
                                      this.state.questionNumber ===
                                      this.state.totalQuestions
                                        ? this.props.lesson &&
                                          this.props.lesson.cards.filter(
                                            function (e) {
                                              return !e.completed;
                                            }
                                          ).length > 1
                                          ? "NEXT PICMONIC"
                                          : "SEE RESULTS"
                                        : "NEXT QUESTION",
                                  }),
                                }),
                              this.state.card &&
                                "completed" !== this.state.quizState &&
                                (0, P.jsx)(Dt, {
                                  ref: this.player,
                                  picmonic: this.state.card,
                                  settings: {},
                                  quizMode: "quiz" === this.state.state,
                                  quizState: this.state.selectedAnswer
                                    ? "answer"
                                    : "question",
                                  enablePlay:
                                    this.state.playEnabled &&
                                    !this.state.showTOS,
                                  quizFact:
                                    this.state.currentQuestion &&
                                    this.state.currentQuestion.answer,
                                  showHint: this.state.showHint,
                                  onClickPlayer: this._onclickPlayer,
                                  onClickQuiz: this._startQuiz,
                                  autoPlay: this.state.autoPlay,
                                  audioSpeed: this.state.user.audio_speed || 1,
                                  onChangeAudioSpeed: this._onChangeAudioSpeed,
                                  onAutoPlayFailure: this._onAutoPlayFailure,
                                  factBarPreference: this.state.user.facts_open,
                                  onChangeFactBarPreference:
                                    this._onChangeFactBarPreference,
                                  user: this.state.user,
                                  showQuizOutOfTokens:
                                    this.state.showQuizOutOfTokens,
                                  playOnly: this.props.playOnly,
                                  quizType: this.props.resource_type,
                                  incorrect:
                                    this.state.questionNumber -
                                    this.state.numCorrect -
                                    1,
                                  videoPlayed: this.state.videoPlayed,
                                  onPreviewEnded: this._onPreviewEnded,
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(e.PureComponent),
        $a = Xa,
        Ja = (function (e) {
          b(n, e);
          var t = k(n);
          function n(e) {
            var r;
            return (
              g(this, n), ((r = t.call(this, e)).state = { hasError: !1 }), r
            );
          }
          return (
            y(
              n,
              [
                {
                  key: "componentDidCatch",
                  value: function (e) {
                    window.rg4js && window.rg4js("send", e);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.hasError
                      ? (0, P.jsx)("h1", { children: "Something went wrong." })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ]
            ),
            n
          );
        })(e.Component),
        Za = {
          wrapper: "Start_wrapper__PBmz3",
          h1: "Start_h1__MfUBS",
          info: "Start_info__p1l5B",
          progressWrapper: "Start_progressWrapper__kX6qj",
          progress: "Start_progress__mKESw",
          btn: "Start_btn__oCYTp",
          disclaimer: "Start_disclaimer__-3HvP",
        };
      function ei(e) {
        var t = e.lesson,
          n = e.setResource,
          r = e.onNextCardInLesson,
          a = t.cards.filter(function (e) {
            return e.completed;
          }).length,
          i = t.cards.length,
          s = Math.round(
            (t.cards.reduce(function (e, t) {
              return e - 15 * t.num_correct + (t.started ? 0 : t.audio_length);
            }, 0) +
              15 * (t.total_facts - t.retryAttempts.correct)) /
              60
          ),
          o = t.cards.reduce(
            function (e, t) {
              return (
                (e.correct += t.num_correct), (e.attempts += t.num_attempts), e
              );
            },
            {
              correct: t.retryAttempts.correct,
              attempts: t.retryAttempts.attempts,
            }
          ),
          l = o.correct,
          c = o.attempts,
          u = Math.min(t.total_facts, c) - l;
        return (0, P.jsxs)(P.Fragment, {
          children: [
            (0, P.jsx)(Ya, { lesson: t, setResource: n }),
            (0, P.jsxs)("div", {
              className: Za.wrapper,
              children: [
                (0, P.jsx)("h1", {
                  className: Za.h1,
                  children: t.resource.name,
                }),
                (0, P.jsxs)("div", {
                  className: Za.info,
                  children: [
                    "Lessons completed ",
                    (0, P.jsx)("strong", { children: a }),
                    " of ",
                    (0, P.jsx)("strong", { children: i }),
                  ],
                }),
                (0, P.jsx)("div", {
                  className: Za.progressWrapper,
                  children: (0, P.jsx)("div", {
                    className: Za.progress,
                    style: { width: "".concat((a / i) * 100, "%") },
                  }),
                }),
                u > 0 &&
                  (0, P.jsxs)("div", {
                    className: Za.info,
                    children: [
                      " Wrong answers: ",
                      (0, P.jsx)("strong", { children: u }),
                    ],
                  }),
                (0, P.jsxs)("div", {
                  className: Za.info,
                  children: [
                    " ",
                    (0, P.jsx)(L, {
                      icon: "query_builder",
                      style: { verticalAlign: "middle" },
                    }),
                    " ~ Est time to complete: ",
                    (0, P.jsxs)("strong", {
                      children: [s < 1 ? "<1" : s, " min"],
                    }),
                  ],
                }),
                (0, P.jsx)("button", {
                  className: Za.btn,
                  onClick: r,
                  children: a ? "Continue" : "Start",
                }),
                (0, P.jsx)("p", {
                  className: Za.disclaimer,
                  children:
                    "Note: Assignment will not be marked complete until all questions are answered correctly.",
                }),
              ],
            }),
          ],
        });
      }
      var ti = {
        header: "Completed_header__evxm1",
        logo: "Completed_logo__zka5P",
        wrapper: "Completed_wrapper__64hqn",
        completedWrapper:
          "Completed_completedWrapper__fErR4 Completed_wrapper__64hqn",
        heading: "Completed_heading__RZQ6C",
        accuracy: "Completed_accuracy__uCiw+",
        progressSection: "Completed_progressSection__Rl6Zy",
        progressWrapper: "Completed_progressWrapper__uHc3J",
        progress: "Completed_progress__Z+XvU",
        marker: "Completed_marker__iLUHg",
        total: "Completed_total__clcP6",
        stats: "Completed_stats__V35oK",
        tryAgain: "Completed_tryAgain__-mN3u",
        submit: "Completed_submit__Z5ZZt",
        submitted: "Completed_submitted__+mxCZ",
      };
      function ni(t) {
        var n = t.lesson,
          r = t.setResource,
          a = o((0, e.useState)(!1), 2),
          i = a[0],
          s = a[1],
          l = n.cards.reduce(function (e, t) {
            return (
              (e.correct += t.num_correct),
              (e.attempts += t.num_attempts),
              (e.hints_used += t.hints_used),
              e
            );
          }, p({}, n.retryAttempts)),
          c = l.correct,
          u = l.attempts,
          d = l.hints_used;
        (0, e.useEffect)(
          function () {
            c >= n.total_facts &&
              (fetch(
                "/api/v3/lti_lessons/"
                  .concat(n.lti_lesson_id, "/submit?lti_session_id=")
                  .concat(window.lti_session_id),
                p(p({}, xt), {}, { method: "POST" })
              ),
              fetch(
                "/api/v3/lti_lessons/".concat(n.lti_lesson_id, "/results"),
                p(p({}, xt), {}, { method: "GET" })
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  s(
                    e.map(function (e) {
                      return {
                        question: e.question_text,
                        correct: e.correct,
                        picmonic: {
                          name: e.picmonic,
                          main_image: e.main_image,
                          slug: e.slug,
                        },
                        selectedAnswer: { display_name: e.selected_answer },
                        answer: {
                          display_name: e.correct_answer,
                          definition: e.definition,
                        },
                      };
                    })
                  );
                }));
          },
          [n.total_facts, n.lti_lesson_id, c]
        );
        var f = c >= n.total_facts;
        return (0, P.jsxs)("div", {
          children: [
            (0, P.jsx)("div", {
              className: ti.header,
              children: (0, P.jsx)("img", {
                src: Ka,
                className: ti.logo,
                alt: "picmonic",
              }),
            }),
            (0, P.jsxs)("div", {
              className: f ? ti.completedWrapper : ti.wrapper,
              children: [
                (0, P.jsx)("h1", {
                  className: ti.heading,
                  children: n.resource.name,
                }),
                (0, P.jsxs)("div", {
                  className: ti.accuracy,
                  children: [
                    "Overall Accuracy: ",
                    (0, P.jsxs)("strong", {
                      children: [Math.round((c / u) * 100), "%"],
                    }),
                  ],
                }),
                (0, P.jsxs)("div", {
                  className: ti.progressSection,
                  children: [
                    (0, P.jsxs)("div", {
                      className: ti.progressWrapper,
                      children: [
                        (0, P.jsx)("div", {
                          className: ti.progress,
                          style: {
                            width: "".concat((c / n.total_facts) * 100, "%"),
                          },
                        }),
                        (0, P.jsxs)("svg", {
                          width: "24",
                          height: "45",
                          viewBox: "0 0 24 45",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: ti.marker,
                          style: {
                            left: "calc(".concat(
                              (c / n.total_facts) * 100,
                              "% - 16px)"
                            ),
                          },
                          children: [
                            (0, P.jsx)("path", {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M20.49 19.8218C18.7725 21.4839 12.75 25.9922 12.75 31.2107V33.3901C12.75 35.6038 14.655 37.0597 15.18 37.5677C15.9975 38.3516 16.5 39.4403 16.5 40.6452C16.5 43.0476 14.49 45 12 45C9.51 45 7.5 43.0476 7.5 40.6452C7.5 39.4403 8.0025 38.3516 8.8125 37.5677C9.345 37.0597 11.25 35.6038 11.25 33.3901C11.25 31.1764 11.25 31.2107 11.25 31.2107C11.25 25.9922 5.2275 21.4839 3.51 19.8218C1.3425 17.7242 0 14.821 0 11.6129C0 5.19677 5.3625 0.00725806 12 0C18.6375 0.00725806 24 5.19677 24 11.6129C24 14.821 22.6575 17.7242 20.49 19.8218Z",
                              fill: "#00FFC2",
                            }),
                            f
                              ? (0, P.jsx)("path", {
                                  d: "M11.8968 14.5756C11.9604 14.5373 12.04 14.5373 12.1035 14.5756L15.7144 16.755C15.8658 16.8464 16.0527 16.7106 16.0125 16.5383L15.0543 12.4308C15.0374 12.3585 15.062 12.2828 15.1181 12.2342L18.3086 9.4703C18.4423 9.35445 18.3708 9.1348 18.1945 9.11985L13.9937 8.76345C13.9198 8.75718 13.8554 8.71051 13.8264 8.64221L12.1843 4.76773C12.1154 4.60512 11.8849 4.60512 11.816 4.76773L10.1739 8.64221C10.1449 8.71051 10.0806 8.75718 10.0067 8.76345L5.80582 9.11985C5.62954 9.1348 5.55806 9.35445 5.69177 9.4703L8.88226 12.2342C8.93837 12.2828 8.96294 12.3585 8.94607 12.4308L7.98785 16.5383C7.94765 16.7106 8.1345 16.8464 8.28596 16.755L11.8968 14.5756Z",
                                  fill: "#323A4D",
                                })
                              : (0, P.jsx)("text", {
                                  x: "50%",
                                  y: "16",
                                  fill: "#2C3344",
                                  "text-anchor": "middle",
                                  "font-size": "12px",
                                  children: c,
                                }),
                          ],
                        }),
                      ],
                    }),
                    (0, P.jsx)("div", {
                      className: ti.total,
                      children: n.total_facts,
                    }),
                  ],
                }),
                c >= n.total_facts
                  ? (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsx)("div", {
                          className: ti.wrong,
                          children:
                            "All questions have been answered correctly.",
                        }),
                        (0, P.jsx)("div", {
                          className: ti.submitted,
                          children: "Assignment Submitted!",
                        }),
                        (0, P.jsx)("div", {
                          className: ti.stats,
                          children: (0, P.jsxs)("div", {
                            children: [
                              "Hints used: ",
                              (0, P.jsx)("strong", { children: d }),
                            ],
                          }),
                        }),
                        !!i &&
                          (0, P.jsx)(xn, { questions: i, hideInfoBar: !0 }),
                        (0, P.jsx)("br", {}),
                        [100, 101, 202, 203, 105].indexOf(window.user.lead) >
                          -1 &&
                          (0, P.jsx)(dr, {
                            user: window.user,
                            api_key: window.user.web_api_key,
                            cardsViewed: window.user.cards_viewed,
                            marketId: window.user.lead,
                            isWK:
                              window.user.lti && 4 === window.user.lti.lti_id,
                            cardID: 0,
                          }),
                        (0, P.jsx)("img", {
                          src: Ka,
                          alt: "picmonic",
                          width: "160",
                        }),
                      ],
                    })
                  : (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsxs)("div", {
                          className: ti.wrong,
                          children: [
                            "Wrong answers: ",
                            (0, P.jsx)("big", {
                              children: (0, P.jsx)("strong", {
                                children: n.total_facts - c,
                              }),
                            }),
                          ],
                        }),
                        (0, P.jsx)("button", {
                          className: ti.tryAgain,
                          onClick: function () {
                            return r({
                              type: "lti_lesson",
                              id: n.lti_lesson_id,
                            });
                          },
                          children: "TRY AGAIN",
                        }),
                        (0, P.jsx)("button", {
                          className: ti.submit,
                          disabled: !0,
                          children: "SUBMIT ASSIGNMENT",
                        }),
                        (0, P.jsx)("div", {
                          children: (0, P.jsxs)("div", {
                            children: [" Hints used: ", d],
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          ],
        });
      }
      function ri() {
        document.body.classList.remove("keyboard-modality"),
          document.addEventListener("keydown", ai),
          document.removeEventListener("mousemove", ri);
      }
      function ai(e) {
        "Tab" === e.key &&
          (document.body.classList.add("keyboard-modality"),
          document.removeEventListener("keydown", ai),
          document.addEventListener("mousemove", ri));
      }
      function ii() {
        var t = o((0, e.useState)(!1), 2),
          n = t[0],
          r = t[1];
        function a() {
          var e = window.lesson.cards.filter(function (e) {
            return !e.completed;
          });
          e.length ? r({ type: "picmonic", id: e[0].card_id }) : r("completed");
        }
        return (
          (0, e.useEffect)(function () {
            return (
              (new Image().src =
                ""),
              document.addEventListener("keydown", ai),
              "lesson" !== window.resource_type
                ? r({
                    type: window.resource_type || "picmonic",
                    id: window.resource_id || window.card_id,
                  })
                : window.lesson.cards.filter(function (e) {
                    return !e.completed;
                  }).length || r("completed"),
              function () {
                document.removeEventListener("keydown", ai),
                  document.removeEventListener("mousemove", ri);
              }
            );
          }, []),
          n
            ? "completed" === n
              ? (0, P.jsx)(ni, { lesson: window.lesson, setResource: r })
              : (0, P.jsx)(Ja, {
                  children: (0, P.jsx)(
                    $a,
                    {
                      resource_type: n.type,
                      resource_id: n.id,
                      questions: window.questions,
                      playOnly: window.playOnly,
                      lesson: window.lesson,
                      lessonCard:
                        window.lesson &&
                        window.lesson.cards.find(function (e) {
                          return e.card_id === n.id;
                        }),
                      onNextCardInLesson: a,
                      setResource: r,
                      card_id: "picmonic" === n.type && n.id,
                    },
                    "".concat(n.type, "-").concat(n.id)
                  ),
                })
            : "lesson" === window.resource_type
            ? (0, P.jsx)(ei, {
                lesson: window.lesson,
                setResource: r,
                onNextCardInLesson: a,
              })
            : null
        );
      }
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a()(),
        t.render((0, P.jsx)(ii, {}), document.getElementById("root")),
        Ln("pageview"),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    })();
})();
//# sourceMappingURL=main.a825c562.js.map
