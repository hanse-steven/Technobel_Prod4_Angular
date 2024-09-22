import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnDestroy{
    idInterval: any

    constructor(
        private readonly _toast: ToastService,
        private readonly _cdr: ChangeDetectorRef
    ) {
        this.idInterval = setInterval(() => this._cdr.markForCheck(), 1000)
    }

    get toastsService() {
        return this._toast
    }

    ngOnDestroy(): void {
        this.idInterval && clearInterval(this.idInterval)
    }
}
