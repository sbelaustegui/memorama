import { Component, OnInit } from '@angular/core';
import {Player} from '../../shared/models/Player.model';
import {Card} from '../../shared/models/Card.model';
import {delay} from 'rxjs/operators';
import {InstructionsDialog} from '../home/instructions/instructions-dialog';
import {MatDialog} from '@angular/material/dialog';
import {GameEndDialog} from './end/game-end-dialog';

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

  constructor(public dialog: MatDialog) {
    this.cards = Array(NUMBER_OF_CARDS)
                      .fill(1)
                      .map((_, index) => new Card(index, index < 10 ? index : index - 10, false))
                      .sort(() => Math.random() - 0.5);
  }

  ngOnInit(): void {
  }

  getActivePlayer() {
    return this.players.find(p => p.active);
  }

  onCardClicked(value) {
    this.gameDisabled = true;
    if (this.selectedValue < 0) {
      // Player first selection
      this.selectedValue = value;
      this.gameDisabled = false;
    } else if (this.selectedValue === value) {
      // Match player second selection
      this.players.forEach(p => {
        if (p.active) {
          p.cards.push(value);
          p.points += 1;
        }
      });
      this.selectedValue = -1;
      this.gameDisabled = false;
      this.checkCards();
    } else {
      // Mismatch player second selection
      setTimeout(() => {
        this.players.forEach(p => p.active = !p.active);
        this.cards
          .filter(card => card.value === this.selectedValue || card.value === value)
          .forEach(card => card.flipped = false);
        this.selectedValue = -1;
        this.gameDisabled = false;
      }, 1500);
    }
  }

  checkCards(){
    const selectedCards = this.cards.filter(c => !c.flipped).length;
    if (selectedCards === 0) {
      this.finishGame();
    }
  }

  finishGame() {
    const winner: Player = this.players.reduce((max, player) => max.points > player.points ? max : player);
    this.dialog.open(GameEndDialog, {
      width: '400px',
      data: winner,
    });
  }

  get numberOfCols() {
    return NUMBER_OF_COLS;
  }

}
