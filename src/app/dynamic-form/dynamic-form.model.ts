export abstract class DynamicInput<T> {
    value: T;
    key: string;
    i18nTag: string;
    required: boolean;
    order: number;

    get controlType(): string {
        return this.internalControlType;
    }
    protected internalControlType: string;

    constructor(options: {
        key: string,
        value?: T,
        i18nTag?: string;
        label?: string,
        required?: boolean,
        order?: number
    }) {
        this.key = options.key;
        this.value = options.value;
        this.i18nTag = options.i18nTag;
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
    }
}

export class TextInput extends DynamicInput<string> {
    type: string;
    maxLength: number;
    minLength: number;
    displayLines: number;

    constructor(options: {
        key: string,
        value?: string,
        i18nTag?: string;
        required?: boolean,
        order?: number,
        type?: string,
        maxLength?: number,
        minLength?: number,
        displayLines?: number
    }) {
        super(options);
        this.type = options.type || '';
        this.maxLength = options.maxLength;
        this.minLength = options.minLength;
        this.displayLines = options.displayLines || 1;
        this.internalControlType = this.displayLines > 1 ? 'textarea' : 'textbox';
    }
}

export class BooleanInput extends DynamicInput<boolean> {
    constructor(options: {
        key: string,
        value?: boolean,
        i18nTag?: string;
        required?: boolean,
        order?: number
    }) {
        super(options);
        this.internalControlType = 'checkbox';
    }
}

export class SelectInput extends DynamicInput<string> {
    options: SelectInputOption[];

    constructor(options: {
        key: string,
        options: SelectInputOption[],
        value?: string,
        i18nTag?: string;
        required?: boolean,
        order?: number
    }) {
        super(options);
        this.internalControlType = 'select';
        this.options = options.options;
    }
}

export class SelectInputOption {
    constructor(
        public value: string,
        public label: string) { }
}