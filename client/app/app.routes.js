"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import de RouterModule e Router para configuração das rotas de SPA
var router_1 = require("@angular/router");
var list_component_1 = require("./list/list.component");
var register_component_1 = require("./register/register.component");
//Configuração das rotas
var appRoutes = [
    { path: '', component: list_component_1.ListComponent },
    { path: 'cadastro', component: register_component_1.RegisterComponent },
    //Definição do nome do param recebido pela url que será usado na hora de recuperar o valor
    { path: 'cadastro/:id', component: register_component_1.RegisterComponent },
    { path: '**', component: list_component_1.ListComponent }
];
//"Compilando" as rotas configuradas
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map