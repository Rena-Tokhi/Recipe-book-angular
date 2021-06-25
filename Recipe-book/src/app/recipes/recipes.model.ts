export class recipes {
    public name :string ;
    public description :string;
    public imagePath :string;

    constructor(name :string ,desc:string , imagePAth :string){
     this.name = name;
     this.description = desc;
     this.imagePath=imagePAth;
    }
}