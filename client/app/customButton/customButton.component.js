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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CustomButton = (function () {
    function CustomButton() {
        this.name = 'Ok';
        this.customStyleClass = 'btn-default';
        this.type = 'button';
        this.action = new core_1.EventEmitter();
    }
    CustomButton.prototype.executeAction = function () {
        this.action.emit(null);
    };
    return CustomButton;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CustomButton.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CustomButton.prototype, "customStyleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CustomButton.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CustomButton.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CustomButton.prototype, "action", void 0);
CustomButton = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'customButton',
        templateUrl: './customButton.component.html'
    })
], CustomButton);
exports.CustomButton = CustomButton;
//# sourceMappingURL=customButton.component.js.map