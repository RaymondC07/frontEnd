import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { ListComponent } from './list/list.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { MaterialModule } from '../material/material/material.module';
import { UsersComponent } from './users/users.component';




@NgModule({
  declarations: [
    ListComponent,
    ListUsersComponent,
    ListMenuComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }
