import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonserviceService } from '../home/commonService/commonservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    public commonService: CommonserviceService,
    private router: Router,
    private route: ActivatedRoute ,) {

  }

  ngOnInit() {
    let currentpath = window.location.pathname.substring(1)
    this.isEventClick(currentpath)
  }
  isEventClick(event) {
    switch (event) {
      case 'home':
        this.isHome = true;
        this.isContact = false;
        this.isLogin = false;
        this.isEvent = false;
        this.isEventDetail = false;
        break;
      case 'event':
        this.isEvent = true;
        this.isHome = false;
        this.isContact = false;
        this.isLogin = false;
        this.isEventDetail = false;
        break;
      case 'event-detail':
        this.isEventDetail = true;
        this.isEvent = true;
        this.isHome = false;
        this.isContact = false;
        this.isLogin = false;
        break;
      case 'contact':
        this.isContact = true;
        this.isHome = false;
        this.isEvent = false;
        this.isLogin = false;
        this.isEventDetail = false;
        break;
      case 'login':
        this.isLogin = true;
        this.isHome = false;
        this.isEvent = false;
        this.isContact = false;
        this.isEventDetail = false;
        break;
    }

  }
}
