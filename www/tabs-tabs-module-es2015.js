(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\" class=\"tabs\">\r\n\r\n    <ion-tab-button tab=\"home\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      <ion-label>Inicio</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <!-- <ion-tab-button (click)=\"presentPopover($event)\">\r\n      <ion-icon name=\"notifications-outline\"></ion-icon>\r\n      <ion-label>Mis notificaciones</ion-label>\r\n      <ion-badge id=quantityNotifications>99+</ion-badge>\r\n    </ion-tab-button> -->\r\n\r\n    <ion-tab-button tab=\"notification\">\r\n      <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\r\n      <ion-label>Portería</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"neighbour\" (click)=\"updateData()\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>Mi perfil</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>");

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
/* harmony default export */ __webpack_exports__["default"] = (".tabs {\n  height: 4.4rem !important;\n  --background: rgb(104, 104, 239);\n  border-top-left-radius: 1.5rem;\n  border-top-right-radius: 1.5rem;\n}\n\nion-tab-button ion-icon {\n  color: #494db9;\n}\n\nion-tab-button ion-label {\n  visibility: hidden;\n}\n\n#quantityNotifications {\n  --background: rgb(64, 174, 253) !important;\n  width: 2rem;\n  height: 1rem;\n  font-size: 0.7rem;\n  margin-left: -6px !important;\n  margin-bottom: -5px !important;\n  --background: rgb(64, 174, 253) !important;\n  font-size: 0.7rem;\n  margin-left: -0.3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXEFzdXNcXERvY3VtZW50c1xcV29ya1xcRGVzYXJyb2xsb0VmXFxVbmlkYXBwVmVjaW5vcy1Nb3ZpbC9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREdJO0VBQ0ksY0FBQTtBQ0FSOztBREVJO0VBQ0ksa0JBQUE7QUNBUjs7QURJQTtFQUNJLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyB7XHJcbiAgICBoZWlnaHQ6IDQuNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTA0LCAxMDQsIDIzOSk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xyXG59XHJcblxyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHJnYig3MywgNzcsIDE4NSk7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuI3F1YW50aXR5Tm90aWZpY2F0aW9ucyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYig2NCwgMTc0LCAyNTMpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNjQsIDE3NCwgMjUzKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtLjNyZW0gIWltcG9ydGFudDtcclxufVxyXG4iLCIudGFicyB7XG4gIGhlaWdodDogNC40cmVtICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogcmdiKDEwNCwgMTA0LCAyMzkpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XG59XG5cbmlvbi10YWItYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICM0OTRkYjk7XG59XG5pb24tdGFiLWJ1dHRvbiBpb24tbGFiZWwge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNxdWFudGl0eU5vdGlmaWNhdGlvbnMge1xuICAtLWJhY2tncm91bmQ6IHJnYig2NCwgMTc0LCAyNTMpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBtYXJnaW4tbGVmdDogLTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogcmdiKDY0LCAxNzQsIDI1MykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC4zcmVtICFpbXBvcnRhbnQ7XG59Il19 */");

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