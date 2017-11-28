webpackJsonp([6],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmregistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userRegistration_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createaccount_createaccount__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ConfirmregistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConfirmregistrationPage = (function () {
    function ConfirmregistrationPage(navCtrl, navParams, userRegistration, navParam, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userRegistration = userRegistration;
        this.navParam = navParam;
        this.alertCtrl = alertCtrl;
    }
    ConfirmregistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmregistrationPage');
    };
    // Confirm register button click by entering varification codes you got on email. 
    ConfirmregistrationPage.prototype.onConfirmRegistration = function () {
        console.log("Confirming registration");
        this.userRegistration.confirmRegistration(this.navParam.get("email"), this.confirmationCode, this);
    };
    // Service callback response .. 
    ConfirmregistrationPage.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.doAlert("Confirmation", message);
        }
        else {
            console.log("Entered ConfirmRegistrationComponent");
            var email = this.navParam.get("email");
            if (email != null)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {
                    'email': email
                });
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
    };
    // Show common alert messages. ...
    ConfirmregistrationPage.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    // redirent to Signup page button click
    ConfirmregistrationPage.prototype.navToRegister = function () {
        // redirect to signup page.. 
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__createaccount_createaccount__["a" /* CreateaccountPage */]);
    };
    // redirent to login page button click
    ConfirmregistrationPage.prototype.navToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return ConfirmregistrationPage;
}());
ConfirmregistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirmregistration',template:/*ion-inline-start:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\confirmregistration\confirmregistration.html"*/'\n<ion-header>\n  <!-- use ion-toolbar for a normal toolbar and ion-navbar for navigation -->\n  <ion-toolbar>\n    <ion-buttons left>\n      <!-- left aligned content here -->\n      <ion-icon class="ion-icon" name="md-arrow-back" color="light"></ion-icon>\n    </ion-buttons>\n\n    <ion-title>\n      Confirm Account\n    </ion-title>\n\n    <ion-buttons right>\n      <!-- left aligned content here -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Controls -->\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <p style="text-align:center">\n          A varyfication code has been sent to the email id. Please enter code here to confirm your user registration. If you not get varification code. Click on Resend Code Button.</p>\n      </ion-item>\n    <ion-item>\n        <ion-label floating>Confirmation Code</ion-label>\n        <ion-input [(ngModel)]="confirmationCode" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <button ion-button block large color="button-color"  (click)="onConfirmRegistration()">Confirm</button>\n    </ion-item>\n\n  </ion-list>\n\n\n  <!-- Showing Three option for resend/login/signup page -->\n  <ion-grid>\n    <ion-row>\n      <ion-col width-30>\n        <button ion-button color="primary" small (click)="navToResendCode()">Resend Code</button>\n      </ion-col>\n      <ion-col width-30>\n        <button ion-button color="dark" small (click)="navToRegister()">Registration</button>\n      </ion-col>\n      <ion-col width-30>\n        <button ion-button color="danger" small (click)="navToLogin()">Login</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\confirmregistration\confirmregistration.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_userRegistration_service__["a" /* UserRegistrationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ConfirmregistrationPage);

//# sourceMappingURL=confirmregistration.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpassowrdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgotpassowrdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForgotpassowrdPage = (function () {
    function ForgotpassowrdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotpassowrdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpassowrdPage');
    };
    // Back button click event
    ForgotpassowrdPage.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    return ForgotpassowrdPage;
}());
ForgotpassowrdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgotpassowrd',template:/*ion-inline-start:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\forgotpassowrd\forgotpassowrd.html"*/'<ion-header>\n    <!-- use ion-toolbar for a normal toolbar and ion-navbar for navigation -->\n    <ion-toolbar>\n        <ion-buttons left clear>\n            <button (click)="onBack()" style="background-color:transparent">\n                <ion-icon class="ion-icon" name="arrow-round-back" color="light"></ion-icon>\n            </button>\n        </ion-buttons>\n     \n  \n      <ion-title>\n        Forgot Password\n      </ion-title>\n      <ion-buttons right>\n          \n      </ion-buttons>\n      \n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input [(ngModel)]="email" type="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <button ion-button block outline large (click)="onNext()">Continue</button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\forgotpassowrd\forgotpassowrd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ForgotpassowrdPage);

//# sourceMappingURL=forgotpassowrd.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideIntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SlideIntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SlideIntroPage = (function () {
    function SlideIntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SlideIntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlideIntroPage');
    };
    SlideIntroPage.prototype.navHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SlideIntroPage;
}());
SlideIntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slide-intro',template:/*ion-inline-start:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\slide-intro\slide-intro.html"*/'<ion-content  class="back" no-bounce>\n \n<!-- Containing Sliders Intro Slides -->\n<ion-slides pager="true" class="sd_bottom">\n \n  <ion-slide style="margin-bottom:30px">\n      <h3>Mobile Web App Kit</h3>\n    <img src="assets/custom/img/logo.svg" alt="Welcome to Nectar" class="img_style" />\n    <p>Mobile Web App Kit</p>\n  </ion-slide>\n \n  <ion-slide>\n      <h3>Modern and Responsive</h3>\n\n    <img src="assets/custom/img/responsive.gif" alt="Modern & Responsive" class="img_style1"/>\n    <p style="text-align: center">Nector is designed with modern trends and techniques in mind. It will look smashing on every device</p>\n  </ion-slide>\n \n  <ion-slide>\n      <h3>Mobile Web App Kit</h3>\n      <img src="assets/custom/img/customize.gif" alt="Easily Customizable" class="img_style2" />\n      <p style="text-align: center">Easily customize Nectar to suit your needs and bring your product to life</p>\n    \n   \n  </ion-slide>\n\n  <ion-slide>\n      <H3>Mobile Web App Kit</H3>\n   \n        <img src="assets/custom/img/cordova.svg" alt="Easily Customizable" class="img_style" />\n        <p style="text-align: center">\n          Turn your mobile web app  into native mobile app for Android, iOS or Windows using Apache Cordova</p>\n    \n   \n  </ion-slide>\n \n  \n</ion-slides>\n\n<ion-row class="bottom">\n  \n    <button class="button_style" ion-button block color="button-color" (click)="navHome()">Start Using My App</button>\n  \n</ion-row>\n\n</ion-content>'/*ion-inline-end:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\slide-intro\slide-intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SlideIntroPage);

