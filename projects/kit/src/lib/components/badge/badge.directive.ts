import {Directive, input} from '@angular/core';
import {IconsDirective} from 'core';

export type BadgeSize = 's' | 'm' | 'l' | 'xl';

export type BadgeAppearance =
    | 'default'
    | 'accent'
    | 'primary'
    | 'custom'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'info'
    | 'neutral';

@Directive({
    selector: '[astBadge]',
    hostDirectives: [
        {directive: IconsDirective, inputs: ['iconStart', 'iconEnd']}
    ],

    host: {
        class: 'ast-badge',
        '[attr.data-size]': 'size()',
        '[attr.data-appearance]': 'appearance()'
    }
})
export class BadgeDirective {
    readonly size = input<BadgeSize>('m');
    readonly appearance = input<BadgeAppearance>('default');
}
