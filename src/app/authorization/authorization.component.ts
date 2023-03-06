import { Component, Input } from '@angular/core';
import { ButtonHandle } from '../model/button-handle';
import { InputField } from '../model/input-field'

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  @Input() inputFieldAuth!: InputField[];
  @Input() mainButtonAuth!: ButtonHandle;
  @Input() otherButtonAuth!: ButtonHandle[];
}
