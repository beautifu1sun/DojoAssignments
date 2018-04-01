import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListAuthorsComponent },
  { path: 'new', component: AddAuthorComponent },
  { path: 'edit/:id', component: EditAuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
