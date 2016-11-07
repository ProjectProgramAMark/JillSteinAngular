import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent }  from './home/components/home.component';
import { IntermediateComponent }  from './intermediate/components/intermediate.component';
import { MatchComponent }  from './match/components/match.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      // make route for redirect from auth0 to happen
      { path: 'intermediate', component: IntermediateComponent },
      { path: 'match', component: MatchComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
