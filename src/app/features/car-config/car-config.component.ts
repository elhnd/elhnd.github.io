import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { CarVariant } from '../../core/interfaces';
import { SelectedConfig, CarService, CarStateService } from '../../core/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private destroyRef        = inject(DestroyRef);

  configForm      : FormGroup;
  configs?        : CarVariant[];
  selectedConfig! : CarVariant;

  constructor() {
    this.configForm = new FormGroup({
      config: new FormControl(''),
      towHitch: new FormControl(false),
      yoke: new FormControl(false)
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
      this.configForm.patchValue(options);
    });
  }

  updateSelectedConfig() {
    this.selectedConfig = this.configForm.value.config;
    this.carStateService.updateConfigState(this.configForm.value as SelectedConfig);
  }
}
