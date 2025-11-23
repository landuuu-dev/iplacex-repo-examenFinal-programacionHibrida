import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'form-fotos',
    loadComponent: () => import('./form/form-fotos/form-fotos.page').then( m => m.FormFotosPage)
  },
];
