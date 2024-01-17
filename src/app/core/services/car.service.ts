import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CarExtras, CarModel } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private httpClient: HttpClient = inject(HttpClient);
    
  getModels(): Observable<CarModel[]> {
    return this.httpClient.get<CarModel[]>('/models');
  }

  getOption(modelCode: string): Observable<CarExtras> {
    return this.httpClient.get<CarExtras>(`/options/${modelCode}`);
  }
}
