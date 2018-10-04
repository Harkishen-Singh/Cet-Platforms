import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AppComponent } from './app.component';

var routes: Route = [
  {
    path:'login',
    component: LoginScreenComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    // NgModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
