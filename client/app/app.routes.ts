//Import de RouterModule e Router para configuração das rotas de SPA
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

//Configuração das rotas
const appRoutes: Routes = [
    { path: '', component: ListComponent },
    { path:'cadastro', component: RegisterComponent },
    { path:'**', component: ListComponent}
];

//"Compilando" as rotas configuradas
export const routing = RouterModule.forRoot(appRoutes);