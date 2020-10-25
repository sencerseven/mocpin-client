import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Role } from './modules/core/enums/Role.enum';
import { AuthGuard } from './modules/core/guard/auth.guard';


const routes: Routes =[
 
  {
    path: '',
    loadChildren: './modules/core/components/core.module#CoreModule',
    canActivate:[AuthGuard],
    data: { roles : [Role.ADMIN,Role.SUPERVISOR]}
    
  },
  {
    path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
