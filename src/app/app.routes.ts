import { Routes } from '@angular/router';
import { TeslaModelComponent } from './features/tesla-model/tesla-model.component';

export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent),
        children: [
            {
                path: 'model', loadComponent: () => import('./features/tesla-model/tesla-model.component').then(c=>c.TeslaModelComponent)
            },
            {
                path: 'config', loadComponent: () => import('./features/tesla-config/tesla-config.component').then(c=>c.TeslaConfigComponent)
            },
            {
                path: 'summary', 
                loadComponent: () => import('./features/summary/summary.component').then(c=>c.SummaryComponent),
                canActivate: [(Tesla: TeslaModelComponent)=>Tesla.teslaCodeModel],
                data : {
                    teslaModel: (Tesla: TeslaModelComponent) => Tesla.teslaCodeModel.toString()
                }
            }
        ]
    }
];
