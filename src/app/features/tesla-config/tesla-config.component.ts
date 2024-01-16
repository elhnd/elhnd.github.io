import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { TeslaVariant } from '../../core/interfaces';
import { SelectedConfig, TeslaService, TeslaStateService } from '../../core/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tesla-config',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  styleUrl:'./tesla-config.component.scss',
  templateUrl: './tesla-config.component.html'
})
export class TeslaConfigComponent implements OnInit {
  
  private teslaService      = inject(TeslaService);
  private teslaStateService = inject(TeslaStateService); 
  private destroyRef        = inject(DestroyRef);

  configForm      : FormGroup;
  configs?        : TeslaVariant[];
  selectedConfig! : TeslaVariant;

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
    this.teslaStateService.selectedModelState$
    .pipe(
      switchMap(state => this.teslaService.getOption(state.code as string))
    )
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(options => {
      this.configs = options.configs;      
      this.configForm.patchValue(options);
    });
  }

  updateSelectedConfig() {
    this.selectedConfig = this.configForm.value.config;
    this.teslaStateService.updateConfigState(this.configForm.value as SelectedConfig);
  }
}
