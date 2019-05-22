import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { DialogInputComponent } from './dialog-input/dialog-input.component';

import { DialogConfirmationOptions } from './dialog-confirmation/dialog-confirmation-options';
import { DialogInputOptions } from './dialog-input/dialog-input-options';
import { DynamicInput } from '../dynamic-form/dynamic-form.model';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) { }

  confirm(contentTag: string, titleTag = 'message-confirmation-title', yesOption = 'check', noOption = 'cancel'): Observable<boolean> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = new DialogConfirmationOptions(titleTag, contentTag, noOption, yesOption);
    let dialogRef = this.dialog.open(DialogConfirmationComponent, dialogConfig);
    return dialogRef.afterClosed().pipe(map(result => result === yesOption));
  }

  input(titleTag: string, messageTag: string, inputs: DynamicInput<any>[]): Observable<any> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = new DialogInputOptions(titleTag, messageTag, inputs);
    let dialogRef = this.dialog.open(DialogInputComponent, dialogConfig);
    return dialogRef.afterClosed();
  }
}