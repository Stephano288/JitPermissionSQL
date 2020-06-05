import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SqlConnComponent } from './sql-conn/sql-conn.component';
import { SqlServerPermission } from './sql-serverperm/sql-serverperm.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerRange } from './sql-serverperm/datepick.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    SqlConnComponent,
    SqlServerPermission,
    NgbdDatepickerRange
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,  
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'sql-conn', component: SqlConnComponent },
      { path: 'sql-serverperm', component: SqlServerPermission },
    ]) ,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
