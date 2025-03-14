(async function () {
  const _0x1bbd5d = function () {
    let _0x386000 = true;
    return function (_0x54f628, _0x149480) {
      const _0x40620d = _0x386000 ? function () {
        if (_0x149480) {
          const _0x5ddbbe = _0x149480.apply(_0x54f628, arguments);
          _0x149480 = null;
          return _0x5ddbbe;
        }
      } : function () {};
      _0x386000 = false;
      return _0x40620d;
    };
  }();
  const _0x30c8ed = function () {
    let _0x5905c7 = true;
    return function (_0x5f0764, _0x11e840) {
      const _0x189868 = _0x5905c7 ? function () {
        if (_0x11e840) {
          const _0x169999 = _0x11e840.apply(_0x5f0764, arguments);
          _0x11e840 = null;
          return _0x169999;
        }
      } : function () {};
      _0x5905c7 = false;
      return _0x189868;
    };
  }();
  const _0x25d6dd = function () {
    let _0x46bb76 = true;
    return function (_0x413eb2, _0x30e365) {
      const _0x3e9210 = _0x46bb76 ? function () {
        if (_0x30e365) {
          const _0x39163e = _0x30e365.apply(_0x413eb2, arguments);
          _0x30e365 = null;
          return _0x39163e;
        }
      } : function () {};
      _0x46bb76 = false;
      return _0x3e9210;
    };
  }();
  'use strict';
  async function _0x28ee2b() {
    let _0x3bcc7e = localStorage.getItem("deviceID");
    if (!_0x3bcc7e) {
      const _0x2a53f7 = navigator.userAgent;
      const _0x30e8d7 = navigator.platform;
      const _0x4e2cdd = navigator.language;
      const _0x30773f = _0x2a53f7 + _0x30e8d7 + _0x4e2cdd;
      const _0x376fa5 = new TextEncoder();
      const _0x4b2968 = _0x376fa5.encode(_0x30773f);
      const _0x227b51 = await crypto.subtle.digest("SHA-256", _0x4b2968);
      const _0x3c724e = Array.from(new Uint8Array(_0x227b51));
      const _0x22c613 = _0x3c724e.map(_0x2fa1fe => _0x2fa1fe.toString(16).padStart(2, '0')).join('');
      _0x3bcc7e = _0x22c613.substring(0, 16);
      localStorage.setItem("deviceID", _0x3bcc7e);
    }
    return _0x3bcc7e;
  }
  async function _0x5923cc() {
    try {
      const _0x361e71 = await fetch("https://api64.ipify.org?format=json", {
        'cache': "no-store"
      });
      if (!_0x361e71.ok) {
        throw new Error("Không thể lấy IP");
      }
      const _0xc64212 = await _0x361e71.json();
      return _0xc64212.ip;
    } catch (_0x2d4e82) {
      console.error("Lỗi lấy IP:", _0x2d4e82);
      return "Không xác định";
    }
  }
  function _0x2629fd(_0x3b172b, _0x4e73f8, _0x46a4e1) {
    const _0xc79fcf = {
      'username': "Bypasser Notifi By HieuDz",
      'avatar_url': "https://i.pinimg.com/736x/77/c9/0a/77c90a2b0c3a7d4a6a1ae22d5ac4238e.jpg",
      'embeds': [{
        'title': "**Bypass Thành Công**",
        'color': 0x99ff,
        'fields': [{
          'name': "**Thiết Bị**",
          'value': '`' + _0x3b172b + '`',
          'inline': true
        }, {
          'name': "**IP Address**",
          'value': '`' + _0x4e73f8 + '`',
          'inline': true
        }, {
          'name': "**Tổng số lần sử dụng**",
          'value': '`' + _0x46a4e1 + '`',
          'inline': false
        }],
        'footer': {
          'text': "Bypasser System",
          'icon_url': "https://i.pinimg.com/736x/c3/66/df/c366df7cc91f1e3d67fc409db3042a42.jpg"
        },
        'timestamp': new Date().toISOString()
      }]
    };
    fetch("https://discord.com/api/webhooks/1347797256207601684/6nNAI6TpPeuH6eh3B2XpNCbOus-8qvG8D0Idtw4-jLRo1_60AlgXpk8eR8mHlK0W_wp8", {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify(_0xc79fcf)
    })["catch"](_0x37e66d => console.error("Lỗi gửi Webhook:", _0x37e66d));
  }
  (async function () {
    const _0x599e74 = _0x1bbd5d(this, function () {
      return _0x599e74.toString().search("(((.+)+)+)+$").toString().constructor(_0x599e74).search("(((.+)+)+)+$");
    });
    _0x599e74();
    (function () {
      _0x30c8ed(this, function () {
        const _0x36593c = new RegExp("function *\\( *\\)");
        const _0x4d48ad = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
        const _0x989995 = _0x1aa92d("init");
        if (!_0x36593c.test(_0x989995 + "chain") || !_0x4d48ad.test(_0x989995 + "input")) {
          _0x989995('0');
        } else {
          _0x1aa92d();
        }
      })();
    })();
    const _0x2aafab = _0x25d6dd(this, function () {
      let _0x368279;
      try {
        const _0x569324 = Function("return (function() {}.constructor(\"return this\")( ));");
        _0x368279 = _0x569324();
      } catch (_0x3cfb65) {
        _0x368279 = window;
      }
      const _0x47fe84 = _0x368279.console = _0x368279.console || {};
      const _0x4e5ae2 = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (let _0x4bad1c = 0; _0x4bad1c < _0x4e5ae2.length; _0x4bad1c++) {
        const _0x14b2f0 = _0x25d6dd.constructor.prototype.bind(_0x25d6dd);
        const _0x5ed172 = _0x4e5ae2[_0x4bad1c];
        const _0x18380d = _0x47fe84[_0x5ed172] || _0x14b2f0;
        _0x14b2f0.__proto__ = _0x25d6dd.bind(_0x25d6dd);
        _0x14b2f0.toString = _0x18380d.toString.bind(_0x18380d);
        _0x47fe84[_0x5ed172] = _0x14b2f0;
      }
    });
    _0x2aafab();
    const _0x4ce36c = await _0x5923cc();
    const _0x22137d = await _0x28ee2b();
    let _0x394635 = JSON.parse(localStorage.getItem("deviceUsage")) || {};
    const _0x5501ea = _0x22137d + '-' + _0x4ce36c;
    const _0x4826ff = (_0x394635[_0x5501ea] || 0) + 1;
    _0x394635[_0x5501ea] = _0x4826ff;
    localStorage.setItem("deviceUsage", JSON.stringify(_0x394635));
    _0x2629fd(_0x22137d, _0x4ce36c, _0x4826ff);
  })();
  function _0x2d74bb() {
    console.log("Đang đổi nhiệm vụ...");
    const _0x922909 = document.querySelector("#btn-baoloi");
    if (!_0x922909) {
      return false;
    }
    _0x922909.click();
    setTimeout(() => {
      const _0x5e07b2 = document.querySelector("#lydo_doima > center > a:nth-child(2)");
      if (_0x5e07b2) {
        _0x5e07b2.click();
      }
      setTimeout(() => {
        const _0x5266db = document.querySelector("#lydo_doima > label:nth-child(8) > input[type=radio]");
        if (_0x5266db) {
          _0x5266db.click();
        }
        setTimeout(() => {
          const _0x52ba29 = document.querySelector("#dongy_doima > a");
          if (_0x52ba29) {
            _0x52ba29.click();
            return true;
          }
          return false;
        }, 500);
      }, 500);
    }, 500);
    return true;
  }
  function _0x45f249() {
    return new Promise((_0x3a7402, _0x226128) => {
      const _0x5b4056 = document.querySelector("p#TK1").textContent.trim().toLowerCase();
      const _0x2f2652 = document.querySelector("img#halt_nv") || document.querySelector("img#hinh_nv");
      const _0x57c820 = _0x2f2652 ? _0x2f2652.src : null;
      if (_0x57c820.includes("placehold.co")) {
        setTimeout(() => _0x45f249().then(_0x3a7402)["catch"](_0x226128), 100);
        return;
      }
      const _0x3a1123 = "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2&url=" + _0x57c820;
      const _0x5ea1e9 = new XMLHttpRequest();
      _0x5ea1e9.open("GET", _0x3a1123, true);
      _0x5ea1e9.onload = function () {
        if (_0x5ea1e9.status === 200) {
          const _0x222d8a = JSON.parse(_0x5ea1e9.responseText);
          const _0x3387d8 = _0x222d8a.ParsedResults[0];
          const _0x23a1ea = _0x3387d8.TextOverlay.Lines.filter(_0x173c19 => _0x173c19.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) && _0x173c19.Words && _0x173c19.Words.some(_0x306ce3 => _0x306ce3.Top < 170)).map(_0x489f52 => _0x489f52.LineText);
          let _0x3bfb11 = '';
          if (_0x5b4056 === "188bet") {
            _0x3bfb11 = "https://165.22.63.250" + _0x23a1ea + '/';
          } else {
            if (_0x5b4056 === "w88") {
              _0x3bfb11 = "https://188.166.185.213/";
            } else {
              if (_0x5b4056 === "bk8") {
                _0x3bfb11 = "https://188.166.189.40/";
              } else {
                if (_0x5b4056 === "fb88") {
                  _0x3bfb11 = "https://fb88" + _0x23a1ea + '/';
                } else {
                  if (_0x5b4056 === "m88") {
                    _0x3bfb11 = "https://bet88" + _0x23a1ea + '/';
                  } else {
                    if (_0x5b4056 === "vn88") {
                      _0x3bfb11 = "https://139.59.238.116/";
                    } else {
                      if (_0x5b4056 === "v9bet") {
                        _0x3bfb11 = "https://v9bet" + _0x23a1ea + '/';
                      } else {
                        _0x3bfb11 = "Chưa nhận diện được URL!";
                      }
                    }
                  }
                }
              }
            }
          }
          _0x3a7402(_0x3bfb11);
        } else {
          _0x226128("Lỗi khi tải dữ liệu: " + _0x5ea1e9.status);
        }
      };
      _0x5ea1e9.send();
    });
  }
  function _0x465e96(_0x50203e) {
    const _0x1fa999 = Date.now();
    return _0x1fa999 + ',' + "https://www.google.com/" + ',' + _0x50203e + ",IOS900,hidden,null";
  }
  async function _0x1b9dfd(_0xe7a9a9 = null) {
    try {
      let _0x1ba897 = "https://api.proxyscrape.com/v3/free-proxy-list/get?request=displayproxies&proxytype=http&timeout=5000&anonymity=elite";
      if (_0xe7a9a9) {
        _0x1ba897 += "&country=" + _0xe7a9a9;
      }
      const _0x4acd62 = await fetch(_0x1ba897, {
        'cache': "no-store"
      });
      if (!_0x4acd62.ok) {
        throw new Error("Không thể lấy proxy từ API");
      }
      const _0x719bc0 = await _0x4acd62.text();
      const _0x35e150 = _0x719bc0.trim().split("\n");
      if (_0x35e150.length === 0) {
        throw new Error("Không có proxy khả dụng");
      }
      const _0x868a2 = _0x35e150[Math.floor(Math.random() * _0x35e150.length)];
      const [_0x4b6aa6, _0x56e2c5] = _0x868a2.split(':');
      const _0xbf588e = {
        ip: _0x4b6aa6,
        port: _0x56e2c5
      };
      const _0x55fa75 = await _0x30098f(_0xbf588e);
      if (_0x55fa75) {
        return {
          'ip': _0x4b6aa6,
          'port': parseInt(_0x56e2c5)
        };
      }
      return _0x1b9dfd(_0xe7a9a9);
    } catch (_0x189f57) {
      console.error("Lỗi khi lấy proxy:", _0x189f57);
      return null;
    }
  }
  async function _0x30098f(_0x565dd9) {
    return new Promise(_0x2a4d37 => {
      const _0x327958 = {
        host: _0x565dd9.ip,
        port: _0x565dd9.port
      };
      GM_xmlhttpRequest({
        'method': "GET",
        'url': "https://api.ipify.org?format=json",
        'proxy': _0x327958,
        'timeout': 0x1388,
        'onload': () => _0x2a4d37(true),
        'onerror': () => _0x2a4d37(false),
        'ontimeout': () => _0x2a4d37(false)
      });
    });
  }
  function _0x1b8b18() {
    const _0x4c5cb5 = {
      name: "Windows NT 10.0; Win64; x64",
      platform: "Win32"
    };
    const _0xb8ab3d = {
      name: "Macintosh; Intel Mac OS X 10_15_7",
      platform: "MacIntel"
    };
    const _0x331ff3 = {
      name: "X11; Linux x86_64",
      platform: "Linux x86_64"
    };
    const _0x218cc5 = {
      name: "iPhone; CPU iPhone OS 16_0 like Mac OS X",
      platform: "iPhone"
    };
    const _0x3f9913 = [_0x4c5cb5, _0xb8ab3d, _0x331ff3, _0x218cc5];
    const _0x31a534 = [{
      'name': "Chrome",
      'version': "Chrome/" + (Math.floor(Math.random() * 20) + 100) + ".0." + Math.floor(Math.random() * 5000) + '.' + Math.floor(Math.random() * 200)
    }, {
      'name': "Firefox",
      'version': "Firefox/" + (Math.floor(Math.random() * 20) + 100) + '.0'
    }, {
      'name': "Safari",
      'version': "Version/" + (Math.floor(Math.random() * 5) + 14) + ".0 Safari/605.1.15"
    }];
    const _0xce63f2 = _0x3f9913[Math.floor(Math.random() * _0x3f9913.length)];
    const _0x37cf0b = _0x31a534[Math.floor(Math.random() * _0x31a534.length)];
    const _0x36a7f5 = "Mozilla/5.0 (" + _0xce63f2.name + ") AppleWebKit/537.36 (KHTML, like Gecko) " + _0x37cf0b.version;
    const _0x21feb5 = ["1920x1080", "1366x768", "1440x900", "1280x720"];
    const _0x593061 = _0x21feb5[Math.floor(Math.random() * _0x21feb5.length)];
    Object.defineProperty(window, "screen", {
      'value': {
        'width': parseInt(_0x593061.split('x')[0]),
        'height': parseInt(_0x593061.split('x')[1]),
        'availWidth': parseInt(_0x593061.split('x')[0]),
        'availHeight': parseInt(_0x593061.split('x')[1]) - 50
      },
      'writable': false,
      'configurable': true
    });
    const _0x553350 = ["Intel Inc.", "NVIDIA Corporation", "AMD"];
    const _0x2c8e7a = ["Intel Iris OpenGL Engine", "GeForce GTX 970/PCIe/SSE2", "Radeon RX 580"];
    const _0x1035a2 = document.createElement("canvas");
    const _0x18cf7d = _0x1035a2.getContext("webgl");
    if (_0x18cf7d) {
      Object.defineProperty(_0x18cf7d, "getParameter", {
        'value': _0x14a32 => {
          if (_0x14a32 === _0x18cf7d.VENDOR) {
            return _0x553350[Math.floor(Math.random() * _0x553350.length)];
          }
          if (_0x14a32 === _0x18cf7d.RENDERER) {
            return _0x2c8e7a[Math.floor(Math.random() * _0x2c8e7a.length)];
          }
          return _0x18cf7d.getParameter(_0x14a32);
        },
        'writable': false
      });
    }
    const _0x4df4cd = {
      userAgent: _0x36a7f5,
      platform: _0xce63f2.platform
    };
    return _0x4df4cd;
  }
  let _0x456ed1 = GM_getValue("isFakeIPEnabled", false);
  let _0xeb75e1 = GM_getValue("isFakeBrowserEnabled", false);
  let _0x169589 = GM_getValue("currentProxy", null);
  let _0x4317f9 = GM_getValue("currentUserAgent", navigator.userAgent);
  let _0x1c0b8e = GM_getValue("currentPlatform", navigator.platform);
  if (_0x456ed1 && _0x169589) {
    _0x1d9271(_0x169589);
  }
  if (_0xeb75e1 && _0x4317f9 !== navigator.userAgent) {
    _0xad6ce6({
      'userAgent': _0x4317f9,
      'platform': _0x1c0b8e
    });
  }
  async function _0x1d9271(_0x473ded) {
    console.log("Đã bật Fake IP: " + _0x473ded.ip + ':' + _0x473ded.port);
    _0x169589 = _0x473ded;
    GM_setValue("currentProxy", _0x473ded);
    GM_setValue("isFakeIPEnabled", true);
  }
  function _0x51be1e() {
    console.log("Đã tắt Fake IP");
    _0x169589 = null;
    GM_setValue("currentProxy", null);
    GM_setValue("isFakeIPEnabled", false);
  }
  function _0xad6ce6({
    userAgent: _0xeeca2a,
    platform: _0x1a26a1
  }) {
    console.log("Đã bật Fake Browser: " + _0xeeca2a);
    const _0x1620d5 = {
      value: _0xeeca2a,
      writable: false,
      configurable: true
    };
    Object.defineProperty(navigator, "userAgent", _0x1620d5);
    const _0x83e7cd = {
      value: _0x1a26a1,
      writable: false,
      configurable: true
    };
    Object.defineProperty(navigator, "platform", _0x83e7cd);
    _0x4317f9 = _0xeeca2a;
    _0x1c0b8e = _0x1a26a1;
    GM_setValue("currentUserAgent", _0xeeca2a);
    GM_setValue("currentPlatform", _0x1a26a1);
    GM_setValue("isFakeBrowserEnabled", true);
  }
  function _0xcf8d64() {
    console.log("Đã tắt Fake Browser");
    Object.defineProperty(navigator, "userAgent", {
      'value': navigator.userAgent,
      'writable': false,
      'configurable': true
    });
    Object.defineProperty(navigator, "platform", {
      'value': navigator.platform,
      'writable': false,
      'configurable': true
    });
    _0x4317f9 = navigator.userAgent;
    _0x1c0b8e = navigator.platform;
    GM_setValue("currentUserAgent", navigator.userAgent);
    GM_setValue("currentPlatform", navigator.platform);
    GM_setValue("isFakeBrowserEnabled", false);
  }
  function _0x2e4954(_0x439f43) {
    return new Promise((_0x4439c4, _0x5ee837) => {
      const _0x264f57 = _0x465e96();
      const _0xf6530a = new XMLHttpRequest();
      const _0x3d223f = "https://traffic-user.net/GET_VUATRAFFIC.php?data=" + _0x264f57 + "&clk=" + _0x439f43;
      _0xf6530a.open("POST", _0x3d223f, true);
      _0xf6530a.onload = function () {
        if (_0xf6530a.status === 200) {
          const _0x15e973 = _0xf6530a.responseText;
          const _0x43d70b = _0x15e973.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
          if (_0x43d70b) {
            localStorage.codexn = _0x43d70b;
            _0x4439c4(_0x43d70b);
          } else {
            console.error("Không thể lấy mã codexn");
            _0x5ee837("Lỗi! Đổi nhiệm vụ khác và thử lại");
          }
        } else {
          _0x5ee837("Lỗi: " + _0xf6530a.status);
        }
      };
      _0xf6530a.onerror = () => _0x5ee837("Lỗi mạng hoặc yêu cầu không thành công");
      _0xf6530a.send();
    });
  }
  function _0x3fb6a8(_0x4002fc, _0x9b7779, _0x1d73fd, _0x22e258) {
    return new Promise((_0x4ce0e0, _0x2856d6) => {
      const _0x59f8c3 = "https://traffic-user.net/GET_MA.php?codexn=" + _0x4002fc + "&url=" + _0x9b7779 + "&loai_traffic=" + _0x1d73fd + "&clk=" + _0x22e258;
      const _0x350bfc = new XMLHttpRequest();
      _0x350bfc.open("POST", _0x59f8c3, true);
      _0x350bfc.onload = function () {
        if (_0x350bfc.status === 200) {
          const _0x46f3d4 = _0x350bfc.responseText;
          const _0x1e1d2f = _0x46f3d4.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
          if (_0x1e1d2f) {
            sessionStorage.setItem("ymnclk", _0x1e1d2f);
            _0x4ce0e0(_0x1e1d2f);
          } else {
            const _0x3d3a00 = new DOMParser().parseFromString(_0x46f3d4, "text/html");
            const _0xaeba6e = _0x3d3a00.querySelector("span#layma_me_vuatraffic");
            if (_0xaeba6e) {
              _0x4ce0e0(_0xaeba6e.textContent.trim());
            } else {
              _0x2856d6("URL Lỗi! Vui lòng kiểm tra lại.");
            }
          }
        } else {
          _0x2856d6("Lỗi: " + _0x350bfc.status);
        }
      };
      _0x350bfc.onerror = () => _0x2856d6("Lỗi mạng hoặc yêu cầu không thành công");
      _0x350bfc.send();
    });
  }
  function _0x2a088a(_0x1b8ee9) {
    const _0x156e72 = document.querySelector("#gt-form")?.["getAttribute"]("action") || '';
    const _0x263cc7 = "https://yeumoney.com" + _0x156e72;
    const _0x42add5 = new FormData();
    _0x42add5.append("code", _0x1b8ee9);
    _0x42add5.append("keyword", '');
    _0x42add5.append("dieuhanh", document.querySelector("input[name=\"dieuhanh\"]")?.["value"] || '');
    _0x42add5.append("pix", document.querySelector("input[name=\"pix\"]")?.["value"] || '');
    _0x42add5.append("lvp", document.querySelector("input[name=\"lvp\"]")?.["value"] || '');
    _0x42add5.append("ref", "$ref");
    _0x42add5.append("trinhduyet", document.getElementById("trinhduyet")?.["value"] || '');
    _0x42add5.append("id_traffic", document.getElementById("id_donhang")?.["value"] || '');
    _0x42add5.append("check_index", '1');
    const _0x5de4e4 = new URLSearchParams(_0x42add5).toString();
    const _0x23d944 = {
      'method': "POST",
      'url': _0x263cc7,
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'User-Agent': _0xeb75e1 ? _0x4317f9 : navigator.userAgent,
        'Referer': "https://yeumoney.com/",
        'Cookie': document.cookie
      },
      'data': _0x5de4e4,
      'onload': function (_0x3060c8) {
        window.location.href = _0x3060c8.finalUrl;
      },
      'onerror': function (_0x5dd896) {
        const _0x59c6ea = _0x5dd896.error;
        const _0x3fe033 = _0x59c6ea.match(/https?:\/\/[^\s"]+/);
        window.location.href = _0x3fe033;
      }
    };
    if (_0x456ed1 && _0x169589) {
      const _0x39a612 = {
        host: _0x169589.ip,
        port: _0x169589.port
      };
      _0x23d944.proxy = _0x39a612;
    }
    GM_xmlhttpRequest(_0x23d944);
  }
  async function _0x5ca440(_0x1eba96) {
    try {
      const _0x2e41c4 = await _0x2e4954(null);
      const _0x5e6468 = _0x1eba96.replace(/\/$/, '');
      const _0x36279a = await _0x3fb6a8(_0x2e41c4, _0x5e6468, "https://www.google.com/", null);
      const _0x58eeb8 = await _0x2e4954(_0x36279a);
      const _0x4dc22b = _0x1eba96 + "admin";
      const _0x5e0074 = await _0x3fb6a8(_0x58eeb8, _0x4dc22b, _0x1eba96, _0x36279a);
      return _0x5e0074;
    } catch (_0x11f74e) {
      console.error("Lỗi trong startBypass:", _0x11f74e);
      return null;
    }
  }
  async function _0x1349ad() {
    try {
      const _0x1fe2a9 = new Date();
      const _0x2b74aa = _0x1fe2a9.getDate().toString();
      const _0x135263 = document.getElementById("docs-title-input-label-inner") || document.querySelector(".docs-ml-header-document-title-text");
      const _0xc289ea = _0x135263.textContent || _0x135263.innerText;
      if (!_0xc289ea.includes("TÌM MÃ BƯỚC 2")) {
        const _0x569139 = localStorage.getItem("dayBypassed");
        if (_0x569139 === _0x2b74aa) {
          console.log("Đã bypass hôm nay.");
          return null;
        }
        if (_0xc289ea.includes("BACKUP KHÓA HỌC 2K7 FREE")) {
          const _0x47e938 = confirm("Bạn có muốn Bypass không?!");
          if (!_0x47e938) {
            localStorage.setItem("dayBypassed", _0x2b74aa);
            return null;
          }
        } else {
          return null;
        }
      }
      localStorage.setItem("dayBypassed", _0x2b74aa);
      const _0x3b0dd7 = window.location.href;
      const _0x1f799d = _0x3b0dd7.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (!_0x1f799d) {
        console.error("Không tìm thấy Sheet ID.");
        return null;
      }
      const _0xac9645 = "https://sheets.googleapis.com/v4/spreadsheets/" + _0x1f799d + "?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=" + "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo";
      const _0x51d375 = await fetch(_0xac9645);
      if (!_0x51d375.ok) {
        console.error("Lỗi khi gọi API:", _0x51d375.statusText);
        return null;
      }
      const _0x1292ad = await _0x51d375.json();
      const _0x50329f = _0x1292ad.sheets?.[0]?.["data"]?.[0]?.["rowData"] || [];
      for (let _0x786be of _0x50329f) {
        for (let _0x43bafc of _0x786be.values || []) {
          const _0x49fc70 = _0x43bafc.hyperlink;
          if (_0x49fc70 && _0x49fc70.includes("https://yeumoney.com/")) {
            return _0x49fc70;
          }
        }
      }
      console.warn("Không tìm thấy hyperlink hợp lệ.");
      return null;
    } catch (_0xd4aaeb) {
      console.error("Lỗi:", _0xd4aaeb.message);
      return null;
    }
  }
  async function _0x4f112a() {
    if (!document.title.includes("Điểm danh ngày")) {
      return null;
    }
    window.onbeforeunload = null;
    function _0xf829a9(_0x496eca, _0x5b0ca0) {
      setTimeout(() => {
        if (!_0x496eca.classList.contains("checked")) {
          _0x496eca.click();
        }
      }, _0x5b0ca0);
    }
    function _0x109ea1(_0x57d457, _0x48779a) {
      setTimeout(() => {
        if (!_0x57d457.classList.contains("checked")) {
          _0x57d457.click();
        }
      }, _0x48779a);
    }
    var _0x5abd90 = document.querySelectorAll("div[role=\"checkbox\"]");
    _0x5abd90.forEach((_0x6a76d1, _0x567535) => _0xf829a9(_0x6a76d1, _0x567535 * 300));
    var _0x14120c = document.querySelectorAll("div[role=\"radiogroup\"]");
    _0x14120c.forEach(_0x128561 => {
      var _0x2f4835 = _0x128561.querySelectorAll("div[role=\"radio\"]");
      _0x2f4835.forEach((_0x19f3db, _0x54f152) => _0x109ea1(_0x19f3db, _0x54f152 * 300));
    });
    setTimeout(() => {
      var _0x125fb5 = document.querySelector("form");
      if (_0x125fb5) {
        _0x125fb5.submit();
      }
    }, (_0x5abd90.length + _0x14120c.length) * 300 + 200);
  }
  function _0x1fe4e8(_0x3de736) {
    const _0x54575a = document.createElement("div");
    _0x54575a.id = "bypass-panel";
    _0x54575a.style.position = "fixed";
    _0x54575a.style.top = "20px";
    _0x54575a.style.right = "20px";
    _0x54575a.style.background = "linear-gradient(135deg, rgba(15, 20, 30, 0.98), rgba(25, 35, 45, 0.98))";
    _0x54575a.style.backdropFilter = "blur(15px)";
    _0x54575a.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    _0x54575a.style.borderRadius = "20px";
    _0x54575a.style.padding = '0';
    _0x54575a.style.zIndex = "9999";
    _0x54575a.style.width = "360px";
    _0x54575a.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 204, 255, 0.1)";
    _0x54575a.style.color = "#ffffff";
    _0x54575a.style.fontFamily = "'Roboto', sans-serif";
    _0x54575a.style.transition = "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
    _0x54575a.style.overflow = "hidden";
    let _0x374a89 = false;
    let _0x44894f;
    let _0x12914c;
    _0x54575a.style.cursor = "move";
    _0x54575a.onmousedown = _0x3d99e7 => {
      if (_0x3d99e7.target.className.includes("btn") || _0x3d99e7.target.tagName === "INPUT") {
        return;
      }
      _0x374a89 = true;
      _0x44894f = _0x3d99e7.clientX - parseInt(_0x54575a.style.left || '0');
      _0x12914c = _0x3d99e7.clientY - parseInt(_0x54575a.style.top || '20');
      _0x54575a.style.right = "auto";
    };
    document.onmousemove = _0xaa7e64 => {
      if (!_0x374a89) {
        return;
      }
      _0x54575a.style.left = _0xaa7e64.clientX - _0x44894f + 'px';
      _0x54575a.style.top = _0xaa7e64.clientY - _0x12914c + 'px';
      _0x54575a.style.left = Math.max(0, Math.min(window.innerWidth - _0x54575a.offsetWidth, parseInt(_0x54575a.style.left))) + 'px';
      _0x54575a.style.top = Math.max(0, Math.min(window.innerHeight - _0x54575a.offsetHeight, parseInt(_0x54575a.style.top))) + 'px';
    };
    document.onmouseup = () => {
      _0x374a89 = false;
    };
    const _0x4d5e64 = document.createElement("link");
    _0x4d5e64.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap";
    _0x4d5e64.rel = "stylesheet";
    document.head.appendChild(_0x4d5e64);
    const _0x4600fa = document.createElement("style");
    _0x4600fa.textContent = "\n        .bypass-header {\n            padding: 14px 18px;\n            background: linear-gradient(135deg, rgba(30, 40, 50, 0.95), rgba(20, 30, 40, 0.95));\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-radius: 20px 20px 0 0;\n        }\n        .bypass-title {\n            margin: 0;\n            font-size: 16px;\n            font-weight: 700;\n            background: linear-gradient(90deg, #00ffcc, #00ccff, #ff00ff);\n            -webkit-background-clip: text;\n            background-clip: text;\n            color: transparent;\n            text-shadow: 0 0 8px rgba(0, 204, 255, 0.2);\n        }\n        .toggle-btn {\n            width: 24px;\n            height: 24px;\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border: none;\n            border-radius: 50%;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .toggle-btn:hover {\n            transform: scale(1.1);\n            box-shadow: 0 4px 10px rgba(0, 204, 255, 0.5);\n        }\n        .toggle-btn.minimized {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n        }\n        .toggle-btn::before {\n            content: '−';\n            color: #fff;\n            font-size: 14px;\n            font-weight: 700;\n        }\n        .toggle-btn.minimized::before {\n            content: '+';\n        }\n        .bypass-content {\n            padding: 18px;\n            opacity: 1;\n            transition: opacity 0.3s ease, max-height 0.5s ease;\n            max-height: 500px;\n        }\n        #bypass-panel.minimized .bypass-content {\n            max-height: 0;\n            padding: 0 18px;\n            opacity: 0;\n            overflow: hidden;\n        }\n        #bypass-panel.minimized {\n            width: 200px;\n            border-radius: 20px;\n        }\n        input[type=\"text\"] {\n            width: 100%;\n            padding: 10px 14px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 12px;\n            color: #fff;\n            font-size: 14px;\n            transition: all 0.4s ease;\n            box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 204, 255, 0.1);\n        }\n        input[type=\"text\"]:focus {\n            border-color: #00ccff;\n            box-shadow: 0 0 18px rgba(0, 204, 255, 0.5), inset 0 2px 6px rgba(0, 0, 0, 0.2);\n            outline: none;\n            transform: scale(1.02);\n        }\n        .checkbox-group {\n            display: flex;\n            gap: 20px;\n            margin: 16px 0;\n        }\n        .checkbox-label {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            font-size: 14px;\n            color: #e0e0e0;\n            cursor: pointer;\n            transition: color 0.3s ease, transform 0.3s ease;\n        }\n        .checkbox-label:hover {\n            color: #fff;\n            transform: translateY(-2px);\n        }\n        input[type=\"checkbox\"] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n            border-radius: 6px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n        }\n        input[type=\"checkbox\"]:checked {\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border-color: #00ccff;\n            position: relative;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);\n        }\n        input[type=\"checkbox\"]:checked::after {\n            content: '✓';\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            color: #fff;\n            font-size: 10px;\n            text-shadow: 0 0 5px rgba(0, 204, 255, 0.7);\n        }\n        .slider-container {\n            margin: 16px 0;\n        }\n        .slider-label {\n            display: flex;\n            justify-content: space-between;\n            font-size: 14px;\n            color: #e0e0e0;\n            margin-bottom: 8px;\n        }\n        .delay-slider {\n            width: 100%;\n            -webkit-appearance: none;\n            height: 8px;\n            background: linear-gradient(90deg, #00ccff, #ff00ff);\n            border-radius: 10px;\n            outline: none;\n            transition: opacity 0.3s ease;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.3);\n        }\n        .delay-slider::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            appearance: none;\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n            transition: transform 0.3s ease;\n        }\n        .delay-slider::-webkit-slider-thumb:hover {\n            transform: scale(1.2);\n        }\n        .delay-slider::-moz-range-thumb {\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n        }\n        .button-group {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 10px;\n            margin-top: 20px;\n        }\n        .extra-buttons {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr); // Thay đổi thành 3 cột để chứa nút mới\n            gap: 10px;\n            margin-top: 10px;\n        }\n        button {\n            padding: 10px;\n            border: none;\n            border-radius: 12px;\n            font-size: 14px;\n            font-weight: 700;\n            cursor: pointer;\n            transition: all 0.4s ease;\n            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 204, 255, 0.2);\n        }\n        button:hover {\n            transform: translateY(-3px) scale(1.02);\n            box-shadow: 0 7px 22px rgba(0, 0, 0, 0.4), 0 0 18px rgba(0, 204, 255, 0.4);\n        }\n        .btn-bypass {\n            background: linear-gradient(45deg, #00ccff, #00ffcc);\n            color: #fff;\n        }\n        .btn-change {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n            color: #fff;\n        }\n        .btn-fakeip {\n            background: linear-gradient(45deg, #33cc33, #66ff66);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakeip.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakeip.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .btn-fakebrowser {\n            background: linear-gradient(45deg, #9933ff, #cc66ff);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakebrowser.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakebrowser.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .btn-copy {\n            background: linear-gradient(45deg, #ffcc00, #ffff66);\n            color: #fff;\n            position: relative;\n            overflow: hidden;\n        }\n        .btn-copy.copied::after {\n            content: \"Copied!\";\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            background: rgba(0, 255, 102, 0.9);\n            color: #fff;\n            padding: 5px 10px;\n            border-radius: 8px;\n            font-size: 12px;\n            animation: fadeOut 1.5s forwards;\n        }\n        @keyframes fadeOut {\n            0% { opacity: 1; }\n            80% { opacity: 1; }\n            100% { opacity: 0; }\n        }\n        .url-info {\n            font-size: 12px;\n            color: #00ffcc;\n            word-break: break-all;\n            margin: 14px 0;\n            opacity: 0.9;\n            line-height: 1.6;\n            text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);\n        }\n        .author-text {\n            font-size: 12px;\n            color: #888;\n            text-align: center;\n            padding: 10px;\n            border-top: 1px solid rgba(255, 255, 255, 0.08);\n            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.15));\n            box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05);\n            animation: glow 3s infinite alternate;\n        }\n        @keyframes glow {\n            from { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05); }\n            to { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.2); }\n        }\n        .copy-notif {\n            position: fixed;\n            top: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            background: linear-gradient(45deg, #00ff99, #00ccff);\n            color: #fff;\n            padding: 10px 20px;\n            border-radius: 15px;\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n            z-index: 10000;\n            opacity: 0;\n            transition: opacity 0.5s ease;\n        }\n        .copy-notif.show {\n            opacity: 1;\n        }\n    ";
    document.head.appendChild(_0x4600fa);
    const _0x18032c = document.createElement("div");
    _0x18032c.className = "bypass-header";
    const _0x2e7fd7 = document.createElement('h3');
    _0x2e7fd7.className = "bypass-title";
    _0x2e7fd7.textContent = "Bypasser Yeumoney Tool V10";
    _0x18032c.appendChild(_0x2e7fd7);
    const _0x306442 = document.createElement("button");
    _0x306442.className = "toggle-btn";
    _0x306442.onclick = () => {
      _0x54575a.classList.toggle("minimized");
      _0x306442.classList.toggle("minimized");
    };
    _0x18032c.appendChild(_0x306442);
    _0x54575a.appendChild(_0x18032c);
    const _0x379ecf = document.createElement("div");
    _0x379ecf.className = "bypass-content";
    const _0xfa60aa = document.createElement("input");
    _0xfa60aa.type = "text";
    _0xfa60aa.placeholder = "Enter URL (Nếu Không Thể Nhân Diện!)";
    _0x379ecf.appendChild(_0xfa60aa);
    const _0x2fe097 = document.createElement("div");
    _0x2fe097.className = "url-info";
    _0x2fe097.textContent = "OCR URL: " + _0x3de736;
    _0x379ecf.appendChild(_0x2fe097);
    const _0x24e478 = document.createElement("div");
    _0x24e478.className = "checkbox-group";
    const _0xff945a = document.createElement("input");
    _0xff945a.type = "checkbox";
    _0xff945a.id = "fetchCode";
    _0xff945a.checked = GM_getValue("fetchCode", false);
    const _0x2c1e5c = document.createElement("label");
    _0x2c1e5c.className = "checkbox-label";
    _0x2c1e5c.htmlFor = "fetchCode";
    _0x2c1e5c.textContent = "Auto Chuyển Trang";
    _0x24e478.appendChild(_0xff945a);
    _0x24e478.appendChild(_0x2c1e5c);
    const _0x4bbff = document.createElement("input");
    _0x4bbff.type = "checkbox";
    _0x4bbff.id = "autoStart";
    _0x4bbff.checked = GM_getValue("autoStart", false);
    const _0x566c81 = document.createElement("label");
    _0x566c81.className = "checkbox-label";
    _0x566c81.htmlFor = "autoStart";
    _0x566c81.textContent = "Auto Bypass";
    _0x24e478.appendChild(_0x4bbff);
    _0x24e478.appendChild(_0x566c81);
    _0x379ecf.appendChild(_0x24e478);
    const _0x14482d = document.createElement("div");
    _0x14482d.className = "slider-container";
    const _0x44faed = document.createElement("label");
    _0x44faed.className = "slider-label";
    _0x44faed.textContent = "Thời Gian Bypass: ";
    const _0x4f8c70 = document.createElement("span");
    _0x4f8c70.id = "delay-value";
    _0x4f8c70.textContent = '2s';
    _0x44faed.appendChild(_0x4f8c70);
    const _0x299d1d = document.createElement("input");
    _0x299d1d.type = "range";
    _0x299d1d.min = '2';
    _0x299d1d.max = "125";
    _0x299d1d.value = '2';
    _0x299d1d.className = "delay-slider";
    _0x299d1d.oninput = function () {
      _0x4f8c70.textContent = this.value + 's';
    };
    _0x14482d.appendChild(_0x44faed);
    _0x14482d.appendChild(_0x299d1d);
    _0x379ecf.appendChild(_0x14482d);
    const _0x49ac91 = document.createElement("div");
    _0x49ac91.className = "button-group";
    const _0x2c81a2 = document.createElement("button");
    _0x2c81a2.textContent = "Bypass Now";
    _0x2c81a2.className = "btn-bypass";
    _0x2c81a2.onclick = async function _0x3f726f() {
      try {
        _0xfa60aa.readOnly = true;
        const _0x536b48 = _0xfa60aa.value || _0x3de736;
        _0xfa60aa.value = "Chờ Xíu Nhe Ní...";
        if (_0x456ed1 && _0x169589) {
          _0xfa60aa.value = "Đang Bypass với IP: " + _0x169589.ip + ':' + _0x169589.port;
        }
        if (_0xeb75e1) {
          _0xfa60aa.value += " | Browser: " + _0x4317f9.substring(0, 20) + "...";
        }
        const _0x1dab0f = await _0x5ca440(_0x536b48);
        if (_0x1dab0f) {
          let _0x7f83b8 = parseInt(_0x299d1d.value);
          const _0x31c199 = setInterval(() => {
            _0xfa60aa.value = "Chờ Đợi Là Hạnh Phúc Sau: " + _0x7f83b8 + "s Thôi!";
            _0x7f83b8--;
            if (_0x7f83b8 < 0) {
              clearInterval(_0x31c199);
              if (_0xff945a.checked) {
                _0xfa60aa.value = "Code: " + _0x1dab0f + " - Đang Chuyển Trang...";
                _0x2a088a(_0x1dab0f);
              } else {
                _0xfa60aa.value = "Code: " + _0x1dab0f;
                GM_setValue("lastBypassCode", _0x1dab0f);
              }
              _0x2c81a2.disabled = false;
              _0xfa60aa.readOnly = false;
            }
          }, 1000);
        } else {
          _0xfa60aa.readOnly = false;
          _0xfa60aa.value = "Error! Xem Lại URL Or Đổi Nhiệm Vụ";
          setTimeout(() => {
            _0xfa60aa.value = "Đang tự động đổi nhiệm vụ...";
            const _0x560181 = _0x2d74bb();
            if (_0x560181) {
              setTimeout(() => {
                _0x45f249().then(_0x301696 => {
                  _0x3de736 = _0x301696;
                  _0x2fe097.textContent = "OCR URL: " + _0x301696;
                  _0xfa60aa.value = "Đã đổi nhiệm vụ, thử lại...";
                  setTimeout(() => _0x3f726f(), 1000);
                })["catch"](() => {
                  _0xfa60aa.value = "Lỗi nhận diện URL mới!";
                });
              }, 2000);
            } else {
              _0xfa60aa.value = "Không thể đổi nhiệm vụ!";
            }
          }, 1000);
        }
        sessionStorage.removeItem("ymnclk");
        localStorage.removeItem("codexn");
      } catch (_0x371473) {
        console.error("Bypass Lỗi:", _0x371473);
        _0xfa60aa.value = "Lỗi không xác định!";
        _0xfa60aa.readOnly = false;
      }
    };
    _0x49ac91.appendChild(_0x2c81a2);
    const _0x52e24b = document.createElement("button");
    _0x52e24b.textContent = "Đổi Nhiệm Vụ";
    _0x52e24b.className = "btn-change";
    _0x52e24b.onclick = async () => {
      _0xfa60aa.readOnly = true;
      _0xfa60aa.value = "Đang Đổi Nhiệm Vụ...";
      const _0x2ff0e8 = _0x2d74bb();
      if (_0x2ff0e8) {
        setTimeout(() => {
          _0x45f249().then(_0x4696d9 => {
            _0x3de736 = _0x4696d9;
            _0x2fe097.textContent = "OCR URL: " + _0x4696d9;
            _0xfa60aa.value = "Đã đổi nhiệm vụ thành công!";
            _0xfa60aa.readOnly = false;
          })["catch"](() => {
            _0xfa60aa.value = "Lỗi nhận diện URL mới!";
            _0xfa60aa.readOnly = false;
          });
        }, 2000);
      } else {
        _0xfa60aa.value = "Không thể đổi nhiệm vụ!";
        _0xfa60aa.readOnly = false;
      }
    };
    _0x49ac91.appendChild(_0x52e24b);
    _0x379ecf.appendChild(_0x49ac91);
    const _0x4632be = document.createElement("div");
    _0x4632be.className = "extra-buttons";
    const _0x34982a = document.createElement("button");
    _0x34982a.textContent = "Fake IP";
    _0x34982a.className = "btn-fakeip";
    if (_0x456ed1) {
      _0x34982a.classList.add("active");
    }
    _0x34982a.onclick = async () => {
      if (!_0x456ed1) {
        _0xfa60aa.value = "Đang tìm proxy sống...";
        const _0x1859d8 = await _0x1b9dfd('US');
        if (_0x1859d8) {
          await _0x1d9271(_0x1859d8);
          _0x456ed1 = true;
          _0x34982a.classList.add("active");
          _0xfa60aa.value = "Fake IP ON: " + _0x1859d8.ip + ':' + _0x1859d8.port;
        } else {
          _0xfa60aa.value = "Không tìm được proxy sống!";
        }
      } else {
        _0x51be1e();
        _0x456ed1 = false;
        _0x34982a.classList.remove("active");
        _0xfa60aa.value = "Fake IP OFF";
      }
    };
    _0x4632be.appendChild(_0x34982a);
    const _0x378588 = document.createElement("button");
    _0x378588.textContent = "Fake Browser";
    _0x378588.className = "btn-fakebrowser";
    if (_0xeb75e1) {
      _0x378588.classList.add("active");
    }
    _0x378588.onclick = () => {
      if (!_0xeb75e1) {
        const _0x440e34 = _0x1b8b18();
        _0xad6ce6(_0x440e34);
        _0xeb75e1 = true;
        _0x378588.classList.add("active");
        _0xfa60aa.value = "Fake Browser ON: " + _0x440e34.userAgent.substring(0, 20) + "...";
      } else {
        _0xcf8d64();
        _0xeb75e1 = false;
        _0x378588.classList.remove("active");
        _0xfa60aa.value = "Fake Browser OFF";
      }
    };
    _0x4632be.appendChild(_0x378588);
    const _0x192995 = document.createElement("button");
    _0x192995.textContent = "Copy Code";
    _0x192995.className = "btn-copy";
    _0x192995.onclick = () => {
      const _0x275efd = GM_getValue("lastBypassCode", '');
      if (_0x275efd) {
        navigator.clipboard.writeText(_0x275efd).then(() => {
          _0x192995.classList.add("copied");
          setTimeout(() => _0x192995.classList.remove("copied"), 1500);
          const _0xac973b = document.createElement("div");
          _0xac973b.className = "copy-notif";
          _0xac973b.textContent = "Đã sao chép mã: " + _0x275efd;
          document.body.appendChild(_0xac973b);
          setTimeout(() => _0xac973b.classList.add("show"), 10);
          setTimeout(() => {
            _0xac973b.classList.remove("show");
            setTimeout(() => _0xac973b.remove(), 500);
          }, 2000);
        })["catch"](_0x25c044 => {
          console.error("Lỗi sao chép:", _0x25c044);
          _0xfa60aa.value = "Lỗi khi sao chép code!";
        });
      } else {
        _0xfa60aa.value = "Chưa có code để sao chép!";
      }
    };
    _0x4632be.appendChild(_0x192995);
    _0x379ecf.appendChild(_0x4632be);
    const _0x28e955 = document.createElement("div");
    _0x28e955.className = "author-text";
    _0x28e955.textContent = "Coded By Khai Hack Game • 0348560360";
    _0x54575a.appendChild(_0x379ecf);
    _0x54575a.appendChild(_0x28e955);
    document.body.appendChild(_0x54575a);
    if (_0x4bbff.checked) {
      _0x2c81a2.click();
    }
    _0xff945a.addEventListener("change", () => GM_setValue("fetchCode", _0xff945a.checked));
    _0x4bbff.addEventListener("change", () => GM_setValue("autoStart", _0x4bbff.checked));
  }
  const _0x19fe0e = window.location.href;
  window.onload = () => {
    if (_0x19fe0e.includes("https://yeumoney.com/")) {
      _0x45f249().then(_0x58b194 => {
        _0x1fe4e8(_0x58b194);
      })["catch"](_0x143261 => {
        console.error("Lỗi khi nhận diện URL:", _0x143261);
        _0x1fe4e8("Lỗi! Tự nhập URL hoặc Reload");
      });
    } else {
      if (_0x19fe0e.includes("https://docs.google.com/spreadsheets/")) {
        _0x1349ad().then(_0x2f6f26 => {
          if (_0x2f6f26) {
            window.location.href = _0x2f6f26;
          }
        })["catch"](_0x5d69a3 => console.error("Lỗi khi gọi hàm:", _0x5d69a3));
      } else if (_0x19fe0e.includes("https://docs.google.com/forms/")) {
        _0x4f112a();
      }
    }
  };
})();
function _0x1aa92d(_0x513d78) {
  function _0x5b633f(_0xbe4b73) {
    if (typeof _0xbe4b73 === "string") {
      return function (_0x3f7229) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0xbe4b73 / _0xbe4b73).length !== 1 || _0xbe4b73 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x5b633f(++_0xbe4b73);
  }
  try {
    if (_0x513d78) {
      return _0x5b633f;
    } else {
      _0x5b633f(0);
    }
  } catch (_0x176cb0) {}
}
(function () {
  let _0xd16ea6;
  try {
    const _0x468147 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xd16ea6 = _0x468147();
  } catch (_0x137450) {
    _0xd16ea6 = window;
  }
  _0xd16ea6.setInterval(_0x1aa92d, 4000);
})();
