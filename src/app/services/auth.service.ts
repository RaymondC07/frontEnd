import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { AuthResponse, Car, RegistroUsuario, User, Usuario } from '../auth/interfaces/interface.';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl 
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }
  

  constructor( private http: HttpClient ) { }

  login( email: string, password: string ){

    const urlAuth = `${ this.baseUrl }/auth`;
    const body    = { email, password };

    return this.http.post<AuthResponse>( urlAuth, body )
      .pipe(
        tap( resp => {
          if ( resp.login ){
            localStorage.setItem('jToken', resp.jToken!);
            this._usuario = {
              nombre: resp.nombre!,
              id: resp.id!

            }
          }
        } ),
        map( resp => resp.login),
        catchError( err => of(err.error.errors))
      );
  }

  
    navegacionPersistente(): Observable<boolean | any>{
  
      const url = `${ this.baseUrl }/auth/validacion`;
      const headers = new HttpHeaders()
        .set('x-jwt', localStorage.getItem( 'jToken' ) || '');
      return this.http.get<AuthResponse> ( url, { headers: headers } ).pipe(
        map(  resp => {

          return resp.login;
        } ),
        catchError( err => of(false))
      );
    }


    logOut(){
      localStorage.clear();
    }

    registroUsuarios( nombre: string, patio: string, email: string, password: string ){

      const urlAuth = `${ this.baseUrl }/auth/nuevo`;
      const body    = { nombre, patio, email, password };
  
      return this.http.post<RegistroUsuario>( urlAuth, body )
        .pipe(
          tap( resp => {
            if ( resp.creado ){
              localStorage.setItem('jToken', resp.jToken!);
              this._usuario = {
                nombre: resp.nombre!,
                id: resp.id!
              }
            }
          } ),
          map( resp => resp.creado),
          catchError( err => of(err.error.errors))
        );
    }

    Users():Observable<User[]> {
      
      return this.http.get<User[]>(`${ this.baseUrl }/auth/ver`)

   }

   Cars():Observable<Car[]> {
      
    return this.http.get<Car[]>(`${ this.baseUrl }/data/ver`)

 }

 actualizarUsuario ( user: User ): Observable<User> {

  return this.http.put<User>( `${ this.baseUrl }/auth/buscar/${ user.email }`, user );

}


}
