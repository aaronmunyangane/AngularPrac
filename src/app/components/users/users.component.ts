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
  currentClasses={};
  currentStyle={}

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
      image:'http://lorempixel.com/600/600/people/1',
      isActive:true,
      Balance:4950,
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
        image:'http://lorempixel.com/600/600/people/2',
        isActive:false,
        Balance:5950,
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
        image:'http://lorempixel.com/600/600/people/4',
        isActive:true,
        Balance:360,
        Register : new Date('2007/01/28 20:00:00')
      }
  ];

      this.loaded=true
     
this.setCurrentClasses()
this.setCurrentStyle()

this.AddUser({

  firstname:'HAngwani',
  lastname:'Chipz',
  age:12
 
})
    }// ngonit close


    AddUser(user:User){
      this.users.push(user)
    }

setCurrentClasses(){
  this.currentClasses={
    'btn-success':this.enableAdd,
    'big-text':this.showExtended
  }
}
setCurrentStyle(){
  this.currentStyle={
    'padding':this.showExtended ? '0':'40px'
  }
}

  }