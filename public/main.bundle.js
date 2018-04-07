webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ChatService } from './services/chat.service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_15__services_websocket_service__["a" /* WebsocketService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".frame {\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\nimg {\r\n  max-height: 100%;\r\n  max-width: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\n.box {\r\n  float: center;\r\n  width: 100%;\r\n  padding: 20px;\r\n  background-color: rgb(233, 236, 239);\r\n  border-radius: 4px;\r\n}\r\n\r\n.text {\r\n  text-align: center;\r\n  float: center;\r\n  padding-top: 10px;\r\n  margin-top: 10px;\r\n  border-top-style: solid;\r\n  border-top-width: 1px;\r\n  border-top-color: rgb(200, 200, 200);\r\n}\r\n\r\n.container {\r\n  padding: 50px 0px 50px 0px;\r\n}\r\n\r\n.row {\r\n    margin: 20px 0px 20px 0px;\r\n}\r\n\r\n#title {\r\n    text-align: center;\r\n    padding-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 id=\"title\">Built Using...</h1>\n  \n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"box\">\n        <div class=\"frame\">\n          <img src=\"../../assets/mongodb-logo.png\" class=\"logo\">\n        </div>\n        <h3 class=\"text\">MongoDB\n          <br/>database</h3>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"box\">\n        <div class=\"frame\">\n          <img src=\"../../assets/expressjs-logo.png\" class=\"logo\">\n        </div>\n        <h3 class=\"text\">Express.js\n          <br/>backend</h3>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"box\">\n        <div class=\"frame\">\n          <img src=\"../../assets/angular-logo.png\" class=\"logo\">\n        </div>\n        <h3 class=\"text\">Angular\n          <br/>frontend</h3>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div class=\"box\">\n        <div class=\"frame\">\n          <img src=\"../../assets/nodejs-logo.png\" class=\"logo\">\n        </div>\n        <h3 class=\"text\">Node.js\n          <br/>environment</h3>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"box\">\n        <div class=\"frame\">\n          <img src=\"../../assets/socketio-logo.png\" class=\"logo\">\n        </div>\n        <h3 class=\"text\">Socket.io\n          <br/>communication</h3>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"box\">\n        <div class=\"frame\">\n          <img src=\"../../assets/rest-logo.png\" class=\"logo\">\n        </div>\n        <h3 class=\"text\">RESTful\n          <br/>interface</h3>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"box\">\n        <div class=\"frame\">\n          <img src=\"../../assets/jwt-logo.png\" class=\"logo\">\n        </div>\n        <h3 class=\"text\">JWT\n          <br/>authentification</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".base {\r\n  background-color: rgb(255, 255, 255);\r\n  position: absolute;\r\n  top: 56px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.tall {\r\n  height: 100%;\r\n}\r\n\r\n.nopadding {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n\r\n.green {\r\n  background-color: green;\r\n}\r\n\r\n.blue {\r\n  background-color: blue;\r\n}\r\n\r\n#users-title {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 10px 40px 10px 0px;\r\n  color: gray;\r\n  font-size: 25px;\r\n}\r\n\r\n#users-container {\r\n  position: absolute;\r\n  top: 60px;\r\n  bottom: 10px;\r\n  left: 0;\r\n  right: 40px;\r\n  margin: 0;\r\n  border-radius: 4px;\r\n  border-color: lightgray;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  overflow: auto;\r\n}\r\n\r\n#users-container .box {\r\n  width: 100%;\r\n}\r\n\r\n#users-container .name {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  background-color: rgb(233, 233, 233);\r\n  border-radius: 4px;\r\n  color: rgb(70, 70, 70);\r\n  font-size: 20px;\r\n}\r\n\r\n#messages-container {\r\n  position: absolute;\r\n  top: 10px;\r\n  bottom: 66px;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  border-radius: 4px;\r\n  border-color: lightgray;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  overflow: auto;\r\n}\r\n\r\n.message-box {\r\n  position: relative;\r\n  width: 60%;\r\n  margin: 8px 20px 8px 20px;\r\n}\r\n\r\n.message-box.them {\r\n  float: left;\r\n}\r\n\r\n.message-box.you {\r\n  float: right;\r\n}\r\n\r\n.message-box .name {\r\n  font-size: 15px;\r\n  padding: 0;\r\n  margin: 0;\r\n  color: gray;\r\n}\r\n\r\n.message-box .text {\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  margin: 0px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.them .name {\r\n  text-align: left;\r\n}\r\n\r\n.you .name {\r\n  text-align: right;\r\n}\r\n\r\n.them .text {\r\n  float: left;\r\n  background-color: rgb(128, 128, 128);\r\n  color: white\r\n}\r\n\r\n.you .text {\r\n  float: right;\r\n  background-color: rgb(0, 140, 255);\r\n  color: white;\r\n}\r\n\r\n.entermessage-container {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 10px;\r\n  padding: 0;\r\n}\r\n\r\n#entermessage-textarea {\r\n  width: 85%;\r\n  padding: 10px;\r\n  float: left;\r\n  border-color: rgb(0, 140, 255);\r\n}\r\n\r\n#entermessage-button {\r\n  float: right;\r\n  width: 14%;\r\n  height: 46px;\r\n  background-color: rgb(0, 140, 255);\r\n  color: white;\r\n}\r\n\r\n#entermessage-button:hover {\r\n  background-color: rgb(0, 109, 199);\r\n}\r\n\r\n#moremessages-button {\r\n  float: center;\r\n  text-align: center;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  color: rgb(0, 140, 255);\r\n}\r\n\r\n#moremessages-button:hover {\r\n  color: rgb(0, 109, 199);\r\n}\r\n\r\n#moremessages-text {\r\n  float: center;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container base\">\n  <div class=\"row tall\" id=\"messageArea\">\n    <div class=\"col-md-4 tall\">\n      <p id=\"users-title\" class=\"\">Online Users</p>\n      <div id=\"users-container\" class=\"\">\n        <ng-template ngFor let-x [ngForOf]=\"usersOnline\" let-i=\"index\">\n          <div class=\"box\">\n            <p class=\"name\">{{x.name}}</p>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"col-md-8 tall nopadding\">\n      <div id=\"messages-container\">\n        <ng-template [ngIf]=\"moreMessages && !loadingMessages\">\n          <p (click)=\"getMoreMessages()\" id=\"moremessages-button\">Load more messages</p>\n        </ng-template>\n        <ng-template [ngIf]=\"!moreMessages && !loadingMessages\">\n          <p id=\"moremessages-text\">No more messages</p>\n        </ng-template>\n        <ng-template [ngIf]=\"loadingMessages\">\n          <p id=\"moremessages-text\">loading messages...</p>\n        </ng-template>\n        <ng-template ngFor let-message [ngForOf]=\"messages\" let-i=\"index\">\n          <ng-template [ngIf]=\"message.user_id == user._id\">\n            <div class=\"message-box you\">\n              <p class=\"name\">{{message.name}}</p>\n              <p class=\"text\">{{message.msg}}</p>\n            </div>\n          </ng-template>\n          <ng-template [ngIf]=\"message.user_id != user._id\">\n            <div class=\"message-box them\">\n              <p class=\"name\">{{message.name}}</p>\n              <p class=\"text\">{{message.msg}}</p>\n            </div>\n          </ng-template>\n        </ng-template>\n      </div>\n      <div class=\"entermessage-container\">\n        <textarea id=\"entermessage-textarea\" class=\"form-control\" rows=\"1\" [(ngModel)]=\"messageModel\" (keydown)=\"messageKeyDown($event)\"\n          (keyup)=\"messageKeyUp($event)\" placeholder=\"Enter message...\"></textarea>\n        <button (click)=\"sendMessage()\" id=\"entermessage-button\" class=\"btn\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, websocketService) {
        this.authService = authService;
        this.websocketService = websocketService;
        this.messageOldestId = '000000000000000000000000';
        this.usersRecent = [];
        this.usersOnline = [];
        this.messages = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.websocketService.socket.emit('new user', _this.user._id, function (data) { });
            //////////////////////////////////////////////////////////
            _this.loadingMessages = true;
            _this.authService.getMessages('').subscribe(function (messages) {
                for (var i = 0; i < messages.length; i++) {
                    _this.messages.unshift(messages[i]);
                }
                if (messages[0]) {
                    _this.messageOldestId = _this.messages[0]._id;
                }
                var element = document.getElementById("messages-container");
                setTimeout(function () {
                    element.scrollTop = element.scrollHeight - element.clientHeight;
                }, 100);
                _this.moreMessages = true;
                if (messages.length < 20) {
                    _this.moreMessages = false;
                }
                _this.loadingMessages = false;
            }, function (error) {
                console.log('no messages');
                //return false;
            });
            //////////////////////////////////////////////////////////
        }, function (error) {
            console.log('no user');
            //return false;
        });
        this.websocketService.socket.on('new message', function (data) {
            _this.messages.push(data);
            var element = document.getElementById("messages-container");
            setTimeout(function () {
                element.scrollTop = element.scrollHeight - element.clientHeight;
            }, 100);
        });
        this.websocketService.socket.on('new users', function (data) {
            _this.usersOnline.length = 0;
            _this.usersOnline.length = data.length;
            for (var i = 0; i < data.length; i++) {
                _this.usersOnline[i] = data[i];
            }
        });
    };
    DashboardComponent.prototype.messageKeyDown = function (messageEvent) {
        if (messageEvent.key == 'Enter') {
            this.sendMessage();
        }
    };
    DashboardComponent.prototype.messageKeyUp = function (messageEvent) {
        if (messageEvent.key == 'Enter') {
            this.messageModel = '';
        }
    };
    DashboardComponent.prototype.sendMessage = function () {
        this.messageEdit = this.messageModel;
        this.messageModel = '';
        if (this.messageEdit[this.messageEdit.length - 1] == '\n') {
            this.messageEdit = this.messageEdit.substring(0, this.messageEdit.length - 1);
        }
        if (this.messageEdit) {
            this.websocketService.socket.emit('new message', this.messageEdit);
        }
        document.getElementById("entermessage-textarea").focus();
    };
    DashboardComponent.prototype.getMoreMessages = function () {
        var _this = this;
        var element = document.getElementById("messages-container");
        var scrollHeightPrev = element.scrollHeight;
        var scrollTopPrev = element.scrollTop;
        this.loadingMessages = true;
        this.authService.getMessages(this.messageOldestId).subscribe(function (messages) {
            for (var i = 0; i < messages.length; i++) {
                _this.messages.unshift(messages[i]);
            }
            if (messages[0]) {
                _this.messageOldestId = _this.messages[0]._id;
            }
            setTimeout(function () {
                element.scrollTop = scrollTopPrev + (element.scrollHeight - scrollHeightPrev);
            }, 100);
            _this.moreMessages = true;
            if (messages.length < 20) {
                _this.moreMessages = false;
            }
            _this.loadingMessages = false;
        }, function (error) {
            console.log('no more messages');
            //return false;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding: 20px;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n    float: center;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3 center\">Messaging App</h1>\n    <ng-template [ngIf]=\"authService.loggedIn()\">\n      <p class=\"lead center\">\n        <a [routerLink]=\"['/chat']\" class=\"btn btn-primary btn-lg center\" href=\"#\" role=\"button\">Chat</a>\n      </p>\n    </ng-template>\n    <ng-template [ngIf]=\"!authService.loggedIn()\">\n      <p class=\"lead center\">\n        <a [routerLink]=\"['/login']\" class=\"btn btn-primary btn-lg center\" href=\"#\" role=\"button\">Login</a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-lg center\" href=\"#\" role=\"button\">Register</a>\n      </p>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".pseudo-body {\r\n  --input-padding-x: .75rem;\r\n  --input-padding-y: .75rem;\r\n  height: 100%;\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-label-group input {\r\n  cursor: text;\r\n}\r\n\r\n.form-label-group label {\r\n  cursor: text;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  -webkit-transition: all .1s ease-in-out;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pseudo-body\">\n  <form (submit)=\"onLoginSubmit()\" class=\"form-signin\">\n    <div class=\"text-center mb-4\">\n      <img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Sign in to an existing account</h1>\n    </div>\n\n    <div class=\"form-label-group\">\n      <input [(ngModel)]=\"eoru\" name=\"eoru\" type=\"text\" class=\"form-control\" autocomplete='email' id=\"inputEU\" class=\"form-control\"\n        placeholder=\"Email or Username\" autofocus>\n      <label for=\"inputEU\">Email or Username</label>\n    </div>\n\n    <div class=\"form-label-group\">\n      <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\" autocomplete='' id=\"inputPassword\" class=\"form-control\"\n        placeholder=\"Password\">\n      <label for=\"inputPassword\">Password</label>\n    </div>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n    <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2018</p>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.eoru,
            username: this.eoru,
            password: this.password
        };
        if (!user.email || !user.username || !user.password) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', time: 3000 });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', time: 3000 });
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/chat']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', time: 3000 });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background-color: rgb(0, 140, 255);\r\n    height: 8%;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a [routerLink]=\"['/']\" class=\"navbar-brand\">Messaging App</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a [routerLink]=\"['/']\" class=\"nav-link\">Home</a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a [routerLink]=\"['/about']\" class=\"nav-link\">About</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a [routerLink]=\"['/login']\" class=\"nav-link\">Login</a>\n      </li>\n      <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a [routerLink]=\"['/register']\" class=\"nav-link\">Register</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a [routerLink]=\"['/chat']\" class=\"nav-link\">Chat</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n        <a [routerLink]=\"['/account']\" class=\"nav-link\">Account</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n        <a (click)=\"onLogoutClick()\" class=\"nav-link\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You logged out', { cssClass: 'alert-success', time: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding: 30px 0px 20px 0px;\r\n}\r\n\r\n.page-header {\r\n  padding-bottom: 20px;\r\n  text-align: left;\r\n}\r\n\r\n#delete-button {\r\n  margin: 20px 10px 0px 10px;\r\n  padding: 10px;\r\n  float: center;\r\n  background-color: rgb(255, 83, 83);\r\n  color: white;\r\n}\r\n\r\n#delete-button:hover {\r\n  background-color: rgb(255, 0, 0);\r\n}\r\n\r\n#delete-button2 {\r\n  width: 80px;\r\n  margin: 10px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  float: center;\r\n}\r\n\r\n#delete-button2:hover {\r\n  background-color: rgb(255, 0, 0);\r\n}\r\n\r\n#delete-text {\r\n  margin: 10px;\r\n  float: center;\r\n}\r\n\r\n#main {\r\n  width: 100%;\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n.list-group {\r\n  text-align: left;\r\n}\r\n\r\n#delete-text {\r\n  width: 100%;\r\n}\r\n\r\n.table {\r\n  text-align: left;\r\n}\r\n\r\n.table-button {\r\n  color: rgb(0, 140, 255);\r\n  cursor: pointer;\r\n}\r\n\r\n.table-button:hover {\r\n  color: rgb(1, 99, 179);\r\n}\r\n\r\n.cancel-button {\r\n  color: rgb(255, 86, 86);\r\n  cursor: pointer;\r\n}\r\n\r\n.cancel-button:hover {\r\n  color: rgb(219, 0, 0);\r\n}\r\n\r\n.confirm-button {\r\n  color: rgb(0, 206, 0);\r\n  cursor: pointer;\r\n}\r\n\r\n.confirm-button:hover {\r\n  color: rgb(12, 141, 0);\r\n}\r\n\r\n.form-control {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n\r\n}\r\n\r\n.dropdown-error {\r\n  position: absolute;\r\n  top: 57px;\r\n  right: 100%;\r\n  padding-right: 5px;\r\n  white-space: nowrap;\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf='user' id='main'>\n    <h2 class=\"page-header\">Account Details</h2>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>\n            <b>Name:</b>\n          </td>\n          <td>{{user.name}}</td>\n          <td *ngIf='!editingName' (click)=\"editingName = true\" class=\"table-button\">Edit Name</td>\n          <td *ngIf='editingName' class=\"dropdown\">\n            <p (click)=\"cancelEditName()\" class=\"cancel-button\">Cancel</p>\n            <input [(ngModel)]=\"newName\" name=\"newName\" class=\"form-control\" placeholder=\"New name\" (input)=\"errorName = ''\">\n            <p (click)=\"updateName()\" class=\"confirm-button\">Confirm</p>\n            <p class=\"dropdown-error\">{{errorName}}</p>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b>Username:</b>\n          </td>\n          <td>{{user.username}}</td>\n          <td *ngIf='!editingUsername' (click)=\"editingUsername = true\" class=\"table-button\">Edit Username</td>\n          <td *ngIf='editingUsername' class=\"dropdown\">\n            <p (click)=\"cancelEditUsername()\" class=\"cancel-button\">Cancel</p>\n            <input [(ngModel)]=\"newUsername\" name=\"newUsername\" class=\"form-control\" placeholder=\"New username\" (input)=\"errorUsername = ''\">\n            <p (click)=\"updateUsername()\" class=\"confirm-button\">Confirm</p>\n            <p class=\"dropdown-error\">{{errorUsername}}</p>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b>Email:</b>\n          </td>\n          <td>{{user.email}}</td>\n          <td *ngIf='!editingEmail' (click)=\"editingEmail = true\" class=\"table-button\">Edit Email</td>\n          <td *ngIf='editingEmail' class=\"dropdown\">\n            <p (click)=\"cancelEditEmail()\" class=\"cancel-button\">Cancel</p>\n            <input [(ngModel)]=\"newEmail\" name=\"newEmail\" class=\"form-control\" placeholder=\"New email\" (input)=\"errorEmail = ''\">\n            <p (click)=\"updateEmail()\" class=\"confirm-button\">Confirm</p>\n            <p class=\"dropdown-error\">{{errorEmail}}</p>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b>Password:</b>\n          </td>\n          <td>••••••••••</td>\n          <td *ngIf='!editingPassword' (click)=\"editingPassword = true\" class=\"table-button\">Edit Password</td>\n          <td *ngIf='editingPassword' class=\"dropdown\">\n            <p (click)=\"cancelEditPassword()\" class=\"cancel-button\">Cancel</p>\n            <input [(ngModel)]=\"newPassword\" name=\"newPassword\" type=\"password\" class=\"form-control\" placeholder=\"New password\" (input)=\"errorPassword = ''\">\n            <input [(ngModel)]=\"newPasswordAgain\" name=\"newPasswordAgain\" type=\"password\" class=\"form-control \" placeholder=\"Repeat new password\"\n              (input)=\"errorPassword = ''\">\n            <p (click)=\"updatePassword()\" class=\"confirm-button\">Confirm</p>\n            <p class=\"dropdown-error\">{{errorPassword}}</p>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"width: 30%\"></td>\n          <td style=\"width: 40%\"></td>\n          <td style=\"width: 30%\"></td>\n        </tr>\n      </tbody>\n    </table>\n    <button (click)=\"deletePrompt = !deletePrompt\" class=\"btn\" id=\"delete-button\">Delete Account</button>\n    <div *ngIf='deletePrompt'>\n      <p id=\"delete-text\">Are you sure you want to\n        <br/>delete your account?</p>\n      <button (click)=\"deletePrompt = false\" class=\"btn\" id=\"delete-button2\">No</button>\n      <button (click)=\"deleteConfirm()\" class=\"btn\" id=\"delete-button2\">Yes</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.deletePrompt = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(profile);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    /////////////////////////////////////////////////////////////////
    ProfileComponent.prototype.updateName = function () {
        var _this = this;
        if (!this.newName) {
            this.errorName = "name can't be empty";
            return false;
        }
        var updatedUser = {
            _id: this.user._id,
            name: {
                new: true,
                val: this.newName
            },
            username: {
                new: false
            },
            email: {
                new: false
            },
            password: {
                new: false
            }
        };
        this.authService.updateUser(updatedUser).subscribe(function (data) {
            console.log('update name success');
            console.log(data);
            _this.editingName = false;
            _this.newName = '';
            _this.errorName = '';
            _this.user = data;
        }, function (err) {
            _this.errorName = err.message;
            console.log(err);
        });
    };
    ProfileComponent.prototype.updateUsername = function () {
        var _this = this;
        if (!this.newUsername) {
            this.errorUsername = "username can't be empty";
            return false;
        }
        var updatedUser = {
            _id: this.user._id,
            name: {
                new: false
            },
            username: {
                new: true,
                val: this.newUsername
            },
            email: {
                new: false
            },
            password: {
                new: false
            }
        };
        this.authService.updateUser(updatedUser).subscribe(function (data) {
            _this.editingUsername = false;
            _this.newUsername = '';
            _this.errorUsername = '';
            _this.user = data;
        }, function (err) {
            console.log(err);
            _this.errorUsername = err.message;
        });
    };
    ProfileComponent.prototype.updateEmail = function () {
        var _this = this;
        if (!this.validateService.validateEmail(this.newEmail)) {
            this.errorEmail = "email is invalid";
            return false;
        }
        var updatedUser = {
            _id: this.user._id,
            name: {
                new: false
            },
            username: {
                new: false
            },
            email: {
                new: true,
                val: this.newEmail
            },
            password: {
                new: false
            }
        };
        this.authService.updateUser(updatedUser).subscribe(function (data) {
            console.log(data);
            _this.editingEmail = false;
            _this.newEmail = '';
            _this.errorEmail = '';
            _this.user = data;
        }, function (err) {
            console.log(err);
            _this.errorEmail = err.message;
        });
    };
    ProfileComponent.prototype.updatePassword = function () {
        var _this = this;
        if (!this.newPassword || !this.newPasswordAgain) {
            this.errorPassword = "password can't be empty";
            return false;
        }
        if (this.newPassword != this.newPasswordAgain) {
            this.errorPassword = "passwords must match";
            return false;
        }
        var updatedUser = {
            _id: this.user._id,
            name: {
                new: false
            },
            username: {
                new: false
            },
            email: {
                new: false
            },
            password: {
                new: true,
                val: this.newPassword
            }
        };
        this.authService.updateUser(updatedUser).subscribe(function (data) {
            console.log('update password success');
            console.log(data);
            _this.editingPassword = false;
            _this.newPassword = '';
            _this.newPasswordAgain = '';
            _this.errorPassword = '';
            _this.user = data;
        }, function (err) {
            _this.errorPassword = err.message;
            console.log(err);
        });
    };
    /////////////////////////////////////////////////////////////////
    ProfileComponent.prototype.cancelEditName = function () {
        this.editingName = false;
        this.errorName = '';
        this.newName = '';
    };
    ProfileComponent.prototype.cancelEditUsername = function () {
        this.editingUsername = false;
        this.errorUsername = '';
        this.newUsername = '';
    };
    ProfileComponent.prototype.cancelEditEmail = function () {
        this.editingEmail = false;
        this.errorEmail = '';
        this.newEmail = '';
    };
    ProfileComponent.prototype.cancelEditPassword = function () {
        this.editingPassword = false;
        this.errorPassword = '';
        this.newPassword = '';
        this.newPasswordAgain = '';
    };
    /////////////////////////////////////////////////////////////////
    ProfileComponent.prototype.deleteConfirm = function () {
        var _this = this;
        this.authService.deleteUser(this.user._id).subscribe(function (data) {
            console.log('delete success');
            console.log(data);
            _this.authService.logout();
            _this.router.navigate(['/']);
        }, function (err) {
            console.log('delete error');
            console.log(err);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".pseudo-body {\r\n  --input-padding-x: .75rem;\r\n  --input-padding-y: .75rem;\r\n  height: 100%;\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-label-group input {\r\n  cursor: text;\r\n}\r\n\r\n.form-label-group label {\r\n  cursor: text;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 420px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0; /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  -webkit-transition: all .1s ease-in-out;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pseudo-body\">\n  <form (submit)=\"onRegisterSubmit()\" class=\"form-signin\">\n    <div class=\"text-center mb-4\">\n      <img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Sign Up for a New Account</h1>\n    </div>\n\n    <div class=\"form-label-group\">\n      <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" class=\"form-control\" autocomplete='name' id=\"inputName\" class=\"form-control\"\n        placeholder=\"Name\" autofocus>\n      <label for=\"inputName\">Name</label>\n    </div>\n\n    <div class=\"form-label-group\">\n      <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" autocomplete='' id=\"inputUsername\" class=\"form-control\"\n        placeholder=\"Username\">\n      <label for=\"inputUsername\">Username</label>\n    </div>\n\n    <div class=\"form-label-group\">\n      <input [(ngModel)]=\"email\" name=\"email\" type=\"text\" class=\"form-control\" autocomplete='email' id=\"inputEmail\" class=\"form-control\"\n        placeholder=\"Email\">\n      <label for=\"inputEmail\">Email</label>\n    </div>\n\n    <div class=\"form-label-group\">\n      <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\" autocomplete='' id=\"inputPassword\" class=\"form-control\"\n        placeholder=\"Password\">\n      <label for=\"inputPassword\">Password</label>\n    </div>\n\n    <div class=\"form-label-group\">\n      <input [(ngModel)]=\"passwordagain\" name=\"passwordagain\" type=\"password\" class=\"form-control\" autocomplete='' id=\"inputPasswordAgain\"\n        class=\"form-control\" placeholder=\"Password Again\">\n      <label for=\"inputPasswordAgain\">Password Again</label>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Sign Up</button>\n    <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2018</p>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, flashMessagesService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', time: 3000 });
            return false;
        }
        if (!this.validateService.validatePasswords(user.password, this.passwordagain)) {
            this.flashMessagesService.show('Passwords must match', { cssClass: 'alert-danger', time: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', time: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', time: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', time: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadUserData();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/users/delete?id=' + id, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/users/update', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getMessages = function (oldestId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/messages/home?id=' + oldestId, { headers: headers }).map(function (res) { return res.json(); });
    };
    ///////////////////////////////////////////////////////////////////////
    AuthService.prototype.loadUserData = function () {
        var token = localStorage.getItem('id_token');
        var user = JSON.parse(localStorage.getItem('user'));
        this.authToken = token;
        this.user = user;
        //console.log(user);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name && user.username && user.email && user.password) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validatePasswords = function (password, passwordagain) {
        if (password && passwordagain && (password == passwordagain)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsocketService = /** @class */ (function () {
    function WebsocketService(router) {
        var _this = this;
        this.router = router;
        router.events.forEach(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                //console.log(event.url);
                if (_this.socket) {
                    _this.socket.disconnect();
                }
                if (event.url == '/chat') {
                    _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__('http://localhost:3000');
                }
            }
        });
    }
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    ws_url: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map