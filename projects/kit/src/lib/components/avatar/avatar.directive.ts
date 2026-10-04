import {Directive, input} from '@angular/core';
import {AppearanceDirective, IconsDirective} from 'core';

export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

@Directive({
    selector: '[astAvatar]',
    hostDirectives: [
        {
            directive: AppearanceDirective,
            inputs: ['appearance']
        },
        {
            directive: IconsDirective
        }
    ],
    host: {
        class: 'ast-avatar',
        '[attr.data-size]': 'size()',
        '[attr.data-shape]': 'round() ? "round" : "square"'
    }
})
export class AvatarDirective {
    readonly round = input(true);

    readonly size = input<AvatarSize>('l');

    readonly astAvatar = input('@ast.user', {
        transform: (value: string) => value || '@ast.user'
    });

    readonly badge = input<string>();
}
