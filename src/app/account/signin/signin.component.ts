import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ProviderService } from 'src/app/shared/provider/provider.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})


export class SigninComponent implements OnInit {

  USERS = [
    {
      name: 'Dennis Sigei',
      role: 'FA',
      username: 'dsigei@gmail.com',
      password: '#dsigei'
    },
    {
      name: 'Norman Munge',
      role: 'R',
      username: 'normanmunge@gmail.com',
      password: '#munge'
    },
    {
      name: 'FluxAfya Administrator',
      role: 'SA',
      username: 'admin',
      password: 'admin123'
    },
    {
      name: 'Hospital Administrator',
      role: 'A',
      username: 'hospital',
      password: 'admin123'
    },
    {
      name: 'Jane Doe',
      role: 'P',
      username: 'patient',
      password: 'admin123'
    },
    {
      name: 'Finance Administrator',
      role: 'F',
      username: 'finance',
      password: 'admin123'
    },
    {
      name: 'Triage Administrator',
      role: 'T',
      username: 'triage',
      password: 'admin123'
    },
    {
      name: 'Lab Administrator',
      role: 'L',
      username: 'lab',
      password: 'admin123'
    },
    {
      name: 'Reception Administrator',
      role: 'R',
      username: 'reception',
      password: 'admin123'
    },
    {
      name: 'Reception - Finance Administrator',
      role: 'RF',
      username: 'recfinance',
      password: 'admin123'
    },
    {
      name: 'Pharmacy Administrator',
      role: 'PH',
      username: 'pharmacy',
      password: 'admin123'
    },
    {
      name: 'Doctor Account',
      role: 'D',
      username: 'doctor',
      password: 'admin123'
    }
  ];

  public error: any;
  public success: any;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private loginService: ProviderService) { }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  // onSubmit() {
  //   var email = this.form.value.uname;
  //   var password = this.form.value.password;

  //   console.log(this.USERS, 'email:', email, 'password:', password);

  //   for(let a=0; a < this.USERS.length; a++){
  //     if(email == this.USERS[a].username && password == this.USERS[a].password){
  //       console.log('great')
  //       this.success = 'Successfully logged in ... ';
  //       localStorage.setItem('userprofile', JSON.stringify(this.USERS[a]));
  //       this.router.navigate(['/dashboard'])
  //       return;
  //     }else{
  //       console.log('wrong')
  //       this.error = 'Wrong email-password combination',
  //       this.router.navigate(['/account/signin'])
  //     }
  //   }
  //   this.router.navigate(['/']);
  // }
  onSubmit() {

    this.router.navigate(['/patients/register']);

    //   // this.loading = true;
    //  this.loginService.login(this.form.value.uname, this.form.value.password ).subscribe(data => {
    //      const userprofile = JSON.parse(localStorage.getItem('userprofile'));
    //       console.log(userprofile);
    //      // this.loading = false;
    //        // localStorage.setItem('token', data.access_token);
    //       // this.form.reset();
    //       // this.route.navigate(['/students']);
    //        this.router.navigate(['/patients/register']);
    //        // this.loading = false;
    //    }, error => {
    //      console.log(error);
    //      let err = '';
    //      if (error === 'invalid_grant') {
    //        err = 'Username/Password mismatch';
    //      } else {
    //        err = 'Kindly check your internet connection or Kindly contact your server administrator';
    //      }
    //    });
  }
}
