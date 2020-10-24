import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoyaltyEditResolverService } from "../core/resolver/loyalty-edit-resolver.service";
import { LoyaltyEditComponent } from './loyalty-manage/loyalty-edit/loyalty-edit.component';
import { LoyaltyItemComponent } from './loyalty-manage/loyalty-item/loyalty-item.component';
import { LoyaltyListComponent } from "./loyalty-manage/loyalty-list/loyalty-list.component";

@NgModule({
    declarations:[
    LoyaltyListComponent,
    LoyaltyItemComponent,
    LoyaltyEditComponent,
    ],
    imports:[
    CommonModule,
    NgbModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forChild([
        {
            path:'',component:LoyaltyListComponent
        },
        {
            path:'add',component:LoyaltyEditComponent
        },
        {
            path:'edit/:id',component:LoyaltyEditComponent,resolve:[LoyaltyEditResolverService]
        }
    ])],
    exports:[]
})
export class LoyaltyModule{

}