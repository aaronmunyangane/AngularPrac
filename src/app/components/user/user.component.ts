import { Component,OnInit } from "@angular/core";
import { User } from 'src/app/models/User';


@Component({
    selector:'user-app',
    templateUrl:'user.component.html',
    styleUrls:['user.component.css']
})

export class UserComponent implements OnInit{
    user:User;

    constructor(){}

    ngOnInit(){
        this.user ={
        firstname:'aaron',
        lastname:'munyanagne',
        age:22,
        address:{
            city:'jhb',
            state:'malb',
            street:'hope commistenff'
        }
    }

}
}