import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { FormsModule } from '@angular/forms';
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { ErrorEditLinkComponent } from './error-edit-link/error-edit-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    ListAuthorsComponent,
    ListQuotesComponent,
    AddQuoteComponent,
    ErrorEditLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
