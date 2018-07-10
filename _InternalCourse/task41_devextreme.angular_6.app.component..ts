import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name: string = 'task41 - DevExtreme - Validation';
  description: string =
`Put two dxTextBox widgets with dxCheckBox and dxButton.
When the button is clicked, the first textbox should be always validated.
The second textbox should be validated only when the checkbox is checked.
The task should be implemented using the following approaches:

a.Knockout approach
b.jQuery approach
c.Angular approach

TODO: not completed because of the lack of docs and samples
`;
  otherImplementationUrl: string = 'https://github.com/IgnatovDan/LearnDevExtreme/blob/master/_InternalCourse/task41_devextreme.html';

  data1__text: String = '11';

  data2__needValidation: Boolean = true;
  data2__text: String = '';

  data3__needValidation: Boolean = true;
  data3__text: String = '3333';

  valuesText: String = '';

  constructor() {
  }

  ngOnInit() {
  }

  updateValuesText() {
    this.valuesText = 
      'text1: "' + this.data1__text + '"\ntext2: "' + this.data2__text + '"\ntext3: "' + this.data3__text + '"';
  }

  data2__validator__onInitialized(e) { 
    //
    // TODO: this method is not called for the dxi/dxo nodes
    //
    //this.data2__validator = e.component;
    debugger;
    const bypass_base = e.component.option('adapter').bypass;
    e.component.option('adapter').bypass = function() {
      debugger;
      if(this.data2__needValidation) {
        return bypass_base.apply(this, arguments);
      }
      else {
        return true;
      }
    }
  }

  showSummary_onClick(e) {
    debugger;
    //
    // How to show validation summary on load ???
    //
    e.validationGroup.validate();
  };

}