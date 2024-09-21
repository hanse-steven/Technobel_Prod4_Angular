import { Component } from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
    constructor(private readonly _toast: ToastService) {}

    get toastsService() {
        return this._toast
    }
}
