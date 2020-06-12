import { finalize, tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { WheelService } from './wheel.service';


@Injectable()

export class WheelHttpInterceptor implements HttpInterceptor {

  count = 0;
 
  constructor(public spinner: WheelService ) { }
 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinner.show();
    console.log("wheel show");
    this.count++;

    return next.handle(req)

      .pipe(tap(

        event => console.log(event),

        error => console.log(error)

      ), finalize(() => {

        this.count--;

        if (this.count == 0) this.spinner.hide()
        console.log("wheel hide");
      })
      );
  }


}
