import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cetplatforms';
  public link: boolean = true;
  showIntro: boolean;
  
  ngOnInit() {
    this.showIntro = false;
  }

  loginClicked() {
    console.warn('clicked')
    this.link = false;
  }
}
