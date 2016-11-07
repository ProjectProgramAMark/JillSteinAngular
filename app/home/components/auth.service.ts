// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { HomeService } from './home.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    options = {
      allowedConnections: ['facebook'],
      auth: {
        redirectUrl: "http://localhost:8000/intermediate"
      }
    };
    lock = new Auth0Lock('KEY', 'DOMAIN', this.options);
    userProfile: any;

    constructor(private homeService: HomeService, private http: Http) {

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

    public observableReturn(body: Object): Observable<Object[]> {
      console.log("Observable Return being called");
      return Observable.of(body)
      .map((res:Response) => {
        console.log("Res is: ", res);
        return res;
        // res.json();
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token and profile from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
    };
}
