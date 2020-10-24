import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../auth/login/login.component";

@NgModule({
    declarations:[LoginComponent ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path:'',component: LoginComponent},
            
        ]),
        ReactiveFormsModule
    ],
    exports: [RouterModule, ReactiveFormsModule ]
})
export class AuthModule{

}