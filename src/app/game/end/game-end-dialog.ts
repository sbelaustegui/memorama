import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Player} from '../../../shared/models/Player.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game-end-dialog',
  templateUrl: './game-end-dialog.html',
  styleUrls: ['./game-end-dialog.scss']
})
// tslint:disable-next-line:component-class-suffix
export class GameEndDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public winner: Player) {}
}
