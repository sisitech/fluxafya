import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from 'src/app/shared/provider/provider.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.scss']
})
export class TriageComponent implements OnInit {
  triageform:FormGroup;

  success:any;
  failed:any;
  patient_id:any;
  listbutton: boolean = false;

  constructor(private fb:FormBuilder, private registerService:ProviderService, private route:Router, private router:ActivatedRoute) { 
    this.triageform = this.fb.group({
      weight: [null, Validators.compose([Validators.required])],
      temperature: [null, Validators.compose([Validators.required])],
      bp_diastolic: [null, Validators.compose([Validators.required])],
      bp_systolic: [null, Validators.compose([Validators.required])],
      symptoms: [null],
      allergies: [null],
      urgency: [null]
    });
  }

  ngOnInit() {
    // get passed id from patient clicked from triage list
    this.patient_id = this.router.snapshot.paramMap.get('id')

    if (this.patient_id === null) {
      this.route.navigate(['/triage'])
    }
    
  }

  ngOnDestroy(){
    this.patient_id = null
  }

  
  /** Register new triage with patient information */
  registerTriage(){
    this.registerService.registerTriage(this.triageform.value, this.patient_id).subscribe(data => {
      console.log(data)
      let dat:any = data
      this.triageform.reset()
      this.success = 'Successful registered and sent patient to triage'
      this.listbutton = true;
      // this.route.navigate(['/finance/see-patient'])
      //if (data) {
         //this.sendToTriage(dat.id)
      //}
    },error => {
      console.log(error)
      if (error.weight) {
        this.failed = error.weight
      } else {
        this.failed = 'Failed to add triage form'
      }
    })
  }
}
