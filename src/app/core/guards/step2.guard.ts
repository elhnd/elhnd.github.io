import { inject } from '@angular/core';
import { TeslaStateService } from '../services/tesla-state.service';
import { map } from 'rxjs';


export const Step2Guard = () => {

    const teslaState = inject(TeslaStateService);

    return teslaState.selectedModelState$.pipe(
        map(model => {
          if (!model.code) {
            alert("Select a car model and color before moving to step 2");
            return false;
          }
          return true;
        })
      );
}