import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { EmployeeComponent } from './employee';
import { RegisterComponent } from './register';
import { LoginService, RegisterService, EmployeeService} from './_service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './guards';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, EmployeeService, RegisterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
