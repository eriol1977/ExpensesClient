import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {ExpenseType} from './expense-type';
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
    
    getExpense(id: number): Promise<Expense> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
                .toPromise()
                .then(response => response.json() as Expense)
                .catch(this.handleError);
    }
    
    getNewExpense(): Expense {
        var expense = new Expense();
        expense.type = new ExpenseType();
        return expense;
    }
    
    create(expense: Expense): Promise<Expense> {
        return this.http
                .post(this.url, JSON.stringify(expense), {headers: this.headers})
                .toPromise()
                .then(() => expense)
                .catch(this.handleError);
    }
    
    update(expense: Expense): Promise<Expense> {
        const url = `${this.url}`;
        //var dateParts = expense.stringDate.split('-');
        //expense.date = new Date(parseInt(dateParts[0]),parseInt(dateParts[1])-1,parseInt(dateParts[2]));
        //console.log(JSON.stringify(expense));
        return this.http
                .put(url, JSON.stringify(expense), {headers: this.headers})
                .toPromise()
                .then(() => expense)
                .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


