import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInputOptions } from './dialog-input-options';

@Component({
    selector: 'app-dialog-input',
    templateUrl: './dialog-input.component.html',
    styleUrls: ['./dialog-input.component.scss']
})
export class DialogInputComponent implements OnInit {
    form: FormGroup;

    constructor(private dialogRef: MatDialogRef<DialogInputComponent>, @Inject(MAT_DIALOG_DATA) public options: DialogInputOptions) {
    }

    ngOnInit() {
        if (!(this.options instanceof DialogInputOptions)) {
            throw new Error('Dialog Input Options were not provided to the Dialog instance');
        }
    }

    ok() {
        this.dialogRef.close(this.form.value);
    }

    cancel() {
        this.dialogRef.close();
    }
}