import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  userName: string;
  email: string;
  favouriteGames: string[];
  bestResults: string[];

  constructor() {
    this.userName = 'SuperPlayer';
    this.email = 'super.player@game.com';
    this.favouriteGames = ['15'];
    this.bestResults = ['00:01:55', '00:01:58'];
  }
}
