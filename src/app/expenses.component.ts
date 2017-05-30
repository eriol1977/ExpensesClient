import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Expense } from './expense';
import { ExpenseType } from './expense-type';
import { ExpensesService } from './expenses.service';
import { ExpenseTypesService } from './expense-types.service';

@Component({
  selector: 'expenses',
  templateUrl: './expenses.component.html'
})

export class ExpensesComponent { 
    expenses : Expense[] = [];
    selectedExpense: Expense;
    types: ExpenseType[];
    selectedType: ExpenseType;
    selectedDate: string;
    showAll: boolean;
    
    constructor(private expensesService: ExpensesService, private typesService: ExpenseTypesService, private router: Router) { }
    
    getExpenses(): void {
        this.expensesService.getExpenses().then(expenses => this.expenses = expenses);
    }
    
    getExpensesByDate(date: string): void {
        this.expensesService.getExpensesByDate(date).then(expenses => this.expenses = expenses);
    }
    
    getTypes(): void {
        this.typesService.getTypes().then(types => this.types = types);
    }
    
    addExpense(date: string, value: number, notes: string): void {
        if (!date || !this.selectedType || !value) { return; }
        this.expensesService.create(date,this.selectedType,value,notes)
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
        this.selectedDate = new Date().toISOString().substring(0, 10);
        this.getExpensesByDate(this.selectedDate);
        this.getTypes();
    }
    
    updateExpense(expense: Expense): void {
        this.router.navigateByUrl('/expense/' + expense.id);
    }
    
    onChangeDate(date: string): void {
        this.selectedDate = date;
        this.showAll = false;
        this.getExpensesByDate(this.selectedDate);
    }
    
    onShowAllChanged(): void {
        if (this.showAll)
            this.getExpenses();
        else
            this.getExpensesByDate(this.selectedDate);
    }
}