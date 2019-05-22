import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
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
