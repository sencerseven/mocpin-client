import { AgmCoreModule } from "@agm/core";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MapsComponent } from "../core/components/maps/maps.component";
import { BranchEditResolver } from "../core/resolver/branch-edit-resolver.service";
import { BranchItemComponent } from './branch-item/branch-item.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { EditComponent } from "./edit/edit.component";

@NgModule({
    declarations:[
        EditComponent,
        MapsComponent,
        BranchListComponent,
        BranchItemComponent
        
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        AgmCoreModule,
        NgbModule,
        RouterModule.forChild([
            {
                path:'add',component:EditComponent
            },
            {
                path:'edit/:id',component:EditComponent,resolve:[BranchEditResolver]
            }
           
        ])
    ],
    exports:[
        MapsComponent,
        BranchListComponent
    ]
})
export class BranchModule{

}