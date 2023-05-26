import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-restricted-space',
  templateUrl: './restricted-space.component.html',
  styleUrls: ['./restricted-space.component.css']
})
export class RestrictedSpaceComponent {

  constructor(
    private keycloakservice: KeycloakService) { }

  username: string = "";
  isLoggedIn: boolean = false;

  public getUsername() : string {
    return this.keycloakservice.getUsername();
  }

  public logout() {
    this.keycloakservice.logout('http://localhost:4200/');
  }

  ngOnInit(): void {
    this.username = this.getUsername();
  }
}
