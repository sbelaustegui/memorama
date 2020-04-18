import { Component, OnInit } from '@angular/core';
import {Player} from '../../shared/models/Player.model';
import {Card} from '../../shared/models/Card.model';
import {delay} from 'rxjs/operators';

const NUMBER_OF_CARDS = 20;
const NUMBER_OF_COLS = 4;

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
      cards: [],
    },
    {
      id: 2,
      active: false,
      points: 0,
      cards: [],
    }
  ];
  cards: Card[] = [];
  gameDisabled = false;
  selectedValue = -1;

  constructor() {
    this.cards = Array(NUMBER_OF_CARDS)
                      .fill(1)
                      .map((_, index) => new Card(index, index <= 10 ? index : index - 10, false))
                      .sort(() => Math.random() - 0.5);
  }

  ngOnInit(): void {
  }

  getActivePlayer() {
    return this.players.find(p => p.active);
  }

  onCardClicked(value) {
    if (this.selectedValue < 0) {
      this.selectedValue = value;
    } else if (this.selectedValue === value) {
      this.players.forEach(p => {
        if (p.active) {
          p.cards.push(value);
          p.points += 100;
        }
      });
    } else {
      setTimeout(() => {
        this.players.forEach(p => p.active = !p.active);
        this.cards
          .filter(card => card.value === this.selectedValue || card.value === value)
          .forEach(card => card.flipped = false);
        this.selectedValue = -1;

      }, 1500);
    }
  }

  get numberOfCols() {
    return NUMBER_OF_COLS;
  }

}
