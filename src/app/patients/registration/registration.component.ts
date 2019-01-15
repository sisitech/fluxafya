import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

	searchClicked:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  searchPatient(){
  	this.searchClicked = true;
  }

}
