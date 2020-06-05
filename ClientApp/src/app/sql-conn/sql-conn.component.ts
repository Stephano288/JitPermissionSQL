import { Component, OnInit } from '@angular/core';
import { ConnectionString } from './sql-conn';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import {Routes, Router} from '@angular/router'
import { ServerPermission } from '../sql-serverperm/sql-serverperm';


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
    console.log(this.connectionForm.value + " " + JSON.stringify(this.connectionForm.value));
    this.router.navigate(['/sql-serverperm']);
  }


}
