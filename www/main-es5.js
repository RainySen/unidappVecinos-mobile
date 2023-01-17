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


    __webpack_exports__["default"] = "<ion-app>\r\n  <app-menu></app-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n";
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


    __webpack_exports__["default"] = "<ion-content class=\"fondo\">\r\n\r\n      <form  [formGroup]=\"credenciales\" (ngSubmit)=\"login()\">\r\n        <ion-grid fixed>\r\n\r\n          <ion-row class=\"mt-logo\">\r\n            <ion-col>\r\n              <img src=\"./assets/img/logos-paco/LogoPaco_Blanco_364.svg\">\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"mb-3\">\r\n            <ion-col>\r\n              <div class=\"ion-text-start text-white\">\r\n                <h1 class=\"ion-text-start text-bold\">Bienvenido :D</h1>\r\n                <p class=\"sub-text\">Inicia tu sesión para que puedas continuar</p>\r\n                \r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n\r\n              <ion-list class=\"fondo-t\">\r\n                <p class=\"align-left text-white mb-0\">Correo electrónico</p>\r\n                <ion-item class=\"rounded\" lines=\"none\">\r\n                  <ion-input \r\n                    formControlName=\"username\" type=\"text\" name=\"user\" placeholder=\"Ingrese correo electrónico\">\r\n                  </ion-input>\r\n                </ion-item>\r\n                <div class=\"errorsInput\" *ngIf=\"this.credenciales.get('username').hasError('required') && this.credenciales.get('username').touched\">\r\n                  * Campo correo electrónico es requerido\r\n                </div>\r\n                <div class=\"errorsInput\" *ngIf=\"this.credenciales.get('username').hasError('pattern') && this.credenciales.get('username').touched\">\r\n                  * Ingrese un correo válido <br>\r\n                  * El correo no puede contener caracteres especiales\r\n                </div>\r\n\r\n                <div class=\"mt-4\"></div>\r\n\r\n                <p class=\"align-left text-white mb-0\">Contraseña</p>\r\n                <ion-item class=\"rounded\" lines=\"none\">\r\n                  <ion-input \r\n                    formControlName=\"password\" name=\"password\" [type]=\"inputType\" placeholder=\"Ingrese contraseña\">\r\n                  </ion-input>\r\n                  \r\n                  <ion-icon id=\"viewPassword\"  [name]=\"(inputType == 'password') ? 'eye' : 'eye-off'\" slot=\"end\" (click)=\"viewPassword()\"></ion-icon>\r\n                </ion-item>\r\n                <ion-label class=\"text-secundario olvidoContra\" (click)=\"goRestorePassword()\">¿Olvidaste tu contraseña?</ion-label>\r\n                <div class=\"errorsInput\" *ngIf=\"this.credenciales.get('password').hasError('required') && this.credenciales.get('password').touched\">\r\n                  * Campo contraseña es requerido\r\n                </div>\r\n\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"mt-4\">\r\n            <ion-col>\r\n              <ion-button type=\"submit\" class=\"rounded\" color=\"secondary\" [disabled]=\"this.credenciales.invalid\" expand=\"block\">\r\n                Inicia tu sesión\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          \r\n          <!-- <ion-label class=\"text-footer\">¿No tienes cuenta? <a href=\"#\" class=\"text-footer\">Crea ya la tuya</a></ion-label> -->\r\n\r\n        </ion-grid>\r\n      </form>\r\n\r\n</ion-content>\r\n\r\n";
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


    __webpack_exports__["default"] = "<ion-buttons slot=\"start\" class=\"fondo-backbtn\">\r\n  <ion-back-button  defaultHref=\"/login\"></ion-back-button>\r\n</ion-buttons>\r\n\r\n<ion-content class=\"fondo\">\r\n  <!-- <ion-slides class=\"mainSlide fondo\" [options]=\"swiperOpts\">\r\n\r\n    <ion-slide> -->\r\n\r\n      <form  [formGroup]=\"restore\" (ngSubmit)=\"restorePassword()\">\r\n        <ion-grid fixed>\r\n\r\n          <ion-row class=\"mt-logo\">\r\n            <ion-col>\r\n              <img src=\"./assets/img/logos-paco/LogoPaco_Blanco_364.svg\">\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"mb-3\">\r\n            <ion-col>\r\n              <div class=\"ion-text-start text-white\">\r\n                <h1 class=\"ion-text-start text-bold\">¿Olvidaste tu contraseña?</h1>\r\n                <p class=\"sub-text\">Ingresa el correo electrónico con el que te registraste, para poder enviarte las instrucciones de cómo crear tu nueva contraseña.</p>\r\n                \r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n\r\n              <ion-list class=\"fondo-t\">\r\n                <p class=\"align-left text-white\">Correo electrónico</p>\r\n                <ion-item class=\"mt-input rounded\" lines=\"none\">\r\n                  <ion-input \r\n                    formControlName=\"username\" type=\"text\" name=\"user\" placeholder=\"Ingrese nombre se usuario\">\r\n                  </ion-input>\r\n                </ion-item>\r\n                <div class=\"errorsInput\" *ngIf=\"this.restore.get('username').hasError('required') && this.restore.get('username').touched\">\r\n                  * Campo usuario es requerido\r\n                </div>\r\n                <div class=\"errorsInput\" *ngIf=\"this.restore.get('username').hasError('pattern')\">\r\n                  * Ingrese un correo válido <br>\r\n                  * El correo no puede contener caracteres especiales\r\n                </div>\r\n\r\n                <ion-row class=\"mt-4\">\r\n                  <ion-col>\r\n                    <ion-button type=\"submit\" class=\" rounded\" color=\"secondary\" [disabled]=\"this.restore.invalid\" expand=\"block\">\r\n                      Enviar correo\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n          \r\n          <!-- <ion-label class=\"text-footer\">¿No tienes cuenta? <a href=\"#\" class=\"text-footer\">Crea ya la tuya</a></ion-label> -->\r\n\r\n        </ion-grid>\r\n      </form>\r\n\r\n\r\n    <!-- </ion-slide>\r\n\r\n  </ion-slides>\r\n -->\r\n\r\n\r\n</ion-content>\r\n\r\n";
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


    __webpack_exports__["default"] = "<ion-content padding class=\"background\">\r\n\r\n  <ion-grid fixed>\r\n\r\n    <ion-row class=\"mb-5\">\r\n      <ion-col class=\"vertical-center\">\r\n        <img src=\"./assets/img/logos-paco/LogoPaco_Blanco_364.svg\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"bt-bottom\">\r\n        <ion-button expand=\"block\" class=\"rounded background-white\" (click)=\"goLogin()\">Inicia tu sesión</ion-button>\r\n        <!-- <ion-button expand=\"block\" class=\"rounded background-blue mt-4\">Regístrate</ion-button> -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" color=\"light\">\r\n  <ion-toolbar color=\"light\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/billboard/list\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"light\">\r\n\r\n  <ion-grid class=\"resetValuesCss ion-padding-top\" *ngIf=\"isBillboard\">\r\n    <ion-row class=\"ion-text-center\" *ngIf=\"billboard.images.length > 0\">\r\n      <ion-col>\r\n        <img [src]=\"billboard.images[0].image\" id=\"imgBillboard\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1>{{ billboard.title }}</h1>\r\n          <p id=\"publicationDate\">\r\n            <strong class=\"ion-text-capitalize\">Publicada: </strong>{{ billboard.start_date | date }}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text [innerHTML]=\"billboard.description\">\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"billboard.link\">\r\n        <ion-col>\r\n          <ion-button class=\"btnLink\" color=\"secondary\" (click)=\"openLink(billboard.link)\">\r\n            <p *ngIf=\"billboard.btn_text !== ''\">{{billboard.btn_text}}</p>\r\n            <p *ngIf=\"billboard.btn_text === ''\">Ir a hipervínculo</p>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <ion-row class=\"ion-padding\">\r\n      <ion-col>\r\n        <ion-toolbar id=\"postBy\" color=\"light\">\r\n          <ion-text>\r\n            Publicado por: {{ billboard.author }}\r\n          </ion-text>\r\n          <!-- <ion-buttons slot=\"end\">\r\n            <ion-button>\r\n              <ion-icon name=\"share-social-outline\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button>\r\n              <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons> -->\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"ion-text-capitalize\">Cartelera</ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleMenu()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content refreshingSpinner=\"crescent\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\" *ngIf=\"isData\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <h3 class=\"resetValuesCss title\">\r\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </h3>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss title subTitle\">\r\n          <ion-skeleton-text animated style=\"width: 73%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngFor=\"let item of [1,1,1,1,1]\">\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header class=\"ion-padding ion-text-center\">\r\n            <ion-thumbnail id=\"thumbnailSkeleton\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-thumbnail>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-card-title>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </ion-card-title>\r\n            <ion-card-subtitle>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </ion-card-subtitle>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-row *ngIf=\"idDataBillboard\">\r\n    <ion-col class=\"noBillboard\">\r\n      <h4 class=\"ion-text-center noBillboards\">\r\n        No te preocupes si no encuentras ninguna publicación en esta cartelera\r\n      </h4>\r\n      <h6 class=\"ion-text-center\">\r\n        Podemos usar este tiempo valioso para meditar, amar a todos los seres vivos o verte los capitulos que te faltan\r\n        de la serie que te gusta.\r\n      </h6>\r\n      <ion-img src=\"./assets/img/noBillboards.png\"></ion-img>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\" *ngIf=\"billboards.length != 0\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <h1 class=\"resetValuesCss title\">Cartelera</h1>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss title subTitle\">\r\n          Mira todo lo que tenemos preparado para ti.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngFor=\"let billboard of finalBillboards\" class=\"ion-padding-top animated fadeIn fast\">\r\n      <ion-col class=\"cardsEvent\">\r\n        <ion-card>\r\n          <ion-card-header class=\"ion-padding ion-text-center\">\r\n            <!-- <ion-button class=\"iconShare\" size=\"small\" color=\"medium\">\r\n                <ion-icon name=\"share-social-outline\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button class=\"iconHeart\" size=\"small\" color=\"medium\">\r\n                <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\r\n              </ion-button> -->\r\n            <!-- <img [src]=\"billboard.images[0]\" class=\"imgBillboard\"> -->\r\n            <ion-img *ngIf=\"billboard.images.length > 0\" [src]=\"billboard.images[0].image\"></ion-img>\r\n            <ion-img *ngIf=\"billboard.images.length == 0\" src=\"./assets/img/no_image.jpg\"></ion-img>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-card-title>{{ billboard.title | truncate : limitTitle }}</ion-card-title>\r\n            <ion-card-subtitle>\r\n              <strong class=\"ion-text-capitalize\">Publicada: </strong>{{ billboard.start_date | date }}\r\n            </ion-card-subtitle>\r\n            <p class=\"shortText\" [innerHTML]=\"billboard.description | truncate : limitDesc\">\r\n              <!-- {{ billboard.description | truncate : limit }} -->\r\n            </p>\r\n            <p class=\"resetValuesCss titleNavigate\" (click)=\"viewDetail(billboard)\">Ver más</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\" *ngIf=\"billboards.length != 0\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Cargando más carteleras...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\" *ngIf=\"!isLogin\">\r\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"title\">Actualiza tus datos</ion-title>\r\n\r\n    <ion-buttons slot=\"end\" *ngIf=\"!isLogin\">\r\n      <ion-button (click)=\"toggleMenu()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #content [scrollEvents]=\"true\">\r\n\r\n  <ion-slides class=\"mainSlide finalRecord\" #slidePrincipal>\r\n\r\n    <ion-slide>\r\n      <ion-grid id=\"dataNeig\">\r\n        <form [formGroup]=\"neighbourForm\">\r\n\r\n          <ion-row class=\"top-30\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <img src=\"assets/img/noImage.png\" *ngIf=\"!image\" class=\"img-avatar\">\r\n              <img [src]=\"image\" *ngIf=\"image\" id=\"pictureProfile\" class=\"img-avatar\">\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-button expand=\"block\" color=\"secondary\" class=\"uploadPicture\" (click)=\"camera()\">\r\n                <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                Cámara\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-button expand=\"block\" color=\"secondary\" class=\"uploadPicture\" (click)=\"librery()\">\r\n                <ion-icon slot=\"start\" name=\"images\"></ion-icon>\r\n                Galería\r\n              </ion-button>\r\n              <input type=\"file\" #filePicker (change)=\"onFileChoose($event)\" />\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-list>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\" class=\"dataNeigh\">Escriba su(s) nombre(s) *</ion-label>\r\n                  <ion-input class=\"inputs\" name=\"firstName\" formControlName=\"nombres\" type=\"text\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\" class=\"dataNeigh\">Escriba sus apellidos *</ion-label>\r\n                  <ion-input class=\"inputs\" name=\"lastName\" formControlName=\"apellidos\" type=\"text\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\" class=\"dataNeigh\">¿Cuál es su número telefónico? *</ion-label>\r\n                  <ion-input class=\"inputs\" name=\"number\" formControlName=\"numero_celular\" type=\"tel\" max=\"10\">\r\n                  </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"floating\" class=\"dataNeigh\">Elija el tipo de identificación *</ion-label>\r\n                  <ion-select class=\"selectdAndDateTime\" name=\"typeDocument\" formControlName=\"tipo_doc\"\r\n                    placeholder=\"opciones\" ok-text=\"aceptar\" cancel-text=\"cancelar\">\r\n                    <ion-select-option value=\"cc\">\r\n                      Cédula Ciudadanía\r\n                    </ion-select-option>\r\n                    <ion-select-option value=\"pas\">\r\n                      Pasaporte\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\" class=\"dataNeigh\">¿Cuál es su número de identificación? *</ion-label>\r\n                  <ion-input class=\"inputs\" name=\"numberDocument\" formControlName=\"identificacion\" type=\"number\">\r\n                  </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"floating\" class=\"dataNeigh\">Elija su género *</ion-label>\r\n                  <ion-select class=\"selectdAndDateTime\" name=\"gener\" formControlName=\"sexo\" placeholder=\"opciones\"\r\n                    ok-text=\"aceptar\" cancel-text=\"cancelar\">\r\n                    <ion-select-option value=\"H\">\r\n                      Hombre\r\n                    </ion-select-option>\r\n                    <ion-select-option value=\"M\">\r\n                      Mujer\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"floating\" class=\"dataNeigh\">Elija su fecha de nacimiento *</ion-label>\r\n                  <ion-datetime class=\"selectdAndDateTime\" placeholder=\" DD/MM/AAAA\" name=\"birthday\"\r\n                    formControlName=\"fecha_nacimiento\" display-format=\"DD  MMM YYYY\" cancelText=\"cancelar\"\r\n                    doneText=\"aceptar\" monthShortNames=\"ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic\">\r\n                  </ion-datetime>\r\n                </ion-item>\r\n\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n              <ion-button class=\"btnChangeForm\" (click)=\"nextSlide()\">\r\n                Siguiente\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </form>\r\n      </ion-grid>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-grid id=\"propertyNeig\">\r\n        <form [formGroup]=\"propertyForm\">\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-list>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\" class=\"titleInputs\">Nomenclatura del inmueble</ion-label>\r\n                  <ion-input class=\"inputs\" name=\"numProperty\" formControlName=\"num_inmueble\" type=\"text\" disabled>\r\n                  </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\" class=\"titleInputs\">Número fijo</ion-label>\r\n                  <ion-input class=\"inputs\" name=\"fixedNumber\" formControlName=\"numero_fijo\" type=\"text\">\r\n                  </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\" class=\"titleInputs\">Escribe su coeficiente</ion-label>\r\n                  <ion-input class=\"inputs\" name=\"coefficient\" formControlName=\"coeficiente\" type=\"text\"></ion-input>\r\n                </ion-item>\r\n\r\n\r\n                <ion-item-group>\r\n\r\n                  <div formArrayName=\"cuartosUtiles\" class=\"placas\">\r\n                    <div *ngFor=\"let item of cuartosUtiles.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label class=\"titleArray\">Cuartos útiles</ion-label>\r\n                        <ion-button slot=\"end\" color=\"danger\" class=\"btnTrash\" class=\"btnTrash\"\r\n                          (click)=\"presentAlert('cuartoUtil', pointIndex, item.value)\">\r\n                          <ion-icon slot=\"icon-only\" name=\"trash-sharp\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-item>\r\n\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label position=\"stacked\" class=\"titleInputs\">\r\n                          Escribe la nomenclatura del cuarto útil\r\n                        </ion-label>\r\n                        <ion-input class=\"inputs\" name=\"userfulRoom\" formControlName='nomenclaturaCuartoUtil'\r\n                          type=\"text\" placeholder=\"502\">\r\n                        </ion-input>\r\n                      </ion-item>\r\n                    </div>\r\n                    <ion-item detail=\"false\" lines=\"none\">\r\n                      <ion-button class=\"btnAddItem\" color=\"secondary\" (click)=\"this.addCuartosUtiles()\">\r\n                        <ion-icon slot=\"icon-only\" name=\"add-sharp\"></ion-icon>\r\n                      </ion-button>\r\n                      <ion-label>\r\n                        ¿Tiene otro cuarto útil? Agrégalo\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-item-group>\r\n\r\n                <ion-item-group>\r\n\r\n                  <div formArrayName=\"vehiculos\" class=\"placas\">\r\n                    <div *ngFor=\"let item of vehiculo.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label class=\"titleArray\">Vehículos</ion-label>\r\n                        <ion-button slot=\"end\" color=\"danger\" class=\"btnTrash\"\r\n                          (click)=\"presentAlert('vehiculo', pointIndex, item.value)\">\r\n                          <ion-icon slot=\"icon-only\" name=\"trash-sharp\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-item>\r\n\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label position=\"floating\">Elige el tipo de vehículo</ion-label>\r\n                        <ion-select class=\"selectdAndDateTime\" name=\"typeVehicle\" formControlName='tipoVehiculo'\r\n                          placeholder=\"opciones\" ok-text=\"aceptar\" cancel-text=\"cancelar\">\r\n                          <ion-select-option value=\"carro\">\r\n                            Carro\r\n                          </ion-select-option>\r\n                          <ion-select-option value=\"moto\">\r\n                            Moto\r\n                          </ion-select-option>\r\n                          <ion-select-option value=\"bicicleta\">\r\n                            Bicicleta\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label position=\"stacked\" class=\"titleInputs\">Describe el vehículo (marca, color y placa)\r\n                        </ion-label>\r\n                        <ion-input class=\"inputs\" name=\"descVehicle\" formControlName='descripcion' type=\"text\"\r\n                          placeholder=\"Audi / Fucsia / 666 YKE\">\r\n                        </ion-input>\r\n                      </ion-item>\r\n                    </div>\r\n                    <ion-item detail=\"false\" lines=\"none\">\r\n                      <ion-button class=\"btnAddItem\" color=\"secondary\" (click)=\"this.addvehiculo()\">\r\n                        <ion-icon slot=\"icon-only\" name=\"add-sharp\"></ion-icon>\r\n                      </ion-button>\r\n                      <ion-label>\r\n                        ¿Tiene otro vehículo? Agrégalo\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-item-group>\r\n\r\n\r\n                <ion-item-group>\r\n\r\n                  <div formArrayName=\"celdas\" class=\"placas\">\r\n                    <div *ngFor=\"let item of celda.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label class=\"titleArray\">Parqueaderos</ion-label>\r\n                        <ion-button slot=\"end\" color=\"danger\" class=\"btnTrash\"\r\n                          (click)=\"presentAlert('parqueadero', pointIndex, item.value)\">\r\n                          <ion-icon slot=\"icon-only\" name=\"trash-sharp\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-item>\r\n\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label position=\"stacked\" class=\"titleInputs\">Número del parqueadero</ion-label>\r\n                        <ion-input class=\"inputs\" name=\"descCelda\" formControlName='numero' type=\"text\"\r\n                          placeholder=\"PAR-1\">\r\n                        </ion-input>\r\n                      </ion-item>\r\n                    </div>\r\n                    <ion-item detail=\"false\" lines=\"none\">\r\n                      <ion-button class=\"btnAddItem\" color=\"secondary\" (click)=\"this.addcelda()\">\r\n                        <ion-icon slot=\"icon-only\" name=\"add-sharp\"></ion-icon>\r\n                      </ion-button>\r\n                      <ion-label>\r\n                        ¿Tiene otro parqueadero? Agrégalo\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-item-group>\r\n\r\n                <ion-item-group>\r\n\r\n                  <div formArrayName=\"mascotas\" class=\"placas\">\r\n                    <div *ngFor=\"let item of mascota.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\r\n\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label class=\"titleArray\">Mascotas</ion-label>\r\n                        <ion-button slot=\"end\" color=\"danger\" class=\"btnTrash\"\r\n                          (click)=\"presentAlert('mascota', pointIndex, item.value)\">\r\n                          <ion-icon slot=\"icon-only\" name=\"trash-sharp\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-item>\r\n\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label position=\"stacked\" class=\"titleInputs\">Tipo de mascota</ion-label>\r\n                        <ion-input class=\"inputs\" name=\"typePet\" formControlName='tipoMascota' type=\"text\"\r\n                          placeholder=\"Perro\">\r\n                        </ion-input>\r\n                      </ion-item>\r\n\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label position=\"stacked\" class=\"titleInputs\">Describe a la mascota (raza, color y sexo)\r\n                        </ion-label>\r\n                        <ion-input class=\"inputs\" name=\"descPet\" formControlName='descripcion' type=\"text\"\r\n                          placeholder=\"Labrador / Dorado / Macho\">\r\n                        </ion-input>\r\n                      </ion-item>\r\n                    </div>\r\n                    <ion-item detail=\"false\" lines=\"none\">\r\n                      <ion-button class=\"btnAddItem\" color=\"secondary\" (click)=\"this.addmascota()\">\r\n                        <ion-icon slot=\"icon-only\" name=\"add-sharp\"></ion-icon>\r\n                      </ion-button>\r\n                      <ion-label>\r\n                        ¿Tiene otra mascota? Agrégala\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-item-group>\r\n\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-button class=\"btnChangeForm\" (click)=\"prevSlide()\">\r\n                Atrás\r\n              </ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\">\r\n              <ion-button type=\"button\" color=\"secondary\" class=\"saveData\" (click)=\"uploadPicture()\"\r\n                [disabled]=\"this.neighbourForm.invalid || this.propertyForm.invalid\">\r\n                Guardar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </form>\r\n      </ion-grid>\r\n    </ion-slide>\r\n\r\n  </ion-slides>\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" color=\"light\">\r\n  <ion-toolbar color=\"light\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/news/list\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"light\">\r\n\r\n  <ion-grid class=\"resetValuesCss ion-padding-top\" *ngIf=\"isNews\">\r\n\r\n    <ion-slides [options]=\"slideOpts\">\r\n      <ion-slide *ngFor=\"let image of news.images\">\r\n        <ion-img class=\"imgNews\" [src]=\"image.image\"></ion-img>\r\n      </ion-slide>\r\n\r\n    </ion-slides>\r\n\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1>{{ news.title }}</h1>\r\n          <p id=\"publicationDate\">\r\n            <strong class=\"ion-text-capitalize\">Publicada: </strong>{{ news.start_date | date }}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text [innerHTML]=\"news.description\">\r\n            <!-- {{ news.description }} -->\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"news.link\">\r\n        <ion-col>\r\n          <ion-button class=\"btnLink\" color=\"secondary\" (click)=\"openLink(news.link)\">\r\n            <p *ngIf=\"news.btn_text !== 'null' || news.btn_text\">{{news.btn_text}}</p>\r\n            <p *ngIf=\"news.btn_text === 'null' || !news.btn_text\">Click aquí</p>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <ion-row class=\"ion-padding\">\r\n      <ion-col>\r\n        <ion-toolbar id=\"postBy\" color=\"light\">\r\n          <ion-text>\r\n            Publicado por: {{ news.author }}\r\n          </ion-text>\r\n          <!-- <ion-buttons slot=\"end\">\r\n            <ion-button>\r\n              <ion-icon name=\"share-social-outline\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button>\r\n              <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons> -->\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"ion-text-capitalize\">Noticias</ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleMenu()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content refreshingSpinner=\"crescent\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\" *ngIf=\"isData\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <h3 class=\"resetValuesCss title\">\r\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </h3>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss title subTitle\">\r\n          <ion-skeleton-text animated style=\"width: 73%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngFor=\"let item of [1,1,1,1,1]\">\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header class=\"ion-padding ion-text-center\">\r\n            <ion-thumbnail id=\"thumbnailSkeleton\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-thumbnail>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-card-title>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </ion-card-title>\r\n            <ion-card-subtitle>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </ion-card-subtitle>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-row *ngIf=\"idDataNews\">\r\n    <ion-col class=\"noNewsPrincipal\">\r\n      <h4 class=\"ion-text-center noNews\">\r\n        *_* OMG! Será que están almorzando nuestros reporteros, que no tenemos noticias?\r\n      </h4>\r\n      <h6 class=\"ion-text-center\">\r\n        jajajaja Falso de toda falsedad, están trabajando sin descanso, para poder mostrarte dentro de poco información\r\n        de tu interés\r\n      </h6>\r\n      <ion-img src=\"./assets/img/noNews.png\"></ion-img>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\" *ngIf=\"news.length != 0\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <h1 class=\"resetValuesCss title\">Noticias</h1>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss subTitle\">\r\n          Esto es tan importante que si no se enteran, se los lleva el coco\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row *ngFor=\"let news of finalNews\" class=\"ion-padding-top animated fadeIn fast\">\r\n      <ion-col class=\"cardsEvent\">\r\n        <ion-card class=\"cardNews\"\r\n          [ngClass]=\"{'firstCardNews': news.color == 'Blanco', 'secondCardNews': news.color == 'Azul', 'thirdCardNews': news.color == 'Azul_Oscuro'}\">\r\n          <!-- <ion-img [src]=\"billboard.image\" class=\"imgNews\"></ion-img> -->\r\n          <div class=\"endDate\">\r\n            <p class=\"endDateDay\">\r\n              {{ news.start_date | date: 'dd'}}\r\n            </p>\r\n            <p class=\"endDateMonth\">\r\n              {{ news.start_date | date: 'MMM'}}\r\n            </p>\r\n          </div>\r\n          <ion-card-title class=\"titleNews\" [ngClass]=\"{'titleNewsLong': news.title.length >= 32}\">\r\n            {{ news.title | truncate : limitTitle }}\r\n          </ion-card-title>\r\n          <ion-card-subtitle class=\"subtitleNews\">\r\n            <strong class=\"ion-text-capitalize\">Autor: </strong>{{ news.author }}\r\n          </ion-card-subtitle>\r\n          <p class=\"descriptionNews\">\r\n            {{news.description | truncate : limitDesc : true | removeTagHtml}}\r\n          </p>\r\n          <p class=\"resetValuesCss titleNavigate\" (click)=\"viewDetail(news)\">Ver más</p>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\" *ngIf=\"news.length != 0\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Cargando más noticias...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"myToolbar\">\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/home\" text=\"Atrás\" class=\"ion-text-capitalize\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"ion-text-capitalize\">Mensajes</ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleMenu()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" #content [scrollEvents]=\"true\">\r\n\r\n  <ion-grid>\r\n    <ion-row *ngFor=\"let message of messages, let i = index\">\r\n      <ion-col size=\"9\" class=\"message\" [offset]=\"message.myMsg ? 3 : 0\"\r\n        [ngClass]=\"{ 'my-message': message.myMsg, 'other-message': !message.myMsg }\">\r\n        <!-- <b *ngIf=\"!message.myMsg\">{{ message.nombreUsuario }}</b><br> -->\r\n        <p class=\"userName\">\r\n          <b>{{ message.nombreUsuario }}</b>\r\n        </p>\r\n        <ion-button *ngIf=\"message.myMsg && !message.isDelete\" class=\"optionMyMsg\" (click)=\"removeMsg(i)\">\r\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n        <!-- Si el mensaje no ha sido eliminda, se muestra normal -->\r\n        <span *ngIf=\"!message.isDelete\" [innerHTML]=\"message.mensaje\"></span>\r\n        <!-- Si el mensaje ha sido eliminda, se muestra el mensaje de \"Eliminaste este mensaje\" -->\r\n        <span *ngIf=\"message.isDelete && message.myMsg\">\r\n          <ion-icon class=\"noMsg\" slot=\"icon-only\" name=\"alert-circle\"></ion-icon> Eliminaste este mensaje\r\n        </span>\r\n        <span *ngIf=\"message.isDelete && !message.myMsg\">\r\n          <ion-icon class=\"noMsg\" slot=\"icon-only\" name=\"alert-circle-outline\"></ion-icon> Este mensaje fue eliminado\r\n        </span>\r\n        <div [ngClass]=\"{ 'my-time': message.myMsg, 'other-time': !message.myMsg }\" class=\"time ion-text-right\">\r\n          <!-- <br>{{ message.fechaMensaje | date: 'short'}} -->\r\n          <br>{{ message.fechaMensaje}}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"10\">\r\n        <form>\r\n          <ion-textarea autoGrow=\"true\" class=\"message-input\" rows=\"1\" maxLength=\"500\" [(ngModel)]=\"newMsg\"\r\n            name=\"newMsg\" (keyup.enter)=\"sendMessage()\" placeholder=\"Escribe tu mensaje\">\r\n          </ion-textarea>\r\n        </form>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" class=\"msg-btn\"\r\n          (click)=\"sendMessage()\">\r\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <!-- <ion-fab-button size=\"small\">\r\n            <ion-icon name=\"send\"></ion-icon>\r\n          </ion-fab-button> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>";
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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n  My Id from push: {{ id }}\r\n \r\n  <ion-button (click)=\"resetBadgeCount()\" expand=\"block\">\r\n    Reset Badge Count\r\n  </ion-button>\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <ion-grid fixed class=\"resetValuesCss\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <h3 class=\"resetValuesCss title\">Notificaciones</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss title subTitle\">\r\n          Tienes <b id=\"quantityNot\">6</b> mensajes si leer\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of [1,1,1]\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"/assets/img/Foto2.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          <b>Admin</b> te invito a un evento\r\n        </h3>\r\n        <p>Hace 15 horas</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = "<p>\r\n  <strong>Dentro de poco podrás usarla</strong>, estamos trabajando para tenerla lista.\r\n</p>";
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


    __webpack_exports__["default"] = "<ion-menu side=\"start\" type=\"push\" menuId=\"principalMenu\" contentId=\"main\" (ionWillOpen)=\"setUserLoggedIn()\">\r\n\r\n  <ion-header>\r\n    <ion-toolbar id=\"headerMenu\">\r\n      <div id=\"toolbarHeader\">\r\n        <ion-avatar id=\"avatarProfile\">\r\n          <img *ngIf=\"this.establishmentPicture\" [src]=\"this.establishmentPicture\">\r\n          <img *ngIf=\"!this.establishmentPicture\" src=\"assets/img/noImage.png\">\r\n        </ion-avatar>\r\n        <ion-label id=\"textProfile\">\r\n          <h4 id=\"nameProfile\" *ngIf=\"this.establishmentName\">{{ this.establishmentName }}</h4>\r\n        </ion-label>\r\n      </div>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n    <ion-list id=\"menuList\">\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\" routerLink=\"/tabs/neighbour\" routerLinkActive=\"active-link\" detail=\"false\"\r\n          (click)=\"updateData()\">\r\n          <ion-label>\r\n            Actualizar datos\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"pencil-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\" routerLink=\"/tabs/billboard/list\" routerLinkActive=\"active-link\" detail=\"false\">\r\n          <ion-label>\r\n            Cartelera\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"film-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\" routerLink=\"/tabs/news/list\" routerLinkActive=\"active-link\" detail=\"false\">\r\n          <ion-label>\r\n            Noticias\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"star-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\" routerLink=\"/tabs/notification\" routerLinkActive=\"active-link\" detail=\"false\">\r\n          <ion-label>\r\n            Mensajes\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"chatbubble-ellipses-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\" routerLink=\"/neighbour/change-password\" routerLinkActive=\"active-link\" detail=\"false\">\r\n          <ion-label>\r\n            Cambiar contraseña\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"key-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\" detail=\"false\" (click)=\"termsConditions()\">\r\n          <ion-label>\r\n            Términos y condiciones\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"shield-checkmark-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <!-- <ion-menu-toggle>\r\n        <ion-item lines=\"none\" routerLink=\"/tabs/notification\" routerLinkActive=\"active-link\" detail=\"false\">\r\n          <ion-label>\r\n            Notificaciones\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"notifications-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\">\r\n          <ion-label>\r\n            Documentos\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"document-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\">\r\n          <ion-label>\r\n            Invitar amigos\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"people-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\">\r\n          <ion-label>\r\n            PQRS\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"headset-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\">\r\n          <ion-label>\r\n            Ayuda\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"information-circle-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\">\r\n          <ion-label>\r\n            Términos y condiciones\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"shield-checkmark-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle> -->\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\" (click)=\"logOut()\">\r\n          <ion-label>\r\n            Cerrar sesión\r\n          </ion-label>\r\n          <ion-icon class=\"active-icon\" name=\"log-out-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n    </ion-list>\r\n  </ion-content>\r\n  <ion-footer>\r\n    <ion-toolbar>\r\n      <ion-img id=\"logo\" src=\"./assets/img/logos-paco/LogoPaco_Blanco.svg\"></ion-img>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ion-menu>";
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


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap\");\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBc3VzXFxEb2N1bWVudHNcXFdvcmtcXERlc2Fycm9sbG9FZlxcVW5pZGFwcFZlY2lub3MtTW92aWwvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxRkFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7Il19 */";
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


    __webpack_exports__["default"] = ".mainSlide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 55vw;\n  padding-bottom: 1.875rem;\n}\n\n.mt-logo {\n  margin-top: 2.5rem;\n}\n\n.mt-logo ion-col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.mb-3 {\n  margin-bottom: 1rem;\n  border-radius: 2%;\n}\n\n.mt-4 {\n  margin-top: 2.5rem;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.fondo {\n  --background: rgb(164, 86, 243) !important;\n  --background: -moz-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(164, 86, 243)), color-stop(18%, rgb(164, 86, 243)), color-stop(100%, rgb(121, 99, 246))) !important;\n  --background: -webkit-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -o-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -ms-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  width: 100%;\n  height: 100%;\n}\n\n.errorsInput {\n  background-color: #f8d7da;\n  margin: 1em 0;\n  padding: 0.3rem;\n  color: #721c24;\n  font-size: 4vw;\n  font-weight: bold;\n  height: auto;\n  position: relative;\n  top: 14px;\n}\n\n.text-white {\n  color: white;\n}\n\n.align-left {\n  text-align: left !important;\n}\n\n.sub-text {\n  font-size: 1rem;\n}\n\n.text-secundario {\n  font-size: 0.9rem;\n  color: #e2d9fb;\n}\n\n.text-footer {\n  font-size: 0.9rem;\n  color: white;\n  margin-left: 0.5rem;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.olvidoContra {\n  float: right;\n  margin-top: 0.5rem;\n}\n\n.mt-input {\n  margin-top: -4%;\n}\n\n.rounded {\n  border-radius: 7px;\n  height: 45px;\n}\n\n.fondo-t {\n  background: transparent;\n  width: 100%;\n}\n\n#viewPassword {\n  color: #6868ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9jb21wb25lbnRzL2xvZ2luLXZpZXcvQzpcXFVzZXJzXFxBc3VzXFxEb2N1bWVudHNcXFdvcmtcXERlc2Fycm9sbG9FZlxcVW5pZGFwcFZlY2lub3MtTW92aWwvc3JjXFxhcHBcXGF1dGhvcml6YXRpb25cXGNvbXBvbmVudHNcXGxvZ2luLXZpZXdcXGxvZ2luLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhvcml6YXRpb24vY29tcG9uZW50cy9sb2dpbi12aWV3L2xvZ2luLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURJQTtFQUNJLDBDQUFBO0VBQ0EseUhBQUE7RUFDQSw2S0FBQTtFQUNBLDRIQUFBO0VBQ0EsdUhBQUE7RUFDQSx3SEFBQTtFQUNBLG9IQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JpemF0aW9uL2NvbXBvbmVudHMvbG9naW4tdmlldy9sb2dpbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYWluU2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogNTV2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcclxufVxyXG5cclxuLm10LWxvZ297XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi5tdC1sb2dvIGlvbi1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1iLTMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG59XHJcblxyXG4ubXQtNHtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLm1iLTB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uZm9uZG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTY0LCA4NiwgMjQzKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTglLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiKDEyMSwgOTksIDI0NikpKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmVycm9yc0lucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgcGFkZGluZzogLjNyZW07XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWxpZ24tbGVmdHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Yi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udGV4dC1zZWN1bmRhcmlve1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogI2UyZDlmYjtcclxufVxyXG5cclxuLnRleHQtZm9vdGVye1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbn1cclxuXHJcbi50ZXh0LWJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm9sdmlkb0NvbnRyYXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLm10LWlucHV0e1xyXG4gICAgbWFyZ2luLXRvcDogLTQlO1xyXG59XHJcblxyXG4ucm91bmRlZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuLmZvbmRvLXR7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jdmlld1Bhc3N3b3JkIHtcclxuICAgIGNvbG9yOiAjNjg2OGVmO1xyXG59XHJcbiIsIi5tYWluU2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICB3aWR0aDogNTV2dztcbiAgcGFkZGluZy1ib3R0b206IDEuODc1cmVtO1xufVxuXG4ubXQtbG9nbyB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cblxuLm10LWxvZ28gaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYi0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG59XG5cbi5tdC00IHtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG4ubWItMCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmZvbmRvIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTY0LCA4NiwgMjQzKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDE4JSwgcmdiKDE2NCwgODYsIDI0MykpLCBjb2xvci1zdG9wKDEwMCUsIHJnYigxMjEsIDk5LCAyNDYpKSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lcnJvcnNJbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gIG1hcmdpbjogMWVtIDA7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTRweDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGlnbi1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc3ViLXRleHQge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi50ZXh0LXNlY3VuZGFyaW8ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICNlMmQ5ZmI7XG59XG5cbi50ZXh0LWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9sdmlkb0NvbnRyYSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ubXQtaW5wdXQge1xuICBtYXJnaW4tdG9wOiAtNCU7XG59XG5cbi5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5mb25kby10IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdmlld1Bhc3N3b3JkIHtcbiAgY29sb3I6ICM2ODY4ZWY7XG59Il19 */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\n.mainSlide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 55vw;\n  padding-bottom: 1.875rem;\n}\n\n.mt-logo {\n  margin-top: 2.5rem;\n}\n\n.mt-logo ion-col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.mb-3 {\n  margin-bottom: 1rem;\n  border-radius: 2%;\n}\n\n.mt-4 {\n  margin-top: 2.5rem;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.fondo {\n  --background: rgb(164, 86, 243) !important;\n  --background: -moz-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(164, 86, 243)), color-stop(18%, rgb(164, 86, 243)), color-stop(100%, rgb(121, 99, 246))) !important;\n  --background: -webkit-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -o-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -ms-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  width: 100%;\n  height: 100%;\n}\n\n.fondo-backbtn {\n  --background: rgb(164, 86, 243) !important;\n  --background: -moz-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(164, 86, 243)), color-stop(18%, rgb(164, 86, 243)), color-stop(100%, rgb(121, 99, 246))) !important;\n  --background: -webkit-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -o-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -ms-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  margin-bottom: -50px;\n}\n\n.errorsInput {\n  background-color: #f8d7da;\n  margin: 1em 0;\n  padding: 0.3rem;\n  color: #721c24;\n  font-size: 4vw;\n  font-weight: bold;\n  height: auto;\n}\n\n.text-white {\n  color: white;\n}\n\n.align-left {\n  text-align: left !important;\n}\n\n.sub-text {\n  font-size: 1rem;\n}\n\n.text-secundario {\n  font-size: 0.9rem;\n  color: #e2d9fb;\n}\n\n.text-footer {\n  font-size: 0.9rem;\n  color: white;\n  margin-left: 0.5rem;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.olvidoContra {\n  float: right;\n  margin-top: 0.5rem;\n}\n\n.mt-input {\n  margin-top: -4%;\n}\n\n.rounded {\n  border-radius: 7px;\n  height: 45px;\n}\n\n.fondo-t {\n  background: transparent;\n  width: 100%;\n}\n\n#viewPassword {\n  color: #6868ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9jb21wb25lbnRzL3Jlc3RvcmUtcGFzc3dvcmQvQzpcXFVzZXJzXFxBc3VzXFxEb2N1bWVudHNcXFdvcmtcXERlc2Fycm9sbG9FZlxcVW5pZGFwcFZlY2lub3MtTW92aWwvc3JjXFxhcHBcXGF1dGhvcml6YXRpb25cXGNvbXBvbmVudHNcXHJlc3RvcmUtcGFzc3dvcmRcXHJlc3RvcmUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhvcml6YXRpb24vY29tcG9uZW50cy9yZXN0b3JlLXBhc3N3b3JkL3Jlc3RvcmUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSwwQ0FBQTtFQUNBLHlIQUFBO0VBQ0EsNktBQUE7RUFDQSw0SEFBQTtFQUNBLHVIQUFBO0VBQ0Esd0hBQUE7RUFDQSxvSEFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSwwQ0FBQTtFQUNBLHlIQUFBO0VBQ0EsNktBQUE7RUFDQSw0SEFBQTtFQUNBLHVIQUFBO0VBQ0Esd0hBQUE7RUFDQSxvSEFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXphdGlvbi9jb21wb25lbnRzL3Jlc3RvcmUtcGFzc3dvcmQvcmVzdG9yZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbn1cclxuXHJcbi5tYWluU2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogNTV2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcclxufVxyXG5cclxuLm10LWxvZ297XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi5tdC1sb2dvIGlvbi1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1iLTMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG59XHJcblxyXG4ubXQtNHtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLm1iLTB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uZm9uZG8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTY0LCA4NiwgMjQzKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTglLCByZ2IoMTY0LCA4NiwgMjQzKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiKDEyMSwgOTksIDI0NikpKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvbmRvLWJhY2tidG57XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxNjQsIDg2LCAyNDMpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxOCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2IoMTIxLCA5OSwgMjQ2KSkpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG59XHJcblxyXG4uZXJyb3JzSW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBwYWRkaW5nOiAuM3JlbTtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRleHQtd2hpdGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hbGlnbi1sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViLXRleHR7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi50ZXh0LXNlY3VuZGFyaW97XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiAjZTJkOWZiO1xyXG59XHJcblxyXG4udGV4dC1mb290ZXJ7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxufVxyXG5cclxuLnRleHQtYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ub2x2aWRvQ29udHJhe1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4ubXQtaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAtNCU7XHJcbn1cclxuXHJcbi5yb3VuZGVke1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uZm9uZG8tdHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN2aWV3UGFzc3dvcmQge1xyXG4gICAgY29sb3I6ICM2ODY4ZWY7XHJcbn1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xufVxuXG4ubWFpblNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDU1dnc7XG4gIHBhZGRpbmctYm90dG9tOiAxLjg3NXJlbTtcbn1cblxuLm10LWxvZ28ge1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG5cbi5tdC1sb2dvIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWItMyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xufVxuXG4ubXQtNCB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cblxuLm1iLTAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5mb25kbyB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDE2NCwgODYsIDI0MykgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxOCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2IoMTIxLCA5OSwgMjQ2KSkpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9uZG8tYmFja2J0biB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDE2NCwgODYsIDI0MykgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxOCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2IoMTIxLCA5OSwgMjQ2KSkpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbn1cblxuLmVycm9yc0lucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBjb2xvcjogIzcyMWMyNDtcbiAgZm9udC1zaXplOiA0dnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnN1Yi10ZXh0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGV4dC1zZWN1bmRhcmlvIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjZTJkOWZiO1xufVxuXG4udGV4dC1mb290ZXIge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vbHZpZG9Db250cmEge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLm10LWlucHV0IHtcbiAgbWFyZ2luLXRvcDogLTQlO1xufVxuXG4ucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZm9uZG8tdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3ZpZXdQYXNzd29yZCB7XG4gIGNvbG9yOiAjNjg2OGVmO1xufSJdfQ== */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\nion-content.background {\n  --background: rgb(164, 86, 243) !important;\n  --background: -moz-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgb(164, 86, 243)), color-stop(18%, rgb(164, 86, 243)), color-stop(100%, rgb(121, 99, 246))) !important;\n  --background: -webkit-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -o-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: -ms-linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n  --background: linear-gradient(45deg, rgb(164, 86, 243) 0%, rgb(164, 86, 243) 18%, rgb(121, 99, 246) 100%) !important;\n}\n\nimg {\n  width: 55vw;\n  padding-bottom: 30px;\n}\n\n.vertical-center {\n  margin-top: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.rounded {\n  height: 45px;\n  --border-radius: 7px;\n  text-transform: none;\n}\n\n.bt-bottom {\n  margin-top: 80%;\n}\n\n.mt-4 {\n  margin-top: 7%;\n}\n\n.background-white {\n  --background: white;\n  --color: #3db5ff;\n}\n\n.background-blue {\n  --background: #3db5ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9jb21wb25lbnRzL3dlbGNvbWUvQzpcXFVzZXJzXFxBc3VzXFxEb2N1bWVudHNcXFdvcmtcXERlc2Fycm9sbG9FZlxcVW5pZGFwcFZlY2lub3MtTW92aWwvc3JjXFxhcHBcXGF1dGhvcml6YXRpb25cXGNvbXBvbmVudHNcXHdlbGNvbWVcXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhvcml6YXRpb24vY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKOztBRE9BO0VBQ0ksMENBQUE7RUFDQSx5SEFBQTtFQUNBLDZLQUFBO0VBQ0EsNEhBQUE7RUFDQSx1SEFBQTtFQUNBLHdIQUFBO0VBQ0Esb0hBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0FDSko7O0FET0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSxxQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXphdGlvbi9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbn1cclxuXHJcbi8vIGlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE0NCwxMzIsMjM4LC43KSwgcmdiYSgxNDQsMTMyLDIzOCwuNykpLHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL3dlbGNvbWUuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyB9XHJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxNjQsIDg2LCAyNDMpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxOCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2IoMTIxLCA5OSwgMjQ2KSkpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA1NXZ3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yb3VuZGVke1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLmJ0LWJvdHRvbXtcclxuICAgIG1hcmdpbi10b3A6IDgwJTtcclxufVxyXG5cclxuLm10LTR7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtd2hpdGV7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvcjogIzNkYjVmZjtcclxufVxyXG5cclxuLmJhY2tncm91bmQtYmx1ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzNkYjVmZjtcclxufSIsIioge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDE2NCwgODYsIDI0MykgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDE2NCwgODYsIDI0MykgMCUsIHJnYigxNjQsIDg2LCAyNDMpIDE4JSwgcmdiKDEyMSwgOTksIDI0NikgMTAwJSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxOCUsIHJnYigxNjQsIDg2LCAyNDMpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2IoMTIxLCA5OSwgMjQ2KSkpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigxNjQsIDg2LCAyNDMpIDAlLCByZ2IoMTY0LCA4NiwgMjQzKSAxOCUsIHJnYigxMjEsIDk5LCAyNDYpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMTY0LCA4NiwgMjQzKSAwJSwgcmdiKDE2NCwgODYsIDI0MykgMTglLCByZ2IoMTIxLCA5OSwgMjQ2KSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICB3aWR0aDogNTV2dztcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucm91bmRlZCB7XG4gIGhlaWdodDogNDVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uYnQtYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogODAlO1xufVxuXG4ubXQtNCB7XG4gIG1hcmdpbi10b3A6IDclO1xufVxuXG4uYmFja2dyb3VuZC13aGl0ZSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMzZGI1ZmY7XG59XG5cbi5iYWNrZ3JvdW5kLWJsdWUge1xuICAtLWJhY2tncm91bmQ6ICMzZGI1ZmY7XG59Il19 */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n#publicationDate {\n  font-size: 5vw;\n  color: #48b5fb;\n}\n\n#postBy {\n  border-top: 2px groove #c5bdbd;\n}\n\nion-buttons ion-button ion-icon {\n  color: #48b5fb;\n}\n\n#imgBillboard {\n  max-height: 25rem;\n  border-radius: 8px;\n}\n\n.btnLink {\n  text-transform: none;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGJvYXJkL2NvbXBvbmVudHMvZGV0YWlsLWJpbGxib2FyZC9DOlxcVXNlcnNcXEFzdXNcXERvY3VtZW50c1xcV29ya1xcRGVzYXJyb2xsb0VmXFxVbmlkYXBwVmVjaW5vcy1Nb3ZpbC9zcmNcXGFwcFxcYmlsbGJvYXJkXFxjb21wb25lbnRzXFxkZXRhaWwtYmlsbGJvYXJkXFxkZXRhaWwtYmlsbGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iaWxsYm9hcmQvY29tcG9uZW50cy9kZXRhaWwtYmlsbGJvYXJkL2RldGFpbC1iaWxsYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9iaWxsYm9hcmQvY29tcG9uZW50cy9kZXRhaWwtYmlsbGJvYXJkL2RldGFpbC1iaWxsYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogUmFsZXdheTtcclxufVxyXG5cclxuLnJlc2V0VmFsdWVzQ3NzIHtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcHVibGljYXRpb25EYXRlIHtcclxuICBmb250LXNpemU6IDV2dztcclxuICBjb2xvcjogIzQ4YjVmYjtcclxufVxyXG5cclxuI3Bvc3RCeSB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IGdyb292ZSByZ2IoMTk3LCAxODksIDE4OSk7XHJcbn1cclxuXHJcbmlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjNDhiNWZiO1xyXG59XHJcblxyXG4jaW1nQmlsbGJvYXJkIHtcclxuICBtYXgtaGVpZ2h0OiAyNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5idG5MaW5rIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxufSIsIioge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuLnJlc2V0VmFsdWVzQ3NzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNwdWJsaWNhdGlvbkRhdGUge1xuICBmb250LXNpemU6IDV2dztcbiAgY29sb3I6ICM0OGI1ZmI7XG59XG5cbiNwb3N0Qnkge1xuICBib3JkZXItdG9wOiAycHggZ3Jvb3ZlICNjNWJkYmQ7XG59XG5cbmlvbi1idXR0b25zIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogIzQ4YjVmYjtcbn1cblxuI2ltZ0JpbGxib2FyZCB7XG4gIG1heC1oZWlnaHQ6IDI1cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5idG5MaW5rIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\nion-header {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n#btnReserve {\n  position: fixed;\n  bottom: 4px;\n  left: 9px;\n  border-radius: 5px;\n}\n\n#firsTitle {\n  margin-top: 1rem !important;\n}\n\n#firsTitle h3 {\n  font-weight: bold;\n}\n\n.title {\n  margin-left: 1rem !important;\n}\n\n.subTitle {\n  font-size: 1rem !important;\n  margin-top: 8px !important;\n  margin-bottom: 10px !important;\n}\n\n#titleEvents {\n  margin-top: -1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n#titleEvents p {\n  font-weight: bold;\n  font-size: 1rem !important;\n}\n\n.cardsEvent {\n  margin-top: -1.5rem;\n}\n\n.imgBillboard {\n  max-height: 10rem !important;\n}\n\nion-card {\n  margin-bottom: 0;\n}\n\nion-card-header {\n  padding: 0;\n}\n\nion-card-title {\n  font-size: 1.2rem;\n}\n\nion-card-subtitle {\n  color: #48b5fb;\n  margin-right: 1rem !important;\n  margin-bottom: 1rem !important;\n  font-weight: bold;\n}\n\nion-card-content {\n  margin-top: 1rem;\n}\n\n.iconShare {\n  position: absolute;\n  top: 5px;\n  right: 9px;\n  opacity: 0.6;\n  color: #ffffff;\n}\n\n.iconShare ion-icon {\n  color: #ffffff;\n}\n\n.iconHeart {\n  position: absolute;\n  top: 5px;\n  right: 60px;\n  opacity: 0.6;\n  color: #ffffff;\n}\n\n#thumbnailSkeleton {\n  position: relative;\n  width: 15.2rem;\n  height: 7rem;\n}\n\n.descriptionNews {\n  position: absolute;\n  top: 130px;\n  left: 10px;\n  color: #ffffff;\n  font-weight: bold;\n  width: 300px;\n}\n\n.titleNavigate {\n  color: #48b5fb;\n  -webkit-text-decoration: underline #48b5fb;\n          text-decoration: underline #48b5fb;\n  font-weight: bold;\n}\n\n.noBillboards {\n  color: #48b5fb;\n}\n\n.noBillboard {\n  padding-left: 0.9rem;\n  padding-right: 0.9rem;\n}\n\n.btnLink {\n  text-transform: capitalize;\n  --border-radius: 5px;\n}\n\n.imgBillboard {\n  width: 100%;\n  height: auto;\n}\n\n@supports ((-o-object-fit: cover) or (object-fit: cover)) {\n  .imgBillboard {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center center;\n       object-position: center center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGJvYXJkL2NvbXBvbmVudHMvbGlzdC1iaWxsYm9hcmQvQzpcXFVzZXJzXFxBc3VzXFxEb2N1bWVudHNcXFdvcmtcXERlc2Fycm9sbG9FZlxcVW5pZGFwcFZlY2lub3MtTW92aWwvc3JjXFxhcHBcXGJpbGxib2FyZFxcY29tcG9uZW50c1xcbGlzdC1iaWxsYm9hcmRcXGxpc3QtYmlsbGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iaWxsYm9hcmQvY29tcG9uZW50cy9saXN0LWJpbGxib2FyZC9saXN0LWJpbGxib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFHRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDSTtJQUNFLFlBQUE7SUFDQSxvQkFBQTtPQUFBLGlCQUFBO0lBQ0EsaUNBQUE7T0FBQSw4QkFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iaWxsYm9hcmQvY29tcG9uZW50cy9saXN0LWJpbGxib2FyZC9saXN0LWJpbGxib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5yZXNldFZhbHVlc0NzcyB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2J0blJlc2VydmUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDRweDtcclxuICBsZWZ0OiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jZmlyc1RpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNmaXJzVGl0bGUgaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jdGl0bGVFdmVudHMge1xyXG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jdGl0bGVFdmVudHMgcCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkc0V2ZW50IHtcclxuICBtYXJnaW4tdG9wOiAtMS41cmVtO1xyXG59XHJcblxyXG4uaW1nQmlsbGJvYXJkIHtcclxuICBtYXgtaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICBjb2xvcjogIzQ4YjVmYjtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5pY29uU2hhcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogOXB4O1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmljb25TaGFyZSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pY29uSGVhcnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNjBweDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiN0aHVtYm5haWxTa2VsZXRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNS4ycmVtO1xyXG4gIGhlaWdodDogN3JlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uTmV3cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTMwcHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi50aXRsZU5hdmlnYXRlIHtcclxuICBjb2xvcjogIzQ4YjVmYjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjNDhiNWZiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubm9CaWxsYm9hcmRzIHtcclxuICBjb2xvcjogIzQ4YjVmYjtcclxufVxyXG5cclxuLm5vQmlsbGJvYXJkIHtcclxuICBwYWRkaW5nLWxlZnQ6IC45cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IC45cmVtO1xyXG59XHJcblxyXG4uYnRuTGluayB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbWdCaWxsYm9hcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQHN1cHBvcnRzKG9iamVjdC1maXQ6IGNvdmVyKXtcclxuICAgIC5pbWdCaWxsYm9hcmQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnJlc2V0VmFsdWVzQ3NzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNidG5SZXNlcnZlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNmaXJzVGl0bGUge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiNmaXJzVGl0bGUgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiN0aXRsZUV2ZW50cyB7XG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuI3RpdGxlRXZlbnRzIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkc0V2ZW50IHtcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTtcbn1cblxuLmltZ0JpbGxib2FyZCB7XG4gIG1heC1oZWlnaHQ6IDEwcmVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogIzQ4YjVmYjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uaWNvblNoYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDlweDtcbiAgb3BhY2l0eTogMC42O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmljb25TaGFyZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaWNvbkhlYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDYwcHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiN0aHVtYm5haWxTa2VsZXRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1LjJyZW07XG4gIGhlaWdodDogN3JlbTtcbn1cblxuLmRlc2NyaXB0aW9uTmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMzBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi50aXRsZU5hdmlnYXRlIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICM0OGI1ZmI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm9CaWxsYm9hcmRzIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG59XG5cbi5ub0JpbGxib2FyZCB7XG4gIHBhZGRpbmctbGVmdDogMC45cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjlyZW07XG59XG5cbi5idG5MaW5rIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW1nQmlsbGJvYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuQHN1cHBvcnRzIChvYmplY3QtZml0OiBjb3Zlcikge1xuICAuaW1nQmlsbGJvYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG59Il19 */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway !important;\n}\n\nion-header {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n.title {\n  text-transform: none;\n  font-size: 4vw;\n}\n\n.txtTitle {\n  color: #9695d0;\n}\n\n.txtSubtitle {\n  margin-left: 1.2rem;\n}\n\nform {\n  position: relative;\n  top: 20vh;\n}\n\nion-item {\n  margin-top: 1rem;\n}\n\nion-label {\n  font-weight: bold;\n}\n\n.inputs {\n  border-bottom: 1px solid black;\n  padding: 0.5rem 1rem !important;\n}\n\n#viewPassword {\n  color: #6868ef;\n  position: absolute;\n  right: 7px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVpZ2hib3VyL2NoYW5nZS1wYXNzd29yZC9DOlxcVXNlcnNcXEFzdXNcXERvY3VtZW50c1xcV29ya1xcRGVzYXJyb2xsb0VmXFxVbmlkYXBwVmVjaW5vcy1Nb3ZpbC9zcmNcXGFwcFxcbmVpZ2hib3VyXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmVpZ2hib3VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBR0ksd0NBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmVpZ2hib3VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuaW9uLWhlYWRlciB7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuLnR4dFRpdGxlIHtcclxuICAgIGNvbG9yOiAjOTY5NWQwO1xyXG59XHJcblxyXG4udHh0U3VidGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwdmg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmlucHV0cyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiN2aWV3UGFzc3dvcmQge1xyXG4gICAgY29sb3I6ICM2ODY4ZWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogN3B4O1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcbiIsIioge1xuICBmb250LWZhbWlseTogUmFsZXdheSAhaW1wb3J0YW50O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDR2dztcbn1cblxuLnR4dFRpdGxlIHtcbiAgY29sb3I6ICM5Njk1ZDA7XG59XG5cbi50eHRTdWJ0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxLjJyZW07XG59XG5cbmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjB2aDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlucHV0cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gIWltcG9ydGFudDtcbn1cblxuI3ZpZXdQYXNzd29yZCB7XG4gIGNvbG9yOiAjNjg2OGVmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3cHg7XG4gIGJvdHRvbTogMDtcbn0iXX0= */";
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


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\nion-slides ion-slide:nth-child(1) {\n  height: 100%;\n  overflow-y: auto;\n}\n\nion-slides ion-slide:nth-child(2) {\n  height: 100%;\n  overflow-y: auto;\n}\n\nion-header {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n#propertyNeig,\n#dataNeig {\n  height: 100%;\n}\n\n.title {\n  text-transform: none;\n  font-size: 4vw;\n}\n\nion-item {\n  margin-top: 1rem;\n}\n\nion-label.dataNeigh {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.titleInputs {\n  color: #000d3d !important;\n}\n\n.inputs {\n  border-bottom: 1px solid black;\n  padding: 0.5rem 1rem !important;\n}\n\n.selectdAndDateTime {\n  border: solid 1px black;\n  padding: 1rem;\n  height: 3rem;\n  margin-top: 1rem;\n  border-radius: 5px;\n}\n\n.uploadPicture {\n  text-transform: capitalize;\n  --border-radius: 6px;\n}\n\n.saveData {\n  text-transform: capitalize;\n  --border-radius: 6px;\n  width: 115px;\n  height: 37px;\n  --box-shadow: none;\n}\n\n.saveData button,\n.button-disabled button {\n  background: #2c4192 !important;\n  --border-radius: 6px;\n}\n\n.btnChangeForm {\n  text-transform: capitalize;\n  --border-radius: 6px;\n  --background: #fff;\n  --color: #3db5ff;\n  width: 115px;\n  height: 37px;\n  border: 1px solid #3db5ff;\n  border-radius: 6px;\n  --box-shadow: none;\n}\n\n.top-30 {\n  margin-top: 30px;\n}\n\n.img-avatar {\n  width: 40vw;\n  height: auto;\n  border-radius: 50%;\n}\n\n@supports ((-o-object-fit: cover) or (object-fit: cover)) {\n  .img-avatar {\n    height: 40vw;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center center;\n       object-position: center center;\n  }\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.titleArray {\n  margin-top: 2rem;\n  text-align: left;\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.itemDivider {\n  color: #000d3d !important;\n  margin-top: 12px !important;\n  font-weight: bold !important;\n}\n\n.btnAddItem {\n  margin-right: 0.7rem;\n  width: 39px;\n  height: 39px;\n  --border-radius: 12px;\n}\n\n.btnTrash {\n  width: 39px;\n  height: 39px;\n  --border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVpZ2hib3VyL2ZpbmFsLXJlY29yZC9DOlxcVXNlcnNcXEFzdXNcXERvY3VtZW50c1xcV29ya1xcRGVzYXJyb2xsb0VmXFxVbmlkYXBwVmVjaW5vcy1Nb3ZpbC9zcmNcXGFwcFxcbmVpZ2hib3VyXFxmaW5hbC1yZWNvcmRcXGZpbmFsLXJlY29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmVpZ2hib3VyL2ZpbmFsLXJlY29yZC9maW5hbC1yZWNvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBR0ksd0NBQUE7QUNDSjs7QURFQTs7RUFFSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTs7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxZQUFBO0lBQ0Esb0JBQUE7T0FBQSxpQkFBQTtJQUNBLGlDQUFBO09BQUEsOEJBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFFQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0ZKOztBREtBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9uZWlnaGJvdXIvZmluYWwtcmVjb3JkL2ZpbmFsLXJlY29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIGlvbi1zbGlkZTpudGgtY2hpbGQoMSkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuaW9uLXNsaWRlcyBpb24tc2xpZGU6bnRoLWNoaWxkKDIpIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuI3Byb3BlcnR5TmVpZyxcclxuI2RhdGFOZWlnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbmlvbi1sYWJlbC5kYXRhTmVpZ2gge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aXRsZUlucHV0cyB7XHJcbiAgICBjb2xvcjogIzAwMGQzZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXRzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3RkQW5kRGF0ZVRpbWUge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnVwbG9hZFBpY3R1cmUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLnNhdmVEYXRhIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zYXZlRGF0YSBidXR0b24sXHJcbi5idXR0b24tZGlzYWJsZWQgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMyYzQxOTIgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uYnRuQ2hhbmdlRm9ybSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1jb2xvcjogIzNkYjVmZjtcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZGI1ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi50b3AtMzAge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmltZy1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbkBzdXBwb3J0cyAob2JqZWN0LWZpdDogY292ZXIpIHtcclxuICAgIC5pbWctYXZhdGFyIHtcclxuICAgICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGl0bGVBcnJheSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogLTFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaXRlbURpdmlkZXIge1xyXG4gICAgY29sb3I6ICMwMDBkM2QgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG5BZGRJdGVtIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgd2lkdGg6IDM5cHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5idG5UcmFzaCB7XHJcbiAgICB3aWR0aDogMzlweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2xpZGVzIGlvbi1zbGlkZTpudGgtY2hpbGQoMSkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmlvbi1zbGlkZXMgaW9uLXNsaWRlOm50aC1jaGlsZCgyKSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuaW9uLWhlYWRlciB7XG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4jcHJvcGVydHlOZWlnLFxuI2RhdGFOZWlnIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuaW9uLWxhYmVsLmRhdGFOZWlnaCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZUlucHV0cyB7XG4gIGNvbG9yOiAjMDAwZDNkICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dHMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RkQW5kRGF0ZVRpbWUge1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgcGFkZGluZzogMXJlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi51cGxvYWRQaWN0dXJlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uc2F2ZURhdGEge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zYXZlRGF0YSBidXR0b24sXG4uYnV0dG9uLWRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMyYzQxOTIgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5idG5DaGFuZ2VGb3JtIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6ICMzZGI1ZmY7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2RiNWZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnRvcC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pbWctYXZhdGFyIHtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5Ac3VwcG9ydHMgKG9iamVjdC1maXQ6IGNvdmVyKSB7XG4gIC5pbWctYXZhdGFyIHtcbiAgICBoZWlnaHQ6IDQwdnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG59XG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRpdGxlQXJyYXkge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pdGVtRGl2aWRlciB7XG4gIGNvbG9yOiAjMDAwZDNkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cblxuLmJ0bkFkZEl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzlweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uYnRuVHJhc2gge1xuICB3aWR0aDogMzlweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59Il19 */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\nion-slides {\n  margin: 0 1rem;\n}\n\n#publicationDate {\n  font-size: 5vw;\n  color: #8bd3ff;\n}\n\n#postBy {\n  border-top: 2px groove #c5bdbd;\n}\n\nion-buttons ion-button ion-icon {\n  color: #8bd3ff;\n}\n\n#imgNews {\n  max-height: 25rem;\n}\n\nimg {\n  border-radius: 8px;\n}\n\n.imgNews {\n  padding: 0 0.4rem;\n  margin: 0.3rem;\n}\n\n.btnLink {\n  text-transform: none;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9kZXRhaWwtbmV3cy9DOlxcVXNlcnNcXEFzdXNcXERvY3VtZW50c1xcV29ya1xcRGVzYXJyb2xsb0VmXFxVbmlkYXBwVmVjaW5vcy1Nb3ZpbC9zcmNcXGFwcFxcbmV3c1xcZGV0YWlsLW5ld3NcXGRldGFpbC1uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL2RldGFpbC1uZXdzL2RldGFpbC1uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25ld3MvZGV0YWlsLW5ld3MvZGV0YWlsLW5ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogUmFsZXdheTtcclxufVxyXG5cclxuLnJlc2V0VmFsdWVzQ3NzIHtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICNwdWJsaWNhdGlvbkRhdGUge1xyXG4gICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICBjb2xvcjogIzhiZDNmZjtcclxuICB9XHJcbiAgXHJcbiAgI3Bvc3RCeSB7XHJcbiAgICBib3JkZXItdG9wOiAycHggZ3Jvb3ZlIHJnYigxOTcsIDE4OSwgMTg5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzhiZDNmZjtcclxuICB9XHJcblxyXG4gICNpbWdOZXdzIHtcclxuICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xyXG4gIH1cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaW1nTmV3cyB7XHJcbiAgcGFkZGluZzogMCAwLjRyZW07XHJcbiAgbWFyZ2luOiAuM3JlbTtcclxufVxyXG5cclxuLmJ0bkxpbmsge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiIsIioge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuLnJlc2V0VmFsdWVzQ3NzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICBtYXJnaW46IDAgMXJlbTtcbn1cblxuI3B1YmxpY2F0aW9uRGF0ZSB7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBjb2xvcjogIzhiZDNmZjtcbn1cblxuI3Bvc3RCeSB7XG4gIGJvcmRlci10b3A6IDJweCBncm9vdmUgI2M1YmRiZDtcbn1cblxuaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjOGJkM2ZmO1xufVxuXG4jaW1nTmV3cyB7XG4gIG1heC1oZWlnaHQ6IDI1cmVtO1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5pbWdOZXdzIHtcbiAgcGFkZGluZzogMCAwLjRyZW07XG4gIG1hcmdpbjogMC4zcmVtO1xufVxuXG4uYnRuTGluayB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\nion-header {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n#btnReserve {\n  position: fixed;\n  bottom: 4px;\n  left: 9px;\n  border-radius: 5px;\n}\n\n#firsTitle {\n  margin-top: 1rem !important;\n}\n\n#firsTitle h3 {\n  font-weight: bold;\n}\n\n.title {\n  margin-left: 1rem !important;\n  font-weight: 500;\n}\n\n.subTitle {\n  font-size: 1rem !important;\n  margin-top: 8px !important;\n  margin-bottom: 10px !important;\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n#titleEvents {\n  margin-top: -1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n#titleEvents p {\n  font-weight: bold;\n  font-size: 1rem !important;\n}\n\n.cardsEvent {\n  margin-top: -1.5rem;\n}\n\n.imgBillboard {\n  max-height: 10rem !important;\n}\n\nion-card {\n  margin-bottom: 0;\n}\n\nion-card-title {\n  font-size: 1.2rem;\n}\n\nion-card-subtitle {\n  color: #48b5fb;\n  margin-right: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.iconShare {\n  position: fixed;\n  top: 5px;\n  right: 9px;\n  opacity: 0.6;\n  color: #ffffff;\n}\n\n.iconShare ion-icon {\n  color: #ffffff;\n}\n\n.iconHeart {\n  position: fixed;\n  top: 5px;\n  right: 60px;\n  opacity: 0.6;\n  color: #ffffff;\n}\n\n#thumbnailSkeleton {\n  position: relative;\n  width: 15.2rem;\n  height: 7rem;\n}\n\n.shortText {\n  width: 230px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.titleNavigate {\n  -webkit-text-decoration: underline #ffffff;\n          text-decoration: underline #ffffff;\n  font-weight: bold;\n  position: absolute;\n  top: 264px;\n  left: 10px;\n  color: white;\n}\n\n.cardNews {\n  height: 20rem;\n}\n\n.cardNews:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(34, 154, 228, 0.9);\n}\n\n.titleNews {\n  position: absolute;\n  top: 88px;\n  left: 10px;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 1.1rem;\n  width: 18rem;\n}\n\n.titleNewsLong {\n  top: 83px;\n}\n\n.subtitleNews {\n  position: absolute;\n  top: 130px;\n  left: 10px;\n  color: #ffffff;\n}\n\n.descriptionNews {\n  position: absolute;\n  top: 140px;\n  left: 10px;\n  color: #ffffff;\n  width: 300px;\n  margin: 1rem 0;\n}\n\n.limitDescriptionNews {\n  width: 300px;\n}\n\n.endDate {\n  position: absolute;\n  background: rgba(117, 201, 251, 0.5);\n  top: 0;\n  right: 0;\n  width: 5rem;\n  height: 5rem;\n}\n\n.endDateDay {\n  position: relative;\n  top: 0px;\n  right: -19px;\n  font-size: 2.3rem;\n  color: #ffffff;\n  margin: 0;\n}\n\n.endDateMonth {\n  position: relative;\n  top: -4px;\n  right: -20px;\n  font-size: 1.4rem;\n  color: #ffffff;\n  margin: 0;\n}\n\n.noNews {\n  color: #48b5fb;\n}\n\n.firstCardNews:before {\n  background-color: #ffffff;\n}\n\n.firstCardNews .titleNews,\n.firstCardNews .descriptionNews,\n.firstCardNews .titleNavigate,\n.firstCardNews .endDate .endDateDay,\n.firstCardNews .endDate .endDateMonth {\n  color: #000d3d;\n}\n\n.firstCardNews .titleNavigate {\n  -webkit-text-decoration: underline #000d3d;\n          text-decoration: underline #000d3d;\n}\n\n.firstCardNews .subtitleNews {\n  color: #3db5ff;\n}\n\n.secondCardNews:before {\n  background-color: #3db5ff;\n}\n\n.secondCardNews .titleNews,\n.secondCardNews .descriptionNews {\n  color: #ffffff;\n}\n\n.thirdCardNews:before {\n  background-color: #000d3d;\n}\n\n.thirdCardNews .titleNews,\n.thirdCardNews .subtitleNews {\n  color: #3db5ff;\n}\n\n.thirdCardNews .descriptionNews {\n  color: #ffffff;\n}\n\n.noNewsPrincipal {\n  padding-left: 0.9rem;\n  padding-right: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9saXN0LW5ld3MvQzpcXFVzZXJzXFxBc3VzXFxEb2N1bWVudHNcXFdvcmtcXERlc2Fycm9sbG9FZlxcVW5pZGFwcFZlY2lub3MtTW92aWwvc3JjXFxhcHBcXG5ld3NcXGxpc3QtbmV3c1xcbGlzdC1uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL2xpc3QtbmV3cy9saXN0LW5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBR0Usd0NBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTs7Ozs7RUFLRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtVQUFBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBOztFQUVFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9saXN0LW5ld3MvbGlzdC1uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLnJlc2V0VmFsdWVzQ3NzIHtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jYnRuUmVzZXJ2ZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIGxlZnQ6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNmaXJzVGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuI2ZpcnNUaXRsZSBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3ViVGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jdGl0bGVFdmVudHMge1xyXG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jdGl0bGVFdmVudHMgcCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkc0V2ZW50IHtcclxuICBtYXJnaW4tdG9wOiAtMS41cmVtO1xyXG59XHJcblxyXG4uaW1nQmlsbGJvYXJkIHtcclxuICBtYXgtaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgY29sb3I6ICM0OGI1ZmI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvblNoYXJlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDlweDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pY29uU2hhcmUgaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaWNvbkhlYXJ0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDYwcHg7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jdGh1bWJuYWlsU2tlbGV0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTUuMnJlbTtcclxuICBoZWlnaHQ6IDdyZW07XHJcbn1cclxuXHJcbi5zaG9ydFRleHQge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aXRsZU5hdmlnYXRlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI2NHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZE5ld3Mge1xyXG4gIGhlaWdodDogMjByZW07XHJcbn1cclxuXHJcbi5jYXJkTmV3czpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAxNTQsIDIyOCwgMC45KTtcclxufVxyXG5cclxuLnRpdGxlTmV3cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogODhweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIHdpZHRoOiAxOHJlbTtcclxufVxyXG5cclxuLnRpdGxlTmV3c0xvbmcge1xyXG4gIHRvcDogODNweDtcclxufVxyXG5cclxuLnN1YnRpdGxlTmV3cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTMwcHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uTmV3cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTQwcHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5saW1pdERlc2NyaXB0aW9uTmV3cyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZW5kRGF0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE3LCAyMDEsIDI1MSwgMC41KTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcblxyXG4uZW5kRGF0ZURheSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiAtMTlweDtcclxuICBmb250LXNpemU6IDIuM3JlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5lbmREYXRlTW9udGgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC00cHg7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5vTmV3cyB7XHJcbiAgY29sb3I6ICM0OGI1ZmI7XHJcbn1cclxuXHJcbi5maXJzdENhcmROZXdzOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmV3cyxcclxuLmZpcnN0Q2FyZE5ld3MgLmRlc2NyaXB0aW9uTmV3cyxcclxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmF2aWdhdGUsXHJcbi5maXJzdENhcmROZXdzIC5lbmREYXRlIC5lbmREYXRlRGF5LFxyXG4uZmlyc3RDYXJkTmV3cyAuZW5kRGF0ZSAuZW5kRGF0ZU1vbnRoIHtcclxuICBjb2xvcjogIzAwMGQzZDtcclxufVxyXG5cclxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmF2aWdhdGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICMwMDBkM2Q7XHJcbn1cclxuXHJcbi5maXJzdENhcmROZXdzIC5zdWJ0aXRsZU5ld3Mge1xyXG4gIGNvbG9yOiAjM2RiNWZmO1xyXG59XHJcblxyXG4uc2Vjb25kQ2FyZE5ld3M6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RiNWZmO1xyXG59XHJcblxyXG4uc2Vjb25kQ2FyZE5ld3MgLnRpdGxlTmV3cyxcclxuLnNlY29uZENhcmROZXdzIC5kZXNjcmlwdGlvbk5ld3Mge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udGhpcmRDYXJkTmV3czpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBkM2Q7XHJcbn1cclxuXHJcbi50aGlyZENhcmROZXdzIC50aXRsZU5ld3MsXHJcbi50aGlyZENhcmROZXdzIC5zdWJ0aXRsZU5ld3Mge1xyXG4gIGNvbG9yOiAjM2RiNWZmO1xyXG59XHJcblxyXG4udGhpcmRDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm5vTmV3c1ByaW5jaXBhbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjlyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC45cmVtO1xyXG59XHJcbiIsIioge1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ucmVzZXRWYWx1ZXNDc3Mge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2J0blJlc2VydmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2ZpcnNUaXRsZSB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuI2ZpcnNUaXRsZSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3ViVGl0bGUge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbiN0aXRsZUV2ZW50cyB7XG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuI3RpdGxlRXZlbnRzIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkc0V2ZW50IHtcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTtcbn1cblxuLmltZ0JpbGxib2FyZCB7XG4gIG1heC1oZWlnaHQ6IDEwcmVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogIzQ4YjVmYjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmljb25TaGFyZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA5cHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pY29uU2hhcmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmljb25IZWFydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA2MHB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jdGh1bWJuYWlsU2tlbGV0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNS4ycmVtO1xuICBoZWlnaHQ6IDdyZW07XG59XG5cbi5zaG9ydFRleHQge1xuICB3aWR0aDogMjMwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGVOYXZpZ2F0ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjY0cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmROZXdzIHtcbiAgaGVpZ2h0OiAyMHJlbTtcbn1cblxuLmNhcmROZXdzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAxNTQsIDIyOCwgMC45KTtcbn1cblxuLnRpdGxlTmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4OHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB3aWR0aDogMThyZW07XG59XG5cbi50aXRsZU5ld3NMb25nIHtcbiAgdG9wOiA4M3B4O1xufVxuXG4uc3VidGl0bGVOZXdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRlc2NyaXB0aW9uTmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNDBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5saW1pdERlc2NyaXB0aW9uTmV3cyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmVuZERhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE3LCAyMDEsIDI1MSwgMC41KTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbn1cblxuLmVuZERhdGVEYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICByaWdodDogLTE5cHg7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZW5kRGF0ZU1vbnRoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAtMjBweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDA7XG59XG5cbi5ub05ld3Mge1xuICBjb2xvcjogIzQ4YjVmYjtcbn1cblxuLmZpcnN0Q2FyZE5ld3M6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmV3cyxcbi5maXJzdENhcmROZXdzIC5kZXNjcmlwdGlvbk5ld3MsXG4uZmlyc3RDYXJkTmV3cyAudGl0bGVOYXZpZ2F0ZSxcbi5maXJzdENhcmROZXdzIC5lbmREYXRlIC5lbmREYXRlRGF5LFxuLmZpcnN0Q2FyZE5ld3MgLmVuZERhdGUgLmVuZERhdGVNb250aCB7XG4gIGNvbG9yOiAjMDAwZDNkO1xufVxuXG4uZmlyc3RDYXJkTmV3cyAudGl0bGVOYXZpZ2F0ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICMwMDBkM2Q7XG59XG5cbi5maXJzdENhcmROZXdzIC5zdWJ0aXRsZU5ld3Mge1xuICBjb2xvcjogIzNkYjVmZjtcbn1cblxuLnNlY29uZENhcmROZXdzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGI1ZmY7XG59XG5cbi5zZWNvbmRDYXJkTmV3cyAudGl0bGVOZXdzLFxuLnNlY29uZENhcmROZXdzIC5kZXNjcmlwdGlvbk5ld3Mge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRoaXJkQ2FyZE5ld3M6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGQzZDtcbn1cblxuLnRoaXJkQ2FyZE5ld3MgLnRpdGxlTmV3cyxcbi50aGlyZENhcmROZXdzIC5zdWJ0aXRsZU5ld3Mge1xuICBjb2xvcjogIzNkYjVmZjtcbn1cblxuLnRoaXJkQ2FyZE5ld3MgLmRlc2NyaXB0aW9uTmV3cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubm9OZXdzUHJpbmNpcGFsIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjlyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuOXJlbTtcbn0iXX0= */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n\n.myToolbar {\n  --background: #010d3d;\n  color: #fff;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  background: #fff;\n  resize: none;\n  margin-top: 0px;\n  margin-left: 0.7rem;\n  --padding-start: 8px;\n}\n\n.message {\n  padding: 10px !important;\n  border-radius: 22px !important;\n  margin-bottom: 2rem !important;\n  white-space: pre-wrap;\n}\n\n.userName {\n  padding: 0;\n  margin: 0rem 0 0.3rem;\n}\n\n.my-message {\n  background: #6967f8;\n  color: #fff;\n}\n\n.my-message b {\n  font-size: 0.9rem;\n  color: #fff;\n}\n\n.my-message .time {\n  color: #000;\n}\n\n.other-message {\n  background: #ebecfe;\n}\n\n.other-message b {\n  color: #0d3687;\n  font-size: 0.9rem;\n}\n\n.time {\n  color: #0d3687;\n  float: right;\n  font-size: small;\n  opacity: 60%;\n}\n\n.my-time {\n  position: absolute;\n  color: black;\n  top: 83%;\n  right: 2%;\n  font-weight: bold;\n}\n\n.other-time {\n  position: absolute;\n  color: black;\n  top: 83%;\n  left: 2%;\n  font-weight: bold;\n}\n\n.optionMyMsg {\n  --background: none;\n  --box-shadow: none;\n  position: absolute;\n  top: -0.2rem;\n  right: -0.6rem;\n  width: 3rem;\n}\n\n.noMsg {\n  font-size: 1.2rem;\n  position: relative;\n  top: 0.1rem;\n  margin-right: 0.5rem;\n}\n\n.msg-btn {\n  font-size: 0.7rem;\n  transform: rotate(-31deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9jb21wb25lbnRzL2NoYXQvQzpcXFVzZXJzXFxBc3VzXFxEb2N1bWVudHNcXFdvcmtcXERlc2Fycm9sbG9FZlxcVW5pZGFwcFZlY2lub3MtTW92aWwvc3JjXFxhcHBcXG5vdGlmaWNhdGlvbnNcXGNvbXBvbmVudHNcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFFSSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBRUksbUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbn1cclxuXHJcbi5teVRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDEwZDNkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43cmVtO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbn1cclxuIFxyXG4ubWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi51c2VyTmFtZSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwcmVtIDAgMC4zcmVtO1xyXG59XHJcbiBcclxuLm15LW1lc3NhZ2Uge1xyXG4gICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGJhY2tncm91bmQ6ICM2OTY3Zjg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm15LW1lc3NhZ2UgYiB7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5teS1tZXNzYWdlIC50aW1lIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbiBcclxuLm90aGVyLW1lc3NhZ2Uge1xyXG4gICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWJlY2ZlO1xyXG59XHJcblxyXG4ub3RoZXItbWVzc2FnZSBiIHtcclxuICAgIGNvbG9yOiAjMGQzNjg3O1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gICAgY29sb3I6ICMwZDM2ODc7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgb3BhY2l0eTogNjAlO1xyXG59XHJcblxyXG4ubXktdGltZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0b3A6IDgzJTtcclxuICAgIHJpZ2h0OiAyJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ub3RoZXItdGltZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0b3A6IDgzJTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5vcHRpb25NeU1zZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0uMnJlbTtcclxuICAgIHJpZ2h0OiAtLjZyZW07XHJcbiAgICB3aWR0aDogM3JlbTtcclxufVxyXG5cclxuLm5vTXNnIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAuMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbn1cclxuXHJcbi5tc2ctYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzFkZWcpO1xyXG59IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xufVxuXG4ubXlUb29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwZDNkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcmVzaXplOiBub25lO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwLjdyZW07XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLnVzZXJOYW1lIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwcmVtIDAgMC4zcmVtO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICM2OTY3Zjg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubXktbWVzc2FnZSBiIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubXktbWVzc2FnZSAudGltZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNlYmVjZmU7XG59XG5cbi5vdGhlci1tZXNzYWdlIGIge1xuICBjb2xvcjogIzBkMzY4NztcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi50aW1lIHtcbiAgY29sb3I6ICMwZDM2ODc7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgb3BhY2l0eTogNjAlO1xufVxuXG4ubXktdGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0b3A6IDgzJTtcbiAgcmlnaHQ6IDIlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm90aGVyLXRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdG9wOiA4MyU7XG4gIGxlZnQ6IDIlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9wdGlvbk15TXNnIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC4ycmVtO1xuICByaWdodDogLTAuNnJlbTtcbiAgd2lkdGg6IDNyZW07XG59XG5cbi5ub01zZyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC4xcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLm1zZy1idG4ge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMxZGVnKTtcbn0iXX0= */";
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


    __webpack_exports__["default"] = "* {\n  font-family: Raleway;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9saXN0LW5vdGlmaWNhdGlvbi9DOlxcVXNlcnNcXEFzdXNcXERvY3VtZW50c1xcV29ya1xcRGVzYXJyb2xsb0VmXFxVbmlkYXBwVmVjaW5vcy1Nb3ZpbC9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcY29tcG9uZW50c1xcbm90aWZpY2F0aW9uXFxsaXN0LW5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3RpZmljYXRpb25zL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2xpc3Qtbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2xpc3Qtbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbn1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xufSJdfQ== */";
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


    __webpack_exports__["default"] = "#headerMenu {\n  --background: rgb(60, 54, 150) !important;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n  position: relative;\n}\n\n#toolbarHeader {\n  display: flex;\n  margin-bottom: 0.7rem;\n}\n\n#avatarProfile {\n  width: 3rem !important;\n  height: 3rem !important;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n  margin-top: 0.7rem;\n}\n\n#nameProfile {\n  margin-top: 1.5rem;\n  color: #ffffff;\n  font-weight: bold;\n  margin-left: 1rem;\n  font-size: 1rem;\n}\n\n#emailProfile {\n  color: #ffffff;\n  font-size: 0.8rem;\n}\n\nion-content, #menuList ion-item, #menuList ion-item ion-icon, ion-footer ion-toolbar {\n  --background: rgb(60, 54, 150);\n  color: #ffffff;\n}\n\n.list-md {\n  background: #3c3696;\n}\n\n.active-link {\n  --background: rgb(255, 255, 255) !important;\n  color: #3c3696 !important;\n  border-left: #7961f2 7px solid;\n}\n\n.active-link .active-icon {\n  color: #3c3696 !important;\n}\n\n.ionicon {\n  display: none !important;\n}\n\n#logo {\n  width: 5rem;\n  position: relative;\n  left: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9DOlxcVXNlcnNcXEFzdXNcXERvY3VtZW50c1xcV29ya1xcRGVzYXJyb2xsb0VmXFxVbmlkYXBwVmVjaW5vcy1Nb3ZpbC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUdBLHdDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXJNZW51IHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDYwLCA1NCwgMTUwKSAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI3Rvb2xiYXJIZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IC43cmVtO1xyXG59XHJcblxyXG4jYXZhdGFyUHJvZmlsZSB7XHJcbiAgICB3aWR0aDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLjdyZW07XHJcbn1cclxuXHJcbiNuYW1lUHJvZmlsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbiNlbWFpbFByb2ZpbGUge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG59XHJcblxyXG5pb24tY29udGVudCwgI21lbnVMaXN0IGlvbi1pdGVtLCAjbWVudUxpc3QgaW9uLWl0ZW0gaW9uLWljb24sIGlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNjAsIDU0LCAxNTApO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5saXN0LW1kIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig2MCwgNTQsIDE1MCk7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGluayB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYig2MCwgNTQsIDE1MCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiByZ2IoMTIxLCA5NywgMjQyKSA3cHggc29saWQ7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGluayAuYWN0aXZlLWljb24ge1xyXG4gICAgY29sb3I6IHJnYig2MCwgNTQsIDE1MCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbmljb257XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzUlO1xyXG59IiwiI2hlYWRlck1lbnUge1xuICAtLWJhY2tncm91bmQ6IHJnYig2MCwgNTQsIDE1MCkgIWltcG9ydGFudDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3Rvb2xiYXJIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG59XG5cbiNhdmF0YXJQcm9maWxlIHtcbiAgd2lkdGg6IDNyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4jbmFtZVByb2ZpbGUge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuI2VtYWlsUHJvZmlsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuaW9uLWNvbnRlbnQsICNtZW51TGlzdCBpb24taXRlbSwgI21lbnVMaXN0IGlvbi1pdGVtIGlvbi1pY29uLCBpb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNjAsIDU0LCAxNTApO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiAjM2MzNjk2O1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzNjMzY5NiAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogIzc5NjFmMiA3cHggc29saWQ7XG59XG5cbi5hY3RpdmUtbGluayAuYWN0aXZlLWljb24ge1xuICBjb2xvcjogIzNjMzY5NiAhaW1wb3J0YW50O1xufVxuXG4uaW9uaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzNSU7XG59Il19 */";
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
    /*! C:\Users\Asus\Documents\Work\DesarrolloEf\UnidappVecinos-Movil\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map