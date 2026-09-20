import {Component} from '@angular/core';
import {CheckboxDirective} from 'astusha-ui';
import {IconComponent} from '../../../../../../astusha-ui/src/lib/icons/icon.component';

@Component({
    selector: 'app-checkbox',
    imports: [CheckboxDirective, IconComponent],
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.less'
})
export class CheckboxComponent {}
