import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TeslaModel } from '../interfaces/tesla-model.interface';
import { TeslaOption } from '../interfaces/tesla-option.interface';

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

  httpclient: HttpClient = inject(HttpClient);

  getModels(): Observable<TeslaModel[]> {
    return this.httpclient.get<TeslaModel[]>('/models');
  }

  getOption(id: number): Observable<TeslaOption> {
    return this.httpclient.get<TeslaOption>(`/options/${id}`);
  }
}
