import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Summary, TeslaStateService } from '../../core/services/tesla-state.service';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, AsyncPipe ],
  styleUrl: './summary.component.scss',
  templateUrl: './summary.component.html' 
})
export class SummaryComponent implements OnInit {

  teslaState = inject(TeslaStateService);
  summary!: Summary;

  ngOnInit() {
    this.teslaState.updateSummary()
    .subscribe(data => this.summary = data);
  }
}
