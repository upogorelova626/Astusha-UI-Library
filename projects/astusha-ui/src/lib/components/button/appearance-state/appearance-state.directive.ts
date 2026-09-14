import {Directive, input} from '@angular/core';

type AppearanceState = 'hover' | 'disabled' | 'active';

@Directive({
    selector: '[astAppearanceState]',
    host: {
        class: 'ast-button',

        '[attr.data-appearance-state]': 'astAppearanceState()'
    }
})
export class AppearanceStateDirective {
    readonly astAppearanceState = input<AppearanceState | null>(null);
}
