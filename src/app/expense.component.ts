import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Expense } from './expense';
import { ExpenseType } from './expense-type';
import { ExpensesService } from './expenses.service';
import { ExpenseTypesService } from './expense-types.service';

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html'
})

export class ExpenseComponent implements OnInit {
    expense: Expense;
    types: ExpenseType[];
    
    constructor(
        private expensesService: ExpensesService,
        private typesService: ExpenseTypesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    
    ngOnInit(): void { 
        this.route.params
                .switchMap((params: Params) =>
                 this.expensesService.getExpense(+params['id']))
                .subscribe(expense => this.expense = expense);
        
        this.typesService.getTypes().then(types => this.types = types);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.expensesService.update(this.expense).then(() => this.goBack());
    }
    
    compareTypes(type1:ExpenseType, type2:ExpenseType): boolean {
        return type1 && type2 ? type1.id === type2.id : type1 === type2;
    }
}





