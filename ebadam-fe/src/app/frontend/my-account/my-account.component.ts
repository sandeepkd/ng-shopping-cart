import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface OrderElement {
  orderId: string;
  status: string;
  date: string;
  payment: string;
  shipping: string;
  total: string;
  actions: string;
}

export interface WishlistElement {
  productImage: string;
  productName: string;
  unitPrice: string;
  stockStatus: string;
  actions: string;
}

const ORDER_ELEMENT_DATA: OrderElement[] = [
  {orderId: '1', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '2', status: 'CLOSED', date: 'Sun, October 1, 2020', payment: 'PAID', shipping: 'SHIPPED', total: 'Rs. 1000', actions: 'View Order'},
  {orderId: '3', status: 'OPEN', date: 'Sun, October 2, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 3000', actions: 'View Order'},
  {orderId: '4', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 22000', actions: 'View Order'},
  {orderId: '5', status: 'CLOSED', date: 'Sun, September 11, 2020', payment: 'PAID', shipping: 'SHIPPED', total: 'Rs. 33000', actions: 'View Order'},
  {orderId: '6', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '7', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '8', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '9', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '10', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '11', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '12', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '13', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '14', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '15', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '16', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '17', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '18', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '19', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'},
  {orderId: '20', status: 'OPEN', date: 'Sun, October 11, 2020', payment: 'PAID', shipping: 'IN PROGRESS', total: 'Rs. 300', actions: 'View Order'}
];

const WISHLIST_ELEMENT_DATA: WishlistElement[] = [
  {productImage: 'http://ebadam.com/media/catalog/product/cache/1/image/600x500/9df78eab33525d08d6e5fb8d27136e95/b/a/badam_2.jpg', productName: 'badam_2', unitPrice: '299.30INR/Kg', stockStatus: 'IN STOCK', actions: 'actions'},
  {productImage: 'http://ebadam.com/media/catalog/product/cache/1/image/600x500/9df78eab33525d08d6e5fb8d27136e95/k/a/kaju_2.jpg', productName: 'kaju_2',  unitPrice: '799.30INR/Kg', stockStatus: 'IN STOCK', actions: 'actions'}
];


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})

export class MyAccountComponent implements OnInit {

  displayedColumns: string[] = ['orderId', 'status', 'date', 'payment', 'shipping', 'total', 'actions'];
  displayedColumnsWl: string[] = ['productImage', 'productName', 'unitPrice', 'stockStatus', 'actions'];
  dataSource = new MatTableDataSource<OrderElement>(ORDER_ELEMENT_DATA);
  dataSource_wl = new MatTableDataSource<WishlistElement>(WISHLIST_ELEMENT_DATA);
  form: FormGroup;

  @ViewChild('firstPaginator', {static: true}) firstPaginator: MatPaginator;
  @ViewChild('secondPaginator', {static: true}) secondPaginator: MatPaginator;

  constructor(private formBuilder: FormBuilder) { }
  userData:any;
  username: string;
  email: string;
  name: string;
  ngOnInit(): void {
      this.userData = JSON.parse(localStorage.getItem('data'));
      // this.username = this.userData.username;
      // this.name = this.userData.name;
      // this.email = this.userData.email; 

      this.form = this.formBuilder.group({
        name: [this.userData.name, Validators.required],
        email: [this.userData.email, Validators.required],
        username: [this.userData.username, Validators.required]
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.firstPaginator;
    this.dataSource_wl.paginator = this.secondPaginator;
  }

  onSubmit() {
    console.log('form data -- ', this.form.value);
  }

}
