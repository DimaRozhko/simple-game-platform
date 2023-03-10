import { Component } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {

  gameField: string[][];
  isClick: boolean;
  savedEventList: any[];

  constructor() {
    this.gameField = [
      ['1', '2', '3', '4'],
      ['5', '6', '7', '8'],
      ['9', '10', '11', '12'],
      ['13', '14', '15', '-']
    ];
    this.isClick = false;
    this.savedEventList = [];
  }

  onMouseOverItem(event: any) : void {
    event.srcElement.classList.add('sgp-bth-background-press');
    this.savedEventList.push(event);
  }

  onMouseOutItem(event: any): void {
    if (this.isClick === false) {
      event.srcElement.classList.remove('sgp-bth-background-press');
    }
  }

  onMouseDown(event: any): void {
    this.isClick = true;
    event.srcElement.classList.add('sgp-bth-background-press');
    this.savedEventList.push(event);
  }

  onMouseUp(event: any): void {
    this.isClick = false;
    this.savedEventList.forEach(savedEvent => this.onMouseOutItem(savedEvent));
    console.log(this.savedEventList);
    if (this.savedEventList.length === 2) {
      console.log("MOVE");
      // this.savedEventList.forEach(savedEvent => console.log(savedEvent));
    }
    this.savedEventList = [];
  }
}
