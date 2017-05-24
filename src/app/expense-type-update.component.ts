import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ExpenseType } from './expense-type';
import { ExpenseTypesService } from './expense-types.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'expense-type-update',
  templateUrl: './expense-type-update.component.html',
  styleUrls: [ './expense-type-update.component.css' ]
})

export class ExpenseTypeUpdateComponent implements OnInit {
	type: ExpenseType;
	
	constructor(
	  private expenseTypesService: ExpenseTypesService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}
	
	ngOnInit(): void {
	  this.route.params
		.switchMap((params: Params) => this.expenseTypesService.getType(+params['id']))
		.subscribe(type => this.type = type);
	}
	
	goBack(): void {
	  this.location.back();
	}
	
	save(): void {
	  this.expenseTypesService.update(this.type)
		.then(() => this.goBack());
	}
}