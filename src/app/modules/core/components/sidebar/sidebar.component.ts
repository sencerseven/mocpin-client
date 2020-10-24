import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTTokenService } from '../../services/jwttoken.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role:string;
}
export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '', role: 'ALL' },
    { path: '/loyalty-card', title: 'Loyalty Card', icon: 'ni ni-credit-card text-primary', class: '', role: 'ALL' },
    { path: '/settings/account', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '', role: 'ALL' },
    { path: '/settings/company', title: 'Company',  icon:'ni-single-02 text-yellow', class: '', role: 'ADMIN' },
    { path: '/settings/user', title: 'Add User',  icon:'ni-single-02 text-yellow', class: '', role: 'ALL' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,private jwtTokenService:JWTTokenService) { 

  }

  ngOnInit() {
    this.initMenu();
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  initMenu(){
        this.menuItems = ROUTES.filter(menuItem => menuItem.role == 'ALL' 
                                        || menuItem.role == this.jwtTokenService.getRole()[0]);
 
  }
}

