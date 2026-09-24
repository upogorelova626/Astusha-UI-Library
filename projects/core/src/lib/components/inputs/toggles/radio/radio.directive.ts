import {Directive, input} from '@angular/core';
import {ControlStateDirective} from 'cdk';

type RadioSize = 's' | 'm' | 'l';

@Directive({
    selector: 'input[type=radio][astRadio]',
    hostDirectives: [{directive: ControlStateDirective, inputs: ['invalid']}],

    host: {
        class: 'ast-radio',

        '[attr.data-size]': 'size()'
    }
})
export class RadioDirective {
    readonly size = input<RadioSize>('m');
}
