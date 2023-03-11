import { Component } from '@angular/core';
import { InfoGame } from '../model/info-game';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent {
  infoGames: InfoGame[];

  constructor() {
    this.infoGames = [
      {
        name: '15',
        rule: 'do something do something do something do something do something do something do something do something',
        history: 'interesting story interesting story interesting story interesting story interesting story interesting story'
      }
    ]
  }
}
