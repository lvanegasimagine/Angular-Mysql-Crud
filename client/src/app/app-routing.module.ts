import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';

const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'games/add', component: GameFormComponent },
  { path: 'games/edit/:id', component: GameFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'games' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
