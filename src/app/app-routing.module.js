"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var expense_types_component_1 = require("./expense-types.component");
var expense_type_update_component_1 = require("./expense-type-update.component");
var expenses_component_1 = require("./expenses.component");
var expense_component_1 = require("./expense.component");
var routes = [
    { path: '', redirectTo: '/expenses', pathMatch: 'full' },
    { path: 'types', component: expense_types_component_1.ExpenseTypesComponent },
    { path: 'type-update/:id', component: expense_type_update_component_1.ExpenseTypeUpdateComponent },
    { path: 'expenses', component: expenses_component_1.ExpensesComponent },
    { path: 'expense/:id', component: expense_component_1.ExpenseComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map