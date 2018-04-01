import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { BikeofthedayComponent } from './bikeoftheday/bikeoftheday.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MylistingsComponent } from './mylistings/mylistings.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    BikeofthedayComponent,
    LogRegComponent,
    NavigationComponent,
    MylistingsComponent,
    LandingComponent
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
