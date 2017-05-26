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
var expenses_service_1 = require("./expenses.service");
var ExpensesComponent = (function () {
    function ExpensesComponent(expensesService) {
        this.expensesService = expensesService;
        this.expenses = [];
    }
    ExpensesComponent.prototype.getExpenses = function () {
        var _this = this;
        this.expensesService.getExpenses().then(function (expenses) { return _this.expenses = expenses; });
    };
    ExpensesComponent.prototype.addExpense = function (date, typeId, value, notes) {
        var _this = this;
        if (!date || !typeId || !value || !notes) {
            return;
        }
        this.expensesService.create(date, typeId, value, notes)
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
        this.getExpenses();
    };
    return ExpensesComponent;
}());
ExpensesComponent = __decorate([
    core_1.Component({
        selector: 'expenses',
        templateUrl: './expenses.component.html',
        styleUrls: ['./expenses.component.css']
    }),
    __metadata("design:paramtypes", [expenses_service_1.ExpensesService])
], ExpensesComponent);
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=expenses.component.js.map