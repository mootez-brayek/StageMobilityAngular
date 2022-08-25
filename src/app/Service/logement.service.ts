import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogementService {

  constructor(private http:HttpClient) { }
  retrieveAllLogement(){
    return this.http.get("http://localhost:8083/Stage/Logement/retrieve");
  }

  Publier (body:any,userfile:any) {
    const formData = new FormData();
    formData.append('file',userfile)
    formData.append('body',JSON.stringify(body) )
    return this.http.post("http://localhost:8083/Stage/Logement/add",formData);}
}
