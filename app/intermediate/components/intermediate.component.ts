import { Component } from '@angular/core';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import { HomeService } from '../../home/components/home.service';
import { Auth } from '../../home/components/auth.service';



@Component({
    moduleId: module.id,
    selector: 'my-intermediate',
    templateUrl: 'intermediate.html',
})
export class IntermediateComponent implements OnInit {

  ngOnInit(): void {
    // Blocking off until localStorage profile item set
    // while(localStorage.getItem('profile') == null) {
    //
    // }
    // console.log("While loop over with!");
    // Going to call homeService.postVote and then redirect to match once finished
    console.log("Intermediate is here, the profile is: ", localStorage.getItem('profile'));
    this.readyVote();
  }

  readyVote(): any {
    this.auth.observableReturn(localStorage.getItem('profile')).subscribe(
      success => console.log("Success! Success! We haaaave, success!", success),
      error => console.error('Error: ', error),
          () => console.log("Done!")
    );
  }

  constructor(private homeService: HomeService, private auth: Auth) { }

}
