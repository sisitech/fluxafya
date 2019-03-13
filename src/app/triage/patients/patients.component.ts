import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/provider/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private providerService: ProviderService, private route: Router) { }

  ngOnInit() {

    this.getTriageList()
  }

  allPatientsTriage:any;

  getTriageList() {
    this.providerService.getTriagePatients().subscribe(dat => {
      let data = dat as any;
      

      data.results.map(patients=>{

        return patients
      })
      this.allPatientsTriage = data.results
      console.log(this.allPatientsTriage, 'showing triage patients');
   
   
      // this.loading = false;

    }, error => {
      // this.loading = false;
       console.log(error);
    });

  }

  /**Norman */
  goToTriage(e) {
    this.route.navigate(['/triage/see-patient', {id: e.id}])
  }
}
