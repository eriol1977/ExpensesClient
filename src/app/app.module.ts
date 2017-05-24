import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule }         from './app-routing.module';
import { ExpenseTypesService }     from './expense-types.service';
import { ExpenseTypesComponent }     from './expense-types.component';
import { ExpenseTypeUpdateComponent }   from './expense-type-update.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, ExpenseTypesComponent, ExpenseTypeUpdateComponent ],
  providers: 	[ ExpenseTypesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
