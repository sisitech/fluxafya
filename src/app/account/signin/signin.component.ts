import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})


export class SigninComponent implements OnInit {
 
   USERS = [
    {
      name: 'Dennis Sigei',
      role: 'SA',
      username: 'dsigei@gmail.com',
      password: '#dsigei'
    },
    {
      name: 'Norman Munge',
      role: 'R',
      username: 'normanmunge@gmail.com',
      password: '#munge'
    }
  ]

  public error:any;
  public success:any;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    var email = this.form.value.uname;
    var password = this.form.value.password;

    console.log(this.USERS, 'email:', email, 'password:', password);

    for(let a=0; a < this.USERS.length; a++){
      if(email == this.USERS[a].username && password == this.USERS[a].password){
        console.log('great')
        this.success = 'Successfully Logged In';
        localStorage.setItem('userProfile', JSON.stringify(this.USERS[a]));
        this.router.navigate(['/dashboard'])
        return;
      }else{
        console.log('wrong')
        this.error = 'Wrong Email/Password Combination',
        this.router.navigate(['/account/signin'])
      }
    }
    this.router.navigate(['/']);
  }
}
