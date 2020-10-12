import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { LoginComponent } from './frontend/login/login.component';
import { RegisterComponent } from './frontend/register/register.component';
import { MyAccountComponent } from './frontend/my-account/my-account.component';
import { AboutComponent } from './frontend/about/about.component';
import { ShopComponent } from './frontend/shop/shop.component';
import { ContactUsComponent } from './frontend/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './frontend/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: 'administrator',
    component: AdministratorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'my-account',
    component: MyAccountComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./administrator/administrator.module')
      .then(m => m.AdministratorModule),
  },
  {
    path: 'about-us',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ShopComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
      path: '',
      component: HomeComponent,
  },
  { path: '**', component: PageNotFoundComponent }, 
];


const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, config)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
