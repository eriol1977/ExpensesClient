import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import { ExpensesService } from './expenses.service';

@Component({
  selector: 'expenses',
  templateUrl: './expenses.component.html',
  styleUrls: [ './expenses.component.css' ]
})

export class ExpensesComponent { 
    expenses : Expense[] = [];
    selectedExpense: Expense;
    
    constructor(private expensesService: ExpensesService) { }
    
    getExpenses(): void {
        this.expensesService.getExpenses().then(expenses => this.expenses = expenses);
    }
    
    ngOnInit(): void {
        this.getExpenses();
    }
}