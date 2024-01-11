import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'model', loadComponent: () => import('./features/tesla-model/tesla-model.component').then(c=>c.TeslaModelComponent)
    },
    {
        path: 'config', loadComponent: () => import('./features/tesla-config/tesla-config.component').then(c=>c.TeslaConfigComponent)
    },
    {
        path: 'summary', loadComponent: () => import('./features/summary/summary.component').then(c=>c.SummaryComponent)
    }
];
