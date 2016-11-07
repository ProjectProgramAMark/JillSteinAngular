import { NgModule }      from '@angular/core';
import { MatchComponent }   from './match.component';
import { MatchService }   from './match.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [ HttpModule ],
  declarations: [ MatchComponent ],
  providers: [ MatchService ]
})
export class MatchModule { }
