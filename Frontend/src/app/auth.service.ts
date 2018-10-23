import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Router, ActivatedRoute } from "@angular/router";
@Injectable()
export class AuthService {
  messages = [];
  path = environment.path + "/auth";
  TOKEN_KEY = "token";

  constructor(private http: HttpClient, private router: Router) {}
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  //hide register if loged in
  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  //logout
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  registerUser(registerData) {
    this.http
      .post<any>(this.path + "/register", registerData)
      .subscribe(res => {
        console.log(res);
        localStorage.setItem(this.TOKEN_KEY, res.token);
      });
  }
  loginUser(loginData) {
    this.http.post<any>(this.path + "/login", loginData).subscribe(res => {
      //  console.log(res);
      localStorage.setItem(this.TOKEN_KEY, res.token);
      //this.router.navigateByUrl("/");
    });
  }
}
