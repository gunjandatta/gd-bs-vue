"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var gd_bs_1 = require("gd-bs");
var base_1 = require("./base");
var vue_property_decorator_1 = require("vue-property-decorator");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    // Constructor
    function Table() {
        var _this = _super.call(this) || this;
        // Set the bs component
        _this._bs = gd_bs_1.Components.Table;
        return _this;
    }
    __decorate([
        vue_property_decorator_1.Prop(Array)
    ], Table.prototype, "columns", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Table.prototype, "onClickCell", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Table.prototype, "onClickHeader", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Table.prototype, "onRenderCell", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Table.prototype, "onRenderHeaderCell", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Table.prototype, "onRenderHeaderRow", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Table.prototype, "onRenderRow", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Array)
    ], Table.prototype, "rows", void 0);
    Table = __decorate([
        vue_property_decorator_1.Component
    ], Table);
    return Table;
}(base_1.Base));
exports.Table = Table;
