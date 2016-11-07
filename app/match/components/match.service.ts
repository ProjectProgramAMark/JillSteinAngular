import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class MatchService {

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

  constructor (private http: Http) {}
  private serverUrl = 'http://7380a9b1.ngrok.io/';

  postVote(body: Object): Observable<Boolean[]> {
    // for now just print something stupid
    // console.log("Something stupid");
    // console.log("Body is: ", body);
    //
    // let bodyString = JSON.stringify(body); // Stringify payload
    // let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options       = new RequestOptions({ headers: headers }); // Create a request option
    // console.log("Is...is this being sent?");
    // return this.http.get(this.serverUrl)
    //                     // ...and calling .json() on the response to return data
    //                      .map((res:Response) => {
    //                        res.json();
    //                        console.log("Post vote success has happened!");
    //                      })
    //                      //...errors if any
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    return this.http.post((this.serverUrl + 'postVote'), body)
          // ...and calling .json() on the response to return data
           .map((res:Response) => {
             console.log("Res is: ", res);
           })
           //...errors if any
           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  // authFacebook(Candidate: string): Observable<string> {
  //   var facebookUrl: string = this.serverUrl + 'facebookAuth';
  //   console.log("Sent a request to server at url: ", facebookUrl);
  //   return this.http.get(facebookUrl)
  //                        .map((res:Response) => {
  //                          console.log("authUrl is: ", res._body);
  //                          var authUrl = res._body;
  //                         //  fbUser.candidate = Candidate;
  //                          return authUrl;
  //                        })
  //                       //  .flatMap((authUrl) => this.http.get(authUrl)).map((res: Response) => {
  //                       //    console.log("RESPONSE FROM THIS PAGE: res.json()");
  //                       //  })
  //                        //...errors if any
  //                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  // }

  // sendToken(Token: string): Observable<Vote[]> {
  //   return this.http.get(this.serverUrl + 'sendToken/' + Token)
  //         .map((res:Response) => {
  //           console.log("Response is: ", res._body);
  //           var token: string = res._body;
  //           return token;
  //         })
  //         // .flatMap((token) => this.http.get(this.serverUrl + 'getUserData/' + token)).map((res: Response) => {
  //         //   // res.json();
  //         //   console.log("Flat map function occured! Response is: ", res);
  //         // })
  //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  // }
}
