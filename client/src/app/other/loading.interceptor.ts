import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppService } from '../app.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private app: AppService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.app.busy();
    return next.handle(req).pipe(finalize(() => this.app.free()));
  }

}
