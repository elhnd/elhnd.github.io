import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeslaStateService } from '../services/tesla-state.service';
import { map } from 'rxjs';


export const SteeperGuard = () => {

    const teslaState = inject(TeslaStateService);

    return teslaState.selectedModelState$.pipe(
        map(model => {
          if (!model) {
            //this.router.navigate(['/select-model']); // Redirige vers la page de sélection de modèle si aucun modèle n'est sélectionné
            return false;
          }
          return true;
        })
      );
}