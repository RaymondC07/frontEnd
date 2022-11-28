import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent {

  get usuario(){
    return this.authService.usuario;
  }

  constructor( private router: Router,
                private authService: AuthService ) { }

  logOut(){

    this.router.navigateByUrl('/auth');
    this.authService.logOut();
    

  }

}
