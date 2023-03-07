import { Component } from '@angular/core';
import { ButtonHandle } from '../model/button-handle';
import { InputField } from '../model/input-field';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  inputField!: InputField[];
  mainButton!: ButtonHandle;
  buttons!: ButtonHandle[];

  ngOnInit(): void {
    this.inputField = [
      { typeInputField: "text", placeholderInputField: "username"},
      { typeInputField: "text", placeholderInputField: "email"},
      { typeInputField: "password", placeholderInputField: "password"}
    ];
    this.mainButton = { value: "Sign up", style: ""};
    this.buttons = [
      { value: "Log in",
        style: "border-color: transparent; text-decoration: underline; font-size: 3vh; font-weight: normal; background: transparent;"}
    ];
  }
}
