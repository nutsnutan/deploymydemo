import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EmployeeComponent } from './employee/employee.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TwoWayBindingComponent,
    EmployeeComponent,
    DemocomponentComponent
  ],
  imports: [
    BrowserModule,
       AppRoutingModule,
       FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
