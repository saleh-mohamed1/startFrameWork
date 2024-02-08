import { Component } from '@angular/core';
interface allImg{
  imgPath:string
}
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {
  UserClick:boolean=false;
  UserImg:string='';
  images:allImg[]=[
    { imgPath:'./assets/images/poert1.png'},
    { imgPath:'./assets/images/port2.png'},
    { imgPath:'./assets/images/port3.png'},
    { imgPath:'./assets/images/port3.png'},
    { imgPath:'./assets/images/port2.png'},
    { imgPath:'./assets/images/poert1.png'},
  ]

  getSrc(image:string):void{
    console.log(image);
     this.UserClick=true;
     this.UserImg = image

  }

  hideDiv(e:any):void{
    if (e.target instanceof HTMLImageElement != true) {
      this.UserClick=false;
    }
  }

}
