import {Component} from '@angular/core';
import {ButtonsComponent} from './components/buttons/buttons.component';
import {BagesComponent} from './components/bages/bages.component';
import {StatusComponent} from './components/status/status.component';
import {RadioComponent} from './form/radio/radio/radio.component';
import {SwitchComponent} from './form/switch/switch/switch.component';
import {CheckboxComponent} from './form/checkbox/checkbox/checkbox.component';
import {InputComponent} from './form/inputs/input/input/input.component';

@Component({
    selector: 'app-root',
    imports: [
        ButtonsComponent,
        BagesComponent,
        StatusComponent,
        RadioComponent,
        SwitchComponent,
        CheckboxComponent,
        InputComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
    title = 'demo';
}
