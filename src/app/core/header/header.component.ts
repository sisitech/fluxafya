import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  heading: string;
  @Output()
  toggleSidenav = new EventEmitter<void>();

  username:any;
  userinitials:any;

  constructor(private router: Router){
    let profile = JSON.parse(localStorage.getItem('userprofile'));
    console.log(profile);
  	this.username = profile.first_name + ' ' + profile.last_name ;
  	let initialA = profile.first_name[0].charAt(0).toUpperCase()
  	let initialB = profile.last_name[1].charAt(0).toUpperCase()
  	this.userinitials = initialA+initialB

  }

  logout(){
  	localStorage.clear()
  	this.router.navigate(['account/signin'])
  }
}
