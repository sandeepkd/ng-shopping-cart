import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Gouatam.K', email: 'kt.goutam@gmail.com', symbol: 'H'},
  {id: 2, name: 'Adani.G', email: 'kt.krishna@gmail.com', symbol: 'He'},
  {id: 3, name: 'Agarwal', email: 'kt.sourav@gmail.com', symbol: 'Li'},
  {id: 4, name: 'Doe', email: 'kt.doe@gmail.com', symbol: 'Be'},
  {id: 5, name: 'Sharma', email: 'kt.goutam@gmail.com', symbol: 'B'},
  {id: 6, name: 'Jhone.S', email: 'kt.jhone@gmail.com', symbol: 'C'},
  {id: 7, name: 'Arvind', email: 'kt.arvind@gmail.com', symbol: 'N'},
  {id: 8, name: 'Jyoti', email: 'kb.jyotic@gmail.com', symbol: 'O'},
  {id: 9, name: 'Sunil.B', email: 'kt.sunil@gmail.com', symbol: 'F'},
  {id: 10, name: 'Sanny.G', email: 'kt.sunny@gmail.com', symbol: 'Ne'},
];

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
