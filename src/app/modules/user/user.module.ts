import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserEditResolver } from "../core/resolver/user-edit-resolver.service";
import { UserResolverService } from "../core/resolver/user-resolver.service";
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from "./user-list/user-list.component";

@NgModule({
    declarations:[
        UserListComponent,
        UserItemComponent,
        UserEditComponent
    ],
    imports:[
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component:UserListComponent, resolve:[UserResolverService]},
            { path: 'add',component:UserEditComponent },
            { path: 'edit/:id',component:UserEditComponent, resolve:[UserEditResolver],data: { editMode:true } }
        ])
    ],
    exports:[]
})
export class UserModule{

}