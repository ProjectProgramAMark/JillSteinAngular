import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { HomeService }   from '../../home/components/home.service';
import { IntermediateComponent }   from './intermediate.component';
import { Auth } from '../../home/components/auth.service';



@NgModule({
  imports:      [ HttpModule ],
  declarations: [ IntermediateComponent ],
  providers: [ HomeService, Auth]
})
export class IntermediateModule { }
