import { Component, OnInit, inject } from '@angular/core';
import { TeslaService } from '../../core/services/tesla.service';
import { TeslaModel } from '../../core/interfaces/tesla-model.interface';
import { FormsModule } from '@angular/forms';
import { TeslaColor } from '../../core/interfaces/tesla-color.interface';

@Component({
  selector: 'app-tesla-model',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './tesla-model.component.html',
  styleUrl: './tesla-model.component.scss'
})
export class TeslaModelComponent implements OnInit{

  teslaModels     : TeslaModel[]  = [];
  teslaModel?     : TeslaModel;
  teslaCodeModel!  : string        ;
  teslaColorModel : string        = "";
  teslaColors     : TeslaColor[]  = [];
  teslaService    : TeslaService  = inject(TeslaService);

  ngOnInit(): void {
    this.getModels()
  }

  getModels () {
    this.teslaService.getModels()
    .subscribe(models =>{
      this.teslaModels = models;
    })
  }

  getColor(code: string) {
    this.teslaModel   = this.teslaModels.find(model => model.code === code);
    this.teslaColors  = this.teslaModel ? this.teslaModel.colors : [];
    this.teslaService.changeModel(code);
  }

  getImage(code: string){    
    const image = this.teslaModel ? this.teslaModel.colors.find(color => color.code === code): null;
    const source = image ? image.image : "";
    this.teslaService.changeImage(source);
  }
}
