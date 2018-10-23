import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";
import { MessageComponent } from "./message.component";
import { RegisterComponent } from "./register.component";
import { LoginComponent } from "./login.component";
import { UsersComponent } from "./users.component";
import { ProfileComponent } from "./profile.component";
import { PostComponent } from "./post.component";
import { EventMainComponent } from "./fr-event/fr-event-profile-main.component";
import { EventComponent } from "./fr-event/fr-event-profile.component";
import { EventDetailComponent } from "./fr-event/fr-event-detail.component";
import { EventsCreateComponent } from "./fr-event/fr-event-create.component";
import { HomeComponent } from "./home";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./authInterceptor.service";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule
} from "@angular/material";

const routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "post",
    component: PostComponent
  },
  {
    path: "post/:id",
    component: PostComponent
  },
  {
    path: "event",
    component: EventsCreateComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "profile/:id",
    component: ProfileComponent
  },
  {
    path: "events/:id",
    component: EventMainComponent
  },
  {
    path: "events/details/:id",
    component: EventDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent,
    EventComponent,
    EventMainComponent,
    EventDetailComponent,
    HomeComponent,
    EventsCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
