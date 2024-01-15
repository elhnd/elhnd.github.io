import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TeslaModel } from '../../core/interfaces/tesla-model.interface';
import { TeslaService } from '../../core/services/tesla.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tesla-model',
  standalone: true,
imports: [CommonModule ,ReactiveFormsModule],
  template: `
    <form [formGroup]="modelForm">
      <select formControlName="selectedModel">
        <option *ngFor="let model of models" [ngValue]="model">{{ model.description }}</option>
      </select>

      <select formControlName="selectedColor" *ngIf="selectedModel?.colors">
        <option *ngFor="let color of selectedModel?.colors" [ngValue]="color">{{ color.description }}</option>
      </select>
    </form>
  `
})
export class TeslaModelComponent implements OnInit {
  modelForm: FormGroup;
  models?: TeslaModel[];
  selectedModel!: TeslaModel | null;

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
        } else {
          this.modelForm.get('selectedColor')!.disable();
        }
      });
    });
  }
}
