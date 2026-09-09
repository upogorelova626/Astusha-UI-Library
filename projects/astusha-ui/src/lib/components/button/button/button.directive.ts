import {Directive, input} from '@angular/core';

type ButtonSize = 'xs' | 's' | 'm' | 'l';

type Appearance =
    | 'primary'
    | 'secondary'
    | 'flat'
    | 'accent'
    | 'soft'
    | 'tinted'
    | 'danger';

@Directive({
    selector: 'button[astButton], a[astButton]',
    host: {
        class: 'ast-button',

        '[attr.data-size]': 'size()',
        '[attr.data-appearance]': 'appearance()'
    }
})
export class ButtonDirective {
    readonly appearance = input<Appearance>('primary');

    readonly size = input<ButtonSize>('m');
}
