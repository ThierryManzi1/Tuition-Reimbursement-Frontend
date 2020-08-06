import { SubmittedGradesComponent } from './submitted-grades/submitted-grades.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouteGuardService } from './service/secureRoute/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { SubmitGradeComponent } from './submit-grade/submit-grade.component';
import { ReserveTuitionComponent } from './reserve-tuition/reserve-tuition.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ReservedTuitionsComponent } from './reserved-tuitions/reserved-tuitions.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegistrationComponent},
  {path:'welcome',component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'tuition/:id', component: ReserveTuitionComponent, canActivate:[RouteGuardService]},
  {path:'reservedTuitions', component: ReservedTuitionsComponent, canActivate:[RouteGuardService]},
  {path:'grade/:id', component: SubmitGradeComponent, canActivate:[RouteGuardService]},
  {path:'submittedGrades', component: SubmittedGradesComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent,canActivate:[RouteGuardService]},
  {path:'error', component: ErrorComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
