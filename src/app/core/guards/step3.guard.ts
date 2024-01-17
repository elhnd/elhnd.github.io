import { inject } from '@angular/core';
import { CarStateService } from '../services/car-state.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';


export const Step3Guard = () => {

    const carState  = inject(CarStateService);
    const router    = inject(Router);

    return carState.selectedConfigState$.pipe(
        map(config => {
          if (!config.config) {
            alert("Select a config car before moving to step 3");
            router.navigateByUrl("/config");
            return false;
          }
          return true;
        })
      );
}