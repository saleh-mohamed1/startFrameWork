import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  iscroll:boolean= true ;
  @HostListener('window:scroll')
  windeowScroll():void{
    this.iscroll=
    window.scrollY>30
    // console.log('can scroll');
  }
}
