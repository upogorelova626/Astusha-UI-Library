import {Directive, inject, input} from '@angular/core';

import {AST_ICON_RESOLVER} from '../../../../tokens/icon-resolver';
import {ControlStateDirective} from 'cdk';

type CheckboxSize = 's' | 'm' | 'l';

@Directive({
    selector: 'input[type=checkbox][astCheckbox]',
    hostDirectives: [{directive: ControlStateDirective, inputs: ['invalid']}],
    host: {
        class: 'ast-checkbox',

        '[attr.data-size]': 'size()',

        '[style.--ast-check-icon]': 'checkIcon',
        '[style.--ast-minus-icon]': 'minusIcon'
    }
})
export class CheckboxDirective {
    private readonly iconResolver = inject(AST_ICON_RESOLVER);

    protected readonly checkIcon = `url("${this.iconResolver('@ast.check')}")`;

    protected readonly minusIcon = `url("${this.iconResolver('@ast.minus')}")`;

    readonly size = input<CheckboxSize>('l');
}
