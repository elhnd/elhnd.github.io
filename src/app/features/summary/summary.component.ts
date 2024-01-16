import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Summary, TeslaStateService } from '../../core/services/tesla-state.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ ReactiveFormsModule, AsyncPipe, CurrencyPipe ],
  styleUrl: './summary.component.scss',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  teslaState          = inject(TeslaStateService);
  private destroyRef  = inject(DestroyRef);
  summary!: Summary;

  ngOnInit() {
    this.teslaState.updateSummary()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(data => this.summary = data);
  }
}
