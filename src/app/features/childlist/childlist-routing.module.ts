import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {childlistResolver} from "./resolvers/childlist.resolver";

const routes: Routes = [
    {path: '', component: IndexComponent, resolve: {childlists: childlistResolver}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChildlistRoutingModule { }
