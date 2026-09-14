import {Directive, input} from '@angular/core';

@Directive({
    selector: '[astAppearanceFocus]',

    host: {
        class: 'ast-button',
        '[attr.data-focus]': 'astAppearanceFocus()'
    }
})
export class AppearanceFocusDirective {
    readonly astAppearanceFocus = input<boolean>(false);
}
