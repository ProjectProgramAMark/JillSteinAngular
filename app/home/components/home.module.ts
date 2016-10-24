import { NgModule }      from '@angular/core';
import { HomeComponent }   from './home.component';
import { HomeService }   from './home.service';
import { ModalModule } from 'ng2-modal';

@NgModule({
  imports:      [ ModalModule ],
  declarations: [ HomeComponent ],
  providers: [ HomeService ]
})
export class HomeModule { }
