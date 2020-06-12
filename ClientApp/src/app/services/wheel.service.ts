import { Injectable, Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';



@Injectable()


export class WheelService {

  constructor( private spinner: NgxSpinnerService){}

  
  isLoading = new Subject<boolean>();
  show() {
   this.spinner.show();
 }

 hide() {
   this.spinner.hide();

}
}
