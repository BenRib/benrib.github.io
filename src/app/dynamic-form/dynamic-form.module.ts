import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { InputMessageComponent } from './input-message/input-message.component';

@NgModule({
    declarations: [
        DynamicFormComponent,
        DynamicInputComponent,
        InputMessageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        DynamicFormComponent
    ]
})
export class DynamicFormModule { }
