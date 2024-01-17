import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CarService, CarStateService, SelectedConfig } from '@core/services';
import { CarVariant } from '@core/interfaces';

@Component({
  selector: 'app-car-config',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  styleUrl:'./car-config.component.scss',
  templateUrl: './car-config.component.html'
})
export class CarConfigComponent implements OnInit {
  
  private carService      = inject(CarService);
  private carStateService = inject(CarStateService); 
  private destroyRef      = inject(DestroyRef);

  configForm      : FormGroup;
  configs?        : CarVariant[];
  selectedConfig! : CarVariant;

  constructor() {
    this.configForm = new FormGroup({
      config: new FormControl(''),
      towHitch: new FormControl({ value: false, disabled: true }),
      yoke: new FormControl({ value: false, disabled: true })
    });
  }

  ngOnInit() {
    this.getOption();
  }

  getOption(){
    this.carStateService.selectedModelState$
    .pipe(
      switchMap(state => this.carService.getOption(state.code as string))
    )
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(options => {
      this.configs = options.configs;
      if(options.towHitch) this.configForm.get('towHitch')?.enable();
      if(options.yoke) this.configForm.get('yoke')?.enable();            
      this.configForm.patchValue(options);
    });
  }

  updateSelectedConfig() {
    this.selectedConfig = this.configForm.value.config;
    this.carStateService.updateConfigState(this.configForm.value as SelectedConfig);
  }
}
