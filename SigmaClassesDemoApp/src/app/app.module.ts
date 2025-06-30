import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
// import { AdminRoutingModule } from './components/admin/module/admin-routing.module';


// External Modules
 
import { SlickCarouselModule } from 'ngx-slick-carousel'; 

 
// Import all the components here 
import  {AppHeaderComponent} from './components/layoutComponents/appHeader.component';
import  {AppFooterComponent} from './components/layoutComponents/appFooter.component';
import  {AppMenuComponent} from './components/layoutComponents/appMenu.component';
import {HomeComponent} from './components/layoutComponents/home.Component';
import {ImageSliderComponent} from './components/imageSlider/imageSlider.component';
import { AdmissionComponent } from './components/appComponents/admission.component';
import { ManagementComponent } from './components/appComponents/management.component';
import { ResultsComponent } from './components/appComponents/results.component';
import { EmployeeHomeComponent } from './components/employee/employeeHome.component';
import { LoginComponent } from './components/appAuthComponents/login.component';
import { GetAccountDetailsComponent } from './components/employee/getAccountDetails.component';
import { AddChequeComponent } from './components/employee/addCheque.component';
import { GenerateReportComponent } from './components/employee/generateReport.component'; 
import { AddEmployeeDataComponent } from './components/employee/addEmployeeData.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent, AppFooterComponent, AppMenuComponent,
    HomeComponent, ImageSliderComponent,AdmissionComponent ,ManagementComponent, ResultsComponent,
    LoginComponent,
    EmployeeHomeComponent,
    AddEmployeeDataComponent,GenerateReportComponent,AddChequeComponent,GetAccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SlickCarouselModule, ReactiveFormsModule,
     RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
