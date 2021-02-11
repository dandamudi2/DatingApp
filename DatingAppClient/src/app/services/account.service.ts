import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {



   private  currentUserSource = new ReplaySubject<User>(1);

   currentUser$= this.currentUserSource.asObservable();
  
  baseUrl ="https://localhost:5001/api/"
  constructor(private http: HttpClient) {

   }

   login(model:any){
     console.log(model);
     return this.http.post(`${this.baseUrl}account/login`,model).pipe
     (map((user: any)=>{
      
           localStorage.setItem('user',JSON.stringify(user));

           this.currentUserSource.next(user);
     })

     );
   
   }

   getUsers(){
     return  this.http.get('https://localhost:5001/api/users').pipe
    (map((users: any)=>{
        return users;
    }))
   };

   setCurrentUser(user: User){
     this.currentUserSource.next(user);
   }

   logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
   }

   registerUsers(user: any){

   return  this.http.post(`${this.baseUrl}account/register`,user).pipe(
      map((response: any) =>{
       
        return response;
      })
    )
   }
}
