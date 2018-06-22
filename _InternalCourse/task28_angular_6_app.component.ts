import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: `
    <p>{{name}}</p>
    <pre>{{description}}</pre>

    <p>Modify values:</p>

    <p><label>First:<input [(ngModel)]="first"/></label></p>
    <p><label>Last:<input [(ngModel)]="last"/></label></p>
    <p><button (click)="changeFirst()">Change first</button></p>
    
    <p>View values:</p>
    
    <p>double braces properties: {{first}} {{last}}</p>
    <p>double braces function: {{getFullName()}}</p>
    <p>ngModel: <input [(ngModel)]="first" readonly/></p>
    <button (click)="showValues()">Show values</button>
  `,
  //styleUrls: [ './app.component.css' ]
  styles: []
})

export class AppComponent  {
  name = 'task28 - AngularJS - Calculated values';
  description = 
`Your scope has the following options:

$scope.firstName:‘John’;
$scope.lastName:‘Doe’;

Add two inputs which values will be bound to these options.
Add a div element below the inputs and display concatenated name (firstName + lastName).
Make sure that when you change one of the input, all changes are displayed in your div`;

  @Input() first: string = 'John';
  @Input() last: string = 'Doe';

  changeFirst() {
    this.first += '+';
  }

  getFullName() {
    return `${this.first} ${this.last}`;
  }
  showValues() {
    alert(`first: "${this.first}", last: "${this.last}"`);
  }
}