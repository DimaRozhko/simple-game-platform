import { Component } from '@angular/core';
import { GameItem } from '../model/game-item';

const FIELD_LENTH = 4;
const START_GAME_BUTTON = 'START GAME'
const EMPTY_BUTTON = ' ';
const INVISABLE_BUTTON_CLASS = 'sgp-invisable-button'
const GAME_ITEM_LIST = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
const FONT_START_GAME_CLASS = 'sgp-font-size-start-game';
const OPACITY_CLASS = 'sgp-field-opacity'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {

  gameField: GameItem[][];
  isClick: boolean;
  savedEventList: any[];
  elementsToMove: any[];
  isStartGame: boolean;
  isWin: boolean;
  opacityClass: string;

  //////////TEST WIN///////////////
  finishStep: number;
  //////////TEST WIN///////////////

  constructor() {
    this.gameField = [
      [{value: '1'} , {value: '2'}, {value: '3'}, {value: '4'} ],
      [{value: '5'} , {value: '6'}, {value: '7'}, {value: '8'} ],
      [{value: '9'} , {value: '10'}, {value: '11'}, {value: '12'} ],
      [{value: '13'} , {value: '14'}, {value: '15'}, {value: START_GAME_BUTTON, class: FONT_START_GAME_CLASS} ],
    ];
    this.isClick = false;
    this.savedEventList = [];
    this.elementsToMove = [];
    this.isStartGame = false;
    this.isWin = false;
    this.opacityClass = '';

    this.finishStep = 0;
  }

  onMouseOverItem(event: any) : void {
    event.srcElement.classList.add('sgp-bth-background-press');
    this.savedEventList.push(event);
    if (this.isClick == true) {
      this.elementsToMove.push(event);
    }
  }

  onMouseOutItem(event: any): void {
    if (this.isClick === false) {
      event.srcElement.classList.remove('sgp-bth-background-press');
    }
  }

  onMouseDown(event: any): void {
    this.isClick = true;
    event.srcElement.classList.add('sgp-bth-background-press');
    if (event.target.value == START_GAME_BUTTON) {
      let itmeList = GAME_ITEM_LIST;
      for (let i = 0; i < FIELD_LENTH; i++) {
        for (let j = 0; j < FIELD_LENTH; j++) {
          if (this.gameField[i][j].value == START_GAME_BUTTON) {
            this.gameField[i][j].value = EMPTY_BUTTON;
            this.gameField[i][j].class = INVISABLE_BUTTON_CLASS;
            this.isStartGame = true;
          }
          else {
            let itemListLenth = itmeList.length;
            let itemId = this.getRandomInt(itemListLenth);
            this.gameField[i][j].value = itmeList[itemId];
            itmeList = itmeList.slice(0, itemId).concat(itmeList.slice(itemId + 1, itemListLenth));
          }
        }
      }
    }
    else {
      this.savedEventList.push(event);
      this.elementsToMove.push(event);
    }
  }

  onMouseUp(event: any): void {
    this.isClick = false;
    this.savedEventList.forEach(savedEvent => this.onMouseOutItem(savedEvent));
    if (this.isStartGame === true && this.elementsToMove.length === 2
      && (this.elementsToMove[0].target.value === EMPTY_BUTTON || this.elementsToMove[1].target.value === EMPTY_BUTTON)) {
      for (let i = 0; i < FIELD_LENTH; i++) {
        for (let j = 0; j < FIELD_LENTH; j++) {
          if (this.gameField[i][j].value == this.elementsToMove[0].target.value) {
            this.gameField[i][j].value = this.elementsToMove[1].target.value;
          }
          else if (this.gameField[i][j].value == this.elementsToMove[1].target.value) {
            this.gameField[i][j].value = this.elementsToMove[0].target.value;
          }
        }
      }
      let gameItemListIndex = 0;
      for (let i = 0; i < FIELD_LENTH; i++) {
        for (let j = 0; j < FIELD_LENTH; j++) {
          if (this.gameField[i][j].value == GAME_ITEM_LIST[gameItemListIndex]) {
            gameItemListIndex++;
          }
          if (this.gameField[i][j].value === EMPTY_BUTTON) {
            this.gameField[i][j].class = INVISABLE_BUTTON_CLASS;
          }
          else {
            this.gameField[i][j].class = '';
          }
        }
      }
      if (gameItemListIndex == 15) {
        this.gameField[3][3].value = START_GAME_BUTTON;
        this.gameField[3][3].class = FONT_START_GAME_CLASS;
        this.isStartGame = false;
        this.isWin = true;
        this.opacityClass = OPACITY_CLASS;
      }
      //////////TEST WIN///////////////
      /*
      if (this.finishStep >= 3) {
        this.finishStep = 0;
        this.gameField = [
          [{value: '1'} , {value: '2'}, {value: '3'}, {value: '4'} ],
          [{value: '5'} , {value: '6'}, {value: '7'}, {value: '8'} ],
          [{value: '9'} , {value: '10'}, {value: '11'}, {value: '12'} ],
          [{value: '13'} , {value: '14'}, {value: '15'}, {value: START_GAME_BUTTON, class: FONT_START_GAME_CLASS} ],
        ];
        this.isStartGame = false;
        this.isWin = true;
        this.opacityClass = OPACITY_CLASS;
      }
      else {
        this.finishStep++;
      }
      */
      //////////TEST WIN///////////////
    }
    this.savedEventList = [];
    this.elementsToMove = [];
  }

  onCongratulation(): void {
    this.isWin = false;
    this.opacityClass = '';
  }

  private getRandomInt(max: number) : number {
    return Math.floor(Math.random() * max);
  }
}
