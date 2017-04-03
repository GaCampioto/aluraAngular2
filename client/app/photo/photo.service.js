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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var PhotoService = (function () {
    function PhotoService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-type', 'Application/JSON');
        this.url = 'v1/fotos';
    }
    PhotoService.prototype.save = function (photo) {
        //Verificar se a photo tem _id, se sim realizar atualização(put), se não realizar inserção (post)
        if (photo._id) {
            return this.http
                .put(this.url + '/' + photo._id, JSON.stringify(photo), { headers: this.headers })
                .map(function () { return new RegisterMessage('Foto alterada com sucesso!', false); });
        }
        else {
            return this.http
                .post(this.url, JSON.stringify(photo), { headers: this.headers })
                .map(function () { return new RegisterMessage('Foto incluída com sucesso!', true); });
        }
    };
    PhotoService.prototype.get = function (id) {
        return this.http
            .get(this.url + '/' + id)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.getAll = function () {
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.remove = function (photo) {
        return this.http
            .delete(this.url + '/' + photo._id);
    };
    return PhotoService;
}());
PhotoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PhotoService);
exports.PhotoService = PhotoService;
var RegisterMessage = (function () {
    /* PODE SER SIMPLIFICADO PELO CONSTRUCTOR
    private _message: string = '';
    private _include: boolean;
    */
    function RegisterMessage(_message, _include) {
        this._message = _message;
        this._include = _include;
        this._message = _message;
        this._include = _include;
    }
    Object.defineProperty(RegisterMessage.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterMessage.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: true,
        configurable: true
    });
    return RegisterMessage;
}());
exports.RegisterMessage = RegisterMessage;
//# sourceMappingURL=photo.service.js.map