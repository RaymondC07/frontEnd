import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListMenuComponent } from './list-menu/list-menu.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        component: ListMenuComponent
      },
      {
        path: 'users',
        component: ListUsersComponent
      },
      {
        path: 'moviles',
        component: ListComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
