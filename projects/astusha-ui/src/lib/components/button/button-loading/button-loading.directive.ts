import {Directive, input} from '@angular/core';

@Directive({
    selector: '[astButtonLoading]',
    host: {
        class: 'ast-button',

        '[attr.data-loading]': 'isLoading()'
    }
})
export class ButtonLoadingDirective {
    readonly isLoading = input<boolean>(false);
}