//# sourceMappingURL=slide-intro.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blank/blank.module": [
		280,
		0
	],
	"../pages/confirmregistration/confirmregistration.module": [
		275,
		5
	],
	"../pages/createaccount/createaccount.module": [
		276,
		4
	],
	"../pages/forgotpassowrd/forgotpassowrd.module": [
		277,
		3
	],
	"../pages/login/login.module": [
		278,
		2
	],
	"../pages/slide-intro/slide-intro.module": [
		279,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _IDENTITY_POOL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _USER_POOL_ID; });
/* unused harmony export _CLIENT_ID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _MOBILE_ANALYTICS_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _POOL_DATA; });
// User Cognito Pool Id Details here ...
var _REGION = "us-east-1";
// export let _IDENTITY_POOL_ID = "us-east-1:7d7b20ba-123d-48f2-9c1c-e7c3bb361dee";
// export let _USER_POOL_ID = "us-east-1_DT8dtfRq6";
// export let _CLIENT_ID = "33vhdc1f80ee9mcf7l1v2mtudp";
// export let _MOBILE_ANALYTICS_APP_ID = "8ed115bcfac94dfa8e364aa5ef201849";
var _IDENTITY_POOL_ID = "us-east-1:7d7b20ba-123d-48f2-9c1c-e7c3bb361dee";
var _USER_POOL_ID = "us-east-1_Y3X7bQZsw";
var _CLIENT_ID = "ul1tks7reupq7822h30eflbcs";
var _MOBILE_ANALYTICS_APP_ID = "8ed115bcfac94dfa8e364aa5ef201849";
var _POOL_DATA = {
    UserPoolId: _USER_POOL_ID,
    ClientId: _CLIENT_ID
};
//# sourceMappingURL=properties.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _USER_LOGOUT_EVENT */
/* unused harmony export _USER_LOGIN_EVENT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_index__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var _USER_LOGOUT_EVENT = 'user:logout';
var _USER_LOGIN_EVENT = 'user:login';
var EventsService = (function () {
    function EventsService(events) {
        this.events = events;
    }
    EventsService.prototype.sendLoggedInEvent = function () {
        console.log("Publishing login event");
        this.events.publish(_USER_LOGIN_EVENT);
    };
    EventsService.prototype.sendLogoutEvent = function () {
        console.log("Publishing logout event");
        this.events.publish(_USER_LOGOUT_EVENT);
    };
    return EventsService;
}());
EventsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_index__["b" /* Events */]])
], EventsService);

