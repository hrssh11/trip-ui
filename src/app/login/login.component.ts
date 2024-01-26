import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicess/userService/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  title: string = 'Sign In'
  isLogin: boolean = false;
  isMybizz: boolean = false;
  isSinup: boolean = false;
  constructor(private userService: UserService, private fb: FormBuilder , private toastr: ToastrService) { }
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
  onMybizRegister(titleValue: string) {
    this.title = titleValue;
    this.isLogin = true;
    this.isMybizz = true
  }
  onUserRegister(titleValue: string) {
    this.title   = titleValue;
    this.isLogin = true;
    this.isSinup = true;
  }
  backToLogin(titleValue: string) {
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.title = titleValue;
    this.isLogin = false;
    this.isMybizz= false;
    this.isSinup = false;
  }
}
