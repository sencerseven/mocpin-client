import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { BranchOutput } from '../../core/model/branch-output.model';
import { BranchService } from '../../core/services/branch.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branches:BranchOutput[];

  constructor(private branchService:BranchService) { }

  ngOnInit(): void {

    let branchSubscriber:Subscription;
    branchSubscriber = this.branchService.companyBranches.subscribe(resData =>{
      this.branches = resData;
    })
  }

}
