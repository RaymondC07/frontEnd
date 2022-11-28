import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarNavegacionGuard } from './guards/validar-navegacion.guard';



const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'list',
    loadChildren: () => import('./vehiculos/vehiculos.module').then( m => m.VehiculosModule ),
    canActivate: [ ValidarNavegacionGuard ],
    canLoad: [ ValidarNavegacionGuard ]

  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
