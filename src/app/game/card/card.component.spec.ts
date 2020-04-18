import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Card} from '../../../shared/models/Card.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should flip when clicked', () => {
    component.card = new Card(1, 5, false);
    component.onClick();
    expect(component.card?.flipped).toBeTrue();
  });

  it('should not flip when disabled', () => {
    component.disabled = true;
    component.card = new Card(1, 5, false);
    component.onClick();
    expect(component.card?.flipped).toBeFalse();
  });

  it('should not flip when already flipped', () => {
    component.card = new Card(1, 5, true);
    component.onClick();
    expect(component.card?.flipped).toBeTrue();
  });
});
