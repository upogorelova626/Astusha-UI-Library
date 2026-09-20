import {Component} from '@angular/core';
import {CheckboxDirective} from 'astusha-ui';

@Component({
    selector: 'app-checkbox',
    imports: [CheckboxDirective],
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.less'
})
export class CheckboxComponent {}
