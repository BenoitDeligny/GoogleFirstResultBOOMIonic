import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../shared/services/user-service.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userService: UserServiceService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token')) {
            const userToken = localStorage.getItem('token');
            const modifiedReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${userToken}`),
            });
            return next.handle(modifiedReq);
        }
        return next.handle(req);
    }
}
