import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LogoAuthComponent } from './logo-auth/logo-auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserPageComponent } from './user-page/user-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { GamePageComponent } from './game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AuthorizationComponent,
    LogoAuthComponent,
    SignUpComponent,
    UserPageComponent,
    InfoPageComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
