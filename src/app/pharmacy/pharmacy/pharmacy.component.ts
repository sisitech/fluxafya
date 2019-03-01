import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {

  drugForm: FormGroup;

  addDrug: any = [];
  adddrugform = false;
  drugs: any;
  drugname: any;
 item:any
  drugelements: any = [];
  dosageelements: any = [];

  constructor(private fb: FormBuilder) {
    const name = new FormControl('', Validators.required);
    const dosage = new FormControl('', Validators.required);

    this.drugForm = this.fb.group({
      name: this.fb.array([]),
      dosage: this.fb.array([]),
    });

    // this.drugForm = new FormGroup({
    //   name: name,
    //   dosage: dosage,
    // });
  }

  ngOnInit() {
    this.drugs = [{name: 'Panadol'} , {name: 'Calpol'}, {name: 'Flu Gone'},  {name: 'Heart Burn'}];
  }

  onSubmit() {}

  // tslint:disable-next-line:member-ordering
  drugArray = [];
  onSelectDrug(any) {
    console.log(this.addDrug, 'compare', this.drugelements.length );
    const dt: any = {};
    const dArr = [];
    for (let i = 0; i < this.addDrug.length; i++) {
      dt.drugname = this.addDrug[i];
      dArr.push(dt);
    }
    this.drugArray = dArr;

    console.log(this.drugArray, 'sdsdsdsdssdsdsdsdsdsdsdsdsdsds');

    if (this.addDrug.length > this.drugelements.length && this.addDrug.length > this.dosageelements.length) {
      if (this.drugelements.length < 1 && this.dosageelements.length < 1) {
        console.log('adding');
        this.addDrugForm(this.drugArray[0]);
      }
    } else {
      console.log('remove');
      // tslint:disable-next-line:no-unused-expression
      this.drugelements.value;
      console.log(this.drugelements.value, this.drugArray);
      this.removeDrugForm(this.drugArray[0]);
    }
  }

  addDrugForm(drug) {
    // for (let i = 0; i < type; i++) {
      console.log(drug, 'sdsd', this.drugelements);
      this.adddrugform = true;
      this.drugelements = this.drugForm.get('name') as FormArray;
      this.dosageelements = this.drugForm.get('dosage') as FormArray;


        if (drug !== this.drugelements.value.drug) {
            this.drugelements.push(new FormControl({value: drug, disabled: true}, Validators.required));
            this.dosageelements.push(new FormControl('', Validators.required));
        }

      console.log(this.drugelements, this.dosageelements);
    // }
  }

  removeDrugForm(drug) {
    console.log(drug, 'sdsd', this.drugelements.value.drug);
    if (drug === this.drugelements.value.drug) {
      this.drugelements.value.pop();
      this.dosageelements.value.pop();
      this.drugArray.pop();
    }
  }
}
