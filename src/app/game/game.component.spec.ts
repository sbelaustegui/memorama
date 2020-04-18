import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import {MatDialog} from '@angular/material/dialog';
import {MdDialogMock} from '../../shared/mocks/dialog.mock';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [
        { provide: MatDialog, useClass: MdDialogMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have more than one active player', () => {
    const activePlayers = component.players.filter(p => p.active).length;
    expect(activePlayers <= 1).toBeTruthy();
  });

  it('should have a selected value when a card is clicked', () => {
    const value = Math.floor(Math.random());
    component.onCardClicked(value);
    expect(component.selectedValue === value).toBeTruthy();
  });

  it('should revert flipped cards when value does not match', () => {
    const value1 = Math.floor(Math.random() * 10);
    const value2 = Math.floor(Math.random() * 10);
    component.onCardClicked(value1);
    component.onCardClicked(value2);
    expect(component.cards.filter(c => c.flipped).length === 0).toBeTruthy();
  });

  it('should assign card value to player when flipped cards values match', () => {
    const value = Math.floor(Math.random() * 10);
    component.onCardClicked(value);
    component.onCardClicked(value);
    expect(component.getActivePlayer().cards.filter(c => c === value).length > 0).toBeTruthy();
  });

  it('should increase players points when flipped cards values match', () => {
    const value = Math.floor(Math.random() * 10);
    component.onCardClicked(value);
    component.onCardClicked(value);
    expect(component.getActivePlayer().points > 0).toBeTruthy();
  });

  it('should finish the game when all cards are flipped', () => {
    component.cards.forEach(c => c.flipped = true);
    component.checkCards();
    expect(component.gameDisabled).toBeTruthy();
  });
});
