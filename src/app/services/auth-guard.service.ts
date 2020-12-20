import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot
        } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

// canActivate hay que agregale metodo
export class AuthGuardService implements CanActivate {

  // Este componente se encargara de virificar el login de
  // el usuario
  constructor(private authservice: AuthService) { }

  // Las clases de aui me dan informacion de la pagina 
  // a la que intento acceder
  canActivate(next: ActivatedRouteSnapshot , state: RouterStateSnapshot) {
    // Este metodo tiene por obligacion regresar un Boolean

      console.log(next);
      console.log(state);
    
      if ( this.authservice.isAuthenticated()) {
        console.log("Paso el Guard");
        return true;
      } else {
        console.error("Bloqueado po el Guard");
        return false;
      }

    }
    
  }
