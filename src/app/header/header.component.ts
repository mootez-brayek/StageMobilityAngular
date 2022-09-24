import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../Service/condidat.service';
import { Condidat } from '../model/condidat.model';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LogementComponent } from '../logement/logement.component';


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
  constructor(private router:Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {

  }
  OnAddLogement(){
   
  
  let dialogRef = this.dialog.open(LogementComponent, {

    data: { body: this.body }
  });
  dialogRef.afterClosed().subscribe(result => {
    this.body = result;
  });
}
}
