import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { takeWhile } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  errorMessage: string;
  alive = true;


  constructor(private router:Router,private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['', Validators.required]
    })

  }
  ngOnDestroy() {
    this.alive;
  }

  onSubmit(){
    if(this.form.valid){

      let authObservable: Observable<any>;
      

      let formValue=this.form.value;
      authObservable = this.authService.
        login(formValue.userName, formValue.password);
      
      authObservable.pipe(takeWhile(r=>this.alive)).subscribe(resData =>
      {
       this.router.navigate(['../']);
      },
      errorMessage=>{
        console.log(errorMessage);
        this.errorMessage = errorMessage;
      });
    }
  }

  login(){
   

  }

}
