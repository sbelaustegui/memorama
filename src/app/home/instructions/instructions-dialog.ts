import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'instructions-dialog',
  templateUrl: './instructions-dialog.html',
  styleUrls: ['./instructions-dialog.scss']
})
// tslint:disable-next-line:component-class-suffix
export class InstructionsDialog {

  constructor(public dialogRef: MatDialogRef<InstructionsDialog>) {}

  onButtonClick(): void {
    this.dialogRef.close();
  }

}
