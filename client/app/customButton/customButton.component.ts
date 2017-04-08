import { Component, Input , EventEmitter, Output} from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'customButton',
    templateUrl: './customButton.component.html'
})
export class CustomButton{
    @Input() name: string = 'Ok';
    @Input() customStyleClass: string ='btn-default';
    @Input() type: string = 'button';
    @Input() disabled: boolean;
    @Output() action = new EventEmitter();

    executeAction(){
        this.action.emit(null);
    }
}