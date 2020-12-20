import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) {
    // Hay que llamas esto para que la autentificacion sirve
    // Hay varios metodos que nose para que sirven
    authservice.handleAuthentication();
   }

   ngOnInit() {
    if (this.authservice.isAuthenticated()) {
      this.authservice.renewTokens();
    }
  }

}
