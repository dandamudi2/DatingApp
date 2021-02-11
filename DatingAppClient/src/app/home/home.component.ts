import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode:boolean=false; 
   users: any;
  constructor(private accountService: AccountService) { }

  ngOnInit(){
          
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers(){
        this.accountService.getUsers().subscribe((users: any) =>{
          this.users =users;
        })

        console.log(this.users);
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
     
     this.accountService.setCurrentUser(user);
  
  }

  showRegister(){

    this.registerMode = true;

  }

  RegisterCancel(value){
     this.registerMode = value;

    
  }
  

}
