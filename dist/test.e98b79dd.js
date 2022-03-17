// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = ".skin *{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.skin *::before,\n.skin *::after {\n  box-sizing: border-box;\n}\n.skin {\n  background-color: #ffe600;\n  min-height: 50vh;\n  position: relative;\n}\n.nose {\n  position: absolute;\n  border: solid 14px transparent;\n  top: 50%;\n  left: 50%;\n  margin-left: -14px;\n  margin-top: -14px;\n  border-top-color: #000;\n  border-radius: 50%;\n  z-index: 20;\n}\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.nose:hover {\n  animation: wave 300ms infinite linear;\n}\n.eye {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #000;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -18px;\n  margin-top: -18px;\n  transform: translateY(10px);\n  border-radius: 50%;\n  background-color: #2e2e2e;\n}\n\n.eye::before {\n  content: \"\";\n  display: block;\n  width: 16px;\n  height: 16px;\n  border: 1px solid #000;\n  background-color: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 4px;\n  top: 2px;\n}\n.eye.left {\n  transform: translateX(-88px) translateY(-30px);\n}\n.eye.right {\n  transform: translateX(88px) translateY(-30px);\n}\n.mouth {\n  width: 140px;\n  height: 100px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -70px;\n  transform: translateY(10px);\n}\n.mouth .up {\n  position: relative;\n  top: -20px;\n}\n.mouth .up .lip {\n  position: absolute;\n  width: 70px;\n  height: 22px;\n  border-bottom: 2px solid #000;\n  left: 50%;\n  margin-left: -35px;\n  background-color: #ffe600;\n  z-index: 10;\n}\n.mouth .up .lip.left {\n  border-radius: 0 0 0 24px;\n  border-left: 2px solid #000;\n  transform: rotate(-15deg) translateX(-37px);\n}\n.mouth .up .lip.right {\n  border-right: 2px solid #000;\n  border-radius: 0 0 24px 0;\n  transform: rotate(15deg) translateX(37px);\n}\n.mouth .down {\n  width: 100%;\n  height: 100px;\n  position: absolute;\n  overflow: hidden;\n}\n.mouth .down .outside {\n  width: 160px;\n  height: 1000px;\n  border: 2px solid #000;\n  position: absolute;\n  left: 50%;\n  margin-left: -80px;\n  border-radius: 100px/600px;\n  bottom: 0;\n  background-color: #8c1d1c;\n  overflow: hidden;\n}\n.mouth .down .outside .inside {\n  width: 100px;\n  height: 300px;\n  position: absolute;\n  bottom: -226px;\n  border-radius: 100px;\n  left: 50%;\n  margin-left: -50px;\n  background-color: #ea5866;\n}\n.face {\n  position: absolute;\n  width: 46px;\n  height: 46px;\n  border: 2px solid #000;\n  background-color: #e8352e;\n  left: 50%;\n  margin-left: -23px;\n  border-radius: 50%;\n  top: 50%;\n}\n.face.left {\n  transform: translateX(-160px);\n}\n.face.right {\n  transform: translateX(160px);\n}\n\n";
var player = {
  n: 1,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerHTML = string.substring(0, player.n);
    player.ui.demo2.innerText = string.substring(0, player.n);
    player.bindEvents();
    player.play(100);
  },
  events: {
    '#btnPause': 'pause',
    '#btnBegin': 'begin',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerHTML = string.substring(0, player.n);
    player.ui.demo2.innerText = string.substring(0, player.n);
    player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight;
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  play: function play(speed) {
    player.pause();
    player.id = setInterval(player.run, speed);
  },
  begin: function begin() {
    player.play(100);
  },
  slow: function slow() {
    player.play(300);
  },
  normal: function normal() {
    player.play(100);
  },
  fast: function fast() {
    player.play(0);
  }
};
player.init();
},{}],"../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60642" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map