import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicess/userService/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  constructor(private userService : UserService){
  }
  
  ngOnInit(): void {
  }

 

   name(params:string) {
  
  }


}
