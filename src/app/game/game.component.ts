import { Component, OnInit } from '@angular/core';
import {Player} from '../../shared/models/Player.model';
import {Card} from '../../shared/models/Card.model';

const NUMBER_OF_CARDS = 20;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  players: Player[] = [
    {
      id: 1,
      active: true,
      points: 0,
    },
    {
      id: 2,
      active: false,
      points: 0,
    }
  ];

  cards: Card[] = [];

  constructor() {
    this.cards = Array(NUMBER_OF_CARDS)
                      .fill(1)
                      .map((_, index) => new Card(index));
  }

  ngOnInit(): void {
  }

  getActivePlayer() {
    return this.players.find(p => p.active);
  }

}
