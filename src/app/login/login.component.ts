import { BasicAuthService } from './../service/login/basic-auth.service';
import { HardCodedAuthService } from './../service/login/hard-coded-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router : Router,
    private hardCodedAuthService: HardCodedAuthService,
    private basicAuthService : BasicAuthService
    ) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardCodedAuthService.authenticate(this.username, this.password)){
     this.router.navigate(['welcome'])
     console.log(this.basicAuthService.isUserLoggedIn())
     this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

  handleBasicAuthLogin(){
    this.basicAuthService.executeBasicAuthBean(this.username, this.password)
            .subscribe(
                data=>{
                  console.log(data)
                  this.router.navigate(['welcome'])
                  console.log(this.invalidLogin)
                  this.invalidLogin = false
                },
                error=>{
                  console.log(error)
                  this.invalidLogin=true
                }

            )
  }

 



}
