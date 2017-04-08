import {Component, Input, OnInit, ElementRef} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit{
    @Input() title: string;
    _element: ElementRef;

    constructor(element: ElementRef){
        this._element = element;
    }

    ngOnInit(){
        this.title = 
            this.title.length > 7 ?
            this.title.substr(0,7) + '...' :
            this.title;
    }

    fadeOut(callback){
        $(this._element.nativeElement).fadeOut(callback);
    }
}