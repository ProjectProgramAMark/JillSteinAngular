import { NgModule }      from '@angular/core';
import { HomeComponent }   from './home.component';
import { HomeService }   from './home.service';
import { ModalModule } from 'ng2-modal';
import { HttpModule } from '@angular/http';
import { Auth } from './auth.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';


@NgModule({
  imports:      [ ModalModule, HttpModule ],
  declarations: [ HomeComponent ],
  providers: [ HomeService, Auth, AUTH_PROVIDERS ]
})
export class HomeModule { }
