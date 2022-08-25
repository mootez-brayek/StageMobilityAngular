import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../Service/condidat.service';
import { Condidat } from '../model/condidat.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Condidats:any={}
  body:any={}
  message: string="";
  userFile: any;
  imagePath: any="";
  imgURL: any;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  OnAddLogement(){
    this.router.navigateByUrl('/logement');
  }

 
}
