import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile: any;
  constructor(public authservice: AuthService) {

   }

   ngOnInit() {
    if (this.authservice.userProfile) {
      this.profile = this.authservice.userProfile;
      console.log("wel done");
    } else {
      this.authservice.getProfile((err, profile) => {
        this.profile = profile;
        console.log("Error");
      });
    }
  }


}
