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
var expense_types_service_1 = require("./expense-types.service");
var ExpenseTypesComponent = (function () {
    function ExpenseTypesComponent(expenseTypesService) {
        this.expenseTypesService = expenseTypesService;
        this.types = [];
    }
    ExpenseTypesComponent.prototype.getTypes = function () {
        var _this = this;
        this.expenseTypesService.getTypes().then(function (types) { return _this.types = types; });
    };
    ExpenseTypesComponent.prototype.add = function (code, description) {
        var _this = this;
        code = code.trim();
        description = description.trim();
        if (!code || !description) {
            return;
        }
        this.expenseTypesService.create(code, description)
            .then(function (type) {
            _this.types.push(type);
            _this.selectedType = null;
        });
    };
    ExpenseTypesComponent.prototype.delete = function (type) {
        var _this = this;
        this.expenseTypesService
            .delete(type.id)
            .then(function () {
            _this.types = _this.types.filter(function (t) { return t !== type; });
            if (_this.selectedType === type) {
                _this.selectedType = null;
            }
        });
    };
    ExpenseTypesComponent.prototype.ngOnInit = function () {
        this.getTypes();
    };
    return ExpenseTypesComponent;
}());
ExpenseTypesComponent = __decorate([
    core_1.Component({
        selector: 'expense-types',
        templateUrl: './expense-types.component.html',
        styleUrls: ['./expense-types.component.css']
    }),
    __metadata("design:paramtypes", [expense_types_service_1.ExpenseTypesService])
], ExpenseTypesComponent);
exports.ExpenseTypesComponent = ExpenseTypesComponent;
//# sourceMappingURL=expense-types.component.js.map