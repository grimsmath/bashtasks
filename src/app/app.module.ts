import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ReportsService } from './reports.service';
import { TasksService } from './tasks.service';
import { IssuesService } from './issues.service';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReportsComponent } from './reports/reports.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'issues',
    component: IssuesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    IssuesComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ReportsService,
    TasksService,
    IssuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
