import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "profile",
  template: `
  <mat-card>
  <mat-card-title>Profile </mat-card-title>
  <div class="mb-3">

  <ul>
  <li class="">Name: {{profile?.name}}</li>
  <li class="">Email: {{profile?.email}}</li>
  <li class="">Desc: {{profile?.description}}</li>
  </ul>

  </div>
   <messages></messages>
   <event-profile></event-profile>
  </mat-card>
  `
})
export class ProfileComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  profile;
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    //console.log(id);
    this.apiService.getProfile(id).subscribe(data => (this.profile = data));
  }
}
