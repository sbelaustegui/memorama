import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'instructions-dialog',
  templateUrl: 'instructions-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class InstructionsDialog {

  constructor(public dialogRef: MatDialogRef<InstructionsDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
