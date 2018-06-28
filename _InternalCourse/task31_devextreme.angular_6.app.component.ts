import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent implements OnInit {
  name: string = 'task31 - Display a message';
  description: string =
`Create the dxButton widget in a simple HTML page. Display the “Hello” message in the alert window when the button is clicked.`;
  otherImplementationUrl: string = 'https://github.com/IgnatovDan/LearnDevExtreme/blob/master/_InternalCourse/task31_devextreme.html';
  message: string;
  buttonCaption: string;
  buttonOptions;

  ngOnInit() {
    this.message = 'Привет!';
    this.buttonCaption = 'Click me';
    this.buttonOptions = {
      icon: 'https://image.flaticon.com/icons/svg/565/565412.svg',
      text: 'buttonCaption',
    };
  }
  buttonClickHandler() {
    alert(this.message);
  }
}