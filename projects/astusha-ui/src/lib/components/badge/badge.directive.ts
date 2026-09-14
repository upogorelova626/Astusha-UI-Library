import {Directive, input} from '@angular/core';

type BadgeSize = 's' | 'm' | 'l' | 'xl';

type Appearance =
    | 'default'
    | 'primary'
    | 'accent'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';

@Directive({
    selector: '[astBadge]',
    host: {
        class: 'ast-badge',

        '[attr.data-size]': 'size()',
        '[attr.data-appearance]': 'appearance()'
    }
})
export class BadgeDirective {
    readonly appearance = input<Appearance>('default');

    readonly size = input<BadgeSize>('xl');
}
