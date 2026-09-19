import {Directive, input} from '@angular/core';

type RadioSize = 's' | 'm' | 'l';

@Directive({
    selector: 'input[type=radio][astRadio]',
    host: {
        class: 'ast-radio',

        '[attr.data-size]': 'size()',
        '[attr.data-invalid]': 'invalid() || null'
    }
})
export class RadioDirective {
    readonly size = input<RadioSize>('m');

    readonly invalid = input(false);
}
