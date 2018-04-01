import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';

const routes: Routes = [
  { path: "players/:submenu", component: ManagePlayersComponent },
  { path: "status/game/:gameid", component: ManageGamesComponent },
  { path: "", pathMatch: "full", redirectTo: "/players/list" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
