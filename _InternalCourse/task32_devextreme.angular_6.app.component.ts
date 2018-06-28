import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent implements OnInit {
  name: string = 'task32 - Display dxTextBox value';
  description: string =
`Create the dxButton and dxTextBox widgets.
When the button is clicked display the dxTextBox text in the alert window.`;
  otherImplementationUrl: string = 'https://github.com/IgnatovDan/LearnDevExtreme/blob/master/_InternalCourse/task32_devextreme.html';
  otherImplementationUrl2: string = 'https://github.com/IgnatovDan/LearnDevExtreme/blob/master/_InternalCourse/task33_devextreme.html';
  _message: string;
  clickMeButtonOptions;

  get message() {
    return this._message;
  }
  set message(val) {
    debugger;
    this._message = val;
  }
  ngOnInit() {
    this._message = 'Hello!';
    this.clickMeButtonOptions = {
        text: 'Click me',
        onClick: () => this.processMessage()
    }
  }
  processMessage() {
    alert(this.message);
  }

}
