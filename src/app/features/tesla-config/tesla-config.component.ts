import { Component, inject } from '@angular/core';
import { TeslaService } from '../../core/services/tesla.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-tesla-config',
  standalone: true,
  imports: [],
  templateUrl: './tesla-config.component.html',
  styleUrl: './tesla-config.component.scss'
})
export class TeslaConfigComponent {

  teslaService      : TeslaService        = inject(TeslaService);
  teslaModel        : Observable<string>  = this.teslaService.currentTeslaModel;

  ngOnInit(): void {
    this.teslaModel.pipe(
      switchMap(model => this.teslaService.getOption(model))
    ).subscribe(option => {
      console.log(option);
    });
  }
  
}