import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './components/views/home/home';
import {Games} from './components/views/games/games';
import {Consoles} from './components/views/consoles/consoles';
import {NotFound} from './components/views/not-found/not-found';

const routes: Routes = [
  {path: "home", component: Home, pathMatch: "full"},
  {path: "games", component: Games, pathMatch: "full" },
  {path: "consoles", component: Consoles, pathMatch: "full"},
  {path: "not-found", component: NotFound, pathMatch: "full"},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", redirectTo: "/not-found", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
