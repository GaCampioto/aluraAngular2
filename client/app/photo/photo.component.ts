import { Component, Input } from '@angular/core';

@Component({
    moduleId : module.id,
    selector:'photo',
    templateUrl:'./photo.component.html'
})
export class PhotoComponent{
    //@Input() possibilita que o componente receba valores externos
    //Ao receber valores externos chamamos os atributos de inbound properties
    @Input() url;
    @Input() title;
}