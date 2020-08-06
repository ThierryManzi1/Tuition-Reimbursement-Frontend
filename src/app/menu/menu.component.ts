import { HardCodedAuthService } from './../service/login/hard-coded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardcodedAuthService: HardCodedAuthService) { }

  ngOnInit(): void {
  }

  isUserLoggedIn(){
    return this.hardcodedAuthService.isUserLoggedIn();
  }
}
