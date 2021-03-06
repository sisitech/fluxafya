import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/shared/provider/provider.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private providerService: ProviderService, private router: Router) { }

  ngOnInit() {

    this.getPatientsList();
  }

  allPatientsRegistered: any;

  seePatient() {

    this.router.navigate(['/labs/see-patient']);

  }

  getPatientsList() {
    this.providerService.getPatients().subscribe(dat => {
      let data = dat as any;


      data.results.map(patients => {

        return patients
      })
      this.allPatientsRegistered = data.results
      console.log(this.allPatientsRegistered, 'showing patients');


      // this.loading = false;

    }, error => {
      // this.loading = false;
      console.log(error);
    });

  }

}
