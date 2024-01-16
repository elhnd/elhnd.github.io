import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../interfaces/car-model.interface';
import { CarExtras } from '../interfaces/car-extras.interface';

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
