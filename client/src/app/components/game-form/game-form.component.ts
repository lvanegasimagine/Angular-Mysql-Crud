import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from '../../models/Game';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private gameService: GamesService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRouter.snapshot.params;

    if (params.id) {
      this.gameService.getGame(params.id).subscribe(resp => {
        this.game = resp;
        this.edit = true;
      });
    }
  }

  savedGame() {
    // Eliminar los datos correspondiente del Game
    delete this.game.created_at;
    delete this.game.id;

    this.gameService.createGame(this.game).subscribe(
      res => {
        console.log('Datos grabados');
        this.router.navigate(['/games']);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateGame() {
    delete this.game.created_at;
    
    this.gameService.updateGame(this.game.id, this.game).subscribe(
      resp => {
        console.log('Datos grabados');
        this.router.navigate(['/games']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
