import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BranchOutput } from 'src/app/modules/core/model/branch-output.model';
import { loyaltyInput } from 'src/app/modules/core/model/loyalty-input.model';
import { BranchService } from 'src/app/modules/core/services/branch.service';
import { LoyaltyService } from 'src/app/modules/core/services/loyalty.service';

@Component({
  selector: 'app-loyalty-edit',
  templateUrl: './loyalty-edit.component.html',
  styleUrls: ['./loyalty-edit.component.css']
})
export class LoyaltyEditComponent implements OnInit,OnDestroy {
  
  subscription:Subscription;
  
  ngOnDestroy(): void
  {
    if(this.subscription)
    this.subscription.unsubscribe();
  }

  id:number;
  loyaltyForm: FormGroup;
  editMode:boolean;

  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  @ViewChild('ngForm') form:NgForm;

  constructor(private loyaltyService:LoyaltyService,
              private router:Router,
              private route:ActivatedRoute,
              private branchService:BranchService) { }

  ngOnInit(): void {
    this.editMode = this.route.snapshot.paramMap.get('id') ? true : false;
    this.branchService.getAllBranchForList().subscribe();
    this.branchService.companyBranches.subscribe(resData =>{
      if(resData){
        this.dropdownList =resData.map((val)=>{
          return {
            item_id: val.id,
            item_text: val.name
          }
        });
      }
    });

   const IDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettings = IDropdownSettings;
    
     
    this.initForm();


    
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  initForm(){
    
    let loyaltyName;
    let loyaltyDesc;

    if(this.editMode){
     this.subscription = this.route.data.subscribe(resData=>{
        this.id = resData[0].id;
        loyaltyName = resData[0].name;
        loyaltyDesc = resData[0].description;
        this.selectedItems = resData[0].branches.map((branch:BranchOutput)=>{
          return {
            item_id: branch.id,
            item_text: branch.name
          }
        });
     });
    }

    this.loyaltyForm = new FormGroup({
      loyaltyName:new FormControl(loyaltyName,Validators.required),
      loyaltyDesc:new FormControl(loyaltyDesc,Validators.required)
    })

    
  }

  addLoyalty(){
    if(this.loyaltyForm.valid && this.selectedItems.length >0){
      console.log(this.selectedItems);
      let arr=[];
      for(let i in this.selectedItems){
        arr.push(this.selectedItems[i].item_id);
      }
      var merge:loyaltyInput = {
        'id':this.id,
        'name':this.loyaltyForm.value.loyaltyName,
        'description':this.loyaltyForm.value.loyaltyDesc,
        'status':'ACTIVE',
        'branchList':arr
      }
      console.log(JSON.stringify(merge));
      this.loyaltyService.addLoyaltyCard(merge).subscribe(resData =>{
        
           this.router.navigate(['/loyalty-card']);
        });
      
    }
    
    
    
  }

}
