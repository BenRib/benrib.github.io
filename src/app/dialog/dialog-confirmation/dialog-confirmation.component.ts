import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogConfirmationOptions } from './dialog-confirmation-options';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss']
})
export class DialogConfirmationComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DialogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public options: DialogConfirmationOptions) {
  }

  ngOnInit() {
    if (!(this.options instanceof DialogConfirmationOptions)) {
      throw new Error('Dialog Confirmation Options were not provided to the Dialog instance');
    }
  }

  onSelect(selectedOption: string) {
    this.dialogRef.close(selectedOption);
  }
}
