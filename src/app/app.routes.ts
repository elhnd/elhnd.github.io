import { Routes } from '@angular/router';
import { Step2Guard } from './core/guards/step2.guard';
import { Step3Guard } from './core/guards/step3.guard';

export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./features/tesla-view/tesla-view.component').then(c => c.TeslaViewComponent),
        children: [
            {
                path: '', loadComponent: () => import('./features/tesla-model/tesla-model.component').then(c=>c.TeslaModelComponent)
            },
            {
                path: 'config', 
                loadComponent: () => import('./features/tesla-config/tesla-config.component').then(c=>c.TeslaConfigComponent),
                canActivate: [() => Step2Guard()],
            },
            {
                path: 'summary', 
                loadComponent: () => import('./features/summary/summary.component').then(c=>c.SummaryComponent),
                canActivate: [() => Step3Guard()],
            }
        ]
    }
];
