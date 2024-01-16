import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { TeslaVariant } from '../../core/interfaces';
import { SelectedConfig, TeslaService, TeslaStateService } from '../../core/services';

@Component({
  selector: 'app-tesla-config',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  styleUrl:'./tesla-config.component.scss',
  templateUrl: './tesla-config.component.html'
})
export class TeslaConfigComponent implements OnInit {
  configForm: FormGroup;
  configs?: TeslaVariant[];
  selectedConfig!: TeslaVariant;

  constructor(private teslaService: TeslaService, private teslaStateService: TeslaStateService) {
    this.configForm = new FormGroup({
      config: new FormControl(''),
      towHitch: new FormControl(false),
      yoke: new FormControl(false)
    });
  }

  ngOnInit() {
    this.teslaStateService.selectedModelState$
    .pipe(
      switchMap(state => this.teslaService.getOption(state.code as string))
    )
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
