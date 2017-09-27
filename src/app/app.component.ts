import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
 
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fullName: string = 'ramesh rajendran';

    constructor(private titlecasePipe:TitleCasePipe ) { }

    transformName(){
        this.fullName = this.titlecasePipe.transform(this.fullName);
}
}
