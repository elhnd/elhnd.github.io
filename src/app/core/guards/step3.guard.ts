import { inject } from '@angular/core';
import { TeslaStateService } from '../services/tesla-state.service';
import { map } from 'rxjs';


export const Step3Guard = () => {

    const teslaState = inject(TeslaStateService);

    return teslaState.selectedConfigState$.pipe(
        map(config => {
          if (!config.config) {
            alert("Select a config car before moving to step 3");
            return false;
          }
          return true;
        })
      );
}