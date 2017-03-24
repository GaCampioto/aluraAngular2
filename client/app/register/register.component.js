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
var photo_component_1 = require("../photo/photo.component");
var http_1 = require("@angular/http");
//Imports necessários para fazer a validação dos dados do form
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(http, formBuilder) {
        this.photo = new photo_component_1.PhotoComponent();
        this.http = http;
        //Criação do form e da validações que serão feitas
        //É necessário incluir todos os campos do form mesmo que não exista validação
        this.registerForm = formBuilder.group({
            "titulo": ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            "url": ['', forms_1.Validators.required],
            "descricao": ['']
        });
    }
    RegisterComponent.prototype.save = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.photo);
        var header = new http_1.Headers();
        header.append('Content-type', 'Application/JSON');
        this.http.post('v1/fotos', JSON.stringify(this.photo), { headers: header })
            .subscribe(function () {
            _this.photo = new photo_component_1.PhotoComponent();
            console.log('Foto Salva com sucesso!');
        }, function (error) { return console.log(error); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: './register.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map