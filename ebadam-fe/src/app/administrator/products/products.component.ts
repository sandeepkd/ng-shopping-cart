import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../add-products/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../_models/product';
import { DeleteComponent } from '../dialog-box/delete/delete.component';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  _id: string;
  deleteData: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['prod_name', 'category', 'details', 'edit', 'delete'];

  dataSource = new MatTableDataSource<Product>();

  constructor(private router: Router, private ProdService: ProductsService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.ProdService.prodList().subscribe(res => {
      this.dataSource.data = res as Product[];
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  createProduct(){
    this.router.navigate(['/admin/add-product']);
  }

  editProduct(obj){
    this.router.navigate([`/admin/edit-product/${obj._id}`]);
  }
  
  productDetails(obj){
    this.router.navigate([`/admin/product-details/${obj._id}`]);
  }

  openDialog(obj) {
    console.log(obj);
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '25%',
      data: {_id: obj._id}
  });

  dialogRef.afterClosed().subscribe(prod_id => {
      if(prod_id){
        this.deleteData = { prod_id: prod_id};
        this.ProdService.deleteItem(this.deleteData).subscribe();
        this.getAllProducts();
      }
    });
  }

}
