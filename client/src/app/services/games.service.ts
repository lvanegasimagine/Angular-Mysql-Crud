import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  public getGames() {
    return this.http.get(`${this.URL}/games`);
  }

  public getGame(id: string) {
    return this.http.get(`${this.URL}/games/${id}`)
  }

  public deleteGame(id: string) {
    return this.http.delete(`${this.URL}/games/${id}`)
  }

  createGame(game: Game) {
    return this.http.post(`${this.URL}/games`, game);
  }

  updateGame(id: string, updateGame: Game): Observable<Game> {
    return this.http.put(`${this.URL}/games/${id}`, updateGame);
  }
}
