import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'simple-game-platform';
  router: Router;
  logUrl = '../../image/sgp-logo.png'

  constructor(router: Router ) {
    this.router = router;
  }
}
