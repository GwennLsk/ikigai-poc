import { Component, OnInit } from '@angular/core';
import {Game} from '../../types/Game';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getAllGames().subscribe(games => {
      this.gameList = games;
    });
  }

}
