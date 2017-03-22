import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';
import { HttpModule } from '@angular/http';
//Import diferente porque não é padrão do angular
import 'rxjs/add/operator/map';

@NgModule({
    imports : [BrowserModule, PhotoModule, HttpModule],
    declarations : [AppComponent],
    bootstrap : [ AppComponent ]
})
export class AppModule{}