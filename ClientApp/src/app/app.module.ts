import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SqlConnComponent } from './sql-conn/sql-conn.component';
import { SqlServerPermission } from './sql-serverperm/sql-serverperm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerRange } from './services/datepick.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WheelHttpInterceptor } from './services/wheel.interceptor';
import {  WheelService } from './services/wheel.service';
import { WheelComponent } from './services/wheel.component';
 
 



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SqlConnComponent,
    WheelComponent,
    SqlServerPermission,
    NgbdDatepickerRange
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'sql-conn', component: SqlConnComponent },
      { path: 'sql-serverperm', component: SqlServerPermission },
    ]) ,
        
  ],
  providers: [
    NgbdDatepickerRange,
    WheelService,
    { provide: HTTP_INTERCEPTORS, useClass: WheelHttpInterceptor, multi: true }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
