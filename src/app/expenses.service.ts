import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Expense} from './expense';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ExpensesService {
    private url = 'http://ec2-52-41-136-68.us-west-2.compute.amazonaws.com/expenses/rest/expenses';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}
    
    getExpenses(): Promise<Expense[]> {
        return this.http.get(this.url)
                           .toPromise()
                           .then(response => response.json() as Expense[])
                           .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


