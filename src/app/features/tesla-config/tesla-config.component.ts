import { Component, inject } from '@angular/core';
import { TeslaService } from '../../core/services/tesla.service';
import { Observable, config, switchMap } from 'rxjs';
import { TeslaExtras } from '../../core/interfaces/tesla-extras.interface';
import { FormsModule } from '@angular/forms';
import { TeslaVariant } from '../../core/interfaces/tesla-variant.interface';

@Component({
  selector: 'app-tesla-config',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './tesla-config.component.html',
  styleUrl: './tesla-config.component.scss'
})
export class TeslaConfigComponent {

    teslaService      : TeslaService        = inject(TeslaService);

    ngOnInit(): void {
    }
}