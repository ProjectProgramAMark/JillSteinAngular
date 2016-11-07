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
const http_1 = require('@angular/http');
const home_service_1 = require('../../home/components/home.service');
const intermediate_component_1 = require('./intermediate.component');
const auth_service_1 = require('../../home/components/auth.service');
let IntermediateModule = class IntermediateModule {
};
IntermediateModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule],
        declarations: [intermediate_component_1.IntermediateComponent],
        providers: [home_service_1.HomeService, auth_service_1.Auth]
    }), 
    __metadata('design:paramtypes', [])
], IntermediateModule);
exports.IntermediateModule = IntermediateModule;

//# sourceMappingURL=intermediate.module.js.map