//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_createaccount_createaccount__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_slide_intro_slide_intro__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_forgotpassowrd_forgotpassowrd__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_userLogin_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_cognito_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_aws_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_userParameters_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_events_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_userRegistration_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_confirmregistration_confirmregistration__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// Declared all Modules included in app ...
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_slide_intro_slide_intro__["a" /* SlideIntroPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_forgotpassowrd_forgotpassowrd__["a" /* ForgotpassowrdPage */], __WEBPACK_IMPORTED_MODULE_17__pages_confirmregistration_confirmregistration__["a" /* ConfirmregistrationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/confirmregistration/confirmregistration.module#ConfirmregistrationPageModule', name: 'ConfirmregistrationPage', segment: 'confirmregistration', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/createaccount/createaccount.module#CreateaccountPageModule', name: 'CreateaccountPage', segment: 'createaccount', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgotpassowrd/forgotpassowrd.module#ForgotpassowrdPageModule', name: 'ForgotpassowrdPage', segment: 'forgotpassowrd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/slide-intro/slide-intro.module#SlideIntroPageModule', name: 'SlideIntroPage', segment: 'slide-intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blank/blank.module#BlankPageModule', name: 'BlankPage', segment: 'blank', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        // Entry components ...
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_slide_intro_slide_intro__["a" /* SlideIntroPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_forgotpassowrd_forgotpassowrd__["a" /* ForgotpassowrdPage */], __WEBPACK_IMPORTED_MODULE_17__pages_confirmregistration_confirmregistration__["a" /* ConfirmregistrationPage */]
        ],
        //provideres used in app
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_cognito_service__["a" /* CognitoUtil */],
            __WEBPACK_IMPORTED_MODULE_13__providers_aws_service__["a" /* AwsUtil */],
            __WEBPACK_IMPORTED_MODULE_11__providers_userLogin_service__["a" /* UserLoginService */],
            __WEBPACK_IMPORTED_MODULE_14__providers_userParameters_service__["a" /* UserParametersService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_userRegistration_service__["a" /* UserRegistrationService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_events_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_cognito_service__["b" /* RegistrationUser */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_slide_intro_slide_intro__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_slide_intro_slide_intro__["a" /* SlideIntroPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var StorageProvider = (function () {
    function StorageProvider(http) {
        this.http = http;
        console.log('Hello StorageProvider Provider');
    }
    return StorageProvider;
}());
StorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], StorageProvider);

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Stuff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwsUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognito_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properties_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userLogin_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Stuff = (function () {
    function Stuff() {
    }
    return Stuff;
}());

var AwsUtil = (function () {
    function AwsUtil(userLogin, cUtil) {
        this.userLogin = userLogin;
        this.cUtil = cUtil;
    }
    /**
     * This is the method that needs to be called in order to init the aws global creds
     */
    AwsUtil.prototype.initAwsService = function () {
        console.log("Running initAwsService()");
        AWSCognito.config.region = __WEBPACK_IMPORTED_MODULE_2__properties_service__["d" /* _REGION */];
        AWS.config.region = __WEBPACK_IMPORTED_MODULE_2__properties_service__["d" /* _REGION */];
        var options = {
            appId: __WEBPACK_IMPORTED_MODULE_2__properties_service__["b" /* _MOBILE_ANALYTICS_APP_ID */],
        };
        var mobileAnalyticsClient = new AMA.Manager(options);
        mobileAnalyticsClient.submitEvents();
        // First check if the user is authenticated already
        var mythis = this;
        this.userLogin.isAuthenticated({
            isLoggedInCallback: function (message, loggedIn) {
                mythis.setupAWS(loggedIn);
            }
        });
    };
    /**
     * Sets up the AWS global params
     *
     * @param isLoggedIn
     * @param callback
     */
    AwsUtil.prototype.setupAWS = function (isLoggedIn) {
        console.log("in setupAWS()");
        var mythis = this;
        if (isLoggedIn) {
            console.log("User is logged in");
            this.cUtil.getIdToken({
                callback: function () {
                },
                callbackWithParam: function (idToken) {
                    console.log("idJWT Token: " + idToken);
                    mythis.addCognitoCredentials(idToken);
                }
            });
            console.log("Retrieving the id token");
        }
        else {
            console.log("User is not logged in. ");
            AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: __WEBPACK_IMPORTED_MODULE_2__properties_service__["a" /* _IDENTITY_POOL_ID */]
            });
        }
    };
    AwsUtil.prototype.addCognitoCredentials = function (idTokenJwt) {
        console.log("in addCognitoCredentials");
        var params = this.getCognitoParametersForIdConsolidation(idTokenJwt);
        AWS.config.credentials = new AWS.CognitoIdentityCredentials(params);
        AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials(params);
        console.log("Getting the credentials class");
        // AWS.config.credentials.get(function (err) {
        //   if (!err) {
        //
        //   }
        // });
    };
    AwsUtil.prototype.getCognitoParametersForIdConsolidation = function (idTokenJwt) {
        console.log("enter getCognitoParametersForIdConsolidation()");
        var url = 'cognito-idp.' + __WEBPACK_IMPORTED_MODULE_2__properties_service__["d" /* _REGION */].toLowerCase() + '.amazonaws.com/' + __WEBPACK_IMPORTED_MODULE_2__properties_service__["e" /* _USER_POOL_ID */];
        console.log("ur: " + url);
        var logins = [];
        logins[url] = idTokenJwt;
        var params = {
            IdentityPoolId: __WEBPACK_IMPORTED_MODULE_2__properties_service__["a" /* _IDENTITY_POOL_ID */],
            Logins: logins
        };
        return params;
    };
    return AwsUtil;
}());
AwsUtil.firstLogin = false;
AwsUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__userLogin_service__["a" /* UserLoginService */], __WEBPACK_IMPORTED_MODULE_1__cognito_service__["a" /* CognitoUtil */]])
], AwsUtil);

