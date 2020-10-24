import { AgmCoreModule } from '@agm/core';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AccountModule } from "../../account/account.module";
import { CoreRouting } from "./core.routing";
import { FooterComponent } from "./footer/footer.component";
import { LayoutComponent } from "./layout/layout.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    declarations:[
        LayoutComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
    ],
    imports:[
        CommonModule,
        NgbModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAQ10U1vpL6iGT4kNKv730JhX5__8Ms5pA',
            libraries: ['places']
        }),
        CoreRouting,
        AccountModule,
    ],
    exports:[
        LayoutComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
        
    ]

})
export class CoreModule{

}