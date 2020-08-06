import { HardCodedAuthService } from './../service/login/hard-coded-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAuthService:HardCodedAuthService) { }

  ngOnInit(): void {
    this.hardCodedAuthService.logout();
    
  }

}
