import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "home",
  template: `<mat-card>
            <mat-card-title>Welcome to Angular 6 Application with Node and Token Authentication</mat-card-title>
            <div class=" row">

            <div class="col-6">
             <h5>Overview</h5>
              <ol>
                <li>Angular 6, Bootstrap, Angulat Materials</li>
                <li>Backend with Node</li>
                <li>MongoDB Deployments (mLab)</li>
                <li>ExpressJs with Nodemon</li>
                <li>Postman API</li>
                <li>Authantication</li>
                <li>Authorization</li>
                <li>Publish: Heroku: Cloud Application Platform</li>
              </ol>
              </div>
              <div class="col-6">

              <h5>Feature</h5>
              <ol>
              <li>Register New User with Node and Mongo</li>
              <li>User login</li>
              <li>Showing User List</li>
              <li>Showing user Profile</li>
              <li>Posting a User Feed</li>
              <li>Creating Events</li>
              <li>Login Logout</li>
            </ol>
           </div>
           </div>
            </mat-card>
  `
})
export class HomeComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  // ngOnInit() {
  //   this.apiService.getUsers();
  // }
}
