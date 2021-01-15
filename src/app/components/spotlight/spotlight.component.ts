import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../types/Game';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {

  game: Game;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getSpotlight();
  }

  getSpotlight(): void {
    this.gameService.getSpotLight().subscribe(value => {
      if (typeof value !== 'string') { this.game = value; }
      else { throw new Error('Une erreur interne est survenue: le nombre de jeux mis en vedette doit être strictement égale à 1'); }
    });
  }

}
