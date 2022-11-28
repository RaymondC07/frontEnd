import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../auth/interfaces/interface.';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent  implements OnInit {


  constructor( private authService: AuthService ) { }

  lista: User[] = [];


  ngOnInit(): void {
    this.authService.Users()
      .subscribe( user => this.lista = user );
  }

  

}
