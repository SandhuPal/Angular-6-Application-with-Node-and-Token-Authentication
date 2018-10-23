import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "login",
  templateUrl: "login.component.html"
})
export class LoginComponent {
  loginData = {};
  constructor(private authService: AuthService) {}
  post() {
    this.authService.loginUser(this.loginData);
  }
}
