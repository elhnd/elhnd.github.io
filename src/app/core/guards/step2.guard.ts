import { inject } from '@angular/core';
import { CarStateService } from '../services/car-state.service';
import { map } from 'rxjs';


export const Step2Guard = () => {

    const carState = inject(CarStateService);

    return carState.selectedModelState$.pipe(
        map(model => {
          if (!model.code) {
            alert("Select a car model and color before moving to step 2");
            return false;
          }
          return true;
        })
      );
}