import { Component, OnInit } from '@angular/core';
import { User } from './user';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {
  url:string="";
  state:string="small";
  users:Array<User>=[
    //new User(1,"Omkar Repal","omyrepal@gmail.com"),
    //new User(2,"Nimish Repal","nemoNFS@gmail.com"),
    //new User(3,"Mahesh Repal","maheshrepal@gmail.com"),
    //new User(4,"Sagar Repal","sagar.repal@gmail.com"),
    
  ];
  

  constructor(private _userService:UserService,private modalService: NgbModal) { }

  
  ngOnInit() {
    this.getUsers();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
     
    }, (reason) => {
      
    });
  }
 

  getUsers(){
    this._userService.getUsers().subscribe(
      data=>this.users=data,
      error=>console.log("Error!")
    )
  }
  destroy(user:User){
    this._userService.destroy(user).subscribe(
      success=>this.getUsers(),
      error=>console.log(error)
    )
    //const i=this.users.indexOf(user);
    //this.users.splice(i,1);
  }

 

  create(user:User){
    this._userService.create(user).subscribe(
      success=>this.getUsers(),
      error=>console.log(error),
      )

  }

  update(user:any){
    this._userService.update(user).subscribe(
      success=>this.getUsers(),
      error=>console.log(error),
    )
    
  }
  

}
