import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/shared/provider/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  searchform:FormGroup;
  registerform:FormGroup;
  searchClicked:boolean = false;
  listSearchedPatients:boolean = false;
  notRegistered:boolean = false;
  search_failed:any;
  patients:any = [];
  patient_name:any;
  patient_gender:any;
  patient_phone:any;
  patient_dob:any;
  patient_national_id;
  patient_insurance:any;
  patient_insurance_number:any;
  patient_address:any;
  patient_has_nhif:any;

  success:any;
  failed:any;
  insurance_number_field:boolean = true;

  page:number = 1;

  constructor(private fb:FormBuilder, private registerService:ProviderService, private route:Router) { 
    this.searchform = this.fb.group({
      identity: [null, Validators.compose([Validators.required])]
    });

    this.registerform = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.compose([Validators.required])],
      dob: [null],
      phone: [null, Validators.compose([Validators.required])],
      physical_address: [null],
      national_id: [null, Validators.compose([Validators.required])],
      insurance_number: [],
      insurance: [],
      has_nhif: [],
      // registered_by: [],
      registered_hospital: []
    })
  }

  ngOnInit() {
  }

  onSelectAction(){
    console.log(this.registerform.get('insurance').value)
    let event = this.registerform.get('insurance').value
    if(event === 'None') {
      this.insurance_number_field = false
    } else {
      this.insurance_number_field = true
    }
    
  }

  /** search the patient based on their national id */
  searchPatient(){
    this.registerService.searchPatient(this.searchform.value.identity).subscribe(resp => {
      let data:any = resp;
      console.log(data);
      if(data.results.length < 1) {
        this.listSearchedPatients = false;
        this.notRegistered = true;
        this.searchClicked = true;
      } else {
        this.patients = data.results;
        this.listSearchedPatients = true;
      }
    },error => {
        this.search_failed = 'Failed to search. Kindly, check your interent connection'
    })

    /** remove once endpoint is active */
  	// this.searchClicked = true;
  }

  
  /** get selected patient details */
  fetchPatientDetails(e){
    console.log(e);
    this.patient_name = e.name;
    this.patient_gender = e.gender;
    this.patient_phone = e.phone;
    this.patient_dob = e.dob;
    this.patient_national_id = e.national_id
    
    if (e.has_nhif === true) {
      this.patient_has_nhif = true;
    } else {
      this.patient_has_nhif = false;
    }

    if (e.insurance === null) {
      this.patient_insurance = 'N/A'
    } else {
      this.patient_insurance = e.insurance
    }

    if (e.insurance_number === null) {
      this.patient_insurance_number = 'N/A'
    } else {
      this.patient_insurance_number = e.insurance_number
    }

    if (e.physical_address === null) {
      this.patient_address = 'N/A'
    } else {
      this.patient_address = e.physical_address
    }
    this.notRegistered = false;
    this.listSearchedPatients = false;
    this.searchClicked = true;
  }

  /** Create Triage Patient Form */
  sendToTriage(id) {
    this.registerService.createTriagePatientForm(id).subscribe(resp => {
      if(resp) {
        // hides the register form and removes the error if a patient is not found when searched
        this.notRegistered = true;
        this.registerform.reset();
        // add notification to show successful
        this.success = 'Successful registered/ sent to triage'
        this.route.navigate(['/triage/see-patient'])
      }
    }, error => {
      this.failed = 'Failed to send to triage'
    })
  }

  /** Register new patient */
  registerPatient(){
    console.log('jjaps')
    this.registerService.registerPatient(this.registerform.value).subscribe(data => {
      console.log(data)
      let dat:any = data
      if (data) {
        this.sendToTriage(dat.id)
      }
    },error => {
      console.log(error)
    })
  }
}