//# sourceMappingURL=aws.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserParametersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognito_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserParametersService = (function () {
    function UserParametersService(cUtil) {
        this.cUtil = cUtil;
    }
    UserParametersService.prototype.getParameters = function (callback) {
        var cognitoUser = this.cUtil.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err)
                    console.log("Couldn't retrieve the user");
                else {
                    cognitoUser.getUserAttributes(function (err, result) {
                        if (err) {
                            console.log("in getParameters: " + err);
                        }
                        else {
                            callback.callbackWithParam(result);
                        }
                    });
                }
            });
        }
        else {
            callback.callbackWithParam(null);
        }
    };
    UserParametersService.prototype.getParameter = function (name, callback) {
    };
    return UserParametersService;
}());
UserParametersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cognito_service__["a" /* CognitoUtil */]])
], UserParametersService);

//# sourceMappingURL=userParameters.service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RegistrationUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitoUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__properties_service__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationUser = (function () {
    function RegistrationUser() {
    }
    return RegistrationUser;
}());

var CognitoUtil = (function () {
    function CognitoUtil() {
        console.log("CognitoUtil constructor");
    }
    CognitoUtil.prototype.getUserPool = function () {
        return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(__WEBPACK_IMPORTED_MODULE_1__properties_service__["c" /* _POOL_DATA */]);
    };
    CognitoUtil.prototype.getCurrentUser = function () {
        return this.getUserPool().getCurrentUser();
    };
    CognitoUtil.prototype.getCognitoIdentity = function () {
        return AWS.config.credentials.identityId;
    };
    CognitoUtil.prototype.getAccessToken = function (callback) {
        if (callback == null) {
            throw ("callback in getAccessToken is null...returning");
        }
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getAccessToken().getJwtToken());
                }
            }
        });
    };
    CognitoUtil.prototype.getIdToken = function (callback) {
        if (callback == null) {
            throw ("callback in getIdToken is null...returning");
        }
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getIdToken().getJwtToken());
                }
                else {
                    console.log("Got the id token, but the session isn't valid");
                }
            }
        });
    };
    CognitoUtil.prototype.getRefreshToken = function (callback) {
        if (callback == null) {
            throw ("callback in getRefreshToken is null...returning");
        }
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("Can't set the credentials:" + err);
                callback.callbackWithParam(null);
            }
            else {
                if (session.isValid()) {
                    callback.callbackWithParam(session.getRefreshToken());
                }
            }
        });
    };
    return CognitoUtil;
}());
CognitoUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CognitoUtil);

