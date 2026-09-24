import {Directive, inject, input} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[astControlState]'
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
