import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.myErrorHandler)
    );
  }

  deleteCompany(id: number): Observable<Company>{
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${id}`)
  }

  myErrorHandler(err): Observable<Company[]> {
    console.error('service error', err);
    return new Observable<Company[]>();
  }
}
