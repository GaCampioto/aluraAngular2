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
var PanelComponent = (function () {
    function PanelComponent(element) {
        this._element = element;
    }
    PanelComponent.prototype.ngOnInit = function () {
        this.title =
            this.title.length > 7 ?
                this.title.substr(0, 7) + '...' :
                this.title;
    };
    PanelComponent.prototype.fadeOut = function (callback) {
        $(this._element.nativeElement).fadeOut(callback);
    };
    return PanelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PanelComponent.prototype, "title", void 0);
PanelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'panel',
        templateUrl: './panel.component.html',
        styleUrls: ['./panel.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PanelComponent);
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map