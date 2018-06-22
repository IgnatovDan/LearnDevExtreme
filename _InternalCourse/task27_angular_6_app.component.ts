import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: 
`<p>{{name}}</p>
<p>{{description}}</p>
<button (click)="normal()" class="buttonNormal">normal</button>
<button (click)="large()" class="buttonLarge">large</button>
<div class="mydiv" [class.mydiv_large]="isLarge">test</div>`,
  //styleUrls: [ './app.component.css' ]
  styles: [`
    .buttonNormal {
      background-color: lightgreen;
    }
    .buttonLarge {
      background-color: lightcoral;
    }

    .mydiv {
      width: 75px;
      height: 75px;
      background-color: green;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: green;
      transition: all 0.5s;
    }
    .mydiv_large {
      width: 300px;
      height: 300px;
      background-color: red;
    }`]
})

export class AppComponent  {
  name = 'task27 - Angular6 - Change element size';
  description = 'Place a button and a DIV panel with the size of 300x300 pixels. When the button is clicked change the DIV size to 500x500.'
  isLarge: boolean = false;

  normal(): void {
    this.isLarge = false;
  }

  large(): void {
    this.isLarge = true;
  }
}
