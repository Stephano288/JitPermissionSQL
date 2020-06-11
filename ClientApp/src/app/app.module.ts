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
 



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
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
      { path: 'sql-conn', component: SqlConnComponent },
      { path: 'sql-serverperm', component: SqlServerPermission },
    ]) ,
        
  ],
  providers: [NgbdDatepickerRange],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
