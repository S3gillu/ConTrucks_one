import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/component/login.component";
import { SignupComponent } from "./signup/component/signup.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CondashboardComponent } from "./condashboard/condashboard.component";
import { NewjobpostComponent } from "./newjobpost/newjobpost.component";
import { JbthankyouComponent } from "./jbthankyou/jbthankyou.component";
import { TruckerdashboardComponent } from "./truckerdashboard/truckerdashboard.component";
import { TruckersignupComponent } from "./truckersignup/truckersignup.component";
import { ConsignupComponent } from "./consignup/consignup.component";
import { ConloginComponent } from "./conlogin/conlogin.component";
import { TruckerloginComponent } from "./truckerlogin/truckerlogin.component";
import { SeecurrentjobsComponent } from "./seecurrentjobs/seecurrentjobs.component";
import { ConpersonalprofileComponent } from "./conpersonalprofile/conpersonalprofile.component";
import { ConpublicprofileComponent } from "./conpublicprofile/conpublicprofile.component";
import { ConjobpostComponent } from "./conjobpost/conjobpost.component";
import { ConrecentjobpostsComponent } from "./conrecentjobposts/conrecentjobposts.component";
import { ConrecentfullfilledjobpostsComponent } from "./conrecentfullfilledjobposts/conrecentfullfilledjobposts.component";
import { ContoptruckersComponent } from "./contoptruckers/contoptruckers.component";
import { ConunitgraphComponent } from "./conunitgraph/conunitgraph.component";
import { CondistancegraphComponent } from "./condistancegraph/condistancegraph.component";
import { ConexpendituregraphComponent } from "./conexpendituregraph/conexpendituregraph.component";
import { TruckeravailablejobsComponent } from "./truckeravailablejobs/truckeravailablejobs.component";
import { TruckerjobapplicationComponent } from "./truckerjobapplication/truckerjobapplication.component";
import { TruckerpersonalprofileComponent } from "./truckerpersonalprofile/truckerpersonalprofile.component";
import { TruckerpublicprofileComponent } from "./truckerpublicprofile/truckerpublicprofile.component";
import { TruckerawardedjobsComponent } from "./truckerawardedjobs/truckerawardedjobs.component";
import { TruckercompletedjobsComponent } from "./truckercompletedjobs/truckercompletedjobs.component";
import { TruckerunitstatusComponent } from "./truckerunitstatus/truckerunitstatus.component";
import { TruckerdistancetravelledstatusComponent } from "./truckerdistancetravelledstatus/truckerdistancetravelledstatus.component";
import { TruckerearningstatusComponent } from "./truckerearningstatus/truckerearningstatus.component";
import { TruckerrecommendationstatusComponent } from "./truckerrecommendationstatus/truckerrecommendationstatus.component";


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'condashboard', component: CondashboardComponent,
    children:
    [
      { path: 'newjobpost', component: NewjobpostComponent, outlet: 'njp' },
      { path: 'seecurrentjobs', component: SeecurrentjobsComponent, outlet: 'scj' },
      { path: 'conpersonalprofile', component: ConpersonalprofileComponent, outlet: 'cpp' },
      { path: 'conpublicprofile', component: ConpublicprofileComponent, outlet: 'copp' },
      { path: 'conjobpost', component: ConjobpostComponent, outlet: 'cjp' },
      { path: 'conrecentjobposts', component: ConrecentjobpostsComponent, outlet: 'crjp' },
      { path: 'conrecentfullfilledjobposts', component: ConrecentfullfilledjobpostsComponent, outlet: 'crffj' },
      { path: 'contoptruckers', component: ContoptruckersComponent, outlet: 'ctt' },
      { path: 'conunitgraph', component: ConunitgraphComponent, outlet: 'cug' },
      { path: 'condistancegraph', component: CondistancegraphComponent, outlet: 'cdg' },
      { path: 'conexpendituregraph', component: ConexpendituregraphComponent, outlet: 'ceg' },

    ]
  },

  { path: 'jbthankyou', component: JbthankyouComponent },

  {
    path: 'truckerdashboard', component: TruckerdashboardComponent,
    children:
    [
      { path: 'truckeravailablejobs', component: TruckeravailablejobsComponent, outlet: 'taj' },   /* taj = trucker available jobs */ 
      { path: 'truckerjobapplication', component: TruckerjobapplicationComponent, outlet: 'tja' },
      { path: 'truckerpersonalprofile', component: TruckerpersonalprofileComponent, outlet: 'tpp' },
      { path: 'truckerpublicprofile', component: TruckerpublicprofileComponent, outlet: 'tpup' },
      { path: 'truckerawardedjobs', component: TruckerawardedjobsComponent, outlet: 'tawj' },
      { path: 'truckercompletedjobs', component: TruckercompletedjobsComponent, outlet: 'tcj' },
      { path: 'truckerunitstatus', component: TruckerunitstatusComponent, outlet: 'tus' },
      { path: 'truckerdistancetravelledstatus', component: TruckerdistancetravelledstatusComponent, outlet: 'tds' },
      { path: 'truckerearningstatus', component: TruckerearningstatusComponent, outlet: 'tes' },
      { path: 'truckerrecommendationstatus', component: TruckerrecommendationstatusComponent, outlet: 'trs' },

    ]
  },

  { path: 'truckersignup', component: TruckersignupComponent },
  { path: 'consignup', component: ConsignupComponent },
  { path: 'conlogin', component: ConloginComponent },
  { path: 'truckerlogin', component: TruckerloginComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }