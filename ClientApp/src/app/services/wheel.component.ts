import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { WheelService } from './wheel.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-loader',
  templateUrl: './wheel.component.html'
 
})
export class WheelComponent {
  isLoading: Subject<boolean> = this.spinner.isLoading;
  constructor( private spinner: WheelService){}
  
  }

