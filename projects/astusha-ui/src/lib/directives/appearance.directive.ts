import {Directive, input} from '@angular/core';

export type AstAppearance =
    | 'primary'
    | 'primary-destructive'
    | 'primary-grayscale'
    | 'secondary'
    | 'secondary-desctructive'
    | 'secondary-grayscale'
    | 'flat'
    | 'flat-desctructive'
    | 'flat-grayscale'
    | 'outline'
    | 'outline-destructive'
    | 'outline-grayscale'
    | 'action'
    | 'action-desctructive'
    | 'action-grayscale'
    | 'neutral'
    | 'negative'
    | 'positive'
    | 'warning'
    | 'info'
    | 'floating'
    | 'textfield'
    | 'accent';

@Directive({
    selector: '[astAppearace]',
    host: {'[attr.data-appearance]': 'appearance()'}
})
export class AppearanceDirective {
    readonly appearance = input<AstAppearance>('primary');
}
