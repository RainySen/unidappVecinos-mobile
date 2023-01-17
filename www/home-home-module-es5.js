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


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\n  <ion-toolbar class=\"toolbarH1\" #toolbar1>\n    <ion-img id=\"logo\" src=\"./assets/img/logos-paco/LogoPaco_Color.svg\"></ion-img>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/img/HMenu-outline.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"toolbarH2\" #toolbar2>\n    <ion-avatar id=\"avatarProfile\">\n      <img *ngIf=\"this.neighbourModel.foto\" [src]=\"this.neighbourModel.foto\">\n      <img *ngIf=\"!this.neighbourModel.foto\" src=\"assets/img/noImage.png\">\n    </ion-avatar>\n    <ion-label>\n      <h4>Hola! <span id=\"nameUSer\">{{ this.nameUser }}</span></h4>\n      <p>Nos encanta verte de nuevo</p>\n    </ion-label>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" appHideHeader [toolbar1]=\"toolbar1\" [toolbar2]=\"toolbar2\">\n\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" id=\"firsTitle\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <h3 class=\"resetValuesCss title\">Cartelera</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss subTitle\">\n          Mira todo lo que tenemos preparado para ti.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"isDataBillboard\">\n    <ion-slide *ngFor=\"let item of [1,1,1]\">\n      <ion-card >\n        <ion-thumbnail class=\"thumbnailSkeleton\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row *ngIf=\"isDataBillboardEmpty\">\n    <ion-col class=\"noBillboard\">\n      <h4 class=\"ion-text-center noBillboards\">\n        No te preocupes si no encuentras ninguna publicación en esta cartelera\n      </h4>\n      <h6 class=\"ion-text-center\">\n        Podemos usar este tiempo valioso para meditar, amar a todos los seres vivos o verte los capitulos que te faltan de la serie que te gusta.\n      </h6>\n      <ion-img src=\"./assets/img/noBillboards.png\"></ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"oneBillboard\">\n    <ion-col>\n      <ion-card *ngFor=\"let billboard of finalBillboards; let i = index\" class=\"cardBillboardOne\" (click)=\"viewDetailBillboard(billboard)\">\n        <ion-img *ngIf=\"billboard.images.length > 0\" class=\"imgBillboard\" [src]=\"billboard.images[i].image\"></ion-img>\n        <ion-img *ngIf=\"billboard.images.length == 0\" class=\"imgBillboard\" src=\"./assets/img/no_image.jpg\"></ion-img>\n        <ion-label class=\"dateBillboardOne\">\n          {{ billboard.end_date | date: 'EEEE, d MMM'}}\n        </ion-label>\n        <ion-label class=\"titleBillboardOne\">\n          {{ billboard.title | truncate : limitTitle }}\n        </ion-label>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-slides [options]=\"slideOptsBillboard\" *ngIf=\"!isDataBillboard && !oneBillboard\">\n\n    <ion-slide *ngFor=\"let billboard of finalBillboards\">\n      <ion-card class=\"cardBillboard\" (click)=\"viewDetailBillboard(billboard)\">\n        <ion-img *ngIf=\"billboard.images.length > 0\" class=\"imgBillboard\" [src]=\"billboard.images[0].image\"></ion-img>\n        <ion-img *ngIf=\"billboard.images.length == 0\" class=\"imgBillboard\" src=\"./assets/img/no_image.jpg\"></ion-img>\n        <ion-label\n        [ngClass]=\"{'dateBillboard': this.finalBillboards.length >= 1, 'dateBillboardOne': this.finalBillboards.length == 1}\">\n          {{ billboard.end_date | date: 'EEEE, d MMM'}}\n        </ion-label>\n        <ion-label\n        [ngClass]=\"{'titleBillboard': this.finalBillboards.length >= 1, 'titleBillboardOne': this.finalBillboards.length == 1}\">\n          {{ billboard.title | truncate : limitTitlel}}\n        </ion-label>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\" *ngIf=\"!isDataBillboardEmpty\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss titleNavigate ion-text-end\" routerLink=\"/tabs/billboard/list\">Ver la cartelera completa</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed class=\"resetValuesCss gridNews\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <h3 class=\"resetValuesCss title\">Noticias</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss subTitle\">\n          Aquí encontrarás información de tu interés.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"isDataNews\">\n    <ion-slide *ngFor=\"let item of [1,1,1]\">\n      <ion-card >\n        <ion-thumbnail class=\"thumbnailSkeleton\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row *ngIf=\"isDataNewsEmpty\">\n    <ion-col class=\"noNewsPrincipal\">\n      <h4 class=\"ion-text-center noNews\">\n        *_* OMG! Será que están almorzando nuestros reporteros, que no tenemos noticias?\n      </h4>\n      <h6 class=\"ion-text-center\">\n        jajajaja Falso de toda falsedad, están trabajando sin descanso, para poder mostrarte dentro de poco información de tu interés\n      </h6>\n      <ion-img src=\"./assets/img/noNews.png\"></ion-img>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"oneNews\">\n    <ion-col>\n      <ion-card class=\"cardNewsOne firstCardNews\" (click)=\"viewDetailNews(news)\" *ngFor=\"let news of finalnews\">\n      <div class=\"endDateOne\">\n        <p class=\"endDateDayOne\">\n          {{ news.end_date | date: 'dd'}}\n        </p>\n        <p class=\"endDateMonthOne\">\n          {{ news.end_date | date: 'MMM'}}\n        </p>\n      </div>\n      <ion-card-title class=\"titleNews\">{{ news.title | truncate : limit : true}}</ion-card-title>\n      <!-- <p class=\"descriptionNewsOne\">\n        {{news.description | truncate : limit  | removeTagHtml}}\n      </p> -->\n    </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-slides [options]=\"slideOptsNews\" *ngIf=\"!isDataNews && !oneNews\">\n    <ion-slide *ngFor=\"let news of finalnews; let i = index\">\n      <ion-card class=\"cardNews\" (click)=\"viewDetailNews(news)\"\n        [ngClass]=\"{'firstCardNews': i == 0, 'secondCardNews': i == 1, 'thirdCardNews': i == 2}\">\n        <div class=\"endDate\">\n          <p class=\"endDateDay\">\n            {{ news.start_date | date: 'dd'}}\n          </p>\n          <p class=\"endDateMonth\">\n            {{ news.start_date | date: 'MMM'}}\n          </p>\n        </div>\n        <ion-card-title class=\"titleNews\">{{ news.title | truncate : limit : true}}</ion-card-title>\n        <!-- <p class=\"descriptionNews\">\n          {{news.description | truncate : limit}}\n        </p> -->\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n    <ion-grid fixed class=\"resetValuesCss ion-padding-top\" *ngIf=\"!isDataNewsEmpty\">\n      <ion-row class=\"resetValuesCss\">\n        <ion-col class=\"resetValuesCss\">\n          <p class=\"resetValuesCss titleNavigate ion-text-end\" routerLink=\"/tabs/news/list\">Ver todas las noticias</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- <ion-grid fixed class=\"resetValuesCss\">\n      <ion-row class=\"resetValuesCss\">\n        <ion-col class=\"resetValuesCss\">\n          <h3 class=\"resetValuesCss title\">Contáctanos</h3>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"resetValuesCss\">\n        <ion-col class=\"resetValuesCss\">\n          <p class=\"resetValuesCss subTitle\">\n            Si tienes alguna inquietud a cerca de nuestra app, puedes contactarnos al siguiente numero\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n  \n    <!-- <ion-list>\n      <ion-item *ngFor=\"let item of [1]\">\n        <ion-avatar slot=\"start\">\n          <img src=\"/assets/img/Foto2.png\">\n        </ion-avatar>\n        <ion-label>\n          <h3>\n            <b>Martin Elias:</b> +57 303-303-3033\n          </h3>\n        </ion-label>\n      </ion-item>\n    </ion-list> -->\n\n  <!-- <ion-grid fixed class=\"resetValuesCss\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <h3 class=\"resetValuesCss title\">Notificaciones</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss subTitle\">\n          Tienes <b id=\"quantityNot\">6</b> mensajes si leer\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of [1,1,1]\">\n      <ion-avatar slot=\"start\">\n        <img src=\"/assets/img/Foto2.png\">\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <b>Admin</b> te invito a un evento\n        </h3>\n        <p>Hace 15 horas</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid fixed class=\"resetValuesCss ion-padding-top\">\n    <ion-row class=\"resetValuesCss\">\n      <ion-col class=\"resetValuesCss\">\n        <p class=\"resetValuesCss titleNavigate ion-text-end\" id=\"txtNotification\">Ver todas mis notificaciones</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n</ion-content>";
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


    __webpack_exports__["default"] = "* {\n  font-family: \"Raleway\", sans-serif;\n}\n\n.toolbarH1 {\n  --background: rgb(241, 239, 254);\n}\n\n.toolbarH1Final {\n  border-bottom-left-radius: 32px;\n  border-bottom-right-radius: 32px;\n  border-bottom: #ab9cf7 1.5px solid;\n  z-index: 20;\n}\n\n.toolbarH2 {\n  --background: rgb(241, 239, 254);\n  border-bottom-left-radius: 32px;\n  border-bottom-right-radius: 32px;\n  border-bottom: #ab9cf7 1.5px solid;\n  padding-bottom: 0.5vh;\n}\n\n.toolbarH2Final {\n  border-bottom: #ab9cf7 0px solid;\n  z-index: -2;\n}\n\n#logo {\n  width: 5.6rem;\n  position: relative;\n  left: 45%;\n}\n\n#avatarProfile {\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n  float: left;\n}\n\n.toolbarH2 h3 {\n  font-size: 1.2rem;\n}\n\n#nameUSer {\n  font-weight: bold;\n}\n\n.resetValuesCss {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n#firsTitle {\n  margin-top: 2rem !important;\n}\n\n.title {\n  margin-left: 1rem !important;\n  font-weight: bold;\n}\n\n.subTitle {\n  margin-left: 1rem !important;\n  font-size: 0.8rem !important;\n  margin-top: 8px !important;\n}\n\n.titleNavigate {\n  color: #48b5fb;\n  margin-right: 1rem !important;\n  margin-bottom: 1.5rem !important;\n  -webkit-text-decoration: underline #48b5fb;\n          text-decoration: underline #48b5fb;\n  font-weight: bold;\n}\n\n#txtNotification {\n  margin-top: 1rem !important;\n}\n\n.cardBillboard {\n  height: 12rem;\n  width: 20rem;\n  position: relative;\n}\n\n.cardBillboard:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to bottom right, rgba(0, 13, 61, 0.9) 20%, rgba(255, 255, 255, 0));\n}\n\n.cardBillboard .imgBillboard,\n.cardBillboardOne .imgBillboard,\n#avatarProfile img {\n  width: 100%;\n  height: auto;\n}\n\n@supports ((-o-object-fit: cover) or (object-fit: cover)) {\n  .cardBillboard .imgBillboard,\n.cardBillboardOne .imgBillboard,\n#avatarProfile img {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center center;\n       object-position: center center;\n  }\n}\n\n.cardBillboardOne {\n  height: 9rem;\n}\n\n.cardBillboardOne:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to bottom right, rgba(0, 13, 61, 0.9) 20%, rgba(255, 255, 255, 0));\n}\n\n.dateBillboard {\n  position: absolute;\n  padding-left: 0.8rem;\n  top: 1rem;\n  right: 1rem;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.dateBillboardOne {\n  position: absolute;\n  padding-left: 0.8rem;\n  top: 1rem;\n  right: 1rem;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.titleBillboard {\n  position: absolute;\n  text-align: justify;\n  bottom: 1rem;\n  left: 0.3rem;\n  color: #ffffff;\n  font-weight: bold;\n  width: 17rem;\n}\n\n.titleBillboardOne {\n  position: absolute;\n  padding-left: 0.8rem;\n  bottom: 1rem;\n  left: 0.3rem;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.noBillboards {\n  color: #48b5fb;\n}\n\n.noBillboard {\n  padding-left: 0.9rem;\n  padding-right: 0.9rem;\n}\n\n.gridNews {\n  margin-top: 1rem !important;\n}\n\n.cardNews {\n  height: 6rem;\n  width: 18rem;\n  border-radius: 1rem;\n}\n\n.cardNews:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.cardNewsOne {\n  height: 10rem;\n}\n\n.cardNewsOne:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.noNews {\n  color: #48b5fb;\n}\n\n.noNewsPrincipal {\n  padding-left: 0.9rem;\n  padding-right: 0.9rem;\n}\n\n.dateNews {\n  float: right;\n  padding-right: 0.8rem;\n  padding-top: 0.6rem;\n  color: #ffffff;\n}\n\n.endDate {\n  position: absolute;\n  background: rgba(117, 201, 251, 0.5);\n  top: 0;\n  right: 0;\n  width: 4rem;\n  height: 6rem;\n}\n\n.endDateDay {\n  position: relative;\n  top: 16px;\n  left: 3px;\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #ffffff;\n  margin: 0;\n}\n\n.endDateMonth {\n  position: relative;\n  top: 15px;\n  font-size: 1.3rem;\n  color: #ffffff;\n  margin: 0;\n}\n\n.endDateOne {\n  position: absolute;\n  background: rgba(117, 201, 251, 0.5);\n  padding-left: 12px;\n  top: 0;\n  right: 0;\n  width: 4rem;\n  height: 3.8rem;\n}\n\n.endDateDayOne {\n  position: relative;\n  top: 0px;\n  font-size: 1.8rem;\n  font-weight: bold;\n  color: #000d3d;\n  margin: 0;\n}\n\n.endDateMonthOne {\n  position: relative;\n  top: -6px;\n  font-size: 1.3rem;\n  color: #000d3d;\n  margin: 0;\n}\n\n.titleNews {\n  position: absolute;\n  top: 18px;\n  left: 2px;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-align: justify;\n  width: 11.3rem;\n  padding: 0 0.2rem 0 0.7rem;\n}\n\n.descriptionNews {\n  position: absolute;\n  top: 45px;\n  left: 10px;\n  color: #ffffff;\n  width: 200px;\n  text-align: justify;\n}\n\n.descriptionNewsOne {\n  position: absolute;\n  top: 45px;\n  left: 10px;\n  color: #000d3d;\n  width: 270px;\n  text-align: justify;\n}\n\n.firstCardNews:before {\n  background-color: #ffffff;\n}\n\n.firstCardNews .titleNews {\n  color: #3db5ff;\n}\n\n.firstCardNews .descriptionNews,\n.firstCardNews .endDate .endDateDay,\n.firstCardNews .endDate .endDateMonth {\n  color: #000d3d;\n}\n\n.secondCardNews:before {\n  background-color: #3db5ff;\n}\n\n.secondCardNews .titleNews {\n  color: #ffffff;\n}\n\n.secondCardNews .descriptionNews {\n  color: #ffffff;\n}\n\n.thirdCardNews:before {\n  background-color: #000d3d;\n}\n\n.thirdCardNews .titleNews {\n  color: #3db5ff;\n}\n\n.thirdCardNews .descriptionNews {\n  color: #ffffff;\n}\n\n#quantityNot {\n  color: #89d1ff !important;\n  font-size: 1rem;\n}\n\n.footer {\n  height: 70px !important;\n  --background: rgb(104, 104, 239);\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  z-index: 10;\n}\n\n.tabs {\n  --background: rgb(104, 239, 144);\n  height: 70px !important;\n  z-index: 20;\n}\n\n.thumbnailSkeleton {\n  position: relative;\n  height: 10rem;\n  width: 18rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEZBQUE7QUNDRjs7QURFQTs7O0VBR0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFOzs7SUFHRSxZQUFBO0lBQ0Esb0JBQUE7T0FBQSxpQkFBQTtJQUNBLGlDQUFBO09BQUEsOEJBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEZBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7OztFQUdFLGNBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59XG5cbi50b29sYmFySDEge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDEsIDIzOSwgMjU0KTtcbn1cblxuLnRvb2xiYXJIMUZpbmFsIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMycHg7XG4gIGJvcmRlci1ib3R0b206ICNhYjljZjcgMS41cHggc29saWQ7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4udG9vbGJhckgyIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQxLCAyMzksIDI1NCk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMnB4O1xuICBib3JkZXItYm90dG9tOiAjYWI5Y2Y3IDEuNXB4IHNvbGlkO1xuICBwYWRkaW5nLWJvdHRvbTogMC41dmg7XG59XG5cbi50b29sYmFySDJGaW5hbCB7XG4gIGJvcmRlci1ib3R0b206ICNhYjljZjcgMHB4IHNvbGlkO1xuICB6LWluZGV4OiAtMjtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogNS42cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDQ1JTtcbn1cblxuI2F2YXRhclByb2ZpbGUge1xuICB3aWR0aDogMi41cmVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50b29sYmFySDIgaDMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI25hbWVVU2VyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZXNldFZhbHVlc0NzcyB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4jZmlyc1RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZU5hdmlnYXRlIHtcbiAgY29sb3I6ICM0OGI1ZmI7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIzQ4YjVmYjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN0eHROb3RpZmljYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkQmlsbGJvYXJkIHtcbiAgaGVpZ2h0OiAxMnJlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkQmlsbGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDAsIDEzLCA2MSwgMC45KSAyMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xufVxuXG4uY2FyZEJpbGxib2FyZCAuaW1nQmlsbGJvYXJkLFxuLmNhcmRCaWxsYm9hcmRPbmUgLmltZ0JpbGxib2FyZCxcbiNhdmF0YXJQcm9maWxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbkBzdXBwb3J0cyAob2JqZWN0LWZpdDogY292ZXIpIHtcbiAgLmNhcmRCaWxsYm9hcmQgLmltZ0JpbGxib2FyZCxcbiAgLmNhcmRCaWxsYm9hcmRPbmUgLmltZ0JpbGxib2FyZCxcbiAgI2F2YXRhclByb2ZpbGUgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG59XG5cbi5jYXJkQmlsbGJvYXJkT25lIHtcbiAgaGVpZ2h0OiA5cmVtO1xufVxuXG4uY2FyZEJpbGxib2FyZE9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgwLCAxMywgNjEsIDAuOSkgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuLmRhdGVCaWxsYm9hcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kYXRlQmlsbGJvYXJkT25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGVCaWxsYm9hcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMC4zcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxN3JlbTtcbn1cblxuLnRpdGxlQmlsbGJvYXJkT25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiAwLjNyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5vQmlsbGJvYXJkcyB7XG4gIGNvbG9yOiAjNDhiNWZiO1xufVxuXG4ubm9CaWxsYm9hcmQge1xuICBwYWRkaW5nLWxlZnQ6IDAuOXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC45cmVtO1xufVxuXG4uZ3JpZE5ld3Mge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkTmV3cyB7XG4gIGhlaWdodDogNnJlbTtcbiAgd2lkdGg6IDE4cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uY2FyZE5ld3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jYXJkTmV3c09uZSB7XG4gIGhlaWdodDogMTByZW07XG59XG5cbi5jYXJkTmV3c09uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm5vTmV3cyB7XG4gIGNvbG9yOiAjNDhiNWZiO1xufVxuXG4ubm9OZXdzUHJpbmNpcGFsIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjlyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuOXJlbTtcbn1cblxuLmRhdGVOZXdzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZW5kRGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTcsIDIwMSwgMjUxLCAwLjUpO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xufVxuXG4uZW5kRGF0ZURheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNnB4O1xuICBsZWZ0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVuZERhdGVNb250aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVuZERhdGVPbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE3LCAyMDEsIDI1MSwgMC41KTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiAzLjhyZW07XG59XG5cbi5lbmREYXRlRGF5T25lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMGQzZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZW5kRGF0ZU1vbnRoT25lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC02cHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzAwMGQzZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGl0bGVOZXdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDExLjNyZW07XG4gIHBhZGRpbmc6IDAgMC4ycmVtIDAgMC43cmVtO1xufVxuXG4uZGVzY3JpcHRpb25OZXdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5kZXNjcmlwdGlvbk5ld3NPbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDVweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICMwMDBkM2Q7XG4gIHdpZHRoOiAyNzBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmZpcnN0Q2FyZE5ld3M6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZpcnN0Q2FyZE5ld3MgLnRpdGxlTmV3cyB7XG4gIGNvbG9yOiAjM2RiNWZmO1xufVxuXG4uZmlyc3RDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzLFxuLmZpcnN0Q2FyZE5ld3MgLmVuZERhdGUgLmVuZERhdGVEYXksXG4uZmlyc3RDYXJkTmV3cyAuZW5kRGF0ZSAuZW5kRGF0ZU1vbnRoIHtcbiAgY29sb3I6ICMwMDBkM2Q7XG59XG5cbi5zZWNvbmRDYXJkTmV3czpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RiNWZmO1xufVxuXG4uc2Vjb25kQ2FyZE5ld3MgLnRpdGxlTmV3cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2Vjb25kQ2FyZE5ld3MgLmRlc2NyaXB0aW9uTmV3cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGhpcmRDYXJkTmV3czpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwZDNkO1xufVxuXG4udGhpcmRDYXJkTmV3cyAudGl0bGVOZXdzIHtcbiAgY29sb3I6ICMzZGI1ZmY7XG59XG5cbi50aGlyZENhcmROZXdzIC5kZXNjcmlwdGlvbk5ld3Mge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI3F1YW50aXR5Tm90IHtcbiAgY29sb3I6ICM4OWQxZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZm9vdGVyIHtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEwNCwgMTA0LCAyMzkpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjJweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi50YWJzIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTA0LCAyMzksIDE0NCk7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAyMDtcbn1cblxuLnRodW1ibmFpbFNrZWxldG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwcmVtO1xuICB3aWR0aDogMThyZW07XG59XG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG4udG9vbGJhckgxIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQxLCAyMzksIDI1NCk7XG59XG5cbi50b29sYmFySDFGaW5hbCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMnB4O1xuICBib3JkZXItYm90dG9tOiAjYWI5Y2Y3IDEuNXB4IHNvbGlkO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLnRvb2xiYXJIMiB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI0MSwgMjM5LCAyNTQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzJweDtcbiAgYm9yZGVyLWJvdHRvbTogI2FiOWNmNyAxLjVweCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDAuNXZoO1xufVxuXG4udG9vbGJhckgyRmluYWwge1xuICBib3JkZXItYm90dG9tOiAjYWI5Y2Y3IDBweCBzb2xpZDtcbiAgei1pbmRleDogLTI7XG59XG5cbiNsb2dvIHtcbiAgd2lkdGg6IDUuNnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA0NSU7XG59XG5cbiNhdmF0YXJQcm9maWxlIHtcbiAgd2lkdGg6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udG9vbGJhckgyIGgzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbiNuYW1lVVNlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVzZXRWYWx1ZXNDc3Mge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuI2ZpcnNUaXRsZSB7XG4gIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJUaXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGVOYXZpZ2F0ZSB7XG4gIGNvbG9yOiAjNDhiNWZiO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICM0OGI1ZmI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdHh0Tm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZEJpbGxib2FyZCB7XG4gIGhlaWdodDogMTJyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZEJpbGxib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgwLCAxMywgNjEsIDAuOSkgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuLmNhcmRCaWxsYm9hcmQgLmltZ0JpbGxib2FyZCxcbi5jYXJkQmlsbGJvYXJkT25lIC5pbWdCaWxsYm9hcmQsXG4jYXZhdGFyUHJvZmlsZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5Ac3VwcG9ydHMgKG9iamVjdC1maXQ6IGNvdmVyKSB7XG4gIC5jYXJkQmlsbGJvYXJkIC5pbWdCaWxsYm9hcmQsXG4uY2FyZEJpbGxib2FyZE9uZSAuaW1nQmlsbGJvYXJkLFxuI2F2YXRhclByb2ZpbGUgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG59XG4uY2FyZEJpbGxib2FyZE9uZSB7XG4gIGhlaWdodDogOXJlbTtcbn1cblxuLmNhcmRCaWxsYm9hcmRPbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoMCwgMTMsIDYxLCAwLjkpIDIwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5kYXRlQmlsbGJvYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGF0ZUJpbGxib2FyZE9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlQmlsbGJvYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBib3R0b206IDFyZW07XG4gIGxlZnQ6IDAuM3JlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTdyZW07XG59XG5cbi50aXRsZUJpbGxib2FyZE9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMC4zcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub0JpbGxib2FyZHMge1xuICBjb2xvcjogIzQ4YjVmYjtcbn1cblxuLm5vQmlsbGJvYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjlyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuOXJlbTtcbn1cblxuLmdyaWROZXdzIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZE5ld3Mge1xuICBoZWlnaHQ6IDZyZW07XG4gIHdpZHRoOiAxOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmNhcmROZXdzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2FyZE5ld3NPbmUge1xuICBoZWlnaHQ6IDEwcmVtO1xufVxuXG4uY2FyZE5ld3NPbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5ub05ld3Mge1xuICBjb2xvcjogIzQ4YjVmYjtcbn1cblxuLm5vTmV3c1ByaW5jaXBhbCB7XG4gIHBhZGRpbmctbGVmdDogMC45cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjlyZW07XG59XG5cbi5kYXRlTmV3cyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogMC42cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmVuZERhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE3LCAyMDEsIDI1MSwgMC41KTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNnJlbTtcbn1cblxuLmVuZERhdGVEYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogM3B4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDA7XG59XG5cbi5lbmREYXRlTW9udGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDA7XG59XG5cbi5lbmREYXRlT25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNywgMjAxLCAyNTEsIDAuNSk7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogMy44cmVtO1xufVxuXG4uZW5kRGF0ZURheU9uZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDBkM2Q7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVuZERhdGVNb250aE9uZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNnB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICMwMDBkM2Q7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdGxlTmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBsZWZ0OiAycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiAxMS4zcmVtO1xuICBwYWRkaW5nOiAwIDAuMnJlbSAwIDAuN3JlbTtcbn1cblxuLmRlc2NyaXB0aW9uTmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NXB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uZGVzY3JpcHRpb25OZXdzT25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMDAwZDNkO1xuICB3aWR0aDogMjcwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5maXJzdENhcmROZXdzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5maXJzdENhcmROZXdzIC50aXRsZU5ld3Mge1xuICBjb2xvcjogIzNkYjVmZjtcbn1cblxuLmZpcnN0Q2FyZE5ld3MgLmRlc2NyaXB0aW9uTmV3cyxcbi5maXJzdENhcmROZXdzIC5lbmREYXRlIC5lbmREYXRlRGF5LFxuLmZpcnN0Q2FyZE5ld3MgLmVuZERhdGUgLmVuZERhdGVNb250aCB7XG4gIGNvbG9yOiAjMDAwZDNkO1xufVxuXG4uc2Vjb25kQ2FyZE5ld3M6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkYjVmZjtcbn1cblxuLnNlY29uZENhcmROZXdzIC50aXRsZU5ld3Mge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNlY29uZENhcmROZXdzIC5kZXNjcmlwdGlvbk5ld3Mge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRoaXJkQ2FyZE5ld3M6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGQzZDtcbn1cblxuLnRoaXJkQ2FyZE5ld3MgLnRpdGxlTmV3cyB7XG4gIGNvbG9yOiAjM2RiNWZmO1xufVxuXG4udGhpcmRDYXJkTmV3cyAuZGVzY3JpcHRpb25OZXdzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiNxdWFudGl0eU5vdCB7XG4gIGNvbG9yOiAjODlkMWZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmZvb3RlciB7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHJnYigxMDQsIDEwNCwgMjM5KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4udGFicyB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEwNCwgMjM5LCAxNDQpO1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMjA7XG59XG5cbi50aHVtYm5haWxTa2VsZXRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgd2lkdGg6IDE4cmVtO1xufSJdfQ== */";
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