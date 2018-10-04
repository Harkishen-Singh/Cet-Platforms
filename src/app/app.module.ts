import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

var routes: Routes = [
  {
    path:'login',
    component: LoginScreenComponent
  },
  {
    path:'home',
    component: HomeScreenComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    // NgModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
