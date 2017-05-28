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
var expense_types_service_1 = require("./expense-types.service");
require("rxjs/add/operator/switchMap");
var ExpenseTypeUpdateComponent = (function () {
    function ExpenseTypeUpdateComponent(expenseTypesService, route, location) {
        this.expenseTypesService = expenseTypesService;
        this.route = route;
        this.location = location;
    }
    ExpenseTypeUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.expenseTypesService.getType(+params['id']); })
            .subscribe(function (type) { return _this.type = type; });
    };
    ExpenseTypeUpdateComponent.prototype.goBack = function () {
        this.location.back();
    };
    ExpenseTypeUpdateComponent.prototype.save = function () {
        var _this = this;
        this.expenseTypesService.update(this.type)
            .then(function () { return _this.goBack(); });
    };
    return ExpenseTypeUpdateComponent;
}());
ExpenseTypeUpdateComponent = __decorate([
    core_1.Component({
        selector: 'expense-type-update',
        templateUrl: './expense-type-update.component.html'
    }),
    __metadata("design:paramtypes", [expense_types_service_1.ExpenseTypesService,
        router_1.ActivatedRoute,
        common_1.Location])
], ExpenseTypeUpdateComponent);
exports.ExpenseTypeUpdateComponent = ExpenseTypeUpdateComponent;
//# sourceMappingURL=expense-type-update.component.js.map