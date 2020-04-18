import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Player} from '../../../shared/models/Player.model';
import {InstructionsDialog} from '../../home/instructions/instructions-dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game-end-dialog',
  templateUrl: './game-end-dialog.html',
  styleUrls: ['./game-end-dialog.scss']
})
// tslint:disable-next-line:component-class-suffix
export class GameEndDialog {

  constructor(public dialogRef: MatDialogRef<InstructionsDialog>, @Inject(MAT_DIALOG_DATA) public winner: Player) {}

  onExit(): void {
    this.dialogRef.close();
  }
}
