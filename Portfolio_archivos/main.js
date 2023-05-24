"use strict";
(self["webpackChunkPortfolio"] = self["webpackChunkPortfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/educacion/educacion.component */ 1786);
/* harmony import */ var _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experiencia/experiencia.component */ 3605);
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/log-in/log-in.component */ 6701);
/* harmony import */ var _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/proyectos/proyectos.component */ 3171);
/* harmony import */ var _components_Sign_Up_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Sign Up/signup.component */ 7137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [{
  path: 'home',
  component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
}, {
  path: 'SignUp',
  component: _components_Sign_Up_signup_component__WEBPACK_IMPORTED_MODULE_5__.SignUpComponent
}, {
  path: 'proyectos',
  component: _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__.ProyectosComponent
}, {
  path: 'experiencia',
  component: _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_2__.ExperienciaComponent
}, {
  path: 'educacion',
  component: _components_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_1__.EducacionComponent
}, {
  path: 'LogIn',
  component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__.LogInComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_portfolio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/portfolio.service */ 1134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 8263);






function AppComponent_app_home_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-home", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("btnClick", function AppComponent_app_home_0_Template_app_home_btnClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleInterface());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(PortfolioService, router, http) {
    this.PortfolioService = PortfolioService;
    this.router = router;
    this.http = http;
  }
  ngOnInit() {}
  toggleInterface() {
    this.PortfolioService.toggleInterface();
  }
  hasRoute(route) {
    return this.router.url == route;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_portfolio_service__WEBPACK_IMPORTED_MODULE_0__.PortfolioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 1,
  consts: [[3, "btnClick", 4, "ngIf"], [3, "btnClick"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_app_home_0_Template, 1, 0, "app-home", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasRoute("/"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "LoadConfiguration": () => (/* binding */ LoadConfiguration)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _service_portfolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/portfolio.service */ 1134);
/* harmony import */ var _components_Sign_Up_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Sign Up/signup.component */ 7137);
/* harmony import */ var _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/proyectos/proyectos.component */ 3171);
/* harmony import */ var _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/experiencia/experiencia.component */ 3605);
/* harmony import */ var _components_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/educacion/educacion.component */ 1786);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/log-in/log-in.component */ 6701);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/auth.interceptor */ 5818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);

















function LoadConfiguration(configservice) {
  return () => configservice.loadConfig();
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [_service_portfolio_service__WEBPACK_IMPORTED_MODULE_3__.PortfolioService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__.AuthInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _components_Sign_Up_signup_component__WEBPACK_IMPORTED_MODULE_4__.SignUpComponent, _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_5__.ProyectosComponent, _components_experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_6__.ExperienciaComponent, _components_educacion_educacion_component__WEBPACK_IMPORTED_MODULE_7__.EducacionComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_9__.LogInComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 7137:
/*!********************************************************!*\
  !*** ./src/app/components/Sign Up/signup.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/autenticacion.service */ 3315);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 4662);







