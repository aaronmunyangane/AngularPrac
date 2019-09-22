export interface User{
    firstname:string
    lastname:string
    age?:number
    address?:{ 
        city?:string
        state?:string
        street?:string
    }
}
