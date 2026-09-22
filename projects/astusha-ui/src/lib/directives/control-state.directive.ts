import {Directive, inject, input} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[astControlState]',
    host: {
        '[attr.data-invalid]': 'isInvalid() || null',
        '[attr.aria-invalid]': 'isInvalid() || null'
    }
})
export class ControlStateDirective {
    private readonly ngControl = inject(NgControl, {
        self: true,
        optional: true
    });

    readonly invalid = input(false);

    protected isInvalid(): boolean {
        const control = this.ngControl?.control;

        return (
            this.invalid() ||
            !!(control?.invalid && (control.touched || control.dirty))
        );
    }
}
