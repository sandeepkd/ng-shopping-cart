import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.css']
})
export class StoreHeaderComponent implements OnInit {

  isOpen = false;
  isOpen2 = false;
  loggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

  showCategories(){
  
    alert("In Progress")

  }

}
