export class Quotes {
    public showDescription:boolean;
    constructor(public id:number, public name:string, public author:string,public publisher:string){
        this.showDescription=false
    }
}
