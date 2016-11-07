// app/auth.service.ts
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
const core_1 = require("@angular/core");
const angular2_jwt_1 = require("angular2-jwt");
const home_service_1 = require("./home.service");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
let Auth = class Auth {
    constructor(homeService, http) {
        this.homeService = homeService;
        this.http = http;
        // Configure Auth0
        this.options = {
            allowedConnections: ['facebook'],
            auth: {
                redirectUrl: "http://localhost:8000/intermediate"
            }
        };
        this.lock = new Auth0Lock('KEY', 'DOMAIN', this.options);
        // Set userProfile attribute of already saved profile
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
            // Fetch profile information
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }
                profile.candidate = localStorage.getItem('candidate');
                console.log("Setting item now");
                localStorage.setItem('profile', JSON.stringify(profile));
                console.log("Item has been set");
                this.userProfile = profile;
                console.log(profile);
            });
        });
    }
    observableReturn(body) {
        console.log("Observable Return being called");
        return Rx_1.Observable.of(body)
            .map((res) => {
            console.log("Res is: ", res);
            return res;
            // res.json();
        })
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
    login() {
        // Call the show method to display the widget.
        this.lock.show();
    }
    ;
    authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    }
    ;
    logout() {
        // Remove token and profile from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
    }
    ;
};
Auth = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [home_service_1.HomeService, http_1.Http])
], Auth);
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map