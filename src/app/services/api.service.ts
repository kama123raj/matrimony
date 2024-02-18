import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getDataFromServer<T>(request: string): Observable<T> {
    let url = environment.apiUrl + request;
    return this.http.get<any>(url);
  }
}
