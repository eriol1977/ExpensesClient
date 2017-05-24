import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseTypesComponent }   from './expense-types.component';
import { ExpenseTypeUpdateComponent }   from './expense-type-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/types', pathMatch: 'full' },
  { path: 'types',  component: ExpenseTypesComponent },
  { path: 'type-update/:id',  component: ExpenseTypeUpdateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
