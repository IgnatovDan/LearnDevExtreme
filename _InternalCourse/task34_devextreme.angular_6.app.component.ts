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
dxDataGrid should allow editing rows. Does not allow user to enter empty values for FirstName and LastName.
If wikiLink and imgUrl are empty, grid should save "https://en.wikipedia.org" and "https://commons.wikimedia.org/wiki/Main_Page” correspondingly. 
`;
  otherImplementationUrl: string = 'https://github.com/IgnatovDan/LearnDevExtreme/blob/master/_InternalCourse/task34_devextreme.html';
  otherImplementationUrl2: string = 'https://github.com/IgnatovDan/LearnDevExtreme/blob/master/_InternalCourse/task35_devextreme.html';

  employeesArrayStore: ArrayStore;
  clickMeButtonOptions;

  ngOnInit() {
    this.employeesArrayStore = new ArrayStore({ key: 'id', data: employeesArray });
  }

  showArray_0_Name() {
    alert('employees[0].Name : "' + employeesArray[0].name + '"');
  }

  correctDataGridNewData(newData) {
    const EMPLOYEE_WIKILINK_DEFAULTVALUE = 'https://en.wikipedia.org';
    const EMPLOYEE_WIKILINK_PROPERTYNAME = 'wikiLink';
    const EMPLOYEE_IMGURL_DEFAULTVALUE = 'https://commons.wikimedia.org/wiki/Main_Page';
    const EMPLOYEE_IMGURL_PROPERTYNAME = 'imgUrl';

    function setDataGridNewDataDefaultValue(obj, propertyName, defaultValue) {
      debugger;
      //TODO: https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdated
      // topic doesn't describe the format of the 'newData' object
      if (obj.hasOwnProperty(propertyName) && (obj[propertyName] === '' || obj[propertyName] === null || obj[propertyName] === undefined)) {
        obj[propertyName] = defaultValue;
      }
    }
    setDataGridNewDataDefaultValue(newData, EMPLOYEE_WIKILINK_PROPERTYNAME, EMPLOYEE_WIKILINK_DEFAULTVALUE);
    setDataGridNewDataDefaultValue(newData, EMPLOYEE_IMGURL_PROPERTYNAME, EMPLOYEE_IMGURL_DEFAULTVALUE);
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