import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepperComponent } from '../../shared/components/stepper/stepper.component';
import { ImageViewerComponent } from '../../shared/components/image-viewer/image-viewer.component';
import { AsyncPipe } from '@angular/common';
import { TeslaService, TeslaStateService } from '../../core/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    StepperComponent,
    ImageViewerComponent,
    AsyncPipe
  ],
  templateUrl: './tesla-view.component.html',
  styleUrl: './tesla-view.component.scss'
})
export class TeslaViewComponent implements OnInit{

  teslaService      : TeslaService        = inject(TeslaService);
  teslaState = inject(TeslaStateService);
  image?: string;

  ngOnInit(): void {
      this.teslaState.selectedModelState$
      .subscribe((data) => this.image = data.color?.image);
  }
}
