import { Component } from "@angular/core";
import { ApiService } from "./api.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "post",
  template: `
  <mat-card>
  <mat-card-title>New Post </mat-card-title>


      <form>
        <div class=" row">

          <div class="col-12">
            <textarea type="text" class="col-12" [(ngModel)]="postMsg" #ctrl="ngModel" name="description" required placehoder="Post Msg"></textarea>

            <p>Post: {{ postMsg }}</p>
          </div>

          <div class="col"><button (click)="post()" type="button" class="btn btn-primary">Publish</button></div>
        </div>
      </form>

  </mat-card>
  `
})
export class PostComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  postMsg = "";
  post() {
    this.apiService.postMessages({ msg: this.postMsg });
  }
}
