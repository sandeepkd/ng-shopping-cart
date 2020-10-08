import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminAuthGuard } from './_guards/admin-auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { CategoryComponent } from './category/category.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { OrdersComponent } from './orders/orders.component';
import { FranchiseUserComponent } from './franchise-user/franchise-user.component';
import { CustomerUserComponent } from './customer-user/customer-user.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent, canActivate:[AdminAuthGuard]
    },
     {
      path: 'customers',
      component: CustomersComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: 'franchise',
      component: FranchiseComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: 'category',
      component: CategoryComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: 'add-category',
      component: AddCategoryComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: 'add-product',
      component: AddProductsComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: 'product-details/:id',
      component: ProductDetailsComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: 'edit-product/:id',
      component: EditProductComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: 'products',
      component: ProductsComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: 'orders',
      component: OrdersComponent, canActivate:[AdminAuthGuard]
    },
    {
      path: '**',
      component: PageNotFoundComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}

