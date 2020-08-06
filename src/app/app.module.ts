import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReserveTuitionComponent } from './reserve-tuition/reserve-tuition.component';
import { SubmitGradeComponent } from './submit-grade/submit-grade.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReservedTuitionsComponent } from './reserved-tuitions/reserved-tuitions.component';
import { SubmittedGradesComponent } from './submitted-grades/submitted-grades.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ReserveTuitionComponent,
    SubmitGradeComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    LogoutComponent,
    RegistrationComponent,
    ReservedTuitionsComponent,
    SubmittedGradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
