import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamePageComponent } from './game-page/game-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-page', component: UserPageComponent },
  { path: 'info-page', component: InfoPageComponent },
  { path: 'game-page', component: GamePageComponent },
  { path: '',   redirectTo: '/log-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
