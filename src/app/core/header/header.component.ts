import { Component, EventEmitter, Output, Input } from '@angular/core';

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

  constructor(){
  	let profile = JSON.parse(localStorage.getItem('userProfile'));
  	this.username = profile.name;
  	let initials = profile.name.split(' ')
  	let initialA = initials[0].charAt(0).toUpperCase()
  	let initialB = initials[1].charAt(0).toUpperCase()
  	this.userinitials = initialA+initialB

  }
}
