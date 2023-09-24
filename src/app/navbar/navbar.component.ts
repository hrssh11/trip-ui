import { Component, ElementRef } from '@angular/core';
import { CommonserviceService } from '../home/commonService/commonservice.service';
import { switchScan } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHome: boolean = true;
  isEvent: boolean = false
  isContact: boolean = false
  isLogin: boolean = false

  constructor(public commonService: CommonserviceService) {

  }

  isEventClick(event) {

    let typeEvent = event.target.innerHTML

    switch (typeEvent) {
      case 'Home':
        this.isHome = true;
        this.isContact = false;
        this.isLogin = false;
        this.isEvent = false;
        break;
      case 'Event':
        this.isEvent = true;
        this.isHome = false;
        this.isContact = false;
        this.isLogin = false;
        break;
      case 'Contact':
        this.isContact = true;
        this.isHome = false;
        this.isEvent = false;
        this.isLogin = false;
        break;
      case 'Login':
        this.isLogin = true;
        this.isHome = false;
        this.isEvent = false;
        this.isContact = false;
        break;
    }

  }



}
