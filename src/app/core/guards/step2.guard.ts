import { inject } from '@angular/core';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { CarStateService } from '@core/services';


export const Step2Guard = () => {

    const carState  = inject(CarStateService);
    const router    = inject(Router);

    return carState.selectedModelState$.pipe(
      map(model => {
        if (!model.code) {
          alert("Select a car model and color before moving to step 2");
          router.navigateByUrl("/");
          return false;
        }
        return true;
      })
    );
}