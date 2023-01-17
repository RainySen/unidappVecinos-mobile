function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n\r\n  <ion-toolbar class=\"toolbarH1\" #toolbar1>\r\n    <ion-img id=\"logo\" src=\"./assets/img/logos-paco/LogoPaco_Color.svg\"></ion-img>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"toggleMenu()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar class=\"toolbarH2\" #toolbar2>\r\n    <ion-avatar id=\"avatarProfile\">\r\n      <img *ngIf=\"this.neighbourModel.foto\" [src]=\"this.neighbourModel.foto\">\r\n      <img *ngIf=\"!this.neighbourModel.foto\" src=\"assets/img/noImage.png\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h4>Hola! <span id=\"nameUSer\">{{ this.nameUser }}</span></h4>\r\n      <p>Nos encanta verte de nuevo</p>\r\n    </ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" appHideHeader [toolbar1]=\"toolbar1\" [toolbar2]=\"toolbar2\">\r\n\r\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <h3 class=\"resetValuesCss title\">Cartelera</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss subTitle\">\r\n          Mira todo lo que tenemos preparado para ti.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"isDataBillboard\">\r\n    <ion-slide *ngFor=\"let item of [1,1,1]\">\r\n      <ion-card >\r\n        <ion-thumbnail class=\"thumbnailSkeleton\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-row *ngIf=\"isDataBillboardEmpty\">\r\n    <ion-col class=\"noBillboard\">\r\n      <h4 class=\"ion-text-center noBillboards\">\r\n        No te preocupes si no encuentras ninguna publicación en esta cartelera\r\n      </h4>\r\n      <h6 class=\"ion-text-center\">\r\n        Podemos usar este tiempo valioso para meditar, amar a todos los seres vivos o verte los capitulos que te faltan de la serie que te gusta.\r\n      </h6>\r\n      <ion-img src=\"./assets/img/noBillboards.png\"></ion-img>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"oneBillboard\">\r\n    <ion-col>\r\n      <ion-card *ngFor=\"let billboard of finalBillboards; let i = index\" class=\"cardBillboardOne\" (click)=\"viewDetailBillboard(billboard)\">\r\n        <ion-img *ngIf=\"billboard.images.length > 0\" class=\"imgBillboard\" [src]=\"billboard.images[i].image\"></ion-img>\r\n        <ion-img *ngIf=\"billboard.images.length == 0\" class=\"imgBillboard\" src=\"./assets/img/no_image.jpg\"></ion-img>\r\n        <ion-label class=\"dateBillboardOne\">\r\n          {{ billboard.end_date | date: 'EEEE, d MMM'}}\r\n        </ion-label>\r\n        <ion-label class=\"titleBillboardOne\">\r\n          {{ billboard.title | truncate : limitTitle }}\r\n        </ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-slides [options]=\"slideOptsBillboard\" *ngIf=\"!isDataBillboard && !oneBillboard\">\r\n\r\n    <ion-slide *ngFor=\"let billboard of finalBillboards\">\r\n      <ion-card class=\"cardBillboard\" (click)=\"viewDetailBillboard(billboard)\">\r\n        <ion-img *ngIf=\"billboard.images.length > 0\" class=\"imgBillboard\" [src]=\"billboard.images[0].image\"></ion-img>\r\n        <ion-img *ngIf=\"billboard.images.length == 0\" class=\"imgBillboard\" src=\"./assets/img/no_image.jpg\"></ion-img>\r\n        <ion-label\r\n        [ngClass]=\"{'dateBillboard': this.finalBillboards.length >= 1, 'dateBillboardOne': this.finalBillboards.length == 1}\">\r\n          {{ billboard.end_date | date: 'EEEE, d MMM'}}\r\n        </ion-label>\r\n        <ion-label\r\n        [ngClass]=\"{'titleBillboard': this.finalBillboards.length >= 1, 'titleBillboardOne': this.finalBillboards.length == 1}\">\r\n          {{ billboard.title | truncate : limitTitlel}}\r\n        </ion-label>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" *ngIf=\"!isDataBillboardEmpty\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss titleNavigate ion-text-end\" routerLink=\"/tabs/billboard/list\">Ver la cartelera completa</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid fixed class=\"resetValuesCss gridNews\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <h3 class=\"resetValuesCss title\">Noticias</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss subTitle\">\r\n          Aquí encontrarás información de tu interés.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"isDataNews\">\r\n    <ion-slide *ngFor=\"let item of [1,1,1]\">\r\n      <ion-card >\r\n        <ion-thumbnail class=\"thumbnailSkeleton\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-row *ngIf=\"isDataNewsEmpty\">\r\n    <ion-col class=\"noNewsPrincipal\">\r\n      <h4 class=\"ion-text-center noNews\">\r\n        *_* OMG! Será que están almorzando nuestros reporteros, que no tenemos noticias?\r\n      </h4>\r\n      <h6 class=\"ion-text-center\">\r\n        jajajaja Falso de toda falsedad, están trabajando sin descanso, para poder mostrarte dentro de poco información de tu interés\r\n      </h6>\r\n      <ion-img src=\"./assets/img/noNews.png\"></ion-img>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"oneNews\">\r\n    <ion-col>\r\n      <ion-card class=\"cardNewsOne firstCardNews\" (click)=\"viewDetailNews(news)\" *ngFor=\"let news of finalnews\">\r\n      <div class=\"endDateOne\">\r\n        <p class=\"endDateDayOne\">\r\n          {{ news.end_date | date: 'dd'}}\r\n        </p>\r\n        <p class=\"endDateMonthOne\">\r\n          {{ news.end_date | date: 'MMM'}}\r\n        </p>\r\n      </div>\r\n      <ion-card-title class=\"titleNews\">{{ news.title | truncate : limit : true}}</ion-card-title>\r\n      <!-- <p class=\"descriptionNewsOne\">\r\n        {{news.description | truncate : limit  | removeTagHtml}}\r\n      </p> -->\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-slides [options]=\"slideOptsNews\" *ngIf=\"!isDataNews && !oneNews\">\r\n    <ion-slide *ngFor=\"let news of finalnews; let i = index\">\r\n      <ion-card class=\"cardNews\" (click)=\"viewDetailNews(news)\"\r\n        [ngClass]=\"{'firstCardNews': i == 0, 'secondCardNews': i == 1, 'thirdCardNews': i == 2}\">\r\n        <div class=\"endDate\">\r\n          <p class=\"endDateDay\">\r\n            {{ news.start_date | date: 'dd'}}\r\n          </p>\r\n          <p class=\"endDateMonth\">\r\n            {{ news.start_date | date: 'MMM'}}\r\n          </p>\r\n        </div>\r\n        <ion-card-title class=\"titleNews\">{{ news.title | truncate : limit : true}}</ion-card-title>\r\n        <!-- <p class=\"descriptionNews\">\r\n          {{news.description | truncate : limit}}\r\n        </p> -->\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n    <ion-grid fixed class=\"resetValuesCss ion-padding-top\" *ngIf=\"!isDataNewsEmpty\">\r\n      <ion-row class=\"resetValuesCss\">\r\n        <ion-col class=\"resetValuesCss\">\r\n          <p class=\"resetValuesCss titleNavigate ion-text-end\" routerLink=\"/tabs/news/list\">Ver todas las noticias</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- <ion-grid fixed class=\"resetValuesCss\">\r\n      <ion-row class=\"resetValuesCss\">\r\n        <ion-col class=\"resetValuesCss\">\r\n          <h3 class=\"resetValuesCss title\">Contáctanos</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"resetValuesCss\">\r\n        <ion-col class=\"resetValuesCss\">\r\n          <p class=\"resetValuesCss subTitle\">\r\n            Si tienes alguna inquietud a cerca de nuestra app, puedes contactarnos al siguiente numero\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid> -->\r\n  \r\n    <!-- <ion-list>\r\n      <ion-item *ngFor=\"let item of [1]\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/assets/img/Foto2.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>\r\n            <b>Martin Elias:</b> +57 303-303-3033\r\n          </h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list> -->\r\n\r\n  <!-- <ion-grid fixed class=\"resetValuesCss\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <h3 class=\"resetValuesCss title\">Notificaciones</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss subTitle\">\r\n          Tienes <b id=\"quantityNot\">6</b> mensajes si leer\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of [1,1,1]\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"/assets/img/Foto2.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          <b>Admin</b> te invito a un evento\r\n        </h3>\r\n        <p>Hace 15 horas</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\">\r\n    <ion-row class=\"resetValuesCss\">\r\n      <ion-col class=\"resetValuesCss\">\r\n        <p class=\"resetValuesCss titleNavigate ion-text-end\" id=\"txtNotification\">Ver todas mis notificaciones</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/directives/hide-header.directive.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/directives/hide-header.directive.ts ***!
    \**********************************************************/

  /*! exports provided: HideHeaderDirective */

  /***/
  function srcAppHomeDirectivesHideHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function () {
      return HideHeaderDirective;
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

    var HideHeaderDirective = /*#__PURE__*/function () {
      function HideHeaderDirective(render, domCrtl) {
        _classCallCheck(this, HideHeaderDirective);

        this.render = render;
        this.domCrtl = domCrtl;
        this.lastY = 110;
      }

      _createClass(HideHeaderDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.toolbar1 = this.toolbar1.el;
          this.toolbar2 = this.toolbar2.el; // this.domCrtl.write(() => {
          //   this.render.setStyle(this.toolbar2, 'transition', 'margin-top 400ms');
          // });
        }
      }, {
        key: "onContentScroll",
        value: function onContentScroll(event) {// if (event.detail.scrollTop > this.lastY) {
          //   this.domCrtl.write(() => {
          //     this.render.addClass(this.toolbar1, 'toolbarH1Final');
          //     this.render.addClass(this.toolbar2, 'toolbarH2Final');
          //     this.render.setStyle(this.toolbar2, 'margin-top', `-${this.toolbar2.clientHeight}px`);
          //   });
          // } else {
          //   this.domCrtl.write(() => {
          //     this.render.removeClass(this.toolbar1, 'toolbarH1Final');
          //     this.render.removeClass(this.toolbar2, 'toolbarH2Final');
          //     this.render.setStyle(this.toolbar2, 'margin-top', '0px');
          //   });
          // }
        }
      }]);

      return HideHeaderDirective;
    }();

    HideHeaderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('toolbar1')], HideHeaderDirective.prototype, "toolbar1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('toolbar2')], HideHeaderDirective.prototype, "toolbar2", void 0);
    HideHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHideHeader]',
      host: {
        '(ionScroll)': 'onContentScroll($event)'
      }
    })], HideHeaderDirective);
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home/home.component.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./directives/hide-header.directive */
    "./src/app/home/directives/hide-header.directive.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_7__["HideHeaderDirective"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home/home.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/home/home/home.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: \"Raleway\", sans-serif;\n}\n\n.toolbarH1 {\n  --background: rgb(241, 239, 254);\n}\n\n.toolbarH1Final {\n  border-bottom-left-radius: 32px;\n  border-bottom-right-radius: 32px;\n  border-bottom: #ab9cf7 1.5px solid;\n  z-index: 20;\n}\n\n.toolbarH2 {\n  --background: rgb(241, 239, 254);\n  border-bottom-left-radius: 32px;\n  border-bottom-right-radius: 32px;\n  border-bottom: #ab9cf7 1.5px solid;\n  padding-bottom: 0.5vh;\n}\n\n.toolbarH2Final {\n  border-bottom: #ab9cf7 0px solid;\n  z-index: -2;\n}\n\n#logo {\n  width: 5.6rem;\n  position: relative;\n  left: 45%;\n}\n\n#avatarProfile {\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n  float: left;\n}\n\n.toolbarH2 h3 {\n  font-size: 1.2rem;\n}\n\n#nameUSer {\n  font-weight: bold;\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n#firsTitle {\n  margin-top: 2rem !important;\n}\n\n.title {\n  margin-left: 1rem !important;\n  font-weight: bold;\n}\n\n.subTitle {\n  margin-left: 1rem !important;\n  font-size: 0.8rem !important;\n  margin-top: 8px !important;\n}\n\n.titleNavigate {\n  color: #48b5fb;\n  margin-right: 1rem !important;\n  margin-bottom: 1.5rem !important;\n  -webkit-text-decoration: underline #48b5fb;\n          text-decoration: underline #48b5fb;\n  font-weight: bold;\n}\n\n#txtNotification {\n  margin-top: 1rem !important;\n}\n\n.cardBillboard {\n  height: 12rem;\n  width: 20rem;\n  position: relative;\n}\n\n.cardBillboard:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to bottom right, rgba(0, 13, 61, 0.9) 20%, rgba(255, 255, 255, 0));\n}\n\n.cardBillboard .imgBillboard,\n.cardBillboardOne .imgBillboard,\n#avatarProfile img {\n  width: 100%;\n  height: auto;\n}\n\n@supports ((-o-object-fit: cover) or (object-fit: cover)) {\n  .cardBillboard .imgBillboard,\n.cardBillboardOne .imgBillboard,\n#avatarProfile img {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center center;\n       object-position: center center;\n  }\n}\n\n.cardBillboardOne {\n  height: 9rem;\n}\n\n.cardBillboardOne:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to bottom right, rgba(0, 13, 61, 0.9) 20%, rgba(255, 255, 255, 0));\n}\n\n.dateBillboard {\n  position: absolute;\n  padding-left: 0.8rem;\n  top: 1rem;\n  right: 1rem;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.dateBillboardOne {\n  position: absolute;\n  padding-left: 0.8rem;\n  top: 1rem;\n  right: 1rem;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.titleBillboard {\n  position: absolute;\n  text-align: justify;\n  bottom: 1rem;\n  left: 0.3rem;\n  color: #ffffff;\n  font-weight: bold;\n  width: 17rem;\n}\n\n.titleBillboardOne {\n  position: absolute;\n  padding-left: 0.8rem;\n  bottom: 1rem;\n  left: 0.3rem;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.noBillboards {\n  color: #48b5fb;\n}\n\n.noBillboard {\n  padding-left: 0.9rem;\n  padding-right: 0.9rem;\n}\n\n.gridNews {\n  margin-top: 1rem !important;\n}\n\n.cardNews {\n  height: 6rem;\n  width: 18rem;\n  border-radius: 1rem;\n}\n\n.cardNews:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.cardNewsOne {\n  height: 10rem;\n}\n\n.cardNewsOne:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.noNews {\n  color: #48b5fb;\n}\n\n.noNewsPrincipal {\n  padding-left: 0.9rem;\n  padding-right: 0.9rem;\n}\n\n.dateNews {\n  float: right;\n  padding-right: 0.8rem;\n  padding-top: 0.6rem;\n  color: #ffffff;\n}\n\n.endDate {\n  position: absolute;\n  background: rgba(117, 201, 251, 0.5);\n  top: 0;\n  right: 0;\n  width: 4rem;\n  height: 6rem;\n}\n\n.endDateDay {\n  position: relative;\n  top: 16px;\n  left: 3px;\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #ffffff;\n  margin: 0;\n}\n\n.endDateMonth {\n  position: relative;\n  top: 15px;\n  font-size: 1.3rem;\n  color: #ffffff;\n  margin: 0;\n}\n\n.endDateOne {\n  position: absolute;\n  background: rgba(117, 201, 251, 0.5);\n  padding-left: 12px;\n  top: 0;\n  right: 0;\n  width: 4rem;\n  height: 3.8rem;\n}\n\n.endDateDayOne {\n  position: relative;\n  top: 0px;\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #000d3d;\n  margin: 0;\n}\n\n.endDateMonthOne {\n  position: relative;\n  top: -6px;\n  font-size: 1.3rem;\n  color: #000d3d;\n  margin: 0;\n}\n\n.titleNews {\n  position: absolute;\n  top: 18px;\n  left: 2px;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-align: justify;\n  width: 11.3rem;\n  padding: 0 0.2rem 0 0.7rem;\n}\n\n.descriptionNews {\n  position: absolute;\n  top: 45px;\n  left: 10px;\n  color: #ffffff;\n  width: 200px;\n  text-align: justify;\n}\n\n.descriptionNewsOne {\n  position: absolute;\n  top: 45px;\n  left: 10px;\n  color: #000d3d;\n  width: 270px;\n  text-align: justify;\n}\n\n.firstCardNews:before {\n  background-color: #ffffff;\n}\n\n.firstCardNews .titleNews {\n  color: #3db5ff;\n}\n\n.firstCardNews .descriptionNews,\n.firstCardNews .endDate .endDateDay,\n.firstCardNews .endDate .endDateMonth {\n  color: #000d3d;\n}\n\n.secondCardNews:before {\n  background-color: #3db5ff;\n}\n\n.secondCardNews .titleNews {\n  color: #ffffff;\n}\n\n.secondCardNews .descriptionNews {\n  color: #ffffff;\n}\n\n.thirdCardNews:before {\n  background-color: #000d3d;\n}\n\n.thirdCardNews .titleNews {\n  color: #3db5ff;\n}\n\n.thirdCardNews .descriptionNews {\n  color: #ffffff;\n}\n\n#quantityNot {\n  color: #89d1ff !important;\n  font-size: 1rem;\n}\n\n.footer {\n  height: 70px !important;\n  --background: rgb(104, 104, 239);\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  z-index: 10;\n}\n\n.tabs {\n  --background: rgb(104, 239, 144);\n  height: 70px !important;\n  z-index: 20;\n}\n\n.thumbnailSkeleton {\n  position: relative;\n  height: 10rem;\n  width: 18rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL0M6XFxVc2Vyc1xcQXN1c1xcRG9jdW1lbnRzXFxXb3JrXFxEZXNhcnJvbGxvRWZcXFVuaWRhcHBWZWNpbm9zLU1vdmlsL3NyY1xcYXBwXFxob21lXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw4RkFBQTtBQ0NGOztBREVBOzs7RUFHRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0U7OztJQUdFLFlBQUE7SUFDQSxvQkFBQTtPQUFBLGlCQUFBO0lBQ0EsaUNBQUE7T0FBQSw4QkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw4RkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTs7O0VBR0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udG9vbGJhckgxIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNDEsIDIzOSwgMjU0KTtcclxufVxyXG5cclxuLnRvb2xiYXJIMUZpbmFsIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMnB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMnB4O1xyXG4gIGJvcmRlci1ib3R0b206ICNhYjljZjcgMS41cHggc29saWQ7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi50b29sYmFySDIge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI0MSwgMjM5LCAyNTQpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMycHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogI2FiOWNmNyAxLjVweCBzb2xpZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41dmg7XHJcbn1cclxuXHJcbi50b29sYmFySDJGaW5hbCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogI2FiOWNmNyAwcHggc29saWQ7XHJcbiAgei1pbmRleDogLTI7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICB3aWR0aDogNS42cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA0NSU7XHJcbn1cclxuXHJcbiNhdmF0YXJQcm9maWxlIHtcclxuICB3aWR0aDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRvb2xiYXJIMiBoMyB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbiNuYW1lVVNlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yZXNldFZhbHVlc0NzcyB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2ZpcnNUaXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdWJUaXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGVOYXZpZ2F0ZSB7XHJcbiAgY29sb3I6ICM0OGI1ZmI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIzQ4YjVmYjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3R4dE5vdGlmaWNhdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZEJpbGxib2FyZCB7XHJcbiAgaGVpZ2h0OiAxMnJlbTtcclxuICB3aWR0aDogMjByZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZEJpbGxib2FyZDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgwLCAxMywgNjEsIDAuOSkgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcclxufVxyXG5cclxuLmNhcmRCaWxsYm9hcmQgLmltZ0JpbGxib2FyZCxcclxuLmNhcmRCaWxsYm9hcmRPbmUgLmltZ0JpbGxib2FyZCxcclxuI2F2YXRhclByb2ZpbGUgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBzdXBwb3J0cyAob2JqZWN0LWZpdDogY292ZXIpIHtcclxuICAuY2FyZEJpbGxib2FyZCAuaW1nQmlsbGJvYXJkLFxyXG4gIC5jYXJkQmlsbGJvYXJkT25lIC5pbWdCaWxsYm9hcmQsXHJcbiAgI2F2YXRhclByb2ZpbGUgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRCaWxsYm9hcmRPbmUge1xyXG4gIGhlaWdodDogOXJlbTtcclxufVxyXG5cclxuLmNhcmRCaWxsYm9hcmRPbmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoMCwgMTMsIDYxLCAwLjkpIDIwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XHJcbn1cclxuXHJcbi5kYXRlQmlsbGJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgdG9wOiAxcmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGF0ZUJpbGxib2FyZE9uZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xyXG4gIHRvcDogMXJlbTtcclxuICByaWdodDogMXJlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRpdGxlQmlsbGJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBib3R0b206IDFyZW07XHJcbiAgbGVmdDogMC4zcmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiAxN3JlbTtcclxufVxyXG5cclxuLnRpdGxlQmlsbGJvYXJkT25lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgYm90dG9tOiAxcmVtO1xyXG4gIGxlZnQ6IDAuM3JlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5vQmlsbGJvYXJkcyB7XHJcbiAgY29sb3I6ICM0OGI1ZmI7XHJcbn1cclxuXHJcbi5ub0JpbGxib2FyZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjlyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC45cmVtO1xyXG59XHJcblxyXG4uZ3JpZE5ld3Mge1xyXG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmROZXdzIHtcclxuICBoZWlnaHQ6IDZyZW07XHJcbiAgd2lkdGg6IDE4cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJkTmV3czpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmNhcmROZXdzT25lIHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG59XHJcblxyXG4uY2FyZE5ld3NPbmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ub05ld3Mge1xyXG4gIGNvbG9yOiAjNDhiNWZiO1xyXG59XHJcblxyXG4ubm9OZXdzUHJpbmNpcGFsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuOXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjlyZW07XHJcbn1cclxuXHJcbi5kYXRlTmV3cyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMC42cmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZW5kRGF0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE3LCAyMDEsIDI1MSwgMC41KTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDRyZW07XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG59XHJcblxyXG4uZW5kRGF0ZURheSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTZweDtcclxuICBsZWZ0OiAzcHg7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZW5kRGF0ZU1vbnRoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmVuZERhdGVPbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNywgMjAxLCAyNTEsIDAuNSk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNHJlbTtcclxuICBoZWlnaHQ6IDMuOHJlbTtcclxufVxyXG5cclxuLmVuZERhdGVEYXlPbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDBweDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzAwMGQzZDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5lbmREYXRlTW9udGhPbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC02cHg7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgY29sb3I6ICMwMDBkM2Q7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGl0bGVOZXdzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxOHB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHdpZHRoOiAxMS4zcmVtO1xyXG4gIHBhZGRpbmc6IDAgMC4ycmVtIDAgMC43cmVtO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb25OZXdzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NXB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbk5ld3NPbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ1cHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBjb2xvcjogIzAwMGQzZDtcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmZpcnN0Q2FyZE5ld3M6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZmlyc3RDYXJkTmV3cyAudGl0bGVOZXdzIHtcclxuICBjb2xvcjogIzNkYjVmZjtcclxufVxyXG5cclxuLmZpcnN0Q2FyZE5ld3MgLmRlc2NyaXB0aW9uTmV3cyxcclxuLmZpcnN0Q2FyZE5ld3MgLmVuZERhdGUgLmVuZERhdGVEYXksXHJcbi5maXJzdENhcmROZXdzIC5lbmREYXRlIC5lbmREYXRlTW9udGgge1xyXG4gIGNvbG9yOiAjMDAwZDNkO1xyXG59XHJcblxyXG4uc2Vjb25kQ2FyZE5ld3M6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RiNWZmO1xyXG59XHJcblxyXG4uc2Vjb25kQ2FyZE5ld3MgLnRpdGxlTmV3cyB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZWNvbmRDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnRoaXJkQ2FyZE5ld3M6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwZDNkO1xyXG59XHJcblxyXG4udGhpcmRDYXJkTmV3cyAudGl0bGVOZXdzIHtcclxuICBjb2xvcjogIzNkYjVmZjtcclxufVxyXG5cclxuLnRoaXJkQ2FyZE5ld3MgLmRlc2NyaXB0aW9uTmV3cyB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiNxdWFudGl0eU5vdCB7XHJcbiAgY29sb3I6ICM4OWQxZmYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDEwNCwgMTA0LCAyMzkpO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi50YWJzIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYigxMDQsIDIzOSwgMTQ0KTtcclxuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLnRodW1ibmFpbFNrZWxldG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICB3aWR0aDogMThyZW07XHJcbn1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRvb2xiYXJIMSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0MSwgMjM5LCAyNTQpO1xufVxuXG4udG9vbGJhckgxRmluYWwge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzJweDtcbiAgYm9yZGVyLWJvdHRvbTogI2FiOWNmNyAxLjVweCBzb2xpZDtcbiAgei1pbmRleDogMjA7XG59XG5cbi50b29sYmFySDIge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDEsIDIzOSwgMjU0KTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMycHg7XG4gIGJvcmRlci1ib3R0b206ICNhYjljZjcgMS41cHggc29saWQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjV2aDtcbn1cblxuLnRvb2xiYXJIMkZpbmFsIHtcbiAgYm9yZGVyLWJvdHRvbTogI2FiOWNmNyAwcHggc29saWQ7XG4gIHotaW5kZXg6IC0yO1xufVxuXG4jbG9nbyB7XG4gIHdpZHRoOiA1LjZyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDUlO1xufVxuXG4jYXZhdGFyUHJvZmlsZSB7XG4gIHdpZHRoOiAyLjVyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRvb2xiYXJIMiBoMyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4jbmFtZVVTZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlc2V0VmFsdWVzQ3NzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNmaXJzVGl0bGUge1xuICBtYXJnaW4tdG9wOiAycmVtICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3ViVGl0bGUge1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbn1cblxuLnRpdGxlTmF2aWdhdGUge1xuICBjb2xvcjogIzQ4YjVmYjtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjNDhiNWZiO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3R4dE5vdGlmaWNhdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmNhcmRCaWxsYm9hcmQge1xuICBoZWlnaHQ6IDEycmVtO1xuICB3aWR0aDogMjByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmRCaWxsYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoMCwgMTMsIDYxLCAwLjkpIDIwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5jYXJkQmlsbGJvYXJkIC5pbWdCaWxsYm9hcmQsXG4uY2FyZEJpbGxib2FyZE9uZSAuaW1nQmlsbGJvYXJkLFxuI2F2YXRhclByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuQHN1cHBvcnRzIChvYmplY3QtZml0OiBjb3Zlcikge1xuICAuY2FyZEJpbGxib2FyZCAuaW1nQmlsbGJvYXJkLFxuLmNhcmRCaWxsYm9hcmRPbmUgLmltZ0JpbGxib2FyZCxcbiNhdmF0YXJQcm9maWxlIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgfVxufVxuLmNhcmRCaWxsYm9hcmRPbmUge1xuICBoZWlnaHQ6IDlyZW07XG59XG5cbi5jYXJkQmlsbGJvYXJkT25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDAsIDEzLCA2MSwgMC45KSAyMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xufVxuXG4uZGF0ZUJpbGxib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRhdGVCaWxsYm9hcmRPbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZUJpbGxib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiAwLjNyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDE3cmVtO1xufVxuXG4udGl0bGVCaWxsYm9hcmRPbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xuICBib3R0b206IDFyZW07XG4gIGxlZnQ6IDAuM3JlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm9CaWxsYm9hcmRzIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG59XG5cbi5ub0JpbGxib2FyZCB7XG4gIHBhZGRpbmctbGVmdDogMC45cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjlyZW07XG59XG5cbi5ncmlkTmV3cyB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmNhcmROZXdzIHtcbiAgaGVpZ2h0OiA2cmVtO1xuICB3aWR0aDogMThyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5jYXJkTmV3czpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNhcmROZXdzT25lIHtcbiAgaGVpZ2h0OiAxMHJlbTtcbn1cblxuLmNhcmROZXdzT25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubm9OZXdzIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG59XG5cbi5ub05ld3NQcmluY2lwYWwge1xuICBwYWRkaW5nLWxlZnQ6IDAuOXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC45cmVtO1xufVxuXG4uZGF0ZU5ld3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbiAgcGFkZGluZy10b3A6IDAuNnJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5lbmREYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNywgMjAxLCAyNTEsIDAuNSk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDZyZW07XG59XG5cbi5lbmREYXRlRGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDNweDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZW5kRGF0ZU1vbnRoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZW5kRGF0ZU9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTcsIDIwMSwgMjUxLCAwLjUpO1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDMuOHJlbTtcbn1cblxuLmVuZERhdGVEYXlPbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwZDNkO1xuICBtYXJnaW46IDA7XG59XG5cbi5lbmREYXRlTW9udGhPbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjMDAwZDNkO1xuICBtYXJnaW46IDA7XG59XG5cbi50aXRsZU5ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogMTEuM3JlbTtcbiAgcGFkZGluZzogMCAwLjJyZW0gMCAwLjdyZW07XG59XG5cbi5kZXNjcmlwdGlvbk5ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDVweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmRlc2NyaXB0aW9uTmV3c09uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NXB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogIzAwMGQzZDtcbiAgd2lkdGg6IDI3MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uZmlyc3RDYXJkTmV3czpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZmlyc3RDYXJkTmV3cyAudGl0bGVOZXdzIHtcbiAgY29sb3I6ICMzZGI1ZmY7XG59XG5cbi5maXJzdENhcmROZXdzIC5kZXNjcmlwdGlvbk5ld3MsXG4uZmlyc3RDYXJkTmV3cyAuZW5kRGF0ZSAuZW5kRGF0ZURheSxcbi5maXJzdENhcmROZXdzIC5lbmREYXRlIC5lbmREYXRlTW9udGgge1xuICBjb2xvcjogIzAwMGQzZDtcbn1cblxuLnNlY29uZENhcmROZXdzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGI1ZmY7XG59XG5cbi5zZWNvbmRDYXJkTmV3cyAudGl0bGVOZXdzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zZWNvbmRDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50aGlyZENhcmROZXdzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBkM2Q7XG59XG5cbi50aGlyZENhcmROZXdzIC50aXRsZU5ld3Mge1xuICBjb2xvcjogIzNkYjVmZjtcbn1cblxuLnRoaXJkQ2FyZE5ld3MgLmRlc2NyaXB0aW9uTmV3cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jcXVhbnRpdHlOb3Qge1xuICBjb2xvcjogIzg5ZDFmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mb290ZXIge1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTA0LCAxMDQsIDIzOSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMnB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnRhYnMge1xuICAtLWJhY2tncm91bmQ6IHJnYigxMDQsIDIzOSwgMTQ0KTtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4udGh1bWJuYWlsU2tlbGV0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTByZW07XG4gIHdpZHRoOiAxOHJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/shared-services/shared.service */
    "./src/app/shared/services/shared-services/shared.service.ts");
    /* harmony import */


    var src_utils_models_Establishment_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/utils/models/Establishment.model */
    "./src/utils/models/Establishment.model.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_utils_models_Neighbour_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/utils/models/Neighbour.model */
    "./src/utils/models/Neighbour.model.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(menuCrtl, crudService, navCtrl, sharedService, storage, dbFirebase) {
        _classCallCheck(this, HomeComponent);

        this.menuCrtl = menuCrtl;
        this.crudService = crudService;
        this.navCtrl = navCtrl;
        this.sharedService = sharedService;
        this.storage = storage;
        this.dbFirebase = dbFirebase;
        this.limitTitle = 40;
        this.neighbourModel = new src_utils_models_Neighbour_model__WEBPACK_IMPORTED_MODULE_7__["NeighbourModel"]();
        this.establishment = new src_utils_models_Establishment_model__WEBPACK_IMPORTED_MODULE_5__["EstablishmentModel"](); // -------- CARTELERAS --------

        this.billboards = [];
        this.isDataBillboardEmpty = false;
        this.isDataBillboard = true;
        this.oneBillboard = false; // -------- NOTICIAS --------

        this.news = [];
        this.isDataNewsEmpty = false;
        this.isDataNews = true;
        this.oneNews = false;
        this.slideOpts = {
          slidesPerView: 1.3,
          freeMode: true
        };
        this.slideOptsBillboard = {
          slidesPerView: 1.1,
          freeMode: true
        };
        this.slideOptsNews = {
          slidesPerView: 1.3,
          freeMode: true
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.menuCrtl.enable(true);
                    _context2.next = 3;
                    return this.storage.get('token');

                  case 3:
                    this.token = _context2.sent;
                    this.getEstablishment();
                    _context2.next = 7;
                    return this.storage.get('userName');

                  case 7:
                    this.nameUser = _context2.sent;
                    _context2.next = 10;
                    return this.storage.get('userEmail');

                  case 10:
                    this.emailUser = _context2.sent;
                    this.neighbourProperty();

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.menuCrtl.toggle();
        }
      }, {
        key: "getEstablishment",
        value: function getEstablishment() {
          var _this = this;

          this.crudService.getModel('user/getMyEstablishments', this.token).subscribe(function (response) {
            _this.establishment = response.genericObject[0];
            var ESTABLISHMENT_ID = _this.establishment._id;

            _this.storage.set('establishmentId', ESTABLISHMENT_ID);

            _this.storage.set('establishmentPicture', _this.establishment.ruta_imagen_establ);

            _this.storage.set('establishmentName', _this.establishment.nom_establec);

            _this.establishmentId = _this.establishment._id;

            _this.getBillboards();

            _this.getNews();
          }, function (error) {
            console.error(error);

            _this.logOut();
          });
        }
      }, {
        key: "getBillboards",
        value: function getBillboards() {
          var _this2 = this;

          var isBillboard = {
            type: 'C',
            direction: 'des',
            direction_by: 'start_date'
          };
          this.crudService.getModel("newsletter/getByType/".concat(this.establishmentId, "/").concat(isBillboard.type, "/").concat(isBillboard.direction), this.token).subscribe(function (res) {
            _this2.billboards = res.genericObject; // ------ El metodo 'slice' me devuelve las ultimas 3 carteleras del array

            if (_this2.billboards.length >= 4) {
              _this2.finalBillboards = _this2.billboards.slice(0, 3);
            } else {
              _this2.finalBillboards = _this2.billboards;
            }

            if (_this2.billboards.length == 0) {
              _this2.isDataBillboardEmpty = true;
              _this2.isDataBillboard = false;
            } else {
              _this2.isDataBillboardEmpty = false;
              _this2.isDataBillboard = false;
            } // ------ Si solo hay una cartelera disponible, entonces se ajusta la visualización
            // ------ del slide


            if (_this2.finalBillboards.length == 1) {
              _this2.oneBillboard = true;
            } else {
              _this2.oneBillboard = false;
            }
          }, function (error) {
            console.error(error);
            _this2.isDataBillboardEmpty = true;
            _this2.isDataBillboard = false;
          });
        }
      }, {
        key: "viewDetailBillboard",
        value: function viewDetailBillboard(billboard) {
          this.sharedService.setData(billboard);
          this.navCtrl.navigateRoot('/tabs/billboard/detail-billboard', {
            animated: true
          });
        }
      }, {
        key: "getNews",
        value: function getNews() {
          var _this3 = this;

          var isNews = {
            type: 'N',
            direction: 'des',
            direction_by: 'start_date'
          };
          this.crudService.getModel("newsletter/getByType/".concat(this.establishmentId, "/").concat(isNews.type, "/").concat(isNews.direction), this.token).subscribe(function (res) {
            _this3.news = res.genericObject; // ------ El metodo 'slice' me devuelve las ultimas 3 noticias del array

            if (_this3.news.length >= 4) {
              _this3.finalnews = _this3.news.slice(0, 3);
            } else {
              _this3.finalnews = _this3.news;
            }

            if (_this3.news.length == 0) {
              _this3.isDataNewsEmpty = true;
              _this3.isDataNews = false;
            } else {
              _this3.isDataNews = false;
            } // ------ Si solo hay una cartelera disponible, entonces se ajusta la visualización
            // ------ del slide


            if (_this3.finalnews.length == 1) {
              _this3.oneNews = true;
            } else {
              _this3.oneNews = false;
            }
          }, function (error) {
            console.error(error);
            _this3.isDataNewsEmpty = true;
            _this3.isDataNews = false;
          });
        }
      }, {
        key: "viewDetailNews",
        value: function viewDetailNews(billboard) {
          this.sharedService.setData(billboard);
          this.navCtrl.navigateRoot('/tabs/news/detail-news', {
            animated: true
          });
        }
      }, {
        key: "neighbourProperty",
        value: function neighbourProperty() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.storage.get('neighbourId');

                  case 2:
                    this.neighbourId = _context4.sent;
                    _context4.next = 5;
                    return this.storage.get('token');

                  case 5:
                    this.token = _context4.sent;
                    this.crudService.getModel("neighbor/get/".concat(this.neighbourId), this.token).subscribe(function (response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                this.neighbourModel = response.genericObject.neighbor;

                              case 1:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, function (error) {
                      console.error(error);

                      _this4.logOut(); // this.presentToast('Tenemos problemas al encontrar tu información, por favor intentalo más tarde', 'toastLogin');

                    });

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Capacitor"].platform !== 'web')) {
                      _context5.next = 16;
                      break;
                    }

                    _context5.t1 = this.dbFirebase;
                    _context5.t3 = "/UsersTokenMovile/";
                    _context5.next = 5;
                    return this.storage.get('establishmentId');

                  case 5:
                    _context5.t4 = _context5.sent;
                    _context5.t2 = _context5.t3.concat.call(_context5.t3, _context5.t4, "/");
                    _context5.next = 9;
                    return this.storage.get('neighbourPropertyId');

                  case 9:
                    _context5.t5 = _context5.sent;
                    _context5.t6 = _context5.t2.concat.call(_context5.t2, _context5.t5);
                    _context5.t0 = _context5.t1.list.call(_context5.t1, _context5.t6);
                    _context5.next = 14;
                    return this.storage.get('userId');

                  case 14:
                    _context5.t7 = _context5.sent;

                    _context5.t0.remove.call(_context5.t0, _context5.t7);

                  case 16:
                    this.storage.clear();
                    this.navCtrl.navigateRoot('/login', {
                      animated: true
                    });

                  case 18:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_shared_services_crud_service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CRUDService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/utils/models/Establishment.model.ts":
  /*!*************************************************!*\
    !*** ./src/utils/models/Establishment.model.ts ***!
    \*************************************************/

  /*! exports provided: EstablishmentModel */

  /***/
  function srcUtilsModelsEstablishmentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstablishmentModel", function () {
      return EstablishmentModel;
    });

    var EstablishmentModel = function EstablishmentModel() {
      _classCallCheck(this, EstablishmentModel);
    };
    /***/

  },

  /***/
  "./src/utils/models/Neighbour.model.ts":
  /*!*********************************************!*\
    !*** ./src/utils/models/Neighbour.model.ts ***!
    \*********************************************/

  /*! exports provided: NeighbourModel */

  /***/
  function srcUtilsModelsNeighbourModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeighbourModel", function () {
      return NeighbourModel;
    });

    var NeighbourModel = function NeighbourModel() {
      _classCallCheck(this, NeighbourModel);
    };
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map