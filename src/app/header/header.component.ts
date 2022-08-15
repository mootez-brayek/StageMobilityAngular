import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../Service/condidat.service';
import { Condidat } from '../model/condidat.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Condidats:any={}
  constructor(private condidat:CondidatService) { }

  ngOnInit(): void {
  }


  getConddiat(){
    this.condidat.retrieveAllCondidat().subscribe({
      next:(data:any)=>{

        this.Condidats=data
       
      console.log(data)
        },
        error:(err:any)=>{
          console.log(err)
        
        },
        complete:()=>{},
    
    })
  }
}
