import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { RegisterService } from './register.service';
import {MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string = "";
  password:string = "";
  email:string = "";
  address:string = "";
  successFlag:boolean = false;
  errorMessage:string = "";
  successMessage:string = "";
  errorFlag:boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private registerService: RegisterService, public router: Router, private _snackBar: MatSnackBar) { }

  registerForm = new FormGroup({
    fullname: new FormControl('',[Validators.required, Validators.minLength(4)]),
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    address: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  ngOnInit(): void {
  }

  onSubmit(){

    let loggedIn = false;
    // Call register service
    this.registerService.loginDataPost(this.registerForm.value).subscribe((data)=>{
        let userData = jwt_decode(data);
        console.log(userData);
        // if(userData.auth){
        //  this.errorFlag = false;
        //  this.registerForm.reset();
        //  this._snackBar.open('Successfully Registerd! Please verify your email to login.', '', {
        //   duration: 3000,
        //   horizontalPosition: 'right',
        //   verticalPosition: 'top'
        // });
        // }else{
        //  this.errorMessage = userData.message;
        //  this._snackBar.open(this.errorMessage, 'Undo', {
        //   duration: 3000
        // });
        // } 
    });

 }
}
