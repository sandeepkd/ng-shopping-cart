import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { ShopComponent } from './frontend/shop/shop.component';
import { CartComponent } from './frontend/cart/cart.component';
import { MyAccountComponent } from './frontend/my-account/my-account.component';
import { OrdersComponent } from './frontend/orders/orders.component';
import { ContactUsComponent } from './frontend/contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule} from '@angular/material/tabs';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreHeaderComponent } from './frontend/common/store-header/store-header.component';
import { StoreFooterComponent } from './frontend/common/store-footer/store-footer.component';
import { LoginComponent } from './frontend/login/login.component';
import { RegisterComponent } from './frontend/register/register.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { PrivacyPolicyComponent } from './frontend/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    CartComponent,
    MyAccountComponent,
    OrdersComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    StoreHeaderComponent,
    StoreFooterComponent,
    LoginComponent,
    RegisterComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OverlayModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
