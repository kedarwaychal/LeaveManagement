import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-errordialogue',
  templateUrl: './errordialogue.component.html',
  styleUrls: ['./errordialogue.component.css']
})
export class ErrordialogueComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }) {}


}
