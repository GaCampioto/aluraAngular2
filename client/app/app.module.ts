//Import de components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';

//Import de modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhotoModule } from './photo/photo.module';
import { HttpModule } from '@angular/http';
import { PanelModule } from './panel/panel.module';
import { routing } from './app.routes';
//Import diferente porque não é padrão do angular
import 'rxjs/add/operator/map';

@NgModule({
    imports : [BrowserModule, PhotoModule, HttpModule, PanelModule, routing],
    declarations : [AppComponent, RegisterComponent, ListComponent],
    bootstrap : [ AppComponent ]
})
export class AppModule{}