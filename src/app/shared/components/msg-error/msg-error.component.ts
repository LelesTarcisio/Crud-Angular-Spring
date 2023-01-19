import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.scss']
})
export class MsgErrorComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
