import { Component, OnInit } from '@angular/core';
import { LogementService } from '../Service/logement.service';
import {MatDialog} from '@angular/material/dialog';
import { ContratComponent } from '../contrat/contrat.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Logements:any={}
  constructor(private logement:LogementService,
              public dialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.get();
  }


  get(){
    this.logement.retrieveAllLogement().subscribe({
      next:(data:any)=>{

        this.Logements=data
       
      console.log(data)
        },
        error:(err:any)=>{
          console.log(err)
        
        },
        complete:()=>{},
    
    })
  }
  OnAddContrat(){
    this.dialog.open(ContratComponent);
  }

 
}
