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
const match_component_1 = require('./match.component');
const match_service_1 = require('./match.service');
const http_1 = require('@angular/http');
let MatchModule = class MatchModule {
};
MatchModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule],
        declarations: [match_component_1.MatchComponent],
        providers: [match_service_1.MatchService]
    }), 
    __metadata('design:paramtypes', [])
], MatchModule);
exports.MatchModule = MatchModule;

//# sourceMappingURL=match.module.js.map
