import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getValidApi():Observable<any>{
    const validApiUrl='https://jsonplaceholder.typicode.com/posts/';
    return this.http.get(validApiUrl);
  }

  getFakeApi(): Observable<any>{
    const fakeApiUrl='something';
    return this.http.get(fakeApiUrl);
  }
}