//# sourceMappingURL=cognito.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassowrd_forgotpassowrd__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userLogin_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.type = 'password';
        this.showPass = false;
    }
    LoginPage.prototype.isLoggedInCallback = function (message, loggedIn) {
        throw new Error("Method not implemented.");
    };
    LoginPage.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.doAlert("Error", message);
            console.log("result: " + message);
        }
        else {
            console.log("Redirect to ControlPanelComponent");
            alert("Login Successfull");
            //this.nav.setRoot(ControlPanelComponent);
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.navToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__createaccount_createaccount__["a" /* CreateaccountPage */]);
    };
    // Forgot Password link click event
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassowrd_forgotpassowrd__["a" /* ForgotpassowrdPage */]);
    };
    // login button click event
    LoginPage.prototype.onLogin = function () {
        if (this.userEmail == null) {
            this.doAlert("Alert", "Please Enter Email Id");
            return;
        }
        if (this.password == null) {
            this.doAlert("Alert", "Please Enter Email Id");
            return;
        }
        this.userService.authenticate(this.userEmail, this.password, this);
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\login\login.html"*/'\n\n<!-- Page content inputs -->\n<ion-content class="background">\n    \n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n        <!-- logo on top of page -->\n        <ion-item>\n            <ion-row>\n                \n                <ion-col>\n                  <img src="assets/custom/img/logo.svg" height="160px" width="160%">\n                </ion-col>\n                \n              </ion-row>\n        </ion-item>\n\n         <!--Adding Textfields for user input  -->\n        \n         <ion-item >\n					<ion-label color="dark" item-left>\n                  <ion-icon name="md-mail"></ion-icon>\n                </ion-label>\n              <ion-input class="ion-input" type="text" placeholder="User Name" [(ngModel)]="userEmail" name="userEmail"></ion-input>\n          </ion-item>\n\n          <!-- Password Field with show/hide option controls-->\n          <ion-item>\n              <ion-label color="dark" item-left>\n                  <ion-icon name="md-lock"></ion-icon>\n                </ion-label>\n              <ion-input class="ion-input" [(ngModel)]="password" type="{{type}}" placeholder="Password" name="password"></ion-input>\n              \n              <button  class="ion-input-button" *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="md-eye-off"></ion-icon></button>\n              <button  class="ion-input-button" *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="md-eye"></ion-icon></button>\n              \n          </ion-item>\n      <!--Forgot Password Link -->\n          <ion-row>\n               <ion-col></ion-col>\n               <ion-col>\n                  <button ion-button clear color="button-color" style="text-align:right" (click)="forgotPassword()">Forgot Password</button>\n               </ion-col>\n             </ion-row>\n            <!--Login Button -->\n				<button style="height:48px" ion-button block color="button-color" (click)="onLogin()">Log in</button>\n			\n			</ion-list>\n		</ion-card-content>\n  </ion-card>\n  <!-- Create New Account Link -->\n  <button class="bottom" ion-button clear full color="dark" (click)="navToSignup()">Don\'t have an Account?  <b><p><font color="#009688">&nbsp;Sign Up</font></p></b></button>\n</ion-content>\n<!--End content -->'/*ion-inline-end:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_userLogin_service__["a" /* UserLoginService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cognito_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userRegistration_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmregistration_confirmregistration__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateaccountPage = (function () {
    function CreateaccountPage(navCtrl, navParams, userRegistration, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userRegistration = userRegistration;
        this.alertCtrl = alertCtrl;
        this.type = 'password';
        this.showPass = false;
        this.registrationUser = new __WEBPACK_IMPORTED_MODULE_2__providers_cognito_service__["b" /* RegistrationUser */]();
    }
    CreateaccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateaccountPage');
    };
    CreateaccountPage.prototype.navToLogin = function () {
        this.navCtrl.pop();
    };
    // Create Account button click ...
    CreateaccountPage.prototype.createAccount = function (form) {
        if (this.username == null) {
            alert("Please enter user name");
            return;
        }
        if (this.useremail == null) {
            alert("Please enter user email");
            return;
        }
        if (this.password == null) {
            alert("Please enter password");
            return;
        }
        // Asigning user value ... 
        this.registrationUser.email = this.useremail;
        this.registrationUser.name = this.username;
        this.registrationUser.password = this.password;
        // Call user registration 
        this.userRegistration.register(this.registrationUser, this);
    };
    // Show and Hide password accordingly 
    CreateaccountPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    // Registration Response on callback method
    CreateaccountPage.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.doAlert("Registration", message);
        }
        else {
            //success
            console.log("in callback...result: " + result);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__confirmregistration_confirmregistration__["a" /* ConfirmregistrationPage */], {
                'username': result.user.username,
                'email': this.registrationUser.email
            });
        }
    };
    // Show Commont alert messages
    CreateaccountPage.prototype.doAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    CreateaccountPage.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    return CreateaccountPage;
}());
CreateaccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createaccount',template:/*ion-inline-start:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\createaccount\createaccount.html"*/'\n<!-- Define Navigation Bar -->\n<ion-header>\n  <!-- use ion-toolbar for a normal toolbar and ion-navbar for navigation -->\n  <ion-toolbar>\n      <ion-buttons left clear>\n          <button (click)="onBack()" style="background-color:transparent">\n              <ion-icon class="ion-icon" name="arrow-round-back" color="light"></ion-icon>\n          </button>\n      </ion-buttons>\n   \n\n    <ion-title>\n      Signup\n    </ion-title>\n    <ion-buttons right>\n        \n      </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<!-- Define Page content controles -->\n<ion-content class="background">\n<!--Page Logo -->\n<ion-row>\n<ion-col>\n  <img src="assets/custom/img/logo.svg" height="160px" width="160%">\n</ion-col>\n</ion-row>\n\n  <!--Start Cards Content -->\n<ion-card>\n<ion-card-content>\n  <ion-list>\n<!--Add User input controls here -->\n    <ion-item >\n      <ion-label color="dark" item-left>\n        <ion-icon name="person"></ion-icon>\n      </ion-label>\n      <ion-input class="ion-input" type="text" placeholder="Name" [(ngModel)]="username" name="username" ></ion-input>\n    </ion-item>\n      \n    <ion-item>\n      <ion-label color="dark" item-left>\n      <ion-icon name="md-mail"></ion-icon>\n      </ion-label>\n      <ion-input class="ion-input" type="text" placeholder="Email" [(ngModel)]="useremail" name="useremail" >\n      </ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label color="dark" item-left>\n      <ion-icon name="md-phone-portrait"></ion-icon>\n      </ion-label>\n      <ion-input class="ion-input" type="phone" placeholder="Mobile" [(ngModel)]="usermobile" name="usermobile" >\n      </ion-input>\n    </ion-item> -->\n\n<!--Password controls with show Hide Functionality -->\n    <ion-item>\n      <ion-label color="dark" item-left>\n      <ion-icon name="md-lock"></ion-icon>\n      </ion-label>\n      <ion-input class="ion-input" [(ngModel)]="password" type="{{type}}" placeholder="Password" name="password"></ion-input>\n      <button  class="ion-input-button" *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="md-eye-off"></ion-icon></button>\n      <button  class="ion-input-button" *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="md-eye"></ion-icon></button>\n    </ion-item>\n      \n        <!--Create Account Button -->\n      <button class="button_style" ion-button block color="button-color" (click)="createAccount()">Signup</button>\n  \n  </ion-list>\n</ion-card-content>\n</ion-card>\n<button class="bottom" ion-button clear full color="dark" (click)="navToLogin()">Already have an Account?  <b><p><font color="#009688">&nbsp;Log In</font></p></b></button>\n</ion-content>\n<!--Close -->'/*ion-inline-end:"F:\vinayak\learnIonic2\client_doc\Appi4Spires\src\pages\createaccount\createaccount.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_userRegistration_service__["a" /* UserRegistrationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CreateaccountPage);

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cognito_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRegistrationService = (function () {
    function UserRegistrationService(cUtil) {
        this.cUtil = cUtil;
    }
    UserRegistrationService.prototype.register = function (user, callback) {
        console.log("user: " + user);
        var attributeList = [];
        var dataEmail = {
            Name: 'email',
            Value: user.email
        };
        var dataNickname = {
            Name: 'nickname',
            Value: user.name
        };
        attributeList.push(new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail));
        attributeList.push(new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataNickname));
        //  attributeList.push(new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber));
        this.cUtil.getUserPool().signUp(user.email, user.password, attributeList, null, function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                console.log("registered user: " + result);
                callback.cognitoCallback(null, result);
            }
        });
    };
    UserRegistrationService.prototype.confirmRegistration = function (username, confirmationCode, callback) {
        var userData = {
            Username: username,
            Pool: this.cUtil.getUserPool()
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                callback.cognitoCallback(null, result);
            }
        });
    };
    UserRegistrationService.prototype.resendCode = function (username, callback) {
        var userData = {
            Username: username,
            Pool: this.cUtil.getUserPool()
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                callback.cognitoCallback(null, result);
            }
        });
    };
    return UserRegistrationService;
}());
UserRegistrationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__cognito_service__["a" /* CognitoUtil */]])
], UserRegistrationService);

