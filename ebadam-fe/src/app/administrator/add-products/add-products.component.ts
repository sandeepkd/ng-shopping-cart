import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { ProductsService } from './products.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  cat_name: string = "";
  categories: any;
  description: string = "";
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  category: any;
  constructor(private router: Router, private prodService: ProductsService,  private catService: CategoryService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.catService.catArrayList().subscribe(res => {  this.categories = res; console.log(res) });
  }

  ProductForm = new FormGroup({
    prod_name: new FormControl('', [Validators.required]),
    cat_id: new FormControl('', [Validators.required]),
    short_description: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price_per_kg: new FormControl('', [Validators.required]),
  });

  addProduct() {
    this.prodService.addProduct(this.ProductForm.value).subscribe((data) => {
      let reponse = JSON.parse(JSON.stringify(data));
      if (reponse.status) {
        this.ProductForm.reset();
        this._snackBar.open('Product Addedd Successfully!', '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.router.navigate(['/admin/products']);
      } else {

        this._snackBar.open('Sorry Something went wrong!', '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });

      }
    });
  }

  backProduct(){
    this.router.navigate(['/admin/products']);
  }
}

