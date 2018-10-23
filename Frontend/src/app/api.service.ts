import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";


@Injectable()
export class ApiService {
  messages = [];
  events = [];
  users = [];
  path = environment.path;
  constructor(private http: HttpClient) {}

  getMessages(userId) {
    this.http.get<any>(this.path + "/posts/" + userId).subscribe(res => {
      this.messages = res;
    });
  }
  getDetailProfile(userId) {
    this.http
      .get<any>(this.path + "/events/details/" + userId)
      .subscribe(res => {
        this.events = res;
      });
  }
  getEvents(eid) {
    this.http.get<any>(this.path + "/events/" + eid).subscribe(res => {
      this.events = res;
    });
  }

  postEvents(events) {
    //return this.http.get(this.path + "/event/" + id);
    this.http.post(this.path + "/event", events).subscribe(res => {});
  }

  postMessages(message) {
    this.http.post(this.path + "/post", message).subscribe(res => {});
  }
  getUsers() {
    this.http.get<any>(this.path + "/users").subscribe(res => {
      //console.log(res);
      this.users = res;
    });
  }
  getProfile(id) {
    return this.http.get(this.path + "/profile/" + id);
  }
  getPost(id) {
    return this.http.get(this.path + "/post/" + id);
  }
}

