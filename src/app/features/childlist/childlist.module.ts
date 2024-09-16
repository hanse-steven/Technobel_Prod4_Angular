import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChildlistRoutingModule} from './childlist-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {IndexComponent} from './pages/index/index.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        ChildlistRoutingModule,
        SharedModule,
    ]
})
export class ChildlistModule {
}
