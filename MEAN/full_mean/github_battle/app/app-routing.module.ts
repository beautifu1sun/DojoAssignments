import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: "rankings", component: RankingsComponent },
  { path: "results", component: ResultsComponent },
  { path: "", pathMatch: "full", component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
