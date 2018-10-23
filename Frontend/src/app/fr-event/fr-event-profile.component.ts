import { Component } from "@angular/core";
import { ApiService } from "./../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "event-profile",
  template: `
  <mat-card-title>Events
    <button mat-flat-button class="float-md-right" color="primary" routerLink="/event">Add Event</button>
  </mat-card-title>

  <table class="table table-striped">
  <thead class="thead-dark">
  <tr class="bg-primary">
  <th>Event Name</th>
  <th>Description</th>
  </tr>
  </thead>

  <tr *ngFor="let event of apiService.events">
  <td [routerLink]="['/events/details/', event._id]">
  <div >
  {{event.name}}
  </div>
  </td>
  <td ><div>{{event.msg}}</div></td>

  </tr>
  <table>

  `
})
export class EventComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  profile;
  ngOnInit() {
    const eid = this.route.snapshot.params.id;

    //console.log(id);
    this.apiService.getEvents(eid); //.subscribe(data => (this.profile = data));
  }
}
