import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CarService } from '../../core/services/car.service';
import { CarStateService } from '../../core/services/car-state.service';
import { CarColor, CarModel } from '../../core/interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-car-model',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  styleUrl: './car-model.component.scss',
  templateUrl: './car-model.component.html',
})
export class CarModelComponent implements OnInit {

  private carState    = inject(CarStateService);
  private carService  = inject(CarService);
  private destroyRef  = inject(DestroyRef);

  modelForm     : FormGroup;
  models?       : CarModel[];
  selectedModel!: CarModel | null;

  constructor() {
    this.modelForm = new FormGroup({
      selectedModel: new FormControl(''),
      selectedColor: new FormControl({ value: '', disabled: true })
    });
  }

  ngOnInit() {
    this.getModels();
  }

  getModels () {
    this.carService.getModels()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(data => {
      this.models = data;
      this.modelForm.get('selectedModel')!.valueChanges
      .subscribe(value => {
        this.selectedModel = value;        
        if (value) {
          this.modelForm.get('selectedColor')!.enable();
        }
      });
    });
  }

  updateSelectedModel() {
    const carFormValue    = this.modelForm.value;
    const color: CarColor = carFormValue.selectedColor;
    const model: CarModel = carFormValue.selectedModel;
    this.carState.updateModelState({code: model.code, description: model.description, color: color});
  }
}
