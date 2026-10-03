import {Directive, input} from '@angular/core';
import {AppearanceDirective} from '../../../../public-api';
import {IconsDirective} from '../../../../public-api';

type ButtonSize = 'xs' | 's' | 'm' | 'l';

@Directive({
    selector: 'button[astButton], a[astButton]',
    hostDirectives: [
        {directive: AppearanceDirective, inputs: ['appearance']},
        {directive: IconsDirective, inputs: ['iconStart', 'iconEnd']}
    ],

    host: {
        class: 'ast-button',

        '[attr.data-size]': 'size()'
    }
})
export class ButtonDirective {
    readonly size = input<ButtonSize>('m');

    readonly invalid = input(false);
}
