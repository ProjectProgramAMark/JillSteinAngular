import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/components/home.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HomeModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
