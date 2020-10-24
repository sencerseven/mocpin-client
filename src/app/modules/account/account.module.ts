import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
    declarations:[
        ProfileComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path:'',component:ProfileComponent}
        ]),
        
    
    ],
    exports:[
        RouterModule, ReactiveFormsModule,FormsModule
    ]

})
export class AccountModule{

}