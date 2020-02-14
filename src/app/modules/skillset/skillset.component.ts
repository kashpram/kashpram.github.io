import { Component } from '@angular/core';
import { Tag } from 'cloudee';

// import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { SKILLSET_CARDS } from 'src/app/_constants/skillset-constants';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  cardsData = SKILLSET_CARDS;

  myTags: Tag[] = [
		{ weight: 16, text: 'insurance',image: '../favicon.ico'  },
    { weight: 24, text: 'lay' ,image: '../favicon.ico' },
    { weight: 18, text: 'tense'  },
    { weight: 16, text: 'cabin' ,image: '../favicon.ico' },
    { weight: 32, text: 'bomb' ,image: '../favicon.ico' },
    { weight: 30, text: 'broadcast' ,image: '../favicon.ico' },
    { weight: 18, text: 'portion' ,image: '../favicon.ico' },
	];
	options: TagCanvasOptions = {
    dragControl: true,
    imageMode:'text',
    clickToFront: 500,
    initial: [ .1, 0 ],
    weight: true
  };
      
  showTagDetails (tag) {
    console.log(tag);
  }
  // options: CloudOptions = {
  //   // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
  //   width: 1000,
  //   height: 400,
  //   overflow: false,
  // };
 
  // data: CloudData[] = [
  //   { text: 'weight-5-rotate(+10)', weight: 5, rotate: 10 },
  //   { text: 'weight-7-rotate(-20)', weight: 7, rotate: -20 },
  //   { text: 'weight-9-rotate(+35)', weight: 9, rotate: 35 }
  //   // ...
  // ];
  
  constructor () {
    // this.assignColor();
  }

  // assignColor () {
  //   this.cardsData.forEach(elem => {
  //     elem['bgcolor'] = this.getRandomColor();
  //   });
  // } // FN

  // ngOnInit() {
  // }

  // getRandomColor() {
  //   return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  // }

}
