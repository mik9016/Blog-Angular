import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BlogService } from './blog.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private BlogService: BlogService){}
    intercept(req:HttpRequest<any>, next: HttpHandler) {
        const authToken = this.BlogService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization',"Bearer " + authToken)
        })
        return next.handle(authRequest);
    }
}