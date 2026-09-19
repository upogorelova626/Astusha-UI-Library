import {Directive, input} from '@angular/core';

@Directive({
    selector: '[astStatus]',
    host: {
        '[style.--ast-status]': 'astStatus() || null'
    }
})
export class StatusDirective {
    readonly astStatus = input('');
}
