import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  private url:string;
  private userFetch: string;
  private passFetch: string;

  constructor(private fetchLoginService : Http) {
    this.url = 'http://0.0.0.0:5000/login';
   }

  ngOnInit() {
  }

  makeRequest(da: NgForm) {
    console.warn('entered login form submit area');
    let data = da.value;
    this.userFetch = data.username;
    this.passFetch = data.password;
    this.fetchLoginService.post(this.url, {
      params: {
        user: this.userFetch,
        pass: this.passFetch
      },
      observe: 'response'
    }).toPromise()
    .then( response => {
      console.warn('response from backend');
      console.warn(response);
    })
    .catch(e => {
      console.error('Error occured for fetching login info');
    });
  }

}
