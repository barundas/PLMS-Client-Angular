import { Component } from '@angular/core';
import { PolicyService } from './policies/policy.service';

@Component({
  selector: 'plms-root',
  template: `
  <div>
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a><br>
        <ul class='nav navbar-nav'>
          <li><a [routerLink]="['/welcome']">Home</a></li>
          <li><a [routerLink]="['/policies']">Policy List</a></li>
          <li><a [routerLink]="['/welcome']">Register</a></li>
          <li><a [routerLink]="['/policies']">About Us</a></li>
          <li><a href="mailto:barun.das@gmail.com?subject=Need Information">Contact Us</a></li>
        </ul>
      </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Policy Management System';
}
