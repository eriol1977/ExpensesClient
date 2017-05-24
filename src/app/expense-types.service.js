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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var ExpenseTypesService = (function () {
    function ExpenseTypesService(http) {
        this.http = http;
        this.typesUrl = 'http://ec2-52-41-136-68.us-west-2.compute.amazonaws.com/expenses/rest/types'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ExpenseTypesService.prototype.getTypes = function () {
        return this.http.get(this.typesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpenseTypesService.prototype.getType = function (id) {
        var url = this.typesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpenseTypesService.prototype.create = function (code, description) {
        return this.http
            .post(this.typesUrl, JSON.stringify({ code: code, description: description }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpenseTypesService.prototype.update = function (type) {
        var url = "" + this.typesUrl;
        return this.http
            .put(url, JSON.stringify(type), { headers: this.headers })
            .toPromise()
            .then(function () { return type; })
            .catch(this.handleError);
    };
    ExpenseTypesService.prototype.delete = function (id) {
        var url = this.typesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ExpenseTypesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ExpenseTypesService;
}());
ExpenseTypesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ExpenseTypesService);
exports.ExpenseTypesService = ExpenseTypesService;
//# sourceMappingURL=expense-types.service.js.map