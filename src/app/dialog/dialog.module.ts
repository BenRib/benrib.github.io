import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';

import { DialogService } from './dialog.service';
import { DialogInputComponent } from './dialog-input/dialog-input.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { DialogMessagesComponent } from './dialog-messages/dialog-messages.component';

@NgModule({
  declarations: [
    DialogInputComponent,
    DialogConfirmationComponent,
    DialogMessagesComponent
  ],
  entryComponents: [
    DialogInputComponent,
    DialogConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    DialogService
  ]
})
export class DialogModule { }
