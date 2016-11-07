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
const home_service_1 = require('./home.service');
const auth_service_1 = require('./auth.service');
let HomeComponent = class HomeComponent {
    /* READ HERE OK:
     * I am currently going to implement Auth0's Facebook integration
     * for Angular 2. I'll get the auth token that way, and then use that
     * with the FB graph API
     */
    constructor(homeService, auth) {
        this.homeService = homeService;
        this.auth = auth;
    }
    // authFacebook(Candidate: string): void {
    //   this.homeService.authFacebook(Candidate).subscribe(
    //     vote => {
    //       console.log("Success! From the controller side");
    //       console.log("Here's what I'm getting: ", vote);
    //       this.sendVote(vote);
    //     },
    //     error => console.error('Error: ', error),
    //     () => console.log("Done!")
    //   );
    // }
    authFunction(candidate) {
        // Saving candidate to local storage, then authenticating
        localStorage.setItem('candidate', candidate);
        this.auth.login();
    }
};
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-home',
        templateUrl: 'home.html',
    }), 
    __metadata('design:paramtypes', [home_service_1.HomeService, auth_service_1.Auth])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
