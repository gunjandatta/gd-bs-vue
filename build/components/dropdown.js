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
exports.Dropdown = void 0;
var gd_bs_1 = require("gd-bs");
var base_1 = require("./base");
var vue_property_decorator_1 = require("vue-property-decorator");
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    // Constructor
    function Dropdown() {
        var _this = _super.call(this) || this;
        // Set the bs component
        _this._bs = gd_bs_1.Components.Dropdown;
        return _this;
    }
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "dropLeft", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "dropRight", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "dropUp", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "formFl", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], Dropdown.prototype, "id", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "isDatalist", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "isReadonly", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "isSplit", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Array)
    ], Dropdown.prototype, "items", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], Dropdown.prototype, "label", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "menuOnly", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "multi", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "navFl", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Dropdown.prototype, "onChange", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Dropdown.prototype, "setLabelToValue", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], Dropdown.prototype, "title", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Number)
    ], Dropdown.prototype, "type", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Object)
    ], Dropdown.prototype, "value", void 0);
    Dropdown = __decorate([
        vue_property_decorator_1.Component
    ], Dropdown);
    return Dropdown;
}(base_1.Base));
exports.Dropdown = Dropdown;
