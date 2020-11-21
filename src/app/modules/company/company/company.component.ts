import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Company } from '../../core/model/company.model';
import { District } from '../../core/model/district.model';
import { Province } from '../../core/model/province.model';
import { BranchService } from '../../core/services/branch.service';
import { CompanyService } from '../../core/services/company.service';
import { PlacesService } from '../../core/services/places.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit,OnDestroy {
 
 subcriptions= new Subscription(); 
  
  provinces:Province[];
  districts:District[];

  form:FormGroup;
  company:Company;
  selectedCompanyImage: File;

  successMessage:string;
  errorMessage:string;

  constructor(private companyService:CompanyService,
    private formBuilder:FormBuilder,
    private placesService:PlacesService,
    private branchService:BranchService) { }

  ngOnInit(): void {
    this.branchService.getAllBranchForList().subscribe();
    this.placesService.getProvinceList();

    let provinceSubscriber:Subscription;
    provinceSubscriber = this.placesService.province.subscribe(resData=>{
      if(resData){
        this.provinces = resData;
      }
    });

    let getOwnCompanySubscriber:Subscription;
    getOwnCompanySubscriber = this.companyService.getOwnCompany().subscribe(resData =>{
     
      
      this.placesService.getDistrictList(resData.province.id).subscribe(data =>{
        this.company = resData;
        this.districts = data;
        console.log(data);
        this.form.setValue({
          name: resData.name,
          type: resData.type,
          district: resData.district.id,
          province: resData.province.id,
        });  
      });
      
      

    });

    this.form =  this.formBuilder.group({
      name: [null,Validators.required],
      type: [null,Validators.required],
      province:[null,null],
      district:[null,null]
    });


    this.subcriptions
      .add(provinceSubscriber)
      .add(getOwnCompanySubscriber);

    
   
  }

  ngOnDestroy(): void
  {
    if(this.form){
      this.form.reset();
    }
    
    this.subcriptions.unsubscribe();
  }


  selectOnChange(provinceId:number){
    this.placesService.getDistrictList(provinceId).subscribe(resData =>{
      this.districts = resData;
      this.form.patchValue({
        district: null
      })
    });
    
  }

  onSubmit(){
    if(this.form.valid){    
      const company:Company = this.form.value;
      company.id = this.company.id;
  
      this.companyService.updateOwnCompany(company,this.selectedCompanyImage).subscribe(resData =>{
        this.successMessage = 'Güncelleme başarı ile gerçekleşti.'
        setTimeout(() =>{
          this.successMessage = '';
        },3000)
      },(error)=>{
        
      });
    }
  }

  onFileChanged(event) {
    if(event.target.files.length === 0){
      return;
    }
    this.selectedCompanyImage = event.target.files[0];
    
    var mimeType = this.selectedCompanyImage.type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedCompanyImage); 
    reader.onload = (_event) => { 
     this.company.logo = ''+reader.result; 
    }

  }

}
