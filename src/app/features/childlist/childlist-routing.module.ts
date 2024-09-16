import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {childlistResolver} from "./resolvers/childlist.resolver";
import {ItemComponent} from "./pages/item/item.component";
import {childlistitemResolver} from "./resolvers/childlistitem.resolver";
import {AccountComponent} from "./pages/account/account.component";
import {OwnchildlistComponent} from "./pages/ownchildlist/ownchildlist.component";

const routes: Routes = [
    {path: '', component: IndexComponent, resolve: {childlists: childlistResolver}},
    {path: 'item/:id', component: ItemComponent, resolve: {childlists: childlistitemResolver}},
    {path: 'account', component: AccountComponent},
    {path: 'ownchildlist', component: OwnchildlistComponent, resolve: {childlists: childlistResolver}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChildlistRoutingModule { }
