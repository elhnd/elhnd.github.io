import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { CarColor } from '../interfaces/car-color.interface';
import { CarVariant } from '../interfaces/car-variant.interface';

export interface SelectedModel {
  code        : string      | null;
  description : string      | null;
  color       : CarColor  | null;
}

export interface SelectedConfig {
  config      : CarVariant | null;
  towHitch    : boolean      | null;
  yoke        : boolean      | null;
}

export interface Summary {
  model: SelectedModel;
  config: SelectedConfig;
  towHitchPrice: number;
  yokPrice: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarStateService {
  private selectedModelState = new BehaviorSubject<SelectedModel>({
    code        : null,
    description : null,
    color       : null
  });

  private selectedConfigState = new BehaviorSubject<SelectedConfig>({
    config      : null,
    towHitch    : null,
    yoke        : null
  });

  selectedModelState$   = this.selectedModelState.asObservable();

  selectedConfigState$  = this.selectedConfigState.asObservable();

  updateModelState(model: SelectedModel) {
    const currentState = this.selectedModelState.value;
    this.selectedModelState.next({ ...currentState, code: model.code, description: model.description, color: model.color });
  }

  updateConfigState(config: SelectedConfig) {
    const currentState = this.selectedConfigState.value;
    this.selectedConfigState.next({ ...currentState, config: config.config, towHitch: config.towHitch, yoke: config.yoke });
  }


  updateSummary(): Observable<Summary> {
    return combineLatest([this.selectedModelState$, this.selectedConfigState$])
      .pipe(
        map(([model, config]) => {
          let summary: Summary = {
            model: model,
            config: config,
            towHitchPrice: 0,
            yokPrice: 0,
            total: 0
          };
  
          const modelPrice = model?.color?.price || 0;
          const configPrice = config?.config?.price || 0;
          let total = modelPrice + configPrice;
          if (config?.towHitch) {
            summary.towHitchPrice = 1000;
            total += summary.towHitchPrice;
          } 
          if (config?.yoke) {
            summary.yokPrice = 1000;
            total += summary.yokPrice;
          } 

          summary.total = total;
          return summary;
        })
      );
  }
  

}
