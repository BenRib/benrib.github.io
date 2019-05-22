import { DynamicInput } from 'src/app/dynamic-form/dynamic-form.model';

export class DialogInputOptions {
    constructor(
        public titleTag: string,
        public messageTag: string,
        public inputs: DynamicInput<any>[]
    ) { }
}
