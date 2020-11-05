import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mapsModel } from '../../core/components/maps/maps.component';
import { BranchInput } from '../../core/model/branch-input.model';
import { BranchOutput } from '../../core/model/branch-output.model';
import { BranchService } from '../../core/services/branch.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editMode:boolean;

  branchInput:BranchInput;
  formBranch:FormGroup;
  branchOutput:BranchOutput;
  mapsModel:mapsModel;
  constructor(private route:ActivatedRoute,private router:Router ,private branchService:BranchService) { }

  ngOnInit(): void {
    this.editMode = this.route.snapshot.paramMap.get('id') ? true : false;
    this.formBranch = new FormGroup({
      name: new FormControl('',Validators.required)
    });

    if(this.editMode){
      this.route.data.subscribe(resData =>{
        this.branchOutput = (<BranchOutput>resData[0]);

        this.formBranch.patchValue({name:this.branchOutput.name});
        
        this.branchInput = {
          id: this.branchOutput.id,
          fullAddress : this.branchOutput.fullAddress,
          latitude : this.branchOutput.latitude,
          longatitue : this.branchOutput.longatitue,
          name : this.branchOutput.name
       }

        this.mapsModel = {
          address:this.branchOutput.fullAddress,
          latitude:this.branchOutput.latitude,
          longitude:this.branchOutput.longatitue
        };
      })
    }
    
    
    

  }

  setLatitude(item:mapsModel){
    debugger;
    if(!this.editMode){
      this.branchInput = {
        id: null,
        fullAddress : item.address,
        latitude : item.latitude,
        longatitue : item.longitude,
        name : null
     }
    }else{
      this.branchInput.latitude = item.latitude;
      this.branchInput.longatitue = item.longitude;
      this.branchInput.fullAddress = item.address;
    }
    

  }

  addBranch(){
    if(this.formBranch.valid){
      console.log( this.branchInput);
      debugger;
      this.branchInput.name = this.formBranch.value.name;
      this.branchService.updateBranch(this.branchInput).subscribe(resData =>{
        this.router.navigate(['/settings/company']);
      });


    }
  }

}
