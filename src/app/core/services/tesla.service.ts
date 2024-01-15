import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TeslaModel } from '../interfaces/tesla-model.interface';
import { TeslaOption } from '../interfaces/tesla-option.interface';
import { TeslaExtras } from '../interfaces/tesla-extras.interface';

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

    private httpClient      : HttpClient              = inject(HttpClient);
    
    getModels(): Observable<TeslaModel[]> {
        return this.httpClient.get<TeslaModel[]>('/models');
    }

    getOption(modelCode: string): Observable<TeslaExtras> {
        return this.httpClient.get<TeslaExtras>(`/options/${modelCode}`);
    }

}
