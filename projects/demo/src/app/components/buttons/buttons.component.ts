import {Component} from '@angular/core';
import {ButtonDirective} from 'astusha-ui';

@Component({
    selector: 'app-buttons',
    imports: [ButtonDirective],
    templateUrl: './buttons.component.html',
    styleUrl: './buttons.component.less'
})
export class ButtonsComponent {}