//# sourceMappingURL=userRegistration.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognito_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_service__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginService = (function () {
    function UserLoginService(cUtil, eventService) {
        this.cUtil = cUtil;
        this.eventService = eventService;
        console.log("eventservice1: " + eventService);
    }
    UserLoginService.prototype.authenticate = function (username, password, callback) {
        var mythis = this;
        // Need to provide placeholder keys unless unauthorised user access is enabled for user pool
        AWSCognito;
        AWSCognito.config.update({ accessKeyId: 'anything', secretAccessKey: 'anything' });
        var authenticationData = {
            Username: username,
            Password: password,
        };
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        var userData = {
            Username: username,
            Pool: this.cUtil.getUserPool()
        };
        console.log("Authenticating the user");
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                callback.cognitoCallback(null, result);
                mythis.eventService.sendLoggedInEvent();
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
        });
    };
    UserLoginService.prototype.forgotPassword = function (username, callback) {
        var userData = {
            Username: username,
            Pool: this.cUtil.getUserPool()
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.forgotPassword({
            onSuccess: function (result) {
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
            inputVerificationCode: function () {
                callback.cognitoCallback(null, null);
            }
        });
    };
    UserLoginService.prototype.confirmNewPassword = function (email, verificationCode, password, callback) {
        var userData = {
            Username: email,
            Pool: this.cUtil.getUserPool()
        };
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.confirmPassword(verificationCode, password, {
            onSuccess: function (result) {
                callback.cognitoCallback(null, result);
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            }
        });
    };
    UserLoginService.prototype.logout = function () {
        console.log("Logging out");
        this.cUtil.getCurrentUser().signOut();
        this.eventService.sendLogoutEvent();
    };
    UserLoginService.prototype.isAuthenticated = function (callback) {
        if (callback == null)
            throw ("Callback in isAuthenticated() cannot be null");
        console.log("Getting the current user");
        var cognitoUser = this.cUtil.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    console.log("Couldn't get the session: " + err, err.stack);
                    callback.isLoggedInCallback(err, false);
                }
                else {
                    console.log("Session is valid: " + session.isValid());
                    callback.isLoggedInCallback(err, session.isValid());
                }
            });
        }
        else {
            callback.isLoggedInCallback("Can't retrieve the CurrentUser", false);
        }
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */]])
], UserLoginService);

//# sourceMappingURL=userLogin.service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map