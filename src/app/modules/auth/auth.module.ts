import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from "@angular/material/stepper";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "./register/register.component";


@NgModule({
    declarations:[LoginComponent,RegisterComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        RouterModule.forChild([
            {path:'',component: LoginComponent},
            {path:'register',component: RegisterComponent},
            
        ]),
        
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
     ]
})
export class AuthModule{

}