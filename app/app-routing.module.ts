import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent }  from './home/components/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
