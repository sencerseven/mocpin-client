import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { LayoutComponent } from "./layout/layout.component";
import { MapsComponent } from './maps/maps.component';

const routes: Routes=[
    {
        path:'', 
        component: LayoutComponent,
        children:[
            { path: '',component:DashboardComponent},
            { path: 'maps',component:MapsComponent},
            { path: 'settings', loadChildren:'src/app/modules/settings/settings.module#SettingsModule'},
            { path: 'loyalty-card', loadChildren:'src/app/modules/loyalty/loyalty.module#LoyaltyModule'}
        
        ]
    },
]

@NgModule({
    imports:[
        CommonModule,
        NgbModule,
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule,
        CommonModule
    ]
})
export class CoreRouting{

}