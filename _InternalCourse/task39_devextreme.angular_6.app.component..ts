import { Component, Input, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name: string = 'task39 - DevExtreme - Detailed chart data';
  description: string =
`Display product categories in dxChart (bar chart).
Argument is a category name, the value is product count that associated with the category.
Data can be downloaded from http://services.odata.org/V3/Northwind/Northwind.svc/.
When a bar is clicked, display dxPopup with dxDataGrid inside.
dxDataGrid should display products associated with the current category.

It is possible to get product count associated with each category using the Products navigation property. See http://services.odata.org/V3/Northwind/Northwind.svc/$metadata. 
See also:
 https://js.devexpress.com/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations`;
  otherImplementationUrl: string = 'https://github.com/IgnatovDan/LearnDevExtreme/blob/master/_InternalCourse/task39_devextreme.html';

  chartDataSource: DataSource;

  ngOnInit() {
    this.chartDataSource = new DataSource({
      store: {
        type: 'odata',
        url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Categories',
        key: 'CategoryID'
      },
      expand: ['Products'],
      map: (item) => {
        item.Products_Count = item.Products.length;
        return item;
      }
    });
  }

}