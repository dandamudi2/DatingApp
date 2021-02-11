import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  
  model:any ={
    
  };

 

  constructor(public acctService: AccountService) { }

  ngOnInit(): void {
     

  
  }

  login(){
    this.acctService.login(this.model).subscribe(response =>{
    
    }, error =>{
      console.log(error);
    })
  }

  logout(){
     this.acctService.logout();
  }

   

}
