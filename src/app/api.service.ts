import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }



  private baseUrl: string = 'https://reqres.in/api/users';



  private url2: string = 'https://reqres.in/api/unknown';



  private url3: string = 'https://reqres.in/api/users?page=1';



  register(formdata: FormData): Observable<any> {

    return this.http.post<any>(this.baseUrl, formdata);

  }



  getData(): Observable<any> {

    return this.http.get<any>(this.url2);

  }



  getUsers(): Observable<any> {

    return this.http.get<any>(this.url3);

  }
}
