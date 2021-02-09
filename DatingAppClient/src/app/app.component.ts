import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  constructor(private http: HttpClient){

  }
  title = 'DatingAppClient';

  users:any;

  ngOnInit(){
          
    this.http.get('https://localhost:5001/api/users').subscribe((response) =>{
         
       this.users = response;

    });

    
  
  }
}
