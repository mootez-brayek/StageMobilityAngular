import { Component, OnInit } from '@angular/core';
import { LogementService } from '../Service/logement.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Logements:any={}
  constructor(private logement:LogementService) { }

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
}
