import { Component, Input, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name: string = 'task34 - dxDataGrid without empty values';
  description: string =
  `Generate array of items. Each item has the ID, FirstName and LastName options. 
Create ArrayStore based on this array. Bind dxDataGrid to the store. The ID column should not be displayed. 
dxDataGrid should allow editing rows. Does not allow user to enter empty values for FirstName and LastName.`;
  otherImplementationUrl: string = 'https://github.com/IgnatovDan/LearnDevExtreme/blob/master/_InternalCourse/task34_devextreme.html';
  employeesArrayStore: ArrayStore;
  clickMeButtonOptions;

  ngOnInit() {
    //this.employees = employeesArray;
    this.employeesArrayStore = new ArrayStore({ key: 'id', data: employeesArray });
  }

  showArray_0_Name() {
    alert('employees[0].Name : "' + employeesArray[0].name + '"');
  }

}

const employeesArray = [
  {
    id: 1,
    name: 'Ilya Muromets',
    wikiLink: 'https://en.wikipedia.org/wiki/Ilya_Muromets',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/92/%D0%A2%D1%80%D0%B8_%D0%B1%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D1%8F_%28%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2%29.jpg/525px-%D0%A2%D1%80%D0%B8_%D0%B1%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D1%8F_%28%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2%29.jpg'
  },
  {
    id: 2,
    name: 'Dobrynya Nikitich',
    wikiLink: 'https://en.wikipedia.org/wiki/Alyosha_Popovich',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/e/ee/%D0%90%D0%BB%D1%91%D1%88%D0%B0_%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B8%D1%87_%D0%B8_%D0%A2%D1%83%D0%B3%D0%B0%D1%80%D0%B8%D0%BD_%D0%97%D0%BC%D0%B5%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.jpg'
  },
  {
    id: 3,
    name: 'Alyosha Popovich',
    wikiLink: 'https://en.wikipedia.org/wiki/Dobrynya_Nikitich',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/ru/b/b5/%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%BD%D1%8F_%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B8%D1%87_%D0%B8_%D0%97%D0%BC%D0%B5%D0%B9_%D0%93%D0%BE%D1%80%D1%8B%D0%BD%D1%8B%D1%87_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%29.jpg'
  },
];