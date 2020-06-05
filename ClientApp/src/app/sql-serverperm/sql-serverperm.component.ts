import { Component, OnInit } from '@angular/core';
import { ServerPermission, ReceivedPermission } from './sql-serverperm';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';





@Component({
      selector: "sql-serverperm",
      templateUrl: "./sql-serverperm.component.html"

})


export class SqlServerPermission implements OnInit {

      permform: FormGroup;
      sqlperm : ReceivedPermission;
      sPerm = new ServerPermission();
      fetchurl : string=  "http://localhost:4200/assets/fakedata.json";
      
      constructor(private http: HttpClient, private fb :FormBuilder) { }


  
      ngOnInit() { 
            this.http.get<ReceivedPermission>(this.fetchurl).subscribe(result => {
            this.sqlperm = result;
            }, error => console.error(error));


            this.permform = this.fb.group({
                  login: "",
                  role : "",
                  startDate: "",
                  endDate : "" 
            })
            }


}
