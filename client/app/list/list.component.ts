import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { PanelComponent } from '../panel/panel.component';

@Component({
    moduleId : module.id,
    selector:'list',
    templateUrl:'./list.component.html'
})
export class ListComponent{
    photoService: PhotoService;
    photos : PhotoComponent [] = [];
    message: string = '';

    constructor(photoService: PhotoService, route:ActivatedRoute){
        this.photoService = photoService;
        this.photoService
            .getAll()
            .subscribe(
                photos => this.photos = photos,
                error => console.log(error)
            );
    }

    remove(photo: PhotoComponent, panel: PanelComponent) : void{
        this.photoService
            .remove(photo)
            .subscribe(
                () => {
                    //É necessário alterar a referência da lista de photos para a página renderizar novamente
                    panel.fadeOut( () => {
                        let newPhotos = this.photos.slice(0);
                        let index = this.photos.indexOf(photo);
                        newPhotos.splice(index, 1);
                        this.photos = newPhotos;
                        this.message = 'Foto removida com sucesso';
                    });
                },
                error => {
                    console.log(error);
                    this.message = 'Erro ao tentar remover a foto';
                }
            );
    }
}