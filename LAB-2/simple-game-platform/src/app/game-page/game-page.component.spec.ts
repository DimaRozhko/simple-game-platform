import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { expect, jest, test } from '@jest/globals'
import { By } from "@angular/platform-browser";

import { GamePageComponent } from './game-page.component';
import { EventEmitter } from '@angular/core';

describe('GamePageComponent', () => {
  let component: GamePageComponent;
  let fixture: ComponentFixture<GamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('TEST GamePageComponent.onMouseOverItem()', () => {
    expect(component).toBeTruthy();
    
    let spyEvent = jest.spyOn(component, 'onMouseOverItem');
    let button = fixture.debugElement.query(By.css('#game-button')).nativeElement;
    button.dispatchEvent(new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(1);
    expect(component.elementsToMove.length).toEqual(0);

    component.isClick = true;
    spyEvent = jest.spyOn(component, 'onMouseOverItem');
    button.dispatchEvent(new MouseEvent('mouseover', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(2);
    expect(component.elementsToMove.length).toEqual(1);

    button.dispatchEvent(new MouseEvent('mouseover', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(3);
    expect(component.elementsToMove.length).toEqual(2);

    component.isClick = false;
    spyEvent = jest.spyOn(component, 'onMouseOverItem');
    button.dispatchEvent(new MouseEvent('mouseover', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(4);
    expect(component.elementsToMove.length).toEqual(2);
  });

  test('TEST GamePageComponent.onMouseOutItem()', () => {
    expect(component).toBeTruthy();
    
    let spyEvent = jest.spyOn(component, 'onMouseOutItem');
    let button = fixture.debugElement.query(By.css('#game-button')).nativeElement;
    button.dispatchEvent(new MouseEvent('mouseout', {
        view: window,
        bubbles: true,
        cancelable: true,
    }));
    expect(spyEvent).toHaveBeenCalled();
  })

  test('TEST GamePageComponent.onMouseDown()', () => {
    expect(component).toBeTruthy();

    let spyEvent = jest.spyOn(component, 'onMouseDown');
    let button = fixture.debugElement.query(By.css('#game-button')).nativeElement;
    button.dispatchEvent(new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
        cancelable: true,
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(1);
    expect(component.elementsToMove.length).toEqual(1);

    button.value = 'START GAME';
    button.dispatchEvent(new MouseEvent('mousedown', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    let invisableItem = component.gameField[3][3];
    expect(invisableItem.value).toEqual(' ');
    expect(invisableItem.class).toEqual('sgp-invisable-button');
  })

  test('TEST GamePageComponent.onMouseUp()', () => {
    expect(component).toBeTruthy();


    let spyEvent = jest.spyOn(component, 'onMouseUp');
    let button = fixture.debugElement.query(By.css('#game-button')).nativeElement;
    button.dispatchEvent(new MouseEvent('mouseup', {
        view: window,
        bubbles: true,
        cancelable: true,
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(0);
    expect(component.elementsToMove.length).toEqual(0);
    expect(component.isStartGame).toEqual(false);
    expect(component.isWin).toEqual(false);


    component.isStartGame = true;
    spyEvent = jest.spyOn(component, 'onMouseUp');
    button.dispatchEvent(new MouseEvent('mouseup', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(0);
    expect(component.elementsToMove.length).toEqual(0);
    expect(component.isStartGame).toEqual(true);
    expect(component.isWin).toEqual(false);


    component.elementsToMove = [{ target: { value: '1' }}, { target: { value: '2' }}]
    spyEvent = jest.spyOn(component, 'onMouseUp');
    button.dispatchEvent(new MouseEvent('mouseup', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(0);
    expect(component.elementsToMove.length).toEqual(0);
    expect(component.isStartGame).toEqual(true);
    expect(component.isWin).toEqual(false);

    component.gameField = [
      [{value: '2'} , {value: '1'}, {value: '3'}, {value: '4'} ],
      [{value: '5'} , {value: '6'}, {value: '7'}, {value: '8'} ],
      [{value: '9'} , {value: '10'}, {value: '11'}, {value: '12'} ],
      [{value: '13'} , {value: '14'}, {value: '15'}, {value: ' ', class: 'sgp-invisable-button'} ],
    ];
    
    component.elementsToMove = [{ target: { value: '12' }}, { target: { value: ' ' }}]
    spyEvent = jest.spyOn(component, 'onMouseUp');
    button.dispatchEvent(new MouseEvent('mouseup', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(0);
    expect(component.elementsToMove.length).toEqual(0);
    expect(component.gameField[2][3].value).toEqual(' ');
    expect(component.gameField[3][3].value).toEqual('12');
    expect(component.isStartGame).toEqual(true);
    expect(component.isWin).toEqual(false);

    component.gameField = [
      [{value: '2'} , {value: '1'}, {value: '3'}, {value: '4'} ],
      [{value: '5'} , {value: '6'}, {value: '7'}, {value: '8'} ],
      [{value: '9'} , {value: '10'}, {value: '11'}, {value: '12'} ],
      [{value: '13'} , {value: '14'}, {value: '15'}, {value: ' ', class: 'sgp-invisable-button'} ],
    ];
    
    component.elementsToMove = [{ target: { value: ' ' }}, { target: { value: '15' }}]
    spyEvent = jest.spyOn(component, 'onMouseUp');
    button.dispatchEvent(new MouseEvent('mouseup', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(0);
    expect(component.elementsToMove.length).toEqual(0);
    expect(component.gameField[3][2].value).toEqual(' ');
    expect(component.gameField[3][3].value).toEqual('15');
    expect(component.isStartGame).toEqual(true);
    expect(component.isWin).toEqual(false);

    component.gameField = [
      [{value: '1'} , {value: '2'}, {value: '3'}, {value: '4'} ],
      [{value: '5'} , {value: '6'}, {value: '7'}, {value: '8'} ],
      [{value: '9'} , {value: '10'}, {value: '11'}, {value: '12'} ],
      [{value: '13'} , {value: '14'}, {value: '15'}, {value: ' ', class: 'sgp-invisable-button'} ],
    ];
    
    component.elementsToMove = [{ target: { value: ' ' }}, { target: { value: '15' }}]
    spyEvent = jest.spyOn(component, 'onMouseUp');
    button.dispatchEvent(new MouseEvent('mouseup', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    expect(spyEvent).toHaveBeenCalled();
    expect(component.savedEventList.length).toEqual(0);
    expect(component.elementsToMove.length).toEqual(0);
    expect(component.gameField[3][3].value).toEqual('START GAME');
    expect(component.isStartGame).toEqual(false);
    expect(component.isWin).toEqual(true);
  })

  test('TEST GamePageComponent.onCongratulation()', () => {
    expect(component).toBeTruthy();
    component.isWin = true;
    let spyEvent = jest.spyOn(component, 'onCongratulation');
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('#continue-button')).nativeElement;
    button.click();
    expect(spyEvent).toHaveBeenCalled();
    expect(component.isWin).toEqual(false);
    expect(component.opacityClass).toEqual('');
  })
});
