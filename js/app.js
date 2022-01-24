(() => {
  "use strict";
    let e, t, o, s, l;
    e = (e, t = 500, o = 0) => {
        e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = o ? `${o}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
                (e.hidden = !o),
                !o && e.style.removeProperty("height"),
                    e.style.removeProperty("padding-top"),
                    e.style.removeProperty("padding-bottom"),
                    e.style.removeProperty("margin-top"),
                    e.style.removeProperty("margin-bottom"),
                !o && e.style.removeProperty("overflow"),
                    e.style.removeProperty("transition-duration"),
                    e.style.removeProperty("transition-property"),
                    e.classList.remove("_slide");
            }, t));
    };
    t = (e, t = 500, o = 0) => {
        if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
                (e.hidden = !e.hidden && null),
            o && e.style.removeProperty("height");
            let s = e.offsetHeight;
            (e.style.overflow = "hidden"),
                (e.style.height = o ? `${o}px` : "0px"),
                (e.style.paddingTop = 0),
                (e.style.paddingBottom = 0),
                (e.style.marginTop = 0),
                (e.style.marginBottom = 0),
                e.offsetHeight,
                (e.style.transitionProperty = "height, margin, padding"),
                (e.style.transitionDuration = t + "ms"),
                (e.style.height = s + "px"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                window.setTimeout(() => {
                    e.style.removeProperty("height"),
                        e.style.removeProperty("overflow"),
                        e.style.removeProperty("transition-duration"),
                        e.style.removeProperty("transition-property"),
                        e.classList.remove("_slide");
                }, t);
        }
    };
    o = !0;
    s = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
            let s = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
                for (let e = 0; e < s.length; e++) {
                    s[e].style.paddingRight = "0px";
                }
                (t.style.paddingRight = "0px"),
                    document.documentElement.classList.remove("lock");
            }, e),
                (o = !1),
                setTimeout(function () {
                    o = !0;
                }, e);
        }
    };
    l = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
            let s = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < s.length; e++) {
                s[e].style.paddingRight =
                    window.innerWidth -
                    document.querySelector(".wrapper").offsetWidth +
                    "px";
            }
            (t.style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px"),
                document.documentElement.classList.add("lock"),
                (o = !1),
                setTimeout(function () {
                    o = !0;
                }, e);
        }
    };
  window.onload = function () {
    document.addEventListener("click", function (e) {
      const t = e.target;
      if (t.classList.contains("menu__link")) {
        const e = document.querySelector("html");
        e.classList.remove("menu-open"),
            e.classList.remove("lock"),
            (document.body.style.paddingRight = "0");
      }
      t.classList.contains("checkbox__input") &&
      (t.checked
          ? t.closest(".block-form").classList.add("_active")
          : t.closest(".block-form").classList.remove("_active"));
      if (t.classList.contains("btn1")) {
        document.querySelector(".spoiler1").classList.toggle("hover1"),
            t.classList.toggle("hover1");
      }
      if (t.classList.contains("btn2")) {
        document.querySelector(".spoiler2").classList.toggle("hover2"),
            t.classList.toggle("hover2");
      }
      if (t.classList.contains("btn3")) {
        document.querySelector(".spoiler3").classList.toggle("hover3"),
            t.classList.toggle("hover3");
      }
      if (t.classList.contains("btn4")) {
        document.querySelector(".spoiler4").classList.toggle("hover4"),
            t.classList.toggle("hover4");
      }
      if (t.classList.contains("btn5")) {
        document.querySelector(".spoiler5").classList.toggle("hover5"),
            t.classList.toggle("hover5");
      }
      if (t.classList.contains("btn6")) {
        document.querySelector(".spoiler6").classList.toggle("hover6"),
            t.classList.toggle("hover6");
      }
      if (t.classList.contains("btn7")) {
        document.querySelector(".spoiler7").classList.toggle("hover7"),
            t.classList.toggle("hover7");
      }
      if (t.classList.contains("btn8")) {
        document.querySelector(".spoiler8").classList.toggle("hover8"),
            t.classList.toggle("hover8");
      }
      if (t.classList.contains("btn9")) {
        document.querySelector(".spoiler9").classList.toggle("hover9"),
            t.classList.toggle("hover9");
      }
    });
  };
  const i = document.querySelectorAll(".menu__link[data-goto]");
  if (i.length > 0) {
    const e = e => {
      const t = e.target;
      if (t.dataset.goto && document.querySelector(t.dataset.goto)) {
        const e =
            document.querySelector(t.dataset.goto).getBoundingClientRect().top +
            pageYOffset -
            document.querySelector("header").offsetHeight;
        window.scrollTo({ top: e, behavior: "smooth" });
      }
    };
    i.forEach((t) => {
      t.addEventListener("click", e);
    });
  }
  !(function (e) {
    let t = new Image();
    (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
  })(function (e) {
    let t = !0 === e ? "webp" : "no-webp";
    document.documentElement.classList.add(t);
  }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
        e.addEventListener("click", function (e) {
          o &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? s(e) : l(e);
          })(),
              document.documentElement.classList.toggle("menu-open"));
        });
      })(),
      (function () {
        const o = document.querySelectorAll("[data-spoilers]");
        if (o.length > 0) {
          const s = Array.from(o).filter(function (e, t, o) {
            return !e.dataset.spoilers.split(",")[0];
          });
          s.length > 0 && i(s);
          const l = Array.from(o).filter(function (e, t, o) {
            return e.dataset.spoilers.split(",")[0];
          });
          if (l.length > 0) {
            const e = [];
            l.forEach((t) => {
              const o = {},
                  s = t.dataset.spoilers.split(",");
              (o.value = s[0]),
                  (o.type = s[1] ? s[1].trim() : "max"),
                  (o.item = t),
                  e.push(o);
            });
            let t = e.map(function (e) {
              return (
                  "(" +
                  e.type +
                  "-width: " +
                  e.value +
                  "px)," +
                  e.value +
                  "," +
                  e.type
              );
            });
            (t = t.filter(function (e, t, o) {
              return o.indexOf(e) === t;
            })),
                t.forEach((t) => {
                  const o = t.split(","),
                      s = o[1],
                      l = o[2],
                      n = window.matchMedia(o[0]),
                      r = e.filter(function (e) {
                        if (e.value === s && e.type === l) return !0;
                      });
                  n.addEventListener("change", function () {
                    i(r, n);
                  }),
                      i(r, n);
                });
          }
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                  t.matches || !t
                      ? (e.classList.add("_spoiler-init"),
                          n(e),
                          e.addEventListener("click", r))
                      : (e.classList.remove("_spoiler-init"),
                          n(e, !1),
                          e.removeEventListener("click", r));
            });
          }
          function n(e, t = !0) {
            const o = e.querySelectorAll("[data-spoiler]");
            o.length > 0 &&
            o.forEach((e) => {
              t
                  ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoiler-active") ||
                  (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                      (e.nextElementSibling.hidden = !1));
            });
          }
          function r(o) {
            const s = o.target;
            if (s.hasAttribute("data-spoiler") || s.closest("[data-spoiler]")) {
              const l = s.hasAttribute("data-spoiler")
                      ? s
                      : s.closest(`[data-spoiler]`),
                  i = l.closest("[data-spoilers]"),
                  n = !!i.hasAttribute("data-one-spoiler");
              i.querySelectorAll("._slide").length ||
              (n && !l.classList.contains("_spoiler-active") && c(i),
                  l.classList.toggle("_spoiler-active"),
                  ((o, s = 500) => {
                    o.hidden ? t(o, s) : e(o, s);
                  })(l.nextElementSibling, 500)),
                  o.preventDefault();
            }
          }
          function c(t) {
            const o = t.querySelector("[data-spoiler]._spoiler-active");
            o &&
            (o.classList.remove("_spoiler-active"),
                e(o.nextElementSibling, 500));
          }
        }
      })();
})();
