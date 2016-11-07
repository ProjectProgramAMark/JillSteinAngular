import { Component } from '@angular/core';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { HomeService } from './home.service';
import { Auth } from './auth.service';


@Component({
    moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.html',
})
export class HomeComponent {

  /* READ HERE OK:
   * I am currently going to implement Auth0's Facebook integration
   * for Angular 2. I'll get the auth token that way, and then use that
   * with the FB graph API
   */

  constructor(private homeService: HomeService, private auth: Auth) { }

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

  authFunction(candidate: string): void {
    // Saving candidate to local storage, then authenticating
    localStorage.setItem('candidate', candidate);
    this.auth.login();
  }

}
