"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var expenses_service_1 = require("./expenses.service");
var expense_types_service_1 = require("./expense-types.service");
var ExpensesComponent = (function () {
    function ExpensesComponent(expensesService, typesService, router) {
        this.expensesService = expensesService;
        this.typesService = typesService;
        this.router = router;
        this.expenses = [];
    }
    ExpensesComponent.prototype.getExpenses = function () {
        var _this = this;
        this.expensesService.getExpenses().then(function (expenses) { return _this.expenses = expenses; });
    };
    ExpensesComponent.prototype.getExpensesByDate = function (date) {
        var _this = this;
        this.expensesService.getExpensesByDate(date).then(function (expenses) { return _this.expenses = expenses; });
    };
    ExpensesComponent.prototype.getTypes = function () {
        var _this = this;
        this.typesService.getTypes().then(function (types) { return _this.types = types; });
    };
    ExpensesComponent.prototype.addExpense = function (date, value, notes) {
        var _this = this;
        if (!date || !this.selectedType || !value) {
            return;
        }
        this.expensesService.create(date, this.selectedType, value, notes)
            .then(function (expense) {
            _this.expenses.push(expense);
            _this.selectedExpense = null;
        });
    };
    ExpensesComponent.prototype.deleteExpense = function (expense) {
        var _this = this;
        this.expensesService
            .delete(expense.id)
            .then(function () {
            _this.expenses = _this.expenses.filter(function (e) { return e !== expense; });
            if (_this.selectedExpense === expense) {
                _this.selectedExpense = null;
            }
        });
    };
    ExpensesComponent.prototype.ngOnInit = function () {
        this.selectedDate = new Date().toISOString().substring(0, 10);
        this.getExpensesByDate(this.selectedDate);
        this.getTypes();
    };
    ExpensesComponent.prototype.updateExpense = function (expense) {
        this.router.navigateByUrl('/expense/' + expense.id);
    };
    ExpensesComponent.prototype.onChangeDate = function (date) {
        this.selectedDate = date;
        this.showAll = false;
        this.getExpensesByDate(this.selectedDate);
    };
    ExpensesComponent.prototype.onShowAllChanged = function () {
        if (this.showAll)
            this.getExpenses();
        else
            this.getExpensesByDate(this.selectedDate);
    };
    return ExpensesComponent;
}());
ExpensesComponent = __decorate([
    core_1.Component({
        selector: 'expenses',
        templateUrl: './expenses.component.html'
    }),
    __metadata("design:paramtypes", [expenses_service_1.ExpensesService, expense_types_service_1.ExpenseTypesService, router_1.Router])
], ExpensesComponent);
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=expenses.component.js.map