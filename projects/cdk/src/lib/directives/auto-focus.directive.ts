import {
    AfterViewInit,
    booleanAttribute,
    Directive,
    inject,
    input
} from '@angular/core';
import {ElementDirective} from './element.directive';

@Directive({
    selector: '[astAutoFocus]',
    hostDirectives: [ElementDirective]
})
export class AutoFocusDirective implements AfterViewInit {
    private readonly element = inject(ElementDirective);
    readonly astAutoFocus = input(true, {
        transform: booleanAttribute
    });

    ngAfterViewInit(): void {
        if (this.astAutoFocus()) {
            this.element.elementRef.nativeElement.focus();
        }
    }
}
