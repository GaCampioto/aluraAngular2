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
var photo_service_1 = require("../photo/photo.service");
var ListComponent = (function () {
    function ListComponent(photoService) {
        var _this = this;
        this.photos = [];
        this.message = '';
        this.photoService = photoService;
        this.photoService
            .getAll()
            .subscribe(function (photos) { return _this.photos = photos; }, function (error) { return console.log(error); });
        var stringBase64 = 'JBKNU57SBOLJIW4AOMN6VTF5IT1RMSME:1A8BOVJBVQKKG8ARDKI4UFAGEUZQASBS8WLKISZY';
        console.log(btoa(stringBase64));
        console.log(atob(btoa(stringBase64)));
        console.log(atob('MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg=='));
    }
    ListComponent.prototype.remove = function (photo) {
        var _this = this;
        this.photoService
            .remove(photo)
            .subscribe(function () {
            //É necessário alterar a referência da lista de photos para a página renderizar novamente
            var newPhotos = _this.photos.slice(0);
            var index = _this.photos.indexOf(photo);
            newPhotos.splice(index, 1);
            _this.photos = newPhotos;
            _this.message = 'Foto removida com sucesso';
        }, function (error) {
            console.log(error);
            _this.message = 'Erro ao tentar remover a foto';
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'list',
        templateUrl: './list.component.html'
    }),
    __metadata("design:paramtypes", [photo_service_1.PhotoService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map