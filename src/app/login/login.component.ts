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
  vendorRegistorForm: FormGroup;
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
    this.vendorRegistorForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      businessName: ['', [Validators.required]],
      phoneNo: ['', [ Validators.required ,Validators.maxLength(10) , Validators.pattern('^[0-9]*$'),]],
      email: ['', [Validators.required, Validators.email]],
      userRole: 2,
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
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

    this.title = titleValue;
    this.isLogin = false;
    this.isMybizz= false;
    this.isSinup = false;
  }

  onLogin() {
    if (this.signupForm.valid) {
      this.userService.onLogin(this.signupForm.value).subscribe(res => {
        this.signupForm.reset();
        this.toastr.success('Login Successfully');
        console.log('res', res);
      },error=>{
        this.toastr.error(error.error.errors[0].message);
    })
    }
  }
 onVendorRegistor(){
    if(this.vendorRegistorForm.valid){
    this.userService.onVendorRegistor(this.vendorRegistorForm.value).subscribe((res:any)=>{
      this.vendorRegistorForm.reset();
      this.toastr.success('Registor Successfully ');
    },error=>{
        this.toastr.error(error.error.errors[0].message);
    })
    }
 }
}
