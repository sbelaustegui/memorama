import {Component, EventEmitter, Input, Output} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {Card} from '../../../shared/models/Card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CardComponent {

  @Input()
  card: Card;

  @Input()
  disabled: boolean;

  @Output()
  clicked = new EventEmitter<number>();

  onClick() {
    if (!this.disabled){
      this.toggleFlip();
      this.clicked.emit(this.card.flipped ? this.card.value : -1);
    }
  }

  toggleFlip() {
    this.card.flipped = !this.card.flipped;
  }
}
