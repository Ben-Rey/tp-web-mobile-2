(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-tab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab/tab.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab/tab.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>tab</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab/tab-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tab/tab-routing.module.ts ***!
  \*******************************************/
/*! exports provided: TabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPageRoutingModule", function() { return TabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab.page */ "./src/app/tab/tab.page.ts");




const routes = [
    {
        path: '',
        component: _tab_page__WEBPACK_IMPORTED_MODULE_3__["TabPage"]
    }
];
let TabPageRoutingModule = class TabPageRoutingModule {
};
TabPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabPageRoutingModule);



/***/ }),

/***/ "./src/app/tab/tab.module.ts":
/*!***********************************!*\
  !*** ./src/app/tab/tab.module.ts ***!
  \***********************************/
/*! exports provided: TabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPageModule", function() { return TabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-routing.module */ "./src/app/tab/tab-routing.module.ts");
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab.page */ "./src/app/tab/tab.page.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");








let TabPageModule = class TabPageModule {
};
TabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabPageRoutingModule"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
        ],
        declarations: [_tab_page__WEBPACK_IMPORTED_MODULE_6__["TabPage"]]
    })
], TabPageModule);



/***/ }),

/***/ "./src/app/tab/tab.page.scss":
/*!***********************************!*\
  !*** ./src/app/tab/tab.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi90YWIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab/tab.page.ts":
/*!*********************************!*\
  !*** ./src/app/tab/tab.page.ts ***!
  \*********************************/
/*! exports provided: TabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPage", function() { return TabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabPage = class TabPage {
    constructor() { }
    ngOnInit() {
    }
};
TabPage.ctorParameters = () => [];
TabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab/tab.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab.page.scss */ "./src/app/tab/tab.page.scss")).default]
    })
], TabPage);



/***/ })

}]);
//# sourceMappingURL=tab-tab-module-es2015.js.map