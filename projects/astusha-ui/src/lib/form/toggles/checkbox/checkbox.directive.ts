import {Directive, inject, input} from '@angular/core';
import {NgControl} from '@angular/forms';

import {AST_ICON_RESOLVER} from '../../../icons/icon-resolver';

type CheckboxSize = 's' | 'm' | 'l';

@Directive({
    selector: 'input[type=checkbox][astCheckbox]',
    host: {
        class: 'ast-checkbox',

        '[attr.data-size]': 'size()',
        '[attr.data-invalid]': 'isInvalid() || null',

        '[style.--ast-check-icon]': 'checkIcon',
        '[style.--ast-minus-icon]': 'minusIcon'
    }
})
export class CheckboxDirective {
    private readonly iconResolver = inject(AST_ICON_RESOLVER);

    private readonly ngControl = inject(NgControl, {
        self: true,
        optional: true
    });

    protected readonly checkIcon = `url("${this.iconResolver('@ast.check')}")`;

    protected readonly minusIcon = `url("${this.iconResolver('@ast.minus')}")`;

    readonly size = input<CheckboxSize>('l');

    readonly invalid = input(false);

    protected isInvalid(): boolean {
        const control = this.ngControl?.control;

        return (
            this.invalid() ||
            !!(control?.invalid && (control.touched || control.dirty))
        );
    }
}
