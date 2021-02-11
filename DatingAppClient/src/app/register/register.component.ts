import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AccountService } from '../services/account.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new  EventEmitter();

  model: any ={};
  
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {

  }

  register(){
  
      this.accountService.registerUsers(this.model).subscribe((response: any)=>{

        
      })
  }

  RegisterCancel(){
    this.cancelRegister.emit(false);
  }



}
