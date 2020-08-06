import { Router } from '@angular/router';
import { RegistrationService } from './../service/register/registration.service';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder,private registrationService:RegistrationService) { }
  
  ngOnInit(): void {
    this.RegistrationForm = this.formBuilder.group({
      userName: new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required, Validators.minLength(5)]),
      passwordConfirm :new FormControl('',[Validators.required]),
      roles: new FormControl('',[Validators.required])
      }, {
        validator: MustMatch('password', 'passwordConfirm')
    }
        
      );
  }
  


 

register(){
  const registrationFields = this.RegistrationForm.value
  const user ={
    userName : registrationFields.userName,
    password: registrationFields.password,
    passwordConfirm: registrationFields.passwordConfirm,
    roles : registrationFields.roles
  };
  console.log(user)
  this.registrationService.createUser(user)
            .subscribe(data=>{
              console.log(data)
              this.router.navigate(['login'])
             },
            error =>{
              console.log(error)
              this.router.navigate(['**'])
            }
            

            )
}

}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}