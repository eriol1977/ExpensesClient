import { Component, OnInit } from '@angular/core';
import { ExpenseType } from './expense-type';
import { ExpenseTypesService } from './expense-types.service';

@Component({
  selector: 'expense-types',
  templateUrl: './expense-types.component.html',
  styleUrls: [ './expense-types.component.css' ]
})

export class ExpenseTypesComponent { 
  types: ExpenseType[] = [];
  selectedType: ExpenseType;
  
  constructor(private expenseTypesService: ExpenseTypesService) { }
  
  getTypes(): void {
    this.expenseTypesService.getTypes().then(types => this.types = types);
  }
  
  add(code: string, description: string): void {
	  code = code.trim();
	  description = description.trim();
	  if (!code || !description) { return; }
	  this.expenseTypesService.create(code,description)
		.then(type => {
		  this.types.push(type);
		  this.selectedType = null;
		});
  }
  
  delete(type: ExpenseType): void {
	  this.expenseTypesService
		  .delete(type.id)
		  .then(() => {
			this.types = this.types.filter(t => t !== type);
			if (this.selectedType === type) { this.selectedType = null; }
		  });
  }
  
  ngOnInit(): void {
    this.getTypes();
  }
}