import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input
} from '@angular/core';

import {AST_ICON_RESOLVER} from './icon-resolver';

@Component({
    selector: 'ast-icon',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'ast-icon',
        '[style.--ast-icon]': 'iconUrl()'
    }
})
export class IconComponent {
    private readonly resolver = inject(AST_ICON_RESOLVER);

    readonly icon = input.required<string>();

    protected readonly iconUrl = computed(
        () => `url("${this.resolver(this.icon())}")`
    );
}
