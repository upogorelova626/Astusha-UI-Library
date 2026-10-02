import {Directive, inject, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[astVCR]'
})
export class VCRDirective {
    public readonly vcr = inject(ViewContainerRef);
}
