import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormErrorComponent} from './components/form-error/form-error.component';
import {ToastComponent} from './components/toast/toast.component';
import {NgbToast, NgbToastHeader} from "@ng-bootstrap/ng-bootstrap";
import { TimeAgoPipe } from './pipes/timeago.pipe';

@NgModule({
    declarations: [
        FormErrorComponent,
        ToastComponent,
        TimeAgoPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbToast,
        NgbToastHeader
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
