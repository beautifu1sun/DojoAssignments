import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { ErrorEditLinkComponent } from './error-edit-link/error-edit-link.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListAuthorsComponent },
  { path: 'new', component: AddAuthorComponent },
  { path: 'edit/:id', component: EditAuthorComponent },
  { path: 'quotes/:id', component: ListQuotesComponent },
  { path: 'write/:id', component: AddQuoteComponent },
  { path: 'errorlink', component: ErrorEditLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
