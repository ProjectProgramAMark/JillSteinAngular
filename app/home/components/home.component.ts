import { Component } from '@angular/core';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { HomeService } from './home.service';
import { Vote }    from '../../person/model/vote';


@Component({
    moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.html',
})
export class HomeComponent {

  constructor(private homeService: HomeService) { }


  sendVote(Candidate: string): void {
    var VoteObj: Vote = {
        firstName: 'dummy',
        lastName: 'variable',
        candidate: Candidate
    };
    this.homeService.postVote(VoteObj);
    console.log("why hello there mfer!");
  }


}
