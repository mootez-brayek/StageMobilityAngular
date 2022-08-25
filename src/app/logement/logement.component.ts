import { Component, OnInit } from '@angular/core';
import { LogementService } from '../Service/logement.service';
import { Type } from '../model/type';


@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  types = [
    { value: '', disabled: false },
    { value: 'HOTEL'},
    { value: 'FOYER' },
    { value: 'RESIDENCE'}
  ];
  body:any={}
 
 Logements:any={}
  message: string="";
  userFile: any;
  imagePath: any="";
  imgURL: any;


  type = Type;
  Keysr(): Array<string> {
    var Keys = Object.keys(this.type);
    return Keys;
  }
  constructor(private logement:LogementService) { }
  
  ngOnInit(): void {
    this.get();
  }

  OnSubmit1(){
    this.logement.Publier(this.body,this.userFile).subscribe({
         next:(data:any)=>{
         this.body={}
       
        
           },
           error:(err:any)=>{    
             console.log(err) 
           
             
           },
           complete:()=>{},
       })
    }

     onSelectFile(event:any) {
      console.log("right me")
      if (event.target.files.length > 0)
      {
        const file = event.target.files[0];
        this.userFile = file;
       // this.f['profile'].setValue(file);
   
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
      }}


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
