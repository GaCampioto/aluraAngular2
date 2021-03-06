"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import de components
var app_component_1 = require("./app.component");
var register_component_1 = require("./register/register.component");
var list_component_1 = require("./list/list.component");
//Import de modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var photo_module_1 = require("./photo/photo.module");
var http_1 = require("@angular/http");
var panel_module_1 = require("./panel/panel.module");
var modal_module_1 = require("./modal/modal.module");
var customButton_module_1 = require("./customButton/customButton.module");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
//Import diferente porque não é padrão do angular
require("rxjs/add/operator/map");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            photo_module_1.PhotoModule,
            http_1.HttpModule,
            panel_module_1.PanelModule,
            app_routes_1.routing,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            customButton_module_1.CustomButtonModule,
            modal_module_1.ModalModule],
        declarations: [app_component_1.AppComponent, register_component_1.RegisterComponent, list_component_1.ListComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map