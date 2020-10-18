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
exports.Base = void 0;
var vue_1 = require("vue");
var vue_property_decorator_1 = require("vue-property-decorator");
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // The bootstrap library component
        _this._bs = null;
        return _this;
    }
    // Component mounted event
    Base.prototype.mounted = function () {
        var _this = this;
        var updateFl = false;
        // Parse the props
        for (var prop in this.$props) {
            // Add a watch for this property
            this.$watch(prop, function () {
                // See if an update is not taking place
                if (!updateFl) {
                    // Set the flag
                    updateFl = true;
                    // Wait for any other changes to occur before updating the element
                    setTimeout(function () {
                        // Clear the element
                        while (_this.$el.firstChild) {
                            // Remove the child
                            _this.$el.removeChild(_this.$el.firstChild);
                        }
                        // Set the flag
                        updateFl = false;
                        // Re-render the component
                        _this.$data.bs(_this.$props);
                    }, 100);
                }
            });
        }
        // Set the element
        this.$props.el = this.$el;
        // Render the component
        this._bs(this.$props);
    };
    __decorate([
        vue_property_decorator_1.Prop(Function)
    ], Base.prototype, "assignTo", void 0);
    __decorate([
        vue_property_decorator_1.Prop(String)
    ], Base.prototype, "className", void 0);
    Base = __decorate([
        vue_property_decorator_1.Component({
            template: ''
        })
    ], Base);
    return Base;
}(vue_1.default));
exports.Base = Base;
/**
 * Base Template
 */
exports.default = {
    name: "Base",
    inheritAttrs: false,
    props: {
        assignTo: { type: Function },
        className: { type: String },
    },
    mounted: function () {
        var _this = this;
        var updateFl = false;
        // Parse the props
        for (var prop in this.$props) {
            // Add a watch for this property
            this.$watch(prop, function () {
                // See if an update is not taking place
                if (!updateFl) {
                    // Set the flag
                    updateFl = true;
                    // Wait for any other changes to occur before updating the element
                    setTimeout(function () {
                        // Clear the element
                        while (_this.$el.firstChild) {
                            // Remove the child
                            _this.$el.removeChild(_this.$el.firstChild);
                        }
                        // Set the flag
                        updateFl = false;
                        // Re-render the component
                        _this.$data.bs(_this.$props);
                    }, 100);
                }
            });
        }
        // Set the element
        this.$props.el = this.$el;
        // Render the component
        this.$data.bs(this.$props);
    },
};
