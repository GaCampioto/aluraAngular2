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
var photo_service_1 = require("../photo/photo.service");
//Imports necessários para fazer a validação dos dados do form
var forms_1 = require("@angular/forms");
//Componentes utilizados para recuperar parametro enviado e navegar para outras rotas
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(photoService, formBuilder, route, router) {
        var _this = this;
        this.photo = new photo_component_1.PhotoComponent();
        this.photoService = photoService;
        this.route = route;
        this.router = router;
        var id;
        //Recuperando o valor passado na URL de acordo com o curinga inserido em app.routes
        this.route.params.subscribe(function (params) { return id = params['id']; });
        if (id) {
            this.photoService
                .get(id)
                .subscribe(function (photo) { return _this.photo = photo; }, function (error) { return console.log(error); });
        }
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
        this.photoService
            .save(this.photo)
            .subscribe(function () {
            _this.photo = new photo_component_1.PhotoComponent();
            console.log('Foto Salva com sucesso!');
        }, function (error) { return console.log(error); });
        this.router.navigate(['']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: './register.component.html'
    }),
    __metadata("design:paramtypes", [photo_service_1.PhotoService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map