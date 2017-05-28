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
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var expenses_service_1 = require("./expenses.service");
var expense_types_service_1 = require("./expense-types.service");
var ExpenseComponent = (function () {
    function ExpenseComponent(expensesService, typesService, route, location) {
        this.expensesService = expensesService;
        this.typesService = typesService;
        this.route = route;
        this.location = location;
    }
    ExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.expensesService.getExpense(+params['id']);
        })
            .subscribe(function (expense) { return _this.expense = expense; });
        this.typesService.getTypes().then(function (types) { return _this.types = types; });
    };
    ExpenseComponent.prototype.goBack = function () {
        this.location.back();
    };
    ExpenseComponent.prototype.save = function () {
        var _this = this;
        this.expensesService.update(this.expense).then(function () { return _this.goBack(); });
    };
    ExpenseComponent.prototype.compareTypes = function (type1, type2) {
        return type1 && type2 ? type1.id === type2.id : type1 === type2;
    };
    return ExpenseComponent;
}());
ExpenseComponent = __decorate([
    core_1.Component({
        selector: 'expense',
        templateUrl: './expense.component.html'
    }),
    __metadata("design:paramtypes", [expenses_service_1.ExpensesService,
        expense_types_service_1.ExpenseTypesService,
        router_1.ActivatedRoute,
        common_1.Location])
], ExpenseComponent);
exports.ExpenseComponent = ExpenseComponent;
//# sourceMappingURL=expense.component.js.map