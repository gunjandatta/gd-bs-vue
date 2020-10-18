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
exports.Toast = void 0;
var gd_bs_1 = require("gd-bs");
var base_1 = require("./base");
var vue_property_decorator_1 = require("vue-property-decorator");
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    // Constructor
    function Toast() {
        var _this = _super.call(this) || this;
        // Set the bs component
        _this._bs = gd_bs_1.Components.Toast;
        return _this;
    }
    __decorate([
        vue_property_decorator_1.Prop([String, Element])
    ], Toast.prototype, "body", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Object)
    ], Toast.prototype, "data", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], Toast.prototype, "headerImgClass", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], Toast.prototype, "headerImgSrc", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], Toast.prototype, "headerText", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Boolean)
    ], Toast.prototype, "hideCloseButton", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], Toast.prototype, "mutedText", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Object)
    ], Toast.prototype, "options", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Toast.prototype, "onClick", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Toast.prototype, "onRenderBody", void 0);
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Toast.prototype, "onRenderHeader", void 0);
    Toast = __decorate([
        vue_property_decorator_1.Component
    ], Toast);
    return Toast;
}(base_1.Base));
exports.Toast = Toast;