import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormErrorComponent} from './components/form-error/form-error.component';
import {ToastComponent} from './components/toast/toast.component';
import {NgbToast} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        FormErrorComponent,
        ToastComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbToast
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FormErrorComponent,
        ToastComponent,
    ]
})
export class SharedModule {
}
