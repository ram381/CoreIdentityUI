import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {  RegisterService} from "../_service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  loading:boolean = false;
  responseMsg:string;
  constructor(private registerservice:RegisterService,
              private formBuilder:FormBuilder, private router:Router
              ) { }

              ngOnInit() {
                this.registerForm = this.formBuilder.group({
                  email: ['', Validators.required],
                  password: ['', Validators.required]
                });
              }


  // checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  //   let pass = group.controls.password.value;
  //   let confirmPass = group.controls.confirmPassword.value;

  //   return pass === confirmPass ? null : { notSame: true }
  // }


  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;

    
    this.registerservice.register(this.registerForm.controls.email.value,
      this.registerForm.controls.password.value)
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

}
