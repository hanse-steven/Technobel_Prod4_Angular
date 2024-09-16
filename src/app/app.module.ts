import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { HeaderComponent } from './layout/header/header.component';
import {jwtInterceptor} from "./core/interceptor/jwt.interceptor";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FontAwesomeModule
    ],
    providers: [
        provideHttpClient(
            withInterceptors([jwtInterceptor])
        )
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
