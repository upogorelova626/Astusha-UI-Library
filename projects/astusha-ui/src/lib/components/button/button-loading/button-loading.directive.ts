import {Directive, input} from '@angular/core';

@Directive({
    selector: '[loading]',
    host: {
        class: 'ast-button',

        '[attr.data-loading]': 'loading()'
    }
})
export class ButtonLoadingDirective {
    readonly loading = input<boolean>(false);
}
