import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Overview } from './pages/overview/overview';
import { Setting } from './pages/setting/setting';
import { Reports } from './pages/reports/reports';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'd/overview',
        pathMatch: 'full'
    },
    {
        path: 'd',
        component: Dashboard,
        children: [
            {
                path: 'overview',
                component: Overview,
            },
            {
                path: 'reports',
                component: Reports,
            },
            {
                path: 'settings',
                component: Setting,
            },
            {
                path: "**",
                component: NotFound
            }
        ]
    },
];
