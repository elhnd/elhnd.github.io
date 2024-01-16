import { HttpRequest, HttpInterceptorFn,HttpHandlerFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
  
  export const errorsInterceptor: HttpInterceptorFn = (
    request: HttpRequest<unknown>,
    next: HttpHandlerFn
  ) => {

    return next(request).pipe(
        catchError((error) => {
            alert(error.message)
            return throwError(() => error)
        })
    )
  };
