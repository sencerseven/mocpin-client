import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/modules/core/model/account.model';
import { AccountDetail } from '../../core/model/account-detail.model';
import { ProfileInput } from '../../core/model/profile-input.model';
import { AccountService } from '../../core/services/account.service';
import { AuthService } from '../../core/services/auth.service';
import { JWTTokenService } from '../../core/services/jwttoken.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  account: Account;
  role:string;

  constructor(private accountService:AccountService,
    private jwtTokenService:JWTTokenService,
    private authService: AuthService,
    private formBuilder:FormBuilder) { }

  ngOnInit()
  {
    this.authService.account.subscribe(account =>
    {
      this.account = account;
    })
    this.role = this.jwtTokenService.getRole()[0]
    this.form = this.formBuilder.group({
      emailAdress: [this.account.accountDetail.emailAdress,Validators.required],
      firstName: [this.account.accountDetail.firstName,Validators.required],
      lastName: [this.account.accountDetail.lastName,Validators.required],
      password: [],
      reNewPassword:[]
    })

   
  }

  onSubmit(){
    if(this.form.valid){
      if(this.form.value.password == this.form.value.reNewPassword){
        const profileInput:ProfileInput = this.form.value;
        this.accountService.updateProfile(profileInput).subscribe(resData =>{
  
          const accountDetail:AccountDetail = this.form.value;
          accountDetail.id = this.account.accountDetail.id; 
          this.account.accountDetail = accountDetail;
          this.authService.account.next(this.account);
          
          alert('Başarıyla Güncellendi!');
        });
      }else{
        alert('şifre alanı uyuşmamaktadır.');
      }
    }
  }
}
