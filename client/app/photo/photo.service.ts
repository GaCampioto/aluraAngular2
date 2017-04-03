import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { PhotoComponent } from './photo.component';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService{
    http: Http;
    headers: Headers;
    url: string;

    constructor(http: Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-type', 'Application/JSON');
        this.url = 'v1/fotos';
    }

    save(photo: PhotoComponent): Observable<RegisterMessage>{
        //Verificar se a photo tem _id, se sim realizar atualização(put), se não realizar inserção (post)
        if(photo._id){
            return this.http
                .put(this.url + '/' + photo._id, JSON.stringify(photo), {headers : this.headers})
                .map(() => new RegisterMessage('Foto alterada com sucesso!', false));
        } else {
            return this.http
            .post(this.url, JSON.stringify(photo), {headers : this.headers})
            .map(() => new RegisterMessage('Foto incluída com sucesso!', true));
        }
    }

    get(id: string): Observable<PhotoComponent> {
        return this.http
                    .get(this.url + '/' + id)
                    .map(res => res.json());
    }

    getAll(): Observable<PhotoComponent[]>{
        return this.http
            .get(this.url)
            .map(res => res.json());
    }

    remove(photo): Observable<Response>{
        return this.http
                    .delete(this.url + '/' + photo._id);
    }
}

export class RegisterMessage {
    /* PODE SER SIMPLIFICADO PELO CONSTRUCTOR
    private _message: string = '';
    private _include: boolean;
    */

    constructor(private _message: string, private _include:boolean){
        this._message = _message;
        this._include = _include;
    }

    get message(): string{
        return this._message;
    }

    get include(): boolean {
        return this._include;
    }
}