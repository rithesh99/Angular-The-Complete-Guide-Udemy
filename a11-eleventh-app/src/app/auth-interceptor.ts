import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Request on its way!!!");
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "Bearer xdf98a9sfbaidasd90"),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log("EVENT ", event);
        if (event.type === HttpEventType.Response) {
          console.log("EVENT BODY ", event.body);
        }
      })
    );
  }
}
