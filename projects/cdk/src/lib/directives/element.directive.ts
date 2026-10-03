import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
    selector: '[astElement]',
    exportAs: 'astElement'
})
export class ElementDirective {
    readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
}
