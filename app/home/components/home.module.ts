import { NgModule }      from '@angular/core';
import { HomeComponent }   from './home.component';
import { HomeService }   from './home.service';
import { ModalModule } from 'ng2-modal';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ ModalModule, HttpModule ],
  declarations: [ HomeComponent ],
  providers: [ HomeService ]
})
export class HomeModule { }
