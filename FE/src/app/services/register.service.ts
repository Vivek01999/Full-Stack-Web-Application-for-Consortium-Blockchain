import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private readonly http: HttpClient) { }

  registerFabUserIdentity(payload: any) {
    const url = `${environment.API_URL}/registerUser`;
    return this.http.post(url, payload)
      .pipe(
        tap((result: any) => {
          return result;
        })
      );
  }

  getFabUserIdentityList(payload: any) {
    const url = `${environment.API_URL}/getUserList`;
    return this.http.post(url, payload)
      .pipe(
        tap((result: any) => {
          return result;
        })
      );
  }

  deleteFabUserIdentity(payload: any) {
    const url = `${environment.API_URL}/deleteUser`;
    return this.http.post(url, payload)
      .pipe(
        tap((result: any) => {
          return result;
        })
      );
  }

  updateFabUserIdentity(payload: any) {
    const url = `${environment.API_URL}/updateFabricUser`;
    return this.http.post(url, payload)
      .pipe(
        tap((result: any) => {
          return result;
        })
      );
  }
}
