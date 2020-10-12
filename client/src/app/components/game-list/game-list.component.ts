import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  games: Game[];

  constructor(private gameService: GamesService) {
  }

  ngOnInit(): void {
    this.getGames();
  }

  deleteGame(id: number) {
    this.gameService.deleteGame(id).subscribe(
      resp => {
        this.getGames();
        console.log('Eliminado' + resp);
      },
      err => console.log(err)
    );
  }

  getGames() {
    this.gameService.getGames().subscribe(
      (resp: Game) => {
        this.games = resp as any;
        console.log(this.games);
      },
      err => console.log(err)
    );
  }

  editGame(id: number) {
    console.log(id);
  }
}
