import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyInputModel } from '../../core/model/company-input.model';
import { UserInput } from '../../core/model/user-input.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegisterComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  form: FormGroup;
  currentPage:number=1;
  validPage:boolean;

  registeredSuccess:boolean=false;

  constructor(private router:Router,private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      //type: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    });

  } 
  
  onSubmit(){
    if(this.firstFormGroup.valid && this.secondFormGroup.valid){
      const inputCompany:CompanyInputModel =  this.firstFormGroup.value;
      const inputUser:UserInput = this.secondFormGroup.value;

      this.authService.register(inputUser,inputCompany).subscribe(resData =>{
        this.registeredSuccess = true;
        setTimeout(() =>{
          this.router.navigate(['../../']);
        },3000)
      });

    }

  }

  next(page:number){
    this.currentPage = page;
  }


  prev(page:number){
    this.currentPage=page;
  }


  conditionalValidator(condition: (() => boolean), validator: ValidatorFn): ValidatorFn {
    return (control: AbstractControl): {[key: number]: any} => {
      console.log(control);
      this.validPage = control.valid;

      if (!condition()) {
        return null;
      }
      return validator(control);
    }
  }
}
