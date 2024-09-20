import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {listofchildlistResolver} from "./resolvers/listofchildlist.resolver";
import {ItemComponent} from "./pages/item/item.component";
import {childlistitemResolver} from "./resolvers/childlistitem.resolver";
import {AccountComponent} from "./pages/account/account.component";
import {OwnchildlistComponent} from "./pages/ownchildlist/ownchildlist.component";
import {OwnchildlistshowComponent} from "./pages/ownchildlistshow/ownchildlistshow.component";
import {childlistResolver} from "./resolvers/childlist.resolver";
import {NewchildlistComponent} from "./pages/newchildlist/newchildlist.component";
import {CartComponent} from "./pages/cart/cart.component";
import {cartResolver} from "./resolvers/cart.resolver"

const routes: Routes = [
    {path: '', component: IndexComponent, resolve: {childlists: listofchildlistResolver}},
    {path: 'item/:id', component: ItemComponent, resolve: {childlists: childlistitemResolver}},
    {path: 'account', component: AccountComponent},
    {path: 'ownchildlist', component: OwnchildlistComponent, resolve: {childlists: listofchildlistResolver}},
    {path: 'ownchildlist/new', component: NewchildlistComponent, resolve: {childlists: listofchildlistResolver}},
    {path: 'ownchildlist/:id', component: OwnchildlistshowComponent, resolve: {childlist: childlistResolver}},
    {path: 'cart', component: CartComponent, resolve: {cartItems: cartResolver}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChildlistRoutingModule { }
