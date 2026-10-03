import {Directive} from '@angular/core';
import {AppearanceDirective} from '../../directives/appearance/appearance.directive';
import {IconsDirective} from '../../directives/icons/icons.directive';

@Directive({
    selector: 'a[astLink], button[astLink]',
    hostDirectives: [
        {directive: AppearanceDirective, inputs: ['appearance']},
        {directive: IconsDirective, inputs: ['astIconStart', 'astIconEnd']}
    ],

    host: {class: 'ast-link'}
})
export class LinkDirective {}
