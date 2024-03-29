import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHome: boolean = true;
  isEvent: boolean = false;
  isContact: boolean = false;
  isLogin: boolean = false;
  isEventDetail: boolean = false;
  hideFooter: boolean = false;

  constructor(
    private router: Router,
    ) {
      this.router.events.subscribe((events:any)=>{
        if(events instanceof NavigationEnd){
          if(events.url == '/login'){
            this.hideFooter = true;
          }else{
            this.hideFooter = false;
          }
        }
      })
  }

  ngOnInit() {
    let currentpath = window.location.pathname.substring(1)
    this.isEventClick(currentpath)
  }
  isEventClick(event) {
    // switch (event) {
    //   case 'home':
    //     this.isHome = true;
    //     this.isContact = false;
    //     this.isLogin = false;
    //     this.isEvent = false;
    //     this.isEventDetail = false;
    //     break;
    //   case 'event':
    //     this.isEvent = true;
    //     this.isHome = false;
    //     this.isContact = false;
    //     this.isLogin = false;
    //     this.isEventDetail = false;
    //     break;
    //   case 'event-detail':
    //     this.isEventDetail = true;
    //     this.isEvent = true;
    //     this.isHome = false;
    //     this.isContact = false;
    //     this.isLogin = false;
    //     break;
    //   case 'contact':
    //     this.isContact = true;
    //     this.isHome = false;
    //     this.isEvent = false;
    //     this.isLogin = false;
    //     this.isEventDetail = false;
    //     break;
    //   case 'login':
    //     this.isLogin = true;
    //     this.isHome = false;
    //     this.isEvent = false;
    //     this.isContact = false;
    //     this.isEventDetail = false;
    //     break;
    // }

  }
}
