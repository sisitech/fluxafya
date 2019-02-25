import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  lab_yes = false;
  lab_no = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {}

  finishFunction():void {
    // do nothing
    console.log('Ok Doc')
  }

  onCheckedLabYes(element) {
    // console.log(element.checked, 'checked event');
   if (element.checked === true) {
        this.lab_no = false;
        this.lab_yes = true;
     }
  }

  onCheckedLabNo(element) {
    // console.log(element.checked, 'checked event');
   if (element.checked === true) {
      this.lab_no = true;
      this.lab_yes = false;
     }
 }
}
