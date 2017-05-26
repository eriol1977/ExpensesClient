import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule }         from './app-routing.module';
import { ExpenseTypesService }     from './expense-types.service';
import { ExpenseTypesComponent }     from './expense-types.component';
import { ExpenseTypeUpdateComponent }   from './expense-type-update.component';
import { ExpensesComponent }     from './expenses.component';
import { ExpensesService } from './expenses.service';
import { ExpenseComponent }   from './expense.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, ExpenseTypesComponent, ExpenseTypeUpdateComponent, ExpensesComponent, ExpenseComponent ],
  providers: 	[ ExpenseTypesService, ExpensesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
