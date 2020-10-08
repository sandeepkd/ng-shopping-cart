import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor() { }
  userData:any;
  username: string;
  email: string;
  name: string;
  ngOnInit(): void {
      this.userData = JSON.parse(localStorage.getItem('data'));
      this.username = this.userData.username;
      this.name = this.userData.name;
      this.email = this.userData.email;
      
  }

}
