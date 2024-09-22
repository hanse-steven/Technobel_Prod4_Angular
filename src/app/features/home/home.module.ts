import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    IndexComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FaIconComponent
    ]
})
export class HomeModule { }
