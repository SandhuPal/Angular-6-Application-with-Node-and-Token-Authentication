import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "users",
  template: `<mat-card>
              <mat-card-title>User List</mat-card-title>
                <table class="table table-striped">
                <thead class="thead-dark">
                <tr class="bg-primary">
                <th>User Name</th>
                <th>Action</th>
                </tr>
                </thead>

                <tr *ngFor="let user of apiService.users" [routerLink]="['/profile', user._id]">
                  <td [routerLink]="['/profile', user._id]">
                    {{user.name}}
                  </td>
                  <td ><i class="fas fa-plus-square"></i></td>
                </tr>
              `
})
export class UsersComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers();
  }
}
