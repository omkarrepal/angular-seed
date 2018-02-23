import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  constructor(private _http:Http) { }

  create(user:User){
    return this._http.post("http://localhost:3000/users",user).map(res=>res.json());
  }

  destroy(user:User){
    return this._http.delete("http://localhost:3000/users/"+user.id).map(res=>res.json())

  }
  update(user:User){
    return this._http.put("http://localhost:3000/users/"+user.id,user).map(res=>res.json())


  }

  getUsers(){
    return this._http
    .get("http://localhost:3000/users")
    .map(res=>res.json())
  }

  getUser(user:User){
    this._http.get("http://localhost:3000/users/"+user.id).map(res=>res.json()).toPromise();

  }

}
