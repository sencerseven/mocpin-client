import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Role } from "../core/enums/Role.enum";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
    declarations:[ SettingsComponent ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path:'', component:SettingsComponent, children:[
                {path: 'account',loadChildren: 'src/app/modules/account/account.module#AccountModule'},
                {path: 'company',loadChildren: 'src/app/modules/company/company.module#CompanyModule',data: { roles : [Role.ADMIN]}},
                {path: 'branch',loadChildren: 'src/app/modules/branch/branch.module#BranchModule'},
                {path: 'user',loadChildren: 'src/app/modules/user/user.module#UserModule'}
            ]}
        ])
    ],
    exports:[]
})
export class SettingsModule{

}