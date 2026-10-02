import {Directive, inject, input} from '@angular/core';
import {AST_ICON_RESOLVER, AppearanceDirective} from 'core';

@Directive({
    selector: 'button[astButtonX]',
    hostDirectives: [{directive: AppearanceDirective, inputs: ['appearance']}],

    host: {
        class: 'ast-button-x ast-icons',
        'data-icon-start': '',
        '[attr.data-size]': 'size()',
        '[style.--ast-icon-start]': 'icon'
    }
})
export class ButtonXDirective {
    private readonly iconResolver = inject(AST_ICON_RESOLVER);
    protected readonly icon = `url("${this.iconResolver('@ast.x')}")`;

    readonly size = input<'xs' | 's'>('s');
}
