import { Injectable } from "@angular/core";
import { IPolicy } from './policy';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class PolicyService{

    private serviceUrl = 'http://localhost:9000/policy/all'; //'./api/products/products.json';

    constructor(private _http: HttpClient) {

    }

    getPolicies(): Observable<IPolicy[]> {
        return this._http.get<IPolicy[]>(this.serviceUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getPolicy(key: number): Observable<IPolicy> {
        return this.getPolicies()
            .map((policies: IPolicy[]) => policies.find(p => p.policyKey === key));
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}