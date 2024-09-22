import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {anonymousGuard} from "./shared/guards/anonymous.guard";
import {authenticatedGuard} from "./shared/guards/authenticated.guard";

const routes: Routes = [
    { path: '', canActivate: [anonymousGuard],  loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
    { path: 'childlist', canActivate: [authenticatedGuard], loadChildren: () => import('./features/childlist/childlist.module').then(m => m.ChildlistModule)},
    { path: 'auth', canActivate: [anonymousGuard], loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
