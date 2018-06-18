import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: 
`<p>"{{ name }}"</p>
<p>Place a button and a DIV element with a green background. When the button is clicked, change the DIV background color to red. Everything should be done using Angular.</p>
<button (click)="happy()">happy</button>
<button (click)="angry()">angry</button>
<div class="mydiv" [class.mydiv_angry]="isAngry">test</div>`,
  //styleUrls: [ './app.component.css' ]
  styles:
  [`.mydiv {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    transition: all 0.5s;
  }
  .mydiv_happy {
      background-color: green;
  }
  .mydiv_angry {
      background-color: red;
  }`]
})

export class AppComponent  {
  name = 'task26_angular';
  isAngry: boolean = false;

  happy(): void {
    this.isAngry = false;
  }

  angry(): void {
    this.isAngry = true;
  }
}
