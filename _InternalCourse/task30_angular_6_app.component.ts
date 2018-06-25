import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: `
    <div style="width:100%"> 
      <p>{{name}}</p>
      <pre>{{description}}</pre>
      <a href="https://stackblitz.com/edit/internal-training-task30?file=src%2Fapp%2Fapp.component.ts">https://stackblitz.com/edit/internal-training-task30</a>
      <div class="employeesList">
        <div *ngFor="let employee of employees" class="employeesList__item">
          <div>
            <a href="{{employee.wikiLink}}">{{employee.name}}</a>
          </div>
          <img src="{{employee.imgUrl}}" title="{{employee.name}}" class="employeesList__item__img" />
          <div class="employeesList__item__details">
            <label>Name:<input [(ngModel)]="employee.name" class="employeesList__item__details__item"/></label>
            <label>Wiki link:<input [(ngModel)]="employee.wikiLink" class="employeesList__item__details__item"/></label>
            <label>Image url:<input [(ngModel)]="employee.imgUrl" class="employeesList__item__details__item"/></label>
          </div>
        </div>
      </div>
      <button (click)="reset()">Reset</button>
      <button (click)="updateJSON()">Show JSON</button>
      <pre *ngIf="JSON !== ''">{{JSON}}</pre>
    </div>
 `,
  //styleUrls: [ './app.component.css' ]
  styles: [`
      .employeesList {
          display: flex; flex-direction: row; justify-content: space-between; width: 100%
      }
      .employeesList__item {
          margin: 10px; padding: 10px; border: solid 1px gray; flex-grow: 1
      }
      .employeesList__item__img {
          height:200px; width:200px; object-fit:contain
      }
      .employeesList__item__details {
          border: dashed 1px lightgray; padding: 10px; margin-top: 10px
      }
      .employeesList__item__details__item {
          width: 100%;
      }
  `]
})


export class AppComponent implements OnInit {
  sourceEmployees: Employee[] = [
    {
      name: 'Ilya Muromets',
      wikiLink: 'https://en.wikipedia.org/wiki/Ilya_Muromets',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/92/%D0%A2%D1%80%D0%B8_%D0%B1%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D1%8F_%28%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2%29.jpg/525px-%D0%A2%D1%80%D0%B8_%D0%B1%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D1%8F_%28%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2%29.jpg'
    },
    {
      name: 'Dobrynya Nikitich',
      wikiLink: 'https://en.wikipedia.org/wiki/Alyosha_Popovich',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/e/ee/%D0%90%D0%BB%D1%91%D1%88%D0%B0_%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B8%D1%87_%D0%B8_%D0%A2%D1%83%D0%B3%D0%B0%D1%80%D0%B8%D0%BD_%D0%97%D0%BC%D0%B5%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.jpg'
    },
    {
      name: 'Alyosha Popovich',
      wikiLink: 'https://en.wikipedia.org/wiki/Dobrynya_Nikitich',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/b/b5/%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%BD%D1%8F_%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B8%D1%87_%D0%B8_%D0%97%D0%BC%D0%B5%D0%B9_%D0%93%D0%BE%D1%80%D1%8B%D0%BD%D1%8B%D1%87_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.jpg'
    },
  ];

  name: string = 'task30 - Data table';
  description: string =
  `Generate any array of items.
For example: each item has the FirstName and LastName options.
Display this array data in the table representation.`;

  employees: Employee[];
  JSON: string;

  ngOnInit() {
    this.employees = JSON.parse(JSON.stringify(this.sourceEmployees));
    this.JSON = "there will be JSON, click the button above";
  }

  updateJSON() {
    const data = this.employees;
    /*in AngularJS there was the "$$hashKey": "object:3" property in objects */
    this.JSON = JSON.stringify(this.employees, undefined, 2);
  };

  reset() {
    this.employees = JSON.parse(JSON.stringify(this.sourceEmployees))
  }
}

class Employee {
  name: string;
  wikiLink: string;
  imgUrl: string;
}