import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LogoAuthComponent } from './logo-auth/logo-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AuthorizationComponent,
    LogoAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
