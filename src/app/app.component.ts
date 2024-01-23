import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trip-ui';

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
