import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { FormsModule } from '@angular/forms';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    AddPlayerComponent,
    GameStatusComponent,
    ManagePlayersComponent,
    ManageGamesComponent
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
