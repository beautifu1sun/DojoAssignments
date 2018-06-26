import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListrestComponent } from './listrest/listrest.component';
import { NewrestComponent } from './newrest/newrest.component';
import { ListreviewsComponent } from './listreviews/listreviews.component';
import { NewreviewComponent } from './newreview/newreview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListrestComponent },
  { path: 'new', component: NewrestComponent },
  { path: 'reviews/:id', component: ListreviewsComponent },
  { path: 'write/:id', component: NewreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
