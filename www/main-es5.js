function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <app-menu></app-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/login-view/login-view.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/login-view/login-view.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthorizationComponentsLoginViewLoginViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"fondo\">\n\n      <form  [formGroup]=\"credenciales\" (ngSubmit)=\"login()\">\n        <ion-grid fixed>\n\n          <ion-row class=\"mt-logo\">\n            <ion-col>\n              <img src=\"./assets/img/logos-paco/LogoPaco_Blanco_364.svg\">\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"mb-3\">\n            <ion-col>\n              <div class=\"ion-text-start text-white\">\n                <h1 class=\"ion-text-start text-bold\">Bienvenido :D</h1>\n                <p class=\"sub-text\">Inicia tu sesión para que puedas continuar</p>\n                \n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n\n              <ion-list class=\"fondo-t\">\n                <p class=\"align-left text-white mb-0\">Correo electrónico</p>\n                <ion-item class=\"rounded\" lines=\"none\">\n                  <ion-input \n                    formControlName=\"username\" type=\"text\" name=\"user\" placeholder=\"Ingrese correo electrónico\">\n                  </ion-input>\n                </ion-item>\n                <div class=\"errorsInput\" *ngIf=\"this.credenciales.get('username').hasError('required') && this.credenciales.get('username').touched\">\n                  * Campo correo electrónico es requerido\n                </div>\n                <div class=\"errorsInput\" *ngIf=\"this.credenciales.get('username').hasError('pattern') && this.credenciales.get('username').touched\">\n                  * Ingrese un correo válido <br>\n                  * El correo no puede contener caracteres especiales\n                </div>\n\n                <div class=\"mt-4\"></div>\n\n                <p class=\"align-left text-white mb-0\">Contraseña</p>\n                <ion-item class=\"rounded\" lines=\"none\">\n                  <ion-input \n                    formControlName=\"password\" name=\"password\" [type]=\"inputType\" placeholder=\"Ingrese contraseña\">\n                  </ion-input>\n                  \n                  <ion-icon id=\"viewPassword\"  [name]=\"(inputType == 'password') ? 'eye' : 'eye-off'\" slot=\"end\" (click)=\"viewPassword()\"></ion-icon>\n                </ion-item>\n                <ion-label class=\"text-secundario olvidoContra\" (click)=\"goRestorePassword()\">¿Olvidaste tu contraseña?</ion-label>\n                <div class=\"errorsInput\" *ngIf=\"this.credenciales.get('password').hasError('required') && this.credenciales.get('password').touched\">\n                  * Campo contraseña es requerido\n                </div>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"mt-4\">\n            <ion-col>\n              <ion-button type=\"submit\" class=\"rounded\" color=\"secondary\" [disabled]=\"this.credenciales.invalid\" expand=\"block\">\n                Inicia tu sesión\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          \n          <!-- <ion-label class=\"text-footer\">¿No tienes cuenta? <a href=\"#\" class=\"text-footer\">Crea ya la tuya</a></ion-label> -->\n\n        </ion-grid>\n      </form>\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/restore-password/restore-password.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/restore-password/restore-password.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthorizationComponentsRestorePasswordRestorePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-buttons slot=\"start\" class=\"fondo-backbtn\">\n  <ion-back-button  defaultHref=\"/login\"></ion-back-button>\n</ion-buttons>\n\n<ion-content class=\"fondo\">\n  <!-- <ion-slides class=\"mainSlide fondo\" [options]=\"swiperOpts\">\n\n    <ion-slide> -->\n\n      <form  [formGroup]=\"restore\" (ngSubmit)=\"restorePassword()\">\n        <ion-grid fixed>\n\n          <ion-row class=\"mt-logo\">\n            <ion-col>\n              <img src=\"./assets/img/logos-paco/LogoPaco_Blanco_364.svg\">\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"mb-3\">\n            <ion-col>\n              <div class=\"ion-text-start text-white\">\n                <h1 class=\"ion-text-start text-bold\">¿Olvidaste tu contraseña?</h1>\n                <p class=\"sub-text\">Ingresa el correo electrónico con el que te registraste, para poder enviarte las instrucciones de cómo crear tu nueva contraseña.</p>\n                \n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n\n              <ion-list class=\"fondo-t\">\n                <p class=\"align-left text-white\">Correo electrónico</p>\n                <ion-item class=\"mt-input rounded\" lines=\"none\">\n                  <ion-input \n                    formControlName=\"username\" type=\"text\" name=\"user\" placeholder=\"Ingrese nombre se usuario\">\n                  </ion-input>\n                </ion-item>\n                <div class=\"errorsInput\" *ngIf=\"this.restore.get('username').hasError('required') && this.restore.get('username').touched\">\n                  * Campo usuario es requerido\n                </div>\n                <div class=\"errorsInput\" *ngIf=\"this.restore.get('username').hasError('pattern')\">\n                  * Ingrese un correo válido <br>\n                  * El correo no puede contener caracteres especiales\n                </div>\n\n                <ion-row class=\"mt-4\">\n                  <ion-col>\n                    <ion-button type=\"submit\" class=\" rounded\" color=\"secondary\" [disabled]=\"this.restore.invalid\" expand=\"block\">\n                      Enviar correo\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          \n          <!-- <ion-label class=\"text-footer\">¿No tienes cuenta? <a href=\"#\" class=\"text-footer\">Crea ya la tuya</a></ion-label> -->\n\n        </ion-grid>\n      </form>\n\n\n    <!-- </ion-slide>\n\n  </ion-slides>\n -->\n\n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/welcome/welcome.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/welcome/welcome.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthorizationComponentsWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding class=\"background\">\n\n  <ion-grid fixed>\n\n    <ion-row class=\"mb-5\">\n      <ion-col class=\"vertical-center\">\n        <img src=\"./assets/img/logos-paco/LogoPaco_Blanco_364.svg\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"bt-bottom\">\n        <ion-button expand=\"block\" class=\"rounded background-white\" (click)=\"goLogin()\">Inicia tu sesión</ion-button>\n        <!-- <ion-button expand=\"block\" class=\"rounded background-blue mt-4\">Regístrate</ion-button> -->\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/billboard/components/detail-billboard/detail-billboard.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/billboard/components/detail-billboard/detail-billboard.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillboardComponentsDetailBillboardDetailBillboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" color=\"light\">\n  <ion-toolbar color=\"light\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/billboard/list\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n\n  <ion-grid class=\"resetValuesCss ion-padding-top\" *ngIf=\"isBillboard\">\n    <ion-row class=\"ion-text-center\" *ngIf=\"billboard.images.length > 0\">\n      <ion-col>\n        <img [src]=\"billboard.images[0].image\" id=\"imgBillboard\">\n      </ion-col>\n    </ion-row>\n\n    <div class=\"ion-padding\">\n      <ion-row>\n        <ion-col>\n          <h1>{{ billboard.title }}</h1>\n          <p id=\"publicationDate\">\n            <strong class=\"ion-text-capitalize\">Publicada: </strong>{{ billboard.start_date | date }}\n          </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-text [innerHTML]=\"billboard.description\">\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"billboard.link\">\n        <ion-col>\n          <ion-button class=\"btnLink\" color=\"secondary\" (click)=\"openLink(billboard.link)\">\n            <p *ngIf=\"billboard.btn_text !== ''\">{{billboard.btn_text}}</p>\n            <p *ngIf=\"billboard.btn_text === ''\">Ir a hipervínculo</p>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row class=\"ion-padding\">\n      <ion-col>\n        <ion-toolbar id=\"postBy\" color=\"light\">\n          <ion-text>\n            Publicado por: {{ billboard.author }}\n          </ion-text>\n          <!-- <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon name=\"share-social-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button>\n              <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-buttons> -->\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/billboard/components/list-billboard/list-billboard.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/billboard/components/list-billboard/list-billboard.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillboardComponentsListBillboardListBillboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-capitalize\">Cartelera</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content refreshingSpinner=\"crescent\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\" *ngIf=\"isData\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <h3 class=\"resetValuesCss title\">\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n        </h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss title subTitle\">\n          <ion-skeleton-text animated style=\"width: 73%\"></ion-skeleton-text>\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let item of [1,1,1,1,1]\">\n      <ion-col>\n        <ion-card>\n          <ion-card-header class=\"ion-padding ion-text-center\">\n            <ion-thumbnail id=\"thumbnailSkeleton\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-card-title>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </ion-card-title>\n            <ion-card-subtitle>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </ion-card-subtitle>\n            <p>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row *ngIf=\"idDataBillboard\">\n    <ion-col class=\"noBillboard\">\n      <h4 class=\"ion-text-center noBillboards\">\n        No te preocupes si no encuentras ninguna publicación en esta cartelera\n      </h4>\n      <h6 class=\"ion-text-center\">\n        Podemos usar este tiempo valioso para meditar, amar a todos los seres vivos o verte los capitulos que te faltan\n        de la serie que te gusta.\n      </h6>\n      <ion-img src=\"./assets/img/noBillboards.png\"></ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\" *ngIf=\"billboards.length != 0\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <h1 class=\"resetValuesCss title\">Cartelera</h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss title subTitle\">\n          Mira todo lo que tenemos preparado para ti.\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let billboard of finalBillboards\" class=\"ion-padding-top animated fadeIn fast\">\n      <ion-col class=\"cardsEvent\">\n        <ion-card>\n          <ion-card-header class=\"ion-padding ion-text-center\">\n            <!-- <ion-button class=\"iconShare\" size=\"small\" color=\"medium\">\n                <ion-icon name=\"share-social-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <ion-button class=\"iconHeart\" size=\"small\" color=\"medium\">\n                <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button> -->\n            <!-- <img [src]=\"billboard.images[0]\" class=\"imgBillboard\"> -->\n            <ion-img *ngIf=\"billboard.images.length > 0\" [src]=\"billboard.images[0].image\"></ion-img>\n            <ion-img *ngIf=\"billboard.images.length == 0\" src=\"./assets/img/no_image.jpg\"></ion-img>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-card-title>{{ billboard.title | truncate : limitTitle }}</ion-card-title>\n            <ion-card-subtitle>\n              <strong class=\"ion-text-capitalize\">Publicada: </strong>{{ billboard.start_date | date }}\n            </ion-card-subtitle>\n            <p class=\"shortText\" [innerHTML]=\"billboard.description | truncate : limitDesc\">\n              <!-- {{ billboard.description | truncate : limit }} -->\n            </p>\n            <p class=\"resetValuesCss titleNavigate\" (click)=\"viewDetail(billboard)\">Ver más</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\" *ngIf=\"billboards.length != 0\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Cargando más carteleras...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/neighbour/change-password/change-password.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neighbour/change-password/change-password.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNeighbourChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title\">Cambiar contraseña</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"changePassword()\" [formGroup]=\"changePass\">\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <h3 class=\"ion-text-center txtTitle\">Cambia tu contraseña</h3>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"txtSubtitle\">Elige una nueva contraseña para tu usuario</p>\n      </div>\n    </div>\n\n    <ion-row>\n      <ion-col>\n\n        <ion-list>\n\n          <ion-item lines=\"none\">\n            <ion-label position=\"floating\">Contraseña anterior </ion-label>\n            <ion-input type=\"password\" name=\"oldPassword\" formControlName=\"oldPassword\" class=\"inputs\" [type]=\"typeOldPass\"></ion-input>\n            <ion-icon id=\"viewPassword\"  [name]=\"(typeOldPass == 'password') ? 'eye' : 'eye-off'\" slot=\"end\" (click)=\"viewOldPassword()\"></ion-icon>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-label position=\"floating\">Nueva contraseña </ion-label>\n            <ion-input type=\"password\" formControlName=\"newPassword\" name=\"newPassword\" class=\"inputs\" [type]=\"typeNewPass\"></ion-input>\n            <ion-icon id=\"viewPassword\"  [name]=\"(typeNewPass == 'password') ? 'eye' : 'eye-off'\" slot=\"end\" (click)=\"viewNewPassword()\"></ion-icon>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button type=\"submit\" color=\"secondary\" shape=\"round\" [disabled]=\"this.changePass.invalid\">\n          Confirmar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/neighbour/final-record/final-record.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neighbour/final-record/final-record.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNeighbourFinalRecordFinalRecordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\" *ngIf=\"!isLogin\">\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"title\">Actualiza tus datos</ion-title>\n\n    <ion-buttons slot=\"end\" *ngIf=\"!isLogin\">\n      <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content [scrollEvents]=\"true\">\n\n  <ion-slides class=\"mainSlide finalRecord\" #slidePrincipal>\n\n    <ion-slide>\n      <ion-grid id=\"dataNeig\">\n        <form [formGroup]=\"neighbourForm\">\n\n          <ion-row class=\"top-30\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <img src=\"assets/img/noImage.png\" *ngIf=\"!image\" class=\"img-avatar\">\n              <img [src]=\"image\" *ngIf=\"image\" id=\"pictureProfile\" class=\"img-avatar\">\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button expand=\"block\" color=\"secondary\" class=\"uploadPicture\" (click)=\"camera()\">\n                <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n                Cámara\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button expand=\"block\" color=\"secondary\" class=\"uploadPicture\" (click)=\"librery()\">\n                <ion-icon slot=\"start\" name=\"images\"></ion-icon>\n                Galería\n              </ion-button>\n              <input type=\"file\" #filePicker (change)=\"onFileChoose($event)\" />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-list>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" class=\"dataNeigh\">Escriba su(s) nombre(s) *</ion-label>\n                  <ion-input class=\"inputs\" name=\"firstName\" formControlName=\"nombres\" type=\"text\"></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" class=\"dataNeigh\">Escriba sus apellidos *</ion-label>\n                  <ion-input class=\"inputs\" name=\"lastName\" formControlName=\"apellidos\" type=\"text\"></ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" class=\"dataNeigh\">¿Cuál es su número telefónico? *</ion-label>\n                  <ion-input class=\"inputs\" name=\"number\" formControlName=\"numero_celular\" type=\"tel\" max=\"10\">\n                  </ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\" class=\"dataNeigh\">Elija el tipo de identificación *</ion-label>\n                  <ion-select class=\"selectdAndDateTime\" name=\"typeDocument\" formControlName=\"tipo_doc\"\n                    placeholder=\"opciones\" ok-text=\"aceptar\" cancel-text=\"cancelar\">\n                    <ion-select-option value=\"cc\">\n                      Cédula Ciudadanía\n                    </ion-select-option>\n                    <ion-select-option value=\"pas\">\n                      Pasaporte\n                    </ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" class=\"dataNeigh\">¿Cuál es su número de identificación? *</ion-label>\n                  <ion-input class=\"inputs\" name=\"numberDocument\" formControlName=\"identificacion\" type=\"number\">\n                  </ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\" class=\"dataNeigh\">Elija su género *</ion-label>\n                  <ion-select class=\"selectdAndDateTime\" name=\"gener\" formControlName=\"sexo\" placeholder=\"opciones\"\n                    ok-text=\"aceptar\" cancel-text=\"cancelar\">\n                    <ion-select-option value=\"H\">\n                      Hombre\n                    </ion-select-option>\n                    <ion-select-option value=\"M\">\n                      Mujer\n                    </ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"floating\" class=\"dataNeigh\">Elija su fecha de nacimiento *</ion-label>\n                  <ion-datetime class=\"selectdAndDateTime\" placeholder=\" DD/MM/AAAA\" name=\"birthday\"\n                    formControlName=\"fecha_nacimiento\" display-format=\"DD  MMM YYYY\" cancelText=\"cancelar\"\n                    doneText=\"aceptar\" monthShortNames=\"ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic\">\n                  </ion-datetime>\n                </ion-item>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <ion-button class=\"btnChangeForm\" (click)=\"nextSlide()\">\n                Siguiente\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid id=\"propertyNeig\">\n        <form [formGroup]=\"propertyForm\">\n\n          <ion-row>\n            <ion-col>\n              <ion-list>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" class=\"titleInputs\">Nomenclatura del inmueble</ion-label>\n                  <ion-input class=\"inputs\" name=\"numProperty\" formControlName=\"num_inmueble\" type=\"text\" disabled>\n                  </ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" class=\"titleInputs\">Número fijo</ion-label>\n                  <ion-input class=\"inputs\" name=\"fixedNumber\" formControlName=\"numero_fijo\" type=\"text\">\n                  </ion-input>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\" class=\"titleInputs\">Escribe su coeficiente</ion-label>\n                  <ion-input class=\"inputs\" name=\"coefficient\" formControlName=\"coeficiente\" type=\"text\"></ion-input>\n                </ion-item>\n\n\n                <ion-item-group>\n\n                  <div formArrayName=\"cuartosUtiles\" class=\"placas\">\n                    <div *ngFor=\"let item of cuartosUtiles.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n                      <ion-item lines=\"none\">\n                        <ion-label class=\"titleArray\">Cuartos útiles</ion-label>\n                        <ion-button slot=\"end\" color=\"danger\" class=\"btnTrash\" class=\"btnTrash\"\n                          (click)=\"presentAlert('cuartoUtil', pointIndex, item.value)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash-sharp\"></ion-icon>\n                        </ion-button>\n                      </ion-item>\n\n                      <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\" class=\"titleInputs\">\n                          Escribe la nomenclatura del cuarto útil\n                        </ion-label>\n                        <ion-input class=\"inputs\" name=\"userfulRoom\" formControlName='nomenclaturaCuartoUtil'\n                          type=\"text\" placeholder=\"502\">\n                        </ion-input>\n                      </ion-item>\n                    </div>\n                    <ion-item detail=\"false\" lines=\"none\">\n                      <ion-button class=\"btnAddItem\" color=\"secondary\" (click)=\"this.addCuartosUtiles()\">\n                        <ion-icon slot=\"icon-only\" name=\"add-sharp\"></ion-icon>\n                      </ion-button>\n                      <ion-label>\n                        ¿Tiene otro cuarto útil? Agrégalo\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </ion-item-group>\n\n                <ion-item-group>\n\n                  <div formArrayName=\"vehiculos\" class=\"placas\">\n                    <div *ngFor=\"let item of vehiculo.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n                      <ion-item lines=\"none\">\n                        <ion-label class=\"titleArray\">Vehículos</ion-label>\n                        <ion-button slot=\"end\" color=\"danger\" class=\"btnTrash\"\n                          (click)=\"presentAlert('vehiculo', pointIndex, item.value)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash-sharp\"></ion-icon>\n                        </ion-button>\n                      </ion-item>\n\n                      <ion-item lines=\"none\">\n                        <ion-label position=\"floating\">Elige el tipo de vehículo</ion-label>\n                        <ion-select class=\"selectdAndDateTime\" name=\"typeVehicle\" formControlName='tipoVehiculo'\n                          placeholder=\"opciones\" ok-text=\"aceptar\" cancel-text=\"cancelar\">\n                          <ion-select-option value=\"carro\">\n                            Carro\n                          </ion-select-option>\n                          <ion-select-option value=\"moto\">\n                            Moto\n                          </ion-select-option>\n                          <ion-select-option value=\"bicicleta\">\n                            Bicicleta\n                          </ion-select-option>\n                        </ion-select>\n                      </ion-item>\n\n                      <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\" class=\"titleInputs\">Describe el vehículo (marca, color y placa)\n                        </ion-label>\n                        <ion-input class=\"inputs\" name=\"descVehicle\" formControlName='descripcion' type=\"text\"\n                          placeholder=\"Audi / Fucsia / 666 YKE\">\n                        </ion-input>\n                      </ion-item>\n                    </div>\n                    <ion-item detail=\"false\" lines=\"none\">\n                      <ion-button class=\"btnAddItem\" color=\"secondary\" (click)=\"this.addvehiculo()\">\n                        <ion-icon slot=\"icon-only\" name=\"add-sharp\"></ion-icon>\n                      </ion-button>\n                      <ion-label>\n                        ¿Tiene otro vehículo? Agrégalo\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </ion-item-group>\n\n\n                <ion-item-group>\n\n                  <div formArrayName=\"celdas\" class=\"placas\">\n                    <div *ngFor=\"let item of celda.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n                      <ion-item lines=\"none\">\n                        <ion-label class=\"titleArray\">Parqueaderos</ion-label>\n                        <ion-button slot=\"end\" color=\"danger\" class=\"btnTrash\"\n                          (click)=\"presentAlert('parqueadero', pointIndex, item.value)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash-sharp\"></ion-icon>\n                        </ion-button>\n                      </ion-item>\n\n                      <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\" class=\"titleInputs\">Número del parqueadero</ion-label>\n                        <ion-input class=\"inputs\" name=\"descCelda\" formControlName='numero' type=\"text\"\n                          placeholder=\"PAR-1\">\n                        </ion-input>\n                      </ion-item>\n                    </div>\n                    <ion-item detail=\"false\" lines=\"none\">\n                      <ion-button class=\"btnAddItem\" color=\"secondary\" (click)=\"this.addcelda()\">\n                        <ion-icon slot=\"icon-only\" name=\"add-sharp\"></ion-icon>\n                      </ion-button>\n                      <ion-label>\n                        ¿Tiene otro parqueadero? Agrégalo\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </ion-item-group>\n\n                <ion-item-group>\n\n                  <div formArrayName=\"mascotas\" class=\"placas\">\n                    <div *ngFor=\"let item of mascota.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n\n                      <ion-item lines=\"none\">\n                        <ion-label class=\"titleArray\">Mascotas</ion-label>\n                        <ion-button slot=\"end\" color=\"danger\" class=\"btnTrash\"\n                          (click)=\"presentAlert('mascota', pointIndex, item.value)\">\n                          <ion-icon slot=\"icon-only\" name=\"trash-sharp\"></ion-icon>\n                        </ion-button>\n                      </ion-item>\n\n                      <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\" class=\"titleInputs\">Tipo de mascota</ion-label>\n                        <ion-input class=\"inputs\" name=\"typePet\" formControlName='tipoMascota' type=\"text\"\n                          placeholder=\"Perro\">\n                        </ion-input>\n                      </ion-item>\n\n                      <ion-item lines=\"none\">\n                        <ion-label position=\"stacked\" class=\"titleInputs\">Describe a la mascota (raza, color y sexo)\n                        </ion-label>\n                        <ion-input class=\"inputs\" name=\"descPet\" formControlName='descripcion' type=\"text\"\n                          placeholder=\"Labrador / Dorado / Macho\">\n                        </ion-input>\n                      </ion-item>\n                    </div>\n                    <ion-item detail=\"false\" lines=\"none\">\n                      <ion-button class=\"btnAddItem\" color=\"secondary\" (click)=\"this.addmascota()\">\n                        <ion-icon slot=\"icon-only\" name=\"add-sharp\"></ion-icon>\n                      </ion-button>\n                      <ion-label>\n                        ¿Tiene otra mascota? Agrégala\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </ion-item-group>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button class=\"btnChangeForm\" (click)=\"prevSlide()\">\n                Atrás\n              </ion-button>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-button type=\"button\" color=\"secondary\" class=\"saveData\" (click)=\"uploadPicture()\"\n                [disabled]=\"this.neighbourForm.invalid || this.propertyForm.invalid\">\n                Guardar\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n        </form>\n      </ion-grid>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/detail-news/detail-news.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/detail-news/detail-news.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsDetailNewsDetailNewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" color=\"light\">\n  <ion-toolbar color=\"light\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/news/list\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n\n  <ion-grid class=\"resetValuesCss ion-padding-top\" *ngIf=\"isNews\">\n\n    <ion-slides [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let image of news.images\">\n        <ion-img class=\"imgNews\" [src]=\"image.image\"></ion-img>\n      </ion-slide>\n\n    </ion-slides>\n\n\n    <div class=\"ion-padding\">\n      <ion-row>\n        <ion-col>\n          <h1>{{ news.title }}</h1>\n          <p id=\"publicationDate\">\n            <strong class=\"ion-text-capitalize\">Publicada: </strong>{{ news.start_date | date }}\n          </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-text [innerHTML]=\"news.description\">\n            <!-- {{ news.description }} -->\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"news.link\">\n        <ion-col>\n          <ion-button class=\"btnLink\" color=\"secondary\" (click)=\"openLink(news.link)\">\n            <p *ngIf=\"news.btn_text !== 'null' || news.btn_text\">{{news.btn_text}}</p>\n            <p *ngIf=\"news.btn_text === 'null' || !news.btn_text\">Click aquí</p>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row class=\"ion-padding\">\n      <ion-col>\n        <ion-toolbar id=\"postBy\" color=\"light\">\n          <ion-text>\n            Publicado por: {{ news.author }}\n          </ion-text>\n          <!-- <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon name=\"share-social-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button>\n              <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-buttons> -->\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/list-news/list-news.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/list-news/list-news.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsListNewsListNewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-capitalize\">Noticias</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content refreshingSpinner=\"crescent\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\" *ngIf=\"isData\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <h3 class=\"resetValuesCss title\">\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n        </h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss title subTitle\">\n          <ion-skeleton-text animated style=\"width: 73%\"></ion-skeleton-text>\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let item of [1,1,1,1,1]\">\n      <ion-col>\n        <ion-card>\n          <ion-card-header class=\"ion-padding ion-text-center\">\n            <ion-thumbnail id=\"thumbnailSkeleton\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-card-title>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </ion-card-title>\n            <ion-card-subtitle>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </ion-card-subtitle>\n            <p>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row *ngIf=\"idDataNews\">\n    <ion-col class=\"noNewsPrincipal\">\n      <h4 class=\"ion-text-center noNews\">\n        *_* OMG! Será que están almorzando nuestros reporteros, que no tenemos noticias?\n      </h4>\n      <h6 class=\"ion-text-center\">\n        jajajaja Falso de toda falsedad, están trabajando sin descanso, para poder mostrarte dentro de poco información\n        de tu interés\n      </h6>\n      <ion-img src=\"./assets/img/noNews.png\"></ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\" *ngIf=\"news.length != 0\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <h1 class=\"resetValuesCss title\">Noticias</h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss subTitle\">\n          Esto es tan importante que si no se enteran, se los lleva el coco\n        </p>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngFor=\"let news of finalNews\" class=\"ion-padding-top animated fadeIn fast\">\n      <ion-col class=\"cardsEvent\">\n        <ion-card class=\"cardNews\"\n          [ngClass]=\"{'firstCardNews': news.color == 'Blanco', 'secondCardNews': news.color == 'Azul', 'thirdCardNews': news.color == 'Azul_Oscuro'}\">\n          <!-- <ion-img [src]=\"billboard.image\" class=\"imgNews\"></ion-img> -->\n          <div class=\"endDate\">\n            <p class=\"endDateDay\">\n              {{ news.start_date | date: 'dd'}}\n            </p>\n            <p class=\"endDateMonth\">\n              {{ news.start_date | date: 'MMM'}}\n            </p>\n          </div>\n          <ion-card-title class=\"titleNews\" [ngClass]=\"{'titleNewsLong': news.title.length >= 32}\">\n            {{ news.title | truncate : limitTitle }}\n          </ion-card-title>\n          <ion-card-subtitle class=\"subtitleNews\">\n            <strong class=\"ion-text-capitalize\">Autor: </strong>{{ news.author }}\n          </ion-card-subtitle>\n          <p class=\"descriptionNews\">\n            {{news.description | truncate : limitDesc : true | removeTagHtml}}\n          </p>\n          <p class=\"resetValuesCss titleNavigate\" (click)=\"viewDetail(news)\">Ver más</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\" *ngIf=\"news.length != 0\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Cargando más noticias...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/chat/chat.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/chat/chat.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsComponentsChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"myToolbar\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-capitalize\">Mensajes</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" #content [scrollEvents]=\"true\">\n\n  <ion-grid>\n    <ion-row *ngFor=\"let message of messages, let i = index\">\n      <ion-col size=\"9\" class=\"message\" [offset]=\"message.myMsg ? 3 : 0\"\n        [ngClass]=\"{ 'my-message': message.myMsg, 'other-message': !message.myMsg }\">\n        <!-- <b *ngIf=\"!message.myMsg\">{{ message.nombreUsuario }}</b><br> -->\n        <p class=\"userName\">\n          <b>{{ message.nombreUsuario }}</b>\n        </p>\n        <ion-button *ngIf=\"message.myMsg && !message.isDelete\" class=\"optionMyMsg\" (click)=\"removeMsg(i)\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-button>\n        <!-- Si el mensaje no ha sido eliminda, se muestra normal -->\n        <span *ngIf=\"!message.isDelete\" [innerHTML]=\"message.mensaje\"></span>\n        <!-- Si el mensaje ha sido eliminda, se muestra el mensaje de \"Eliminaste este mensaje\" -->\n        <span *ngIf=\"message.isDelete && message.myMsg\">\n          <ion-icon class=\"noMsg\" slot=\"icon-only\" name=\"alert-circle\"></ion-icon> Eliminaste este mensaje\n        </span>\n        <span *ngIf=\"message.isDelete && !message.myMsg\">\n          <ion-icon class=\"noMsg\" slot=\"icon-only\" name=\"alert-circle-outline\"></ion-icon> Este mensaje fue eliminado\n        </span>\n        <div [ngClass]=\"{ 'my-time': message.myMsg, 'other-time': !message.myMsg }\" class=\"time ion-text-right\">\n          <!-- <br>{{ message.fechaMensaje | date: 'short'}} -->\n          <br>{{ message.fechaMensaje}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"10\">\n        <form>\n          <ion-textarea autoGrow=\"true\" class=\"message-input\" rows=\"1\" maxLength=\"500\" [(ngModel)]=\"newMsg\"\n            name=\"newMsg\" (keyup.enter)=\"sendMessage()\" placeholder=\"Escribe tu mensaje\">\n          </ion-textarea>\n        </form>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" class=\"msg-btn\"\n          (click)=\"sendMessage()\">\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n\n        <!-- <ion-fab-button size=\"small\">\n            <ion-icon name=\"send\"></ion-icon>\n          </ion-fab-button> -->\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/notification/detail-notification/detail-notification.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/notification/detail-notification/detail-notification.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsComponentsNotificationDetailNotificationDetailNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  My Id from push: {{ id }}\n \n  <ion-button (click)=\"resetBadgeCount()\" expand=\"block\">\n    Reset Badge Count\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/notification/list-notification/notification.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/notification/list-notification/notification.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsComponentsNotificationListNotificationNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <ion-grid fixed class=\"resetValuesCss\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <h3 class=\"resetValuesCss title\">Notificaciones</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss title subTitle\">\n          Tienes <b id=\"quantityNot\">6</b> mensajes si leer\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of [1,1,1]\">\n      <ion-avatar slot=\"start\">\n        <img src=\"/assets/img/Foto2.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <b>Admin</b> te invito a un evento\n        </h3>\n        <p>Hace 15 horas</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/in-building/in-building.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/in-building/in-building.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsInBuildingInBuildingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  <strong>Dentro de poco podrás usarla</strong>, estamos trabajando para tenerla lista.\n</p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu side=\"start\" type=\"push\" menuId=\"principalMenu\" contentId=\"main\" (ionWillOpen)=\"setUserLoggedIn()\">\n\n  <ion-header>\n    <ion-toolbar id=\"headerMenu\">\n      <div id=\"toolbarHeader\">\n        <ion-avatar id=\"avatarProfile\">\n          <img *ngIf=\"this.establishmentPicture\" [src]=\"this.establishmentPicture\">\n          <img *ngIf=\"!this.establishmentPicture\" src=\"assets/img/noImage.png\">\n        </ion-avatar>\n        <ion-label id=\"textProfile\">\n          <h4 id=\"nameProfile\" *ngIf=\"this.establishmentName\">{{ this.establishmentName }}</h4>\n        </ion-label>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list id=\"menuList\">\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\" routerLink=\"/tabs/neighbour\" routerLinkActive=\"active-link\" detail=\"false\"\n          (click)=\"updateData()\">\n          <ion-label>\n            Actualizar datos\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"pencil-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\" routerLink=\"/tabs/billboard/list\" routerLinkActive=\"active-link\" detail=\"false\">\n          <ion-label>\n            Cartelera\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"film-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\" routerLink=\"/tabs/news/list\" routerLinkActive=\"active-link\" detail=\"false\">\n          <ion-label>\n            Noticias\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"star-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\" routerLink=\"/tabs/notification\" routerLinkActive=\"active-link\" detail=\"false\">\n          <ion-label>\n            Mensajes\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"chatbubble-ellipses-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\" routerLink=\"/neighbour/change-password\" routerLinkActive=\"active-link\" detail=\"false\">\n          <ion-label>\n            Cambiar contraseña\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"key-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\" detail=\"false\" (click)=\"termsConditions()\">\n          <ion-label>\n            Términos y condiciones\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"shield-checkmark-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <!-- <ion-menu-toggle>\n        <ion-item lines=\"none\" routerLink=\"/tabs/notification\" routerLinkActive=\"active-link\" detail=\"false\">\n          <ion-label>\n            Notificaciones\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"notifications-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\">\n          <ion-label>\n            Documentos\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"document-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\">\n          <ion-label>\n            Invitar amigos\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"people-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\">\n          <ion-label>\n            PQRS\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"headset-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\">\n          <ion-label>\n            Ayuda\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"information-circle-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\">\n          <ion-label>\n            Términos y condiciones\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"shield-checkmark-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle> -->\n\n      <ion-menu-toggle>\n        <ion-item lines=\"none\" (click)=\"logOut()\">\n          <ion-label>\n            Cerrar sesión\n          </ion-label>\n          <ion-icon class=\"active-icon\" name=\"log-out-outline\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-menu-toggle>\n\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-img id=\"logo\" src=\"./assets/img/logos-paco/LogoPaco_Blanco.svg\"></ion-img>\n    </ion-toolbar>\n  </ion-footer>\n</ion-menu>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/utils/guards/auth.guard */
    "./src/utils/guards/auth.guard.ts");

    var routes = [{
      path: 'tabs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./authorization/authorization.module */
        "./src/app/authorization/authorization.module.ts")).then(function (m) {
          return m.AuthorizationModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'notification',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./notifications/notifications.module */
        "./src/app/notifications/notifications.module.ts")).then(function (m) {
          return m.NotificationsModule;
        });
      },
      canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'neighbour',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./neighbour/neighbour.module */
        "./src/app/neighbour/neighbour.module.ts")).then(function (m) {
          return m.NeighbourModule;
        });
      },
      canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap\");\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpOyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _notifications_services_fcm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications/services/fcm.service */
    "./src/app/notifications/services/fcm.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, fcmService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.fcmService = fcmService;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.fcmService.initPush();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _notifications_services_fcm_service__WEBPACK_IMPORTED_MODULE_5__["FcmService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./authorization/authorization.module */
    "./src/app/authorization/authorization.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _billboard_billboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./billboard/billboard.module */
    "./src/app/billboard/billboard.module.ts");
    /* harmony import */


    var _news_news_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./news/news.module */
    "./src/app/news/news.module.ts");
    /* harmony import */


    var _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./notifications/notifications.module */
    "./src/app/notifications/notifications.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.esm.js");
    /* harmony import */


    var _neighbour_neighbour_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./neighbour/neighbour.module */
    "./src/app/neighbour/neighbour.module.ts");
    /* harmony import */


    var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/locales/es-CO */
    "./node_modules/@angular/common/locales/es-CO.js");
    /* harmony import */


    var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_22__["registerLocaleData"])(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_21___default.a, 'es-Co');
    firebase__WEBPACK_IMPORTED_MODULE_19__["default"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"], _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_10__["AuthorizationModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _billboard_billboard_module__WEBPACK_IMPORTED_MODULE_13__["BillboardModule"], _news_news_module__WEBPACK_IMPORTED_MODULE_14__["NewsModule"], _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_15__["NotificationsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(), _neighbour_neighbour_module__WEBPACK_IMPORTED_MODULE_20__["NeighbourModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'es-Co'
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authorization/authorization-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/authorization/authorization-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AuthorizationRoutingModule */

  /***/
  function srcAppAuthorizationAuthorizationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationRoutingModule", function () {
      return AuthorizationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login-view/login-view.component */
    "./src/app/authorization/components/login-view/login-view.component.ts");
    /* harmony import */


    var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/welcome/welcome.component */
    "./src/app/authorization/components/welcome/welcome.component.ts");
    /* harmony import */


    var _components_restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/restore-password/restore-password.component */
    "./src/app/authorization/components/restore-password/restore-password.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'welcome',
      component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }, {
      path: 'login',
      component: _components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_3__["LoginViewComponent"]
    }, {
      path: 'restore-password',
      component: _components_restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_5__["RestorePasswordComponent"]
    }];

    var AuthorizationRoutingModule = function AuthorizationRoutingModule() {
      _classCallCheck(this, AuthorizationRoutingModule);
    };

    AuthorizationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthorizationRoutingModule);
    /***/
  },

  /***/
  "./src/app/authorization/authorization.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/authorization/authorization.module.ts ***!
    \*******************************************************/

  /*! exports provided: AuthorizationModule */

  /***/
  function srcAppAuthorizationAuthorizationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationModule", function () {
      return AuthorizationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _authorization_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authorization-routing.module */
    "./src/app/authorization/authorization-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/login-view/login-view.component */
    "./src/app/authorization/components/login-view/login-view.component.ts");
    /* harmony import */


    var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/welcome/welcome.component */
    "./src/app/authorization/components/welcome/welcome.component.ts");
    /* harmony import */


    var _components_restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/restore-password/restore-password.component */
    "./src/app/authorization/components/restore-password/restore-password.component.ts");

    var AuthorizationModule = function AuthorizationModule() {
      _classCallCheck(this, AuthorizationModule);
    };

    AuthorizationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_6__["LoginViewComponent"], _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], _components_restore_password_restore_password_component__WEBPACK_IMPORTED_MODULE_8__["RestorePasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _authorization_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthorizationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    })], AuthorizationModule);
    /***/
  },

  /***/
  "./src/app/authorization/components/login-view/login-view.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/authorization/components/login-view/login-view.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthorizationComponentsLoginViewLoginViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainSlide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 55vw;\n  padding-bottom: 1.875rem;\n}\n\n.mt-logo {\n  margin-top: 2.5rem;\n}\n\n.mt-logo ion-col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.mb-3 {\n  margin-bottom: 1rem;\n  border-radius: 2%;\n}\n\n.mt-4 {\n  margin-top: 2.5rem;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.fondo {\n  --background: rgb(164, 86, 243) !important;\n  --background: -moz-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(164, 86, 243)), color-stop(18%, rgb(164, 86, 243)), color-stop(100%, rgb(121, 99, 246))) !important;\n  --background: -webkit-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -o-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -ms-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  width: 100%;\n  height: 100%;\n}\n\n.errorsInput {\n  background-color: #f8d7da;\n  margin: 1em 0;\n  padding: 0.3rem;\n  color: #721c24;\n  font-size: 4vw;\n  font-weight: bold;\n  height: auto;\n  position: relative;\n  top: 14px;\n}\n\n.text-white {\n  color: white;\n}\n\n.align-left {\n  text-align: left !important;\n}\n\n.sub-text {\n  font-size: 1rem;\n}\n\n.text-secundario {\n  font-size: 0.9rem;\n  color: #e2d9fb;\n}\n\n.text-footer {\n  font-size: 0.9rem;\n  color: white;\n  margin-left: 0.5rem;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.olvidoContra {\n  float: right;\n  margin-top: 0.5rem;\n}\n\n.mt-input {\n  margin-top: -4%;\n}\n\n.rounded {\n  border-radius: 7px;\n  height: 45px;\n}\n\n.fondo-t {\n  background: transparent;\n  width: 100%;\n}\n\n#viewPassword {\n  color: #6868ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9hdXRob3JpemF0aW9uL2NvbXBvbmVudHMvbG9naW4tdmlldy9sb2dpbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRob3JpemF0aW9uL2NvbXBvbmVudHMvbG9naW4tdmlldy9sb2dpbi12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FESUE7RUFDSSwwQ0FBQTtFQUNBLHlIQUFBO0VBQ0EsNktBQUE7RUFDQSw0SEFBQTtFQUNBLHVIQUFBO0VBQ0Esd0hBQUE7RUFDQSxvSEFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXphdGlvbi9jb21wb25lbnRzL2xvZ2luLXZpZXcvbG9naW4tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW5TbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiA1NXZ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcbn1cblxuLm10LWxvZ297XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG4ubXQtbG9nbyBpb24tY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWItMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcbn1cblxuLm10LTR7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG4ubWItMHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cblxuLmZvbmRvIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxNjQsIDg2LCAyNDMpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDE4JSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDEwMCUsIHJnYigxMjEsIDk5LCAyNDYpKSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvcnNJbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHBhZGRpbmc6IC4zcmVtO1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNHB4O1xufVxuXG4udGV4dC13aGl0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGlnbi1sZWZ0e1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnN1Yi10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRleHQtc2VjdW5kYXJpb3tcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogI2UyZDlmYjtcbn1cblxuLnRleHQtZm9vdGVye1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG5cbi50ZXh0LWJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vbHZpZG9Db250cmF7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLm10LWlucHV0e1xuICAgIG1hcmdpbi10b3A6IC00JTtcbn1cblxuLnJvdW5kZWR7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmZvbmRvLXR7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiN2aWV3UGFzc3dvcmQge1xuICAgIGNvbG9yOiAjNjg2OGVmO1xufVxuIiwiLm1haW5TbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1NXZ3O1xuICBwYWRkaW5nLWJvdHRvbTogMS44NzVyZW07XG59XG5cbi5tdC1sb2dvIHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG4ubXQtbG9nbyBpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1iLTMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbn1cblxuLm10LTQge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG5cbi5tYi0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZm9uZG8ge1xuICAtLWJhY2tncm91bmQ6IHJnYigxNjQsIDg2LCAyNDMpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTglLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiKDEyMSwgOTksIDI0NikpKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmVycm9yc0lucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBjb2xvcjogIzcyMWMyNDtcbiAgZm9udC1zaXplOiA0dnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNHB4O1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRleHQtc2VjdW5kYXJpbyB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogI2UyZDlmYjtcbn1cblxuLnRleHQtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub2x2aWRvQ29udHJhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5tdC1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IC00JTtcbn1cblxuLnJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmZvbmRvLXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN2aWV3UGFzc3dvcmQge1xuICBjb2xvcjogIzY4NjhlZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/authorization/components/login-view/login-view.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/authorization/components/login-view/login-view.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: LoginViewComponent */

  /***/
  function srcAppAuthorizationComponentsLoginViewLoginViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginViewComponent", function () {
      return LoginViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/services-authorization.service */
    "./src/app/authorization/services/services-authorization.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/shared-services/shared.service */
    "./src/app/shared/services/shared-services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var src_app_notifications_services_fcm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/notifications/services/fcm.service */
    "./src/app/notifications/services/fcm.service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

    var LoginViewComponent = /*#__PURE__*/function () {
      function LoginViewComponent(authService, navCtrl, formBuilder, toastCtrl, loadingCtrl, menuCrtl, sharedService, storage, fcmService, dbFirebase) {
        _classCallCheck(this, LoginViewComponent);

        this.authService = authService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCrtl = menuCrtl;
        this.sharedService = sharedService;
        this.storage = storage;
        this.fcmService = fcmService;
        this.dbFirebase = dbFirebase;
        this.swiperOpts = {
          allowSlidePrev: false,
          allowSlideNext: false
        };
        this.tokenNotification = {
          establishmentId: '',
          userId: '',
          propertyId: '',
          tokenFirebase: ''
        };
        this.responsesLogin = {
          header: '',
          message: ''
        }; // ------ Se usa para mostrar u ocultar la contraseña en el momento que el usaurio la escribe
        // ------ para loguearse en la app

        this.inputType = 'password';
        this.dbFirestore = firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore();
      }

      _createClass(LoginViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userLoggedIn();
          this.credenciales = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]] // ------- Credentials Prod ------
            // username: ['nathalya.nany@gmail.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]],
            // password: ['qwe123**', [Validators.required]]
            // username: ['tobby.warner@pebih.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]],
            // password: ['B0gjCh7PiO', [Validators.required]]
            // ------- Credentials Dev ------
            // username: ['juan.aguilar@desarrolloef.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]],
            // password: ['qwe123**', [Validators.required]]

          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCrtl.enable(false);
        }
      }, {
        key: "loadingLogin",
        value: function loadingLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      spinner: null,
                      message: '<img src="/assets/img/loading/load_triangle.gif">',
                      translucent: true,
                      cssClass: 'loading-login',
                      backdropDismiss: false,
                      showBackdrop: true
                    });

                  case 2:
                    this.loading = _context.sent;
                    _context.next = 5;
                    return this.loading.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          this.loadingLogin();
          this.authService.postCredentials(this.credenciales.value).subscribe(function (response) {
            if (response) {
              _this2.tokenNotification.userId = response.genericObject.user._id;
              _this2.token = response.genericObject.token;

              _this2.storage.set('token', response.genericObject.token);

              _this2.storage.set('userId', response.genericObject.user._id);

              _this2.storage.set('userName', response.genericObject.user.nombre);

              _this2.storage.set('userEmail', response.genericObject.user.email);

              _this2.getUserRol(response.genericObject.user._id);
            }
          }, function (error) {
            if (error.error.code === 400) {
              // ------ credenciales incorrectas
              _this2.message = error.answer;
              _this2.responsesLogin = _this2.responseMessagesLogin(Number(error.error.genericObject.attemps));

              _this2.presentToast(_this2.responsesLogin.message);

              _this2.loading.dismiss();
            }

            if (error.error.code === 401) {
              // ------ login correcto usuario bloqueado
              _this2.message = error.answer;
              _this2.responsesLogin = _this2.responseMessagesLogin(error.error.code);

              _this2.presentToast(_this2.responsesLogin.message);

              _this2.loading.dismiss();
            }

            if (error.error.code === 403) {
              // ------ bloqueado por intentos
              _this2.message = error.answer;
              _this2.responsesLogin = _this2.responseMessagesLogin(error.error.code);

              _this2.presentToast(_this2.responsesLogin.message);

              _this2.loading.dismiss();
            }

            if (error.error.code === 405) {
              // ------ Usuario no existe
              _this2.message = error.answer;
              _this2.responsesLogin = _this2.responseMessagesLogin(error.error.code);

              _this2.presentToast(_this2.responsesLogin.message);

              _this2.loading.dismiss();
            }

            _this2.loading.dismiss();
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      position: 'top',
                      // ------ el color es personalizado y se encuentra en: theme/variable.scss
                      color: 'toastLogin',
                      duration: 7000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "responseMessagesLogin",
        value: function responseMessagesLogin(attemps) {
          // ------ respuesta por defecto en los primeros 3 intentos con respuesta CODE: 400
          var message = "<b>\xBFTienes problemas para ingresar?</b> <br>Nosotros te ayudamos a recordar la contrase\xF1a si depronto se te olvid\xF3 ;) <br> Si no es el caso, porfa verifica los datos e intenta de nuevo.";

          switch (attemps) {
            // ------ Cuarto (4) intento fallido con respuesta CODE: 400
            case 4:
              message = "<b>(turututuru m\xFAsica de suspenso) te queda una sola vida!!!</b> <br>Si no copias bien la info en los campos de usuario o contrase\xF1a, te vas directo al mundo del bloqueo O_o";
              break;
            // ------ Respuesta del CODE: 401

            case 401:
              message = '<b>No puede ingresar al sistema</b> <br>Su cuenta ha sido bloqueada';
              break;
            // ------ Respuesta del CODE: 403

            case 403:
              message = "<b>\xA1Houston! Poseemos problemas *_*</b> <br>Por tu seguridad, tuvimos que bloquear tu usuario por intentos fallidos al entrar... <br />pero no te preocupes, comunicate con tu agente y \xE9l te ayudar\xE1 a solucionar este inconveniente ;)";
              break;
            // ------ Respuesta del CODE: 405

            case 405:
              message = "<b>\xA1Houston! Poseemos problemas *_*</b> <br>Parece que no estas registrado con nosotros\n                  <br />contactanos y empieza a utilizar nuestros servicios";
              break;

            default:
              break;
          }

          this.responsesLogin.message = message;
          return this.responsesLogin;
        }
      }, {
        key: "viewPassword",
        value: function viewPassword() {
          this.inputType = this.inputType === 'text' ? 'password' : 'text';
        }
      }, {
        key: "goRestorePassword",
        value: function goRestorePassword() {
          this.navCtrl.navigateRoot('/restore-password', {
            animated: true
          });
        } // ------ Se consulta el rol del usuario logueado para saber si es Vecino y pedirle que termine de llenar
        // ------ la información en caso de ingresar por primera vez en la app

      }, {
        key: "getUserRol",
        value: function getUserRol(userId) {
          var _this3 = this;

          // ------ Se envía el token para este servicio, ya que al guardarlo en el storage y después llamarlo,
          // ------ este no alcanza a llegar y la consulta queda mala.
          this.authService.getModel("user/getRole", this.token).subscribe(function (response) {
            _this3.storage.set('userRol', response.genericObject.nom_rol);

            if (response.genericObject.nom_rol === 'Vecino') {
              _this3.dataNeighbour(userId);
            } else {
              _this3.presentToast('Lo sentimos, pero en este momento no posees permiso para ingresar a la app');

              _this3.loading.dismiss();
            }
          }, function (error) {
            console.error(error); // this.presentToast('Tenemos problemas, por favor comprueba tu conexión a internet o intentalo más tarde');
          });
        }
      }, {
        key: "dataNeighbour",
        value: function dataNeighbour(idUser) {
          var _this4 = this;

          // ------ Se envía el token para este servicio, ya que al guardarlo en el storage y después llamarlo,
          // ------ este no alcanza a llegar y la consulta queda mala.
          this.authService.getModel("neighbor/getByUserId/".concat(idUser), this.token).subscribe(function (response) {
            _this4.storage.set('neighbourId', response.genericObject._id);

            _this4.neighbourProperty(response.genericObject._id);
          }, function (error) {
            console.error(error);
          });
        } // ------ Este metodo se usa para obtener el inmueble (propiedad) del vecino ------

      }, {
        key: "neighbourProperty",
        value: function neighbourProperty(neighbourId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // ------ Se envía el token para este servicio, ya que al guardarlo en el storage y después llamarlo,
                    // ------ este no alcanza a llegar y la consulta queda mala.
                    this.authService.getModel("neighbor/get/".concat(neighbourId), this.token).subscribe(function (response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (response.genericObject.assetList[0]) {
                                  this.storage.set('neighbourProperty', response.genericObject.assetList[0].num_inmueble);
                                  this.storage.set('neighbourPropertyId', response.genericObject.assetList[0]._id);
                                  this.tokenNotification.propertyId = response.genericObject.assetList[0]._id;
                                }

                                this.sharedService.setData(false);
                                this.tokenNotification.establishmentId = response.genericObject.neighbor.id_establishment;
                                _context3.t0 = this.dbFirebase.list("/UsersTokenMovile/".concat(this.tokenNotification.establishmentId, "/").concat(this.tokenNotification.propertyId));
                                _context3.t1 = this.tokenNotification.userId;
                                _context3.next = 7;
                                return localStorage.getItem('firebaseToken');

                              case 7:
                                _context3.t2 = _context3.sent;

                                _context3.t0.set.call(_context3.t0, _context3.t1, _context3.t2);

                                // ------ Si el usuario ingresa por primera vez a la plataforma, sera dirigido a un formulario para que termine
                                // ------ de completar los datos, en caso de que el usuario ya haya realizado esto, simplemente es dirigido al home
                                if (response.genericObject.neighbor.identificacion == null) {
                                  this.navCtrl.navigateRoot('/neighbour', {
                                    animated: true
                                  });
                                  this.loading.dismiss();
                                } else {
                                  this.navCtrl.navigateRoot('/tabs/home', {
                                    animated: true
                                  });
                                  this.loading.dismiss();
                                }

                              case 10:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, function (error) {
                      console.error(error);

                      _this5.presentToast('Tenemos problemas al encontrar tu información, por favor intentalo más tarde');
                    });

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "userLoggedIn",
        value: function userLoggedIn() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var isToke, isUserId, firestoreToken;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.loadingLogin(); // ------ Se verifica si el usuario no ha cerrado sesión para saber
                    // ------ se debe loguearse nuevamente

                    _context5.next = 3;
                    return this.storage.get('token');

                  case 3:
                    isToke = _context5.sent;
                    _context5.next = 6;
                    return this.storage.get('token');

                  case 6:
                    isUserId = _context5.sent;
                    _context5.next = 9;
                    return localStorage.getItem('firebaseToken');

                  case 9:
                    firestoreToken = _context5.sent;

                    if (!(isToke && isUserId && firestoreToken)) {
                      _context5.next = 14;
                      break;
                    }

                    this.navCtrl.navigateRoot('/tabs/home', {
                      animated: true
                    });
                    _context5.next = 31;
                    break;

                  case 14:
                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].platform !== 'web')) {
                      _context5.next = 30;
                      break;
                    }

                    _context5.t1 = this.dbFirebase;
                    _context5.t3 = "/UsersTokenMovile/";
                    _context5.next = 19;
                    return this.storage.get('establishmentId');

                  case 19:
                    _context5.t4 = _context5.sent;
                    _context5.t2 = _context5.t3.concat.call(_context5.t3, _context5.t4, "/");
                    _context5.next = 23;
                    return this.storage.get('neighbourPropertyId');

                  case 23:
                    _context5.t5 = _context5.sent;
                    _context5.t6 = _context5.t2.concat.call(_context5.t2, _context5.t5);
                    _context5.t0 = _context5.t1.list.call(_context5.t1, _context5.t6);
                    _context5.next = 28;
                    return this.storage.get('userId');

                  case 28:
                    _context5.t7 = _context5.sent;

                    _context5.t0.remove.call(_context5.t0, _context5.t7);

                  case 30:
                    this.storage.clear();

                  case 31:
                    setTimeout(function () {
                      _this6.loading.dismiss();
                    }, 1500);

                  case 32:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return LoginViewComponent;
    }();

    LoginViewComponent.ctorParameters = function () {
      return [{
        type: _services_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["ServicesAuthorizationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: src_app_notifications_services_fcm_service__WEBPACK_IMPORTED_MODULE_10__["FcmService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabase"]
      }];
    };

    LoginViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/login-view/login-view.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login-view.component.scss */
      "./src/app/authorization/components/login-view/login-view.component.scss"))["default"]]
    })], LoginViewComponent);
    /***/
  },

  /***/
  "./src/app/authorization/components/restore-password/restore-password.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/authorization/components/restore-password/restore-password.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthorizationComponentsRestorePasswordRestorePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\n.mainSlide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 55vw;\n  padding-bottom: 1.875rem;\n}\n\n.mt-logo {\n  margin-top: 2.5rem;\n}\n\n.mt-logo ion-col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.mb-3 {\n  margin-bottom: 1rem;\n  border-radius: 2%;\n}\n\n.mt-4 {\n  margin-top: 2.5rem;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.fondo {\n  --background: rgb(164, 86, 243) !important;\n  --background: -moz-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(164, 86, 243)), color-stop(18%, rgb(164, 86, 243)), color-stop(100%, rgb(121, 99, 246))) !important;\n  --background: -webkit-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -o-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -ms-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  width: 100%;\n  height: 100%;\n}\n\n.fondo-backbtn {\n  --background: rgb(164, 86, 243) !important;\n  --background: -moz-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(164, 86, 243)), color-stop(18%, rgb(164, 86, 243)), color-stop(100%, rgb(121, 99, 246))) !important;\n  --background: -webkit-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -o-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -ms-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  margin-bottom: -50px;\n}\n\n.errorsInput {\n  background-color: #f8d7da;\n  margin: 1em 0;\n  padding: 0.3rem;\n  color: #721c24;\n  font-size: 4vw;\n  font-weight: bold;\n  height: auto;\n}\n\n.text-white {\n  color: white;\n}\n\n.align-left {\n  text-align: left !important;\n}\n\n.sub-text {\n  font-size: 1rem;\n}\n\n.text-secundario {\n  font-size: 0.9rem;\n  color: #e2d9fb;\n}\n\n.text-footer {\n  font-size: 0.9rem;\n  color: white;\n  margin-left: 0.5rem;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.olvidoContra {\n  float: right;\n  margin-top: 0.5rem;\n}\n\n.mt-input {\n  margin-top: -4%;\n}\n\n.rounded {\n  border-radius: 7px;\n  height: 45px;\n}\n\n.fondo-t {\n  background: transparent;\n  width: 100%;\n}\n\n#viewPassword {\n  color: #6868ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9hdXRob3JpemF0aW9uL2NvbXBvbmVudHMvcmVzdG9yZS1wYXNzd29yZC9yZXN0b3JlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRob3JpemF0aW9uL2NvbXBvbmVudHMvcmVzdG9yZS1wYXNzd29yZC9yZXN0b3JlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksMENBQUE7RUFDQSx5SEFBQTtFQUNBLDZLQUFBO0VBQ0EsNEhBQUE7RUFDQSx1SEFBQTtFQUNBLHdIQUFBO0VBQ0Esb0hBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksMENBQUE7RUFDQSx5SEFBQTtFQUNBLDZLQUFBO0VBQ0EsNEhBQUE7RUFDQSx1SEFBQTtFQUNBLHdIQUFBO0VBQ0Esb0hBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vY29tcG9uZW50cy9yZXN0b3JlLXBhc3N3b3JkL3Jlc3RvcmUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuLm1haW5TbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiA1NXZ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcbn1cblxuLm10LWxvZ297XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG4ubXQtbG9nbyBpb24tY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWItMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcbn1cblxuLm10LTR7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG4ubWItMHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cblxuLmZvbmRvIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxNjQsIDg2LCAyNDMpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDE4JSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDEwMCUsIHJnYigxMjEsIDk5LCAyNDYpKSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb25kby1iYWNrYnRue1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDE2NCwgODYsIDI0MykgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTglLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiKDEyMSwgOTksIDI0NikpKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xufVxuXG4uZXJyb3JzSW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICBwYWRkaW5nOiAuM3JlbTtcbiAgICBjb2xvcjogIzcyMWMyNDtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi50ZXh0LXdoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFsaWduLWxlZnR7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc3ViLXRleHR7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGV4dC1zZWN1bmRhcmlve1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiAjZTJkOWZiO1xufVxuXG4udGV4dC1mb290ZXJ7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbn1cblxuLnRleHQtYm9sZHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9sdmlkb0NvbnRyYXtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ubXQtaW5wdXR7XG4gICAgbWFyZ2luLXRvcDogLTQlO1xufVxuXG4ucm91bmRlZHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZm9uZG8tdHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3ZpZXdQYXNzd29yZCB7XG4gICAgY29sb3I6ICM2ODY4ZWY7XG59XG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG59XG5cbi5tYWluU2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICB3aWR0aDogNTV2dztcbiAgcGFkZGluZy1ib3R0b206IDEuODc1cmVtO1xufVxuXG4ubXQtbG9nbyB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cblxuLm10LWxvZ28gaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYi0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG59XG5cbi5tdC00IHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG4ubWItMCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmZvbmRvIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTY0LCA4NiwgMjQzKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDE4JSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDEwMCUsIHJnYigxMjEsIDk5LCAyNDYpKSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb25kby1iYWNrYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTY0LCA4NiwgMjQzKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDE4JSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDEwMCUsIHJnYigxMjEsIDk5LCAyNDYpKSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xufVxuXG4uZXJyb3JzSW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICBtYXJnaW46IDFlbSAwO1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBmb250LXNpemU6IDR2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGlnbi1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc3ViLXRleHQge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi50ZXh0LXNlY3VuZGFyaW8ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICNlMmQ5ZmI7XG59XG5cbi50ZXh0LWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9sdmlkb0NvbnRyYSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ubXQtaW5wdXQge1xuICBtYXJnaW4tdG9wOiAtNCU7XG59XG5cbi5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5mb25kby10IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdmlld1Bhc3N3b3JkIHtcbiAgY29sb3I6ICM2ODY4ZWY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/authorization/components/restore-password/restore-password.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/authorization/components/restore-password/restore-password.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: RestorePasswordComponent */

  /***/
  function srcAppAuthorizationComponentsRestorePasswordRestorePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestorePasswordComponent", function () {
      return RestorePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/services-authorization.service */
    "./src/app/authorization/services/services-authorization.service.ts");

    var RestorePasswordComponent = /*#__PURE__*/function () {
      function RestorePasswordComponent(formBuilder, menuCrtl, authService, toastCtrl) {
        _classCallCheck(this, RestorePasswordComponent);

        this.formBuilder = formBuilder;
        this.menuCrtl = menuCrtl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.responsesLogin = {
          header: '',
          message: ''
        };
      }

      _createClass(RestorePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.restore = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]]
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCrtl.enable(false);
        }
      }, {
        key: "restorePassword",
        value: function restorePassword() {
          var _this7 = this;

          this.authService.restorePassword(this.restore.value).subscribe(function (Response) {
            console.log('recuperar contraseña', Response);

            if (Response) {
              // const emailUser = Response.genericObject.user.email;
              console.log(JSON.stringify('Restore password -----------'));
              _this7.message = Response.answer;
              _this7.responsesLogin = _this7.responseMessagesLogin(Response.code);

              _this7.presentToast(_this7.responsesLogin.message, 'toastSuccess');
            }
          }, function (error) {
            if (error.error.code === 400) {
              // ------ credenciales incorrectas
              _this7.message = error.answer;
              _this7.responsesLogin = _this7.responseMessagesLogin(error.error.code);

              _this7.presentToast(_this7.responsesLogin.message, 'toastLogin');
            }

            if (error.error.code === 401) {
              // ------ login correcto usuario bloqueado
              _this7.message = error.answer;
              _this7.responsesLogin = _this7.responseMessagesLogin(error.error.code);

              _this7.presentToast(_this7.responsesLogin.message, 'toastLogin');
            }

            if (error.error.code === 403) {
              // ------ bloqueado por intentos
              _this7.message = error.answer;
              _this7.responsesLogin = _this7.responseMessagesLogin(error.error.code);

              _this7.presentToast(_this7.responsesLogin.message, 'toastLogin');
            }

            if (error.error.code === 405) {
              // ------ Usuario no existe
              _this7.message = error.answer;
              _this7.responsesLogin = _this7.responseMessagesLogin(error.error.code);

              _this7.presentToast(_this7.responsesLogin.message, 'toastLogin');
            }
          });
        }
      }, {
        key: "responseMessagesLogin",
        value: function responseMessagesLogin(code) {
          // ------ respuesta por defecto con respuesta CODE: 400
          var message = "<b>No existe un usuario registrado con el correo ingresado. Intentalo nuevamente</b>";

          switch (code) {
            case 200:
              message = "<b>\xA1Revisa tu correo electr\xF3nico!</b> <br />Te hemos enviado un mensaje para que puedas restablecer tu contrase\xF1a.";
              break;

            default:
              break;
          }

          this.responsesLogin.message = message;
          return this.responsesLogin;
        }
      }, {
        key: "presentToast",
        value: function presentToast(message, colorMessage) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      position: 'top',
                      // ------ el color es personalizado y se encuentra en: theme/variable.scss
                      color: colorMessage,
                      duration: 7000
                    });

                  case 2:
                    toast = _context6.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return RestorePasswordComponent;
    }();

    RestorePasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _services_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__["ServicesAuthorizationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    RestorePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-restore-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./restore-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/restore-password/restore-password.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./restore-password.component.scss */
      "./src/app/authorization/components/restore-password/restore-password.component.scss"))["default"]]
    })], RestorePasswordComponent);
    /***/
  },

  /***/
  "./src/app/authorization/components/welcome/welcome.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/authorization/components/welcome/welcome.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthorizationComponentsWelcomeWelcomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\nion-content.background {\n  --background: rgb(164, 86, 243) !important;\n  --background: -moz-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(164, 86, 243)), color-stop(18%, rgb(164, 86, 243)), color-stop(100%, rgb(121, 99, 246))) !important;\n  --background: -webkit-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -o-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -ms-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n}\n\nimg {\n  width: 55vw;\n  padding-bottom: 30px;\n}\n\n.vertical-center {\n  margin-top: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.rounded {\n  height: 45px;\n  --border-radius: 7px;\n  text-transform: none;\n}\n\n.bt-bottom {\n  margin-top: 80%;\n}\n\n.mt-4 {\n  margin-top: 7%;\n}\n\n.background-white {\n  --background: white;\n  --color: #3db5ff;\n}\n\n.background-blue {\n  --background: #3db5ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9hdXRob3JpemF0aW9uL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRob3JpemF0aW9uL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURPQTtFQUNJLDBDQUFBO0VBQ0EseUhBQUE7RUFDQSw2S0FBQTtFQUNBLDRIQUFBO0VBQ0EsdUhBQUE7RUFDQSx3SEFBQTtFQUNBLG9IQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0kscUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuLy8gaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbi8vICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE0NCwxMzIsMjM4LC43KSwgcmdiYSgxNDQsMTMyLDIzOCwuNykpLHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL3dlbGNvbWUuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyB9XG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDE2NCwgODYsIDI0MykgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTglLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiKDEyMSwgOTksIDI0NikpKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiA1NXZ3O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4udmVydGljYWwtY2VudGVye1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5yb3VuZGVke1xuICAgIGhlaWdodDogNDVweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmJ0LWJvdHRvbXtcbiAgICBtYXJnaW4tdG9wOiA4MCU7XG59XG5cbi5tdC00e1xuICAgIG1hcmdpbi10b3A6IDclO1xufVxuXG4uYmFja2dyb3VuZC13aGl0ZXtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tY29sb3I6ICMzZGI1ZmY7XG59XG5cbi5iYWNrZ3JvdW5kLWJsdWV7XG4gICAgLS1iYWNrZ3JvdW5kOiAjM2RiNWZmO1xufSIsIioge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDE2NCwgODYsIDI0MykgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxOCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2IoMTIxLCA5OSwgMjQ2KSkpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICB3aWR0aDogNTV2dztcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucm91bmRlZCB7XG4gIGhlaWdodDogNDVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uYnQtYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogODAlO1xufVxuXG4ubXQtNCB7XG4gIG1hcmdpbi10b3A6IDclO1xufVxuXG4uYmFja2dyb3VuZC13aGl0ZSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMzZGI1ZmY7XG59XG5cbi5iYWNrZ3JvdW5kLWJsdWUge1xuICAtLWJhY2tncm91bmQ6ICMzZGI1ZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/authorization/components/welcome/welcome.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/authorization/components/welcome/welcome.component.ts ***!
    \***********************************************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppAuthorizationComponentsWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(navCtrl, menuCrtl) {
        _classCallCheck(this, WelcomeComponent);

        this.navCtrl = navCtrl;
        this.menuCrtl = menuCrtl;
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.menuCrtl.enable(false);
        }
      }, {
        key: "goLogin",
        value: function goLogin() {
          this.navCtrl.navigateRoot('/login', {
            animated: true
          });
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/components/welcome/welcome.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./welcome.component.scss */
      "./src/app/authorization/components/welcome/welcome.component.scss"))["default"]]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/app/authorization/services/services-authorization.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/authorization/services/services-authorization.service.ts ***!
    \**************************************************************************/

  /*! exports provided: ServicesAuthorizationService */

  /***/
  function srcAppAuthorizationServicesServicesAuthorizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesAuthorizationService", function () {
      return ServicesAuthorizationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var ServicesAuthorizationService = /*#__PURE__*/function () {
      function ServicesAuthorizationService(http, storage) {
        _classCallCheck(this, ServicesAuthorizationService);

        this.http = http;
        this.storage = storage;
      }

      _createClass(ServicesAuthorizationService, [{
        key: "postCredentials",
        value: function postCredentials(credential) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].autenticacion, credential);
        }
      }, {
        key: "restorePassword",
        value: function restorePassword(user) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].restorePassword, user);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].usuarios);
        }
      }, {
        key: "getCurrenUser",
        value: function getCurrenUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var userString;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.storage.get('token');

                  case 2:
                    userString = _context7.sent;

                    if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(userString)) {
                      _context7.next = 7;
                      break;
                    }

                    return _context7.abrupt("return", true);

                  case 7:
                    return _context7.abrupt("return", false);

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getModel",
        value: function getModel(path, token) {
          // ------- Se crea un objeto de tipo HttpHeaders para que resiva el token desde la consulta y no desde
          // ------- localStorage, ya que el token no alcanzaba a llegar
          var myHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer ".concat(token)
            })
          };
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + path, {
            headers: myHeader.headers
          });
        }
      }]);

      return ServicesAuthorizationService;
    }();

    ServicesAuthorizationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    ServicesAuthorizationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServicesAuthorizationService);
    /***/
  },

  /***/
  "./src/app/billboard/billboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/billboard/billboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: BillboardRoutingModule */

  /***/
  function srcAppBillboardBillboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillboardRoutingModule", function () {
      return BillboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_list_billboard_list_billboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/list-billboard/list-billboard.component */
    "./src/app/billboard/components/list-billboard/list-billboard.component.ts");
    /* harmony import */


    var _components_detail_billboard_detail_billboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/detail-billboard/detail-billboard.component */
    "./src/app/billboard/components/detail-billboard/detail-billboard.component.ts");

    var routes = [{
      path: 'list',
      component: _components_list_billboard_list_billboard_component__WEBPACK_IMPORTED_MODULE_3__["ListBillboardComponent"]
    }, {
      path: 'detail-billboard',
      component: _components_detail_billboard_detail_billboard_component__WEBPACK_IMPORTED_MODULE_4__["DetailBillboardComponent"]
    }];

    var BillboardRoutingModule = function BillboardRoutingModule() {
      _classCallCheck(this, BillboardRoutingModule);
    };

    BillboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BillboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/billboard/billboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/billboard/billboard.module.ts ***!
    \***********************************************/

  /*! exports provided: BillboardModule */

  /***/
  function srcAppBillboardBillboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillboardModule", function () {
      return BillboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _billboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./billboard-routing.module */
    "./src/app/billboard/billboard-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_list_billboard_list_billboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/list-billboard/list-billboard.component */
    "./src/app/billboard/components/list-billboard/list-billboard.component.ts");
    /* harmony import */


    var _components_detail_billboard_detail_billboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/detail-billboard/detail-billboard.component */
    "./src/app/billboard/components/detail-billboard/detail-billboard.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var BillboardModule = function BillboardModule() {
      _classCallCheck(this, BillboardModule);
    };

    BillboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_list_billboard_list_billboard_component__WEBPACK_IMPORTED_MODULE_5__["ListBillboardComponent"], _components_detail_billboard_detail_billboard_component__WEBPACK_IMPORTED_MODULE_6__["DetailBillboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _billboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["BillboardRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
    })], BillboardModule);
    /***/
  },

  /***/
  "./src/app/billboard/components/detail-billboard/detail-billboard.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/billboard/components/detail-billboard/detail-billboard.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillboardComponentsDetailBillboardDetailBillboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n#publicationDate {\n  font-size: 5vw;\n  color: #48b5fb;\n}\n\n#postBy {\n  border-top: 2px groove #c5bdbd;\n}\n\nion-buttons ion-button ion-icon {\n  color: #48b5fb;\n}\n\n#imgBillboard {\n  max-height: 25rem;\n  border-radius: 8px;\n}\n\n.btnLink {\n  text-transform: none;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9iaWxsYm9hcmQvY29tcG9uZW50cy9kZXRhaWwtYmlsbGJvYXJkL2RldGFpbC1iaWxsYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JpbGxib2FyZC9jb21wb25lbnRzL2RldGFpbC1iaWxsYm9hcmQvZGV0YWlsLWJpbGxib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2JpbGxib2FyZC9jb21wb25lbnRzL2RldGFpbC1iaWxsYm9hcmQvZGV0YWlsLWJpbGxib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuLnJlc2V0VmFsdWVzQ3NzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNwdWJsaWNhdGlvbkRhdGUge1xuICBmb250LXNpemU6IDV2dztcbiAgY29sb3I6ICM0OGI1ZmI7XG59XG5cbiNwb3N0Qnkge1xuICBib3JkZXItdG9wOiAycHggZ3Jvb3ZlIHJnYigxOTcsIDE4OSwgMTg5KTtcbn1cblxuaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjNDhiNWZiO1xufVxuXG4jaW1nQmlsbGJvYXJkIHtcbiAgbWF4LWhlaWdodDogMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJ0bkxpbmsge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xufVxuXG4ucmVzZXRWYWx1ZXNDc3Mge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuI3B1YmxpY2F0aW9uRGF0ZSB7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBjb2xvcjogIzQ4YjVmYjtcbn1cblxuI3Bvc3RCeSB7XG4gIGJvcmRlci10b3A6IDJweCBncm9vdmUgI2M1YmRiZDtcbn1cblxuaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjNDhiNWZiO1xufVxuXG4jaW1nQmlsbGJvYXJkIHtcbiAgbWF4LWhlaWdodDogMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJ0bkxpbmsge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/billboard/components/detail-billboard/detail-billboard.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/billboard/components/detail-billboard/detail-billboard.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DetailBillboardComponent */

  /***/
  function srcAppBillboardComponentsDetailBillboardDetailBillboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailBillboardComponent", function () {
      return DetailBillboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/shared-services/shared.service */
    "./src/app/shared/services/shared-services/shared.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Browser;

    var DetailBillboardComponent = /*#__PURE__*/function () {
      function DetailBillboardComponent(sharedService, navCtrl) {
        _classCallCheck(this, DetailBillboardComponent);

        this.sharedService = sharedService;
        this.navCtrl = navCtrl;
        this.isBillboard = false;
      }

      _createClass(DetailBillboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // ------ Se comprueba que lleguen los datos y en caso que no, se redirecciona para evitar
          // ------ que estalle la app
          if (this.sharedService.getData()) {
            this.billboard = this.sharedService.getData();
            console.log('bill', this.billboard);
            this.isBillboard = true;
          } else {
            this.navCtrl.navigateRoot('tabs/billboard/list', {
              animated: true
            });
          }
        }
      }, {
        key: "openLink",
        value: function openLink(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(url.indexOf('http') !== -1)) {
                      _context8.next = 5;
                      break;
                    }

                    _context8.next = 3;
                    return Browser.open({
                      url: url
                    });

                  case 3:
                    _context8.next = 7;
                    break;

                  case 5:
                    _context8.next = 7;
                    return Browser.open({
                      url: "http://".concat(url)
                    });

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }]);

      return DetailBillboardComponent;
    }();

    DetailBillboardComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    DetailBillboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-billboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail-billboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/billboard/components/detail-billboard/detail-billboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail-billboard.component.scss */
      "./src/app/billboard/components/detail-billboard/detail-billboard.component.scss"))["default"]]
    })], DetailBillboardComponent);
    /***/
  },

  /***/
  "./src/app/billboard/components/list-billboard/list-billboard.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/billboard/components/list-billboard/list-billboard.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillboardComponentsListBillboardListBillboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\nion-header {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n#btnReserve {\n  position: fixed;\n  bottom: 4px;\n  left: 9px;\n  border-radius: 5px;\n}\n\n#firsTitle {\n  margin-top: 1rem !important;\n}\n\n#firsTitle h3 {\n  font-weight: bold;\n}\n\n.title {\n  margin-left: 1rem !important;\n}\n\n.subTitle {\n  font-size: 1rem !important;\n  margin-top: 8px !important;\n  margin-bottom: 10px !important;\n}\n\n#titleEvents {\n  margin-top: -1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n#titleEvents p {\n  font-weight: bold;\n  font-size: 1rem !important;\n}\n\n.cardsEvent {\n  margin-top: -1.5rem;\n}\n\n.imgBillboard {\n  max-height: 10rem !important;\n}\n\nion-card {\n  margin-bottom: 0;\n}\n\nion-card-header {\n  padding: 0;\n}\n\nion-card-title {\n  font-size: 1.2rem;\n}\n\nion-card-subtitle {\n  color: #48b5fb;\n  margin-right: 1rem !important;\n  margin-bottom: 1rem !important;\n  font-weight: bold;\n}\n\nion-card-content {\n  margin-top: 1rem;\n}\n\n.iconShare {\n  position: absolute;\n  top: 5px;\n  right: 9px;\n  opacity: 0.6;\n  color: #ffffff;\n}\n\n.iconShare ion-icon {\n  color: #ffffff;\n}\n\n.iconHeart {\n  position: absolute;\n  top: 5px;\n  right: 60px;\n  opacity: 0.6;\n  color: #ffffff;\n}\n\n#thumbnailSkeleton {\n  position: relative;\n  width: 15.2rem;\n  height: 7rem;\n}\n\n.descriptionNews {\n  position: absolute;\n  top: 130px;\n  left: 10px;\n  color: #ffffff;\n  font-weight: bold;\n  width: 300px;\n}\n\n.titleNavigate {\n  color: #48b5fb;\n  -webkit-text-decoration: underline #48b5fb;\n          text-decoration: underline #48b5fb;\n  font-weight: bold;\n}\n\n.noBillboards {\n  color: #48b5fb;\n}\n\n.noBillboard {\n  padding-left: 0.9rem;\n  padding-right: 0.9rem;\n}\n\n.btnLink {\n  text-transform: capitalize;\n  --border-radius: 5px;\n}\n\n.imgBillboard {\n  width: 100%;\n  height: auto;\n}\n\n@supports ((-o-object-fit: cover) or (object-fit: cover)) {\n  .imgBillboard {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center center;\n       object-position: center center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9iaWxsYm9hcmQvY29tcG9uZW50cy9saXN0LWJpbGxib2FyZC9saXN0LWJpbGxib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmlsbGJvYXJkL2NvbXBvbmVudHMvbGlzdC1iaWxsYm9hcmQvbGlzdC1iaWxsYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBR0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0k7SUFDRSxZQUFBO0lBQ0Esb0JBQUE7T0FBQSxpQkFBQTtJQUNBLGlDQUFBO09BQUEsOEJBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmlsbGJvYXJkL2NvbXBvbmVudHMvbGlzdC1iaWxsYm9hcmQvbGlzdC1iaWxsYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnJlc2V0VmFsdWVzQ3NzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNidG5SZXNlcnZlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNmaXJzVGl0bGUge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiNmaXJzVGl0bGUgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiN0aXRsZUV2ZW50cyB7XG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuI3RpdGxlRXZlbnRzIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkc0V2ZW50IHtcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTtcbn1cblxuLmltZ0JpbGxib2FyZCB7XG4gIG1heC1oZWlnaHQ6IDEwcmVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogIzQ4YjVmYjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uaWNvblNoYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDlweDtcbiAgb3BhY2l0eTogMC42O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmljb25TaGFyZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaWNvbkhlYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDYwcHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiN0aHVtYm5haWxTa2VsZXRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1LjJyZW07XG4gIGhlaWdodDogN3JlbTtcbn1cblxuLmRlc2NyaXB0aW9uTmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMzBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi50aXRsZU5hdmlnYXRlIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICM0OGI1ZmI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm9CaWxsYm9hcmRzIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG59XG5cbi5ub0JpbGxib2FyZCB7XG4gIHBhZGRpbmctbGVmdDogLjlyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC45cmVtO1xufVxuXG4uYnRuTGluayB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmltZ0JpbGxib2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbkBzdXBwb3J0cyhvYmplY3QtZml0OiBjb3Zlcil7XG4gICAgLmltZ0JpbGxib2FyZCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICB9XG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5yZXNldFZhbHVlc0NzcyB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4jYnRuUmVzZXJ2ZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jZmlyc1RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4jZmlyc1RpdGxlIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4jdGl0bGVFdmVudHMge1xuICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiN0aXRsZUV2ZW50cyBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZHNFdmVudCB7XG4gIG1hcmdpbi10b3A6IC0xLjVyZW07XG59XG5cbi5pbWdCaWxsYm9hcmQge1xuICBtYXgtaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmljb25TaGFyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA5cHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pY29uU2hhcmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmljb25IZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA2MHB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jdGh1bWJuYWlsU2tlbGV0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNS4ycmVtO1xuICBoZWlnaHQ6IDdyZW07XG59XG5cbi5kZXNjcmlwdGlvbk5ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4udGl0bGVOYXZpZ2F0ZSB7XG4gIGNvbG9yOiAjNDhiNWZiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjNDhiNWZiO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5vQmlsbGJvYXJkcyB7XG4gIGNvbG9yOiAjNDhiNWZiO1xufVxuXG4ubm9CaWxsYm9hcmQge1xuICBwYWRkaW5nLWxlZnQ6IDAuOXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC45cmVtO1xufVxuXG4uYnRuTGluayB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmltZ0JpbGxib2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbkBzdXBwb3J0cyAob2JqZWN0LWZpdDogY292ZXIpIHtcbiAgLmltZ0JpbGxib2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/billboard/components/list-billboard/list-billboard.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/billboard/components/list-billboard/list-billboard.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ListBillboardComponent */

  /***/
  function srcAppBillboardComponentsListBillboardListBillboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListBillboardComponent", function () {
      return ListBillboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/crud-service/crud.service */
    "./src/app/shared/services/crud-service/crud.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/shared-services/shared.service */
    "./src/app/shared/services/shared-services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var ListBillboardComponent = /*#__PURE__*/function () {
      function ListBillboardComponent(crudService, navCtrl, sharedService, menuCrtl, storage) {
        _classCallCheck(this, ListBillboardComponent);

        this.crudService = crudService;
        this.navCtrl = navCtrl;
        this.sharedService = sharedService;
        this.menuCrtl = menuCrtl;
        this.storage = storage;
        this.idDataBillboard = false;
        this.isData = true;
        this.billboards = [];
        this.finalBillboards = [];
        this.flag = false;
        this.limitDesc = 140;
        this.limitTitle = 40; // ------- Se inicia en 2 el pageNumber para que cargue la primera cartelera... ya que si se empieza desde el 1,
        // ------- se mostrara primero la 3 cartelera y después seguira con la 2da cartelera y se reperita la 3ra cartelera
        // ------- en esta posición.... de tal forma que se perdería la 1ra cartelera

        this.pageNumber = 1;
        this.pageCount = 1;
        this.pageSize = 4;
      }

      _createClass(ListBillboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.storage.get('establishmentId');

                  case 2:
                    this.establishmentId = _context9.sent;
                    this.getBillboards();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "getBillboards",
        value: function getBillboards() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this8 = this;

            var isNews;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    isNews = {
                      type: 'C',
                      direction: 'des',
                      direction_by: 'start_date'
                    };
                    _context10.t0 = this.crudService;
                    _context10.t1 = "newsletter/getByType/".concat(this.establishmentId, "/").concat(isNews.type, "/").concat(isNews.direction);
                    _context10.next = 5;
                    return this.storage.get('token');

                  case 5:
                    _context10.t2 = _context10.sent;

                    _context10.t0.getModel.call(_context10.t0, _context10.t1, _context10.t2).subscribe(function (res) {
                      var _this8$finalBillboard;

                      console.log('las carteleras', res.genericObject);
                      console.log('las carteleras 2', res.genericObject[0].images[0].image);
                      _this8.billboards = res.genericObject;

                      var myBillboards = _this8.paginateBillboards();

                      if (_this8.billboards.length == 0) {
                        _this8.idDataBillboard = true;
                        _this8.isData = false;
                      } else {
                        _this8.isData = false;
                      }

                      if (_this8.flag) {
                        // ----- Si la bandera es TRUE, significa que el usurio recarga o refresca la consulta que trae
                        // ----- el listado de las noticias, entonces se debe de reiniciar el arreglo newsFinal (que contiene el listado
                        // ----- que se muestra en el HTML) para que se reinicie el listado y evitar se concatene el listado existente con
                        // ----- el nuevo listado que se trae al referescar la consulta
                        _this8.finalBillboards = [];
                      }

                      (_this8$finalBillboard = _this8.finalBillboards).push.apply(_this8$finalBillboard, _toConsumableArray(myBillboards));
                    });

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "viewDetail",
        value: function viewDetail(billboard) {
          this.sharedService.setData(billboard);
          this.navCtrl.navigateRoot('/tabs/billboard/detail-billboard', {
            animated: true
          });
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menuCrtl.toggle();
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this9 = this;

          setTimeout(function () {
            var _this9$finalBillboard;

            if (_this9.finalBillboards.length >= _this9.billboards.length) {
              _this9.infiniteScroll.complete();

              _this9.infiniteScroll.disabled = true;
              return;
            }

            _this9.pageNumber++;

            var myBillboards = _this9.paginateBillboards();

            (_this9$finalBillboard = _this9.finalBillboards).push.apply(_this9$finalBillboard, _toConsumableArray(myBillboards));

            _this9.infiniteScroll.complete();
          }, 1500);
        } // ----------- Paginador para infinite scroll -----------

      }, {
        key: "paginateBillboards",
        value: function paginateBillboards() {
          return this.billboards.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
        } // ----------- Método que refresca o recarga la consulta de listar carteleras -----------

      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this10 = this;

          setTimeout(function () {
            console.log('mi bandera...', _this10.flag);
            _this10.pageNumber = 1;
            _this10.infiniteScroll.disabled = false;
            _this10.flag = true;
            console.log('mi bandera...', _this10.flag);

            _this10.getBillboards();

            event.target.complete();
          }, 1500);
        }
      }]);

      return ListBillboardComponent;
    }();

    ListBillboardComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CRUDService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])], ListBillboardComponent.prototype, "infiniteScroll", void 0);
    ListBillboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-billboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-billboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/billboard/components/list-billboard/list-billboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-billboard.component.scss */
      "./src/app/billboard/components/list-billboard/list-billboard.component.scss"))["default"]]
    })], ListBillboardComponent);
    /***/
  },

  /***/
  "./src/app/neighbour/change-password/change-password.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/neighbour/change-password/change-password.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNeighbourChangePasswordChangePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway !important;\n}\n\nion-header {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n.title {\n  text-transform: none;\n  font-size: 4vw;\n}\n\n.txtTitle {\n  color: #9695d0;\n}\n\n.txtSubtitle {\n  margin-left: 1.2rem;\n}\n\nform {\n  position: relative;\n  top: 20vh;\n}\n\nion-item {\n  margin-top: 1rem;\n}\n\nion-label {\n  font-weight: bold;\n}\n\n.inputs {\n  border-bottom: 1px solid black;\n  padding: 0.5rem 1rem !important;\n}\n\n#viewPassword {\n  color: #6868ef;\n  position: absolute;\n  right: 7px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9uZWlnaGJvdXIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmVpZ2hib3VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBR0ksd0NBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmVpZ2hib3VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogUmFsZXdheSAhaW1wb3J0YW50O1xufVxuICBcbmlvbi1oZWFkZXIge1xuICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnRpdGxlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXNpemU6IDR2dztcbn1cblxuLnR4dFRpdGxlIHtcbiAgICBjb2xvcjogIzk2OTVkMDtcbn1cblxuLnR4dFN1YnRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xufVxuXG5mb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyMHZoO1xufVxuXG5pb24taXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlucHV0cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW0gIWltcG9ydGFudDtcbn1cblxuI3ZpZXdQYXNzd29yZCB7XG4gICAgY29sb3I6ICM2ODY4ZWY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgYm90dG9tOiAwO1xufVxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogNHZ3O1xufVxuXG4udHh0VGl0bGUge1xuICBjb2xvcjogIzk2OTVkMDtcbn1cblxuLnR4dFN1YnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcbn1cblxuZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHZoO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5wdXRzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAhaW1wb3J0YW50O1xufVxuXG4jdmlld1Bhc3N3b3JkIHtcbiAgY29sb3I6ICM2ODY4ZWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDdweDtcbiAgYm90dG9tOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/neighbour/change-password/change-password.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/neighbour/change-password/change-password.component.ts ***!
    \************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppNeighbourChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/crud-service/crud.service */
    "./src/app/shared/services/crud-service/crud.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(menuCrtl, crudService, storage, alertController, loadingCtrl, formBuilder, navCtrl) {
        _classCallCheck(this, ChangePasswordComponent);

        this.menuCrtl = menuCrtl;
        this.crudService = crudService;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.lisTokens = []; // ------ Se usa para mostrar u ocultar la contraseña en el momento que el usaurio la escribe
        // ------ para loguearse en la app

        this.typeOldPass = 'password';
        this.typeNewPass = 'password';
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.changePass = this.formBuilder.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
          });
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menuCrtl.toggle();
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.loadingLogin();
                    _context11.t0 = this.crudService;
                    _context11.t1 = this.changePass.value;
                    _context11.next = 5;
                    return this.storage.get('token');

                  case 5:
                    _context11.t2 = _context11.sent;

                    _context11.t0.postModel.call(_context11.t0, '/user/changePassword', _context11.t1, _context11.t2).subscribe(function (res) {
                      _this11.alertInfo('', res.answer);

                      _this11.loading.dismiss();

                      _this11.changePass.get('oldPassword').setValue('');

                      _this11.changePass.get('newPassword').setValue('');

                      _this11.navCtrl.navigateRoot('/tabs/home', {
                        animated: true
                      });
                    }, function (err) {
                      _this11.loading.dismiss();

                      _this11.alertInfo('Upps!', err.error.answer);

                      _this11.changePass.get('oldPassword').setValue('');

                      _this11.changePass.get('newPassword').setValue('');
                    });

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "viewOldPassword",
        value: function viewOldPassword() {
          this.typeOldPass = this.typeOldPass === 'text' ? 'password' : 'text';
        }
      }, {
        key: "viewNewPassword",
        value: function viewNewPassword() {
          this.typeNewPass = this.typeNewPass === 'text' ? 'password' : 'text';
        }
      }, {
        key: "loadingLogin",
        value: function loadingLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadingCtrl.create({
                      spinner: null,
                      message: '<img src="/assets/img/loading/load_triangle.gif">',
                      translucent: true,
                      cssClass: 'loading-login',
                      backdropDismiss: false,
                      showBackdrop: true
                    });

                  case 2:
                    this.loading = _context12.sent;
                    _context12.next = 5;
                    return this.loading.present();

                  case 5:
                    return _context12.abrupt("return", _context12.sent);

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "alertInfo",
        value: function alertInfo(header, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var alert;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context13.sent;
                    _context13.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CRUDService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/neighbour/change-password/change-password.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./change-password.component.scss */
      "./src/app/neighbour/change-password/change-password.component.scss"))["default"]]
    })], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/neighbour/final-record/final-record.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/neighbour/final-record/final-record.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNeighbourFinalRecordFinalRecordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\nion-slides ion-slide:nth-child(1) {\n  height: 100%;\n  overflow-y: auto;\n}\n\nion-slides ion-slide:nth-child(2) {\n  height: 100%;\n  overflow-y: auto;\n}\n\nion-header {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n#propertyNeig,\n#dataNeig {\n  height: 100%;\n}\n\n.title {\n  text-transform: none;\n  font-size: 4vw;\n}\n\nion-item {\n  margin-top: 1rem;\n}\n\nion-label.dataNeigh {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.titleInputs {\n  color: #000d3d !important;\n}\n\n.inputs {\n  border-bottom: 1px solid black;\n  padding: 0.5rem 1rem !important;\n}\n\n.selectdAndDateTime {\n  border: solid 1px black;\n  padding: 1rem;\n  height: 3rem;\n  margin-top: 1rem;\n  border-radius: 5px;\n}\n\n.uploadPicture {\n  text-transform: capitalize;\n  --border-radius: 6px;\n}\n\n.saveData {\n  text-transform: capitalize;\n  --border-radius: 6px;\n  width: 115px;\n  height: 37px;\n  --box-shadow: none;\n}\n\n.saveData button,\n.button-disabled button {\n  background: #2c4192 !important;\n  --border-radius: 6px;\n}\n\n.btnChangeForm {\n  text-transform: capitalize;\n  --border-radius: 6px;\n  --background: #fff;\n  --color: #3db5ff;\n  width: 115px;\n  height: 37px;\n  border: 1px solid #3db5ff;\n  border-radius: 6px;\n  --box-shadow: none;\n}\n\n.top-30 {\n  margin-top: 30px;\n}\n\n.img-avatar {\n  width: 40vw;\n  height: auto;\n  border-radius: 50%;\n}\n\n@supports ((-o-object-fit: cover) or (object-fit: cover)) {\n  .img-avatar {\n    height: 40vw;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center center;\n       object-position: center center;\n  }\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.titleArray {\n  margin-top: 2rem;\n  text-align: left;\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.itemDivider {\n  color: #000d3d !important;\n  margin-top: 12px !important;\n  font-weight: bold !important;\n}\n\n.btnAddItem {\n  margin-right: 0.7rem;\n  width: 39px;\n  height: 39px;\n  --border-radius: 12px;\n}\n\n.btnTrash {\n  width: 39px;\n  height: 39px;\n  --border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9uZWlnaGJvdXIvZmluYWwtcmVjb3JkL2ZpbmFsLXJlY29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmVpZ2hib3VyL2ZpbmFsLXJlY29yZC9maW5hbC1yZWNvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBR0ksd0NBQUE7QUNDSjs7QURFQTs7RUFFSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTs7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxZQUFBO0lBQ0Esb0JBQUE7T0FBQSxpQkFBQTtJQUNBLGlDQUFBO09BQUEsOEJBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFFQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0ZKOztBREtBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9uZWlnaGJvdXIvZmluYWwtcmVjb3JkL2ZpbmFsLXJlY29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlcyBpb24tc2xpZGU6bnRoLWNoaWxkKDEpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuaW9uLXNsaWRlcyBpb24tc2xpZGU6bnRoLWNoaWxkKDIpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuaW9uLWhlYWRlciB7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4jcHJvcGVydHlOZWlnLFxuI2RhdGFOZWlnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiA0dnc7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5pb24tbGFiZWwuZGF0YU5laWdoIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZUlucHV0cyB7XG4gICAgY29sb3I6ICMwMDBkM2QgIWltcG9ydGFudDtcbn1cblxuLmlucHV0cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RkQW5kRGF0ZVRpbWUge1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udXBsb2FkUGljdHVyZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zYXZlRGF0YSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zYXZlRGF0YSBidXR0b24sXG4uYnV0dG9uLWRpc2FibGVkIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzJjNDE5MiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uYnRuQ2hhbmdlRm9ybSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tY29sb3I6ICMzZGI1ZmY7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2RiNWZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50b3AtMzAge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pbWctYXZhdGFyIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5Ac3VwcG9ydHMgKG9iamVjdC1maXQ6IGNvdmVyKSB7XG4gICAgLmltZy1hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDQwdnc7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgfVxufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRpdGxlQXJyYXkge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogLTFyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLml0ZW1EaXZpZGVyIHtcbiAgICBjb2xvcjogIzAwMGQzZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG4uYnRuQWRkSXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG4gICAgd2lkdGg6IDM5cHg7XG4gICAgaGVpZ2h0OiAzOXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLmJ0blRyYXNoIHtcbiAgICB3aWR0aDogMzlweDtcbiAgICBoZWlnaHQ6IDM5cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuIiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlcyBpb24tc2xpZGU6bnRoLWNoaWxkKDEpIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5pb24tc2xpZGVzIGlvbi1zbGlkZTpudGgtY2hpbGQoMikge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmlvbi1oZWFkZXIge1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuI3Byb3BlcnR5TmVpZyxcbiNkYXRhTmVpZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogNHZ3O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmlvbi1sYWJlbC5kYXRhTmVpZ2gge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGVJbnB1dHMge1xuICBjb2xvcjogIzAwMGQzZCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0ZEFuZERhdGVUaW1lIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udXBsb2FkUGljdHVyZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnNhdmVEYXRhIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMzdweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2F2ZURhdGEgYnV0dG9uLFxuLmJ1dHRvbi1kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMmM0MTkyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uYnRuQ2hhbmdlRm9ybSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNvbG9yOiAjM2RiNWZmO1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMzdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkYjVmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50b3AtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaW1nLWF2YXRhciB7XG4gIHdpZHRoOiA0MHZ3O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQHN1cHBvcnRzIChvYmplY3QtZml0OiBjb3Zlcikge1xuICAuaW1nLWF2YXRhciB7XG4gICAgaGVpZ2h0OiA0MHZ3O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgfVxufVxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aXRsZUFycmF5IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaXRlbURpdmlkZXIge1xuICBjb2xvcjogIzAwMGQzZCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5idG5BZGRJdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG4gIHdpZHRoOiAzOXB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLmJ0blRyYXNoIHtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzlweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/neighbour/final-record/final-record.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/neighbour/final-record/final-record.component.ts ***!
    \******************************************************************/

  /*! exports provided: FinalRecordComponent */

  /***/
  function srcAppNeighbourFinalRecordFinalRecordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalRecordComponent", function () {
      return FinalRecordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/crud-service/crud.service */
    "./src/app/shared/services/crud-service/crud.service.ts");
    /* harmony import */


    var src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/shared-services/shared.service */
    "./src/app/shared/services/shared-services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Camera;

    var FinalRecordComponent = /*#__PURE__*/function () {
      function FinalRecordComponent(navCtrl, crudService, loadingCtrl, sharedService, toastCtrl, storage, menuCrtl, platform, sanitizer, fireStorage, fb, alertCtrl) {
        _classCallCheck(this, FinalRecordComponent);

        this.navCtrl = navCtrl;
        this.crudService = crudService;
        this.loadingCtrl = loadingCtrl;
        this.sharedService = sharedService;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.menuCrtl = menuCrtl;
        this.platform = platform;
        this.sanitizer = sanitizer;
        this.fireStorage = fireStorage;
        this.fb = fb;
        this.alertCtrl = alertCtrl; // ------ isLogin es para saber si se llega al componente desde el login para ocultar los botones de navegación
        // ------ que conectan con las demás páginas.

        this.isLogin = false;
        this.mostrarCuartoUtil = false;
        this.mostrarVehiculo = false;
        this.mostrarMascota = false;
        this.mostrarCelda = false;
      }

      _createClass(FinalRecordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.sharedService.getData()) {
            this.isLogin = false;
          } else {
            this.isLogin = true;
          }

          this.loadingLogin();
          this.neighbourProperty();
          this.dataNeighbour(); // -----------  Formulario Validación Vecino -----------

          this.neighbourForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            numero_celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            tipo_doc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            identificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fecha_nacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          }); // -----------  Formulario Validación Propiedad -----------

          this.propertyForm = this.fb.group({
            _id: [''],
            num_inmueble: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            numero_fijo: [''],
            coeficiente: [''],
            cuartosUtiles: this.fb.array([]),
            vehiculos: this.fb.array([]),
            mascotas: this.fb.array([]),
            celdas: this.fb.array([]),
            id_establecimiento: ['']
          });
        } // ------ Slides ------

      }, {
        key: "nextSlide",
        value: function nextSlide() {
          this.slides.lockSwipes(false);
          this.slides.slideNext();
          this.slides.lockSwipes(true);
          this.content.scrollToTop();
        }
      }, {
        key: "prevSlide",
        value: function prevSlide() {
          this.slides.lockSwipes(false);
          this.slides.slidePrev();
          this.slides.lockSwipes(true);
          this.content.scrollToTop();
        } // ------ Actualización de la información del Vecino ------

      }, {
        key: "camera",
        value: function camera() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var result, images;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return Camera.getPhoto({
                      quality: 75,
                      width: 400,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].Base64,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Camera,
                      saveToGallery: true,
                      correctOrientation: true
                    });

                  case 2:
                    result = _context14.sent;
                    images = this.sanitizer.bypassSecurityTrustResourceUrl(result && result.base64String);
                    ;
                    this.image = "data:image/jpeg;base64,".concat(images.changingThisBreaksApplicationSecurity);

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "librery",
        value: function librery() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var result, images;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return Camera.getPhoto({
                      quality: 75,
                      width: 400,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraResultType"].Base64,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["CameraSource"].Photos,
                      saveToGallery: true,
                      correctOrientation: true
                    });

                  case 2:
                    result = _context15.sent;
                    images = this.sanitizer.bypassSecurityTrustResourceUrl(result && result.base64String);
                    ;
                    this.image = "data:image/jpeg;base64,".concat(images.changingThisBreaksApplicationSecurity);

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "onFileChoose",
        value: function onFileChoose(event) {
          var _this12 = this;

          this.file = event.target.files[0];
          var pattern = /image-*/;
          var reader = new FileReader();

          if (!this.file.type.match(pattern)) {
            return;
          }

          reader.onload = function () {
            _this12.image = reader.result.toString();
          };

          reader.readAsDataURL(this.file);
        }
      }, {
        key: "uploadPicture",
        value: function uploadPicture() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this13 = this;

            var isBase64, filePath, fileRef;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.loadingLogin();

                    if (!this.image) {
                      _context16.next = 21;
                      break;
                    }

                    isBase64 = this.image.indexOf('data:image/jpeg;base64');

                    if (!(isBase64 !== -1)) {
                      _context16.next = 18;
                      break;
                    }

                    _context16.next = 6;
                    return this.storage.get('neighbourPropertyId');

                  case 6:
                    _context16.t0 = _context16.sent;
                    _context16.t1 = 'vecinoInfo/' + _context16.t0;
                    _context16.t2 = _context16.t1 + '/';
                    _context16.next = 11;
                    return this.storage.get('neighbourId');

                  case 11:
                    _context16.t3 = _context16.sent;
                    _context16.t4 = _context16.t2 + _context16.t3;
                    filePath = _context16.t4 + 'pictureProfile';
                    fileRef = this.fireStorage.ref(filePath);
                    fileRef.putString(this.image, 'data_url', {
                      contentType: 'image/jpeg'
                    }).then(function () {
                      fileRef.getDownloadURL().subscribe(function (result) {
                        _this13.saveData(result);
                      });
                    });
                    _context16.next = 19;
                    break;

                  case 18:
                    this.saveData(this.image);

                  case 19:
                    _context16.next = 22;
                    break;

                  case 21:
                    this.saveData('');

                  case 22:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "neighbourProperty",
        value: function neighbourProperty() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this14 = this;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.storage.get('neighbourId');

                  case 2:
                    this.neighbourId = _context18.sent;
                    _context18.next = 5;
                    return this.storage.get('token');

                  case 5:
                    this.token = _context18.sent;
                    // ------ Se envía el token para este servicio, ya que al guardarlo en el storage y después llamarlo,
                    // ------ este no alcanza a llegar y la consulta queda mala.
                    this.crudService.getModel("neighbor/get/".concat(this.neighbourId), this.token).subscribe(function (response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                        return regeneratorRuntime.wrap(function _callee17$(_context17) {
                          while (1) {
                            switch (_context17.prev = _context17.next) {
                              case 0:
                                this.slides.lockSwipes(true);
                                this.neighbourModel = response.genericObject.neighbor;
                                this.image = this.neighbourModel.foto; // ----------- Se setean estos datos para que el usaurio los rectifique
                                // ----------- ya que vienen llenos al registrarlo desde admin

                                this.neighbourForm.controls.nombres.setValue(this.neighbourModel.nombres);
                                this.neighbourForm.controls.apellidos.setValue(this.neighbourModel.apellidos);

                                if (this.neighbourModel.identificacion) {
                                  this.neighbourForm.controls.numero_celular.setValue(this.neighbourModel.numero_celular);
                                  this.neighbourForm.controls.tipo_doc.setValue(this.neighbourModel.tipo_doc);
                                  this.neighbourForm.controls.identificacion.setValue(this.neighbourModel.identificacion);
                                  this.neighbourForm.controls.sexo.setValue(this.neighbourModel.sexo);
                                  this.neighbourForm.controls.fecha_nacimiento.setValue(this.neighbourModel.fecha_nacimiento);
                                }

                                this.loading.dismiss();

                              case 7:
                              case "end":
                                return _context17.stop();
                            }
                          }
                        }, _callee17, this);
                      }));
                    }, function (error) {
                      console.error(error);

                      _this14.presentToast('Tenemos problemas al encontrar tu información, por favor intentalo más tarde', 'toastLogin');
                    });

                  case 7:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "saveData",
        value: function saveData(imgFirebase) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    // ----------- Se pasan datos del fromGroup al modelo para ser enviado -----------
                    this.neighbourModel.nombres = this.neighbourForm.controls.nombres.value;
                    this.neighbourModel.apellidos = this.neighbourForm.controls.apellidos.value;
                    this.neighbourModel.numero_celular = this.neighbourForm.controls.numero_celular.value;
                    this.neighbourModel.tipo_doc = this.neighbourForm.controls.tipo_doc.value;
                    this.neighbourModel.identificacion = this.neighbourForm.controls.identificacion.value;
                    this.neighbourModel.sexo = this.neighbourForm.controls.sexo.value;
                    this.neighbourModel.fecha_nacimiento = this.neighbourForm.controls.fecha_nacimiento.value;
                    _context19.next = 9;
                    return this.storage.get('userEmail');

                  case 9:
                    this.neighbourModel.email = _context19.sent;
                    this.neighbourModel.foto = imgFirebase;
                    console.log('neighbourModel save data---', this.neighbourModel);
                    _context19.t0 = this.crudService;
                    _context19.t1 = this.neighbourModel;
                    _context19.next = 16;
                    return this.storage.get('token');

                  case 16:
                    _context19.t2 = _context19.sent;

                    _context19.t0.postModel.call(_context19.t0, 'neighbor/saveNeighbor', _context19.t1, _context19.t2).subscribe(function (genericResponse) {
                      var USER_NAME = _this15.neighbourForm.controls.nombres.value + ' ' + _this15.neighbourForm.controls.apellidos.value;

                      _this15.storage.set('userName', USER_NAME);

                      if (imgFirebase) {
                        _this15.storage.set('userPicture', imgFirebase);
                      }

                      _this15.saveNeighbourProperty();
                    }, function (error) {
                      console.error(error);

                      _this15.presentToast('Tenemos problemas al actualizar tu información, por favor intentalo más tarde', 'toastLogin');
                    });

                  case 18:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        } // ------ Actualización información inmueble vecino ------

      }, {
        key: "saveNeighbourProperty",
        value: function saveNeighbourProperty() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    if (!this.propertyForm.value.coeficiente) {
                      this.propertyForm.value.coeficiente = "";
                    }

                    if (!this.propertyForm.value.numero_fijo) {
                      this.propertyForm.value.numero_fijo = "";
                    }

                    console.log('saveNeighbourProperty', this.propertyForm.value);
                    _context20.t0 = this.crudService;
                    _context20.t1 = this.propertyForm.value;
                    _context20.next = 7;
                    return this.storage.get('token');

                  case 7:
                    _context20.t2 = _context20.sent;

                    _context20.t0.postModel.call(_context20.t0, 'asset/saveAsset', _context20.t1, _context20.t2).subscribe(function (genericResponse) {
                      _this16.presentToast('Información actualizada correctamente', 'success');

                      _this16.navCtrl.navigateRoot('/tabs/home', {
                        animated: true
                      });

                      _this16.loading.dismiss();
                    }, function (error) {
                      console.error(error);

                      _this16.presentToast('Tenemos problemas al actualizar tu información, por favor intentalo más tarde', 'toastLogin');
                    });

                  case 9:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "dataNeighbour",
        value: function dataNeighbour() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this17 = this;

            var neighbourPropertyId, neighbourProperty, estblishmentId;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.storage.get('neighbourPropertyId');

                  case 2:
                    neighbourPropertyId = _context22.sent;
                    _context22.next = 5;
                    return this.storage.get('neighbourProperty');

                  case 5:
                    neighbourProperty = _context22.sent;
                    _context22.next = 8;
                    return this.storage.get('establishmentId');

                  case 8:
                    estblishmentId = _context22.sent;
                    console.log('hpta token property', neighbourPropertyId);
                    console.log('hpta token neighbourProperty', neighbourProperty);
                    _context22.t0 = this.crudService;
                    _context22.t1 = "asset/get/".concat(neighbourPropertyId);
                    _context22.next = 15;
                    return this.storage.get('token');

                  case 15:
                    _context22.t2 = _context22.sent;

                    _context22.t0.getModel.call(_context22.t0, _context22.t1, _context22.t2).subscribe(function (response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                        var _this18 = this;

                        return regeneratorRuntime.wrap(function _callee21$(_context21) {
                          while (1) {
                            switch (_context21.prev = _context21.next) {
                              case 0:
                                _context21.t0 = console;
                                _context21.t1 = response;
                                _context21.next = 4;
                                return this.storage.get('token');

                              case 4:
                                _context21.t2 = _context21.sent;
                                _context21.next = 7;
                                return this.storage.get('establishmentId');

                              case 7:
                                _context21.t3 = _context21.sent;

                                _context21.t0.log.call(_context21.t0, 'response y toke', _context21.t1, _context21.t2, _context21.t3);

                                this.propertyNeighbour = response.genericObject;
                                console.log('this.propertyNeighbour', this.propertyNeighbour);

                                this.propertyForm.controls._id.setValue(this.propertyNeighbour._id);

                                this.propertyForm.controls.coeficiente.setValue(this.propertyNeighbour.coeficiente);
                                this.propertyForm.controls.id_establecimiento.setValue(this.propertyNeighbour.id_establecimiento);
                                this.propertyForm.controls.num_inmueble.setValue(this.propertyNeighbour.num_inmueble);
                                this.propertyForm.controls.numero_fijo.setValue(this.propertyNeighbour.numero_fijo);
                                console.log('obteniendo los datos de propiedad en el form', this.propertyForm.value);
                                setTimeout(function () {
                                  _this18.addCuartosUtilesArray();
                                }, 30);
                                setTimeout(function () {
                                  _this18.addvehiculoArray();
                                }, 30);
                                setTimeout(function () {
                                  _this18.addceldaArray();
                                }, 30);
                                setTimeout(function () {
                                  _this18.addmascotaArray();
                                }, 30);
                                setTimeout(function () {}, 30);

                              case 22:
                              case "end":
                                return _context21.stop();
                            }
                          }
                        }, _callee21, this);
                      }));
                    }, function (error) {
                      console.error(error);
                    });

                  case 17:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "addCuartosUtilesArray",
        value: function addCuartosUtilesArray() {
          if (this.propertyNeighbour.cuartosUtiles != null) {
            for (var i = 0; i < this.propertyNeighbour.cuartosUtiles.length; i++) {
              this.cuartosUtiles.push(this.fb.group({
                nomenclaturaCuartoUtil: [this.propertyNeighbour.cuartosUtiles[i].nomenclaturaCuartoUtil, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
              }));
            }
          }

          if (this.cuartosUtiles.length > 0) {
            this.mostrarCuartoUtil = true;
          } else {
            this.mostrarCuartoUtil = false; // this.addCuartosUtiles();
          }
        }
      }, {
        key: "addvehiculoArray",
        value: function addvehiculoArray() {
          if (this.propertyNeighbour.vehiculos != null) {
            for (var i = 0; i < this.propertyNeighbour.vehiculos.length; i++) {
              this.vehiculo.push(this.fb.group({
                tipoVehiculo: [this.propertyNeighbour.vehiculos[i].tipoVehiculo, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                descripcion: [this.propertyNeighbour.vehiculos[i].descripcion, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
              }));
            }
          }

          if (this.vehiculo.length > 0) {
            this.mostrarVehiculo = true;
          } else {
            this.mostrarVehiculo = false; // this.addvehiculo();
          }
        }
      }, {
        key: "addmascotaArray",
        value: function addmascotaArray() {
          if (this.propertyNeighbour.mascotas != null) {
            for (var i = 0; i < this.propertyNeighbour.mascotas.length; i++) {
              this.mascota.push(this.fb.group({
                tipoMascota: [this.propertyNeighbour.mascotas[i].tipoMascota, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                descripcion: [this.propertyNeighbour.mascotas[i].descripcion, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
              }));
            }
          }

          if (this.mascota.length > 0) {
            this.mostrarMascota = true;
          } else {
            this.mostrarMascota = false; // this.addmascota();
          }
        }
      }, {
        key: "addceldaArray",
        value: function addceldaArray() {
          if (this.propertyNeighbour.celdas != null) {
            for (var i = 0; i < this.propertyNeighbour.celdas.length; i++) {
              this.celda.push(this.fb.group({
                numero: [this.propertyNeighbour.celdas[i].numero, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
              }));
            }
          }

          if (this.celda.length > 0) {
            this.mostrarCelda = true;
          } else {
            this.mostrarCelda = false; // this.addcelda();
          }
        }
      }, {
        key: "addCuartosUtiles",
        value: function addCuartosUtiles() {
          this.cuartosUtiles.push(this.fb.group({
            nomenclaturaCuartoUtil: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }));
        }
      }, {
        key: "addvehiculo",
        value: function addvehiculo() {
          this.vehiculo.push(this.fb.group({
            tipoVehiculo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }));
        }
      }, {
        key: "addmascota",
        value: function addmascota() {
          this.mascota.push(this.fb.group({
            tipoMascota: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }));
        }
      }, {
        key: "addcelda",
        value: function addcelda() {
          this.celda.push(this.fb.group({
            numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }));
        }
      }, {
        key: "deleteCuartoUtil",
        value: function deleteCuartoUtil(index) {
          this.cuartosUtiles.removeAt(index);
        }
      }, {
        key: "deleteVehiculo",
        value: function deleteVehiculo(index) {
          this.vehiculo.removeAt(index);
        }
      }, {
        key: "deleteMascota",
        value: function deleteMascota(index) {
          this.mascota.removeAt(index);
        }
      }, {
        key: "deleteCelda",
        value: function deleteCelda(index) {
          this.celda.removeAt(index);
        } // ------ Recursos Usabilidad ------

      }, {
        key: "loadingLogin",
        value: function loadingLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.loadingCtrl.create({
                      spinner: null,
                      message: '<img src="/assets/img/loading/load_triangle.gif">',
                      translucent: true,
                      cssClass: 'loading-login',
                      backdropDismiss: true
                    });

                  case 2:
                    this.loading = _context23.sent;
                    _context23.next = 5;
                    return this.loading.present();

                  case 5:
                    return _context23.abrupt("return", _context23.sent);

                  case 6:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message, color) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var toast;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      position: 'top',
                      color: color,
                      duration: 4000
                    });

                  case 2:
                    toast = _context24.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menuCrtl.toggle();
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(typeDelete, itemDelete, itemValue) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var _this19 = this;

            var message, alert;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    message = '';
                    _context25.t0 = typeDelete;
                    _context25.next = _context25.t0 === 'cuartoUtil' ? 4 : _context25.t0 === 'vehiculo' ? 6 : _context25.t0 === 'mascota' ? 8 : _context25.t0 === 'parqueadero' ? 10 : 12;
                    break;

                  case 4:
                    message = "\xBFDesea borrar el cuarto \xFAtil: ".concat(itemValue.nomenclaturaCuartoUtil, " ?");
                    return _context25.abrupt("break", 13);

                  case 6:
                    message = "\xBFDesea borrar el/la: ".concat(itemValue.descripcion);
                    return _context25.abrupt("break", 13);

                  case 8:
                    message = "\xBFDesea borrar el/la mascota: ".concat(itemValue.descripcion);
                    return _context25.abrupt("break", 13);

                  case 10:
                    message = "\xBFDesea borrar el/la parqueadero: ".concat(itemValue.numero);
                    return _context25.abrupt("break", 13);

                  case 12:
                    return _context25.abrupt("break", 13);

                  case 13:
                    _context25.next = 15;
                    return this.alertCtrl.create({
                      cssClass: 'my-custom-class',
                      message: message,
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Aceptar',
                        handler: function handler() {
                          switch (typeDelete) {
                            case 'cuartoUtil':
                              _this19.deleteCuartoUtil(itemDelete);

                              break;

                            case 'vehiculo':
                              _this19.deleteVehiculo(itemDelete);

                              break;

                            case 'mascota':
                              _this19.deleteMascota(itemDelete);

                              break;

                            case 'parqueadero':
                              _this19.deleteCelda(itemDelete);

                              break;

                            default:
                              break;
                          }
                        }
                      }]
                    });

                  case 15:
                    alert = _context25.sent;
                    _context25.next = 18;
                    return alert.present();

                  case 18:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "cuartosUtiles",
        get: function get() {
          return this.propertyForm.get('cuartosUtiles');
        }
      }, {
        key: "vehiculo",
        get: function get() {
          return this.propertyForm.get('vehiculos');
        }
      }, {
        key: "mascota",
        get: function get() {
          return this.propertyForm.get('mascotas');
        }
      }, {
        key: "celda",
        get: function get() {
          return this.propertyForm.get('celdas');
        }
      }]);

      return FinalRecordComponent;
    }();

    FinalRecordComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_4__["CRUDService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal')], FinalRecordComponent.prototype, "slides", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], FinalRecordComponent.prototype, "content", void 0);
    FinalRecordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-final-record',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./final-record.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/neighbour/final-record/final-record.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./final-record.component.scss */
      "./src/app/neighbour/final-record/final-record.component.scss"))["default"]]
    })], FinalRecordComponent);
    /***/
  },

  /***/
  "./src/app/neighbour/neighbour-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/neighbour/neighbour-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: NeighbourRoutingModule */

  /***/
  function srcAppNeighbourNeighbourRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeighbourRoutingModule", function () {
      return NeighbourRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/neighbour/change-password/change-password.component.ts");
    /* harmony import */


    var _final_record_final_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./final-record/final-record.component */
    "./src/app/neighbour/final-record/final-record.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'final-record',
      pathMatch: 'full'
    }, {
      path: 'change-password',
      component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]
    }, {
      path: 'final-record',
      component: _final_record_final_record_component__WEBPACK_IMPORTED_MODULE_4__["FinalRecordComponent"]
    }];

    var NeighbourRoutingModule = function NeighbourRoutingModule() {
      _classCallCheck(this, NeighbourRoutingModule);
    };

    NeighbourRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NeighbourRoutingModule);
    /***/
  },

  /***/
  "./src/app/neighbour/neighbour.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/neighbour/neighbour.module.ts ***!
    \***********************************************/

  /*! exports provided: NeighbourModule */

  /***/
  function srcAppNeighbourNeighbourModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeighbourModule", function () {
      return NeighbourModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _neighbour_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./neighbour-routing.module */
    "./src/app/neighbour/neighbour-routing.module.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/neighbour/change-password/change-password.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _final_record_final_record_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./final-record/final-record.component */
    "./src/app/neighbour/final-record/final-record.component.ts");

    var NeighbourModule = function NeighbourModule() {
      _classCallCheck(this, NeighbourModule);
    };

    NeighbourModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"], _final_record_final_record_component__WEBPACK_IMPORTED_MODULE_7__["FinalRecordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _neighbour_routing_module__WEBPACK_IMPORTED_MODULE_3__["NeighbourRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], NeighbourModule);
    /***/
  },

  /***/
  "./src/app/news/detail-news/detail-news.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/news/detail-news/detail-news.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsDetailNewsDetailNewsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\nion-slides {\n  margin: 0 1rem;\n}\n\n#publicationDate {\n  font-size: 5vw;\n  color: #8bd3ff;\n}\n\n#postBy {\n  border-top: 2px groove #c5bdbd;\n}\n\nion-buttons ion-button ion-icon {\n  color: #8bd3ff;\n}\n\n#imgNews {\n  max-height: 25rem;\n}\n\nimg {\n  border-radius: 8px;\n}\n\n.imgNews {\n  padding: 0 0.4rem;\n  margin: 0.3rem;\n}\n\n.btnLink {\n  text-transform: none;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9uZXdzL2RldGFpbC1uZXdzL2RldGFpbC1uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL2RldGFpbC1uZXdzL2RldGFpbC1uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25ld3MvZGV0YWlsLW5ld3MvZGV0YWlsLW5ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG59XG5cbi5yZXNldFZhbHVlc0NzcyB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1zbGlkZXMge1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICB9XG4gIFxuICAjcHVibGljYXRpb25EYXRlIHtcbiAgICBmb250LXNpemU6IDV2dztcbiAgICBjb2xvcjogIzhiZDNmZjtcbiAgfVxuICBcbiAgI3Bvc3RCeSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IGdyb292ZSByZ2IoMTk3LCAxODksIDE4OSk7XG4gIH1cbiAgXG4gIGlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xuICAgIGNvbG9yOiAjOGJkM2ZmO1xuICB9XG5cbiAgI2ltZ05ld3Mge1xuICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xuICB9XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmltZ05ld3Mge1xuICBwYWRkaW5nOiAwIDAuNHJlbTtcbiAgbWFyZ2luOiAuM3JlbTtcbn1cblxuLmJ0bkxpbmsge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG59XG5cbi5yZXNldFZhbHVlc0NzcyB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgbWFyZ2luOiAwIDFyZW07XG59XG5cbiNwdWJsaWNhdGlvbkRhdGUge1xuICBmb250LXNpemU6IDV2dztcbiAgY29sb3I6ICM4YmQzZmY7XG59XG5cbiNwb3N0Qnkge1xuICBib3JkZXItdG9wOiAycHggZ3Jvb3ZlICNjNWJkYmQ7XG59XG5cbmlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogIzhiZDNmZjtcbn1cblxuI2ltZ05ld3Mge1xuICBtYXgtaGVpZ2h0OiAyNXJlbTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uaW1nTmV3cyB7XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xuICBtYXJnaW46IDAuM3JlbTtcbn1cblxuLmJ0bkxpbmsge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/news/detail-news/detail-news.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/news/detail-news/detail-news.component.ts ***!
    \***********************************************************/

  /*! exports provided: DetailNewsComponent */

  /***/
  function srcAppNewsDetailNewsDetailNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailNewsComponent", function () {
      return DetailNewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/shared-services/shared.service */
    "./src/app/shared/services/shared-services/shared.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Browser;

    var DetailNewsComponent = /*#__PURE__*/function () {
      function DetailNewsComponent(sharedService, navCtrl) {
        _classCallCheck(this, DetailNewsComponent);

        this.sharedService = sharedService;
        this.navCtrl = navCtrl;
        this.isNews = false;
        this.slideOpts = {
          slidesPerView: 1.5,
          freeMode: true
        };
      }

      _createClass(DetailNewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // ------ Se comprueba que lleguen los datos y en caso que no, se redirecciona para evitar
          // ------ que estalle la app
          if (this.sharedService.getData()) {
            this.news = this.sharedService.getData();
            console.log('this.news', this.news);
            this.isNews = true;
          } else {
            this.navCtrl.navigateRoot('tabs/news/list', {
              animated: true
            });
          }
        }
      }, {
        key: "openLink",
        value: function openLink(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    if (!(url.indexOf('http') !== -1)) {
                      _context26.next = 5;
                      break;
                    }

                    _context26.next = 3;
                    return Browser.open({
                      url: url
                    });

                  case 3:
                    _context26.next = 7;
                    break;

                  case 5:
                    _context26.next = 7;
                    return Browser.open({
                      url: "http://".concat(url)
                    });

                  case 7:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26);
          }));
        }
      }]);

      return DetailNewsComponent;
    }();

    DetailNewsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    DetailNewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-news',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail-news.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/detail-news/detail-news.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail-news.component.scss */
      "./src/app/news/detail-news/detail-news.component.scss"))["default"]]
    })], DetailNewsComponent);
    /***/
  },

  /***/
  "./src/app/news/list-news/list-news.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/news/list-news/list-news.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsListNewsListNewsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\nion-header {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n#btnReserve {\n  position: fixed;\n  bottom: 4px;\n  left: 9px;\n  border-radius: 5px;\n}\n\n#firsTitle {\n  margin-top: 1rem !important;\n}\n\n#firsTitle h3 {\n  font-weight: bold;\n}\n\n.title {\n  margin-left: 1rem !important;\n  font-weight: 500;\n}\n\n.subTitle {\n  font-size: 1rem !important;\n  margin-top: 8px !important;\n  margin-bottom: 10px !important;\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n#titleEvents {\n  margin-top: -1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n#titleEvents p {\n  font-weight: bold;\n  font-size: 1rem !important;\n}\n\n.cardsEvent {\n  margin-top: -1.5rem;\n}\n\n.imgBillboard {\n  max-height: 10rem !important;\n}\n\nion-card {\n  margin-bottom: 0;\n}\n\nion-card-title {\n  font-size: 1.2rem;\n}\n\nion-card-subtitle {\n  color: #48b5fb;\n  margin-right: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.iconShare {\n  position: fixed;\n  top: 5px;\n  right: 9px;\n  opacity: 0.6;\n  color: #ffffff;\n}\n\n.iconShare ion-icon {\n  color: #ffffff;\n}\n\n.iconHeart {\n  position: fixed;\n  top: 5px;\n  right: 60px;\n  opacity: 0.6;\n  color: #ffffff;\n}\n\n#thumbnailSkeleton {\n  position: relative;\n  width: 15.2rem;\n  height: 7rem;\n}\n\n.shortText {\n  width: 230px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.titleNavigate {\n  -webkit-text-decoration: underline #ffffff;\n          text-decoration: underline #ffffff;\n  font-weight: bold;\n  position: absolute;\n  top: 264px;\n  left: 10px;\n  color: white;\n}\n\n.cardNews {\n  height: 20rem;\n}\n\n.cardNews:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(34, 154, 228, 0.9);\n}\n\n.titleNews {\n  position: absolute;\n  top: 88px;\n  left: 10px;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 1.1rem;\n  width: 18rem;\n}\n\n.titleNewsLong {\n  top: 83px;\n}\n\n.subtitleNews {\n  position: absolute;\n  top: 130px;\n  left: 10px;\n  color: #ffffff;\n}\n\n.descriptionNews {\n  position: absolute;\n  top: 140px;\n  left: 10px;\n  color: #ffffff;\n  width: 300px;\n  margin: 1rem 0;\n}\n\n.limitDescriptionNews {\n  width: 300px;\n}\n\n.endDate {\n  position: absolute;\n  background: rgba(117, 201, 251, 0.5);\n  top: 0;\n  right: 0;\n  width: 5rem;\n  height: 5rem;\n}\n\n.endDateDay {\n  position: relative;\n  top: 0px;\n  right: -19px;\n  font-size: 2.3rem;\n  color: #ffffff;\n  margin: 0;\n}\n\n.endDateMonth {\n  position: relative;\n  top: -4px;\n  right: -20px;\n  font-size: 1.4rem;\n  color: #ffffff;\n  margin: 0;\n}\n\n.noNews {\n  color: #48b5fb;\n}\n\n.firstCardNews:before {\n  background-color: #ffffff;\n}\n\n.firstCardNews .titleNews,\n.firstCardNews .descriptionNews,\n.firstCardNews .titleNavigate,\n.firstCardNews .endDate .endDateDay,\n.firstCardNews .endDate .endDateMonth {\n  color: #000d3d;\n}\n\n.firstCardNews .titleNavigate {\n  -webkit-text-decoration: underline #000d3d;\n          text-decoration: underline #000d3d;\n}\n\n.firstCardNews .subtitleNews {\n  color: #3db5ff;\n}\n\n.secondCardNews:before {\n  background-color: #3db5ff;\n}\n\n.secondCardNews .titleNews,\n.secondCardNews .descriptionNews {\n  color: #ffffff;\n}\n\n.thirdCardNews:before {\n  background-color: #000d3d;\n}\n\n.thirdCardNews .titleNews,\n.thirdCardNews .subtitleNews {\n  color: #3db5ff;\n}\n\n.thirdCardNews .descriptionNews {\n  color: #ffffff;\n}\n\n.noNewsPrincipal {\n  padding-left: 0.9rem;\n  padding-right: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9uZXdzL2xpc3QtbmV3cy9saXN0LW5ld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ld3MvbGlzdC1uZXdzL2xpc3QtbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFHRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseUNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBOzs7OztFQUtFLGNBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO1VBQUEsa0NBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTs7RUFFRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uZXdzL2xpc3QtbmV3cy9saXN0LW5ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnJlc2V0VmFsdWVzQ3NzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNidG5SZXNlcnZlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNmaXJzVGl0bGUge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiNmaXJzVGl0bGUgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4jdGl0bGVFdmVudHMge1xuICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiN0aXRsZUV2ZW50cyBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZHNFdmVudCB7XG4gIG1hcmdpbi10b3A6IC0xLjVyZW07XG59XG5cbi5pbWdCaWxsYm9hcmQge1xuICBtYXgtaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uU2hhcmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXB4O1xuICByaWdodDogOXB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaWNvblNoYXJlIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pY29uSGVhcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXB4O1xuICByaWdodDogNjBweDtcbiAgb3BhY2l0eTogMC42O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI3RodW1ibmFpbFNrZWxldG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTUuMnJlbTtcbiAgaGVpZ2h0OiA3cmVtO1xufVxuXG4uc2hvcnRUZXh0IHtcbiAgd2lkdGg6IDIzMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdGxlTmF2aWdhdGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI2NHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkTmV3cyB7XG4gIGhlaWdodDogMjByZW07XG59XG5cbi5jYXJkTmV3czpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMTU0LCAyMjgsIDAuOSk7XG59XG5cbi50aXRsZU5ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODhweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgd2lkdGg6IDE4cmVtO1xufVxuXG4udGl0bGVOZXdzTG9uZyB7XG4gIHRvcDogODNweDtcbn1cblxuLnN1YnRpdGxlTmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMzBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kZXNjcmlwdGlvbk5ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTQwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4ubGltaXREZXNjcmlwdGlvbk5ld3Mge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5lbmREYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNywgMjAxLCAyNTEsIDAuNSk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG59XG5cbi5lbmREYXRlRGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IC0xOXB4O1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVuZERhdGVNb250aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogLTIwcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubm9OZXdzIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG59XG5cbi5maXJzdENhcmROZXdzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5maXJzdENhcmROZXdzIC50aXRsZU5ld3MsXG4uZmlyc3RDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzLFxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmF2aWdhdGUsXG4uZmlyc3RDYXJkTmV3cyAuZW5kRGF0ZSAuZW5kRGF0ZURheSxcbi5maXJzdENhcmROZXdzIC5lbmREYXRlIC5lbmREYXRlTW9udGgge1xuICBjb2xvcjogIzAwMGQzZDtcbn1cblxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmF2aWdhdGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjMDAwZDNkO1xufVxuXG4uZmlyc3RDYXJkTmV3cyAuc3VidGl0bGVOZXdzIHtcbiAgY29sb3I6ICMzZGI1ZmY7XG59XG5cbi5zZWNvbmRDYXJkTmV3czpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RiNWZmO1xufVxuXG4uc2Vjb25kQ2FyZE5ld3MgLnRpdGxlTmV3cyxcbi5zZWNvbmRDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50aGlyZENhcmROZXdzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBkM2Q7XG59XG5cbi50aGlyZENhcmROZXdzIC50aXRsZU5ld3MsXG4udGhpcmRDYXJkTmV3cyAuc3VidGl0bGVOZXdzIHtcbiAgY29sb3I6ICMzZGI1ZmY7XG59XG5cbi50aGlyZENhcmROZXdzIC5kZXNjcmlwdGlvbk5ld3Mge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm5vTmV3c1ByaW5jaXBhbCB7XG4gIHBhZGRpbmctbGVmdDogMC45cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjlyZW07XG59XG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnJlc2V0VmFsdWVzQ3NzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNidG5SZXNlcnZlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNmaXJzVGl0bGUge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiNmaXJzVGl0bGUgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4jdGl0bGVFdmVudHMge1xuICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiN0aXRsZUV2ZW50cyBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZHNFdmVudCB7XG4gIG1hcmdpbi10b3A6IC0xLjVyZW07XG59XG5cbi5pbWdCaWxsYm9hcmQge1xuICBtYXgtaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uU2hhcmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXB4O1xuICByaWdodDogOXB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaWNvblNoYXJlIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pY29uSGVhcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXB4O1xuICByaWdodDogNjBweDtcbiAgb3BhY2l0eTogMC42O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI3RodW1ibmFpbFNrZWxldG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTUuMnJlbTtcbiAgaGVpZ2h0OiA3cmVtO1xufVxuXG4uc2hvcnRUZXh0IHtcbiAgd2lkdGg6IDIzMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdGxlTmF2aWdhdGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI2NHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkTmV3cyB7XG4gIGhlaWdodDogMjByZW07XG59XG5cbi5jYXJkTmV3czpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMTU0LCAyMjgsIDAuOSk7XG59XG5cbi50aXRsZU5ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODhweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgd2lkdGg6IDE4cmVtO1xufVxuXG4udGl0bGVOZXdzTG9uZyB7XG4gIHRvcDogODNweDtcbn1cblxuLnN1YnRpdGxlTmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMzBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kZXNjcmlwdGlvbk5ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTQwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4ubGltaXREZXNjcmlwdGlvbk5ld3Mge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5lbmREYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNywgMjAxLCAyNTEsIDAuNSk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG59XG5cbi5lbmREYXRlRGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IC0xOXB4O1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVuZERhdGVNb250aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogLTIwcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubm9OZXdzIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG59XG5cbi5maXJzdENhcmROZXdzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5maXJzdENhcmROZXdzIC50aXRsZU5ld3MsXG4uZmlyc3RDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzLFxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmF2aWdhdGUsXG4uZmlyc3RDYXJkTmV3cyAuZW5kRGF0ZSAuZW5kRGF0ZURheSxcbi5maXJzdENhcmROZXdzIC5lbmREYXRlIC5lbmREYXRlTW9udGgge1xuICBjb2xvcjogIzAwMGQzZDtcbn1cblxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmF2aWdhdGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjMDAwZDNkO1xufVxuXG4uZmlyc3RDYXJkTmV3cyAuc3VidGl0bGVOZXdzIHtcbiAgY29sb3I6ICMzZGI1ZmY7XG59XG5cbi5zZWNvbmRDYXJkTmV3czpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RiNWZmO1xufVxuXG4uc2Vjb25kQ2FyZE5ld3MgLnRpdGxlTmV3cyxcbi5zZWNvbmRDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50aGlyZENhcmROZXdzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBkM2Q7XG59XG5cbi50aGlyZENhcmROZXdzIC50aXRsZU5ld3MsXG4udGhpcmRDYXJkTmV3cyAuc3VidGl0bGVOZXdzIHtcbiAgY29sb3I6ICMzZGI1ZmY7XG59XG5cbi50aGlyZENhcmROZXdzIC5kZXNjcmlwdGlvbk5ld3Mge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm5vTmV3c1ByaW5jaXBhbCB7XG4gIHBhZGRpbmctbGVmdDogMC45cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjlyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/news/list-news/list-news.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/news/list-news/list-news.component.ts ***!
    \*******************************************************/

  /*! exports provided: ListNewsComponent */

  /***/
  function srcAppNewsListNewsListNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListNewsComponent", function () {
      return ListNewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/crud-service/crud.service */
    "./src/app/shared/services/crud-service/crud.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/shared-services/shared.service */
    "./src/app/shared/services/shared-services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var ListNewsComponent = /*#__PURE__*/function () {
      function ListNewsComponent(crudService, navCtrl, sharedService, menuCrtl, storage) {
        _classCallCheck(this, ListNewsComponent);

        this.crudService = crudService;
        this.navCtrl = navCtrl;
        this.sharedService = sharedService;
        this.menuCrtl = menuCrtl;
        this.storage = storage;
        this.colors = ['Blanco', 'Azul', 'Azul_Oscuro'];
        this.idDataNews = false;
        this.isData = true;
        this.news = [];
        this.finalNews = [];
        this.flag = false;
        this.limitDesc = 140;
        this.limitTitle = 40; // ------- Se inicia en 2 el pageNumber para que cargue la primera cartelera... ya que si se empieza desde el 1,
        // ------- se mostrara primero la 3 cartelera y después seguira con la 2da cartelera y se reperita la 3ra cartelera
        // ------- en esta posición.... de tal forma que se perdería la 1ra cartelera

        this.pageNumber = 1;
        this.pageCount = 1;
        this.pageSize = 4;
      }

      _createClass(ListNewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.storage.get('establishmentId');

                  case 2:
                    this.establishmentId = _context27.sent;
                    this.getBillboards();

                  case 4:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "getBillboards",
        value: function getBillboards() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this20 = this;

            var isNews;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    isNews = {
                      type: 'N',
                      direction: 'des',
                      direction_by: 'start_date'
                    };
                    _context28.t0 = this.crudService;
                    _context28.t1 = "newsletter/getByType/".concat(this.establishmentId, "/").concat(isNews.type, "/").concat(isNews.direction);
                    _context28.next = 5;
                    return this.storage.get('token');

                  case 5:
                    _context28.t2 = _context28.sent;

                    _context28.t0.getModel.call(_context28.t0, _context28.t1, _context28.t2).subscribe(function (res) {
                      var _this20$finalNews;

                      _this20.news = res.genericObject;
                      console.log('dataNEws', _this20.news); // ------ Se usan las 2 variables para organizar la secuencia de colores que
                      // ------ se aprecia en la vista

                      var j = 0;
                      var k = 0;

                      for (var l in _this20.news) {
                        if (k <= 2) {
                          if (j === 0 && k === 1) {
                            j = 1;
                          }

                          _this20.news[l].color = _this20.colors[j];
                          j++;
                        } else if (k >= 3) {
                          if (k === 3) {
                            j = 2;
                          }

                          j--;
                          _this20.news[l].color = _this20.colors[j];

                          if (j === 0) {
                            k = 0;
                          }
                        }

                        k++;
                      }

                      var myBillboards = _this20.paginateBillboards();

                      if (_this20.news.length == 0) {
                        _this20.idDataNews = true;
                        _this20.isData = false;
                      } else {
                        _this20.isData = false;
                      }

                      if (_this20.flag) {
                        // ----- Si la bandera es TRUE, significa que el usurio recarga o refresca la consulta que trae
                        // ----- el listado de las noticias, entonces se debe de reiniciar el arreglo newsFinal (que contiene el listado
                        // ----- que se muestra en el HTML) para que se reinicie el listado y evitar se concatene el listado existente con
                        // ----- el nuevo listado que se trae al referescar la consulta
                        _this20.finalNews = [];
                      } // let algo: BillboardsNewsModel[] = [];


                      (_this20$finalNews = _this20.finalNews).push.apply(_this20$finalNews, _toConsumableArray(myBillboards));
                    });

                  case 7:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "viewDetail",
        value: function viewDetail(billboard) {
          this.sharedService.setData(billboard);
          this.navCtrl.navigateRoot('/tabs/news/detail-news', {
            animated: true
          });
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menuCrtl.toggle();
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this21 = this;

          setTimeout(function () {
            var _this21$finalNews;

            if (_this21.finalNews.length >= _this21.news.length) {
              _this21.infiniteScroll.complete();

              _this21.infiniteScroll.disabled = true;
              return;
            }

            _this21.pageNumber++;

            var myBillboards = _this21.paginateBillboards();

            (_this21$finalNews = _this21.finalNews).push.apply(_this21$finalNews, _toConsumableArray(myBillboards));

            _this21.infiniteScroll.complete();
          }, 1500);
        } // ----------- Paginador para infinite scroll -----------

      }, {
        key: "paginateBillboards",
        value: function paginateBillboards() {
          return this.news.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this22 = this;

          setTimeout(function () {
            _this22.pageNumber = 1;
            _this22.infiniteScroll.disabled = false;
            _this22.flag = true;

            _this22.getBillboards();

            event.target.complete();
          }, 1500);
        }
      }]);

      return ListNewsComponent;
    }();

    ListNewsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CRUDService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])], ListNewsComponent.prototype, "infiniteScroll", void 0);
    ListNewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-news',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-news.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/list-news/list-news.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-news.component.scss */
      "./src/app/news/list-news/list-news.component.scss"))["default"]]
    })], ListNewsComponent);
    /***/
  },

  /***/
  "./src/app/news/news-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/news/news-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: NewsRoutingModule */

  /***/
  function srcAppNewsNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function () {
      return NewsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _list_news_list_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-news/list-news.component */
    "./src/app/news/list-news/list-news.component.ts");
    /* harmony import */


    var _detail_news_detail_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./detail-news/detail-news.component */
    "./src/app/news/detail-news/detail-news.component.ts");

    var routes = [{
      path: 'list',
      component: _list_news_list_news_component__WEBPACK_IMPORTED_MODULE_3__["ListNewsComponent"]
    }, {
      path: 'detail-news',
      component: _detail_news_detail_news_component__WEBPACK_IMPORTED_MODULE_4__["DetailNewsComponent"]
    }];

    var NewsRoutingModule = function NewsRoutingModule() {
      _classCallCheck(this, NewsRoutingModule);
    };

    NewsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewsRoutingModule);
    /***/
  },

  /***/
  "./src/app/news/news.module.ts":
  /*!*************************************!*\
    !*** ./src/app/news/news.module.ts ***!
    \*************************************/

  /*! exports provided: NewsModule */

  /***/
  function srcAppNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsModule", function () {
      return NewsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _news_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./news-routing.module */
    "./src/app/news/news-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _list_news_list_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-news/list-news.component */
    "./src/app/news/list-news/list-news.component.ts");
    /* harmony import */


    var _detail_news_detail_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail-news/detail-news.component */
    "./src/app/news/detail-news/detail-news.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var NewsModule = function NewsModule() {
      _classCallCheck(this, NewsModule);
    };

    NewsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_news_list_news_component__WEBPACK_IMPORTED_MODULE_5__["ListNewsComponent"], _detail_news_detail_news_component__WEBPACK_IMPORTED_MODULE_6__["DetailNewsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
    })], NewsModule);
    /***/
  },

  /***/
  "./src/app/notifications/components/chat/chat.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/notifications/components/chat/chat.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsComponentsChatChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\n.myToolbar {\n  --background: #010d3d;\n  color: #fff;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  background: #fff;\n  resize: none;\n  margin-top: 0px;\n  margin-left: 0.7rem;\n  --padding-start: 8px;\n}\n\n.message {\n  padding: 10px !important;\n  border-radius: 22px !important;\n  margin-bottom: 2rem !important;\n  white-space: pre-wrap;\n}\n\n.userName {\n  padding: 0;\n  margin: 0rem 0 0.3rem;\n}\n\n.my-message {\n  background: #6967f8;\n  color: #fff;\n}\n\n.my-message b {\n  font-size: 0.9rem;\n  color: #fff;\n}\n\n.my-message .time {\n  color: #000;\n}\n\n.other-message {\n  background: #ebecfe;\n}\n\n.other-message b {\n  color: #0d3687;\n  font-size: 0.9rem;\n}\n\n.time {\n  color: #0d3687;\n  float: right;\n  font-size: small;\n  opacity: 60%;\n}\n\n.my-time {\n  position: absolute;\n  color: black;\n  top: 83%;\n  right: 2%;\n  font-weight: bold;\n}\n\n.other-time {\n  position: absolute;\n  color: black;\n  top: 83%;\n  left: 2%;\n  font-weight: bold;\n}\n\n.optionMyMsg {\n  --background: none;\n  --box-shadow: none;\n  position: absolute;\n  top: -0.2rem;\n  right: -0.6rem;\n  width: 3rem;\n}\n\n.noMsg {\n  font-size: 1.2rem;\n  position: relative;\n  top: 0.1rem;\n  margin-right: 0.5rem;\n}\n\n.msg-btn {\n  font-size: 0.7rem;\n  transform: rotate(-31deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9ub3RpZmljYXRpb25zL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3RpZmljYXRpb25zL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBRUksbUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUVJLG1CQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuLm15VG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDEwZDNkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcmVzaXplOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLjdyZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG59XG4gXG4ubWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4udXNlck5hbWUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwcmVtIDAgMC4zcmVtO1xufVxuIFxuLm15LW1lc3NhZ2Uge1xuICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgYmFja2dyb3VuZDogIzY5NjdmODtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLm15LW1lc3NhZ2UgYiB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLm15LW1lc3NhZ2UgLnRpbWUge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuIFxuLm90aGVyLW1lc3NhZ2Uge1xuICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGJhY2tncm91bmQ6ICNlYmVjZmU7XG59XG5cbi5vdGhlci1tZXNzYWdlIGIge1xuICAgIGNvbG9yOiAjMGQzNjg3O1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG59XG5cbi50aW1lIHtcbiAgICBjb2xvcjogIzBkMzY4NztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBvcGFjaXR5OiA2MCU7XG59XG5cbi5teS10aW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRvcDogODMlO1xuICAgIHJpZ2h0OiAyJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm90aGVyLXRpbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdG9wOiA4MyU7XG4gICAgbGVmdDogMiU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcHRpb25NeU1zZyB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtLjJyZW07XG4gICAgcmlnaHQ6IC0uNnJlbTtcbiAgICB3aWR0aDogM3JlbTtcbn1cblxuLm5vTXNnIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAuMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xufVxuXG4ubXNnLWJ0biB7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzFkZWcpO1xufSIsIioge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuLm15VG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAxMGQzZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMC43cmVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi51c2VyTmFtZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMHJlbSAwIDAuM3JlbTtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjNjk2N2Y4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm15LW1lc3NhZ2UgYiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm15LW1lc3NhZ2UgLnRpbWUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm90aGVyLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZWJlY2ZlO1xufVxuXG4ub3RoZXItbWVzc2FnZSBiIHtcbiAgY29sb3I6ICMwZDM2ODc7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiAjMGQzNjg3O1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG9wYWNpdHk6IDYwJTtcbn1cblxuLm15LXRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdG9wOiA4MyU7XG4gIHJpZ2h0OiAyJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vdGhlci10aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHRvcDogODMlO1xuICBsZWZ0OiAyJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcHRpb25NeU1zZyB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuMnJlbTtcbiAgcmlnaHQ6IC0wLjZyZW07XG4gIHdpZHRoOiAzcmVtO1xufVxuXG4ubm9Nc2cge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5tc2ctYnRuIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMWRlZyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/notifications/components/chat/chat.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/notifications/components/chat/chat.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppNotificationsComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_notification_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/notification-chat.service */
    "./src/app/notifications/services/notification-chat.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(chatService, storage, menuCrtl, alertCtrl) {
        _classCallCheck(this, ChatComponent);

        this.chatService = chatService;
        this.storage = storage;
        this.menuCrtl = menuCrtl;
        this.alertCtrl = alertCtrl;
        this.messages = new Array();
        this.keys = new Array();
        this.removeMyMsg = new Array();
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllMsg();
          this.getAllMsg2();
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menuCrtl.toggle();
        }
      }, {
        key: "getAllMsg",
        value: function getAllMsg() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var _this23 = this;

            var ESTABLISHMENT_ID, USER_ID;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return this.storage.get('establishmentId');

                  case 2:
                    ESTABLISHMENT_ID = _context29.sent;
                    _context29.next = 5;
                    return this.storage.get('userId');

                  case 5:
                    USER_ID = _context29.sent;
                    _context29.next = 8;
                    return this.chatService.getAllMsg(ESTABLISHMENT_ID, USER_ID);

                  case 8:
                    _context29.sent.subscribe(function (message) {
                      _this23.messages = message;
                      console.log('messages', message);

                      for (var m in _this23.messages) {
                        if ('Vecino' === _this23.messages[m].rolUsuario) {
                          // ------ si el rol que envio el mensaje pertenece al del usuario vecino, entonces la propiedad
                          // ------ myMsg queda en true
                          _this23.messages[m].myMsg = true;
                        }
                      }

                      setTimeout(function () {
                        _this23.scrollDown();
                      }, 100);
                    });

                  case 9:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        } // ------ Este metodo se usa para poder borrar los mensajes -----

      }, {
        key: "getAllMsg2",
        value: function getAllMsg2() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            var _this24 = this;

            var ESTABLISHMENT_ID, USER_ID;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.storage.get('establishmentId');

                  case 2:
                    ESTABLISHMENT_ID = _context30.sent;
                    _context30.next = 5;
                    return this.storage.get('userId');

                  case 5:
                    USER_ID = _context30.sent;
                    _context30.next = 8;
                    return this.chatService.getListChat(ESTABLISHMENT_ID, USER_ID).then(function (res) {
                      res.on('value', function (snapshot) {
                        var data = snapshot.val();

                        if (data) {
                          _this24.keys = Object.keys(data);
                          _this24.removeMyMsg = Object.values(data);
                        }
                      });
                    });

                  case 8:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          // ------ Si el listado de mensajes esta en 0, entonces se crea la conversación con el portero, en caso de que no;
          // ------ se responde la conversación al portero
          if (this.messages.length == 0) {
            this.chatService.newChat(this.newMsg);
          } else {
            this.chatService.sendMessage(this.newMsg);
          }

          this.newMsg = '';
          this.scrollDown();
        }
      }, {
        key: "removeMsg",
        value: function removeMsg(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            var _this25 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.next = 2;
                    return this.alertCtrl.create({
                      cssClass: 'my-custom-class',
                      message: '<strong>¿Deseas eliminar este mensaje?</strong>',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Confirmar',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this25.chatService.updateMessage(_this25.keys[item], _this25.removeMyMsg[item]);
                        }
                      }]
                    });

                  case 2:
                    alert = _context31.sent;
                    _context31.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage() {
          this.chatService.deleMessage();
        }
      }, {
        key: "scrollDown",
        value: function scrollDown() {
          this.content.scrollToBottom();
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: _services_notification_chat_service__WEBPACK_IMPORTED_MODULE_2__["NotificationChatService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])], ChatComponent.prototype, "content", void 0);
    ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/chat/chat.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat.component.scss */
      "./src/app/notifications/components/chat/chat.component.scss"))["default"]]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/notifications/components/notification/detail-notification/detail-notification.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/notifications/components/notification/detail-notification/detail-notification.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsComponentsNotificationDetailNotificationDetailNotificationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9ub3RpZmljYXRpb24vZGV0YWlsLW5vdGlmaWNhdGlvbi9kZXRhaWwtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/notifications/components/notification/detail-notification/detail-notification.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/notifications/components/notification/detail-notification/detail-notification.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: DetailNotificationComponent */

  /***/
  function srcAppNotificationsComponentsNotificationDetailNotificationDetailNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailNotificationComponent", function () {
      return DetailNotificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].PushNotifications;

    var DetailNotificationComponent = /*#__PURE__*/function () {
      function DetailNotificationComponent(route) {
        _classCallCheck(this, DetailNotificationComponent);

        this.route = route;
        this.id = null;
      }

      _createClass(DetailNotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.route.paramMap.subscribe(function (params) {
            _this26.id = params.get('id');
          });
        }
      }, {
        key: "resetBadgeCount",
        value: function resetBadgeCount() {
          PushNotifications.removeAllDeliveredNotifications();
        }
      }]);

      return DetailNotificationComponent;
    }();

    DetailNotificationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    DetailNotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-notification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail-notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/notification/detail-notification/detail-notification.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail-notification.component.scss */
      "./src/app/notifications/components/notification/detail-notification/detail-notification.component.scss"))["default"]]
    })], DetailNotificationComponent);
    /***/
  },

  /***/
  "./src/app/notifications/components/notification/list-notification/notification.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/notifications/components/notification/list-notification/notification.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsComponentsNotificationListNotificationNotificationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9ub3RpZmljYXRpb25zL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2xpc3Qtbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9ucy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9saXN0LW5vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9saXN0LW5vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cbiIsIioge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/notifications/components/notification/list-notification/notification.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/notifications/components/notification/list-notification/notification.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppNotificationsComponentsNotificationListNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/crud-service/crud.service */
    "./src/app/shared/services/crud-service/crud.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var NotificationComponent = /*#__PURE__*/function () {
      function NotificationComponent(crudService, storage) {
        _classCallCheck(this, NotificationComponent);

        this.crudService = crudService;
        this.storage = storage;
      }

      _createClass(NotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNotifications();
        }
      }, {
        key: "getNotifications",
        value: function getNotifications() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    console.log('obtieniendo notificaciones');
                    _context32.t0 = this.crudService;
                    _context32.next = 4;
                    return this.storage.get('token');

                  case 4:
                    _context32.t1 = _context32.sent;

                    _context32.t0.getModel.call(_context32.t0, 'notification/getByEstablishment/5ecd8bdf57780000cd006792', _context32.t1).subscribe(function (resp) {
                      console.log('listado notificaciones');
                      console.log(resp);
                    });

                  case 6:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }]);

      return NotificationComponent;
    }();

    NotificationComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CRUDService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/components/notification/list-notification/notification.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notification.component.scss */
      "./src/app/notifications/components/notification/list-notification/notification.component.scss"))["default"]]
    })], NotificationComponent);
    /***/
  },

  /***/
  "./src/app/notifications/notifications-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/notifications/notifications-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: NotificationsRoutingModule */

  /***/
  function srcAppNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function () {
      return NotificationsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/notifications/components/chat/chat.component.ts");
    /* harmony import */


    var _components_notification_detail_notification_detail_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/notification/detail-notification/detail-notification.component */
    "./src/app/notifications/components/notification/detail-notification/detail-notification.component.ts");

    var routes = [{
      path: 'chat',
      component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]
    }, {
      path: '**',
      redirectTo: 'chat'
    }, {
      path: 'detail-notification/:id',
      component: _components_notification_detail_notification_detail_notification_component__WEBPACK_IMPORTED_MODULE_4__["DetailNotificationComponent"]
    }];

    var NotificationsRoutingModule = function NotificationsRoutingModule() {
      _classCallCheck(this, NotificationsRoutingModule);
    };

    NotificationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsRoutingModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotificationsModule */

  /***/
  function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsModule", function () {
      return NotificationsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/notifications/components/chat/chat.component.ts");
    /* harmony import */


    var _components_notification_list_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/notification/list-notification/notification.component */
    "./src/app/notifications/components/notification/list-notification/notification.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NotificationsModule = function NotificationsModule() {
      _classCallCheck(this, NotificationsModule);
    };

    NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], _components_notification_list_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationsRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
    })], NotificationsModule);
    /***/
  },

  /***/
  "./src/app/notifications/services/fcm.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/services/fcm.service.ts ***!
    \*******************************************************/

  /*! exports provided: FcmService */

  /***/
  function srcAppNotificationsServicesFcmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FcmService", function () {
      return FcmService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].PushNotifications;

    var FcmService = /*#__PURE__*/function () {
      function FcmService(router, storage, alertCtrl) {
        _classCallCheck(this, FcmService);

        this.router = router;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
      }

      _createClass(FcmService, [{
        key: "initPush",
        value: function initPush() {
          // console.log(JSON.stringify('inciando notificaciones ---------'));
          if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {
            this.registerPush();
          }
        }
      }, {
        key: "registerPush",
        value: function registerPush() {
          var _this27 = this;

          // console.log(JSON.stringify('inciando notificaciones registerPush ---------'));
          PushNotifications.requestPermission().then(function (permission) {
            if (permission.granted) {
              // Register with Apple / Google to receive push via APNS/FCM
              PushNotifications.register();
            } else {// No permission for push granted
            }
          });
          PushNotifications.addListener('registration', function (token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      // console.log(JSON.stringify('inciando notificaciones token ---------'));
                      console.log('My token: ' + JSON.stringify(token));
                      console.log('My token3: ' + token.value);
                      localStorage.setItem('firebaseToken', token.value);

                    case 3:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33);
            }));
          });
          PushNotifications.addListener('registrationError', function (error) {
            console.log('Error: ' + JSON.stringify(error));
          });
          PushNotifications.addListener('pushNotificationReceived', function (notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      console.log('Push received: ' + JSON.stringify(notification));
                      this.alertNotification(notification.title, notification.body);

                    case 2:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          });
          PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var data;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      console.log('data notification recibida', notification); // ------ el tipo de notificación se va a manejar de forma numerica:
                      // ------ Cartelera = 1;
                      // ------ Noticia = 2;
                      // ------ Chat porteria = 3;

                      data = notification.notification.data; // console.log('Action performed: ' + JSON.stringify(notification.notification));
                      // if (data.detailsId) {
                      //   this.router.navigateByUrl(`/notification/detail-notification/${data.detailsId}`);
                      // }

                      if (data.type) {
                        this.router.navigateByUrl("/tabs/home");
                      }

                    case 3:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          });
        }
      }, {
        key: "alertNotification",
        value: function alertNotification(header, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
            var alert;
            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    _context36.next = 2;
                    return this.alertCtrl.create({
                      cssClass: 'alert-notification',
                      header: header,
                      message: message,
                      mode: "md",
                      buttons: [// {
                      //   text: 'Cancelar',
                      //   role: 'cancel',
                      //   cssClass: 'btn-notification',
                      //   handler: (blah) => {
                      //     console.log('Confirm Cancel: blah');
                      //   }
                      // },
                      {
                        text: 'Aceptar',
                        cssClass: 'btn-notification',
                        handler: function handler() {
                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context36.sent;
                    _context36.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }]);

      return FcmService;
    }();

    FcmService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    FcmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FcmService);
    /***/
  },

  /***/
  "./src/app/notifications/services/notification-chat.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/notifications/services/notification-chat.service.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationChatService */

  /***/
  function srcAppNotificationsServicesNotificationChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationChatService", function () {
      return NotificationChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_utils_models_Messages_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/utils/models/Messages.model */
    "./src/utils/models/Messages.model.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var NotificationChatService = /*#__PURE__*/function () {
      function NotificationChatService(dbFirebase, storage) {
        _classCallCheck(this, NotificationChatService);

        this.dbFirebase = dbFirebase;
        this.storage = storage;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
        this.message = new src_utils_models_Messages_model__WEBPACK_IMPORTED_MODULE_4__["newMessageModel"]();
        this.createChat = new src_utils_models_Messages_model__WEBPACK_IMPORTED_MODULE_4__["CreateChatModel"]();
      }

      _createClass(NotificationChatService, [{
        key: "getAllMsg",
        value: function getAllMsg(establishmentId, userId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
            var REQUEST, Rest;
            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    _context37.next = 2;
                    return this.storage.get('establishmentId');

                  case 2:
                    this.createChat.establshmentId = _context37.sent;
                    _context37.next = 5;
                    return this.storage.get('userId');

                  case 5:
                    this.createChat.userId = _context37.sent;
                    _context37.next = 8;
                    return this.storage.get('userName');

                  case 8:
                    this.createChat.userName = _context37.sent;
                    _context37.next = 11;
                    return this.storage.get('neighbourProperty');

                  case 11:
                    this.createChat.userProperty = _context37.sent;
                    REQUEST = this.dbFirebase.list('/message/' + establishmentId + '/' + userId + '/' + 'conversacion');
                    Rest = this.dbFirebase.database.ref('/message/' + establishmentId + '/' + userId + '/' + 'conversacion').get();
                    return _context37.abrupt("return", REQUEST.valueChanges());

                  case 15:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this);
          }));
        }
      }, {
        key: "getListChat",
        value: function getListChat(establishmentId, userId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
            var starCountRef;
            return regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    starCountRef = this.dbFirebase.database.ref('/message/' + establishmentId + '/' + userId + '/' + 'conversacion'); // starCountRef.on('value', (snapshot) => {
                    //   const data = snapshot.val();
                    //   console.log('das', data);
                    // });

                    return _context38.abrupt("return", starCountRef);

                  case 2:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this);
          }));
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message) {
          this.message.criticidad = 0;
          this.message.fechaMensaje = this.moment().format('DD/MM/YYYY HH:mm');
          this.message.idCategoria = 0;
          this.message.idUsuarioEnvio = this.createChat.userId;
          this.message.isDelete = false;
          this.message.mensaje = message;
          this.message.nombreCategoria = "";
          this.message.nombreUsuario = this.createChat.userName;
          this.message.rolUsuario = 'Vecino';
          this.dbFirebase.list('/message/' + this.createChat.establshmentId + '/' + this.createChat.userId + '/' + 'conversacion').push(this.message);
        }
      }, {
        key: "newChat",
        value: function newChat(message) {
          var _this28 = this;

          this.dbFirebase.database.ref('/message/' + this.createChat.establshmentId + '/' + this.createChat.userId).set({
            idUsuario: this.createChat.userId,
            nombreUsuario: this.createChat.userName,
            numeroInmueble: this.createChat.userProperty,
            fotoPerfil: 'https://i.pinimg.com/originals/7e/bc/88/7ebc888a34305274628610bf02137aaa.png'
          }, function (error) {
            if (error) {
              // The write failed...
              console.error('problemas al iniciar el chat');
            } else {
              // Data saved successfully!
              _this28.sendMessage(message);
            }
          });
        }
      }, {
        key: "deleMessage",
        value: function deleMessage() {
          this.dbFirebase.list('/message/' + this.createChat.establshmentId + '/' + this.createChat.userId + '/' + 'conversacion').remove('-MauuzWjJ_fGnJkg5O4e').then(function (res) {});
        }
      }, {
        key: "updateMessage",
        value: function updateMessage(key, value) {
          this.dbFirebase.list('/message/' + this.createChat.establshmentId + '/' + this.createChat.userId + '/' + 'conversacion').update(key, {
            criticidad: value.criticidad,
            fechaMensaje: value.fechaMensaje,
            idCategoria: value.idCategoria,
            idUsuarioEnvio: value.idUsuarioEnvio,
            isDelete: true,
            mensaje: value.mensaje,
            nombreCategoria: value.nombreCategoria,
            nombreUsuario: value.nombreUsuario,
            rolUsuario: value.rolUsuario
          }).then(function (res) {});
        }
      }]);

      return NotificationChatService;
    }();

    NotificationChatService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    NotificationChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationChatService);
    /***/
  },

  /***/
  "./src/app/shared/components/in-building/in-building.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/in-building/in-building.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsInBuildingInBuildingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2luLWJ1aWxkaW5nL2luLWJ1aWxkaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/in-building/in-building.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/in-building/in-building.component.ts ***!
    \************************************************************************/

  /*! exports provided: InBuildingComponent */

  /***/
  function srcAppSharedComponentsInBuildingInBuildingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InBuildingComponent", function () {
      return InBuildingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InBuildingComponent = /*#__PURE__*/function () {
      function InBuildingComponent() {
        _classCallCheck(this, InBuildingComponent);
      }

      _createClass(InBuildingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InBuildingComponent;
    }();

    InBuildingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-in-building',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./in-building.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/in-building/in-building.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./in-building.component.scss */
      "./src/app/shared/components/in-building/in-building.component.scss"))["default"]]
    })], InBuildingComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/menu/menu.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/menu/menu.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#headerMenu {\n  --background: rgb(60, 54, 150) !important;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n  position: relative;\n}\n\n#toolbarHeader {\n  display: flex;\n  margin-bottom: 0.7rem;\n}\n\n#avatarProfile {\n  width: 3rem !important;\n  height: 3rem !important;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n  margin-top: 0.7rem;\n}\n\n#nameProfile {\n  margin-top: 1.5rem;\n  color: #ffffff;\n  font-weight: bold;\n  margin-left: 1rem;\n  font-size: 1rem;\n}\n\n#emailProfile {\n  color: #ffffff;\n  font-size: 0.8rem;\n}\n\nion-content, #menuList ion-item, #menuList ion-item ion-icon, ion-footer ion-toolbar {\n  --background: rgb(60, 54, 150);\n  color: #ffffff;\n}\n\n.list-md {\n  background: #3c3696;\n}\n\n.active-link {\n  --background: rgb(255, 255, 255) !important;\n  color: #3c3696 !important;\n  border-left: #7961f2 7px solid;\n}\n\n.active-link .active-icon {\n  color: #3c3696 !important;\n}\n\n.ionicon {\n  display: none !important;\n}\n\n#logo {\n  width: 5rem;\n  position: relative;\n  left: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBR0Esd0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlck1lbnUge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDYwLCA1NCwgMTUwKSAhaW1wb3J0YW50O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiN0b29sYmFySGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IC43cmVtO1xufVxuXG4jYXZhdGFyUHJvZmlsZSB7XG4gICAgd2lkdGg6IDNyZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuN3JlbTtcbn1cblxuI25hbWVQcm9maWxlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jZW1haWxQcm9maWxlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IC44cmVtO1xufVxuXG5pb24tY29udGVudCwgI21lbnVMaXN0IGlvbi1pdGVtLCAjbWVudUxpc3QgaW9uLWl0ZW0gaW9uLWljb24sIGlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDYwLCA1NCwgMTUwKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmxpc3QtbWQge1xuICAgIGJhY2tncm91bmQ6IHJnYig2MCwgNTQsIDE1MCk7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDYwLCA1NCwgMTUwKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0OiByZ2IoMTIxLCA5NywgMjQyKSA3cHggc29saWQ7XG59XG5cbi5hY3RpdmUtbGluayAuYWN0aXZlLWljb24ge1xuICAgIGNvbG9yOiByZ2IoNjAsIDU0LCAxNTApICFpbXBvcnRhbnQ7XG59XG5cbi5pb25pY29ue1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI2xvZ28ge1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzNSU7XG59IiwiI2hlYWRlck1lbnUge1xuICAtLWJhY2tncm91bmQ6IHJnYig2MCwgNTQsIDE1MCkgIWltcG9ydGFudDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3Rvb2xiYXJIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbiNhdmF0YXJQcm9maWxlIHtcbiAgd2lkdGg6IDNyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4jbmFtZVByb2ZpbGUge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuI2VtYWlsUHJvZmlsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuaW9uLWNvbnRlbnQsICNtZW51TGlzdCBpb24taXRlbSwgI21lbnVMaXN0IGlvbi1pdGVtIGlvbi1pY29uLCBpb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNjAsIDU0LCAxNTApO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiAjM2MzNjk2O1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzNjMzY5NiAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogIzc5NjFmMiA3cHggc29saWQ7XG59XG5cbi5hY3RpdmUtbGluayAuYWN0aXZlLWljb24ge1xuICBjb2xvcjogIzNjMzY5NiAhaW1wb3J0YW50O1xufVxuXG4uaW9uaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzNSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/menu/menu.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/menu/menu.component.ts ***!
    \**********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppSharedComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/crud-service/crud.service */
    "./src/app/shared/services/crud-service/crud.service.ts");
    /* harmony import */


    var _services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/shared-services/shared.service */
    "./src/app/shared/services/shared-services/shared.service.ts");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(navCtrl, storage, sharedService, dbFirebase, crudService) {
        _classCallCheck(this, MenuComponent);

        this.navCtrl = navCtrl;
        this.storage = storage;
        this.sharedService = sharedService;
        this.dbFirebase = dbFirebase;
        this.crudService = crudService;
        this.dbFirestore = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].firestore();
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setUserLoggedIn",
        value: function setUserLoggedIn() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
            return regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    if (this.establishmentPicture) {
                      _context39.next = 4;
                      break;
                    }

                    this.getEstablishment();
                    _context39.next = 10;
                    break;

                  case 4:
                    _context39.next = 6;
                    return this.storage.get('establishmentName');

                  case 6:
                    this.establishmentName = _context39.sent;
                    _context39.next = 9;
                    return this.storage.get('establishmentPicture');

                  case 9:
                    this.establishmentPicture = _context39.sent;

                  case 10:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39, this);
          }));
        }
      }, {
        key: "getEstablishment",
        value: function getEstablishment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
            var _this29 = this;

            return regeneratorRuntime.wrap(function _callee40$(_context40) {
              while (1) {
                switch (_context40.prev = _context40.next) {
                  case 0:
                    _context40.next = 2;
                    return this.storage.get('token');

                  case 2:
                    this.token = _context40.sent;
                    this.crudService.getModel('user/getMyEstablishments', this.token).subscribe(function (response) {
                      _this29.establishment = response.genericObject[0]; // ------ Se setea la foto al storage para evitar multiples consultas

                      _this29.storage.set('establishmentPicture', _this29.establishment.ruta_imagen_establ);

                      _this29.storage.set('establishmentName', _this29.establishment.nom_establec);

                      _this29.establishmentPicture = _this29.establishment.ruta_imagen_establ;
                      _this29.establishmentName = _this29.establishment.nom_establec;
                    }, function (error) {
                      console.error(error);
                    });

                  case 4:
                  case "end":
                    return _context40.stop();
                }
              }
            }, _callee40, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
            return regeneratorRuntime.wrap(function _callee41$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Capacitor"].platform !== 'web')) {
                      _context41.next = 16;
                      break;
                    }

                    _context41.t1 = this.dbFirebase;
                    _context41.t3 = "/UsersTokenMovile/";
                    _context41.next = 5;
                    return this.storage.get('establishmentId');

                  case 5:
                    _context41.t4 = _context41.sent;
                    _context41.t2 = _context41.t3.concat.call(_context41.t3, _context41.t4, "/");
                    _context41.next = 9;
                    return this.storage.get('neighbourPropertyId');

                  case 9:
                    _context41.t5 = _context41.sent;
                    _context41.t6 = _context41.t2.concat.call(_context41.t2, _context41.t5);
                    _context41.t0 = _context41.t1.list.call(_context41.t1, _context41.t6);
                    _context41.next = 14;
                    return this.storage.get('userId');

                  case 14:
                    _context41.t7 = _context41.sent;

                    _context41.t0.remove.call(_context41.t0, _context41.t7);

                  case 16:
                    this.storage.clear();
                    this.navCtrl.navigateRoot('/login', {
                      animated: true
                    });

                  case 18:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee41, this);
          }));
        }
      }, {
        key: "updateData",
        value: function updateData() {
          // ------ Se envía el true para indicar que el usuario inicia el componente desde el menu
          this.sharedService.setData(true);
        }
      }, {
        key: "termsConditions",
        value: function termsConditions() {
          window.open('https://www.pa-co.co/politica-de-privacidad-y-tratamiento-de-datos-personales-paco/', '_system');
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
      }, {
        type: _services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_8__["CRUDService"]
      }];
    };

    MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu/menu.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/shared/components/menu/menu.component.scss"))["default"]]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/shared/pipes/remove-tag-html.pipe.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/pipes/remove-tag-html.pipe.ts ***!
    \******************************************************/

  /*! exports provided: RemoveTagHtmlPipe */

  /***/
  function srcAppSharedPipesRemoveTagHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveTagHtmlPipe", function () {
      return RemoveTagHtmlPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RemoveTagHtmlPipe = /*#__PURE__*/function () {
      function RemoveTagHtmlPipe() {
        _classCallCheck(this, RemoveTagHtmlPipe);
      }

      _createClass(RemoveTagHtmlPipe, [{
        key: "transform",
        value: function transform(str) {
          console.log('value', str);
          if (str === null || str === '') return false;
          str = str.toString(); // Regular expression to identify HTML tags in
          // the input string. Replacing the identified
          // HTML tag with a null string.

          str = str.replace('&nbsp;', ' ');
          return str.replace(/(<([^>]+)>)/ig, '');
        }
      }]);

      return RemoveTagHtmlPipe;
    }();

    RemoveTagHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'removeTagHtml'
    })], RemoveTagHtmlPipe);
    /***/
  },

  /***/
  "./src/app/shared/pipes/truncate.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
    \***********************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppSharedPipesTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TruncatePipe = /*#__PURE__*/function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        // transform(value: string, args: string[]) : string {
        //   console.log('data pioe', value, args)
        //   let limit = args.length > 0 ? parseInt(args[0], 140) : 140;
        //   let trail = args.length > 1 ? args[1] : '...';
        //   return value.length > limit ? value.substring(0, limit) + trail : value;
        // }
        value: function transform(value) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
          var completeWords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var ellipsis = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '...';

          if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
          }

          return value.length > limit ? value.substr(0, limit) + ellipsis : value;
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'truncate'
    })], TruncatePipe);
    /***/
  },

  /***/
  "./src/app/shared/services/crud-service/crud.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/crud-service/crud.service.ts ***!
    \**************************************************************/

  /*! exports provided: CRUDService */

  /***/
  function srcAppSharedServicesCrudServiceCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CRUDService", function () {
      return CRUDService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var CRUDService = /*#__PURE__*/function () {
      function CRUDService(http, storage) {
        _classCallCheck(this, CRUDService);

        this.http = http;
        this.storage = storage;
      }

      _createClass(CRUDService, [{
        key: "getModel",
        value: function getModel(path, token) {
          var myHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer ".concat(token)
            })
          };
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + path, myHeader);
        }
      }, {
        key: "postModel",
        value: function postModel(path, model, token) {
          var myHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Bearer ".concat(token)
            })
          };
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + path, model, myHeader);
        }
      }]);

      return CRUDService;
    }();

    CRUDService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    CRUDService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CRUDService);
    /***/
  },

  /***/
  "./src/app/shared/services/shared-services/shared.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/services/shared-services/shared.service.ts ***!
    \*******************************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServicesSharedServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService() {
        _classCallCheck(this, SharedService);
      }

      _createClass(SharedService, [{
        key: "getData",
        value: function getData() {
          return this.objetModel;
        }
      }, {
        key: "setData",
        value: function setData(object) {
          this.objetModel = object;
        }
      }]);

      return SharedService;
    }();

    SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedService);
    /***/
  },

  /***/
  "./src/app/shared/shared-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/shared-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SharedRoutingModule */

  /***/
  function srcAppSharedSharedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function () {
      return SharedRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var SharedRoutingModule = function SharedRoutingModule() {
      _classCallCheck(this, SharedRoutingModule);
    };

    SharedRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SharedRoutingModule);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared-routing.module */
    "./src/app/shared/shared-routing.module.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/shared/components/menu/menu.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_in_building_in_building_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/in-building/in-building.component */
    "./src/app/shared/components/in-building/in-building.component.ts");
    /* harmony import */


    var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pipes/truncate.pipe */
    "./src/app/shared/pipes/truncate.pipe.ts");
    /* harmony import */


    var _pipes_remove_tag_html_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pipes/remove-tag-html.pipe */
    "./src/app/shared/pipes/remove-tag-html.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [// ------ Components ------
      _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _components_in_building_in_building_component__WEBPACK_IMPORTED_MODULE_6__["InBuildingComponent"], // ------ Pipes ------
      _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"], _pipes_remove_tag_html_pipe__WEBPACK_IMPORTED_MODULE_8__["RemoveTagHtmlPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]],
      exports: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"], _pipes_remove_tag_html_pipe__WEBPACK_IMPORTED_MODULE_8__["RemoveTagHtmlPipe"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      url: 'https://pacoprod-back.azurewebsites.net/',
      // url:'https://unidappback.azurewebsites.net/', // ------ Url Desarrollo ------
      // url: 'http://190.251.210.194:8080', // ip miguel
      autenticacion: 'authenticate',
      restorePassword: 'authenticate/restorePassword',
      usuarios: '/findAllUsers',
      establecimientos: '/getMyEstablishments',
      options: '/getOptions',
      establecimiento: '/establishment',
      update: '/saveEstablishment',
      user: '/user',
      saveUser: '/saveUser',
      vecino: '/neighbor',
      vecinoPorEstablecimiento: '/getByEstablishment',
      neighbor: '/neighbor',
      saveNeighbor: '/saveNeighbor',
      asset: '/asset',
      saveAsset: '/saveAsset',
      getByNum_interno: '/getByNum_interno',
      // ------ Config Firebase Desarrollo ------
      // firebaseConfig: {
      //   apiKey: "AIzaSyAh-UnJ1nF5Pd2E4ly4X8vwA7nQGz3CNKY",
      //   authDomain: "unidapp-385a8.firebaseapp.com",
      //   databaseURL: "https://unidapp-385a8.firebaseio.com",
      //   projectId: "unidapp-385a8",
      //   storageBucket: "unidapp-385a8.appspot.com",
      //   messagingSenderId: "997451424192",
      //   appId: "1:997451424192:web:ff1d865364f67a1f536825",
      //   measurementId: "G-QTY9N0Q2E7"
      // }
      // ------ Config Firebase Producción ------
      firebaseConfig: {
        apiKey: "AIzaSyBlpYsXeqDxtZ9Xvfwuz79NW6Ho0mB-FDs",
        authDomain: "paco-prod.firebaseapp.com",
        databaseURL: "https://paco-prod-default-rtdb.firebaseio.com",
        projectId: "paco-prod",
        storageBucket: "paco-prod.appspot.com",
        messagingSenderId: "483058656029",
        appId: "1:483058656029:web:9339316c8886255808f7f4",
        measurementId: "G-B26BY35K93"
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/utils/guards/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/utils/guards/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcUtilsGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_authorization_services_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/authorization/services/services-authorization.service */
    "./src/app/authorization/services/services-authorization.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, navCtrl) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.navCtrl = navCtrl;
      }

      _createClass(AuthGuard, [{
        key: "canLoad",
        value: function canLoad() {
          if (this.authService.getCurrenUser()) {
            return true;
          } else {
            this.navCtrl.navigateRoot(['/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _app_authorization_services_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["ServicesAuthorizationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/utils/models/Messages.model.ts":
  /*!********************************************!*\
    !*** ./src/utils/models/Messages.model.ts ***!
    \********************************************/

  /*! exports provided: MessageModel, newMessageModel, CreateChatModel */

  /***/
  function srcUtilsModelsMessagesModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageModel", function () {
      return MessageModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "newMessageModel", function () {
      return newMessageModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateChatModel", function () {
      return CreateChatModel;
    });

    var MessageModel = function MessageModel() {
      _classCallCheck(this, MessageModel);
    };

    ;

    var newMessageModel = function newMessageModel() {
      _classCallCheck(this, newMessageModel);
    };

    var CreateChatModel = function CreateChatModel() {
      _classCallCheck(this, CreateChatModel);
    };
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/desarrollador/Documents/unidapp/unidappVecinos-movil/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map