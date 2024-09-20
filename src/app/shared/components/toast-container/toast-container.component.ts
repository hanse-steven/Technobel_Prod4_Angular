import {Component} from '@angular/core';
import {ToastService} from "../../services/toast.service"

@Component({
    selector: 'app-toast-container',
    templateUrl: './toast-container.component.html',
    styleUrl: './toast-container.component.scss',
    host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastContainerComponent {
    constructor(
        protected readonly toastService: ToastService
    ) {
    }
}
