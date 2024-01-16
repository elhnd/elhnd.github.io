import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeslaStateService } from '../services/tesla-state.service';
import { map } from 'rxjs';


export const Step3Guard = () => {

    const teslaState = inject(TeslaStateService);

    return teslaState.selectedConfigState$.pipe(
        map(config => {
          if (!config.config) {
            return false;
          }
          return true;
        })
      );
}