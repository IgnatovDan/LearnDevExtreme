import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: `
    <p>{{name}}</p>
    <pre>{{description}}</pre>
    <a href="https://stackblitz.com/edit/internal-training-task29">https://stackblitz.com/edit/internal-training-task29</a>
    <hr/>
    <p>Type image URL and press enter or leave editor:
        <input #imageUrlEditor value="{{imageUrl}}" style="width:100%"
          (keyup.enter)="setImageUrl(imageUrlEditor.value)" 
          (blur)="setImageUrl(imageUrlEditor.value)"
        />
    </p>
    <p>or click the button:<button (click)="toggleImageUrl()">Toggle image reference</button></p>
    <p>Image:</p>
    <div style="height: 300px">
        <img style="max-width:100%; max-height:100%" src="{{imageUrl}}"/>
    </div>
  `,
  //styleUrls: [ './app.component.css' ]
  styles: []
})


export class AppComponent implements OnInit {
  imageUrlList = [
    'https://picography.co/wp-content/uploads/2018/02/picography-laptop-grass-park-green-technology-thumb.jpg',
    'https://picography.co/wp-content/uploads/2017/11/picography-creatives-desk-sm-1.jpg',
  ];
  currentImageIndex : number = 0;

  name = 'task29 - Change element attribute';
  description = 
`Place an image (<img>), input and button on your page.
Type any URL in your input and change the image URL accoringly when the button is clicked.`;

  @Input() imageUrl: string;

  ngOnInit() {
    this.imageUrl = this.imageUrlList[this.currentImageIndex];
  }

  toggleImageUrl() {
    this.currentImageIndex++;
    if(this.currentImageIndex >= this.imageUrlList.length) {
      this.currentImageIndex = 0;
    }
    this.imageUrl = this.imageUrlList[this.currentImageIndex];
  }
  setImageUrl(imageUrl) {
    this.imageUrl = imageUrl;
  }
}