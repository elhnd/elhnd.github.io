import { Routes } from '@angular/router';
import { TeslaModelComponent } from './features/tesla-model/tesla-model.component';
import { SteeperGuard } from './core/guards/stepper-guard';

export const routes: Routes = [

    {
        
        //canActivateChild: [() => AuthGuard()],
        path:'',
        canActivateChild: [() => SteeperGuard()],
        loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent),
        children: [
            {
                path: 'model', loadComponent: () => import('./features/tesla-model/tesla-model.component').then(c=>c.TeslaModelComponent)
            },
            {
                path: 'config', 
                loadComponent: () => import('./features/tesla-config/tesla-config.component').then(c=>c.TeslaConfigComponent),
                canActivate: [() => SteeperGuard()],
            },
            {
                path: 'summary', 
                loadComponent: () => import('./features/summary/summary.component').then(c=>c.SummaryComponent),
            }
        ]
    }
];
