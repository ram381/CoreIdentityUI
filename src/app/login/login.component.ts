import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { LoginService  } from '../_service';
import { HttpErrorResponse } from '@angular/common/http';
@ Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  loading:boolean = false;
  responseMsg:string;
  constructor(private formBuilder: FormBuilder, private router: Router,
              private authService: LoginService) { }
   onSubmit() {
    this.submitted = true;
    let errorresponse:HttpErrorResponse;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    let authResult :string;
    this.authService.login(this.loginForm.controls.email.value,
              this.loginForm.controls.password.value)
              .subscribe(
                  result => {
                    if(result.value){
                      this.responseMsg = result.value;                       
                      this.router.navigate(['employee']);
                    }
                    else{
                      this.responseMsg = result.value;
                    }
                  },
                  error => {                  
                      this.responseMsg= error;
                      this.loading = false;
                      this.invalidLogin = true;
                  });
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser')
   }

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
