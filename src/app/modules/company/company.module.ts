import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BranchModule } from "../branch/branch.module";
import { CompanyComponent } from './company/company.component';

@NgModule({
    declarations:[CompanyComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path:'', component:CompanyComponent}
        ]),
        BranchModule
    ],
    exports:[]
})
export class CompanyModule{

}