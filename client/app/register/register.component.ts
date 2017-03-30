import { Component } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../photo/photo.service';
import { Http,Headers } from '@angular/http'
//Imports necessários para fazer a validação dos dados do form
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
//Componentes utilizados para recuperar parametro enviado e navegar para outras rotas
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId : module.id,
    selector:'register',
    templateUrl:'./register.component.html'
})
export class RegisterComponent {
    photo: PhotoComponent = new PhotoComponent();
    photoService: PhotoService;
    //Deve ter o mesmo nome do form na página -> utilizado para validar dados do form
    registerForm: FormGroup;
    //Componentes utilizados para recuperar parametro enviado e navegar para outras rotas
    router: Router;
    route: ActivatedRoute;

    constructor(photoService: PhotoService, formBuilder: FormBuilder, route: ActivatedRoute, router: Router){
        this.photoService = photoService;
        this.route = route;
        this.router = router;
        let id: string;
        //Recuperando o valor passado na URL de acordo com o curinga inserido em app.routes
        this.route.params.subscribe(params => id = params['id']);
        if(id){
            this.photoService
                .get(id)
                .subscribe(photo => this.photo = photo,
                            error => console.log(error));
        }
        //Criação do form e da validações que serão feitas
        //É necessário incluir todos os campos do form mesmo que não exista validação
        this.registerForm = formBuilder.group({
                "titulo": ['', Validators.compose([Validators.required, Validators.minLength(4)])],
                "url": ['', Validators.required],
                "descricao": ['']
        });

    }

    save (event){
        event.preventDefault();
        console.log(this.photo);
        this.photoService
            .save(this.photo)
            .subscribe( () => {
                    this.photo = new PhotoComponent();
                    console.log('Foto Salva com sucesso!');
                },
                error => console.log(error));
        this.router.navigate(['']);
    }
}