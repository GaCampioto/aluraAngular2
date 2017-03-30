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

    save(photo: PhotoComponent): Observable<Response>{
        //Verificar se a photo tem _id, se sim realizar atualização(put), se não realizar inserção (post)
        if(photo._id){
            return this.http
                .put(this.url + '/' + photo._id, JSON.stringify(photo), {headers : this.headers});
        } else {
            return this.http
            .post(this.url, JSON.stringify(photo), {headers : this.headers});
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