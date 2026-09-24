import {computed, Directive, inject, input} from '@angular/core';

import {AST_ICON_RESOLVER} from '../../tokens/icon-resolver';

@Directive({
    selector: '[astIconStart], [astIconEnd]',
    host: {
        class: 'ast-icons',

        '[attr.data-icon-start]': 'iconStart() ? "" : null',
        '[attr.data-icon-end]': 'iconEnd() ? "" : null',

        '[style.--ast-icon-start]': 'startIcon()',
        '[style.--ast-icon-end]': 'endIcon()'
    }
})
export class IconsDirective {
    private readonly iconResolver = inject(AST_ICON_RESOLVER);

    readonly iconStart = input<string | null>(null, {
        alias: 'astIconStart'
    });

    readonly iconEnd = input<string | null>(null, {
        alias: 'astIconEnd'
    });

    protected readonly startIcon = computed(() => {
        const icon = this.iconStart();

        return icon ? `url("${this.iconResolver(icon)}")` : 'none';
    });

    protected readonly endIcon = computed(() => {
        const icon = this.iconEnd();

        return icon ? `url("${this.iconResolver(icon)}")` : 'none';
    });
}
