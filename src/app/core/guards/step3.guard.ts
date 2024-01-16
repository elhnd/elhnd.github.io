import { inject } from '@angular/core';
import { CarStateService } from '../services/car-state.service';
import { map } from 'rxjs';


export const Step3Guard = () => {

    const carState = inject(CarStateService);

    return carState.selectedConfigState$.pipe(
        map(config => {
          if (!config.config) {
            alert("Select a config car before moving to step 3");
            return false;
          }
          return true;
        })
      );
}