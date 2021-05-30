import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { ArticlePageComponent } from './article-page/article-page.component';
import { OopsComponent } from '../app/oops/oops.component';


import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthInterceptor } from "./auth-interceptor";
import { AuthGuard } from "./auth.guard";
import { SpinnerComponent } from './spinner/spinner.component';



const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "createpost", component: CreatePostComponent, canActivate:[AuthGuard] },
  { path: "myposts", component: MyPostsComponent, canActivate:[AuthGuard] },
  { path: "myposts/:id", component: ArticlePageComponent},
  { path: "post/:id", component: ArticlePageComponent },
  { path: "**", component: OopsComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostComponent,
    FooterComponent,
    RegisterComponent,
    CreatePostComponent,
    MyPostsComponent,
    LoginComponent,
    ArticlePageComponent,
    SpinnerComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports:[MatSidenavModule,MatToolbarModule],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true},AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
