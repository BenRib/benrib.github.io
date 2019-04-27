import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogInputOptions } from './dialog-input-options';

@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrls: ['./dialog-input.component.scss']
})
export class DialogInputComponent implements OnInit {
  inputValue: string;

  constructor(private dialogRef: MatDialogRef<DialogInputComponent>,
    @Inject(MAT_DIALOG_DATA) public options: DialogInputOptions) {
  }

  ngOnInit() {
    if (!(this.options instanceof DialogInputOptions)) {
      throw new Error('Dialog Input Options were not provided to the Dialog instance');
    }
    this.inputValue = this.options.defaultValue;
  }

  ok() {
    if (!this.inputValue) {
      return;
    }

    this.dialogRef.close(this.inputValue);
  }

  cancel() {
    this.dialogRef.close();
  }
}
