import { Component, OnInit } from '@angular/core';
import { ServerPermission, ReceivedPermission } from './sql-serverperm';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder ,FormsModule } from '@angular/forms';
import {NgbdDatepickerRange} from "./datepick.component"
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';



 
@Component({
  selector: "sql-serverperm",
  templateUrl: "./sql-serverperm.component.html"

})


export class SqlServerPermission implements OnInit {

  fdate: Date;
  tdate: Date;
  permform: FormGroup;
  sqlperm: ReceivedPermission;
  role: string;
  serverPerm = new ServerPermission();
  fetchurl: string = "https://localhost:44359/SQLPermission";
  token = sessionStorage.getItem('conn');
  guid: string[];




  headers = new HttpHeaders({ 'X-Conn': this.token });
  constructor(private http: HttpClient, private fb: FormBuilder) { }



  ngOnInit() {
    this.http.get<ReceivedPermission>(this.fetchurl, { headers: this.headers }).subscribe(result => {
      this.sqlperm = result;
    }, error => console.error(error));


    this.permform = this.fb.group({
      login: "",
      role: "",
      startDate: "",
      endDate: ""
    })
  }

  dateselectionto(seldates: any): void {
    this.tdate = seldates;
  }

  dateselectionfrom(seldates: any): void {
    this.fdate = seldates;
  }

  patchData(): void {
    this.permform.patchValue
      ({
        startDate: this.fdate,
        endDate: this.tdate,
      })
    this.doTheMagic();

  }




  doTheMagic(): void {
    this.http.post<string[]>(this.fetchurl, this.permform.value, { headers: this.headers })
      .subscribe((result) => {
        this.guid = result;
                          },
        error => console.error(error)
            )
      }

}
