import { Component, OnInit, Inject } from '@angular/core';
import { ConnectionString, SQLToken } from './sql-conn';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import {Routes, Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({

  selector: 'sql-conn',
  templateUrl: './sql-conn.component.html'

})



export class SqlConnComponent implements OnInit {
  @Inject('BASE_URL') baseUrl: string
  connectionForm: FormGroup;
  sqlConnString = new ConnectionString();
  tok: SQLToken;
  


  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
   ) { }

  ngOnInit() {
    this.connectionForm = this.fb.group({
      dataSource: "",
      userID: "",
      password: ""
    })
  }

  sqlConnect(): void {
    this.http.post<SQLToken>("https://localhost:44359/SQLConnection", this.connectionForm.value)
      .subscribe((token) =>
      {
        this.tok = token;
        sessionStorage.setItem('conn', JSON.stringify(this.tok));
        //console.log(sessionStorage.getItem('conn'));
      } ,
       error => console.error(error)
      );


    this.router.navigate(['/sql-serverperm']);
    
  }


}
