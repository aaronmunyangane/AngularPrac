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
  
  showExtended=false
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
     
      isActive:true,
      hide:true,
      Register:new Date('1993/09/22  09:30:00')
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
   
        isActive:false,
      hide:true,
        Register:new Date('1997/01/28 08:00:00')
      },{

        firstname:'GUNDO',
        lastname:'SUNZU',
        age:12,
        address:{
            city:'THOHOYANDOU',
            state:'TSHIDZINI',
            street:'MAGWANA STREET'
        },
       
        isActive:true,
        hide:true,
        Register : new Date('2007/01/28 20:00:00')
      }
  ];

      this.loaded=true
     


// this.AddUser({

//   firstname:'HAngwani',
//   lastname:'Chipz',
//   age:12
 
// })
    }// ngonit close


    AddUser(user:User){
      this.users.push(user)
    }



  }