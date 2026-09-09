import {Directive, input} from '@angular/core';

@Directive({
    selector: '[astAppearanceFocus]',
    host: {
        '[attr.data-focus]': 'astAppearanceFocus()'
    }
})
export class AppearanceFocusDirective {
    readonly astAppearanceFocus = input<boolean>(false);
}
