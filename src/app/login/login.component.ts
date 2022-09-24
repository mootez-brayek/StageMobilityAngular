import { Component, OnInit } from '@angular/core';
import { Condidat } from '../model/condidat.model';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  body:any={};
  nom:any;
  password:any;
  constructor(private login:LoginService ) { }

  ngOnInit(): void {
  }
  OnLogIn(){
  this.login.login(this.body.nom,this.body.password).subscribe({
    next:(data:any)=>{
      this.body={}
     console.log(data);
        },
        error:(err:any)=>{    
          console.log(err) 
        
          
        },
        complete:()=>{},
    })
  }

}
