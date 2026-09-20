import {Directive, input} from '@angular/core';

type CheckboxSize = 's' | 'm' | 'l';

@Directive({
    selector: 'input[type=checkbox][astCheckbox]',
    host: {
        class: 'ast-checkbox',

        '[attr.data-size]': 'size()',
        '[attr.data-invalid]': 'invalid() || null'
    }
})
export class CheckboxDirective {
    readonly size = input<CheckboxSize>('l');

    readonly invalid = input(false);
}
