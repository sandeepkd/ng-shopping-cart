import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { CategoryService } from '../category/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  cat_name: string = "";
  description: string = "";
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private router: Router, private catService: CategoryService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  categoryForm = new FormGroup({
    cat_name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  addCategory() {

    this.catService.addProductCategory(this.categoryForm.value).subscribe((data) => {
      let reponse = JSON.parse(JSON.stringify(data));
      //console.log(reponse);
      if (reponse.status) {
        this.categoryForm.reset();
        this._snackBar.open('Category Addedd Successfully!', '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });

      } else {

        this._snackBar.open('Sorry Something went wrong!', '', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }

  backCategory(){
    this.router.navigate(['/admin/category']);
  }

}
