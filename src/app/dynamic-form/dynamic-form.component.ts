import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicInput } from './dynamic-form.model';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
    @Input() inputs: DynamicInput<any>[] = [];
    @Output() formInit = new EventEmitter<FormGroup>();
    form: FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = this.toFormGroup(this.inputs);
        this.formInit.next(this.form);
    }

    private toFormGroup(inputs: DynamicInput<any>[]) {
        let group: any = {};

        inputs
            .forEach(input => {
                group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
                    : new FormControl(input.value || '');
            });

        return new FormGroup(group);
    }
}
