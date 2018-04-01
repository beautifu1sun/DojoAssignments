import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { BikeofthedayComponent } from './bikeoftheday/bikeoftheday.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MylistingsComponent } from './mylistings/mylistings.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
