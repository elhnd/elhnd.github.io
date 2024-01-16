import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TeslaService } from '../../core/services/tesla.service';
import { TeslaStateService } from '../../core/services/tesla-state.service';
import { TeslaColor, TeslaModel } from '../../core/interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tesla-model',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  styleUrl: './tesla-model.component.scss',
  templateUrl: './tesla-model.component.html',
})
export class TeslaModelComponent implements OnInit {

  private teslaState    = inject(TeslaStateService);
  private teslaService  = inject(TeslaService);
  private destroyRef    = inject(DestroyRef);

  modelForm     : FormGroup;
  models?       : TeslaModel[];
  selectedModel!: TeslaModel | null;

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
    this.teslaService.getModels()
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
    const teslaFormValue    = this.modelForm.value;
    const color: TeslaColor = teslaFormValue.selectedColor;
    const model: TeslaModel = teslaFormValue.selectedModel;
    this.teslaState.updateModelState({code: model.code, description: model.description, color: color});
  }
}
