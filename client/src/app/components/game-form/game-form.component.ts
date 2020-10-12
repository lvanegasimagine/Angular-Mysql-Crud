import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from '../../models/Game';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';

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

  constructor(private gameService: GamesService, private router: Router) { }

  ngOnInit(): void {
  }

  savedGame() {
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
    )
  }



}
