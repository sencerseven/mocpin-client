import { Component, Input, OnInit } from '@angular/core';
import { BranchOutput } from '../../core/model/branch-output.model';
import { BranchService } from '../../core/services/branch.service';

@Component({
  selector: '[app-branch-item]',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.css']
})
export class BranchItemComponent implements OnInit {

  @Input('branch') branch:BranchOutput;

  constructor(private branchService:BranchService) { }

  ngOnInit(): void {
  }

  remove(id:number){
    this.branchService.removeBranch(id).subscribe();
  }
}
