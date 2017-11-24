import { Component } from '@angular/core';
import { PolicyService } from './policies/policy.service';

@Component({
  selector: 'plms-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <div>
      <plms-policies></plms-policies>
    </div>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Policy Management System';
}
