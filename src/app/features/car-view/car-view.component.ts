import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { StepperComponent } from '@shared/components/stepper/stepper.component';
import { ImageViewerComponent } from '@shared/components/image-viewer/image-viewer.component';
import { CarStateService } from '@core/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    StepperComponent,
    ImageViewerComponent,
    AsyncPipe
  ],
  templateUrl: './car-view.component.html',
  styleUrl: './car-view.component.scss',
})
export class CarViewComponent implements OnInit{

  private carState  = inject(CarStateService);
  image?: string;

  ngOnInit(): void { 
    this.carState.selectedModelState$
    .subscribe((data) => this.image = data.color?.image);
  }
}
