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

  makeRequest(data: NgForm) {
    console.warn('entered login form submit area')
    console.warn(data.value)
    this.userFetch = data.value.username;
    this.passFetch = data.value.password;
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
