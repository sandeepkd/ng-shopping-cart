import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../_models/admin';

@Injectable({
  providedIn: 'root'
})
export class adminLoginService {

  constructor(private httpClient: HttpClient) { }

  apiURL: string = 'http://13.232.199.40:3000/auth';

  loginDataPost(AdminData: any){
    
    return this.httpClient.post<Admin[]>(`${this.apiURL}`+'/alogin/', AdminData);
    
  }

  isAuthenticated(){
    let AdminData = "data";
    let admin = JSON.parse(localStorage.getItem(AdminData));
    if(admin){
      return true;
    }else{
      return false;
    }
  }

  private subject = new Subject<any>();

  authStatus(message: string) {
    this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

}
