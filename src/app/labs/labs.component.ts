import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendDoctor() {
    this.router.navigate(['/pharmacy']);
  }

}
