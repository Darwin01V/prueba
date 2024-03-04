import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
    {
        path:'',
        loadChildren:() =>import('./Auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path:'invitado',
        loadChildren:() =>import('./Autores/autores.routes').then(m => m.AUTORES_ROUTES)
    },
    {
        path:'user',
        loadChildren:() =>import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
        canActivate:[AuthGuard]
    }
];
