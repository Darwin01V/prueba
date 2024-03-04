import { Routes } from "@angular/router";
import { InvitadoLayoutComponent } from "./invitado-layout/invitado-layout.component";
import { ListadoComponent } from "./listado/listado.component";
import { ObrasComponent } from "./obras/obras.component";
import { ObraComponent } from "./obra/obra.component";

export const AUTORES_ROUTES: Routes = [
    {
        path: '',
        component:InvitadoLayoutComponent,
        children:[
            {
                path:'',
                component:ListadoComponent
            },
            {
                path:'obras/:autor',
                component:ObrasComponent
            },
            {
                path:'obra/:titulo',
                component:ObraComponent
            }
        ]
    }
]