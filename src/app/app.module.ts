import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from "./login/component/login.component";
import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/component/signup.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { CondashboardComponent } from './condashboard/condashboard.component';
import { NewjobpostComponent } from './newjobpost/newjobpost.component';
import { JbthankyouComponent } from './jbthankyou/jbthankyou.component';
import { TruckerdashboardComponent } from './truckerdashboard/truckerdashboard.component';
import { ConsignupComponent } from './consignup/consignup.component';
import { TruckersignupComponent } from './truckersignup/truckersignup.component';
import { ConloginComponent } from './conlogin/conlogin.component';
import { TruckerloginComponent } from './truckerlogin/truckerlogin.component';
import { SeecurrentjobsComponent } from './seecurrentjobs/seecurrentjobs.component';
import { ConpersonalprofileComponent } from './conpersonalprofile/conpersonalprofile.component';
import { ConpublicprofileComponent } from './conpublicprofile/conpublicprofile.component';
import { ConjobpostComponent } from './conjobpost/conjobpost.component';
import { ConrecentjobpostsComponent } from './conrecentjobposts/conrecentjobposts.component';
import { ConrecentfullfilledjobpostsComponent } from './conrecentfullfilledjobposts/conrecentfullfilledjobposts.component';
import { ContoptruckersComponent } from './contoptruckers/contoptruckers.component';
import { ConunitgraphComponent } from './conunitgraph/conunitgraph.component';
import { CondistancegraphComponent } from './condistancegraph/condistancegraph.component';
import { ConexpendituregraphComponent } from './conexpendituregraph/conexpendituregraph.component';
import { TruckeravailablejobsComponent } from './truckeravailablejobs/truckeravailablejobs.component';
import { TruckerjobapplicationComponent } from './truckerjobapplication/truckerjobapplication.component';
import { TruckerpersonalprofileComponent } from './truckerpersonalprofile/truckerpersonalprofile.component';
import { TruckerpublicprofileComponent } from './truckerpublicprofile/truckerpublicprofile.component';
import { TruckerawardedjobsComponent } from './truckerawardedjobs/truckerawardedjobs.component';
import { TruckercompletedjobsComponent } from './truckercompletedjobs/truckercompletedjobs.component';
import { TruckerunitstatusComponent } from './truckerunitstatus/truckerunitstatus.component';
import { TruckerdistancetravelledstatusComponent } from './truckerdistancetravelledstatus/truckerdistancetravelledstatus.component';
import { TruckerearningstatusComponent } from './truckerearningstatus/truckerearningstatus.component';
import { TruckerrecommendationstatusComponent } from './truckerrecommendationstatus/truckerrecommendationstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CondashboardComponent,
    NewjobpostComponent,
    JbthankyouComponent,
    TruckerdashboardComponent,
    ConsignupComponent,
    TruckersignupComponent,
    ConloginComponent,
    TruckerloginComponent,
    SeecurrentjobsComponent,
    ConpersonalprofileComponent,
    ConpublicprofileComponent,
    ConjobpostComponent,
    ConrecentjobpostsComponent,
    ConrecentfullfilledjobpostsComponent,
    ContoptruckersComponent,
    ConunitgraphComponent,
    CondistancegraphComponent,
    ConexpendituregraphComponent,
    TruckeravailablejobsComponent,
    TruckerjobapplicationComponent,
    TruckerpersonalprofileComponent,
    TruckerpublicprofileComponent,
    TruckerawardedjobsComponent,
    TruckercompletedjobsComponent,
    TruckerunitstatusComponent,
    TruckerdistancetravelledstatusComponent,
    TruckerearningstatusComponent,
    TruckerrecommendationstatusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
   
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
