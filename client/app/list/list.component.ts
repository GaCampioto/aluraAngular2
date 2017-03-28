import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../photo/photo.service';

@Component({
    moduleId : module.id,
    selector:'list',
    templateUrl:'./list.component.html'
})
export class ListComponent{
    photoService: PhotoService;
    photos : PhotoComponent [] = [];
    message: string = '';

    constructor(photoService: PhotoService){
        this.photoService = photoService;
        this.photoService
            .getAll()
            .subscribe(
                photos => this.photos = photos,
                error => console.log(error)
            );
        let stringBase64 = 'JBKNU57SBOLJIW4AOMN6VTF5IT1RMSME:1A8BOVJBVQKKG8ARDKI4UFAGEUZQASBS8WLKISZY';
        console.log(btoa(stringBase64));
        console.log(atob(btoa(stringBase64)));
        console.log(atob('MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg=='));
    }

    remove(photo: PhotoComponent) : void{
        this.photoService
            .remove(photo)
            .subscribe(
                () => {
                    //É necessário alterar a referência da lista de photos para a página renderizar novamente
                    let newPhotos = this.photos.slice(0);
                    let index = this.photos.indexOf(photo);
                    newPhotos.splice(index, 1);
                    this.photos = newPhotos;
                    this.message = 'Foto removida com sucesso';
                },
                error => {
                    console.log(error);
                    this.message = 'Erro ao tentar remover a foto';
                }
            );
    }
}