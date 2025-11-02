import { ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  ChartBarBig,
  LucideAngularModule, 
  HousePlus,
  LucideIconData, 
  Settings, 
  User, 
  BadgeDollarSign, 
  Activity, 
  UserCheck, 
  Download,
  CreditCard,
  RotateCcwSquare
} from 'lucide-angular';

const icons: Record<string, LucideIconData> = {
  HousePlus,
  ChartBarBig,
  Settings,
  UserCheck,
  User,
  BadgeDollarSign,
  Activity,
  Download,
  CreditCard,
  RotateCcwSquare
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick(icons)),
  ]
};
