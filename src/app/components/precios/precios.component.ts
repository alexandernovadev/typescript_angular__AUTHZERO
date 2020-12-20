import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styles: []
})
export class PreciosComponent implements OnInit {

  constructor(public authservicio: AuthService) {

    
   }

  ngOnInit() {
  }

}
