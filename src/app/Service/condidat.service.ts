import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  constructor(private http:HttpClient) { }

  retrieveAllCondidat(){
    return this.http.get("http://localhost:8083/Stage/Condidat/retrieve");
  }

  Publier (condidat:any,userfile:any) {
    const formData = new FormData();
    formData.append('file',userfile)
    formData.append('body',JSON.stringify(condidat) )
    return this.http.post("http://localhost:8083/Stage/Condidat/add",formData);}
}
