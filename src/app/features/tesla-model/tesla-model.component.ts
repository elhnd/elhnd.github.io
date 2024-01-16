import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TeslaService } from '../../core/services/tesla.service';
import { TeslaStateService } from '../../core/services/tesla-state.service';
import { TeslaColor, TeslaModel } from '../../core/interfaces';

@Component({
  selector: 'app-tesla-model',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  styleUrl: './tesla-model.component.scss',
  templateUrl: './tesla-model.component.html'
})
export class TeslaModelComponent implements OnInit {
  modelForm: FormGroup;
  models?: TeslaModel[];
  selectedModel!: TeslaModel | null;

  teslaState = inject(TeslaStateService);

  constructor(private teslaService: TeslaService) {
    this.modelForm = new FormGroup({
      selectedModel: new FormControl(''),
      selectedColor: new FormControl({ value: '', disabled: true })
    });
  }

  ngOnInit() {
    this.teslaService.getModels().subscribe(data => {
      this.models = data;
      this.modelForm.get('selectedModel')!.valueChanges.subscribe(value => {
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
