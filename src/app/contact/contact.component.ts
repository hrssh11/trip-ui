import { Component } from '@angular/core';
import { UserService } from '../servicess/userService/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private userService : UserService){}

  getAllEmpolyee(){
    this.userService.getAllemployee().subscribe(res=>{
      console.log(res);
    })
  }
}
