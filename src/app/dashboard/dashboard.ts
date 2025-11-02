import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { MenuItem } from './menu.model';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive, NgFor, RouterOutlet],
  templateUrl: './dashboard.html',
})

export class Dashboard {
  menus: MenuItem[] = [
    {
      icon: 'house-plus',
      title: 'Overview',
      path: '/d/overview'
    },
    {
      icon: 'chart-bar-big',
      title: 'Report',
      path: '/d/reports'
    },
    {
      icon: 'settings',
      title: 'Settings',
      path: '/d/settings'
    }
  ]
}