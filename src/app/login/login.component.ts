import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicess/userService/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  title: string = 'Sign In'
  isLogin :boolean=false;
  constructor(private userService: UserService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onLogin() {
    if (this.signupForm.valid) {
      this.userService.onLogin(this.signupForm.value).subscribe(res => {
        console.log('res', res);
      })
    }
  }

  onMybizRegister(titleValue) {
    this.title = titleValue;
    this.isLogin = true;
  }
  onUserRegister(titleValue) {
    this.title = titleValue;
  }

  backToLogin(titleValue) {
    this.title = titleValue;
    this.isLogin = false;
  }


}
