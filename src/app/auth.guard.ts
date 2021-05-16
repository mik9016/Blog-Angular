import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { BlogService } from "./blog.service";

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private BlogService:BlogService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isAuth = this.BlogService.getIsAuth();
        if(!isAuth){
            this.router.navigate(['/login'])
        }
        return isAuth;
    }
    
}