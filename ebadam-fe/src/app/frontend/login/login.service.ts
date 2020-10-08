import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  apiURL: string = environment.apiUrl+'/api';

  loginDataPost(UserData: any){
    
    return this.httpClient.post<User[]>(`${this.apiURL}`+'/login/', UserData);
    
  }

  isAuthenticated(){
    let userData = "data";
    let user = JSON.parse(localStorage.getItem(userData));
    if(user){
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
