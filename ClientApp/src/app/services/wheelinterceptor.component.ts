// import { finalize, tap } from 'rxjs/operators';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http/http';
// import {  NgxSpinnerService } from "ngx-spinner";
// import { Observable } from 'rxjs';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// export class WheelHttpInterceptor implements HttpInterceptor {

//   count = 0;
 
//   constructor(private spinner: NgxSpinnerService) { }
 

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     this.spinner.show()

//     this.count++;

//     return next.handle(req)

//       .pipe(tap(

//         event => console.log(event),

//         error => console.log(error)

//       ), finalize(() => {

//         this.count--;

//         if (this.count == 0) this.spinner.hide()
//       })
//       );
//   }
// }
