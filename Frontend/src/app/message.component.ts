import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "messages",
  template: `
  <mat-card-title>Posts
    <button mat-flat-button class="float-md-right" color="primary" routerLink="/post">Add Post</button>
  </mat-card-title>

  <table class="table table-striped">
  <thead class="thead-dark">
  <tr class="bg-primary">
  <th>Post</th>
  <th></th>
  </tr>
  </thead>
  <tr *ngFor="let message of apiService.messages">
    <td>
      {{message.msg}}
    </td>
  <td > </td>

  </tr>
  <table>
  `
})
export class MessageComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const userId = this.route.snapshot.params.id;

    this.apiService.getMessages(userId);
  }
}
