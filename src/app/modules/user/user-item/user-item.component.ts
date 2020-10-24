import { Component, Input, OnInit } from '@angular/core';
import { UserOutput } from '../../core/model/user-output.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user:UserOutput;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  remove(userId:number){
   this.userService.removeUserForCompany(userId).subscribe(resData =>{
     this.userService.getCompanyUsers().subscribe();
   })
  }
}
