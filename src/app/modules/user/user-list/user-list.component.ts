import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Account } from '../../core/model/account.model';
import { UserOutput } from '../../core/model/user-output.model';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:UserOutput[];
  myProfile:Account;
  constructor(private userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.account.pipe(take(1)).subscribe(resData =>{
      console.log(resData);
      this.myProfile = resData;
    });
    this.userService.userList.subscribe(resData =>{
      this.users = resData;
    })
  }

}