function SignUpComponent_div_13_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " usuario requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignUpComponent_div_13_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.user == null ? null : ctx_r0.user.hasError("required"));
  }
}
function SignUpComponent_div_18_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contrase\u00F1a requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignUpComponent_div_18_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.password == null ? null : ctx_r1.password.hasError("required"));
  }
}
function SignUpComponent_div_29_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " correo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignUpComponent_div_29_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.mail == null ? null : ctx_r2.mail.hasError("required"));
  }
}
function SignUpComponent_div_36_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Debe aceptar los terminos y condiciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignUpComponent_div_36_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.terms == null ? null : ctx_r3.terms.hasError("required"));
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class SignUpComponent {
  constructor(formBuilder, service, ruta) {
    this.formBuilder = formBuilder;
    this.service = service;
    this.ruta = ruta;
    this.usuarios = [];
    this.form = this.formBuilder.group({
      id: Number,
      user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
      mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      offers: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      terms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }
  ngOnInit() {
    console.log(this.form);
  }
  get user() {
    return this.form.get('user');
  }
  get mail() {
    return this.form.get('mail');
  }
  get password() {
    return this.form.get('password');
  }
  get terms() {
    return this.form.get('terms');
  }
  onSignUp(form) {
    this.service.SignUp(form).subscribe(data2 => {
      console.log(data2);
      this.ruta.navigate(['/']);
    }), error => {
      console.error(error);
    };
  }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__.AutenticacionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["app-signup"]],
  decls: 39,
  vars: 17,
  consts: [[2, "min-height", "100vh"], [1, "cerrar"], ["routerLink", "/"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left-circle-fill"], ["d", "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"], [1, "edu"], ["action", "", "method", "post", 1, "session", 3, "formGroup", "ngSubmit"], ["for", "user"], ["type", "text", "name", "user", "maxlength", "50", "id", "user", "formControlName", "user", 1, "relleno", "form-control", 3, "ngClass"], [4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "maxlength", "50", "id", "password", "formControlName", "password", 1, "relleno", "form-control", 3, "ngClass"], ["type", "radio", "name", "sexo", "value", "h"], ["type", "radio", "name", "sexo", "value", "m"], ["for", "mail"], ["type", "email", "name", "correo", "maxlength", "100", "id", "mail", "formControlName", "mail", 1, "relleno", "form-control", 3, "ngClass"], [1, "box"], ["type", "checkbox", "name", "info", "checked", "none", "formControlName", "offers"], ["type", "checkbox", "name", "condiciones", "required", "", "checked", "none", "formControlName", "terms"], ["type", "submit", "id", "login", "value", "REGISTRARSE", 1, "hola"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body", 0)(1, "header")(2, "div", 1)(3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "REGISTRARSE");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSignUp(ctx.form.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Usuario ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SignUpComponent_div_13_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Contrase\u00F1a: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SignUpComponent_div_18_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Sexo:\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " hombre ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " mujer\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Correo:\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SignUpComponent_div_29_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Deseo recibir informaci\u00F3n sobre novedades y ofertas\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protecci\u00F3n de datos\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, SignUpComponent_div_36_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, (ctx.user == null ? null : ctx.user.errors) && (ctx.user == null ? null : ctx.user.touched), !(ctx.user == null ? null : ctx.user.errors) && (ctx.user == null ? null : ctx.user.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.errors) && (ctx.user == null ? null : ctx.user.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, (ctx.password == null ? null : ctx.password.errors) && (ctx.password == null ? null : ctx.password.touched), !(ctx.password == null ? null : ctx.password.errors) && (ctx.password == null ? null : ctx.password.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.errors) && (ctx.password == null ? null : ctx.password.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c0, (ctx.mail == null ? null : ctx.mail.errors) && (ctx.mail == null ? null : ctx.mail.touched), !(ctx.mail == null ? null : ctx.mail.errors) && (ctx.mail == null ? null : ctx.mail.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.mail == null ? null : ctx.mail.errors) && (ctx.mail == null ? null : ctx.mail.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.terms == null ? null : ctx.terms.errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxRequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["form[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  min-height: 50vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 10%;\n  font-size: 45px;\n  font-weight: 100;\n  color: white;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n}\n\nform.session[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding-left: 30%;\n  padding-right: 10%;\n  margin-bottom: 25px;\n  font-size: 20px;\n  color: #B8BCBF;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n}\n\np[_ngcontent-%COMP%] {\n  padding-right: 30%;\n  margin-bottom: 0%;\n}\n\n.relleno[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 3px;\n  background: #32353C;\n  padding-top: 10px;\n  padding-right: 5px;\n  padding-left: 5px;\n  width: 350px;\n  height: 30px;\n  color: white;\n  font-family: sans-serif;\n  font-size: 20px;\n  outline: 1px;\n  border-bottom: 1px solid white;\n}\n\n.box[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n#login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 150px;\n  color: white;\n  background-image: linear-gradient(90deg, #00BBFF, #1A9FFF);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n}\n\n#login[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #4eccfa, #4ec5ff);\n  color: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: #4eccfa;\n}\n\nsvg[_ngcontent-%COMP%]:hover {\n  fill: #1A9FFF;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5%;\n}\n\n.edu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1%;\n}\n\n.cerrar[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n\n.hola[_ngcontent-%COMP%] {\n  margin-bottom: 240px;\n  margin-top: 50px;\n}\n\n@media (max-width: 950px) {\n  form.session[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    padding-left: 25px;\n    margin-bottom: 25px;\n    font-size: 20px;\n    color: #B8BCBF;\n    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWduIFVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL2N1cnNvJTIwYXJnZW50aW5hJTIwcHJvZ3JtYS9Qb3J0Zm9saW8vRnJvbnQtRW5kL1BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvU2lnbiUyMFVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMERBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksMERBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0FDT0o7O0FETEE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QUROQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRFBBO0VBQ0ksVUFBQTtBQ1VKOztBRFJBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLDJDQUFBO0VDWU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG5cblxufVxuLmZvcm17XG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDoxMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG59XG5mb3JtLnNlc3Npb24ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjQjhCQ0JGO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMyk7IFxufVxuXG5we1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbn1cblxuLnJlbGxlbm97XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzIzNTNDO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgb3V0bGluZTogMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi5ib3h7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuI2xvZ2lue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMEJCRkYsICMxQTlGRkYpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNsb2dpbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0ZWNjZmEsICM0ZWM1ZmYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG59XG5zdmd7XG4gICAgZmlsbDogIzRlY2NmYTtcbn1cbnN2Zzpob3ZlcntcbiAgICBmaWxsOiAjMUE5RkZGO1xufVxuaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4uZWR1e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG4uY2VycmFye1xuICAgIG1hcmdpbjogMSU7XG59XG4uaG9sYXtcbiAgICBtYXJnaW4tYm90dG9tOiAyNDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuQG1lZGlhKG1heC13aWR0aDo5NTBweCkge1xuICAgIGZvcm0uc2Vzc2lvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogI0I4QkNCRjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKTsgXG4gICAgfVxufSIsImZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5mb3JtLnNlc3Npb24ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjQjhCQ0JGO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5wIHtcbiAgcGFkZGluZy1yaWdodDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbn1cblxuLnJlbGxlbm8ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogIzMyMzUzQztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG91dGxpbmU6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYm94IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBCQkZGLCAjMUE5RkZGKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNsb2dpbjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRlY2NmYSwgIzRlYzVmZik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5zdmcge1xuICBmaWxsOiAjNGVjY2ZhO1xufVxuXG5zdmc6aG92ZXIge1xuICBmaWxsOiAjMUE5RkZGO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmVkdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5jZXJyYXIge1xuICBtYXJnaW46IDElO1xufVxuXG4uaG9sYSB7XG4gIG1hcmdpbi1ib3R0b206IDI0MHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgZm9ybS5zZXNzaW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0I4QkNCRjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1786:
/*!*************************************************************!*\
  !*** ./src/app/components/educacion/educacion.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducacionComponent": () => (/* binding */ EducacionComponent)
/* harmony export */ });
/* harmony import */ var G_curso_argentina_progrma_Portfolio_Front_End_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/datos.service */ 8599);
/* harmony import */ var src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/autenticacion.service */ 3315);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 4662);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ 3646);









const _c0 = ["agregar"];
const _c1 = ["edit"];
const _c2 = ["editar"];
const _c3 = ["edicion"];
const _c4 = ["newEdu"];
const _c5 = ["newEdu2"];
const _c6 = ["signup"];
const _c7 = ["edition"];
function EducacionComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_educacion_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", tipo_educacion_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", tipo_educacion_r5.id, ":", tipo_educacion_r5.nombre_tipo, "");
  }
}
function EducacionComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EducacionComponent_div_37_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.agregarEducacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "path", 34)(6, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
const _c8 = function (a0) {
  return {
    "display": a0
  };
};
function EducacionComponent_div_38_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EducacionComponent_div_38_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const edu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu_r9.edit = !edu_r9.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "EDITAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const edu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c8, edu_r9.edit ? "none" : "block"));
  }
}
function EducacionComponent_div_38_datalist_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datalist", 50)(1, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tipo_educacion_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", tipo_educacion_r18.nombre_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tipo_educacion_r18.nombre_tipo);
  }
}
const _c9 = function (a0, a1, a2) {
  return {
    "visibility": a0,
    "opacity": a1,
    "top": a2
  };
};
const _c10 = function (a0, a1) {
  return {
    "display": a0,
    "z-index": a1
  };
};
function EducacionComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "button", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EducacionComponent_div_38_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const edu_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu_r9.selected = !edu_r9.selected);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, EducacionComponent_div_38_button_3_Template, 3, 3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 41)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "H5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EducacionComponent_div_38_Template_form_ngSubmit_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const edu_r9 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r21.EditarEducacion(edu_r9.id, ctx_r21.form2.value);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu_r9.edit = !edu_r9.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EducacionComponent_div_38_Template_input_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const edu_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu_r9.edit = !edu_r9.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 20)(30, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EducacionComponent_div_38_Template_input_ngModelChange_30_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const edu_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu_r9.tipo_Educacion.nombre_tipo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, EducacionComponent_div_38_datalist_31_Template, 3, 2, "datalist", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 48)(33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "GUARDAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const edu_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c8, edu_r9.edit ? "none" : "block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](16, _c9, edu_r9.selected ? "hidden" : "visible", edu_r9.selected ? "0" : "1", edu_r9.selected ? "70%" : "150px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](edu_r9.nombreEducacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](20, _c9, edu_r9.selected ? "visible" : "hidden", edu_r9.selected ? "1" : "0", edu_r9.selected ? "107px" : "70%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](edu_r9.nombreEducacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](edu_r9.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Inicio:", edu_r9.fechaInicio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Fin:", edu_r9.fechaFin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.form2)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](24, _c10, edu_r9.edit ? "flex" : "none", edu_r9.edit ? "2" : "-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1900 - 1 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", edu_r9.tipo_Educacion.nombre_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.tipo_educacion);
  }
}
function EducacionComponent_div_41_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EducacionComponent_div_41_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const edu2_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.edit = !edu2_r24.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "EDITAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const edu2_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c8, edu2_r24.edit ? "none" : "block"));
  }
}
function EducacionComponent_div_41_datalist_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datalist", 50)(1, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tipo_educacion2_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", tipo_educacion2_r33.nombre_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tipo_educacion2_r33.nombre_tipo);
  }
}
function EducacionComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "button", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EducacionComponent_div_41_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const edu2_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.selected = !edu2_r24.selected);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, EducacionComponent_div_41_button_3_Template, 3, 3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 41)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "H5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", 51, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EducacionComponent_div_41_Template_form_ngSubmit_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const edu2_r24 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r36.EditarEducacion(edu2_r24.id, ctx_r36.form2.value);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.edit = !edu2_r24.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EducacionComponent_div_41_Template_input_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const edu2_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.edit = !edu2_r24.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 11)(22, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EducacionComponent_div_41_Template_input_ngModelChange_22_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const edu2_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.nombreEducacion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 14)(24, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EducacionComponent_div_41_Template_input_ngModelChange_24_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const edu2_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.titulo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 44)(26, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EducacionComponent_div_41_Template_input_ngModelChange_26_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const edu2_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.fechaInicio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 45)(28, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EducacionComponent_div_41_Template_input_ngModelChange_28_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const edu2_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.fechaFin = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 20)(30, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EducacionComponent_div_41_Template_input_ngModelChange_30_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const edu2_r24 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](edu2_r24.tipo_Educacion.nombre_tipo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, EducacionComponent_div_41_datalist_31_Template, 3, 2, "datalist", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const edu2_r24 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c8, edu2_r24.edit ? "none" : "block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](20, _c9, edu2_r24.selected ? "hidden" : "visible", edu2_r24.selected ? "0" : "1", edu2_r24.selected ? "70%" : "150px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](edu2_r24.nombreEducacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](24, _c9, edu2_r24.selected ? "visible" : "hidden", edu2_r24.selected ? "1" : "0", edu2_r24.selected ? "107px" : "70%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](edu2_r24.nombreEducacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](edu2_r24.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Inicio:", edu2_r24.fechaInicio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Fin:", edu2_r24.fechaFin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.form2)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c10, edu2_r24.edit ? "flex" : "none", edu2_r24.edit ? "2" : "-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", edu2_r24.nombreEducacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", edu2_r24.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1900 - 1 - 1)("ngModel", edu2_r24.fechaInicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", edu2_r24.fechaFin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", edu2_r24.tipo_Educacion.nombre_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.tipo_educacion);
  }
}
class EducacionComponent {
  constructor(render2, service, formBuilder, service2) {
    this.render2 = render2;
    this.service = service;
    this.formBuilder = formBuilder;
    this.service2 = service2;
    this.edu = [];
    this.edu2 = [];
    this.edu1 = [];
    this.tipo_educacion = [];
    this.usuario = [];
    this.token = localStorage.getItem('token');
    this.form = this.formBuilder.group({
      nombreEducacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      fechaInicio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      fechaFin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      persona: this.formBuilder.group({
        id: ['1']
      }),
      tipo_Educacion: this.formBuilder.group({
        id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]] // asumiendo que id es un número
      })
    });

    this.form2 = this.formBuilder.group({
      nombreEducacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      fechaInicio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      fechaFin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      tipo_Educacion: this.formBuilder.group({
        id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        nombre_tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]] // asumiendo que id es un número
      })
    });
  }

  ObtenerDatos() {
    this.service.DatosEducacion().subscribe(data => {
      this.edu = data;
      console.log(data);
      this.edu1 = this.edu.filter(edu => edu.tipo_Educacion?.id == 1 || edu.tipo_Educacion?.id == 2);
      console.log(this.edu1);
      this.edu2 = this.edu.filter(edu => edu.tipo_Educacion?.id == 3);
      console.log(this.edu2);
    });
    this.service.tipoE().subscribe(data2 => {
      this.tipo_educacion = data2;
    });
  }
  ngOnInit() {
    this.ObtenerDatos();
  }
  ngAfterViewInit() {
    const token = localStorage.getItem('token');
    if (token) {
      const signup = this.signup.nativeElement;
      const newEdu2 = this.newEdu2.nativeElement;
      this.render2.removeClass(newEdu2, 'ocultar');
      this.render2.setStyle(signup, 'display', 'none');
    } else {
      const signup = this.signup.nativeElement;
      const newEdu2 = this.newEdu2.nativeElement;
      this.render2.setStyle(newEdu2, 'display', 'none');
      this.render2.setStyle(signup, 'display', 'none');
    }
  }
  NewEdu(form) {
    this.service.CrearEducacion(form).subscribe(data2 => {
      console.log(data2);
      const newEdu = this.newEdu.nativeElement;
      this.render2.setStyle(newEdu, 'display', 'none');
      this.ObtenerDatos();
    }), error => {
      console.error(error);
    };
  }
  agregarEducacion() {
    const newEdu = this.newEdu.nativeElement;
    this.render2.setStyle(newEdu, 'display', 'flex');
  }
  cerrarVentana() {
    const newEdu = this.newEdu.nativeElement;
    this.render2.setStyle(newEdu, 'display', 'none');
  }
  EditarEducacion(id, form2) {
    var _this = this;
    return (0,G_curso_argentina_progrma_Portfolio_Front_End_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ID del Educacion a editar:', id);
      yield _this.service.EditarEducacion(id, form2);
      _this.ObtenerDatos();
    })();
  }
}
EducacionComponent.ɵfac = function EducacionComponent_Factory(t) {
  return new (t || EducacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_datos_service__WEBPACK_IMPORTED_MODULE_1__.DatosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__.AutenticacionService));
};
EducacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: EducacionComponent,
  selectors: [["app-educacion"]],
  viewQuery: function EducacionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c7, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.agregar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.edit = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.edicion = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.newEdu = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.newEdu2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.signup = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.edition = _t.first);
    }
  },
  decls: 43,
  vars: 7,
  consts: [[3, "label"], ["id", "3", 1, "eduw"], [1, "div_new"], ["newEdu", ""], [1, "new__add"], ["action", "", "method", "post", "enctype", "multipart/form-data", 1, "new__add--form", 3, "formGroup", "ngSubmit"], [1, "edit", "container-fluid", 2, "width", "400px", "height", "500px"], [1, "menu__button"], ["type", "button", "value", "", 1, "menu__button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg", 2, "z-index", "1"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], ["for", "nombreEducacion"], [1, "text-center"], ["type", "text", "id", "nombreEducacion", "formControlName", "nombreEducacion", 1, "form-control", "edicion", "nombre"], ["for", "titulo"], ["type", "text", "id", "titulo", "formControlName", "titulo", 1, "form-control", "edicion", "trabajo"], ["for", "fechaInicio", 2, "width", "50%"], ["type", "date", "id", "fechaInicio", "formControlName", "fechaInicio", 1, "form-control", "edicion", "fecha", 2, "margin-right", "5px", 3, "min"], ["for", "fechaFin", 2, "width", "50%"], ["type", "date", "id", "fechaFin", "formControlName", "fechaFin", 1, "form-control", "edicion", "fecha", 2, "margin-left", "5px"], ["formGroupName", "tipo_Educacion"], ["type", "text", "list", "input", "id", "id", "formControlName", "id", 1, "form-control", "edicion", "rol"], ["id", "input", 2, "z-index", "11"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", "value", "CREAR", 1, "mod1--crear"], [1, "container-fluid", 2, "min-height", "400px"], [2, "width", "100%"], [4, "ngIf"], ["class", "container", "style", "width: 300px; margin-left: 10px; margin-right: 5px; height: 400px;", 4, "ngFor", "ngForOf"], [3, "value"], [1, "container", "img", "col", 3, "click"], [1, "agregar"], ["xmlns", "http://www.w3.org/2000/svg", "width", "200", "height", "200", "fill", "#1A9FFF", "viewBox", "0 0 16 16", 1, "bi", "bi-plus-circle"], ["agregar", ""], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"], [1, "container", 2, "width", "300px", "margin-left", "10px", "margin-right", "5px", "height", "400px"], [1, "img", "col", 3, "ngStyle", "click"], ["trabajo", ""], ["class", "mod1", 3, "ngStyle", "click", 4, "ngIf"], [1, "imagen", 2, "position", "absolute", "z-index", "0", 3, "ngStyle"], [1, "info", 2, "position", "absolute", "z-index", "0", 3, "ngStyle"], ["action", "", "method", "put", "enctype", "multipart/form-data", 1, "edit", 2, "display", "none", "z-index", "10", "position", "relative", 3, "formGroup", "ngStyle", "ngSubmit"], ["edicion", ""], ["for", "fechaInicio", 2, "width", "45%"], ["for", "fechaFin", 2, "width", "45%"], ["type", "text", "list", "input", "id", "id", "formControlName", "id", 1, "form-control", "edicion", "rol", 3, "ngModel", "ngModelChange"], ["id", "input", "style", "z-index: 10", 4, "ngFor", "ngForOf"], [1, "mod1--borrar"], [1, "mod1", 3, "ngStyle", "click"], ["id", "input", 2, "z-index", "10"], ["action", "", "method", "put", 1, "edit", 2, "display", "none", "z-index", "10", "position", "relative", 3, "formGroup", "ngStyle", "ngSubmit"], ["type", "text", "id", "nombreEducacion", "formControlName", "nombreEducacion", 1, "form-control", "edicion", "nombre", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "titulo", "formControlName", "titulo", 1, "form-control", "edicion", "trabajo", 3, "ngModel", "ngModelChange"], ["type", "date", "id", "fechaInicio", "formControlName", "fechaInicio", 1, "form-control", "edicion", "fecha", 2, "margin-right", "5px", 3, "min", "ngModel", "ngModelChange"], ["type", "date", "id", "fechaFin", "formControlName", "fechaFin", 1, "form-control", "edicion", "fecha", 2, "margin-left", "5px", 3, "ngModel", "ngModelChange"], ["type", "text", "list", "input", "id", "nombre_tipo", "formControlName", "id", 1, "form-control", "edicion", "rol", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "GUARDAR", 1, "mod1--borrar"]],
  template: function EducacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2, 3)(4, "div", 4)(5, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EducacionComponent_Template_form_ngSubmit_5_listener() {
        return ctx.NewEdu(ctx.form.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EducacionComponent_Template_input_click_8_listener() {
        return ctx.cerrarVentana();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 11)(12, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Nombre de la institucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 14)(16, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Titulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 16)(20, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Fecha de inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 18)(24, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Fecha final");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 20)(28, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Tipo de educacion");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "datalist", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, EducacionComponent_option_32_Template, 2, 3, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 25)(35, "h1", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Secundario y Universidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, EducacionComponent_div_37_Template, 7, 0, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, EducacionComponent_div_38_Template, 35, 27, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h1", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "CURSOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, EducacionComponent_div_41_Template, 33, 31, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "EDUCACION");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1900 - 1 - 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tipo_educacion);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.token);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.edu1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.edu2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
  styles: ["*[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nh5[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.cerrar[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5%;\n}\n\n.eduw[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  min-height: 100vh;\n}\n\n.edu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1%;\n}\n\n.img[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 2.5px;\n  width: 290px;\n  height: 80px;\n  transition: 1s ease all;\n}\n\n.biomedic[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  display: flex;\n  width: max-content;\n  border-style: none;\n  height: 400px;\n}\n\n.img[_ngcontent-%COMP%] {\n  position: relative;\n  border-style: solid;\n  border-color: #1e80b1;\n  min-width: 300px;\n  max-width: 300px;\n  height: 400px;\n  background-image: radial-gradient(#1e80b1, #206487);\n  z-index: 1;\n  overflow: hidden;\n}\n\n.img[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #4eccfa, #4ec5ff);\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: #4eccfa;\n}\n\nsvg[_ngcontent-%COMP%]:hover {\n  fill: #1A9FFF;\n}\n\n.info[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  visibility: hidden;\n  opacity: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  height: 250px;\n  width: 160px;\n  top: 70%;\n  left: 25%;\n  transition: 1s ease all;\n  overflow: scroll;\n}\n\n.button[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.agregar[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 100px;\n  left: 50px;\n}\n\n.agregar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1A9FFF;\n}\n\n.mod[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 0;\n  right: 10px;\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n  margin: 10px;\n  z-index: 1;\n  background: transparent;\n  border: none;\n}\n\n.mod1[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n  top: 0;\n  left: 0;\n}\n\n.mod1--crear[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.mod1--borrar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.mod1--borrar[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.mod1[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.mod[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  align-items: center;\n  fill: #1A9FFF;\n  width: 20px;\n  height: 20px;\n  margin: 10px;\n}\n\n.mod[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.edit[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 300px;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.edicion[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #206487;\n  border: none;\n}\n\n.nombre[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  height: 50px;\n  border: solid hsl(200, 71%, 41%);\n  border-radius: 5px;\n}\n\n.trabajo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.fecha[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  height: max-content;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 95vw;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 20px;\n}\n\n.rol[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  margin-right: 5px;\n  margin-left: 5px;\n  height: max-content;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.div_new[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  height: 70%;\n  width: 100%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.264);\n}\n\n.new__add[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #194766;\n  width: 400px;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  border: solid #1e80b1;\n  z-index: 6;\n}\n\n.new__add--form[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: solid #1e80b1;\n}\n\n.menu__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: transparent;\n  border: none;\n  width: 25px;\n  z-index: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n}\n\n.ocultar[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n  opacity: 0;\n}\n\n@media (max-width: 950px) {\n  .eduw[_ngcontent-%COMP%] {\n    min-height: 61vh;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    transform: scale(0.75);\n    overflow-x: scroll;\n    overflow-y: hidden;\n    flex-wrap: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lZHVjYWNpb24vZWR1Y2FjaW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vY3Vyc28lMjBhcmdlbnRpbmElMjBwcm9ncm1hL1BvcnRmb2xpby9Gcm9udC1FbmQvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9lZHVjYWNpb24vZWR1Y2FjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDS0o7O0FESEE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLDBEQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0FDWUo7O0FEVkE7RUFDSSxhQUFBO0FDYUo7O0FEWEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSxhQUFBO0FDZUo7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNnQko7O0FEZEE7RUFDSSxhQUFBO0FDaUJKOztBRGZBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNrQko7O0FEaEJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ21CSjs7QURqQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ29CSjs7QURsQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ3FCSjs7QURuQkE7RUFDSSxtRUFBQTtBQ3NCSjs7QURwQkE7RUFDSSxtRUFBQTtBQ3VCSjs7QURyQkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksa0JBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1FQUFBO0FDMEJKOztBRHhCQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDMkJKOztBRHpCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUM0Qko7O0FEMUJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQzhCSjs7QUQ1QkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDK0JKOztBRDdCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDZ0NKOztBRDlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FDaUNKOztBRC9CQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNrQ0o7O0FEaENBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ21DSjs7QURqQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNvQ0o7O0FEbENBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNxQ0o7O0FEbkNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3NDSjs7QURwQ0E7RUFDSTtJQUNJLGdCQUFBO0VDdUNOO0VEckNFO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtJQUFtQixrQkFBQTtJQUNuQixpQkFBQTtFQ3dDTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5oNntcbiAgICBtYXJnaW46IDVweDtcbn1cbmg1IHtcbiAgICBtYXJnaW46IDVweDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4uY2VycmFye1xuICAgIG1hcmdpbjogMSU7XG59XG5oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cbi5lZHV3e1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmVkdXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xufVxuLmltZyAuaW1hZ2VuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTBweDtcbiAgICBsZWZ0OiAyLjVweDtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2UgYWxsO1xufVxuLmJpb21lZGljIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNDAwcHg7XG59XG4uaW1ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItc3R5bGU6ICBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICMxZTgwYjE7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoICMxZTgwYjEsICMyMDY0ODcpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWc6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0ZWNjZmEsIzRlYzVmZik7XG59XG5zdmd7XG4gICAgZmlsbDogIzRlY2NmYTtcbn1cbnN2Zzpob3ZlcntcbiAgICBmaWxsOiAjMUE5RkZGO1xufVxuLmluZm97XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHRvcDo3MCU7XG4gICAgbGVmdDoyNSU7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZSBhbGw7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5idXR0b257XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5hZ3JlZ2Fye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiA1MHB4O1xufVxuLmFncmVnYXIgc3Zne1xuICAgIGZpbGw6ICMxQTlGRkY7XG59XG4ubW9ke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLm1vZDF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOjEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDowO1xufVxuLm1vZDEtLWNyZWFye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjoxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHotaW5kZXg6IDI7XG59XG4ubW9kMS0tYm9ycmFye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjoxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHotaW5kZXg6IDI7XG59XG4ubW9kMS0tYm9ycmFyOmhvdmVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NDc2NiwgIzIwNjQ4NywgIzE5NDc2Nik7XG59XG4ubW9kMTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuLm1vZCBzdmd7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmaWxsOiAjMUE5RkZGO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4ubW9ke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGl0e1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NDc2NiwgIzIwNjQ4NywgIzE5NDc2Nik7XG59XG4uZWRpY2lvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNjQ4NztcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ubm9tYnJle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IHNvbGlkIGhzbCgyMDAsIDcxJSwgNDElKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udHJhYmFqb3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5mZWNoYXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICB3aWR0aDogOTV2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG4ucm9se1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5kaXZfbmV3e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOjA7XG4gICAgei1pbmRleDogNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjY0KTtcbn1cbi5uZXdfX2FkZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDc2NjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgICB6LWluZGV4OiA2O1xufVxuLm5ld19fYWRkLS1mb3Jte1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG59XG4ubWVudV9fYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOjI1cHg7XG4gICAgei1pbmRleDogMDtcbn1cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG4ub2N1bHRhcntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xufVxuQG1lZGlhKG1heC13aWR0aDo5NTBweCkge1xuICAgIC5lZHV3e1xuICAgICAgICBtaW4taGVpZ2h0OiA2MXZoO1xuICAgIH1cbiAgICAuY29udGFpbmVyLWZsdWlke1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7b3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICB9XG59IiwiKiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDYge1xuICBtYXJnaW46IDVweDtcbn1cblxuaDUge1xuICBtYXJnaW46IDVweDtcbn1cblxucCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY2VycmFyIHtcbiAgbWFyZ2luOiAxJTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5lZHV3IHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uZWR1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuLmltZyAuaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiAyLjVweDtcbiAgd2lkdGg6IDI5MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHRyYW5zaXRpb246IDFzIGVhc2UgYWxsO1xufVxuXG4uYmlvbWVkaWMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzFlODBiMTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMxZTgwYjEsICMyMDY0ODcpO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNGVjY2ZhLCAjNGVjNWZmKTtcbn1cblxuc3ZnIHtcbiAgZmlsbDogIzRlY2NmYTtcbn1cblxuc3ZnOmhvdmVyIHtcbiAgZmlsbDogIzFBOUZGRjtcbn1cblxuLmluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIHRvcDogNzAlO1xuICBsZWZ0OiAyNSU7XG4gIHRyYW5zaXRpb246IDFzIGVhc2UgYWxsO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmFncmVnYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiA1MHB4O1xufVxuXG4uYWdyZWdhciBzdmcge1xuICBmaWxsOiAjMUE5RkZGO1xufVxuXG4ubW9kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm1vZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ubW9kMS0tY3JlYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgei1pbmRleDogMjtcbn1cblxuLm1vZDEtLWJvcnJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubW9kMS0tYm9ycmFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk0NzY2LCAjMjA2NDg3LCAjMTk0NzY2KTtcbn1cblxuLm1vZDE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuXG4ubW9kIHN2ZyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZpbGw6ICMxQTlGRkY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1vZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVkaXQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NDc2NiwgIzIwNjQ4NywgIzE5NDc2Nik7XG59XG5cbi5lZGljaW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA2NDg3O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5ub21icmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgaHNsKDIwMCwgNzElLCA0MSUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50cmFiYWpvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZmVjaGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogOTV2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5yb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZGl2X25ldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2NCk7XG59XG5cbi5uZXdfX2FkZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDc2NjtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG4gIHotaW5kZXg6IDY7XG59XG5cbi5uZXdfX2FkZC0tZm9ybSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xufVxuXG4ubWVudV9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgei1pbmRleDogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5vY3VsdGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLmVkdXcge1xuICAgIG1pbi1oZWlnaHQ6IDYxdmg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3605:
/*!*****************************************************************!*\
  !*** ./src/app/components/experiencia/experiencia.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciaComponent": () => (/* binding */ ExperienciaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_datos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/datos.service */ 8599);
/* harmony import */ var src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/autenticacion.service */ 3315);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 4662);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ 3646);








