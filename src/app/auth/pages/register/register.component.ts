import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myForm: FormGroup = this.fb.group({
    nombre:    [ '',  Validators.required ], 
    patio:     [ 'Patio1', Validators.required],
    email:     [ '', [ Validators.required, Validators.email ] ],
    password:  [ '', [ Validators.required, Validators.minLength(8) ]],
  })  ;

  constructor( private fb: FormBuilder,
                private router: Router,
                private authService: AuthService ) { }

  registrar(){
    const { nombre, patio, email, password } = this.myForm.value
    this.authService.registroUsuarios( nombre, patio, email, password )
      .subscribe( login => {
        console.log(login)
        if ( login ){
           this.router.navigateByUrl('/list');
           Swal.fire('Proceso Exitoso','Registro Guardado','success')
        }else{
         Swal.fire('No se guardó el registro','El email ya está en el sistema', 'error' );
        }
      });
  }


}
