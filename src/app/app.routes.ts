import { Routes } from '@angular/router';
import { Step2Guard } from './core/guards/step2.guard';
import { Step3Guard } from './core/guards/step3.guard';

export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./features/car-view/car-view.component').then(c => c.CarViewComponent),
        children: [
            {
                path: '', loadComponent: () => import('./features/car-model/car-model.component').then(c=>c.CarModelComponent)
            },
            {
                path: 'config', 
                loadComponent: () => import('./features/car-config/car-config.component').then(c=>c.CarConfigComponent),
                canActivate: [() => Step2Guard()],
            },
            {
                path: 'summary', 
                loadComponent: () => import('./features/summary/summary.component').then(c=>c.SummaryComponent),
                canActivate: [() => Step3Guard()],
            },
            {   
                path: '**',
                loadComponent: () => import('./features/not-found-page/not-found-page.component').then(c=>c.NotFoundPageComponent)
            }
        ]
    }
];
