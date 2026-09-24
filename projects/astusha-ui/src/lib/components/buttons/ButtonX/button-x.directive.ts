import {Directive, inject, input} from '@angular/core';
import {AppearanceDirective} from '../../../directives/appearance.directive';
import {AST_ICON_RESOLVER} from '../../../icons/icon-resolver';

export type ButtonXSize = 'xs' | 's';

@Directive({
    selector: '[astButtonX]',

    hostDirectives: [{directive: AppearanceDirective, inputs: ['appearance']}],
    host: {
        class: 'ast-buttonX'
    }
})
export class ButtonXDirective {
    private readonly iconResolver = inject(AST_ICON_RESOLVER);

    readonly size = input<ButtonXSize>('s');

    protected readonly icon = `url("${this.iconResolver('@ast.x')}")`;
}
