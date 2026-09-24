import {Directive, input} from '@angular/core';
import {AstAppearance} from '../../types/appearance';

@Directive({
    selector: '[astAppearance]',
    host: {'[attr.data-appearance]': 'appearance()'}
})
export class AppearanceDirective {
    readonly appearance = input<AstAppearance>('primary');
}
