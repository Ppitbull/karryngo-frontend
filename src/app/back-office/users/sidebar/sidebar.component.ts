import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'app/shared/services/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user', title: 'Profile',  icon:'pe-7s-user', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/trips', title: 'Trips',  icon:'pe-7s-car', class: '' },
    { path: '/services', title: 'Services',  icon:'pe-7s-news-paper', class: '' },
    { path: '/chats', title: 'Chats',  icon:'pe-7s-chat', class: '' },
    { path: '/requests', title: 'Requests',  icon:'pe-7s-up-arrow', class: '' },
    { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    // public authService: AuthService,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
