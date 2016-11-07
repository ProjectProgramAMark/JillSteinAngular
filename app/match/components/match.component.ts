import { Component } from '@angular/core';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { MatchService } from './match.service';


@Component({
    moduleId: module.id,
    selector: 'my-match',
    templateUrl: 'match.html',
})
export class MatchComponent {

  constructor(private matchService: MatchService) { }


}
