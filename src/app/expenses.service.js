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
var http_1 = require("@angular/http");
var expense_type_1 = require("./expense-type");
var expense_1 = require("./expense");
var expense_types_service_1 = require("./expense-types.service");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var ExpensesService = (function () {
    function ExpensesService(http, typesService) {
        this.http = http;
        this.typesService = typesService;
        this.url = 'http://ec2-52-41-136-68.us-west-2.compute.amazonaws.com/expenses/rest/expenses'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ExpensesService.prototype.getExpenses = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpensesService.prototype.getExpense = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpensesService.prototype.getExpensesByDate = function (date) {
        var url = this.url + "/bydate/" + date;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpensesService.prototype.getNewExpense = function () {
        var expense = new expense_1.Expense();
        expense.type = new expense_type_1.ExpenseType();
        return expense;
    };
    ExpensesService.prototype.create = function (date, expType, value, notes) {
        var expense = new expense_1.Expense();
        expense.date = date;
        expense.type = expType;
        expense.value = value;
        expense.notes = notes;
        return this.http
            .post(this.url, JSON.stringify(expense), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpensesService.prototype.update = function (expense) {
        var url = "" + this.url;
        return this.http
            .put(url, JSON.stringify(expense), { headers: this.headers })
            .toPromise()
            .then(function () { return expense; })
            .catch(this.handleError);
    };
    ExpensesService.prototype.delete = function (id) {
        var url = this.url + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ExpensesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ExpensesService;
}());
ExpensesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, expense_types_service_1.ExpenseTypesService])
], ExpensesService);
exports.ExpensesService = ExpensesService;
//# sourceMappingURL=expenses.service.js.map