import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  constructor(private http: HttpClient,
      private accountService: AccountService){

  }
  title = 'DatingAppClient';

  users:any;

  ngOnInit(){
          
    this.http.get('https://localhost:5001/api/users').subscribe((response) =>{
         
       this.users = response;

    });
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
 }


}
