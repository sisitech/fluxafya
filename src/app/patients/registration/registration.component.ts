import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/shared/provider/provider.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  searchform:FormGroup
  searchClicked:boolean = false;
  search_failed:any;

  constructor(private fb:FormBuilder, private registerService:ProviderService) { 
    this.searchform = this.fb.group({
      identity: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  searchPatient(){
    /** activate this function once api is live */

    /** search the patient based on their id and phone number */
    // this.registerService.searchPatient(this.searchform.value.identity).subscribe(resp => {
    //   if(resp){
    //     this.searchClicked = true;
    //   }
    // },error => {
    //     this.search_failed = 'Failed to search. Kindly, check your interent connection'
    // })

    /** remove once endpoint is active */
  	this.searchClicked = true;
  }

}
