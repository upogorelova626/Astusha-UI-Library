import {Component, input} from '@angular/core';

@Component({
    selector: 'ast-badge-notification',
    imports: [],
    template: '<ng-content />',
    styleUrl: './badge-notification.component.less',
    host: {'[attr.data-size]': 'size()'}
})
export class BadgeNotificationComponent {
    readonly size = input<'xs' | 's' | 'm' | 'l'>('l');
}
