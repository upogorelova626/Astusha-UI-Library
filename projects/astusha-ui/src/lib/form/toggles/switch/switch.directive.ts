import {Directive, inject, input} from '@angular/core';

import {AST_ICON_RESOLVER} from '../../../icons/icon-resolver';
import {ControlStateDirective} from '../../../directives/control-state.directive';

type SwitchSize = 's' | 'm';

@Directive({
    selector: 'input[type=checkbox][astSwitch]',
    hostDirectives: [{directive: ControlStateDirective, inputs: ['invalid']}],

    host: {
        class: 'ast-switch',

        '[attr.data-size]': 'size()',
        '[attr.data-show-icons]': 'showIcons() || null',

        '[style.--ast-check-icon]': 'checkIcon'
    }
})
export class SwitchDirective {
    private readonly iconResolver = inject(AST_ICON_RESOLVER);

    protected readonly checkIcon = `url("${this.iconResolver('@ast.check')}")`;

    readonly size = input<SwitchSize>('m');
    readonly showIcons = input(true);
}
