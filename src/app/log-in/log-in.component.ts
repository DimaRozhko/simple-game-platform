import { Component, OnInit } from '@angular/core';
import { ButtonHandle } from '../model/button-handle';
import { InputField } from '../model/input-field';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  inputField!: InputField[];
  mainButton!: ButtonHandle;
  buttons!: ButtonHandle[];

  ngOnInit(): void {
    this.inputField = [
      { typeInputField: "text", placeholderInputField: "email"},
      { typeInputField: "password", placeholderInputField: "password"}
    ];
    this.mainButton = { value: "Log in", style: ""};
    this.buttons = [
      { value: "Forgot\npassword", 
        style: "border-color: transparent; text-decoration: underline; font-size: 3vh; font-weight: normal; background: transparent;"},
      { value: "Sign up", style: ""}
    ];
  }
}
