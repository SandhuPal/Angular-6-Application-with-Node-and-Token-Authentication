import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-root",
  template: `<div class="container-fluid mb-4">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <a class="navbar-brand" href="#" routerLink="/">SocialEvent</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse col float-md-right" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item" *ngIf="authService.isAuthenticated">
        <a class="nav-link" href="#" routerLink="/users">Users List<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" *ngIf="!authService.isAuthenticated" routerLink="/login">login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" *ngIf="!authService.isAuthenticated" routerLink="/register">Register</a>
        <a class="nav-link" href="#" *ngIf="authService.isAuthenticated" (click)="authService.logout()" routerLink="/login">Logout</a>
      </li>
    </ul>

  </div>
  </div>
</nav>
</div>

<div class="container"><router-outlet></router-outlet></div>`
})
export class AppComponent {
  constructor(private authService: AuthService) {}
}
