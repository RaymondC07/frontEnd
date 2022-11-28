import { Component, Input } from '@angular/core';
import { User } from 'src/app/auth/interfaces/interface.';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  patio = [{
    id: 'Patio1'
  }]

  user: User={
    nombre: '',
    email: '',
    patio: 'Patio1'
  }

  constructor( private authService: AuthService,
                private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  guardar() {

    if( this.user.nombre!.trim().length === 0  ) {
      Swal.fire('Campo Obligatorio','Ingrese un nombre','error');
      return;
    }else {
        if ( this.user.email ){

          this.authService.actualizarUsuario( this.user )
          Swal.fire('Proceso Exitoso','Usuario Actualizado', 'success');
      

        } 
      }  

  }
}
