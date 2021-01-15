import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Game} from '../types/Game';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameUrl = 'api/games';

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameUrl);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.gameUrl}/${id}`);
  }

  getSpotLight(): Observable<Game |'Internal Server Error'> {
    return this.http.get<Game[]>(`${this.gameUrl}/?spotlight=true`).pipe(
      map((games) => {
        if (games.length === 1) {
          return games[0];
        }
        return 'Internal Server Error';
      })
    );
  }
}
