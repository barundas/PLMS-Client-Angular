import { Component, OnInit } from '@angular/core';
import { IPolicy } from './policy';

@Component({
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css']
})
export class PolicyDetailComponent implements OnInit {

  pageTitle: string = 'Policy Detail';

  policyDetail: IPolicy;

  constructor() { }

  ngOnInit() {
  }

}
