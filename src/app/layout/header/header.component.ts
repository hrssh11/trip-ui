import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoginRoute:boolean
  constructor(
    private router: Router,
    ) {
      this.router.events.subscribe((events:any)=>{
        if(events instanceof NavigationEnd){
          if(events.url == '/login'){
            this.isLoginRoute = true;
          }else{
            this.isLoginRoute = false;
          }
        }
      })
  }

}
