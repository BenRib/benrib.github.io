import { Component, Input } from '@angular/core';
import { DynamicInput } from '../dynamic-form.model';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-dynamic-input',
    templateUrl: './dynamic-input.component.html',
    styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {
    @Input() input: DynamicInput<any>;
    @Input() form: FormGroup;

    constructor() { }
}
