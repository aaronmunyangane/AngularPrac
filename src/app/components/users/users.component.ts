import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:User [];
  constructor() { }
  
  showExtended=true;
  loaded=true;


  ngOnInit() {
     this.users =[
     {
      firstname:'aaron',
      lastname:'munyanagne',
      age:22,
      address:{
          city:'jhb',
          state:'malb',
          street:'hope'
      }
      },
      {
        firstname:'aaron',
        lastname:'thovhedzo',
        age:26,
        address:{
            city:'jhb',
            state:'malb',
            street:'str hope'
        }
      },{

        firstname:'GUNDO',
        lastname:'SUNZU',
        age:12,
        address:{
            city:'THOHOYANDOU',
            state:'TSHIDZINI',
            street:'MAGWANA STREET'
        }
      }
  ];

      this.loaded=true
     


this.AddUser({

  firstname:'HAngwani',
  lastname:'Chipz',
  age:12
 
})


    }
    AddUser(user:User){
      this.users.push(user)
    }
  }