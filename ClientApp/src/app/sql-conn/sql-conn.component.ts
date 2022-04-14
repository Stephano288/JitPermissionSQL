import { Component, OnInit, Injectable,  Inject } from '@angular/core';
import { ConnectionString, SQLToken } from './sql-conn';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import {Routes, Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';


@Component({

  selector: 'sql-conn',
  templateUrl: './sql-conn.component.html'

})



export class SqlConnComponent implements OnInit {

  connectionForm: FormGroup;
  sqlConnString = new ConnectionString();
  tok: SQLToken;
  


  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
   ) { }

  ngOnInit() {
    this.connectionForm = this.fb.group({
      dataSource: "",
      userID: "",
      password: ""
    })
  }

  sqlConnect(): void {
    this.http.post<SQLToken>(this.baseUrl + 'api/SQLConnection', this.connectionForm.value)
      .subscribe((token) =>
      {
        this.tok = token;
        sessionStorage.setItem('conn', this.tok.sqlToken);
        console.log(sessionStorage.getItem('conn'));
        this.router.navigate(['/sql-serverperm']);

        
      } ,
       error => console.error(error)
    );

       }


}
