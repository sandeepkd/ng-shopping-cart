import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface prodID{
  prod_id: String;
}

export interface Product {
  prod_name: string;
  cat_id: string; 
  short_description: string;
  description: string;
  price_per_kg: Number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURLs: string = environment.apiUrl+'/product';

  constructor(private httpClient: HttpClient) { }

  addProduct(prodData: Product){
    return this.httpClient.post<Product[]>(`${this.apiURLs}`+'/add-product/', prodData);
  }
  
  prodList(): Observable<Product[]>{
     return this.httpClient.get<Product[]>(`${this.apiURLs}`+'/product-list/');
  }

  deleteItem(prodID: prodID){
      return this.httpClient.post<prodID[]>(`${this.apiURLs}`+'/product-delete/',prodID);
  }
  
  productDetails(prodID: prodID){
    return this.httpClient.post<prodID[]>(`${this.apiURLs}`+'/product/',prodID);
  }
}
