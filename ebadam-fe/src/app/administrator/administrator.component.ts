import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminLoginService } from './_services/adminlogin.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  username:string = "";
  password:string = "";
  errorMessage:string = "";
  errorFlag: boolean = false;

  constructor(private router: Router, public adminAuth: adminLoginService) { }

  ngOnInit(){
  }

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(5)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  loginSubmit(){

    //console.log(this.loginForm.value.username);
    // if(this.loginForm.value.username=='ebadam' && this.loginForm.value.password == 'Welcome2021'){
    //   this.errorFlag = false;
    //   this.router.navigate(['/admin/dashboard'])
    // }else{
    //    this.errorFlag = true;
    //    this.errorMessage = 'Please check your email and password!'
    // }

    let loggedIn = false;
    // Call login service
    this.adminAuth.loginDataPost(this.loginForm.value).subscribe((data)=>{
        let adminData = jwt_decode(data);
        // If successfuly loggedin then it will redirect to dashboard
        console.log(adminData);
        if(adminData.auth){
         let sessionData = "data";
         localStorage.setItem(sessionData, JSON.stringify(adminData));
         loggedIn = true;
         this.router.navigate(['/admin/dashboard'])
        }else{
         this.errorMessage = adminData.message;
        } 
        
    });





  }

}
