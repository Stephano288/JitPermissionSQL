import { Component, OnInit } from '@angular/core';
import { ServerPermission, ReceivedPermission } from './sql-serverperm';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder ,FormsModule } from '@angular/forms';


import { NgbdDatepickerRange } from '../services/datepick.component';



 
@Component({
  selector: "sql-serverperm",
  templateUrl: "./sql-serverperm.component.html"

})


export class SqlServerPermission implements OnInit {

  showModal: boolean;
  permform: FormGroup;
  sqlperm: ReceivedPermission;
  role: string;
  fetchurl: string = "https://localhost:44359/SQLPermission";
  token = sessionStorage.getItem('conn');
  guid: string[];




  headers = new HttpHeaders({ 'X-Conn': this.token });
  constructor(private http: HttpClient, private fb: FormBuilder, private datepicker: NgbdDatepickerRange) { }



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


  patchData(): void {
    this.permform.patchValue
      ({
        startDate: this.datepicker.fromDate,
        endDate: this.datepicker.toDate,
      })
    this.doTheMagic();

  }




  doTheMagic(): void {
    this.http.post<string[]>(this.fetchurl, this.permform.value, { headers: this.headers })
      .subscribe((result) => {
        this.guid = result;
        this.showModal = true
                          },
        error => console.error(error)
            )
  }


  hide() {
    this.showModal = false;
  }
}
