import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";
import { ProductsService } from '../../add-products/products.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  data: any;
  prod_id: string;
  prod_name: string = '';
  cat_name: string = "";
  categories: any;
  description: string = "";
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  category: any;

  constructor(private route: ActivatedRoute, private router: Router, public prodService: ProductsService, private catService: CategoryService, private _snackBar: MatSnackBar) {
    this.route.params.subscribe( params => {  this.prod_id = params.id; });
    this.catService.catArrayList().subscribe(res => {  this.categories = res; console.log(res) });
  }

  ngOnInit(): void {
    this.prodService.productDetails({ prod_id: this.prod_id} ).subscribe(data => {  
      this.data = data
      console.log(this.data);
    });
  }

  ProductForm = new FormGroup({
    prod_name: new FormControl('', [Validators.required]),
    cat_id: new FormControl('', [Validators.required]),
    short_description: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price_per_kg: new FormControl('', [Validators.required]),
  });

  updateProduct() {
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


  backtoList(){
    this.router.navigate(['/admin/products']);
  }
}
