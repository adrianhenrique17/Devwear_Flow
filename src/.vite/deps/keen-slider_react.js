import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/keen-slider/react.js
var require_react2 = __commonJS({
  "node_modules/keen-slider/react.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var n = require_react();
    function t(n2) {
      return Array.prototype.slice.call(n2);
    }
    function e(n2, t2) {
      var e2 = Math.floor(n2);
      return e2 === t2 || e2 + 1 === t2 ? n2 : t2;
    }
    function i() {
      return Date.now();
    }
    function r(n2, t2, e2) {
      if (t2 = "data-keen-slider-" + t2, null === e2) return n2.removeAttribute(t2);
      n2.setAttribute(t2, e2 || "");
    }
    function a(n2, e2) {
      return e2 = e2 || document, "function" == typeof n2 && (n2 = n2(e2)), Array.isArray(n2) ? n2 : "string" == typeof n2 ? t(e2.querySelectorAll(n2)) : n2 instanceof HTMLElement ? [n2] : n2 instanceof NodeList ? t(n2) : [];
    }
    function o(n2) {
      n2.raw && (n2 = n2.raw), n2.cancelable && !n2.defaultPrevented && n2.preventDefault();
    }
    function u(n2) {
      n2.raw && (n2 = n2.raw), n2.stopPropagation && n2.stopPropagation();
    }
    function c() {
      var n2 = [];
      return { add: function(t2, e2, i2, r2) {
        t2.addListener ? t2.addListener(i2) : t2.addEventListener(e2, i2, r2), n2.push([t2, e2, i2, r2]);
      }, input: function(n3, t2, e2, i2) {
        this.add(n3, t2, /* @__PURE__ */ function(n4) {
          return function(t3) {
            t3.nativeEvent && (t3 = t3.nativeEvent);
            var e3 = t3.changedTouches || [], i3 = t3.targetTouches || [], r2 = t3.detail && t3.detail.x ? t3.detail : null;
            return n4({ id: r2 ? r2.identifier ? r2.identifier : "i" : i3[0] ? i3[0] ? i3[0].identifier : "e" : "d", idChanged: r2 ? r2.identifier ? r2.identifier : "i" : e3[0] ? e3[0] ? e3[0].identifier : "e" : "d", raw: t3, x: r2 && r2.x ? r2.x : i3[0] ? i3[0].screenX : r2 ? r2.x : t3.pageX, y: r2 && r2.y ? r2.y : i3[0] ? i3[0].screenY : r2 ? r2.y : t3.pageY });
          };
        }(e2), i2);
      }, purge: function() {
        n2.forEach(function(n3) {
          n3[0].removeListener ? n3[0].removeListener(n3[2]) : n3[0].removeEventListener(n3[1], n3[2], n3[3]);
        }), n2 = [];
      } };
    }
    function s(n2, t2, e2) {
      return Math.min(Math.max(n2, t2), e2);
    }
    function d(n2) {
      return (n2 > 0 ? 1 : 0) - (n2 < 0 ? 1 : 0) || +n2;
    }
    function l(n2) {
      var t2 = n2.getBoundingClientRect();
      return { height: e(t2.height, n2.offsetHeight), width: e(t2.width, n2.offsetWidth) };
    }
    function f(n2, t2, e2, i2) {
      var r2 = n2 && n2[t2];
      return null == r2 ? e2 : i2 && "function" == typeof r2 ? r2() : r2;
    }
    function p(n2) {
      return Math.round(1e6 * n2) / 1e6;
    }
    function v(n2, t2) {
      if (n2 === t2) return true;
      var e2 = typeof n2;
      if (e2 !== typeof t2) return false;
      if ("object" !== e2 || null === n2 || null === t2) return "function" === e2 && n2.toString() === t2.toString();
      if (n2.length !== t2.length || Object.getOwnPropertyNames(n2).length !== Object.getOwnPropertyNames(t2).length) return false;
      for (var i2 in n2) if (!v(n2[i2], t2[i2])) return false;
      return true;
    }
    var h = function() {
      return h = Object.assign || function(n2) {
        for (var t2, e2 = 1, i2 = arguments.length; e2 < i2; e2++) for (var r2 in t2 = arguments[e2]) Object.prototype.hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
        return n2;
      }, h.apply(this, arguments);
    };
    function m(n2, t2, e2) {
      if (e2 || 2 === arguments.length) for (var i2, r2 = 0, a2 = t2.length; r2 < a2; r2++) !i2 && r2 in t2 || (i2 || (i2 = Array.prototype.slice.call(t2, 0, r2)), i2[r2] = t2[r2]);
      return n2.concat(i2 || Array.prototype.slice.call(t2));
    }
    function g(n2) {
      var t2, e2, i2, r2, a2, o2;
      function u2(t3) {
        o2 || (o2 = t3), c2(true);
        var a3 = t3 - o2;
        a3 > i2 && (a3 = i2);
        var l3 = r2[e2];
        if (l3[3] < a3) return e2++, u2(t3);
        var f2 = l3[2], p2 = l3[4], v2 = l3[0], h2 = l3[1] * (0, l3[5])(0 === p2 ? 1 : (a3 - f2) / p2);
        if (h2 && n2.track.to(v2 + h2), a3 < i2) return d2();
        o2 = null, c2(false), s2(null), n2.emit("animationEnded");
      }
      function c2(n3) {
        t2.active = n3;
      }
      function s2(n3) {
        t2.targetIdx = n3;
      }
      function d2() {
        var n3;
        n3 = u2, a2 = window.requestAnimationFrame(n3);
      }
      function l2() {
        var t3;
        t3 = a2, window.cancelAnimationFrame(t3), c2(false), s2(null), o2 && n2.emit("animationStopped"), o2 = null;
      }
      return t2 = { active: false, start: function(t3) {
        if (l2(), n2.track.details) {
          var a3 = 0, o3 = n2.track.details.position;
          e2 = 0, i2 = 0, r2 = t3.map(function(n3) {
            var t4, e3 = Number(o3), r3 = null !== (t4 = n3.earlyExit) && void 0 !== t4 ? t4 : n3.duration, u3 = n3.easing, c3 = n3.distance * u3(r3 / n3.duration) || 0;
            o3 += c3;
            var s3 = i2;
            return i2 += r3, a3 += c3, [e3, n3.distance, s3, i2, n3.duration, u3];
          }), s2(n2.track.distToIdx(a3)), d2(), n2.emit("animationStarted");
        }
      }, stop: l2, targetIdx: null };
    }
    function b(n2) {
      var t2, e2, r2, a2, o2, u2, c2, l2, v2, h2, g2, b2, y2, x2, k2 = 1 / 0, w2 = [], M2 = null, T = 0;
      function C(n3) {
        P(T + n3);
      }
      function E(n3) {
        var t3 = z(T + n3).abs;
        return O(t3) ? t3 : null;
      }
      function z(n3) {
        var t3 = Math.floor(Math.abs(p(n3 / e2))), i2 = p((n3 % e2 + e2) % e2);
        i2 === e2 && (i2 = 0);
        var r3 = d(n3), a3 = c2.indexOf(m([], c2, true).reduce(function(n4, t4) {
          return Math.abs(t4 - i2) < Math.abs(n4 - i2) ? t4 : n4;
        })), o3 = a3;
        return r3 < 0 && t3++, a3 === u2 && (o3 = 0, t3 += r3 > 0 ? 1 : -1), { abs: o3 + t3 * u2 * r3, origin: a3, rel: o3 };
      }
      function I(n3, t3, e3) {
        var i2;
        if (t3 || !S()) return A(n3, e3);
        if (!O(n3)) return null;
        var r3 = z(null != e3 ? e3 : T), a3 = r3.abs, o3 = n3 - r3.rel, c3 = a3 + o3;
        i2 = A(c3);
        var s2 = A(c3 - u2 * d(o3));
        return (null !== s2 && Math.abs(s2) < Math.abs(i2) || null === i2) && (i2 = s2), p(i2);
      }
      function A(n3, t3) {
        if (null == t3 && (t3 = p(T)), !O(n3) || null === n3) return null;
        n3 = Math.round(n3);
        var i2 = z(t3), r3 = i2.abs, a3 = i2.rel, o3 = i2.origin, s2 = L(n3), d2 = (t3 % e2 + e2) % e2, l3 = c2[o3], f2 = Math.floor((n3 - (r3 - a3)) / u2) * e2;
        return p(l3 - d2 - l3 + c2[s2] + f2 + (o3 === u2 ? e2 : 0));
      }
      function O(n3) {
        return D(n3) === n3;
      }
      function D(n3) {
        return s(n3, v2, h2);
      }
      function S() {
        return a2.loop;
      }
      function L(n3) {
        return (n3 % u2 + u2) % u2;
      }
      function P(t3) {
        var e3;
        e3 = t3 - T, w2.push({ distance: e3, timestamp: i() }), w2.length > 6 && (w2 = w2.slice(-6)), T = p(t3);
        var r3 = _().abs;
        if (r3 !== M2) {
          var a3 = null !== M2;
          M2 = r3, a3 && n2.emit("slideChanged");
        }
      }
      function _(i2) {
        var c3 = i2 ? null : function() {
          if (u2) {
            var n3 = S(), t3 = n3 ? (T % e2 + e2) % e2 : T, i3 = (n3 ? T % e2 : T) - o2[0][2], c4 = 0 - (i3 < 0 && n3 ? e2 - Math.abs(i3) : i3), s2 = 0, l3 = z(T), f2 = l3.abs, p2 = l3.rel, m2 = o2[p2][2], k3 = o2.map(function(t4, i4) {
              var r3 = c4 + s2;
              (r3 < 0 - t4[0] || r3 > 1) && (r3 += (Math.abs(r3) > e2 - 1 && n3 ? e2 : 0) * d(-r3));
              var o3 = i4 - p2, l4 = d(o3), v3 = o3 + f2;
              n3 && (-1 === l4 && r3 > m2 && (v3 += u2), 1 === l4 && r3 < m2 && (v3 -= u2), null !== g2 && v3 < g2 && (r3 += e2), null !== b2 && v3 > b2 && (r3 -= e2));
              var h3 = r3 + t4[0] + t4[1], y3 = Math.max(r3 >= 0 && h3 <= 1 ? 1 : h3 < 0 || r3 > 1 ? 0 : r3 < 0 ? Math.min(1, (t4[0] + r3) / t4[0]) : (1 - r3) / t4[0], 0);
              return s2 += t4[0] + t4[1], { abs: v3, distance: a2.rtl ? -1 * r3 + 1 - t4[0] : r3, portion: y3, size: t4[0] };
            });
            return f2 = D(f2), p2 = L(f2), { abs: D(f2), length: r2, max: x2, maxIdx: h2, min: y2, minIdx: v2, position: T, progress: n3 ? t3 / e2 : T / r2, rel: p2, slides: k3, slidesLength: e2 };
          }
        }();
        return t2.details = c3, n2.emit("detailsChanged"), c3;
      }
      return t2 = { absToRel: L, add: C, details: null, distToIdx: E, idxToDist: I, init: function(t3) {
        if (function() {
          if (a2 = n2.options, o2 = (a2.trackConfig || []).map(function(n3) {
            return [f(n3, "size", 1), f(n3, "spacing", 0), f(n3, "origin", 0)];
          }), u2 = o2.length) {
            e2 = p(o2.reduce(function(n3, t5) {
              return n3 + t5[0] + t5[1];
            }, 0));
            var t4, i3 = u2 - 1;
            r2 = p(e2 + o2[0][2] - o2[i3][0] - o2[i3][2] - o2[i3][1]), c2 = o2.reduce(function(n3, e3) {
              if (!n3) return [0];
              var i4 = o2[n3.length - 1], r3 = n3[n3.length - 1] + (i4[0] + i4[2]) + i4[1];
              return r3 -= e3[2], n3[n3.length - 1] > r3 && (r3 = n3[n3.length - 1]), r3 = p(r3), n3.push(r3), (!t4 || t4 < r3) && (l2 = n3.length - 1), t4 = r3, n3;
            }, null), 0 === r2 && (l2 = 0), c2.push(p(e2));
          }
        }(), !u2) return _(true);
        var i2;
        !function() {
          var t4 = n2.options.range, e3 = n2.options.loop;
          g2 = v2 = e3 ? f(e3, "min", -1 / 0) : 0, b2 = h2 = e3 ? f(e3, "max", k2) : l2;
          var i3 = f(t4, "min", null), r3 = f(t4, "max", null);
          null !== i3 && (v2 = i3), null !== r3 && (h2 = r3), y2 = v2 === -1 / 0 ? v2 : n2.track.idxToDist(v2 || 0, true, 0), x2 = h2 === k2 ? h2 : I(h2, true, 0), null === r3 && (b2 = h2), f(t4, "align", false) && h2 !== k2 && 0 === o2[L(h2)][2] && (x2 -= 1 - o2[L(h2)][0], h2 = E(x2 - T)), y2 = p(y2), x2 = p(x2);
        }(), i2 = t3, Number(i2) === i2 ? C(A(D(t3))) : _();
      }, to: P, velocity: function() {
        var n3 = i(), t3 = w2.reduce(function(t4, e3) {
          var i2 = e3.distance, r3 = e3.timestamp;
          return n3 - r3 > 200 || (d(i2) !== d(t4.distance) && t4.distance && (t4 = { distance: 0, lastTimestamp: 0, time: 0 }), t4.time && (t4.distance += i2), t4.lastTimestamp && (t4.time += r3 - t4.lastTimestamp), t4.lastTimestamp = r3), t4;
        }, { distance: 0, lastTimestamp: 0, time: 0 });
        return t3.distance / t3.time || 0;
      } };
    }
    function y(n2) {
      var t2, e2, i2, r2, a2, o2, u2, c2;
      function l2(n3) {
        return 2 * n3;
      }
      function f2(n3) {
        return s(n3, u2, c2);
      }
      function p2(n3) {
        return 1 - Math.pow(1 - n3, 3);
      }
      function v2() {
        return i2 ? n2.track.velocity() : 0;
      }
      function h2() {
        b2();
        var t3 = "free-snap" === n2.options.mode, e3 = n2.track, i3 = v2();
        r2 = d(i3);
        var u3 = n2.track.details, c3 = [];
        if (i3 || !t3) {
          var s2 = m2(i3), h3 = s2.dist, g3 = s2.dur;
          if (g3 = l2(g3), h3 *= r2, t3) {
            var y2 = e3.idxToDist(e3.distToIdx(h3), true);
            y2 && (h3 = y2);
          }
          c3.push({ distance: h3, duration: g3, easing: p2 });
          var x2 = u3.position, k2 = x2 + h3;
          if (k2 < a2 || k2 > o2) {
            var w2 = k2 < a2 ? a2 - x2 : o2 - x2, M2 = 0, T = i3;
            if (d(w2) === r2) {
              var C = Math.min(Math.abs(w2) / Math.abs(h3), 1), E = function(n3) {
                return 1 - Math.pow(1 - n3, 1 / 3);
              }(C) * g3;
              c3[0].earlyExit = E, T = i3 * (1 - C);
            } else c3[0].earlyExit = 0, M2 += w2;
            var z = m2(T, 100), I = z.dist * r2;
            n2.options.rubberband && (c3.push({ distance: I, duration: l2(z.dur), easing: p2 }), c3.push({ distance: -I + M2, duration: 500, easing: p2 }));
          }
          n2.animator.start(c3);
        } else n2.moveToIdx(f2(u3.abs), true, { duration: 500, easing: function(n3) {
          return 1 + --n3 * n3 * n3 * n3 * n3;
        } });
      }
      function m2(n3, t3) {
        void 0 === t3 && (t3 = 1e3);
        var e3 = 147e-9 + (n3 = Math.abs(n3)) / t3;
        return { dist: Math.pow(n3, 2) / e3, dur: n3 / e3 };
      }
      function g2() {
        var t3 = n2.track.details;
        t3 && (a2 = t3.min, o2 = t3.max, u2 = t3.minIdx, c2 = t3.maxIdx);
      }
      function b2() {
        n2.animator.stop();
      }
      n2.on("updated", g2), n2.on("optionsChanged", g2), n2.on("created", g2), n2.on("dragStarted", function() {
        i2 = false, b2(), t2 = e2 = n2.track.details.abs;
      }), n2.on("dragChecked", function() {
        i2 = true;
      }), n2.on("dragEnded", function() {
        var i3 = n2.options.mode;
        "snap" === i3 && function() {
          var i4 = n2.track, r3 = n2.track.details, u3 = r3.position, c3 = d(v2());
          (u3 > o2 || u3 < a2) && (c3 = 0);
          var s2 = t2 + c3;
          0 === r3.slides[i4.absToRel(s2)].portion && (s2 -= c3), t2 !== e2 && (s2 = e2), d(i4.idxToDist(s2, true)) !== c3 && (s2 += c3), s2 = f2(s2);
          var l3 = i4.idxToDist(s2, true);
          n2.animator.start([{ distance: l3, duration: 500, easing: function(n3) {
            return 1 + --n3 * n3 * n3 * n3 * n3;
          } }]);
        }(), "free" !== i3 && "free-snap" !== i3 || h2();
      }), n2.on("dragged", function() {
        e2 = n2.track.details.abs;
      });
    }
    function x(n2) {
      var t2, e2, i2, r2, l2, f2, p2, v2, h2, m2, g2, b2, y2, x2, k2, w2, M2, T, C = c();
      function E(t3) {
        if (f2 && v2 === t3.id) {
          var a2 = O(t3);
          if (h2) {
            if (!A(t3)) return I(t3);
            m2 = a2, h2 = false, n2.emit("dragChecked");
          }
          if (w2) return m2 = a2;
          o(t3);
          var c2 = function(t4) {
            if (M2 === -1 / 0 && T === 1 / 0) return t4;
            var i3 = n2.track.details, a3 = i3.length, o2 = i3.position, u2 = s(t4, M2 - o2, T - o2);
            if (0 === a3) return 0;
            if (!n2.options.rubberband) return u2;
            if (o2 <= T && o2 >= M2) return t4;
            if (o2 < M2 && e2 > 0 || o2 > T && e2 < 0) return t4;
            var c3 = (o2 < M2 ? o2 - M2 : o2 - T) / a3, d2 = r2 * a3, f3 = Math.abs(c3 * d2), p3 = Math.max(0, 1 - f3 / l2 * 2);
            return p3 * p3 * t4;
          }(p2(m2 - a2) / r2 * i2);
          e2 = d(c2);
          var y3 = n2.track.details.position;
          (y3 > M2 && y3 < T || y3 === M2 && e2 > 0 || y3 === T && e2 < 0) && u(t3), g2 += c2, !b2 && Math.abs(g2 * r2) > 5 && (b2 = true), n2.track.add(c2), m2 = a2, n2.emit("dragged");
        }
      }
      function z(t3) {
        !f2 && n2.track.details && n2.track.details.length && (g2 = 0, f2 = true, b2 = false, h2 = true, v2 = t3.id, A(t3), m2 = O(t3), n2.emit("dragStarted"));
      }
      function I(t3) {
        f2 && v2 === t3.idChanged && (f2 = false, n2.emit("dragEnded"));
      }
      function A(n3) {
        var t3 = D(), e3 = t3 ? n3.y : n3.x, i3 = t3 ? n3.x : n3.y, r3 = void 0 !== y2 && void 0 !== x2 && Math.abs(x2 - i3) <= Math.abs(y2 - e3);
        return y2 = e3, x2 = i3, r3;
      }
      function O(n3) {
        return D() ? n3.y : n3.x;
      }
      function D() {
        return n2.options.vertical;
      }
      function S() {
        r2 = n2.size, l2 = D() ? window.innerHeight : window.innerWidth;
        var t3 = n2.track.details;
        t3 && (M2 = t3.min, T = t3.max);
      }
      function L(n3) {
        b2 && (u(n3), o(n3));
      }
      function P() {
        if (C.purge(), n2.options.drag && !n2.options.disabled) {
          var e3;
          e3 = n2.options.dragSpeed || 1, p2 = "function" == typeof e3 ? e3 : function(n3) {
            return n3 * e3;
          }, i2 = n2.options.rtl ? -1 : 1, S(), t2 = n2.container, function() {
            var n3 = "data-keen-slider-clickable";
            a("[".concat(n3, "]:not([").concat(n3, "=false])"), t2).map(function(n4) {
              C.add(n4, "dragstart", u), C.add(n4, "mousedown", u), C.add(n4, "touchstart", u);
            });
          }(), C.add(t2, "dragstart", function(n3) {
            o(n3);
          }), C.add(t2, "click", L, { capture: true }), C.input(t2, "ksDragStart", z), C.input(t2, "ksDrag", E), C.input(t2, "ksDragEnd", I), C.input(t2, "mousedown", z), C.input(t2, "mousemove", E), C.input(t2, "mouseleave", I), C.input(t2, "mouseup", I), C.input(t2, "touchstart", z, { passive: true }), C.input(t2, "touchmove", E, { passive: false }), C.input(t2, "touchend", I), C.input(t2, "touchcancel", I), C.add(window, "wheel", function(n3) {
            f2 && o(n3);
          });
          var r3 = "data-keen-slider-scrollable";
          a("[".concat(r3, "]:not([").concat(r3, "=false])"), n2.container).map(function(n3) {
            return function(n4) {
              var t3;
              C.input(n4, "touchstart", function(n5) {
                t3 = O(n5), w2 = true, k2 = true;
              }, { passive: true }), C.input(n4, "touchmove", function(e4) {
                var i3 = D(), r4 = i3 ? n4.scrollHeight - n4.clientHeight : n4.scrollWidth - n4.clientWidth, a2 = t3 - O(e4), u2 = i3 ? n4.scrollTop : n4.scrollLeft, c2 = i3 && "scroll" === n4.style.overflowY || !i3 && "scroll" === n4.style.overflowX;
                if (t3 = O(e4), (a2 < 0 && u2 > 0 || a2 > 0 && u2 < r4) && k2 && c2) return w2 = true;
                k2 = false, o(e4), w2 = false;
              }), C.input(n4, "touchend", function() {
                w2 = false;
              });
            }(n3);
          });
        }
      }
      n2.on("updated", S), n2.on("optionsChanged", P), n2.on("created", P), n2.on("destroyed", C.purge);
    }
    function k(n2) {
      var t2, e2, i2 = null;
      function r2(t3, e3, i3) {
        n2.animator.active ? o2(t3, e3, i3) : requestAnimationFrame(function() {
          return o2(t3, e3, i3);
        });
      }
      function a2() {
        r2(false, false, e2);
      }
      function o2(e3, r3, a3) {
        var o3 = 0, u3 = n2.size, d3 = n2.track.details;
        if (d3 && t2) {
          var l3 = d3.slides;
          t2.forEach(function(n3, t3) {
            if (e3) !i2 && r3 && c2(n3, null, a3), s2(n3, null, a3);
            else {
              if (!l3[t3]) return;
              var d4 = l3[t3].size * u3;
              !i2 && r3 && c2(n3, d4, a3), s2(n3, l3[t3].distance * u3 - o3, a3), o3 += d4;
            }
          });
        }
      }
      function u2(t3) {
        return "performance" === n2.options.renderMode ? Math.round(t3) : t3;
      }
      function c2(n3, t3, e3) {
        var i3 = e3 ? "height" : "width";
        null !== t3 && (t3 = u2(t3) + "px"), n3.style["min-" + i3] = t3, n3.style["max-" + i3] = t3;
      }
      function s2(n3, t3, e3) {
        if (null !== t3) {
          t3 = u2(t3);
          var i3 = e3 ? t3 : 0;
          t3 = "translate3d(".concat(e3 ? 0 : t3, "px, ").concat(i3, "px, 0)");
        }
        n3.style.transform = t3, n3.style["-webkit-transform"] = t3;
      }
      function d2() {
        t2 && (o2(true, true, e2), t2 = null), n2.on("detailsChanged", a2, true);
      }
      function l2() {
        r2(false, true, e2);
      }
      function p2() {
        d2(), e2 = n2.options.vertical, n2.options.disabled || "custom" === n2.options.renderMode || (i2 = "auto" === f(n2.options.slides, "perView", null), n2.on("detailsChanged", a2), (t2 = n2.slides).length && l2());
      }
      n2.on("created", p2), n2.on("optionsChanged", p2), n2.on("beforeOptionsChanged", function() {
        d2();
      }), n2.on("updated", l2), n2.on("destroyed", d2);
    }
    function w(n2, t2) {
      return function(e2) {
        var i2, o2, u2, s2, d2, p2, v2 = c();
        function m2(n3) {
          var t3;
          r(e2.container, "reverse", "rtl" !== (t3 = e2.container, window.getComputedStyle(t3, null).getPropertyValue("direction")) || n3 ? null : ""), r(e2.container, "v", e2.options.vertical && !n3 ? "" : null), r(e2.container, "disabled", e2.options.disabled && !n3 ? "" : null);
        }
        function g2() {
          b2() && M2();
        }
        function b2() {
          var n3 = null;
          if (s2.forEach(function(t4) {
            t4.matches && (n3 = t4.__media);
          }), n3 === i2) return false;
          i2 || e2.emit("beforeOptionsChanged"), i2 = n3;
          var t3 = n3 ? u2.breakpoints[n3] : u2;
          return e2.options = h(h({}, u2), t3), m2(), I(), A(), C(), true;
        }
        function y2(n3) {
          var t3 = l(n3);
          return (e2.options.vertical ? t3.height : t3.width) / e2.size || 1;
        }
        function x2() {
          return e2.options.trackConfig.length;
        }
        function k2(n3) {
          for (var r2 in i2 = false, u2 = h(h({}, t2), n3), v2.purge(), o2 = e2.size, s2 = [], u2.breakpoints || []) {
            var a2 = window.matchMedia(r2);
            a2.__media = r2, s2.push(a2), v2.add(a2, "change", g2);
          }
          v2.add(window, "orientationchange", z), v2.add(window, "resize", E), b2();
        }
        function w2(n3) {
          e2.animator.stop();
          var t3 = e2.track.details;
          e2.track.init(null != n3 ? n3 : t3 ? t3.abs : 0);
        }
        function M2(n3) {
          w2(n3), e2.emit("optionsChanged");
        }
        function T(n3, t3) {
          if (n3) return k2(n3), void M2(t3);
          I(), A();
          var i3 = x2();
          C(), x2() !== i3 ? M2(t3) : w2(t3), e2.emit("updated");
        }
        function C() {
          var n3 = e2.options.slides;
          if ("function" == typeof n3) return e2.options.trackConfig = n3(e2.size, e2.slides);
          for (var t3 = e2.slides, i3 = t3.length, r2 = "number" == typeof n3 ? n3 : f(n3, "number", i3, true), a2 = [], o3 = f(n3, "perView", 1, true), u3 = f(n3, "spacing", 0, true) / e2.size || 0, c2 = "auto" === o3 ? u3 : u3 / o3, s3 = f(n3, "origin", "auto"), d3 = 0, l2 = 0; l2 < r2; l2++) {
            var p3 = "auto" === o3 ? y2(t3[l2]) : 1 / o3 - u3 + c2, v3 = "center" === s3 ? 0.5 - p3 / 2 : "auto" === s3 ? 0 : s3;
            a2.push({ origin: v3, size: p3, spacing: u3 }), d3 += p3;
          }
          if (d3 += u3 * (r2 - 1), "auto" === s3 && !e2.options.loop && 1 !== o3) {
            var h2 = 0;
            a2.map(function(n4) {
              var t4 = d3 - h2;
              return h2 += n4.size + u3, t4 >= 1 || (n4.origin = 1 - t4 - (d3 > 1 ? 0 : 1 - d3)), n4;
            });
          }
          e2.options.trackConfig = a2;
        }
        function E() {
          I();
          var n3 = e2.size;
          e2.options.disabled || n3 === o2 || (o2 = n3, T());
        }
        function z() {
          E(), setTimeout(E, 500), setTimeout(E, 2e3);
        }
        function I() {
          var n3 = l(e2.container);
          e2.size = (e2.options.vertical ? n3.height : n3.width) || 1;
        }
        function A() {
          e2.slides = a(e2.options.selector, e2.container);
        }
        e2.container = (p2 = a(n2, d2 || document)).length ? p2[0] : null, e2.destroy = function() {
          v2.purge(), e2.emit("destroyed"), m2(true);
        }, e2.prev = function() {
          e2.moveToIdx(e2.track.details.abs - 1, true);
        }, e2.next = function() {
          e2.moveToIdx(e2.track.details.abs + 1, true);
        }, e2.update = T, k2(e2.options);
      };
    }
    var M = function(n2, t2, e2) {
      try {
        return function(n3, t3) {
          var e3, i2 = {};
          return e3 = { emit: function(n4) {
            i2[n4] && i2[n4].forEach(function(n5) {
              n5(e3);
            });
            var t4 = e3.options && e3.options[n4];
            t4 && t4(e3);
          }, moveToIdx: function(n4, t4, i3) {
            var r2 = e3.track.idxToDist(n4, t4);
            if (r2) {
              var a2 = e3.options.defaultAnimation;
              e3.animator.start([{ distance: r2, duration: f(i3 || a2, "duration", 500), easing: f(i3 || a2, "easing", function(n5) {
                return 1 + --n5 * n5 * n5 * n5 * n5;
              }) }]);
            }
          }, on: function(n4, t4, e4) {
            void 0 === e4 && (e4 = false), i2[n4] || (i2[n4] = []);
            var r2 = i2[n4].indexOf(t4);
            r2 > -1 ? e4 && delete i2[n4][r2] : e4 || i2[n4].push(t4);
          }, options: n3 }, function() {
            if (e3.track = b(e3), e3.animator = g(e3), t3) for (var n4 = 0, i3 = t3; n4 < i3.length; n4++) (0, i3[n4])(e3);
            e3.track.init(e3.options.initial || 0), e3.emit("created");
          }(), e3;
        }(t2, m([w(n2, { drag: true, mode: "snap", renderMode: "precision", rubberband: true, selector: ".keen-slider__slide" }), k, x, y], e2 || [], true));
      } catch (n3) {
        console.error(n3);
      }
    };
    exports.useKeenSlider = function(t2, e2) {
      var i2 = n.useRef(null), r2 = n.useRef(false), a2 = n.useRef(t2), o2 = n.useCallback(function(n2) {
        n2 ? (a2.current = t2, i2.current = new M(n2, t2, e2), r2.current = false) : (i2.current && i2.current.destroy && i2.current.destroy(), i2.current = null);
      }, []);
      return n.useEffect(function() {
        v(a2.current, t2) || (a2.current = t2, i2.current && i2.current.update(a2.current));
      }, [t2]), [o2, i2];
    };
  }
});
export default require_react2();
//# sourceMappingURL=keen-slider_react.js.map
