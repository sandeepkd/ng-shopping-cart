import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { AdministratorComponent } from './administrator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { CategoryComponent } from './category/category.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { from } from 'rxjs';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { EditCategoryComponent } from './dialog-box/edit-category/edit-category.component';
import { DeleteComponent } from './dialog-box/delete/delete.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { FranchiseUserComponent } from './franchise-user/franchise-user.component';
import { CustomerUserComponent } from './customer-user/customer-user.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    CustomersComponent,
    LayoutComponent,
    NavigationComponent, 
    AdministratorComponent,  
    ProductsComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    CategoryComponent,
    FranchiseComponent,
    AddCategoryComponent,
    DialogBoxComponent,
    EditCategoryComponent,
    DeleteComponent,
    ProductDetailsComponent,
    EditProductComponent,
    OrdersComponent,
    FranchiseUserComponent,
    CustomerUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    NgMaterialMultilevelMenuModule
  ]
})
export class AdministratorModule { }
