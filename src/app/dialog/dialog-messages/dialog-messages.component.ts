import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dialog-messages',
    templateUrl: './dialog-messages.component.html',
    styleUrls: ['./dialog-messages.component.scss']
})
export class DialogMessagesComponent {
    @Input() tag: string;

    constructor() { }
}
