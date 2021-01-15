import {Component, OnInit, ViewChild} from '@angular/core';
import { Location } from '@angular/common';
import {Game} from '../../types/Game';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/game.service';
import * as $ from 'jquery';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;

  game: Game;


  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGame();
    this.carousel.pause();
  }

  getGame(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGameById(id).subscribe(game => {
      this.game = game;
    });
  }
}
