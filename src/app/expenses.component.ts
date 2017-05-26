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
    
    addExpense(date: string, typeId: number, value: number, notes: string): void {
        if (!date || !typeId || !value || !notes) { return; }
        this.expensesService.create(date,typeId,value,notes)
              .then(expense => {
                this.expenses.push(expense);
                this.selectedExpense = null;
              });
    }
    
    deleteExpense(expense: Expense): void {
        this.expensesService
            .delete(expense.id)
            .then(() => {
                  this.expenses = this.expenses.filter(e => e !== expense);
                  if (this.selectedExpense === expense) { this.selectedExpense = null; }
            });
    }
    
    ngOnInit(): void {
        this.getExpenses();
    }
}