import { Component, OnInit } from '@angular/core';
import { IPolicy } from './policy';

@Component({
    selector: 'plms-policies',
    templateUrl: './policy-list.component.html'
})
export class PolicyListComponent implements OnInit {
    pageTitle: string = 'Policy List';
    policies: IPolicy[] = [
        {
            "policyKey": 1,
            "policyName": "Jeevan Sudha",
            "policyCode": "LIC-001",
            "policyDescription": "fbbubu  b eiubfufufbebfubfue",
            "eligibleMinAge": 6,
            "eligibleMaxAge": 70,
            "policyInceptionDate": "22/12/1977"
        },
        {
            "policyKey": 2,
            "policyName": "Jeevan Sudha II",
            "policyCode": "LIC-002",
            "policyDescription": "fbbubu  b eiubfufufbebfubfueijfoijfjfo",
            "eligibleMinAge": 6,
            "eligibleMaxAge": 70,
            "policyInceptionDate": "22/12/1977"
        }
    ];

    constructor(private _policyService: PolicyService) {

    }

    ngOnInit(): void {
        this.policies = this._policyService.getPolicies();
    }
}