import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChildlistRoutingModule} from './childlist-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {IndexComponent} from './pages/index/index.component';
import {FaIconComponent, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ItemComponent } from './pages/item/item.component';
import { AccountComponent } from './pages/account/account.component';
import { OwnchildlistComponent } from './pages/ownchildlist/ownchildlist.component';
import { OwnchildlistshowComponent } from './pages/ownchildlistshow/ownchildlistshow.component';


@NgModule({
    declarations: [
        IndexComponent,
        ItemComponent,
        AccountComponent,
        OwnchildlistComponent,
        OwnchildlistshowComponent
    ],
    imports: [
        CommonModule,
        ChildlistRoutingModule,
        SharedModule,
        FontAwesomeModule,
    ]
})
export class ChildlistModule {
}
