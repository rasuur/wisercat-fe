import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/API';
import { Filter } from '../model/Filter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  constructor(private http: HttpClient) {
  }

  getAllFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(API.filters.getAllFilters);
  }

  addFilter(filter: Filter) {
    return this.http.post(API.filters.addFilter, filter, { responseType: 'json'});
  }
}
