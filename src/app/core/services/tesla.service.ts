import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TeslaModel } from '../interfaces/tesla-model.interface';
import { TeslaOption } from '../interfaces/tesla-option.interface';

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

  private httpClient      : HttpClient              = inject(HttpClient);
  private teslaImagSource : BehaviorSubject<string> = new BehaviorSubject<string>("");
  private teslaModel      : BehaviorSubject<string> = new BehaviorSubject<string>("");
  currentTeslaImage       : Observable<string>      = this.teslaImagSource.asObservable();
  currentTeslaModel       : Observable<string>      = this.teslaModel.asObservable();

  getModels(): Observable<TeslaModel[]> {
    return this.httpClient.get<TeslaModel[]>('/models');
  }

  getOption(modelCode: string): Observable<TeslaOption> {
    return this.httpClient.get<TeslaOption>(`/options/${modelCode}`);
  }

  changeImage(source: string) {
    this.teslaImagSource.next(source);
  }

  changeModel(model: string) {
    this.teslaModel.next(model);
  }
  // getColor(code: string) {
  //   this.teslaModel   = this.teslaModels.find(model => model.code === code);
  //   this.teslaColors  = this.teslaModel ? this.teslaModel.colors : [];
  // }

  // getImage(code: string){    
  //   const image = this.teslaModel ? this.teslaModel.colors.find(color => color.code === code): null;
  //   const source = image ? image.image : "";
  //   this.teslaService.changeImage(source);
  // }
}
