import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BranchModule } from "../branch/branch.module";
import { Role } from "../core/enums/Role.enum";
import { CompanyComponent } from './company/company.component';

@NgModule({
    declarations:[CompanyComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path:'', component:CompanyComponent, data: { roles : [Role.ADMIN]}}
        ]),
        BranchModule
    ],
    exports:[]
})
export class CompanyModule{

}