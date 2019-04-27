import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DialogInputComponent } from './dialog-input/dialog-input.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';

import { DialogInputOptions } from './dialog-input/dialog-input-options';
import { DialogConfirmationOptions } from './dialog-confirmation/dialog-confirmation-options';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) { }

  confirm(contentTag: string, titleTag = 'message-confirmation-title', yesOption = 'check', noOption = 'cancel'): Observable<boolean> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = new DialogConfirmationOptions(titleTag, contentTag, yesOption, noOption);
    let dialogRef = this.dialog.open(DialogConfirmationComponent, dialogConfig);
    return dialogRef.afterClosed().pipe(map(result => result === yesOption));
  }

  input(titleTag: string, placeholderTag: string, defaultValue?: string): Observable<any> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = new DialogInputOptions(titleTag, placeholderTag, defaultValue);
    let dialogRef = this.dialog.open(DialogInputComponent, dialogConfig);
    return dialogRef.afterClosed();
  }
}