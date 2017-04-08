import {Component, ElementRef, Output, Input, EventEmitter, AfterViewInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent { 

    private _element: ElementRef;

    @Input() private title: string = 'Tem certeza?';
    @Input() private text: string;
    @Output() confirm = new EventEmitter();

    constructor(private element: ElementRef) {
        this._element = element;
    }

    ngAfterViewInit() {
        $(this._element.nativeElement).dialog({
                title: this.title,
                autoOpen: false,
                resizable: false,
                modal: true,
                buttons: {
                    Cancelar: ()=> {
                        $(this._element.nativeElement).dialog( "close" );
                    },
                    Confirmar: ()=> {
                        $(this._element.nativeElement).dialog( "close" );
                        this.confirm.emit(null);
                    }
                }
        });

    }

    show() {    
        $(this._element.nativeElement).dialog('open');
    }
}