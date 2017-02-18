import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: any = [];

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    this.issuesService.getAllIssues().subscribe(issues => {
      this.issues = issues;
    })
  }
}
