import {inject, InjectionToken} from '@angular/core';

import {AST_ICONS_PATH} from './icons-path';

export type AstIconResolver = (icon: string) => string;

export const AST_ICON_RESOLVER = new InjectionToken<AstIconResolver>(
    'AST_ICON_RESOLVER',
    {
        factory: () => {
            const path = inject(AST_ICONS_PATH);

            return (icon: string) => {
                const name = icon.replace('@ast.', '');

                return `${path}/${name}.svg`;
            };
        }
    }
);
