import {InjectionToken} from '@angular/core';

export const AST_ICONS_PATH = new InjectionToken<string>('AST_ICONS_PATH', {
    factory: () => 'assets/astusha-ui/icons'
});
