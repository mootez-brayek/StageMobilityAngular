import{Type} from "./type"
import{Status} from "./status"
export class Logement {
    idLogement:number;
	prix:number;
	adresse:String;
	nbrChambre:number;
    type:Type;
	status:Status;
	image:String;

    constructor(  idLogement:number,prix:number,adresse:String,nbrChambre:number,type:Type,status:Status, image:String,){
            this.adresse=adresse;
            this.idLogement=idLogement;
            this.image=image;
            this.nbrChambre=nbrChambre;
            this.prix=prix;
            this.status=status;
            this.type=type;

        }
}
