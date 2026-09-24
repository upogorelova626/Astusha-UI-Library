import {Component} from '@angular/core';
import {ButtonDirective} from 'astusha-ui';
import {ButtonXDirective} from '../../../../../astusha-ui/src/public-api';

@Component({
    selector: 'app-buttons',
    imports: [ButtonDirective, ButtonXDirective],
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.less'
})
export class ButtonsComponent {}
