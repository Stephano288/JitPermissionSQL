import { Component, OnInit } from '@angular/core';
import { ConnectionString } from './sql-conn';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({

  selector: 'sql-conn',
  templateUrl: './sql-conn.component.html'

})




export class SqlConnComponent implements OnInit {
  connectionForm: FormGroup;
  sqlConnString = new ConnectionString();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.connectionForm = this.fb.group({
      dataSource: "",
      userID: "",
      password: ""
    })
  }

  sqlConnect(): void {
    console.log(this.connectionForm.value + " " + JSON.stringify(this.connectionForm.value));

  }


}
