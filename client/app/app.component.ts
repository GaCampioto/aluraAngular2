import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId : module.id,
    selector:'app',
    templateUrl:'./app.component.html'
})

export class AppComponent{

    fotos : Object [] = [];

    constructor(http: Http){
        let responseStream = http.get('v1/fotos');
        responseStream.subscribe(res => {
            this.fotos = res.json();
        });
    }
}