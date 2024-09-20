import {Component, OnDestroy, TemplateRef} from '@angular/core';
import {ToastService} from "../../services/toast.service"

@Component({
  selector: 'app-toast-global',
  templateUrl: './toast-global.component.html',
  styleUrl: './toast-global.component.scss'
})
export class ToastGlobalComponent implements OnDestroy {
    constructor(
        private readonly toastService: ToastService
    ) {}

    showStandard(template: TemplateRef<any>) {
        this.toastService.show({template})
    }

    showSuccess(template: TemplateRef<any>) {
        this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
    }

    showDanger(template: TemplateRef<any>) {
        this.toastService.show({ template, classname: 'bg-danger text-light', delay: 15000 });
    }

    ngOnDestroy(): void {
        this.toastService.clear();
    }
}