const _c0 = ["info"];
const _c1 = ["imagen"];
const _c2 = ["edit"];
const _c3 = ["editar"];
const _c4 = ["edicion"];
const _c5 = ["trabajo"];
const _c6 = ["newWork"];
function ExperienciaComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_trabajo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", tipo_trabajo_r4.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tipo_trabajo_r4.rol);
  }
}
function ExperienciaComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaComponent_div_35_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.agregarTrabajo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 33)(6, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
const _c7 = function (a0) {
  return {
    "display": a0
  };
};
function ExperienciaComponent_div_36_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaComponent_div_36_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const exp_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](exp_r8.edit = !exp_r8.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "EDITAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exp_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c7, exp_r8.edit ? "none" : "block"));
  }
}
function ExperienciaComponent_div_36_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_trabajo_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", tipo_trabajo_r18.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tipo_trabajo_r18.rol);
  }
}
const _c8 = function (a0, a1, a2) {
  return {
    "visibility": a0,
    "opacity": a1,
    "top": a2
  };
};
const _c9 = function (a0, a1) {
  return {
    "display": a0,
    "z-index": a1
  };
};
function ExperienciaComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExperienciaComponent_div_36_button_1_Template, 4, 3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaComponent_div_36_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const exp_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](exp_r8.selected = !exp_r8.selected);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 40)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "H5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "form", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ExperienciaComponent_div_36_Template_form_ngSubmit_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const exp_r8 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r21.EditarTrabajo(exp_r8.id, ctx_r21.form2.value);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](exp_r8.edit = !exp_r8.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7)(18, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaComponent_div_36_Template_input_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const exp_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](exp_r8.edit = !exp_r8.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "datalist", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ExperienciaComponent_div_36_option_32_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 48)(34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "GUARDAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const exp_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c7, exp_r8.edit ? "none" : "block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](15, _c8, exp_r8.selected ? "hidden" : "visible", exp_r8.selected ? "0" : "1", exp_r8.selected ? "70%" : "150px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exp_r8.nombreEmpresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](19, _c8, exp_r8.selected ? "visible" : "hidden", exp_r8.selected ? "1" : "0", exp_r8.selected ? "107px" : "70%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exp_r8.nombreEmpresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exp_r8.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Inicio:", exp_r8.fechaInicio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Fin:", exp_r8.fechaFin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.form2)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c9, exp_r8.edit ? "flex" : "none", exp_r8.edit ? "2" : "-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 1900 - 1 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.tipo_Trabajo);
  }
}
class ExperienciaComponent {
  constructor(render2, service, formBuilder, service2) {
    this.render2 = render2;
    this.service = service;
    this.formBuilder = formBuilder;
    this.service2 = service2;
    this.token = localStorage.getItem('token');
    this.show = 0;
    this.exp = [];
    this.tipo_Trabajo = [];
    this.usuario = [];
    this.form = this.formBuilder.group({
      nombreEmpresa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      fechaInicio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      fechaFin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      tipo_Trabajo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
    this.form2 = this.formBuilder.group({
      nombreEmpresa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      fechaInicio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      fechaFin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      tipo_Trabajo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
  }
  ObtenerDatos() {
    this.service.DatosTrabajo().subscribe(data => {
      console.log(data);
      this.exp = data;
    });
    this.service.tipoT().subscribe(data2 => {
      this.tipo_Trabajo = data2;
    });
  }
  ngOnInit() {
    this.ObtenerDatos();
  }
  EditInfo() {
    const edit = this.edit.nativeElement;
    const editar = this.editar.nativeElement;
    const edicion = this.edicion.nativeElement;
    const trabajo = this.trabajo.nativeElement;
    this.render2.setStyle(edit, 'display', 'block');
    this.render2.setStyle(editar, 'display', 'none');
    this.render2.setStyle(edicion, 'display', 'flex');
    this.render2.setStyle(trabajo, 'z-index', '-1');
    this.render2.setStyle(trabajo, 'display', 'none');
  }
  SaveInfo() {
    const edit = this.edit.nativeElement;
    const editar = this.editar.nativeElement;
    const edicion = this.edicion.nativeElement;
    const trabajo = this.trabajo.nativeElement;
    this.render2.setStyle(edit, 'display', 'none');
    this.render2.setStyle(editar, 'display', 'block');
    this.render2.setStyle(edicion, 'display', 'none');
    this.render2.setStyle(trabajo, 'z-index', '0');
    this.render2.setStyle(trabajo, 'display', 'block');
  }
  agregarTrabajo() {
    const newWork = this.newWork.nativeElement;
    this.render2.setStyle(newWork, 'display', 'flex');
  }
  NewWork(form) {
    this.service.CrearTrabajo(form).subscribe(data2 => {
      console.log(data2);
      const newWork = this.newWork.nativeElement;
      this.render2.setStyle(newWork, 'display', 'none');
      this.ObtenerDatos;
    }), error => {
      console.error(error);
    };
  }
  cerrarVentana() {
    const newWork = this.newWork.nativeElement;
    this.render2.setStyle(newWork, 'display', 'none');
  }
  EditarTrabajo(id, form2) {
    console.log('ID del trabajo a editar:', id);
    this.service.EditarTrabajo(id, form2);
    this.ObtenerDatos();
  }
}
ExperienciaComponent.ɵfac = function ExperienciaComponent_Factory(t) {
  return new (t || ExperienciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_datos_service__WEBPACK_IMPORTED_MODULE_0__.DatosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__.AutenticacionService));
};
ExperienciaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ExperienciaComponent,
  selectors: [["app-experiencia"]],
  viewQuery: function ExperienciaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c6, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.info = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.imagen = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.edit = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.editar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.edicion = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.trabajo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.newWork = _t.first);
    }
  },
  decls: 38,
  vars: 6,
  consts: [[3, "label"], ["id", "2", 1, "eduw"], [1, "div_new"], ["newWork", ""], [1, "new__add"], ["action", "", "method", "post", 1, "new__add--form", 3, "formGroup", "ngSubmit"], [1, "edit", "container-fluid", 2, "width", "400px", "height", "500px"], [1, "menu__button"], ["type", "button", "value", "    ", 1, "menu__button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg", 2, "z-index", "1"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], ["for", "nombreEmpresa"], [1, "text-center"], ["type", "text", "id", "nombreEmpresa", "formControlName", "nombreEmpresa", 1, "form-control", "edicion", "nombre"], ["for", "descripcion"], ["type", "text", "id", "descripcion", "formControlName", "descripcion", 1, "form-control", "edicion", "trabajo"], ["for", "fechaInicio", 2, "width", "50%"], ["type", "date", "id", "fechaInicio", "formControlName", "fechaInicio", 1, "form-control", "edicion", "fecha", 2, "margin-right", "5px", 3, "min"], ["for", "fechaFin", 2, "width", "50%"], ["type", "date", "id", "fechaFin", "formControlName", "fechaFin", 1, "form-control", "edicion", "fecha", 2, "margin-left", "5px"], ["for", "tipo_Trabajo"], ["type", "text", "list", "input", "id", "tipo_Trabajo", "formControlName", "tipo_Trabajo", 1, "form-control", "edicion", "rol"], ["id", "input", 2, "z-index", "11"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", "value", "CREAR", 1, "mod1--crear"], [1, "container-fluid", 2, "min-height", "400px"], [4, "ngIf"], ["class", "container", "style", "width: 300px; margin-left: 10px; margin-right: 5px; height: 400px;", 4, "ngFor", "ngForOf"], [3, "value"], [1, "container", "img", "col", 3, "click"], [1, "agregar"], ["xmlns", "http://www.w3.org/2000/svg", "width", "200", "height", "200", "fill", "#1A9FFF", "viewBox", "0 0 16 16", 1, "bi", "bi-plus-circle"], ["agregar", ""], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"], [1, "container", 2, "width", "300px", "margin-left", "10px", "margin-right", "5px", "height", "400px"], ["class", "mod1", 3, "ngStyle", "click", 4, "ngIf"], [1, "img", "col", 3, "ngStyle", "click"], ["trabajo", ""], [1, "imagen", 2, "position", "absolute", "z-index", "0", 3, "ngStyle"], [1, "info", 2, "position", "absolute", "z-index", "0", 3, "ngStyle"], [2, "width", "100%"], ["action", "", "method", "put", 1, "edit", 2, "display", "none", "z-index", "10", 3, "formGroup", "ngStyle", "ngSubmit"], ["edicion", ""], ["type", "button", "value", "", 1, "menu__button", 3, "click"], ["for", "fechaInicio", 2, "width", "45%"], ["for", "fechaFin", 2, "width", "45%"], ["id", "input", 2, "z-index", "10"], [1, "mod1--borrar"], [1, "mod1", 3, "ngStyle", "click"], ["editar", ""]],
  template: function ExperienciaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2, 3)(4, "div", 4)(5, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ExperienciaComponent_Template_form_ngSubmit_5_listener() {
        return ctx.NewWork(ctx.form.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaComponent_Template_input_click_8_listener() {
        return ctx.cerrarVentana();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 11)(12, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Nombre de la empresa");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 14)(16, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Descripcion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 16)(20, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Fecha de inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 18)(24, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Fecha final");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 20)(28, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Tipo de trabajo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "datalist", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ExperienciaComponent_option_32_Template, 2, 2, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ExperienciaComponent_div_35_Template, 7, 0, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ExperienciaComponent_div_36_Template, 36, 26, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "EXPERIENCIA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 1900 - 1 - 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tipo_Trabajo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.token);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.exp);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent],
  styles: ["*[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nh5[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.cerrar[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5%;\n}\n\n.eduw[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  min-height: 100vh;\n}\n\n.edu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1%;\n}\n\n.img[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 2.5px;\n  width: 290px;\n  height: 80px;\n  transition: 1s ease all;\n}\n\n.biomedic[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  display: flex;\n  width: max-content;\n  border-style: none;\n  height: 400px;\n}\n\n.img[_ngcontent-%COMP%] {\n  position: relative;\n  border-style: solid;\n  border-color: #1e80b1;\n  min-width: 300px;\n  max-width: 300px;\n  height: 400px;\n  background-image: radial-gradient(#1e80b1, #206487);\n  z-index: 1;\n}\n\n.img[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #4eccfa, #4ec5ff);\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: #4eccfa;\n}\n\nsvg[_ngcontent-%COMP%]:hover {\n  fill: #1A9FFF;\n}\n\n.info[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  visibility: hidden;\n  opacity: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  height: 93px;\n  width: 160px;\n  top: 70%;\n  left: 25%;\n  transition: 1s ease all;\n}\n\n.button[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.agregar[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 100px;\n  left: 50px;\n}\n\n.agregar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1A9FFF;\n}\n\n.mod[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 0;\n  right: 10px;\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n  margin: 10px;\n  z-index: 1;\n  background: transparent;\n  border: none;\n}\n\n.mod1[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.mod1--crear[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.mod1--borrar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.mod1--borrar[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.mod1[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.mod[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  align-items: center;\n  fill: #1A9FFF;\n  width: 20px;\n  height: 20px;\n  margin: 10px;\n}\n\n.mod[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.edit[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  width: 300px;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.edicion[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #206487;\n  border: none;\n}\n\n.nombre[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  height: 50px;\n  border: solid hsl(200, 71%, 41%);\n  border-radius: 5px;\n}\n\n.trabajo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.fecha[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  height: max-content;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 400px;\n  display: flex;\n  overflow: auto;\n}\n\n.rol[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  margin-right: 5px;\n  margin-left: 5px;\n  height: max-content;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.div_new[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  height: 70%;\n  width: 100%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.264);\n}\n\n.new__add[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #194766;\n  width: 400px;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  border: solid #1e80b1;\n  z-index: 6;\n}\n\n.new__add--form[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: solid #1e80b1;\n}\n\n.menu__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: transparent;\n  border: none;\n  width: 25px;\n  z-index: 0;\n}\n\n.menu__button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n\n@media (max-width: 950px) {\n  .eduw[_ngcontent-%COMP%] {\n    min-height: 61vh;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    transform: scale(0.75);\n    overflow-x: scroll;\n    overflow-y: hidden;\n    flex-wrap: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNpYS9leHBlcmllbmNpYS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL2N1cnNvJTIwYXJnZW50aW5hJTIwcHJvZ3JtYS9Qb3J0Zm9saW8vRnJvbnQtRW5kL1BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jaWEvZXhwZXJpZW5jaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNRSjs7QUROQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtFQUNBLFVBQUE7QUNVSjs7QURQQTtFQUNJLDBEQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0FDWUo7O0FEVkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQ2FKOztBRFhBO0VBQ0ksYUFBQTtBQ2NKOztBRFpBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDZUo7O0FEYkE7RUFDSSxhQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNpQko7O0FEZkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ2tCSjs7QURoQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ21CSjs7QURqQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ29CSjs7QURsQkE7RUFDSSxtRUFBQTtBQ3FCSjs7QURuQkE7RUFDSSxtRUFBQTtBQ3NCSjs7QURwQkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUN1Qko7O0FEckJBO0VBQ0ksa0JBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUVBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUMwQko7O0FEeEJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQzJCSjs7QUR6QkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQzRCSjs7QUQxQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDNkJKOztBRDNCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUM4Qko7O0FENUJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUMrQko7O0FEN0JBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUNnQ0o7O0FEOUJBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ2lDSjs7QUQvQkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDa0NKOztBRGhDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ21DSjs7QURqQ0E7RUFDSSxXQUFBO0FDb0NKOztBRGxDQTtFQUNJO0lBQ0ksZ0JBQUE7RUNxQ047RURuQ0U7SUFDSSxzQkFBQTtJQUNBLGtCQUFBO0lBQW1CLGtCQUFBO0lBQ25CLGlCQUFBO0VDc0NOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmg2e1xuICAgIG1hcmdpbjogNXB4O1xufVxuaDUge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDVweDtcbn1cbi5jZXJyYXJ7XG4gICAgbWFyZ2luOiAxJTtcbn1cbmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLmVkdXd7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uZWR1e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG4uaW1nIC5pbWFnZW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDIuNXB4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZSBhbGw7XG59XG4uYmlvbWVkaWMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5pbWd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1zdHlsZTogIHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzFlODBiMTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnJhZGlhbC1ncmFkaWVudCggIzFlODBiMSwgIzIwNjQ4Nyk7XG4gICAgei1pbmRleDogMTtcblxufVxuLmltZzpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRlY2NmYSwjNGVjNWZmKTtcbn1cbnN2Z3tcbiAgICBmaWxsOiAjNGVjY2ZhO1xufVxuc3ZnOmhvdmVye1xuICAgIGZpbGw6ICMxQTlGRkY7XG59XG4uaW5mb3tcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICB0b3A6NzAlO1xuICAgIGxlZnQ6MjUlO1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2UgYWxsO1xufVxuLmJ1dHRvbntcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuLmFncmVnYXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDUwcHg7XG59XG4uYWdyZWdhciBzdmd7XG4gICAgZmlsbDogIzFBOUZGRjtcbn1cbi5tb2R7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOjA7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ubW9kMXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46MTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB6LWluZGV4OiAyO1xufVxuLm1vZDEtLWNyZWFye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjoxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHotaW5kZXg6IDI7XG59XG4ubW9kMS0tYm9ycmFye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjoxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHotaW5kZXg6IDI7XG59XG4ubW9kMS0tYm9ycmFyOmhvdmVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NDc2NiwgIzIwNjQ4NywgIzE5NDc2Nik7XG59XG4ubW9kMTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuLm1vZCBzdmd7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmaWxsOiAjMUE5RkZGO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4ubW9ke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGl0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuLmVkaWNpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDY0ODc7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLm5vbWJyZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCBoc2woMjAwLCA3MSUsIDQxJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRyYWJham97XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZmVjaGF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXItZmx1aWR7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5yb2x7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmRpdl9uZXd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0b3A6MDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNjQpO1xufVxuLm5ld19fYWRke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0NzY2O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICAgIHotaW5kZXg6IDY7XG59XG4ubmV3X19hZGQtLWZvcm17XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogc29saWQgIzFlODBiMTtcbn1cbi5tZW51X19idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6MjVweDtcbiAgICB6LWluZGV4OiAwO1xufVxuLm1lbnVfX2J1dHRvbiBzdmd7XG4gICAgei1pbmRleDogMTA7XG59XG5AbWVkaWEobWF4LXdpZHRoOjk1MHB4KSB7XG4gICAgLmVkdXd7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYxdmg7XG4gICAgfVxuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIH1cbn0iLCIqIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oNiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5oNSB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jZXJyYXIge1xuICBtYXJnaW46IDElO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmVkdXcge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5lZHUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDElO1xufVxuXG4uaW1nIC5pbWFnZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDIuNXB4O1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogODBweDtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZSBhbGw7XG59XG5cbi5iaW9tZWRpYyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMWU4MGIxO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzFlODBiMSwgIzIwNjQ4Nyk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5pbWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0ZWNjZmEsICM0ZWM1ZmYpO1xufVxuXG5zdmcge1xuICBmaWxsOiAjNGVjY2ZhO1xufVxuXG5zdmc6aG92ZXIge1xuICBmaWxsOiAjMUE5RkZGO1xufVxuXG4uaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogOTNweDtcbiAgd2lkdGg6IDE2MHB4O1xuICB0b3A6IDcwJTtcbiAgbGVmdDogMjUlO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlIGFsbDtcbn1cblxuLmJ1dHRvbiB7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5hZ3JlZ2FyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogNTBweDtcbn1cblxuLmFncmVnYXIgc3ZnIHtcbiAgZmlsbDogIzFBOUZGRjtcbn1cblxuLm1vZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdG9wOiAwO1xuICByaWdodDogMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tb2QxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5tb2QxLS1jcmVhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubW9kMS0tYm9ycmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5tb2QxLS1ib3JyYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuXG4ubW9kMTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NDc2NiwgIzIwNjQ4NywgIzE5NDc2Nik7XG59XG5cbi5tb2Qgc3ZnIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmlsbDogIzFBOUZGRjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubW9kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZWRpdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuXG4uZWRpY2lvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNjQ4NztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubm9tYnJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIGhzbCgyMDAsIDcxJSwgNDElKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udHJhYmFqbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZlY2hhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kaXZfbmV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjY0KTtcbn1cblxuLm5ld19fYWRkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk0NzY2O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgei1pbmRleDogNjtcbn1cblxuLm5ld19fYWRkLS1mb3JtIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG59XG5cbi5tZW51X19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAwO1xufVxuXG4ubWVudV9fYnV0dG9uIHN2ZyB7XG4gIHotaW5kZXg6IDEwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLmVkdXcge1xuICAgIG1pbi1oZWlnaHQ6IDYxdmg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 22,
  vars: 0,
  consts: [[1, "footer", "container-fluid", "text-center"], [1, "row"], [1, "col"], ["src", "../../../assets/imagenes/angular-icon-1-logo-png-transparent-1877748284.png", "alt", "", 1, "img-fluid"], [1, "text"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-envelope", "gw"], ["d", "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-whatsapp", "gw"], ["d", "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Powered by Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CONTACTO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "agusdor16@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1144729261");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1)(20, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Copyright 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #163e58;\n}\n\nh4[_ngcontent-%COMP%] {\n  height: max-content;\n}\n\nimg[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  margin-left: 5px;\n}\n\nsvg[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: white;\n}\n\n.redes[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  height: max-content;\n  width: 50px;\n  right: 40%;\n}\n\n.icons[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 25px;\n  height: max-content;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vY3Vyc28lMjBhcmdlbnRpbmElMjBwcm9ncm1hL1BvcnRmb2xpby9Gcm9udC1FbmQvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0EsbUJBQUE7QUNFQTs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDS0o7O0FERkE7RUFDSSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNLSiIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5mb290ZXJ7XG5iYWNrZ3JvdW5kOiAjMTYzZTU4O1xufVxuaDR7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cbmltZ3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5zdmd7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG4ucmVkZXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICB3aWR0aDogNTBweDtcbiAgICByaWdodDogNDAlO1xufVxuLmljb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRvcDogMjVweDtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNjNlNTg7XG59XG5cbmg0IHtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cblxuaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbnN2ZyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZWRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgd2lkdGg6IDUwcHg7XG4gIHJpZ2h0OiA0MCU7XG59XG5cbi5pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdG9wOiAyNXB4O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  inputs: {
    label: "label"
  },
  decls: 7,
  vars: 1,
  consts: [[1, "cerrar"], ["routerLink", "/"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left-circle-fill"], ["d", "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"], [1, "edu"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5%;\n}\n\n.edu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1%;\n}\n\n.cerrar[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: #4eccfa;\n}\n\nsvg[_ngcontent-%COMP%]:hover {\n  fill: #1A9FFF;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vY3Vyc28lMjBhcmdlbnRpbmElMjBwcm9ncm1hL1BvcnRmb2xpby9Gcm9udC1FbmQvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7QUNLSiIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLmVkdXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xufVxuLmNlcnJhcntcbiAgICBtYXJnaW46IDElO1xufVxuc3Zne1xuICAgIGZpbGw6ICM0ZWNjZmE7XG59XG5zdmc6aG92ZXJ7XG4gICAgZmlsbDogIzFBOUZGRjtcbn0iLCJoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmVkdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5jZXJyYXIge1xuICBtYXJnaW46IDElO1xufVxuXG5zdmcge1xuICBmaWxsOiAjNGVjY2ZhO1xufVxuXG5zdmc6aG92ZXIge1xuICBmaWxsOiAjMUE5RkZGO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_datos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/datos.service */ 8599);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 4662);






const _c0 = ["menu"];
const _c1 = ["redes"];
const _c2 = ["contacto"];
const _c3 = ["contacto2"];
const _c4 = ["redes2"];
const _c5 = ["ocultar"];
const _c6 = ["datos"];
const _c7 = ["logo"];
const _c8 = ["lvl"];
const _c9 = ["signup"];
const _c10 = ["login"];
const _c11 = ["signup2"];
const _c12 = ["login2"];
const _c13 = ["user"];
const _c14 = ["sesion"];
function HomeComponent_h4_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const descripcion_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](descripcion_r45);
  }
}
const _c15 = function (a0) {
  return {
    "display": a0
  };
};
const _c16 = function (a0, a1, a2) {
  return {
    "visibility": a0,
    "opacity": a1,
    "top": a2
  };
};
function HomeComponent_div_255_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 126)(1, "button", 127, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_255_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const pro_r46 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](pro_r46.selected = !pro_r46.selected);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 130)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "H6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_255_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const pro_r46 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.redireccionar(pro_r46.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "IR AL SITIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const pro_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c15, pro_r46.edit ? "none" : "block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](9, _c16, pro_r46.selected ? "hidden" : "visible", pro_r46.selected ? "0" : "1", pro_r46.selected ? "70%" : "150px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](pro_r46.nombreProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](13, _c16, pro_r46.selected ? "visible" : "hidden", pro_r46.selected ? "1" : "0", pro_r46.selected ? "107px" : "70%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](pro_r46.nombreProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](pro_r46.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Lanzamiento: ", pro_r46.fecha_Lanz, "");
  }
}
class HomeComponent {
  redireccionar(url) {
    window.open(url, '_blank');
  }
  constructor(render2, service) {
    this.render2 = render2;
    this.service = service;
    this.title = 'Portfolio';
    this.users = [];
    this.pro = [];
    this.desc = ['Técnico electrónico y desarrollador web full stack'];
    this.menus = 0;
    this.menu2 = 0;
    this.skill = 0;
  }
  ngOnInit() {
    this.service.DatosPersonas().subscribe(data2 => {
      this.users = data2;
      console.log(data2);
    });
    this.service.DatosProyectos().subscribe(data => {
      this.pro = data;
      console.log(data);
    });
  }
  ngAfterViewInit() {
    const token = localStorage.getItem('token');
    if (token) {
      const login = this.login.nativeElement;
      const signup = this.signup.nativeElement;
      const user = this.user.nativeElement;
      const sesion = this.sesion.nativeElement;
      const login2 = this.login2.nativeElement;
      const signup2 = this.signup2.nativeElement;
      this.render2.setStyle(login, 'display', 'none');
      this.render2.setStyle(signup, 'display', 'none');
      this.render2.setStyle(sesion, 'display', 'none;');
      this.render2.setStyle(login2, 'display', 'none');
      this.render2.setStyle(signup2, 'display', 'none');
      this.render2.setStyle(user, 'display', 'block');
    } else {
      const login = this.login.nativeElement;
      const signup = this.signup.nativeElement;
      const user = this.user.nativeElement;
      const sesion = this.sesion.nativeElement;
      const login2 = this.login2.nativeElement;
      const signup2 = this.signup2.nativeElement;
      this.render2.setStyle(login, 'display', 'block');
      this.render2.setStyle(signup, 'display', 'block');
      this.render2.setStyle(sesion, 'display', 'block');
      this.render2.setStyle(login2, 'display', 'block');
      this.render2.setStyle(signup2, 'display', 'block');
      this.render2.setStyle(user, 'display', 'none');
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    const login = this.login.nativeElement;
    const signup = this.signup.nativeElement;
    const login2 = this.login2.nativeElement;
    const signup2 = this.signup2.nativeElement;
    const sesion = this.sesion.nativeElement;
    const user = this.user.nativeElement;
    this.render2.setStyle(login, 'display', 'block');
    this.render2.setStyle(signup, 'display', 'block');
    this.render2.setStyle(login2, 'display', 'block');
    this.render2.setStyle(signup2, 'display', 'block');
    this.render2.setStyle(sesion, 'display', 'block');
    this.render2.setStyle(user, 'display', 'none');
  }
  showMenu() {
    const menu = this.menu.nativeElement;
    const ocultar = this.ocultar.nativeElement;
    console.log(this.menu);
    this.render2.addClass(menu, 'menu__button--mostrar');
    this.render2.addClass(ocultar, 'ocultar');
  }
  hiddenMenu() {
    const menu = this.menu.nativeElement;
    const redes = this.redes.nativeElement;
    const redes2 = this.redes2.nativeElement;
    const contacto = this.contacto.nativeElement;
    const contacto2 = this.contacto2.nativeElement;
    const ocultar = this.ocultar.nativeElement;
    this.render2.removeClass(menu, 'menu__button--mostrar');
    this.render2.removeClass(contacto, 'container__li--expand');
    this.render2.removeClass(contacto2, 'li__container--expand');
    this.render2.removeClass(redes, 'container__li--expand');
    this.render2.removeClass(redes2, 'li__container--expand');
    this.render2.removeClass(ocultar, 'ocultar');
    this.menus = 0;
    this.menu2 = 0;
  }
  showIcons() {
    const redes = this.redes.nativeElement;
    const redes2 = this.redes2.nativeElement;
    this.render2.addClass(redes, 'container__li--expand');
    this.render2.addClass(redes2, 'li__container--expand');
    this.menus++;
    if (this.menus == 2) {
      this.render2.removeClass(redes, 'container__li--expand');
      this.render2.removeClass(redes2, 'li__container--expand');
      this.menus = 0;
    }
  }
  showIcons2() {
    const contacto = this.contacto.nativeElement;
    const contacto2 = this.contacto2.nativeElement;
    this.render2.addClass(contacto2, 'li__container--expand');
    this.render2.addClass(contacto, 'container__li--expand');
    this.menu2++;
    if (this.menu2 == 2) {
      this.render2.removeClass(contacto2, 'li__container--expand');
      this.render2.removeClass(contacto, 'container__li--expand');
      this.menu2 = 0;
    }
  }
  skillON(dato = this.datos.nativeElement, logo = this.datos.nativeElement, lvl = this.lvl.nativeElement) {
    this.render2.setStyle(logo, 'opacity', '0');
    this.render2.setStyle(dato, 'opacity', '100%');
    this.render2.setStyle(lvl, 'opacity', '100%');
  }
  skillOF(dato = this.datos.nativeElement, logo = this.datos.nativeElement, lvl = this.lvl.nativeElement) {
    this.render2.setStyle(dato, 'opacity', '0');
    this.render2.setStyle(logo, 'opacity', '100%');
    this.render2.setStyle(lvl, 'opacity', '0');
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_datos_service__WEBPACK_IMPORTED_MODULE_0__.DatosService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c8, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c9, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c10, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c11, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c12, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c13, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c14, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.redes = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contacto = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contacto2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.redes2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ocultar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.datos = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.logo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lvl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.signup = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.login = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.signup2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.login2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.user = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sesion = _t.first);
    }
  },
  decls: 261,
  vars: 3,
  consts: [[1, "algo"], ["ocultar", ""], [1, "header"], [1, "menu"], ["menu", ""], [1, "menu__container", "container-fluid"], [1, "menu__button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], [1, "ul"], [1, "container__li", "col"], ["contacto", ""], [1, "li__button", 3, "click"], [1, "li__container"], ["contacto2", ""], [1, "container__section", "row"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-envelope", "gw"], ["d", "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-whatsapp", "gw"], ["d", "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"], [1, "container__li", "col", "li__container--redes"], ["redes", ""], ["redes2", ""], [1, "col", 2, "margin-top", "10px"], ["href", "https://www.instagram.com/agus_doricich"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-instagram"], ["d", "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"], ["href", "https://www.facebook.com/agustin.francisco.1690"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-facebook"], ["d", "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"], ["href", "https://www.linkedin.com/in/agustin-doricich-96891b211"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-linkedin"], ["d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"], ["href", ""], ["xmlns", "http://www.w3.org/2000/svg", "wift", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-github"], ["d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"], ["info", ""], ["routerLink", "/proyectos", 1, "li__button"], ["routerLink", "/experiencia", 1, "li__button"], ["routerLink", "/educacion", 1, "li__button"], [1, "nav__ul", "nav__ul--menu"], [2, "width", "max-content"], ["signup", ""], ["routerLink", "/SignUp", 1, "ul__boton", "ul__boton--adentro"], ["login", ""], ["routerLink", "/LogIn", 1, "ul__boton", "ul__boton--adentro"], [1, "header__nav"], [1, "nav__yoprogramo"], [1, "nav__ul", "nav__ul--inicio"], ["signup2", ""], ["routerLink", "/SignUp", 1, "ul__boton", "ul__boton--fuera"], ["login2", ""], ["routerLink", "/LogIn", 1, "ul__boton", "ul__boton--fuera"], [1, "ul__boton--logout", 2, "display", "none"], ["user", ""], [1, "ul__boton", 3, "click"], [1, "ul__boton--logout", "ul__boton--menu"], [1, "ul__boton", "ul__boton--movil", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-list"], ["fill-rule", "evenodd", "d", "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"], [1, "header__perfil", "container", "text-center"], [1, "perfil__img", "row", "text-center", 2, "margin-bottom", "20px"], ["src", "../../../assets/imagenes/IMG_20221212_221947_944.png", 1, "rounded-5", "img-fluid", "mx-auto", "d-block"], [1, "perfil__descripcion", "row"], [1, "perfil__descripcion--nombre"], ["class", "perfil__descripcion--desc", 4, "ngFor", "ngForOf"], ["type", "text", 2, "display", "none", 3, "ngModel", "ngModelChange"], [1, "medio-circulo"], [1, "body"], ["routerLink", "/proyectos", 1, "body__button"], ["routerLink", "/experiencia", 1, "body__button"], ["routerLink", "/educacion", 1, "body__button"], [1, "body__button"], [1, "borde"], [1, "body__title", "container-fluid", "text-center"], [1, "text-center"], [1, "body__skill"], [1, "skill__col"], [1, "skill", 3, "mouseover", "mouseout"], [2, "opacity", "0", "position", "absolute", "width", "300px"], ["html_lvl", ""], [1, "skill__title"], ["html_logo", ""], [1, "skill__img"], ["src", "../../../assets/imagenes/file_type_html_icon_130541-3236007695.png", "alt", "HTML", "srcset", ""], [1, "skill__bar"], ["html_skill", ""], ["per", "40%", 1, "skill__per", 2, "max-width", "40%"], ["css_lvl", ""], ["css_logo", ""], ["src", "../../../assets/imagenes/css3-logo-png-transparent-308037898.png", "alt", "HTML", "srcset", ""], ["css_skill", ""], ["js_lvl", ""], ["js_logo", ""], ["src", "../../../assets/imagenes/javascript-icon-clipart-6-3470004084.png", "alt", "HTML", "srcset", ""], ["js_skill", ""], ["per", "30%", 1, "skill__per", 2, "max-width", "30%"], ["angular_lvl", ""], ["angular_logo", ""], ["src", "../../../assets/imagenes/angular-icon-1-logo-png-transparent-1877748284.png", "alt", "HTML", "srcset", ""], ["angular_skill", ""], ["mysql_lvl", ""], ["mysql_logo", ""], ["src", "../../../assets/imagenes/1499794875MySQL-logo-png-transparent-1522566882.png", "alt", "HTML", "srcset", ""], ["mysql_skill", ""], ["per", "10%", 1, "skill__per", 2, "max-width", "10%"], ["java_lvl", ""], ["java_logo", ""], ["src", "../../../assets/imagenes/Java_logo-261204617.png", "alt", "HTML", "srcset", ""], ["java_skill", ""], ["per", "5%", 1, "skill__per", 2, "max-width", "5%"], ["c_lvl", ""], ["c_logo", ""], ["src", "../../../assets/imagenes/pngkit_download-png_1010012.png", "alt", "HTML", "srcset", ""], ["c_skill", ""], ["per", "50%", 1, "skill__per", 2, "max-width", "50%"], ["arduino_lvl", ""], ["arduino_logo", ""], ["src", "../../../assets/imagenes/pngkit_bluetooth-logo-png_1380843.png", "alt", "HTML", "srcset", ""], ["arduino_skill", ""], ["per", "70%", 1, "skill__per", 2, "max-width", "70%"], [1, "proyectos"], ["class", "proyectos__mas--mis", 4, "ngFor", "ngForOf"], [1, "proyectos__mas"], ["routerLink", "/proyectos", 1, "proyectos__mas--caja"], [1, "perfil__descripcion--desc"], [1, "proyectos__mas--mis"], [1, "img", "col", "boton-hover", 3, "ngStyle", "click"], ["trabajo", ""], [1, "imagen", 2, "position", "absolute", "z-index", "0", 3, "ngStyle"], [1, "info", 2, "position", "absolute", "z-index", "0", 3, "ngStyle"], [1, "mod1--url", 3, "click"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "header", 2, 1)(4, "section", 3, 4)(6, "div", 5)(7, "button", 6, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() {
        return ctx.hiddenMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 9)(12, "li", 10, 11)(14, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_14_listener() {
        return ctx.showIcons2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " CONTACTO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 13, 14)(19, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "agusdor16@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "svg", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "path", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "1144729261");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li", 20, 21)(31, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_31_listener() {
        return ctx.showIcons();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " REDES ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 13, 22)(36, "div", 23)(37, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "INSTAGRAM");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "svg", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "path", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 23)(43, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "FACEBOOK");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 23)(49, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "LINKED IN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "svg", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "path", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 23)(55, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "GITHUB");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "svg", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "path", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li", 10, 36)(62, "button", 37)(63, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " PROYECTOS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "li", 10, 36)(67, "button", 38)(68, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " EXPERIENCIA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li", 10, 36)(72, "button", 39)(73, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " EDUCACION ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "ul", 40)(76, "li", 41, 42)(78, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Registrarse");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "li", 41, 44)(82, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Iniciar Sesion");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "nav", 46)(85, "h1", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Curso #YoProgramo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "ul", 48)(88, "li", null, 49)(90, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Registrarse");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "li", null, 51)(94, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Iniciar Sesion");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "li", 53, 54)(98, "button", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_98_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Hola, Bienvenido ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "li", 56)(101, "button", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_101_listener() {
        return ctx.showMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "svg", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "path", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 60)(105, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 63)(108, "h1", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "AGUSTIN FRANCISCO DORICICH");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, HomeComponent_h4_110_Template, 2, 1, "h4", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_111_listener($event) {
        return ctx.desc[2] = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "section", 68, 1)(115, "button", 69)(116, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "PROYECTOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "button", 70)(119, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "EXPERIENCIA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "button", 71)(122, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "EDUCACION");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "button", 72)(125, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Descarga mi CV");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 74)(129, "h1", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "MIS HABILIDADES");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 76)(132, "section", 77)(133, "h1", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "FRONT END");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "button", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function HomeComponent_Template_button_mouseover_136_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](147);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](141);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](138);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillON(_r20, _r19, _r18));
      })("mouseout", function HomeComponent_Template_button_mouseout_136_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](147);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](141);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](138);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillOF(_r20, _r19, _r18));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "h2", 79, 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, " INTERMEDIO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 81, 82)(142, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "img", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "HTML");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 85, 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "button", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function HomeComponent_Template_button_mouseover_149_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](160);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](154);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](151);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillON(_r23, _r22, _r21));
      })("mouseout", function HomeComponent_Template_button_mouseout_149_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](160);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](154);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](151);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillOF(_r23, _r22, _r21));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "h2", 79, 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, " INTERMEDIO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 81, 89)(155, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "img", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 85, 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "button", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function HomeComponent_Template_button_mouseover_162_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](173);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](167);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](164);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillON(_r26, _r25, _r24));
      })("mouseout", function HomeComponent_Template_button_mouseout_162_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](173);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](167);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](164);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillOF(_r26, _r25, _r24));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "h2", 79, 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " INTERMEDIO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 81, 93)(168, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "img", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "JAVASCRIPT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 85, 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "button", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function HomeComponent_Template_button_mouseover_175_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](186);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](180);
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](177);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillON(_r29, _r28, _r27));
      })("mouseout", function HomeComponent_Template_button_mouseout_175_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](186);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](180);
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](177);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillOF(_r29, _r28, _r27));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "h2", 79, 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, " INTERMEDIO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 81, 98)(181, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "ANGULAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 85, 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "section", 77)(189, "h1", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "BACK END Y BASE DE DATOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "button", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function HomeComponent_Template_button_mouseover_192_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](203);
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](197);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](194);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillON(_r32, _r31, _r30));
      })("mouseout", function HomeComponent_Template_button_mouseout_192_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](203);
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](197);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](194);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillOF(_r32, _r31, _r30));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "h2", 79, 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, " NOVATO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 81, 102)(198, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](199, "img", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "MySQL");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 85, 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "div", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "button", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function HomeComponent_Template_button_mouseover_205_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](216);
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](210);
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](207);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillON(_r35, _r34, _r33));
      })("mouseout", function HomeComponent_Template_button_mouseout_205_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](216);
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](210);
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](207);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillOF(_r35, _r34, _r33));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "h2", 79, 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, " NOVATO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 81, 107)(211, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](212, "img", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "JAVA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 85, 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "section", 77)(219, "h1", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, " OTRAS TECNOLOGIAS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "button", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function HomeComponent_Template_button_mouseover_222_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](233);
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](227);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](224);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillON(_r38, _r37, _r36));
      })("mouseout", function HomeComponent_Template_button_mouseout_222_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](233);
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](227);
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](224);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillOF(_r38, _r37, _r36));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "h2", 79, 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, " INTERMEDIO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 81, 112)(228, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "img", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "C");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 85, 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](234, "div", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "button", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function HomeComponent_Template_button_mouseover_235_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](246);
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](240);
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](237);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillON(_r41, _r40, _r39));
      })("mouseout", function HomeComponent_Template_button_mouseout_235_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](246);
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](240);
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](237);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.skillOF(_r41, _r40, _r39));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "h2", 79, 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, " AVANZADO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 81, 117)(241, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](242, "img", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "ARDUINO");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 85, 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](247, "div", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 74, 1)(251, "h1", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "MIS PROYECTOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "section", 121, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](255, HomeComponent_div_255_Template, 14, 17, "div", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 123)(257, "button", 124)(258, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, "Ver M\u00E1s");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.desc);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.desc[2]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](144);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pro);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["header[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 800px;\n  background: url('6dde3dec99e720a2e38097bfbb1994cc-348116554.jpg');\n  background-repeat: no-repeat;\n  background-size: 2560px;\n  background-position: 50% 10%;\n  background-attachment: local;\n}\n\nheader[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: 800px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: radial-gradient(black, #0f405b);\n  opacity: 0.8;\n}\n\nsvg[_ngcontent-%COMP%] {\n  color: white;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: max-content;\n  height: 85px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-right: 32px;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n\n.header__nav[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  margin-left: 1%;\n  margin-right: 1%;\n  height: 100px;\n  justify-content: space-between;\n}\n\n.nav__yoprogramo[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.nav__ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin-top: 20px;\n  padding-right: 1%;\n  padding-left: 1%;\n}\n\n.nav__ul--menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n\n.row.nav-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.ul__boton[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin-right: 10px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n}\n\n.ul__boton[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: fixed;\n  background-image: radial-gradient(#194766, #171a21);\n  opacity: 0;\n  transform: translateX(100%);\n  visibility: hidden;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  z-index: 2;\n  transition: 0.75s ease all;\n  overflow: hidden;\n}\n\n.menu__container[_ngcontent-%COMP%] {\n  margin-top: 90px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.menu__button[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  width: 50px;\n  top: 0;\n  right: 0;\n  background: transparent;\n  border: none;\n  z-index: 1;\n}\n\n.menu__button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  fill: #4eccfa;\n}\n\n.li__button[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  background: transparent;\n  height: 100px;\n  border: none;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.li__button[_ngcontent-%COMP%]:hover {\n  background: rgba(243, 243, 243, 0.1);\n}\n\n.li__container[_ngcontent-%COMP%] {\n  transform: translateY(-50%) scaleY(0);\n  display: flex;\n  opacity: 0;\n  width: 100%;\n  height: 20vh;\n  background: transparent;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  transition: 0.5s ease all;\n}\n\n.container__section[_ngcontent-%COMP%] {\n  align-items: center;\n  width: 300px;\n  margin: 10px;\n  height: 100%;\n  list-style: none;\n}\n\n.container__li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 120px;\n  transition: 0.5s ease all;\n}\n\n.header__perfil[_ngcontent-%COMP%] {\n  height: 700px;\n}\n\n.perfil__img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n}\n\n.perfil__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 250px;\n  width: max-content;\n}\n\n.perfil__descripcion[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.perfil__descripcion--nombre[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, monospace;\n  font-weight: 1000;\n  font-size: 50px;\n  margin-bottom: 25px;\n}\n\n.perfil__descripcion--desc[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, monospace;\n  position: relative;\n  height: max-content;\n}\n\n.body[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#144b66, #062d47);\n  position: relative;\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n\n.medio-circulo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-image: linear-gradient(transparent, #134a65);\n  height: 500px;\n  bottom: 490px;\n  left: 0;\n  z-index: 0;\n}\n\n.borde[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  height: 3px;\n  width: 80%;\n  background: linear-gradient(90deg, transparent, #194766, #206487, #194766, transparent);\n  margin-bottom: 3%;\n}\n\n\n.body__button[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n  margin-top: 5%;\n  margin-bottom: 3%;\n  height: 150px;\n  width: 300px;\n  background-color: #206487;\n  border-radius: 5px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 300ms;\n  border-style: none;\n}\n\n.body__button[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #4eccfa, #4ec5ff);\n  transform: scale(2);\n  margin-top: 10%;\n  margin-bottom: 10%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n\n.body__title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 3%;\n}\n\n.body__skill[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n  position: relative;\n  width: 90%;\n  border-radius: 5%;\n  color: white;\n  display: grid;\n  justify-items: center;\n  align-items: start;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto auto;\n}\n\n.skill__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.skill[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 131px;\n  margin-bottom: 5%;\n  transition: all 0.5s;\n  background: transparent;\n  border: none;\n}\n\n.skill[_ngcontent-%COMP%]:hover {\n  border: solid;\n  border-color: #206487;\n  transform: scale(1.1);\n}\n\n.skill__bar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 14px;\n  background: #c5c5c5;\n  opacity: 0;\n  border-radius: 5px;\n  bottom: 78px;\n  transition: all 0.5s;\n}\n\n.skill__per[_ngcontent-%COMP%] {\n  height: 14px;\n  background: #4ec5ff;\n  border-radius: 5px;\n  position: relative;\n  animation: _ngcontent-%COMP%_fillBars 2.5s 1;\n}\n\n.skill__title[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  text-align: center;\n}\n\n.skill__design[_ngcontent-%COMP%] {\n  width: 96%;\n  margin: 2%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.skill__menu[_ngcontent-%COMP%] {\n  position: relative;\n  border: 2px solid #4eccfa;\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 10px;\n  border-radius: 20px;\n}\n\n.skill__menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  width: 0;\n  height: 5px;\n  border-radius: 10px;\n  background-color: #4eccfa;\n}\n\n.ocultar[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.ocultar[_ngcontent-%COMP%]::before {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.7);\n  content: \"\";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n\n\n.cv[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 400px;\n}\n\n\n@keyframes _ngcontent-%COMP%_oscuerecer {\n  0% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  50% {\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n  100% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes _ngcontent-%COMP%_fillBars {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n.menu__button--mostrar[_ngcontent-%COMP%] {\n  display: flex;\n  transform: translateX(0);\n  visibility: visible;\n  opacity: 1;\n  transition: 0.75s ease all;\n  overflow: scroll;\n}\n\n.li__container--expand[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n  overflow: hidden;\n}\n\n.container__li--expand[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n\n.proyectos[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #B8BCBF;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  min-height: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 3%;\n  overflow: visible;\n}\n\n.proyectos__mas--mis[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  overflow-y: visible;\n  height: 400px;\n  display: flex;\n}\n\n.proyectos__img[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 2.5px;\n  width: 290px;\n  height: 80px;\n}\n\n.proyectos__img[_ngcontent-%COMP%] {\n  position: relative;\n  border-style: solid;\n  border-color: #1e80b1;\n  margin-right: 20px;\n  min-width: 300px;\n  max-width: 300px;\n  height: 400px;\n  background-image: radial-gradient(#1e80b1, #206487);\n  z-index: 1;\n  overflow: hidden;\n}\n\n.proyectos__img[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #4eccfa, #4ec5ff);\n}\n\n.proyectos__mas[_ngcontent-%COMP%] {\n  margin: 1em;\n  width: 100%;\n  text-align: center;\n  height: max-content;\n}\n\n.proyectos__mas--caja[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 50px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n}\n\n.proyectos__mas--caja[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n}\n\n.proyectos__mas--caja[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.mod1--url[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 3;\n}\n\n.mod1--url[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.img[_ngcontent-%COMP%] {\n  position: relative;\n  border-style: solid;\n  border-color: #1e80b1;\n  min-width: 300px;\n  max-width: 300px;\n  margin-left: 10px;\n  height: 400px;\n  background-image: radial-gradient(#1e80b1, #206487);\n  z-index: 0;\n  overflow: hidden;\n}\n\n.img[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #4eccfa, #4ec5ff);\n}\n\n.img[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 2.5px;\n  width: 290px;\n  height: 80px;\n  transition: 1s ease all;\n}\n\n.info[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  visibility: hidden;\n  opacity: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  height: 250px;\n  width: 160px;\n  top: 70%;\n  left: 25%;\n  transition: 1s ease all;\n  overflow: scroll;\n}\n\n\n@media (max-width: 950px) {\n  ul[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  \n  .menu[_ngcontent-%COMP%] {\n    position: fixed;\n    opacity: 1;\n    background: rgba(0, 0, 0, 0);\n    transform: translateX(500%);\n    visibility: hidden;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    z-index: 2;\n    display: flex;\n    justify-content: end;\n    transition: 0.75s ease all;\n  }\n  .menu__container[_ngcontent-%COMP%] {\n    background-image: radial-gradient(#194766, #171a21);\n    width: 75vw;\n    margin: 0;\n    height: 100vh;\n    display: flex;\n    align-items: flex-start;\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  .menu__movil[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n  .nav__ul--menu[_ngcontent-%COMP%] {\n    display: flex;\n    list-style: none;\n    margin-top: 20px;\n    padding-right: 1%;\n    padding-left: 1%;\n    min-height: 80px;\n  }\n  .menu__button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    top: 0;\n    right: 0;\n    background: transparent;\n    border: none;\n    z-index: 1;\n  }\n  .menu__container[_ngcontent-%COMP%]   .ul[_ngcontent-%COMP%] {\n    transform: translateX(-15vw) scale(0.75);\n    width: 100vw;\n  }\n  .container__section[_ngcontent-%COMP%] {\n    display: flex;\n    width: 80vw;\n    height: auto;\n    margin: 5vw;\n    justify-content: center;\n  }\n  .li__container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .li__container--expand[_ngcontent-%COMP%] {\n    overflow: scroll;\n    height: 20vh;\n    align-items: flex-end;\n  }\n  \n  .nav__yoprogramo[_ngcontent-%COMP%] {\n    margin: 1rem;\n    text-align: center;\n  }\n  .row.nav-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ul__boton--fuera[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ul__boton--adentro[_ngcontent-%COMP%] {\n    min-height: 80px;\n  }\n  .ul__boton--movil[_ngcontent-%COMP%] {\n    position: relative;\n    height: 40px;\n    max-width: 50px;\n    margin-right: 10px;\n    color: white;\n    background: rgba(243, 243, 243, 0.1);\n    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n    border: none;\n    text-decoration: none;\n  }\n  .header__perfil[_ngcontent-%COMP%] {\n    height: 700px;\n  }\n  .perfil__img[_ngcontent-%COMP%] {\n    position: relative;\n    height: 200px;\n  }\n  .perfil__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 200px;\n    width: max-content;\n  }\n  \n  .medio-circulo[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    background-image: linear-gradient(transparent, #134a65);\n    height: 500px;\n    bottom: 490px;\n    left: 0;\n    z-index: 0;\n  }\n  .borde[_ngcontent-%COMP%] {\n    display: block;\n  }\n  \n  .body__button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .body__skill[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  \n  .menu__button--mostrar[_ngcontent-%COMP%] {\n    display: flex;\n    transform: translateX(0);\n    visibility: visible;\n    opacity: 1;\n    transition: 0.75s ease all;\n    overflow: scroll;\n  }\n  .proyectos[_ngcontent-%COMP%] {\n    transform: scale(0.7);\n    font-size: 20px;\n    color: #B8BCBF;\n    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n    width: 100vw;\n    height: 400px;\n    display: flex;\n    overflow: auto;\n    margin-bottom: 3%;\n  }\n}\n@media (max-width: 500px) {\n  .nav__ul--inicio[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    width: 160px;\n    height: max-content;\n    margin-right: 0;\n    flex-wrap: wrap;\n    list-style: none;\n    padding: 0;\n  }\n  .ul__boton--logout[_ngcontent-%COMP%] {\n    display: flex;\n    width: 160px;\n    justify-content: end;\n    margin-bottom: 10px;\n  }\n  .nav__ul--menu[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 20px;\n    padding-right: 1%;\n    padding-left: 1%;\n    min-height: 80px;\n  }\n  .header__perfil[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9jdXJzbyUyMGFyZ2VudGluYSUyMHByb2dybWEvUG9ydGZvbGlvL0Zyb250LUVuZC9Qb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQUNBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxpRUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaURBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ01KOztBREpBLFdBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ1FKOztBRE5BO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ1VKOztBRFBBO0VBQ0ksYUFBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNXSjs7QURUQTtFQUNJLG1FQUFBO0FDWUo7O0FEVkE7RUFDSSxlQUFBO0VBQ0EsbURBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDYUo7O0FEWEE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNjSjs7QURaQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ2VKOztBRGJBO0VBQ0ksYUFBQTtBQ2dCSjs7QURkQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDaUJKOztBRGZBO0VBQ0ksb0NBQUE7QUNrQko7O0FEaEJBO0VBQ0kscUNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ21CSjs7QURqQkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDb0JKOztBRGxCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDcUJKOztBRG5CQTtFQUNJLGFBQUE7QUNzQko7O0FEcEJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDdUJKOztBRHBCQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ3VCSjs7QURyQkE7RUFDSSxrQkFBQTtBQ3dCSjs7QUR0QkE7RUFDSSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDeUJKOztBRHZCQTtFQUNJLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQzBCSjs7QUR4QkE7RUFDSSxtREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMyQko7O0FEeEJBLGlCQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUMwQko7O0FEeEJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1RkFBQTtFQUNBLGlCQUFBO0FDMkJKOztBRHhCQSxnQkFBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUMwQko7O0FEeEJBO0VBQ0ksMERBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUMyQko7O0FEekJBLFdBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUM0Qko7O0FEekJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7QUM0Qko7O0FEMUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUM4Qko7O0FENUJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUMrQko7O0FEN0JBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNnQ0o7O0FEOUJBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDaUNKOztBRC9CQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDa0NKOztBRGhDQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNtQ0o7O0FEakNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNvQ0o7O0FEbENBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNxQ0o7O0FEbkNBO0VBQ0EsZUFBQTtBQ3NDQTs7QURwQ0E7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDdUNKOztBRHJDQSxPQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ3VDSjs7QURwQ0EsZ0JBQUE7QUFDQTtFQUNJO0lBQUcsa0NBQUE7RUN3Q0w7RUR2Q0U7SUFBSSxvQ0FBQTtFQzBDTjtFRHpDRTtJQUFRLDhCQUFBO0VDNENWO0FBQ0Y7QUQzQ0E7RUFDSTtJQUNJLFFBQUE7RUM2Q047RUQzQ0U7SUFDSSxXQUFBO0VDNkNOO0FBQ0Y7QUQzQ0E7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDNkNKOztBRDNDQTtFQUNJLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDOENKOztBRDVDQTtFQUNJLGFBQUE7QUMrQ0o7O0FEM0NBLHlCQUFBO0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDNkNKOztBRDNDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQzhDSjs7QUQ1Q0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUMrQ0o7O0FEN0NBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDZ0RKOztBRDlDQTtFQUNJLDBEQUFBO0FDaURKOztBRC9DQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2tESjs7QURoREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDbURKOztBRGpEQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FDb0RKOztBRGxEQTtFQUNJLG1FQUFBO0FDcURKOztBRG5EQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDc0RKOztBRHBEQTtFQUNJLG1FQUFBO0FDdURKOztBRHJEQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3dESjs7QUR0REE7RUFDSSwwREFBQTtBQ3lESjs7QUR2REE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQzBESjs7QUR4REE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDMkRKOztBRHhEQSx1QkFBQTtBQUNBO0VBQ0E7SUFDSSxVQUFBO0VDMkRGO0VEekRGLE9BQUE7RUFDQTtJQUNJLGVBQUE7SUFDQSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtJQUNBLDBCQUFBO0VDMkRGO0VEekRGO0lBQ0ksbURBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDMkRGO0VEekRGO0lBQ0ksZUFBQTtFQzJERjtFRHpERjtJQUNJLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDMkRGO0VEekRGO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBO0lBQ0EsUUFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUMyREY7RUR6REY7SUFDSSx3Q0FBQTtJQUNBLFlBQUE7RUMyREY7RUR6REY7SUFDSSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7RUMyREY7RUR4REY7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSwyQkFBQTtFQzBERjtFRHhERjtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VDMERGO0VEeERGLFVBQUE7RUFDQTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtFQzBERjtFRHhERjtJQUNJLGFBQUE7RUMwREY7RUR4REY7SUFDSSxhQUFBO0VDMERGO0VEeERGO0lBQ0ksZ0JBQUE7RUMwREY7RUR4REY7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0Esb0NBQUE7SUFDQSwyQ0FBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQzBERjtFRHhERjtJQUNJLGFBQUE7RUMwREY7RUR4REY7SUFDSSxrQkFBQTtJQUNBLGFBQUE7RUMwREY7RUR2REY7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7RUN5REY7RURyREYsaUJBQUE7RUFFQTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHVEQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTtFQ3NERjtFRHBERjtJQUNBLGNBQUE7RUNzREU7RURuREYsZ0JBQUE7RUFFQTtJQUNJLGFBQUE7RUNvREY7RURqREYsV0FBQTtFQUNBO0lBQ0ksYUFBQTtJQUNBLDBCQUFBO0VDbURGO0VEakRGLGdCQUFBO0VBQ0E7SUFDSSxhQUFBO0lBQ0Esd0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSwwQkFBQTtJQUNBLGdCQUFBO0VDbURGO0VEakRGO0lBQ0kscUJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLDJDQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDbURGO0FBQ0Y7QURoREE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUNrRE47RURoREU7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7RUNrRE47RURoREU7SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNrRE47RURoREY7SUFDSSxpQkFBQTtFQ2tERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogdmFyaWFibGVycyBnbG9iYWxlcyAqL1xuaGVhZGVyeyAgICAgICBcbiAgICBtYXJnaW46MDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VuZXMvNmRkZTNkZWM5OWU3MjBhMmUzODA5N2JmYmIxOTk0Y2MtMzQ4MTE2NTU0LmpwZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1NjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogbG9jYWw7XG59XG5oZWFkZXI6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChibGFjaywgIzBmNDA1YiAgKTtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5zdmd7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuaW1ne1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBoZWlnaHQ6IDg1cHg7XG59XG51bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG59XG5saXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG4vKiBIRUFERVIgKi9cbi5oZWFkZXJfX25hdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5uYXZfX3lvcHJvZ3JhbW97XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6IDA7XG59XG4ubmF2X191bHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xufVxuLm5hdl9fdWwtLW1lbnV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdy5uYXYtbWVudXtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4udWxfX2JvdG9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi51bF9fYm90b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk0NzY2LCAjMjA2NDg3LCAjMTk0NzY2KTtcbn1cbi5tZW51e1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMxOTQ3NjYsIzE3MWEyMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDB2dzsgXG4gICAgaGVpZ2h0OiAxMDB2aDsgXG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdHJhbnNpdGlvbjogMC43NXMgZWFzZSBhbGw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tZW51X19jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1lbnVfX2J1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG59XG4ubWVudV9fYnV0dG9uIHN2Zzpob3ZlcntcbiAgICBmaWxsOiAjNGVjY2ZhO1xufVxuLmxpX19idXR0b257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmxpX19idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xufVxuLmxpX19jb250YWluZXJ7ICAgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSgwKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZSBhbGw7XG59XG4uY29udGFpbmVyX19zZWN0aW9ue1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6MzAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmNvbnRhaW5lcl9fbGl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xufVxuLmhlYWRlcl9fcGVyZmlse1xuICAgIGhlaWdodDogNzAwcHg7XG59XG4ucGVyZmlsX19pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuXG59XG4ucGVyZmlsX19pbWcgaW1ne1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuLnBlcmZpbF9fZGVzY3JpcGNpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBlcmZpbF9fZGVzY3JpcGNpb24tLW5vbWJyZXtcbiAgICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206MjVweDtcbn1cbi5wZXJmaWxfX2Rlc2NyaXBjaW9uLS1kZXNje1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG4uYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICMxNDRiNjYsICMwNjJkNDcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogc2VwYXJhY2lvbmVzICovXG5cbi5tZWRpby1jaXJjdWxve1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICMxMzRhNjUpO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYm90dG9tOiA0OTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDA7XG59XG4uYm9yZGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LCAjMTk0NzY2LCAjMjA2NDg3LCAjMTk0NzY2LHRyYW5zcGFyZW50KTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLyogaW5mb3JtYWNpb24gKi9cblxuLmJvZHlfX2J1dHRvbntcbiAgICBtYXJnaW4tbGVmdDoxJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDY0ODc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cbi5ib2R5X19idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0ZWNjZmEsIzRlYzVmZik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4vKiBza2lsbHMgKi9cbi5ib2R5X190aXRsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcblxufVxuLmJvZHlfX3NraWxse1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbn1cbi5za2lsbF9fY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNraWxse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEzMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5za2lsbDpob3ZlcntcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzIwNjQ4NztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uc2tpbGxfX2JhcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNjNWM1YzU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm90dG9tOiA3OHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnNraWxsX19wZXJ7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICM0ZWM1ZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbmltYXRpb246IGZpbGxCYXJzIDIuNXMgMTtcbn1cbi5za2lsbF9fdGl0bGV7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5za2lsbF9fZGVzaWdue1xuICAgIHdpZHRoOiA5NiU7XG4gICAgbWFyZ2luOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNraWxsX19tZW51e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNGVjY2ZhO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5za2lsbF9fbWVudSBkaXZ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlY2NmYTtcbn1cbi5vY3VsdGFye1xucG9zaXRpb246IGZpeGVkO1xufVxuLm9jdWx0YXI6OmJlZm9yZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBjb250ZW50OiAnJztcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbn1cbi8qIENWICovXG5cbi5jdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNDAwcHg7XG59XG5cbi8qIGFuaW1hY2lvbmVzICovXG5Aa2V5ZnJhbWVzIG9zY3VlcmVjZXIge1xuICAgIDAle2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wKTt9XG4gICAgNTAle2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTt9XG4gICAgMTAwJXsgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7fVxufVxuQGtleWZyYW1lcyBmaWxsQmFyc3tcbiAgICBmcm9te1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG4gICAgdG97XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5tZW51X19idXR0b24tLW1vc3RyYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuNzVzIGVhc2UgYWxsO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ubGlfX2NvbnRhaW5lci0tZXhwYW5ke1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29udGFpbmVyX19saS0tZXhwYW5ke1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cblxuLypQUk9ZRUNUT1MgVklTVEEgUFJFVklBKi9cblxuLnByb3llY3Rvc3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNCOEJDQkY7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4ucHJveWVjdG9zX19tYXMtLW1pc3tcbiAgICBvdmVyZmxvdy14OnNjcm9sbDtcbiAgICBvdmVyZmxvdy15OnZpc2libGU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb3llY3Rvc19faW1nIC5pbWFnZW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDIuNXB4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4ucHJveWVjdG9zX19pbWd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1zdHlsZTogIHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzFlODBiMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoICMxZTgwYjEsICMyMDY0ODcpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm95ZWN0b3NfX2ltZzpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRlY2NmYSwjNGVjNWZmKTtcbn1cbi5wcm95ZWN0b3NfX21hc3tcbiAgICBtYXJnaW46IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cbi5wcm95ZWN0b3NfX21hcy0tY2FqYXtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnByb3llY3Rvc19fbWFzLS1jYWphIGg0e1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4ucHJveWVjdG9zX19tYXMtLWNhamE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk0NzY2LCAjMjA2NDg3LCAjMTk0NzY2KTtcbn1cbi5tb2QxLS11cmx7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOjEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgei1pbmRleDogMztcbn1cbi5tb2QxLS11cmw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk0NzY2LCAjMjA2NDg3LCAjMTk0NzY2KTtcbn1cbi5pbWd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1zdHlsZTogIHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzFlODBiMTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnJhZGlhbC1ncmFkaWVudCggIzFlODBiMSwgIzIwNjQ4Nyk7XG4gICAgei1pbmRleDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZzpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRlY2NmYSwjNGVjNWZmKTtcbn1cbi5pbWcgLmltYWdlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUwcHg7XG4gICAgbGVmdDogMi41cHg7XG4gICAgd2lkdGg6IDI5MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlIGFsbDtcbn1cbi5pbmZve1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICB0b3A6NzAlO1xuICAgIGxlZnQ6MjUlO1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2UgYWxsO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8qIFJFU1BPTlNJVkUtQ0VMVUxBUiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6OTUwcHgpIHtcbnVse1xuICAgIHBhZGRpbmc6IDA7XG59XG4vKk1FTlUqL1xuLm1lbnV7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjApOztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwJSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDB2dzsgXG4gICAgaGVpZ2h0OiAxMDB2aDsgXG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlIGFsbDtcbn1cbi5tZW51X19jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMxOTQ3NjYsIzE3MWEyMSk7XG4gICAgd2lkdGg6IDc1dnc7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ubWVudV9fbW92aWx7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLm5hdl9fdWwtLW1lbnV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuLm1lbnVfX2J1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgei1pbmRleDogMTtcbn1cbi5tZW51X19jb250YWluZXIgLnVse1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTV2dykgc2NhbGUoMC43NSk7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuLmNvbnRhaW5lcl9fc2VjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDV2dztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpX19jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5saV9fY29udGFpbmVyLS1leHBhbmR7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLyogSEVBREVSKi9cbi5uYXZfX3lvcHJvZ3JhbW97XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3cubmF2LW1lbnV7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnVsX19ib3Rvbi0tZnVlcmF7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi51bF9fYm90b24tLWFkZW50cm97XG4gICAgbWluLWhlaWdodDogODBweDtcbn1cbi51bF9fYm90b24tLW1vdmlse1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXJfX3BlcmZpbHtcbiAgICBoZWlnaHQ6IDcwMHB4O1xufVxuLnBlcmZpbF9faW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcblxufVxuLnBlcmZpbF9faW1nIGltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuXG4vKiBzZXBhcmFjaW9uZXMgKi9cblxuLm1lZGlvLWNpcmN1bG97XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzEzNGE2NSk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBib3R0b206IDQ5MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMDtcbn1cbi5ib3JkZXtcbmRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBpbmZvcm1hY2lvbiAqL1xuXG4uYm9keV9fYnV0dG9ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIHNraWxscyAqL1xuLmJvZHlfX3NraWxse1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG4vKiBhbmltYWNpb25lcyAqL1xuLm1lbnVfX2J1dHRvbi0tbW9zdHJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC43NXMgZWFzZSBhbGw7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5wcm95ZWN0b3N7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0I4QkNCRjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcbiAgICAubmF2X191bC0taW5pY2lve1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGhlaWdodDptYXgtY29udGVudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG4gICAgLnVsX19ib3Rvbi0tbG9nb3V0e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAubmF2X191bC0tbWVudXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMSU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgfVxuLmhlYWRlcl9fcGVyZmlse1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxufSIsIi8qIHZhcmlhYmxlcnMgZ2xvYmFsZXMgKi9cbmhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5lcy82ZGRlM2RlYzk5ZTcyMGEyZTM4MDk3YmZiYjE5OTRjYy0zNDgxMTY1NTQuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNTYwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogbG9jYWw7XG59XG5cbmhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYmxhY2ssICMwZjQwNWIpO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbnN2ZyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBoZWlnaHQ6IDg1cHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBIRUFERVIgKi9cbi5oZWFkZXJfX25hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXZfX3lvcHJvZ3JhbW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLm5hdl9fdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbn1cblxuLm5hdl9fdWwtLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yb3cubmF2LW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udWxfX2JvdG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi51bF9fYm90b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMxOTQ3NjYsICMxNzFhMjEpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zaXRpb246IDAuNzVzIGVhc2UgYWxsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVudV9fY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWVudV9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogNTBweDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cblxuLm1lbnVfX2J1dHRvbiBzdmc6aG92ZXIge1xuICBmaWxsOiAjNGVjY2ZhO1xufVxuXG4ubGlfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubGlfX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbn1cblxuLmxpX19jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGVZKDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcbn1cblxuLmNvbnRhaW5lcl9fc2VjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jb250YWluZXJfX2xpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDEyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xufVxuXG4uaGVhZGVyX19wZXJmaWwge1xuICBoZWlnaHQ6IDcwMHB4O1xufVxuXG4ucGVyZmlsX19pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5wZXJmaWxfX2ltZyBpbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5wZXJmaWxfX2Rlc2NyaXBjaW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGVyZmlsX19kZXNjcmlwY2lvbi0tbm9tYnJlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogMTAwMDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucGVyZmlsX19kZXNjcmlwY2lvbi0tZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4uYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMTQ0YjY2LCAjMDYyZDQ3KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBzZXBhcmFjaW9uZXMgKi9cbi5tZWRpby1jaXJjdWxvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMTM0YTY1KTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm90dG9tOiA0OTBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMDtcbn1cblxuLmJvcmRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYsIHRyYW5zcGFyZW50KTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi8qIGluZm9ybWFjaW9uICovXG4uYm9keV9fYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNjQ4NztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmJvZHlfX2J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRlY2NmYSwgIzRlYzVmZik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLyogc2tpbGxzICovXG4uYm9keV9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLmJvZHlfX3NraWxsIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xufVxuXG4uc2tpbGxfX2NvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5za2lsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEzMXB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5za2lsbDpob3ZlciB7XG4gIGJvcmRlcjogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzIwNjQ4NztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uc2tpbGxfX2JhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjYzVjNWM1O1xuICBvcGFjaXR5OiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvdHRvbTogNzhweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5za2lsbF9fcGVyIHtcbiAgaGVpZ2h0OiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjNGVjNWZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBmaWxsQmFycyAyLjVzIDE7XG59XG5cbi5za2lsbF9fdGl0bGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2tpbGxfX2Rlc2lnbiB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNraWxsX19tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGVjY2ZhO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5za2lsbF9fbWVudSBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlY2NmYTtcbn1cblxuLm9jdWx0YXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5vY3VsdGFyOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBDViAqL1xuLmN2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLyogYW5pbWFjaW9uZXMgKi9cbkBrZXlmcmFtZXMgb3NjdWVyZWNlciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgfVxufVxuQGtleWZyYW1lcyBmaWxsQmFycyB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLm1lbnVfX2J1dHRvbi0tbW9zdHJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC43NXMgZWFzZSBhbGw7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5saV9fY29udGFpbmVyLS1leHBhbmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXJfX2xpLS1leHBhbmQge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4vKlBST1lFQ1RPUyBWSVNUQSBQUkVWSUEqL1xuLnByb3llY3RvcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNCOEJDQkY7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5wcm95ZWN0b3NfX21hcy0tbWlzIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJveWVjdG9zX19pbWcgLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMi41cHg7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ucHJveWVjdG9zX19pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzFlODBiMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzFlODBiMSwgIzIwNjQ4Nyk7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm95ZWN0b3NfX2ltZzpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRlY2NmYSwgIzRlYzVmZik7XG59XG5cbi5wcm95ZWN0b3NfX21hcyB7XG4gIG1hcmdpbjogMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4ucHJveWVjdG9zX19tYXMtLWNhamEge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucHJveWVjdG9zX19tYXMtLWNhamEgaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnByb3llY3Rvc19fbWFzLS1jYWphOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk0NzY2LCAjMjA2NDg3LCAjMTk0NzY2KTtcbn1cblxuLm1vZDEtLXVybCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB6LWluZGV4OiAzO1xufVxuXG4ubW9kMS0tdXJsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk0NzY2LCAjMjA2NDg3LCAjMTk0NzY2KTtcbn1cblxuLmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMWU4MGIxO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMxZTgwYjEsICMyMDY0ODcpO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNGVjY2ZhLCAjNGVjNWZmKTtcbn1cblxuLmltZyAuaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiAyLjVweDtcbiAgd2lkdGg6IDI5MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHRyYW5zaXRpb246IDFzIGVhc2UgYWxsO1xufVxuXG4uaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgdG9wOiA3MCU7XG4gIGxlZnQ6IDI1JTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZSBhbGw7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8qIFJFU1BPTlNJVkUtQ0VMVUxBUiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC8qTUVOVSovXG4gIC5tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDAlKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlIGFsbDtcbiAgfVxuICAubWVudV9fY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzE5NDc2NiwgIzE3MWEyMSk7XG4gICAgd2lkdGg6IDc1dnc7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIC5tZW51X19tb3ZpbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIC5uYXZfX3VsLS1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLm1lbnVfX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLm1lbnVfX2NvbnRhaW5lciAudWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTV2dykgc2NhbGUoMC43NSk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG4gIC5jb250YWluZXJfX3NlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogNXZ3O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5saV9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5saV9fY29udGFpbmVyLS1leHBhbmQge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAvKiBIRUFERVIqL1xuICAubmF2X195b3Byb2dyYW1vIHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yb3cubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnVsX19ib3Rvbi0tZnVlcmEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnVsX19ib3Rvbi0tYWRlbnRybyB7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgfVxuICAudWxfX2JvdG9uLS1tb3ZpbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5oZWFkZXJfX3BlcmZpbCB7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgfVxuICAucGVyZmlsX19pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG4gIC5wZXJmaWxfX2ltZyBpbWcge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICB9XG4gIC8qIHNlcGFyYWNpb25lcyAqL1xuICAubWVkaW8tY2lyY3VsbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzEzNGE2NSk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBib3R0b206IDQ5MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAuYm9yZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC8qIGluZm9ybWFjaW9uICovXG4gIC5ib2R5X19idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLyogc2tpbGxzICovXG4gIC5ib2R5X19za2lsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAvKiBhbmltYWNpb25lcyAqL1xuICAubWVudV9fYnV0dG9uLS1tb3N0cmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC43NXMgZWFzZSBhbGw7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxuICAucHJveWVjdG9zIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjQjhCQ0JGO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5uYXZfX3VsLS1pbmljaW8ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnVsX19ib3Rvbi0tbG9nb3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5uYXZfX3VsLS1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICB9XG4gIC5oZWFkZXJfX3BlcmZpbCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6701:
/*!*******************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInComponent": () => (/* binding */ LogInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/autenticacion.service */ 3315);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 4662);







