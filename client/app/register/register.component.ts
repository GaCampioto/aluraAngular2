import { Component } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { Http,Headers } from '@angular/http'
//Imports necessários para fazer a validação dos dados do form
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
    moduleId : module.id,
    selector:'register',
    templateUrl:'./register.component.html'
})
export class RegisterComponent {
    photo : PhotoComponent = new PhotoComponent();
    http: Http;
    //Deve ter o mesmo nome do form na página
    registerForm: FormGroup;

    constructor(http: Http, formBuilder: FormBuilder){
        this.http = http;
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
        let header: Headers = new Headers();
        header.append('Content-type', 'Application/JSON');
        this.http.post('v1/fotos', JSON.stringify(this.photo), {headers : header})
            .subscribe( () => {
                    this.photo = new PhotoComponent();
                    console.log('Foto Salva com sucesso!');
                },
                error => console.log(error));
    }
}