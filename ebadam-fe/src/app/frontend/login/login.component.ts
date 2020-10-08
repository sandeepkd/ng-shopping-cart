import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { LoginService } from './login.service';
import {MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:string = "";
  password:string = "";
  errorMessage:string = "";
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private loginService: LoginService, public router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  onSubmit(){
    let loggedIn = false;
    // Call login service
    this.loginService.loginDataPost(this.loginForm.value).subscribe((data)=>{
        let userData = jwt_decode(data);
        if(userData.auth){
         localStorage.setItem("data", JSON.stringify(userData));
         loggedIn = true;
         this.router.navigate(['/my-account'])
        }else{
         this.errorMessage = userData.message;
         this._snackBar.open(userData.message, '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        }    
    });
 }
}
