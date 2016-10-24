import { Injectable } from '@angular/core';
import { Vote }    from '../../person/model/vote';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HomeService {

  /*
   * TODO: Set up services like this:
          Front End               Angular services       Server Service
        1. Modal button press -> facebookAuthService -> facebookAuthRoute
        2. Facebook authentication -> postVote -> save Vote to DB
        3. Randomly other vote object from opposite pile
        4. Send Facebook API request to get user details of user
        5. Show (or send email) of match for person, set matched to true
   */

  constructor (private http: Http) {}
  private serverUrl = 'http://021c1c46.ngrok.io/';

  postVote(body: Object): Observable<Comment[]> {
    // for now just print something stupid
    console.log("Something stupid");

    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.get(this.serverUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
}
