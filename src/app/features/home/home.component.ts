import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepperComponent } from '../../shared/components/stepper/stepper.component';
import { ImageViewerComponent } from '../../shared/components/image-viewer/image-viewer.component';
import { TeslaService } from '../../core/services/tesla.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TeslaStateService } from '../../core/services/tesla-state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    StepperComponent,
    ImageViewerComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  teslaService      : TeslaService        = inject(TeslaService);
  teslaState = inject(TeslaStateService);
  image?: string;

  ngOnInit(): void {
      this.teslaState.selectedModelState$
      .subscribe((data) => this.image = data.color?.image);
  }


}
