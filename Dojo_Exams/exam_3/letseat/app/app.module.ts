import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListrestComponent } from './listrest/listrest.component';
import { NewrestComponent } from './newrest/newrest.component';
import { UpdaterestComponent } from './updaterest/updaterest.component';
import { ListreviewsComponent } from './listreviews/listreviews.component';
import { NewreviewComponent } from './newreview/newreview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListrestComponent,
    NewrestComponent,
    UpdaterestComponent,
    ListreviewsComponent,
    NewreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
