import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../category/category.service';
import { DataSource } from '@angular/cdk/collections';
import { Category } from '../_models/category';
import { Observable } from 'rxjs';
import { EditCategoryComponent } from '../dialog-box/edit-category/edit-category.component';
import { MatDialog } from '@angular/material/dialog'
import { DeleteComponent } from '../dialog-box/delete/delete.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  _id: string;
  deleteData: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['cat_name', 'description', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Category>();

  constructor(private router: Router, private catService: CategoryService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getAllCats();
  }

  getAllCats(){
    this.catService.catList().subscribe(res => {
      this.dataSource.data = res as Category[];
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

  createCategory(){
    this.router.navigate(['/admin/add-category']);
  }
}


