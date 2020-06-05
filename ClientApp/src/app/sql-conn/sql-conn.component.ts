import { Component, OnInit } from '@angular/core';
import { ConnectionString } from './sql-conn';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import {Routes, Router} from '@angular/router'

@Component({

  selector: 'sql-conn',
  templateUrl: './sql-conn.component.html'

})



export class SqlConnComponent implements OnInit {

  connectionForm: FormGroup;
  sqlConnString = new ConnectionString();

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.connectionForm = this.fb.group({
      dataSource: "",
      userID: "",
      password: ""
    })
  }

  sqlConnect(): void {
    console.log(this.connectionForm.value + " conn form  " + JSON.stringify(this.connectionForm.value));
    this.sqlConnString.userdID = this.connectionForm.get("userID").value;
    console.log(JSON.stringify(this.sqlConnString) +  "class");
    this.router.navigate(['/sql-serverperm']);

  }


}
