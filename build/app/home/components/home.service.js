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
const Rx_1 = require("rxjs/Rx");
const http_1 = require("@angular/http");
let HomeService = class HomeService {
    /*
     * TODO: Set up services like this:
            Front End               Angular services       Server Service
            CONSIDER: Use another more Angular friendly OAuth API and just
            give the access token to the fbGraph API on Node
          1. Modal button press -> facebookAuthService -> facebookAuthRoute
          2. Facebook authentication -> postVote -> save Vote to DB
          3. Randomly other vote object from opposite pile
          4. Send Facebook API request to get user details of user
          5. Show (or send email) of match for person, set matched to true
     */
    constructor(http) {
        this.http = http;
        this.serverUrl = 'http://c45d000c.ngrok.io/';
    }
    postVote(body) {
        // for now just print something stupid
        console.log("Something stupid");
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        console.log("Is...is this being sent?");
        return this.http.get(this.serverUrl)
            .map((res) => res.json())
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
    authFacebook(Candidate) {
        var facebookUrl = this.serverUrl + 'facebookAuth';
        console.log("Sent a request to server at url: ", facebookUrl);
        return this.http.get(facebookUrl)
            .map((res) => {
            console.log("Auth url is: ", res._body);
            return res._body;
            // Going to change location to hit the facebookAuth url
        })
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
};
HomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map