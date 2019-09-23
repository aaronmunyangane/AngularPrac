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
  
  showExtended=true
  loaded=true
  enableAdd:boolean=true


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
      },
      image:'http://lorempixel.com/600/600/people/1'
      },
      {
        firstname:'aaron',
        lastname:'thovhedzo',
        age:26,
        address:{
            city:'jhb',
            state:'malb',
            street:'str hope'
        },
        image:'http://lorempixel.com/600/600/people/2'
      },{

        firstname:'GUNDO',
        lastname:'SUNZU',
        age:12,
        address:{
            city:'THOHOYANDOU',
            state:'TSHIDZINI',
            street:'MAGWANA STREET'
        },
        image:'http://lorempixel.com/600/600/people/4'
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