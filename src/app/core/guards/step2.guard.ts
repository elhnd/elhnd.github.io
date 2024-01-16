import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeslaStateService } from '../services/tesla-state.service';
import { map } from 'rxjs';


export const Step2Guard = () => {

    const teslaState = inject(TeslaStateService);

    return teslaState.selectedModelState$.pipe(
        map(model => {
          if (!model.code) {
            return false;
          }
          return true;
        })
      );
}