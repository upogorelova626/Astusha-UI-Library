import {Component} from '@angular/core';
import {StatusDirective} from '../../../../../astusha-ui/src/public-api';

@Component({
    selector: 'app-status',
    imports: [StatusDirective],
    templateUrl: './status.component.html',
    styleUrl: './status.component.less'
})
export class StatusComponent {}
