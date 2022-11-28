import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/auth/interfaces/interface.';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private authService: AuthService  ) { }

  car: Car[] = [];

  ngOnInit(): void {

    this.authService.Cars().subscribe( car => this.car = car );
  }  

}
