(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" class=\"tabs\">\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button (click)=\"presentPopover($event)\">\n      <ion-icon name=\"notifications-outline\"></ion-icon>\n      <ion-label>Mis notificaciones</ion-label>\n      <ion-badge id=quantityNotifications>99+</ion-badge>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"notification\">\n      <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n      <ion-label>Portería</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"neighbour\" (click)=\"updateData()\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Mi perfil</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/guards/auth.guard */ "./src/utils/guards/auth.guard.ts");





const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule),
                canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'billboard',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../billboard/billboard.module */ "./src/app/billboard/billboard.module.ts")).then(m => m.BillboardModule),
                canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'news',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../news/news.module */ "./src/app/news/news.module.ts")).then(m => m.NewsModule),
                canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'notification',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../notifications/notifications.module */ "./src/app/notifications/notifications.module.ts")).then(m => m.NotificationsModule),
                canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'neighbour',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../neighbour/neighbour.module */ "./src/app/neighbour/neighbour.module.ts")).then(m => m.NeighbourModule),
                canLoad: [src_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabs {\n  height: 4.4rem !important;\n  --background: rgb(104, 104, 239);\n  border-top-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n}\n\nion-tab-button ion-icon {\n  color: #494db9;\n}\n\nion-tab-button ion-label {\n  visibility: hidden;\n}\n\n#quantityNotifications {\n  --background: rgb(64, 174, 253) !important;\n  width: 2rem;\n  height: 1rem;\n  font-size: 0.7rem;\n  margin-left: -6px !important;\n  margin-bottom: -5px !important;\n  --background: rgb(64, 174, 253) !important;\n  font-size: 0.7rem;\n  margin-left: -0.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rlc2Fycm9sbGFkb3IvRG9jdW1lbnRzL3VuaWRhcHAvdW5pZGFwcFZlY2lub3MtbW92aWwvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURHSTtFQUNJLGNBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0FDQVI7O0FESUE7RUFDSSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICAgIGhlaWdodDogNC40cmVtICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTA0LCAxMDQsIDIzOSk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiByZ2IoNzMsIDc3LCAxODUpO1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxufVxuXG4jcXVhbnRpdHlOb3RpZmljYXRpb25zIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYig2NCwgMTc0LCAyNTMpICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNjQsIDE3NCwgMjUzKSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0uM3JlbSAhaW1wb3J0YW50O1xufVxuIiwiLnRhYnMge1xuICBoZWlnaHQ6IDQuNHJlbSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHJnYigxMDQsIDEwNCwgMjM5KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xufVxuXG5pb24tdGFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiAjNDk0ZGI5O1xufVxuaW9uLXRhYi1idXR0b24gaW9uLWxhYmVsIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jcXVhbnRpdHlOb3RpZmljYXRpb25zIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNjQsIDE3NCwgMjUzKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHJnYig2NCwgMTc0LCAyNTMpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBtYXJnaW4tbGVmdDogLTAuM3JlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_components_in_building_in_building_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/in-building/in-building.component */ "./src/app/shared/components/in-building/in-building.component.ts");
/* harmony import */ var _shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/shared-services/shared.service */ "./src/app/shared/services/shared-services/shared.service.ts");





let TabsPage = class TabsPage {
    constructor(popoverController, sharedService) {
        this.popoverController = popoverController;
        this.sharedService = sharedService;
    }
    ngOnInit() {
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _shared_components_in_building_in_building_component__WEBPACK_IMPORTED_MODULE_3__["InBuildingComponent"],
                cssClass: 'inBuilding',
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    updateData() {
        // ------ Se envía el true para indicar que el usuario inicia el componente desde el menu
        this.sharedService.setData(true);
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _shared_services_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map