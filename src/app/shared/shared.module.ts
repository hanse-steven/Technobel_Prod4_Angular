import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormErrorComponent } from './components/form-error/form-error.component';
import { ToastGlobalComponent } from './components/toast-global/toast-global.component';
import {NgbToast, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { ToastContainerComponent } from './components/toast-container/toast-container.component'


@NgModule({
    declarations: [
    FormErrorComponent,
    ToastGlobalComponent,
    ToastContainerComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbTooltipModule,
        NgbToast,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FormErrorComponent,
    ]
})
export class SharedModule {
}
