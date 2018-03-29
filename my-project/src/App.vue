<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    var me = this;
    me.Cufon.now();
  },
  methods: {
    Cufon: function() {
      var m = function () {
        return m.replace.apply(null, arguments)
      };
      var x = m.DOM = {
        ready: (function () {
          var C = false,
            E = {
              loaded: 1,
              complete: 1
            };
          var B = [],
            D = function () {
              if (C) {
                return
              }
              C = true;
              for (var F; F = B.shift(); F()) {
              }
            };
          if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", D, false);
            window.addEventListener("pageshow", D, false)
          }
          if (!window.opera && document.readyState) {
            (function () {
              E[document.readyState] ? D() : setTimeout(arguments.callee, 10)
            })()
          }
          if (document.readyState && document.createStyleSheet) {
            (function () {
              try {
                document.body.doScroll("left");
                D()
              } catch (F) {
                setTimeout(arguments.callee, 1)
              }
            })()
          }
          q(window, "load", D);
          return function (F) {
            if (!arguments.length) {
              D()
            } else {
              C ? F() : B.push(F)
            }
          }
        })(),
        root: function () {
          return document.documentElement || document.body
        }
      };
      var n = m.CSS = {
        Size: function (C, B) {
          this.value = parseFloat(C);
          this.unit = String(C).match(/[a-z%]*$/)[0] || "px";
          this.convert = function (D) {
            return D / B * this.value
          };
          this.convertFrom = function (D) {
            return D / this.value * B
          };
          this.toString = function () {
            return this.value + this.unit
          }
        },
        addClass: function (C, B) {
          var D = C.className;
          C.className = D + (D && " ") + B;
          return C
        },
        color: j(function (C) {
          var B = {};
          B.color = C.replace(/^rgba\((.*?),\s*([\d.]+)\)/, function (E, D, F) {
            B.opacity = parseFloat(F);
            return "rgb(" + D + ")"
          });
          return B
        }),
        fontStretch: j(function (B) {
          if (typeof B == "number") {
            return B
          }
          if (/%$/.test(B)) {
            return parseFloat(B) / 100
          }
          return {
            "ultra-condensed": 0.5,
            "extra-condensed": 0.625,
            condensed: 0.75,
            "semi-condensed": 0.875,
            "semi-expanded": 1.125,
            expanded: 1.25,
            "extra-expanded": 1.5,
            "ultra-expanded": 2
          }[B] || 1
        }),
        getStyle: function (C) {
          var B = document.defaultView;
          if (B && B.getComputedStyle) {
            return new a(B.getComputedStyle(C, null))
          }
          if (C.currentStyle) {
            return new a(C.currentStyle)
          }
          return new a(C.style)
        },
        gradient: j(function (F) {
          var G = {
              id: F,
              type: F.match(/^-([a-z]+)-gradient\(/)[1],
              stops: []
            },
            C = F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);
          for (var E = 0, B = C.length, D; E < B; ++E) {
            D = C[E].split("=", 2).reverse();
            G.stops.push([D[1] || E / (B - 1), D[0]])
          }
          return G
        }),
        quotedList: j(function (E) {
          var D = [],
            C = /\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,
            B;
          while (B = C.exec(E)) {
            D.push(B[3] || B[1])
          }
          return D
        }),
        recognizesMedia: j(function (G) {
          var E = document.createElement("style"),
            D, C, B;
          E.type = "text/css";
          E.media = G;
          try {
            E.appendChild(document.createTextNode("/**/"))
          } catch (F) {
          }
          C = g("head")[0];
          C.insertBefore(E, C.firstChild);
          D = (E.sheet || E.styleSheet);
          B = D && !D.disabled;
          C.removeChild(E);
          return B
        }),
        removeClass: function (D, C) {
          var B = RegExp("(?:^|\\s+)" + C + "(?=\\s|$)", "g");
          D.className = D.className.replace(B, "");
          return D
        },
        supports: function (D, C) {
          var B = document.createElement("span").style;
          if (B[D] === undefined) {
            return false
          }
          B[D] = C;
          return B[D] === C
        },
        textAlign: function (E, D, B, C) {
          if (D.get("textAlign") == "right") {
            if (B > 0) {
              E = " " + E
            }
          } else {
            if (B < C - 1) {
              E += " "
            }
          }
          return E
        },
        textShadow: j(function (F) {
          if (F == "none") {
            return null
          }
          var E = [],
            G = {},
            B, C = 0;
          var D = /(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;
          while (B = D.exec(F)) {
            if (B[0] == ",") {
              E.push(G);
              G = {};
              C = 0
            } else {
              if (B[1]) {
                G.color = B[1]
              } else {
                G[["offX", "offY", "blur"][C++]] = B[2]
              }
            }
          }
          E.push(G);
          return E
        }),
        textTransform: (function () {
          var B = {
            uppercase: function (C) {
              return C.toUpperCase()
            },
            lowercase: function (C) {
              return C.toLowerCase()
            },
            capitalize: function (C) {
              return C.replace(/\b./g, function (D) {
                return D.toUpperCase()
              })
            }
          };
          return function (E, D) {
            var C = B[D.get("textTransform")];
            return C ? C(E) : E
          }
        })(),
        whiteSpace: (function () {
          var D = {
            inline: 1,
            "inline-block": 1,
            "run-in": 1
          };
          var C = /^\s+/,
            B = /\s+$/;
          return function (H, F, G, E) {
            if (E) {
              if (E.nodeName.toLowerCase() == "br") {
                H = H.replace(C, "")
              }
            }
            if (D[F.get("display")]) {
              return H
            }
            if (!G.previousSibling) {
              H = H.replace(C, "")
            }
            if (!G.nextSibling) {
              H = H.replace(B, "")
            }
            return H
          }
        })()
      };
      n.ready = (function () {
        var B = !n.recognizesMedia("all"),
          E = false;
        var D = [],
          H = function () {
            B = true;
            for (var K; K = D.shift(); K()) {
            }
          };
        var I = g("link"),
          J = g("style");

        function C(K) {
          return K.disabled || G(K.sheet, K.media || "screen")
        }

        function G(M, P) {
          if (!n.recognizesMedia(P || "all")) {
            return true
          }
          if (!M || M.disabled) {
            return false
          }
          try {
            var Q = M.cssRules,
              O;
            if (Q) {
              search: for (var L = 0, K = Q.length; O = Q[L], L < K; ++L) {
                switch (O.type) {
                  case 2:
                    break;
                  case 3:
                    if (!G(O.styleSheet, O.media.mediaText)) {
                      return false
                    }
                    break;
                  default:
                    break search
                }
              }
            }
          } catch (N) {
          }
          return true
        }

        function F() {
          if (document.createStyleSheet) {
            return true
          }
          var L, K;
          for (K = 0; L = I[K]; ++K) {
            if (L.rel.toLowerCase() == "stylesheet" && !C(L)) {
              return false
            }
          }
          for (K = 0; L = J[K]; ++K) {
            if (!C(L)) {
              return false
            }
          }
          return true
        }

        x.ready(function () {
          if (!E) {
            E = n.getStyle(document.body).isUsable()
          }
          if (B || (E && F())) {
            H()
          } else {
            setTimeout(arguments.callee, 10)
          }
        });
        return function (K) {
          if (B) {
            K()
          } else {
            D.push(K)
          }
        }
      })();

      function s(D) {
        var C = this.face = D.face,
          B = {
            "\u0020": 1,
            "\u00a0": 1,
            "\u3000": 1
          };
        this.glyphs = D.glyphs;
        this.w = D.w;
        this.baseSize = parseInt(C["units-per-em"], 10);
        this.family = C["font-family"].toLowerCase();
        this.weight = C["font-weight"];
        this.style = C["font-style"] || "normal";
        this.viewBox = (function () {
          var F = C.bbox.split(/\s+/);
          var E = {
            minX: parseInt(F[0], 10),
            minY: parseInt(F[1], 10),
            maxX: parseInt(F[2], 10),
            maxY: parseInt(F[3], 10)
          };
          E.width = E.maxX - E.minX;
          E.height = E.maxY - E.minY;
          E.toString = function () {
            return [this.minX, this.minY, this.width, this.height].join(" ")
          };
          return E
        })();
        this.ascent = -parseInt(C.ascent, 10);
        this.descent = -parseInt(C.descent, 10);
        this.height = -this.ascent + this.descent;
        this.spacing = function (L, N, E) {
          var O = this.glyphs,
            M, K, G, P = [],
            F = 0,
            J = -1,
            I = -1,
            H;
          while (H = L[++J]) {
            M = O[H] || this.missingGlyph;
            if (!M) {
              continue
            }
            if (K) {
              F -= G = K[H] || 0;
              P[I] -= G
            }
            F += P[++I] = ~~(M.w || this.w) + N + (B[H] ? E : 0);
            K = M.k
          }
          P.total = F;
          return P
        }
      }

      function f() {
        var C = {},
          B = {
            oblique: "italic",
            italic: "oblique"
          };
        this.add = function (D) {
          (C[D.style] || (C[D.style] = {}))[D.weight] = D
        };
        this.get = function (H, I) {
          var G = C[H] || C[B[H]] || C.normal || C.italic || C.oblique;
          if (!G) {
            return null
          }
          I = {
            normal: 400,
            bold: 700
          }[I] || parseInt(I, 10);
          if (G[I]) {
            return G[I]
          }
          var E = {
              1: 1,
              99: 0
            }[I % 100],
            K = [],
            F, D;
          if (E === undefined) {
            E = I > 400
          }
          if (I == 500) {
            I = 400
          }
          for (var J in G) {
            if (!k(G, J)) {
              continue
            }
            J = parseInt(J, 10);
            if (!F || J < F) {
              F = J
            }
            if (!D || J > D) {
              D = J
            }
            K.push(J)
          }
          if (I < F) {
            I = F
          }
          if (I > D) {
            I = D
          }
          K.sort(function (M, L) {
            return (E ? (M >= I && L >= I) ? M < L : M > L : (M <= I && L <= I) ? M > L : M < L) ? -1 : 1
          });
          return G[K[0]]
        }
      }

      function r() {
        function D(F, G) {
          if (F.contains) {
            return F.contains(G)
          }
          return F.compareDocumentPosition(G) & 16
        }

        function B(G) {
          var F = G.relatedTarget;
          if (!F || D(this, F)) {
            return
          }
          C(this, G.type == "mouseover")
        }

        function E(F) {
          C(this, F.type == "mouseenter")
        }

        function C(F, G) {
          setTimeout(function () {
            var H = d.get(F).options;
            m.replace(F, G ? h(H, H.hover) : H, true)
          }, 10)
        }

        this.attach = function (F) {
          if (F.onmouseenter === undefined) {
            q(F, "mouseover", B);
            q(F, "mouseout", B)
          } else {
            q(F, "mouseenter", E);
            q(F, "mouseleave", E)
          }
        }
      }

      function u() {
        var C = [],
          D = {};

        function B(H) {
          var E = [],
            G;
          for (var F = 0; G = H[F]; ++F) {
            E[F] = C[D[G]]
          }
          return E
        }

        this.add = function (F, E) {
          D[F] = C.push(E) - 1
        };
        this.repeat = function () {
          var E = arguments.length ? B(arguments) : C,
            F;
          for (var G = 0; F = E[G++];) {
            m.replace(F[0], F[1], true)
          }
        }
      }

      function A() {
        var D = {},
          B = 0;

        function C(E) {
          return E.cufid || (E.cufid = ++B)
        }

        this.get = function (E) {
          var F = C(E);
          return D[F] || (D[F] = {})
        }
      }

      function a(B) {
        var D = {},
          C = {};
        this.extend = function (E) {
          for (var F in E) {
            if (k(E, F)) {
              D[F] = E[F]
            }
          }
          return this
        };
        this.get = function (E) {
          return D[E] != undefined ? D[E] : B[E]
        };
        this.getSize = function (F, E) {
          return C[F] || (C[F] = new n.Size(this.get(F), E))
        };
        this.isUsable = function () {
          return !!B
        }
      }

      function q(C, B, D) {
        if (C.addEventListener) {
          C.addEventListener(B, D, false)
        } else {
          if (C.attachEvent) {
            C.attachEvent("on" + B, function () {
              return D.call(C, window.event)
            })
          }
        }
      }

      function v(C, B) {
        var D = d.get(C);
        if (D.options) {
          return C
        }
        if (B.hover && B.hoverables[C.nodeName.toLowerCase()]) {
          b.attach(C)
        }
        D.options = B;
        return C
      }

      function j(B) {
        var C = {};
        return function (D) {
          if (!k(C, D)) {
            C[D] = B.apply(null, arguments)
          }
          return C[D]
        }
      }

      function c(F, E) {
        var B = n.quotedList(E.get("fontFamily").toLowerCase()),
          D;
        for (var C = 0; D = B[C]; ++C) {
          if (i[D]) {
            return i[D].get(E.get("fontStyle"), E.get("fontWeight"))
          }
        }
        return null
      }

      function g(B) {
        return document.getElementsByTagName(B)
      }

      function k(C, B) {
        return C.hasOwnProperty(B)
      }

      function h() {
        var C = {},
          B, F;
        for (var E = 0, D = arguments.length; B = arguments[E], E < D; ++E) {
          for (F in B) {
            if (k(B, F)) {
              C[F] = B[F]
            }
          }
        }
        return C
      }

      function o(E, M, C, N, F, D) {
        var K = document.createDocumentFragment(),
          H;
        if (M === "") {
          return K
        }
        var L = N.separate;
        var I = M.split(p[L]),
          B = (L == "words");
        if (B && t) {
          if (/^\s/.test(M)) {
            I.unshift("")
          }
          if (/\s$/.test(M)) {
            I.push("")
          }
        }
        for (var J = 0, G = I.length; J < G; ++J) {
          H = z[N.engine](E, B ? n.textAlign(I[J], C, J, G) : I[J], C, N, F, D, J < G - 1);
          if (H) {
            K.appendChild(H)
          }
        }
        return K
      }

      function l(D, M) {
        var C = D.nodeName.toLowerCase();
        if (M.ignore[C]) {
          return
        }
        var E = !M.textless[C];
        var B = n.getStyle(v(D, M)).extend(M);
        var F = c(D, B),
          G, K, I, H, L, J;
        if (!F) {
          return
        }
        for (G = D.firstChild; G; G = I) {
          K = G.nodeType;
          I = G.nextSibling;
          if (E && K == 3) {
            if (H) {
              H.appendData(G.data);
              D.removeChild(G)
            } else {
              H = G
            }
            if (I) {
              continue
            }
          }
          if (H) {
            D.replaceChild(o(F, n.whiteSpace(H.data, B, H, J), B, M, G, D), H);
            H = null
          }
          if (K == 1) {
            if (G.firstChild) {
              if (G.nodeName.toLowerCase() == "cufon") {
                z[M.engine](F, null, B, M, G, D)
              } else {
                arguments.callee(G, M)
              }
            }
            J = G
          }
        }
      }

      var t = " ".split(/\s+/).length == 0;
      var d = new A();
      var b = new r();
      var y = new u();
      var e = false;
      var z = {},
        i = {},
        w = {
          autoDetect: false,
          engine: null,
          forceHitArea: false,
          hover: false,
          hoverables: {
            a: true
          },
          ignore: {
            applet: 1,
            canvas: 1,
            col: 1,
            colgroup: 1,
            head: 1,
            iframe: 1,
            map: 1,
            optgroup: 1,
            option: 1,
            script: 1,
            select: 1,
            style: 1,
            textarea: 1,
            title: 1,
            pre: 1
          },
          printable: true,
          selector: (window.Sizzle || (window.jQuery && function (B) {
            return jQuery(B)
          }) || (window.dojo && dojo.query) || (window.Ext && Ext.query) || (window.YAHOO && YAHOO.util && YAHOO.util.Selector && YAHOO.util.Selector.query) || (window.$$ && function (B) {
            return $$(B)
          }) || (window.$ && function (B) {
            return $(B)
          }) || (document.querySelectorAll && function (B) {
            return document.querySelectorAll(B)
          }) || g),
          separate: "words",
          textless: {
            dl: 1,
            html: 1,
            ol: 1,
            table: 1,
            tbody: 1,
            thead: 1,
            tfoot: 1,
            tr: 1,
            ul: 1
          },
          textShadow: "none"
        };
      var p = {
        words: /\s/.test("\u00a0") ? /[^\S\u00a0]+/ : /\s+/,
        characters: "",
        none: /^/
      };
      m.now = function () {
        x.ready();
        return m
      };
      m.refresh = function () {
        y.repeat.apply(y, arguments);
        return m
      };
      m.registerEngine = function (C, B) {
        if (!B) {
          return m
        }
        z[C] = B;
        return m.set("engine", C)
      };
      m.registerFont = function (D) {
        if (!D) {
          return m
        }
        var B = new s(D),
          C = B.family;
        if (!i[C]) {
          i[C] = new f()
        }
        i[C].add(B);
        return m.set("fontFamily", '"' + C + '"')
      };
      m.replace = function (D, C, B) {
        C = h(w, C);
        if (!C.engine) {
          return m
        }
        if (!e) {
          n.addClass(x.root(), "cufon-active cufon-loading");
          n.ready(function () {
            n.addClass(n.removeClass(x.root(), "cufon-loading"), "cufon-ready")
          });
          e = true
        }
        if (C.hover) {
          C.forceHitArea = true
        }
        if (C.autoDetect) {
          delete C.fontFamily
        }
        if (typeof C.textShadow == "string") {
          C.textShadow = n.textShadow(C.textShadow)
        }
        if (typeof C.color == "string" && /^-/.test(C.color)) {
          C.textGradient = n.gradient(C.color)
        } else {
          delete C.textGradient
        }
        if (!B) {
          y.add(D, arguments)
        }
        if (D.nodeType || typeof D == "string") {
          D = [D]
        }
        n.ready(function () {
          for (var F = 0, E = D.length; F < E; ++F) {
            var G = D[F];
            if (typeof G == "string") {
              m.replace(C.selector(G), C, true)
            } else {
              l(G, C)
            }
          }
        });
        return m
      };
      m.set = function (B, C) {
        w[B] = C;
        return m
      };
      return m
    }


}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  .container-fluid{
    padding-right: 0;
    padding-left: 0;
  }
</style>