function LogInComponent_div_14_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " usuario requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LogInComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LogInComponent_div_14_p_1_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.user == null ? null : ctx_r1.user.hasError("required"));
  }
}
function LogInComponent_div_19_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contrase\u00F1a requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LogInComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LogInComponent_div_19_p_1_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.password == null ? null : ctx_r2.password.hasError("required"));
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class LogInComponent {
  constructor(formBuilder, service, ruta) {
    this.formBuilder = formBuilder;
    this.service = service;
    this.ruta = ruta;
    this.usuarios = {
      user: '',
      password: ''
    };
    this.form = this.formBuilder.group({
      user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]]
    });
  }
  ngOnInit() {}
  Login(form) {
    this.service.IniciarSesion(this.usuarios).subscribe(response => {
      this.ruta.navigate(['/']);
    });
  }
  get user() {
    return this.form.get('user');
  }
  get password() {
    return this.form.get('password');
  }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) {
  return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__.AutenticacionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
LogInComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LogInComponent,
  selectors: [["app-log-in"]],
  decls: 23,
  vars: 12,
  consts: [[2, "min-height", "100vh"], [1, "cerrar"], ["routerLink", "/"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "fill", "", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left-circle-fill"], ["d", "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"], [1, "edu"], ["action", "", 1, "session", 3, "ngSubmit"], ["form", "ngForm"], ["for", "user"], ["type", "text", "name", "user", "maxlength", "50", "id", "user", 1, "relleno", "form-control", 3, "ngClass", "ngModel", "ngModelChange"], [4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "maxlength", "50", "id", "password", 1, "relleno", "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "id", "login", "value", "INICIAR SESION", 1, "hola"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
  template: function LogInComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body", 0)(1, "header")(2, "div", 1)(3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "INICIAR SESION");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LogInComponent_Template_form_ngSubmit_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.Login(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Usuario ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 8)(13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LogInComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.usuarios.user = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LogInComponent_div_14_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Contrase\u00F1a: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 11)(18, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LogInComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.usuarios.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LogInComponent_div_19_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c0, (ctx.user == null ? null : ctx.user.errors) && (ctx.user == null ? null : ctx.user.touched), !(ctx.user == null ? null : ctx.user.errors) && (ctx.user == null ? null : ctx.user.touched)))("ngModel", ctx.usuarios.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.errors) && (ctx.user == null ? null : ctx.user.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, (ctx.password == null ? null : ctx.password.errors) && (ctx.password == null ? null : ctx.password.touched), !(ctx.password == null ? null : ctx.password.errors) && (ctx.password == null ? null : ctx.password.touched)))("ngModel", ctx.usuarios.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.errors) && (ctx.password == null ? null : ctx.password.touched));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["form[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  min-height: 50vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.form[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding-left: 30%;\n  padding-right: 10%;\n  font-size: 45px;\n  font-weight: 100;\n  color: white;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n}\n\nform.session[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding-left: 30%;\n  padding-right: 10%;\n  margin-bottom: 25px;\n  font-size: 20px;\n  color: #B8BCBF;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n}\n\np[_ngcontent-%COMP%] {\n  padding-right: 30%;\n  margin-bottom: 0%;\n}\n\n.relleno[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 3px;\n  background: #32353C;\n  padding-top: 10px;\n  padding-right: 5px;\n  padding-left: 5px;\n  width: 350px;\n  height: 30px;\n  color: white;\n  font-family: sans-serif;\n  font-size: 20px;\n  outline: 1px;\n  border-bottom: 1px solid white;\n}\n\n.box[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n#login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 175px;\n  color: white;\n  background-image: linear-gradient(90deg, #00BBFF, #1A9FFF);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n}\n\n#login[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #4eccfa, #4ec5ff);\n  color: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: #4eccfa;\n}\n\nsvg[_ngcontent-%COMP%]:hover {\n  fill: #1A9FFF;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5%;\n}\n\n.edu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1%;\n}\n\n.cerrar[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n\n.hola[_ngcontent-%COMP%] {\n  margin-bottom: 356px;\n  margin-top: 100px;\n}\n\n@media (max-width: 950px) {\n  form.session[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    padding-left: 25px;\n    margin-bottom: 25px;\n    font-size: 20px;\n    color: #B8BCBF;\n    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vY3Vyc28lMjBhcmdlbnRpbmElMjBwcm9ncm1hL1BvcnRmb2xpby9Gcm9udC1FbmQvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FDQUo7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBEQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNHSjs7QUREQTtFQUNJLDBEQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtBQ09KOztBRExBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDUUo7O0FETkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNTSjs7QURQQTtFQUNJLFVBQUE7QUNVSjs7QURSQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUNXSjs7QURUQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSwyQ0FBQTtFQ1lOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxuXG5cbn1cbi5mb3Jte1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctbGVmdDogMzAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC13ZWlnaHQ6MTAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xufVxuZm9ybS5zZXNzaW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0I4QkNCRjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpOyBcbn1cblxucHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG5cbi5yZWxsZW5ve1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzMyMzUzQztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG91dGxpbmU6IDFweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG4uYm94e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbiNsb2dpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBCQkZGLCAjMUE5RkZGKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jbG9naW46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNGVjY2ZhLCAjNGVjNWZmKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xufVxuc3Zne1xuICAgIGZpbGw6ICM0ZWNjZmE7XG59XG5zdmc6aG92ZXJ7XG4gICAgZmlsbDogIzFBOUZGRjtcbn1cbmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLmVkdXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xufVxuLmNlcnJhcntcbiAgICBtYXJnaW46IDElO1xufVxuLmhvbGF7XG4gICAgbWFyZ2luLWJvdHRvbTogMzU2cHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOjk1MHB4KSB7XG4gICAgZm9ybS5zZXNzaW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjQjhCQ0JGO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpOyBcbiAgICB9XG59IiwiZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5mb3JtIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5mb3JtLnNlc3Npb24ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjQjhCQ0JGO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5wIHtcbiAgcGFkZGluZy1yaWdodDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbn1cblxuLnJlbGxlbm8ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogIzMyMzUzQztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG91dGxpbmU6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYm94IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTc1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBCQkZGLCAjMUE5RkZGKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNsb2dpbjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRlY2NmYSwgIzRlYzVmZik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5zdmcge1xuICBmaWxsOiAjNGVjY2ZhO1xufVxuXG5zdmc6aG92ZXIge1xuICBmaWxsOiAjMUE5RkZGO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmVkdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5jZXJyYXIge1xuICBtYXJnaW46IDElO1xufVxuXG4uaG9sYSB7XG4gIG1hcmdpbi1ib3R0b206IDM1NnB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIGZvcm0uc2Vzc2lvbiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNCOEJDQkY7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3171:
/*!*************************************************************!*\
  !*** ./src/app/components/proyectos/proyectos.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProyectosComponent": () => (/* binding */ ProyectosComponent)
/* harmony export */ });
/* harmony import */ var G_curso_argentina_progrma_Portfolio_Front_End_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/datos.service */ 8599);
/* harmony import */ var src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/autenticacion.service */ 3315);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 4662);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ 3646);









