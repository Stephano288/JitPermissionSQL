import { Component, OnInit, Inject } from '@angular/core';
import { ConnectionString } from './sql-conn';
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

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
   ) { }

  ngOnInit() {
    this.connectionForm = this.fb.group({
      dataSource: "",
      userID: "",
      password: ""
    })
  }


  sqlConnect(): void {
    this.http.post<void>("https://localhost:44359/SQLConnection", this.connectionForm.value ).subscribe(result => {
            
            }, error => console.error(error));
    
    //console.log(JSON.stringify(this.sqlConnString) +  "class");
    //console.log(this.connectionForm.value + " conn form  " + this.connectionForm.value);
    //this.sqlConnString.userdID = this.connectionForm.get("userID").value;
    this.router.navigate(['/sql-serverperm']);

  }


}
