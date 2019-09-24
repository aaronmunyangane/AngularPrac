export interface User{
    firstname:string,
    lastname:string,
    age?:number,
    address?:{ 
        city?:string,
        state?:string,
        street?:string,
    }
    image?:string,
    isActive?:boolean,
    Balance?:number,
    Register?:any
}
