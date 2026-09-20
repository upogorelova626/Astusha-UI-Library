import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-switch',
    imports: [ReactiveFormsModule],
    templateUrl: './switch.component.html',
    styleUrl: './switch.component.less'
})
export class SwitchComponent {
    protected readonly control = new FormControl<number | string | null>(123, {
        nonNullable: true,
        validators: Validators.required
    });
}
