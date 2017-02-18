import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IssuesService {

  constructor(private http: Http) { }

  getAllIssues() {
    return this.http.get('/api/issues')
      .map(res => res.json());
  }
}
