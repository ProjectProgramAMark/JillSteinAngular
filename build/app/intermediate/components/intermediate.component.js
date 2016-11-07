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
const home_service_1 = require('../../home/components/home.service');
const auth_service_1 = require('../../home/components/auth.service');
let IntermediateComponent = class IntermediateComponent {
    constructor(homeService, auth) {
        this.homeService = homeService;
        this.auth = auth;
    }
    ngOnInit() {
        // Blocking off until localStorage profile item set
        // while(localStorage.getItem('profile') == null) {
        //
        // }
        // console.log("While loop over with!");
        // Going to call homeService.postVote and then redirect to match once finished
        console.log("Intermediate is here, the profile is: ", localStorage.getItem('profile'));
        this.readyVote();
    }
    readyVote() {
        this.auth.observableReturn(localStorage.getItem('profile')).subscribe(success => console.log("Success! Success! We haaaave, success!", success), error => console.error('Error: ', error), () => console.log("Done!"));
    }
};
IntermediateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-intermediate',
        templateUrl: 'intermediate.html',
    }), 
    __metadata('design:paramtypes', [home_service_1.HomeService, auth_service_1.Auth])
], IntermediateComponent);
exports.IntermediateComponent = IntermediateComponent;

//# sourceMappingURL=intermediate.component.js.map
