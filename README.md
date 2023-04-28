# **SimpleGamePlatform**

## **Developer information**
>#### _Student name:_ Dmytro Rozhko
>#### _Group:_        KV-21mn

## **Lab information**
>### _**Lab number: 1**_
>>#### _The purpose of the work:_ learn how to use the Javascript framework, the NodeJS framework, and the Twitter Bootstrap (or Material UI) library to build a web user interface.
>>#### _General task:_ develop the client part of the Web application.
>>#### _Development tools:_ VS Code, Javascript, Twitter Bootstrap, Material UI, NodeJS, diagram.net.
>### Documentation
>>#### Description mockup of pages was developed by diagram.net ([link](https://app.diagrams.net/?mode=google&gfw=1#G15_n9h3q4Xvk0IAebAW-Hz3br2k6fS2Fr)) and figma ([link](https://www.figma.com/file/1onoj0JQquYlLwjXThJVEW/simple-game-platform?node-id=14%3A186&t=F6MEZLaoAXDD8Bwu-0))
>>#### Description of lab was developed by google docs ([link](https://docs.google.com/document/d/1NgWbUEYJ2b5xpamVhvCZi6JI5QM_ohS76W5MUpyRwvw/))

>### _**Lab number: 2**_
>>#### _The purpose of the work:_ learn how to use web user interface testing using the Javascript/Jest/Vue-Test-Utils unit testing framework, as well as end-to-end (system) testing using the cypress framework.
>>#### _General task:_ develop script tools (code) for testing the client part (user interface) of the Web application.
>>#### _Development tools:_ VS Code, Javascript/VueJS/Jest, cypress.io.
>### _**Documentation**_
>>#### Description of lab was developed by google docs ([link](https://docs.google.com/document/d/1QkPLHeJKHJQU2Rol6c9FCX3XPg5tQqYAoNm1MqSgsqA/))


## **Additional information**
>#### There is a piece of code to test victory in 3 steps. You must uncomment code below from `simple-game-platform/src/app/game-page/game-page.component.ts` for it.
```ts
        //////////TEST WIN///////////////
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
        //////////TEST WIN///////////////
```


>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

### **Development server**
>Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### **Test**
>Run `npm run test` for _jest test_.
>Run `npm run ng e2e` for run E2E cypress test. If you want to get a report such as a video or screenshot, you must run `ng serve` and than in parallel console `npm run cypress run`.
