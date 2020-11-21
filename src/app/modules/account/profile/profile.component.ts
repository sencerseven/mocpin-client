import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/modules/core/model/account.model';
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
  private account: Account;
  role:string;

  selectedProfileImage: File;

  successMessage:string;

  constructor(private accountService:AccountService,
    private jwtTokenService:JWTTokenService,
    private authService: AuthService,
    private formBuilder:FormBuilder) { }

  ngOnInit()
  {
     this.authService.account.subscribe(resData =>{
      this.account= JSON.parse(JSON.stringify(resData));
    });
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
        this.accountService.updateProfile(profileInput,this.selectedProfileImage).subscribe(resData =>{
          this.account.accountDetail = resData;
          this.authService.updateAccount(this.account);
          
          this.successMessage = 'Güncelleme başarı ile gerçekleşti.'
          setTimeout(() =>{
            this.successMessage = '';
          },3000)
        });
      }else{
        alert('şifre alanı uyuşmamaktadır.');
      }
    }
  }

  onFileChanged(event){
    if(event.target.files.length === 0){
      return;
    }
    this.selectedProfileImage  = event.target.files[0];
    
    var mimeType = this.selectedProfileImage.type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedProfileImage); 
    reader.onload = (_event) => { 
      this.account.accountDetail.images = ''+reader.result; 
      debugger;
    }


  }
}
