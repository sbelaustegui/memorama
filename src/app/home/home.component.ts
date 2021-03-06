import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {InstructionsDialog} from './instructions/instructions-dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(InstructionsDialog, {
      maxWidth: '400px'
    });
  }

}


