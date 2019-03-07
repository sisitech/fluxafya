import { Component, Injectable } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { BaseUrl} from '../../../environments/environment';
import * as moment from 'moment';



@Injectable({providedIn: 'root'})
export class ProviderService {

  // tslint:disable-next-line:max-line-length
  constructor( private _router: Router, private activatedRouter: ActivatedRoute, private http: HttpClient) {
      // this.initializeheaders();
     }


    public err;
    private baseApiUrl = BaseUrl.base_api_url;
    // public authheaders = new HttpHeaders()
    public loginheaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    public requestheaders = new HttpHeaders().set('Content-Type', 'application/json');
    // authheaders = authheaders.set('authorization', 'Bearer ' + token)

    initializeheaders(token) {
      // check if the token has expired
      // then refresh it if it has
      const authheaders = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        });

      localStorage.setItem('headers', JSON.stringify(authheaders));
      // return authheaders;
    }


  storagesavetoken(token) {
    console.log(token);
    return localStorage.setItem('token', token);
  }

  storeuserprofile(user) {
    // // //console.log(user, 'this is the user profile')
    return localStorage.setItem('userprofile', JSON.stringify(user));
  }


  getuserheaders() {
    const token = this.getusertoken();

    // // //console.log (token, 'imerudi')

    const authheaders = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return JSON.parse(localStorage.getItem('headers'));
  }

  getusertoken() {
    return localStorage.getItem('token');
  }


  login(username: string, password: string) {

    // tslint:disable-next-line:class-name
    interface loginResponse {
      access_token: string;
      expires_in: any;
      refresh_token: any;
    }
    // tslint:disable-next-line:class-name
    interface profileResponse {
      first_name: string;
      last_name: string;
      role: string;
    }

    return this.http.post<loginResponse>(this.baseApiUrl + 'o/token/',
    // localhost
    // 'username=' + username + '&password=' + password + '&grant_type=password&client_id=QK5b0tHlYpgG8xU4rl8wVeEJ0BnCJSUBZTEf8Yr2',

      // online
      'username=' + username + '&password=' + password + '&grant_type=password&client_id=btAyFFBY16Af17BokR4xYM8i4oksX2aUgedOM2AQ',
     { headers: this.loginheaders })
    .mergeMap(resp => {
      console.log(resp, 'jhghjgf');
      // get how long the access token will run untile expiring after signing in
      const tokenExpiryTime = resp.expires_in;

      const refreshToken = resp.refresh_token;

      // get the current time of signing in and store it in localstorage
      const now = moment().valueOf();
      this.storagesavetoken(resp.access_token);
      localStorage.setItem('tokenExpiryTime', JSON.stringify(now));

      localStorage.setItem('refresh_token', JSON.stringify(refreshToken));

      const authheaders = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + resp.access_token
        });
      // // get the user profile
      const _userProfile = this.baseApiUrl + 'api/v1/users/me/profile';
      return this.http.get<profileResponse>(_userProfile, {headers: authheaders})
      .map(response => {
        // store the user profile based on Observable Response
        console.log(response);
        this.storeuserprofile(response);
        });
        // get the programs
        // const _programUrl = this.baseApiUrl+'api/v1/programmes'
        // return this.http.get(_programUrl)
    }).catch(this.errorHandler)
    .catch(this.errorHandler);
  }


  isTokenExpired() {
    // get the value of the stored signin time
    const ExpiryTime = JSON.parse(localStorage.getItem('tokenExpiryTime'));

    // get refresh token
    const refresh_token = JSON.parse(localStorage.getItem('refresh_token'));
    // get the current time
    const now = moment().valueOf();

    // addd expiry time to an additional 50 minutes and transform it into milliseconds
    const afternow = moment(ExpiryTime).add(50, 'm').toDate();
    const nowAfter = moment(afternow).valueOf();

    // if the user had chcecked the remember Me;
    const rememberMe = localStorage.getItem('rememberMe');
      // // //console.log(rememberMe, 'time logged in', ExpiryTime, 'time should expire', nowAfter, 'current time', now);
     // url to redirect to dashboard if it's activated
     const returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'] || '/home';

    // if the current time is greater than the stored expiry then refresh the token
    if ( now > nowAfter && rememberMe === 'true') {

      // // //console.log('1');

      // tslint:disable-next-line:class-name
      interface tokenExpiredResponse {
        access_token: string;
        expires_in: string;
      }
      return this.http.post<tokenExpiredResponse>(this.baseApiUrl + 'o/token/',
      // localhost
      // 'refresh_token=' + refresh_token + '&grant_type=refresh_token&client_id=QK5b0tHlYpgG8xU4rl8wVeEJ0BnCJSUBZTEf8Yr2',

      // online
      'refresh_token=' + refresh_token + '&grant_type=refresh_token&client_id=btAyFFBY16Af17BokR4xYM8i4oksX2aUgedOM2AQ',
      { headers: this.loginheaders }).map(data => {

        // // //console.log(data, 'after refreshing token')
        this.initializeheaders(data.access_token);
        const tokenExpiryTime = data.expires_in;
        this.storagesavetoken(data.access_token);
        localStorage.setItem('tokenExpiryTime', tokenExpiryTime);
        this._router.navigate([returnUrl]);
      })
      .catch(this.errorHandler);
    } else if ( now < nowAfter && rememberMe === 'true') {

      // // //console.log('2');
      this._router.navigate([returnUrl]);
    } else {
      // // //console.log('3');
      this.logout();
    }
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/signin']);
  }

    /**PASSWORDS*/
    changePassword(user: any) {

      // assign the url like below
        const _changePasswordRegistrationUrl = this.baseApiUrl + 'api/v1/users/me/change-password';
        // const body = JSON.stringify(user);

        const body = {
          old_password: user.oldPass,
          new_password: user.newPass
        };

        const token = this.getusertoken();

        const authheaders = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        });

        return this.http.put(_changePasswordRegistrationUrl, body, {headers: authheaders})
          .map(this.extractData)
          .catch(this.errorHandler);

    }


    forgotPassword(user: any) {

      // assign the url like below
        const _changePasswordRegistrationUrl = this.baseApiUrl + 'api/v1/users/forgot-password';
        // const body = JSON.stringify(user);

        const body = {
          email: user.email,
        };

        const token = this.getusertoken();

        const authheaders = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        });

        return this.http.post(_changePasswordRegistrationUrl, body, {headers: authheaders})
          .map(this.extractData)
          .catch(this.errorHandler);

    }

    resetPassword(user: any, username) {

      // assign the url like below
        const _changePasswordRegistrationUrl = this.baseApiUrl + 'api/v1/users/reset-password';
        // const body = JSON.stringify(user);

        const body = {
          reset_code: user.resetcode,
          new_password: user.newPass
        };

        const token = this.getusertoken();

        const authheaders = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        });

        return this.http.post(_changePasswordRegistrationUrl, body, {headers: authheaders})
        .mergeMap(res => {
          return this.login(username, user.newPass);
        })
          // .map(this.extractData)
          .catch(this.errorHandler);

    }
    /**END OF PASSWORDS**/

    /** search a patient based on their phone number or id card */
    searchPatient(identity){
      const searchPatientUrl =  this.baseApiUrl + 'api/v1/patients/?national_id=' + identity

      const token = this.getusertoken()
      const authheaders = new HttpHeaders (
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
        }
      );

      return this.http.get(searchPatientUrl, {headers:authheaders})
      .map(this.extractData)
      .catch(this.errorHandler);
    }

    /** register a patient by receptionist if not in system */
    registerPatient(patient){
      console.log(patient)
      const body = {
        name: patient.name,
        gender: patient.gender,
        dob: patient.dob,
        physical_address: patient.dob,
        national_id: patient.national_id,
        insurance: patient.insurance,
        phone: patient.phone,
        insurance_number: patient.insurance_number,
        registered_by: '',
        /** set id of the hospital and make sure you're the admin */
        registered_hospital: '1'
      }
      const registerPatientUrl =  this.baseApiUrl + 'api/v1/patients/'

      const token = this.getusertoken()
      const authheaders = new HttpHeaders (
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
        }
      );

      return this.http.post(registerPatientUrl, body, {headers:authheaders})
      .map(this.extractData)
      .catch(this.errorHandler);
    }

    /** create triage form at registration from receptionist */
    createTriagePatientForm(patient_id) {
      const createTriagePatientUrl =  this.baseApiUrl

      const token = this.getusertoken()
      const authheaders = new HttpHeaders (
        {
          'Content-Type': 'application.json',
          'Authorization': 'Bearer '+ token
        }
      );

      return this.http.post(createTriagePatientUrl, {headers:authheaders})
      .map(this.extractData)
      .catch(this.errorHandler);
    }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }


  private errorHandler(error: any) {
    const err = error.error;
     if (err) {
       return Observable.throw(err);
     } else {
       return Observable.throw(error);
     }
  }

  private loginerror(error: any) {
    // // //console.log("Login error ", error);
    let mess = '';
    const message = !error.url ? null : error.json();
    if (!error.url) {
      // // //console.log(error, 'sdsdsdsdad');
      mess = 'No Internet Connection';
    } else {
      if (message.error_description === 'Invalid credentials given.') {
        mess = 'Confirm the email and password ';
      } else if (message.error) {
        mess = message.error;
      } else {
        mess = 'Confirm the email and password';
      }
    }
    //// // //console.log(mess)
    return Observable.throw(mess);

  }
}
