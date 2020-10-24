import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchOutput } from '../../core/model/branch-output.model';
import { UserInput } from '../../core/model/user-input.model';
import { BranchService } from '../../core/services/branch.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  form:FormGroup;
  branches:BranchOutput[];
  editMode:boolean = false;
  branchesFormControl = new FormControl();

  radioRole:string;

  constructor(private route:ActivatedRoute,private router:Router,private branchService:BranchService,private userService:UserService) { }

  ngOnInit(): void {
    
    this.editMode = this.route.snapshot.paramMap.get('id') ? true : false;
    this.branchService.getAllBranchForList().subscribe(resData =>{
      this.branches = resData;
    });
    
    let userName = '';
    let firstName = '';
    let lastName = '';
    let role = '';

    if(this.editMode){
      this.userService.user.subscribe(resData =>{
        this.radioRole = resData.roleType[0];
        userName = resData.userName;
        firstName = resData.firstName;
        lastName = resData.lastName;
        role = this.radioRole;
        

        if(resData.branchId){
          this.branchesFormControl = new FormControl(resData.branchId,Validators.required)
          
           
        }
       
      });
   }

   this.form = new FormGroup({
    userName:new FormControl(userName,Validators.required),
    password:new FormControl('',this.conditionalValidator(
      (()=>!this.editMode),Validators.required)
    ),
    rePassword:new FormControl('',this.conditionalValidator(
      (()=>!this.editMode),Validators.required)
    ),
    firstName:new FormControl(firstName,Validators.required),
    lastName:new FormControl(lastName,Validators.required),
    role:new FormControl(role),
    branches: this.branchesFormControl
    });
  }

 

  save(){
    if(this.form.valid){
      console.log(this.form.value);
      const registerForm:UserInput= this.form.value
      if(this.editMode){
        registerForm.id = this.route.snapshot.params['id'];
      }

      this.userService.registerUserForCompany(registerForm).subscribe(resData =>{
        this.router.navigate(['/settings/user']);
      });
      
    }else{
      console.log('not valid');
      
    }
  }

  handleChange(event){
  
    this.radioRole = event;
    if((event == 'STAFF' || event == 'SUPERVISOR' )&& !this.branches){
      this.branchService.getAllBranchForList().subscribe();
    }
    
  }
  conditionalValidator(condition: (() => boolean), validator: ValidatorFn): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (! condition()) {
        return null;
      }
      return validator(control);
    }
  }
 
}
