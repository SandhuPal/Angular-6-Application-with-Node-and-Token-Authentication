import { Component } from "@angular/core";
import { ApiService } from "./../api.service";

@Component({
  selector: "event",
  template: `
  <mat-card>
  <mat-card-title>Add New Event</mat-card-title>

      <form>
        <div class=" row">

          <div class="col-12">
            <input type="text"  class="col-6" [(ngModel)]="eventName" name="eventName" #ctrl="ngModel"  placehoder="Event Name" />
            <p>Event Name: {{ eventName }}</p>
            <textarea type="text"  class="col-6" [(ngModel)]="eventMsg" #ctrl="ngModel" name="description" required placehoder="Event Msg"></textarea>

            <p>Event Desc: {{ eventMsg }}</p>
          </div>

          <div class="col"><button (click)="createEvent()" type="button" class="btn btn-primary">Create Event</button></div>
        </div>
      </form>


  </mat-card>
  `
})
export class EventsCreateComponent {
  constructor(private apiService: ApiService) {}
  eventMsg = "";
  eventName = "";
  createEvent() {
    this.apiService.postEvents({ msg: this.eventMsg, name: this.eventName });
  }
}
