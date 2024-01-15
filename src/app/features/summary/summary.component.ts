import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeslaService } from '../../core/services/tesla.service';
import { Observable, combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {

  teslaService      : TeslaService        = inject(TeslaService);



  ngOnInit(): void {
  }

}
