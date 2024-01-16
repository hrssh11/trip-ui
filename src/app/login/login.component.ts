import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicess/userService/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private userService : UserService , private fb: FormBuilder){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
      password:['' , [Validators.required ,  Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  onLogin(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value)
    }

  }
}
