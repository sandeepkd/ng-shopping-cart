import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURLs: string = environment.apiUrl+'/admin';

  constructor(private httpClient: HttpClient) { }

  addProductCategory(catData: Category){
    return this.httpClient.post<Category[]>(`${this.apiURLs}`+'/add-category/', catData);
  }

  catList(): Observable<Category[]>{
     return this.httpClient.get<Category[]>(`${this.apiURLs}`+'/category-list/');
  }

  catArrayList() {
    return this.httpClient.get(`${this.apiURLs}`+'/category-list/');
  }
  
}
