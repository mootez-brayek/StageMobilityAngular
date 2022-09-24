import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login( nom:String,  password:String){
    const headers = new Headers({Authorization:'Basic' + btoa(nom+":"+password)})
    return this.http.post("http://localhost:8083/Stage/Condidat/login",{headers,resonseType:'text' as 'json'});

  }
}
