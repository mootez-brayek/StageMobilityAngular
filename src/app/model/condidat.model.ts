export class Condidat {
    idCondidat:number;
    cin:number;
    age :number;
    email:String;
    telephone:number;
    nom:String;
    prenom:String;
    picture:String;

    constructor(idCondidat:number,cin:number,age:number,email:String,telephone:number,nom:String,prenom:String,picture:String){
        this.idCondidat=idCondidat;
        this.cin=cin;
        this.age=age;
        this.email=email;
        this.telephone=telephone;
        this.nom=nom;
        this.prenom=prenom;
        this.picture=picture;
        
        
    }


}
