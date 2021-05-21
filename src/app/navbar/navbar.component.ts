import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { BlogService } from "../blog.service";

@Component({
  selector: "blog-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  userIsAuthenticated: boolean = false;
  private authListenerSubs: Subscription;
  public menuIsActive: boolean = false;

  constructor(private BlogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.userIsAuthenticated = this.BlogService.getIsAuth();

    this.authListenerSubs = this.BlogService.getAuthStatusListener().subscribe(
      (isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      }
    );
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

  onLogout() {
    this.BlogService.logout();
    this.userIsAuthenticated = false;
    this.router.navigate(["/"]);
  }

  toggleMenu() {
    this.menuIsActive = !this.menuIsActive;
  }
}
