import { Component, OnInit } from '@angular/core';
import { IPolicy } from './policy';
import { PolicyService } from './policy.service';
import { NGXLogger } from 'ngx-logger';

@Component({
    templateUrl: './policy-list.component.html',
    providers: [NGXLogger, PolicyService]
})
export class PolicyListComponent implements OnInit {
    pageTitle: string = 'Policy List';
    policies: IPolicy[] = [];
    errorMessage: string;

    constructor(private _policyService: PolicyService, private logger: NGXLogger) {

    }

    ngOnInit(): void {
        this.logger.info("bfdndshs jdskds f");
        this._policyService.getPolicies()
        .subscribe(policies => this.policies = policies, error => this.errorMessage = <any>error);
        this.logger.info("bfdndshs jdskds f" + this.policies.length);
    }

}