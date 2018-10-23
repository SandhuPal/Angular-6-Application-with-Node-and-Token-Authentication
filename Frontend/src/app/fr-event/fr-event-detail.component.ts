import { Component } from "@angular/core";
import { ApiService } from "./../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "event-detail",
  template: `Detail
  <div class="card">
  <div class="card-body">
  <ul>
  <li class="">Event Name: {{event?.name}}</li>
  <li class="">Evenr Dsc: {{event?.msg}}</li>
   </ul>
  </div>
  </div>
  `
})
export class EventDetailComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  profile;
  ngOnInit() {
    const eid = this.route.snapshot.params.id;

    //console.log(id);
    this.apiService.getEvents(eid); //.subscribe(data => (this.profile = data));
  }
}
