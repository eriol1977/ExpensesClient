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
    expense: Expense;
    
    constructor(
        private expensesService: ExpensesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    
    ngOnInit(): void { 
        this.route.params
                .switchMap((params: Params) =>
                 this.expensesService.getExpense(+params['id']))
                .subscribe(expense => this.expense = expense);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.expensesService.update(this.expense).then(() => this.goBack());
    }
}





