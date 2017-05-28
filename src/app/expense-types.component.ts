import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExpenseType } from './expense-type';
import { ExpenseTypesService } from './expense-types.service';

@Component({
  selector: 'expense-types',
  templateUrl: './expense-types.component.html'
})

export class ExpenseTypesComponent { 
  types: ExpenseType[] = [];
  selectedType: ExpenseType;
  
  constructor(private expenseTypesService: ExpenseTypesService, private router: Router) { }
  
  getTypes(): void {
    this.expenseTypesService.getTypes().then(types => this.types = types);
  }
  
  addType(code: string, description: string): void {
	  code = code.trim();
	  description = description.trim();
	  if (!code || !description) { return; }
	  this.expenseTypesService.create(code,description)
		.then(type => {
		  this.types.push(type);
		  this.selectedType = null;
		});
  }
  
  deleteType(type: ExpenseType): void {
	  this.expenseTypesService
		  .delete(type.id)
		  .then(() => {
			this.types = this.types.filter(t => t !== type);
			if (this.selectedType === type) { this.selectedType = null; }
		  });
  }
  
  updateType(type: ExpenseType): void {
        this.router.navigateByUrl('/type-update/' + type.id);
  }
  
  ngOnInit(): void {
    this.getTypes();
  }
}