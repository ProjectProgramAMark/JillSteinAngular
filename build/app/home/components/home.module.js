"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const home_component_1 = require('./home.component');
const home_service_1 = require('./home.service');
const ng2_modal_1 = require('ng2-modal');
const http_1 = require('@angular/http');
const auth_service_1 = require('./auth.service');
const angular2_jwt_1 = require('angular2-jwt');
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    core_1.NgModule({
        imports: [ng2_modal_1.ModalModule, http_1.HttpModule],
        declarations: [home_component_1.HomeComponent],
        providers: [home_service_1.HomeService, auth_service_1.Auth, angular2_jwt_1.AUTH_PROVIDERS]
    }), 
    __metadata('design:paramtypes', [])
], HomeModule);
exports.HomeModule = HomeModule;

//# sourceMappingURL=home.module.js.map
