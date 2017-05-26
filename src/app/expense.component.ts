import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Expense } from './expense';
import { ExpensesService } from './expenses.service';

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html'
})

export class ExpenseComponent implements OnInit {
    action: string;
    id: number;
    expense: Expense = this.expensesService.getNewExpense();
    
    constructor(
        private expensesService: ExpensesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.action = params['action'];
            this.id = params['id'];
        });
        if(this.action == 'update') {
            this.expensesService.getExpense(this.id).then(expense => this.expense = expense);
        }
        
//        this.route.params
//                .switchMap((params: Params) =>
//                 this.expensesService.getExpense(+params['id']))
//                .subscribe(expense => this.expense = expense);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        if(this.route.params['action'] == "add")
            this.expensesService.update(this.expense).then(() => this.goBack());
        else
            this.expensesService.create(this.expense).then(() => this.goBack());
    }
}