const _c0 = ["agregar"];
const _c1 = ["edit"];
const _c2 = ["editar"];
const _c3 = ["edicion"];
const _c4 = ["newPro"];
const _c5 = ["trabajo"];
function ProyectosComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProyectosComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.agregarProyectos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 29)(5, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
const _c6 = function (a0) {
  return {
    "display": a0
  };
};
function ProyectosComponent_div_31_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProyectosComponent_div_31_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const pro_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](pro_r6.edit = !pro_r6.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "EDITAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pro_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c6, pro_r6.edit ? "none" : "block"));
  }
}
const _c7 = function (a0, a1, a2) {
  return {
    "visibility": a0,
    "opacity": a1,
    "top": a2
  };
};
const _c8 = function (a0, a1) {
  return {
    "display": a0,
    "z-index": a1
  };
};
function ProyectosComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31)(1, "button", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProyectosComponent_div_31_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const pro_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](pro_r6.selected = !pro_r6.selected);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProyectosComponent_div_31_button_3_Template, 4, 3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "H6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProyectosComponent_div_31_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const pro_r6 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.redireccionar(pro_r6.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "IR AL SITIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProyectosComponent_div_31_Template_form_ngSubmit_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const pro_r6 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.EditarProyectos(pro_r6.id, ctx_r18.form2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProyectosComponent_div_31_Template_input_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const pro_r6 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](pro_r6.edit = !pro_r6.edit);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 46)(32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "GUARDAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const pro_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c6, pro_r6.edit ? "none" : "block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](13, _c7, pro_r6.selected ? "hidden" : "visible", pro_r6.selected ? "0" : "1", pro_r6.selected ? "70%" : "150px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](pro_r6.nombreProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](17, _c7, pro_r6.selected ? "visible" : "hidden", pro_r6.selected ? "1" : "0", pro_r6.selected ? "107px" : "70%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](pro_r6.nombreProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](pro_r6.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Lanzamiento: ", pro_r6.fecha_Lanz, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.form2)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](21, _c8, pro_r6.edit ? "flex" : "none", pro_r6.edit ? "2" : "-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1900 - 1 - 1);
  }
}
class ProyectosComponent {
  constructor(render2, service, formBuilder, service2) {
    this.render2 = render2;
    this.service = service;
    this.formBuilder = formBuilder;
    this.service2 = service2;
    this.pro = [];
    this.token = localStorage.getItem('token');
    this.form = this.formBuilder.group({
      nombreProyecto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      fecha_Lanz: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
    });
    this.form2 = this.formBuilder.group({
      nombreProyecto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      fecha_Lanz: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
    });
  }
  ObtenerDatos() {
    this.service.DatosProyectos().subscribe(data => {
      this.pro = data;
      console.log(data);
    });
  }
  ngOnInit() {
    this.ObtenerDatos();
  }
  showMenu() {
    const ocultar = this.trabajo.nativeElement;
    this.render2.addClass(ocultar, 'ocultar');
  }
  SaveInfo() {
    const edit = this.edit.nativeElement;
    const editar = this.editar.nativeElement;
    const edicion = this.edicion.nativeElement;
    this.render2.setStyle(edit, 'display', 'none');
    this.render2.setStyle(editar, 'display', 'block');
    this.render2.setStyle(edicion, 'display', 'none');
  }
  EditInfo() {
    const edit = this.edit.nativeElement;
    const editar = this.editar.nativeElement;
    const edicion = this.edicion.nativeElement;
    this.render2.setStyle(edit, 'display', 'block');
    this.render2.setStyle(editar, 'display', 'none');
    this.render2.setStyle(edicion, 'display', 'flex');
  }
  NewPro(form) {
    this.service.CrearProyectos(form).subscribe(data2 => {
      console.log(data2);
      const newPro = this.newPro.nativeElement;
      this.render2.setStyle(newPro, 'display', 'none');
      this.ObtenerDatos();
    }), error => {
      console.error(error);
    };
  }
  agregarProyectos() {
    const newPro = this.newPro.nativeElement;
    this.render2.setStyle(newPro, 'display', 'flex');
  }
  cerrarVentana() {
    const newPro = this.newPro.nativeElement;
    this.render2.setStyle(newPro, 'display', 'none');
  }
  EditarProyectos(id, form2) {
    var _this = this;
    return (0,G_curso_argentina_progrma_Portfolio_Front_End_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ID del Proyectos a editar:', id);
      yield _this.service.EditarProyecto(id, form2);
      _this.ObtenerDatos();
    })();
  }
  redireccionar(url) {
    window.location.href = `${url}`;
  }
}
ProyectosComponent.ɵfac = function ProyectosComponent_Factory(t) {
  return new (t || ProyectosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_datos_service__WEBPACK_IMPORTED_MODULE_1__.DatosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__.AutenticacionService));
};
ProyectosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProyectosComponent,
  selectors: [["app-proyectos"]],
  viewQuery: function ProyectosComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.agregar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.edit = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.edicion = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.newPro = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.trabajo = _t.first);
    }
  },
  decls: 33,
  vars: 5,
  consts: [[3, "label"], ["id", "3", 1, "eduw"], [1, "div_new"], ["newPro", ""], [1, "new__add", "container"], ["action", "", "method", "post", 1, "new__add--form", 3, "formGroup", "ngSubmit"], [1, "edit", 2, "width", "400px", "height", "500px", "display", "flex", "flex-wrap", "wrap"], [1, "menu__button"], ["type", "button", "value", "", 1, "menu__button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-lg", 2, "z-index", "1"], ["d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"], [1, "text-center", 2, "width", "100%"], ["for", "nombreProyecto"], ["type", "text", "id", "nombreProyecto", "formControlName", "nombreProyecto", 1, "form-control", "edicion", "nombre"], ["for", "descripcion"], ["type", "text", "id", "descripcion", "formControlName", "descripcion", 1, "form-control", "edicion", "trabajo"], ["for", "fecha_Lanz", 2, "width", "50%"], ["type", "date", "id", "fecha_Lanz", "formControlName", "fecha_Lanz", 1, "form-control", "edicion", "fecha", 2, "margin-right", "5px", 3, "min"], ["for", "url", 2, "width", "75%"], ["type", "url", "id", "url", "formControlName", "url", 1, "form-control", "edicion", "nombre", 2, "margin-left", "5px"], [2, "width", "100%", "display", "flex", "justify-content", "center"], ["type", "submit", "value", "CREAR", 1, "mod1--crear"], [1, "container-fluid", 2, "min-height", "400px"], ["class", "container img col", "style", " margin-left: 10px; margin-right: 5px;", 3, "click", 4, "ngIf"], ["class", "container", "style", "width: 300px; margin-left: 10px; margin-right: 5px; height: 400px;", 4, "ngFor", "ngForOf"], [1, "container", "img", "col", 2, "margin-left", "10px", "margin-right", "5px", 3, "click"], [1, "agregar"], ["xmlns", "http://www.w3.org/2000/svg", "width", "200", "height", "200", "fill", "#1A9FFF", "viewBox", "0 0 16 16", 1, "bi", "bi-plus-circle"], ["agregar", ""], ["d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"], ["d", "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"], [1, "container", 2, "width", "300px", "margin-left", "10px", "margin-right", "5px", "height", "400px"], [1, "img", "col", 3, "ngStyle", "click"], ["trabajo", ""], ["class", "mod1", 3, "ngStyle", "click", 4, "ngIf"], [1, "imagen", 2, "position", "absolute", "z-index", "0", 3, "ngStyle"], [1, "info", 2, "position", "absolute", "z-index", "0", 3, "ngStyle"], [2, "width", "100%"], [1, "mod1--url", 3, "click"], ["action", "", "method", "put", 1, "edit", 2, "display", "none", "z-index", "10", 3, "formGroup", "ngStyle", "ngSubmit"], ["edicion", ""], ["for", "fecha_Lanz", 2, "width", "45%"], ["for", "logo"], ["type", "text", "id", "logo", "formControlName", "logo", 1, "edicion", "imagen"], ["for", "url"], ["type", "url", "id", "url", "formControlName", "url", 1, "form-control", "edicion", "nombre", 2, "width", "200px"], [1, "mod1--borrar"], [1, "mod1", 3, "ngStyle", "click"], ["editar", ""]],
  template: function ProyectosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2, 3)(4, "div", 4)(5, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProyectosComponent_Template_form_ngSubmit_5_listener() {
        return ctx.NewPro(ctx.form.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProyectosComponent_Template_input_click_8_listener() {
        return ctx.cerrarVentana();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Nombre deL Proyecto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Descripcion");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Fecha de Lanzamiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Url del proyecto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ProyectosComponent_button_30_Template, 6, 0, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ProyectosComponent_div_31_Template, 34, 24, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "PROYECTOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1900 - 1 - 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.token);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.pro);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
  styles: ["*[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nh5[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.cerrar[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5%;\n}\n\n.eduw[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  min-height: 100vh;\n}\n\n.edu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1%;\n}\n\n.img[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 2.5px;\n  width: 290px;\n  height: 80px;\n  transition: 1s ease all;\n}\n\n.biomedic[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  display: flex;\n  width: max-content;\n  border-style: none;\n  height: 400px;\n}\n\n.img[_ngcontent-%COMP%] {\n  position: relative;\n  border-style: solid;\n  border-color: #1e80b1;\n  min-width: 300px;\n  max-width: 300px;\n  height: 400px;\n  background-image: radial-gradient(#1e80b1, #206487);\n  z-index: 0;\n}\n\n.img[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #4eccfa, #4ec5ff);\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: #4eccfa;\n}\n\nsvg[_ngcontent-%COMP%]:hover {\n  fill: #1A9FFF;\n}\n\n.info[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  visibility: hidden;\n  opacity: 0;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  height: 250px;\n  width: 160px;\n  top: 70%;\n  left: 25%;\n  transition: 1s ease all;\n  overflow: scroll;\n}\n\n.button[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.agregar[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 100px;\n  left: 50px;\n}\n\n.agregar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1A9FFF;\n}\n\n.mod[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 0;\n  right: 10px;\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n  margin: 10px;\n  z-index: 1;\n  background: transparent;\n  border: none;\n}\n\n.mod1[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n  top: 0;\n  left: 0;\n}\n\n.mod1--crear[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.mod1--borrar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.mod1--borrar[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.mod1[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.mod1--url[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.mod[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  align-items: center;\n  fill: #1A9FFF;\n  width: 20px;\n  height: 20px;\n  margin: 10px;\n}\n\n.mod[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.edit[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px;\n  width: 300px;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-image: linear-gradient(90deg, #194766, #206487, #194766);\n}\n\n.edicion[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #206487;\n  border: none;\n}\n\n.nombre[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  height: 50px;\n  border: solid hsl(200, 71%, 41%);\n  border-radius: 5px;\n}\n\n.trabajo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.fecha[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  height: max-content;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n}\n\n.rol[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  margin-top: 1px;\n  margin-right: 5px;\n  margin-left: 5px;\n  height: max-content;\n  border: solid #1e80b1;\n  border-radius: 5px;\n}\n\n.div_new[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  height: 70%;\n  width: 100%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.264);\n}\n\n.new__add[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #194766;\n  width: 400px;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  border: solid #1e80b1;\n  z-index: 6;\n}\n\n.new__add--form[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: solid #1e80b1;\n}\n\n.menu__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: transparent;\n  border: none;\n  width: 25px;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n}\n\n.mod1--url[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 150px;\n  margin: 12px;\n  color: white;\n  background: rgba(243, 243, 243, 0.1);\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);\n  border: none;\n  text-decoration: none;\n  z-index: 3;\n}\n\n@media (max-width: 950px) {\n  .eduw[_ngcontent-%COMP%] {\n    max-height: 61vh;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    transform: scale(0.75);\n    overflow-x: scroll;\n    overflow-y: hidden;\n    flex-wrap: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm95ZWN0b3MvcHJveWVjdG9zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vY3Vyc28lMjBhcmdlbnRpbmElMjBwcm9ncm1hL1BvcnRmb2xpby9Gcm9udC1FbmQvUG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50cy9wcm95ZWN0b3MvcHJveWVjdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxVQUFBO0FDU0o7O0FEUEE7RUFDSSwwREFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhBO0VBQ0ksYUFBQTtBQ2NKOztBRFpBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDZUo7O0FEYkE7RUFDSSxhQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNpQko7O0FEZkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDa0JKOztBRGhCQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDbUJKOztBRGpCQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDb0JKOztBRGxCQTtFQUNJLG1FQUFBO0FDcUJKOztBRG5CQTtFQUNJLG1FQUFBO0FDc0JKOztBRHBCQTtFQUNJLG1FQUFBO0FDdUJKOztBRHJCQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3dCSjs7QUR0QkE7RUFDSSxrQkFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtRUFBQTtBQzBCSjs7QUR4QkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQzJCSjs7QUR6QkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDNEJKOztBRDFCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDNkJKOztBRDNCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUM4Qko7O0FENUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDK0JKOztBRDdCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDZ0NKOztBRDlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FDaUNKOztBRC9CQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNrQ0o7O0FEaENBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ21DSjs7QURqQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ29DSjs7QURsQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ3FDSjs7QURuQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ3NDSjs7QURwQ0E7RUFDSTtJQUNJLGdCQUFBO0VDdUNOO0VEckNFO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtJQUFtQixrQkFBQTtJQUNuQixpQkFBQTtFQ3dDTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5oNntcbiAgICBtYXJnaW46IDVweDtcbn1cbmg1IHtcbiAgICBtYXJnaW46IDVweDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4uY2VycmFye1xuICAgIG1hcmdpbjogMSU7XG59XG5oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmVkdXd7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uZWR1e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG4uaW1nIC5pbWFnZW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDIuNXB4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZSBhbGw7XG59XG4uYmlvbWVkaWMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5pbWd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1zdHlsZTogIHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzFlODBiMTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnJhZGlhbC1ncmFkaWVudCggIzFlODBiMSwgIzIwNjQ4Nyk7XG4gICAgei1pbmRleDogMDtcbn1cbi5pbWc6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0ZWNjZmEsIzRlYzVmZik7XG59XG5zdmd7XG4gICAgZmlsbDogIzRlY2NmYTtcbn1cbnN2Zzpob3ZlcntcbiAgICBmaWxsOiAjMUE5RkZGO1xufVxuLmluZm97XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIHRvcDo3MCU7XG4gICAgbGVmdDoyNSU7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZSBhbGw7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5idXR0b257XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5hZ3JlZ2Fye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAxMDBweDtcbiAgICBsZWZ0OiA1MHB4O1xufVxuLmFncmVnYXIgc3Zne1xuICAgIGZpbGw6ICMxQTlGRkY7XG59XG4ubW9ke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLm1vZDF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOjEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDowO1xufVxuLm1vZDEtLWNyZWFye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjoxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHotaW5kZXg6IDI7XG59XG4ubW9kMS0tYm9ycmFye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjoxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHotaW5kZXg6IDI7XG59XG4ubW9kMS0tYm9ycmFyOmhvdmVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NDc2NiwgIzIwNjQ4NywgIzE5NDc2Nik7XG59XG4ubW9kMTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuLm1vZDEtLXVybDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuLm1vZCBzdmd7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmaWxsOiAjMUE5RkZGO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4ubW9ke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lZGl0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuLmVkaWNpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDY0ODc7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLm5vbWJyZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCBoc2woMjAwLCA3MSUsIDQxJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRyYWJham97XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZmVjaGF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXItZmx1aWR7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG59XG4ucm9se1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5kaXZfbmV3e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOjA7XG4gICAgei1pbmRleDogNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjY0KTtcbn1cbi5uZXdfX2FkZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NDc2NjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgICB6LWluZGV4OiA2O1xufVxuLm5ld19fYWRkLS1mb3Jte1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG59XG4ubWVudV9fYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAyNXB4O1xufVxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMDtcbn1cbi5tb2QxLS11cmx7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOjEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgei1pbmRleDogMztcbn1cbkBtZWRpYShtYXgtd2lkdGg6OTUwcHgpIHtcbiAgICAuZWR1d3tcbiAgICAgICAgbWF4LWhlaWdodDogNjF2aDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO292ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgfVxufSIsIioge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmg2IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmg1IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbnAge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNlcnJhciB7XG4gIG1hcmdpbjogMSU7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uZWR1dyB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmVkdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5pbWcgLmltYWdlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMi41cHg7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlIGFsbDtcbn1cblxuLmJpb21lZGljIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMxZTgwYjE7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjMWU4MGIxLCAjMjA2NDg3KTtcbiAgei1pbmRleDogMDtcbn1cblxuLmltZzpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRlY2NmYSwgIzRlYzVmZik7XG59XG5cbnN2ZyB7XG4gIGZpbGw6ICM0ZWNjZmE7XG59XG5cbnN2Zzpob3ZlciB7XG4gIGZpbGw6ICMxQTlGRkY7XG59XG5cbi5pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDE2MHB4O1xuICB0b3A6IDcwJTtcbiAgbGVmdDogMjUlO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlIGFsbDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmJ1dHRvbiB7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5hZ3JlZ2FyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogNTBweDtcbn1cblxuLmFncmVnYXIgc3ZnIHtcbiAgZmlsbDogIzFBOUZGRjtcbn1cblxuLm1vZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdG9wOiAwO1xuICByaWdodDogMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tb2QxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLm1vZDEtLWNyZWFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5tb2QxLS1ib3JyYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgei1pbmRleDogMjtcbn1cblxuLm1vZDEtLWJvcnJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NDc2NiwgIzIwNjQ4NywgIzE5NDc2Nik7XG59XG5cbi5tb2QxOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTk0NzY2LCAjMjA2NDg3LCAjMTk0NzY2KTtcbn1cblxuLm1vZDEtLXVybDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5NDc2NiwgIzIwNjQ4NywgIzE5NDc2Nik7XG59XG5cbi5tb2Qgc3ZnIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmlsbDogIzFBOUZGRjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubW9kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZWRpdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxOTQ3NjYsICMyMDY0ODcsICMxOTQ3NjYpO1xufVxuXG4uZWRpY2lvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNjQ4NztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubm9tYnJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIGhzbCgyMDAsIDcxJSwgNDElKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udHJhYmFqbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZlY2hhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlcjogc29saWQgIzFlODBiMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBib3JkZXI6IHNvbGlkICMxZTgwYjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRpdl9uZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNjQpO1xufVxuXG4ubmV3X19hZGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTQ3NjY7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAjMWU4MGIxO1xuICB6LWluZGV4OiA2O1xufVxuXG4ubmV3X19hZGQtLWZvcm0ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogc29saWQgIzFlODBiMTtcbn1cblxuLm1lbnVfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9kMS0tdXJsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuICAuZWR1dyB7XG4gICAgbWF4LWhlaWdodDogNjF2aDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5818:
/*!*********************************************!*\
  !*** ./src/app/helpers/auth.interceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/autenticacion.service */ 3315);


class AuthInterceptor {
  constructor(service) {
    this.service = service;
  }
  intercept(request, next) {
    const token = this.service.getToken();
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bear ${token}`)
      });
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
  return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__.AutenticacionService));
};
AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthInterceptor,
  factory: AuthInterceptor.ɵfac
});

/***/ }),

/***/ 3315:
/*!**************************************************!*\
  !*** ./src/app/service/autenticacion.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutenticacionService": () => (/* binding */ AutenticacionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Accept': 'application/json'
  })
};
class AutenticacionService {
  constructor(http) {
    this.http = http;
    this.urlApi = "https://portfolio-fwdy.onrender.com";
    console.log("todo ok");
  }
  IniciarSesion(Form) {
    return this.http.post(this.urlApi + "/login", Form, {
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization');
      const token = bearerToken.replace('Bearer ', '');
      localStorage.setItem('token', token);
      return body;
    }));
  }
  getToken() {
    return localStorage.getItem('token');
  }
  SignUp(form) {
    let direccion = this.urlApi + "/personas/crear";
    return this.http.post(direccion, form, {
      responseType: 'text'
    });
  }
}
AutenticacionService.ɵfac = function AutenticacionService_Factory(t) {
  return new (t || AutenticacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
AutenticacionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AutenticacionService,
  factory: AutenticacionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8599:
/*!******************************************!*\
  !*** ./src/app/service/datos.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosService": () => (/* binding */ DatosService)
/* harmony export */ });
/* harmony import */ var G_curso_argentina_progrma_Portfolio_Front_End_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class DatosService {
  constructor(http) {
    var _this = this;
    this.http = http;
    this.exp = [];
    this.urlApi = "https://portfolio-fwdy.onrender.com";
    this.EditarTrabajo = /*#__PURE__*/function () {
      var _ref = (0,G_curso_argentina_progrma_Portfolio_Front_End_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id, Trabajo) {
        console.log('id:', id);
        console.log('Trabajo:', Trabajo);
        const response = yield fetch(`${_this.urlApi}/trabajos/editar/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Trabajo)
        });
        if (!response.ok) {
          throw new Error('Error al actualizar los datos');
        }
        const resultado = yield response.json();
        console.log(resultado);
        return resultado;
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
    this.EditarEducacion = /*#__PURE__*/function () {
      var _ref2 = (0,G_curso_argentina_progrma_Portfolio_Front_End_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id, Educacion) {
        console.log('id:', id);
        console.log('proyectos:', Educacion);
        const response = yield fetch(`https://portfolio-fwdy.onrender.com/educacion/editar/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Educacion)
        });
        if (!response.ok) {
          throw new Error('Error al actualizar los datos');
        }
        const resultado = yield response.json();
        console.log(resultado);
        return resultado;
      });
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.EditarProyecto = /*#__PURE__*/function () {
      var _ref3 = (0,G_curso_argentina_progrma_Portfolio_Front_End_Portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id, Proyectos) {
        console.log('id:', id);
        console.log('proyectos:', Proyectos);
        const response = yield fetch(`https://portfolio-fwdy.onrender.com/proyectos/editar/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Proyectos)
        });
        if (!response.ok) {
          throw new Error('Error al actualizar los datos');
        }
        const resultado = yield response.json();
        console.log(resultado);
        return resultado;
      });
      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }();
    console.log("todo ok");
  }
  DatosPersonas() {
    return this.http.get(this.urlApi + "/personas/traer");
  }
  //funciones trabajo
  DatosTrabajo() {
    return this.http.get(this.urlApi + "/trabajos/traer");
  }
  CrearTrabajo(form) {
    let direccion = this.urlApi + "/trabajos/crear";
    return this.http.post(direccion, form, {
      responseType: 'text'
    });
  }
  tipoT() {
    return this.http.get(this.urlApi + "/tipotrabajo/traer");
  }
  //funciones educacion
  DatosEducacion() {
    return this.http.get(this.urlApi + "/educacion/traer");
  }
  CrearEducacion(form) {
    let direccion = this.urlApi + "/educacion/crear";
    return this.http.post(direccion, form, {
      responseType: 'text'
    });
  }
  tipoE() {
    return this.http.get(this.urlApi + "/tipoeducacion/traer");
  }
  //funciones proyectos
  DatosProyectos() {
    return this.http.get(this.urlApi + "/proyectos/traer");
  }
  CrearProyectos(form) {
    let direccion = this.urlApi + "/proyectos/crear";
    return this.http.post(direccion, form, {
      responseType: 'text'
    });
  }
}
DatosService.ɵfac = function DatosService_Factory(t) {
  return new (t || DatosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DatosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DatosService,
  factory: DatosService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1134:
/*!**********************************************!*\
  !*** ./src/app/service/portfolio.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioService": () => (/* binding */ PortfolioService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PortfolioService {
  constructor(http) {
    this.http = http;
    this.showSesion = false;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  loadConfig() {
    return this.http.get('assets/config.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(data => {
      console.log(data);
      this.datos = data;
    })).toPromise();
  }
  toggleInterface() {
    this.showSesion = !this.showSesion;
    this.subject.next(this.showSesion);
  }
  ontoggle() {
    return this.subject.asObservable();
  }
}
PortfolioService.ɵfac = function PortfolioService_Factory(t) {
  return new (t || PortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
PortfolioService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PortfolioService,
  factory: PortfolioService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2609), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map